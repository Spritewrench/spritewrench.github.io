(function() {
  'use strict';

  function Lose() {
    this.titleTxt = null;
    this.startTxt = null;
    this.music = null;
    this.isPlaying = false;
  }

  Lose.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.bg = this.add.sprite(0, 0, 'bt');
      this.bg.alpha = 0;
      
      if(typeof parseInt(localStorage.getItem("score")) == 'undefined' || typeof parseInt(localStorage.getItem("score")) == 'null'){
        localStorage.setItem("score",0)
      }      
      var random = Math.floor((Math.random()*5)+1);
      var text =""
      var text2 =""
      switch(random){
        case 1:
          text ='"Kam Kam, what you doing?"'
          text2 ='"Time for dinner"'
          break;
        case 2:
          text ='"Kam Kam, \n you see the time?"'
          text2 ='"I said go and bathe"'          
          break;
        case 3:
          text ='"Kam Kam!"'
          text2 ='"Come and do \n your homework"'          
          break;
        case 4:
          text ='"Young lady ..."'
          text2 ='"I said lights out!"'          
          break;
        case 5:
          text ='"Pickney!"'
          text2 ='"Tap di nize"'          
          break;
      }
      this.startTxt = this.add.bitmapText(x, 150, 'minecraftia', text, 18); 
      this.startTxt.align = 'center';
      this.startTxt.anchor.setTo(0.5, 0.5);
      this.startTxt.alpha = 0;
      this.startTxt2 = this.add.bitmapText(x, 190, 'minecraftia', text2, 18);
      this.startTxt2.align = 'center';
      this.startTxt2.anchor.setTo(0.5, 0.5);      
      this.startTxt2.alpha =0
      this.startTxt3 = this.add.bitmapText(x, 50, 'minecraftia', 'CLICK TO CONTINUE', 24);
      this.startTxt3.anchor.setTo(0.5, 0.5);      
      this.startTxt3.alpha =0      
      
  

      this.input.onDown.add(this.onDown, this);
      
      this.music = this.add.audio('KamKamScoreOutro(8Bit)',1,true);
      
      if(!this.isPlaying){
        this.music.play(); 
        this.isPlaying = true;
      }

      
              
    },

    update: function () {
       this.bg.alpha += (1 - this.bg.alpha)*0.01;  
        if(this.bg.alpha > 0.8){
           this.startTxt.alpha += (1 - this.startTxt.alpha)*0.03;  
        }
        if(this.startTxt.alpha > 0.8){
           this.startTxt2.alpha += (1 - this.startTxt2.alpha)*0.03;  
        } 
        if(this.startTxt2.alpha > 0.8){
           this.startTxt3.alpha += (1 - this.startTxt3.alpha)*0.02;  
        }       
       if(!this.music.isPlaying){    this.music.play();  }
    },

    onDown: function () {
      if(this.startTxt3.alpha > 0.8){
      this.music.stop();
      this.game.state.start('menu');         
         }

    }
  };

  window[''] = window[''] || {};
  window[''].Lose = Lose;

}());
