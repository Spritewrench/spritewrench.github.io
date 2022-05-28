(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    
    preload: function () {
      this.load.image('preloader', 'assets/preloader.webp');
      this.load.image('loadBG', 'assets/loadBG.webp');      
    },

    create: function () {
      //this.game.scale.pageAlignHorizontally = true;
      //this.game.input.maxPointers = 1;
      //this.game.scale.scaleMode = Phaser.ScaleManager.EXAC
      //this.scale.setUserScale(0.5,0.5)
      //this.game.scale.setMinMax(window.innerWidth,window.innerHeight,window.innerWidth,window.innerHeight)  
      //this.game.resolution = 1

      //console.log(this.game.width)
      //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //Phaser.ScaleManager.USER_SCALE
      
      

       alert(window.innerHeight)
      if(navigator.userAgentData.mobile === true){
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
      }      
      else{
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;     
        if(screen.width < 1024){
          //alert(screen.width)  
          this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;   
          this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
  
        } 
      }
      
      //this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
      this.game.renderer.renderSession.roundPixels = true;
      

    
         

      
      //this.game.scale.setMinMax(window.innerWidth,window.innerHeight,window.innerWidth,window.innerHeight)  
      //this.game.scale.refresh();
      //var dpi = window.devicePixelRatio;
      //const roundHalf = num => Math.round(num * 2) / 2
      //const DPR = roundHalf(window.devicePixelRatio)      
      //setDPI(DPR)
      this.game.state.start('preloader');
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Boot = Boot;

}());

