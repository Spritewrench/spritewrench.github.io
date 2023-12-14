(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {
		
		
		
            var x = 400
                , y = 150;
          
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            this.level = parseInt(localStorage.getItem("level"));
            
            var text = ""
            var message = ""
            
                  text = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
                  message = ""            
            

            this.bg = this.add.sprite(0, 0, 'bg');
            this.bg.width = this.game.width
            this.bg.height = this.game.height


          

            this.video = this.add.video('seaBG');

                          
            this.video.play(true);
                       
            this.videoImage = this.video.addToWorld(0, 0);
            var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
            this.videoTimer = 100;
            this.video.volume = 0;
            this.videoImage.scale.set(videoScale);            
          
            //this.combatOrder  = this.add.sprite(0, 0, 'combatOrder');
            //this.combatOrder .width = this.game.width
            //this.combatOrder .height = this.game.height              

            this.bg2 = this.add.sprite(0, 0, 'ui_back');
            this.bg2.width = this.game.width
            this.bg2.height = this.game.height                
            
            this.selectInfo = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            this.selectInfo.width = this.game.width
            this.selectInfo.height = this.game.height   

            this.selectInfoDetail = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            this.selectInfoDetail.width = this.game.width
            this.selectInfoDetail.height = this.game.height               

            this.capKey = parseInt(localStorage.getItem("captain"));
            this.capInfo = this.add.sprite(-this.game.width, 0, 'capInfoPanel'+(this.capKey));
            this.capInfo.width = this.game.width
            this.capInfo.height = this.game.height                  
            
            //#7E615F
            this.selectName = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-450, '10', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left'});
            //this.selectName.anchor.setTo(0.5, 0.5);    

            this.selectStats = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-410, '10', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 450  });
            //this.selectStats.anchor.setTo(0.5, 0.5); 
            this.selectStats.inputEnabled = true;
            this.selectStats.events.onInputOver.add(this.updatetoolTip, this);            



            this.selectAbility = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-370, '10', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left'});
            //this.selectAbility.anchor.setTo(0.5, 0.5); 

                           
            
            this.cap_health = this.add.sprite(125, this.game.height-125, 'ui_cap_health');
            this.cap_health.anchor.setTo(0.5, 0.5);
            this.cap_healthText = this.add.text(this.cap_health.x,this.cap_health.y, '10', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.cap_healthText.anchor.setTo(0.5, 0.5);

            this.cap_healthText2 = this.add.text(this.cap_health.x,this.cap_health.y, '10', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.cap_healthText2.anchor.setTo(0.5, 0.5);
            this.cap_healthText2.alpha = 0;

            this.cap_health.origWidth = this.cap_health.width
            this.cap_health.origHeight = this.cap_health.height
            this.cap_healthValue = 15;        
            
            

            this.cap_ultCost = 1;

            this.deploy_pool = this.add.sprite(375, this.game.height-100, 'ui_deploy_pool');
            this.deploy_pool.anchor.setTo(0.5, 0.5);
            this.deploy_poolText = this.add.text(this.deploy_pool.x,this.deploy_pool.y+15, '', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.deploy_poolText.anchor.setTo(0.5, 0.5);   
            
            
            //to be determined by selected ship(???)
            
            this.deploy_poolCurrent = 3;
            this.deploy_poolMax = this.deploy_poolCurrent 

            this.clear_Button = this.add.sprite(this.game.width/2-415, this.game.height-200, 'ui_clear_button');            
            this.clear_Button.inputEnabled = true;
            this.clear_Button.anchor.setTo(0.5, 0.5);
            this.clear_Button.width = 100
            this.clear_Button.height = 100
            this.clear_Button.events.onInputDown.add(this.clearBoard, this);     

            this.endTurn_Button = this.add.sprite(this.game.width-500, this.game.height-175, 'ui_endTurn_Button');            
            this.endTurn_Button.inputEnabled = true;
            this.endTurn_Button.events.onInputDown.add(this.endDeployPhase, this);   
            

            this.ult_text = this.add.text(-this.game.width,this.game.height-400, 'BOOST THE POWER OF ALL STEEL-TYPE CREW BY +1', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 350  });
            this.ult_text.angle = -1

            this.ult_text.text = captain[this.capKey].ult_text
            this.cap_healthValue = captain[this.capKey].cap_healthValue
            this.deploy_poolCurrent = captain[this.capKey].deploy_poolCurrent
            this.deploy_poolMax = this.deploy_poolCurrent                 
            this.cap_ultCost = captain[this.capKey].cap_ultCost



            /*
            this.ult_pool = this.add.sprite(this.game.width-500, this.game.height-350, 'ui_deploy_pool');
            this.ult_pool.anchor.setTo(0.5, 0.5);
            this.ult_pool.width = 100;
            this.ult_pool.height = 100;
            this.ult_poolText = this.add.text(this.ult_pool.x,this.ult_pool.y+15, '3/3', {font: '26px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.ult_poolText.anchor.setTo(0.5, 0.5);               
            */

            this.ult_Button = this.add.sprite(-this.game.width, this.game.height-350, 'ui_ult_buttonReady1'); 
            this.ult_Button.anchor.setTo(0.5, 0.5);           
            this.ult_Button.inputEnabled = true;
            this.ult_Button.events.onInputDown.add(this.captainUlt, this);   
            //this.ult_Button.width =500/1.5
            //this.ult_Button.height = 200/1.5    

            this.ult_ButtonText = this.add.text(this.ult_Button.x,this.ult_Button.y+55, '', {font: '32px LondrinaSolid-Black',fill: '#232727', align: 'center'});
            this.ult_ButtonText.anchor.setTo(0.5, 0.5);              
            
            this.bountytext = this.add.text(this.capInfo.x,this.capInfo.y+220, 'REWARD', {font: '64px LondrinaSolid-Black',fill: '#000', align: 'center'});
            this.bountytext.anchor.setTo(0.5, 0.5);         
            this.bountytext.angle = 3      

            text = text.split("");
            var textKey = 0;

            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            this.input.onDown.add(this.onDown, this);
            this.tileHolder = [];
            this.tile = [];
            this.crewTile = [];
            this.enemyTile = [];

            var distX = 0;
            var distY = 0;
            this.tileLength = 0;
            //must always be dd
            this.boardWidth = 5//11
            this.boardHeight = 7//9 
            this.size = 100
            this.spacing = 10
            this.monCount = 10;
            this.monBaseCount = monBaseCount;
            this.deployCrewCount = 0;
            
            x = (this.game.width/2)-((Math.floor(this.boardWidth/2)*this.size)+(this.size/2)-(this.spacing*this.boardWidth))

          this.crewOrder = []
          this.placeOrderKey = 0;
          this.placeOrderTracker = 0;

         
   
          

          for(var i = 0; i < 5; i++){

            this.crewOrder[i] = this.add.sprite(x+distX, this.game.height-240, 'blankCrew');
            this.crewOrder[i].anchor.setTo(0.5, 0.5);
            this.crewOrder[i].width = 100;
            this.crewOrder[i].height = 100;
            
            distX += this.crewOrder[i].width+this.spacing

            this.crewOrder[i]

            this.crewOrder[i].healthText = this.add.text(this.crewOrder[i].x-(this.size/2),this.crewOrder[i].y+(this.size/2)-16, '', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOrder[i].healthText.anchor.setTo(0.5, 0.5); 

            this.crewOrder[i].powerText = this.add.text(this.crewOrder[i].x-(this.size/2),this.crewOrder[i].y+(this.size/2)-16, '', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOrder[i].powerText.anchor.setTo(0.5, 0.5);             
          }

          var distX = 0;
          var distY = 0;
          for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){
                
                this.tile[''+j+i] = this.add.sprite(x+distX, y+distY+25, 'tile');
                this.tile[''+j+i].origX = this.tile[''+j+i].x;
                this.tile[''+j+i].origY = this.tile[''+j+i].y;
                this.tile[''+j+i].origX2 = this.tile[''+j+i].x;
                this.tile[''+j+i].origY2 = this.tile[''+j+i].y;    
                
                this.tile[''+j+i].waveRan = Math.floor(Math.random() * 5);

                //this.tile[''+j+i].y = 1000;
              
                this.tile[''+j+i].loadSpeed =  (Math.random() * 0.3)+0.1;
                this.tile[''+j+i].anchor.setTo(0.5, 0.5);
                this.tile[''+j+i].width = this.size;
                this.tile[''+j+i].height = this.size;      
                this.tile[''+j+i].id = ''+j+i;
                this.tile[''+j+i].isCrewHere = false
                this.tile[''+j+i].crewID = 0
                this.tile[''+j+i].isEnemyHere = false
                this.tile[''+j+i].monID = 0
                this.tile[''+j+i].isFlipping = false;

                this.tile[''+j+i].posX = j
                this.tile[''+j+i].posY = i

                this.tile[''+j+i].hp = 0

                this.tile[''+j+i].healthText = this.add.text(this.tile[''+j+i].x-(this.size/2),this.tile[''+j+i].y+(this.size/2)-3, '', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].healthText.anchor.setTo(0.5, 0.5); 

                this.tile[''+j+i].power = 0
                this.tile[''+j+i].powerText = this.add.text(this.tile[''+j+i].x-(this.size/2),this.tile[''+j+i].y+(this.size/2)-3, '', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].powerText.anchor.setTo(0.5, 0.5);                 

                this.tile[''+j+i].spinSpeed = 0;
                this.tile[''+j+i].springX = 0;
                this.tile[''+j+i].springY = 0;

                this.tile[''+j+i].submerged = false;

                this.tile[''+j+i].inputEnabled = true;
                this.tile[''+j+i].events.onInputDown.add(this.placeCrew, this);                


                this.tile[''+j+i].smoke = this.add.emitter(this.tile[''+j+i].x, this.tile[''+j+i].y, 200);
                this.tile[''+j+i].smoke.makeParticles('smoke');
                this.tile[''+j+i].smoke.width = 15;
                this.tile[''+j+i].smoke.minParticleSpeed.set(0, 0);
                this.tile[''+j+i].smoke.maxParticleSpeed.set(0, 0);
                this.tile[''+j+i].smoke.setAlpha(0.8, 0, 2500);
                this.tile[''+j+i].smoke.setScale(0.2, 1, 0.2, 1, 6000, Phaser.Easing.Quintic.Out);
                this.tile[''+j+i].smoke.gravity = -100;          
      
                this.tile[''+j+i].smoke.start(false, 5000, 100);
                this.tile[''+j+i].smoke.on = false;             
                
                this.tile[''+j+i].actionText = this.add.text(this.tile[''+j+i].x,this.tile[''+j+i].y, '', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].actionText.anchor.setTo(0.5, 0.5);   
                this.tile[''+j+i].actionText.alpha = 0;


                distX += this.tile[''+j+i].width+this.spacing
                if(distX > this.size*this.boardWidth){
                  distX = 0;
                  distY += this.tile[''+j+i].height+this.spacing
                }                  
                
              }

          }
          distX = 0;
          distY = 0;          
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){
              
              this.tileHolder[''+j+i] = this.add.sprite(x+distX, y+distY+25, 'tile');
              this.tileHolder[''+j+i].alpha = 0;
              this.tileHolder[''+j+i].origX = this.tileHolder[''+j+i].x;
              this.tileHolder[''+j+i].origY = this.tileHolder[''+j+i].y;
              this.tileHolder[''+j+i].y = 1000;
            
              this.tileHolder[''+j+i].loadSpeed =  0.2//(Math.random() * 0.3)+0.1;
              this.tileHolder[''+j+i].anchor.setTo(0.5, 0.5);
              this.tileHolder[''+j+i].width = this.size;
              this.tileHolder[''+j+i].height = this.size;      
              this.tileHolder[''+j+i].id = ''+i+j;
              this.tileHolder[''+j+i].isCrewHere = false
              this.tileHolder[''+j+i].crewID = 0
              this.tileHolder[''+j+i].isEnemyHere = false
              this.tileHolder[''+j+i].monID = 0
              this.tileHolder[''+j+i].isFlipping = false;

              this.tileHolder[''+j+i].posX = j
              this.tileHolder[''+j+i].posY = i

              this.tileHolder[''+j+i].hp = 0

              this.tileHolder[''+j+i].healthText = this.add.text(this.tileHolder[''+j+i].x-(this.size/2),this.tileHolder[''+j+i].y+(this.size/2)-3, '', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
              this.tileHolder[''+j+i].healthText.anchor.setTo(0.5, 0.5); 

              this.tileHolder[''+j+i].power = 0
              this.tileHolder[''+j+i].powerText = this.add.text(this.tileHolder[''+j+i].x-(this.size/2),this.tileHolder[''+j+i].y+(this.size/2)-3, '', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
              this.tileHolder[''+j+i].powerText.anchor.setTo(0.5, 0.5);                 

              this.tileHolder[''+j+i].spinSpeed = 0;
              this.tileHolder[''+j+i].springX = 0;
              this.tileHolder[''+j+i].springY = 0;

              this.tileHolder[''+j+i].submerged = false;         


              this.tileHolder[''+j+i].smoke = this.add.emitter(this.tileHolder[''+j+i].x, this.tileHolder[''+j+i].y, 200);
              this.tileHolder[''+j+i].smoke.makeParticles('smoke');
              this.tileHolder[''+j+i].smoke.width = 15;
              this.tileHolder[''+j+i].smoke.minParticleSpeed.set(0, 0);
              this.tileHolder[''+j+i].smoke.maxParticleSpeed.set(0, 0);
              this.tileHolder[''+j+i].smoke.setAlpha(0.8, 0, 2500);
              this.tileHolder[''+j+i].smoke.setScale(0.2, 1, 0.2, 1, 6000, Phaser.Easing.Quintic.Out);
              this.tileHolder[''+j+i].smoke.gravity = -100;          
    
              this.tileHolder[''+j+i].smoke.start(false, 5000, 100);
              this.tileHolder[''+j+i].smoke.on = false;             
              
              this.tileHolder[''+j+i].actionText = this.add.text(this.tileHolder[''+j+i].x,this.tileHolder[''+j+i].y, '', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
              this.tileHolder[''+j+i].actionText.anchor.setTo(0.5, 0.5);   
              this.tileHolder[''+j+i].actionText.alpha = 0;


              distX += this.tileHolder[''+j+i].width+this.spacing
              if(distX > this.size*this.boardWidth){
                distX = 0;
                distY += this.tileHolder[''+j+i].height+this.spacing
              }                  
              
            }

        }          
          //treasure UI
          var distX = 0
          var spacing = 60
          this.collectedTreasure = []
          this.collectedTreasureText = []
          for(var i = 1 ; i < 10; i++){
            this.collectedTreasure[i] = this.add.sprite(((this.game.width/2)+420)+distX , 80, 'treasureUI_'+i);
            this.collectedTreasure[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasure[i].width = 75
            this.collectedTreasure[i].height = 75
            this.collectedTreasure[i].alpha = 0.3;

            this.collectedTreasureText[i] = this.add.text(this.collectedTreasure[i].x+20,this.collectedTreasure[i].y+20, 'x0', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.collectedTreasureText[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasureText[i].alpha = 0;

            this.collectedTreasure[i].count = 0;
            //this.collectedTreasure[i].alpha = 0;    
            distX +=  spacing        
          }

         

          
          //crew 

          

          var distX = -100;
          var size = 150
          var space = 10
          this.crew = []
          this.crewSelect = []
          this.crewDeployed = []

          //free tile counter
          this.freeCounter = this.add.sprite(x+distX, this.game.height-size+50, 'freeCounter');
          this.freeCounter.anchor.setTo(0.5, 0.5);
          this.freeCounter.width = size;
          this.freeCounter.height = size; 
          
          this.freeCounterText = this.add.text(this.freeCounter.x,this.freeCounter.y-10, 'x10', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.freeCounterText.anchor.setTo(0.5, 0.5);       
          this.freeCounterText2 = this.add.text(this.freeCounter.x,this.freeCounter.y-10, 'x10', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.freeCounterText2.anchor.setTo(0.5, 0.5); 
          this.freeCounterText2.alpha = 0;          
          
          if(parseInt(localStorage.getItem("intro")) == 1 || onboardingDebug){
            this.freeCounterNum = 0 
          } 
          else{
            this.freeCounterNum = startingBombCount
          }     


          this.crewCode =localStorage.getItem("crewCode")
          var crewMates = this.crewCode.split("-");
          for(var i = 1; i < 6; i++){
            this.crewSelect[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crewSelect');
            this.crewSelect[i].anchor.setTo(0.5, 0.5);
            this.crewSelect[i].width = size;
            this.crewSelect[i].height = size;   
            this.crewSelect[i].alpha = 0;   
            

            this.crew[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crew-'+crewMates[i-1]);
            this.crew[i].anchor.setTo(0.5, 0.5);
            this.crew[i].width = size;
            this.crew[i].height = size;    
            this.crew[i].id = parseInt(crewMates[i-1])
            this.crew[i].origX = this.crew[i].x
            this.crew[i].origY = this.crew[i].y
            this.crew[i].isDeployed = false;
            this.crew[i].isSelected = false;
            this.crew[i].arrayKey = i;
            this.crew[i].killCount = 0


            this.crew[i].speechBubble = this.add.sprite(this.crew[i].x, this.crew[i].y-75, 'speechBubble');
            this.crew[i].speechBubble.anchor.setTo(0.5, 0.5); 
            this.crew[i].speechBubble.alpha = 0
            this.crew[i].speechBubble.origY = this.crew[i].speechBubble.y
            this.crew[i].speechBubbleText = this.add.text(this.crew[i].speechBubble.x-5,this.crew[i].speechBubble.y-80, 'Yo Ho', {font: '22px LondrinaSolid-Black',fill: '#232727', align: 'center',  wordWrap: true, wordWrapWidth: 250});
            this.crew[i].speechBubbleText.anchor.setTo(0.5, 0.5); 
            this.crew[i].speechBubbleText.alpha = 0;
            this.crew[i].isTalking = false
            this.crew[i].speechTimer = 0;

            this.crew[i].deployText = this.add.text( this.crew[i].x-(size/2)+33,this.crew[i].y+(size/2)-3, '1', {font: '22px LondrinaSolid-Black',fill: '#232727', align: 'center'});
            this.crew[i].deployText.anchor.setTo(0.5, 0.5); 

            this.crew[i].powerText = this.add.text(this.crew[i].x+(this.size/2)-8,this.crew[i].y+(size/2)-3, '1', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crew[i].powerText.anchor.setTo(0.5, 0.5);                
              
            this.crewDeployed[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crewDeployed');
            this.crewDeployed[i].anchor.setTo(0.5, 0.5);
            this.crewDeployed[i].width = size;
            this.crewDeployed[i].height = size;   
            this.crewDeployed[i].alpha = 0;   
            this.crewDeployed[i].id = i    
            this.crewDeployed[i].origX = this.crewDeployed[i].x
            this.crewDeployed[i].origY = this.crewDeployed[i].y               

            this.crewSelect[i].origX = this.crewSelect[i].x
            this.crewSelect[i].origY = this.crewSelect[i].y  

      


         
            
            //crew traits & stats
            this.crew[i].deployCost = 1;
            this.crew[i].power = 1;
            this.crew[i].attackPattern = 0
            this.crew[i].holderPower = []

            // 0 - boost strike, 10 - captain power boost
            this.crew[i].holderPower[10]  = 0


            this.crew[i].deployCost = crew[this.crew[i].id].deployCost;
            this.crew[i].origDeployCost = crew[this.crew[i].id].deployCost;
            this.crew[i].name = crew[this.crew[i].id].name
            this.crew[i].power = crew[this.crew[i].id].power
            this.crew[i].origPower = crew[this.crew[i].id].power
            this.crew[i].attackPattern = crew[this.crew[i].id].attackPattern
            this.crew[i].type = crew[this.crew[i].id].type // 0- steel, 1 - salt, 2 -smoke
            this.crew[i].ability  = crew[this.crew[i].id].ability
             

            

            this.crew[i].deployText.text = this.crew[i].deployCost
            this.crew[i].powerText.text = this.crew[i].power
            
            this.crew[i].inputEnabled = true;
            this.crew[i].events.onInputDown.add(this.crewSelected, this);
            this.crew[i].events.onInputOver.add(this.showInfo, this);

            distX += (size+space)
          }
          
          this.freeCounter.x = this.crew[5].x+10
          this.freeCounter.y = this.crew[5].y-50
          this.freeCounterText.x = this.freeCounter.x-5
          this.freeCounterText.y = this.freeCounter.y-25
          this.freeCounterText2.x = this.freeCounter.x-5
          //this.freeCounterText2.y = this.freeCounter.y-25          
          this.freeCounterText.angle = -15
          this.freeCounterText2.angle = -15

          this.selectedCrew = 0;
          //selected crew
          this.cursorSelect = this.add.sprite(0, 0, 'crewSelect');
          this.cursorSelect.anchor.setTo(0.5, 0.5);
          this.cursorSelect.alpha = 0

                     


          this.chatTimer = 0;
          this.game.input.mousePointer.rightButton.onDown.add(this.deselect, this)

          this.turnMarker = this.add.sprite(this.game.width/2, this.game.height+this.game.height/2, 'turnMarker');
          this.turnMarker.anchor.setTo(0.5, 0.5);   
          this.turnMarker.width = this.game.width
          this.turnMarker.height = this.game.height          

          this.turnMarkerText = this.add.text(this.turnMarker.x-100,this.turnMarker.y, 'ENEMY TURN', {font: '120px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.turnMarkerText.anchor.setTo(0.5, 0.5);   

          this.turnCounter = turnCounterBase;
          
          this.turnCounterStart = this.turnCounter
          this.phaseCounter = 0;

          this.turnWait = 0
          this.ActionCounter = 0;;
          this.actionTimer = 0;

          this.turnCountText = this.add.text(this.game.width/2+50,85, '', {font: '38px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.turnCountText.anchor.setTo(1, 0.5);  
          this.turnCountNum = 0 
          
          //this.scoreCountUI = this.add.sprite(125,50, 'coinCount');
          //this.scoreCountUI.anchor.setTo(0.5, 0.5);  

          //this.scoreCount = this.add.text(this.scoreCountUI.x,this.scoreCountUI.y, '0', {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'left'});
          //this.scoreCount.anchor.setTo(0.5, 0.5);  
          //this.scoreCountNum = 0       
          

          this.saltMeterBack = this.add.sprite(0, 0, 'saltMeterBack');
          this.saltMeterBack.width = this.game.width
          this.saltMeter = this.add.sprite(0, 0, 'saltMeter');
          this.saltMeter.width = 0

          this.saltMeterUI = this.add.sprite(30, 20, 'saltUI');
          this.saltMeterUI.anchor.setTo(0.5, 0.5);  
          this.saltMeterUI.width = 50
          this.saltMeterUI.height = 50

          this.chestUI = this.add.sprite(this.game.width-65, 30, 'chestUI');
          this.chestUI.anchor.setTo(0.5, 0.5);  
          this.chestUI.width = 100
          this.chestUI.height = 100      
          
          this.monCountUI = this.add.sprite(this.game.width/2-30, 80, 'monCount');
          this.monCountUI.anchor.setTo(0.5, 0.5);  
          this.monCountUI.width = 100
          this.monCountUI.height = 100    
          if(parseInt(localStorage.getItem("intro")) == 1){
            this.monCountValue = 20
          } 
          else{
            this.monCountValue = monPoolValue
          }    
          

          this.expWidth = this.chestUI.x - this.saltMeterUI.x
          this.saltMeterBack.width = this.expWidth

          this.saltMeterBack.y = this.saltMeterUI.y-10
          this.saltMeterBack.x = this.saltMeterUI.x
          this.saltMeter.y = this.saltMeterUI.y-10
          this.saltMeter.x = this.saltMeterUI.x          
          
          this.endbuttonTimer = 0;
          this.clearbuttonTimer = 0;
          this.ultbuttonTimer = 0;

          this.capEnergy = 0;

          this.saltParticleCount = 100
          this.saltParticle = [];
          for(var i = 0; i < this.saltParticleCount; i++){
            this.saltParticle[i] = this.add.sprite(0, 0, 'saltUI');
            this.saltParticle[i].anchor.setTo(0.5, 0.5);  
            this.saltParticle[i].width = 50
            this.saltParticle[i].height = 50
            this.saltParticle[i].alpha = 0;
          }          
          

          this.overlay = this.add.sprite(0, 0, 'bgOverlay1');
          //this.overlay.width = this.game.width
          //this.overlay.height = this.game.height      
          this.overlay.alpha = 0;    

          this.overlayText = this.add.text(this.game.width/2,100, 'CHOOSE', {font: '64px Kaph-Regular',fill: '#fff', align: 'center'});
          this.overlayText.anchor.setTo(0.5, 0.5);     
          this.overlayText.alpha = 0;      

          this.treasureOptions = []
          distX = -450
          spacing = 650;
          for(var i =0; i < 3; i++){

            this.treasureOptions[i] = this.add.sprite(x+distX, this.game.height*10 , 'treasure_1');
            this.treasureOptions[i].anchor.setTo(0.5, 0.5);
            this.treasureOptions[i].value = 1;
           
            this.treasureOptions[i].alpha = 0;
            this.treasureOptions[i].origX = this.treasureOptions[i].x
            this.treasureOptions[i].origY = this.treasureOptions[i].y
            this.treasureOptions[i].targetY = 150+this.game.height/3
            this.treasureOptions[i].origtargetY = 150+this.game.height/3

            this.treasureOptions[i].inputEnabled = true;
            this.treasureOptions[i].events.onInputDown.add(this.selectTreasue, this); 
            this.treasureOptions[i].events.onInputOver.add(this.animateHover, this);
            this.treasureOptions[i].events.onInputOut.add(this.returnOrig, this);                         
            distX += spacing
          }

          this.transition = this.add.sprite(0, -this.game.height, 'winBG');
          this.transition.width = this.game.width
          this.transition.height = this.game.height      

          this.transTimer = -1

          this.chestCount = 0;

          this.saltCounter = 0;
          this.saltCounterBase = baseSaltReq
          this.saltCounterMax = this.saltCounterBase
          this.bounty = 0;

          this.surfaceCount = 0;
          this.surfaceCountTrigger = 0;
          this.smoke = this.add.emitter(this.game.input.mousePointer.x, this.game.input.mousePointer.y, 200);
          this.smoke.makeParticles('smoke');
          this.smoke.width = 15;
          this.smoke.minParticleSpeed.set(0, 0);
          this.smoke.maxParticleSpeed.set(0, 0);
          this.smoke.setAlpha(0.8, 0, 2500);
          this.smoke.setScale(0.2, 1, 0.2, 1, 6000, Phaser.Easing.Quintic.Out);
          this.smoke.gravity = -100;          

          this.smoke.start(false, 5000, 100);
          this.smoke.on = false;

          this.bgSound = this.add.audio('pugnacityPortroyal');
          this.bgSound.loop = true;
          this.bgSound.play();
          this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1        
          
          
          this.deployReady = false;
          this.noPickUp = true;

          this.freeCounterText2.y = this.crew[5].y-75 

          this.waveTimer = 20;
          this.waveTimerStart = this.waveTimer

          this.timer = 0
          this.tips = new Phasetips(this.game, {
            targetObject:  this.selectStats,
            context: "",
            fontSize: 14,
            strokeWeight: 3,
            roundedCornersRadius: 10,            
            position: "top",
            positionOffset: 0,
            padding: 75,
            x: this.game.width/2,
            y: this.game.height/2+100,        
            animation: "fade"
          });           
          

          this.transWave = this.add.sprite(0, -this.game.height, 'transitionWave');
          this.transWave.width = this.game.width
          //this.transWave.height = this.game.height         
          this.transWaveKey  = 0;  
          
          this.wavSnd = []
          this.wavSnd[1] = this.add.audio('wavSnd-1');
          this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
          this.wavSnd[2] = this.add.audio('wavSnd-2');
          this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[3] = this.add.audio('wavSnd-3');
          this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1     
          
          var ran = Math.floor(Math.random() * 3)+1;
          this.wavSnd[ran].play()   
          
          this.transTar = 'win'
          
          if(parseInt(localStorage.getItem("intro")) == 1 || onboardingDebug ){
            this.tutorialPause = true;
            this.chatTimer = 1;
          }
          else{
            this.tutorialPause = false;
            this.chatTimer = 0;
          }
          
          this.squawk = this.add.audio('parrotSquawk');
          this.squawk.volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)*2     

          this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax


          this.chatTimerCount = -1

          this.captainHurt = false

          this.escapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
          this.escapeKey.onDown.add(this.showOptions, this);               
        }
        , update: function () {


          this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1  

          this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
                    
          if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
            this.transWave.y += transSpeed
    
            if(this.transWave.y >= this.game.height&& this.transWaveKey == 0){
              if (parseInt(localStorage.getItem("intro")) == 1 || onboardingDebug ) {
                localStorage.setItem("intro",2);
                this.squawk.play();
                Swal.fire({
                  title: 'Set Sail!',
                  text: "In order to complete your voyage you need to kill "+monPoolValue+" creeps.",
                  imageUrl: 'assets/mascot.png',
                  imageWidth: 200,
                  imageHeight: 200,
    
                }).then((result) => {
                  this.chatTimer = 0;
                  this.tutorialPause = false;                    

                })               
              }
            }
          }
    
          if(this.transWaveKey == 1){
            this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
            if(this.transWave.y <= (-this.game.height+50)){
              this.game.state.start(this.transTar);
            }
          } 

          this.checkKeywords(this.selectStats)

          this.timer++
          if(this.timer > 5000){
            this.timer = 0
          }

          for(var m = 0; m < this.boardHeight; m++){
            for(var l = 0; l < this.boardWidth; l++){  



              
              
              
            }
          }            
          

          this.smoke.x = this.game.input.mousePointer.x
          this.smoke.y = this.game.input.mousePointer.y;

          if(this.chatTimer == 0){

            if(this.chatTimerCount > 0){
              this.chatTimerCount--
              if(this.chatTimerCount == -0){
                this.chatTimer = 1;
                this.chatTimerCount = -1
              }
              
            }

            this.overlayText.alpha = 0; 

            //UI 
                  //ammo text floats up
                  if(this.freeCounterText2.alpha > 0){
                    this.freeCounterText2.alpha -= 0.01
                    this.freeCounterText2.y--;

                    if(this.freeCounterText2.alpha < 0){
                      this.freeCounterText2.alpha = 0;
                      this.freeCounterText2.y = this.freeCounter.y-25  
                    }
                  }                
            //bench UI
            for(var i =1; i< 6; i++){
              

              //ongoing crew ability
              if(this.crew[i].id == 9){
                var holder = 0
                this.crew[i].origPower = 0;
                for(var k = 0; k< this.boardHeight; k++){
                  for(var j = 0; j < this.boardWidth; j++){  
                    if(this.tile[""+j+k].smoke.on){
                      holder++
                    }                        
                  }
                }                    
                this.crew[i].origPower = holder*2;

              }

              this.crew[i].deployText.text = this.crew[i].deployCost
              this.crew[i].powerText.text = this.crew[i].origPower
                          
            }
            //salt meter
           
            this.saltMeter.width += ( (((this.saltCounter/this.saltCounterMax))*this.expWidth) - this.saltMeter.width) * 0.5;
             if(this.saltMeter.width > this.expWidth){
              this.saltMeter.width = this.expWidth
             }

             //salt particles move towards UI and then gain salt
             for(i = 0; i < this.saltParticleCount; i++){
              if(this.saltParticle[i].alpha == 1){
                this.saltParticle[i].alpha = 1;
                if(this.saltParticle[i].waitTimer > 0){
                  this.saltParticle[i].waitTimer--
                  if(this.saltParticle[i].waitTimer <= 0){
                    this.saltParticle[i].waitTimer = 0
                  }
                }
                else{
                  this.saltParticle[i].x += ( this.saltMeterUI.x - this.saltParticle[i].x) * this.saltParticle[i].speed;
                  this.saltParticle[i].y += ( this.saltMeterUI.y - this.saltParticle[i].y) * this.saltParticle[i].speed;

                  if( (this.saltParticle[i].x - this.saltMeterUI.x) <= 5 && (this.saltParticle[i].y - this.saltMeterUI.y) <= 5){
                    this.saltParticle[i].alpha = 0;
                    this.saltParticle[i].x = 0;
                    this.saltParticle[i].y = 0;
                    this.saltCounter++;
                  }
                }

              }
            }              
            

            //hide pause
            this.overlay.alpha = 0;           
            
            for(var i =0; i < 3; i++){
              this.treasureOptions[i].alpha = 0;
              this.treasureOptions[i].loadTexture("treasure_"+this.treasureOptions[i].value)
              this.treasureOptions[i].y += ( this.game.height*10 - this.treasureOptions[i].y) * 0.2;
              this.returnOrig(this.treasureOptions[i])

              
              
            }              

            //treasure 
            for(var i = 1; i < 10; i++){
              if(this.collectedTreasure[i].count > 0){
                this.collectedTreasure[i].alpha = 1
                this.collectedTreasureText[i].alpha = 1
                this.collectedTreasureText[i].text = "x"+this.collectedTreasure[i].count


            
              }
              else{
                this.collectedTreasure[i].alpha = 0.3
                this.collectedTreasureText[i].alpha = 0         
              }
            }

            //track gold 
            //this.scoreCount.text = this.scoreCountNum

            //combat order
            this.placedCrew = []
            this.placedCrewID = []
            this.placedCrewKey = 0;

            for(var k = 0; k < 10000; k++){
              this.placedCrewID[k] = -1;  
            }


            for(var l = 0; l < this.boardHeight; l++){
              for(var m = 0; m < this.boardWidth; m++){
                if(this.tile[""+m+l].placeOrder >= 0){

                  this.placedCrew[this.tile[""+m+l].placeOrder] =this.tile[""+m+l].texture
                  this.placedCrewID[this.tile[""+m+l].placeOrder]= this.tile[""+m+l].crewID
                  //this.placedCrewKey++
                }



        
              }
            }   
                  
            for(var i=0; i< 5; i++){
              
              
              if(this.placedCrewID[i] != -1 && this.placedCrewID[i] != 0){
                //this.crewOrder[i].alpha = 1
                //this.crewOrder[i].loadTexture(this.placedCrew[i])

                
                //next up effects 
                
                for(var z = 1; z < 6; z++){
                  if(this.crew[z].id == this.placedCrewID[i]){
                    this.crew[z].power = this.crew[z].origPower  
                    
                  }
                }                 
                
                if(i > 0){
                  
                  //boost strike
                  if(this.placedCrewID[i-1] == 1 ){
                    var boostHolder = 0;
                    for(var z = 1; z < 6; z++){
                      if(this.crew[z].id == this.placedCrewID[i-1]){
                        boostHolder = this.crew[z].power
                        
                      }
                    }       
                    for(var x = 1; x < 6; x++){
                      if(this.crew[x].id == this.placedCrewID[i]){
                        this.crew[x].holderPower[0] = boostHolder
                      }
                    }                                 
                    
                    
                  }
                  else{
                    for(var z = 1; z < 6; z++){
                      if(this.crew[z].id == this.placedCrewID[i]){
                        this.crew[z].holderPower[0] = 0;
                      }
                    }                    
                    
                  }
                  for(var z = 1; z < 6; z++){
                    if(this.crew[z].id == this.placedCrewID[i]){
                      this.crew[z].power = this.crew[z].origPower + this.crew[z].holderPower[0] + this.crew[z].holderPower[10]
                    }
                  } 

                  
                  
                }
                else{
                  for(var z = 1; z < 6; z++){
                    if(this.crew[z].id == this.placedCrewID[i]){
                      this.crew[z].power = this.crew[z].origPower + this.crew[z].holderPower[10]
                    }
                  }                   
                  
                }

               
                 //+ this.crew[this.placedCrewID[i]].holderPower[10]
                this.crewOrder[i].healthText.x = this.crewOrder[i].x-(this.size/2)+23
                
                for(var z = 1; z < 6; z++){
                  if(this.crew[z].id == this.placedCrewID[i]){
                    this.crewOrder[i].healthText.text = this.crew[z].deployCost
                    this.crewOrder[i].powerText.text = this.crew[z].power
                  }
                }                   
                
                this.crewOrder[i].powerText.x = this.crewOrder[i].x+(this.size/2)-22       
                
                this.crewOrder[i].healthText.addColor("#232727", 0)
                this.crewOrder[i].powerText.addColor("#FFF", 0)              

                this.crewOrder[i].width = 100;
                this.crewOrder[i].height = 100; 

                //hide crew order info
                this.crewOrder[i].healthText.text = ""
                this.crewOrder[i].powerText.text = ""  
                this.crewOrder[i].alpha = 0;              
                

              }
              else{
                this.crewOrder[i].healthText.text = ""
                this.crewOrder[i].powerText.text = ""
                this.crewOrder[i].alpha = 0;
              }
                  
                 
            }
            
            //cap info panel
            this.capInfo.x += (0 - this.capInfo.x) * 0.2;
            //show bounty 
    
            if(this.captainHurt){
              this.capInfo.loadTexture('capInfoPanel'+this.capKey+"_hurt") 
              if(this.bounty > 0){
                this.capInfo.loadTexture('capInfoPanel'+this.capKey+"-wanted_hurt") 
                this.bountytext.text = "$"+this.bounty+" REWARD"         
                this.bountytext.x = this.capInfo.x +320;   
                
  
              }  
            }
            else{
              this.capInfo.loadTexture('capInfoPanel'+this.capKey+"") 
              if(this.bounty > 0){
                this.capInfo.loadTexture('capInfoPanel'+this.capKey+"-wanted") 
                this.bountytext.text = "$"+this.bounty+" REWARD"         
                this.bountytext.x = this.capInfo.x +320;   
                
  
              }  
            }                     
            //this.capEnergy >= 9 
            if((this.deployReady && this.deploy_poolCurrent >= this.cap_ultCost && !this.captainPowerActivated)){

              this.ult_Button.loadTexture('ui_ult_buttonReady'+this.capKey);
              //this.ult_Button.y = this.game.height-280
              //this.ult_pool.y = this.game.height-360       
              if(this.capKey == 2 && this.freeCounterNum <= 0){
                this.ult_Button.loadTexture('ui_ult_buttonNotReady'+this.capKey);
              }                     
            }
            else{
              this.ult_Button.loadTexture('ui_ult_buttonNotReady'+this.capKey);
              //this.ult_Button.y = this.game.height-280
              //this.ult_pool.y = this.game.height-340
            }


            this.ult_Button.x += ((this.capInfo.x+550) - this.ult_Button.x) * 0.2;
            this.ult_ButtonText.x = this.ult_Button.x+3//-(this.ult_Button.width/3)
            this.ult_ButtonText.text = this.cap_ultCost         
            this.ult_text.x =   this.capInfo.x+70; 
            //this.ult_pool.x = this.ult_Button.x+100
            //this.ult_poolText.y = this.ult_pool.y+10
            //this.ult_poolText.x = this.ult_pool.x
            //this.ult_poolText.text = this.capEnergy+"/9"


            // select info panel
            if(this.selectedCrew == 0){
              this.selectInfo.x += ( this.game.width - this.selectInfo.x) * 0.2;


            }
            else{
              if(this.selectedCrew > 100){
                var monInfoKey = this.selectedCrew-100
                if(!monInfoKey  == 99 && !monInfoKey  == 0){
                  monInfoKey -= 1
                }
                
                switch(monInfoKey){
                  case 100:
                    this.selectName.text = ""
                    this.selectStats.text = "NOTE: SOMETHING STIRS UNDER THE SURFACE"
                    this.selectAbility.text = ""                    
                    break;                  
                  case 2:
                    this.selectName.text = ""
                    this.selectStats.text = ""
                    this.selectAbility.text = ""                    
                    break;
                  case 3:
                    this.selectName.text = ""
                    this.selectStats.text = "ATTACKS TWICE!"
                    this.selectAbility.text = ""                       
                    break;
                  case 4:
                    this.selectName.text = ""
                    this.selectStats.text = "SPAWN TENTACLES ON COMBAT"
                    this.selectAbility.text = ""                       
                    break;
                  case 5:
                    this.selectName.text = ""
                    this.selectStats.text = "+1 POWER WHEN HURT"
                    this.selectAbility.text = ""                      
                    break;
                  case 6:
                    this.selectName.text = ""
                    this.selectStats.text = "+1 POWER WHEN HURT"
                    this.selectAbility.text = ""                       
                    break;
                  case 7:
                    this.selectName.text = ""
                    this.selectStats.text = "+5 POWER WHEN HURT"
                    this.selectAbility.text = ""                       
                    break;
                  case 8:
                    this.selectName.text = ""
                    this.selectStats.text = "BECOMES INTANGIBLE AFTER ATTACKING" //"IMMUNE TO DAMAGE FROM ABOVE AND BELOW"
                    this.selectAbility.text = ""                     
                    break;  
                  case 9:
                    this.selectName.text = ""
                    this.selectStats.text = "BECOMES INTANGIBLE AFTER ATTACKING" //"IMMUNE TO DAMAGE FROM ABOVE AND BELOW"
                    this.selectAbility.text = ""                        
                    break;
                  case 10:
                    this.selectName.text = ""
                    this.selectStats.text = "BECOMES INTANGIBLE AFTER ATTACKING" //"IMMUNE TO DAMAGE FROM ABOVE AND BELOW"
                    this.selectAbility.text = ""                        
                    break;
                  case 99:
                    this.selectName.text = ""
                    this.selectStats.text = "NOTE: CURSED YA SAY? I'M SURE IT'LL BE FINE ..."
                    this.selectAbility.text = ""                        
                    break; 
                  case 101:
                    this.selectName.text = ""
                    this.selectStats.text = "POWER EQUAL TO YOUR CURRENT BOUNTY"
                    this.selectAbility.text = ""                        
                    break;                                                                                                                                                                                    

                }

                
                if(this.selectedCrew  < 199){
                  this.selectInfoDetail.loadTexture("selectInfoPanel-"+(this.selectedCrew-1))
                  
                }
                else{
                  this.selectInfoDetail.loadTexture("selectInfoPanel-"+this.selectedCrew)
                  if(this.selectedCrew  == 199){
                    this.selectInfoDetail.loadTexture("selectInfoPanel-"+this.selectedCrew+"-0")   
                    if(this.chestCount % 2 == 0){
                      this.selectInfoDetail.loadTexture("selectInfoPanel-"+this.selectedCrew+"-1")   
                    } 
                    if(this.chestCount % 3 == 0){
                      this.selectInfoDetail.loadTexture("selectInfoPanel-"+this.selectedCrew+"-2")   
                    }                           
                  }                  
                }
                      
                

              }
              else{
                  /*
                for(var z = 1; z < 6; z++){
                  if(this.crew[z].id == this.selectedCrew){
                    this.selectName.text = ""+this.crew[z].name
                    this.selectStats.text = ""+this.crew[z].ability
                    if(this.crew[z].id == 2){
                      this.selectStats.text += " (+"+this.crew[z].killCount+")"
                    }
                    this.selectAbility.text = ""
                    
  
                    this.selectInfoDetail.loadTexture("selectInfoPanel-"+(this.crew[z].id-1))
                    
                  }
                }                   
                  */
                 
                  this.selectName.text = ""+this.crew[this.selectedCrew].name
                  this.selectStats.text = ""+this.crew[this.selectedCrew].ability
                  if(this.crew[this.selectedCrew].id == 2){
                    this.selectStats.text += " (+"+this.crew[this.selectedCrew].killCount+")"
                  }
                  this.selectAbility.text = ""
                  

                  this.selectInfoDetail.loadTexture("selectInfoPanel-"+(this.crew[this.selectedCrew].id-1))

              }
              this.selectInfo.x += ( 0 - this.selectInfo.x) * 0.2
              this.selectName.angle = 2;
              this.selectStats.angle = 2;
              this.selectAbility.angle = 2;
            }

            this.selectInfoDetail.x = this.selectInfo.x
            

            this.selectName.x =  this.selectInfo.x+this.selectInfo.width-580
            this.selectStats.x =  this.selectInfo.x+this.selectInfo.width-580
            this.selectAbility.x =  this.selectInfo.x+this.selectInfo.width-580      

            

            //button anim
            if(this.endbuttonTimer > 0 || !this.deployReady){
              this.endbuttonTimer--
              this.endTurn_Button.y = this.game.height-175+35
            }
            else{
              this.endTurn_Button.y = this.game.height-175
            }

            if(this.clearbuttonTimer > 0 || !this.deployReady){
              this.clearbuttonTimer--
              this.clear_Button.y = this.game.height-150+35
            }
            else{
              this.clear_Button.y = this.game.height-150
            }

            //check if win 
            if(this.monCountValue <= 0){
              //this.chatTimer = 1;
            }             
            /*
            if(this.turnCountNum >= 10){
              if(this.transTimer == -1){
                this.transTimer = 50;
              }
              else if(this.transTimer > 0){
                this.transTimer--;
              }
              else{
                this.transition.y += ( 0 - this.transition.y) * 0.2;
                if(this.transition.y>= -5){
                  this.game.state.start('win');
                  var score = parseInt(localStorage.getItem("highScore"))
                  localStorage.setItem("currentScore",this.scoreCountNum)
                  if(this.scoreCountNum > score){
                    localStorage.setItem("highScore",this.scoreCountNum)
                  }       
                  
                  for(var i = 1 ; i < 10; i++){
                    localStorage.setItem("collectedTreasure"+i,this.collectedTreasure[i].count  )   
                  }                  
                }
              }

              

              
            }                        
            */
            //Turn Count
            this.turnCountText.text = this.monCountValue//"WAVE #"+this.turnCountNum
            // phase marker
            
            if(this.turnWait > 0){
              this.turnWait--;
              if(this.turnWait == 0){
                if(this.ActionCounter > 0){
                  this.turnCounter = this.turnCounterStart/2;
                }
                else{
                  this.turnCounter = this.turnCounterStart;
                }
                if(this.phaseCounter == 2){
                  this.turnCounter = 25;
                }
              }
            } 
            else{
              
            } 
            console.log(this.turnCounter+" "+this.actionTimer)
            if(this.turnCounter > 0 ){
              this.turnCounter--;
              this.phaseStart = true;
              
              if(this.phaseCounter != 3){
                this.turnMarker.y += ( this.game.height/2 - this.turnMarker.y) * 0.2;
              }
              

              if(this.turnMarker.y - ( this.game.height/2)  < 10){
                this.turnMarkerText.x++
                //this.turnMarkerText.alpha = 1;
              }
              else{
                
              }
              this.turnMarkerText.y = this.turnMarker.y-50




            }
            else{
              //phase wall

                               
              
            
              this.turnMarker.y += ( this.game.height+this.game.height/2 - this.turnMarker.y) * 0.2;


              
              var markerDiff =  Math.abs(this.turnMarker.y - (this.game.height+this.game.height/2))
              
              if(this.actionTimer > 0){
                this.actionTimer--;
              }

              
              if(( markerDiff <= diffBase   && this.actionTimer == 0)&& this.phaseCounter == 1 && this.phaseStart ){
                
                if(!this.deployReady){
                  this.returnCrew();
                  
                }
              
                if(!this.deployReady){


                  this.cap_healthValueHolder = this.cap_healthValue
                  for(var m = 0; m < this.boardHeight; m++){
                    for(var l = 0; l < this.boardWidth; l++){  
                      this.tileHolder[''+l+m].loadTexture(this.tile[''+l+m].texture)
                      this.tileHolder[''+l+m].isCrewHere = this.tile[''+l+m].isCrewHere 
                      this.tileHolder[''+l+m].crewID = this.tile[''+l+m].crewID
                      this.tileHolder[''+l+m].isEnemyHere = this.tile[''+l+m].isEnemyHere
                      this.tileHolder[''+l+m].monID = this.tile[''+l+m].monID
                      this.tileHolder[''+l+m].isFlipping = this.tile[''+l+m].isFlipping

                      this.tileHolder[''+l+m].hp = this.tile[''+l+m].hp
                      this.tileHolder[''+l+m].power = this.tile[''+l+m].power

                      this.tileHolder[''+l+m].submerged = this.tile[''+l+m].submerged

                      this.tileHolder[''+l+m].smoke.on = this.tile[''+l+m].smoke.on






                      if(this.tile[''+l+m].submerged){
                   
                      }                        
                    }
                  }                     
                }
                if (parseInt(localStorage.getItem("intro")) == 2) {
                  localStorage.setItem("intro",3);
                  this.tutorialPause = true;
                  this.chatTimer = 1;        
                  //this.overlay.loadTexture('bgOverlay_board')              
                  Swal.fire({
                    title: 'Get that Treasure!',
                    text: "Deploy your crew so that the chest is completely surrounded, then start combat",
                    imageUrl: 'assets/tut_combat.png',
                    backdrop: false,
                    imageWidth: 200,
                    imageHeight: 200,
               
                  }).then((result) => {
                    
                    this.chatTimer = 0;
                    this.tutorialPause = false;          
                    for(var k = 1; k < 6; k++){
                      if(this.crew[k].id == 1){
                        this.crewSpeak(k,"I'm ready Cap'n!")
                      }
                    }                                          
                  })            
                }

              
                
               
               /* if (true) {
                  Swal.fire({
                    title: 'Tutorial (2/5)',
                    text: "To do this, during your turn deploy crew tiles to surround and attack creeps.",
                    imageUrl: 'assets/tut_combat.png',
                    imageWidth: 200,
                    imageHeight: 200,
               
                  }).then((result) => {
                    
                    this.overlay.loadTexture('bgOverlay_savvy')   
                    
                    Swal.fire({
                      title: 'Tutorial (3/5)',
                      text: "Using your captain's ability & deploying crew tiles costs SAVVY. Pay attention to your captain's total when planning out your turns. End Turn to commence with combat.",
                      imageUrl: 'assets/tut_savvy.png',
                      backdrop: false,
                      imageWidth: 200,
                      imageHeight: 200,
  
                    }).then((result) => {
                      this.chatTimer = 0;
                      this.tutorialPause = false;                      
                    })                
                  })               
                }*/
                
                this.deployReady = true;  
                if (parseInt(localStorage.getItem("intro")) == 10 && this.captainHurt ) {
                  localStorage.setItem("intro",11);
                  for(var k = 1; k < 6; k++){
                    if(this.crew[k].id == 1 ){
                      this.crewSpeak(k,"Captain Rose!")
                      this.crew[k].speechTimer = 50
  
                    }   
                    if(this.crew[k].id == 3 ){
                      this.crewSpeak(k,"Defend the Captain!")
                      this.crew[k].speechTimer = 60
  
                    }                    
                  }                      
            
                }                
                this.captainHurt = false;
             
              
                
    
    
              }
              if( markerDiff <= diffBase   && this.phaseCounter == 2 && this.phaseStart ){
                //this.deployReady = true;  
              }
              if(( markerDiff <= diffBase  && this.actionTimer == 0)&& this.phaseCounter != 1 && this.phaseStart ){
                //phase actions
                this.phaseStart = false;
                if(this.phaseCounter == 0 ){
                  if(this.turnCountNum <= 1){
                    this.spawnMonsters();
                  }
                }
                else if(this.phaseCounter == 1 ){
                  
                  
                } 
                else if(this.phaseCounter == 2 ){
                  this.turnMarkerText.text = ""
                  this.crewFight();
                } 
                else if(this.phaseCounter == 3 ){
                  
                }                   
                else if(this.phaseCounter == 4 ){
                  this.enemyFight();


                }                 
              }              
              
              //this.turnMarkerText.alpha = 0
              this.turnMarkerText.x = this.turnMarker.x-100
              this.turnMarkerText.y = this.turnMarker.y-50
            }

            this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax
            this.cap_healthText.text = this.cap_healthValue



            if(this.cap_healthText2.alpha > 0 ){
              this.cap_healthText2.y--
              this.cap_healthText2.alpha -= 0.01

              if(this.cap_healthText2.alpha < 0.5){
                
              

              }

              if(this.cap_healthText2.alpha < 0){
                this.cap_healthText2.alpha = 0;

                      
                
              }
            }
            
            ///this.cap_healthText.font.style.font.size = 100;
            this.cap_health.width += ( this.cap_health.origWidth - this.cap_health.width) * 0.5;
            this.cap_health.height += ( this.cap_health.origHeight - this.cap_health.height) * 0.5;
            for(var i = 1; i < 6; i++){

              this.crew[i].deployText.y = this.crew[i].y+(this.crew[i].height/2)-28
              this.crew[i].powerText.y  = this.crew[i].y+(this.crew[i].height/2)-28              

              // if deploy pool too low
              if(this.crew[i].deployCost > this.deploy_poolCurrent){
                this.crew[i].isDeployed = true

              }
              else{
                this.crew[i].isDeployed = false;
              }

              //if already deployed
              for(var l = 0; l < this.boardHeight; l++){
                for(var m = 0; m < this.boardWidth; m++){
                  
                  if(this.tile[""+m+l].crewID == this.crew[i].id && this.tile[""+m+l].isCrewHere){
                    
                    this.crew[i].isDeployed = true//this.crew
                    if(i == 5){
                      this.crew[i].isDeployed = false;
                    }                    
                  }

                    
                }
              }              

              //crew speech

              //crew speech timer
              if(this.crew[i].speechTimer > 0){
                this.crew[i].speechTimer--
                if(this.crew[i].speechTimer == 0){
                  this.crew[i].isTalking = false;
                  //chained speech for tutorial
                  /*
                  for(var k = 1; k < 6; k++){
                    if(this.crew[k].id == 3 && (parseInt(localStorage.getItem("intro")) == 8)){
                      this.crewSpeak(k,"I'm best suited for the next challenge")
                      this.crew[k].speechTimer = 50;
                      localStorage.setItem("intro",9);
                    }  
                  
                  } */

                  if(this.crew[i].id == 1 && parseInt(localStorage.getItem("intro")) == 8 && this.crew[i].speechTimer == 0){
                    this.chatTimer = 1;
                    this.tutorialPause = true;       
                    this.overlay.loadTexture('bgOverlay_board')                   
                    Swal.fire({
                      title: 'Stay on your toes!',
                      text: "Creeps can appear SUBMERGED and surface on their next turn. BLOCK this by deploying crew on the space",
                      imageUrl: 'assets/tut_block.png',
                      backdrop: false,
                      imageWidth: 300,
                      imageHeight: 300,
                    }).then((result) => {
                      localStorage.setItem("intro",9);
                      this.chatTimer = 0;
                      this.tutorialPause = false;  
                      for(var k = 1; k < 6; k++){
                        if(this.crew[k].id == 3 ){
                          this.crewSpeak(k,"My blade is ready, Captain!")
  
                        }   
                      }                            
                                       
                    })     
                  }  
                  
                  if(this.crew[i].id == 3 && parseInt(localStorage.getItem("intro")) == 11 && this.crew[i].speechTimer == 0){
                    localStorage.setItem("intro",12);
                    this.chatTimer = 1;
                    this.tutorialPause = true;   
                    this.overlay.loadTexture('bgOverlay_heart')                          
                    Swal.fire({
                      title: 'Ouch!',
                      text: "Creeps only attack your captain. If your captain's health reaches zero, your voyage ends.",
                      imageUrl: 'assets/tut_heart.png',
                      backdrop: false,
                      imageWidth: 200,
                      imageHeight: 200,
                    }).then((result) => {
                      this.overlay.loadTexture('bgOverlay1')      
                      this.freeCounterNum = startingBombCount       
                      Swal.fire({
                        title: 'Bombs Away!',
                        text: "And finally, here are a few bombs. These deal damagae to all creeps in an area. Use sparingly as your ammo is limited.",
                        imageUrl: 'assets/tut_bomb.png',
                        backdrop: true,
                        imageWidth: 200,
                        imageHeight: 200,
                      }).then((result) => {
                        this.chatTimer = 0;
                        this.tutorialPause = false;                          
                      })                                       
                    })                    
                  }
                }
              }

              if(this.crew[i].isTalking ){
                this.crew[i].speechBubble.alpha += ( 1 - this.crew[i].speechBubble.alpha) * 0.2;
              }
              else{
                this.crew[i].speechBubble.alpha += ( 0 - this.crew[i].speechBubble.alpha) * 0.2;
              }

              

              if( this.crew[i].speechBubble.alpha > 0){
                this.crew[i].speechBubble.y += ( this.crew[i].speechBubble.origY - this.crew[i].speechBubble.y) * 0.5;
                //hide text
                if(this.crew[i].speechBubble.alpha > 0.7){
                  this.crew[i].speechBubbleText.alpha = this.crew[i].speechBubble.alpha
                }
                else{
                  this.crew[i].speechBubbleText.alpha = 0
                }                
              }
              else{
                this.crew[i].speechBubble.y += ( (this.crew[i].speechBubble.origY+100) - this.crew[i].speechBubble.y) * 0.5;
              }

              //crew deployed
              if((i == 5 && this.freeCounterNum <= 0)){
                this.crew[i].isDeployed = true
              }
              if(this.crew[i].isDeployed || !this.deployReady ){
                this.crewDeployed[i].alpha = 1;
                this.crew[i].y = this.crew[i].origY+25;
              }
              else {
                this.crewDeployed[i].alpha = 0;
                this.crew[i].y = this.crew[i].origY
              }

              // crew selected
              if(this.crew[i].isSelected){
                this.crewSelect[i].alpha = 1;
                this.crew[i].y = this.crew[i].origY-15;
                
              }
              else if(this.deployReady){
                this.crewSelect[i].alpha = 0;
                this.crew[i].y = this.crew[i].origY
              }

              this.crewSelect[i].y = this.crew[i].y
              this.crewDeployed[i].y = this.crew[i].y
            }

            
            if(this.selectedCrew > 0 && this.selectedCrew <= 100 && !this.noPickUp){
              this.cursorSelect.alpha = 0.3
              this.cursorSelect.loadTexture(this.crew[this.selectedCrew].texture)
            }
            else{
              this.cursorSelect.alpha = 0
            }
            this.cursorSelect.x = this.game.input.mousePointer.x
            this.cursorSelect.y = this.game.input.mousePointer.y

            this.freeCounter.x = this.crew[5].x+10
            this.freeCounter.y = this.crew[5].y-75
            this.freeCounterText.x = this.freeCounter.x-5
            this.freeCounterText.y = this.freeCounter.y-25
            this.freeCounterText2.x = this.freeCounter.x-5
            //this.freeCounterText2.y = this.freeCounter.y-25            
            this.freeCounterText.angle = -15  
            this.freeCounterText2.angle = -15  

         
            
            this.freeCounterText.text = "x"+this.freeCounterNum
            
            //turn management


            //load puzzle
            var restart = 0;
            for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){

                  //wave movement
                  if(this.waveTimer == 0 && false){
                    this.waveBump = 5
                    if(this.tile[''+j+i].origY == this.tile[''+j+i].origY2-this.waveBump){
                      
                      this.tile[''+j+i].origY = this.tile[''+j+i].origY2+this.waveBump
                      
                    }
                    else if(this.tile[''+j+i].origY == this.tile[''+j+i].origY2+this.waveBump){
                     
                      this.tile[''+j+i].origY = this.tile[''+j+i].origY2
                    }
                    else{
                      
                      this.tile[''+j+i].origY = this.tile[''+j+i].origY2-this.waveBump
                    }
                    this.tile[''+j+i].waveRan = Math.floor(Math.random() * this.waveBump);
                  }
                  
                  //return to size
                  
                  this.tile[""+j+i].height += ( 100 - this.tile[""+j+i].height) * 0.2;

                  //flipping 
                  if(this.tile[''+j+i].isFlipping){
                    if(this.tile[""+j+i].width <= 10){
                      this.tile[''+j+i].isFlipping = false
                    }
                    else{
                      this.tile[""+j+i].width += ( 0 - this.tile[""+j+i].width) * 0.4;
                    }
                    
                  }
                  else{
                    this.tile[""+j+i].width += ( 100 - this.tile[""+j+i].width) * 0.2;
                  }
                                  

                  
                  this.tile[''+j+i].healthText.y = this.tile[''+j+i].y+(this.size/2)-20
                  this.tile[''+j+i].powerText.y = this.tile[''+j+i].y+(this.size/2)-20

                  

                  
                  //show enemy health and deploy cost
                  
                  if(((this.tile[''+j+i].isEnemyHere && !this.tile[""+j+i].submerged) || this.tile[''+j+i].isCrewHere) && this.tile[''+j+i].monID != 1 && !this.tile[""+j+i].isFlipping ){
                    this.tile[''+j+i].healthText.alpha = 1;
                    this.tile[''+j+i].powerText.alpha = 1;

                   

                    if(this.tile[''+j+i].isEnemyHere){
                      this.tile[''+j+i].healthText.text = this.tile[''+j+i].hp
                      this.tile[''+j+i].powerText.text =  this.tile[''+j+i].power
                      this.tile[''+j+i].healthText.x = this.tile[''+j+i].x-(this.size/2)+25
                      this.tile[''+j+i].powerText.x = this.tile[''+j+i].x+(this.size/2)-23
                      this.tile[''+j+i].healthText.addColor("#fff", 0)
                      this.tile[''+j+i].powerText.addColor("#FFF", 0)


                        //show monster power boosts
                        if(parseInt(this.tile[''+j+i].origPower) > parseInt(this.tile[''+j+i].power)){
                          
                          this.tile[''+j+i].powerText.addColor("#BA363B", 0)
                        }
                        if(parseInt(this.tile[''+j+i].origPower) <  parseInt(this.tile[''+j+i].power)){
                          this.tile[''+j+i].powerText.addColor("#30B64A", 0)
                        }                         
                    }
                    if(this.tile[''+j+i].isCrewHere){
                    
                      
                      if(this.phaseCounter == 1 || this.phaseCounter ==2){
                        try{
                          //show attack pattern - red
                          
                          for(var z = 1; z < 6; z++){
                            if(this.crew[z].id == this.tile[''+j+i].crewID){
                              switch(parseInt(this.crew[z].attackPattern)){
                                //normal
                                case 1:
                                    this.tintTile(this.tile[''+(j+1)+(i)],"0xFF0000")
                                    this.tintTile(this.tile[''+(j-1)+(i)],"0xFF0000")
                                    this.tintTile(this.tile[''+(j)+(i+1)],"0xFF0000")
                                    this.tintTile(this.tile[''+(j)+(i-1)],"0xFF0000")                          
                                  break;
                                //col strike 
                                case 2:
                                  for(var l = 0; l < this.boardHeight; l++){
                                    for(var m = 0; m < this.boardWidth; m++){
                                      if(j == m){
                                        this.tintTile(this.tile[''+(m)+(l)],"0xFF0000")          
                                      }
                                    }
                                  }  
                                  this.tile[""+j+i].tint = '0xFFFFFF'                           
                                  break;    
                                //row strike 
                                case 3:
                                  for(var l = 0; l < this.boardHeight; l++){
                                    for(var m = 0; m < this.boardWidth; m++){
                                      if(i == l){
                                        this.tintTile(this.tile[''+(m)+(l)],"0xFF0000")          
                                      }
                                    }
                                  }   
                                  this.tile[""+j+i].tint = '0xFFFFFF'                        
                                  break;
                                  //area     
                                  case 4:
                                    this.tintTile(this.tile[''+(j+1)+(i)],"0xFF0000")
                                    this.tintTile(this.tile[''+(j-1)+(i)],"0xFF0000")
                                    this.tintTile(this.tile[''+(j)+(i+1)],"0xFF0000")
                                    this.tintTile(this.tile[''+(j)+(i-1)],"0xFF0000")       
                                    
                                    this.tintTile(this.tile[''+(j+1)+(i+1)],"0xFF0000")
                                    this.tintTile(this.tile[''+(j-1)+(i-1)],"0xFF0000")   
                                    this.tintTile(this.tile[''+(j-1)+(i+1)],"0xFF0000")
                                    this.tintTile(this.tile[''+(j+1)+(i-1)],"0xFF0000")                                                           
                                  break;          
                                  case 5:
                                    for(var l = 0; l < this.boardHeight; l++){
                                      for(var m = 0; m < this.boardWidth; m++){
                                        if(j == m){
                                          this.tintTile(this.tile[''+(m)+(l)],"0xFF0000")          
                                        }
                                      }
                                    }       
                                    for(var l = 0; l < this.boardHeight; l++){
                                      for(var m = 0; m < this.boardWidth; m++){
                                        if(i == l){
                                          this.tintTile(this.tile[''+(m)+(l)],"0xFF0000")          
                                        }
                                      }
                                    }                               
                                    this.tile[""+j+i].tint = '0xFFFFFF'                                                          
                                  break;  
                                  case 6:
                                    for(var l = 0; l < this.boardHeight; l++){
                                      for(var m = 0; m < this.boardWidth; m++){
                                        if(this.tile[''+(m)+(l)].smoke.on){
                                          this.tintTile(this.tile[''+(m)+(l)],"0xFF0000")          
                                        }
                                      }
                                    }                                    
                                    this.tile[""+j+i].tint = '0xFFFFFF'                                                          
                                  break;   
                                  case 7:
                                    for(var l = 0; l < this.boardHeight; l++){
                                      for(var m = 0; m < this.boardWidth; m++){
                                        if(this.tile[''+(m)+(l)].submerged){
                                          this.tintTile(this.tile[''+(m)+(l)],"0xFF0000")                
                                        }
                                      }
                                    }   
                                    this.tile[""+j+i].tint = '0xFFFFFF'                            
                                    break;        
                                  case 8:
                                    for(var l = 0; l < this.boardHeight; l++){
                                      for(var m = 0; m < this.boardWidth; m++){
                                        if(!this.tile[''+(m)+(l)].submerged && this.tile[''+(m)+(l)].isEnemyHere){
                                          this.tintTile(this.tile[''+(m)+(l)],"0xFF0000")                
                                        }
                                      }
                                    }   
                                    this.tile[""+j+i].tint = '0xFFFFFF'                            
                                    break;                                                                                                                                                                                              
                              }
                            }

                          }


                          //don't highlight crew
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(this.tile[''+(m)+(l)].isCrewHere){
                                this.tintTile(this.tile[''+(m)+(l)],"0xFFFFFF")          
                              }
                            }
                          }                           
                        }
                        catch(e){

                        }

                      }


                       
                      
                      try{
                        for(var z = 1; z < 6; z++){
                          if(this.crew[z].id == this.tile[''+j+i].crewID){
                            this.tile[''+j+i].healthText.text =  this.crew[z].deployCost
                            this.tile[''+j+i].powerText.text =  this.crew[z].power
                            this.tile[''+j+i].healthText.x = this.tile[''+j+i].x-(this.size/2)+23
                            this.tile[''+j+i].powerText.x = this.tile[''+j+i].x+(this.size/2)-22
                            this.tile[''+j+i].healthText.addColor("#232727", 0)
                            this.tile[''+j+i].powerText.addColor("#FFF", 0)
                            if(parseInt(this.crew[z].origPower) > parseInt(this.crew[z].power)){
                              
                              this.tile[''+j+i].powerText.addColor("#BA363B", 0)
                            }
                            if(parseInt(this.crew[z].origPower) < parseInt(this.crew[z].power)){
                              this.tile[''+j+i].powerText.addColor("#30B64A", 0)
                            }                              
                          }
                        }                        


                       
                      }
                      catch(e){

                      }

                      

                    
                    }
                  }
                  else{
                    this.tile[''+j+i].healthText.alpha = 0
                    this.tile[''+j+i].powerText.alpha = 0;
                  }

  

                  if(this.tile[""+j+i].isEnemyHere && !this.tile[""+j+i].isCrewHere){
                    if(this.tile[""+j+i].isFlipping){
                      this.tile[""+j+i].loadTexture(this.tile[""+j+i].oldTexture)
                    }
                    else{
                      if(this.tile[""+j+i].submerged){
                        this.tile[""+j+i].loadTexture("mon-1")
                      }
                      else{
                        this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID)
                        if(this.tile[""+j+i].monID == 99){
                          this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID+"-0")   
                          if(this.chestCount % 2 == 0){
                            this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID+"-1")   
                          } 
                          if(this.chestCount % 3 == 0){
                            this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID+"-2")   
                          }                           
                        }
                      }
                    }




                    
                    //this.tile[""+j+i].width = this.size
                    //this.tile[""+j+i].height = this.size
                  } 
              
                  // action text floats up
                  if(this.tile[''+j+i].actionText.alpha > 0){
                    this.tile[''+j+i].actionText.alpha-= 0.01
                    this.tile[''+j+i].actionText.y--;

                    if(this.tile[''+j+i].actionText.alpha < 0){
                      this.tile[''+j+i].actionText.alpha = 0;
                    }
                  }
                  //clean up submerge and other effects
                  if(this.tile[""+j+i].monID == 0){
                    this.tile[""+j+i].submerged = false
                    this.tile[""+j+i].isEnemyHere = false;
                    this.tile[''+j+i].power = 0;
                    this.tile[''+j+i].origPower = 0
                  }

                  if(this.tile[''+j+i].spinSpeed > 0 ){
                    
                    this.tile[''+j+i].angle += this.tile[''+j+i].spinSpeed
                    this.tile[''+j+i].spinSpeed -= 1;
                  }
                  else{
                    this.tile[''+j+i].angle=0
                  }

                  if(this.tile[""+j+i].isSunk){
                    this.tile[""+j+i].y += ((this.game.height+100) - this.tile[""+j+i].y) * 0.1;    
                    
                  }
                  else{
                    this.tile[""+j+i].y += ( (this.tile[""+j+i].origY+this.tile[""+j+i].springY) - this.tile[""+j+i].y) * this.tile[""+j+i].loadSpeed;   
                    var dist =  Math.abs(this.tile[""+j+i].y - this.tile[""+j+i].origY )
                    /*if(dist <= 10 && dist >= 0 && this.tile[""+j+i].submerged){
                      if (parseInt(localStorage.getItem("intro")) == 2) {
                        this.chatTimer = 1;
                        this.tutorialPause = true;       
                        this.overlay.loadTexture('bgOverlay_board')                   
                        Swal.fire({
                          title: 'Tutorial (4/5)',
                          text: "Sea Creeps can spawn SUBMERGED. They surface on their next turn. You can BLOCK this by placing a crew on the space",
                          position: "center-end",
                          imageUrl: 'assets/tut_block.png',
                          imageWidth: 300,
                          imageHeight: 300,
                        }).then((result) => {
                          localStorage.setItem("intro",3);
                          this.chatTimer = 0;
                          this.tutorialPause = false;                         
                        })            
                      }                      
                    }*/                    

                    restart += 1; 
                  }     
                  this.tile[""+j+i].x += ( (this.tile[""+j+i].origX+this.tile[""+j+i].springX) - this.tile[""+j+i].x) * this.tile[""+j+i].loadSpeed;  

                  this.springBody(10,this.tile[""+j+i])
                                             
                }

            }          
            
            //wave timer tracker
            if(this.waveTimer > 0){
              this.waveTimer--;
            }            
            else{
              this.waveTimer = this.waveTimerStart
            }


          }
          else{
            this.overlay.alpha = 1;     

            var monsLeft = 0;
            for(var m = 0; m < this.boardHeight; m++){
              for(var l = 0; l < this.boardWidth; l++){  
                if(this.tile[''+l+m].isEnemyHere){
                  monsLeft++
                }
              }
            }            


            if(this.tutorialPause){
              
              if(parseInt(localStorage.getItem("intro")) == 3){
                //this.overlay.loadTexture('bgOverlay_savvy')
              }
              else{
                //this.overlay.loadTexture('bgOverlay1')
              }
            }   
            else if(this.monCountValue == 0 && monsLeft <= 0){
              this.overlay.loadTexture('bgOverlay1')
              this.overlayText.alpha = 1 
              if(disableLoop){
                this.overlayText.text = " WHAT A HAUL! "
                this.treasureOptions[0].alpha = 1;
                this.treasureOptions[0].value= 200
                this.treasureOptions[0].x = this.game.width/2
  
                this.treasureOptions[1].alpha = 0;
                this.treasureOptions[2].alpha = 0;
  

              }
              else{
                this.overlayText.text = " CHOOSE YOUR FATE"
                this.treasureOptions[0].alpha = 1;
                this.treasureOptions[0].value= 200
                this.treasureOptions[0].x = this.treasureOptions[0].origX+200
  
                this.treasureOptions[1].alpha = 0;
  
                this.treasureOptions[2].alpha = 1;
                this.treasureOptions[2].value= 201
                this.treasureOptions[2].x = this.treasureOptions[2].origX-200
              }



              for(var i =0; i < 3; i++){
                this.treasureOptions[i].loadTexture("treasure_"+this.treasureOptions[i].value)
                if(i ==0 || i == 2){
                  this.treasureOptions[i].y += ( this.treasureOptions[i].targetY - this.treasureOptions[i].y) * 0.2;
                }
                
                
              }               
            }  
            else{
              this.overlay.loadTexture('bgOverlay1')
              this.overlayText.alpha = 1; 
              this.overlayText.text = " CHOOSE YOUR BOOTY"
              for(var i =0; i < 3; i++){
                this.treasureOptions[i].alpha = 1;
                this.treasureOptions[i].loadTexture("treasure_"+this.treasureOptions[i].value)
                this.treasureOptions[i].y += ( this.treasureOptions[i].targetY - this.treasureOptions[i].y) * 0.2;
                this.treasureOptions[i].x = this.treasureOptions[i].origX
                
              } 
              if (parseInt(localStorage.getItem("intro")) == 7 ) {
                this.treasureOptions[0].alpha = 0;
                this.treasureOptions[2].alpha = 0;
              }               
            }                
            
                    
          }

            

          
                    

        }
        ,spawnSalt: function(x,y){        
          for(var i = 0; i < this.saltParticleCount; i++){
            if(this.saltParticle[i].alpha == 0){
              this.saltParticle[i].alpha = 1;
              var variance = 100
              var displaceX =Math.floor(Math.random() * variance)-(variance/2);
              var displaceY =Math.floor(Math.random() * variance)-(variance/2);
              var speed = Math.random()+0.1;
              this.saltParticle[i].x = x + displaceX
              this.saltParticle[i].y = y + displaceY
              this.saltParticle[i].waitTimer = 50;
              this.saltParticle[i].speed = speed
              i = this.saltParticleCount;
            }
          }          
        }
        ,selectTreasue: function(treasure){
          if(treasure.alpha == 1){
            try{
              this.collectedTreasure[treasure.value].count++
            }
            catch(e){

            }
            ;
            //this.scoreCountNum += 100*treasure.value;
            //in case you want to balance score/gold individually
            switch(treasure.value){
              case 1:
                this.cap_healthValue += 5
                break;
              case 2:
                this.cap_healthValue += 10
                break;
              case 3:
                //steel bonus - 0- steel, 1 - salt, 2 -smoke
                for(var j=1; j< 6; j++){
                  if(this.crew[j].type == 0){
                    this.crew[j].origPower += 1
                    this.crew[j].power = this.crew[j].origPower
                    this.crew[j].powerText.text = this.crew[j].power
                  }
                } 
                break;
              case 4:
                this.deploy_poolMax += 1
                break;           
              case 5:
                this.deploy_poolMax += 2
                break;
              case 6:
                //salt bonus - 0- steel, 1 - salt, 2 -smoke
                for(var j=1; j< 6; j++){
                  if(this.crew[j].type == 1){
                    this.crew[j].origPower += 1
                    this.crew[j].power = this.crew[j].origPower
                    this.crew[j].powerText.text = this.crew[j].power
                  }
                }              
                break;
              case 7:
                this.freeCounterNum += 1
                this.freeCounterText2.alpha = 1
                this.freeCounterText2.text = "+1"               
                break;
              case 8:
                this.freeCounterNum += 2
                this.freeCounterText2.alpha = 1
                this.freeCounterText2.text = "+2"                    
                break;        
              case 9:
                //smoke bonus - 0- steel, 1 - salt, 2 -smoke
                for(var j=1; j< 6; j++){
                  if(this.crew[j].type == 2){
                    this.crew[j].origPower += 1
                    this.crew[j].power = this.crew[j].origPower
                    this.crew[j].powerText.text = this.crew[j].power
                  }
                }               
                break;    
              case 10:
                break; 
              case 200:
                this.scoreCountNum = 0;
                for(var i = 1 ; i < 10; i++){
                  this.scoreCountNum += this.collectedTreasure[i].count*(i*55)
                  localStorage.setItem("collectedTreasure"+i,this.collectedTreasure[i].count  )   
                }               
                
                var score = parseInt(localStorage.getItem("highScore"))
                localStorage.setItem("currentScore",this.scoreCountNum)
                if(this.scoreCountNum > score){
                  localStorage.setItem("highScore",this.scoreCountNum)
                } 
                this.bgSound.stop();
                this.transWaveKey = 1
                this.transTar = 'win'              
                //this.game.state.start('win');
                
                
                break;      
              case 201:
                this.monCountValue = monPoolValue
                this.bounty += 10
                break;                                                                    

            }
            
            this.chatTimer = 0;
          }

        }
        //captain's ultimate
        ,captainUlt: function (){
          if(this.deploy_poolCurrent >= this.cap_ultCost && this.phaseCounter == 1 && !this.captainPowerActivated && (this.capKey == 2 && this.freeCounterNum > 0)){
            this.captainPowerActivated = true
            this.deploy_poolCurrent -= this.cap_ultCost
            //this.cap_ultCost += 2;

            switch(this.capKey){
              //rally
              case 1:
                
                for(var i = 1; i < 6; i++){
                  if(this.crew[i].type == 0){
                    this.crew[i].holderPower[10] = 1
                  }
                  
                }                  
                break;
              case 2:
                if((this.freeCounterNum-1 >= 0)){
                  this.freeCounterNum--
                  this.freeCounterText2.alpha = 1
                  this.freeCounterText2.text = "-1" 

                  for(var i = 0; i < this.boardHeight; i++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      if(this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged && this.tile[''+j+i].alpha >= 1){
                        this.tile[''+j+i].smoke.on = true;
                        this.tile[''+j+i].smoke.x = this.tile[''+j+i].x
                        this.tile[''+j+i].smoke.y = this.tile[''+j+i].y
                      }
                    }
                  } 
                }
                
                //this.smoke.on = true;                 
              break;                
              case 3:
                
                this.cap_healthText2.alpha = 1
                this.cap_healthValue -= 1;  
                this.cap_healthText2.text = 1
                this.cap_healthText2.y = this.cap_healthText.y
                
                for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){  
                    if(this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged){
                      this.tile[''+j+i].submerged = true;
                      if(this.tile[''+j+i].smoke.on){
                        this.tile[''+j+i].smoke.on = false;
                      }                      
                    }
                  }
                }                
                break;
            }
            /*
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){      
                if(this.tile[''+j+i].isEnemyHere){
                  
                  this.tile[''+j+i].hp -= 5
                  if(this.tile[''+j+i].hp <= 0){
                    this.tile[''+j+i].hp = 0;
                    this.enemyDie(this.tile[''+j+i])
                  }                  
                }
              }
            }   
            */              
          }
     
        }
        ,clearBoard: function () {
          if(this.deployReady){
            this.clearbuttonTimer = 10
            this.placeOrderTracker = 0;
            //check how many crew deployed
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){      
                if(this.tile[''+j+i].isCrewHere || this.tile[''+j+i].crewID != 0){
                  
                  this.deployCrewCount++
                }
              }
            }
            //crew returns          
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){      
                if(this.tile[''+j+i].isCrewHere){
                  this.tile[''+j+i].hasActed = true;
                  this.tile[''+j+i].y  = 1000;
                  this.tile[''+j+i].loadTexture('tile');
                  for(var z = 1; z < 6; z++){
                    if(this.crew[z].id == this.tile[''+j+i].crewID){
                      this.deploy_poolCurrent += this.crew[z].deployCost
                    }
                  }
                  
                  if(this.tile[''+j+i].crewID == 5){
                    this.freeCounterNum++;
                  }                 
                  this.tile[''+j+i].crewID = 0
                  //this.tile[''+j+i].monID = 0
                  this.tile[''+j+i].isCrewHere = false;
                  //this.tile[''+j+i].isEnemyHere = false;
                  //this.tile[''+j+i].healthText.text = "";
                  //this.tile[''+j+i].powerText.text = "";
                  //this.tile[''+j+i].healthText.alpha = 0
                  //this.tile[''+j+i].powerText.alpha = 0;   
                  this.tile[''+j+i].hasActed = false;
                  this.tile[''+j+i].placeOrder = -1;                                 
                  //break;
                }

              }
            }  
            for(var i = 1; i < 6; i++){
              this.crew[i].isSelected = false;
              this.crew[i].isDeployed = false
            } 
            //undo steel type power 
            for(var i = 1; i < 6; i++){
              if(this.crew[i].type == 0){
                this.crew[i].holderPower[10] = 0
              }
              
            }      
            //undo captain health       
            this.cap_healthValue = this.cap_healthValueHolder
            // reset captain savvy
            this.deploy_poolCurrent = this.deploy_poolMax;
            this.captainPowerActivated = false;
            //reset board state
            for(var m = 0; m < this.boardHeight; m++){
              for(var l = 0; l < this.boardWidth; l++){  
                this.tile[''+l+m].loadTexture(this.tileHolder[''+l+m].texture)
                this.tile[''+l+m].isCrewHere = this.tileHolder[''+l+m].isCrewHere 
                this.tile[''+l+m].crewID = this.tileHolder[''+l+m].crewID
                this.tile[''+l+m].isEnemyHere = this.tileHolder[''+l+m].isEnemyHere
                this.tile[''+l+m].monID = this.tileHolder[''+l+m].monID
                this.tile[''+l+m].isFlipping = this.tileHolder[''+l+m].isFlipping
                
                this.tile[''+l+m].hp = this.tileHolder[''+l+m].hp
                this.tile[''+l+m].power = this.tileHolder[''+l+m].power
                
                this.tile[''+l+m].submerged = this.tileHolder[''+l+m].submerged
                
                this.tile[''+l+m].smoke.on = this.tileHolder[''+l+m].smoke.on              

                
                
                
              }
            }          
            this.removeTint();
          }

          
        }
        ,spawnMonsters: function (tile,submerged) {


          this.spawnCount = 0;
          //if submerged undefined             
          if (submerged === undefined ) {
            submerged = true;
            if(this.surfaceCount <= 0){
              submerged = false;
            }
          
          }
          else{
            submerged = false;
          }
          this.deployReady = false;

          var distX = 0;
          var distY = 0;
          this.tileLength = 0;
          //must always be dd
          this.boardWidth = 5//11
          this.boardHeight = 7//9 
          this.size = 100
          this.spacing = 10
          this.monCount = this.monBaseCount + (Math.floor(this.deploy_poolMax/3))+ (Math.floor(this.turnCountNum/2));
          if(this.turnCountNum == 0 || this.saltCounter >= this.saltCounterMax){
            this.monCount = 1
          }
          else{
            this.monCount = this.monBaseCount+(this.turnCountNum*monscaleNum)
            // treasures add to moncount
            for(var i = 1 ; i < 10; i++){
              this.monCount += this.collectedTreasure[i].count      
            }            
          }



          
          var dist = 0
          
          

          var text = waves[this.turnCountNum]				
          //text = text.split("");
          var textKey = 0
          var ranStartY = Math.floor(Math.random() * this.boardHeight/2);
          var ranStartX = Math.floor(Math.random() * this.boardWidth/2);
          
          for(var i = ranStartY; i < this.boardHeight; i++){
              for(var j = ranStartX; j < this.boardWidth; j++){      
                //reset stats
                this.tile[''+j+i].hasAttacked = false;
                //place mon
                var placeMonHere = Math.floor(Math.random() * 2);
                //this.monCount = 100;

                if(this.monCount > this.monCountValue){
                  this.monCount = this.monCountValue
                }

                if(this.monCount <= 3){
                  placeMonHere = 0
                }

                
                if(placeMonHere == 0 && this.monCount > 0 && !this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].isCrewHere && this.monCountValue > 0){
                  
                  dist += 1000;

                  
                  //this.tile[''+j+i].monID = Math.floor(Math.random() * 3)+1;//parseInt(text[textKey])
                  
                  var healthSpawn = Math.floor(Math.random() * 4)
                  if(this.turnCountNum == 0 || this.saltCounter >= this.saltCounterMax){
                    this.tile[''+j+i].monID = 99
                    this.tile[''+j+i].y = 1000+dist;
                    if(!this.tile[''+j+i].isFlipping){
                      //this.tile[''+j+i].isFlipping = true;
                      //this.tile[""+j+i].oldTexture = this.tile[""+j+i].texture;    
                    }
                    this.monCountValue--;
                    this.spawnCount++;                
                    this.chestCount++;
                    //set new salt limit
                    this.saltCounter = 0;
                    this.saltCounterMax = this.saltCounterBase*this.chestCount

                    
                  }
                  else{
                    // treasures affect mon spawn
                    var totalTreasureCount = 0;
                    for(var k = 1 ; k < 10; k++){
                      totalTreasureCount += this.collectedTreasure[k].count                        
                    }                    
                    for(var k = 1 ; k < 10; k++){
                      if(this.collectedTreasure[k].count > 0){
                        var spawnChance = Math.floor(Math.random() * (this.monCount) )
                        if(spawnChance <= this.collectedTreasure[k].count){
                          this.tile[''+j+i].monID = k+1;
                          this.tile[''+j+i].y = 1000+dist;
                          if(!this.tile[''+j+i].isFlipping){
                            //this.tile[''+j+i].isFlipping = true;
                            //this.tile[""+j+i].oldTexture = this.tile[""+j+i].texture;    
                          }
                          this.monCountValue--;
                          this.spawnCount++;                         
                        }
                        else{
                          if(totalTreasureCount == 1){
                            this.tile[''+j+i].monID = k+1;
                            this.tile[''+j+i].y = 1000+dist;
                            if(!this.tile[''+j+i].isFlipping){
                             // this.tile[''+j+i].isFlipping = true;
                              //this.tile[""+j+i].oldTexture = this.tile[""+j+i].texture;    
                            }
                            this.monCountValue--;
                            this.spawnCount++;                            
                          }
                        }
                      }
                        
                    }

                    //special summons
                    //navy hunt
                    if(this.bounty > 0){
                      var spawnChance = Math.floor(Math.random() * (4) )
                      if(spawnChance == 0){
                        this.tile[''+j+i].monID = 101;
                        this.tile[''+j+i].y = 1000+dist;
                        this.monCountValue--;
                        this.spawnCount++;                           
                      }                    

                    }                    
                  }

                  



                  /*
                  if(this.turnCountNum <= 5){
                    this.tile[''+j+i].monID = 2
                  }
                  else if(this.turnCountNum > 5 && this.turnCountNum <= 10){
                    this.tile[''+j+i].monID = Math.floor(Math.random() * 2)+2
                  }      
                  else if(this.turnCountNum > 10 ){
                    this.tile[''+j+i].monID = Math.floor(Math.random() * 3)+2

                    
                  }       
                  */

                  //spawn health
                  if(healthSpawn == 0  && this.cap_healthValue < 8 && this.saltCounter < this.saltCounterMax){
                    //disabled for balancing
                    //this.tile[''+j+i].monID = 1
                  }                  
                  
       
                  
                  

                  
                  
                  textKey++;
                  
                  this.monCount--;
                  
                  this.tile[''+j+i].multiAttack = 0;
                  
                  
                  

              
                  
                  

                  
                  this.tile[""+j+i].submerged = submerged;
                  //chest never submerged
                  if(this.tile[''+j+i].monID == 99){
                    this.tile[""+j+i].submerged = false;
                  }
                  //always spawn submerged after quota
                  if(this.spawnCount > monEmergecut){



                    this.tile[""+j+i].submerged = true
                  }

                  //diff types of enemy
                  switch(this.tile[''+j+i].monID){
                    //base monster
                    case 1:
                      this.tile[''+j+i].hp = 1;
                      this.tile[''+j+i].power = 0;
                      this.tile[''+j+i].tier = 0
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 2:
                      this.tile[''+j+i].hp = 3;
                      this.tile[''+j+i].power = 3;
                      this.tile[''+j+i].tier = 2
                      //this.tile[''+j+i].multiAttack = 1;
                      this.tile[''+j+i].isEnemyHere = true
                      break;            
                    case 3:
                      this.tile[''+j+i].hp = 5;
                      this.tile[''+j+i].power = 2;
                      this.tile[''+j+i].tier = 1
                      this.tile[''+j+i].multiAttack = 1;
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 4:
                      this.tile[''+j+i].hp = 15;
                      this.tile[''+j+i].power = 0;
                      this.tile[''+j+i].tier = 3
                      this.tile[''+j+i].isEnemyHere = true
                      break; 
                    case 5:
                      this.tile[''+j+i].hp = 4;
                      this.tile[''+j+i].power = 1;
                      this.tile[''+j+i].tier = 1
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 6:
                      this.tile[''+j+i].hp = 6;
                      this.tile[''+j+i].power = 2;
                      this.tile[''+j+i].tier = 1
                      this.tile[''+j+i].isEnemyHere = true
                      break;            
                    case 7:
                      this.tile[''+j+i].hp = 8;
                      this.tile[''+j+i].power = 3;
                      this.tile[''+j+i].tier = 3
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 8:
                      this.tile[''+j+i].hp = 4;
                      this.tile[''+j+i].power = 2;
                      this.tile[''+j+i].tier = 1
                      this.tile[''+j+i].isEnemyHere = true
                      break;        
                    case 9:
                      this.tile[''+j+i].hp = 6;
                      this.tile[''+j+i].power = 3;
                      this.tile[''+j+i].tier = 1
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 10:
                      this.tile[''+j+i].hp = 8;
                      this.tile[''+j+i].power = 4;
                      this.tile[''+j+i].tier = 3
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 99:
                      this.tile[''+j+i].hp = 3;
                      this.tile[''+j+i].power = 0;
                      this.tile[''+j+i].tier = 0
                      this.tile[''+j+i].isEnemyHere = true
                      break;   
                    case 101:
                      this.tile[''+j+i].hp = 4;
                      this.tile[''+j+i].power = this.bounty;
                      this.tile[''+j+i].tier = 2
                      this.tile[''+j+i].isEnemyHere = true
                      break;                                                                                                                     
                  }
                  this.tile[''+j+i].origPower = this.tile[''+j+i].power;
                }
                else{
                  //this.tile[''+j+i].isEnemyHere = false
                  //this.tile[''+j+i].monID = 0;
                }
                //multi attacks
                this.tile[''+j+i].origmultiAttack = this.tile[''+j+i].multiAttack
                
                if(parseInt(localStorage.getItem("intro")) == 7 && !this.tile[""+j+i].submerged ){
                  this.tile[''+j+i].hp = 5
                  
                }

                distX += this.tile[''+j+i].width+this.spacing
                if(distX > this.size*this.boardWidth){
                  distX = 0;
                  distY += this.tile[''+j+i].height+this.spacing
                }                  
                
              }

          }  
          
          //next phase
          if(this.turnCountNum <= 1){

          }
          this.turnMarkerText.text = "YOUR TURN"
          this.turnMarker.alpha = 1;       
          
          this.turnWait = turnWaitBase;
          
          this.phaseCounter++  
          if(this.turnCountNum > 0){
            //this.monCountValue--;
           
          }  
          this.turnCountNum++;   
          
          
          //return to port - end run?
          if(this.monCountValue <= 0){
            this.monCountValue = 0;
            
          }

          this.surfaceCountTrigger = 0;
          this.surfaceCount = 0;          
        }
        ,returnCrew: function () {
          //reset captain power boosts
          
          for(var i = 1; i < 6; i++){
            this.crew[i].holderPower[10] = 0
          }             
          this.captainPowerActivated = false;

          
          //check how many crew deployed
          
          this.deployCrewCount = 0 ;
          this.selectedCrew = 0     
          this.deploy_poolCurrent = this.deploy_poolMax     
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){      
              if(this.tile[''+j+i].isCrewHere || this.tile[''+j+i].crewID != 0){
                
                this.deployCrewCount++
              }
                     
            }
          }
          
          //crew returns          
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){      
              if(this.tile[''+j+i].isCrewHere  ){
                this.tile[''+j+i].hasActed = true;
                
                this.tile[''+j+i].loadTexture('tile');
                
               
             
                //this.deploy_poolCurrent += this.crew[this.tile[''+j+i].crewID].deployCost

                

                
                //crew return ability
                switch(this.tile[''+j+i].crewID){
                  case 1:
                    this.tile[''+j+i].y  = 1000;
                    break;
                  case 2:
                    this.tile[''+j+i].y  = 1000;
                    break;
                  case 3:
                    this.tile[''+j+i].y  = 1000;
                    break;
                  case 4:
                    this.tile[''+j+i].y  = 1000;
                    break;  
                  case 5:
                    
                    break; 
                  case 6:
                   
                    break;                                                                    
                }                
                this.tile[''+j+i].crewID = 0
                //this.tile[''+j+i].monID = 0
                this.tile[''+j+i].isCrewHere = false;
                //this.tile[''+j+i].isEnemyHere = false;
                //this.tile[''+j+i].healthText.text = "";
                //this.tile[''+j+i].powerText.text = "";
                //this.tile[''+j+i].healthText.alpha = 0
                //this.tile[''+j+i].powerText.alpha = 0;
                
                
                this.tile[''+j+i].hasActed = false;                
                //j =  this.boardWidth
                //i = this.boardHeight
                //break;
              }

            }
          }  
          for(var i = 1; i < 6; i++){
            this.crew[i].isSelected = false;
            this.crew[i].isDeployed = false
            for(var k = 1; k < 6; k++){
              if(this.crew[k].id == 1 && (parseInt(localStorage.getItem("intro")) == 7)){
                this.crewSpeak(k,"Back on the bench!")
                this.crew[k].speechTimer = 50
                localStorage.setItem("intro",8);
              }            
            }             
          }    
          this.removeTint();
          //next phase  
          
            


            
          //this.turnWait = 25;
          this.ActionCounter = 0;
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){   
              this.tile[''+j+i].isCrewHere = false;
              this.tile[''+j+i].hasActed = false;
              this.tile[''+j+i].hasAttacked = false;


             
            }
          }  
          /*        
          this.ActionCounter++;  
          if(this.ActionCounter >= this.deployCrewCount){
            this.deploy_poolCurrent = this.deploy_poolMax
            


            
            this.turnWait = 25;
            this.ActionCounter = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){   
                this.tile[''+j+i].isCrewHere = false;
                this.tile[''+j+i].hasActed = false;
              }
            }       
              
            
          }
          else{
            
            this.phaseStart = true;
            this.actionTimer = actionTimerBase 
            //this.game.time.events.add(5000, this.enemyFight());
          } 
          */
                   
        }
        ,endDeployPhase: function (tile) {
          if(parseInt(localStorage.getItem("intro")) < 7){
            for(var k = 1; k < 6; k++){
              if(this.crew[k].id == 1 && parseInt(localStorage.getItem("intro")) == 3){
                this.crewSpeak(k,"Let's get that treasure.\nDeploy me")
              }
              if(this.crew[k].id == 2 && parseInt(localStorage.getItem("intro")) == 4){
                this.crewSpeak(k,"Don't forget to deploy me!")
              }    
              if(this.crew[k].id == 3 && parseInt(localStorage.getItem("intro")) == 9){
                this.crewSpeak(k,"You forget me, Captain!")
              }                            
            }           
          }
          else if(parseInt(localStorage.getItem("intro")) == 9){
            for(var k = 1; k < 6; k++){ 
              if(this.crew[k].id == 3 ){
                this.crewSpeak(k,"You forget me, Captain!")
              }                            
            }           
          }          
          else{
            if(this.deployReady){
              
              this.actionTimer = 0;
              this.placeOrderTracker = 0;

              this.endbuttonTimer = 10
              this.turnWait = 1;
              this.phaseCounter++        
              this.turnMarkerText.text = ""
              this.turnMarker.alpha = 0;

              this.deployReady = false;  
              //savvy turns to salt
              for(var i = 0; i< this.deploy_poolCurrent; i++){
                //this.spawnSalt(this.deploy_pool.x, this.deploy_pool.y)
              }
              
              this.deploy_poolCurrent = 0;

              //this.capEnergy += this.deploy_poolCurrent
              //this.deploy_poolCurrent -= this.deploy_poolCurrent

              this.deployCrewCount = 0 ;
              //check how many crew deployed
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){      
                  if(this.tile[''+j+i].isCrewHere ){
                    this.deployCrewCount++
                  }
                }
              }



            }
          }

   
        }
        ,crewFight: function (tile) {

          

          //crew attacks          
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){      //
              
              if(this.tile[''+j+i].isCrewHere  && !this.tile[''+j+i].hasAttacked && this.placeOrderTracker == this.tile[''+j+i].placeOrder){
                
                this.tile[''+j+i].hasAttacked = true;
                this.placeOrderTracker++;
                this.tile[''+j+i].width  += 100;
                this.tile[''+j+i].height += 100;
                
            
                
                for(var z = 1; z < 6; z++){
                  if(this.crew[z].id == this.tile[''+j+i].crewID){

                    this.selectedCrew = this.crew[z].arrayKey
                    this.noPickUp = true;    

                    switch(parseInt(this.crew[z].attackPattern)){
                      //normal
                      case 1:
                        this.crewAttackTile(this.tile[''+(j+1)+(i)],this.tile[''+j+i].crewID)
                        this.crewAttackTile(this.tile[''+(j-1)+(i)],this.tile[''+j+i].crewID)
                        this.crewAttackTile(this.tile[''+(j)+(i+1)],this.tile[''+j+i].crewID)
                        this.crewAttackTile(this.tile[''+(j)+(i-1)],this.tile[''+j+i].crewID)                     
                        break;
                      //col strike 
                      case 2:
                        for(var l = 0; l < this.boardHeight; l++){
                          for(var m = 0; m < this.boardWidth; m++){
                            if(j == m){
                              this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)          
                            }
                          }
                        }                            
                        break;    
                      //row strike 
                      case 3:
                        for(var l = 0; l < this.boardHeight; l++){
                          for(var m = 0; m < this.boardWidth; m++){
                            if(i == l){
                              this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)          
                            }
                          }
                        }                       
                        break;
                        //area     
                        case 4:
                          this.crewAttackTile(this.tile[''+(j+1)+(i)],this.tile[''+j+i].crewID)
                          this.crewAttackTile(this.tile[''+(j-1)+(i)],this.tile[''+j+i].crewID)
                          this.crewAttackTile(this.tile[''+(j)+(i+1)],this.tile[''+j+i].crewID)
                          this.crewAttackTile(this.tile[''+(j)+(i-1)],this.tile[''+j+i].crewID)       
                          
                          this.crewAttackTile(this.tile[''+(j+1)+(i+1)],this.tile[''+j+i].crewID)
                          this.crewAttackTile(this.tile[''+(j-1)+(i-1)],this.tile[''+j+i].crewID)   
                          this.crewAttackTile(this.tile[''+(j-1)+(i+1)],this.tile[''+j+i].crewID)
                          this.crewAttackTile(this.tile[''+(j+1)+(i-1)],this.tile[''+j+i].crewID)                                                           
                        break;    
                        case 5:
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(j == m){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)          
                              }
                            }
                          }                        
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(i == l){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)          
                              }
                            }
                          }                                                            
                        break; 
                        case 6:
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(this.tile[''+(m)+(l)].smoke.on){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)              
                              }
                            }
                          }                              
                          break;
                        case 7:
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(this.tile[''+(m)+(l)].submerged){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)              
                              }
                            }
                          }                              
                          break;          
                        case 8:
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(!this.tile[''+(m)+(l)].submerged && this.tile[''+(m)+(l)].isEnemyHere){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)              
                              }
                            }
                          }                              
                          break;                                             
                                                                                 
                    }  
                    
                    //crew combat ability trigger
                    switch(this.crew[z].id){
                      case 1:

                        break;
                      case 2:
                        //death blade
                        /*
                        this.knockBack(this.tile[''+(j+1)+(i)],this.tile[''+j+i])
                        this.knockBack(this.tile[''+(j-1)+(i)],this.tile[''+j+i])
                        this.knockBack(this.tile[''+(j)+(i+1)],this.tile[''+j+i])
                        this.knockBack(this.tile[''+(j)+(i-1)],this.tile[''+j+i])       
                        
                        this.knockBack(this.tile[''+(j+1)+(i+1)],this.tile[''+j+i])
                        this.knockBack(this.tile[''+(j-1)+(i-1)],this.tile[''+j+i])   
                        this.knockBack(this.tile[''+(j-1)+(i+1)],this.tile[''+j+i])
                        this.knockBack(this.tile[''+(j+1)+(i-1)],this.tile[''+j+i])  
                        */

                        
                        break;
                      case 3:             
                        break;
                      case 4:                
                        break;  
                      case 5:   
                        //bomb explodes
                        
                        this.removeTint();
                        this.tile[''+j+i].y  = 1000;
                        this.tile[''+j+i].loadTexture('tile');                
                        this.tile[''+j+i].crewID = 0
                        //this.tile[''+j+i].monID = 0
                        this.tile[''+j+i].isCrewHere = false;
                        //this.tile[''+j+i].isEnemyHere = false;
                        this.tile[''+j+i].healthText.text = "";
                        this.tile[''+j+i].powerText.text = "";
                        this.tile[''+j+i].healthText.alpha = 0
                        this.tile[''+j+i].powerText.alpha = 0;
                        
                        //this.tile[''+j+i].isCrewHere = false;
                        //this.tile[''+j+i].hasActed = false;                                       
                        break;
                        case 10:           
                        var makeAmmoChance = Math.floor(Math.random() * 4);    
                        if(makeAmmoChance  == 0 ){
                          this.freeCounterNum++;
                          this.freeCounterText2.alpha = 1
                          this.freeCounterText2.text = "+1"                           
                          this.setActionText(this.tile[''+j+i],"+1💣")
                        }                             
                        break;                          

                                                                      
                    }                      
                  }
                }



              

                j =  this.boardWidth
                i = this.boardHeight
                break;
              }

            }
          }         
          this.ActionCounter++;  

          
          if(this.ActionCounter >= this.deployCrewCount){
            //this.removeTint();
            this.phaseCounter++;

            this.turnMarkerText.text = "ENEMY TURN"
            this.turnMarker.alpha = 1;                
            this.phaseCounter++;  
            
            this.turnWait = turnWaitBase;
            this.ActionCounter = 0;
            this.placeOrderTracker = 0;
            this.placeOrderKey = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){   
                this.tile[''+j+i].hasActed = false;
                this.tile[''+j+i].hasAttacked = false;
                this.tile[''+j+i].placeOrder = -1;
              }
            }             
          }
          else{
            this.phaseStart = true;
            this.actionTimer = actionTimerBase 
            //this.game.time.events.add(5000, this.enemyFight());
          }          
        }  
        ,crewAttackTile: function (enemy,crewID) {   
          try{
           // if(enemy.isEnemyHere && ((!enemy.submerged) || (enemy.submerged && crewID == 6))){
            if(enemy.isEnemyHere && ((!enemy.submerged))){
              /*
              if(crewID == 6 && enemy.submerged){
                enemy.isFlipping = true;
                enemy.oldTexture = enemy.texture;   
                enemy.submerged = false; 
              }
              */
              //if intagible no damage
              if(enemy.alpha == 1){
                for(var i = 1; i < 6; i++){
                  if(this.crew[i].id == crewID){
                    
                    enemy.hp -= this.crew[i].power
                    this.setActionText(enemy,this.crew[i].power)
                    

                  }
                }
                
              }
              else{
                for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){   
                    if(this.tile[''+j+i].crewID == crewID){
                      this.setActionText(this.tile[''+j+i],"MISSED")
                    }
                  }
                }                    
                       
                
              }
              //enemy.spinSpeed = this.crew[crewID].power*10
              enemy.springX = 100;
              //enemy.springY = 100;

             

              //enemy on hurt ability
              switch(enemy.monID){
                case 5:
                  enemy.power += 1
                  enemy.width  += 100;
                  enemy.height += 100;                    
                  break;                  
                case 6:
                  enemy.power += 2
                  enemy.width  += 100;
                  enemy.height += 100;                    
                  break;
                case 7:
                  enemy.power += 5
                  enemy.width  += 100;
                  enemy.height += 100;                      
                  break;
                //immune to column hits
                case 8: 
                case 9: 
                case 10:   
                  /*
                  if(enemy.posX == this.crew[crewID].posX){
                    enemy.hp += this.crew[crewID].power
                    enemy.alpha = 0.5;
                  }  
                break;
                */
               break;
              }            
              if(enemy.hp <= 0){
                enemy.hp = 0;
                this.enemyDie(enemy,crewID)
              }
              //this.enemyDie(enemy)
            }
          }
          catch(e){

          }

        }
        ,enemyDie: function (enemy,crewID) {
          
          enemy.smoke.on = false;
          enemy.isEnemyHere = false;
          enemy.submerged = false;
          enemy.loadTexture('tile');

          if (crewID === undefined ) {
            crewID = 1
          
          }
          
          //check if win
          if(this.monCountValue <= 0){
            var monsLeft = 0;
            for(var m = 0; m < this.boardHeight; m++){
              for(var l = 0; l < this.boardWidth; l++){  
                if(this.tile[''+l+m].isEnemyHere){
                  monsLeft++
                }
              }
            }            
            if(monsLeft <= 0){
              this.chatTimer = 1;
            }
            
          }     
            
          // crew kill effects
          
          for(var k = 1; k < 6; k++){
            if(this.crew[k].id == 2 && crewID == 2){
              this.crew[k].origPower += 1;
              //this.crew[k].power = this.crew[k].origPower;
            }
            if(this.crew[k].id == crewID){
              this.crew[k].killCount+=1             
            }
          }          
          
          //enemy death effects
          
          
          for(var i = 0; i < enemy.tier; i++){
            this.spawnSalt(enemy.x, enemy.y)
          }     
          if(localStorage.getItem("NumMon"+enemy.monID+"Killed") === null){
            localStorage.setItem("NumMon"+enemy.monID+"Killed",0)
          }
          var currentCount = parseInt(localStorage.getItem("NumMon"+enemy.monID+"Killed"))
          localStorage.setItem("NumMon"+enemy.monID+"Killed",currentCount+1)
          
          switch(enemy.monID){
            case 1:
              /*
              this.cap_healthValue += 2;
              this.cap_health.height += 150;
              this.cap_health.width += 150;
              */
              break;
            case 2:
              //this.scoreCountNum += 10
              break;
            case 3:
              //this.scoreCountNum += 15
              break;
            case 4:
              //this.scoreCountNum += 20
              break
            case 5:
              //this.scoreCountNum += 25
              break;
            case 6:
              //this.scoreCountNum += 25
              break;
            case 7:
              //this.scoreCountNum += 30
              break     
            case 8:
              //this.scoreCountNum += 35
              break;
            case 9:
              //this.scoreCountNum += 40
              break;             
            case 10:
              //this.scoreCountNum += 45
              break;             
            case 99:
              
              this.chatTimerCount = chatTimerBase;

              this.treasureOptions[0].value = 1//Math.floor(Math.random() * 2)+1;
              
              this.treasureOptions[1].value = 4//(Math.floor(Math.random() * 2)+1)+3;
              this.treasureOptions[2].value = 7//(Math.floor(Math.random() * 2)+1)+6;

              
              if(this.chestCount % 2 == 0){
                this.treasureOptions[0].value = 2//Math.floor(Math.random() * 2)+2;
                this.treasureOptions[1].value = 5//Math.floor(Math.random() * 2)+2+3;
                this.treasureOptions[2].value = 8//Math.floor(Math.random() * 2)+2+6;
              } 
              

              if(this.chestCount % 3 == 0){
                this.treasureOptions[0].value = 3//Math.floor(Math.random() * 2)+2;
                this.treasureOptions[1].value = 6//Math.floor(Math.random() * 2)+2+3;
                this.treasureOptions[2].value = 9//Math.floor(Math.random() * 2)+2+6;
              }     
              

              /*
              for(var i =0; i < 3; i++){
                Math.floor(Math.random() * 9);
                var chestCount = 0
                if(this.turnCountNum > 3){
                  chestCount = (this.turnCountNum-1)
                }

                if(chestCount > 10 && chestCount < 20){

                }
                else if(chestCount > 20 && chestCount < 30){

                }
                else if(chestCount > 30 ){

                }                                
                this.treasureOptions[i].value = Math.floor(Math.random() * (3+chestCount))+1;
              }              
              //this.scoreCountNum += 45
              */
              break;                                                               
          }       
          enemy.monID = 0;   
          this.game.plugins.screenShake.shake(5); 

          enemy.y = 1000;          
        }      
        ,knockBack: function (enemy,crew) {
          try{
            if(enemy.isEnemyHere && !enemy.submerged){

              if(parseInt(enemy.posX) < parseInt(crew.posX)){
                enemy.width = 50;
                enemy.height = 50                
                if(!this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].isEnemyHere && !this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].isCrewHere){
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].loadTexture(enemy.texture)
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].monID = enemy.monID
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].isEnemyHere = true;
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].hp = enemy.hp
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].power = enemy.power
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
                  enemy.power = 0;
                  enemy.monID = 0

                  if(this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].hp <= 0){
                    this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].hp = 0;
                    this.enemyDie(this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))])
                  }                  
                }

              }
              if(parseInt(enemy.posX) > parseInt(crew.posX)){
                if(!this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].isEnemyHere && !this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].isCrewHere){
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].loadTexture(enemy.texture)
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].monID = enemy.monID
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].isEnemyHere = true;
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].hp = enemy.hp
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].power = enemy.power
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
                  enemy.power = 0;
                  enemy.monID = 0

                  if(this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].hp <= 0){
                    this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].hp = 0;
                    this.enemyDie(this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))])
                  }                   
                }
              }        
              if(parseInt(enemy.posY) > parseInt(crew.posY)){
                if(!this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].isEnemyHere && !this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].isCrewHere){
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].loadTexture(enemy.texture)
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].monID = enemy.monID
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].isEnemyHere = true;
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].hp = enemy.hp
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].power = enemy.power
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
                  enemy.power = 0;
                  enemy.monID = 0           
                  
                  if(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].hp <= 0){
                    this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].hp = 0;
                    this.enemyDie(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)])
                  }                    
                }

              }            
              if(parseInt(enemy.posY) < parseInt(crew.posY)){
                if(!this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].isEnemyHere && !this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].isCrewHere){
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].loadTexture(enemy.texture)
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].monID = enemy.monID
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].isEnemyHere = true;
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].hp = enemy.hp
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].power = enemy.power
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
                  enemy.power = 0;
                  enemy.monID = 0           
                  
                  if(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].hp <= 0){
                    this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].hp = 0;
                    this.enemyDie(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)])
                  }                      
                }
              } 
            }
                   
          }
          catch(e){

          }

          this.game.plugins.screenShake.shake(5); 

          //enemy.y = 1000;          
        }                        
        ,enemyFight: function () {
          this.monCount = 0;
          //check how many enemy
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){      
              if(this.tile[''+j+i].isEnemyHere ){
                this.monCount++
              }
            }
          } 

          //enemy attacks          
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){     
              
              
              if(this.tile[''+j+i].isEnemyHere  && !this.tile[''+j+i].hasAttacked){


                //this.tile[''+j+i].alpha = 1;
                this.tile[''+j+i].hasAttacked = true;
                //this.placeCrew(this.tile[''+j+i])
                
                this.selectedCrew = 100+this.tile[''+j+i].monID;
                this.noPickUp = true; 
                


                if(!this.tile[''+j+i].submerged && this.tile[''+j+i].power > 0){
                  this.tile[''+j+i].width  += 100;
                  this.tile[''+j+i].height += 100;        
                  
                  //if smoking potentially miss (50% chance)
                  if(this.tile[''+j+i].smoke.on){
                    var missChance = Math.floor(Math.random() * 4);    
                    if(missChance == 0 || missChance == 1){
                      this.setActionText(this.tile[''+j+i],"MISSED")
                    }
                    else{
                     /* if (parseInt(localStorage.getItem("intro")) == 3 ) {
                        localStorage.setItem("intro",4);
                        this.chatTimer = 1;
                        this.tutorialPause = true;   
                        this.overlay.loadTexture('bgOverlay_heart')                          
                        Swal.fire({
                          title: 'Tutorial (5/5)',
                          text: "Sea Creeps ONLY attack your captain regardless off their position on the board. If your captain's health reaches zero you'll have to abandon your voyage and lose all the treasure you've gathered.",
                          imageUrl: 'assets/tut_heart.png',
                          imageWidth: 200,
                          imageHeight: 200,
                        }).then((result) => {
                          this.chatTimer = 0;
                          this.tutorialPause = false;                              
                        })            
                      }  */                    
                      if(this.tile[''+j+i].power > 0){
                        this.damageCaptain(this.tile[''+j+i])
                      } 
                    }
                  }
                  else{
                   /* if (parseInt(localStorage.getItem("intro")) == 3 ) {
                      localStorage.setItem("intro",4);
                      this.chatTimer = 1;
                      this.tutorialPause = true;           
                      this.overlay.loadTexture('bgOverlay_heart')                 
                      Swal.fire({
                        title: 'Tutorial (5/5)',
                        text: "Sea Creeps ONLY attack your captain regardless off their position on the board. If your captain's health reaches zero you'll have to abandon your voyage and lose all the treasure you've gathered.",
                        imageUrl: 'assets/tut_heart.png',
                        imageWidth: 200,
                        imageHeight: 200,
                      }).then((result) => {
                        this.chatTimer = 0;
                        this.tutorialPause = false;                              
                      })            
                    }    */       
                    if(this.tile[''+j+i].power > 0){
                      this.damageCaptain(this.tile[''+j+i])
                    }               
                    
             
                  }
                  

                  //enemy special combat ability
                  switch(this.tile[''+j+i].monID){
                    case 3:
                      //attacks twice
                      if(this.tile[''+j+i].multiAttack > 0){
                        this.tile[''+j+i].multiAttack--;
                        this.tile[''+j+i].hasAttacked = false
                        this.ActionCounter--;
                      }
                      
                      break; 
                    
                    case 4:      
                      //spawn tentacles
                      
                      try{
                        
                        
                        if(!this.tile[''+(j+1)+(i)].isCrewHere && !this.tile[''+(j+1)+(i)].isEnemyHere){
                          var whichArm = Math.floor(Math.random() * 2);    
                          
                          if(whichArm == 0){
                            this.tile[''+(j+1)+(i)].hp = 3;
                            this.tile[''+(j+1)+(i)].power = 3;
                            this.tile[''+(j+1)+(i)].tier = 2
                            //this.tile[''+j+i].multiAttack = 1;
                            this.tile[''+(j+1)+(i)].isEnemyHere = true
                            this.tile[''+(j+1)+(i)].submerged = false
                            this.tile[''+(j+1)+(i)].monID = 2
                          }
                          else{
                            this.tile[''+(j+1)+(i)].hp = 3;
                            this.tile[''+(j+1)+(i)].power = 2;
                            this.tile[''+(j+1)+(i)].tier = 1
                            this.tile[''+(j+1)+(i)].multiAttack = 1;
                            this.tile[''+(j+1)+(i)].isEnemyHere = true
                            this.tile[''+(j+1)+(i)].submerged = false
                            this.tile[''+(j+1)+(i)].monID = 3
                          }

                        }
                      } 
                      catch(e){
                        
                      }

                      try{
                        
                        if(!this.tile[''+(j-1)+(i)].isCrewHere && !this.tile[''+(j-1)+(i)].isEnemyHere){
                          var whichArm = Math.floor(Math.random() * 2);  
                          
                          if(whichArm == 0){
                            this.tile[''+(j-1)+(i)].hp = 3;
                            this.tile[''+(j-1)+(i)].power = 3;
                            this.tile[''+(j-1)+(i)].tier = 2
                            //this.tile[''+j+i].multiAttack = 1;
                            this.tile[''+(j-1)+(i)].isEnemyHere = true
                            this.tile[''+(j-1)+(i)].submerged = false
                            this.tile[''+(j-1)+(i)].monID = 2
                          }
                          else{
                            this.tile[''+(j-1)+(i)].hp = 3;
                            this.tile[''+(j-1)+(i)].power = 2;
                            this.tile[''+(j-1)+(i)].tier = 1
                            this.tile[''+(j-1)+(i)].multiAttack = 1;
                            this.tile[''+(j-1)+(i)].isEnemyHere = true
                            this.tile[''+(j-1)+(i)].submerged = false
                            this.tile[''+(j-1)+(i)].monID = 3
                          }
                         
                        }
                        
                      } 
                      catch(e){
                        
                      }  
                      
                      try{

                        if(!this.tile[''+(j)+(i+1)].isCrewHere && !this.tile[''+(j)+(i+1)].isEnemyHere){
                          var whichArm = Math.floor(Math.random() * 2);    
                          if(whichArm == 0){
                            this.tile[''+(j)+(i+1)].hp = 3;
                            this.tile[''+(j)+(i+1)].power = 3;
                            this.tile[''+(j)+(i+1)].tier = 2
                            //this.tile[''+j+i].multiAttack = 1;
                            this.tile[''+(j)+(i+1)].isEnemyHere = true
                            this.tile[''+(j)+(i+1)].submerged = false
                            this.tile[''+(j)+(i+1)].monID = 2
                          }
                          else{
                            this.tile[''+(j)+(i+1)].hp = 3;
                            this.tile[''+(j)+(i+1)].power = 2;
                            this.tile[''+(j)+(i+1)].tier = 1
                            this.tile[''+(j)+(i+1)].multiAttack = 1;
                            this.tile[''+(j)+(i+1)].isEnemyHere = true
                            this.tile[''+(j)+(i+1)].submerged = false
                            this.tile[''+(j)+(i+1)].monID = 3
                          }                   
                        }
                      } 
                      catch(e){
                       
                      }  
                      try{
                        if(!this.tile[''+(j)+(i-1)].isCrewHere && !this.tile[''+(j)+(i-1)].isEnemyHere){
                          var whichArm = Math.floor(Math.random() * 2);    
                          if(whichArm == 0){
                            this.tile[''+(j)+(i-1)].hp = 3;
                            this.tile[''+(j)+(i-1)].power = 3;
                            this.tile[''+(j)+(i-1)].tier = 2
                            //this.tile[''+(j)+(i-1)].multiAttack = 1;
                            this.tile[''+(j)+(i-1)].isEnemyHere = true
                            this.tile[''+(j)+(i-1)].submerged = false
                            this.tile[''+(j)+(i-1)].monID = 2
                          }
                          else{
                            this.tile[''+(j)+(i-1)].hp = 3;
                            this.tile[''+(j)+(i-1)].power = 2;
                            this.tile[''+(j)+(i-1)].tier = 1
                            this.tile[''+(j)+(i-1)].multiAttack = 1;
                            this.tile[''+(j)+(i-1)].isEnemyHere = true
                            this.tile[''+(j)+(i-1)].submerged = false
                            this.tile[''+(j)+(i-1)].monID = 3
                          }
                        }
                      } 
                      catch(e){
                       
                      }                                                              


                                        
                      break;
                      case 5:
                      case 6:
                        //moves after attacks
                        /*
                        var randomMoveDist = Math.floor(Math.random() * 5)+3
                        var randomX = Math.floor(Math.random() * this.boardWidth)
                        var randomY = Math.floor(Math.random() * this.boardHeight)
                        
                        if(!this.tile[''+(randomX)+(randomY)].isEnemyHere && !this.tile[''+(randomX)+(randomY)].isCrewHere){
                          this.tile[''+(randomX)+(randomY)].loadTexture(this.tile[''+j+i].texture)
                          this.tile[''+(randomX)+(randomY)].monID = this.tile[''+j+i].monID
                          this.tile[''+(randomX)+(randomY)].isEnemyHere = true;
                          this.tile[''+(randomX)+(randomY)].hp = this.tile[''+j+i].hp
                          this.tile[''+(randomX)+(randomY)].power = this.tile[''+j+i].power
                          this.tile[''+(randomX)+(randomY)].hasAttacked = true;
                          this.tile[''+j+i].hasAttacked = false;
                          this.tile[''+j+i].isEnemyHere = false;
                          this.tile[''+j+i].loadTexture("tile")
                          this.tile[''+j+i].hp = 0
                          this.tile[''+j+i].power = 0;
                          this.tile[''+j+i].monID = 0
                        }
                        */
                        break;   
                      case 8:
                      case 9:        
                      case 10:
                        
                        if(this.tile[''+j+i].alpha == 1){
                          this.tile[''+j+i].alpha = 0.5
                          if(this.tile[''+j+i].smoke.on){
                            this.tile[''+j+i].smoke.on = false;
                          }
                        }
                        else{
                          this.tile[''+j+i].alpha = 1;
                        }
                        break;                                    
                  } 
                  this.game.plugins.screenShake.shake(5); 

                  if(this.cap_healthValue <= 0){
                    this.bgSound.stop();
                    this.transWaveKey = 1
                    this.transTar = 'lose'                          
                    //this.game.state.start('lose');
                  }
                  j =  this.boardWidth
                  i = this.boardHeight
                  break;
                }
                else{
                  if(this.tile[''+j+i].isCrewHere){
                    this.tile[''+j+i].y -= 50;
                    //crew On Block effect
                    switch(this.tile[''+j+i].crewID){
                      case 6:       
                        for(var z = 1; z < 6; z++){
                          if(this.crew[z].id == this.tile[''+j+i].crewID){
                            
                            this.cap_healthText2.alpha = 1
                            this.cap_healthValue += this.crew[z].power
                            this.cap_healthText2.text = this.crew[z].power
                            this.cap_healthText2.y = this.cap_healthText.y      

                            
                          }
                        }                                        
                  
                        break;
                      case 7:
                        
                        for(var z = 1; z < 6; z++){
                          if(this.crew[z].id == this.tile[''+j+i].crewID){
                            
                            this.crew[z].power = this.crew[z].power*2;
                            this.crew[z].origPower = this.crew[z].power
                            this.tile[''+j+i].powerText.text = this.crew[z].power

                            
                          }
                        }                        

                        break;                        
                    }
                  }
                  else{
                    this.tile[''+j+i].submerged = false;
                    this.tile[''+j+i].width  = this.size
                    this.tile[''+j+i].height = this.size  
                    //this.ActionCounter--;
                    if(!this.tile[''+j+i].isFlipping){
                      this.tile[''+j+i].isFlipping = true;
                      this.tile[""+j+i].oldTexture = this.tile[""+j+i].texture;    
                    } 
                  }
                 
                  j =  this.boardWidth
                  i = this.boardHeight
                  break;                  
                }                

              }

            }
          } 
          
          this.ActionCounter++;
          
          if(this.ActionCounter >= this.monCount){
            //this.turnMarkerText.text = "ENEMY TURN"               
            this.phaseCounter = 0;
            this.turnWait = turnWaitBase;
            this.ActionCounter = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){   
                this.tile[''+j+i].hasActed = false;
                this.tile[''+j+i].multiAttack = this.tile[''+j+i].origmultiAttack
              }
            }             
            this.turnMarkerText.text = ""
            this.turnMarker.alpha = 0;     
            if(this.surfaceCountTrigger == 0){
              this.surfaceCountTrigger = 1;

              for(var l = 0; l < this.boardHeight; l++){
                for(var m = 0; m < this.boardWidth; m++){   
                  if(!this.tile[""+m+l].submerged && this.tile[""+m+l].monID != 0 && this.tile[""+m+l].isEnemyHere){
                    this.surfaceCount++
                  }
                }
              }                 
          
            }
            this.spawnMonsters();

          }
          else{
            this.phaseStart = true;
            this.actionTimer = actionTimerBase 
            //this.game.time.events.add(5000, this.enemyFight());
          }
            
        }        
        ,placeCrew: function (tile) {
          
          
          if(debug){
            alert("tile info \nIs Flipping? "+tile.isFlipping+"\nisEnemy? "+tile.isEnemyHere+"\nisSubmerged? "+tile.submerged+"\nmonID? "+tile.monID+"\nisCrew? "+tile.isCrewHere)
            alert("tile info \ncrew ID? "+tile.crewID)
            alert("selected Crew? "+this.selectedCrew+"\nselected crew ID? "+this.crew[this.selectedCrew].id )
          }
          
          if(this.selectedCrew != 0 && (!tile.isEnemyHere || tile.submerged) && !tile.isCrewHere && !this.noPickUp){
            var remainingDeploy = this.deploy_poolCurrent - this.crew[this.selectedCrew].deployCost

            
            
            this.noPickUp = true;

            tile.placeOrder = this.placeOrderTracker
            this.placeOrderTracker++
            if(remainingDeploy >= 0){
              //crew guiding placement
              if(parseInt(localStorage.getItem("intro")) == 3 || onboardingDebug ){
                
                for(var k = 1; k < 6; k++){
                  if(this.crew[k].id == 2 && this.crew[this.selectedCrew].id != 2 && parseInt(localStorage.getItem("intro")) == 3){
                    this.crewSpeak(k,"Put me in as well, Cap'n!")
                    localStorage.setItem("intro",4);
                  }
                }  
              }
              if(this.crew[this.selectedCrew].id == 2 && parseInt(localStorage.getItem("intro")) == 4){
                localStorage.setItem("intro",6);
              }
              if(parseInt(localStorage.getItem("intro")) == 9 && this.crew[this.selectedCrew].id == 3){
                localStorage.setItem("intro",10);
              }                

              if (parseInt(localStorage.getItem("intro")) == 6 ) {
                this.tutorialPause = true;
                this.chatTimer = 1;                  
                this.overlay.loadTexture('bgOverlay_savvy')   
                Swal.fire({
                  title: 'Pay Attention!',
                  text: "Deploying crew and Using your captain's ability costs SAVVY.",
                  imageUrl: 'assets/tut_savvy.png',
                  backdrop: false,
                  imageWidth: 200,
                  imageHeight: 200,
             
                }).then((result) => {
                  localStorage.setItem("intro",7);
                  this.chatTimer = 0;
                  this.tutorialPause = false;                         
                })            
              } 
                            
              try{

                this.crew[this.selectedCrew].posX = tile.posX
                this.crew[this.selectedCrew].posY = tile.posY
                tile.loadTexture(this.crew[this.selectedCrew].texture)
                tile.width = this.size
                tile.height = this.size
                tile.isCrewHere = true
                

                tile.crewID = this.crew[this.selectedCrew].id 
                this.crew[this.selectedCrew].isSelected = false;
                
                this.deploy_poolCurrent -= this.crew[this.selectedCrew].deployCost
                if(this.selectedCrew == 5){
                  this.freeCounterNum--;
                  this.freeCounterText2.alpha = 1
                  this.freeCounterText2.text = "-1"                   
                }
                else{
                  this.crew[this.selectedCrew].isDeployed = true
                }
              }
              catch(e){

              }
              
              for(var i = 1; i < 6; i++){
                this.crewSelect[i].alpha = 0;
              }
              this.selectedCrew = 0   
            }

          }
          else if(tile.isCrewHere){
            for(var z = 1; z < 6; z++){
              if(this.crew[z].id == tile.crewID){
                this.selectedCrew = this.crew[z].arrayKey
              }
            }            
            
            this.noPickUp = true;

          }          
          else if(tile.isEnemyHere){
            //
            if(this.smoke.on && !tile.smoke.on){
              this.smoke.on = false;
              this.captainPowerActivated = false;
              tile.smoke.on = true;
              tile.smoke.x = tile.x
              tile.smoke.y = tile.y
              tile.hp -= 2;
              tile.springX = 100;
              if(tile.hp<= 0){
                tile.hp = 0;
                this.enemyDie(tile)
              } 
              else{
                this.selectedCrew = 100+tile.monID;
              }             
            }
            else{
              this.selectedCrew = 100+tile.monID;
            }
            
            if(tile.submerged){
              this.selectedCrew = 200;
            }
          }
          /*
          else if (tile.isCrewHere){


            tile.loadTexture("tile")
            tile.width = this.size
            tile.height = this.size
            tile.isCrewHere = false
            this.selectedCrew = tile.crewID
            tile.crewID = 0
            this.crew[this.selectedCrew].isSelected = true;
            this.crew[this.selectedCrew].isDeployed = false       
            this.deploy_poolCurrent += this.crew[this.selectedCrew].deployCost    
            if(this.selectedCrew == 5){
              this.freeCounterNum++;
            } 
            this.removeTint();
          }
          */
       
        }   
        ,tintTile: function (tile,color) {
          try{
            tile.tint = color
          }
          catch(e){

          }   
        }         
        ,removeTint: function () {
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){   
              this.tile[""+j+i].tint = '0xFFFFFF'
            }
          }    
        }                   
        ,deselect: function (crew) {
          
          if(this.deployReady){
            for(var i = 1; i < 6; i++){
              this.crew[i].isSelected = false;
            }
            this.selectedCrew = 0            
          }
          this.removeTint();

          
        }        
        ,crewSelected: function (crew) {
          this.noPickUp = false;
          //only during deployment phase
          if(this.deployReady){
            if(!crew.isDeployed){

              

              if(!crew.isSelected){
                for(var i = 1; i < 6; i++){
                  this.crew[i].isSelected = false;
                }            
                crew.speechTimer = 1;                
                crew.isSelected = true;
                this.selectedCrew = crew.arrayKey//crew.id
              }
              else{
                crew.isSelected = false;
                this.selectedCrew = 0
                this.noPickUp = true;
              }
              
            }

            if(parseInt(localStorage.getItem("intro")) == 3 && crew.id != 1){
              crew.isSelected = false;
              this.selectedCrew = 0
              this.noPickUp = true;              
              for(var k = 1; k < 6; k++){
                if(this.crew[k].id == 1){
                  this.crewSpeak(k,"Deployment order matters!\nPut me in first")
                }
              }              
            }

            if(parseInt(localStorage.getItem("intro")) == 9 && crew.id != 3){
              crew.isSelected = false;
              this.selectedCrew = 0
              this.noPickUp = true;              
              for(var k = 1; k < 6; k++){
                if(this.crew[k].id == 3){
                  this.crewSpeak(k,"Let me have the honour, Captain")
                }
              }              
            }            

            


          }

          

          
        }
        , showInfo: function (crew) {
          if(this.noPickUp){
            this.selectedCrew = crew.arrayKey
            //this.noPickUp = true;
          }

          
        }   
        , updatetoolTip: function (text) {
          this.tips.updateContent("Plus Ultra")
          this.tips.hideTooltip()
          var words = text.text.split(" ");
          var content = ""
          for(var i = 0; i < words.length; i++){
            for(var k = 0; k < keyword.length; k++){
              if(words[i].toUpperCase() === keyword[k].word.toUpperCase()){
                
                if(keyword[k].description.length > 0){
                  this.tips.showTooltip()  
                  if(keyword[k].description.length > 0){
                    content += keyword[k].description+"\n\n"
                  } 
                  this.tips.updateContent(content)
                  //k = keyword.length
                  //i = words.length
                }

              }
              else{
              }

            }
          }          
        }                  

        , setActionText: function (tile,text) {
          tile.actionText.alpha = 1;
          tile.actionText.text = text;

          tile.actionText.x = tile.x
          tile.actionText.y = tile.y
          
                      
          
        }        
        , damageCaptain: function (enemy) {
            this.captainHurt = true;
            this.game.plugins.screenShake.shake(5); 
            this.cap_healthText2.alpha = 1
            this.cap_healthValue -= parseInt(enemy.power);  
            this.cap_healthText2.text = enemy.power
            this.cap_healthText2.y = this.cap_healthText.y
                        
          
        }
        , animateHover: function (item){
          
          item.targetY = item.origtargetY-50;
        }
        , returnOrig: function (item){
          item.targetY = item.origtargetY
        }                
        , monMove: function (){

        }
        , monAttack: function (mon){

        }        
        , monDead: function (mon){


        }     
        , showOptions: function () {
          if(true){
            this.tutorialPause = true;
            this.chatTimer = 1;                
            var ran = Math.floor(Math.random() * 3)+1;
            Swal.fire({
              title: 'OPTIONS',
              html: '<span onclick=\'const electron = require("electron");const ipc = electron.ipcRenderer;ipc.send("toggle-maximize-window");\'>TOGGLE FULL SCREEN</span><br/><br/><div class="slidecontainer" > MUSIC VOLUME: <span id="mVol">'+parseInt(localStorage.getItem("bgVol"))+'</span><br/><input oninput=\'document.getElementById("mVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("bgVol"))+'" class="slider" id="volRange"> </div><br/><div class="slidecontainer"> SFX VOLUME: <span id="sfxVol">'+parseInt(localStorage.getItem("sfxVol"))+'</span><br/><input oninput=\'document.getElementById("sfxVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("sfxVol"))+'" class="slider" id="sfxRange"> </div>',
            }).then((result) => {
              var bgVol = document.getElementById("volRange");
              var sfxVol = document.getElementById("sfxRange");
    
              localStorage.setItem("bgVol",bgVol.value)
              localStorage.setItem("sfxVol",sfxVol.value)
              //alert(bgVol.value)

              this.tutorialPause = false;
              this.chatTimer = 0;                  
           
            })            
          }      
        }      
        , crewSpeak: function (key,words){
          this.crew[key].speechBubble.alpha = 0;
          this.crew[key].isTalking = true;
          this.crew[key].speechBubbleText.text = words
          this.crew[key].speechTimer = speechTimerBase
          //this.showInfo(this.crew[key])


        }   
        , crewShutup: function (key){
          this.crew[key].isTalking = false;

        }                   
        , checkKeywords: function (text){
          // detect emoji /\p{Extended_Pictographic}/u.test('flowers 123')
          // first be able to detect multiple key words
          text.clearColors()
          var words = text.text.split(" ");
          var lengthBeforeKey = 0;
          var lengthAfterKey = 0;
          var keywordLength = 0;
          
          var lengthCounter = [];
          var lengthKey = 0;
          lengthCounter[lengthKey] = 0;

          var keyWordCounter = [];
          var keyWordKey = 0;
          

          for(var i = 0; i < words.length; i++){
            lengthCounter[lengthKey] += words[i].length+1
            for(var k = 0; k < keyword.length; k++){
             
              if(words[i].toUpperCase() === keyword[k].word.toUpperCase()){
                keyWordCounter[lengthKey] = k
                //keyWordCounter[lengthKey] = keyword[k].word.length
                lengthCounter[lengthKey] -= keyword[k].word.length+1;
                lengthKey++
                lengthCounter[lengthKey] = lengthCounter[lengthKey-1]+keyword[k].word.length+1
                /*
                k = keyword.length
                i = words.length
                */                
              }
              else{
                
                //lengthBeforeKey += words[i].length+1
               
              }

            }
          }
          
          

          
          text.addColor("white", 0);
          for(var j = 0; j < lengthCounter.length;j++){
            try{
              text.addColor(keyword[keyWordCounter[j]].color, lengthCounter[j]); 
              text.addColor("white", (lengthCounter[j]+keyword[keyWordCounter[j]].word.length));
            }
            catch(e){

            }

          }
          text.updateText()
          

        }         
        , springBody: function (degrade,tile){
          
          if(tile.springY != 0){
                  
            if(tile.springY > 0){
              tile.springY-= degrade
              tile.springY *= -1
            }
            else if(tile.springY < 0){
              tile.springY+= degrade
              tile.springY *= -1
            }
          }  
          
          if(tile.springX != 0){
                  
            if(tile.springX > 0){
              tile.springX-= degrade
              tile.springX *= -1
            }
            else if(tile.springX < 0){
              tile.springX+= degrade
              tile.springX *= -1
            }
          }          
        }
        , onDown: function () {
        
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
        this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       

        }
          
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
}());