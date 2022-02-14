(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    
    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
    },

    create: function () {
      this.game.input.maxPointers = 1;
      // this.game.disableVisibilityChange = true;

      if (this.game.device.desktop) {
        this.game.scale.pageAlignHorizontally = true;
      } else {
        Phaser.ScaleManager.prototype.setScreenSize = Phaser.ScaleManager.prototype.updateLayout;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        //this.game.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
        this.game.scale.minWidth =  320;
        this.game.scale.minHeight = 480;
        this.game.scale.maxWidth = 320;
        this.game.scale.maxHeight = 480;
        this.game.scale.forceLandscape = true;
        this.game.scale.pageAlignHorizontally = true;
        
        this.game.scale.setScreenSize(true);
        
      }
      this.game.state.start('preloader');
    }
  };

  window[''] = window[''] || {};
  window[''].Boot = Boot;

}());

