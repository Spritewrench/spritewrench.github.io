window.onload = function () {
  'use strict';

  var game
    , ns = window['simplewar'];
    

    var config = {
      width: 412,
      height: 824,
      renderer: Phaser.CANVAS,
      mouseWheel: true,
      transparent: false,
      enableDebug: true,
      resolution: 1,
      pixelArt: true,
      antialias: true,
      autoFocus: true
    };


    game = new Phaser.Game(config);
   
    game.state.add('boot', ns.Boot);
    game.state.add('preloader', ns.Preloader);
    game.state.add('menu', ns.Menu); 
    game.state.start('boot');
    console.log(game)
};
