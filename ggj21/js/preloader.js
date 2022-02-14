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

            
            this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
            this.load.image('map', 'assets/bgLine.png');
            this.load.image('player', 'assets/player.png');
          
            this.load.image('attack', 'assets/axe_t.png');
            this.load.image('eat', 'assets/food_t.png');
          
            this.game.load.audio('bgMusic', ['assets/Hillside_Duppy.mp3']);
        }
        , create: function () {
            this.asset.cropEnabled = false;
        }
        , update: function () {
            if (!!this.ready) {
                this.game.state.start('menu');
            }
        }
        , onLoadComplete: function () {
            this.ready = true;
        }
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Preloader = Preloader;
}());