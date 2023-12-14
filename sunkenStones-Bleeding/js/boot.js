
(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    
    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
      this.game.load.video('seaBG', 'assets/video/Sunken Stones Animated BG Loop.mp4');
    },

    create: function () {
      this.game.input.maxPointers = 1;
      // this.game.stage.disableVisibilityChange = true;
      //this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
      this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
      
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;     


      if (this.game.device.desktop) {
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;         
      } else {
        this.game.stage.scale.forceLandscape = true;
        this.scale.forceOrientation(true, false)
        /*
        this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
        this.game.stage.scale.minWidth =  480;
        this.game.stage.scale.minHeight = 260;
        this.game.stage.scale.maxWidth = 640;
        this.game.stage.scale.maxHeight = 480;
        this.game.stage.scale.forceLandscape = true;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;     
        this.game.stage.scale.setScreenSize(true);
        */
      }
      this.game.state.start('preloader');
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Boot = Boot;

}());

