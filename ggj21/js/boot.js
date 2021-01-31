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
      this.game.scale.setMinMax(window.innerWidth,window.innerHeight,window.innerWidth,window.innerHeight) 
      this.game.state.start('preloader');
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Boot = Boot;

}());

