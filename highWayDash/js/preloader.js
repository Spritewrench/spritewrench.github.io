(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
    
    
  }

  Preloader.prototype = {

    preload: function () {
      
      this.asset = this.add.sprite(160, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);


      this.load.image('player', 'assets/player.png');
      
      this.load.image('car1', 'assets/red_door_closed.png');
      this.load.spritesheet('ship', 'assets/KamKam-spaceship.png',32,39);
      
      
      this.load.image('image', 'assets/afterImage.png');
      this.load.spritesheet('FF', 'assets/FF.png',32,39);
      
      this.load.image('debris1', 'assets/green_door_closed.png');
      this.load.image('debris2', 'assets/pink_door_closed.png');
      this.load.image('debris3', 'assets/white_door_closed.png');
      this.load.image('debris4', 'assets/yellow_door_closed.png');
      this.load.image('debris5', 'assets/white_door_closed.png');
      this.load.image('debris6', 'assets/white_door_closed.png');
      
      this.load.image('fgLine', 'assets/fgLine.png');
      this.load.image('bgLine', 'assets/bgLine.png');
      
      this.load.image('bg', 'assets/TitleScreen_WithLogo.png');
      this.load.image('gamebg', 'assets/Game_Background_2.png');
      this.load.image('bt', 'assets/bedTime.png');
      
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
      this.load.audio('KamKamGameMusic', ['assets/KamKamGameMusic.ogg']); 
      this.load.audio('KamKamScoreOutro(8Bit)', ['assets/KamKamScoreOutro(8Bit).ogg']); 
      
      this.load.audio('shieldDown', ['assets/62362__fons__zap-1.ogg']); 
      this.load.audio('shieldUp', ['assets/220173__gameaudio__spacey-1up-power-up.ogg']); 
      
      
      this.load.onFileComplete.add(this.fileComplete, this);
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);  
      this.input.onDown.add(this.onDown, this);
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if(this.ready){
        
      }
    },

    onDown: function () {
      if(this.ready){
        this.music = this.add.audio('KamKamScoreOutro(8Bit)',1,true);
        this.music.play();
        this.music.stop();
        this.game.state.start('menu');         
      }
      //this.music.stop();

    },

    fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
      //console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
    },

    onLoadComplete: function () {
      this.ready = true;
      this.game.state.start('menu');
        var x = this.game.width / 2
        , y = this.game.height / 2;        
        //this.startTxt = this.add.bitmapText(x, y+170, 'minecraftia', 'CLICK TO START', 24);
        //this.startTxt.anchor.setTo(0.5, 0.5);       
    }
  };

  window[''] = window[''] || {};
  window[''].Preloader = Preloader;

}());
