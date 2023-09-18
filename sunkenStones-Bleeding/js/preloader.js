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

            this.load.image('selectBG', 'assets/selectBG.png');
            this.load.image('selectCap-1', 'assets/selectCap-1.png');
            this.load.image('selectCap-2', 'assets/selectCap-2.png');
            this.load.image('selectCap-3', 'assets/selectCap-3.png');
            this.load.image('selectCap_locked', 'assets/selectCap_locked.png');
            this.load.image('selectCap_highlight', 'assets/selectCap_highlight.png');

            this.load.image('nextButton', 'assets/nextButton.png');
           

            this.load.image('bgGIF', 'assets/ocean-wave-43-colorful-waves-sea-acegif.gif')

            this.load.image('mon-0', 'assets/tile.png')
            this.load.image('mon-1', 'assets/mon-0.png');
            this.load.image('mon-2', 'assets/mon-1.png');
            this.load.image('mon-3', 'assets/mon-2.png');
            this.load.image('mon-4', 'assets/mon-3.png');
            this.load.image('mon-5', 'assets/mon-4.png');
            this.load.image('mon-6', 'assets/mon-5.png');
            this.load.image('mon-7', 'assets/mon-6.png');
            this.load.image('mon-8', 'assets/mon-7.png');  
            this.load.image('mon-9', 'assets/mon-8.png');  
            this.load.image('mon-10', 'assets/mon-9.png');  
            this.load.image('mon-99', 'assets/mon-99.png'); 
            this.load.image('mon-99-0', 'assets/mon-99-0.png'); 
            this.load.image('mon-99-1', 'assets/mon-99-1.png'); 
            this.load.image('mon-99-2', 'assets/mon-99-2.png'); 
            this.load.image('mon-101', 'assets/mon-101.png'); 

            this.load.image('status-0', 'assets/status-0.png'); 

            
            this.load.image('treasure_1', 'assets/treasure_1.png');
            this.load.image('treasure_2', 'assets/treasure_2.png');
            this.load.image('treasure_3', 'assets/treasure_3.png');
            this.load.image('treasure_4', 'assets/treasure_4.png');
            this.load.image('treasure_5', 'assets/treasure_5.png');
            this.load.image('treasure_6', 'assets/treasure_6.png');
            this.load.image('treasure_7', 'assets/treasure_7.png');
            this.load.image('treasure_8', 'assets/treasure_8.png');
            this.load.image('treasure_9', 'assets/treasure_9.png');

            this.load.image('treasure_200', 'assets/treasure_200.png');
            this.load.image('treasure_201', 'assets/treasure_201.png');

            this.load.image('treasureUI_1', 'assets/treasureUI_1.png');
            this.load.image('treasureUI_2', 'assets/treasureUI_2.png');
            this.load.image('treasureUI_3', 'assets/treasureUI_3.png');
            this.load.image('treasureUI_4', 'assets/treasureUI_4.png');
            this.load.image('treasureUI_5', 'assets/treasureUI_5.png');
            this.load.image('treasureUI_6', 'assets/treasureUI_6.png');
            this.load.image('treasureUI_7', 'assets/treasureUI_7.png');
            this.load.image('treasureUI_8', 'assets/treasureUI_8.png');
            this.load.image('treasureUI_9', 'assets/treasureUI_9.png');            

          

            this.load.image('crew-1', 'assets/crew-0.png');
            this.load.image('crew-2', 'assets/crew-1.png');
            this.load.image('crew-3', 'assets/crew-2.png');
            this.load.image('crew-4', 'assets/crew-3.png');
            this.load.image('crew-5', 'assets/crew-4.png');
            this.load.image('crew-6', 'assets/crew-5.png');
            this.load.image('crew-7', 'assets/crew-6.png');
            this.load.image('crew-8', 'assets/crew-7.png');
            this.load.image('crew-9', 'assets/crew-8.png');
            this.load.image('crew-10', 'assets/crew-9.png');            
            this.load.image('crew_locked', 'assets/crew_locked.png');
            this.load.image('crew_blank', 'assets/crew_blank.png');

            this.load.image('blankCrew', 'assets/blankCrew.png');

            this.load.image('buff_1', 'assets/buff_1.png');
            this.load.image('buff_2', 'assets/buff_2.png');

            this.load.image('freeCounter', 'assets/freeCounter.png');

            this.load.image('crewSelect', 'assets/crewSelect.png');
            this.load.image('crewDeployed', 'assets/crewDeployed.png');

            this.load.image('stamina', 'assets/stamina.png');
            this.load.image('heart', 'assets/heart.png');

            this.load.image('turnMarker', 'assets/turnMarker.png');
          
            this.load.image('bg', 'assets/bg.png');
            this.load.image('crewBG', 'assets/crewBG.png');
            this.load.image('bgLogo', 'assets/bgLogo.png');
            this.load.image('winBG', 'assets/winBG.png');
            this.load.image('loseBG', 'assets/loseBG.png');
            this.load.image('bgOverlay', 'assets/bgOverlay2.png');
            this.load.image('bgOverlay2', 'assets/bgOverlay3.png');
            this.load.image('ui_back', 'assets/ui_back.png');
            this.load.image('combatOrder', 'assets/combatOrder.png');

            this.load.image('coinCount', 'assets/coinCount.png');

            this.load.image('selectInfoPanel', 'assets/selectInfoPanel.png');
            this.load.image('capInfoPanel1', 'assets/capInfoPanel1.png');
            this.load.image('capInfoPanel1-wanted', 'assets/capInfoPanel1-wanted.png');
            this.load.image('capInfoPanel2', 'assets/capInfoPanel2.png');
            this.load.image('capInfoPanel2-wanted', 'assets/capInfoPanel2-wanted.png');    
            this.load.image('capInfoPanel3', 'assets/capInfoPanel3.png');
            this.load.image('capInfoPanel3-wanted', 'assets/capInfoPanel3-wanted.png');                    

            this.load.image('selectInfoPanel-0', 'assets/selectInfoPanel-0.png');
            this.load.image('selectInfoPanel-1', 'assets/selectInfoPanel-1.png');
            this.load.image('selectInfoPanel-2', 'assets/selectInfoPanel-2.png');
            this.load.image('selectInfoPanel-3', 'assets/selectInfoPanel-3.png');
            this.load.image('selectInfoPanel-4', 'assets/selectInfoPanel-4.png');

            this.load.image('selectInfoPanel-5', 'assets/selectInfoPanel-5.png');
            this.load.image('selectInfoPanel-6', 'assets/selectInfoPanel-6.png');
            this.load.image('selectInfoPanel-7', 'assets/selectInfoPanel-7.png');
            this.load.image('selectInfoPanel-8', 'assets/selectInfoPanel-8.png');
            this.load.image('selectInfoPanel-9', 'assets/selectInfoPanel-9.png');            

            this.load.image('selectInfoPanel-200', 'assets/selectInfoPanel-200.png');
            this.load.image('selectInfoPanel-101', 'assets/selectInfoPanel-101.png');
            this.load.image('selectInfoPanel-102', 'assets/selectInfoPanel-102.png');
            this.load.image('selectInfoPanel-103', 'assets/selectInfoPanel-103.png');
            this.load.image('selectInfoPanel-104', 'assets/selectInfoPanel-104.png');    
            this.load.image('selectInfoPanel-105', 'assets/selectInfoPanel-105.png');
            this.load.image('selectInfoPanel-106', 'assets/selectInfoPanel-106.png');
            this.load.image('selectInfoPanel-107', 'assets/selectInfoPanel-107.png');
            this.load.image('selectInfoPanel-108', 'assets/selectInfoPanel-108.png'); 
            this.load.image('selectInfoPanel-109', 'assets/selectInfoPanel-109.png');  
            this.load.image('selectInfoPanel-199', 'assets/selectInfoPanel-199.png'); 
            this.load.image('selectInfoPanel-199-0', 'assets/selectInfoPanel-199-0.png'); 
            this.load.image('selectInfoPanel-199-1', 'assets/selectInfoPanel-199-1.png'); 
            this.load.image('selectInfoPanel-199-2', 'assets/selectInfoPanel-199-2.png'); 
            this.load.image('selectInfoPanel-201', 'assets/selectInfoPanel-201.png');    
            


            this.load.image("smoke", 'assets/smoke.png');

            
            this.load.image('ration', 'assets/fruit_t.png'); 
            this.load.image('monCount', 'assets/monCount.png');    

            this.load.image('saltUI', 'assets/saltUI.png');    
            this.load.image('chestUI', 'assets/chestUI.png');    
            this.load.image('saltMeter', 'assets/saltMeter.png'); 
            this.load.image('saltMeterBack', 'assets/saltMeterBack.png');    

            this.load.image('ui_cap_health', 'assets/cap_health.png');
            this.load.image('ui_deploy_pool', 'assets/deploy_pool.png');

            this.load.image('ui_endTurn_Button', 'assets/endTurn_button.png');
            this.load.image('ui_clear_button', 'assets/clear_button.png');

            this.load.image('ui_disembark_Button', 'assets/disembark_button.png');
            

            this.load.image('ui_ult_buttonReady1', 'assets/ult_buttonReady1.png');
            this.load.image('ui_ult_buttonNotReady1', 'assets/ult_buttonNotReady1.png');
            this.load.image('ui_ult_buttonReady2', 'assets/ult_buttonReady2.png');
            this.load.image('ui_ult_buttonNotReady2', 'assets/ult_buttonNotReady2.png');
            this.load.image('ui_ult_buttonReady3', 'assets/ult_buttonReady3.png');
            this.load.image('ui_ult_buttonNotReady3', 'assets/ult_buttonNotReady3.png');                        

            this.load.image('listenmi', 'assets/listenMi.png');
            this.load.image('wrench', 'assets/wrench.png');
            this.load.image('ggj', 'assets/ggj.png');

            this.load.image('overlay', 'assets/overlay.png');
            this.load.image('heroHuge', 'assets/heroHuge.png');
            this.load.image('monHuge', 'assets/monHuge.png');
            this.load.image('textBox', 'assets/textBox.png');
            this.load.image('textBoxFoe', 'assets/textBoxFoe.png');
            
            this.game.load.video('waves', 'assets/waves without green.mp4');
          
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