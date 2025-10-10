window.onload = function () {
  'use strict';
  
  var game
    , ns = window['simplewar'];


    var config = {
      width: 1920,
      height: 1080,
      renderer: Phaser.WEBGL,
      transparent: false,
      enableDebug: false,
      multiTexture: false,
      resolution: 1,
      pixelArt: true,
      antialias: true,
      roundPixels: false,
      autoFocus: true,
      clearBeforeRender: true
    };   
  game = new Phaser.Game(config);


  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu); 
  game.state.add('loadSave', ns.LoadSave); 
  game.state.add('game', ns.Game); 

  game.state.start('boot');
};
