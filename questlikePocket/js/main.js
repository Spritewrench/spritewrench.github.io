window.onload = function () {
  'use strict';

  var game
    , ns = window['simplewar'];

    var config = {
      width: window.innerWidth,
      height: window.innerHeight,
      renderer: Phaser.CANVAS,
      transparent: false,
      enableDebug: true,
      resolution: 1,
      pixelArt: true,
      antialias: true,
      autoFocus: true
    };
    
    game = new Phaser.Game(config);
    game.preserveDrawingBuffer = true;
    


    //game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    //game.scale.setMinMax(window.innerWidth,window.innerHeight,window.innerWidth,window.innerHeight)  
    //game = new Phaser.Game(window.innerWidth, window.innerHeight,Phaser.AUTO, 'shiny-gauntlet-game');

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
    game.state.add('faction', ns.Faction);  
    game.state.add('craft', ns.Craft); 
    game.state.add('rank', ns.Rank); 
    game.state.add('hub', ns.Hub); 
    game.state.add('archive', ns.Archive); 
    game.state.add('shop', ns.Shop); 
    console.log("where we going? main "+localStorage.getItem('state'))
    game.state.start('boot');
    //console.log(game)
};
