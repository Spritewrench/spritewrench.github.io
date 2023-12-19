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
            this.load.image('hero', 'assets/hero.png');
            this.load.image('mon', 'assets/mon.png');

            this.load.image('stamina', 'assets/stamina.png');
            this.load.image('heart', 'assets/heart.png');
          
            this.load.image('bg', 'assets/bg.png');
            this.load.image('listenmi', 'assets/listenMi.png');
            this.load.image('wrench', 'assets/wrench.png');
            this.load.image('ggj', 'assets/ggj.png');

            this.load.image('overlay', 'assets/overlay.png');
            this.load.image('heroHuge', 'assets/heroHuge.png');
            this.load.image('monHuge', 'assets/monHuge.png');
            this.load.image('textBox', 'assets/textBox.png');
            this.load.image('textBoxFoe', 'assets/textBoxFoe.png');
            
          
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