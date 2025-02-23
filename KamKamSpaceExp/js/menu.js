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

      this.bg = this.add.sprite(0, 0, 'bg');
      if(localStorage.getItem("score") === null){
        localStorage.setItem("score",0)
      }      
      var text = 
      this.startTxt = this.add.bitmapText(x, 400, 'minecraftia', 'TAP TO START', 24); 
      this.startTxt.anchor.setTo(0.5, 0.5);
      
      this.startTxt2 = this.add.bitmapText(x, 430, 'minecraftia', 'HIGH SCORE: '+parseInt(localStorage.getItem("score")), 18); 
      this.startTxt2.anchor.setTo(0.5, 0.5);      

      this.input.onDown.add(this.onDown, this);
      
      this.music = this.add.audio('KamKamScoreOutro(8Bit)',1,true);
      this.music.play();


      
              
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
      this.music.stop();
      this.game.state.start('game');
    }
  };

  window[''] = window[''] || {};
  window[''].Menu = Menu;

}());
