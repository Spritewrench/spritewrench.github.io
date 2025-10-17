(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }
    Preloader.prototype = {
        preload: function () {
            //this.asset = this.add.sprite(320, 240, 'preloader');
            //this.asset.anchor.setTo(0.5, 0.5);
            this.bg = this.add.sprite(0, 0, 'intro');
            this.timer = 100



      //this.bg = this.add.sprite(0, 0, 'bushBG');

            this.bg.width = this.game.width
            this.bg.height = this.game.height         
            var x = this.game.width / 2
              , y = this.game.height / 2;
                          
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);


            
            //this.load.image('map', 'assets/map.png');
            this.load.image('bg1', 'assets/bg1.png');
            this.load.image('bg2', 'assets/bg2.png');
            this.load.image('bg3', 'assets/bg3.png');

            this.load.image('night_transition', 'assets/night_transition.png');

            this.load.image('saveSlot', 'assets/saveSlot.png');

            this.load.image('cursor_0', 'assets/hand_point.png');
            
            this.load.image('knife', 'assets/knife.png');
            this.load.image('feather', 'assets/feather.png');

            this.load.image('chatbox', 'assets/chatBox.png');
            this.load.image('chatName', 'assets/chatName.png');
            this.load.image('chibi-yara-happy', 'assets/yara_neutral.png');

            for(var i = 1; i <= 11; i++){
                this.load.image('scene'+i, 'assets/S-'+i+'.png');
            }

            this.load.image('inventory_0', 'assets/inventory_0.png');
            this.load.image('inventory_1', 'assets/inventory_1.png');
            this.load.image('inventory_2', 'assets/inventory_2.png');

          
        }
        , create: function () {
            //this.asset.cropEnabled = false;
        }
        , update: function () {
            if (!!this.ready && this.timer <= 0) {
                this.game.state.start('menu');
            }
            else if (!!this.ready && this.timer > 0) {
                this.timer--
            }
        }
        , onLoadComplete: function () {
            this.ready = true;
        }
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Preloader = Preloader;
}());