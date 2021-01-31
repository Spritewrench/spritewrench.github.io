window.onload = function () {
  'use strict';

  var game
    , ns = window['simplewar'];

  game = new Phaser.Game(800, 800, Phaser.AUTO, 'simplewar-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu); 
  game.state.add('levelSelect', ns.LevelSelect); 
  game.state.add('game', ns.Game);
  game.state.add('win', ns.Win);
  game.state.add('lose', ns.Lose);    
  game.state.start('boot');
};
