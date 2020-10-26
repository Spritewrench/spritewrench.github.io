window.onload = function () {
  'use strict';

  var game
    , ns = window['simplewar'];
    
    game = new Phaser.Game(window.innerWidth, window.innerHeight,Phaser.CANVAS, 'unuh-game');
    
    game.state.add('boot', ns.Boot);
    game.state.add('preloader', ns.Preloader);
    game.state.add('menu', ns.Menu); 
    game.state.start('boot');
    console.log(game)
};
