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
            
            //inventory
            this.load.image('knife', 'assets/knife.png');
            this.load.image('feather', 'assets/feather.png');

            this.load.image('chatbox', 'assets/chatBox.png');
            this.load.image('chatName', 'assets/chatName.png');
            this.load.image('chibi-yara-happy', 'assets/yara_neutral.png');

            this.load.image('chibi-rabbit-happy', 'assets/rabbit_neutral.png');
            this.load.image('chibi-???-happy', 'assets/unknown_neutral.png');

            for(var i = 1; i <= 11; i++){
                this.load.image('scene'+i, 'assets/S-'+i+'.png');
            }

            this.load.image('inventory_0', 'assets/inventory_0.png');
            this.load.image('inventory_1', 'assets/inventory_1.png');
            this.load.image('inventory_2', 'assets/inventory_2.png');


            this.load.image('s1o1', 'assets/s1_o1.png');
            this.load.image('s1o1_clicked', 'assets/s1_o1_clicked.png');
            this.load.image('s1o2', 'assets/s1_o2.png');
            this.load.image('s1o2_clicked', 'assets/s1_o2_clicked.png');   
            this.load.image('s1o3', 'assets/s1_o3.png');
            this.load.image('s1o3_clicked', 'assets/s1_o3_clicked.png');                        

            this.load.image('s4o1', 'assets/s4_o1.png');


            this.load.image('birdLight1', 'assets/birdLight1.png');
            this.load.image('birdLight2', 'assets/birdLight2.png');
            this.load.image('birdLight3', 'assets/birdLight3.png');

            this.load.image('s5o1', 'assets/bird1.png');
            this.load.image('s5o2', 'assets/bird2.png');
            this.load.image('s5o3', 'assets/bird3.png');


            this.load.image('rabbit', 'assets/rabbit.png');

            this.load.image('sceneImage7', 'assets/outsideScene.png');
            this.load.image('modal', 'assets/modal.png');

            this.load.image('node', 'assets/node.png');
            this.load.image('node_clicked', 'assets/node_clicked.png');
          
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