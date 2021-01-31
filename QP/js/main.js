window.onload = function () {
  'use strict';

  var game
    , ns = window['simplewar'];

    game = new Phaser.Game(window.innerWidth, window.innerHeight,Phaser.CANVAS, 'shiny-gauntlet-game');
    
    game.state.add('boot', ns.Boot);
    game.state.add('preloader', ns.Preloader);
    game.state.add('menu', ns.Menu); 
    game.state.add('choose', ns.Choose);
    game.state.add('credit', ns.Credit);
    game.state.add('leaderboard', ns.Leaderboard);
    game.state.add('game', ns.Game);
    game.state.add('win', ns.Win);
    game.state.add('lose', ns.Lose);   
    game.state.add('warden', ns.Warden);   
    game.state.add('craft', ns.Craft); 
    game.state.add('rank', ns.Rank); 
    game.state.add('hub', ns.Hub); 
    game.state.add('archive', ns.Archive); 
    game.state.add('shop', ns.Shop); 
    console.log("where we going? main "+localStorage.getItem('state'))
    game.state.start('boot');
    //console.log(game)
};
