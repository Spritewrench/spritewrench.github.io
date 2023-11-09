(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
    this.music = null;
    this.isPlaying = false;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      //this.bg = this.add.sprite(0, 0, 'bg');
      //this.bg.width = this.game.width
      //this.bg.height = this.game.height

      if(localStorage.getItem("score") === null){
        localStorage.setItem("score",0)
      }      
      var text = 

      this.titleTxt = this.add.bitmapText(x, y-200, 'minecraftia', 'HIGHWAY DASH', 48); 
      this.titleTxt.anchor.setTo(0.5, 0.5);

      this.startTxt = this.add.bitmapText(x, this.game.height-150, 'minecraftia', 'TAP TO START', 24); 
      this.startTxt.anchor.setTo(0.5, 0.5);

      var time = parseInt(localStorage.getItem("score"))
      let minutes = Math.floor((time / 60)/60);
      let extraSeconds = Math.floor((time / 60)) % 60//this.score % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;


      
      this.startTxt2 = this.add.bitmapText(x, this.startTxt.y+30, 'minecraftia', 'BEST TIME: '+ minutes + " : " + extraSeconds, 18); 
      this.startTxt2.anchor.setTo(0.5, 0.5);      

      this.input.onDown.add(this.onDown, this);
      
      this.music = this.add.audio('KamKamScoreOutro(8Bit)',1,true);
      //this.music.play();


      
              
    },

    update: function () {
      this.startTxt.alpha += (0 - this.startTxt.alpha)*0.05;
      if(this.startTxt.alpha <= 0.1){
         this.startTxt.alpha = 1;
      }
        
       //if(!this.music.isPlaying){    this.music.play();  }
    },

    onDown: function () {
      //this.music.stop();
      //this.music.play();
      //this.music.stop();
      this.game.state.start('driveSelect');
    }
  };

  window[''] = window[''] || {};
  window[''].Menu = Menu;

}());
