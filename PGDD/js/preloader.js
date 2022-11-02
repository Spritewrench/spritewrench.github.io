(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }
    Preloader.prototype = {
        preload: function () {
            this.asset = this.add.sprite(320, 240, 'preloader');
            this.asset.anchor.setTo(0.5, 0.5);
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.load.setPreloadSprite(this.asset);
            //this.load.audio('bg', ['sound/LeavingYouBehind.ogg']);
            
            this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
          
            this.load.image('tile', 'assets/tile.png');
            this.load.image('face', 'assets/face.png');
            this.load.image('tile2', 'assets/tile2.png');

            this.load.image('face1', 'assets/face-1.png');
            this.load.image('face2', 'assets/face-2.png');
            this.load.image('face3', 'assets/face-3.png');
            this.load.image('face4', 'assets/face-4.png');
            this.load.image('face5', 'assets/face-5.png');
            this.load.image('face6', 'assets/face-11.png');
            this.load.image('face7', 'assets/face-12.png');
            this.load.image('face8', 'assets/face-13.png');
            this.load.image('face9', 'assets/face-14.png');
                     
          
            this.load.image('bg', 'assets/bg.png');
            this.load.image('title', 'assets/title.png');

            this.load.image('title1-2', 'assets/title1-2.png');
            this.load.image('title1-3', 'assets/title1-3.png');

            this.load.image('title2', 'assets/title2.png');

            this.load.image('screen', 'assets/screen.png');

            this.load.image('wrench', 'assets/wrench.png');


            this.load.image('drG_neutral', 'assets/drG_neutral.png');
            this.load.image('drG_happy', 'assets/drG_happy.png');
            this.load.image('drG_sad', 'assets/drG_sad.png');
            this.load.image('speechCon', 'assets/speechCon.png');

            this.load.image('modOverlay', 'assets/modOverlay.png');

            this.load.image('selectedChoice', 'assets/selectedChoice.png');
            this.load.image('unselectedChoice', 'assets/unselectedChoice.png');            

            //sound
            this.game.load.audio('boop', ['assets/audio/boop.wav']); 
            this.game.load.audio('titleBG', ['assets/audio/title.ogg']); 
            this.game.load.audio('gameBG', ['assets/audio/cocktail-music-110969.ogg']); 
          
        }
        , create: function () {
            this.asset.cropEnabled = false;
        }
        , update: function () {
            if (!!this.ready) {
                sessionStorage.setItem("level","1")
                sessionStorage.setItem("musicPlay", 1 ) 
                sessionStorage.setItem("aiCount", 1 ) 
                this.game.state.start('game');  
            }
        }
        , onLoadComplete: function () {
            this.ready = true;
        }
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Preloader = Preloader;
}());