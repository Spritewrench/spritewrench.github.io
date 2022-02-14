(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    
    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
    },

    create: function () {
      this.game.input.maxPointers = 1;
      this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
      //this.game.stage.scaleMode = Phaser.ScaleManager.SHOW_ALL
      this.game.scale.setMinMax(window.innerWidth,window.innerHeight,window.innerWidth,window.innerHeight)  
      //this.game.stage.scaleMode = this.StageScaleMode.SHOW_ALL
      // this.game.stage.disableVisibilityChange = true;

      if (this.game.device.desktop) {
        //this.game.scale.setMinMax(1280,800,1920,1080)  
        //this.game.stage.scale.pageAlignHorizontally = true;
      } else {
        //this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;

        //this.game.stage.scale.setScreenSize(true);
      }
      this.game.state.start('preloader');
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Boot = Boot;

}());

