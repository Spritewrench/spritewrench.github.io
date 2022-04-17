(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    
    preload: function () {
      this.load.image('preloader', 'assets/preloader.webp');
      this.load.image('loadBG', 'assets/loadBG.webp');      
    },

    create: function () {
      //this.game.input.maxPointers = 1;
      //this.game.scale.scaleMode = Phaser.ScaleManager.EXAC
      //this.scale.setUserScale(0.5,0.5)
      //this.game.scale.setMinMax(window.innerWidth,window.innerHeight,window.innerWidth,window.innerHeight)  
      //this.game.resolution = 1

      //console.log(this.game.width)
      //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //Phaser.ScaleManager.USER_SCALE
      
      
      //this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
      //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      //this.game.scale.pageAlignHorizontally = true;
      //this.game.scale.pageAlignVertically = true;      
      
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.renderer.renderSession.roundPixels = true;
      
      this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;       

      
      //this.game.scale.setMinMax(window.innerWidth,window.innerHeight,window.innerWidth,window.innerHeight)  
      //this.game.scale.refresh();
      var dpi = window.devicePixelRatio;
      const roundHalf = num => Math.round(num * 2) / 2
      const DPR = roundHalf(window.devicePixelRatio)      
      setDPI(DPR)
      this.game.state.start('preloader');
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Boot = Boot;

}());

