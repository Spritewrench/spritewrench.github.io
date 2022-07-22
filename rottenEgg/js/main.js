window.onload = function () {
  'use strict';

  var game,
      ns = window['simplewar'], 
      config = {
      width: 640,
      height: 1136,
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
    game.state.start('boot');
};
