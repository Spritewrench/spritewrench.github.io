(function () {
    'use strict';

    function Hub() {
        this.player = null;
    }
    Hub.prototype = {
        create: function () {

          if (localStorage.getItem("uncommonUnlock") === null) {
            localStorage.setItem("uncommonUnlock",0)
          }     
          if (localStorage.getItem("uncommonUnlock-first") === null) {
            localStorage.setItem("uncommonUnlock-first",0)
          }       
           
          if (localStorage.getItem("rareUnlock") === null) {
            localStorage.setItem("rareUnlock",0)
          }
          if (localStorage.getItem("rareUnlock-first") === null) {
            localStorage.setItem("rareUnlock-first",0)
          }
            
          if (localStorage.getItem("surgeUnlock") === null) {
            localStorage.setItem("surgeUnlock",0)
          }   
          if (localStorage.getItem("mutantUnlock") === null) {
            localStorage.setItem("mutantUnlock",1)
          }
          if (localStorage.getItem("mutantUnlock-first") === null) {
            localStorage.setItem("mutantUnlock-first",1)
          }  
          if (localStorage.getItem("legendHuntUnlock") === null) {
            localStorage.setItem("legendHuntUnlock",0)
          }     



          try{
            cordova.plugins.playGamesServices.initialize();
            cordova.plugins.playGamesServices.login();
          }
          catch(e){

          }          
          this.tixWarningFlag = 0;
          this.craftFlag = 0;

          localStorage.setItem("revengeHunt",0)
          localStorage.setItem("hunterHP",3);
          console.log(this.scale)
          this.game.world.setBounds(0, 0, this.game.width, this.game.height);
            try{
              this.game.kineticScrolling.stop();
                //setupVideoReward()
                //getAds()
            }
            catch(error){
              //admob.rewardVideo.show();   
            }     
                          
            this.game.fpsProblemNotifier.add(this.handleFpsProblem, this);
            localStorage.setItem('state','hub');       
            this.game.stage.backgroundColor = "#160c2c";
            this.game.stage.backgroundColor = "#160c2c";
            //console.log(localStorage.getItem("biome"))
            localStorage.setItem("pause",0)
            localStorage.setItem("hasWon",0)
            localStorage.setItem("monCount",0)
            localStorage.setItem("ExpTotal",0);
            var d = new Date();
            var date = d.getDate();
            var day = d.getDay();         
            this.day = day
            //console.log("old "+day)
            //this.day = 5
            if(day >  tixDiscount.length-1){
              day -= Math.floor(day/(tixDiscount.length-1))*(tixDiscount.length-1)-1
            } 
            
            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);

            //hard set player title
            localStorage.setItem("playerTitle","HUNTER")
            this.title = localStorage.getItem("playerTitle")
            
            //console.log("new "+day)
            //alert(tixDiscount[day])
            this.biome = parseInt(tixDiscount[day])
            
            
            
            this.markerBiome = this.biome


            this.mapBG = this.add.sprite(0, 0, 'blankHub'); 
            //this.mapBG.anchor.setTo(0.5, 0);
            this.mapBG.width = this.game.width;
            this.mapBG.height = this.game.height;               

            this.map = this.add.sprite(0, 0, 'grasslandsHub'); 
            //this.map.anchor.setTo(0.5,0);    
            
            this.map.width = this.game.width;
            this.map.height = this.game.height;   
            this.map.inputEnabled = true;
            this.map.events.onInputDown.add(this.targetHunt, this);           
          
            this.huntTickets = this.add.sprite(-20,this.game.height/2-60, 'huntTickets');
            this.huntTickets.scaleUnit = 0.85
            this.huntTickets.width = Math.floor(this.huntTickets.width*this.huntTickets.scaleUnit)
            this.huntTickets.height = Math.floor(this.huntTickets.height*this.huntTickets.scaleUnit)            
            this.huntTickets.inputEnabled = true;
            this.huntTickets.events.onInputDown.add(this.fireWrite, this);              
            this.huntTickets.TapCount = 0;            
          
            

                       
            this.huntTickets.TapCount = 7;
            //this.fireWrite();

            switch(this.markerBiome){
              case -1:
               this.huntTickets.loadTexture('grasslandTix');
                break;              
              case 0:
               this.huntTickets.loadTexture('grasslandTix');
                break;
              case 1:
                this.huntTickets.loadTexture('caveTix');
                break;
              case 2:
                this.huntTickets.loadTexture('mountainTix');
                break;                
            }     
          
            var d = new Date();
            var n = d.getHours();
            var date = d.getDate();
            var day = d.getDay();         
            //console.log(date)
            if(date >  weather.length-1){
              date -= Math.floor(date/(weather.length-1))*(weather.length-1)-1
            }  
            var timeOfDay = "d";
            if(n >= 0 && n <= 18){
              timeOfDay = "d";
            }
            if(n > 19 && n <= 23){
              timeOfDay = "n";
            }  
            //console.log(date)

            
            this.hubrankBadge = this.add.sprite(this.game.width-60, this.huntTickets.y+(this.huntTickets.height/2)-5, "rankBadge");  
          
            this.hubrankBadge.anchor.setTo(0.5, 0.5);
            this.hubrankBadge.inputEnabled = true;
            this.hubrankBadge.events.onInputDown.add(this.openLeaderBoard, this);              
            this.hubrankBadgeTapCount = 0;  
          
            this.currentRank = parseInt(localStorage.getItem("currentRank"))
            this.rankText= this.add.text(this.hubrankBadge.x,this.hubrankBadge.y+40, this.currentRank,{font:'LondrinaSolid-Black'});
            this.rankText.fill= '#fff';  
            this.rankText.fontSize = 20;  
            this.rankText.anchor.setTo(0.5, 0.5);       
            this.rankText.wordWrap = true;
            this.rankText.wordWrapWidth = 650;
            this.rankText.align ='center'             
            //this.rankText.text = this.currentRank;
          
            var rankHolder = Math.floor(parseInt(localStorage.getItem("currentRank"))/10);
            //console.log(rankHolder)
            if(rankHolder > 2){
              rankHolder = 2;
            }
            this.hubrankBadge.loadTexture('rankBadge-'+rankHolder)            
            
            this.hasLost = parseInt(localStorage.getItem("hasLost"))
            
            this.sound = this.add.sprite(10, 10, "sound");  
            this.sound.inputEnabled = true;
            this.sound.events.onInputDown.add(this.adjustSound, this);  

            this.arrowLeft = this.add.sprite(10, this.game.height/2-200, "craftArrowLeft");  
            this.arrowLeft.inputEnabled = true;
            this.arrowLeft.events.onInputDown.add(this.left, this);  

            this.arrowRight = this.add.sprite(this.game.width-100, this.game.height/2-200, "craftArrowRight");  
            this.arrowRight.inputEnabled = true;
            this.arrowRight.events.onInputDown.add(this.right, this);        
          
            
                
            this.hubBonus1 = this.add.sprite(0, 25, 'hubBonus1');                
            this.hubBonus1.width = this.game.width;
            this.hubBonus1.height = this.game.height;              
        
            this.hubBonus1Detail = this.add.sprite(0, 25, 'hubBonus1-0-1');
            this.hubBonus1Detail.width = this.game.width;
            this.hubBonus1Detail.height = this.game.height;    
            
          
            if(parseInt(localStorage.getItem("surgeUnlock")) == 0){
              this.hubBonus1.alpha = 0;
              this.hubBonus1Detail.alpha = 0;
            }
            
            this.hubBonus2 = this.add.sprite(0, 25, 'hubBonus2-0');                
            this.hubBonus2.width = this.game.width;
            this.hubBonus2.height = this.game.height;     
          
            this.hubBonus3 = this.add.sprite(0, 25, 'hubBonus3-0');                
            this.hubBonus3.width = this.game.width;
            this.hubBonus3.height = this.game.height;    
            //hide for now
            this.hubBonus3.alpha = 0;
          
            this.tixText = this.add.text(this.huntTickets.x+this.huntTickets.width-50, this.huntTickets.y+(this.huntTickets.height/2), "1/1",{font:'LondrinaSolid-Black'});
            this.tixText.fill= '#fff';
            this.tixText.fontSize = 20;
            this.tixText.anchor.setTo(0.5, 0.5);
            
            this.tabBanner = this.add.sprite(0,(this.game.height)-100, 'tab_ribbon');
            this.tabBanner.width = this.game.width
            this.tabBanner.inputEnabled = true;
            this.tabBanner.events.onInputDown.add(this.goToNowhere, this);               

            
            this.selectHighlight = this.add.sprite(this.game.width/2,(this.game.height)-50, 'tab_select_highlight');
            this.selectHighlight.anchor.setTo(0.5, 0.5);
            this.highlightTar = this.selectHighlight.x


            this.selectInventory = this.add.sprite(60,(this.game.height)-50, 'tab_inventory_unselected');
            this.selectInventory.anchor.setTo(0.5, 0.5);

            this.selectInventory.clicked = false;
            this.selectInventory.inputEnabled = true;
            this.selectInventory.events.onInputDown.add(this.goToCraft, this)  
            
            this.Notification = this.add.sprite(60,(this.game.height)-50, 'notification');
            this.Notification.anchor.setTo(0.5, 0.5);  
            this.Notification.alpha = 0;            
            
            this.selectHub = this.add.sprite(this.game.width/2,(this.game.height)-50, 'tab_hub_selected');
            this.selectHub.anchor.setTo(0.5, 0.5);
            this.selectHub.clicked = false;
            this.selectHub.inputEnabled = true;
            //this.selectHub.events.onInputDown.add(this.goToShop, this);        
          
            this.Notification2 = this.add.sprite(this.game.width/2,(this.game.height)-50, 'notification');
            this.Notification2.anchor.setTo(0.5, 0.5);  
            this.Notification2.alpha = 0;            

            this.selectShop = this.add.sprite((this.game.width)-60,(this.game.height)-50, 'tab_shop_unselected');
            this.selectShop.anchor.setTo(0.5, 0.5);
            this.selectShop.clicked = false;
            this.selectShop.inputEnabled = true;
            this.selectShop.events.onInputDown.add(this.goToShop, this);          

            this.Notification3 = this.add.sprite((this.game.width)-60,(this.game.height)-50, 'notification');
            this.Notification3.anchor.setTo(0.5, 0.5);  
            this.Notification3.alpha = 0;              
          
            this.bgSound = this.add.audio('hubMusic');
            this.ping = this.add.audio('ping');
            
            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                if(parseInt(localStorage.getItem("muted")) == 0){
                  this.bgSound.play();
                }                   
                
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            } 
          



          var d = new Date();
          var date = d.getDate();
          var day = d.getDay();

          this.weekOfMonth = Math.ceil((date + 6 - day)/7);
          //console.log(guildItem.length) 
          if(this.weekOfMonth >= guildItem.length){
            this.weekOfMonth = 1
          }
          
          
          this.loginBonus = this.add.sprite(0, -10, 'loginBonus1'); 
          this.loginBonus.width = this.game.width;
          this.loginBonus.height = this.game.height;      
                    

          

          this.veteranRank = this.add.sprite(this.game.width/2-125,90, 'vetRank');
          this.veteranRank.width = 40
          this.veteranRank.height = 40   
          this.veteranRank.alpha = 0;      

          this.veteranRankText = this.add.text(this.game.width/2, 110, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
          this.veteranRankText.fill= '#fff';
          this.veteranRankText.fontSize = 20;
          this.veteranRankText.anchor.setTo(0.5, 0.5); 
          this.veteranRankText.alpha = 0;

          this.veteranPointText = this.add.text(this.game.width/2, 130, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
          this.veteranPointText.fill= '#97B7F2';
          this.veteranPointText.fontSize = 18;
          this.veteranPointText.anchor.setTo(0.5, 0.5); 
          this.veteranPointText.alpha = 0;  

          this.veteranRankHolder = parseInt(localStorage.getItem("veteranRank"));
          this.veteranPointHolder = parseInt(localStorage.getItem("veteranPoints"))

          this.veteranRankHolder2 = parseInt(localStorage.getItem("veteranRank"));
          this.veteranPointHolder2 = parseInt(localStorage.getItem("veteranPoints"))          

          //season
          this.season = []
          this.season[1]="Wocco"
          this.season[2]="Nivreh"
          this.season[3]="Nioleo"
          this.season[4]="Urania"  
          this.season[5]="Maddock"
          this.season[6]="Stone-eater"
          this.season[7]="Dracomyxin"
          this.season[8]="Lacuna"  
          this.season[9]="Noot"
          this.season[10]="Chupa"
          this.season[11]="Keet-Keet"
          this.season[12]="Alexandross"                              

          if (localStorage.getItem("firstVisit-Index3") === null  ) {
              localStorage.setItem("firstVisit-Index3",1);
              //alert("lol")
              //localStorage.setItem("Markerbiome",this.markerBiome)            
              //this.game.state.start('game') 

              /*setTimeout(function () {
                 alert("Tap the arrows to choose between the different areas within this location.\nPay attention to the bonuses available to each area.\nTap on your desired area to enter.")
              }, 1000);     */    
              localStorage.setItem("TixCount0",0) 
              localStorage.setItem("TixCount1",0) 
              localStorage.setItem("TixCount2",0)   
              var d = new Date();
              localStorage.setItem("loginDate",d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getUTCFullYear())     
              if(localStorage.getItem("dayCounter") === null){
                localStorage.setItem("dayCounter","0");
              }     
              this.loginBonus.loadTexture("loginBonus"+localStorage.getItem("dayCounter") ) 
          }


          this.totalTixCount = parseInt(localStorage.getItem("TixCount0"))+parseInt(localStorage.getItem("TixCount1"))+parseInt(localStorage.getItem("TixCount2"));
          this.tixWarn = 0

          if((parseInt(localStorage.getItem("openTrack"))!= 0 && parseInt(localStorage.getItem("openTrack")) >= gameConfig.reviewPrompt && localStorage.getItem("gameRated") === null) ){
            try{
              localStorage.setItem("gameRated",1)
              cordova.plugins.AppReview.requestReview().catch(function() {
                return cordova.plugins.AppReview.openStoreScreen();
             });
            } 
            catch(e){

            }           
          }
          
          this.targetOverlay = this.add.sprite(0, 0, 'targetOverlay'); 
          this.targetOverlay.width = this.game.width;
          this.targetOverlay.height = this.game.height;  
          this.targetOverlay.alpha = 0; 
          //this.map.inputEnabled = true;
          //this.map.events.onInputDown.add(this.hunt, this);    
          
          
          this.targetarrowLeft = this.add.sprite(10, -1000, "craftArrowLeft");  
          this.targetarrowLeft.inputEnabled = true;
          this.targetarrowLeft.alpha = 0; 
          this.targetarrowLeft.events.onInputDown.add(this.prevMon, this);  

          this.targetarrowRight = this.add.sprite(this.game.width-100, -1000, "craftArrowRight");  
          this.targetarrowRight.inputEnabled = true;
          this.targetarrowRight.alpha = 0; 
          this.targetarrowRight.events.onInputDown.add(this.nextMon, this);        
          this.monKey = 1        
          
          this.targetOverlayRank = this.add.sprite(0, 0, 'targetOverlay_rank1'); 
          this.targetOverlayRank.width = this.game.width;
          this.targetOverlayRank.height = this.game.height;  
          this.targetOverlayRank.alpha = 0;           

          this.targetMonHuntRewards = this.add.sprite(0,30, 'bounty');
          this.targetMonHuntRewards.width = this.game.width
          this.targetMonHuntRewards.height = this.game.height
          this.targetMonHuntRewards.alpha = 0;  
   
          
          this.targetMon = this.add.sprite(this.game.width/2, this.game.height/2-350, monster[this.markerBiome][this.monKey].name);  
          this.targetMon.width = Math.floor(this.targetMon.width/1.5)
          this.targetMon.height = Math.floor(this.targetMon.height/1.5)
          this.targetMon.anchor.setTo(0.5,0); 
          this.targetMon.alpha = 0; 

          
          this.targetMonCommonDrop = this.add.sprite(this.game.width/2-100, this.targetOverlayRank.height/2+35, deadMonster[this.markerBiome][this.monKey].commonRewards[2]);  
          this.targetMonCommonDrop.anchor.setTo(0.5,0); 
          this.targetMonCommonDrop.alpha = 1;          
          this.targetMonCommonDrop.height = this.targetMonCommonDrop.height/2
          this.targetMonCommonDrop.width = this.targetMonCommonDrop.width/2
          this.targetMonCommonDrop.alpha = 0;

          this.targetMonUncommonDrop1 = this.add.sprite(this.game.width/2-100+this.targetMonCommonDrop.width,this.targetMonCommonDrop.y, deadMonster[this.markerBiome][this.monKey].uncommonRewards[1]);  
          this.targetMonUncommonDrop1.anchor.setTo(0.5,0); 
          this.targetMonUncommonDrop1.alpha = 1;      
          this.targetMonUncommonDrop1.height = this.targetMonCommonDrop.height   
          this.targetMonUncommonDrop1.width = this.targetMonCommonDrop.width  
          this.targetMonUncommonDrop1.alpha = 0;

          this.targetMonUncommonDrop2 = this.add.sprite(this.game.width/2-100+(this.targetMonCommonDrop.width*2), this.targetMonCommonDrop.y, deadMonster[this.markerBiome][this.monKey].uncommonRewards[2]);
          this.targetMonUncommonDrop2.anchor.setTo(0.5,0); 
          this.targetMonUncommonDrop2.alpha = 1;      
          this.targetMonUncommonDrop2.height = this.targetMonCommonDrop.height   
          this.targetMonUncommonDrop2.width = this.targetMonCommonDrop.width  
          this.targetMonUncommonDrop2.alpha = 0;

          this.targetMonUncommonDrop3 = this.add.sprite(this.game.width/2-100+(this.targetMonCommonDrop.width*3), this.targetMonCommonDrop.y, deadMonster[this.markerBiome][this.monKey].uncommonRewards[3]);
          this.targetMonUncommonDrop3.anchor.setTo(0.5,0); 
          this.targetMonUncommonDrop3.alpha = 1;      
          this.targetMonUncommonDrop3.height = this.targetMonCommonDrop.height   
          this.targetMonUncommonDrop3.width = this.targetMonCommonDrop.width 
          this.targetMonUncommonDrop3.alpha = 0;                   
          
          this.targetMonRareDrop = this.add.sprite(this.game.width/2-100+(this.targetMonCommonDrop.width*4), this.targetMonCommonDrop.y, deadMonster[this.markerBiome][this.monKey].rareRewards[1]);
          this.targetMonRareDrop.anchor.setTo(0.5,0); 
          this.targetMonRareDrop.alpha = 1;             
          this.targetMonRareDrop.height = this.targetMonCommonDrop.height   
          this.targetMonRareDrop.width = this.targetMonCommonDrop.width   
          this.targetMonRareDrop.alpha = 0;

          this.targetMonWeakText= this.add.text(this.game.width/2, this.targetOverlayRank.height/2-10, "",{font:'LondrinaSolid-Black'});
          this.targetMonWeakText.fill= '#fff';  
          this.targetMonWeakText.fontSize = 28;  
          this.targetMonWeakText.anchor.setTo(0.5, 0.5);       
          this.targetMonWeakText.align ='center'   
          this.targetMonWeakText.alpha = 0;
          
          this.targetHighScoreText= this.add.text(this.game.width/2, this.targetOverlayRank.height/2+150, "",{font:'LondrinaSolid-Black'});
          this.targetHighScoreText.fontSize = 28;  
          //media breakpoint 
          
          if(window.innerHeight < 700){
            this.targetHighScoreText.y = this.targetOverlayRank.height/2+115
            this.targetHighScoreText.fontSize = 24;  
          }  
          if(window.innerHeight <= 650 ){
            this.targetHighScoreText.y = this.targetOverlayRank.height/2+150
            this.targetHighScoreText.fontSize = 24;  
          }  
          
          
          this.targetHighScoreText.fill= '#fff';  
          //this.targetHighScoreText.fontSize = 28;  
          this.targetHighScoreText.anchor.setTo(0.5, 0.5);       
          this.targetHighScoreText.align ='center'   
          this.targetHighScoreText.alpha = 0;

          this.targetMonHuntText= this.add.text(this.game.width/2, 30, "",{font:'LondrinaSolid-Black'});
          
          this.targetMonHuntText.fill= '#fff';  
          this.targetMonHuntText.fontSize = 24;  
          this.targetMonHuntText.anchor.setTo(0.5, 0.5);       
          this.targetMonHuntText.align ='center'   
          this.targetMonHuntText.alpha = 0;          


          this.bountyCount = this.add.text(75,this.targetMonHuntRewards.y+60, "10",{font:'LondrinaSolid-Black'});
          this.bountyCount.fill= '#7C433A';
          this.bountyCount.fontSize = 34;
          //this.bountyCount.anchor.setTo(0.5, 0.5);    
          this.bountyCount.alpha = 0          
          this.bountyCount.angle = -16
          this.bountyCount.stroke = 'white';
          this.bountyCount.strokeThickness = 3;          
          //media breakpoint 
          
                          
          if(window.innerHeight < 700){
            this.bountyCount.y = this.targetMonHuntRewards.y+60
            this.bountyCount.x = 50
            this.bountyCount.fontSize = 22;
          }  
          if(window.innerHeight <= 650 ){
            this.bountyCount.y = this.targetMonHuntRewards.y+60
            this.bountyCount.x = 75
            this.bountyCount.fontSize = 22;
          }              

          this.wardenHunt = this.add.sprite((this.game.width/2)-25,-1000, 'wardenHunt0');
          this.wardenHunt.anchor.setTo(0.5, 0.5);
          this.wardenHunt.width = 200
          this.wardenHunt.height = 120   
          this.wardenHunt.clicked = false;
          this.wardenHunt.inputEnabled = true;
          this.wardenHunt.alpha = 0
          this.wardenHunt.events.onInputDown.add(this.hunt, this);             
          
          this.tixText2 = this.add.text(this.wardenHunt.x-28, this.wardenHunt.y-30, "1/1",{font:'LondrinaSolid-Black'});
          this.tixText2.fill= '#fff';
          this.tixText2.fontSize = 18;
          this.tixText2.anchor.setTo(0.5, 0.5);    
          this.tixText2.alpha = 0

          this.specialDiscount  = this.add.sprite(-10, 0,"specialDiscount");  
          this.specialDiscount.width = this.game.width;
          this.specialDiscount.height = this.game.height;  
          this.specialDiscount.alpha = 0;         

          this.exitTarget  = this.add.sprite(this.game.width-80, 0,"exitTarget");  
          this.exitTarget.width = Math.floor(this.exitTarget.width/1.5)
          this.exitTarget.height = Math.floor(this.exitTarget.height/1.5)          
          this.exitTarget.inputEnabled = true;
          this.exitTarget.alpha = 0
          this.exitTarget.events.onInputDown.add(this.exitHunt, this);              
          
          this.transition = this.add.sprite(this.game.width/2, this.game.height,"transition");  
          this.transition.width = this.game.width
          this.transition.anchor.setTo(.5,0);
          this.transition.alpha = 0; 

          
      


          this.tixDiscount = [];
          this.canHunt = false

          if(parseInt( localStorage.getItem("fromHunt")) == 1){
            //this.transition.y = 0
            this.transition.scale.y *= -1;  
            this.transition.alpha = 1;
          }
          this.speechBackdrop = this.add.sprite(0, 0, 'speechDim');
          this.speechBackdrop.width = this.game.width;
          this.speechBackdrop.height = this.game.height;
          this.speechBackdrop.alpha = 0;

          this.mapWarden = this.add.sprite(this.game.width, 0, 'guildShopkeep');
          this.mapWarden.width = this.game.width;
          this.mapWarden.height = this.game.height; 
          
          this.textBackdrop = this.add.sprite(this.game.width/2, this.game.height/2, 'speechBubble');
          this.textBackdrop.anchor.setTo(0.5, 0.5); 
          this.textBackdrop.width = this.game.width;
          this.textBackdrop.height = this.game.height;

          this.textBackdrop.width = this.textBackdrop.width/1.5
          this.textBackdrop.height = this.textBackdrop.height/1.5         

          this.textBackdrop.alpha = 0;
          this.textBackdrop.inputEnabled = true;
          this.textBackdrop.events.onInputDown.add(this.doNothing, this);             
          
          this.textBackdropText = this.add.text(this.game.width/2, 200, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
          this.textBackdropText.alpha = 0;
          this.textBackdropText.fill= 'black';
          this.textBackdropText.fontSize = 18;
          this.textBackdropText.anchor.setTo(0.5, 0.5); 
          this.textBackdropText.align = 'center'
          this.textBackdropText.wordWrap = true;
          this.textBackdropText.wordWrapWidth = this.game.width-35;      

          this.textBackdropText2 = this.add.text(this.textBackdrop.x-this.textBackdrop.width/2-this.textBackdrop.width/6,this.textBackdropText.y-93, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
          this.textBackdropText2.angle = -5
          this.textBackdropText2.alpha = 0;
          this.textBackdropText2.fill= '#FF8900';
          this.textBackdropText2.fontSize = 18;
          this.textBackdropText2.align = 'center'
          this.textBackdropText2.wordWrap = true;
          this.textBackdropText2.wordWrapWidth = this.textBackdrop.width-50;       
          this.textBackdropText2.text = "Lynnenne, The Shopkeep"
          this.textBackdropText.text = ""
          this.chatTimer = 0;      
          this.dialogCounter = 0;

          this.okayButton2 = this.add.sprite(-this.game.width, this.game.height/2-100, 'okay');
          this.okayButton2.anchor.setTo(0.5, 0.5); 
          this.okayButton2.alpha = 0;
          this.okayButton2.inputEnabled = true;
          this.okayButton2.events.onInputDown.add(this.hideChat, this);  
          this.okayButton2.origWidth = this.okayButton2.width
          this.okayButton2.origHeight = this.okayButton2.height

          this.okayButton3 = this.add.sprite(-this.game.width, this.game.height/2-100, 'yesButton');
          this.okayButton3.anchor.setTo(0.5, 0.5); 
          this.okayButton3.alpha = 0;
          this.okayButton3.inputEnabled = true;
          this.okayButton3.events.onInputDown.add(this.addNewsLetter, this);            


          if(true){
            //login bonus
            var d = new Date();
            var today = d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getUTCFullYear()
            if(localStorage.getItem("loginDate") === null){
              localStorage.setItem("loginDate", today)
            }    

            if(localStorage.getItem("bountyCompleted-0") === null){
              localStorage.setItem("bountyCompleted-0",0)
            }     
            if(localStorage.getItem("bountyCompleted-1") === null){
              localStorage.setItem("bountyCompleted-1",0)
            }     
            if(localStorage.getItem("bountyCompleted-2") === null){
              localStorage.setItem("bountyCompleted-2",0)
            }                                        
            var lastLogin = localStorage.getItem("loginDate")
            //console.log(today)
            
            if(localStorage.getItem("currentSeason") === null){
              localStorage.setItem("currentSeason","");
            }
            var currentSeason = localStorage.getItem("currentSeason")
            console.log(d.getUTCFullYear() )
            localStorage.setItem("currentSeason",this.season[d.getMonth()+1]+"-"+d.getUTCFullYear() );     

           if(lastLogin.localeCompare(today) != 0 ){
             localStorage.setItem("GuildGift",0)
             localStorage.setItem("ChallengeScore", 0)
             localStorage.setItem("bountyCompleted-0",0)
             localStorage.setItem("bountyCompleted-1",0)
             localStorage.setItem("bountyCompleted-2",0)

             localStorage.setItem("0-1 Hunted",0)  
             localStorage.setItem("0-2 Hunted",0)  
             localStorage.setItem("0-3 Hunted",0)  
             localStorage.setItem("0-4 Hunted",0)   
             localStorage.setItem("1-1 Hunted",0)  
             localStorage.setItem("1-2 Hunted",0)  
             localStorage.setItem("1-3 Hunted",0)  
             localStorage.setItem("1-4 Hunted",0)
             localStorage.setItem("2-1 Hunted",0)  
             localStorage.setItem("2-2 Hunted",0)  
             localStorage.setItem("2-3 Hunted",0)  
             localStorage.setItem("2-4 Hunted",0)     

             localStorage.removeItem("lastBiomeVisited")                                     
              /*setTimeout(function () {
                 alert("Welcome Back!\nHere's your Login Bonus:\nGrassland Tickets x 15\nCave Tickets x 15\nMountain Tickets x 15\nHappy Hunting :)")
              }, 1000);*/
              
              this.chatTimer = 1;   
              this.dialogCounter++;
              this.textBackdropText.text = "Welcome Back!"
              if(localStorage.getItem("dayCounter") === null){
                localStorage.setItem("dayCounter","0");
              }     
              else{
                if(localStorage.getItem("prevDay") === null){
                  localStorage.setItem("prevDay",today);
                }
                
                localStorage.setItem("dayCounter",parseInt(localStorage.getItem("dayCounter"))+1 );
                if(parseInt(localStorage.getItem("dayCounter")) >= 6){
                  localStorage.setItem("dayCounter","1");
                }
              }         
              localStorage.setItem("giftCount",0)
              localStorage.setItem("giftCountComplete0",0)
              localStorage.setItem("giftCount1",0)
              localStorage.setItem("giftCountComplete1",0)
              localStorage.setItem("giftCount2",0)
              localStorage.setItem("giftCountComplete2",0)                            

              this.loginBonus.loadTexture("loginBonus"+localStorage.getItem("dayCounter") )


              switch(parseInt(localStorage.getItem("dayCounter")) ){
                case 1:
                  this.textBackdropText.text = "Welcome Back!\nHere's your Daily Bonus"
                  localStorage.setItem("TixCount0",parseInt(localStorage.getItem("TixCount0"))+15) 
                  localStorage.setItem("TixCount1",parseInt(localStorage.getItem("TixCount1"))+15) 
                  localStorage.setItem("TixCount2",parseInt(localStorage.getItem("TixCount2"))+15)       
                  localStorage.setItem("giftCount",1)           
                  break;
                case 3:
                  this.textBackdropText.text = "Welcome Back!\nHere's your Daily Bonus"
                  if(localStorage.getItem("blueprintCount") == null ){
                    localStorage.setItem("blueprintCount",0)   
                  }
                  localStorage.setItem("blueprintCount1",parseInt(localStorage.getItem("blueprintCount"))+10)   
                  localStorage.setItem("blueprintCount2",parseInt(localStorage.getItem("blueprintCount"))+10)  
                  localStorage.setItem("blueprintCount3",parseInt(localStorage.getItem("blueprintCount"))+10)  
                  localStorage.setItem("giftCount",1)  
                  break;
                case 5:
                  this.textBackdropText.text = "Welcome Back!\nHere's your Daily Bonus"
                  if(localStorage.getItem("Prismatic Gem Count") == null ){
                    localStorage.setItem("Prismatic Gem Count",0)   
                  }
                  localStorage.setItem("Prismatic Gem Count",parseInt(localStorage.getItem("Prismatic Gem Count"))+5)         
                  localStorage.setItem("giftCount",1)              
                  break;  
                case 2:
                  this.chatTimer = 0;   
                  this.textBackdropText.text = "Welcome Back!\nHere's your Daily Bonus"
                  localStorage.setItem("giftCount",1)  
                  //localStorage.setItem("veteranPoints",parseInt(localStorage.getItem("veteranPoints"))+250)
                  break;   
                case 4:
                  this.chatTimer = 0;   
                  this.textBackdropText.text = "Welcome Back!\nHere's your Daily Bonus"
                  localStorage.setItem("giftCount",1)  
                  //localStorage.setItem("veteranPoints",parseInt(localStorage.getItem("veteranPoints"))+500)
                  break;                     
              }                               
              //localStorage.set    

       
              localStorage.setItem("loginDate",d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getUTCFullYear())  
              localStorage.setItem("dailyPurchase",1)
              localStorage.setItem("firstVisit-shopOom",0);
            }
            else{
              //alert("L")
              var d = new Date();
              var n = d.getHours();
              switch(n){
                case 9:
                  //shiny hour
                  
                  if(parseInt(localStorage.getItem("mutantUnlock")) == 1 ){
                    //this.textBackdropText.text = "Welcome Back!\n Hunters are reporting increased Mutant sightings in the Grasslands"      
                  }         
                  else{
                    /*
                    var ran = Math.floor(Math.random() * 3);
                    if(ran != 0){
                      this.textBackdropText.text = "Did you know?\n UNCOMMON Monster drops are influenced by weapon damage type?"
                    }
                    else{
                      this.textBackdropText.text = "Welcome Back!\n Tap to select a zone to hunt!"
                    }     
                    */               
                  }                   
                  break;
                case 13:
                  //shiny hour
                  
                  if(parseInt(localStorage.getItem("mutantUnlock")) == 1 ){
                    //this.textBackdropText.text = "Welcome Back!\n Hunters are reporting increased Mutant sightings in the Caverns"        
                  }         
                  else{
                    /*
                    var ran = Math.floor(Math.random() * 3);
                    if(ran != 0){
                      this.textBackdropText.text = "Did you know?\n UNCOMMON Monster drops are influenced by weapon damage type?"
                    }
                    else{
                      this.textBackdropText.text = "Welcome Back!\n Tap to select a zone to hunt!"
                    }    
                    */                
                  }         
                                                         
                  break;     
                case 17:
                  //shiny hour
                  if(parseInt(localStorage.getItem("mutantUnlock")) == 1 ){
                    //this.textBackdropText.text = "Welcome Back!\n Hunters are reporting increased Mutant sightings in the Mountains"       
                  }         
                  else{
                    /*
                    var ran = Math.floor(Math.random() * 3);
                    if(ran != 0){
                      this.textBackdropText.text = "Did you know?\n UNCOMMON Monster drops are influenced by weapon damage type?"
                    }
                    else{
                      this.textBackdropText.text = "Welcome Back!\n Tap to select a zone to hunt!"
                    } 
                    */                   
                  }         
                                    
                              
                  break; 
                default:
                  //tips
                  /*
                  if(true){
                    var ran = Math.floor(Math.random() * 3);
                    if(ran != 0){
                      this.textBackdropText.text = "Did you know?\n UNCOMMON Monster drops are influenced by weapon damage type?"
                    }
                    else{
                      this.textBackdropText.text = "Welcome Back!\n Tap to select a zone to hunt!"
                    }
                  }                  
                  */
                  break;                          
              }                
              //this.chatTimer = 1;                 
            }

          }
        //media breakpoint
        if(window.innerHeight < 700){
          this.textBackdropText.fontSize = 18;
          this.textBackdropText2.fontSize = 18;
          
          this.textBackdropText.y = 180 
          this.textBackdropText2.y = this.textBackdropText.y-80        
          this.okayButton2.y = this.game.height/2-60
          
        }     
        else{ 
          
          this.textBackdropText.fontSize = 19;
          this.textBackdropText2.fontSize = 19;
          this.textBackdropText.y = 180
          this.textBackdropText2.y = this.textBackdropText.y-75             
          //this.textBackdropText.fontSize = 24;
          /*
          this.textBackdropText.y = this.game.height-100
          this.textBackdropText2.fontSize = 24;
          this.textBackdropText2.y = this.textBackdropText.y-100      
          */       
        }  
        //minimum res
        if(window.innerHeight <= 650 ){

          this.textBackdropText.fontSize = 18;
          this.textBackdropText2.fontSize = 18;
          
          this.textBackdropText.y = 185
          this.textBackdropText2.y = this.textBackdropText.y-80        
          this.okayButton2.y = this.game.height/2-60             
              
        } 
            
          this.huntStart = false;
          this.tarKey = -1;
          this.tarHuntAlphaKey = 0;
          //this.fireWrite(); 
          

            //remember last biome visited today
            if (localStorage.getItem("lastBiomeVisited") !== null  ) {
              this.markerBiome = parseInt(localStorage.getItem("lastBiomeVisited"));
            }      
            this.monCry = this.add.audio('monCry-'+this.biome+'-1');
            
            var soundKey = parseInt(localStorage.getItem("muted"))
            if(soundKey == 0 ){
              this.sound.loadTexture("sound")
              //localStorage.setItem("muted",1)
            } 
            else{
              this.sound.loadTexture("soundNo")
              //localStorage.setItem("muted",0)
            }            
        }      
        
        
      

        , update: function () {
          if(parseInt(localStorage.getItem("muted")) == 1){
            this.bgSound.stop();
            this.ping.stop();
            this.monCry.stop();
          }
          else{
         
          }
          if(this.markerBiome != -1){
            this.targetOverlay.loadTexture('targetOverlay'); 
          }
          else{
            this.targetOverlay.loadTexture('targetOverlayGuild'); 
          }
          var surgedMon = this.markerBiome+'-'+this.date
          if(localStorage.getItem("Hunting"+this.markerBiome) == null){
            localStorage.setItem("Hunting"+this.markerBiome,"")
          }    
          
          if(parseInt(localStorage.getItem("firstVisit-combat")) >= 33){
            this.Notification.alpha = 0;  
            //this.Notification.alpha = 1;
            for(var i = 4; i < 200; i++){
              //console.log(weapon[i]+" "+i)
              if(typeof weapon[i] != "undefined"){
                //console.log(weapon[i].craft[0].name+" "+weapon[i].craft[1].name)
                var count1 = parseInt(localStorage.getItem(weapon[i].craft[0].name+" Count"));
                var count2 = parseInt(localStorage.getItem(weapon[i].craft[1].name+" Count"));
                this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[i].id));
                if (localStorage.getItem("crafted"+weapon[i].id) === null) {
                  localStorage.setItem("crafted"+weapon[i].id,0)
                  this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[i].id));
                } 
                //console.log("Has this been crafted? "+this.hasCrafted)
                //console.log("weapon "+i+" need 1:"+count1+"/"+weapon[i].craft[0].count+" need 2:"+count2+"/"+weapon[i].craft[1].count)
                if(count1 >= weapon[i].craft[0].count && count2 >= weapon[i].craft[1].count && this.hasCrafted == 0){
                  localStorage.setItem("wep"+i+"Craftable",1)
                  localStorage.setItem("nextWep",i)
                  this.Notification.alpha = 1
                  this.Notification.x = this.selectInventory.x  
                }    
                else{
                  //console.log("not craftable")
                  localStorage.setItem("wep"+i+"Craftable",0)
                }          
              }
            }
  
            if(this.craftFlag != 1 && this.Notification.alpha == 1 ){
              this.chatTimer = 1;
              this.craftFlag = 1;
              this.mapWarden.loadTexture("warden"+this.markerBiome)      

              switch(this.markerBiome){
                case -1:
                  this.chatTimer = 0
                  this.textBackdropText2.text = "Jean, the Collector"    
                  this.textBackdropText.text = "Looks like you can make a NEW weapon.\nYou should get on that"
                  break;                
                case 0:
                  this.textBackdropText2.text = "Neeka, the Sure"    
                  this.textBackdropText.text = "Looks like you can make a NEW weapon.\nYou should get on that"
                  break;
                case 1:
                  this.textBackdropText2.text = "Roz, the Steady"  
                  this.textBackdropText.text = "You have enough materials to craft a NEW weapon.\n Well done"
                  break;
                case 2:
                  this.textBackdropText2.text = "Rayla, the Indifferent"  
                  this.textBackdropText.text = "Looks like you actually gathered enough materials to craft something NEW. Yay ~"
                  break;
              }            
            } 
          }
         


          var huntingMon = localStorage.getItem("Hunting"+this.markerBiome)
          if (parseInt(localStorage.getItem("uncommonUnlock-first")) == 1) {
            localStorage.setItem("uncommonUnlock-first",2)
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden"+this.markerBiome)      
            switch(this.markerBiome){
              
              case -1:
                this.textBackdropText2.text = "Jean, the Collector"  
                this.textBackdropText.text = "Uncommon Monsters have been sighted.\n 2-Star Hunts are now Unlocked."
                break;              
              case 0:
                this.textBackdropText2.text = "Neeka, the Sure"  
                this.textBackdropText.text = "Uncommon Monsters have been sighted.\n 2-Star Hunts are now Unlocked."
                break;
              case 1:
                this.textBackdropText2.text = "Roz, the Steady"  
                this.textBackdropText.text = "Uncommon Monsters have been sighted.\n 2-Star Hunts are now Unlocked."
                break;
              case 2:
                this.textBackdropText2.text = "Rayla, the Indifferent"  
                this.textBackdropText.text = "Uncommon Monsters have been sighted.\n 2-Star Hunts are now Unlocked."
                break;                            
            }                    
          }

          if (parseInt(localStorage.getItem("rareUnlock-first")) == 1) {
            localStorage.setItem("rareUnlock-first",2)
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden"+this.markerBiome)      
            switch(this.markerBiome){
              
              case -1:
                this.textBackdropText2.text = "Jean, the Collector"  
                this.textBackdropText.text = "Rare Monsters have been sighted.\n 3-Star Hunts are now Unlocked."
                break;              
              case 0:
                this.textBackdropText2.text = "Neeka, the Sure"  
                this.textBackdropText.text = "Rare Monsters have been sighted.\n 3-Star Hunts are now Unlocked."
                break;
              case 1:
                this.textBackdropText2.text = "Roz, the Steady"  
                this.textBackdropText.text = "Rare Monsters have been sighted.\n 3-Star Hunts are now Unlocked."
                break;
              case 2:
                this.textBackdropText2.text = "Rayla, the Indifferent"  
                this.textBackdropText.text = "Rare Monsters have been sighted.\n 3-Star Hunts are now Unlocked."
                break;                            
            }                    
          }  
                 
          if (parseInt(localStorage.getItem("legendUnlock-first")) == 1) {
            localStorage.setItem("legendUnlock-first",2)
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden"+this.markerBiome)      
            switch(this.markerBiome){
              
              case -1:
                this.textBackdropText2.text = "Jean, the Collector"  
                this.textBackdropText.text = "Legendary Monsters have been sighted.\n 4-Star Hunts are now Unlocked."
                break;
              case 0:
                this.textBackdropText2.text = "Neeka, the Sure"  
                this.textBackdropText.text = "Legendary Monsters have been sighted.\n 4-Star Hunts are now Unlocked."
                break;
              case 1:
                this.textBackdropText2.text = "Roz, the Steady"  
                this.textBackdropText.text = "Legendary Monsters have been sighted.\n 4-Star Hunts are now Unlocked."
                break;
              case 2:
                this.textBackdropText2.text = "Rayla, the Indifferent"  
                this.textBackdropText.text = "Legendary Monsters have been sighted.\n 4-Star Hunts are now Unlocked."
                break;                            
            }                    
          }  
          //apex chat
          if (parseInt(localStorage.getItem("firstVisit-apex")) == 2  ) {

              localStorage.setItem("firstVisit-apex",3);
            //console.log(surgedMon)
            //localStorage.setItem("bountyCompleted-"+this.markerBiome,2)
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden"+this.markerBiome)
            switch(this.markerBiome){
              
              case -1:
                this.textBackdropText2.text = "Jean, the Collector"  
                this.textBackdropText.text = "Be careful. We've heard reports of Agressive Monster Variants appearing on hunts ..."
                break;              
              case 0:
                this.textBackdropText2.text = "Neeka, the Sure"  
                this.textBackdropText.text = "Be careful. We've heard reports of Agressive Monster Variants appearing on hunts ..."
                break;
              case 1:
                this.textBackdropText2.text = "Roz, the Steady"  
                this.textBackdropText.text = "Careful now. Hunters are reporting that Aggressive Monster Variants have appeared on hunts ..."
                break;
              case 2:
                this.textBackdropText2.text = "Rayla, the Indifferent"  
                this.textBackdropText.text = "So ... uh ... I've heard that Super Aggro Monster Variants are showing up ... be careful"
                break;                            
            }    
          }

          //bounty completed
          if (this.markerBiome != -1 && parseInt(localStorage.getItem("bountyCompleted-"+this.markerBiome)) == 1 &&  parseInt(localStorage.getItem(huntingMon+" Hunted")) >= 10) {
            //console.log(surgedMon)
            localStorage.setItem("bountyCompleted-"+this.markerBiome,2)
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden"+this.markerBiome)
            switch(this.markerBiome){
              case 0:
                this.textBackdropText2.text = "Neeka, the Sure"  
                this.textBackdropText.text = "Well done.\nThanks for addressing our little monster problem"
                break;
              case 1:
                this.textBackdropText2.text = "Roz, the Steady"  
                this.textBackdropText.text = "Many thanks.\nThis should keep their numbers under control for now"
                break;
              case 2:
                this.textBackdropText2.text = "Rayla, the Indifferent"  
                this.textBackdropText.text = "Ugh.\nThanks I guess?"
                break;                            
            }    
          }
          if (parseInt(localStorage.getItem("firstVisit-combat")) == 8 ) {
            this.chatTimer = 1;
            localStorage.setItem("firstVisit-combat",9); 
            this.mapWarden.loadTexture('warden0')
            this.textBackdropText2.text = "Neeka, the Sure"  
            this.textBackdropText.text = "Congratulations on completing your first hunt"   
          } 
          if(parseInt(localStorage.getItem("firstVisit-combat")) == 14 ) {
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden2-angry")
            localStorage.setItem("firstVisit-combat",15); 
            this.textBackdropText2.text = "Rayla, the Indifferent"
            
            this.textBackdropText.text = "What was that??"               
          }      
          else if(parseInt(localStorage.getItem("firstVisit-combat")) >= 20 && parseInt(localStorage.getItem("firstVisit-combat")) <= 21 && parseInt(localStorage.getItem("crafted9")) != 1 && parseInt(localStorage.getItem("equip0")) != 9) {
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden2")
            localStorage.setItem("firstVisit-combat",21); 
            this.textBackdropText2.text = "Rayla, the Indifferent"
            this.textBackdropText.text = "Remember a weapon that does EARTH and BASH damage!" 
            this.Notification.alpha = 1
            this.Notification.x = this.selectInventory.x
          }          
          else if(parseInt(localStorage.getItem("firstVisit-combat")) >= 20 && parseInt(localStorage.getItem("firstVisit-combat")) <= 22 && parseInt(localStorage.getItem("crafted9")) == 1 && parseInt(localStorage.getItem("equip0")) != 9) {
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden2")
            localStorage.setItem("firstVisit-combat",21); 
            this.textBackdropText2.text = "Rayla, the Indifferent"
            this.textBackdropText.text = "You need to EQUIP the weapon before we try again ..."  
            if(parseInt(localStorage.getItem("firstVisit-combat")) == 22){
              localStorage.setItem("firstVisit-combat",21); 
            } 
          }               
          else if(parseInt(localStorage.getItem("firstVisit-combat")) >= 20 && parseInt(localStorage.getItem("firstVisit-combat")) <= 21 && parseInt(localStorage.getItem("crafted9")) == 1 && parseInt(localStorage.getItem("equip0")) == 9) {
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden2")
            localStorage.setItem("firstVisit-combat",21); 
            this.textBackdropText2.text = "Rayla, the Indifferent"
            this.textBackdropText.text = "Okay. Let's try this again.\n Don't mess this up ..."    
          }           
          if(parseInt(localStorage.getItem("firstVisit-combat")) == 24 ) {
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden1")
            localStorage.setItem("firstVisit-combat",25); 
            this.textBackdropText2.text = "Roz, the Steady" 
            this.textBackdropText.text = "Ah.\nThe new Hunter.\nWelcome"               
          }    
          if(parseInt(localStorage.getItem("firstVisit-combat")) == 31){
            this.chatTimer = 1;
            this.mapWarden.loadTexture("warden1")
            localStorage.setItem("firstVisit-combat",32); 
            localStorage.setItem("firstVisit-combat-lose",1);
            this.textBackdropText2.text = "Roz, the Steady" 
            this.textBackdropText.text = "Take care, my friend"                        
          }           
       

          if(this.targetOverlay.alpha == 1){
            this.targetOverlay.y += (0 - this.targetOverlay.y) * 0.3;
          }
          else{
            this.targetOverlay.y = this.game.height
            this.tarHuntAlphaKey = 0;
          }
          this.selectHighlight.x += (this.highlightTar - this.selectHighlight.x) * 0.5;
          if( (this.highlightTar - this.selectHighlight.x) <= 1 && this.tarKey == 2){
            this.game.state.start('shop') 
          }
          if( (this.selectHighlight.x - this.highlightTar ) <= 1 && this.tarKey == 0){
            this.game.state.start('craft') 
            
          }
          if(this.transition.alpha == 1 && this.huntStart == false){
            if(this.transition.y > -1*this.game.height ){
              this.transition.y-=25;
            }
            else{
              if(this.transition.scale.y == 1){
                this.transition.scale.y = -1
              }
              localStorage.setItem("fromHunt",0)
              //this.transition.scale.y *= -1;  
              //this.transition.alpha = 0;
            }
          }
          else if(this.transition.alpha == 1 && this.huntStart == true){
            if(this.transition.scale.y == -1){
              this.transition.scale.y = 1
            }            
            if(this.transition.y >  -1*this.game.height ){
              this.transition.y-=25     
            }
            else{
              this.game.state.start('game'); 
            }
          }

          if(this.targetOverlay.alpha == 1 && (this.targetOverlay.y <= 2)){

            this.wardenHunt.y = (this.game.height/2)+240
   

            this.tixText2.y = this.wardenHunt.y-30

            //wocco too high
            if((this.monKey == 4) && this.markerBiome == 0){
              this.targetMon.y = this.game.height/2-350
              //media breakpoint                     
            }
            else if(this.monKey == 99 && this.markerBiome == 0){
              this.targetMon.y = this.game.height/2-350
              //media breakpoint 
              if(window.innerHeight < 700){
                this.targetMon.y = this.game.height/2-300
              }                               
            }  
            else if(this.monKey == 1 && this.markerBiome == 1){
              this.targetMon.y = this.game.height/2-300
              //media breakpoint 
              if(window.innerHeight < 700){
                this.targetMon.y = this.game.height/2-260
              }                              
            } 
            else if(this.monKey == 2 && this.markerBiome == 1){
              this.targetMon.y = this.game.height/2-300
              //media breakpoint 
              if(window.innerHeight < 700){
                this.targetMon.y = this.game.height/2-260
              }                              
            }                        
            else if(this.monKey == 4 && this.markerBiome == 1){
              this.targetMon.y = this.game.height/2-300
              //media breakpoint 
              if(window.innerHeight < 700){
                this.targetMon.y = this.game.height/2-260
              }                                 
            }
            else if(this.monKey == 99 && this.markerBiome == 1){
              this.targetMon.y = this.game.height/2-310
              //media breakpoint 
              if(window.innerHeight < 700){
                this.targetMon.y = this.game.height/2-260
              }                               
            }                         
            else if(this.monKey == 99 && this.markerBiome == 2){
              this.targetMon.y = this.game.height/2-325
              //media breakpoint 
              if(window.innerHeight < 700){
                this.targetMon.y = this.game.height/2-250
                this.targetMon.width = 150;
                this.targetMon.height = 150;
              }                                                 
            }                        
            else{
              this.targetMon.y = this.game.height/2-300               
                             
            }

            //minimum res
            if(window.innerHeight <= 650 ){

              if((this.monKey == 4) && this.markerBiome == 0){
                this.targetMon.y = this.game.height/2-350                 
              }
              else if(this.monKey == 99 && this.markerBiome == 0){
                this.targetMon.y = this.game.height/2-350                            
              } 
              else{
                this.targetMon.y = this.game.height/2-300 
              }              
                  
            }              
              
            this.targetarrowLeft.y = this.game.height/2-200
            this.targetarrowRight.y = this.game.height/2-200
            
            
            if(this.tarHuntAlphaKey  < 1){
              this.tarHuntAlphaKey += 1
            }
            else{
              this.tarHuntAlphaKey = 1
            }
            
            this.targetarrowLeft.alpha = this.tarHuntAlphaKey
            this.targetarrowRight.alpha = this.tarHuntAlphaKey
            this.targetMon.alpha = this.tarHuntAlphaKey;

           

            this.targetMonCommonDrop.alpha = this.tarHuntAlphaKey;
            this.targetMonUncommonDrop1.alpha = this.tarHuntAlphaKey;
            this.targetMonUncommonDrop2.alpha = this.tarHuntAlphaKey;  
            this.targetMonUncommonDrop3.alpha = this.tarHuntAlphaKey;
            this.targetMonRareDrop.alpha = this.tarHuntAlphaKey;

            this.targetMonHuntText.alpha = this.tarHuntAlphaKey;    
            
            this.exitTarget.alpha = this.tarHuntAlphaKey;       
            this.targetOverlayRank.alpha = this.tarHuntAlphaKey; 
            this.targetMonWeakText.alpha = this.tarHuntAlphaKey;
            this.targetHighScoreText.alpha = this.tarHuntAlphaKey;       
            this.wardenHunt.alpha = this.tarHuntAlphaKey
            this.tixText2.alpha = this.tarHuntAlphaKey          

            if(window.innerHeight > 700){
              var newY = this.targetOverlayRank.height/2+55;
              this.targetMonCommonDrop.y = newY
              this.targetMonUncommonDrop1.y = newY
              this.targetMonUncommonDrop2.y = newY
              this.targetMonUncommonDrop3.y = newY
              this.targetMonRareDrop.y = newY
            }      
            if(window.innerHeight >= 900){
              var newY = this.targetOverlayRank.height/2+55;
              this.targetMonCommonDrop.y = newY
              this.targetMonUncommonDrop1.y = newY
              this.targetMonUncommonDrop2.y = newY
              this.targetMonUncommonDrop3.y = newY
              this.targetMonRareDrop.y = newY
            }            
            if(window.innerHeight > 1000){
              var newY = this.targetOverlayRank.height/2+55;
              this.targetMonCommonDrop.y = newY
              this.targetMonUncommonDrop1.y = newY
              this.targetMonUncommonDrop2.y = newY
              this.targetMonUncommonDrop3.y = newY
              this.targetMonRareDrop.y = newY
            }    

            //no other monsters at guild and no drops
            if(this.markerBiome == -1){
              this.targetarrowLeft.alpha = 0
              this.targetarrowRight.alpha = 0
              this.targetMonCommonDrop.alpha = 0;
              this.targetMonUncommonDrop1.alpha = 0;
              this.targetMonUncommonDrop2.alpha = 0;  
              this.targetMonUncommonDrop3.alpha = 0;
              this.targetMonRareDrop.alpha = 0;    
              this.targetMonHuntRewards.alpha = 0;                
            } 
            this.targetMon.loadTexture(monster[this.markerBiome][this.monKey].name);  

            this.targetMonCommonDrop.loadTexture(deadMonster[this.markerBiome][this.monKey].commonRewards[2])        
            this.targetMonUncommonDrop1.loadTexture(deadMonster[this.markerBiome][this.monKey].uncommonRewards[1])   
            this.targetMonUncommonDrop2.loadTexture(deadMonster[this.markerBiome][this.monKey].uncommonRewards[2])   
            this.targetMonUncommonDrop3.loadTexture(deadMonster[this.markerBiome][this.monKey].uncommonRewards[3]) 
            this.targetMonRareDrop.loadTexture(deadMonster[this.markerBiome][this.monKey].rareRewards[1])       
                

            this.targetOverlayRank.loadTexture("targetOverlay_rank"+monster[this.markerBiome][this.monKey].rank) 
            


            if (localStorage.getItem("HighScore"+monster[this.markerBiome][this.monKey].name) === null ) {
              localStorage.setItem("HighScore"+monster[this.markerBiome][this.monKey].name,0)
            }
            this.targetHighScoreText.text = localStorage.getItem("HighScore"+monster[this.markerBiome][this.monKey].name)
            if(this.markerBiome == -1){
              this.targetHighScoreText.text = parseInt(localStorage.getItem("DailyHuntTarget"));
            }
            this.wardenHunt.loadTexture('wardenHunt'+this.markerBiome);
         

            //not unlocked
            this.canHunt = false
            //uncommon lock
            if(monster[this.markerBiome][this.monKey].rank >= 2 && parseInt(localStorage.getItem("uncommonUnlock")) == 0){
              this.targetMon.tint = 0x00000;
              this.targetMonWeakText.text= "???"
              this.targetMonHuntText.text = "???" 
              this.targetMonCommonDrop.alpha = 0;
              this.targetMonUncommonDrop1.alpha = 0;
              this.targetMonUncommonDrop2.alpha = 0;  
              this.targetMonUncommonDrop3.alpha = 0;
              this.targetMonRareDrop.alpha = 0;   
              this.targetMonHuntRewards.alpha = 0;     
              this.bountyCount.alpha = 0                       
            }
            //rare lock
            else if(monster[this.markerBiome][this.monKey].rank >= 3 && parseInt(localStorage.getItem("rareUnlock")) == 0){
              this.targetMon.tint = 0x00000;
              this.targetMonWeakText.text= "???"
              this.targetMonHuntText.text = "???"     
              this.targetMonCommonDrop.alpha = 0;
              this.targetMonUncommonDrop1.alpha = 0;
              this.targetMonUncommonDrop2.alpha = 0;  
              this.targetMonUncommonDrop3.alpha = 0;
              this.targetMonRareDrop.alpha = 0;    
              this.targetMonHuntRewards.alpha = 0;       
              this.bountyCount.alpha = 0                
            }
            //legend lock
            else if(monster[this.markerBiome][this.monKey].rank >= 4 && parseInt(localStorage.getItem("legendHuntUnlock")) == 0){
              this.targetMon.tint = 0x00000;
              this.targetMonWeakText.text= "???"
              this.targetMonHuntText.text = "???"
              this.targetMonCommonDrop.alpha = 0;
              this.targetMonUncommonDrop1.alpha = 0;
              this.targetMonUncommonDrop2.alpha = 0;  
              this.targetMonUncommonDrop3.alpha = 0;
              this.targetMonRareDrop.alpha = 0;     
              this.targetMonHuntRewards.alpha = 0;       
              this.bountyCount.alpha = 0      
            }     
            else{
              this.canHunt = true;
              this.targetMon.tint = 0xffffff; 
              switch(monster[this.markerBiome][this.monKey].elemDef){
                case 0:
                  this.targetMonWeakText.text="\u2022 FIRE \u2022 "
                  break;
                case 1:
                  this.targetMonWeakText.text="\u2022 NATURE \u2022 "
                  break;
                case 2:
                  this.targetMonWeakText.text="\u2022 EARTH \u2022 "
                  break;                                
              }
              if(monster[this.markerBiome][this.monKey].slashDef <= 0){
                this.targetMonWeakText.text += "SLASH \u2022 "
              }
              if(monster[this.markerBiome][this.monKey].stabDef <= 0){
                this.targetMonWeakText.text += "STAB \u2022 "
              }
              if(monster[this.markerBiome][this.monKey].bashDef <= 0){
                this.targetMonWeakText.text += "BASH \u2022 "
              }             
              var title = "HUNT A "+monster[this.markerBiome][this.monKey].nameTitle
              if(this.monKey == 99){
                var title = "HUNT "+monster[this.markerBiome][this.monKey].nameTitle
              }
              
              var surgedMon = localStorage.getItem("monBonus")
              var currentMon = this.markerBiome+"-"+this.monKey
              if(localStorage.getItem("Hunting"+this.markerBiome) == null){
                localStorage.setItem("Hunting"+this.markerBiome,"")
              }              
              var huntingMon = localStorage.getItem("Hunting"+this.markerBiome)

              
              console.log(huntingMon+" "+currentMon)
              if(huntingMon.localeCompare(currentMon) == 0 && parseInt(localStorage.getItem("bountyCompleted-"+this.markerBiome)) == 1 ){
                this.targetMonHuntText.y = 30
                this.targetMonHuntText.text = title.toUpperCase()
                this.targetMonHuntRewards.alpha = 1
                this.bountyCount.alpha = 1
                if(localStorage.getItem(huntingMon+" Hunted") == null){
                  localStorage.setItem(huntingMon+" Hunted",0)
                }
                this.bountyCount.text = 10-parseInt(localStorage.getItem(huntingMon+" Hunted"))
              }             
              else{
                this.targetMonHuntText.y = 30
                this.targetMonHuntText.text = title.toUpperCase()
                 this.targetMonHuntRewards.alpha = 0
                 this.bountyCount.alpha = 0
              } 
              
            }                   
          }
          else{
            this.specialDiscount.alpha = 0;
            this.tixText2.y = -1000
            this.wardenHunt.y = -1000
            this.targetarrowLeft.y = -1000
            this.targetarrowRight.y = -1000

            this.targetarrowLeft.alpha = 0
            this.targetarrowRight.alpha = 0      
            this.targetMon.alpha = 0;    
            this.targetOverlayRank.alpha = 0;   

            this.targetMonCommonDrop.alpha = 0;
            this.targetMonUncommonDrop1.alpha = 0;
            this.targetMonUncommonDrop2.alpha = 0;  
            this.targetMonUncommonDrop3.alpha = 0;
            this.targetMonRareDrop.alpha = 0;       
            
            this.targetMonWeakText.alpha = 0;
            this.targetHighScoreText.alpha = 0;

            this.targetMonHuntText.alpha = 0;    
             this.targetMonHuntRewards.alpha = 0;
             this.bountyCount.alpha = 0
            this.exitTarget.alpha = 0;

            this.wardenHunt.alpha = 0
            this.tixText2.alpha = 0
          }


          
          if(localStorage.getItem("dayCounter") === null){
            localStorage.setItem("dayCounter","0");
          }  
          this.loginBonus.loadTexture("loginBonus"+localStorage.getItem("dayCounter") ) 
          this.textBackdropText.x = Math.floor( this.textBackdropText.x )
          this.textBackdropText.y = Math.floor( this.textBackdropText.y )
          //this.textBackdropText.smoothed = false

          this.Notification2.alpha = 0; 
          for(var i = 0; i < 2;i++){
            if (localStorage.getItem("TixCount"+i) === null || parseInt(localStorage.getItem("TixCount"+i)) == 0 ) {
              localStorage.setItem("huntingTip",0)
              if(this.veteranPointHolder >= 250){
                //this.Notification2.alpha = 1;
              }
               
            }
          }

          this.totalTixCount = parseInt(localStorage.getItem("TixCount0"))+parseInt(localStorage.getItem("TixCount1"))+parseInt(localStorage.getItem("TixCount2"));
          if(this.totalTixCount <= 0){
            //this.Notification2.alpha = 1;
          }
          this.rankText.text = this.currentRank
          
          this.veteranRankHolder = parseInt(localStorage.getItem("veteranRank"));
          this.veteranPointHolder = parseInt(localStorage.getItem("veteranPoints"))

          //this.Notification3.alpha = 0;
          if(this.veteranPointHolder >= 100000 && parseInt(localStorage.getItem("titlesBought")) < gameConfig.titleCount  ){
            //this.Notification3.alpha = 1;
          }

          if(this.veteranPointHolder > this.veteranPointHolder2){
            this.veteranPointHolder2++;
          }
          if(this.veteranPointHolder < this.veteranPointHolder2){
            this.veteranPointHolder2--;
          }          

          if(this.veteranRankHolder > this.veteranRankHolder2){
            this.veteranRankHolder2++;
          }  
          if(this.veteranRankHolder < this.veteranRankHolder2){
            this.veteranRankHolder2--;
          }  
                           
          this.veteranRankText.text = "Veteran Rank: "+this.veteranRankHolder2
          this.veteranPointText.text = "Veteran Points: "+this.veteranPointHolder2
          
          var rankHolder = Math.floor(parseInt(localStorage.getItem("currentRank"))/10);
          //console.log(rankHolder)
          if(rankHolder > 2){this.okayButton
            rankHolder = 2;
          }
          this.hubrankBadge.loadTexture('rankBadge-'+rankHolder)   
          this.rankText.text = this.currentRank;   
          
          if(this.chatTimer > 0){   
            this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
            this.textBackdrop.alpha = 1;
            this.speechBackdrop.alpha = 1;

            this.textBackdrop.x = this.game.width/2;
            
            if(this.textBackdrop.width < this.game.width){
              this.textBackdrop.width+=20;
            }
            if(this.textBackdrop.height < this.game.height){
              this.textBackdrop.height+=20;
            }            
            
            if(this.textBackdrop.height >= this.game.height && this.textBackdrop.width >= this.game.width){
              this.textBackdropText.alpha = 1;
              this.textBackdropText2.alpha = 1;
              this.okayButton2.alpha = 1
              this.okayButton2.x = this.game.width/2

              if(parseInt(localStorage.getItem("firstVisit-combat")) == 33){
                var ogWidth = this.okayButton2.width
                var ogHeight = this.okayButton2.height

                //this.ogWidthy = this.okayButton2.width
                //this.ogHeighty = this.okayButton2.height

                this.okayButton2.loadTexture('noButton')
                this.okayButton2.x = this.game.width/2+100
                this.okayButton3.x = this.game.width/2-100
                this.okayButton3.y = this.okayButton2.y+2

                this.okayButton2.width = ogWidth
                this.okayButton2.height = ogHeight
                this.okayButton3.width = ogWidth
                this.okayButton3.height = ogHeight                
              }
              if(parseInt(localStorage.getItem("firstVisit-combat")) == 34){
                this.okayButton2.loadTexture('okay')
                this.okayButton2.x = this.game.width/2

                this.okayButton2.width = this.okayButton2.origWidth 
                this.okayButton2.height = this.okayButton2.origHeight
                //this.okayButton2.height = this.ogHeighty              

              }
            }
            //this.submitButton.alpha = 0;
            //this.returnButton.alpha = 0;       
          } 
          else{
            this.mapWarden.x += (this.game.width - this.mapWarden.x) * 0.1; 
            //this.submitButton.alpha = 1;
            //this.returnButton.alpha = 1;
            this.textBackdrop.alpha = 0;
            

            this.textBackdrop.width = this.game.width/1.5
            this.textBackdrop.height = this.game.height/1.5       

            this.speechBackdrop.alpha = 0;
            this.textBackdropText.alpha = 0;
            this.textBackdropText2.alpha = 0
            this.okayButton2.alpha = 0
            this.okayButton2.x = -this.game.width
            this.okayButton3.x = -this.game.width

            this.textBackdrop.x = this.game.width*2;            
            
          }
          
          if (localStorage.getItem("huntingTip") === null) {
            localStorage.setItem("huntingTip",0)
          } 
          var huntingTip = parseInt(localStorage.getItem("huntingTip"))-1
          if(huntingTip > -1){
            this.hubBonus3.alpha = 1;
            this.hubBonus3.loadTexture('hubBonus3-'+huntingTip)
          }
          else{
            this.hubBonus3.alpha = 0;
          }
          //localStorage.setItem("huntingTip",this.biome+1);          
          
          //this.Notification.alpha = 0;  
          var inveNum = localStorage.getItem(guildItem[this.weekOfMonth].name+" Count")
          if(inveNum >= guildItem[this.weekOfMonth].qty ){
            //this.Notification.alpha = 1;  
          }

          
          switch(this.markerBiome){
            case -1:
              this.map.loadTexture('guildHub'); 
              this.huntTickets.loadTexture('guildTix');
              break;            
            case 0:
              this.map.loadTexture('grasslandsHub'); 
              this.huntTickets.loadTexture('grasslandTix');
              break;
            case 1:
              this.map.loadTexture('caveHub'); 
              this.huntTickets.loadTexture('caveTix');
              break;
            case 2:
              this.map.loadTexture('mountainHub'); 
              this.huntTickets.loadTexture('mountainTix');
              break;                
          }
          var d = new Date();
          var date = d.getDate();
          var day = d.getDay();
          ////console.log("date "+date+" length: "+ monster[this.markerBiome].length+" multiplication "+date/(monster[this.markerBiome].length-1))
          //console.log (this.markerBiome)
          //console.log(date) 
          //console.log("asd "+(monster[this.markerBiome].length))
    
          var monlib = this.markerBiome 
      
          var size = monster[monlib].filter(function(value) { 
            //.console.log("monster "+value)
            return value !== undefined 
          }).length -1
          //console.log(size)
          if(date > size){
            ////console.log("asd "+Math.floor(date/(monster[this.markerBiome].length-1)))
            ////console.log("asasd "+(monster[this.markerBiome].length-1))
            //date = 23
            //console.log("dat "+date)
            //console.log(Math.floor(date/(size))*(size))
            date -= Math.floor(date/(size))*(size)
            //console.log("dat2 "+date)
            if(date <= 0){
              date = 1;
            }
          }      

          //console.log(date)          
          
          this.date = date;      
          if(this.markerBiome == -1){
            this.hubBonus1Detail.alpha = 0;
            this.hubBonus1.alpha = 0;
          }
          else{
            this.hubBonus1Detail.loadTexture('hubBonus1-'+this.markerBiome+'-'+date)
            this.hubBonus1.alpha = 1;
            localStorage.setItem("monBonus",this.markerBiome+'-'+date)            
            this.hubBonus1Detail.alpha = 1
          }

          //monster[0][1]

         
          this.tixDiscount[this.markerBiome] = 1

          if(this.biome == this.markerBiome && this.day < 5){
            this.tixDiscount[this.markerBiome] = 4
            //this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/1"
            if(this.targetOverlay.alpha == 1){
              this.specialDiscount.alpha = 1;
            }
            else{
              this.specialDiscount.alpha = 0;
            }
            this.hubBonus2.loadTexture('hubBonus2-'+this.biome);
                    
          }
          else if(this.day >= 5){
            this.tixDiscount[this.markerBiome] = 4
            //this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/1"
            if(this.targetOverlay.alpha == 1){
              this.specialDiscount.alpha = 1;
            }
            else{
              this.specialDiscount.alpha = 0;
            }
            this.hubBonus2.loadTexture('hubBonus2-3'); 
          }          
          
          if(this.markerBiome == -1){
            this.specialDiscount.alpha = 0;
           // this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/"+gameConfig.tixCost
          }
          this.tixCost = Math.floor( (gameConfig.tixCost*monster[this.markerBiome][this.monKey].rank)/this.tixDiscount[this.markerBiome])
          if(this.markerBiome == -1){
            this.tixCost = 1 
          }
          localStorage.setItem("TixCost",this.tixCost)
          
          this.tixText2.text = localStorage.getItem("TixCount"+this.markerBiome)+"/"+this.tixCost
          this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)

          if(parseInt(localStorage.getItem("TixCount"+this.markerBiome)) < this.tixCost){
            this.canHunt = false
            this.tixText2.fill= 'red';
            this.tixWarning();
          }
          else{
            this.tixText2.fill= '#fff';
          }
          if(!this.canHunt){
            this.wardenHunt.loadTexture("wardenHunt-No")
          }             

        }    
        , tixWarning: function(){    
          if(this.tixWarningFlag != 1  && parseInt(localStorage.getItem("firstVisit-combat")) >= 33 && parseInt(localStorage.getItem("giftCount")) == 1 && parseInt(localStorage.getItem("GuildGift")) != 1){
            if(this.chatTimer != 1){
            
              this.mapWarden.loadTexture("warden"+this.markerBiome)      

            
              switch(this.markerBiome){
                case -1:
                  var score = parseInt(localStorage.getItem("ChallengeScore"))
                  var globalScore = parseInt(localStorage.getItem("DailyHuntTarget"))                  
                  this.textBackdropText2.text = "Jean, the Collector"    
                  if(parseInt(localStorage.getItem("GuildGift")) == 0 && parseInt(localStorage.getItem("TixCount-1")) <= 0 ){
                    this.textBackdropText.text = "Welcome to the Hunt Challenge!\nHere's your Daily Guild Ticket. \n\nGuild Ticket x 1"
                    localStorage.setItem("GuildGift",1)
                    localStorage.setItem("TixCount-1",parseInt(localStorage.getItem("TixCount-1"))+1)                    
                  }
                  else if(parseInt(localStorage.getItem("GuildGift")) == 2){
                    localStorage.setItem("GuildGift",3)
                    //overwrite global score
                    if(score > globalScore){
                      this.textBackdropText.text = "Well done! You've set a new GLOBAL HIGH SCORE.\nGuild Token x 3\nUse those to craft charms"
                      if( localStorage.getItem("Guild Token Count") === null ){
                        localStorage.setItem("Guild Token Count",3) 
                      }
                      localStorage.setItem("Guild Token Count",parseInt(localStorage.getItem("Guild Token Count"))+3)   
                      this.setChallengeTarget(score);
                    }
                    else{
                      this.textBackdropText.text = "Seems like you didn't set a new record!\nTry again tomorrow!"
                    }

                  }
                  
                  break;                
                case 0:
                  this.textBackdropText2.text = "Neeka, the Sure"    
                  this.textBackdropText.text = "Looks like you're out of Grassland Tickets.\n Grab some more from the Shop"
                  this.Notification3.alpha = 1
                  break;
                case 1:
                  this.textBackdropText2.text = "Roz, the Steady"  
                  this.textBackdropText.text = "Looks like you're out of Cave Tickets.\n Grab some more from the Shop"
                  this.Notification3.alpha = 1
                  break;
                case 2:
                  this.textBackdropText2.text = "Rayla, the Indifferent"  
                  this.textBackdropText.text = "Looks like you're out of Mountain Tickets.\n Grab some more from the Shop"
                  this.Notification3.alpha = 1
                  break;
              }
            }
            this.chatTimer = 1;
            if((parseInt(localStorage.getItem("GuildGift")) == 4 ) && this.markerBiome == -1){
              this.chatTimer = 0;
            }
            //this.Notification3.alpha = 1
            this.Notification3.x = this.selectShop.x    
            this.tixWarningFlag = 1            
          }
           
        }   
        , targetHunt: function(){
          //tutorial
          //console.log(this.markerBiome != 2 && parseInt(localStorage.getItem("firstVisit-combat")) < 22)
          if(this.markerBiome != 2 && parseInt(localStorage.getItem("firstVisit-combat")) <= 22){
            this.chatTimer = 1;
              this.textBackdropText2.text = "Rayla, the Indifferent"
              var location = ""
              switch(this.markerBiome){
                case 0:
                  location = "GRASSLANDS"
                  break;
                case 1:
                  location = "CAVES"
                  break;                           
              }   
              this.mapWarden.loadTexture("warden2")            
              this.textBackdropText.text = "I said MOUNTAIN, not the "+location+"..."
          }
          else{
            this.targetOverlay.alpha = 1;
            if(parseInt(localStorage.getItem("muted")) == 0){
              this.ping.play();
      
            }                 
            
          }
          
          if(parseInt(localStorage.getItem("bountyCompleted-"+this.markerBiome)) == 0 && parseInt(localStorage.getItem("firstVisit-combat")) >= 30){
            localStorage.setItem("bountyCompleted-"+this.markerBiome,1)
            this.chatTimer = 1;
            this.mapWarden.loadTexture('warden'+this.markerBiome)
            var surgedMon = localStorage.getItem("monBonus")
            var bountyMon = surgedMon.split("-");

            //console.log("bounty mon "+bountyMon[1])
            if(parseInt(bountyMon[1]) == 3 && parseInt(localStorage.getItem("uncommonUnlock")) == 0){
              var ran = Math.floor(Math.random() * 2)+1;
              bountyMon[1] = ran;
            }
            if(parseInt(bountyMon[1]) == 4 && parseInt(localStorage.getItem("rareUnlock")) == 0){
              var ran = Math.floor(Math.random() * 3)+1;
              bountyMon[1] = ran;
            }  
            if(parseInt(bountyMon[1]) == 5 && parseInt(localStorage.getItem("legendHuntUnlock")) == 0){
              var ran = Math.floor(Math.random() * 4)+1;
              bountyMon[1] = ran;
            }                        
            //console.log("updated bounty mon "+bountyMon[1])
  
            var monName = monster[bountyMon[0]][bountyMon[1]].nameTitle
            var monNampeUpper = monName.toUpperCase();
            console.log("Catch "+this.markerBiome+"-"+bountyMon[1])
            localStorage.setItem("Hunting"+this.markerBiome,this.markerBiome+"-"+bountyMon[1])
            switch(this.markerBiome){
              case 0:
                this.textBackdropText2.text = "Neeka, the Sure"  
                this.textBackdropText.text = "Hunter, we've been having a "+monNampeUpper+" problem."
                break;
              case 1:
                this.textBackdropText2.text = "Roz, the Steady"  
                this.textBackdropText.text = "The "+monNampeUpper+" population is too great. We must cull the herd"
                break;
              case 2:
                this.textBackdropText2.text = "Rayla, the Indifferent"  
                this.textBackdropText.text = "There's too many "+monNampeUpper+" around.\nGet rid of them."
                break;                            
            }
          }
          
        }
        , prevMon: function(){
          if(this.targetarrowLeft.alpha == 1){
            this.monKey--
            console.log(this.monKey)
            if(this.monKey <= 0){
              this.monKey = 99
            }
            if(this.monKey <= 98 && this.monKey > 4 ){
              this.monKey = 4
            }          
            ///this.targetOverlay.alpha = 1;            
          }

        }        
        , nextMon: function(){
          if(this.targetarrowRight.alpha == 1){
            this.monKey++
            console.log(this.monKey)
            if(this.monKey > 99){
              this.monKey = 1
            }               
            if(this.monKey > 4){
              this.monKey = 99
            }          
            console.log("after "+this.monKey)
            ///this.targetOverlay.alpha = 1;
          }

        }   
        , exitHunt: function(){
          if(this.exitTarget.alpha == 1){
            if(parseInt(localStorage.getItem("muted")) == 0){
              this.ping.play();
      
            }      
            this.targetOverlay.alpha = 0;
            this.monKey = 1
          }

        }               
        , hunt: function (unit) {
            //this.wardenHunt.width = 460;
            //this.wardenHunt.height = 260;  
              //localStorage.setItem("monSize","large");
              //localStorage.setItem("monName",monster[this.biome][1].name);
              //this.game.state.start('win');
            if(this.canHunt && (parseInt(localStorage.getItem("firstVisit-combat")) >= 30 || (parseInt(localStorage.getItem("firstVisit-combat")) == 22 && this.monKey == 1) )){
              if(parseInt(localStorage.getItem("muted")) == 0){
                this.ping.play();
        
              }      
              this.bgSound.stop();
              localStorage.setItem("Markerbiome",this.markerBiome)
              localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-this.tixCost);
              localStorage.setItem("targetID",this.monKey)
              //this.game.state.start('game');       
              this.transition.alpha = 1;
              this.huntStart = true;
              
              if(parseInt( localStorage.getItem("fromHunt")) == 1){
                this.transition.scale.y *= -1;  
                
                localStorage.setItem("fromHunt",0)
              }
              console.log("transition "+this.transition.scale.y)              
              this.transition.y = this.game.height*1.5
              if(parseInt(localStorage.getItem("firstVisit-combat")) == 22){
                localStorage.setItem("firstVisit-combat",23); 
              }
             
            }
            else if (parseInt(localStorage.getItem("firstVisit-combat")) < 22 ){
              this.chatTimer = 1;
              this.textBackdropText2.text = "Rayla, the Indifferent"              
              this.textBackdropText.text = "You're not ready yet ..."             
            }            
            else if (parseInt(localStorage.getItem("firstVisit-combat")) == 22 && this.monKey != 1){
              this.chatTimer = 1;
              this.textBackdropText2.text = "Rayla, the Indifferent"              
              this.textBackdropText.text = "I said HUNT a NOOT ..."                     
            }
          
            if(this.biome == this.markerBiome && (localStorage.getItem("TixCount"+this.markerBiome)-1) >= 0 && this.day < 5){
              //localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-1);
              //localStorage.setItem("Markerbiome",this.markerBiome)
              
              //this.game.state.start('warden');
            }
            else if(this.day >= 5 && (localStorage.getItem("TixCount"+this.markerBiome)-1) >= 0){
              //localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-1);
              //localStorage.setItem("Markerbiome",this.markerBiome)
              
              //this.game.state.start('warden');
            }          
            else if ((localStorage.getItem("TixCount"+this.markerBiome)-3) >= 0){
              //localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-3);
              //localStorage.setItem("Markerbiome",this.markerBiome)
              

              //this.game.state.start('warden');
            }
            else{
              //alert("Not Enough Tickets! :(")
            }
            
            
        }
        , goToShop: function (unit) {
            //this.selectShop.width = 250;
            //this.selectShop.height = 250  
            //this.ping.play();
            //this.bgSound.stop();          
            //this.selectShop.clicked = true;
            //window.location.href = "index2.html";
            //console.log("leader")
            if(parseInt(localStorage.getItem("muted")) == 0){
              this.ping.play();
      
            }      
            this.bgSound.stop(); 
            this.highlightTar = this.selectShop.x
            this.tarKey = 2;
            this.selectHub.loadTexture ('tab_hub_unselected');
            //this.game.state.start('shop')           
        }  
        , goToArchive: function (unit) {
            //this.selectShop.width = 250;
            //this.selectShop.height = 250  
            if(parseInt(localStorage.getItem("muted")) == 0){
              this.ping.play();
      
            }      
            this.bgSound.stop(); 
            this.game.state.start('archive') 
            //this.selectShop.clicked = true;
            //window.location.href = "index2.html";
            //console.log("leader")
        }      
        , goToCraft: function (unit) {
           //localStorage.setItem('state','craft')
           
           if(parseInt(localStorage.getItem("muted")) == 0){
            this.ping.play();
    
          }      
           this.bgSound.stop();     
           this.highlightTar = this.selectInventory.x
           this.tarKey = 0;
           this.selectHub.loadTexture ('tab_hub_unselected');                
           //this.game.state.start('craft')          
            
        }    
        , goToGuild: function (unit) {
           //localStorage.setItem('state','craft')
           if(parseInt(localStorage.getItem("muted")) == 0){
            this.ping.play();
    
          }      
            this.bgSound.stop();          
           this.game.state.start('rank') 
            
        }        
        ,left: function () {
          this.markerBiome--
          if(this.markerBiome < 0){
            this.markerBiome = 2
          }
          localStorage.setItem("lastBiomeVisited",this.markerBiome)
        }
        ,right: function () {   
          this.markerBiome++
          if(this.markerBiome > 2){
            this.markerBiome = 0
          }
          localStorage.setItem("lastBiomeVisited",this.markerBiome)
        }      
        ,doNothing: function () {   


        }               
        , hideChat: function (unit) {
            this.chatTimer = 0;
            if(this.okayButton2.alpha == 1){

              
              if(this.dialogCounter == 1){
                this.chatTimer = 1;
                this.dialogCounter++;
                var counter = parseInt(localStorage.getItem("dayCounter"));
                if(counter== 0){
                  this.chatTimer = 0
                  //this.textBackdropText.text = "Grassland Tickets x 15\nCave Tickets x 15\nMountain Tickets x 15"
                }              
                if(counter== 1){
                  this.textBackdropText.text = "Grassland Tickets x 15\nCave Tickets x 15\nMountain Tickets x 15"
                }
                if(counter== 2){
                  //this.textBackdropText.text = "Veteran Point x250"
                }              
                if(counter ==3){
                  this.textBackdropText.text = "Green Scroll x 10\n Blue Scroll x 10\n Red Scroll x 10\nUse these to upgrade your weapons"
                }
                if(counter== 4){
                  //this.textBackdropText.text = "Veteran Point x500"
                }              
                if(counter==5){
                  this.textBackdropText.text = "Prismatic Gems x 5\nUse these to upgrade weapons to their Max Level"
                }              
                
              }        
              else if(this.dialogCounter == 5){
                this.chatTimer = 1;
                this.dialogCounter++;
                this.textBackdropText.text = "Your Hunter Rank has been added to your Veteran Rank.\n Your current Hunter Rank has been reset."
              } 
              else if(this.dialogCounter == 6){
                this.chatTimer = 1;
                this.dialogCounter++;
                var commonCount = 0;
                var rate = 1;
                for (const p in deadMonster) {
                  //console.log(p)
                  for (const property in deadMonster[p]) {
                    
                    var holder = parseInt(localStorage.getItem(deadMonster[p][property].commonRewards[2]+" Count"))
                    if(isNaN(holder)){
                      localStorage.setItem(deadMonster[p][property].commonRewards[2]+" Count",0)
                    }                  
                    console.log(parseInt(localStorage.getItem(deadMonster[p][property].commonRewards[2]+" Count")))
                    commonCount += parseInt(localStorage.getItem(deadMonster[p][property].commonRewards[2]+" Count") );
                    
                    localStorage.setItem(deadMonster[p][property].commonRewards[2]+" Count",0)
                  }                
                }
                localStorage.setItem("veteranPoints",parseInt(localStorage.getItem("veteranPoints"))+(commonCount*rate))
                console.log("common Count "+commonCount);
                if(commonCount <= 0){
                  this.textBackdropText.text = "Seems like you don't have COMMON items to exchange for Veteran Points. Pity"
                }
                else{
                  this.textBackdropText.text = "We'll take all your COMMON items. In exchange, let's add "+commonCount*rate+" to your Veteran Points"
                }
                  
              }  
              else if(this.dialogCounter == 7){
                this.chatTimer = 1;
                this.dialogCounter++;
                var uncommonCount = 0;
                var rate = 5;
                for (const p in deadMonster) {
                  //console.log(p)
                  for (const property in deadMonster[p]) {
                    for(var i =1; i< 4;i++){
                      var holder = parseInt(localStorage.getItem(deadMonster[p][property].uncommonRewards[i]+" Count"))
                      if(isNaN(holder)){
                        localStorage.setItem(deadMonster[p][property].uncommonRewards[i]+" Count",0)
                      }                  
                      console.log(parseInt(localStorage.getItem(deadMonster[p][property].uncommonRewards[i]+" Count")))
                      uncommonCount += parseInt(localStorage.getItem(deadMonster[p][property].uncommonRewards[i]+" Count") );
                      
                      localStorage.setItem(deadMonster[p][property].uncommonRewards[i]+" Count",0)
                    }

                  }                
                }
                localStorage.setItem("veteranPoints",parseInt(localStorage.getItem("veteranPoints"))+(uncommonCount*rate))
                console.log("uncommon Count "+uncommonCount);
                if(uncommonCount <= 0){
                  this.textBackdropText.text = "Seems like you don't have UNCOMMON items to exchange for Veteran Points. Lame"
                }
                else{
                  this.textBackdropText.text = "We'll take all your UNCOMMON items. In exchange, let's add "+uncommonCount*rate+" to your Veteran Points"
                }
              } 
              else if(this.dialogCounter == 8){
                this.chatTimer = 1;
                this.dialogCounter++;
                var rareCount = 0;
                var rate = 10;
                for (const p in deadMonster) {
                  //console.log(p)
                  for (const property in deadMonster[p]) {
                    for(var i =1; i< 2;i++){
                      var holder = parseInt(localStorage.getItem(deadMonster[p][property].rareRewards[i]+" Count"))
                      if(isNaN(holder)){
                        localStorage.setItem(deadMonster[p][property].rareRewards[i]+" Count",0)
                      }                  
                      console.log(parseInt(localStorage.getItem(deadMonster[p][property].rareRewards[i]+" Count")))
                      rareCount += parseInt(localStorage.getItem(deadMonster[p][property].rareRewards[i]+" Count") );
                      
                      localStorage.setItem(deadMonster[p][property].rareRewards[i]+" Count",0)
                    }

                  }                
                }
                localStorage.setItem("veteranPoints",parseInt(localStorage.getItem("veteranPoints"))+(rareCount*rate))
                console.log("rare Count "+rareCount);
                if(rareCount <= 0){
                  this.textBackdropText.text = "Seems like you don't have RARE items to exchange for Veteran Points. "
                }
                else{
                  this.textBackdropText.text = "We'll take all your RARE items. In exchange, let's add "+rareCount*rate+" to your Veteran Points"
                }
              }  
              else if(this.dialogCounter == 9){
                localStorage.setItem("TixCount0",0)
                localStorage.setItem("TixCount1",0)
                localStorage.setItem("TixCount2",0)    
                this.chatTimer = 1;
                this.dialogCounter=10;
                this.textBackdropText.text = "Finally, I'll take all your OLD tickets. Be sure to purchase new tickets from the shop!"                                      
              }  
              else if(this.totalTixCount <= 0 && this.tixWarn == 0){
                //this.chatTimer = 1;
                //this.tixWarn = 1;
                //this.Notification2.alpha = 1; 
                //this.textBackdropText.text = "Oh! You're out of tickets. Come by the shop. We'll get you sorted"     
              } 
              //tutorial
              if (parseInt(localStorage.getItem("firstVisit-combat")) == 9 ) {
                this.chatTimer = 1;
                localStorage.setItem("firstVisit-combat",10); 
                this.mapWarden.x = this.game.width
                this.mapWarden.loadTexture('warden2')
                this.textBackdropText2.text = "Rayla, the Indifferent" 
                this.textBackdropText.text = "This the new Hunter?"   
              }  
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 10 ) {
                this.chatTimer = 1;
                localStorage.setItem("firstVisit-combat",11); 
                this.textBackdropText2.text = "Rayla, the Indifferent" 
                this.textBackdropText.text = "They don't look like much ..."   
              }     
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 11 ) {
                this.chatTimer = 1;
                localStorage.setItem("firstVisit-combat",12); 
                this.textBackdropText2.text = "Rayla, the Indifferent" 
                this.textBackdropText.text = "Let's see what they can do"   
              }   
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 12 ) {
                this.chatTimer = 0;
                localStorage.setItem("firstVisit-combat",13); 
                this.textBackdropText2.text = "Rayla, the Indifferent" 
                localStorage.setItem("Markerbiome",2)
                
                localStorage.setItem("targetID",1)
                if(parseInt(localStorage.getItem("muted")) == 0){
                  this.ping.play();
          
                }      
                this.bgSound.stop();              
                //this.game.state.start('game');       
                this.transition.alpha = 1;
                this.huntStart = true;              
                this.textBackdropText.text = ""   
              }  
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 15) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden2-sad")
                localStorage.setItem("firstVisit-combat",16); 
                this.game.plugins.screenShake.shake(15);
                this.textBackdropText2.text = "Rayla, the Indifferent"
                this.textBackdropText.text = "WHAT DO YOU MEAN YOU DON'T KNOW ABOUT MONSTER WEAKNESSES?!"     
              }   
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 16) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden2")
                localStorage.setItem("firstVisit-combat",17); 
                this.textBackdropText2.text = "Rayla, the Indifferent"
                this.textBackdropText.text = "Each monster has a unique set of Weaknesses"     
              }
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 17) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden2")
                localStorage.setItem("firstVisit-combat",18); 
                this.textBackdropText2.text = "Rayla, the Indifferent"
                this.textBackdropText.text = "You gotta BOP them with right weapon to make them ENRAGED"     
              }            
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 18) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden2")
                localStorage.setItem("firstVisit-combat",19); 
                this.textBackdropText2.text = "Rayla, the Indifferent"
                this.textBackdropText.text = "Take these, go to your INVENTORY and craft a weapon that does EARTH and BASH damage"     
              }      
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 19) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden2")
                localStorage.setItem("firstVisit-combat",20); 
                this.textBackdropText2.text = "Rayla, the Indifferent"
                this.textBackdropText.text = "Small Monster Bone x10\nOld Thread x5"   

                if(localStorage.getItem("Small Monster Bone Count") == null){
    
                  localStorage.setItem("Small Monster Bone Count", 0 ) 
                }
                localStorage.setItem("Small Monster Bone Count",parseInt(localStorage.getItem("Small Monster Bone Count"))+10 ) 

                if(localStorage.getItem("Old Thread Count") == null){
    
                  localStorage.setItem("Old Thread Count", 0 ) 
                }              
                localStorage.setItem("Old Thread Count",parseInt(localStorage.getItem("Old Thread Count"))+5 )  

                this.Notification.alpha = 1
                this.Notification.x = this.selectInventory.x
              }
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 21 && parseInt(localStorage.getItem("crafted9")) != 1 && parseInt(localStorage.getItem("equip0")) != 9) {
                this.goToCraft();
              }          
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 21 && parseInt(localStorage.getItem("crafted9")) == 1 && parseInt(localStorage.getItem("equip0")) != 9) {
                this.goToCraft();
              }                 
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 21  && parseInt(localStorage.getItem("crafted9")) == 1 && parseInt(localStorage.getItem("equip0")) == 9) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden2")
                localStorage.setItem("firstVisit-combat",22); 
                this.textBackdropText2.text = "Rayla, the Indifferent"
                this.textBackdropText.text = "Go HUNT a NOOT in the MOUNTAINS"  
                localStorage.setItem("TixCount2",5) 
                this.huntDirective = 2;       
              }     
              else if(false ) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden1")
                localStorage.setItem("firstVisit-combat",26); 
                this.textBackdropText2.text = "Roz, the Steady" 
                this.textBackdropText.text = "So Neeka has taught you about combat and Rayla has taught you about the beasts we hunt ..."               
              } 
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 26 || parseInt(localStorage.getItem("firstVisit-combat")) == 25  ) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden1")
                localStorage.setItem("firstVisit-combat",27); 
                this.textBackdropText2.text = "Roz, the Steady" 
                this.textBackdropText.text = "What else is there left to cover?"               
              }  
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 27 ) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden1")
                localStorage.setItem("firstVisit-combat",28); 
                this.textBackdropText2.text = "Roz, the Steady" 
                this.textBackdropText.text = "Ah!\n The SHOP.\nYou can exchange shards there..."               
              }    
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 28 ) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden1")
                localStorage.setItem("firstVisit-combat",29); 
                this.textBackdropText2.text = "Roz, the Steady" 
                this.textBackdropText.text = "You earn shards from succesful hunts & bounties"    
                localStorage.setItem("shards",parseInt(localStorage.getItem("shards"))+250)                     
              }  
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 29 ) {
                this.chatTimer = 1;
                this.mapWarden.loadTexture("warden1")
                localStorage.setItem("firstVisit-combat",30); 
                this.textBackdropText2.text = "Roz, the Steady" 
                this.textBackdropText.text = "Take these and buy some hunting tickets ...\nShards x250"       
                this.Notification3.alpha = 1
                this.Notification3.x = this.selectShop.x                      
              }         
              else if(parseInt(localStorage.getItem("firstVisit-combat")) == 32){
                localStorage.setItem("firstVisit-combat",34); 
                this.chatTimer = 1;
                this.okayButton3.alpha = 0;  
                
                this.textBackdropText2.text = "Roz, the Steady" 
                this.game.plugins.screenShake.shake(15);  
                if(parseInt(localStorage.getItem("muted")) == 0){
                  this.monCry.play()
          
                }                      
                
                var location = ""
                var creep = ""
                switch(this.biome){
                  case 0:
                    location = "GRASSLANDS"
                    creep = "Wocco"
                    break;
                  case 1:
                    location = "CAVES"
                    creep = "Maddock"
                    break;
                  case 2:
                    location = "MOUNTAINS"
                    creep = "Noot"
                    break;                                          
                }
                
                this.textBackdropText.text = "Wait ... That sounds like a "+creep+"'s roar. \nHead to the "+location+" and see whats happening..."                    
              }
              else if(parseInt(localStorage.getItem("GuildGift")) == 3){
                localStorage.setItem("GuildGift",4)
                //this.textBackdropText.text = "Well done! You've set a new GLOBAL HIGH SCORE. Take this for your troubles\n\nGuild Token x 5"
              }
              //apex avaialble after tutorial
              if(parseInt(localStorage.getItem("firstVisit-combat")) == 34){
                localStorage.setItem("firstVisit-apex",1);
              }       
              //this.wardenHunt.width = 460;
              //this.wardenHunt.height = 260;  
              //this.wardenHunt.clicked = true;     
              //this.game.state.start('game') 
            //bounty payout
              if(parseInt(localStorage.getItem("bountyCompleted-"+this.markerBiome)) == 2){
                this.chatTimer = 1;
                localStorage.setItem("bountyCompleted-"+this.markerBiome,3)
                this.textBackdropText.text = "Shards x100"
                localStorage.setItem("shards",parseInt(localStorage.getItem("shards"))+100)  
                  
              }
          }
        }       
        , time_convert: function (num) {
            var hours = Math.floor(num / 60);  
            var minutes = num % 60;
            if(minutes < 10){
              minutes = "0"+minutes;
            }
            return hours + ":" + minutes;  
 
        }  
        ,openLeaderBoard: function(){
          try{
            if(parseInt(localStorage.getItem("muted")) == 0){
              this.ping.play();
      
            }            
            
            var data = {
              leaderboardId: "CgkI4b7xjZMYEAIQAQ"
            };            
            cordova.plugins.playGamesServices.showLeaderboard(data, function () {
              // On success
            }, function(error) {
                //alert(error)// On error
            });
          }
          catch(e){
            //alert(e)
          }
            
        }        
        ,goToNowhere: function(){
          
        }
        , handleFpsProblem: function (error) {
          //alert(error);

        }   
        , getChallengeTarget: function () {      
          var querySync = firebase.database().ref('dailyChallenge/'+localStorage.getItem("loginDate")+"");
          
          querySync.once("value", function(snapshot) {
            //alert("start sync")
            console.log(snapshot.val())
            if(snapshot.val() === null){
              firebase.database().ref('dailyChallenge').update({
                [localStorage.getItem("loginDate")]: 3000
              });   
              localStorage.setItem("DailyHuntTarget",3000);
            }
            else{
              localStorage.setItem("DailyHuntTarget",snapshot.val());
            }
            

          }, function(error) {
            //alert("no Score")
            
          });          
        }         
        , setChallengeTarget: function (val) {
          firebase.database().ref('dailyChallenge').update({
            [localStorage.getItem("loginDate")]: val
          });           
        } 
        , adjustSound : function () {
          
            var soundKey = parseInt(localStorage.getItem("muted"))
            if(soundKey == 0 ){
              this.sound.loadTexture("soundNo")
              localStorage.setItem("muted",1)
            } 
            else{
              this.sound.loadTexture("sound")
              localStorage.setItem("muted",0)
              if(!this.bgSound.isPlaying){
                this.bgSound.play();
              }                  
            }         
        }           
        , addNewsLetter: function () {
          if(parseInt(localStorage.getItem("firstVisit-combat")) == 33){
            localStorage.setItem("firstVisit-combat",34); 
            this.chatTimer = 1;
            this.okayButton3.alpha = 0;  
            
            this.textBackdropText2.text = "Roz, the Steady" 
            this.game.plugins.screenShake.shake(15);  
            if(parseInt(localStorage.getItem("muted")) == 0){
              this.monCry.play()
      
            }             
            
            var location = ""
            var creep = ""
            switch(this.biome){
              case 0:
                location = "Grasslands"
                creep = "Wocco"
                break;
              case 1:
                location = "Caves"
                creep = "Maddock"
                break;
              case 2:
                location = "Mountains"
                creep = "Noot"
                break;                                          
            }
            this.textBackdropText.text = "Wait ... That sounds like a "+creep+"'s roar. \nHead to the "+location+" and see whats happening..."   
          }                
          //alert("woo!")
          //this.chatTimer = 0;
          firebase.database().ref('newsLetter').update({
            [localStorage.getItem("userID")]: localStorage.getItem("email")
          });           
        }     
        , fireWrite: function () {
            this.huntTickets.TapCount++
            if(true || this.huntTickets.TapCount >= 6){
              this.huntTickets.TapCount = 0;
              for ( var i = 0, len = localStorage.length; i < (len); ++i ) {
                var key = localStorage.key(i) 
                console.log(i+" "+key)
                var validation = key.includes(".");
                if(!validation && !key.includes(":")){
                  console.log("writing "+key+" to Database")
                  firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData").update({
                    [key]: localStorage.getItem(key)
                  });                
                }

              }
              console.log("Local data snapshot uploaded")
            }

        }        
        , fireSync: function () {
          this.hubrankBadgeTapCount++;
          console.log("Tap: "+this.hubrankBadgeTapCount)
          if(this.hubrankBadgeTapCount >= 6){
            this.hubrankBadgeTapCount =0;
            
            var querySync = firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData");

            querySync.once("value", function(snapshot) {
              //alert("start sync")
              snapshot.forEach(function(childSnapshot) {

                var key = childSnapshot.key;
                var childData = childSnapshot.val();      
                console.log("overwriting "+key+" to "+childData)
                localStorage.setItem(key,childSnapshot.val());

              });
            }, function(error) {
              console.error(error);
            });     
            console.log("Sync Complete")
            //alert("Your local data has been synced with the Database snapshot")
          }

        }        
          
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Hub = Hub;
}());