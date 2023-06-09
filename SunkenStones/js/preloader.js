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
            this.load.image('mon-1', 'assets/mon-1.png');

            this.load.image('crew-1', 'assets/crew-0.png');
            this.load.image('crew-2', 'assets/crew-1.png');
            this.load.image('crew-3', 'assets/crew-2.png');
            this.load.image('crew-4', 'assets/crew-3.png');
            this.load.image('crew-5', 'assets/crew-4.png');

            this.load.image('buff_1', 'assets/buff_1.png');
            this.load.image('buff_2', 'assets/buff_2.png');

            this.load.image('freeCounter', 'assets/freeCounter.png');

            this.load.image('crewSelect', 'assets/crewSelect.png');
            this.load.image('crewDeployed', 'assets/crewDeployed.png');

            this.load.image('stamina', 'assets/stamina.png');
            this.load.image('heart', 'assets/heart.png');

            this.load.image('turnMarker', 'assets/turnMarker.png');
          
            this.load.image('bg', 'assets/bg.png');
            this.load.image('ui_back', 'assets/ui_back.png');

            this.load.image('selectInfoPanel', 'assets/selectInfoPanel.png');

            this.load.image('ui_cap_health', 'assets/cap_health.png');
            this.load.image('ui_deploy_pool', 'assets/deploy_pool.png');

            this.load.image('ui_endTurn_Button', 'assets/endTurn_button.png');

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