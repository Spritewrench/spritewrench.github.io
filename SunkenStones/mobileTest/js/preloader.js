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
            this.video = this.add.video('seaBG');

                          
            this.video.play(true);
                       
            this.videoImage = this.video.addToWorld(0, 0);
            var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
            this.videoTimer = 100;
            this.video.volume = 0;
            this.videoImage.scale.set(videoScale);          
            var x = this.game.width / 2
              , y = this.game.height / 2;
                          
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            //this.load.setPreloadSprite(this.asset);
            //this.load.audio('bg', ['sound/LeavingYouBehind.ogg']);

            
            localStorage.setItem("skipLogo",0)
            
          
            this.load.image('tile', 'assets/tile.webp');
            this.load.image('tile-place', 'assets/tile-place.webp');
            
            this.load.image('hero', 'assets/hero.webp');
            this.load.image('mon', 'assets/mon.webp');

            this.load.image('selectBG', 'assets/selectBG.webp');
            this.load.image('selectCap-1', 'assets/selectCap-1.webp');
            this.load.image('selectCap-2', 'assets/selectCap-2.webp');
            this.load.image('selectCap-3', 'assets/selectCap-3.webp');
            this.load.image('selectCap-4', 'assets/selectCap-4.png');
            this.load.image('selectCap-5', 'assets/selectCap-5.png');
            this.load.image('selectCap-6', 'assets/selectCap-6.png');
            this.load.image('selectCap_locked', 'assets/selectCap_locked.webp');
            this.load.image('selectCap_notAvail', 'assets/selectCap_notAvail.webp');

            this.load.image('gameBG', 'assets/bg.webp');
            this.load.image('bgBorder', 'assets/bgBorder.webp');
            this.load.image('mapTile', 'assets/mapTile.webp');

            this.load.image('selectCap_locked-2', 'assets/selectCap_locked-2.webp');
            this.load.image('selectCap_locked-3', 'assets/selectCap_locked-3.webp');
            this.load.image('selectCap_locked-4', 'assets/selectCap_locked-4.png');
            this.load.image('selectCap_locked-5', 'assets/selectCap_locked-5.png');
            this.load.image('selectCap_locked-6', 'assets/selectCap_locked-6.png');

            this.load.image('transitionWave', 'assets/transition.webp');
            
            this.load.image('selectCap_highlight', 'assets/selectCap_highlight.webp');

            
            this.load.image('nextButton_outline', 'assets/nextButton_highlight_outline.webp');
            this.load.image('nextButton', 'assets/nextButton.png');
            this.load.image('nextButton_highlight', 'assets/nextButton_highlight.png');
            
           


            this.load.image('willDie', 'assets/willDie.webp')

            this.load.image('tooltip', 'assets/tooltip.png')

            this.load.image('mon_new', 'assets/mon_new.webp')
            this.load.image('mon-0', 'assets/tile.webp')
            this.load.image('mon-1', 'assets/mon-0.png');
            this.load.image('mon-2', 'assets/mon-1.webp');
            this.load.image('mon-3', 'assets/mon-2.webp');
            this.load.image('mon-4', 'assets/mon-3.webp');
            this.load.image('mon-5', 'assets/mon-4.webp');
            this.load.image('mon-6', 'assets/mon-5.webp');
            this.load.image('mon-7', 'assets/mon-6.webp');
            this.load.image('mon-8', 'assets/mon-7.png');  
            this.load.image('mon-9', 'assets/mon-8.png');  
            this.load.image('mon-10', 'assets/mon-9.webp'); 
            this.load.image('mon-10-1', 'assets/mon-9-1.webp'); 
            this.load.image('mon-10-2', 'assets/mon-9-2.webp'); 
            this.load.image('mon-10-3', 'assets/mon-9-3.png');
            this.load.image('mon-10-4', 'assets/mon-9-4.png');
            this.load.image('mon-10-5', 'assets/mon-9-5.png');
            this.load.image('mon-10-6', 'assets/mon-9-6.png');  
            this.load.image('mon-11', 'assets/mon-11.webp');  
            this.load.image('mon-99', 'assets/mon-99.webp'); 
            this.load.image('mon-99-0', 'assets/mon-99-0.webp'); 
            this.load.image('mon-99-1', 'assets/mon-99-1.webp'); 
            this.load.image('mon-99-2', 'assets/mon-99-2.webp');
            
            this.load.image('mon-101', 'assets/mon-101.webp'); 
            this.load.image('mon-102', 'assets/mon-102.webp'); 
            this.load.image('mon-103', 'assets/mon-103.webp'); 

            this.load.image('bigMon-1', 'assets/bigMon-0.png');
            this.load.image('bigMon-99', 'assets/bigMon-99.png');
            this.load.image('bigMon-102', 'assets/bigMon-102.png');
            this.load.image('bigMon-2', 'assets/bigMon-1.png');
            this.load.image('bigMon-3', 'assets/bigMon-2.png');
            this.load.image('bigMon-4', 'assets/bigMon-3.png');
            this.load.image('bigMon-5', 'assets/bigMon-4.png');
            this.load.image('bigMon-6', 'assets/bigMon-5.png');
            this.load.image('bigMon-7', 'assets/bigMon-6.png');
            this.load.image('bigMon-8', 'assets/bigMon-7.png');
            this.load.image('bigMon-9', 'assets/bigMon-8.png');
            this.load.image('bigMon-10-1', 'assets/bigMon-9-1.png');
            this.load.image('bigMon-10-2', 'assets/bigMon-9-2.png');
            this.load.image('bigMon-10-3', 'assets/bigMon-9-3.png');
            this.load.image('bigMon-10-4', 'assets/bigMon-9-4.png');
            this.load.image('bigMon-10-5', 'assets/bigMon-9-5.png');
            this.load.image('bigMon-10-6', 'assets/bigMon-9-6.png');            
            this.load.image('bigMon-11', 'assets/bigMon-11.png');

            

            this.load.image('tut_mon', 'assets/tut_mon.webp'); 
            this.load.image('tut_savvy', 'assets/tut_savvy.webp'); 
            this.load.image('tut_heart', 'assets/tut_heart.webp'); 
            this.load.image('tut_bomb', 'assets/tut_bomb.webp'); 
            
            this.load.image('status-0', 'assets/status-0.webp'); 
            
            

            this.load.image('popUpTail_cap', 'assets/popUpTail_cap.webp'); 
            this.load.image('popUpTail_mon', 'assets/popUpTail_mon.webp'); 
            this.load.image('popUpTail_rarity_3', 'assets/popUpTail_rarity_3.webp'); 
            this.load.image('popUpTail_rarity_2', 'assets/popUpTail_rarity_2.webp'); 
            this.load.image('popUpTail_rarity_1', 'assets/popUpTail_rarity_1.webp'); 

            this.load.image('chestMeter', 'assets/chestMeter.webp');
            this.load.image('chestMeterBack', 'assets/chestMeterBack.webp');

            
            this.load.image('treasureSparkle', 'assets/treasureSparkle.webp');
            this.load.image('tileSparkle', 'assets/tileSparkle.webp');
            this.load.image('tileSparkle2', 'assets/tileSparkle2.webp');

            this.load.image('monDetail', 'assets/monDetail.webp');
            this.load.image('capDetail', 'assets/capDetail.webp');


            this.load.image('treasureItem_1', 'assets/treasureItem_1.webp');
            this.load.image('treasureItem_2', 'assets/treasureItem_2.webp');
            this.load.image('treasureItem_3', 'assets/treasureItem_3.webp');
            this.load.image('treasureItem_4', 'assets/treasureItem_4.webp');
            this.load.image('treasureItem_5', 'assets/treasureItem_5.webp');
            this.load.image('treasureItem_6', 'assets/treasureItem_6.webp');
            this.load.image('treasureItem_7', 'assets/treasureItem_7.webp');
            this.load.image('treasureItem_8', 'assets/treasureItem_8.webp');
            this.load.image('treasureItem_9', 'assets/treasureItem_9.webp');        
            for(var i = 1; i <= 3; i++){
                this.load.image('treasure_rarity_'+i, 'assets/treasure_rarity_'+i+'.webp');    
                for(var j = 1; j <= 3; j++){
                    this.load.image('treasureBoon_'+i+'_'+j, 'assets/treasureBoon_'+i+'_'+j+'.webp');            
                }
            }
            for(var j = 1; j <= 9; j++){      
                this.load.image('treasureCurse_'+j, 'assets/treasureCurse_'+j+'.webp');        

            }
            this.load.image('treasure_rarity_no', 'assets/treasure_rarity_no.webp');
            //navy officer
            this.load.image('treasureCurse_100', 'assets/treasureCurse_100.webp');   

            
            this.load.image('treasureCurse_base', 'assets/treasureCurse_base.webp');   

            this.load.image('treasure_200', 'assets/treasure_200_older.webp');
            this.load.image('treasure_201', 'assets/treasure_201.webp');
            this.load.image('treasure_201-endless', 'assets/treasure_201-endless.webp');

            this.load.image('foodChoice', 'assets/foodChoice.png');
            this.load.image('drinkChoice', 'assets/drinkChoice.png');
                  

          
            this.load.image('crewRemove', 'assets/crewRemove.webp');
            this.load.image('crewRemove_Button', 'assets/crewRemove_button.webp');

            this.load.image('options', 'assets/options.png');
            this.load.image('options_outline', 'assets/options_outline.png');            

            this.load.image('button', 'assets/button.webp');
            this.load.image('buttonNo', 'assets/buttonNo.webp');
            
            
            this.load.image('turnTracker', 'assets/turnTracker.webp');

            this.load.image('curseTracker', 'assets/curseTracker.webp');

            this.load.image('attackVFX', 'assets/attackVFX.webp');
            
            this.load.image('splash', 'assets/splash.webp'); 


            this.load.image('bigCrew-1', 'assets/bigСrew-1.png');
            this.load.image('bigCrew-2', 'assets/bigСrew-2.png');
            this.load.image('bigCrew-3', 'assets/bigСrew-3.png');
            this.load.image('bigCrew-4', 'assets/bigСrew-4.png');
            this.load.image('bigCrew-5', 'assets/bigСrew-5.png');
            this.load.image('bigCrew-6', 'assets/bigСrew-6.png');
            this.load.image('bigCrew-7', 'assets/bigСrew-7.png');
            this.load.image('bigCrew-8', 'assets/bigСrew-8.png');
            this.load.image('bigCrew-9', 'assets/bigСrew-9.png');
            this.load.image('bigCrew-10', 'assets/bigСrew-10.png');
            this.load.image('bigCrew-11', 'assets/bigСrew-11.png');
            this.load.image('bigCrew-12', 'assets/bigСrew-12.png');
            this.load.image('bigCrew-13', 'assets/bigСrew-13.png');
            this.load.image('bigCrew-14', 'assets/bigСrew-14.png');
            this.load.image('bigCrew-15', 'assets/bigСrew-15.png');
            this.load.image('bigCrew-16', 'assets/bigСrew-16.png');
            this.load.image('bigCrew-17', 'assets/bigСrew-17.png');
            this.load.image('bigCrew-18', 'assets/bigСrew-18.png');
            this.load.image('bigCrew-19', 'assets/bigСrew-19.png');
            this.load.image('bigCrew-20', 'assets/bigСrew-20.png');
            this.load.image('bigCrew-21', 'assets/bigСrew-21.png');
            this.load.image('bigCrew-22', 'assets/bigСrew-22.png');
            this.load.image('bigCrew-23', 'assets/bigСrew-23.png');
            this.load.image('bigCrew-24', 'assets/bigСrew-24.png');
            this.load.image('bigCrew-25', 'assets/bigСrew-25.png');
            this.load.image('bigCrew-26', 'assets/bigСrew-26.png');
            this.load.image('bigCrew-27', 'assets/bigСrew-27.png');
            this.load.image('bigCrew-28', 'assets/bigСrew-28.png');
            this.load.image('bigCrew-29', 'assets/bigСrew-29.png');
            this.load.image('bigCrew-30', 'assets/bigСrew-30.png');
            this.load.image('bigCrew-31', 'assets/bigСrew-31.png');
            this.load.image('bigCrew-34', 'assets/bigСrew-34.png');
            this.load.image('bigCrew-36', 'assets/bigСrew-36.png');
            this.load.image('bigCrew-37', 'assets/bigСrew-37.png');
            this.load.image('bigCrew-39', 'assets/bigСrew-39.png');
            this.load.image('bigCrew-40', 'assets/bigСrew-40.png');
            this.load.image('bigCrew-41', 'assets/bigСrew-41.png');
            this.load.image('bigCrew-46', 'assets/bigСrew-46.png');
            this.load.image('bigCrew-47', 'assets/bigСrew-47.png');
            this.load.image('bigCrew-48', 'assets/bigСrew-48.png');
            this.load.image('bigCrew-49', 'assets/bigСrew-49.png');
            this.load.image('bigCrew-50', 'assets/bigСrew-50.png');
            this.load.image('bigCrew-51', 'assets/bigСrew-51.png');
            this.load.image('bigCrew-52', 'assets/bigСrew-52.png');
            this.load.image('bigCrew-58', 'assets/bigСrew-58.png');
            this.load.image('bigCrew-59', 'assets/bigСrew-59.png');
            this.load.image('bigCrew-60', 'assets/bigСrew-60.png');
            this.load.image('bigCrew-64', 'assets/bigСrew-64.png');

            this.load.image('bigCrew-90', 'assets/bigСrew-90.png');
            this.load.image('bigCrew-91', 'assets/bigСrew-91.png');
            this.load.image('bigCrew-92', 'assets/bigСrew-92.png');
            this.load.image('bigCrew-99', 'assets/bigСrew-99.png');            

            this.load.image('bigCrew-93', 'assets/bigСrew-93.png');
            this.load.image('bigCrew-94', 'assets/bigСrew-94.png');
            this.load.image('bigCrew-95', 'assets/bigСrew-95.png');
            this.load.image('bigCrew-100', 'assets/bigСrew-100.png');

            this.load.image('bigCrew-96', 'assets/bigСrew-96.png');
            this.load.image('bigCrew-97', 'assets/bigСrew-97.png');
            this.load.image('bigCrew-98', 'assets/bigСrew-98.png');
            this.load.image('bigCrew-101', 'assets/bigСrew-101.png');

            this.load.image('bigCrew-80', 'assets/bigСrew-80.png');
            this.load.image('bigCrew-81', 'assets/bigСrew-81.png'); 

            this.load.image('bigCrew-locked', 'assets/bigСard-locked.png'); 
            
            
            
            this.load.image('bigCap-1', 'assets/bigСap-1.png');  
            this.load.image('bigCap-2', 'assets/bigСap-2.png');  
            this.load.image('bigCap-3', 'assets/bigСap-3.png'); 
            
            this.load.image('bigCap-4', 'assets/bigСap-4.png');  
            this.load.image('bigCap-5', 'assets/bigСap-5.png');  
            this.load.image('bigCap-6', 'assets/bigСap-6.png');             

            this.load.image('crew-1', 'assets/crew-0.webp');
            this.load.image('crew-2', 'assets/crew-1.webp');
            this.load.image('crew-3', 'assets/crew-2.webp');
            this.load.image('crew-4', 'assets/crew-3.webp');
            this.load.image('crew-5', 'assets/crew-4.png');
            this.load.image('crew-6', 'assets/crew-5.webp');
            this.load.image('crew-7', 'assets/crew-6.webp');
            this.load.image('crew-8', 'assets/crew-7.png');
            this.load.image('crew-9', 'assets/crew-8.png');
            this.load.image('crew-10', 'assets/crew-9.png'); 
            this.load.image('crew-11', 'assets/crew-11.png'); 
            this.load.image('crew-12', 'assets/crew-12.png'); 
            this.load.image('crew-13', 'assets/crew-13.png');
            this.load.image('crew-14', 'assets/crew-14.png'); 
            this.load.image('crew-15', 'assets/crew-15.png');
            this.load.image('crew-16', 'assets/crew-16.png');
            this.load.image('crew-17', 'assets/crew-17.png');
            this.load.image('crew-18', 'assets/crew-18.png');
            this.load.image('crew-19', 'assets/crew-19.png');
            this.load.image('crew-20', 'assets/crew-20.png');
            this.load.image('crew-21', 'assets/crew-21.png');
            this.load.image('crew-22', 'assets/crew-22.png');
            this.load.image('crew-23', 'assets/crew-23.png');
            this.load.image('crew-24', 'assets/crew-24.png');
            this.load.image('crew-25', 'assets/crew-25.png');
            this.load.image('crew-26', 'assets/crew-26.png');
            this.load.image('crew-27', 'assets/crew-27.png');
            this.load.image('crew-28', 'assets/crew-28.png');
            this.load.image('crew-29', 'assets/crew-29.png');
            this.load.image('crew-30', 'assets/crew-30.png');
            this.load.image('crew-31', 'assets/crew-31.png');
            this.load.image('crew-32', 'assets/crew-32.webp');
            this.load.image('crew-33', 'assets/crew-33.webp');
            this.load.image('crew-34', 'assets/crew-34.png');
            this.load.image('crew-35', 'assets/crew-35.webp');
            this.load.image('crew-36', 'assets/crew-36.png');
            this.load.image('crew-37', 'assets/crew-37.png');
            this.load.image('crew-38', 'assets/crew-38.webp');
            this.load.image('crew-39', 'assets/crew-39.png');
            this.load.image('crew-40', 'assets/crew-40.png');
            this.load.image('crew-41', 'assets/crew-41.png');
            this.load.image('crew-42', 'assets/crew-42.webp');
            this.load.image('crew-43', 'assets/crew-43.webp');
            this.load.image('crew-44', 'assets/crew-44.webp');
            this.load.image('crew-45', 'assets/crew-45.webp');
            this.load.image('crew-46', 'assets/crew-46.png');
            this.load.image('crew-47', 'assets/crew-47.png');
            this.load.image('crew-48', 'assets/crew-48.png');
            this.load.image('crew-49', 'assets/crew-49.png');

            this.load.image('crew-50', 'assets/crew-50.png');
            this.load.image('crew-51', 'assets/crew-51.png');
            this.load.image('crew-52', 'assets/crew-52.png');
            this.load.image('crew-53', 'assets/crew-53.webp');
            this.load.image('crew-54', 'assets/crew-54.webp');
            this.load.image('crew-55', 'assets/crew-55.webp');
            this.load.image('crew-56', 'assets/crew-56.webp');
            this.load.image('crew-57', 'assets/crew-57.webp');
            this.load.image('crew-58', 'assets/crew-58.png');
            this.load.image('crew-59', 'assets/crew-59.png');
            this.load.image('crew-60', 'assets/crew-60.png');
            this.load.image('crew-61', 'assets/crew-61.webp');
            this.load.image('crew-62', 'assets/crew-62.webp');
            this.load.image('crew-63', 'assets/crew-63.webp');
            this.load.image('crew-64', 'assets/crew-64.png');
            this.load.image('crew-65', 'assets/crew-65.webp');
         


            this.load.image('bag', 'assets/bag.webp');
            this.load.image('bagOutline', 'assets/bagOutline.webp');

            this.load.image('unlockLines', 'assets/unlockLines.webp');

            this.load.image('crew-80', 'assets/crew-79.webp');
            this.load.image('crew-81', 'assets/crew-80.webp'); 
            this.load.image('crew-82', 'assets/crew-81.webp');            
            
            this.load.image('crew-90', 'assets/steelGrunt.webp');
            this.load.image('crew-91', 'assets/steelGrunt.webp'); 
            this.load.image('crew-92', 'assets/steelGrunt.webp');  
            this.load.image('crew-99', 'assets/steelGrunt.webp');     
            
            this.load.image('crew-93', 'assets/smokeGrunt.webp');
            this.load.image('crew-94', 'assets/smokeGrunt.webp'); 
            this.load.image('crew-95', 'assets/smokeGrunt.webp');  
            this.load.image('crew-100', 'assets/smokeGrunt.webp');     
            
            this.load.image('crew-96', 'assets/saltGrunt.webp');
            this.load.image('crew-97', 'assets/saltGrunt.webp'); 
            this.load.image('crew-98', 'assets/saltGrunt.webp');   
            this.load.image('crew-101', 'assets/saltGrunt.webp');                 
            
                      
            
            this.load.image('crew_locked', 'assets/crew_locked.webp');
            this.load.image('crew_locked_overlay', 'assets/crew_locked_overLay.png');
            this.load.image('crew_notAvail', 'assets/crew_notAvail.webp');
            this.load.image('crew_blank', 'assets/crew_blank.webp');
            this.load.image('crew_blank_add', 'assets/blankCrew_add.webp');
                 

            this.load.image('blankCrew', 'assets/blankCrew.webp');

            for(var i = 0; i <  24; i++){
                 
                if(i > 9){
                    this.load.image('desk'+i, 'assets/Sunken_Stones_Desk_Zoom_In_01_000'+i+'.png');    
                }
                else{
                    this.load.image('desk'+i, 'assets/Sunken_Stones_Desk_Zoom_In_01_0000'+i+'.png'); 
                }
            }



            this.load.spritesheet('curse_frame', 'assets/curse_frame.webp', 150, 150, 10);
            this.load.spritesheet('uncurse_frame', 'assets/uncurse_frame.webp', 150, 150, 10);
            this.load.spritesheet('tired_frame', 'assets/tired_frame.webp', 150, 150, 4);
            this.load.image('curse-0', 'assets/curse-0.webp');
            this.load.image('curse-1', 'assets/curse-1.webp');
            this.load.image('curse-2', 'assets/curse-2.webp');
            this.load.image('curse-3', 'assets/curse-3.webp');
            this.load.image('curse-4', 'assets/curse-4.webp');
            this.load.image('curse-5', 'assets/curse-5.webp');
            this.load.image('curse-6', 'assets/curse-6.webp');
            this.load.image('curse-7', 'assets/curse-7.webp');

            this.load.image('freeCounter', 'assets/freeCounter.webp');

            this.load.image('crewSelect', 'assets/crewSelect.webp');
            this.load.image('crewSelectCurse', 'assets/crewSelectCurse.webp');
            this.load.image('curseIncr', 'assets/curseIncr.webp');
            this.load.image('crewDeployed', 'assets/crewDeployed.webp');
            this.load.image('crewDeployed_curse', 'assets/crewDeployed_curse.webp');

            this.load.image('stamina', 'assets/stamina.webp');
            this.load.image('heart', 'assets/heart.webp');

            this.load.image('new', 'assets/new.webp');

            this.load.image('turnMarker', 'assets/turnMarker.webp');
            
            this.load.image('shopKeep', 'assets/shopKeep.webp');
            this.load.image('shopBubble', 'assets/shopBubble.png');
            this.load.image('shopBG', 'assets/shopBG.webp');
            this.load.image('shopBG_desk', 'assets/shopBG_desk.png');
            this.load.image('capArrow', 'assets/capArrow.webp');
            
            this.load.image('curseBead', 'assets/curseBead.webp');

            this.load.image('bg', 'assets/bg.webp');
            this.load.image('bg_0', 'assets/bg_1.webp');
            this.load.image('bg_1', 'assets/bg_1.webp');
            this.load.image('bg_2', 'assets/bg_2.webp');
            this.load.image('bg_3', 'assets/bg_3.webp');
            this.load.image('bg_4', 'assets/bg_4.webp');
            this.load.image('crewBG', 'assets/crewBG.webp');
            this.load.image('replaceArrow', 'assets/replaceArrow.webp');
            

            this.load.image('infoPrompt', 'assets/promptInfo.png');
            this.load.image('infoPrompt1', 'assets/infoPrompt1.webp');
            this.load.image('infoPrompt2', 'assets/infoPrompt2.webp');

            this.load.image('gatheredChests', 'assets/gatheredChests.webp');
            this.load.image('gatheredSouls', 'assets/gatheredSouls.webp');   
            this.load.image('gatheredCurse', 'assets/gatheredCurse.webp');
            this.load.image('gatheredCurse-1', 'assets/gatheredCurse-1.webp');
            this.load.image('gatheredCurse-2', 'assets/gatheredCurse-2.webp');            

            
            this.load.image('treasureChestBG', 'assets/treasureChestBG.webp');
            
            this.load.image('crewOutline', 'assets/crewOutline.webp');
            this.load.image('enemyOutline', 'assets/enemyOutline.webp');

            
            this.load.image('loseBG', 'assets/loseBG.webp');
            this.load.image('bgOverlay1', 'assets/bgOverlay1.webp');
            this.load.image('bgOverlay2', 'assets/bgOverlay2.webp');
            this.load.image('bgOverlay3', 'assets/bgOverlay3.webp');
            this.load.image('bgOverlay_lose', 'assets/bgOverlay_lose.webp');
            this.load.image('bgOverlay_savvy', 'assets/bgOverlay_savvyHighlight.webp');
            this.load.image('bgOverlay_heart', 'assets/bgOverlay_heartHighlight.webp');
            this.load.image('bgOverlay_board', 'assets/bgOverlay_boardHighlight.webp');
            this.load.image('TLetterBox', 'assets/tutorial letterbox.webp');
            

            this.load.image('loseText', 'assets/loseAlt.webp');
            
            this.load.image('ui_back', 'assets/ui_back.webp');

            this.load.image('bgLogo-0', 'assets/bgLogo-0.webp');
            this.load.image('bgLogo-1', 'assets/bgLogo-1.webp');
            this.load.image('bgLogo-2', 'assets/bgLogo-2.webp');
            this.load.image('bgLogo-gem', 'assets/bgLogo_gem.webp');

            this.load.image('focusTop', 'assets/focusTop.webp');
            this.load.image('focusBot', 'assets/focusBot.webp');

            this.load.image('coinCount', 'assets/coinCount.webp');

            this.load.image('sparkle', 'assets/sparkle.webp');

            this.load.image('buff_attack', 'assets/buff_attack.webp');
            this.load.image('buff_health', 'assets/buff_health.webp');

            
            this.load.image('skip_button', 'assets/skip_button.webp');
            this.load.image('skip_button_hover', 'assets/skip_button_hover.webp');


            this.load.image('capBadge_outline', 'assets/capBadge_outline.webp');
            this.load.image('capBadge_1', 'assets/capBadge_1.webp');
            this.load.image('capBadgeHurt_1', 'assets/capBadgeHurt_1.webp');
            this.load.image('capBadge_2', 'assets/capBadge_2.webp');
            this.load.image('capBadgeHurt_2', 'assets/capBadgeHurt_2.webp');
            this.load.image('capBadge_3', 'assets/capBadge_3.webp');
            this.load.image('capBadgeHurt_3', 'assets/capBadgeHurt_3.webp');
            
            this.load.image('capBadge_4', 'assets/capBadge_4.png');
            this.load.image('capBadgeHurt_4', 'assets/capBadgeHurt_4.png');
            this.load.image('capBadge_5', 'assets/capBadge_5.png');
            this.load.image('capBadgeHurt_5', 'assets/capBadgeHurt_5.png');
            this.load.image('capBadge_6', 'assets/capBadge_6.png');
            this.load.image('capBadgeHurt_6', 'assets/capBadgeHurt_6.png');            

            this.load.image('abilityBack', 'assets/abilityBack.webp');
            



            
            this.load.image("focusHere", 'assets/focusHere.webp');

            this.load.image("treasurer", 'assets/treasurer.webp');
            this.load.image("treasurer_chat", 'assets/treasurer_chat.webp');
            
            this.load.image("treasureUI_highlight", 'assets/treasureUI_highlight.webp');

            this.load.image("smoke", 'assets/smoke.webp');
            this.load.image("help", 'assets/help.webp');

            
            this.load.image('chestUI', 'assets/chestUI.webp');    
            this.load.image('saltMeter', 'assets/saltMeter.webp'); 
            this.load.image('saltMeterBack', 'assets/saltMeterBack.webp');    

            this.load.image('curseMeter', 'assets/curseMeter.webp'); 

            this.load.image('ui_cap_health', 'assets/cap_health.webp');
            this.load.image('ui_cap_health_hurt', 'assets/cap_health_hurt.webp');
            this.load.image('ui_deploy_pool', 'assets/deploy_pool.webp');

            this.load.image('ui_endTurn_Button_outline', 'assets/endTurn_button_outline.webp');

            this.load.image('ui_endTurn_Button', 'assets/endTurn_button.webp');
            this.load.image('ui_endTurn_Button_hover', 'assets/endTurn_button_hover.webp');
            this.load.image('ui_clear_button_outline', 'assets/clear_button_outline.webp');
            this.load.image('ui_clear_button', 'assets/clear_button.webp');
            this.load.image('ui_reroll_button', 'assets/reroll_button.webp');
            this.load.image('gift_button_outline', 'assets/gift_button_outline.webp');
            this.load.image('gift_button', 'assets/gift_button.webp');
            this.load.image('gift_button_no', 'assets/gift_button_no.webp');
            this.load.image('back_button', 'assets/back_button.webp');
            this.load.image('tut_button', 'assets/tut_button.webp');

            this.load.image('ui_disembark_Button_outline', 'assets/disembark_button_outline.webp');
            this.load.image('ui_disembark_Button', 'assets/disembark_button.webp');
            this.load.image('ui_disembark_Button-Highlight', 'assets/disembark_button-Highlight.webp');
            

            this.load.image('social_insta', 'assets/social_insta.webp');
            this.load.image('social_threads', 'assets/social_threads.webp');
            this.load.image('social_discord', 'assets/social_discord.webp');
            this.load.image('social_steam', 'assets/social_steam.webp');
            this.load.image('newsletter', 'assets/newsletter.webp');

            this.load.image('inDev-Popup', 'assets/inDev-Popup.png');

            
            this.load.image('speechBubble', 'assets/speechBubble.webp');


            this.load.image('focusTopDiag', 'assets/focusTopDiag.webp');
            this.load.image('focusBotDiag', 'assets/focusBotDiag.webp');

            this.load.image('capUltOverlay-1', 'assets/capUltOverlay-1.webp');
            this.load.image('capUltText-1', 'assets/capUltText-1.webp');
            this.load.image('capUltHero-1', 'assets/capUltHero-1.webp');
            this.load.image('capUltOverlay-2', 'assets/capUltOverlay-2.webp');
            this.load.image('capUltText-2', 'assets/capUltText-2.webp');
            this.load.image('capUltHero-2', 'assets/capUltHero-2.webp');
            this.load.image('capUltOverlay-3', 'assets/capUltOverlay-3.webp');
            this.load.image('capUltText-3', 'assets/capUltText-3.webp');
            this.load.image('capUltHero-3', 'assets/capUltHero-3.webp');            

            this.load.image('capUltOverlay-4', 'assets/capUltOverlay-4.webp');
            this.load.image('capUltText-4', 'assets/capUltText-4.png');
            this.load.image('capUltHero-4', 'assets/capUltHero-4.png');
            this.load.image('capUltOverlay-5', 'assets/capUltOverlay-5.webp');
            this.load.image('capUltText-5', 'assets/capUltText-5.png');
            this.load.image('capUltHero-5', 'assets/capUltHero-5.png');
            this.load.image('capUltOverlay-6', 'assets/capUltOverlay-6.webp');
            this.load.image('capUltText-6', 'assets/capUltText-6.png');
            this.load.image('capUltHero-6', 'assets/capUltHero-6.png');               

            this.load.image('bossOverlay', 'assets/bossOverlay.webp');
            this.load.image('bossHero-4', 'assets/bossHero-4.webp');
            this.load.image('boss_cut4', 'assets/boss_cut4.webp');    
            this.load.image('bossHero-7', 'assets/bossHero-7.webp');
            this.load.image('boss_cut7', 'assets/boss_cut7.webp');                       
            this.load.image('bossHero-10', 'assets/bossHero-10.webp');
            this.load.image('bossHero-10-1', 'assets/bossHero-10-1.webp');
            this.load.image('bossHero-10-2', 'assets/bossHero-10-2.webp');
            this.load.image('bossHero-10-3', 'assets/bossHero-10-3.png');
            this.load.image('bossHero-10-4', 'assets/bossHero-10-4.png');
            this.load.image('bossHero-10-5', 'assets/bossHero-10-5.png');
            this.load.image('bossHero-10-6', 'assets/bossHero-10-6.png');                        
            this.load.image('boss_cut10', 'assets/boss_cut10.webp');                

            
            
            this.load.image('stackIncrease', 'assets/stackIncrease.webp');
            this.load.image('crewIncrease', 'assets/crewIncrease.png');

            this.load.image('ui_ult_button_outline', 'assets/ult_buttonReady_outline.webp');
            this.load.image('ui_ult_button_outline_hover', 'assets/ult_buttonReady_outline_hover.webp');
            this.load.image('ui_ult_button_outline_noHover', 'assets/ult_buttonReady_outline_noHover.webp');
            

            this.load.image('ui_ult_buttonReady1', 'assets/ult_buttonReady1.webp');
            this.load.image('ui_ult_buttonNotReady1', 'assets/ult_buttonNotReady1.webp');
            this.load.image('ui_ult_buttonReady2', 'assets/ult_buttonReady2.webp');
            this.load.image('ui_ult_buttonNotReady2', 'assets/ult_buttonNotReady2.webp');
            this.load.image('ui_ult_buttonReady3', 'assets/ult_buttonReady3.webp');
            this.load.image('ui_ult_buttonNotReady3', 'assets/ult_buttonNotReady3.webp');

            this.load.image('ui_ult_buttonReady4', 'assets/ult_buttonReady4.png');
            this.load.image('ui_ult_buttonNotReady4', 'assets/ult_buttonNotReady4.png');
            this.load.image('ui_ult_buttonReady5', 'assets/ult_buttonReady5.png');
            this.load.image('ui_ult_buttonNotReady5', 'assets/ult_buttonNotReady5.webp');
            this.load.image('ui_ult_buttonReady6', 'assets/ult_buttonReady6.png');
            this.load.image('ui_ult_buttonNotReady6', 'assets/ult_buttonNotReady6.png');            
            
            this.load.image('buy_button', 'assets/buy_button.webp');

            this.load.image('tileHighlight', 'assets/tile_highlight.webp');

            this.load.image('texture', 'assets/download.webp');

            this.load.image('listenmi', 'assets/listenMi.webp');
            this.load.image('wrench', 'assets/wrench.webp');
            this.load.image('ggj', 'assets/ggj.webp');


            this.load.image('curseWheel', 'assets/curse_wheel.png');
            this.load.image('curseWheelArrow-1', 'assets/curse_wheel_arrow-1.png');
            this.load.image('curseWheelArrow-2', 'assets/curse_wheel_arrow-2.png');


            this.load.image('wishlistSteam', 'assets/reviewSteam.png');

            this.load.audio('pugnacityPortroyal', 'assets/audio/Pugnacity_in_Port_Royal_Combat_Theme_GameLoop2.ogg');
            this.load.audio('LuckDontLiveOutHere', 'assets/audio/Luck Dont Live Out Here_GameLoop.ogg');
            this.load.audio('mainTheme', 'assets/audio/Sunken_Stones_-_Main_Theme_Arrangement_Instrument_Only.mp3');
            this.load.audio('seaSounds', 'assets/audio/gentle-ocean-waves-birdsong-and-gull-7109.mp3');

            this.load.audio('coinJingle-1', 'assets/audio/161315__husky70__counting-me-shillings.ogg');
            this.load.audio('coinJingle-2', 'assets/audio/161315__husky70__counting-me-shillings-2.ogg');
            this.load.audio('coinJingle-3', 'assets/audio/161315__husky70__counting-me-shillings-3.ogg');

            
            this.load.audio('parrotSquawk', 'assets/audio/parrotSound.ogg');
            this.load.audio('parrotSquawk2', 'assets/audio/445119__breviceps__animal-cartoon-cooing-curr-parrot.wav');
            
            

            this.game.load.video('seaBG', 'assets/video/Sunken Stones Animated BG Loop.mp4');

            this.load.audio('capVO-1', 'assets/audio/VO/capVO-1.ogg');
            this.load.audio('capVO-2', 'assets/audio/VO/capVO-2.ogg');
            this.load.audio('capVO-3', 'assets/audio/VO/capVO-3.ogg');

            this.load.audio('capVO-4', 'assets/audio/VO/capVO-4.ogg');
            this.load.audio('capVO-5', 'assets/audio/VO/capVO-5.ogg');
            this.load.audio('capVO-6', 'assets/audio/VO/capVO-6.ogg');            

            this.load.audio('capVO-1-ult', 'assets/audio/VO/capVO-1-ult.ogg');
            this.load.audio('capVO-2-ult', 'assets/audio/VO/capVO-2-ult.ogg');
            this.load.audio('capVO-3-ult', 'assets/audio/VO/capVO-3-ult.ogg');

            this.load.audio('capVO-4-ult', 'assets/audio/VO/capVO-4-ult.ogg');
            this.load.audio('capVO-5-ult', 'assets/audio/VO/capVO-5-ult.ogg');
            this.load.audio('capVO-6-ult', 'assets/audio/VO/capVO-6-ult.ogg');            

            
            this.load.audio('wavSnd-1', 'assets/audio/616596__trp__120703-waves-on-rocks-light-crashing-water-goderich-2.ogg');
            this.load.audio('wavSnd-2', 'assets/audio/616596__trp__120703-waves-on-rocks-light-crashing-water-goderich-3.ogg');
            this.load.audio('wavSnd-3', 'assets/audio/616596__trp__120703-waves-on-rocks-light-crashing-water-goderich-4.ogg');

            this.load.audio('tileSnd-1', 'assets/audio/588317__billhails2__gostonesounds.ogg');
            this.load.audio('tileSnd-2', 'assets/audio/588317__billhails2__gostonesounds2.ogg');
            this.load.audio('tileSnd-3', 'assets/audio/588317__billhails2__gostonesounds3.ogg');
            this.load.audio('tileSnd-4', 'assets/audio/588317__billhails2__gostonesounds4.ogg');
            this.load.audio('tileSnd-5', 'assets/audio/588317__billhails2__gostonesounds5.ogg');            

            this.load.audio('splashSnd-1', 'assets/audio/676380__sieuamthanh__vang-nuoc-lon-tieng-on-kenh.mp3');
            this.load.audio('splashSnd-2', 'assets/audio/442773__qubodup__big-water-splash.mp3');        
            this.load.audio('splashSnd-3', 'assets/audio/469608__sheyvan__watersplash.wav');
            this.load.audio('splashSnd-4', 'assets/audio/316744__bird_man__big-splash.wav');    
            
            this.load.audio('evilLaugh', 'assets/audio/evilLaugh.ogg');    
            this.load.audio('shipBell', 'assets/audio/shipBell.ogg');    
            this.load.audio('spin', 'assets/audio/spin.ogg');    
            

            for(var i = 1; i <=10;i++ ){
                this.load.audio('capHurt_fem'+i, 'assets/audio/VO/damage_'+i+'_meghan.wav');  
                this.load.audio('capHurt_male'+i, 'assets/audio/VO/grunting_'+i+'_alex.wav');  
            }

            
            
            this.load.audio('explodeSnd', 'assets/audio/105413__rendensh__explode5.ogg');

            this.load.audio('attackSnd-1', 'assets/audio/stab1.ogg');
            this.load.audio('attackSnd-2', 'assets/audio/stab2.ogg');   

            this.load.audio('monAttackSnd-1', 'assets/audio/slash1.ogg');
            this.load.audio('monAttackSnd-2', 'assets/audio/slash2.ogg');                             

            this.load.audio('fightReady', 'assets/audio/Begin Combat Button_v1.ogg');    
            this.load.audio('curseFill', 'assets/audio/Fill Curse Meter_v1.ogg');    
            this.load.audio('curseCrewAnim', 'assets/audio/Curse Crew Animation.ogg');     

            
            this.load.audio('decide', 'assets/audio/144319__fumiya112__decide.mp3');  
            
            
            this.load.audio('curseBubble1', 'assets/audio/702996__funky_audio__toonpop_synth-bubble-sequences_funky-audio_fass.ogg');  
            this.load.audio('curseBubble2', 'assets/audio/702996__funky_audio__toonpop_synth-bubble-sequences_funky-audio_fass-2.ogg');  
            this.load.audio('curseBubble3', 'assets/audio/702996__funky_audio__toonpop_synth-bubble-sequences_funky-audio_fass-3.ogg');  
            this.load.audio('curseBubble4', 'assets/audio/702996__funky_audio__toonpop_synth-bubble-sequences_funky-audio_fass-4.ogg');
            this.load.audio('curseBubble5', 'assets/audio/702996__funky_audio__toonpop_synth-bubble-sequences_funky-audio_fass-5.ogg');

            
        
            this.load.audio('highlightPing', 'assets/audio/Ping Ticker.ogg');     
            

            //var enabled = this.game.renderer.setTexturePriority(['mon-99-0', 'mon-102', 'mon-0']);
          
        }
        , create: function () {
            //this.asset.cropEnabled = false;
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