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

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/player.png');
      this.load.spritesheet('ship', 'assets/KamKam-spaceship.png',32,39);
      
      
      this.load.image('image', 'assets/afterImage.png');
      this.load.spritesheet('FF', 'assets/FF.png',32,39);
      
      this.load.image('debris1', 'assets/Astroid-01.png');
      this.load.image('debris2', 'assets/Astroid-02.png');
      this.load.image('debris3', 'assets/Astroid-03.png');
      this.load.image('debris4', 'assets/Astroid-04.png');
      this.load.image('debris5', 'assets/Astroid-05.png');
      this.load.image('debris6', 'assets/Astroid-06.png');
      
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
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (this.ready===true ) {
        
        document.getElementById("-game").focus();
        this.game.state.start('menu');
        
      }
      else{
        
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window[''] = window[''] || {};
  window[''].Preloader = Preloader;

}());
