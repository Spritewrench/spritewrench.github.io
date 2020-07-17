window.onload = function () {
  'use strict';

  var game
    , ns = window['simplewar'];

    game = new Phaser.Game(360, 640, Phaser.CANVAS, 'shiny-gauntlet-game');
    game.state.add('boot', ns.Boot);
    game.state.add('preloader', ns.Preloader);
    game.state.add('menu', ns.Menu); 
    game.state.add('choose', ns.Choose);
    game.state.add('credit', ns.Credit);
    game.state.add('leaderboard', ns.Leaderboard);
    game.state.add('game', ns.Game);
    game.state.add('win', ns.Win);
    game.state.add('lose', ns.Lose);    
    game.state.start('boot');
    console.log(game)
};
