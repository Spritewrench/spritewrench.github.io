(function() {
  'use strict';

  function driveSelect() {
    this.titleTxt = null;
    this.startTxt = null;
    this.music = null;
    this.isPlaying = false;
  }

  driveSelect.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.bg = this.add.sprite(0, 0, 'gamebg');
      this.bg.width = this.game.width
      this.bg.height = this.game.height

      if(localStorage.getItem("score") === null){
        localStorage.setItem("score",0)
      }      
      var text = 
      
      this.titleTxt = this.add.text(x, y-300, 'CAR 1', {font: '56px Kaph-Regular',fill: '#fff', align: 'center'});//this.startTxt = this.add.bitmapText(x, this.game.height-100, 'minecraftia', ''+this.score+'ft', 12);//this.add.bitmapText(x, y-300, 'minecraftia', 'CAR 1', 48); 
      this.titleTxt.anchor.setTo(0.5, 0.5);

      this.rightArrow = this.add.text(this.game.width-25, y-100, '>', {font: '48px Kaph-Regular',fill: '#fff', align: 'center'});//this.startTxt = this.add.bitmapText(x, this.game.height-100, 'minecraftia', ''+this.score+'ft', 12);//this.add.bitmapText(this.game.width-25, y-100, 'minecraftia', '>', 48); 
      this.rightArrow.anchor.setTo(0.5, 0.5);
      this.rightArrow.inputEnabled = true;
      this.rightArrow.events.onInputDown.add(this.next, this);       
      
      this.leftArrow = this.add.text(25, y-100, '<', {font: '48px Kaph-Regular',fill: '#fff', align: 'center'});//this.startTxt = this.add.bitmapText(x, this.game.height-100, 'minecraftia', ''+this.score+'ft', 12);//this.add.bitmapText(25, y-100, 'minecraftia', '<', 48); 
      this.leftArrow.anchor.setTo(0.5, 0.5);      
      this.leftArrow.inputEnabled = true;
      this.leftArrow.events.onInputDown.add(this.prev, this);            


      this.car = this.add.sprite(x-50, y-150, 'car1-side');
      this.car.anchor.setTo(0.5, 0.5);
      this.car.width = 400
      this.car.height= 200
   

      this.player = this.add.sprite(25, y+40, 'player');


      this.stats = this.add.sprite(x+10, y+40, 'stats');
 

      this.carKey = 1;

      this.startTxt = this.add.text(x, this.game.height-150, 'TAP TO SELECT DRIVER', {font: '24px Kaph-Regular',fill: '#fff', align: 'center'});//this.startTxt = this.add.bitmapText(x, this.game.height-100, 'minecraftia', ''+this.score+'ft', 12);
      this.startTxt.anchor.setTo(0.5, 0.5);           

      //this.startTxt = this.add.bitmapText(x, this.game.height-150, 'minecraftia', 'TAP TO SELECT DRIVER', 24); 
      //this.startTxt.anchor.setTo(0.5, 0.5);
      this.startTxt.inputEnabled = true;
      this.startTxt.events.onInputDown.add(this.onDown, this);          

      var time = parseInt(localStorage.getItem("score"))
      let minutes = Math.floor((time / 60)/60);
      let extraSeconds = Math.floor((time / 60)) % 60//this.score % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;


    
 
      //this.input.onDown.add(this.onDown, this);
      
      this.music = this.add.audio('KamKamScoreOutro(8Bit)',1,true);
      //this.music.play();
      this.startGame = 0;


      this.carRev = this.add.audio('carRevLong',1,false);
      
      this.carRev.volume = 0.50;        
              
    },

    update: function () {
      this.startTxt.alpha += (0 - this.startTxt.alpha)*0.05;
      if(this.startTxt.alpha <= 0.1){
         this.startTxt.alpha = 1;
      }

      this.car.loadTexture("car"+this.carKey+"-side")
      this.player.loadTexture("player"+this.carKey)
      this.stats.loadTexture("stats"+this.carKey)

      this.titleTxt.text = "CAR "+this.carKey
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
    next: function () {
        //this.music.stop();
        //this.music.play();
        //this.music.stop();
        this.carKey++
        if(this.carKey > 2){
            this.carKey = 1;
        }
    },
    prev: function () {
        //this.music.stop();
        //this.music.play();
        //this.music.stop();
        this.carKey--
        if(this.carKey < 1){
            this.carKey = 2;
        }
    },    
    onDown: function () {
      //this.music.stop();
      //this.music.play();
      //this.music.stop();
      //this.game.state.start('game');
      this.startGame = 1;
      localStorage.setItem("carKey", this.carKey)
      this.carRev.play();
    }
  };

  window[''] = window[''] || {};
  window[''].driveSelect = driveSelect;

}());
