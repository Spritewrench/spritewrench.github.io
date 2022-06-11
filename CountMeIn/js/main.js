window.onload = function () {
  'use strict';

  var game
    , ns = window['simplewar'];

    var config = {
      width: 1136,
      height: 640,
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
    game.state.add('game', ns.Game);
    game.state.add('win', ns.Win);
    game.state.add('lose', ns.Lose);   

    console.log("where we going? main "+localStorage.getItem('state'))
    game.state.start('boot');
    //console.log(game)
};
