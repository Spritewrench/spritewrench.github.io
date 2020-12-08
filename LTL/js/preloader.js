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
            this.load.image('mainBG', 'assets/LTL-Establishing shot.jpg');
            this.load.image('block2', 'assets/Block_2/Block-2.jpg');
            
          
            this.load.image('Block-2_1A', 'assets/Block_2/Block-2_1A.png');
            this.load.image('Block-2_1B', 'assets/Block_2/Block-2_1B.png');
          
            this.load.image('Block-2_2A', 'assets/Block_2/Block-2_2A.png');
            this.load.image('Block-2_2B', 'assets/Block_2/Block-2_2B.png');      
          
            this.load.image('Block-2_3A', 'assets/Block_2/Block-2_3A.png');
            this.load.image('Block-2_3B', 'assets/Block_2/Block-2_3B.png');
          
            this.load.image('Block-2_4A', 'assets/Block_2/Block-2_4A.png');
            this.load.image('Block-2_4B', 'assets/Block_2/Block-2_4B.png');
          
            this.load.image('Block-2_5A', 'assets/Block_2/Block-2_5A.png');
            this.load.image('Block-2_5B', 'assets/Block_2/Block-2_5B.png');      
          
            this.load.image('Block-2_6A', 'assets/Block_2/Block-2_6A.png');
            this.load.image('Block-2_6B', 'assets/Block_2/Block-2_6B.png');          
          
            this.load.image('Block-2_7A', 'assets/Block_2/Block-2_7A.png');
            this.load.image('Block-2_7B', 'assets/Block_2/Block-2_7B.png');             
          
            this.load.image('overlay', 'assets/overlay.png');
            this.load.image('kids', 'assets/kids.png');
            this.load.image('chat', 'assets/chat.png');
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