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
      this.load.image('car2', 'assets/blue_door_closed.png');
      this.load.image('car1_ready', 'assets/red_door_closed_ready.png');
      this.load.image('car2_ready', 'assets/blue_door_closed_ready.png');      
      this.load.spritesheet('ship', 'assets/KamKam-spaceship.png',32,39);
      
      
      this.load.image('image', 'assets/afterImage.png');
      this.load.spritesheet('FF', 'assets/FF.png',32,39);


      this.load.image('car1-side', 'assets/camry_red.png');
      this.load.image('car2-side', 'assets/camry_blue.png');

      this.load.image('player1', 'assets/player1.png');
      this.load.image('stats1', 'assets/stats1.png');

      this.load.image('player2', 'assets/player2.png');
      this.load.image('stats2', 'assets/stats2.png');      
      
      this.load.image('debris1', 'assets/pink_door_closed.png');
      this.load.image('debris2', 'assets/white_door_closed.png');
      this.load.image('debris3', 'assets/green_door_closed.png');
      this.load.image('debris4', 'assets/green_door_closed.png');
      this.load.image('debris5', 'assets/pink_door_closed.png');
      this.load.image('debris6', 'assets/pink_door_closed.png');

      this.load.image('endFlag', 'assets/endFlag.png');
      this.load.image('roadLine', 'assets/roadLine.png');
      
      this.load.image('fgLine', 'assets/fgLine.png');
      this.load.image('bgLine', 'assets/bgLine.png');
      
      this.load.image('bg', 'assets/TitleScreen_WithLogo.png');
      this.load.image('gamebg', 'assets/simpleBG.png');
      this.load.image('bt', 'assets/bedTime.png');
      
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
      this.load.audio('bgMusic', ['assets/whip-110235.mp3']); 
      this.load.audio('carHonk', ['assets/571348__99021905683__car-horn-honking.wav']); 
      this.load.audio('carRev', ['assets/rev.wav']); 
      this.load.audio('carRevLong', ['assets/revLong.wav']); 
      
      
      
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
