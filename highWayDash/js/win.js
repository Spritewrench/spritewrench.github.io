(function() {
  'use strict';

  function win() {
    this.titleTxt = null;
    this.startTxt = null;
    this.music = null;
    this.isPlaying = false;
  }

  win.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.bg = this.add.sprite(0, 0, 'gamebg');
      this.bg.width = this.game.width
      this.bg.height = this.game.height

      if(localStorage.getItem("score") === null){
        localStorage.setItem("score",0)
      }      

      
      this.titleTxt = this.add.text(x, y-300, "YOU'VE COMPLETED YOUR DASH!", {font: '22px Kaph-Regular',fill: '#fff', align: 'center'});//this.startTxt = this.add.bitmapText(x, this.game.height-100, 'minecraftia', ''+this.score+'ft', 12);//this.add.bitmapText(x, y-300, 'minecraftia', 'CAR 1', 48); 
      this.titleTxt.anchor.setTo(0.5, 0.5); 

      this.textTimer = 0;
      this.currentScore = parseInt(localStorage.getItem("currentScore"))

      var time = this.currentScore
      let minutes = Math.floor((time / 60)/60);
      let extraSeconds = Math.floor((time / 60)) % 60//this.score % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;      

      this.titleTxt2 = this.add.text(x, y-200, "YOUR TIME IS: "+ minutes + " : " + extraSeconds, {font: '22px Kaph-Regular',fill: '#fff', align: 'center'});//this.startTxt = this.add.bitmapText(x, this.game.height-100, 'minecraftia', ''+this.score+'ft', 12);//this.add.bitmapText(x, y-300, 'minecraftia', 'CAR 1', 48); 
      this.titleTxt2.anchor.setTo(0.5, 0.5); 
      this.titleTxt2.alpha = 0;

      time = parseInt(localStorage.getItem("score"))
      minutes = Math.floor((time / 60)/60);
      extraSeconds = Math.floor((time / 60)) % 60//this.score % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;      

      this.titleTxt3 = this.add.text(x, y-100, "YOUR BEST IS: "+ minutes + " : " + extraSeconds, {font: '22px Kaph-Regular',fill: '#fff', align: 'center'});//this.startTxt = this.add.bitmapText(x, this.game.height-100, 'minecraftia', ''+this.score+'ft', 12);//this.add.bitmapText(x, y-300, 'minecraftia', 'CAR 1', 48); 
      this.titleTxt3.anchor.setTo(0.5, 0.5);       
      this.titleTxt3.alpha = 0;
      

 

      this.startTxt = this.add.text(x, y, 'TAP TO RETURN TO MENU', {font: '24px Kaph-Regular',fill: '#fff', align: 'center'});//this.startTxt = this.add.bitmapText(x, this.game.height-100, 'minecraftia', ''+this.score+'ft', 12);
      this.startTxt.anchor.setTo(0.5, 0.5);           

      //this.startTxt = this.add.bitmapText(x, this.game.height-150, 'minecraftia', 'TAP TO SELECT DRIVER', 24); 
      //this.startTxt.anchor.setTo(0.5, 0.5);
      this.startTxt.inputEnabled = true;
      this.startTxt.events.onInputDown.add(this.onDown, this);          


    
 
      //this.input.onDown.add(this.onDown, this);
      
      this.music = this.add.audio('KamKamScoreOutro(8Bit)',1,true);
      //this.music.play();
      this.startGame = 0;

      this.carRev = this.add.audio('carRev',1,false);
      
      this.carRev.volume = 0.50;  
      
      
              
    },

    update: function () {
      
      if(this.textTimer == 75){
        this.startTxt.alpha = 1
      }
      else if(this.textTimer < 75){
        this.startTxt.alpha = 0
      }

      if(this.textTimer > 75){
        this.startTxt.alpha += (0 - this.startTxt.alpha)*0.05;
        if(this.startTxt.alpha <= 0.1){
          this.startTxt.alpha = 1;
       }
      }


      
      this.textTimer++;

      if(this.textTimer > 25){
        this.titleTxt2.alpha = 1;
      }


      if(this.textTimer > 50){
        this.titleTxt3.alpha = 1;
      }      
      //this.car.loadTexture("car"+this.carKey+"-side")
      //this.player.loadTexture("player"+this.carKey)
      //this.stats.loadTexture("stats"+this.carKey)

      //this.titleTxt.text = "CAR "+this.carKey
      if(this.startGame == 1){
        this.car.x += (this.game.width+200 - this.car.x)*0.05;
        this.rightArrow.alpha = 0; 
        this.leftArrow.alpha = 0;
        if(this.car.x > this.game.width+150 ){
          this.game.state.start('game');
        }
        
      }
        
       //if(!this.music.isPlaying){    this.music.play();  }
    },

    onDown: function () {
      //this.music.stop();
      //this.music.play();
      //this.music.stop();
      this.game.state.start('menu');
      this.carRev.play();

    }
  };

  window[''] = window[''] || {};
  window[''].win = win;

}());
