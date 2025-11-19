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
            this.load.image('seed', 'assets/seed.png');
            this.load.image('plant', 'assets/plant.png');
            
            //inventory
            this.load.image('knife', 'assets/knife.png');
            this.load.image('feather', 'assets/feather.png');

            this.load.image('button', 'assets/button.png');

            this.load.image('chatbox', 'assets/chatBox.png');
            this.load.image('chatbox_spirit', 'assets/chatBox_spirit.png');
            this.load.image('chatName', 'assets/chatName.png');
            this.load.image('chibi-yara-happy', 'assets/yara_neutral.png');
            this.load.image('chibi-yara-marked', 'assets/yara_neutral_marks.png');

            this.load.image('chibi-rabbit-happy', 'assets/rabbit_neutral.png');
            this.load.image('chibi-spinetail-neutral', 'assets/spinetail_neutral.png');
            this.load.image('chibi-spinetail-happy', 'assets/spinetail_happy.png');
            this.load.image('chibi-???-happy', 'assets/unknown_neutral.png');
            this.load.image('chibi-boabab-happy', 'assets/boabab_neutral.png');
            this.load.image('chibi-villager-happy', 'assets/villager_neutral.png');
            this.load.image('chibi-queen-happy', 'assets/queen_neutral.png');
            this.load.image('chibi-yuleni-happy', 'assets/yuleni_neutral.png');

            for(var i = 1; i <= 14; i++){
                this.load.image('scene'+i, 'assets/S-'+i+'.png');
            }
            this.load.image('scene-8-2', 'assets/S-8-2.png');

            this.load.image('inventory_highlight', 'assets/inventory_highlight.png');
            this.load.image('inventory_0', 'assets/inventory_0.png');
            this.load.image('inventory_1', 'assets/inventory_1.png');
            this.load.image('inventory_2', 'assets/inventory_2.png');
            this.load.image('inventory_64', 'assets/inventory_3.png');
            this.load.image('inventory_73', 'assets/inventory_4.png');
            this.load.image('inventory_109', 'assets/inventory_5.png');
            this.load.image('inventory_110', 'assets/inventory_6.png');
            this.load.image('inventory_111', 'assets/inventory_7.png');
            this.load.image('inventory_112', 'assets/inventory_7.png');
            this.load.image('inventory_113', 'assets/inventory_9.png');
            this.load.image('inventory_114', 'assets/inventory_8.png');


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
            
            this.load.image('s7o1', 'assets/s7_o1.png');
            this.load.image('s7o2', 'assets/s7_o2.png');
            this.load.image('s7o3', 'assets/s7_o3.png');
            this.load.image('s7o4', 'assets/s7_o4.png');

            this.load.image('s9o1', 'assets/s9_o1.png');
            this.load.image('s9o2', 'assets/s9_o2.png');
            this.load.image('s9o3', 'assets/s9_o3.png'); 
            
            this.load.image('s11o1', 'assets/s11_o1.png'); 
            this.load.image('s11o2', 'assets/s11_o2.png'); 

            this.load.image('s13o1', 'assets/s13_o1.png'); 
            this.load.image('s13o2', 'assets/s13_o2.png'); 
            this.load.image('s13o3', 'assets/s13_o3.png'); 
            this.load.image('s13o4', 'assets/s13_o4.png'); 
            this.load.image('s13o5', 'assets/s13_o5.png'); 

            this.load.image('s14o1', 'assets/s14_o1.png'); 
            this.load.image('s14o2', 'assets/s14_o2.png'); 
            this.load.image('s14o3', 'assets/s14_o3.png');            



            this.load.image('rabbit', 'assets/rabbit.png');
            this.load.image('rabbit_fly', 'assets/rabbit_fly.png');

            this.load.image('sceneImage7', 'assets/outsideScene.png');
            this.load.image('modal', 'assets/modal.png');
            this.load.image('modal_white', 'assets/modal-white.png');


            this.load.image('node', 'assets/node.png');
            this.load.image('node_clicked', 'assets/node_clicked.png');


            this.load.audio('crunch1', ['assets/audio/crunch1.wav'])
            this.load.audio('crunch2', ['assets/audio/crunch2.wav'])
            this.load.audio('crunch3', ['assets/audio/crunch3.wav'])
            this.load.audio('crunch4', ['assets/audio/crunch4.wav'])

            this.load.audio('waterBloop1', ['assets/audio/waterBloop1.wav'])
            this.load.audio('waterBloop2', ['assets/audio/waterBloop2.wav'])
            this.load.audio('waterBloop3', ['assets/audio/waterBloop3.wav'])

            this.load.audio('fillWater', ['assets/audio/fillWater.wav'])

            this.load.audio('flyAway', ['assets/audio/flyAway.wav'])

            this.load.audio('bg1', ['assets/audio/african-whistle-398936.wav'])
            this.load.audio('bg2', ['assets/audio/african-delta-140627.wav'])
            this.load.audio('bg3', ['assets/audio/afrikana-marimba-rythms-130598.wav'])
          
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