window.onload = function () {
  'use strict';

  var game
    , ns = window[''];

    var config = {
      width: 480,
      height: 853,
      renderer: Phaser.WEBGL,
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
  game.state.add('lose', ns.Lose);
  game.state.add('game', ns.Game);

  game.state.start('boot');
};