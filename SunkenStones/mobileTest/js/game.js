(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        init: function (){
          //this.benchmark = new Stats();
          //this.viewport = document.getElementById("TCP");
          //this.viewport.appendChild(this.benchmark.domElement);
        },
        render: function () {
          //this.benchmark.end();
        },         
        create: function () {
		
		
		
            var x = 400
                , y = 150;
          
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            this.level = parseInt(localStorage.getItem("level"));
            
            var text = ""
            var message = ""
            
                  text = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
                  message = ""            
            

            if(localStorage.getItem("zone") === null){
              localStorage.setItem("zone",1)
              
            }  
            this.zone = parseInt(localStorage.getItem("zone"))

            this.bg = this.add.sprite(0, 0, 'bg_'+this.zone );
            this.bg.width = this.game.width
            this.bg.height = this.game.height

            this.bg.inputEnabled = true;
            //this.bg.events.onInputOver.add(this.hideDetails2, this);             
            //this.bg.events.onInputOver.add(this.unShowInfo, this);    

          
            /*
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
            

            this.bg3 = this.add.sprite(0, 0, 'gameBG');
            this.bg3.alpha = 1
            this.bg3.width = this.game.width
            this.bg3.height = this.game.height                
            */

            var distX = 0;
            var distY = 0;
            this.spacing = 10
            this.size = 110
            this.mapTile = [];
            for(var i = 0; i < 20; i++){
                for(var j = 0; j < 20; j++){
                  
                  this.mapTile[''+j+i] = this.add.sprite(-120+distX , -155+distY, 'mapTile');
                  this.mapTile[''+j+i].anchor.setTo(0.5, 0.5);     
                  this.mapTile[''+j+i].width = this.size
                  this.mapTile[''+j+i].height = this.size      
                  this.mapTile[''+j+i].alpha = 0.5
                  
                              
              
                  distX += this.mapTile[''+j+i].width
                  if(distX > this.size*25){
                    distX = 0;
                    distY += this.mapTile[''+j+i].height
                  }    
                }
              }         

            this.bgBoarder = this.add.sprite(0, 0, 'bgBorder');
            this.bgBoarder.alpha = 1
            this.bgBoarder.width = this.game.width
            this.bgBoarder.height = this.game.height   

            this.bg2 = this.add.sprite(0, 0, 'ui_back');
            this.bg2.width = this.game.width
            this.bg2.height = this.game.height                

            //this.selectInfoDetail = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            //this.selectInfoDetail.width = this.game.width
            //this.selectInfoDetail.height = this.game.height               

            this.capKey = parseInt(localStorage.getItem("captain"));
            if(quickStart){
              this.capKey = quickStartCaptain
            }                       
            

            //this.infoPrompt = this.add.sprite(this.game.width-279, -500, 'infoPrompt');
            //this.infoPrompt.anchor.setTo(0.5, 0.5);    

            //this.infoPrompt2 = this.add.sprite(279, this.game.height-300, 'infoPrompt1');
            //this.infoPrompt2.anchor.setTo(0.5, 0.5);                
          
            
            


           
            
            //#7E615F
            /*
            this.selectName = this.add.text(this.selectInfo.x+this.selectInfo.width-100,210, '10', {font: '50px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.selectName.anchor.setTo(0.5, 0.5);    
            this.selectName.stroke = '#232727';
            this.selectName.strokeThickness = 10;       
             */
            this.selectStats = this.add.text(0,0, '', {font: '28px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 200  });
            this.selectStats.anchor.setTo(0.5, 0.5); 
            this.selectStats.inputEnabled = true;
            //this.selectStats.events.onInputOver.add(this.updatetoolTip, this);       
            this.selectStats.stroke = '#232727';
            this.selectStats.strokeThickness = 5;         
                     
           


            //this.selectAbility = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-370, '10', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left'});
            //this.selectAbility.anchor.setTo(0.5, 0.5); 

            this.capBadge_outline = this.add.sprite(this.game.width/2+26, this.game.height-130, 'capBadge_outline');
            this.capBadge_outline.anchor.setTo(0.5, 0.5);    
            this.capBadge_outline.alpha = 0;  

            this.capBadge = this.add.sprite(this.game.width/2+25, this.game.height-130, 'capBadge_'+this.capKey);
            this.capBadge.anchor.setTo(0.5, 0.5);            
            
            //this.cap_health = this.add.sprite(80, this.game.height-450, 'ui_cap_health');
            this.cap_health = this.add.sprite(this.game.width/2-135, this.game.height-250, 'ui_cap_health');
            this.cap_health.anchor.setTo(0.5, 0.5);
            this.cap_health.width = 150
            this.cap_health.height = 150
            this.cap_healthText = this.add.text(this.cap_health.x,this.cap_health.y, '10', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.cap_healthText.anchor.setTo(0.5, 0.5);


            this.cap_healthText2 = []
            for(var i = 0; i < 100; i++){
              this.cap_healthText2[i] = this.add.text(this.cap_health.x,this.cap_health.y, '10', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
              this.cap_healthText2[i].anchor.setTo(0.5, 0.5);
              this.cap_healthText2[i].alpha = 0;
            }


            this.cap_health.origWidth = this.cap_health.width
            this.cap_health.origHeight = this.cap_health.height
            this.cap_healthValue = 15;     
            
            this.incomingDamage = this.add.text(this.cap_health.x,this.cap_health.y-100, '', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.incomingDamage.anchor.setTo(0.5, 0.5);
            this.incomingDamage.alpha = 1;     
            
               
            
            

            this.cap_ultCost = 1;

            //this.deploy_pool = this.add.sprite(500, this.game.height-450, 'ui_deploy_pool');
            this.deploy_pool = this.add.sprite(this.game.width/2+190, this.game.height-260, 'ui_deploy_pool');
            this.deploy_pool.anchor.setTo(0.5, 0.5);
            this.deploy_pool.width = 150
            this.deploy_pool.height = 150            
            this.deploy_poolText = this.add.text(this.deploy_pool.x,this.deploy_pool.y+5, '3/3', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.deploy_poolText.anchor.setTo(0.5, 0.5);   
            
            this.incomingCost = this.add.text(this.deploy_pool.x,this.deploy_pool.y-100, '', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.incomingCost.anchor.setTo(0.5, 0.5);
            this.incomingCost.alpha = 1;              
            
            //to be determined by selected ship(???)
            
            this.deploy_poolCurrent = 3;
            this.deploy_poolMax = this.deploy_poolCurrent 


          


            this.exit_Button_outline = this.add.sprite(75, 85, 'options_outline');            
            this.exit_Button_outline.anchor.setTo(0.5, 0.5);
            this.exit_Button_outline.width = 55
            this.exit_Button_outline.height = 55            
            this.exit_Button_outline.alpha = 0;

            this.exit_Button = this.add.sprite(75, 85, 'crewRemove');            
            this.exit_Button.inputEnabled = true;
            this.exit_Button.anchor.setTo(0.5, 0.5);
            this.exit_Button.width = 50
            this.exit_Button.height = 50
            this.exit_Button.events.onInputDown.add(this.exitVoyage, this);     
            //this.exit_Button.events.onInputOver.add(this.showOutline5, this);  
            //this.exit_Button.events.onInputOut.add(this.hideOutline5, this);

          
            
            this.tut_Button_outline = this.add.sprite(150, 85, 'options_outline');            
            this.tut_Button_outline.anchor.setTo(0.5, 0.5);
            this.tut_Button_outline.width = 55
            this.tut_Button_outline.height = 55            
            this.tut_Button_outline.alpha = 0;

            this.tut_Button = this.add.sprite(150, 85, 'tut_button');            
            this.tut_Button.inputEnabled = true;
            this.tut_Button.anchor.setTo(0.5, 0.5);
            this.tut_Button.width = 50
            this.tut_Button.height = 50
            this.tut_Button.events.onInputDown.add(this.startTutorial, this);     
            //this.tut_Button.events.onInputOver.add(this.showOutline6, this);  
            //this.tut_Button.events.onInputOut.add(this.hideOutline6, this);            

            this.tut_Button_outline.x = this.tut_Button.x 
             
            this.options_Button_outline = this.add.sprite(225, 85, 'options_outline');            
            this.options_Button_outline.anchor.setTo(0.5, 0.5);
            this.options_Button_outline.width = 55
            this.options_Button_outline.height = 55            
            this.options_Button_outline.alpha = 0;

            this.options_Button = this.add.sprite(225, 85, 'options');            
            this.options_Button.inputEnabled = true;
            this.options_Button.anchor.setTo(0.5, 0.5);
            this.options_Button.width = 50
            this.options_Button.height = 50
            this.options_Button.events.onInputDown.add(this.showOptions, this);     
            //this.options_Button.events.onInputOver.add(this.showOutline7, this);  
            //this.options_Button.events.onInputOut.add(this.hideOutline7, this);              

            this.clear_Button_outline = this.add.sprite(this.game.width/2+525, this.game.height-200, 'ui_clear_button_outline');            
            this.clear_Button_outline.anchor.setTo(0.5, 0.5);
            this.clear_Button_outline.width = 105
            this.clear_Button_outline.height = 105            
            this.clear_Button_outline.alpha = 0;

            this.clear_Button = this.add.sprite(this.game.width/2+525, this.game.height-150+35, 'ui_clear_button');            
            this.clear_Button.inputEnabled = true;
            this.clear_Button.anchor.setTo(0.5, 0.5);
            this.clear_Button.width = 100
            this.clear_Button.height = 100
            this.clear_Button.events.onInputDown.add(this.rollBack, this);     //this.clearBoard
            //this.clear_Button.events.onInputOver.add(this.showOutline1, this);  
            //this.clear_Button.events.onInputOut.add(this.hideOutline1, this);               


            this.endTurn_Button_outline = this.add.sprite(this.game.width-275, this.game.height-125,'ui_endTurn_Button_outline');               
            this.endTurn_Button_outline.alpha = 0;
            this.endTurn_Button_outline.anchor.setTo(0.5, 0.5);  
            


            this.endTurn_Button = this.add.sprite(this.game.width-275, this.game.height-100, 'ui_endTurn_Button'); 
            this.endTurn_Button.width = this.endTurn_Button.width*0.75
            this.endTurn_Button.height = this.endTurn_Button.height*0.75
            this.endTurn_Button.origWidth = this.endTurn_Button.width
            this.endTurn_Button.origHeight = this.endTurn_Button.height

            this.endTurn_Button.anchor.setTo(0.5, 0.5);            
            this.endTurn_Button.inputEnabled = true;
            this.endTurn_Button.events.onInputDown.add(this.endDeployPhase, this);   
            //this.endTurn_Button.events.onInputOver.add(this.showOutline2, this);  
            //this.endTurn_Button.events.onInputOut.add(this.hideOutline2, this);              

            this.ult_text = this.add.text(290,this.game.height-350, 'BOOST THE POWER OF ALL STEEL-TYPE CREW BY +1', {font: '28px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 350  });
            this.ult_text.anchor.setTo(0.5, 0.5);
            this.ult_text.angle = 0
            this.ult_text.stroke = '#232727';
            this.ult_text.strokeThickness = 5;  
            this.ult_text.inputEnabled = true;
            //this.ult_text.events.onInputOver.add(this.updatetoolTip, this);
            //this.ult_text.events.onInputOut.add(this.unShowInfo, this);    
            this.ult_text.alpha = 0;  
            
            

            this.ult_text.text = captain[this.capKey].ult_text
            this.cap_healthValue = captain[this.capKey].cap_healthValue
            this.deploy_poolCurrent = captain[this.capKey].deploy_poolCurrent
            this.deploy_poolMax = this.deploy_poolCurrent                 
            this.cap_ultCost = captain[this.capKey].cap_ultCost

            
            
            if(this.zone > 1){
              this.cap_healthValue = parseInt(localStorage.getItem("prevCapHealth"))
              
              this.deploy_poolMax = parseInt(localStorage.getItem("prevCapDeploy"))     
              this.deploy_poolCurrent = this.deploy_poolMax         


              
            }
            

            //this.ult_text.filters = [ this.filter ];



            /*
            this.ult_pool = this.add.sprite(this.game.width-500, this.game.height-350, 'ui_deploy_pool');
            this.ult_pool.anchor.setTo(0.5, 0.5);
            this.ult_pool.width = 100;
            this.ult_pool.height = 100;
            this.ult_poolText = this.add.text(this.ult_pool.x,this.ult_pool.y+15, '3/3', {font: '26px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.ult_poolText.anchor.setTo(0.5, 0.5);               
            */


            this.ult_Button_outline = this.add.sprite(-this.game.width, this.game.height-125, 'ui_ult_button_outline'); 
            this.ult_Button_outline.anchor.setTo(0.5, 0.5);  
            this.ult_Button_outline.alpha = 0; 
            
            this.ult_Button = this.add.sprite(this.capBadge.x,this.capBadge.y, 'ui_ult_buttonReady1'); 
            this.ult_Button.anchor.setTo(0.5, 0.5);           
            this.ult_Button.inputEnabled = true;

            //this.ult_Button.events.onInputDown.add(this.captainUlt, this);  
             
            this.ult_Button.events.onInputDown.add(this.mobileSelectCap, this);  
            //this.ult_Button.events.onInputOver.add(this.showOutline3, this);  
            //this.ult_Button.events.onInputOut.add(this.hideOutline3, this);  

            this.ult_Button.alpha = 1
            
            this.ult_Button_hover = this.add.sprite(-this.game.width,  this.game.height-125, 'ui_ult_button_outline_noHover'); 
            this.ult_Button_hover.anchor.setTo(0.5, 0.5);    
            this.ult_Button_hover.alpha = 0;
            //this.ult_Button.width =500/1.5
            //this.ult_Button.height = 200/1.5    

           

            this.ult_ButtonText = this.add.text(this.capBadge.x,this.capBadge.y, '3/3', {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.ult_ButtonText.anchor.setTo(0.5, 0.5);  
            this.ult_ButtonText.stroke = '#232727';
            this.ult_ButtonText.strokeThickness = 8;            
                     

            text = text.split("");
            var textKey = 0;

            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            
            this.tileHolder = [];
            this.undoCounter = 0;

            this.tile = [];
            this.tileSplash = []
            this.crewTile = [];
            this.enemyTile = [];

            var distX = 0;
            var distY = 0;
            this.tileLength = 0;
            //must always be dd
            this.boardWidth = boardWidth//11
            this.boardHeight = boardHeight//9 
            this.size = 100
            this.spacing = 10
            this.monCount = 10;
            this.monBaseCount = monBaseCount;
            if((parseInt(localStorage.getItem("intro")) > 13)  && this.zone == 1){
              this.monBaseCount += 3
            }
            else{
              
            }

            if(this.zone > 1){
              this.monBaseCount += 3*this.zone
            }
            this.monEmergecut = this.monBaseCount-Math.floor(this.monCount/2);
            this.deployCrewCount = 0;
            
            x = (this.game.width/2)-((Math.floor(this.boardWidth/2)*this.size)+(this.size/2)-(this.spacing*this.boardWidth))

          //this.crewOrder = []
          this.placeOrderKey = 0;
          this.placeOrderTracker = 0;

         
   
          
          


          var distX = 0;
          var distY = 0;
          this.targetTileID = null;
          
          for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){
                
                this.tile[''+j+i] = this.add.sprite(x+distX, y+distY+25, 'tile');
                this.tile[''+j+i].exhausted = false
                //this.tile[''+j+i].filters = [ this.filter ];
                this.tile[''+j+i].origX = this.tile[''+j+i].x;
                this.tile[''+j+i].origY = this.tile[''+j+i].y;
                this.tile[''+j+i].origX2 = this.tile[''+j+i].x;
                this.tile[''+j+i].origY2 = this.tile[''+j+i].y;  
                
                this.tile[''+j+i].statsHistory = ""


                
                this.tile[''+j+i].anchor.setTo(0.5, 0.5);
                
                
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


                this.tile[''+j+i].outline = this.add.sprite(this.tile[''+j+i].x, this.tile[''+j+i].y, 'tile');                
                this.tile[''+j+i].outline.anchor.setTo(0.5, 0.5);
                this.tile[''+j+i].outline.alpha = 0

                this.tile[''+j+i].healthText = this.add.text(this.tile[''+j+i].x-(this.size/2),this.tile[''+j+i].y+(this.size/2)-3, '', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].healthText.anchor.setTo(0.5, 0.5); 
                this.tile[''+j+i].healthText.stroke = '#232727';
                this.tile[''+j+i].healthText.strokeThickness = 5;                        

                this.tile[''+j+i].power = 0
                this.tile[''+j+i].powerText = this.add.text(this.tile[''+j+i].x-(this.size/2),this.tile[''+j+i].y+(this.size/2)-3, '', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].powerText.anchor.setTo(0.5, 0.5);     
                this.tile[''+j+i].powerText.stroke = '#232727';
                this.tile[''+j+i].powerText.strokeThickness = 5;   
                this.tile[''+j+i].powerText.origHeight = this.tile[''+j+i].powerText.height
                //this.tile[''+j+i].powerText.origWidth = this.tile[''+j+i].powerText.width+11      
                

                                

                this.tile[''+j+i].spinSpeed = 0;
                this.tile[''+j+i].springX = 0;
                this.tile[''+j+i].springY = 0;

                this.tile[''+j+i].submerged = false;

                this.tile[''+j+i].inputEnabled = true;
                this.tile[''+j+i].events.onInputUp.add(this.infoOrattackRange, this);         
                
                this.tile[''+j+i].events.onInputOver.add(this.infoOrattackRange, this);  
                this.tile[''+j+i].events.onInputOut.add(this.hideAttackRange, this);                                     


                this.tile[''+j+i].smoke = this.add.emitter(this.tile[''+j+i].x, this.tile[''+j+i].y, 200);
                this.tile[''+j+i].smoke.makeParticles('smoke');
                this.tile[''+j+i].smoke.width = 15;
                this.tile[''+j+i].smoke.minParticleSpeed.set(0, 0);
                this.tile[''+j+i].smoke.maxParticleSpeed.set(0, 0);
                this.tile[''+j+i].smoke.setAlpha(0.8, 0, 2500);
                this.tile[''+j+i].smoke.setScale(0.2, 1, 0.2, 1, 6000, Phaser.Easing.Quintic.Out);
                this.tile[''+j+i].smoke.gravity = -100;          
      
                this.tile[''+j+i].smoke.start(false, 1000, 100);
                this.tile[''+j+i].smoke.on = false;  
                
                this.tile[''+j+i].deathParticle = this.add.emitter(this.tile[''+j+i].x, this.tile[''+j+i].y, 1);   
                this.tile[''+j+i].deathParticle.gravity = 1500;          

                this.tile[''+j+i].bombExplode = this.add.emitter(this.tile[''+j+i].x, this.tile[''+j+i].y, 25);   
                this.tile[''+j+i].bombExplode.gravity = 0;                    

                this.tile[''+j+i].help = this.add.emitter(this.tile[''+j+i].x, this.tile[''+j+i].y-10, 1);   
                this.tile[''+j+i].help.makeParticles('help'); 
                this.tile[''+j+i].help.setScale(0.7, 0.7, 0.7, 0.7);        
                this.tile[''+j+i].help.setAlpha(1, 0, 1000);                    
                this.tile[''+j+i].help.minParticleSpeed.set(0, 0);
                this.tile[''+j+i].help.maxParticleSpeed.set(0, 0);
                this.tile[''+j+i].help.minRotation = 0
                this.tile[''+j+i].help.maxRotation = 0
                this.tile[''+j+i].help.start(false, 1000, 500); 
                this.tile[''+j+i].help.on = false;                
                this.tile[''+j+i].help.gravity = -100;  

                this.tile[''+j+i].tired = this.add.sprite(this.tile[''+j+i].x+15, this.tile[''+j+i].y-15, 'tired_frame');
                this.tile[''+j+i].tired.anchor.setTo(0.5, 0.5);
                this.tile[''+j+i].tired.animations.add('snore');           
                this.tile[''+j+i].tired.width=100
                this.tile[''+j+i].tired.height= 100   
                
                this.tile[''+j+i].newLabel = this.add.sprite(this.tile[''+j+i].x, this.tile[''+j+i].y, 'mon_new');
                this.tile[''+j+i].newLabel.anchor.setTo(0.5, 0.5);
                this.tile[''+j+i].newLabel.alpha = 0;
                
                

                //turn order tracker
                this.tile[''+j+i].turnTracker = this.add.sprite(this.tile[''+j+i].x-this.tile[''+j+i].width/2+15, this.tile[''+j+i].y-this.tile[''+j+i].height/2+15, 'turnTracker');
                this.tile[''+j+i].turnTracker.anchor.setTo(0.5, 0.5);  
                this.tile[''+j+i].turnTracker.alpha = 0;     
                this.tile[''+j+i].turnTracker.width= 30;
                this.tile[''+j+i].turnTracker.height = 30
      
                this.tile[''+j+i].turnTrackerText = this.add.text(this.tile[''+j+i].turnTracker.x,this.tile[''+j+i].turnTracker.y, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].turnTrackerText.anchor.setTo(0.5, 0.5);   
                this.tile[''+j+i].turnTrackerText.alpha = 0;    
                this.tile[''+j+i].turnTrackerText.stroke = '#232727';
                this.tile[''+j+i].turnTrackerText.strokeThickness = 3;     
                
                this.tile[''+j+i].buff = this.add.sprite(this.tile[''+j+i].x, this.tile[''+j+i].y, 'tile');
                this.tile[''+j+i].buff.anchor.setTo(0.5, 0.5);  
                this.tile[''+j+i].buff.width = this.tile[''+j+i].width
                this.tile[''+j+i].buff.height = this.tile[''+j+i].height
                //this.tile[''+j+i].filters = [ this.filter ];
                this.tile[''+j+i].buff.origX = this.tile[''+j+i].x;
                this.tile[''+j+i].buff.origY = this.tile[''+j+i].y;
                this.tile[''+j+i].buff.origX2 = this.tile[''+j+i].x;
                this.tile[''+j+i].buff.origY2 = this.tile[''+j+i].y;   
                this.tile[''+j+i].buff.alpha = 0;              
                

                //will die?
                this.tile[''+j+i].willDie = this.add.text(this.tile[''+j+i].x,this.tile[''+j+i].y, '', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});//this.add.sprite(this.tile[''+j+i].x, this.tile[''+j+i].y, 'willDie');
                this.tile[''+j+i].willDie.anchor.setTo(0.5, 0.5);  
                this.tile[''+j+i].willDie.alpha = 0;     
                this.tile[''+j+i].willDie.text = "";
              
                this.tile[''+j+i].incomingDamage = 0;
      
                

                //this.tile[''+j+i].deathParticle.on = false;                  
                
                this.tile[''+j+i].actionText = this.add.text(this.tile[''+j+i].x,this.tile[''+j+i].y, '', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].actionText.anchor.setTo(0.5, 0.5);   
                this.tile[''+j+i].actionText.alpha = 0;
                
                //splash animation

                this.tileSplash[''+j+i] = this.add.sprite(-1000, -1000, 'splash');
                this.tileSplash[''+j+i].anchor.setTo(0.5, 0.5);                
                this.tileSplash[''+j+i].alpha = 0;
                this.tileSplash[''+j+i].alphaTimer = 0;     
                this.tileSplash[''+j+i].width = this.tile[''+j+i].width 
                this.tileSplash[''+j+i].height = this.tile[''+j+i].height         

                distX += this.tile[''+j+i].width+this.spacing
                if(distX > this.size*this.boardWidth){
                  distX = 0;
                  distY += this.tile[''+j+i].height+this.spacing
                }   
                
                //this.tile[''+j+i].filters = [ this.filter ];
                this.tile[''+j+i].sparkle = this.add.sprite(this.tile[''+j+i].x, this.tile[''+j+i].y, 'tileSparkle');
                this.tile[''+j+i].sparkle.anchor.setTo(0.5, 0.5);
                this.tile[''+j+i].sparkle.alpha = 0;
                this.tile[''+j+i].sparkle.shineKey = 1;

                this.tile[''+j+i].sparkle2 = this.add.sprite(this.tile[''+j+i].x, this.tile[''+j+i].y, 'tileSparkle2');
                this.tile[''+j+i].sparkle2.anchor.setTo(0.5, 0.5);
                this.tile[''+j+i].sparkle2.alpha = 0;              

              }

          }
          distX = 0;
          distY = 0;
          this.tileHolder[this.undoCounter] = []          
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){
              
              
              this.tileHolder[this.undoCounter][''+j+i] = new Object()
                
              
            }

          }          


          this.monsterPool = []

          for(var i = 1 ; i < monster.length; i++){
            this.monsterPool[i] = new Object();
            this.monsterPool[i].count = 0;
          }

         

          
          //crew 

          

          var distX = -130;
          var size = 150
          var space = 10
          this.crew = []
          this.crewHolder = []
          this.crewRemove = []
          this.crewSelect = []
          this.crewDeployed = []
          this.freeCounter = []

          for(var i = 5 ; i < 7; i++){
          //free tile counter
          this.freeCounter[i] = this.add.sprite(x+distX, this.game.height-size+50, 'freeCounter');
          this.freeCounter[i].anchor.setTo(0.5, 0.5);
          this.freeCounter[i].width = size;
          this.freeCounter[i].height = size; 
          
          this.freeCounter[i].counter = this.add.text(this.freeCounter[i].x,this.freeCounter[i].y-10, 'x10', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.freeCounter[i].counter.anchor.setTo(0.5, 0.5);       
          this.freeCounter[i].counter2 = this.add.text(this.freeCounter[i].x,this.freeCounter[i].y-10, 'x10', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.freeCounter[i].counter2.anchor.setTo(0.5, 0.5); 
          this.freeCounter[i].counter2.alpha = 0;          
          

          }
            if(parseInt(localStorage.getItem("intro")) == 1 || onboardingDebug){
              this.freeCounter[5].num  = 0
              this.freeCounter[6].num  = 0
            } 
            else{
              this.freeCounter[5].num  = startingBombCount
              this.freeCounter[6].num  = startingBombCount+2
            } 
    
          this.crewCode = ""
          if (localStorage.getItem("crewCode") === null) {
            localStorage.setItem("crewCode","")
            switch(this.capKey){
              case 1:
                this.crewCode ="99-90-91-92-80-81"
                break;
              case 2:
                this.crewCode ="100-93-94-95-80-81"
                break;
              case 3:
                this.crewCode ="101-96-97-98-80-81"
                break;
              case 4:
                this.crewCode ="99-90-91-92-80-81"
                break;
              case 5:
                this.crewCode ="100-93-94-95-80-81"
                break;
              case 6:
                this.crewCode ="101-96-97-98-80-81"
                break;                
            }
            if(quickStart){
              //this.crewCode ="50-51-52-97-80-81"
              //this.crewCode ="63-64-65-92-80-81"
              this.crewCode = quickStartCrew
            }
            if (parseInt(localStorage.getItem("intro")) == 1 ) {
              //this.crewCode ="1-90-91-92-5"
            }               
          }
          else{
            this.crewCode = localStorage.getItem("crewCode")
          }                
          
       

          var crewMates = this.crewCode.split("-");

          


          this.selectedCrew = 0;




          this.curseNum = 0;

          this.chestMeterBack = this.add.sprite(this.game.width/2+350, this.game.height/2-150, 'chestMeterBack');
          this.chestMeterBack.anchor.setTo(0.5, 0.5);  

          this.chestMeterBar = this.add.sprite(30, 20, 'curseMeter');
          this.chestMeterBar.anchor.setTo(0.5, 1);  
          this.chestMeterBar.width = 50
          this.chestMeterBar.height = 100



          this.chestMeter = this.add.sprite(this.game.width/2+350, this.game.height/2-150, 'chestMeter');
          this.chestMeter.anchor.setTo(0.5, 0.5);  

          this.chestMeterBar.x = this.chestMeter.x
          this.chestMeterBar.y = this.chestMeter.y+this.chestMeter.height/2-30
          this.chestMeterBar.width = 40
          this.chestMeterBar.height = 0;
          this.chestMeterBar.target = 0;
          

          this.chestUI = this.add.sprite(this.chestMeter.x, this.chestMeter.y-this.chestMeter.height/2+50, 'gatheredCurse');
          this.chestUI.anchor.setTo(0.5, 0.5); 
          this.chestUI.width = 100
          this.chestUI.height = 100  
          this.chestUI.origY = this.chestUI.y                       

          this.curseTrackerText = this.add.text(this.chestUI.x+100,this.chestUI.y, '1/1', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.curseTrackerText.anchor.setTo(0.5, 0.5);   
          this.curseTrackerText.stroke = '#232727';
          this.curseTrackerText.strokeThickness = 5;                      
    
          this.curseExplainText = this.add.text(this.chestUI.x,this.chestUI.y, 'CURSE', {font: '50px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.curseExplainText.anchor.setTo(0.5, 0.5);  
          this.curseExplainText.alpha = 0;
          this.curseExplainText.inputEnabled = true;
          //this.curseExplainText.events.onInputOver.add(this.updatetoolTip, this);      
          //this.curseExplainText.events.onInputOut.add(this.unShowInfo, this);          



          this.chatTimer = 0;
          //this.game.input.mousePointer.rightButton.onDown.add(this.getInfo, this)

          this.turnMarker = this.add.sprite(this.game.width/2, this.game.height+this.game.height/2, 'turnMarker');
          this.turnMarker.anchor.setTo(0.5, 0.5);   
          this.turnMarker.width = this.game.width
          this.turnMarker.height = this.game.height          

          this.turnMarkerText = this.add.text(this.turnMarker.x-100,this.turnMarker.y, 'VOYAGE START', {font: '120px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.turnMarkerText.anchor.setTo(0.5, 0.5);   

          this.turnCounter = turnCounterBase;
          
          this.turnCounterStart = this.turnCounter
          this.phaseCounter = 0;

          this.turnWait = 0
          this.ActionCounter = 0;;
          this.actionTimer = 0;
          this.tickerSpeed = tickerSpeedbase;

          //this.scoreCountUI = this.add.sprite(this.game.width/2+25,80, 'coinCount');
          //this.scoreCountUI.anchor.setTo(0.5, 0.5);           

          this.turnCountText = this.add.text(this.game.width/2+25,50, '', {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'left'});
          this.turnCountText.anchor.setTo(0.5, 0.5);  
          this.turnCountText.stroke = '#232727';
          this.turnCountText.strokeThickness = 8;               
          this.turnCountNum = 0
          
 

          //this.scoreCount = this.add.text(this.scoreCountUI.x,this.scoreCountUI.y, '0', {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'left'});
          //this.scoreCount.anchor.setTo(0.5, 0.5);  
          //this.scoreCountNum = 0       
          



          this.monCountValue = 30//parseInt(localStorage.getItem("targetMonCount")) 
          //this.monCountValue = 3;
          this.monKillCount = 0; 
          

      
          
          this.endbuttonTimer = 0;
          this.clearbuttonTimer = 0;
          this.ultbuttonTimer = 0;

          this.capEnergy = 0;

          this.saltParticleCount = 100
  
          
          this.curseParticleCount = 100
          this.curseParticle = [];
          for(var i = 0; i < this.curseParticleCount; i++){
            this.curseParticle[i] = this.add.sprite(0, 0, 'curseTracker');
            this.curseParticle[i].anchor.setTo(0.5, 0.5);  
            this.curseParticle[i].width = 50
            this.curseParticle[i].height = 50
            this.curseParticle[i].alpha = 0;
          }           
          
          this.attackParticleCount = 100
          this.attackParticle = [];
          for(var i = 0; i < this.attackParticleCount; i++){
            this.attackParticle[i] = this.add.sprite(100, 100, 'attackVFX');
            this.attackParticle[i].anchor.setTo(0.5, 0.5);  
            this.attackParticle[i].tarX = 0;
            this.attackParticle[i].tarY = 0;
            //this.attackParticle[i].width = 50
            //this.attackParticle[i].height = 50
            this.attackParticle[i].alpha = 0;
          }             
          
          this.TLetterBox = this.add.sprite(0, 0, "TLetterBox" );
          this.TLetterBox.width = this.game.width
          this.TLetterBox.height = this.game.height          
          this.TLetterBox.alpha = 0;          

          this.overlay = this.add.sprite(-this.game.width, 0, 'bgOverlay1');
          //this.overlay.width = this.game.width
          //this.overlay.height = this.game.height      
          this.overlay.alpha = 0;    
          this.overlay.inputEnabled = true;
          //this.overlay.events.onInputOver.add(this.nothing, this);  

          this.reRoll_Button_outline = this.add.sprite(this.game.width/2+525, this.game.height-200, 'ui_clear_button_outline');            
          this.reRoll_Button_outline.anchor.setTo(0.5, 0.5);
          this.reRoll_Button_outline.width = 105
          this.reRoll_Button_outline.height = 105            
          this.reRoll_Button_outline.alpha = 0;          

          this.reRoll_Button = this.add.sprite(this.game.width/2+525, this.game.height+200, 'ui_reroll_button');            
          this.reRoll_Button.inputEnabled = true;
          this.reRoll_Button.anchor.setTo(0.5, 0.5);
          this.reRoll_Button.width = 100
          this.reRoll_Button.height = 100
          this.reRoll_Button.events.onInputDown.add(this.reroll, this);   
          //this.reRoll_Button.events.onInputOver.add(this.showOutline4, this);  
          //this.reRoll_Button.events.onInputOut.add(this.hideOutline4, this);   
          
          this.removeCrew_Button = this.add.sprite(this.game.width/2-615, this.game.height+200, 'button');            
          this.removeCrew_Button.anchor.setTo(0.5, 0.5);
          this.removeCrew_Button.origWidth = this.removeCrew_Button.width
          this.removeCrew_Button.origHeight =this.removeCrew_Button.height
          this.removeCrew_Button.width = this.removeCrew_Button.width*0.50;
          this.removeCrew_Button.height = this.removeCrew_Button.height*0.50;
          this.removeCrew_Button.inputEnabled = true;
          this.removeCrew_Button.events.onInputDown.add(this.walkPlank, this);   
          
          this.removeCrew_Button_Text = this.add.text( this.removeCrew_Button.x,this.removeCrew_Button.y-10, 'Change', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.removeCrew_Button_Text.anchor.setTo(0.5, 0.5); 
          this.removeCrew_Button_Text.stroke = '#232727';
          this.removeCrew_Button_Text.strokeThickness = 3;            
          this.removeCrew_Button_Text.alpha = 0;

                   
          this.removeCrewSkip_Button = this.add.sprite(this.game.width-275, this.game.height+200, 'skip_button');            
          this.removeCrewSkip_Button.anchor.setTo(0.5, 0.5);
          this.removeCrewSkip_Button.origWidth = this.removeCrew_Button.width
          this.removeCrewSkip_Button.origHeight =this.removeCrew_Button.height
          this.removeCrewSkip_Button.width = this.removeCrewSkip_Button.width*0.75;
          this.removeCrewSkip_Button.height = this.removeCrewSkip_Button.height*0.75;
          this.removeCrewSkip_Button.inputEnabled = true;
          this.removeCrewSkip_Button.events.onInputDown.add(this.skipPlank, this);   
          //this.removeCrewSkip_Button.events.onInputOver.add(this.showOutline2, this);  
          //this.removeCrewSkip_Button.events.onInputOut.add(this.hideOutline2, this);                         
          
          this.reRoll_Text = this.add.text( this.reRoll_Button.x+25,this.reRoll_Button.y+20, '1', {font: '45px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.reRoll_Text.anchor.setTo(0.5, 0.5); 
          this.reRoll_Text.stroke = '#232727';
          this.reRoll_Text.strokeThickness = 10; 
           

          this.reRoll_Counter = rerollBase;

          this.gatheredChest = this.add.sprite(300, 35, 'gatheredChests');                       
          
          this.gatheredChest_Text = this.add.text( this.gatheredChest.x+25,this.gatheredChest.y+80, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.gatheredChest_Text.anchor.setTo(0.5, 0.5); 
          this.gatheredChest_Text.stroke = '#232727';
          this.gatheredChest_Text.strokeThickness = 8;   
          
          this.gatheredChest_Ticker = this.add.text( this.gatheredChest_Text.x,this.gatheredChest_Text.y, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.gatheredChest_Ticker.anchor.setTo(0.5, 0.5); 
          this.gatheredChest_Ticker.stroke = '#232727';
          this.gatheredChest_Ticker.strokeThickness = 8;      
          this.gatheredChest_Ticker.alpha = 0;     
          
          this.gatheredSouls = this.add.sprite(400, 35, 'gatheredSouls');                       
          
          this.gatheredSouls_Text = this.add.text( this.gatheredSouls.x+25,this.gatheredSouls.y+80, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.gatheredSouls_Text.anchor.setTo(0.5, 0.5); 
          this.gatheredSouls_Text.stroke = '#232727';
          this.gatheredSouls_Text.strokeThickness = 8;         
          
          this.gatheredSouls_Ticker = this.add.text( this.gatheredSouls_Text.x,-1000, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.gatheredSouls_Ticker.anchor.setTo(0.5, 0.5); 
          this.gatheredSouls_Ticker.stroke = '#232727';
          this.gatheredSouls_Ticker.strokeThickness = 8;      
          this.gatheredSouls_Ticker.alpha = 0;               

          for(var i = 1; i < 7; i++){
            this.crewSelect[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crewSelect');
            this.crewSelect[i].anchor.setTo(0.5, 0.5);
            this.crewSelect[i].width = size;
            this.crewSelect[i].height = size;   
            this.crewSelect[i].alpha = 0;   

            if(localStorage.getItem("crew"+crewMates[i-1]+"loyalty") === null){
              localStorage.setItem("crew"+crewMates[i-1]+"loyalty",0)
              
            }   
            var loyaltyCounter = parseInt(localStorage.getItem("crew"+crewMates[i-1]+"loyalty"))                    

            
            if(loyaltyCounter >= 3){
            //  this.crew[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crew-'+crewMates[i-1]+"-loyal");
            }
            else{
            //  this.crew[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crew-'+crewMates[i-1]);
            }
            this.crewHolder[i] = new Object();
            this.crew[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crew_blank');
            this.crew[i].anchor.setTo(0.5, 0.5);
            this.crew[i].width = size;
            this.crew[i].height = size;    
            this.crew[i].origWidth = size
            this.crew[i].origHeight = size
            this.crew[i].id = parseInt(crewMates[i-1])
            this.crew[i].isBlank = true;
            this.crew[i].tintTimer =0;

    
            
            this.crew[i].wiggle = false;

            this.crew[i].loyaty = 0
            if(crewMates[i-1] != 0){
              this.crew[i].loadTexture("crew-"+this.crew[i].id)
              this.crew[i].isBlank = false;
            }



            if(i >=5){
              this.crew[i].isConsumable = true;

              
            } 
            else{
              this.crew[i].isConsumable = false;
            } 

            if(i == 5){
              this.crew[i].isBlank = false;
              this.crew[i].id = parseInt(crewMates[i-1])
              this.crew[i].loadTexture("crew-"+this.crew[i].id)
            }

            this.crew[i].origX = this.crew[i].x
            this.crew[i].origY = this.crew[i].y
            this.crew[i].isDeployed = false;
            this.crew[i].isSelected = false;
            this.crew[i].arrayKey = i;
            this.crew[i].killCount = 0



            this.crew[i].isTalking = false
            this.crew[i].speechTimer = 0;

            this.crew[i].deployText = this.add.text( this.crew[i].x-(size/2)+33,this.crew[i].y+(size/2)-3, '', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crew[i].deployText.anchor.setTo(0.5, 0.5); 
            this.crew[i].deployText.stroke = '#232727';
            this.crew[i].deployText.strokeThickness = 5;              

            this.crew[i].powerUpParticle = this.add.emitter(this.crew[i].x+(this.size/2)-8, this.crew[i].y+(size/2)-3, 5);           
            //this.crew[i].powerUpParticle.gravity = 1000;               

            this.crew[i].powerText = this.add.text(this.crew[i].x+(size/2)-33,this.crew[i].y+(size/2)-3, '', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crew[i].powerText.anchor.setTo(0.5, 0.5);       
            this.crew[i].powerText.stroke = '#232727';
            this.crew[i].powerText.strokeThickness = 5;                          
              

            this.crew[i].curseVal = 0;
            this.crew[i].curseUI = this.add.sprite(this.crew[i].x-(this.size/2)-10,this.crew[i].y-(size/2)-10, 'curseTracker');
            this.crew[i].curseUI.anchor.setTo(0.5, 0.5);
            this.crew[i].curseUI.width = 50;
            this.crew[i].curseUI.height = 50;
            this.crew[i].curseValText = this.add.text(this.crew[i].x-(this.size/2)+25,this.crew[i].y-(size/2)-10, 'x', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crew[i].curseValText.anchor.setTo(0.5, 0.5);       
            this.crew[i].curseValText.stroke = '#232727';
            this.crew[i].curseValText.strokeThickness = 5;              
            
            this.crew[i].curseIncr = this.add.sprite(this.crew[i].x,this.crew[i].y, 'curseIncr');
            this.crew[i].curseIncr.anchor.setTo(0.5, 0.5);        
            this.crew[i].curseIncr.alpha = 0; 
            
          



            this.crewDeployed[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crewDeployed');
            this.crewDeployed[i].anchor.setTo(0.5, 0.5);
            this.crewDeployed[i].width = size;
            this.crewDeployed[i].height = size;   
            this.crewDeployed[i].alpha = 0;   
            this.crewDeployed[i].id = i    
            this.crewDeployed[i].origX = this.crewDeployed[i].x
            this.crewDeployed[i].origY = this.crewDeployed[i].y      
            
            this.crew[i].deployNum = this.add.text(this.crew[i].x,this.crew[i].y, '', {font: '32px Kaph-Regular',fill: '#fff', align: 'center'});
            this.crew[i].deployNum.anchor.setTo(0.5, 0.5);        
            this.crew[i].deployNum.alpha = 0;               

            this.crewSelect[i].origX = this.crewSelect[i].x
            this.crewSelect[i].origY = this.crewSelect[i].y  

            this.crew[i].cursed = this.add.sprite(this.crew[i].x, this.crew[i].y, 'curse_frame');
            this.crew[i].cursed.anchor.setTo(0.5, 0.5);
            this.crew[i].cursed.animations.add('poof');

            this.crew[i].uncursed = this.add.sprite(this.crew[i].x, this.crew[i].y, 'uncurse_frame');
            this.crew[i].uncursed.anchor.setTo(0.5, 0.5);
            this.crew[i].uncursed.animations.add('unpoof');            
                            
      


         
            
            //crew traits & stats
            this.crew[i].deployCost = 1;
            this.crew[i].power = 1;
            this.crew[i].attackPattern = 0
            this.crew[i].holderPower = []

            this.crew[i].holderPower[0] = 0;
            this.crew[i].holderPower[24] = 0
            // 0 - boost strike, 10 - captain power boost
            this.crew[i].holderPower[2]  = 0
            this.crew[i].holderPower[10]  = 0

            if(localStorage.getItem("crew"+crewMates[i-1]+"loyalty") === null){
              localStorage.setItem("crew"+crewMates[i-1]+"loyalty",0)
              
            }   
            var loyaltyCounter = parseInt(localStorage.getItem("crew"+crewMates[i-1]+"loyalty"))                    
            
            if(this.crew[i].id != 0){
              this.crew[i].deployCost = crew[this.crew[i].id].loyaltyDeployCost[loyaltyCounter];
              this.crew[i].origDeployCost = this.crew[i].deployCost
              this.crew[i].deployDiscount = 0
              this.crew[i].name = crew[this.crew[i].id].name
              this.crew[i].power = crew[this.crew[i].id].loyaltyPower[loyaltyCounter];
              this.crew[i].origPower = this.crew[i].power
              this.crew[i].attackPattern = crew[this.crew[i].id].attackPattern
              this.crew[i].type = crew[this.crew[i].id].type // 0- steel, 1 - salt, 2 -smoke
              this.crew[i].ability  = crew[this.crew[i].id].ability
            }
            else{

              if(localStorage.getItem("crew"+crew[i].id+"loyalty") === null){
                localStorage.setItem("crew"+crew[i].id+"loyalty",0)
                
              }                 
              var loyaltyCounter = parseInt(localStorage.getItem("crew"+crew[i].id+"loyalty"))                    
              this.crew[i].deployCost = 0//crew[i].loyaltyDeployCost[loyaltyCounter];
              this.crew[i].origDeployCost = this.crew[i].deployCost
              this.crew[i].name = ""//crew[i].name
              this.crew[i].power = 0//crew[i].loyaltyPower[loyaltyCounter]
              this.crew[i].origPower = this.crew[i].power
              this.crew[i].attackPattern = 1//crew[i].attackPattern
              this.crew[i].type = 0//crew[i].type // 0- steel, 1 - salt, 2 -smoke
              this.crew[i].ability  = ""//crew[i].ability              
            }
            

            
            /*
            var loyaltyCounter = parseInt(localStorage.getItem("crew"+crew[i].id+"loyalty"))                    
            this.crew[i].deployCost = crew[i].loyaltyDeployCost[loyaltyCounter];
            this.crew[i].name = crew[i].name
            this.crew[i].power = crew[i].loyaltyPower[loyaltyCounter]
            this.crew[i].origPower = this.crew[i].power
            this.crew[i].attackPattern = crew[i].attackPattern
            this.crew[i].type = crew[i].type // 0- steel, 1 - salt, 2 -smoke
            this.crew[i].ability  = crew[i].ability
              */            
            
                

            this.crew[i].deployText.text = this.crew[i].deployCost
            this.crew[i].powerText.text = this.crew[i].power

            this.crew[i].holdText = this.crew[i].texture
            
            this.crew[i].inputEnabled = true;
            this.crew[i].events.onInputDown.add(this.crewSelected, this);              
            //this.crew[i].events.onInputOver.add(this.delayShowInfo, this);

            this.crew[i].kickParticle = this.add.emitter(this.crew[i].x, this.crew[i].y, 1);   
            this.crew[i].kickParticle.gravity = 1500;             

            this.crewRemove[i] = this.add.sprite(this.crew[i].x+this.crew[i].width-100, this.crew[i].y-this.crew[i].height+100, 'crewRemove');
            this.crewRemove[i].anchor.setTo(0.5, 0.5);  
            this.crewRemove[i].alpha = 0;     
            this.crewRemove[i].id = i;
            this.crewRemove[i].inputEnabled = true;
            this.crewRemove[i].events.onInputDown.add(this.removeCrew, this);        
            
            this.crew[i].splash = this.add.sprite( this.crew[i].x, this.crew[i].y, 'splash');
            this.crew[i].splash.anchor.setTo(0.5, 0.5);     
            this.crew[i].splash.origY = this.crew[i].y           
            this.crew[i].splash.alpha = 0;
            this.crew[i].splash.alphaTimer = 0;     
            this.crew[i].splash.width =  this.crew[i].width+50 
            this.crew[i].splash.height = this.crew[i].height+50

            this.crewHolder[i] = this.crew[i]

            if(i == 2){
              distX += 400
            }
            else{
              distX += (size+space)
            }
            
            //move consumables to the left
            if(i == 4){
              distX = (this.game.width/2*-1)+350
            }            
          }       

          for(var k = 5; k< 7;k++){
            
            this.freeCounter[k].x = this.crew[k].x+10
            this.freeCounter[k].y = this.crew[k].y-50
            this.freeCounter[k].counter.x = this.freeCounter[k].x-5
            this.freeCounter[k].counter.y = this.freeCounter[k].y-20
            this.freeCounter[k].counter2.x = this.freeCounter[k].x-5
            this.freeCounter[k].counter2.y = this.freeCounter[k].y-75
            //this.freeCounterText2.y = this.freeCounter.y-25          
            this.freeCounter[k].counter.angle = -15
            this.freeCounter[k].counter2.angle = -15     
                
          }



          //this.cursorSelect.inputEnabled = true;
          //this.cursorSelect.input.enableDrag();          

          this.overlayText = this.add.text(this.game.width/2+15,100, 'CHOOSE', {font: '64px Kaph-Regular',fill: '#fff', align: 'center'});
          this.overlayText.anchor.setTo(0.5, 0.5);     
          this.overlayText.alpha = 0;      
          this.overlayText.stroke = '#232727';
          this.overlayText.strokeThickness = 5;            

          this.treasureOptions = []
          
          var distX = -450
          var spacing = 650;
          
          
          for(var i =0; i < 3; i++){

            this.treasureOptions[i] = this.add.sprite(x+distX, this.game.height*10 , 'treasure_rarity_1');
            this.treasureOptions[i].anchor.setTo(0.5, 0.5);
            this.treasureOptions[i].value = 1;

            this.treasureOptions[i].rarity = 1
            this.treasureOptions[i].treasureItemVal = 1
            this.treasureOptions[i].curseVal = 1
            this.treasureOptions[i].boonVal = 1
            
            this.treasureOptions[i].alpha = 0;
            this.treasureOptions[i].origX = this.treasureOptions[i].x
            this.treasureOptions[i].origY = this.treasureOptions[i].y
            this.treasureOptions[i].targetY = 150+this.game.height/3
            this.treasureOptions[i].origtargetY = 150+this.game.height/3

            //this.treasureOptions[i].inputEnabled = true;
            
 
            
            

            this.treasureOptions[i].treasureItem = this.add.sprite(x+distX, this.game.height*10 , 'treasure_rarity_1');
            this.treasureOptions[i].treasureItem.anchor.setTo(0.5, 0.5);
            this.treasureOptions[i].treasureItem.alpha = 0;
            this.treasureOptions[i].treasureItem.origX = this.treasureOptions[i].x
            this.treasureOptions[i].treasureItem.origY = this.treasureOptions[i].y
            this.treasureOptions[i].treasureItem.targetY = 150+this.game.height/3
            this.treasureOptions[i].treasureItem.origtargetY = 150+this.game.height/3

            this.treasureOptions[i].boon = this.add.text(x+distX,this.game.height*10, '', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            //this.treasureOptions[i].boon = this.add.sprite(x+distX, this.game.height*10 , 'treasure_rarity_1');
            this.treasureOptions[i].boon.anchor.setTo(0.5, 0.5);
            this.treasureOptions[i].boon.alpha = 0;
            this.treasureOptions[i].boon.origX = this.treasureOptions[i].x
            this.treasureOptions[i].boon.origY = this.treasureOptions[i].y
            this.treasureOptions[i].boon.targetY = 150+this.game.height/3
            this.treasureOptions[i].boon.origtargetY = 150+this.game.height/3


            this.treasureOptions[i].curse = this.add.sprite(x+distX, this.game.height*10 , 'treasure_rarity_1');     
            this.treasureOptions[i].curse.anchor.setTo(0.5, 0.5);
            this.treasureOptions[i].curse.alpha = 0;
            this.treasureOptions[i].curse.origX = this.treasureOptions[i].x
            this.treasureOptions[i].curse.origY = this.treasureOptions[i].y
            this.treasureOptions[i].curse.targetY = 150+this.game.height/3
            this.treasureOptions[i].curse.origtargetY = 150+this.game.height/3      
            
            this.treasureOptions[i].curseInc = this.add.sprite(x+distX, this.game.height*10 , 'stackIncrease');     
            this.treasureOptions[i].curseInc.anchor.setTo(0.5, 0.5);
            this.treasureOptions[i].curseInc.alpha = 0;
            this.treasureOptions[i].curseInc.id = i;
            this.treasureOptions[i].curseInc.origX = this.treasureOptions[i].x
            this.treasureOptions[i].curseInc.origY = this.treasureOptions[i].y
            this.treasureOptions[i].curseInc.targetY = 150+this.game.height/3
            this.treasureOptions[i].curseInc.origtargetY = 150+this.game.height/3   
            this.treasureOptions[i].curseInc.inputEnabled = true;
            this.treasureOptions[i].curseInc.events.onInputDown.add(this.mobileSelect, this); 
            //this.treasureOptions[i].curseInc.events.onInputDown.add(this.selectTreasure, this); 
            //this.treasureOptions[i].curseInc.events.onInputOver.add(this.highLightAffect, this);
            //this.treasureOptions[i].curseInc.events.onInputOut.add(this.unhighLightAffect, this);             

            distX += spacing
          }

          this.treasureSparkle = this.add.sprite(x+distX, this.game.height*10 , 'treasureSparkle');
          this.treasureSparkle.anchor.setTo(0.5, 0.5);
          this.treasureSparkle.alpha = 0;
          this.treasureSparkle.origWidth = this.treasureSparkle.width
          this.treasureSparkle.origHeight = this.treasureSparkle.height

          this.exit_DetailButton_outline = this.add.sprite(75, 75, 'ui_clear_button_outline');            
          this.exit_DetailButton_outline.anchor.setTo(0.5, 0.5);
          this.exit_DetailButton_outline.width = 55
          this.exit_DetailButton_outline.height = 55            
          this.exit_DetailButton_outline.alpha = 0;

          this.exit_DetailButton = this.add.sprite(-1000, 75, 'crewRemove');            
          this.exit_DetailButton.inputEnabled = true;
          this.exit_DetailButton.anchor.setTo(0.5, 0.5);
          this.exit_DetailButton.width = 50
          this.exit_DetailButton.height = 50
          this.exit_DetailButton.alpha = 0;
          this.exit_DetailButton.events.onInputDown.add(this.hideDetails, this);     
          //this.exit_DetailButton.events.onInputOver.add(this.showOutline5, this);  
          //this.exit_DetailButton.events.onInputOut.add(this.hideOutline5, this);           

          //selected crew
          distX = -450
          spacing = 650;
          this.crewOptions = []
          this.crewOptionKey = 1;
          for(var i =0; i < 3; i++){

            this.crewOptions[i] = this.add.sprite(x+distX, this.game.height/2-100, 'crew-1');
            this.crewOptions[i].anchor.setTo(0.5, 0.5);
            this.crewOptions[i].alpha = 0;

            
            
                
            var ranRarity = Math.floor(Math.random() * 10)+1
            /*
            //common
            if(ranRarity>=1 && ranRarity<4){
              var ran = Math.floor(Math.random() * crewPool[0].length)
              this.crewOptions[i].value = crewPool[0][ran]
              this.crewOptions[i].rarity = 1;
            }*/
            //uncommon
            if(ranRarity >= 1 && ranRarity <8){
              var ran = Math.floor(Math.random() * crewPool[1].length)
              this.crewOptions[i].value = crewPool[1][ran]
              this.crewOptions[i].rarity = 2;
            }
            //rare
            else if(ranRarity >= 8){
              var ran = Math.floor(Math.random() * crewPool[2].length)
              this.crewOptions[i].value = crewPool[2][ran]
              this.crewOptions[i].rarity = 3;
            }    

            this.crewOptions[i].deployText = this.add.text( this.crewOptions[i].x-(size/2)+33,this.crewOptions[i].y+(size/2)-25, '', {font: '42px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOptions[i].deployText.anchor.setTo(0.5, 0.5); 
            this.crewOptions[i].deployText.stroke = '#232727';
            this.crewOptions[i].deployText.strokeThickness = 5;    
            this.crewOptions[i].deployText.alpha = 0;
            
            this.crewOptions[i].powerText = this.add.text(this.crewOptions[i].x+(this.size/2)-8,this.crewOptions[i].y+(size/2)-25, '', {font: '42px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOptions[i].powerText.anchor.setTo(0.5, 0.5);       
            this.crewOptions[i].powerText.stroke = '#232727';
            this.crewOptions[i].powerText.strokeThickness = 5;   
            this.crewOptions[i].powerText.alpha = 0;   


            this.crewOptions[i].statInc = this.add.sprite(x+distX, this.game.height/2-100, 'crewIncrease');
            this.crewOptions[i].statInc.anchor.setTo(0.5, 0.5);
            this.crewOptions[i].statInc.alpha = 0;                
            
            
            
            this.crewOptions[i].ability = this.add.text(this.crewOptions[i].x,this.crewOptions[i].y+150, ' ',{font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 400  });
            this.crewOptions[i].ability.anchor.setTo(0.5, 0.5);       
            this.crewOptions[i].ability.stroke = '#232727';
            this.crewOptions[i].ability.strokeThickness = 5;   
            this.crewOptions[i].ability.alpha = 0;   
            
            this.crewOptions[i].name = this.add.text(this.crewOptions[i].x,this.crewOptions[i].y-200, ' ',{font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 500  });
            this.crewOptions[i].name.anchor.setTo(0.5, 0.5);       
            this.crewOptions[i].name.stroke = '#232727';
            this.crewOptions[i].name.strokeThickness = 5;   
            this.crewOptions[i].name.alpha = 0;               
            
            
            
                      


            distX += spacing
          }          
        
          for(var i =1; i < this.crew.length; i++){
            this.crew[i].speechBubble = this.add.sprite(this.crew[i].x, this.crew[i].y-75, 'speechBubble');
            this.crew[i].speechBubble.anchor.setTo(0.5, 0.5); 
            this.crew[i].speechBubble.alpha = 0
            this.crew[i].speechBubble.origY = this.crew[i].speechBubble.y
            this.crew[i].speechBubbleText = this.add.text(this.crew[i].speechBubble.x-5,this.crew[i].speechBubble.y-80, 'Yo Ho', {font: '22px LondrinaSolid-Black',fill: '#232727', align: 'center',  wordWrap: true, wordWrapWidth: 250});
            this.crew[i].speechBubbleText.anchor.setTo(0.5, 0.5); 
            this.crew[i].speechBubbleText.alpha = 0;            
          }
 

          this.transTimer = -1

          this.chestCount = 0;

          this.saltCounter = 0;
          this.saltCounterBase = baseSaltReq
          this.saltCounterMax = this.saltCounterBase
          this.bounty = 0;

          this.surfaceCount = 0;
          this.surfaceCountTrigger = 0;
          /*
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
          */
          this.bgSound = this.add.audio('pugnacityPortroyal');
          this.bgSound.loop = true;
          this.bgSound.play();
          this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1       
          
          
          this.deployReady = false;
          this.noPickUp = true;

                  
          



          this.timer = 0
          

          this.tileHighlight = this.add.sprite(-100, -100, 'tileHighlight');
          this.tileHighlight.anchor.setTo(0.5, 0.5);
          this.tileHighlight.width = this.size;
          this.tileHighlight.height = this.size;       
          
          this.transWave = this.add.sprite(0, this.game.height, 'transitionWave');
          this.transWave.width = this.game.width
          //this.transWave.height = this.game.height         
          this.transWaveKey  = 0;  


          this.prevScene = localStorage.getItem("prevScene")
          localStorage.setItem("prevScene","game")

          if(this.prevScene.includes("menu")){
            this.changeWaveDown();

          }
          else{
            this.boardView = this.add.sprite(0,0, 'desk23');
            this.boardView.width = this.game.width 
            this.boardView.height = this.game.height      

            this.add.tween(this.boardView).to( { alpha: 0 }, 500, Phaser.Easing.Default, true);             
          }

  

          this.curseSnd = []
          this.curseSnd[1] = this.add.audio('curseBubble1');
          this.curseSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
          this.curseSnd[2] = this.add.audio('curseBubble2');
          this.curseSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.curseSnd[3] = this.add.audio('curseBubble3');
          this.curseSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1   
          this.curseSnd[4] = this.add.audio('curseBubble4');
          this.curseSnd[4].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1             
          
          this.wavSnd = []
          this.wavSnd[1] = this.add.audio('wavSnd-1');
          this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
          this.wavSnd[2] = this.add.audio('wavSnd-2');
          this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[3] = this.add.audio('wavSnd-3');
          this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
          
          
          this.evilLaughSnd = this.add.audio('evilLaugh');
          this.evilLaughSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.1  
          this.shipBellSnd = this.add.audio('shipBell');
          this.shipBellSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.1  
          this.spinSnd = this.add.audio('spin');
          this.spinSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.1            
                             


          this.stoneSnd = []
          for(var i = 1; i <6;i++){
            this.stoneSnd[i] = this.add.audio('tileSnd-'+i);
            this.stoneSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
          }
          this.splashSnd = []
          for(var i = 1; i <5;i++){
            this.splashSnd[i] = this.add.audio('splashSnd-'+i);
            this.splashSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
          }       
          this.attackSnd = []
          for(var i = 1; i <3;i++){
            this.attackSnd[i] = this.add.audio('attackSnd-'+i);
            this.attackSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
          }    
          this.monAttackSnd = []
          for(var i = 1; i <3;i++){
            this.monAttackSnd[i] = this.add.audio('monAttackSnd-'+i);
            this.monAttackSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
          }               
          this.hurtSnd = []
          for(var i = 1; i <=10;i++){
            if(this.capKey == 4 || this.capKey == 5 || this.capKey == 6){
              this.hurtSnd[i] = this.add.audio('capHurt_male'+i);
            }
            else{
              this.hurtSnd[i] = this.add.audio('capHurt_fem'+i);
            }
            
            this.hurtSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
          }               
          this.explodeSnd = this.add.audio('explodeSnd');
          this.explodeSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
          
          this.decideSnd = this.add.audio('decide');
          this.decideSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.3         
          
          
          this.capVOSnd = []
          this.capVOSnd[1] = this.add.audio('capVO-1-ult');
          this.capVOSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3
          this.capVOSnd[2] = this.add.audio('capVO-2-ult');
          this.capVOSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3
          this.capVOSnd[3] = this.add.audio('capVO-3-ult');
          this.capVOSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3  
          
          this.capVOSnd[4] = this.add.audio('capVO-4-ult');
          this.capVOSnd[4].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3  
          this.capVOSnd[5] = this.add.audio('capVO-5-ult');
          this.capVOSnd[5].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3  
          this.capVOSnd[6] = this.add.audio('capVO-6-ult');
          this.capVOSnd[6].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3             


          this.highlightPing = this.add.audio('highlightPing');
          this.fightReady = this.add.audio('fightReady');
          this.curseFill = this.add.audio('curseFill');
          this.curseCrewAnim = this.add.audio('curseCrewAnim');
          
          var ran = Math.floor(Math.random() * 3)+1;
          this.wavSnd[ran].play()   
          
          this.transTar = 'win'
          /*
          if(parseInt(localStorage.getItem("intro")) == 1 || onboardingDebug ){
            this.tutorialPause = true;
            this.chatTimer = 1;
          }
          else{
            this.tutorialPause = false;
            this.chatTimer = 0;
          }
          */
          this.squawk = this.add.audio('parrotSquawk');
          this.squawk.volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)*2     

          this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax


          this.chatTimerCount = -1

          this.captainHurt = false

          //this.escapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
          //this.escapeKey.onDown.add(this.showOptions, this);     
          
          
          this.hurtTimer = 0;

          this.hitStop = 0;

          this.game.camera.focusOnXY(this.game.width/2, this.game.height/2);
          this.camerZoom = 1


          this.capUltOverlay = this.add.sprite(0, this.game.height+this.game.height/2, 'capUltOverlay-'+this.capKey);
          this.capUltOverlay.width = this.game.width
          this.capUltOverlay.height = this.game.height            
          
          this.focusTopDiag = this.add.sprite(0, -this.game.height/2-200, 'focusTopDiag');
          this.focusTopDiag.width = this.game.width
          this.focusTopDiag.height = this.game.height
          this.focusTopDiag.origY = this.focusTopDiag.y

          this.focusBotDiag = this.add.sprite(0, this.game.height/2+200, 'focusBotDiag');
          this.focusBotDiag.width = this.game.width
          this.focusBotDiag.height = this.game.height    
          this.focusBotDiag.origY = this.focusBotDiag.y
          
          
  

          this.capUltHero = this.add.sprite(0, this.game.height+this.game.height/2, 'capUltHero-'+this.capKey);
          this.capUltHero.width = this.game.width
          this.capUltHero.height = this.game.height   
          this.capUltHero.origY = this.capUltHero.y

          this.capUltText = this.add.sprite(0, -this.game.height/2, 'capUltText-'+this.capKey);
          this.capUltText.width = this.game.width
          this.capUltText.height = this.game.height     
          this.capUltText.origY = this.capUltText.y                          
          
          this.ultKey = 0;

          this.karma = 0;
          if(quickLevel){
            this.key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            // this.nextLevel
            this.key5.onDown.add(this.nextLevel, this);     
          }
     

          this.popupTail = this.add.sprite(0, 0, 'popUpTail_mon');
          this.popupTail.anchor.setTo(0.5, 0.5);      
          this.popupTail.alpha = 0;   
          this.tooltip = this.add.sprite(0, 0, 'tooltip');
          this.tooltip2 = this.add.sprite(0, 0, 'tooltip');

          this.tips = new Phasetips(this.game, {
            targetObject:  this.selectStats,
            context: "",
            fontSize: 16,
            strokeWeight: 0,
            roundedCornersRadius: 0,            
            position: "top",
            positionOffset: 0,
            padding: 100,
            customBackground: this.tooltip,     
            animation: "fade"
          }); 

          this.statsHistory = new Phasetips(this.game, {
            targetObject:  this.selectStats,
            context: "",
            fontSize: 16,
            strokeWeight: 0,
            roundedCornersRadius: 0,            
            position: "top",
            positionOffset: 0,
            padding: 75,
            customBackground: this.tooltip2,      
            animation: "fade"
          });           


                                     
     

          this.getTileDetails = false;
          this.removeFromCrew = false;
          this.chatTimer = 0;
          this.addToCrew = false;
          this.ditch = true;
          this.sosCount = baseSOSCOunt
          this.sosLock = true;

          //choose first mate
          /*
          this.chatTimer = 1;
          this.addToCrew = true;
          this.ditch = false;   
          this.crewOptionKey = 1   
          this.crewOptions[0].value = captain[this.capKey].firstMates[0] 
          this.crewOptions[0].rarity = 3
          */
          //this.crewOptions[1].value = captain[this.capKey].firstMates[1]    

          //choice triggers
          
          this.chestOpened = 0;
          this.soulsSaved = 0;

          this.chestTriggers = 0;
          this.soulTriggers = 0;


          this.rockSpawnTrigger = false;
          this.firstTurnTrigger = true;


          //var ranStartMonster = Math.floor(Math.random() * 3)
          switch(this.zone){
            default:
              this.monsterPool[1].count =1  
              this.monsterPool[4].count =1
              this.monsterPool[7].count =1

              this.monsterPool[2].count = 1   
              this.monsterPool[5].count = 1
              this.monsterPool[8].count = 1               
              /*
              if(this.turnCountNum >= newMonLimit){
                var monChoice = [2,5,8]
                var ran = Math.floor(Math.random() * 3)
                this.monsterPool[monChoice[ran]].count +=this.zone
              }  
              else{
                var monChoice = [1,4,7]
                var ran = Math.floor(Math.random() * 3)
                this.monsterPool[monChoice[ran]].count +=this.zone
              }  
              */
              break;
            case 1:
              this.monsterPool[1].count+=1  
              //this.monsterPool[2].count+=1      
              //this.monsterPool[2].count+=1 
              break;
            case 2:
              this.monsterPool[4].count+=1//this.zone
              break;
            case 3:
              this.monsterPool[7].count+=1//this.zone
              break;                            
          }



  
          /*
          this.peek = false;

          this.key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
          this.key5.onDown.add(this.peek, this);   
          */

          this.scoreCount = 0;
          this.scoreCountHolder = 100;
          this.scoreCountTimer = 0;

          
          this.curseWheel = this.add.sprite(this.game.width/2, this.game.height/2, 'curseWheel');
          this.curseWheel.width = 500
          this.curseWheel.height = 500
          this.curseWheel.anchor.setTo(0.5, 0.5);
          this.curseWheel.angleSpeed = 1000//Math.floor(Math.random() * 5000)+1000;
          this.curseWheel.spinning = 0;
          this.curseWheel.y = -this.game.height;

          this.curseWheelArrow = this.add.sprite(this.curseWheel.x, this.curseWheel.y, 'curseWheelArrow-1');
          this.curseWheelArrow.width = 500
          this.curseWheelArrow.height = 500
          this.curseWheelArrow.anchor.setTo(0.5, 0.5);          
          //this.curseWheel.inputEnabled = true;
          //this.curseWheel.events.onInputDown.add(this.spinWheel, this);          


              

          

          this.focusHere = this.add.sprite(0, 0, 'focusHere');
          this.focusHere.anchor.setTo(0.5, 0.5);
          this.focusHere.width = 300;
          this.focusHere.height = 300;
          this.focusHere.alpha = 0;
          this.focusHereTimer = 0;

          this.sosSelected = false;
          this.sosSelectedVal = 0;

          this.game.input.mouse.capture = true;

          //DELAY accidentally hitting fight
          this.pauseFight = 0;

          this.bossDead = false;
          this.bossID = "blank"
          this.luckyID = "blank"
          
          if(this.zone > 1){
            this.loadStats()

            if(!quickLevel){
              Swal.fire({
                title: 'Affliction Threshold Lowered',
                imageUrl: 'assets/gatheredCurse-2.webp',
                text: "Curse Meter Now Fills Up Faster",
                backdrop: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                heightAuto: false                        
          
              })  
            }
          
                        
          }
        
          this.showTut = parseInt(localStorage.getItem("tutorialStart"));

          this.curseTimer = 0;
          this.curseKey = 1;


          this.notyf = new Notyf({
            position: {
              x: 'center',
              y: 'top',
            },
            ripple: false
          });          
          
          this.firstSpawn = true;
          this.beginTint = false;
          this.extraAttackFromCaptain = false; 


          //lock fps at 60
          //this.game.time.advancedTiming = true
          //this.game.forceSingleUpdate = false;
          //this.game.time.desiredFps = 60;    
          
          this.bossEmegrgePoint = bossEmegrgePoint
          this.skipPenalty = 0;

          this.input.onDown.add(this.hideDetails, this);
          this.removeTint();

          this.bombCount = 0;
          this.healthCount = 0;

          this.balanceVolume()



          //this.transWave.y = this.game.height
          //this.add.tween(this.transWave).from( { y:-this.game.height+50 }, 1000, Phaser.Easing.Default, true);

          //this.infoPrompt.y = 150
          //this.add.tween(this.infoPrompt).from( { y:-100 }, 1000, Phaser.Easing.Circular.InOut, true);

          this.turnMarker.y = this.game.height+this.game.height/2
          this.add.tween(this.turnMarker).from( { y: this.game.height/2 }, 1500, Phaser.Easing.Quartic.InOut, true,3000);         
          
          this.turnMarkerText.x = this.turnMarker.x+100
          this.add.tween(this.turnMarkerText).from( { x: this.turnMarker.x-100}, 5000, Phaser.Easing.Default, true);           
          
          this.game.time.advancedTiming = true;
          this.incomingTotal = 0;


          this.deployedBombs = 0;
          this.deployedHarpoons = 0;
          
          
          //this.changeWaveDown();

          this.isNurseOnBoard = false;

          this.deltaTime = (this.game.time.elapsedMS * this.game.time.fps)/ 1000;
          this.firstChestSpawn = true;
          this.nextZone = false;




          //key action trackers that persist across voyages
          if(localStorage.getItem("actionTracker_tentacleKills") === null){
            localStorage.setItem("actionTracker_tentacleKills",0)
            this.tentacleKills = parseInt(localStorage.getItem("actionTracker_tentacleKills"))
          }
          else{
            this.tentacleKills = parseInt(localStorage.getItem("actionTracker_tentacleKills"))
          }
          
          if(localStorage.getItem("actionTracker_ditchTotal") === null){
            localStorage.setItem("actionTracker_ditchTotal",0)
          }
       


          localStorage.setItem("unlockedCrewList","")
       
         
            this.holdPress = false
            this.holdTimer = 0
            this.game.input.onUp.add(function() {
                //console.log("and it's up")
                this.holdPress = false
                this.holdTimer = 0
                this.hideDetails();

                  for(var i = 1; i < this.crew.length; i++){        
                    this.crewSelect[i].alpha = 0;     
                  }  

                if(this.targetTileID !== null){
                  this.placeCrew(this.tile[this.targetTileID], this.activePointer)
                  
                }
                else{
                  
                  if(this.selectedCrew > 0 && this.selectedCrew <= 100 && !this.noPickUp){
                    this.crew[this.selectedCrew].isSelected = false;
                    this.selectedCrew = 0
                    this.noPickUp = true;  
                  }
                 
                }
                this.targetTileID = null
                
            }, this);

            this.game.input.onDown.add(function() {
                //console.log("and it's down")
                this.holdPress = true;
                

                
            }, this);         
            
          //selected crew
          this.cursorSelect = this.add.sprite(0, 0, 'crewSelect');
          this.cursorSelect.anchor.setTo(0.5, 0.5);
          this.cursorSelect.alpha = 0            

        }
        , update: function () {
                
                if(this.holdPress){
                  var limit = 10
                  if(this.holdTimer == limit){

                    
                    this.holdTimer = limit*2
                  }
                  else if(this.holdTimer <limit){
                    this.holdTimer++
                  }

                }       
                
                if(this.cursorSelect.alpha > 0 && this.cursorSelect.y < this.game.height-200){
                  this.hideDetails()
                  
                }
          if(this.curseWheel.spinning == 1){
            if(!this.spinSnd.isPlaying){
              this.spinSnd.play()
            }
            this.curseWheel.angle += this.curseWheel.angleSpeed*0.02
          }
          

              if(this.game.input.activePointer.isDown){
                this.cursorSelect.x = this.game.input.activePointer.x
                this.cursorSelect.y = this.game.input.activePointer.y
              }          

          this.balanceVolume();
          ////console.log(this.game.time.elapsedMS/1000)
          //this.benchmark.begin();
          //this.game.debug.text('FPS: ' + this.game.time.fps || 'FPS: --', 40, 40, "#00ff00");
          

          
          this.chestMeterBar.height += ( this.chestMeterBar.target - this.chestMeterBar.height) * 0.1;

          // variable curse threshold
          var curseBreakPoint = curseLimit-(this.zone*200)-(this.skipPenalty*100)//Math.floor((curseChunk/curseLimit)*(curseLimit-(this.zone*200)))
          ////console.log("bp "+curseBreakPoint)
          if(curseBreakPoint < 100){
            curseBreakPoint = 100;
          }
          this.dynamicCurseChunk = ((1/(curseBreakPoint/curseChunk))*500)//curseChunk //Math.floor((curseChunk/500)*curseBreakPoint) //Math.floor((curseChunk/curseLimit)*curseBreakPoint)

          
          ////console.log("curseTarHeight "+this.chestMeterBar.target )
          if(this.chestMeterBar.target > curseBreakPoint){
            //this.chestMeterBar.target = curseBreakPoint
          }   
          
          
          var curseUnit = Math.round(this.chestMeterBar.height/this.dynamicCurseChunk)
          

          ////console.log("curseunit "+curseUnit )
          if((this.chestMeterBar.height/this.dynamicCurseChunk) < 1){
            curseUnit = 0
          }

          ////console.log("curselimit "+(curseBreakPoint/curseChunk))
          if(curseUnit > (curseBreakPoint/curseChunk)){
            curseUnit = (curseBreakPoint/curseChunk)
          }


          ////console.log(curseUnit+" "+(this.chestMeterBar.height/this.dynamicCurseChunk))
          this.curseTrackerText.text = curseUnit+"/"+(curseBreakPoint/curseChunk)

          //this.chestMeterBar.target = curseUnit*this.dynamicCurseChunk

          if(this.chestMeterBar.height >= 490){
            this.chestMeterBar.height = 490
            this.curseTimer++
            if(this.curseTimer%25 == 0){
              if(this.curseKey == 1){
                this.curseKey = 2
              }
              else{
                this.curseKey = 1
              }
              
            }
            this.chestUI.loadTexture("gatheredCurse-"+this.curseKey)
            this.curseWheelArrow.loadTexture("curseWheelArrow-"+this.curseKey)
            if(this.curseTimer > 100){
              this.curseTimer = 0
            }
          }
          else{
            this.chestUI.loadTexture("gatheredCurse")
          }

          ///this.chestMeterBar.height += 0.5
          

          //this.chestUI.width += (100 - this.chestUI.width) * 0.1; 
          //this.chestUI.height += (100 - this.chestUI.height) * 0.1; 
          
          if(this.getTileDetails){
            //this.exit_DetailButton.x = 75;
          }
          else{
            this.exit_DetailButton.x = -1000;
          }
          if(this.pauseFight > 0){
            this.pauseFight--
            if(this.pauseFight < 0){
              this.pauseFight = 0;
            }
          }
          this.monCountValue = this.monKillCount+25
          
          
          //focus fades
          if(this.focusHereTimer > 0 ){
            this.focusHereTimer--;
            this.focusHere.alpha = 1
            if(this.focusHereTimer % 15 == 0 && this.focusHere.y == this.focusHere.origY){
              //this.focusHere.alpha = 0
              this.focusHere.y = this.focusHere.origY-50
            }
            else if(this.focusHereTimer % 15 == 0 && this.focusHere.y != this.focusHere.origY){
              //this.focusHere.alpha = 1
              this.focusHere.y = this.focusHere.origY
            }
            
            if(this.focusHereTimer <= 0){
              this.focusHere.alpha = 0;
              for(var k = 1; k < this.crew.length; k++){
                  
                if(this.crew[k].id == 92 && this.crew[1].isDeployed && parseInt(localStorage.getItem("intro")) == 3){
                  localStorage.setItem("intro",4);
                  this.crewSpeak(k,"Now place me next to the Distress Flag!", speechTimerBase)
                  for(var m = 0; m < this.boardHeight; m++){
                    for(var l = 0; l < this.boardWidth; l++){  
                      if(this.tile[''+l+m].monID == 102){
                        this.setFocus(300,this.tile[''+(l-1)+m].x,this.tile[''+l+m].y)   
                      }
                    }
                  }                   
                  //this.crew[k].speechTimer = 250
                }  
              }              
            }
          }
          else{
            this.focusHere.alpha = 0;
            //this.focusHere.origY = this.focusHere.y
          }
          
          if(this.chestOpened == 0 && this.chestTriggers == 0){
            //this.gatheredChest.alpha = 0;
            //this.gatheredChest_Text.alpha = 0;
            //this.gatheredChest_Ticker.alpha = 0;
          }
          else{
            this.gatheredChest.alpha = 1;
            this.gatheredChest_Text.alpha = 1;
          }
          var holder = 0;
          if(this.chestOpened>this.chestTriggers){
            holder = this.chestOpened
          }
          else{
            holder = this.chestTriggers
          }
          if(this.gatheredChest_Ticker.alpha != 0){
            this.gatheredChest_Text.text = holder-1
          }
          else{
            this.gatheredChest_Text.text = holder
          }
          

          if(this.soulsSaved == 0 && this.soulTriggers == 0){
            //this.gatheredSouls.alpha = 0;
            //this.gatheredSouls_Text.alpha = 0;
            //this.gatheredSouls_Ticker.alpha = 0;
          }          
          else{
            this.gatheredSouls.alpha = 1;
            this.gatheredSouls_Text.alpha = 1;
          }
          var holder = 0;
          if(this.soulsSaved>this.soulTriggers){
            holder = this.soulsSaved
          }
          else{
            holder = this.soulTriggers
          }  
          if(this.gatheredSouls_Ticker.alpha != 0){
            this.gatheredSouls_Text.text = holder-1
            
          }
          else{
            this.gatheredSouls_Text.text = holder

          }       
          if(this.gatheredChest_Ticker.alpha > 0){
            this.gatheredSouls_Ticker.y = -1000
            this.gatheredSouls_Text.text = this.soulTriggers +1
          }
          else if(this.gatheredSouls_Ticker.y == -1000) {
            this.gatheredSouls_Ticker.y = this.gatheredSouls_Text.y
            this.gatheredSouls_Text.text = this.soulTriggers          
          }         
          




        
                    
          if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
            //this.transWave.y += transSpeed
    
            if(this.transWave.y >= this.game.height&& this.transWaveKey == 0){
              //this.startTutorialFirst();
              
            }
          }
    
          if(this.transWaveKey == 1){
            //this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
            if(this.transWave.y <= (-this.game.height+50)){
              this.game.state.start(this.transTar);
            }
          } 

          this.checkKeywords(this.selectStats)
          this.checkKeywords(this.ult_text)
          this.checkKeywords(this.curseExplainText)
          this.checkKeywords(this.curseExplainText)
          for(var i =0; i < 3; i++){
            
            this.checkKeywords(this.treasureOptions[i].boon)
          }
          this.timer++
          if(this.timer > 5000){
            this.timer = 0
          }

          for(var m = 0; m < this.boardHeight; m++){
            for(var l = 0; l < this.boardWidth; l++){  



              
              
              
            }
          }            
          
          if(this.removeFromCrew || this.addToCrew){
            this.chatTimer = 1;
          }
          //this.smoke.x = this.game.input.mousePointer.x
          //this.smoke.y = this.game.input.mousePointer.y;
          
          if(this.hitStop <= 0){
            
            if(this.chatTimer == 0 && !this.nextZone){
              this.endTurn_Button.alpha = 1;
              
              //chest ticker
              if(this.gatheredChest_Ticker.y == -1000){
                this.gatheredChest_Ticker.y = this.gatheredChest_Text.y
                this.gatheredSouls_Ticker.y = this.gatheredSouls_Text.y
              }
              if(this.gatheredChest_Ticker.alpha > 0 && this.chestOpened > 0){
                this.gatheredChest_Ticker.alpha -= 0.02
                this.gatheredChest_Ticker.y -= 1

                if(this.gatheredChest_Ticker.alpha <= 0){
                  this.gatheredChest_Ticker.alpha = 0;
                  this.gatheredChest_Ticker.y = this.gatheredChest_Text.y
                  if(this.chestOpened > 0){
                    this.chestOpened--;
                    if(this.chestOpened <= 0){
                      this.chestOpened = 0
                      this.gatheredChest_Ticker.alpha = 0;
                    }
                    else{
                      this.gatheredChest_Ticker.alpha = 1;
                    }
                    this.openChestNow();
                    
                    this.gatheredChest_Ticker.text = -1//this.chestOpened;
                  }                  
                }

                if(this.soulsSaved <= 0 && this.chestOpened<= 0){

                  //this.showMarker(1000,3000)
                  
                  this.turnMarkerText.text = "YOUR TURN"           
                  this.deploy_poolCurrent = this.deploy_poolMax;   
                  this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax   
                  this.turnWait = turnWaitBase;      
                            

                
                  //this.phaseCounter--
                }                  
              }
              else if(this.gatheredSouls_Ticker.alpha > 0 && this.soulsSaved > 0 && this.chestOpened<= 0){
                this.gatheredSouls_Ticker.alpha -= 0.02
                this.gatheredSouls_Ticker.y -= 1
                
                if(this.gatheredSouls_Ticker.alpha <= 0){
                  this.gatheredSouls_Ticker.alpha = 0;
                  this.gatheredSouls_Ticker.y = this.gatheredSouls_Text.y
                  if(this.soulsSaved > 0){
                    this.soulsSaved--;
                    if(this.soulsSaved <= 0){
                      this.soulsSaved = 0;
                      this.gatheredSouls_Ticker.alpha = 0;

                
                    }
                    else{
                      this.gatheredSouls_Ticker.alpha = 1;
                    }
                    this.saveSoulNow();
                    
                    this.gatheredSouls_Ticker.text = -1//this.soulsSaved;
                  }  
                  

                }
                if(this.soulsSaved <= 0 && this.chestOpened<= 0){
                  //this.showMarker(1000,3000)
                  this.turnMarkerText.text = "YOUR TURN"           
                  this.deploy_poolCurrent = this.deploy_poolMax;    
                  this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax  
                  this.turnWait = turnWaitBase;  
                  
                  

                
                  
             
                  //this.phaseCounter--
                }                
              }


            


              ////console.log(this.focusBotDiag.y+" "+this.game.height)
              
              
              var speed = 50
              if(this.ultKey > 0){
                
               
                this.ult_text.alpha = 0

                this.ultKey--
              
                
              }
              else{

              }

              if(this.endTurn_Button.width < this.endTurn_Button.origWidth){
                this.endTurn_Button.width++
              }
              if(this.endTurn_Button.height < this.endTurn_Button.origHeight){
                this.endTurn_Button.height++
              }   
              
              if(this.removeCrewSkip_Button.width < this.endTurn_Button.origWidth){
                this.removeCrewSkip_Button.width++
              }
              if(this.removeCrewSkip_Button.height < this.endTurn_Button.origHeight){
                this.removeCrewSkip_Button.height++
              }                 

              this.endTurn_Button_outline.width = this.endTurn_Button.width
              this.endTurn_Button_outline.height = this.endTurn_Button.height         
              
                    

              if(this.hurtTimer > 0){
                this.hurtTimer--
                this.cap_health.loadTexture("ui_cap_health_hurt")
              }
              else{
                this.cap_health.loadTexture("ui_cap_health")
              }

              if(this.chatTimerCount > 0){
                this.chatTimerCount--
                if(this.chatTimerCount == 0){
                  this.chatTimer = 1;
                  this.chatTimerCount = -1
                }
                
              }

              this.overlayText.alpha = 0; 

              //UI 
              

              
                    //consumable text floats up
                    for(k=5;k<7;k++){
                      if(this.freeCounter[k].counter2.alpha > 0){
                        this.freeCounter[k].counter2.alpha -= 0.01
                        this.freeCounter[k].counter2.y--;
  
                        if(this.freeCounter[k].counter2.alpha < 0){
                          this.freeCounter[k].counter2.alpha = 0;
                          this.freeCounter[k].counter2.y = this.freeCounter[k].counter.y-25  
                        }
                      }   
                    }
             
              //bench UI
              for(var i =1; i < this.crew.length; i++){

                //this.crew[i].splash.alpha = 0
                //this.crew[i].splash.alphaTimer = 0

                //hide remove
                this.crewRemove[i].alpha = 0; 

                this.crew[i].deployDiscount = 0;

                //ongoing crew ability
                //powered up by smoking units
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

                //power equal to harpoon count
                if(this.crew[i].id == 63){
                  var holder = 0
                  this.crew[i].origPower = 0;                   
                  this.crew[i].origPower = this.freeCounter[5].num

                }                
                //reduced by ammo count
                if(this.crew[i].id == 48){
                   
                  this.crew[i].origPower = 5 - this.freeCounter[5].num
                  if(this.crew[i].origPower < 0){
                    this.crew[i].origPower = 0;
                  }

                }              

                //reduce cost by # smoking units
                if(this.crew[i].id == 28){
                  var holder = 0

                  for(var k = 0; k< this.boardHeight; k++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      if(this.tile[""+j+k].smoke.on){
                        this.crew[i].deployDiscount += 1
                      }                        
                    }
                  }                   

                  //this.crew[i].deployCost = this.crew[i].origDeployCost - this.crew[i].deployDiscount - holder;

                }                
                //bonus if at least one savvy is unspent
                this.crew[i].holderPower[3] = 0
                if(this.crew[i].id == 90 || this.crew[i].id == 91 || this.crew[i].id == 92 || this.crew[i].id == 99){
                  if(this.deploy_poolCurrent > 0){
                    this.crew[i].holderPower[3] = 1;
                  }
                }   
                
                //greaeter bonus if at least one savvy is unspent
                this.crew[i].holderPower[34] = 0
                if(this.crew[i].id == 34){
                  if(this.deploy_poolCurrent > 0){
                    this.crew[i].holderPower[34] = 2;
                  }
                }     

                //bonus if at least one enemy is submerged
                this.crew[i].holderPower[2] = 0
                if(this.crew[i].id == 96 || this.crew[i].id == 97 || this.crew[i].id == 98 || this.crew[i].id == 101){
                  for(var k = 0; k< this.boardHeight; k++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      if(this.tile[""+j+k].submerged){
                        this.crew[i].holderPower[2] = 1
                      }                        
                    }
                  }       
                }    
                //greater bonus if at least one enemy is submerged
                this.crew[i].holderPower[50] = 0
                if(this.crew[i].id == 50){
                  for(var k = 0; k< this.boardHeight; k++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      if(this.tile[""+j+k].submerged){
                        this.crew[i].holderPower[50] = 2
                      }                        
                    }
                  }       
                }   
                //bonus if harpoon deployed
                this.crew[i].holderPower[51] = 0
                if(this.crew[i].id == 51){
                  for(var k = 0; k< this.boardHeight; k++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      if(this.tile[""+j+k].isCrewHere && this.tile[""+j+k].crewID == 81){
                        this.crew[i].holderPower[51] = 3
                      }                        
                    }
                  }       
                }       
     

                //bonus if proud
                this.crew[i].holderPower[55] = 0
                if(this.crew[i].id == 55 && this.cap_healthValue >= 20){
                  this.crew[i].holderPower[55] = 2  
                }    

                //0 cost if proud
                if(this.crew[i].id == 56){

                  if(this.cap_healthValue >= 20){
                    this.crew[i].deployDiscount  = this.crew[i].origDeployCost
                  } 


                }    
                //bigger bonus if proud
                this.crew[i].holderPower[61] = 0
                if(this.crew[i].id == 61 && this.cap_healthValue >= 20){
                  this.crew[i].holderPower[61] = 5 
                } 
                //crew bonus if proud
                if(this.crew[i].id == 64){
                  //verify unit on board
                  var onBoard = false;
                  for(var k = 0; k< this.boardHeight; k++){
                    for(var j = 0; j < this.boardWidth; j++){     
                      if(this.tile[""+j+k].crewID == 64){
                        onBoard = true;
                      }

                    }
                  } 
                  for(var x = 1; x < this.crew.length; x++){
                    this.crew[x].holderPower[64] = 0;
                    if(onBoard && this.cap_healthValue >= 20){
                      this.crew[x].holderPower[64] = 2
                    }
                  }
                }
                //unspent savvy
                if(this.crew[i].id == 12){
                  var holder = this.deploy_poolCurrent;
                  this.crew[i].origPower = holder;

                }    
                
                //captain's health
                if(this.crew[i].id == 15){
                  var holder = this.cap_healthValue
                  this.crew[i].origPower = holder;

                }       
                   
                //boost by number of crew before
                this.crew[i].holderPower[22] = 0
                if(this.crew[i].id == 22){
                  var countCrew = 0
                  var tarCrew = -1;
                  for(var m = 0; m < this.boardHeight; m++){
                    for(var l = 0; l < this.boardWidth; l++){   
                      if(this.tile[''+l+m].isCrewHere){
                        countCrew++
                      }

                      if(this.tile[''+l+m].isCrewHere && this.tile[''+l+m].crewID == 22){
                        tarCrew = this.tile[''+l+m].placeOrder
                      }                      

                    }
                  }           
                  if(tarCrew > -1){
                    this.crew[i].holderPower[22] = tarCrew
                  }       
                  else{
                    this.crew[i].holderPower[22] = countCrew
                  }
                  

                }  
                if(this.crew[i].holderPower[22] < 0 ){
                  this.crew[i].holderPower[22] = 0
                }

                // boost all harpoons in queue
                if(this.crew[i].id == 60){
                  //verify unit on board
                  var onBoard = false;
                  for(var k = 0; k< this.boardHeight; k++){
                    for(var j = 0; j < this.boardWidth; j++){     
                      if(this.tile[""+j+k].crewID == 60){
                        onBoard = true;
                      }

                    }
                  } 
                  for(var x = 1; x < this.crew.length; x++){
                    this.crew[x].holderPower[60] = 0;
                    if(onBoard && this.crew[x].id == 81 ){
                      this.crew[x].holderPower[60] = 3
                    }
                  }
                }

                //power is equal to the SUM OF crew's power in QUEUE
                if(this.crew[i].id == 35){
                  var holder = 0
                  this.crew[i].origPower = 0;
                  for(var k = 0; k< this.boardHeight; k++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      if(this.tile[""+j+k].isCrewHere == true){
                        for(var x = 1; x < this.crew.length; x++){
                          if(this.crew[x].id == this.tile[""+j+k].crewID && this.tile[""+j+k].crewID != 35){
                            holder += this.crew[x].power
                          }
                        }
                        
                      }                        
                    }
                  }                    
                  this.crew[i].origPower = holder;
                }                

               
                //double  my power IF MY POSITION IN THE QUEUE IS EVEN
                
                for(var x = 1; x < this.crew.length; x++){
                  this.crew[x].holderPower[29] = 0

                  if(!this.crew[x].isDeployed){
                    if(this.crew[x].id == 29 && (this.placeOrderTracker+1) != 0 && ((this.placeOrderTracker+1)% 2 == 0)){
                      
                      
                      var boostHolder = this.crew[x].origPower
                      
                      // iterate over bonuses
                      for(var key = 0; key < this.crew[x].holderPower.length; key++){
                        if(this.crew[x].holderPower[key] != undefined && key != 29){
                          boostHolder += this.crew[x].holderPower[key]
                        }
                      }                    
                      this.crew[x].holderPower[29] = boostHolder
                    }                    
                  }
                  else{
                    this.crew[x].holderPower[29] = 0
                    
                    for(var k = 0; k< this.boardHeight; k++){
                      for(var j = 0; j < this.boardWidth; j++){     

                        
                        if(this.crew[x].id == 29 && this.tile[""+j+k].crewID == 29 && (this.tile[""+j+k].placeOrder+1) != 0 && ((this.tile[""+j+k].placeOrder+1)% 2 == 0)){
                          console.log("placement "+(this.tile[""+j+k].placeOrder+1))  
                          var boostHolder = this.crew[x].origPower
                          
                          // iterate over bonuses
                          for(var key = 0; key < this.crew[x].holderPower.length; key++){
                            if(this.crew[x].holderPower[key] != undefined && key != 29){
                              boostHolder += this.crew[x].holderPower[key]
                            }
                          }                    
                          this.crew[x].holderPower[29] = boostHolder
                        }

                      }
                    }                    

                  }
               


                }          
                
                //double  my power IF MY POSITION IN THE QUEUE IS ODD
                
                for(var x = 1; x < this.crew.length; x++){
                  this.crew[x].holderPower[30] = 0
                  if(!this.crew[x].isDeployed){
                    if(this.crew[x].id == 30 && ((this.placeOrderTracker+1)% 2 == 1 || (this.placeOrderTracker+1) == 1)){
                      
                      
                      var boostHolder = this.crew[x].origPower
                      
                      // iterate over bonuses
                      for(var key = 0; key < this.crew[x].holderPower.length; key++){
                        if(this.crew[x].holderPower[key] != undefined && key != 30){
                          boostHolder += this.crew[x].holderPower[key]
                        }
                      }                    
                      this.crew[x].holderPower[30] = boostHolder
                    }                    
                  }
                  else{
                    this.crew[x].holderPower[30] = 0
                    for(var k = 0; k< this.boardHeight; k++){
                      for(var j = 0; j < this.boardWidth; j++){     
                        
                        if(this.crew[x].id == 30 && this.tile[""+j+k].crewID == 30 && ((this.tile[""+j+k].placeOrder+1)% 2 == 1 || (this.tile[""+j+k].placeOrder+1) == 1)){
                          var boostHolder = this.crew[x].origPower
                          
                          // iterate over bonuses
                          for(var key = 0; key < this.crew[x].holderPower.length; key++){
                            if(this.crew[x].holderPower[key] != undefined && key != 30){
                              boostHolder += this.crew[x].holderPower[key]
                            }
                          }                    
                          this.crew[x].holderPower[30] = boostHolder
                        }

                      }
                    }                    

                  }
               


                }

                
                //free if 4th in que                
                for(var x = 1; x < this.crew.length; x++){
                  if(this.crew[x].id == 5 && this.placeOrderTracker == 3){
                    
                    this.crew[x].deployDiscount = this.crew[x].origDeployCost
                    //console.log("4th in queue! "+this.crew[x].deployDiscount)
                  }
                  else if(this.crew[x].id == 5 && this.placeOrderTracker != 3){
                    //this.crew[x].deployDiscount = 0
                    //this.crew[x].deployCost = this.crew[x].origDeployCost
                  }
                } 
                
                //reduce cost of next card
                for(var m = 0; m < this.boardHeight; m++){
                  for(var l = 0; l < this.boardWidth; l++){   
                    
                    if(this.tile[''+l+m].isCrewHere && this.tile[''+l+m].crewID == 23 && this.tile[''+l+m].placeOrder == (this.placeOrderTracker-1)){

                      for(var x = 1; x < this.crew.length; x++){
                        
                        if(this.crew[x].id != 23 && !this.crew[x].isBlank && !this.tile[''+l+m].hasAttacked){
                          this.crew[x].deployDiscount += 2
                          //this.crew[x].deployCost = this.crew[x].origDeployCost - this.crew[x].deployDiscount;

                        }

                      }   
                    }
                    else if(this.tile[''+l+m].isCrewHere && this.tile[''+l+m].crewID == 23 && this.tile[''+l+m].placeOrder != (this.placeOrderTracker-1)){
                      for(var x = 1; x < this.crew.length; x++){
                        if(!this.crew[x].isBlank){
                          //this.crew[x].deployDiscount = 0
                          //this.crew[x].deployCost = this.crew[x].origDeployCost - this.crew[x].deployDiscount
                          
                        }
                        
                      }
                      
                    }                      

                  }
                } 

                //calculate discounts
                this.crew[i].deployCost = this.crew[i].origDeployCost - this.crew[i].deployDiscount;
                if(this.crew[i].deployCost < 0){
                  this.crew[i].deployCost = 0
                }               
              
                 
                
               
                var totalPower =  parseInt(this.crew[i].origPower)  //+this.crew[i].holderPower[22]+this.crew[i].holderPower[24]+ this.crew[i].holderPower[0]+this.crew[i].holderPower[2]+this.crew[i].holderPower[3]+this.crew[i].holderPower[10]+this.crew[i].holderPower[29]+this.crew[i].holderPower[30]+this.crew[i].holderPower[34]+this.crew[i].holderPower[50]+this.crew[i].holderPower[51]
                
                // iterate over bonuses
                for(var key = 0; key < this.crew[i].holderPower.length; key++){
                  if(this.crew[i].holderPower[key] != undefined){
                    totalPower += this.crew[i].holderPower[key]
                  }
                }
                ////console.log("crew "+i+" bonus power:"+totalPower)
              
                
                if(totalPower > 99){
                  totalPower = 99
                }  

                this.crew[i].deployText.text = this.crew[i].deployCost
                this.crew[i].powerText.text = totalPower//parseInt(this.crew[i].origPower) +this.crew[i].holderPower[22]+this.crew[i].holderPower[24]+  this.crew[i].holderPower[0] +this.crew[i].holderPower[2]+this.crew[i].holderPower[3]+ this.crew[i].holderPower[10]
                if(totalPower >= 99 ){
                  this.crew[i].powerText.text = "Ꝏ"
                }  
                //multi attack UI
                //base extra attack
                var AttackNum = 1
                if(this.crew[i].id == 31 ){
                  AttackNum++
                }                  
                //super attack
                if(this.crew[i].id == 37 ){
                  AttackNum += this.crew[i].killCount
                }     
                //captain extra attack
                if(this.extraAttackFromCaptain && this.crew[i].type == 0){
                  AttackNum++
                }
                //gifted extra attack
                if(this.placeOrderTracker > 0 && this.placedCrewID[this.placeOrderTracker-1] == 36 && this.crew[i].id != 80 && this.crew[i].id != 81){
                  AttackNum++
                 
                }            
                if(!this.crew[i].isDeployed && AttackNum > 1){
                  var holder = this.crew[i].powerText.text
                  this.crew[i].powerText.text =  holder+" x "+(AttackNum)
                }  
                           
                //update UI when deployed
                for(var l = 0; l < this.boardHeight; l++){
                  for(var m = 0; m < this.boardWidth; m++){
                    if(this.tile[""+m+l].crewID == this.crew[i].id){
                      if(this.tile[""+m+l].multiAttack > 1){
                        var holder = this.crew[i].powerText.text 
                        this.crew[i].powerText.text =  holder+" x "+(this.tile[""+m+l].multiAttack)
                      }                       
                    }

                  }
                }                
               
                  //show monster power boosts
                  if(parseInt(this.crew[i].origPower) > totalPower){
                    var totalPower =  parseInt(this.crew[i].origPower)  //+this.crew[i].holderPower[22]+this.crew[i].holderPower[24]+ this.crew[i].holderPower[0]+this.crew[i].holderPower[2]+this.crew[i].holderPower[3]+this.crew[i].holderPower[10]+this.crew[i].holderPower[29]+this.crew[i].holderPower[30]+this.crew[i].holderPower[34]+this.crew[i].holderPower[50]+this.crew[i].holderPower[51]
                
                    // iterate over bonuses
                    for(var key = 0; key < this.crew[i].holderPower.length; key++){
                      if(this.crew[i].holderPower[key] != undefined){
                        totalPower += this.crew[i].holderPower[key]
                      }
                    } 
                    this.crew[i].powerText.text = totalPower                   
                    //this.crew[i].powerText.addColor("#BA363B", 0)
                  }
                  else if(parseInt(this.crew[i].origPower) <  totalPower){

                    this.crew[i].powerText.addColor("#30B64A", 0)
                  }    
                  else{
                    this.crew[i].powerText.addColor("#FFF", 0)
                  }            
                         
                  if(this.crew[i].isBlank){
                    this.crew[i].deployText.alpha = 0;
                    this.crew[i].powerText.alpha = 0
                  }
                  else{
                    this.crew[i].deployText.alpha = 1;
                    this.crew[i].powerText.alpha = 1                  
                  }   
                  

                  //this.crew[i].loadTexture(this.crew[i].holdText); 

              }


              // attack particles move towards health UI and then deal damage
              for(i = 0; i < this.attackParticleCount; i++){
                if(this.attackParticle[i].alpha == 1){
                  this.attackParticle[i].alpha = 1;
                  var pi = Math.PI;



                  if(this.attackParticle[i].waitTimer > 0){
                    //this.attackParticle[i].angle +=20
                    //this.attackParticle[i].waitTimer--
                    if(this.attackParticle[i].waitTimer <= 0){
                      this.attackParticle[i].waitTimer = 0

                     // var currentY = this.attackParticle[i].y
                      //var currentX = this.attackParticle[i].x

                      //this.attackParticle[i].y = this.attackParticle[i].tarY
                      //this.attackParticle[i].x = this.attackParticle[i].tarX

                      //this.add.tween(this.attackParticle[i]).from( { y: currentY }, 1000, Phaser.Easing.Elastic.In, true);
                      //this.add.tween(this.attackParticle[i]).from( { x: currentX }, 1000, Phaser.Easing.Elastic.In, true);
                    }
                  }
                  else{
                    //this.attackParticle[i].x += ( this.attackParticle[i].tarX - this.attackParticle[i].x) * 0.2;
                    //this.attackParticle[i].y += ( this.attackParticle[i].tarY - this.attackParticle[i].y) * 0.2;

                    var comX = this.attackParticle[i].x-this.attackParticle[i].tarX//this.game.input.mousePointer.x
                    var comY = this.attackParticle[i].y-this.attackParticle[i].tarY//this.game.input.mousePointer.y
                    var radianAngle= Math.atan2( comY, comX )
                    var angleConst = -90
                    ////console.log("angle "+i+" "+( angleConst+(radianAngle* (180/pi)) ))
                    this.attackParticle[i].angle = angleConst+(radianAngle* (180/pi));

                  

                    var distanceDiffX = Math.abs(this.attackParticle[i].x - this.attackParticle[i].tarX)
                    var distanceDiffY = Math.abs(this.attackParticle[i].y - this.attackParticle[i].tarY)

                    

                    if( (distanceDiffX) <= 15 && (distanceDiffY) <= 15){
                      this.attackParticle[i].alpha = 0;
                      //if targetting the captain deal damage
                      if(this.attackParticle[i].tarX == this.cap_health.x){
                        this.damageCaptain(this.attackParticle[i].source)
                      }
                      else{
                        var ran = Math.floor(Math.random() * 2)+1
                        this.attackSnd[ran].play()                        
                        this.crewAttackTile(this.attackParticle[i].target,this.attackParticle[i].source)
                      }                      
                    }
                  }

                }
              }  
              //curse particles move towards UI              
              for(i = 0; i < this.curseParticleCount; i++){
                if(this.curseParticle[i].alpha == 1){
                  this.curseParticle[i].alpha = 1;
                  if(this.curseParticle[i].waitTimer > 0){
                    //this.curseParticle[i].waitTimer--
                    if(this.curseParticle[i].waitTimer <= 0){
                      /*
                      this.curseParticle[i].waitTimer = 0

                      var currentY = this.curseParticle[i].y
                      var currentX = this.curseParticle[i].x

                      this.curseParticle[i].y = this.chestUI.y
                      this.curseParticle[i].x = this.chestUI.x

                      this.add.tween(this.curseParticle[i]).from( { y: currentY }, 2000, Phaser.Easing.Elastic.In, true);
                      this.add.tween(this.curseParticle[i]).from( { x: currentX }, 2000, Phaser.Easing.Elastic.In, true);       
                      */               
                    }
                  }
                  else{
                    //this.curseParticle[i].x += ( this.chestUI.x - this.curseParticle[i].x) * this.curseParticle[i].speed;
                    //this.curseParticle[i].y += ( this.chestUI.y - this.curseParticle[i].y) * this.curseParticle[i].speed;

                    if( (this.curseParticle[i].x - this.chestUI.x) <= 5 && (this.curseParticle[i].y - this.chestUI.y) <= 5){
                      this.curseParticle[i].alpha = 0;
                      this.curseParticle[i].x = 0;
                      this.curseParticle[i].y = 0;

                      this.curseFill.play()

                      //add curse to meter
                      
                      this.chestMeterBar.target += this.dynamicCurseChunk           


                      if(parseInt(localStorage.getItem("curseTut")) == 0){
                        localStorage.setItem("curseTut",1);
                        this.chatTimer = 1;
                        this.tutorialPause = true;                      
                        Swal.fire({
                          title: 'Curse Meter',
                          text: "At the end of a round. If the curse meter is full. Spin the Roulette of Doom!",
                          imageUrl: 'assets/gatheredCurse-2.webp',
                          backdrop: false,
                          imageWidth: 100,
                          imageHeight: 100,
                          allowOutsideClick: false,
                          allowEscapeKey: false                          
                        }).then((result) => {
                          this.chatTimer = 0;
                          this.tutorialPause = false;                                         
                        })                  
                      }                                                 
                      
                    }
                  }

                }
              }                
           
              

              //hide pause
              this.overlay.alpha = 0;     
              this.overlay.x = -this.game.width      
              
              for(var i =0; i < 3; i++){


                this.crewOptions[i].alpha = 0;
                this.crewOptions[i].deployText.alpha = 0
                this.crewOptions[i].powerText.alpha = 0
                this.crewOptions[i].ability.alpha = 0
                this.crewOptions[i].statInc.alpha = 0;
                this.crewOptions[i].name.alpha = 0;  
                

                this.treasureOptions[i].alpha = 0;
                this.treasureOptions[i].treasureItem.alpha = 0;
                this.treasureOptions[i].boon.alpha = 0;
                this.treasureOptions[i].curse.alpha = 0;

                this.treasureOptions[i].curseInc.alpha = 0;

                this.treasureOptions[i].loadTexture("treasure_rarity_"+this.treasureOptions[i].rarity)
                this.treasureOptions[i].treasureItem.loadTexture("treasureItem_"+this.treasureOptions[i].treasureItemVal)
                this.treasureOptions[i].boon.text = "BOON: "+boons[this.treasureOptions[i].boonVal]
                //this.treasureOptions[i].boon.loadTexture("treasureBoon_"+this.treasureOptions[i].rarity+"_"+this.treasureOptions[i].boonVal)
                this.treasureOptions[i].curse.loadTexture("curseTracker")//"treasureCurse_"+this.treasureOptions[i].curseVal

                this.treasureOptions[i].y += ( this.game.height*10 - this.treasureOptions[i].y) * 0.2;
                this.treasureOptions[i].treasureItem.y += ( this.game.height*10 - this.treasureOptions[i].treasureItem.y) * 0.2;
                this.treasureOptions[i].boon.y += ( this.game.height*10 - this.treasureOptions[i].boon.y) * 0.2;
                this.treasureOptions[i].curse.y += ( this.game.height*10 - this.treasureOptions[i].curse.y) * 0.2;

                this.treasureOptions[i].curseInc.y += ( this.game.height*10 - this.treasureOptions[i].curseInc.y) * 0.2;
                
                                
                this.reRoll_Button.y = this.game.height+200
                this.reRoll_Text.y = this.reRoll_Button.y+20
                this.reRoll_Button_outline.y =this.reRoll_Button.y
              

                //this.returnOrig(this.treasureOptions[i])
                //this.returnOrig(this.treasureOptions[i].treasureItem)
                //this.returnOrig(this.treasureOptions[i].boon)
                //this.returnOrig(this.treasureOptions[i].curse)

                
                
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

                    this.tile[""+m+l].turnTracker.alpha = 1;
                    this.tile[""+m+l].turnTrackerText.alpha = 1;
                    this.tile[""+m+l].turnTrackerText.text = "#"+(this.tile[""+m+l].placeOrder+1)

                    this.placedCrew[this.tile[""+m+l].placeOrder] =this.tile[""+m+l].texture
                    this.placedCrewID[this.tile[""+m+l].placeOrder]= this.tile[""+m+l].crewID
                    //this.placedCrewKey++
                  }
                  else{
                    this.tile[""+m+l].turnTracker.alpha = 0;
                    this.tile[""+m+l].turnTrackerText.alpha = 0;                    
                  }



          
                }
              }   
                    
              for(var i=0; i< this.placedCrewID.length; i++){
                
                
                if(this.placedCrewID[i] != -1 && this.placedCrewID[i] != 0){
                  //this.crewOrder[i].alpha = 1
                  //this.crewOrder[i].loadTexture(this.placedCrew[i])

               
                  
                  //next up effects 
                  
                  for(var z = 1; z < this.crew.length; z++){
                    if(this.crew[z].id == this.placedCrewID[i]){
                      this.crew[z].power = this.crew[z].origPower  
                      
                    }
                  }                 
                  
                  if(i > 0){
                    

                    //boost all previously deployed crew
                    if(this.placedCrewID[i] == 24 ){
                      var boostHolder = 0;
                      for(var z = 1; z < this.crew.length; z++){
                        if(this.crew[z].id == this.placedCrewID[i]){
                          boostHolder = this.crew[z].origPower //+this.crew[z].holderPower[22]+this.crew[z].holderPower[24]+ this.crew[z].holderPower[0] + this.crew[z].holderPower[2]+this.crew[z].holderPower[3]+this.crew[z].holderPower[10]+this.crew[z].holderPower[34]+this.crew[z].holderPower[50]+this.crew[z].holderPower[51]
                          // iterate over bonuses
                          for(var key = 0; key < this.crew[z].holderPower.length; key++){
                            if(this.crew[z].holderPower[key] != undefined){
                              boostHolder += this.crew[z].holderPower[key]
                            }
                          }                        
                        }
                      } 
                      //var deployedList = ""
                      for(var x = 0; x < i; x++){
                        //deployedList += "-"+this.placedCrewID[x]
                        
                        for(var z = 1; z < this.crew.length; z++){
                          if(this.crew[z].id == this.placedCrewID[x] && (this.crew[z].isDeployed || this.crew[z].id == 80|| this.crew[z].id == 81)){
                            this.crew[z].holderPower[24] = boostHolder
                          }                          
                        }

                      }                        
                      ////console.log(deployedList)                            
                      
                      
                    }       

                    //boost strike
                    if(this.placedCrewID[i-1] == 1 ){
                      var boostHolder = 0;
                      for(var z = 1; z < this.crew.length; z++){
                        if(this.crew[z].id == this.placedCrewID[i-1]){
                          boostHolder = this.crew[z].power
                          
                        }
                      }       
                      for(var x = 1; x < this.crew.length; x++){
                        if(this.crew[x].id == this.placedCrewID[i]){
                          this.crew[x].holderPower[0] = boostHolder
                        }
                      }                                 
                      
                      
                    }

          
                                       
                    
                  
                    for(var z = 1; z < this.crew.length; z++){
                      if(this.crew[z].id == this.placedCrewID[i]){
                        this.crew[z].power = this.crew[z].origPower //+this.crew[z].holderPower[22]+this.crew[z].holderPower[24]+ this.crew[z].holderPower[0] + this.crew[z].holderPower[2]+this.crew[z].holderPower[3]+this.crew[z].holderPower[10]+this.crew[z].holderPower[29]+this.crew[z].holderPower[30]+this.crew[z].holderPower[34]+this.crew[z].holderPower[50]+this.crew[z].holderPower[51]
                          // iterate over bonuses
                          for(var key = 0; key < this.crew[z].holderPower.length; key++){
                            if(this.crew[z].holderPower[key] != undefined){
                              this.crew[z].power += this.crew[z].holderPower[key]
                            }
                          }                         
                        if(this.crew[z].power > 99){
                          this.crew[z].power = 99
                        }
                      }
                    } 

                    
                    
                  }
                  else{
                    
                  
                    
                    for(var z = 1; z < this.crew.length; z++){
                    
                      if(this.crew[z].id == this.placedCrewID[i]){
                        this.crew[z].power = this.crew[z].origPower //+this.crew[z].holderPower[22]+this.crew[z].holderPower[24]+ this.crew[z].holderPower[0]+ this.crew[z].holderPower[2]+this.crew[z].holderPower[3]+ this.crew[z].holderPower[10]+this.crew[z].holderPower[29]+this.crew[z].holderPower[30]+this.crew[z].holderPower[34]+this.crew[z].holderPower[50]+this.crew[z].holderPower[51]
                          // iterate over bonuses
                          for(var key = 0; key < this.crew[z].holderPower.length; key++){
                            if(this.crew[z].holderPower[key] != undefined){
                              this.crew[z].power += this.crew[z].holderPower[key]
                            }
                          }                         
                        if(this.crew[z].power > 99){
                          this.crew[z].power = 99
                        }                      
                      }
                    }                   
                    
                  }

                
                  //+ this.crew[this.placedCrewID[i]].holderPower[10]
                  /*
                  this.crewOrder[i].healthText.x = this.crewOrder[i].x-(this.size/2)+25
                  
                  for(var z = 1; z <this.placeOrderTracker; z++){
                    try{
                      if(this.crew[z].id == this.placedCrewID[i]){
                        this.crewOrder[i].healthText.text = this.crew[z].deployCost
                        this.crewOrder[i].powerText.text = this.crew[z].power
                      }
                    }
                    catch(e){

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
                  */

                }
                else{
                  //this.crewOrder[i].healthText.text = ""
                  //this.crewOrder[i].powerText.text = ""
                  //this.crewOrder[i].alpha = 0;
                }
                    
                  
              }
              

      
              if(this.captainHurt){

                this.capBadge.loadTexture('capBadgeHurt_'+this.capKey) 
 

                //lose proud effect
                if(this.cap_healthValue < 20){
                  for(var z = 1; z < this.crew.length; z++){
                    this.crew[z].holderPower[55] = 0
                  }
                    
                }                  
              }
              else{


                this.capBadge.loadTexture('capBadge_'+this.capKey) 


              }                     
              //this.capEnergy >= 9 
              if((this.deployReady && this.deploy_poolCurrent >= this.cap_ultCost && !this.captainPowerActivated)){

                this.ult_Button.loadTexture('ui_ult_buttonReady'+this.capKey);
                //this.ult_Button.y = this.game.height-280
                //this.ult_pool.y = this.game.height-360       
                if(this.capKey == 2 && this.freeCounter[5].num <= 0){
                  //this.ult_Button.loadTexture('ui_ult_buttonNotReady'+this.capKey);
                }                     
              }
              else{
                this.ult_Button.loadTexture('ui_ult_buttonNotReady'+this.capKey);
                //this.ult_Button.y = this.game.height-280
                //this.ult_pool.y = this.game.height-340
              }


              this.ult_Button.x = this.capBadge.x
              this.ult_Button.y = this.capBadge.y //300 //((this.capInfo.x+300) - this.ult_Button.x) * 0.2;
              this.ult_ButtonText.x = this.capBadge.x-70//-(this.ult_Button.width/3)
              this.ult_ButtonText.y = this.capBadge.y+75//-(this.ult_Button.width/3)
              this.ult_ButtonText.text = this.cap_ultCost         
              this.ult_text.x =   -1000//290; 
              //this.ult_text.x = this.capBadge.x
              
              this.ult_Button_hover.x = this.ult_Button.x-25
              this.ult_Button_hover.y = this.ult_Button.y

              this.ult_Button_outline.x = this.ult_Button.x
              this.ult_Button_outline.y = this.ult_Button.y
              //this.ult_pool.x = this.ult_Button.x+100
              //this.ult_poolText.y = this.ult_pool.y+10
              //this.ult_poolText.x = this.ult_pool.x
              //this.ult_poolText.text = this.capEnergy+"/9"




              /*
              this.selectInfoDetail.x = this.selectInfo.x
              

              this.selectName.x =  this.selectInfo.x+this.selectInfo.width-280
              this.selectStats.x =  this.selectInfo.x+this.selectInfo.width-280
              this.selectAbility.x =  this.selectInfo.x+this.selectInfo.width-580      

              */

              //button anim|| !this.deployReady
              if(this.endbuttonTimer > 0 ){
                this.endbuttonTimer--
                //this.endTurn_Button.y = this.game.height-175+35
              }
              else{
                //this.endTurn_Button.y = this.game.height-175
              }



              this.endTurn_Button_outline.y = this.endTurn_Button.y

              if(this.clearbuttonTimer > 0 ){
                this.clearbuttonTimer--
                this.clear_Button.y = this.game.height-150+35
              }
              else{
                this.clear_Button.y = this.game.height-150
              }

              if((this.undoCounter <= 0 && this.chatTimer == 0)  || this.phaseCounter != 1 || this.capUltHero.y < this.game.height){
                this.clear_Button.y = 5000
              }

              this.clear_Button_outline.y = this.clear_Button.y
              //check if win 
              if((this.monCountValue-this.monKillCount) <= 0){
                this.chatTimer = 1;
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
              var name = ""
              switch(this.zone){
                case 1:
                  name = "THE CERULEAN TIDES"
                  break;
                case 2:
                  name = "THE AMETHYST DEPTHS"
                  break;    
                case 3:
                  name = "THE WRAITHSEA"
                  break;
                case 4:
                  name = "THE INFERNAL SEA"
                  break;                                
              }
              this.turnCountText.text = name+" - "+(this.bossEmegrgePoint-this.turnCountNum)+" TURNS UNTIL ZONE BOSS "//this.monKillCount+"/"+this.monCountValue
              if((this.bossEmegrgePoint-this.turnCountNum) == 1){
                this.turnCountText.text = name+" - "+(this.bossEmegrgePoint-this.turnCountNum)+" TURN UNTIL ZONE BOSS "
              }      
              //paint text
              var firstPart = name+" - "
              var turnLength = ""+(this.bossEmegrgePoint-this.turnCountNum)+" "        
              var textCol = "#8270e5"
              if((this.bossEmegrgePoint-this.turnCountNum) > bossEmegrgePoint/2){
                textCol = "#8270e5"
              }
              if((this.bossEmegrgePoint-this.turnCountNum) <= bossEmegrgePoint/2){
                textCol = "#e5533c"
              }
              if((this.bossEmegrgePoint-this.turnCountNum) <= bossEmegrgePoint/3){
                textCol = "#9c2121"
              }                            

              this.turnCountText.clearColors()
              this.turnCountText.addColor("white", 0);  
              this.turnCountText.addColor(textCol, firstPart.length);  
              
                         
              if((this.bossEmegrgePoint-this.turnCountNum) <= 0){
                this.turnCountText.text = name+" - DEFEAT THE ZONE BOSS"
                
                textCol = "#9c2121"                    
                this.turnCountText.addColor(textCol, firstPart.length);  
         
              } 
              else{
                this.turnCountText.addColor("white", (firstPart.length+turnLength.length));    
              }

              if(this.bossDead && this.zone < 4){
                this.turnCountText.text = name+" CLEARED!"
                this.turnCountText.clearColors()
                this.turnCountText.addColor("white", 0);   
              }




              //"WAVE #"+this.turnCountNum
        
              //score idea
              /*
              if(this.scoreCountHolder > 0){
                this.turnCountText.text = "SCORE: "+this.scoreCount+" + ("+this.scoreCountHolder+")"
                if(this.scoreCountTimer == 0){
                  if(this.scoreCountHolder> 10){
                    this.scoreCountHolder-= 10
                    this.scoreCount += 10
                  }      
                  else{
                    this.scoreCountHolder-= 1
                    this.scoreCount += 1
                  }
                  if(this.scoreCountHolder> 0){
                    this.scoreCountTimer = 5;
                  }
                  else{
                    this.scoreCountTimer = 0;
                  }
                }
                else{
                  this.scoreCountTimer --;
                }
                       
              }
              else{
                this.turnCountText.text = "SCORE: "+this.scoreCount
              }
              */
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
              ////console.log(this.turnCounter+" "+this.actionTimer)
              if(this.turnCounter > 0 ){
                this.turnCounter--;
                this.phaseStart = true;
                
                if(this.phaseCounter != 3){
                  ///this.turnMarker.y += ( this.game.height/2 - this.turnMarker.y) * 0.2;
                }
                
                
                if(this.turnMarker.y >= this.game.height){
                  


                  //this.turnMarkerText.alpha = 1;
                }
                else{
                  //this.turnMarkerText.x = this.turnMarker.x-100
                }
                this.turnMarkerText.y = this.turnMarker.y-50




              }
              else{
                //phase wall

                                
                
              
                //this.turnMarker.y += ( this.game.height+this.game.height/2 - this.turnMarker.y) * 0.2;


                
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
                    this.chestMeterBar.targetHolder = this.chestMeterBar.target;

                    for(var z = 1; z < this.crew.length; z++){
                      this.crewHolder[z].origPower = this.crew[z].origPower   
                    }
                                 
                    this.clearAllSnapShots();
                    this.undoCounter = 0 
                  
                  }
                  /*
                  if (parseInt(localStorage.getItem("intro")) == 3) {
                    localStorage.setItem("intro",4);
                    this.tutorialPause = true;
                    this.chatTimer = 1;        
                    //this.overlay.loadTexture('bgOverlay_board')              
                    Swal.fire({
                      title: 'Get that Treasure!',
                      text: "Deploy your crew so that they are next to the chest and distress flag, then start combat",
                      imageUrl: 'assets/tut_combat.webp',
                      backdrop: false,
                      imageWidth: 200,
                      imageHeight: 200,
                      allowOutsideClick: false,
                      allowEscapeKey: false                        
                
                    }).then((result) => {
                      
                      this.chatTimer = 0;
                      this.tutorialPause = false;          
                      for(var k = 1; k < this.crew.length; k++){
                        if(this.crew[k].id == 1){
                          this.crewSpeak(k,"I'm ready Cap'n!")
                        }
                      }                                          
                    })            
                  }
                  */
                
                  
                
                /* if (true) {
                    Swal.fire({
                      title: 'Tutorial (2/5)',
                      text: "To do this, during your turn deploy crew tiles to surround and attack creeps.",
                      imageUrl: 'assets/tut_combat.webp',
                      imageWidth: 200,
                      imageHeight: 200,
                
                    }).then((result) => {
                      
                      this.overlay.loadTexture('bgOverlay_savvy')   
                      
                      Swal.fire({
                        title: 'Tutorial (3/5)',
                        text: "Using your captain's ability & deploying crew tiles costs SAVVY. Pay attention to your captain's total when planning out your turns. End Turn to commence with combat.",
                        imageUrl: 'assets/tut_savvy.webp',
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
                  //begining of turn healing   
                  if(this.captainHurt){
                    for(var z = 1; z < this.crew.length; z++){
                      if(this.crew[z].id == 65){
                        this.healthCount+= this.crew[z].power
                        this.healCaptain(this.crew[z].power)
                      }         
                    }           
                  }          
                  this.captainHurt = false;
                  if(parseInt(localStorage.getItem("intro")) == 10){
                    localStorage.setItem("intro",11)
                    /*
                    this.crewSpeak(1, "Creeps will only target you Captain!") 
                    this.crew[1].speechTimer = quickspeechTimerBase/2;       
                    
                    this.crewSpeak(2, "So deploy us to clear the board ...") 
                    this.crew[2].speechTimer = -1*(((quickspeechTimerBase)+50)/2);    
                    
                    this.crewSpeak(3, "And complete this voyage's Charter") 
                    this.crew[3].speechTimer = -1*(((1.5*quickspeechTimerBase)+50)/2);      
                    */
                    //this.crewSpeak(4, "Oh! I found some BOMBS & HARPOONS!") 
                    //this.crew[4].speechTimer = quickspeechTimerBase //-1*(((2*quickspeechTimerBase)+50)/2);     

                    this.crewSpeak(1, "Creeps will only target you Captain!",quickspeechTimerBase ) 
  
                    
                    this.crewSpeak(2, "So deploy us to clear the board ...", -1*(quickspeechTimerBase/2)) 
   
                    
                    this.crewSpeak(3, "And complete this voyage's Charter!", -1*(2*(quickspeechTimerBase/2))) 
                    
                    this.crewSpeak(4, "Checkout the tutorial refresher here!", -1*(3*(quickspeechTimerBase/2))) 

                     
                    
                   
                    /*
                    this.freeCounter[5].num = startingBombCount                
                    this.freeCounter[5].counter2.alpha = 1
                    this.freeCounter[5].counter2.text = "+2💣"    
                    
                    this.freeCounter[6].num = startingBombCount                
                    this.freeCounter[6].counter2.alpha = 1
                    this.freeCounter[6].counter2.text = "+2🔱"                        
                    */
                  }                  
                  

                  if(parseInt(localStorage.getItem("bossTut")) == 0 && !this.bossID.includes("blank")){
                    localStorage.setItem("bossTut",1);
                    this.chatTimer = 1;
                    this.tutorialPause = true;                      
                    Swal.fire({
                      title: 'The Boss Has Appeared!',
                      text: "Defeat the Boss to clear the zone!",
                      imageUrl: 'assets/mon-3.webp',
                      backdrop: false,
                      imageWidth: 100,
                      imageHeight: 100,
                      allowOutsideClick: false,
                      allowEscapeKey: false                          
                    }).then((result) => {
                      this.chatTimer = 0;
                      this.tutorialPause = false;                                         
                    })                         
                  }              
                
                  
                  
                  
                }
                ////console.log(this.phaseCounter)
                if( markerDiff <= diffBase   && this.phaseCounter == 1 && this.phaseStart ){
                  //this.deployReady = true;  


                }
                //&& this.phaseCounter != 1
                if(( markerDiff <= diffBase  && this.actionTimer == 0) && this.phaseStart ){
                  //phase actions
                  this.phaseStart = false;
                  if(this.phaseCounter == 0 ){
                    if(this.turnCountNum < 1){
                      this.spawnMonsters();
                      this.removeTint();

                      // spawn rocks
                      /*
                      if(parseInt(localStorage.getItem("intro")) >= 12){
                        var count = this.boardHeight*this.boardWidth;
                        for(var l = 0; l < this.boardHeight; l++){
                          for(var m = 0; m < this.boardWidth; m++){
                            var rand = Math.floor(Math.random() * (5))
                            if(rand == 0 && count > 0){
                              this.spawnMonsters(false,this.tile[''+l+m],103);
                              count--;   
                            }
                          }
                        }   
                          
                                 
                        for(var b = 0; b < 15; b++){
                          ////console.log("rocks")
                          
                          
                            var none = undefined
                            this.spawnMonsters(false,none,103);                            
                          }

                        }
                      }
                      */
                      //this.turnCountNum++;
                                           
                    }

                  
                  }
                  else if(this.phaseCounter == 1 ){
                    
                    //karma hits
                    /*
                    alert("trigger")
                    if(this.karma > 0){
                      this.damageCaptain(this.karma)
                      this.karma = 0;
                      this.captainHurt = true;
                    } 
                    */                     
                  } 
                  else if(this.phaseCounter == 2 ){
                    this.turnMarkerText.text = ""
                    this.crewFight();
                  } 
                  else if(this.phaseCounter == 3 ){
                    this.removeTint();
                  }                   
                  else if(this.phaseCounter == 4 ){
                    this.placeOrderTracker = 0;
                    this.removeTint();
                    this.enemyFight();


                  }                 
                }              
                
                //this.turnMarkerText.alpha = 0
                
                this.turnMarkerText.y = this.turnMarker.y-50
              }

              this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax

              if(this.cursorSelect.alpha > 0){
                if(this.incomingCost.alpha <= 1){
                  this.incomingCost.alpha += 0.02
                }
                try{
                  this.incomingCost.text = "(-"+this.crew[this.selectedCrew].deployCost+")"
                }
                catch(e){

                }
                

              }
              else{
                this.incomingCost.alpha = 0
              }

              if(this.deploy_poolCurrent <= 0){
                this.deploy_poolText.fill = '#FF0000';
              }
              else{
                this.deploy_poolText.fill = '#FFFFFF';
              }
              


              
              ///this.cap_healthText.font.style.font.size = 100;
              this.cap_health.width += ( this.cap_health.origWidth - this.cap_health.width) * 0.5;
              this.cap_health.height += ( this.cap_health.origHeight - this.cap_health.height) * 0.5;
              for(var i = 1; i < this.crew.length; i++){



                this.crew[i].deployText.y = this.crew[i].y+(this.crew[i].height/2)-28
                this.crew[i].powerText.y  = this.crew[i].y+(this.crew[i].height/2)-28      
                
                this.crew[i].width += ( this.crew[i].origWidth - this.crew[i].width) * 0.5;
                this.crew[i].height += ( this.crew[i].origHeight - this.crew[i].height) * 0.5;
                
                if(this.crew[i].curseVal > 0 && i < 5 ){
                  this.crew[i].curseValText.y = this.crew[i].y-(this.crew[i].height/2)+15  
                  this.crew[i].curseUI.y  = this.crew[i].y-(this.crew[i].height/2)+15
                  this.crew[i].curseValText.text = "x"+this.crew[i].curseVal

                  this.crew[i].curseValText.alpha = 1;
                  this.crew[i].curseUI.alpha = 1                  
                }
                else{
                  this.crew[i].curseValText.alpha = 0;
                  this.crew[i].curseUI.alpha = 0
                }




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
                    
                    //if(this.tile[""+m+l].crewID == this.crew[i].id && this.tile[""+m+l].isCrewHere){
                    
                    if(this.tile[""+m+l].crewID == this.crew[i].id && this.tile[""+m+l].isCrewHere){
                      
                      this.crew[i].isDeployed = true//this.crew
                      if(i >= 5){
                        this.crew[i].isDeployed = false;
                      }                    
                    }

                      
                  }
                }              

                //crew speech



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
                //curse tint
                if(this.crew[i].tintTimer > 0){
                  this.crew[i].tintTimer--
                  this.crewDeployed[i].alpha = 0;
                  if(this.crew[i].tintTimer == 0){
                    this.crew[i].tint = '0xFFFFFF'     
                  }
                }

                            
                //crew deployed
                if((i == 5 &&  this.freeCounter[5].num <= 0)){
                  this.crew[i].isDeployed = true
                }
                if((i == 6 &&  this.freeCounter[6].num <= 0)){
                  this.crew[i].isDeployed = true
                }                
                if((this.crew[i].isDeployed || !this.deployReady) && !this.addToCrew && !this.removeFromCrew){
                  if(this.crew[i].isTalking){
                    this.crewDeployed[i].alpha = 0;
                    this.crew[i].y = this.crew[i].origY
                  }
                  else{
                    this.crewDeployed[i].alpha = 1;
                    this.crew[i].y = this.crew[i].origY+25;
                    if(this.crew[i].curseVal > 0){
                      this.crewDeployed[i].loadTexture("crewDeployed_curse")
                    }
                    else{
                      this.crewDeployed[i].loadTexture("crewDeployed")
                    }
                  }

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
                  //this.crewSelect[i].alpha = 0;
                  this.crew[i].y = this.crew[i].origY
                  this.crewSelect[i].loadTexture("crewSelect")
                  this.crew[i].curseIncr.alpha = 0;  
                  
                  if(parseInt(localStorage.getItem("intro")) == 1){
                    localStorage.setItem("intro",2);
                    for(var k = 1; k < this.crew.length; k++){
                      if(this.crew[k].id == 99 ){
                        this.crewSpeak(k,"Captain, let's get that treasure!\nDeploy me to the board",quickspeechTimerBase)
                        this.TLetterBox.alpha = 1;
                        for(var m = 0; m < this.boardHeight; m++){
                          for(var l = 0; l < this.boardWidth; l++){  
                            if(this.tile[''+l+m].monID == 99){
                              this.setFocus(300,this.tile[''+(l+1)+m].x,this.tile[''+l+m].y)   
                            }
                          }
                        }                           
                      }
                    }             
                  }                    
                }

                this.crewSelect[i].y = this.crew[i].y
                this.crewDeployed[i].y = this.crew[i].y
                this.crew[i].cursed.y = this.crew[i].y
              }

              
              if(this.selectedCrew > 0 && this.selectedCrew <= 100 && !this.noPickUp){
                this.cursorSelect.alpha = 0.3
                this.cursorSelect.loadTexture(this.crew[this.selectedCrew].texture)
              }
              else{
                this.cursorSelect.alpha = 0
              }

               



              for(var k = 5; k< 7;k++){
            
                this.freeCounter[k].x = this.crew[k].x+10
                this.freeCounter[k].y = this.crew[k].y-75
                this.freeCounter[k].counter.x = this.freeCounter[k].x-5
                this.freeCounter[k].counter.y = this.freeCounter[k].y-20
                this.freeCounter[k].counter2.x = this.freeCounter[k].x-5
                //this.freeCounter[k].counter2.y = this.freeCounter[k].y-75
                //this.freeCounterText2.y = this.freeCounter.y-25          
                this.freeCounter[k].counter.angle = -15
                this.freeCounter[k].counter2.angle = -15    
                
                this.freeCounter[k].counter.text = "x"+this.freeCounter[k].num
                    
              }


          
              
              
              
              //turn management


              //load puzzle
              var restart = 0;


              
              if(this.deployReady){

                


                if(this.incomingTotal>0){
                  this.incomingDamage.text = "(- "+this.incomingTotal+")"
                  
                  if(this.incomingDamage.y > this.cap_health.y-100){
                    this.incomingDamage.y-=3
                  }
                  else{

                  }
                  if(this.incomingDamage.alpha <= 1){
                    this.incomingDamage.alpha += 0.02
                  }

                  if(this.incomingTotal>= this.cap_healthValue){
                    this.incomingDamage.text = "(- "+this.incomingTotal+" ☠️)"

                    //this.cap_healthText.text = ""
                  }
                  //smoking might cause miss
                  if(this.smokingCount>0){
                    this.incomingDamage.text = "(- "+this.incomingTotal+" ???)"
                  }                  
                }
                else{
                  this.incomingDamage.text = ""
                  this.incomingDamage.alpha = 0;
                  this.incomingDamage.y = this.cap_health.y    
                           
                }
                
              }   
              else{
                this.incomingDamage.text = ""
                this.incomingDamage.alpha = 0;
                this.incomingDamage.y = this.cap_health.y

              }   
              this.cap_healthText.text = this.cap_healthValue                   


              
              
              //accurate bomb readings
              if(this.bombCount > 0){
                this.freeCounter[5].counter2.alpha = 1
                this.freeCounter[5].counter2.text = "+"+this.bombCount+"💣"     
                this.bombCount = 0;  
              }
              //accurate health readings
              if(this.healthCount > 0){
                this.cap_healthText2[0].text = "+"+this.healthCount
                this.healthCount = 0
              }
              this.smokingCount = 0;
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){
                    //reset incoming damage
                    this.tile[''+(j)+(i)].incomingDamage = 0     
                    //count smoking          
                    if(this.tile[''+(j)+(i)].smoke.on && this.tile[''+(j)+(i)].power > 0){
                      this.smokingCount++;
                    }
                }
              }              

              for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){

 
                    

                  

                    //sparkling 
                    if(this.tile[''+j+i].sparkle.alpha > 0){
                      
                      if(this.tile[''+j+i].sparkle.shineKey == 1){
                        this.tile[''+j+i].sparkle.width++
                        this.tile[''+j+i].sparkle.height++

                        this.tile[''+j+i].sparkle2.width--
                        this.tile[''+j+i].sparkle2.height--        
                        
                        

                        if(this.tile[''+j+i].sparkle.width >= this.tile[''+j+i].width*1.25){
                          this.tile[''+j+i].sparkle.shineKey = 0;
                        }
                      }
                      else{
                        this.tile[''+j+i].sparkle.width--
                        this.tile[''+j+i].sparkle.height--

                        this.tile[''+j+i].sparkle2.width++
                        this.tile[''+j+i].sparkle2.height++

                        if(this.tile[''+j+i].sparkle.width <= this.tile[''+j+i].width){
                          this.tile[''+j+i].sparkle.shineKey = 1;
                        }                      
                      }
                      
                    }

                    //show outline
                    if(this.tile[""+j+i].isEnemyHere || this.tile[""+j+i].isCrewHere){
                      this.tile[""+j+i].outline.alpha = 1;
                      this.tile[""+j+i].outline.width = this.tile[""+j+i].width
                      this.tile[""+j+i].outline.height = this.tile[""+j+i].height

                      if(this.tile[""+j+i].isCrewHere){
                        this.tile[""+j+i].outline.loadTexture("crewOutline")
                      }
                      else if(!this.tile[""+j+i].submerged){
                        this.tile[""+j+i].outline.loadTexture("enemyOutline")
                      }
                      else {
                        this.tile[""+j+i].outline.alpha = 0;  
                      }                      
                    }
                    else{
                      this.tile[""+j+i].outline.alpha = 0;  
                    }

                        
                    //return to size
                    if(this.tile[""+j+i].height > 100){
                      this.tile[""+j+i].height-=10  
                      if(this.tile[""+j+i].height < 100){
                        this.tile[""+j+i].height = 100
                      }
                    }
                    else if(this.tile[""+j+i].height < 100){
                      this.tile[""+j+i].height+=10
                      if(this.tile[""+j+i].height > 100){
                        this.tile[""+j+i].height = 100
                      }                    
                    }
                    else{
                      this.tile[""+j+i].height = 100
                    }
                    //this.tile[""+j+i].height += ( 100 - this.tile[""+j+i].height) * 0.2;
                    


                    //flipping 
                    if(this.tile[''+j+i].isFlipping){
                      if(this.tile[""+j+i].width <= 10){
                        this.tile[''+j+i].isFlipping = false
                        this.tile[''+j+i].tint = '0xFFFFFF'
                      }
                      else{
                        if(this.tile[""+j+i].width > 10){
                          this.tile[""+j+i].width-=15;
                        }
                      }
                      



                    }
                    else{
                      this.tile[""+j+i].width += ( 100 - this.tile[""+j+i].width) * 0.2;

                      //show if first time seeing monster
                      if(parseInt(localStorage.getItem("firstTimeSeen-"+this.tile[''+j+i].monID)) != 0 && !this.tile[""+j+i].submerged && this.tile[''+j+i].monID > 0){
                        localStorage.setItem("firstTimeSeen-"+this.tile[''+j+i].monID,0)
                        this.tile[''+j+i].newLabel.alpha = 1
                      }
                      else{
                        //this.tile[''+j+i].newLabel.alpha = 0;
                      }                      
                    }
                                    

                    
                    this.tile[''+j+i].healthText.y = this.tile[''+j+i].y+(this.size/2)-20
                    this.tile[''+j+i].powerText.y = this.tile[''+j+i].y+(this.size/2)-20
                    this.tile[''+j+i].powerText.height += ( this.tile[''+j+i].powerText.origHeight - this.tile[''+j+i].powerText.height) * 0.1;
                    //this.tile[''+j+i].powerText.width += ( this.tile[''+j+i].powerText.origWidth - this.tile[''+j+i].powerText.width) * 0.1;
                    

                    //show playable areas
                    /*
                    if(!this.tile[''+j+i].isCrewHere && !this.tile[''+j+i].isEnemyHere && this.cursorSelect.alpha > 0){
                      this.tile[''+j+i].loadTexture('tile-place');                        
                    }
                    else  if(!this.tile[''+j+i].isCrewHere && !this.tile[''+j+i].isEnemyHere){
                      this.tile[''+j+i].loadTexture('tile');        
                    }                    
                    */

                    
                    //show enemy health and deploy cost
                    
                    if(((this.tile[''+j+i].isEnemyHere && !this.tile[""+j+i].submerged) || this.tile[''+j+i].isCrewHere) && this.tile[''+j+i].monID != 1 && !this.tile[""+j+i].isFlipping ){
                      this.tile[''+j+i].healthText.alpha = 1;
                      this.tile[''+j+i].powerText.alpha = 1;

                    

                      if(this.tile[''+j+i].isEnemyHere){
                        this.tile[''+j+i].healthText.text = this.tile[''+j+i].hp
                        this.tile[''+j+i].powerText.text =  this.tile[''+j+i].power
                        if(this.tile[''+(j)+(i)].origmultiAttack > 0){
                          this.tile[''+j+i].powerText.text =  this.tile[''+j+i].power+" x "+(this.tile[''+(j)+(i)].origmultiAttack+1)
                        }                        
                        this.tile[''+j+i].healthText.x = this.tile[''+j+i].x-(this.size/2)+25
                        this.tile[''+j+i].powerText.x = this.tile[''+j+i].x+(this.size/2)-22  
                        this.tile[''+j+i].healthText.addColor("#fff", 0)
                        this.tile[''+j+i].powerText.addColor("#FFF", 0)


                          //show monster power boosts
                          if(parseInt(this.tile[''+j+i].origPower) > parseInt(this.tile[''+j+i].power)){
                            
                            this.tile[''+j+i].powerText.addColor("#BA363B", 0)
                          }
                          if(parseInt(this.tile[''+j+i].origPower) <  parseInt(this.tile[''+j+i].power)){
                            this.tile[''+j+i].powerText.addColor("#30B64A", 0)
                          }           

                          
                          if(this.tile[''+j+i].incomingDamage >= this.tile[''+j+i].hp){
                            
                            //this.tile[''+j+i].willDie.x = this.tile[''+j+i].x
                            //this.tile[''+j+i].willDie.y = this.tile[''+j+i].y
                            //this.tile[''+j+i].willDie.alpha = 1;
                          }   
                          else{
                            //this.tile[''+j+i].willDie.alpha = 0;
                          }         
                      }
                      if(this.tile[''+j+i].isCrewHere){
                 
                        
                        if(this.phaseCounter == 1 || this.phaseCounter ==2){
                          try{
                            //show attack pattern - red
                            
                            for(var z = 1; z < this.crew.length; z++){
                              if(this.crew[z].id == this.tile[''+j+i].crewID && this.beginTint ){
                                this.crewTint(this.crew[z], this.tile[''+j+i])
                                //this.crewTint(parseInt(this.crew[z].attackPattern), this.tile[''+j+i])
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
                          for(var z = 1; z < this.crew.length; z++){
                            if(this.crew[z].id == this.tile[''+j+i].crewID ){
                              this.tile[''+j+i].healthText.text =  this.crew[z].deployCost
                              
                              if(this.crew[z].power >= 99){
                                this.tile[''+j+i].powerText.text = "Ꝏ"
                              }
                              else{
                                this.tile[''+j+i].powerText.text =  this.crew[z].power
                              }
                              
                              if(this.tile[''+(j)+(i)].multiAttack > 1){
                                this.tile[''+j+i].powerText.text =  this.crew[z].power+" x "+(this.tile[''+(j)+(i)].multiAttack)
                              }

                              this.tile[''+j+i].healthText.x = this.tile[''+j+i].x-(this.size/2)+25
                              this.tile[''+j+i].powerText.x = this.tile[''+j+i].x+(this.size/2)-22  
                              this.tile[''+j+i].healthText.addColor("#FFF", 0)
                              this.tile[''+j+i].powerText.addColor("#FFF", 0)
                              if(parseInt(this.crew[z].origPower) > parseInt(this.crew[z].power)){
                                

                                var totalPower =  parseInt(this.crew[z].origPower)  //+this.crew[i].holderPower[22]+this.crew[i].holderPower[24]+ this.crew[i].holderPower[0]+this.crew[i].holderPower[2]+this.crew[i].holderPower[3]+this.crew[i].holderPower[10]+this.crew[i].holderPower[29]+this.crew[i].holderPower[30]+this.crew[i].holderPower[34]+this.crew[i].holderPower[50]+this.crew[i].holderPower[51]
                
                                // iterate over bonuses
                                for(var key = 0; key < this.crew[z].holderPower.length; key++){
                                  if(this.crew[z].holderPower[key] != undefined){
                                    totalPower += this.crew[z].holderPower[key]
                                  }
                                } 
                                this.tile[''+j+i].powerText.text = totalPower    

                                //this.tile[''+j+i].powerText.addColor("#BA363B", 0)
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
                          this.tile[""+j+i].willDie.alpha = 0
                        }
                        else{
                          this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID)
                          if(this.tile[""+j+i].monID == 99){

                            this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID+"-0")   
                            if(this.chestCount % uncommonChestBreak == 0){
                              this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID+"-1")   
                            } 
                            if(this.chestCount % rarenChestBreak == 0){
                              this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID+"-2")   
                            } 
                            this.tile[''+j+i].sparkle.alpha = 1;
                            this.tile[''+j+i].sparkle2.alpha = 1;                            
                            
                          }
                          if(this.tile[""+j+i].monID == 10){
                            this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID+"-"+this.capKey)
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

                    

                    /*
                    else{
                      //+this.tile[""+j+i].springY
                      //this.tile[""+j+i].y += ( (this.tile[""+j+i].origY) - this.tile[""+j+i].y) * this.tile[""+j+i].loadSpeed;   
                      var dist =  Math.abs(this.tile[""+j+i].y - this.tile[""+j+i].origY )

                      if(this.tile[""+j+i].y >= this.tile[""+j+i].origY){
                        this.tile[""+j+i].y-=5
                        if(this.tile[""+j+i].y < this.tile[""+j+i].origY){
                          this.tile[""+j+i].y = this.tile[""+j+i].origY
                          if(this.tile[""+j+i].rippleTrig == 1){
                            this.tile[""+j+i].rippleTrig = -1;
                            this.surroundingTileDip(this.tile[""+j+i],dipVal/2)
                            
                          }
                          else if(this.tile[""+j+i].rippleTrig == -1){
                            //do nothing
                            
                          }
                          else{
                            this.tile[""+j+i].rippleTrig = 0;
                          }
                          
                        }



                      }
                      else if(this.tile[""+j+i].y <= this.tile[""+j+i].origY){
                        this.tile[""+j+i].y+=5
                        if(this.tile[""+j+i].y > this.tile[""+j+i].origY){
                          this.tile[""+j+i].y = this.tile[""+j+i].origY
                          //this.surroundingTileDip(this.tile[""+j+i],25)
                        } 
                        
                       

                      }                    
                      else{
                        this.tile[""+j+i].y = this.tile[""+j+i].origY
                      }

                      //splash disappears
                      if(this.tileSplash[''+j+i].alphaTimer > 0 && this.tileSplash[''+j+i].alpha > 0){
                          
                        
                        this.tileSplash[''+j+i].alphaTimer--
                        this.tileSplash[''+j+i].y--
                        this.tileSplash[''+j+i].alpha -= 0.01
                        if(this.tileSplash[''+j+i].alphaTimer == 0){
                          this.tileSplash[''+j+i].alpha = 0
                          this.tileSplash[''+j+i].x = -1000
                          this.tileSplash[''+j+i].y = -1000
                        }

                      }                       

                    
                      /*if(dist <= 10 && dist >= 0 && this.tile[""+j+i].submerged){
                        if (parseInt(localStorage.getItem("intro")) == 2) {
                          this.chatTimer = 1;
                          this.tutorialPause = true;       
                          this.overlay.loadTexture('bgOverlay_board')                   
                          Swal.fire({
                            title: 'Tutorial (4/5)',
                            text: "Sea Creeps can spawn SUBMERGED. They surface on their next turn. You can BLOCK this by placing a crew on the space",
                            position: "center-end",
                            imageUrl: 'assets/tut_block.webp',
                            imageWidth: 300,
                            imageHeight: 300,
                          }).then((result) => {
                            localStorage.setItem("intro",3);
                            this.chatTimer = 0;
                            this.tutorialPause = false;                         
                          })            
                        }                      
                      }                   

                      restart += 1; 
                    } 
                    */    
                    //this.tile[""+j+i].x += ( (this.tile[""+j+i].origX+this.tile[""+j+i].springX) - this.tile[""+j+i].x) * this.tile[""+j+i].loadSpeed;  

                    //this.springBody(10,this.tile[""+j+i])
                                              
                  }

              }          
            


            }
            else{
              if(this.nextZone){
                this.chatTimer = 1
              }
              this.gatheredChest_Ticker.y = -1000
              this.gatheredSouls_Ticker.y = -1000

              this.gatheredChest_Text.text = this.chestOpened
              this.gatheredSouls_Text.text = this.soulsSaved

              //treasure sparkles
              if(this.treasureSparkle.alpha > 0){
                this.treasureSparkle.alpha -= 0.02;
                this.treasureSparkle.width++
                this.treasureSparkle.height++

                if(this.treasureSparkle.alpha <= 0.1){
                  this.treasureSparkle.alpha = 1
                  this.treasureSparkle.width = this.treasureSparkle.origWidth
                  this.treasureSparkle.height = this.treasureSparkle.origHeight                
                }
              }


              this.overlay.alpha = 1;     
              this.overlay.x = 0  

              var monsLeft = 0;
              for(var m = 0; m < this.boardHeight; m++){
                for(var l = 0; l < this.boardWidth; l++){  
                  if(this.tile[''+l+m].isEnemyHere){
                    monsLeft++
                  }
                }
              }            

             
              if(this.tutorialPause){
                

              }   
              else if(this.nextZone && this.zone < 4){
                this.overlay.loadTexture('bgOverlay1')
                this.overlayText.alpha = 1 
                if((parseInt(localStorage.getItem("intro")) <= 13)){
                  this.overlayText.text = " WHAT A HAUL! "
                  
                  this.treasureOptions[0].alpha = 0;
                  this.treasureOptions[0].x = this.game.width/2
                  this.treasureOptions[0].curseInc.x = this.game.width/2                  

                  this.treasureOptions[1].alpha = 0;

                  this.treasureOptions[2].alpha = 0;

                  this.treasureOptions[2].alpha = 1;
                  this.treasureOptions[2].value= 200
                  this.treasureOptions[2].x = this.game.width/2
                  this.treasureOptions[2].curseInc.x = this.game.width/2
                  this.treasureOptions[2].loadTexture("treasure_200")
          


                 
    

                }
                else{
                  this.overlayText.text = "REST OR DRINK?"
                  this.treasureOptions[0].alpha = 1;
                  this.treasureOptions[0].value= 200
                  this.treasureOptions[0].x = this.treasureOptions[0].origX+200
                  this.treasureOptions[0].curseInc.x = this.treasureOptions[0].origX+200
    
                  this.treasureOptions[1].alpha = 0;
    
                  this.treasureOptions[2].alpha = 1;
                  this.treasureOptions[2].value= 201
                  this.treasureOptions[2].x = this.treasureOptions[2].origX-200
                  this.treasureOptions[2].curseInc.x = this.treasureOptions[2].origX-200
                }


                //unlock captains
                if(this.capKey == 1 && this.zone == 1 && parseInt(localStorage.getItem("cap_unlocked2")) != 1){
                  localStorage.setItem("cap_unlocked2", 1)
                  localStorage.setItem("cap_unlocked2New", 1)

                  try{
                    if (!client.achievement.isActivated('NEW_ACHIEVEMENT_1_0')) {
                      client.achievement.activate('NEW_ACHIEVEMENT_1_0')
                    } 
                  }
                  catch(e){

                  }                  
                }

                if(this.capKey == 2 && this.zone == 1 && parseInt(localStorage.getItem("cap_unlocked3")) != 1){
                  localStorage.setItem("cap_unlocked3", 1)
                  localStorage.setItem("cap_unlocked3New", 1)
                  try{
                    if (!client.achievement.isActivated('NEW_ACHIEVEMENT_1_1')) {
                      client.achievement.activate('NEW_ACHIEVEMENT_1_1')
                    } 
                  }
                  catch(e){

                  }                    
                }       
                
                if(this.capKey == 3 && this.zone == 2 && parseInt(localStorage.getItem("cap_unlocked4")) != 1){
                  localStorage.setItem("cap_unlocked4", 1)
                  localStorage.setItem("cap_unlocked4New", 1)
                  try{
                    if (!client.achievement.isActivated('NEW_ACHIEVEMENT_1_2')) {
                      client.achievement.activate('NEW_ACHIEVEMENT_1_2')
                    } 
                  }
                  catch(e){

                  }                    
                }    

                if(this.capKey == 4 && this.zone == 2 && parseInt(localStorage.getItem("cap_unlocked5")) != 1){
                  localStorage.setItem("cap_unlocked5", 1)
                  localStorage.setItem("cap_unlocked5New", 1)
                  try{
                    if (!client.achievement.isActivated('NEW_ACHIEVEMENT_1_3')) {
                      client.achievement.activate('NEW_ACHIEVEMENT_1_3')
                    } 
                  }
                  catch(e){

                  }                    
                }  
                
                if(this.capKey == 5 && this.zone == 2 && parseInt(localStorage.getItem("cap_unlocked6")) !== 1){
                  localStorage.setItem("cap_unlocked6", 1)
                  localStorage.setItem("cap_unlocked6New", 1)
                  try{
                    if (!client.achievement.isActivated('NEW_ACHIEVEMENT_1_4')) {
                      client.achievement.activate('NEW_ACHIEVEMENT_1_4')
                    } 
                  }
                  catch(e){

                  }                    
                }                  



                for(var i =0; i < 3; i++){
                  this.treasureOptions[i].loadTexture("treasure_"+this.treasureOptions[i].value)
                  if(this.zone < zoneLimit){
                    this.treasureOptions[0].loadTexture("foodChoice")
                    this.treasureOptions[2].loadTexture("drinkChoice")
                  }
                  if((parseInt(localStorage.getItem("intro")) <= 13)){
                    this.treasureOptions[2].loadTexture("treasure_200")
                    
                  }                  

                  if(this.zone == 3 && this.treasureOptions[i].value == 201){
                    this.overlayText.text = "PORT OR CONTINUE?"
                    this.treasureOptions[i].loadTexture("treasure_"+this.treasureOptions[i].value+"-endless")
                  }
                  if(i ==0 || i == 2){
                    this.treasureOptions[i].y += ( this.treasureOptions[i].targetY - this.treasureOptions[i].y) * 0.2;
                    this.treasureOptions[i].boon.y = this.treasureOptions[i].y+50 
                    this.treasureOptions[i].curse.y = this.treasureOptions[i].y 
                    this.treasureOptions[i].curseInc.y = this.treasureOptions[i].y 
                    this.treasureOptions[i].treasureItem.y = this.treasureOptions[i].y 
            
                  }
                  
                  
                }               
              }  

              else{
                this.overlay.loadTexture('bgOverlay1')
                this.overlayText.alpha = 1; 
                this.overlayText.text = "CHOOSE YOUR BOOTY"

          
                for(var i =0; i < 3; i++){
                  this.treasureOptions[i].alpha = 1;
                  this.treasureOptions[i].treasureItem.alpha = 1;
                  this.treasureOptions[i].boon.alpha = 1;
                  this.treasureOptions[i].curse.alpha = 1;
                  if(this.getTileDetails){
                    this.overlayText.text = ""//"TILE DETAILS"
                    this.overlay.alpha = 0;  
                    this.overlay.x = -this.game.width      
                    this.exit_DetailButton.alpha = 1;

                    this.crewOptions[0].alpha = 0;
                    this.crewOptions[0].deployText.alpha = 0
                    this.crewOptions[0].powerText.alpha = 0
                    this.crewOptions[0].ability.alpha = 0
                    this.crewOptions[0].name.alpha = 0; 
                    this.treasureOptions[0].alpha = 0

                    this.crewOptions[2].alpha = 0;
                    this.crewOptions[2].deployText.alpha = 0
                    this.crewOptions[2].powerText.alpha = 0
                    this.crewOptions[2].ability.alpha = 0     
                    this.crewOptions[2].name.alpha = 0;                 
                    this.treasureOptions[2].alpha = 0           
                    
                    //this.crewOptions[1].alpha = 1;
                    //this.crewOptions[1].deployText.alpha = 1
                    //this.crewOptions[1].powerText.alpha = 1
                    //this.crewOptions[1].ability.alpha = 1
                    //this.crewOptions[1].name.alpha = 1; 
                    //this.treasureOptions[1].alpha = 1                    
                    
                    this.crewOptions[1].x = this.treasureOptions[1].x

                    
                    //this.treasureOptions[1].x = this.treasureOptions[1].origX
                    //this.treasureOptions[1].y += ( this.treasureOptions[1].targetY - this.treasureOptions[1].y) * 0.2;

                    //this.treasureOptions[1].x = this.treasureOptions[1].origX
                    
                    this.crewOptions[1].x = this.treasureOptions[1].x
                    this.crewOptions[1].y = this.treasureOptions[1].y-50
                    this.crewOptions[1].deployText.x = this.crewOptions[1].x-(this.crewOptions[1].width/2)+80
                    this.crewOptions[1].powerText.x = this.crewOptions[1].x+(this.crewOptions[1].width/2)-80
                    this.crewOptions[1].ability.x = this.crewOptions[1].x
                    this.crewOptions[1].name.x = this.crewOptions[1].x           
                    
                    this.crewOptions[1].deployText.y = this.crewOptions[1].y-(this.crewOptions[1].height/2)+145
                    this.crewOptions[1].powerText.y = this.crewOptions[1].y-(this.crewOptions[1].height/2)+135
                    this.crewOptions[1].ability.y = this.crewOptions[1].y+195
                    this.crewOptions[1].name.y = this.crewOptions[1].y +80                

                    if(this.getCapDetails){
                      this.crewOptions[1].deployText.y =this.crewOptions[1].y+(this.crewOptions[1].height/2)-55
                      this.crewOptions[1].deployText.x = this.crewOptions[1].x-(this.crewOptions[1].width/2)+70
                      this.crewOptions[1].ability.y = this.crewOptions[1].y+200
                      this.crewOptions[1].name.y = this.crewOptions[1].y +55    
                      this.crewOptions[1].x =this.treasureOptions[1].x
                    }
                    
                    this.treasureOptions[1].curseInc.alpha = 0;
                    this.treasureOptions[1].curseInc.y = this.treasureOptions[1].y 
                    this.treasureOptions[1].curseInc.x = this.treasureOptions[1].x      
                          

                    this.checkKeywords(this.crewOptions[1].ability)   
                    this.checkKeywords(this.crewOptions[1].name)         
                    
                    this.reRoll_Button.y = this.game.height+200;
                    this.reRoll_Text.y = this.reRoll_Button.y+20                    
                       
                  }
                  else if(this.removeFromCrew){
                    this.endTurn_Button.alpha = 0;
                    this.overlay.loadTexture('replaceArrow')
                    this.overlayText.text = "WHO WALKS THE PLANK?"
                    var blacnkCount = 0

                    this.crewOptions[0].statInc.alpha = 0
                    this.crewOptions[1].statInc.alpha = 0
                    this.crewOptions[2].statInc.alpha = 0

                    for(var b=1;b<6;b++){
                      
                      this.crew[b].isDeployed = false;
   

                      if(this.crew[b].wiggle){
                        
                        var ranX = Math.floor(Math.random() * 6)-3  
                        var ranY = Math.floor(Math.random() * 6)-3  
                        
                        this.crew[b].x = this.crew[b].origX+ranX
                        this.crew[b].y = this.crew[b].origY+ranY
                      }
                      else{
                        this.crew[b].x = this.crew[b].origX
                        this.crew[b].y = this.crew[b].origY
                      }

                      this.crew[b].deployText.y = this.crew[b].y+(this.crew[b].height/2)-28
                      this.crew[b].powerText.y  = this.crew[b].y+(this.crew[b].height/2)-28   
                        //add crew
                        if(this.crew[b].isBlank){
                          blacnkCount++
                          this.crew[b].loadTexture("crew_blank_add");  
                          this.crewRemove[b].alpha = 0;    
                          this.crew[b].deployText.alpha = 0;
                          this.crew[b].powerText.alpha = 0                                            
                        }
                        else{
                          if(b != 5){
                            this.crewRemove[b].alpha = 1; 
                            this.crew[b].deployText.alpha = 1;
                            this.crew[b].powerText.alpha = 1                                
                          }
                        }
                        //ditched
                        if(!this.ditch){
                          this.crewRemove[b].alpha = 0;      
                        }



                        //crew speech



                        if(this.crew[b].isTalking ){
                          this.crew[b].speechBubble.alpha += ( 1 - this.crew[b].speechBubble.alpha) * 0.2;
                        }
                        else{
                          this.crew[b].speechBubble.alpha += ( 0 - this.crew[b].speechBubble.alpha) * 0.2;
                        }

                        

                        if( this.crew[b].speechBubble.alpha > 0){
                          this.crew[b].speechBubble.y += ( this.crew[b].speechBubble.origY - this.crew[b].speechBubble.y) * 0.5;
                          //hide text
                          if(this.crew[b].speechBubble.alpha > 0.7){
                            this.crew[b].speechBubbleText.alpha = this.crew[b].speechBubble.alpha
                          }
                          else{
                            this.crew[b].speechBubbleText.alpha = 0
                          }                
                        }
                        else{
                          this.crew[b].speechBubble.y += ( (this.crew[b].speechBubble.origY+100) - this.crew[b].speechBubble.y) * 0.5;
                        }

                    }                    
                    //skip if space is in the party
                    if(blacnkCount > 0){
                      for(var i = 1; i < this.crew.length; i++){
                        this.crewSelect[i].alpha = 0; 
                      }           
                      this.addToCrew = true;
                      this.removeFromCrew = false;
                    }
                    this.crewOptions[0].alpha = 0;
                    this.crewOptions[0].deployText.alpha = 0
                    this.crewOptions[0].powerText.alpha = 0
                    this.crewOptions[0].ability.alpha = 0
                    this.crewOptions[0].name.alpha = 0

                    this.crewOptions[0].deployText.text = crew[this.crewOptions[0].value].deployCost
                    this.crewOptions[0].powerText.text = crew[this.crewOptions[0].value].origPower
                    this.crewOptions[0].ability.text = crew[this.crewOptions[0].value].ability

                    this.crewOptions[0].deployText.y = this.crewOptions[0].y+(this.crewOptions[0].height/2)-10
                    this.crewOptions[0].powerText.y = this.crewOptions[0].y+(this.crewOptions[0].height/2)-10
                    this.crewOptions[0].ability.y = this.crewOptions[0].y+150
                    this.crewOptions[0].statInc.y = this.crewOptions[0].y
                    this.crewOptions[0].y = this.treasureOptions[0].y                    

                    this.treasureOptions[0].loadTexture("treasure_rarity_no")
                    this.treasureOptions[0].x = this.treasureOptions[0].origX
                    this.treasureOptions[0].y += ( this.treasureOptions[0].targetY - this.treasureOptions[0].y) * 0.2;
                    this.treasureOptions[0].alpha = 0;

                    this.treasureOptions[0].curseInc.alpha = 0;
                    this.treasureOptions[0].curseInc.y = this.treasureOptions[0].y 
                    this.treasureOptions[0].curseInc.x = this.treasureOptions[0].origX

                    //this.crewOptions[1].alpha = 1;
                    //this.crewOptions[1].deployText.alpha = 1
                    //this.crewOptions[1].powerText.alpha = 1
                    //this.crewOptions[1].ability.alpha = 1
                    //this.crewOptions[1].name.alpha = 1

                    this.checkKeywords(this.crewOptions[1].ability)   
                    this.checkKeywords(this.crewOptions[1].name)     


                    
                    

                    this.treasureOptions[1].loadTexture("treasure_rarity_no")
                    this.treasureOptions[1].x = this.treasureOptions[1].origX
                    this.treasureOptions[1].y += ( this.treasureOptions[1].targetY - this.treasureOptions[1].y) * 0.2;
                    this.treasureOptions[1].alpha = 0;

                    this.treasureOptions[1].x = this.treasureOptions[0].origX+200

                    this.crewOptions[1].x = this.treasureOptions[1].x
                    this.crewOptions[1].y = this.treasureOptions[1].y-50
                    this.crewOptions[1].deployText.x = this.crewOptions[1].x-(this.crewOptions[1].width/2)+80
                    this.crewOptions[1].powerText.x = this.crewOptions[1].x+(this.crewOptions[1].width/2)-80
                    this.crewOptions[1].ability.x = this.crewOptions[1].x
                    this.crewOptions[1].name.x = this.crewOptions[1].x           
                    
                    this.crewOptions[1].deployText.y = this.crewOptions[1].y-(this.crewOptions[1].height/2)+145
                    this.crewOptions[1].powerText.y = this.crewOptions[1].y-(this.crewOptions[1].height/2)+135
                    this.crewOptions[1].ability.y = this.crewOptions[1].y+195
                    this.crewOptions[1].name.y = this.crewOptions[1].y +80                                  
                    
                    this.treasureOptions[1].curseInc.alpha = 0;
                    this.treasureOptions[1].curseInc.y = this.treasureOptions[1].y 
                    this.treasureOptions[1].curseInc.x = this.treasureOptions[1].x      
                          
                    
                    
                    this.crewOptions[2].alpha = 1;
                    this.crewOptions[2].deployText.alpha = 1
                    this.crewOptions[2].powerText.alpha = 1
                    this.crewOptions[2].ability.alpha = 1
                    this.crewOptions[2].name.alpha = 1;

                    var crewType = ""

                    switch(crew[this.crewOptions[2].value].type){
                      case 0:
                        crewType = "STEEL"
                        break;
                      case 1:
                        crewType ="SALT"
                        break;
                      case 2:
                        crewType = "SMOKE"
                        break;
                    }

                    this.crewOptions[2].deployText.text = crew[this.crewOptions[2].value].deployCost
                    this.crewOptions[2].powerText.text = crew[this.crewOptions[2].value].origPower
                    this.crewOptions[2].ability.text = crew[this.crewOptions[2].value].ability
                    this.crewOptions[2].name.text = crew[this.crewOptions[2].value].name+"\nTYPE: "+crewType
                  

                    this.treasureOptions[2].loadTexture("treasure_rarity_"+this.crewOptions[2].rarity)
                    this.treasureOptions[2].x = this.treasureOptions[2].origX
                    this.treasureOptions[2].y += ( this.treasureOptions[2].targetY - this.treasureOptions[2].y) * 0.2;
                    this.treasureOptions[2].alpha = 0;

                    this.treasureOptions[2].x = this.treasureOptions[2].origX-200

                    this.crewOptions[2].x = this.treasureOptions[2].x
                    this.crewOptions[2].deployText.x = this.crewOptions[2].x-(this.crewOptions[2].width/2)+80
                    this.crewOptions[2].powerText.x = this.crewOptions[2].x+(this.crewOptions[2].width/2)-80
                    this.crewOptions[2].ability.x = this.crewOptions[2].x
                    this.crewOptions[2].name.x = this.crewOptions[2].x      
                    
                   


                    this.treasureOptions[2].curseInc.alpha = 0;
                    this.treasureOptions[2].curseInc.y = this.treasureOptions[2].y 
                    this.treasureOptions[2].curseInc.x = this.treasureOptions[2].x          

                  }
                  else if(this.addToCrew){
                    this.endTurn_Button.alpha = 0;
                    this.overlayText.text = "INVITE ABOARD"
                    var dupe = -1
                    for(var b=1;b<6;b++){
                        //add crew
                        if(this.crew[b].isBlank){
                          blacnkCount++
                          this.crew[b].loadTexture("crew_blank_add");  
                          this.crewRemove[b].alpha = 0;    
                          this.crew[b].deployText.alpha = 0;
                          this.crew[b].powerText.alpha = 0                                            
                        }
                        else{
                          if(b != 5){
                            this.crewRemove[b].alpha = 1; 
                            this.crew[b].deployText.alpha = 1;
                            this.crew[b].powerText.alpha = 1                                
                          }
                        }
                      
                      this.crew[b].isDeployed = false;
                
                      //duplicates      
                      if(this.crewOptions[i].value == this.crew[b].id && crew[this.crew[b].id].upgradable){
                        this.crewOptions[i].statInc.alpha = 1;
                        dupe = i

                      }
                      if(this.crewOptions[i].value == this.crew[b].id && !crew[this.crew[b].id].upgradable){
                        //this.crewOptions[i].statInc.alpha = 1;
                        dupe = i

                      }                      
                      
                      this.crew[b].deployText.y = this.crew[b].y+(this.crew[b].height/2)-28
                      this.crew[b].powerText.y  = this.crew[b].y+(this.crew[b].height/2)-28   

                      

                        //add crew
                        /*
                        if(this.crew[b].isBlank ){
                          this.crew[b].loadTexture("crew_blank_add");  
                          this.crewRemove[b].alpha = 0;        
                          this.crew[b].deployText.alpha = 0;
                          this.crew[b].powerText.alpha = 0                                    
                        }
                        else{
                          //this.crew[b].loadTexture(this.crew[b].holdText); 
                          if(b != 5){
                            this.crewRemove[b].alpha = 1; 
                            this.crew[b].deployText.alpha = 1;
                            this.crew[b].powerText.alpha = 1                                
                          }
                          

                        }
                        */
                        this.crewRemove[b].alpha = 0;      
                        //ditched
                        if(!this.ditch){
                          this.crewRemove[b].alpha = 0;      
                        }

                        //crew speech


                        if(this.crew[b].isTalking ){
                          this.crew[b].speechBubble.alpha += ( 1 - this.crew[b].speechBubble.alpha) * 0.2;
                        }
                        else{
                          this.crew[b].speechBubble.alpha += ( 0 - this.crew[b].speechBubble.alpha) * 0.2;
                        }

                        

                        if( this.crew[b].speechBubble.alpha > 0){
                          this.crew[b].speechBubble.y += ( this.crew[b].speechBubble.origY - this.crew[b].speechBubble.y) * 0.5;
                          //hide text
                          if(this.crew[b].speechBubble.alpha > 0.7){
                            this.crew[b].speechBubbleText.alpha = this.crew[b].speechBubble.alpha
                          }
                          else{
                            this.crew[b].speechBubbleText.alpha = 0
                          }                
                        }
                        else{
                          this.crew[b].speechBubble.y += ( (this.crew[b].speechBubble.origY+100) - this.crew[b].speechBubble.y) * 0.5;
                        }

                    }
                    

                    this.crewOptions[i].alpha = 1;
                    this.crewOptions[i].deployText.alpha = 1
                    this.crewOptions[i].powerText.alpha = 1
                    this.crewOptions[i].ability.alpha = 1
                    this.crewOptions[i].name.alpha = 1;  



                    this.checkKeywords(this.crewOptions[i].ability)  
                    this.checkKeywords(this.crewOptions[i].name)     

                    var crewType = ""

                    switch(crew[this.crewOptions[i].value].type){
                      case 0:
                        crewType = "STEEL"
                        break;
                      case 1:
                        crewType ="SALT"
                        break;
                      case 2:
                        crewType = "SMOKE"
                        break;
                    }
                    
                    this.crewOptions[i].deployText.text = crew[this.crewOptions[i].value].deployCost
                    this.crewOptions[i].powerText.clearColors()
                    this.crewOptions[i].powerText.addColor("#FFF", 0) 
                    this.crewOptions[i].powerText.text = crew[this.crewOptions[i].value].origPower
                    this.crewOptions[i].ability.text = crew[this.crewOptions[i].value].ability
                    this.crewOptions[i].name.text = crew[this.crewOptions[i].value].name+"\nTYPE: "+crewType
                    

                    this.crewOptions[i].deployText.y = this.crewOptions[i].y+(this.crewOptions[i].height/2)-28
                    this.crewOptions[i].powerText.y = this.crewOptions[i].y+(this.crewOptions[i].height/2)-28
                    this.crewOptions[i].ability.y = this.crewOptions[i].y+150
               


                    this.crewOptions[i].y = this.treasureOptions[i].y-50
   
                    
                    this.crewOptions[i].deployText.y = this.crewOptions[i].y-(this.crewOptions[i].height/2)+145
                    this.crewOptions[i].powerText.y = this.crewOptions[i].y-(this.crewOptions[i].height/2)+135
                    this.crewOptions[i].ability.y = this.crewOptions[i].y+195
                    this.crewOptions[i].name.y = this.crewOptions[i].y +80                       
                    

                    //this.crewOptions[i].name.y = this.crewOptions[i].y-150
                    this.crewOptions[i].statInc.y = this.crewOptions[i].y
                    //this.crewOptions[i].y = this.treasureOptions[i].y                    

                    

                    this.treasureOptions[i].loadTexture("treasure_rarity_"+this.crewOptions[i].rarity)
                    // prevent popups
                    try{
                      this.delayShowInfoTimer.destroy();    
                    }
                    catch(e){

                    }                    
                    this.treasureOptions[i].y += ( this.treasureOptions[i].targetY - this.treasureOptions[i].y) * 0.2;
                   


                    this.crewOptions[i].loadTexture("bigCrew-"+this.crewOptions[i].value)

                    this.treasureOptions[i].curseInc.alpha = 0;
                    this.treasureOptions[i].curseInc.y = this.treasureOptions[i].y 
                    this.treasureOptions[i].curseInc.x = this.treasureOptions[i].origX

                    //show reroll in case of dupe
                    
                    if(dupe > -1){
                     
                      if(crew[this.crewOptions[dupe].value].upgradable){

                      }
                      else{
                        this.treasureOptions[dupe].loadTexture("treasure_rarity_1")
                        this.crewOptions[dupe].deployText.text = ""
                        this.crewOptions[dupe].powerText.text = ""
                        this.crewOptions[dupe].ability.text = "+1 RE-ROLL. SPEND TO RANDOMIZE CURRENT CHOICES"
                        this.crewOptions[dupe].name.text = "AN EXTRA RE-ROLL"
                        this.crewOptions[dupe].loadTexture("ui_reroll_button")
                      }

                    }

   
                    
                    //animate choice
                    if(this.sosSelected){
                      if(i == this.sosSelectedVal){
                        this.treasureSparkle.alpha = 0; 
                        var target = this.treasureOptions[2].origX-200;
                        this.treasureOptions[this.sosSelectedVal].x += ( target - this.treasureOptions[this.sosSelectedVal].x) * 0.1;

                        //this.treasureOptions[this.sosSelectedVal].x += ( 500 - this.treasureOptions[this.sosSelectedVal].x) * 0.2;
                        var dist = Math.abs((target)-this.treasureOptions[this.sosSelectedVal].x)      

                        
                        
                        if(dist < 15){
                          this.removeFromCrew = true;
                          this.addToCrew = false;
          
                          this.unShowInfo()
                          this.showInfo(this.crew[1]) 
                          this.sosSelected = false;
                        }
                        
                      }
                      else{
                        this.crewOptions[i].alpha = 0;
                        this.crewOptions[i].deployText.alpha = 0
                        this.crewOptions[i].powerText.alpha = 0
                        this.crewOptions[i].ability.alpha = 0
                        this.crewOptions[i].name.alpha = 0
                        this.treasureOptions[i].alpha = 0;                        
                      }

                    }  
                    else{
                      this.treasureOptions[i].x = this.treasureOptions[i].origX
                      
                    } 
                    this.crewOptions[i].x = this.treasureOptions[i].x
                    this.crewOptions[i].deployText.x = this.crewOptions[i].x-(this.crewOptions[i].width/2)+80
                    this.crewOptions[i].powerText.x = this.crewOptions[i].x+(this.crewOptions[i].width/2)-80     
                    this.crewOptions[i].ability.x = this.crewOptions[i].x
                    this.crewOptions[i].name.x = this.crewOptions[i].x   
                    
                   
                    
                    

                    if(parseInt(localStorage.getItem("intro")) == 8 ){
                      this.crewOptions[0].alpha = 0;
                      this.crewOptions[0].deployText.alpha = 0
                      this.crewOptions[0].powerText.alpha = 0
                      this.crewOptions[0].ability.alpha = 0
                      this.crewOptions[0].name.alpha = 0; 

                      this.crewOptions[2].alpha = 0;
                      this.crewOptions[2].deployText.alpha = 0
                      this.crewOptions[2].powerText.alpha = 0
                      this.crewOptions[2].ability.alpha = 0     
                      this.crewOptions[2].name.alpha = 0;      
                      
                      this.treasureOptions[0].alpha = 0
                      this.treasureOptions[2].alpha = 0
                      

                      this.crewOptions[1].value = 1//captain[this.capKey].firstMates[0] 
                      this.crewOptions[1].rarity = 3
                      this.treasureOptions[1].loadTexture("treasure_rarity_3")
                    }                    


                  }
                  else{
                    this.endTurn_Button.alpha = 1
                    this.treasureOptions[i].value = 1;
                    

                    if(this.monsterPool[this.treasureOptions[i].curseVal].count >= 1){
                      //this.treasureOptions[i].curseInc.alpha = 1;
                    }
                    else{
                      this.treasureOptions[i].curseInc.alpha = 0;
                    }

                    for(var ii = 1; ii < this.crew.length; ii++){
                      //this.crewSelect[ii].alpha = 0;
                    }                

                    this.treasureOptions[i].loadTexture("treasure_rarity_"+this.treasureOptions[i].rarity)
                    this.treasureOptions[i].treasureItem.loadTexture("treasureItem_"+this.treasureOptions[i].treasureItemVal)
                    this.treasureOptions[i].boon.text = "BOON: "+boons[this.treasureOptions[i].boonVal]
                    //this.treasureOptions[i].boon.loadTexture("treasureBoon_"+this.treasureOptions[i].rarity+"_"+this.treasureOptions[i].boonVal)
                    this.treasureOptions[i].curse.loadTexture("treasureCurse_base")//"treasureCurse_"+this.treasureOptions[i].curseVal)
      
                    this.treasureOptions[i].y += ( this.treasureOptions[i].targetY - this.treasureOptions[i].y) * 0.2;
                    this.treasureOptions[i].boon.y = this.treasureOptions[i].y+50 
                    this.treasureOptions[i].curse.y = this.treasureOptions[i].y 
                    this.treasureOptions[i].curseInc.y = this.treasureOptions[i].y 
                    this.treasureOptions[i].treasureItem.y = this.treasureOptions[i].y 

                    this.treasureOptions[i].x = this.treasureOptions[i].origX
                    this.treasureOptions[i].treasureItem.x = this.treasureOptions[i].origX
                    this.treasureOptions[i].boon.x = this.treasureOptions[i].origX
                    this.treasureOptions[i].curse.x = this.treasureOptions[i].origX

                    this.treasureOptions[i].curseInc.x = this.treasureOptions[i].origX
                    
                    for(var b=1;b<6;b++){

                        //crew speech



                        if(this.crew[b].isTalking ){
                          this.crew[b].speechBubble.alpha += ( 1 - this.crew[b].speechBubble.alpha) * 0.2;
                        }
                        else{
                          this.crew[b].speechBubble.alpha += ( 0 - this.crew[b].speechBubble.alpha) * 0.2;
                        }

                        

                        if( this.crew[b].speechBubble.alpha > 0){
                          this.crew[b].speechBubble.y += ( this.crew[b].speechBubble.origY - this.crew[b].speechBubble.y) * 0.5;
                          //hide text
                          if(this.crew[b].speechBubble.alpha > 0.7){
                            this.crew[b].speechBubbleText.alpha = this.crew[b].speechBubble.alpha
                          }
                          else{
                            this.crew[b].speechBubbleText.alpha = 0
                          }                
                        }
                        else{
                          this.crew[b].speechBubble.y += ( (this.crew[b].speechBubble.origY+100) - this.crew[b].speechBubble.y) * 0.5;
                        }

                    }  

                    if(parseInt(localStorage.getItem("intro")) == 8 ){
                      this.treasureOptions[0].loadTexture("treasure_rarity_no")
                      this.treasureOptions[0].x = -1000//this.treasureOptions[0].origX
                      this.treasureOptions[0].y += ( this.treasureOptions[0].targetY - this.treasureOptions[0].y) * 0.2;
                      this.treasureOptions[0].alpha = 0;
                      this.treasureOptions[0].treasureItem.alpha = 0;
                      this.treasureOptions[0].boon.alpha = 0;
                      this.treasureOptions[0].curse.alpha = 0;                      
  
                      this.treasureOptions[0].curseInc.alpha = 0;
                      this.treasureOptions[0].curseInc.y = this.treasureOptions[0].y 
                      this.treasureOptions[0].curseInc.x = this.treasureOptions[0].origX

                      this.treasureOptions[2].loadTexture("treasure_rarity_no")
                      this.treasureOptions[2].x = -1000//this.treasureOptions[0].origX
                      this.treasureOptions[2].y += ( this.treasureOptions[0].targetY - this.treasureOptions[0].y) * 0.2;
                      this.treasureOptions[2].alpha = 0;
                      this.treasureOptions[2].treasureItem.alpha = 0;
                      this.treasureOptions[2].boon.alpha = 0;
                      this.treasureOptions[2].curse.alpha = 0;                       
  
                      this.treasureOptions[2].curseInc.alpha = 0;
                      this.treasureOptions[2].curseInc.y = this.treasureOptions[0].y 
                      this.treasureOptions[2].curseInc.x = this.treasureOptions[0].origX      
                      

                    }                    
                
                  }

                  this.reRoll_Text.text = this.reRoll_Counter
                  //|| parseInt(localStorage.getItem("intro")) < 11
                  if(this.reRoll_Counter <= 0  ){
                    this.reRoll_Button.y = this.game.height+200;
                    this.reRoll_Text.y = this.reRoll_Button.y+20
                  }
                  else{
                    this.reRoll_Button.y = this.clear_Button.y
                    this.reRoll_Text.y = this.reRoll_Button.y+20
                    this.reRoll_Button_outline.y = this.reRoll_Button.y  
                  }

                  if(this.removeFromCrew){
                    //this.reRoll_Button.loadTexture('crewRemove_Button')
                    //this.reRoll_Button.width = 95
                    //this.reRoll_Button.height = 95;
                    this.reRoll_Button.alpha = 0;
                    this.reRoll_Text.alpha = 0;
                    this.removeCrew_Button_Text.text = "Choose New Crew"
                    
                  }
                  else if(this.addToCrew){
                    this.removeCrew_Button_Text.text = "Remove Crew"
                    this.reRoll_Button.alpha = 1;
                    this.reRoll_Text.alpha = 1;                         
                  }
                  else if(this.getTileDetails){
                    this.reRoll_Button.y = this.game.height+200;
                    this.reRoll_Text.y = this.reRoll_Button.y+20                    
                  }                  
                  else{
                    this.reRoll_Button.loadTexture('ui_reroll_button')
                    this.reRoll_Button.width = this.reRoll_Button_outline.width-5
                    this.reRoll_Button.height = this.reRoll_Button_outline.height-5   
                    this.reRoll_Button.alpha = 1;
                    this.reRoll_Text.alpha = 1;          
                  }

                  if(this.ditch && (this.removeFromCrew || this.addToCrew)){
                    this.reRoll_Button_outline.y = this.reRoll_Button.y   

                    if(parseInt(localStorage.getItem("intro")) > 10){
                      this.removeCrewSkip_Button.y = this.endTurn_Button.y
                    //hide skip if curse threshold is too low
                    var curseBreakPoint = curseLimit-(this.zone*200)-(this.skipPenalty*100)
                    if(curseBreakPoint <= 100){
                      curseBreakPoint = 100;
                      this.removeCrewSkip_Button.y =  this.game.height +300; 
                    }                      
                    }
                    

                    this.removeCrew_Button.alpha = 0;
                    this.removeCrew_Button.y =  this.reRoll_Button.y 
                    


                    this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
                    this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 

                  }
                  else{
                    this.reRoll_Button_outline.y = this.reRoll_Button.y 
                    this.removeCrewSkip_Button.y = this.game.height +300; 

                    this.removeCrew_Button.y =  this.game.height +300;                     
                    this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
                    this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 


                  }



                  
                } 
                /*
                if (parseInt(localStorage.getItem("intro")) == 2 ) {
                  this.overlayText.text = ""
                  this.treasureOptions[0].alpha = 0;
                  this.treasureOptions[0].treasureItem.alpha = 0;
                  this.treasureOptions[0].boon.alpha = 0;
                  this.treasureOptions[0].curse.alpha = 0;
                  this.treasureOptions[0].curseInc.alpha = 0;

                  this.treasureOptions[1].alpha = 0;
                  this.treasureOptions[1].treasureItem.alpha = 0;
                  this.treasureOptions[1].boon.alpha = 0;
                  this.treasureOptions[1].curse.alpha = 0;
                  this.treasureOptions[1].curseInc.alpha = 0;

                  this.treasureOptions[2].alpha = 0;
                  this.treasureOptions[2].treasureItem.alpha = 0;
                  this.treasureOptions[2].boon.alpha = 0;
                  this.treasureOptions[2].curse.alpha = 0;           
                  this.treasureOptions[2].curseInc.alpha = 0;     
                }   
                */            
              }                
              
                      
            }
          }
          else{
            this.hitStop--
          }


            

          
                    

        }
        ,nextLevel: function(){
          
          this.monCountValue = this.monCountValue*2
          this.monKillCount = 0;
          this.bounty += 10
          this.bossDead = false;
          if(this.zone < 4){
            localStorage.setItem("zone", this.zone+1)
          }
          else{
            localStorage.setItem("zone", 1)  
          }
          
          this.bgSound.stop();
          this.transWaveKey = 1

          this.changeWave();
          
          this.transTar = 'game'               
          this.saveStats();
        }
        , skipPlank: function(){

          this.skipPenalty++;
          this.pauseFight = 100;

          this.removeCrewSkip_Button.width -= 25;
          this.removeCrewSkip_Button.height -= 25;
          this.unShowInfo()
          this.showMarker(1000,3000)
          this.turnMarkerText.text = "YOUR TURN"                
          this.turnWait = turnWaitBase; 
          this.deploy_poolCurrent = this.deploy_poolMax; 
          this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax

          this.chatTimer = 0;
          this.removeFromCrew = false; 
          this.addToCrew = false;            

          

          this.removeCrew_Button.y =  this.game.height +300;                     
          this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
          this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 

          this.removeCrewSkip_Button.y = this.game.height +300;  
          //console.log("after skip plank") 
          this.startNextZone();          
    
        }
        ,walkPlank: function(){
          this.crewOptions[0].statInc.alpha = 0;
          this.crewOptions[1].statInc.alpha = 0;
          this.crewOptions[2].statInc.alpha = 0;    
          
          for(var i=0; i < 3; i++){
            this.crewOptions[i].alpha = 0;
            this.crewOptions[i].deployText.alpha = 0
            this.crewOptions[i].powerText.alpha = 0
            this.crewOptions[i].ability.alpha = 0
            this.crewOptions[i].name.alpha = 0; 
          }

          for(var i = 1; i < this.crew.length; i++){
            this.crewSelect[i].alpha = 0;   
          }

          this.unShowInfo()
                   

          if(this.removeFromCrew){
            this.removeFromCrew = false;
            this.addToCrew = true;
          }
          else if(this.addToCrew){
            this.removeFromCrew = true;
            this.addToCrew = false;
            //this.showInfo(this.crew[4])
          }          

        }
        ,spawnCurse: function(x,y){        
          for(var i = 0; i < this.curseParticleCount; i++){
            if(this.curseParticle[i].alpha == 0){

              var ran = Math.floor(Math.random() * 4)+1;
              this.curseSnd[ran].play() 

              this.curseParticle[i].alpha = 1;
              var variance = 100
              var displaceX =Math.floor(Math.random() * variance)-(variance/2);
              var displaceY =Math.floor(Math.random() * variance)-(variance/2);
              var speed = (Math.random()*0.1)+0.08;
              this.curseParticle[i].x = x + displaceX
              this.curseParticle[i].y = y + displaceY


              this.curseParticle[i].waitTimer = -10;
              ran = Math.floor(Math.random() * 200)+100;
              var tweenA = this.add.tween(this.curseParticle[i]).from( { waitTimer:50+ran }, 500, Phaser.Easing.Default, true);     

 
              var currentY = this.curseParticle[i].y
              var currentX = this.curseParticle[i].x

              this.curseParticle[i].y = this.chestUI.y
              this.curseParticle[i].x = this.chestUI.x

              var tweenB = this.add.tween(this.curseParticle[i]).from( { y: currentY }, 1000, Phaser.Easing.Elastic.In, true);
              var tweenC = this.add.tween(this.curseParticle[i]).from( { x: currentX }, 1000, Phaser.Easing.Elastic.In, true);     
              
              tweenA.chain(tweenB,tweenC)












              this.curseParticle[i].speed = speed
              i = this.curseParticleCount;
            }
          }          
        }        
        ,spawnBuff: function(tile,buff){       
          
          tile.buff.loadTexture(buff)
          
          tile.buff.x = tile.x
          tile.buff.y = tile.y;    
          
          tile.buff.alpha = 0
          this.add.tween(tile.buff).from( { alpha:1 }, 1000, Phaser.Easing.Default, true);  
          
          tile.buff.y = tile.y-100
          this.add.tween(tile.buff).from( { y:tile.y }, 2000, Phaser.Easing.Default, true);            

        }        
        ,spawnAttack: function(source,target,waitTimer){  
          var particleKey = 0;
          if(waitTimer == 0){
            waitTimer = 1;
          }
          for(var i = 0; i < this.attackParticleCount; i++){
            if(this.attackParticle[i].alpha == 0){

              var ran = Math.floor(Math.random() * 2)+1;
              this.monAttackSnd[ran].play();

              this.attackParticle[i].alpha = 1;
              particleKey = i;
              this.attackParticle[i].originY = source.y
              this.attackParticle[i].originX = source.x
              this.attackParticle[i].source = source
              this.attackParticle[i].target = target

              if(target == undefined){
                this.attackParticle[i].alpha = 0;
              }
              else{
                this.attackParticle[i].tarX = target.x
                this.attackParticle[i].tarY = target.y
              }     

              var speed = 0.09;
              this.attackParticle[i].x = source.x
              this.attackParticle[i].y = source.y
              if(waitTimer == undefined){
                waitTimer = 50
              }

              this.attackParticle[i].waitTimer = -10;
              var pi = Math.PI;


              var comX = this.attackParticle[i].x-this.attackParticle[i].tarX//this.game.input.mousePointer.x
              var comY = this.attackParticle[i].y-this.attackParticle[i].tarY//this.game.input.mousePointer.y
              var radianAngle= Math.atan2( comY, comX )
              var angleConst = -90
              this.attackParticle[i].angle = angleConst+(radianAngle* (180/pi));

              this.add.tween(this.attackParticle[i]).from( { angle:-360 }, 1000, Phaser.Easing.Elastic.Out, true); 

              var tweenA = this.add.tween(this.attackParticle[i]).from( { waitTimer:waitTimer }, 1500, Phaser.Easing.Default, true);     

 

              var currentY = this.attackParticle[i].y
              var currentX = this.attackParticle[i].x

              this.attackParticle[i].y = this.attackParticle[i].tarY
              this.attackParticle[i].x = this.attackParticle[i].tarX

              var tweenB = this.add.tween(this.attackParticle[i]).from( { y: currentY }, 1700, Phaser.Easing.Elastic.In, true);
              var tweenC = this.add.tween(this.attackParticle[i]).from( { x: currentX }, 1700, Phaser.Easing.Elastic.In, true);     
              
              tweenA.chain(tweenB,tweenC)

              this.attackParticle[i].speed = speed
              i = this.attackParticleCount;

           

                //attack ripple
                //this.resetRipple();
                //source.rippleTrig = 1
                //source.rippleDir = 0;                
            }
          }  
          

          //don't spawn for invalid targets
          if(target != undefined && (source.isCrewHere ) ){
            if(!((target.isEnemyHere && ((!target.submerged))) || (target.isEnemyHere && !target.isCrewHere && ((target.submerged)) && (source.crewID == 81 || source.crewID == 57) ))){
              this.attackParticle[particleKey].alpha = 0;
            }   
            //allow crew to attack captain
            if(source.crewID == 62 && target.x == this.cap_health.x && target.y == this.cap_health.y){
              this.attackParticle[particleKey].alpha = 1;
            }
          }
         
                
        }    
        ,changeWaveDown: function(){
          this.transWave.y = this.game.height
          this.add.tween(this.transWave).from( { y:-this.game.height }, 1000, Phaser.Easing.Default, true);               
        }           
        ,changeWave: function(){
          this.transWave.y = -this.game.height+50
          this.add.tween(this.transWave).from( { y:this.game.height }, 1000, Phaser.Easing.Default, true);               
        }   
        ,lookAtBoard: function(start,end, target){
          var animSpeed = 25
          var tweenA = this.add.tween(this.boardView).to({ alpha:1 }, 400, Phaser.Easing.Default, true); 
          this.boardView.loadTexture("desk"+(start))  

          if(this.boardView.alpha < 1){
            tweenA.onComplete.addOnce(function(){
              this.timer = this.game.time.create(true);  
              this.timer.add(animSpeed, function(){       
              if(start < end){
                start += 1
                this.lookAtBoard(start,end, target)
              }
              else if(start > end){
                start -= 1
                this.lookAtBoard(start,end, target)
              } 
              else if(start == end){
                this.transTar = target
                this.timer = this.game.time.create(true);  
                this.timer.add(200, function(){       
                  this.game.state.start(this.transTar);  
                },this);
                this.timer.start();           
              }               
              },this);
              this.timer.start();          
            }, this);         
            tweenA.start();  
          }
          else if(this.boardView.alpha == 1){
            this.timer = this.game.time.create(true);  
            this.timer.add(animSpeed, function(){       
                
              if(start < end){
                start += 1
                this.lookAtBoard(start,end, target)
              }
              else if(start > end){
                start -= 1
                this.lookAtBoard(start,end, target)
              } 
              else if(start == end){
                this.transTar = target
                this.timer = this.game.time.create(true);  
                this.timer.add(200, function(){       
                  this.game.state.start(this.transTar);  
                },this);
                this.timer.start();        
              }              
            },this);
            this.timer.start();    
          }


        
          /*  
          tweenA.onComplete.addOnce(function(){
            this.timerA = this.game.time.create(true);  
            this.timerA.add(200, function(){       
              this.boardView.loadTexture("desk2")
              this.timer = this.game.time.create(true);
              this.timer.add(200, function(){
                this.boardView.loadTexture("desk3")   
                this.timer2 = this.game.time.create(true);
                this.timer2.add(200, function(){
                  this.boardView.loadTexture("desk4")    
                  this.timer3 = this.game.time.create(true);  
                  this.timer3.add(500, function(){       
                    this.transTar = 'game' 
                    this.game.state.start(this.transTar);
                  },this);
                  this.timer3.start();               
                },this);
                this.timer2.start();                    
              },this);
              this.timer.start();            
            },this);
            this.timerA.start();          
            
    

          }, this);        
          tweenA.start(); 
          */ 
          //this.transWave.y = -this.game.height+50
          //this.add.tween(this.transWave).from( { y:this.game.height }, 1000, Phaser.Easing.Default, true);               
        }             
        ,selectTreasure: function(treasureRef){
          
          var treasure = this.treasureOptions[treasureRef.id]
          if(!this.getTileDetails){
            if(treasure.alpha == 1 || this.addToCrew || this.removeFromCrew){
              if(this.removeFromCrew){
        
              }
              else if(this.addToCrew){
                this.decideSnd.play();


                this.deploy_poolCurrent = this.deploy_poolMax; 

                this.removeCrew_Button.y =  this.game.height +300;                     
                this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
                this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 
      
                this.removeCrewSkip_Button.y = this.game.height +300;       

    
                

                

                var emptyCount = 0;
                var dupe = -1;
                for(var b=1;b<6;b++){
                  if(this.crew[b].isBlank){
                    emptyCount++;
                  }
                  if(this.crewOptions[treasureRef.id].value == this.crew[b].id ){
                    dupe = b;
                  }
                }    
                //force true
                emptyCount = 1;          
                if(emptyCount <= 0 && dupe == -1){
                  var ran = Math.floor(Math.random() * 4)+1
                  this.unShowInfo()
                  this.crewSpeak(ran,"One of us has to go,\nCaptain!",quickspeechTimerBase)
                }
                else if(dupe > -1 && crew[this.crewOptions[treasureRef.id].value].upgradable){
                  
                  this.crew[dupe].deployCost -= 1
                  if(this.crew[dupe].deployCost < 0){
                    this.crew[dupe].deployCost = 0;
                  }
                  
                  this.crew[dupe].origDeployCost = this.crew[dupe].deployCost                
                  this.crew[dupe].origPower += 1
                  //this.crew[dupe].origPower = this.crew[dupe].power
                  this.returnOrig(treasure)
                  this.treasureSparkle.alpha = 0;     
                  this.unShowInfo()

                  this.crewSpeak(dupe,"I'm feel'n right chipper,\nCaptain!", quickspeechTimerBase)
                  this.chatTimer = 0;
                  this.removeFromCrew = false; 
                  this.addToCrew = false; 
                  this.startNextZone();

                  try{
                    if (!client.achievement.isActivated('UPGRADE')) {
                      client.achievement.activate('UPGRADE')
                    } 
                  }
                  catch(e){

                  }                   

                  this.crew[dupe].powerUpParticle.x = this.crew[dupe].powerText.x
                  this.crew[dupe].powerUpParticle.y = this.crew[dupe].powerText.y
                  this.crew[dupe].powerUpParticle.makeParticles('sparkle');
                  this.crew[dupe].powerUpParticle.setScale(1, 1, 1, 1);                  
                  this.crew[dupe].powerUpParticle.maxParticleSpeed.set(100,100);
                  this.crew[dupe].powerUpParticle.explode(500);    
                  /* 
                  this.returnOrig(treasure)
                  this.treasureSparkle.alpha = 0;     
                  this.unShowInfo()
                  this.crew[dupe].loyaty++;
                  this.crewSpeak(dupe,"I'm with you to the end, Captain!")
                  this.crew[dupe].speechTimer = quickspeechTimerBase
                  this.chatTimer = 0;
                  this.removeFromCrew = false; 
                  this.addToCrew = false;                  
                 */
                  
                }
                else if(dupe > -1 && !crew[this.crewOptions[treasureRef.id].value].upgradable){
                  /*
                  this.crew[dupe].deployCost -= 1
                  if(this.crew[dupe].deployCost < 0){
                    this.crew[dupe].deployCost = 0;
                  }
                  
                  this.crew[dupe].origDeployCost = this.crew[dupe].deployCost                
                  this.crew[dupe].origPower += 1
                  //this.crew[dupe].origPower = this.crew[dupe].power
                  this.returnOrig(treasure)
                  this.treasureSparkle.alpha = 0;     
                  this.unShowInfo()

                  this.crewSpeak(dupe,"I'm feel'n right chipper,\nCaptain!")
                  this.crew[dupe].speechTimer = 100
                  this.chatTimer = 0;
                  this.removeFromCrew = false; 
                  this.addToCrew = false; 

                  this.crew[dupe].powerUpParticle.x = this.crew[dupe].powerText.x
                  this.crew[dupe].powerUpParticle.y = this.crew[dupe].powerText.y
                  this.crew[dupe].powerUpParticle.makeParticles('sparkle');
                  this.crew[dupe].powerUpParticle.setScale(1, 1, 1, 1);                  
                  this.crew[dupe].powerUpParticle.maxParticleSpeed.set(100,100);
                  this.crew[dupe].powerUpParticle.explode(500);    
                  */    
                  this.reRoll_Counter++
                  this.returnOrig(treasure)
                  this.treasureSparkle.alpha = 0;     
                  this.unShowInfo()
                  this.chatTimer = 0;
                  this.removeFromCrew = false; 
                  this.addToCrew = false;                   
                 
                  
                }                
                else{
                  var idHolder = this.crewOptions[treasureRef.id].value


                  if(!this.sosSelected){
                    this.sosSelected = true;
                    this.sosSelectedVal = treasureRef.id

                    this.crewOptions[0].statInc.alpha = 0
                    this.crewOptions[1].statInc.alpha = 0
                    this.crewOptions[2].statInc.alpha = 0                  
                  }

                  this.crewOptions[2].value = idHolder;
                  this.crewOptions[2].loadTexture("crew-"+idHolder)
                  this.crewOptions[2].deployText.text = crew[idHolder].deployCost
                  this.crewOptions[2].powerText.text = crew[idHolder].origPower
                  this.crewOptions[2].ability.text = crew[idHolder].ability
                  this.crewOptions[2].rarity = this.crewOptions[treasureRef.id].rarity
                  
                  
                  //this.removeFromCrew = true;
                  //this.addToCrew = false;

                  this.unShowInfo()
                  
                  //this.showInfo(this.crew[1])
                  //this.crewOptions[2].name.text = crew[idHolder].name+"\nTYPE: "+crewType
                  /*
                  var i = this.crewOptionKey;
      

                  this.crew[i].id = this.crewOptions[treasureRef.id].value
                  if(localStorage.getItem("crew"+this.crew[i].id+"loyalty") === null){
                    localStorage.setItem("crew"+this.crew[i].id+"loyalty",0)
                    
                  } 
                  var loyaltyCounter = parseInt(localStorage.getItem("crew"+this.crew[i].id+"loyalty"))                    
                  this.crew[i].isBlank = false;

                  this.crew[i].loadTexture("crew-"+this.crew[i].id)
                  this.crew[i].holdText = this.crew[i].texture
                  this.crew[i].deployCost = crew[this.crew[i].id].loyaltyDeployCost[loyaltyCounter];
                  this.crew[i].origDeployCost = this.crew[i].deployCost
                  this.crew[i].name = crew[this.crew[i].id].name
                  this.crew[i].power = crew[this.crew[i].id].loyaltyPower[loyaltyCounter];
                  this.crew[i].origPower = this.crew[i].power
                  this.crew[i].attackPattern = crew[this.crew[i].id].attackPattern
                  this.crew[i].type = crew[this.crew[i].id].type // 0- steel, 1 - salt, 2 -smoke
                  this.crew[i].ability  = crew[this.crew[i].id].ability
                  this.crewOptionKey++

                  this.unShowInfo()
                  
                  this.crewSpeak(i,"Thanks for having me on board,\nCaptain!")
                  this.crew[i].speechTimer = 100
                  
                  this.chatTimer = 0;
                  this.removeFromCrew = false; 
                  this.addToCrew = false; 

                  if (parseInt(localStorage.getItem("intro")) == 1 || onboardingDebug ) {
                  
                    this.treasureSparkle.alpha = 0;     

                    this.crewOptions[0].alpha = 0;
                    this.crewOptions[0].statInc.alpha = 0;
                    this.crewOptions[0].deployText.alpha = 0
                    this.crewOptions[0].powerText.alpha = 0
                    this.crewOptions[0].ability.alpha = 0
                    this.crewOptions[0].name.alpha = 0; 


                    this.crewOptions[1].alpha = 0;
                    this.crewOptions[1].statInc.alpha = 0;
                    this.crewOptions[1].deployText.alpha = 0
                    this.crewOptions[1].powerText.alpha = 0
                    this.crewOptions[1].ability.alpha = 0     
                    this.crewOptions[1].name.alpha = 0;  

                    this.crewOptions[2].alpha = 0;
                    this.crewOptions[2].statInc.alpha = 0;
                    this.crewOptions[2].deployText.alpha = 0
                    this.crewOptions[2].powerText.alpha = 0
                    this.crewOptions[2].ability.alpha = 0     
                    this.crewOptions[2].name.alpha = 0;      
                    
                    this.treasureOptions[0].alpha = 0
                    this.treasureOptions[1].alpha = 0
                    this.treasureOptions[2].alpha = 0

                    this.chatTimer = 1;
                    this.tutorialPause = true;     
                    
                    this.overlayText.text = ""

                    this.chatTimer = 1;
                    this.squawk.play();
                    Swal.fire({
                      title: "You're Ready To Set Sail!",
                      text: "In order to complete your voyage you need to kill "+this.monCountValue+" creeps.",
                      imageUrl: 'assets/mascot.webp',
                      imageWidth: 200,
                      imageHeight: 200,
                      allowOutsideClick: false,
                      allowEscapeKey: false                      
        
                    }).then((result) => {
                      this.chatTimer = 0;
                      this.tutorialPause = false; 
                      localStorage.setItem("intro",3);                   
        
                    })               
                  } 

                  if(parseInt(localStorage.getItem("intro")) == 9){

                    this.treasureSparkle.alpha = 0;     

                    this.crewOptions[0].alpha = 0;
                    this.crewOptions[0].statInc.alpha = 0;
                    this.crewOptions[0].deployText.alpha = 0
                    this.crewOptions[0].powerText.alpha = 0
                    this.crewOptions[0].ability.alpha = 0
                    this.crewOptions[0].name.alpha = 0; 


                    this.crewOptions[1].alpha = 0;
                    this.crewOptions[1].statInc.alpha = 0;
                    this.crewOptions[1].deployText.alpha = 0
                    this.crewOptions[1].powerText.alpha = 0
                    this.crewOptions[1].ability.alpha = 0     
                    this.crewOptions[1].name.alpha = 0;  

                    this.crewOptions[2].alpha = 0;
                    this.crewOptions[2].statInc.alpha = 0;
                    this.crewOptions[2].deployText.alpha = 0
                    this.crewOptions[2].powerText.alpha = 0
                    this.crewOptions[2].ability.alpha = 0     
                    this.crewOptions[2].name.alpha = 0;      
                    
                    this.treasureOptions[0].alpha = 0
                    this.treasureOptions[1].alpha = 0
                    this.treasureOptions[2].alpha = 0

                    this.chatTimer = 1;
                    this.tutorialPause = true;     
                    
                    this.overlayText.text = ""

                    this.overlay.loadTexture('bgOverlay_board')                   
                    Swal.fire({
                      title: 'Stay on your toes!',
                      text: "Creeps can appear SUBMERGED and surface on their next turn. BLOCK this by deploying crew on the space",
                      imageUrl: 'assets/tut_block.webp',
                      backdrop: false,
                      imageWidth: 300,
                      imageHeight: 300,
                      allowOutsideClick: false,
                      allowEscapeKey: false                          
                    }).then((result) => {
                      localStorage.setItem("intro",10);
                      this.chatTimer = 0;
                      this.tutorialPause = false;  
                      this.treasureSparkle.alpha = 0;
        
        
                    })     
                  }                 

                  this.returnOrig(treasure)
                  this.treasureSparkle.alpha = 0;       
                  */       
                }

              }
              else{
                this.decideSnd.play();

                this.returnOrig(treasure)
                this.treasureSparkle.alpha = 0;
                
                try{

                  if(treasure.value != 200 && treasure.value != 201){

                    /*
                    switch(this.zone){
                      case 1:
                          
                        if(this.turnCountNum >= 5){
                          this.monsterPool[2].count++    
                        }
                        else{
                          this.monsterPool[1].count++   
                        }
                        break;
                      case 2:  
                        if(this.turnCountNum >= 5){
                          this.monsterPool[5].count++    
                        }  
                        else{
                          this.monsterPool[4].count++   
                        }                      
                        break; 
                      case 3:
                           
                        if(this.turnCountNum >= 5){
                          this.monsterPool[8].count++    
                        }  
                        else{
                          this.monsterPool[7].count++  
                        }                      
                        break;
                      case 4:
                        break;                                                  
                    }           
                    */         
                    //this.monsterPool[treasure.curseVal].count++
                    this.scoreCountHolder += 100;
                    if(treasure.selectedCrew1 < 10){
                      this.curseCrewAnim.play()

                      this.crew[treasure.selectedCrew1].curseVal+= 2
                      this.crew[treasure.selectedCrew1].width-=50;
                      this.crew[treasure.selectedCrew1].height+=50;
                      this.crew[treasure.selectedCrew1].cursed.animations.play('poof', 8, false); 
                      this.crew[treasure.selectedCrew1].tintTimer = 50;
                      this.crew[treasure.selectedCrew1].tint = "0x800080"   
                      
  
                      this.crew[treasure.selectedCrew2].curseVal+= 2
                      this.crew[treasure.selectedCrew2].width-=50;
                      this.crew[treasure.selectedCrew2].height+=50;  
                      this.crew[treasure.selectedCrew2].cursed.animations.play('poof', 8, false);    
                      this.crew[treasure.selectedCrew2].tintTimer = 50;
                      this.crew[treasure.selectedCrew2].tint = "0x800080"                       
                    }
                    else{
                      for(var j=1; j < 4; j++){
                        //this.crew[j].curseVal+= 2
                        //this.crew[j].width-=50;
                        this.crew[j].height+=50;
                      } 
                    }
                  
                  }

                }
                catch(e){
                  //console.log("error: "+e)
                }
                ;
                //this.scoreCountNum += 100*treasure.value;
                //in case you want to balance score/gold individually
                
                var calBoon = parseInt(''+treasure.rarity+treasure.boonVal)
                //port override
                if(treasure.value == 200 || treasure.value == 201){
                  calBoon = treasure.value
                }
                switch(calBoon){
                  case 10:
                    this.healthCount+= 5
                    this.healCaptain(5)                    
                    break;
                  case 11:
                    this.deploy_poolMax += 1
                    this.deploy_poolCurrent = this.deploy_poolMax    
                    this.savvyGained++
                    //Jabari unlock
                    if(this.savvyGained >= 8){
                      this.unlockCrewmate(5)
                    }                                     
                    break;
                  case 12:
                    this.freeCounter[6].num += 2
                    this.harpoonsGained+=2
                    //Amazi unlock
                    if(this.harpoonsGained >= 10){
                      this.unlockCrewmate(59)
                    }                       
                    this.freeCounter[6].counter2.alpha = 1
                    this.freeCounter[6].counter2.text = "+2🔱"                     
                    break;
                  case 13:
                    this.freeCounter[5].num += 1
                    this.bombsGained++   
                    //Hina unlock
                    if(this.bombsGained >= 10){
                      this.unlockCrewmate(48)
                    }       
                    //Rin unlock
                    if(this.bombsGained >= 20){
                      this.unlockCrewmate(47)
                    }                                    
                    this.freeCounter[5].counter2.alpha = 1
                    this.freeCounter[5].counter2.text = "+1💣"                
                    break;
                  case 14:
                    this.reRoll_Counter++
                    break;
                  case 15:
                    this.crew[treasure.selectedCrew1].origPower+=1
                    this.crew[treasure.selectedCrew1].powerUpParticle.x = this.crew[treasure.selectedCrew1].powerText.x
                    this.crew[treasure.selectedCrew1].powerUpParticle.y = this.crew[treasure.selectedCrew1].powerText.y
                    this.crew[treasure.selectedCrew1].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew1].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew1].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew1].powerUpParticle.explode(500);        

                    this.crew[treasure.selectedCrew2].origPower+=1
                    this.crew[treasure.selectedCrew2].powerUpParticle.x = this.crew[treasure.selectedCrew2].powerText.x
                    this.crew[treasure.selectedCrew2].powerUpParticle.y = this.crew[treasure.selectedCrew2].powerText.y
                    this.crew[treasure.selectedCrew2].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew2].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew2].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew2].powerUpParticle.explode(500);                            
                    break;
                  case 16:
                    this.crew[treasure.selectedCrew1].origDeployCost -= 1
                    if(this.crew[treasure.selectedCrew1].origDeployCost < 0){
                      this.crew[treasure.selectedCrew1].origDeployCost = 0;
                    }                    
                    this.crew[treasure.selectedCrew1].powerUpParticle.x = this.crew[treasure.selectedCrew1].deployText.x
                    this.crew[treasure.selectedCrew1].powerUpParticle.y = this.crew[treasure.selectedCrew1].deployText.y
                    this.crew[treasure.selectedCrew1].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew1].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew1].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew1].powerUpParticle.explode(500);        

                    this.crew[treasure.selectedCrew2].origDeployCost -= 1
                    if(this.crew[treasure.selectedCrew2].origDeployCost < 0){
                      this.crew[treasure.selectedCrew2].origDeployCost = 0;
                    }
                    this.crew[treasure.selectedCrew2].powerUpParticle.x = this.crew[treasure.selectedCrew2].deployText.x
                    this.crew[treasure.selectedCrew2].powerUpParticle.y = this.crew[treasure.selectedCrew2].deployText.y
                    this.crew[treasure.selectedCrew2].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew2].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew2].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew2].powerUpParticle.explode(500);                       
                    break; 
                  case 27:
                    this.healthCount+= 10
                    this.healCaptain(10)                    
                    break;
                  case 28:
                    this.deploy_poolMax += 2
                    //Jabari unlock
                    if(this.savvyGained >= 8){
                      this.unlockCrewmate(5)
                    }                       
                    this.deploy_poolCurrent = this.deploy_poolMax                    
                    break;
                  case 29:
                    this.freeCounter[6].num += 3
                    this.harpoonsGained+=3   
                    //Amazi unlock
                    if(this.harpoonsGained >= 10){
                      this.unlockCrewmate(59)
                    }                       
                    this.freeCounter[6].counter2.alpha = 1
                    this.freeCounter[6].counter2.text = "+3🔱"                     
                    break;
                  case 210:
                    this.freeCounter[5].num += 2
                    this.bombsGained+= 2
                    //Hina unlock
                    if(this.bombsGained >= 10){
                      this.unlockCrewmate(48)
                    }        
                    //Rin unlock
                    if(this.bombsGained >= 20){
                      this.unlockCrewmate(47)
                    }                                      
                    this.freeCounter[5].counter2.alpha = 1
                    this.freeCounter[5].counter2.text = "+2💣"                
                    break;
                  case 211:
                    this.reRoll_Counter+=2
                    break;
                  case 212:
                    this.crew[treasure.selectedCrew1].origPower+=2
                    this.crew[treasure.selectedCrew1].powerUpParticle.x = this.crew[treasure.selectedCrew1].powerText.x
                    this.crew[treasure.selectedCrew1].powerUpParticle.y = this.crew[treasure.selectedCrew1].powerText.y
                    this.crew[treasure.selectedCrew1].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew1].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew1].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew1].powerUpParticle.explode(500);        

                    this.crew[treasure.selectedCrew2].origPower+=2
                    this.crew[treasure.selectedCrew2].powerUpParticle.x = this.crew[treasure.selectedCrew2].powerText.x
                    this.crew[treasure.selectedCrew2].powerUpParticle.y = this.crew[treasure.selectedCrew2].powerText.y
                    this.crew[treasure.selectedCrew2].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew2].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew2].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew2].powerUpParticle.explode(500);                            
                    break;
                  case 213:
                    this.crew[treasure.selectedCrew1].origDeployCost -= 2
                    if(this.crew[treasure.selectedCrew1].origDeployCost < 0){
                      this.crew[treasure.selectedCrew1].origDeployCost = 0;
                    }                    
                    this.crew[treasure.selectedCrew1].powerUpParticle.x = this.crew[treasure.selectedCrew1].deployText.x
                    this.crew[treasure.selectedCrew1].powerUpParticle.y = this.crew[treasure.selectedCrew1].deployText.y
                    this.crew[treasure.selectedCrew1].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew1].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew1].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew1].powerUpParticle.explode(500);        

                    this.crew[treasure.selectedCrew2].origDeployCost -= 2
                    if(this.crew[treasure.selectedCrew2].origDeployCost < 0){
                      this.crew[treasure.selectedCrew2].origDeployCost = 0;
                    }
                    this.crew[treasure.selectedCrew2].powerUpParticle.x = this.crew[treasure.selectedCrew2].deployText.x
                    this.crew[treasure.selectedCrew2].powerUpParticle.y = this.crew[treasure.selectedCrew2].deployText.y
                    this.crew[treasure.selectedCrew2].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew2].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew2].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew2].powerUpParticle.explode(500);                       
                    break;   
                  case 314:
                    for(var j=1; j < this.crew.length; j++){
                      if(this.crew[j].type == 0){
                        this.crew[j].origPower += 1
                        this.crew[j].powerUpParticle.makeParticles('sparkle');
                        this.crew[j].powerUpParticle.setScale(1, 1, 1, 1);                  
                        this.crew[j].powerUpParticle.maxParticleSpeed.set(100,100);
                        this.crew[j].powerUpParticle.explode(500);                           
                      }
                    }                     
                    break;
                  case 315:
                    for(var j=1; j < this.crew.length; j++){
                      if(this.crew[j].type == 2){
                        this.crew[j].origPower += 1
                        this.crew[j].powerUpParticle.makeParticles('sparkle');
                        this.crew[j].powerUpParticle.setScale(1, 1, 1, 1);                  
                        this.crew[j].powerUpParticle.maxParticleSpeed.set(100,100);
                        this.crew[j].powerUpParticle.explode(500);                           
                      }
                    }                   
                    break;
                  case 316:
                    for(var j=1; j < this.crew.length; j++){
                      if(this.crew[j].type == 1){
                        this.crew[j].origPower += 1
                        this.crew[j].powerUpParticle.makeParticles('sparkle');
                        this.crew[j].powerUpParticle.setScale(1, 1, 1, 1);                  
                        this.crew[j].powerUpParticle.maxParticleSpeed.set(100,100);
                        this.crew[j].powerUpParticle.explode(500);                           
                      }
                    }                    
                    break;
                  case 317:
                    this.freeCounter[5].num += 2
                    this.bombsGained+=2   
                    //Hina unlock
                    if(this.bombsGained >= 10){
                      this.unlockCrewmate(48)
                    }      
                    //Rin unlock
                    if(this.bombsGained >= 20){
                      this.unlockCrewmate(47)
                    }                                     
                    this.freeCounter[5].counter2.alpha = 1
                    this.freeCounter[5].counter2.text = "+2💣"           
                    
                    this.freeCounter[6].num += 2
                    this.harpoonsGained+=2
                    //Amazi unlock
                    if(this.harpoonsGained >= 10){
                      this.unlockCrewmate(59)
                    }                       
                    this.freeCounter[6].counter2.alpha = 1
                    this.freeCounter[6].counter2.text = "+2🔱"                      
                    break;
                  case 318:
                    this.reRoll_Counter+=3
                    break;
                  case 319:
                    this.crew[treasure.selectedCrew1].origPower+=3
                    this.crew[treasure.selectedCrew1].powerUpParticle.x = this.crew[treasure.selectedCrew1].powerText.x
                    this.crew[treasure.selectedCrew1].powerUpParticle.y = this.crew[treasure.selectedCrew1].powerText.y
                    this.crew[treasure.selectedCrew1].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew1].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew1].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew1].powerUpParticle.explode(500);        

                    this.crew[treasure.selectedCrew2].origPower+=3
                    this.crew[treasure.selectedCrew2].powerUpParticle.x = this.crew[treasure.selectedCrew2].powerText.x
                    this.crew[treasure.selectedCrew2].powerUpParticle.y = this.crew[treasure.selectedCrew2].powerText.y
                    this.crew[treasure.selectedCrew2].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew2].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew2].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew2].powerUpParticle.explode(500);                            
                    break;
                  case 320:
                    this.crew[treasure.selectedCrew1].origDeployCost -= 3
                    if(this.crew[treasure.selectedCrew1].origDeployCost < 0){
                      this.crew[treasure.selectedCrew1].origDeployCost = 0;
                    }                    
                    this.crew[treasure.selectedCrew1].powerUpParticle.x = this.crew[treasure.selectedCrew1].deployText.x
                    this.crew[treasure.selectedCrew1].powerUpParticle.y = this.crew[treasure.selectedCrew1].deployText.y
                    this.crew[treasure.selectedCrew1].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew1].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew1].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew1].powerUpParticle.explode(500);        

                    this.crew[treasure.selectedCrew2].origDeployCost -= 3
                    if(this.crew[treasure.selectedCrew2].origDeployCost < 0){
                      this.crew[treasure.selectedCrew2].origDeployCost = 0;
                    }
                    this.crew[treasure.selectedCrew2].powerUpParticle.x = this.crew[treasure.selectedCrew2].deployText.x
                    this.crew[treasure.selectedCrew2].powerUpParticle.y = this.crew[treasure.selectedCrew2].deployText.y
                    this.crew[treasure.selectedCrew2].powerUpParticle.makeParticles('sparkle');
                    this.crew[treasure.selectedCrew2].powerUpParticle.setScale(1, 1, 1, 1);                  
                    this.crew[treasure.selectedCrew2].powerUpParticle.maxParticleSpeed.set(100,100);
                    this.crew[treasure.selectedCrew2].powerUpParticle.explode(500);                       
                    break;                                       
                  case 200:

                    this.scoreCountNum = 0;
                    
                    localStorage.setItem("zoneComplete", this.zone)


                    if(parseInt(localStorage.getItem("intro")) <= 13){
                      localStorage.setItem("intro",13);
                      this.bgSound.stop();
                      this.transWaveKey = 1
                      this.changeWave();
                      this.transTar = 'win' 
                      this.saveStats();
                      
                      //this.game.state.start('win');                      
                    }
                    else{
                      if(this.zone == zoneLimit){
                      this.bgSound.stop();
                      this.transWaveKey = 1
                      this.changeWave();
                      this.transTar = 'win' 
                      this.saveStats();
                      localStorage.setItem("zone", this.zone+1)
                      //this.game.state.start('win');
                      }
                      else{
                        this.cap_healthValue += 10
                        this.monCountValue = this.monCountValue*2
                        this.monKillCount = 0;
                        this.bounty += 10
                        this.bossDead = false;
                        localStorage.setItem("zone", this.zone+1)
                        this.bgSound.stop();
                        this.transWaveKey = 1
                        this.changeWave();
                        this.transTar = 'win'               
                        this.saveStats();
                      }
                    }
                    

                    
                    
                    break;      
                  case 201:

                    if(this.zone < zoneLimit){
                      for(var z = 1; z < this.crew.length; z++){
                        if(this.crew[z].curseVal > 0 && z != 5 && z != 6){
                          this.crew[z].curseVal = 0;
                          this.crew[z].width-=50;
                          this.crew[z].height+=50;
                          this.crew[z].uncursed.animations.play('unpoof', 8, false); 
                          this.curseCrewAnim.play()
                        }
                    
                      }
                      //console.log("SAIL ON")
                      this.monCountValue = this.monCountValue*2
                      this.monKillCount = 0;
                      this.bounty += 10
                      this.bossDead = false;
                      localStorage.setItem("zone", this.zone+1)
                      this.bgSound.stop();
                      this.transWaveKey = 1
                      this.changeWave();
                      this.transTar = 'win'               
                      this.saveStats();
                    }
                    else{
                      //console.log("SAIL ON")
                      this.monCountValue = this.monCountValue*2
                      this.monKillCount = 0;
                      this.bounty += 10
                      this.bossDead = false;
                      localStorage.setItem("zone", this.zone+1)
                      this.bgSound.stop();
                      this.transWaveKey = 1
                      this.changeWave();
                      this.transTar = 'game'               
                      this.saveStats();
                    }

                    break;                                                                    

                }
                if(calBoon != 200 && calBoon != 201){
                  if(this.soulsSaved <= 0){
                    //console.log("after select treasure no soul chest") 
                    this.startNextZone(1000)
                  }
                  
                }
                this.chatTimer = 0;
                this.unShowInfo()  
                if(calBoon == 200){
                  this.chatTimer = 1;
                }
              }

            }
          }
          else{
            this.getTileDetails = false;
            this.getCapDetails = false;
          }


        }
        ,captainUltTrigger: function (){
          switch(this.capKey){
            //rally
            case 1:
              var bubbleDelay = 50;
              for(var i = 1; i < this.crew.length; i++){
                this.crew[i].isTalking = false;
                this.crew[i].speechBubbleText.text=""
                this.crew[i].speechBubbleText.alpha = 0;
              }            
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  for(var z = 1; z < this.crew.length; z++){
                    //&& this.crew[z].type == 0
                    if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == this.crew[z].id &&this.crew[z].type == 0){
                      this.tile[''+j+i].powerText.height = 75;
                      this.spawnBuff(this.tile[''+j+i],'buff_attack');
                      //this.tile[''+j+i].powerText.width = 75;
                    }                    
                  }

                }
              }                  
              for(var i = 1; i < this.crew.length; i++){
                if(this.crew[i].type == 0){
                  this.crew[i].holderPower[10] = 1
                  var ranPhrase = Math.floor(Math.random() * 2)

                  this.crew[i].powerUpParticle.x = this.crew[i].powerText.x
                  this.crew[i].powerUpParticle.y = this.crew[i].powerText.y
                  this.crew[i].powerUpParticle.makeParticles('sparkle');
                  this.crew[i].powerUpParticle.setScale(1, 1, 1, 1);                  
                  this.crew[i].powerUpParticle.maxParticleSpeed.set(100,100);
                  this.crew[i].powerUpParticle.explode(500);   

                 
                                 
                  if(i != 5  && !this.crew[i].isBlank){
                    if(ranPhrase == 0){
                      //this.crewSpeak(i,"Ready Captain!")
                    }
                    else{
                      //this.crewSpeak(i,"Aye!")
                    }

                    if(parseInt(localStorage.getItem("intro")) == 5 && i == 4){      
                      localStorage.setItem("intro",6)  
                      this.setFocus(500,this.endTurn_Button.x,this.endTurn_Button.y)   
                      this.crewSpeak(i,"Now click 'Fight' to begin combat!",quickspeechTimerBase)
            
                    }                   
                    if(parseInt(localStorage.getItem("intro")) == 6){
                      localStorage.setItem("intro",8)
                    }
                    
                    
                    //this.crew[i].speechTimer = bubbleDelay    
                    if(bubbleDelay == 50){
                      //bubbleDelay = -50
                    }         
                    else{
                      //bubbleDelay -= 50
                    }
                      
                  }
 
                }
                
              }                  
              break;                        
            case 2:
              if(true || (this.freeCounter[5].num-1 >= 0)){
                //this.freeCounter[5].num--
                //this.freeCounter[5].counter2.alpha = 1
                //this.freeCounter[5].counter2.text = "-1"                 

                for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){  
                    this.tile[''+j+i].smoke.on = false;
                    //&& this.tile[''+j+i].exhausted
                    if(this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged && this.tile[''+j+i].alpha >= 1 ){
                      if(!this.tile[''+j+i].smoke.on){
                        this.tile[''+j+i].smoke.on = true;
                        this.tile[''+j+i].statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CAPTAIN"                      
                      }
                      //this.tile[''+j+i].smoke.x = this.tile[''+j+i].x
                      //this.tile[''+j+i].smoke.y = this.tile[''+j+i].y
                    }
                  }
                } 
              }
              
              //this.smoke.on = true;                 
            break;    
            // rising tide            
            case 3:
              
              this.cap_healthValue -= 2;  
              for(var i = 0; i< this.cap_healthText2.length; i++){
                if(this.cap_healthText2[i].alpha == 0 ){
                  this.cap_healthText2[i].alpha = 0
                  this.add.tween(this.cap_healthText2[i]).from( { alpha:1}, 2000, Phaser.Easing.Default, true);     

                  this.cap_healthText2[i].y = this.cap_healthText.y-100
                  this.add.tween(this.cap_healthText2[i]).from( { y:this.cap_healthText.y}, 2000, Phaser.Easing.Default, true);                        

                  this.cap_healthText2[i].text = "-2"
           
                  i = this.cap_healthText2.length;
                }
              }              

              //captain hurt effects
              for(var z = 1; z < this.crew.length; z++){
                if(this.crew[z].id == 25){
                  this.crew[z].origPower += 1
                  this.crew[z].powerUpParticle.x = this.crew[z].powerText.x
                  this.crew[z].powerUpParticle.y = this.crew[z].powerText.y
                  this.crew[z].powerUpParticle.makeParticles('sparkle');
                  this.crew[z].powerUpParticle.setScale(1, 1, 1, 1);                  
                  this.crew[z].powerUpParticle.maxParticleSpeed.set(100,100);
                  this.crew[z].powerUpParticle.explode(500);   
                  var ranPhrase = Math.floor(Math.random() * 2)
                  if(ranPhrase == 0){
                    this.crewSpeak(z,"Captain! No!",quickspeechTimerBase)
                  }
                  else{
                    this.crewSpeak(z,"Defend the Captain!",quickspeechTimerBase)
                  }     
                            
                  
                }
              }  



              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == 25){
                    this.spawnBuff(this.tile[''+j+i],'buff_attack');
                    //this.tile[''+j+i].power += 1 
                  }
                }
              }                   
                          
              
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  // && this.tile[''+j+i].hp > largeThresh
                  if(this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged && !this.bossID.includes(''+j+i)){
                    this.tile[''+j+i].submerged = true;
                    this.tile[''+j+i].tint = '0x000000' 
                    this.spawnSplash(''+j+i);
                    if(this.tile[''+j+i].smoke.on){
                      this.tile[''+j+i].smoke.on = false;
                    }  
                    if(this.tile[''+j+i].help.on){
                      this.tile[''+j+i].help.on = false;
                    }                      
                    
                    this.tile[''+j+i].sparkle.alpha = 0;
                    this.tile[''+j+i].sparkle2.alpha = 0;                                        
                  }
                  else if(this.tile[''+j+i].isEnemyHere && this.tile[''+j+i].submerged && !this.tile[''+j+i].isCrewHere ){
                    this.tile[''+j+i].submerged = false;
                    this.tile[''+j+i].isFlipping = true;
                    this.tile[''+j+i].tint = '0xFFFFFF'
                    this.spawnSplash(''+j+i);
                    
                  }
                }
              }      
              this.removeTint();                
              this.stopExhaustAnim(); 
              this.checkExhaustedCount();
              this.checkIncomingDamage();                        
              break;
            //RAMPAGE casual pillage
            case 4:
              var bubbleDelay = 50;
              for(var i = 1; i < this.crew.length; i++){
                this.crew[i].isTalking = false;
                this.crew[i].speechBubbleText.text=""
                this.crew[i].speechBubbleText.alpha = 0;
              }    
              this.removeTint()          
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  for(var z = 1; z < this.crew.length; z++){
                    //&& this.crew[z].type == 0
                    if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == this.crew[z].id &&this.crew[z].type == 0){
                      this.tile[''+j+i].multiAttack++
                      //this.tile[''+j+i].powerText.width = 75;
                    }                    
                  }

                }
              }     
              this.extraAttackFromCaptain = true;             
              for(var i = 1; i < this.crew.length; i++){
                if(this.crew[i].type == 0){

                  //this.crew[i].holderPower[10] = 1

                  this.crew[i].powerUpParticle.x = this.crew[i].powerText.x
                  this.crew[i].powerUpParticle.y = this.crew[i].powerText.y
                  this.crew[i].powerUpParticle.makeParticles('sparkle');
                  this.crew[i].powerUpParticle.setScale(1, 1, 1, 1);                  
                  this.crew[i].powerUpParticle.maxParticleSpeed.set(100,100);
                  this.crew[i].powerUpParticle.explode(500);   


                }
                
              }   
                           
              break;
              //RETURN FIRE
            case 5:
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  
                  if(this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged && this.tile[''+j+i].alpha >= 1 && this.tile[''+j+i].exhausted){
                    
                    if(!this.tile[''+j+i].smoke.on){
                      this.tile[''+j+i].smoke.on = true;
                      this.tile[''+j+i].statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CAPTAIN"                      
                    }
                    this.tile[''+j+i].hp -=2
                    this.game.plugins.screenShake.shake(15)
                    if(this.tile[''+j+i].hp <= 0 ){
                      this.enemyDie(this.tile[''+j+i])
                    }
                    this.setActionText(this.tile[''+j+i],2) 
                    //this.tile[''+j+i].smoke.x = this.tile[''+j+i].x
                    //this.tile[''+j+i].smoke.y = this.tile[''+j+i].y
                  }
                }
              }              
              //this.smoke.on = true;                 
            break;                
            //Riptide      
          case 6:
              this.removeTint()
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  for(var z = 1; z < this.crew.length; z++){
                    //&& this.crew[z].type == 0
                    if(this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].captainMoved){
                      
                      var invisCrew = new Object()
                      invisCrew.posX = this.tile[''+j+i].posX
                      invisCrew.posY = this.tile[''+j+i].posY-1
                      invisCrew.notReal = true;
                      this.knockBack(this.tile[''+j+i],invisCrew)
                    }

                  }

                }
              }              
              break;         
          }          
        }
        //captain's ultimate
        ,captainUlt: function (tile, pointer){
          this.hideDetails2();          
          //console.log(this.getCapDetails)
          if(pointer.rightButton.isDown && this.chatTimer == 0 && !this.getTileDetails && !this.getCapDetails && !this.bossDead){

          }
          else if(pointer.rightButton.isDown && (this.getTileDetails  || this.getCapDetails || this.bossDead)){ 

          }
          else{

            this.getTileDetails = false;
            this.getCapDetails = false;

            if(parseInt(localStorage.getItem("intro")) >= 5 && this.ultKey<=0 && this.deploy_poolCurrent >= this.cap_ultCost && this.phaseCounter == 1 && !this.captainPowerActivated){
              this.snapShot(); 
              this.captainPowerActivated = true
              this.deploy_poolCurrent -= this.cap_ultCost
              //this.cap_ultCost += 2;
              this.ultKey = ultTimer;
              this.showHero(1000,3000)
              this.focusHereTimer = 0;
              
              
              

              this.capUltOverlay.loadTexture('capUltOverlay-'+this.capKey)
              this.capUltText.loadTexture('capUltText-'+this.capKey)
              this.capUltHero.loadTexture('capUltHero-'+this.capKey)                     

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

     
        }
        ,clearBoard: function () {
          if(this.deployReady && this.ultKey<= 0){

            this.chestMeterBar.target = this.chestMeterBar.targetHolder

            this.clearbuttonTimer = 10
            this.placeOrderTracker = 0;

            if(parseInt(localStorage.getItem("intro")) <= 8){
             
              this.focusHere.alpha = 0;
              this.focusHereTimer = 0;
              for(var i = 1; i < this.crew.length; i++){
                this.crew[i].speechTimer = 0;
                this.crew[i].speechBubble.alpha = 0;
                this.crew[i].speechBubbleText.alpha = 0;
                this.crew[i].isTalking = false;
                
              }
              localStorage.setItem("intro",1)
            }
            if(parseInt(localStorage.getItem("intro")) < 9 && parseInt(localStorage.getItem("intro")) > 8){
             
              this.focusHere.alpha = 0;
              this.focusHereTimer = 0;
              for(var i = 1; i < this.crew.length; i++){
                this.crew[i].speechTimer = 0;
                this.crew[i].speechBubble.alpha = 0;
                this.crew[i].speechBubbleText.alpha = 0;
                this.crew[i].isTalking = false;
                
              }
              localStorage.setItem("intro",8)
            }   

            if(parseInt(localStorage.getItem("intro")) >= 9 && parseInt(localStorage.getItem("intro")) <= 11){
              localStorage.setItem("intro",9)
              this.crewSpeak(1,"Some creeps start SUBMERGED", quickspeechTimerBase)

              
              this.crewSpeak(2,"They can't attack or be attacked ...",-1*(quickspeechTimerBase))

              
              this.crewSpeak(3,"You can BLOCK by placing a unit on the tile",-1*(1.5*quickspeechTimerBase))
                     

              
              for(var m = 0; m < this.boardHeight; m++){
                for(var l = 0; l < this.boardWidth; l++){  
                  if(this.tile[''+l+m].isEnemyHere && this.tile[''+l+m].submerged){
                    this.setFocus(500,this.tile[''+l+m].x,this.tile[''+l+m].y)   
                  }
                }
              }                      
            }                     

            //check how many crew deployed
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){      
                if(this.tile[''+j+i].isCrewHere || this.tile[''+j+i].crewID != 0){
                  
                  this.deployCrewCount++
                }
              }
            }
            //crew returns          
            this.deployedBombs = 0;
            this.deployedHarpoons = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){      
                if(this.tile[''+j+i].isCrewHere){
                  this.tile[''+j+i].hasActed = true;
                  this.tile[''+j+i].y  = this.tile[''+j+i].origY//this.tile[''+j+i].y+25//1000;
                  this.tile[''+j+i].loadTexture('tile');
                  this.tile[''+j+i].multiAttack = 1;
                  for(var z = 1; z < this.crew.length; z++){
                    if(this.crew[z].id == this.tile[''+j+i].crewID && this.crew[z].arrayKey == this.tile[''+j+i].benchID){
                      this.deploy_poolCurrent += this.crew[z].deployCost
                    }
                  }
                  
                  if(this.tile[''+j+i].crewID == 80){
                    this.freeCounter[5].num++
                  } 
                  if(this.tile[''+j+i].crewID == 81){
                    this.freeCounter[6].num++
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
            for(var i = 1; i < this.crew.length; i++){
              this.crew[i].isSelected = false;
              this.crew[i].isDeployed = false
              this.crew[i].deployNum.alpha = 0;
            } 
            //undo steel type power 
            for(var i = 1; i < this.crew.length; i++){
              if(this.crew[i].type == 0){
                //this.crew[i].holderPower[10] = 0
                //this.crew[i].holderPower[0] = 0
              }
              this.crew[i].holderPower[10] = 0
              this.crew[i].holderPower[0] = 0 
              this.crew[i].holderPower[24] = 0    
              
              //undo cost discounts
              this.crew[i].deployCost = this.crew[i].origDeployCost
              
            } 
            //undo base power buffs
            for(var z = 1; z < this.crew.length; z++){
              this.crew[z].origPower = this.crewHolder[z].origPower;
            }             

            //undo captain extra attack buff
            this.extraAttackFromCaptain = false; 
            
            //undo captain health       
            this.cap_healthValue = this.cap_healthValueHolder
            // reset captain savvy
            this.deploy_poolCurrent = this.deploy_poolMax;
            

            // undo ammo spend
            if(this.capKey == 2 && this.captainPowerActivated){
              //this.freeCounter[5].num++
              //this.freeCounter[5].counter2.alpha = 1
              //this.freeCounter[5].counter2.text = "+1💣"
            }
            this.captainPowerActivated = false;
            //this.freeCounterNum++
            //this.freeCounterText2.alpha = 1
            //this.freeCounterText2.text = "+1"             
            
            //reset board state
            for(var m = 0; m < this.boardHeight; m++){
              for(var l = 0; l < this.boardWidth; l++){  
                //this.tile[''+l+m].loadTexture(this.tileHolder[''+l+m].texture)
                this.tile[''+l+m].isCrewHere = this.tileHolder[this.undoCounter][''+l+m].isCrewHere 
                this.tile[''+l+m].crewID = this.tileHolder[this.undoCounter][''+l+m].crewID
                this.tile[''+l+m].isEnemyHere = this.tileHolder[this.undoCounter][''+l+m].isEnemyHere
                this.tile[''+l+m].monID = this.tileHolder[this.undoCounter][''+l+m].monID
                this.tile[''+l+m].isFlipping = this.tileHolder[this.undoCounter][''+l+m].isFlipping
                
                this.tile[''+l+m].hp = this.tileHolder[this.undoCounter][''+l+m].hp
                this.tile[''+l+m].power = this.tileHolder[this.undoCounter][''+l+m].power
                
                this.tile[''+l+m].submerged = this.tileHolder[this.undoCounter][''+l+m].submerged
                
                this.tile[''+l+m].smoke.on = this.tileHolder[this.undoCounter][''+l+m].smokeVal

                this.tile[''+l+m].help.on = this.tileHolder[this.undoCounter][''+l+m].helpVal

                this.tile[''+l+m].multiAttack =  this.tile[''+l+m].origmultiAttack
                //this.tileHolder[''+l+m].smoke.on = false;     

                this.tile[''+l+m].y  = this.tile[''+l+m].origY
                
                this.tile[''+l+m].captainMoved = false;

                this.tile[''+l+m].sparkle.alpha = 0;
                this.tile[''+l+m].sparkle2.alpha = 0;                

                
                
                
              }
            }          
            this.removeTint()
            

          }

          
        }
        ,spawnMonsters: function (submerged, tile, monID) {

          var monsterCount = 0
          var trueMonsterCount = 0
          for(var i =0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){ 
              if(this.tile[''+j+i].isEnemyHere){
                monsterCount++
                //only count actual monsters
                if(this.tile[''+j+i].monID != 102 && this.tile[''+j+i].monID != 103 && this.tile[''+j+i].monID != 99){
                  trueMonsterCount++
                }
              }
            }
          }          
          this.spawnCount = trueMonsterCount;
          //if submerged undefined             
          if (submerged === undefined ) {
            submerged = true;
            if(this.surfaceCount <= 0){
              submerged = false;
            }
          
          }
          else{
            //submerged = false;
          }
        
          this.deployReady = false;

          var distX = 0;
          var distY = 0;
          this.tileLength = 0;
          //must always be dd
          this.boardWidth = boardWidth//11
          this.boardHeight = boardHeight//9 
          this.size = 100
          this.spacing = 10
          this.monCount = 0//this.monBaseCount*monscaleNum*this.turnCountNum// + (Math.floor(this.deploy_poolMax/3))+ (Math.floor(this.turnCountNum/2));
          if(this.turnCountNum == 0 ){//this.saltCounter >= this.saltCounterMax
             this.monCount = 1
            if((parseInt(localStorage.getItem("intro")) > 13)){
              this.monCount = 10*this.zone
            }
          }
          else{
            this.monCount = this.monBaseCount//+(this.turnCountNum*monscaleNum)
            


  
            if(tile === undefined && monID != 103) {
              this.monCount = 0;
            }              
            else{
              this.monCount = 1;
            }           



          }



          
          var dist = 0
          
          

          var text = waves[this.turnCountNum]				
          //text = text.split("");
          var textKey = 0
          var ranStartY = Math.floor(Math.random() * this.boardHeight/2);
          var ranStartX = Math.floor(Math.random() * this.boardWidth/2);
          if(!(tile === undefined) ){
            var key = tile.id.split("");
            var tilej = parseInt(key[0])
            var tilei = parseInt(key[1])            
            ranStartY = tilei//Math.floor(Math.random() * this.boardHeight/2);
            ranStartX = tilej//Math.floor(Math.random() * this.boardWidth/2); 
            

          }  
          else{

          } 
          // first chest in tutorial
          if(parseInt(localStorage.getItem("intro")) == 1){
            ranStartY = 0//tilei//Math.floor(Math.random() * this.boardHeight/2);
            ranStartX = 0//tilej//Math.floor(Math.random() * this.boardWidth/2); 
          }

          for(var i = ranStartY; i < this.boardHeight; i++){
              for(var j = ranStartX; j < this.boardWidth; j++){      
                //reset stats
                this.tile[''+j+i].hasAttacked = false;
                //place mon
                var placeMonHere = Math.floor(Math.random() * 3);
                //this.monCount = 100;

                if(this.monCount > this.monCountValue){
                  //this.monCount = this.monCountValue
                }
                
                
                if(this.monCount <= 3 || !(tile === undefined) || monID == 103){
                  placeMonHere = 0
                }
                
                
                ////console.log("placemon "+placeMonHere+" & moncount "+this.monCount+" & turn Count "+this.turnCountNum)
                if(placeMonHere == 0 && this.monCount > 0 && !this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].isCrewHere && (this.monCountValue-this.monKillCount) > 0){
                  
                  dist += 1000;
                  this.tile[""+j+i].tint = '0xFFFFFF'

                  
                  //this.tile[''+j+i].monID = Math.floor(Math.random() * 3)+1;//parseInt(text[textKey])
                  
                  var healthSpawn = Math.floor(Math.random() * 4)
                   // this.chestMeterBar.height >= 490 
                   //spawn chest //this.saltCounter >= this.saltCounterMax
                   var chestSpawnRate = chestSpawnBreak
                   if(parseInt(localStorage.getItem("intro")) < 14){
                      chestSpawnRate = 3
                   }
                  if((this.turnCountNum == 0 && this.firstChestSpawn)|| (this.turnCountNum%chestSpawnRate == 0 && this.turnCountNum > 1 && !this.sosLock)){
                    this.sosLock = true;
                    this.firstChestSpawn = false;
                    /*
                    if(this.chestMeterBar.height >= 490){
                      this.chestMeterBar.height = 0;
                      this.chestMeterBar.target = 0;
                      this.chestUI.width += 100;
                      this.chestUI.height += 100
                    }
                    */

                    ////console.log("test")
                    this.tile[''+j+i].monID = 99
                    this.tile[''+j+i].hp = 3;
                    this.tile[''+j+i].power = 0;
                    this.tile[''+j+i].origPower = 0                    
                    this.tile[''+j+i].sparkle.alpha = 1;
                    this.tile[''+j+i].sparkle2.alpha = 1;
                    this.tile[''+j+i].tint = '0xFFFFFF'
                    //this.tile[''+j+i].y = this.tile[''+j+i].y+25//1000+dist;

                    this.tile[''+j+i].y = this.tile[''+j+i].origY
                    this.add.tween(this.tile[''+j+i]).from( { y:this.tile[''+j+i].origY+25 }, 500, Phaser.Easing.Elastic.Out, true);     

                    if(!this.tile[''+j+i].isFlipping){
                      //this.tile[''+j+i].isFlipping = true;
                      //this.tile[""+j+i].oldTexture = this.tile[""+j+i].texture;    
                    }
                    //this.monCountValue--;
                    //spawn splash
                    this.spawnSplash(''+j+i);

                    this.spawnCount++;                
                    this.chestCount++;
                    //set new salt limit
                    this.saltCounter = 0;
                    this.saltCounterMax = this.saltCounterBase*this.chestCount

                    try{
                      //force spawn SOS
                      if(true){
                        try{
                          var ran = Math.floor(Math.random() * 3)+1;
                          var newI = i+ran
                          ran = Math.floor(Math.random() * 3)+1;
                          var newJ = j+ran     

                        // first distress in tutorial
                        if(parseInt(localStorage.getItem("intro")) == 1){
                          newX = 4//tilei//Math.floor(Math.random() * this.boardHeight/2);
                          newJ = 4//tilej//Math.floor(Math.random() * this.boardWidth/2); 
                        }                          

                        //generate blocked tile if crew is there
                        if(this.tile[''+newJ+newI].isCrewHere){
                          this.tile[''+newJ+newI].deathParticle.makeParticles(this.tile[''+newJ+newI].texture);
                          this.tile[''+newJ+newI].deathParticle.setScale(0.7, 0.7, 0.7, 0.7);
                          this.tile[''+newJ+newI].deathParticle.maxParticleSpeed.set(0, (-1000));
                          this.tile[''+newJ+newI].deathParticle.minParticleSpeed.set(0, (-400));
                          this.tile[''+newJ+newI].deathParticle.explode(2000,1);
                          
                          for(var ii = 1; ii < this.crew.length; ii++){
                            if(this.tile[''+newJ+newI].crewID == this.crew[ii].crewID ){
                              this.deploy_poolCurrent += this.crew[ii].deployCost        
                              this.crew[ii].isSelected = false;
                              this.crew[ii].isDeployed = false
                            }  
                          } 

                          this.tile[''+newJ+newI].crewID = 0
                          this.tile[''+newJ+newI].isCrewHere = false;                          
                        }                          
                          
                          this.tile[''+newJ+newI].name = monster[102].name
                          this.tile[''+newJ+newI].monID = 102
                          this.tile[''+newJ+newI].help.on = true; 
                          //this.tile[''+newJ+newI].y = this.tile[''+newJ+newI].y+25//1000+dist;

                          this.tile[''+newJ+newI].y = this.tile[''+newJ+newI].origY
                          this.add.tween(this.tile[''+newJ+newI]).from( { y:this.tile[''+newJ+newI].origY+25 }, 500, Phaser.Easing.Elastic.Out, true);    

                          this.spawnSplash(''+newJ+newI);   
                          this.spawnCount++;       
                          
                          this.tile[''+newJ+newI].hp = 3;
                          this.tile[''+newJ+newI].power = 0;
                          this.tile[''+newJ+newI].origPower = 0
                          this.tile[''+newJ+newI].tier = 0
                          this.tile[''+newJ+newI].isEnemyHere = true     
                          this.tile[''+newJ+newI].submerged = false; 

                          this.tile[''+newJ+newI].multiAttack = 0
                          this.tile[''+newJ+newI].origmultiAttack =  this.tile[''+newJ+newI].multiAttack
                          this.tile[''+newJ+newI].tint = '0xFFFFFF'
                        }
                        catch(e){
                          var ran = Math.floor(Math.random() * 3)+1;
                          var newI = this.boardHeight-1
                          ran = Math.floor(Math.random() * 3)+1;
                          var newJ = this.boardWidth-1   

                        //generate blocked tile
                        if(this.tile[''+newJ+newI].isCrewHere){
                          this.tile[''+newJ+newI].deathParticle.makeParticles(this.tile[''+newJ+newI].texture);
                          this.tile[''+newJ+newI].deathParticle.setScale(0.7, 0.7, 0.7, 0.7);
                          this.tile[''+newJ+newI].deathParticle.maxParticleSpeed.set(0, (-1000));
                          this.tile[''+newJ+newI].deathParticle.minParticleSpeed.set(0, (-400));
                          this.tile[''+newJ+newI].deathParticle.explode(2000,1);
                          
                          for(var ii = 1; ii < this.crew.length; ii++){
                            if(this.tile[''+newJ+newI].crewID == this.crew[ii].crewID ){
                              this.deploy_poolCurrent += this.crew[ii].deployCost        
                              this.crew[ii].isSelected = false;
                              this.crew[ii].isDeployed = false
                            }  
                          } 

                          this.tile[''+newJ+newI].crewID = 0
                          this.tile[''+newJ+newI].isCrewHere = false;                          
                        }                          

                          this.tile[''+newJ+newI].name = monster[102].name
                          this.tile[''+newJ+newI].monID = 102
                          this.tile[''+newJ+newI].help.on = true; 
                          //this.tile[''+newJ+newI].y = this.tile[''+newJ+newI].y+25//1000+dist;
                          
                          this.tile[''+newJ+newI].y = this.tile[''+newJ+newI].origY
                          this.add.tween(this.tile[''+newJ+newI]).from( { y:this.tile[''+newJ+newI].origY+25 }, 500, Phaser.Easing.Elastic.Out, true);    

                          this.spawnSplash(''+newJ+newI);   
                          this.spawnCount++;       
                          
                          this.tile[''+newJ+newI].hp = 3;
                          this.tile[''+newJ+newI].power = 0;
                          this.tile[''+newJ+newI].origPower = 0
                          this.tile[''+newJ+newI].tier = 0
                          this.tile[''+newJ+newI].isEnemyHere = true   
                          this.tile[''+newJ+newI].submerged = false; 

                          this.tile[''+newJ+newI].multiAttack = 0
                          this.tile[''+newJ+newI].origmultiAttack =  this.tile[''+newJ+newI].multiAttack  
                          this.tile[''+newJ+newI].tint = '0xFFFFFF'                        
                        }
                 
                      }


                    }
                    catch(e){

                    }

                       
                  }
                  else{

                  
                    var potentialMons = [];
                    for(var k = 1 ; k < 10; k++){
                      if(this.monsterPool[k].count > 0){
                        for(var l = 0; l < this.monsterPool[k].count; l++){
                          potentialMons.push(k)
                        }
                      }
                    }

                    var spawnChance = Math.floor(Math.random() * (potentialMons.length))
                    var monSelected = potentialMons[spawnChance]
                    this.tile[''+j+i].monID = monSelected+1;
                    //this.tile[''+j+i].y = this.tile[''+j+i].y+25//1000+dist;

                    this.tile[''+j+i].y = this.tile[''+j+i].origY
                    this.add.tween(this.tile[''+j+i]).from( { y:this.tile[''+j+i].origY+25 }, 500, Phaser.Easing.Elastic.Out, true);   
                    
                    this.spawnSplash(''+j+i);                          
                    this.spawnCount++;        




                    /*
                    for(var k = 1 ; k < 10; k++){
                      if(this.monsterPool[k].count > 0){
                        //console.log(this.monCount +" "+this.monsterPool[k].count )
                        //var spawnChance = Math.floor(Math.random() * (this.monCount) )
                        if(spawnChance <= this.monsterPool[k].count){
                          this.tile[''+j+i].monID = k+1;
                          this.tile[''+j+i].y = this.tile[''+j+i].y+25//1000+dist;
                          if(!this.tile[''+j+i].isFlipping){
                            //this.tile[''+j+i].isFlipping = true;
                            //this.tile[""+j+i].oldTexture = this.tile[""+j+i].texture;    
                          }
                          //this.monCountValue--;
                          //spawn splash
                          this.spawnSplash(''+j+i);                          
                          this.spawnCount++;                         
                        }
                        else{
                          if(totalTreasureCount == 1){
                            this.tile[''+j+i].monID = k+1;
                            this.tile[''+j+i].y = this.tile[''+j+i].y+25//1000+dist;
                            if(!this.tile[''+j+i].isFlipping){
                             // this.tile[''+j+i].isFlipping = true;
                              //this.tile[""+j+i].oldTexture = this.tile[""+j+i].texture;    
                            }
                            //this.monCountValue--;
                            //spawn splash
                            this.spawnSplash(''+j+i);                            
                            this.spawnCount++;                            
                          }
                        }
                      }
                        
                    }
                    */
                    //special summons
                    //navy hunt
                    if(this.bounty > 0){
                      var spawnChance = Math.floor(Math.random() * (4) )
                      if(spawnChance == 0){
                        this.tile[''+j+i].monID = 101;
                        this.tile[''+j+i].y = this.tile[''+j+i].y+25//1000+dist;
                        //this.monCountValue--;
                        //spawn splash
                        this.spawnSplash(''+j+i);                        
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

                  //always spawn submerged after quota
                  var emergeRan = 0//Math.floor(Math.random() * 4)-2
                  if(this.spawnCount > this.monEmergecut+emergeRan || this.turnCountNum == 0){
                    this.tile[""+j+i].submerged = true
                    this.tile[''+j+i].tint = '0x000000'                     
                  }
                  else{
                    this.tile[''+j+i].tint = '0xFFFFFF'
                  }

                  //explcit monID override
                  if(!(monID === undefined)){
                    this.tile[""+j+i].monID = monID

                    this.spawnSplash(''+j+i);

                    ////console.log("rock go")
                  }   

                  //boxes, chests and rocks don't count
                  if(monID == 99 || monID == 102 || monID == 103){
                    this.spawnCount--
                  }
                  //bosses never submerged
                  if(this.tile[''+j+i].monID == 4 || this.tile[''+j+i].monID == 7 || this.tile[''+j+i].monID == 10){
                    this.tile[""+j+i].submerged = false;
                  }
                  //chest never submerged
                  if(this.tile[''+j+i].monID == 99 || this.tile[''+j+i].monID == 102 || this.tile[''+j+i].monID == 103){
                    this.tile[""+j+i].submerged = false;
                    this.tile[''+j+i].tint = '0xFFFFFF'
                  }      

                  //only treasures are shiny
                  if(this.tile[''+j+i].monID == 99){
                    this.tile[''+j+i].sparkle.alpha = 1;
                    this.tile[''+j+i].sparkle2.alpha = 1;                    
                  }
                  else{
                    this.tile[''+j+i].sparkle.alpha = 0;
                    this.tile[''+j+i].sparkle2.alpha = 0;       
                  }

                  //only SOS spawn help
                  if(this.tile[''+j+i].monID == 102){
                    this.tile[''+j+i].help.on = true;             
                  }
                  else{
                    this.tile[''+j+i].help.on = false;       
                  }                  

               

                  //hide splash
                  if(this.tile[""+j+i].submerged){
                    //this.tileSplash[''+j+i].alpha = 0
                    //this.tileSplash[''+j+i].x = -1000
                    //this.tileSplash[''+j+i].y = -1000    
                    
                    this.tile[''+j+i].sparkle.alpha = 0;
                    this.tile[''+j+i].sparkle2.alpha = 0;                    
                  }



                  //diff types of enemy
                  this.tile[''+j+i].name = monster[this.tile[''+j+i].monID].name;
                  this.tile[''+j+i].hp = monster[this.tile[''+j+i].monID].hp;
                  this.tile[''+j+i].power = monster[this.tile[''+j+i].monID].power;
                  this.tile[''+j+i].tier = monster[this.tile[''+j+i].monID].tier;
                  this.tile[''+j+i].multiAttack = monster[this.tile[''+j+i].monID].multiAttack;
                  this.tile[''+j+i].isEnemyHere = true                  

                  if(parseInt(localStorage.getItem("intro")) <= 11 && this.tile[''+j+i].monID != 99 ){
                    //this.tile[''+j+i].hp = 1
                    //this.tile[''+j+i].power = 1     
                  }

                  switch(this.tile[''+j+i].monID){
                    case 101:
                      this.tile[''+j+i].power = this.bounty
                      break;
                  }

                  //more curse make monsters stronger
                  try{
                    
                    ////console.log((this.tile[''+j+i].monID-1)+'  '+this.monsterPool[(this.tile[''+j+i].monID-1)].count)
                    if( this.tile[''+j+i].monID != 99 &&  this.tile[''+j+i].monID != 102 &&  this.tile[''+j+i].monID != 11){
                      this.tile[''+j+i].hp += (this.monsterPool[(this.tile[''+j+i].monID-1)].count)-1
                      this.tile[''+j+i].power += (this.monsterPool[(this.tile[''+j+i].monID-1)].count)-1
                      this.tile[''+j+i].origPower = this.tile[''+j+i].power;
                    }

                  }
                  catch(e){

                  }

   
                  
                  
                }
                else{
                  //this.tile[''+j+i].isEnemyHere = false
                  //this.tile[''+j+i].monID = 0;
                }

             


                //multi attacks
                this.tile[''+j+i].origmultiAttack = this.tile[''+j+i].multiAttack
                


                distX += this.tile[''+j+i].width+this.spacing
                if(distX > this.size*this.boardWidth){
                  distX = 0;
                  distY += this.tile[''+j+i].height+this.spacing
                }                  

         
                
              }

          }  
          
          //next phase


          if(tile === undefined && monID != 103 ){

                       


            var meterMultKey = (25-this.chestCount)
            if(meterMultKey < 10){
              meterMultKey = 10
            }                
            var meterMult = meterMultKey*5
 
            //alert(this.monBaseCount+" "+this.monEmergecut)

            //curse meter fills
            if(this.chestMeterBar.height >= 490 && this.chestMeterBar.target != 0){
              

              var curseWiggle =  this.add.tween(this.chestUI).to( { y:this.chestUI.y+25}, 500, Phaser.Easing.Bounce.Out, true);    
              curseWiggle.onComplete.addOnce(function(){     
                var curseTween =  this.add.tween(this.chestUI).to( { y:-this.game.height}, 1000, Phaser.Easing.Bounce.Out, true);      
                curseTween.onComplete.addOnce(function(){     
                  this.shipBellSnd.play()
                  this.spinWheel();         
                },this);                
                curseTween.start();
              },this);              

              curseWiggle.start();

              this.timer = this.game.time.create(true);
              this.timer.add(12000, function(){
                this.turnWait = turnWaitBase;
                this.phaseCounter++  
                //next wave
                this.turnCountNum++;                 
                //more diverse monster pool each turn
                switch(this.zone){
                  case 1:
                      
                    if(this.turnCountNum >= newMonLimit){
                      this.monsterPool[2].count = 1   
                    }
                    else{
                      this.monsterPool[1].count = 1 
                    }
                    break;
                  case 2:  
                    if(this.turnCountNum >= newMonLimit){
                      this.monsterPool[5].count =1
                    }  
                    else{
                      this.monsterPool[4].count = 1  
                    }                      
                    break; 
                  case 3:
                      
                    if(this.turnCountNum >= newMonLimit){
                      this.monsterPool[8].count = 1
                    }  
                    else{
                      this.monsterPool[7].count = 1  
                    }                      
                    break;
                  default:
                    this.monsterPool[1].count =1  
                    this.monsterPool[4].count =1
                    this.monsterPool[7].count =1

                    this.monsterPool[2].count = 1   
                    this.monsterPool[5].count = 1
                    this.monsterPool[8].count = 1    
                    /*
                    if(this.turnCountNum >= newMonLimit){
                      var monChoice = [2,5,8]
                      var ran = Math.floor(Math.random() * 3)
                      this.monsterPool[monChoice[ran]].count = this.zone
                    }  
                    else{
                      var monChoice = [1,4,7]
                      var ran = Math.floor(Math.random() * 3)
                      this.monsterPool[monChoice[ran]].count = this.zone
                    }  
                      */               
                    break;                                                  
                } 


                if(this.turnCountNum % 2 !== 0 && this.turnCountNum > 0){
                  this.monBaseCount+= 1+this.zone
                  this.monEmergecut = this.monBaseCount-Math.floor(this.monBaseCount/2);
                  if(this.turnCountNum > 1){
        
                  }
              
                }     
                //spawn tutorial enemy
                if(parseInt(localStorage.getItem("intro")) == 8){
                  this.spawnMonsters(false,this.tile['04'],2);  
                  this.tile['04'].submerged = false;
                  this.tile['04'].tint = '0xFFFFFF'
                  this.spawnMonsters(false,this.tile['44'],2);  
                  this.tile['44'].submerged = false;
                  this.tile['44'].tint = '0xFFFFFF'
                  this.spawnMonsters(false,this.tile['23'],2);  
                  this.tile['23'].submerged = false;
                  this.tile['23'].tint = '0xFFFFFF'


                }  
                //spawn lucky george
                //% 5 == 0
                if(this.turnCountNum % luckEmegrgePoint == 0  && !this.isNurseOnBoard && parseInt(localStorage.getItem("intro")) > 13){
                  var ran = Math.floor(Math.random() * 2)
                  var posX = 4-ran
                  ran = Math.floor(Math.random() * 2)
                  var posY = 0+ran
                  this.spawnNurse(posX,posY);
                  this.isNurseOnBoard = true;
                  this.luckyID = ""+posY+posX
                }
                else if(this.isNurseOnBoard){
                  //lucky mermaid health boost
                  this.spawnBuff(this.tile[this.luckyID],'buff_health');
                  this.tile[this.luckyID].statsHistory += "\n\n▪ LUCKY: +5 HP FROM GEORGE'S ABILITY"
                  this.tile[this.luckyID].width += 25
                  this.tile[this.luckyID].height + 25;
                  this.tile[this.luckyID].hp+=5
                }

                //end of turn abilities
                for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){   
                    if(this.tile[''+j+i].monID == 6 && !this.tile[''+j+i].submerged){

                    }

                    //shadow rose ability
                    if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10 && this.capKey == 1){
                      if(this.deploy_poolCurrentHolder <= 0 && this.tile[''+j+i].isEnemyHere){
                      this.spawnBuff(this.tile[''+j+i],'buff_attack');
                      this.tile[''+j+i].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM SHADOW"
                      this.tile[''+j+i].power += 1                    
                      }
                    }
                    //shadow tyson ability
                    if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10  && this.capKey == 2){
                      if(!this.tile[''+j+i].smoke.on && this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged && !this.tile[this.bossID].monID == 10 ){
                      this.spawnBuff(this.tile[this.bossID],'buff_attack');
                      this.tile[this.bossID].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM SHADOW"
                      this.tile[this.bossID].power += 1                    
                      }
                    }  
                    //shadow crickett ability
                    if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10  && this.capKey == 3){
                      if(this.tile[''+j+i].submerged && this.tile[''+j+i].isEnemyHere){                  
                        this.tile[this.bossID].hp -=1
                        if(this.tile[this.bossID].hp <= 0 ){
                          this.enemyDie(this.tile[this.bossID])
                        }
                        this.setActionText(this.tile[this.bossID],1)                   

                      }
                    }  
                    //shadow caesar ability
                    if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10  && this.capKey == 4){
                      this.spawnBuff(this.tile[this.bossID],'buff_attack');
                      this.tile[this.bossID].statsHistory += "\n\n▪ ENRAGED: +5 FURY FROM SHADOW"
                      this.tile[this.bossID].power += 5    
                    } 
                    //shadow tsai ability
                    if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10  && this.capKey == 5){
                      if(this.tile[''+j+i].isEnemyHere){  
                        this.spawnBuff(this.tile[''+j+i],'buff_health');
                        this.tile[''+j+i].statsHistory += "\n\n▪ BUFFED: +1 HP FROM SHADOW"
                        this.tile[''+j+i].hp += 1

                      }

                    }                                                               

                    //angry if blocked
                    
                    if(this.tile[''+j+i].wasBlocked){
                      this.tile[''+j+i].wasBlocked = false;
                      this.setActionText(this.tile[''+j+i],"😡") 
                      this.spawnBuff(this.tile[''+j+i],'buff_attack');
                      this.tile[''+j+i].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM BEING BLOCKED"
                      this.tile[''+j+i].power += 1
                    }                
                  }
                }
                
                
                    
                
              
                
                //spawn boss
                if(this.turnCountNum >= this.bossEmegrgePoint && this.bossID.includes("blank") && !this.bossDead){
                  switch(this.zone){
                    default:
                      var monChoice = [4,7,10]
                      var ran = Math.floor(Math.random() * 3)    
                      this.spawnBoss(monChoice[ran],2,2)            
                      
                      break;
                    case 1:
                      this.spawnBoss(4,2,2)   
                      break;
                    case 2:
                      this.spawnBoss(7,2,2)
                      break;
                    case 3:
                      this.spawnBoss(10,2,2)
                      
                      //captain specific stats
                      switch(this.capKey){
                        case 1:
                          this.tile[this.bossID].hp = 50
                          this.tile[this.bossID].power = 5
                          this.tile[this.bossID].origPower = this.tile[this.bossID].power
                        break;
                        case 2:
                          this.tile[this.bossID].hp = 50
                          this.tile[this.bossID].power = 1
                          this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                        break;
                        case 3:
                          this.tile[this.bossID].hp = 75
                          this.tile[this.bossID].power = 5
                          this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                        break;
                        case 4:
                          this.tile[this.bossID].hp = 50
                          this.tile[this.bossID].power = 5
                          this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                        break;
                        case 5:
                          this.tile[this.bossID].hp = 50
                          this.tile[this.bossID].power = 5
                          this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                        break;
                        case 6:
                          this.tile[this.bossID].hp = 75
                          this.tile[this.bossID].power = 5
                          this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                        break;                    
                      }
                      if(glassBosses){
                        this.tile[this.bossID].hp = 1
                      }                  
                      break;                            
                  }
                }             
                else if(!this.bossID.includes("blank")){
                  //boss move
                  this.bossMove(this.bossID);
                  if(this.turnCountNum == 0){
                    this.showMarker(1000,3000)
                    this.turnMarkerText.text = "YOUR TURN"        
                  }
                  else{
                    this.showMarker(1000,3000)
                    this.turnMarkerText.text = "YOUR TURN"
                    if(this.soulsSaved <= 0 && this.chestOpened<= 0){
                      this.turnMarkerText.text = "YOUR TURN"     
                      this.deploy_poolCurrent = this.deploy_poolMax;    
                      this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax  
                      //console.log("No chests or souls A")
                      //this.startNextZone(1000)
                    }                
                  }                
                }
                else{
                  if(this.turnCountNum == 0){
                    this.showMarker(1000,3000)
                    this.turnMarkerText.text = "YOUR TURN"        
                  }
                  else{
                    this.showMarker(1000,3000)
                    this.turnMarkerText.text = "YOUR TURN"
                    if(this.soulTriggers <= 0 && this.chestTriggers<= 0){
                      this.turnMarkerText.text = "YOUR TURN"     
                      this.deploy_poolCurrent = this.deploy_poolMax;    
                      this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax  
                      //console.log("No chests or souls B")
                      this.startNextZone(3000)
                    }                
                  }               
                }
                
                        
                
              
                //alert(this.monBaseCount+" "+this.monEmergecut)
                
                

              


                // difficulty increases based on wave count
                if(this.turnCountNum >= 10 && this.turnCountNum%10 == 0){
                  /*
                  Toastify({
                    text: "CREEPS GROW STRONGER",
                    duration: 3000,
                    position: "center"
                    }).showToast();
                    
                    for(var k = 1 ; k < 10; k++){
                      if(this.monsterPool[k].count > 0){
                        this.monsterPool[k].count+=3;
                      }
                    }  
                      */              
                }

                this.tickerSpeed = tickerSpeedbase                
              },this);
              this.timer.start(); 
              //old curse behaviour
              /*
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){      
                  if(this.tile[''+j+i].isEnemyHere && this.tile[''+j+i].monID != 99 && this.tile[''+j+i].monID != 102 && this.tile[''+j+i].monID != 103){
                    
                    this.spawnBuff(this.tile[''+j+i],'buff_attack');
                    this.tile[''+j+i].statsHistory += "\n\n▪ CURSED: +1 FURY FROM CURSE TRIGGER"
                    this.tile[''+j+i].statsHistory += "\n\n▪ CURSED: +1 HEALTH FROM CURSE TRIGGER"
                    this.tile[''+j+i].power++
                    this.tile[''+j+i].hp++

                    
                  }
                         
                }
              } 
              */  
              
              /*           
              Toastify({
                text: "CREEPS GROW STRONGER",
                duration: 3000,
                position: "center",
                offset: {
                  y: 40 // vertical axis - can be a number or a string indicating unity. eg: '2em'   
                }               
                }).showToast();  
                */              
              //monsters grow stronger

            }
            else{
            this.turnWait = turnWaitBase;
            this.phaseCounter++  
            //next wave
            this.turnCountNum++;               
              //more diverse monster pool each turn
              switch(this.zone){
                case 1:
                    
                  if(this.turnCountNum >= newMonLimit){
                    this.monsterPool[2].count = 1   
                  }
                  else{
                    this.monsterPool[1].count = 1 
                  }
                  break;
                case 2:  
                  if(this.turnCountNum >= newMonLimit){
                    this.monsterPool[5].count =1
                  }  
                  else{
                    this.monsterPool[4].count = 1  
                  }                      
                  break; 
                case 3:
                    
                  if(this.turnCountNum >= newMonLimit){
                    this.monsterPool[8].count = 1
                  }  
                  else{
                    this.monsterPool[7].count = 1  
                  }                      
                  break;
                default:
                  this.monsterPool[1].count =1  
                  this.monsterPool[4].count =1
                  this.monsterPool[7].count =1

                  this.monsterPool[2].count = 1   
                  this.monsterPool[5].count = 1
                  this.monsterPool[8].count = 1    
                  /*
                  if(this.turnCountNum >= newMonLimit){
                    var monChoice = [2,5,8]
                    var ran = Math.floor(Math.random() * 3)
                    this.monsterPool[monChoice[ran]].count = this.zone
                  }  
                  else{
                    var monChoice = [1,4,7]
                    var ran = Math.floor(Math.random() * 3)
                    this.monsterPool[monChoice[ran]].count = this.zone
                  }  
                    */               
                  break;                                                  
              } 


              if(this.turnCountNum % 2 !== 0 && this.turnCountNum > 0){
                this.monBaseCount+= 1+this.zone
                this.monEmergecut = this.monBaseCount-Math.floor(this.monBaseCount/2);
                if(this.turnCountNum > 1){
      
                }
            
              }     
              //spawn tutorial enemy
              if(parseInt(localStorage.getItem("intro")) == 8){
                this.spawnMonsters(false,this.tile['04'],2);  
                this.tile['04'].submerged = false;
                this.tile['04'].tint = '0xFFFFFF'
                this.spawnMonsters(false,this.tile['44'],2);  
                this.tile['44'].submerged = false;
                this.tile['44'].tint = '0xFFFFFF'
                this.spawnMonsters(false,this.tile['23'],2);  
                this.tile['23'].submerged = false;
                this.tile['23'].tint = '0xFFFFFF'


              }  
              //spawn lucky george
              //% 5 == 0
              if(this.turnCountNum % luckEmegrgePoint == 0  && !this.isNurseOnBoard && parseInt(localStorage.getItem("intro")) > 13){
                var ran = Math.floor(Math.random() * 2)
                var posX = 4-ran
                ran = Math.floor(Math.random() * 2)
                var posY = 0+ran
                this.spawnNurse(posX,posY);
                this.isNurseOnBoard = true;
                this.luckyID = ""+posY+posX
              }
              else if(this.isNurseOnBoard){
                //lucky mermaid health boost
                this.spawnBuff(this.tile[this.luckyID],'buff_health');
                this.tile[this.luckyID].statsHistory += "\n\n▪ LUCKY: +5 HP FROM GEORGE'S ABILITY"
                this.tile[this.luckyID].width += 25
                this.tile[this.luckyID].height + 25;
                this.tile[this.luckyID].hp+=5
              }

              //end of turn abilities
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){   
                  if(this.tile[''+j+i].monID == 6 && !this.tile[''+j+i].submerged){

                  }

                  //shadow rose ability
                  if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10 && this.capKey == 1){
                    if(this.deploy_poolCurrentHolder <= 0 && this.tile[''+j+i].isEnemyHere){
                    this.spawnBuff(this.tile[''+j+i],'buff_attack');
                    this.tile[''+j+i].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM SHADOW"
                    this.tile[''+j+i].power += 1                    
                    }
                  }
                  //shadow tyson ability
                  if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10  && this.capKey == 2){
                    if(!this.tile[''+j+i].smoke.on && this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged && !this.tile[this.bossID].monID == 10 ){
                    this.spawnBuff(this.tile[this.bossID],'buff_attack');
                    this.tile[this.bossID].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM SHADOW"
                    this.tile[this.bossID].power += 1                    
                    }
                  }  
                  //shadow crickett ability
                  if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10  && this.capKey == 3){
                    if(this.tile[''+j+i].submerged && this.tile[''+j+i].isEnemyHere){                  
                      this.tile[this.bossID].hp -=1
                      if(this.tile[this.bossID].hp <= 0 ){
                        this.enemyDie(this.tile[this.bossID])
                      }
                      this.setActionText(this.tile[this.bossID],1)                   

                    }
                  }  
                  //shadow caesar ability
                  if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10  && this.capKey == 4){
                    this.spawnBuff(this.tile[this.bossID],'buff_attack');
                    this.tile[this.bossID].statsHistory += "\n\n▪ ENRAGED: +5 FURY FROM SHADOW"
                    this.tile[this.bossID].power += 5    
                  } 
                  //shadow tsai ability
                  if(!this.bossID.includes("blank") && this.tile[this.bossID].monID == 10  && this.capKey == 5){
                    if(this.tile[''+j+i].isEnemyHere){  
                      this.spawnBuff(this.tile[''+j+i],'buff_health');
                      this.tile[''+j+i].statsHistory += "\n\n▪ BUFFED: +1 HP FROM SHADOW"
                      this.tile[''+j+i].hp += 1

                    }

                  }                                                               

                  //angry if blocked
                  
                  if(this.tile[''+j+i].wasBlocked){
                    this.tile[''+j+i].wasBlocked = false;
                    this.setActionText(this.tile[''+j+i],"😡") 
                    this.spawnBuff(this.tile[''+j+i],'buff_attack');
                    this.tile[''+j+i].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM BEING BLOCKED"
                    this.tile[''+j+i].power += 1
                  }                
                }
              }
              
              
                  
              
            
              
              //spawn boss
              if(this.turnCountNum >= this.bossEmegrgePoint && this.bossID.includes("blank") && !this.bossDead){
                switch(this.zone){
                  default:
                    var monChoice = [4,7,10]
                    var ran = Math.floor(Math.random() * 3)    
                    this.spawnBoss(monChoice[ran],2,2)            
                    
                    break;
                  case 1:
                    this.spawnBoss(4,2,2)   
                    break;
                  case 2:
                    this.spawnBoss(7,2,2)
                    break;
                  case 3:
                    this.spawnBoss(10,2,2)
                    
                    //captain specific stats
                    switch(this.capKey){
                      case 1:
                        this.tile[this.bossID].hp = 50
                        this.tile[this.bossID].power = 5
                        this.tile[this.bossID].origPower = this.tile[this.bossID].power
                      break;
                      case 2:
                        this.tile[this.bossID].hp = 50
                        this.tile[this.bossID].power = 1
                        this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                      break;
                      case 3:
                        this.tile[this.bossID].hp = 75
                        this.tile[this.bossID].power = 5
                        this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                      break;
                      case 4:
                        this.tile[this.bossID].hp = 50
                        this.tile[this.bossID].power = 5
                        this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                      break;
                      case 5:
                        this.tile[this.bossID].hp = 50
                        this.tile[this.bossID].power = 5
                        this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                      break;
                      case 6:
                        this.tile[this.bossID].hp = 75
                        this.tile[this.bossID].power = 5
                        this.tile[this.bossID].origPower = this.tile[this.bossID].power                      
                      break;                    
                    }
                    if(glassBosses){
                      this.tile[this.bossID].hp = 1
                    }                  
                    break;                            
                }
              }             
              else if(!this.bossID.includes("blank")){
                //boss move
                this.bossMove(this.bossID);
                if(this.turnCountNum == 0){
                  this.showMarker(1000,3000)
                  this.turnMarkerText.text = "YOUR TURN"        
                }
                else{
                  this.showMarker(1000,3000)
                  this.turnMarkerText.text = "YOUR TURN"
                  if(this.soulsSaved <= 0 && this.chestOpened<= 0){
                    this.turnMarkerText.text = "YOUR TURN"     
                    this.deploy_poolCurrent = this.deploy_poolMax;    
                    this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax  
                    //console.log("No chests or souls A")
                    //this.startNextZone(1000)
                  }                
                }                
              }
              else{
                if(this.turnCountNum == 0){
                  this.showMarker(1000,3000)
                  this.turnMarkerText.text = "YOUR TURN"        
                }
                else{
                  this.showMarker(1000,3000)
                  this.turnMarkerText.text = "YOUR TURN"
                  if(this.soulTriggers <= 0 && this.chestTriggers<= 0){
                    this.turnMarkerText.text = "YOUR TURN"     
                    this.deploy_poolCurrent = this.deploy_poolMax;    
                    this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax  
                    //console.log("No chests or souls B")
                    this.startNextZone(3000)
                  }                
                }               
              }
              
                      
              
            
              //alert(this.monBaseCount+" "+this.monEmergecut)
              
              

            


              // difficulty increases based on wave count
              if(this.turnCountNum >= 10 && this.turnCountNum%10 == 0){
                /*
                Toastify({
                  text: "CREEPS GROW STRONGER",
                  duration: 3000,
                  position: "center"
                  }).showToast();
                  
                  for(var k = 1 ; k < 10; k++){
                    if(this.monsterPool[k].count > 0){
                      this.monsterPool[k].count+=3;
                    }
                  }  
                    */              
              }

              this.tickerSpeed = tickerSpeedbase
            }

          } 

          this.surfaceCountTrigger = 0;
          this.surfaceCount = 0;             

          
        }
        , checkIncomingDamage: function(){
          
          //update incoming damage
          this.incomingTotal = 0;
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){   
              
              //set hit counter to 0
              this.tile[''+j+i].hitCount = 0;
              
              if(this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged && !this.tile[''+j+i].exhausted){
                this.addIncomingDamage(this.tile[''+j+i])
              }
            }
          }          
          //console.log("Total Incoming Damage "+ this.incomingTotal)      
              
        }
        , stopExhaustAnim: function(){
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){   
              this.tile[''+j+i].tired.animations.stop('snore', 2, true);  
            }
          }          
        }
        , checkExhaustedCount: function(){
          var exNum = 0;
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){   



              if(this.tile[''+j+i].tired.animations.isPlaying){
                this.tile[''+j+i].tired.animations.stop('snore', 2, true);  
              }


              if(this.tile[''+j+i].exhausted &&  !this.tile[''+j+i].submerged){
                exNum++
                // set boss to tired after attacking and moving
                if(this.tile[''+j+i].monID == 0){
                  this.tile[''+j+i].exhausted = false;
                  this.tile[''+j+i].tired.animations.stop('snore', 2, true);  

                  if(!this.tile[this.bossID].tired.animations.isPlaying){
                    this.tile[this.bossID].tired.animations.play('snore', 2, true);  
                    this.tile[this.bossID].exhausted = true;
                  }
                }
                else{
                  if(!this.tile[''+j+i].tired.animations.isPlaying){
                    this.tile[''+j+i].tired.animations.play('snore', 2, true);  
                  }
                }
                
              }
            }
          }          
          ////console.log("Total Exhausted "+ exNum)          
        }        
        ,returnCrew: function () {
          
          
          this.extraAttackFromCaptain = false;
          //reset captain power boosts
          
          for(var i = 1; i < this.crew.length; i++){
            this.crew[i].holderPower[10] = 0
            this.crew[i].holderPower[0] = 0
            this.crew[i].holderPower[24] = 0

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

                

                //this.tile[''+j+i].y  = this.tile[''+j+i].y+25//1000;
                this.tile[''+j+i].y  = this.tile[''+j+i].origY//1000;       
                this.add.tween(this.tile[''+j+i]).from( { y:this.tile[''+j+i].y+25 }, 500, Phaser.Easing.Elastic.Out, true);                  
                //crew return ability
                /*
                switch(this.tile[''+j+i].crewID){
                  case 1:
                    this.tile[''+j+i].y  = this.tile[''+j+i].y+25//1000;
                    break;
                  case 2:
                    this.tile[''+j+i].y  = this.tile[''+j+i].y+25//1000;
                    break;
                  case 3:
                    this.tile[''+j+i].y  = this.tile[''+j+i].y+25//1000;
                    break;
                  case 4:
                    this.tile[''+j+i].y  = this.tile[''+j+i].y+25//1000;
                    break;  
                  case 5:
                    
                    break; 
                  case 6:
                   
                    break;                                                                    
                } 
                    */               
                this.tile[''+j+i].crewID = 0
                //this.tile[''+j+i].monID = 0
                this.tile[''+j+i].isCrewHere = false;
                //this.tile[''+j+i].isEnemyHere = false;
                //this.tile[''+j+i].healthText.text = "";
                //this.tile[''+j+i].powerText.text = "";
                //this.tile[''+j+i].healthText.alpha = 0
                //this.tile[''+j+i].powerText.alpha = 0;
                
                this.tile[''+j+i].multiAttack = 1;
                this.tile[''+j+i].hasActed = false;         
  
                //j =  this.boardWidth
                //i = this.boardHeight
                //break;
              }

            }
          }  
          for(var i = 1; i < this.crew.length; i++){
            this.crew[i].deployCost = this.crew[i].origDeployCost
            this.crew[i].isSelected = false;
            this.crew[i].isDeployed = false
            this.crew[i].deployNum.alpha = 0;
             
          }    
          this.removeTint();
          //next phase  
          
          //track chest or souls opened
          this.chestOpened = this.chestTriggers;
          this.chestTriggers = 0;
          if(this.chestOpened > 0){
            this.gatheredChest_Ticker.alpha = 1;
            this.gatheredChest_Ticker.text = -1//this.chestOpened;
          }

          this.soulsSaved = this.soulTriggers
          this.soulTriggers = 0;    
          if(this.soulsSaved > 0){
            this.gatheredSouls_Ticker.alpha = 1;
            this.gatheredSouls_Ticker.text = -1//this.soulsSaved;
          }                
            


            
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
        ,endDeployPhase: function (tile,pointer) {
          if(pointer.rightButton.isDown){

          }
          else{
            if(this.pauseFight <= 0){
              if(parseInt(localStorage.getItem("intro")) < 8){
  
                for(var k = 1; k < this.crew.length; k++){
                  if(this.crew[k].id == 91 ){
                    if(parseInt(localStorage.getItem("intro"))== 2){
                      this.crewSpeak(k,"Deploy your crew to grab that treasure & save that sailor",quickspeechTimerBase)
                    }
                    if(parseInt(localStorage.getItem("intro")) == 5){
                      this.setFocus(200,this.ult_Button.x,this.ult_Button.y)   
                      this.crewSpeak(2,"Don't forget your ability, Captain!",quickspeechTimerBase)
                    }
                    if(parseInt(localStorage.getItem("intro"))== 4){
                      this.crewSpeak(4,"Place me next to the Distress Flag!",quickspeechTimerBase)
                      for(var m = 0; m < this.boardHeight; m++){
                        for(var l = 0; l < this.boardWidth; l++){  
                          if(this.tile[''+l+m].monID == 102){
                            this.setFocus(300,this.tile[''+(l-1)+m].x,this.tile[''+l+m].y)   
                          }
                        }
                      }                        
                    }
                    
                  }   
                }   
                    
                for(var k = 1; k < this.crew.length; k++){
                  if(this.crew[k].id == 1 && parseInt(localStorage.getItem("intro")) == 4){
                    this.crewSpeak(k,"Let's get that treasure.\nDeploy me", quickspeechTimerBase)

                  }
                  if(this.crew[k].id == 90 && parseInt(localStorage.getItem("intro")) == 5){
                    //this.crewSpeak(k,"Don't forget to deploy me!")
                  }                               
                } 
                          
              }        
              else if(parseInt(localStorage.getItem("intro")) < 10 && parseInt(localStorage.getItem("intro")) > 8){
          
                for(var k = 1; k < this.crew.length; k++){
                  if(this.crew[k].id == 1){
                    for(var m = 0; m < this.boardHeight; m++){
                      for(var l = 0; l < this.boardWidth; l++){  
                        if(this.tile[''+l+m].isEnemyHere && this.tile[''+l+m].submerged){
                          this.setFocus(200,this.tile[''+l+m].x,this.tile[''+l+m].y)   
                        }
                      }
                    }                
                    this.crewSpeak(k,"BLOCK that SUBMERGED creep",quickspeechTimerBase)
                  }                              
                } 
  
              }  
              else if(parseInt(localStorage.getItem("intro")) == 11){

              }              
              else{
                if(this.deployReady){
                  
                  this.focusHereTimer = 0;
                  
                  this.fightReady.play()

                  this.beginTint = false;
  
                  this.endTurn_Button.width -= 25;
                  this.endTurn_Button.height -= 25;
  
                  this.endTurn_Button_outline.width -= 25;
                  this.endTurn_Button_outline.height -= 25;
  
  
                  this.actionTimer = 0;
                  this.placeOrderTracker = 0;
  
                  this.endbuttonTimer = 10
                  this.turnWait = 1;
                  this.phaseCounter++        
                  this.turnMarkerText.text = ""
  
                  this.deployReady = false;  
                  //savvy turns to salt
                  for(var i = 0; i< this.deploy_poolCurrent; i++){
                  }
                  
                  //this.deploy_poolCurrent = 0;
  
                  //this.capEnergy += this.deploy_poolCurrent
                  //this.deploy_poolCurrent -= this.deploy_poolCurrent
  
                  this.deployCrewCount = 0 ;
                  //check how many crew deployed
                  for(var i = 0; i < this.boardHeight; i++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      
                      //this.tile[''+j+i].exhausted = false;
                      //this.tile[''+j+i].tired.animations.stop('snore',true);                        

                      if(this.tile[''+j+i].isCrewHere ){
                        this.deployCrewCount++
                      }
                    }
                  }
                  //Phish unlock
                  this.harpoonsDeployedVoyage += this.deployedHarpoons
                  if(this.harpoonsDeployedVoyage  >= 10){
                    this.unlockCrewmate(51)
                  }    
                  //Fry unlock
                  if(this.harpoonsDeployedVoyage  >= 15){
                    this.unlockCrewmate(60)
                  } 
                  
                  //Mary unlock
                  if(this.deploy_poolCurrent  >= 3){
                    this.unlockCrewmate(34)
                  }       
                  
                  //crew length tracker
                  var crewLength = 0
                  for(var i = 0; i < this.boardHeight; i++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      if(this.tile[''+j+i].isCrewHere){
                        crewLength++
                      }
                    }
                  }              
                                
                      
                  //Jasper Unlock
                  if((crewLength)% 2 == 1 || (crewLength) == 0){
                    this.unlockCrewmate(29)
                  }
                  else{
                    //Imogen Unlock 
                    this.unlockCrewmate(30)
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
                
                

                if(this.tile[''+j+i].crewID ==80){
                  this.explodeSnd.play()
                }
                else{
                  //var ran = Math.floor(Math.random() * 2)+1
                  //this.attackSnd[ran].play()                  
                }                

                this.placeOrderTracker++;
                //attacks multiple times
                if(this.tile[''+j+i].multiAttack > 1){
                  this.tile[''+j+i].multiAttack--;
                  this.tile[''+j+i].hasAttacked = false
                  this.ActionCounter--;
                  this.placeOrderTracker--;
                }                   
                this.tile[''+j+i].width  += 25;
                this.tile[''+j+i].height += 25;



                //attack ripple
                //this.resetRipple();
                //this.tile[''+j+i].rippleTrig = 1
                //this.tile[''+j+i].rippleDir = 0;                
                

                
                for(var z = 1; z < this.crew.length; z++){
                  if(this.crew[z].id == this.tile[''+j+i].crewID ){

                    this.selectedCrew = this.crew[z].arrayKey
                    this.noPickUp = true;    
                    this.crew[z].deployNum.alpha = 0
                    
                 
                   

                    switch(parseInt(this.crew[z].attackPattern)){
                      //normal
                      case 1:
                        var posX = this.game.width/2
                        var posY =  this.game.height/2
                        if(this.tile[''+j+i].x > posX){
                          posX += 25
                        }
                        if(this.tile[''+j+i].x < posX){
                          posX -= 25
                        }
                        if(this.tile[''+j+i].y > posY){
                          posY += 25
                        }
                        if(this.tile[''+j+i].y < posY){
                          posY -= 25
                        }                        
                        ///this.game.camera.focusOnXY(posX,posY)
                        //this.game.camera.scale.x = 1.25//this.camerZoom;
                        //this.game.camera.scale.y = 1.25//this.camerZoom;          

                                         
                        this.spawnAttack(this.tile[''+j+i],this.tile[''+(j+1)+(i)],0)
                        this.spawnAttack(this.tile[''+j+i],this.tile[''+(j-1)+(i)],0)
                        this.spawnAttack(this.tile[''+j+i],this.tile[''+(j)+(i+1)],0)
                        this.spawnAttack(this.tile[''+j+i],this.tile[''+(j)+(i-1)],0)                     

                        /*
                        this.crewAttackTile(this.tile[''+(j+1)+(i)],this.tile[''+j+i])
                        this.crewAttackTile(this.tile[''+(j-1)+(i)],this.tile[''+j+i])
                        this.crewAttackTile(this.tile[''+(j)+(i+1)],this.tile[''+j+i])
                        this.crewAttackTile(this.tile[''+(j)+(i-1)],this.tile[''+j+i])  
                        */                        
                        break;
                      //col strike 
                      case 2:
                        /*
                        this.loopCounter = -1;
                        for(var l = 0; l < this.boardHeight; l++){
                          for(var m = 0; m < this.boardWidth; m++){
                            if(j == m){

                              this.loopCounter++;    
                              
                              //this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)
                              this.timer = this.game.time.create(true);
                              this.timer.add(300*this.loopCounter, this.crewAttackTile, this,this.tile[''+(m)+(l)],this.tile[''+j+i].crewID);
                              this.timer.start();                              
                              //this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)          
                            }
                          }
                        }  
                        */
                        this.loopCounter = -1;
                        var holderArray = []
                        for(var l = 0; l < this.boardHeight; l++){
                          for(var m = 0; m < this.boardWidth; m++){         
                            if(j == m){
                                  
                              this.loopCounter++;    
                              var distY = Math.abs(i-l)
                              
                              if(holderArray[distY]  === undefined){
                                holderArray[distY] = []
                                holderArray[distY][0] = this.tile[''+(m)+(l)] 
                              }
                              else{
                                var length = holderArray[distY].length
                                holderArray[distY][length] = []
                                holderArray[distY][length] = this.tile[''+(m)+(l)] 
                              }
      
                            }

                          }                          

                                                
                        }   
                              
                        holderArray.sort(function(a, b){return a-b});
                        ////console.log(holderArray)
                        this.loopCounter = -1;
                        for (const tile of holderArray) {  
                          //this.crewAttackTile(tile,this.tile[''+j+i].crewID)   
                          this.loopCounter++; 
                          for (const innerArray of tile){
                            this.spawnAttack(this.tile[''+j+i],this.tile[''+(j)+(i-1)],0)   
                            this.timer = this.game.time.create(true);
                            //this.timer.add(150*this.loopCounter, this.crewAttackTile, this, innerArray,this.tile[''+j+i]);
                            this.timer.add(150*this.loopCounter, this.spawnAttack, this, this.tile[''+j+i],innerArray,0);
                            this.timer.start();
                          }

                        }                                                    
                        break;    
                      //row strike 
                      case 3:
                        this.loopCounter = -1;
                        var holderArray = []
                        for(var l = 0; l < this.boardHeight; l++){
                          for(var m = 0; m < this.boardWidth; m++){         
                            if(i == l){
                                  
                              this.loopCounter++;    
                              var distX = Math.abs(j-m)
                              
                              if(holderArray[distX]  === undefined){
                                holderArray[distX] = []
                                holderArray[distX][0] = this.tile[''+(m)+(l)] 
                              }
                              else{
                                var length = holderArray[distX].length
                                holderArray[distX][length] = []
                                holderArray[distX][length] = this.tile[''+(m)+(l)] 
                              }
      
                            }

                          }                          

                                                
                        }   
                              
                        holderArray.sort(function(a, b){return a-b});
                        ////console.log(holderArray)
                        this.loopCounter = -1;
                        for (const tile of holderArray) {  
                          this.loopCounter++; 
                          //this.crewAttackTile(tile,this.tile[''+j+i].crewID)   
                          for (const innerArray of tile){
                             
                            this.timer = this.game.time.create(true);
                            //this.timer.add(150*this.loopCounter, this.crewAttackTile, this, innerArray,this.tile[''+j+i]);
                            this.timer.add(150*this.loopCounter, this.spawnAttack, this, this.tile[''+j+i],innerArray,0);
                            this.timer.start();
                          }

                        }                        

                                      
                        break;
                        //area     
                        case 4:

                          this.spawnAttack(this.tile[''+j+i],this.tile[''+(j+1)+(i)],0)  
                          this.spawnAttack(this.tile[''+j+i],this.tile[''+(j-1)+(i)],0)  
                          this.spawnAttack(this.tile[''+j+i],this.tile[''+(j)+(i+1)],0)  
                          this.spawnAttack(this.tile[''+j+i],this.tile[''+(j)+(i-1)],0)  

                          this.spawnAttack(this.tile[''+j+i],this.tile[''+(j+1)+(i+1)],0)  
                          this.spawnAttack(this.tile[''+j+i],this.tile[''+(j-1)+(i-1)],0)  
                          this.spawnAttack(this.tile[''+j+i],this.tile[''+(j-1)+(i+1)],0)  
                          this.spawnAttack(this.tile[''+j+i],this.tile[''+(j+1)+(i-1)],0)  
                                                                                
                        break;    
                        case 5:
                          //fight row and col
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(j == m){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i])          
                              }
                            }
                          }                        
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(i == l){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i])          
                              }
                            }
                          }                                                            
                        break; 
                        case 6:
                          //fight all smoke
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(this.tile[''+(m)+(l)].smoke.on){
                                  
                                this.spawnAttack(this.tile[''+j+i],this.tile[''+(m)+(l)],0)        
                              }
                            }
                          }                              
                          break;
                        case 7:
                          // fight all submerged
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(this.tile[''+(m)+(l)].submerged){
                                this.spawnAttack(this.tile[''+j+i],this.tile[''+(m)+(l)],0)                
                              }
                            }
                          }                              
                          break;          
                        case 8:
                          //all not submerged
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(!this.tile[''+(m)+(l)].submerged && this.tile[''+(m)+(l)].isEnemyHere){
                                this.spawnAttack(this.tile[''+j+i],this.tile[''+(m)+(l)],0)            
                              }
                            }
                          }                              
                          break; 
                          case 9:
                            // fight all
                            for(var l = 0; l < this.boardHeight; l++){
                              for(var m = 0; m < this.boardWidth; m++){
                                if(this.tile[''+(m)+(l)].isEnemyHere){
                                  this.spawnAttack(this.tile[''+j+i],this.tile[''+(m)+(l)],0)        
                                }
                              }
                            }                              
                            break;    
                                                                 
                                                                                 
                    }  
                    
                    //crew combat trigger
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
                      case 39:                
                        break;  
                      case 47:
                        if(this.freeCounter[5].num > 0){
                          this.freeCounter[5].num -=2              
                          this.freeCounter[5].counter2.alpha = 1
                          this.freeCounter[5].counter2.text = "-2💣"    
                        }
        
                        break;   
                      case 62: 
                        this.spawnAttack(this.tile[''+j+i],this.cap_health)                                           
        
                        break;                                                                        
                      case 80:   
                        //bomb explodes
                        
                        if(this.tile[''+j+i].hasAttacked){
                          this.removeTint();
                          this.tile[''+j+i].y  = this.tile[''+j+i].origY//1000;       
                          this.add.tween(this.tile[''+j+i]).from( { y:this.tile[''+j+i].y+25 }, 500, Phaser.Easing.Elastic.Out, true);                          
                          if(!this.tile[''+j+i].isEnemyHere){
                            this.tile[''+j+i].loadTexture('tile');   
                          }


                          this.tile[''+j+i].tint = '0x000000'   
                          //this.tile[''+j+i].crewID = 0
                          //this.tile[''+j+i].monID = 0
                          this.tile[''+j+i].isCrewHere = false;

                          //this.tile[''+j+i].isEnemyHere = false;
                          //this.tile[''+j+i].healthText.text = "";
                          //this.tile[''+j+i].powerText.text = "";
                          this.tile[''+j+i].healthText.alpha = 0
                          this.tile[''+j+i].powerText.alpha = 0;
                          this.tile[''+j+i].placeOrder = -1;

                          this.tile[''+j+i].bombExplode.makeParticles('smoke');
                          this.tile[''+j+i].bombExplode.setScale(0.5,0.5,0.5,0.5);
                          this.tile[''+j+i].bombExplode.minParticleSpeed.set(-200, -200);
                          this.tile[''+j+i].bombExplode.maxParticleSpeed.set(200, 200);
                          this.tile[''+j+i].bombExplode.setAlpha(1, 0.2, 1500);                        
                          this.tile[''+j+i].bombExplode.explode(2000,10);
                        }
                           
                        
                        //this.tile[''+j+i].isCrewHere = false;
                        //this.tile[''+j+i].hasActed = false;                                       
                        break;
                        case 81:   
                        //harpoons disappear
                        
                        if(this.tile[''+j+i].hasAttacked){
                          this.removeTint();
                          this.tile[''+j+i].y  = this.tile[''+j+i].origY//1000;       
                          this.add.tween(this.tile[''+j+i]).from( { y:this.tile[''+j+i].y+25 }, 500, Phaser.Easing.Elastic.Out, true);  
                          if(!this.tile[''+j+i].isEnemyHere){
                            this.tile[''+j+i].loadTexture('tile');   
                          }    

                      
                          this.tile[''+j+i].tint = '0x000000' 
                          //this.tile[''+j+i].crewID = 0
                          //this.tile[''+j+i].monID = 0
                          this.tile[''+j+i].isCrewHere = false;
                          //this.tile[''+j+i].isEnemyHere = false;

                          //this.tile[''+j+i].healthText.text = "";
                          //this.tile[''+j+i].powerText.text = "";
                          this.tile[''+j+i].healthText.alpha = 0
                          this.tile[''+j+i].powerText.alpha = 0;
                          this.tile[''+j+i].placeOrder = -1;

                        }
                           
                        
                        //this.tile[''+j+i].isCrewHere = false;
                        //this.tile[''+j+i].hasActed = false;                                       
                        break;                        
                        case 10:          
                        /* 
                        var makeAmmoChance = Math.floor(Math.random() * 4);    
                        if(makeAmmoChance  == 0 ){
                          this.freeCounterNum++;
                          this.freeCounterText2.alpha = 1
                          this.freeCounterText2.text = "+1"                           
                          this.setActionText(this.tile[''+j+i],"+1💣")
                        } 
                        */                            
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
            

            
            //this.turnMarker.y = this.game.height/2 
            //this.add.tween(this.turnMarker).from( { y:this.game.height+this.game.height/2 }, 2000, Phaser.Easing.Circular.InOut, true);            
            

          //marker timer
          this.timer = this.game.time.create(true);
          this.timer.add(1000, function(){
            this.showMarker(1000,3000)           
          },this);
          this.timer.start();       

            this.turnMarkerText.text = "ENEMY TURN"           
            this.phaseCounter++;  
            
            this.turnWait = turnWaitBase;
            this.ActionCounter = 0;
            //this.placeOrderTracker = 0;
            this.placeOrderKey = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){   
                this.tile[''+j+i].hasActed = false;
                this.tile[''+j+i].hasAttacked = false;
                this.tile[''+j+i].placeOrder = -1;
                this.tile[''+j+i].multiAttack = this.tile[''+j+i].origmultiAttack                
              }
            }             
          }
          else{
            this.phaseStart = true;
            this.actionTimer = attackTimerBase 
            //this.game.time.events.add(5000, this.enemyFight());
          }          
        }  
        ,crewAttackTile: function (enemy,attkCrew) {   
          try{
            
           // if(enemy.isEnemyHere && ((!enemy.submerged) || (enemy.submerged && crewID == 6))){
            if(enemy.isEnemyHere && ((!enemy.submerged))){
              
              this.game.plugins.screenShake.shake(15)

              enemy.hitCount++
              //Aki Unlock
              if(enemy.hitCount >= 3){
                this.unlockCrewmate(39)
              }
              
              /*
              if(crewID == 6 && enemy.submerged){
                enemy.isFlipping = true;
                enemy.oldTexture = enemy.texture;   
                enemy.submerged = false; 
              }
              */
              //if intagible 1/2 damage
              var damage = 0
              if(enemy.alpha == 1){
                //this.hitStop = 10;      

                
                if(attkCrew.powerText.text.includes("Ꝏ")){
                  damage = 99
                }
                else{
                  damage = parseInt(attkCrew.powerText.text)
                }
                //bombs instant kill rocks
                if(enemy.monID == 103 && attkCrew.crewID == 80){
                  damage = enemy.hp
                }
                //instantly kill small enemies
                if(enemy.hp <= 4 && attkCrew.crewID == 17){
                  damage = enemy.hp
                }                
                // smoking instant kill
                if(attkCrew.crewID == 13 && enemy.smoke.on){
                  damage = enemy.hp
                }

                //apply smoking else deal super damage
                if(attkCrew.crewID == 27 && !enemy.smoke.on){
                  enemy.smoke.on = true;
                  enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"
                }    
                else if(attkCrew.crewID == 27 && enemy.smoke.on){
                  //enemy.smoke.on = false;
                  damage += 3
                }            
                //smoking grunt extra damage & apply smoking if not
                if((attkCrew.crewID == 93 || attkCrew.crewID == 94 || attkCrew.crewID == 95 || attkCrew.crewID == 100) && enemy.smoke.on){
                  damage += 1
                } 
                else if((attkCrew.crewID == 93 || attkCrew.crewID == 94 || attkCrew.crewID == 95 || attkCrew.crewID == 100) && !enemy.smoke.on){
                  enemy.smoke.on = true;
                  enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"
                }
                //if large extra damage
                if(attkCrew.crewID == 53 && enemy.hp > largeThresh){
                  damage += 2;
                }   
                //if small heal captain
                if(attkCrew.crewID == 54 && enemy.hp <= largeThresh){
                  this.healthCount+= 1
                  this.healCaptain(1)
                }                                   
                //upwind extra damage
                if(attkCrew.crewID == 32 && attkCrew.y > enemy.y){
                  damage += 2;
                }   
                //downwind extra damage
                if(attkCrew.crewID == 33 && attkCrew.y < enemy.y){
                  damage += 2;
                }                               
                //some crew deal no direct damage   
                if(attkCrew.crewID != 49){
                  enemy.hp -= Math.floor(damage)
                  this.setActionText(enemy,Math.floor(damage))   
                } 
                
              }
              else{
                //intaginble is half power
                //this.hitStop = 10;      
                if(attkCrew.powerText.text.includes("Ꝏ")){
                  damage = 99
                }
                else{
                  damage = parseInt(attkCrew.powerText.text)/2
                }
                //instantly kill small enemies
                if(enemy.hp <= 3 && attkCrew.crewID == 17){
                  damage = enemy.hp
                }                     
                // smoking instant kill
                if(attkCrew.crewID == 13 && enemy.smoke.on){
                  damage = enemy.hp
                }
                //apply smoking else deal super damage
                if(attkCrew.crewID == 27 && !enemy.smoke.on){
                  enemy.smoke.on = true;
                  enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"
                }    
                else if(attkCrew.crewID == 27 && enemy.smoke.on){
                  //enemy.smoke.on = false;
                  damage += 3
                }               
                //smoking grunt extra damage & apply smoking if not
                if((attkCrew.crewID == 93 || attkCrew.crewID == 94 || attkCrew.crewID == 95 || attkCrew.crewID == 100) && enemy.smoke.on){
                  damage += 1
                }     
                else if((attkCrew.crewID == 93 || attkCrew.crewID == 94 || attkCrew.crewID == 95 || attkCrew.crewID == 100) && !enemy.smoke.on){
                  enemy.smoke.on = true;
                  enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"
                }                
                //if large extra damage
                if(attkCrew.crewID == 53 && enemy.hp > largeThresh){
                  damage += 2;
                }      
                //if small heal captain
                if(attkCrew.crewID == 54 && enemy.hp <= largeThresh){
                  this.healthCount+= 1
                  this.healCaptain(1)
                }                                  
                //upwind extra damage
                if(attkCrew.crewID == 32 && attkCrew.y > enemy.y){
                  damage += 2;
                }   
                //downwind extra damage
                if(attkCrew.crewID == 33 && attkCrew.y < enemy.y){
                  damage += 2;
                }
                //some crew deal no direct damage   
                if(attkCrew.crewID != 49){
                  enemy.hp -= Math.floor(damage)
                  this.setActionText(enemy,Math.floor(damage))   
                }                             
                             
                /*  
                for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){   
                    if(this.tile[''+j+i].crewID == crewID){
                      //this.setActionText(this.tile[''+j+i],"MISSED")
                    //intaginble is half power
                    enemy.hp -= Math.floor(this.crew[i].power/2)
                    
                    //this.hitStop = 10;      
                    this.setActionText(enemy,Math.floor(this.crew[i].power/2))                
                    }
                  }
                }                    
                */     
                
              }
              //enemy.spinSpeed = this.crew[crewID].power*10
              enemy.springX = 100;
              //enemy.springY = 100;

             //crew on hurting enemy ability
             switch(attkCrew.crewID){
              case 10:
                /*
                var makeAmmoChance = Math.floor(Math.random() * 4);    
                if(makeAmmoChance  == 0 ){
                  this.freeCounterNum++;
                  this.freeCounterText2.alpha = 1
                  this.freeCounterText2.text = "+1"                           
                  this.setActionText(this.tile[''+j+i],"+1💣")
                }       
                */            
                break;
              case 13:
                break;
              case 39:
                this.knockBack(enemy,attkCrew)
                break;
              case 40:
                var holder = enemy.power
                enemy.power = enemy.hp
                enemy.hp = holder
                break;    
              case 42:
                if(enemy.smoke.on){
                  this.knockBack(enemy,attkCrew)
                }
                else{
                  enemy.smoke.on = true;
                  enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"
                }
                break;   
              case 43:
                if( (this.turnCountNum%3 == 0 && this.turnCountNum > 1) || this.turnCountNum == 1){
                  if(!enemy.smoke.on){
                    enemy.smoke.on = true;
                    enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"
                  }

                }
                break;  
              case 44:
                if( this.turnCountNum%2 == 0 && this.turnCountNum > 0){
                  this.knockBack(enemy,attkCrew)
                }
                break;   
              
              case 49:
                enemy.power -= damage;
                if(enemy.power < 0){
                  enemy.power = 0
                }
                break; 
                
              case 57:
                if(enemy.submerged){
                  enemy.isFlipping = true;
                  enemy.submerged = false;
                }

                break;                 
             }
              enemy.width  += 25;
              enemy.height += 25;  
              //enemy on hurt ability
              switch(enemy.monID){
                case 5:
                  enemy.power += 1
                  enemy.statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM TAKING DAMAGE"
                  break;                  
                case 6:
                  //enemy.power += 2                   
                  break;
                case 7:
                  enemy.power += 2  
                  enemy.statsHistory += "\n\n▪ ENRAGED: +2 FURY FROM TAKING DAMAGE"                   
                  break;
                case 8: 
                  break;
                case 9:
              
                  break; 
                case 10:   
                if(this.capKey == 4){
                  enemy.power -= 2 
                }
                
                /*
                for(var z = 1; z < this.crew.length; z++){
                    if(attkCrew.crewID == this.crew[z].id && (this.crew[z].id != 80 && this.crew[z].id != 81)){
                      this.crew[z].curseVal+= 2
                      this.crew[z].width-=50;
                      this.crew[z].height+=50;
                      this.crew[z].cursed.animations.play('poof', 8, false);  
                      this.crew[z].tintTimer = 50;
                      this.crew[z].tint = "0x800080"                                              
                    }
                  }     
                */           
               break;

              }   
              
              if(enemy.hp <= 0){
                enemy.hp = 0;
                this.enemyDie(enemy,attkCrew.crewID)
              }
              //this.enemyDie(enemy)
            }

            if(enemy.isEnemyHere && !enemy.isCrewHere && ((enemy.submerged)) && (attkCrew.crewID == 81 || attkCrew.crewID == 57) ){
              
              this.game.plugins.screenShake.shake(15)

              enemy.hitCount++
              //Aki Unlock
              if(enemy.hitCount >= 3){
                this.unlockCrewmate(39)
              }              
              /*
              if(crewID == 6 && enemy.submerged){
                enemy.isFlipping = true;
                enemy.oldTexture = enemy.texture;   
                enemy.submerged = false; 
              }
              */
              //if intagible 1/2 damage
              if(enemy.alpha == 1){
                //this.hitStop = 10;      
                var damage = 0
                if(attkCrew.powerText.text.includes("Ꝏ")){
                  damage = 99
                }
                else{
                  damage = parseInt(attkCrew.powerText.text)
                }
                //bombs instant kill rocks
                if(enemy.monID == 103 && attkCrew.crewID == 80){
                  damage = enemy.hp
                }
                //instantly kill small enemies
                if(enemy.hp <= 4 && attkCrew.crewID == 17){
                  damage = enemy.hp
                }                
                // smoking instant kill
                if(attkCrew.crewID == 13 && enemy.smoke.on){
                  damage = enemy.hp
                }

                //apply smoking else deal super damage
                if(attkCrew.crewID == 27 && !enemy.smoke.on){
                  enemy.smoke.on = true;
                  enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"    
                }    
                else if(attkCrew.crewID == 27 && enemy.smoke.on){
                  //enemy.smoke.on = false;
                  damage += 3
                }                
                //smoking grunt extra damage & apply smoking if not
                if((attkCrew.crewID == 93 || attkCrew.crewID == 94 || attkCrew.crewID == 95 || attkCrew.crewID == 100) && enemy.smoke.on){
                  damage += 1
                }        
                else if((attkCrew.crewID == 93 || attkCrew.crewID == 94 || attkCrew.crewID == 95 || attkCrew.crewID == 100) && !enemy.smoke.on){
                  enemy.smoke.on = true;
                  enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"    
                }                  
                //if large extra damage
                if(attkCrew.crewID == 53 && enemy.hp > largeThresh){
                  damage += 2;
                }      
                //if small heal captain
                if(attkCrew.crewID == 54 && enemy.hp <= largeThresh){
                  this.healthCount+= 1
                  this.healCaptain(1)
                }                                  
                //upwind extra damage
                if(attkCrew.crewID == 32 && attkCrew.y > enemy.y){
                  damage += 2;
                }   
                //downwind extra damage
                if(attkCrew.crewID == 33 && attkCrew.y < enemy.y){
                  damage += 2;
                }                      
                enemy.hp -= Math.floor(damage)
                this.setActionText(enemy,Math.floor(damage))   
                
              }
              else{
                //intaginble is half power
                //this.hitStop = 10;      
                var damage = 0
                if(attkCrew.powerText.text.includes("Ꝏ")){
                  damage = 99
                }
                else{
                  damage = parseInt(attkCrew.powerText.text)/2
                }
                //instantly kill small enemies
                if(enemy.hp <= 3 && attkCrew.crewID == 17){
                  damage = enemy.hp
                }                     
                // smoking instant kill
                if(attkCrew.crewID == 13 && enemy.smoke.on){
                  damage = enemy.hp
                }
                //apply smoking else deal super damage
                if(attkCrew.crewID == 27 && !enemy.smoke.on){
                  enemy.smoke.on = true;
                  enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"    
                }    
                else if(attkCrew.crewID == 27 && enemy.smoke.on){
                  //enemy.smoke.on = false;
                  damage += 3
                }                
                //smoking grunt extra damage & apply smoking if not
                if((attkCrew.crewID == 93 || attkCrew.crewID == 94 || attkCrew.crewID == 95 || attkCrew.crewID == 100) && enemy.smoke.on){
                  damage += 1
                }   
                else if((attkCrew.crewID == 93 || attkCrew.crewID == 94 || attkCrew.crewID == 95 || attkCrew.crewID == 100) && !enemy.smoke.on){
                  enemy.smoke.on = true;
                  enemy.statsHistory += "\n\n▪ DEBUFFED: SMOKING DEBUFF APPLIED BY CREW"                     
                }                      
                //if large extra damage
                if(attkCrew.crewID == 53 && enemy.hp > largeThresh){
                  damage += 2;
                }        
                //if small heal captain
                if(attkCrew.crewID == 54 && enemy.hp <= largeThresh){
                  this.healthCount+= 1
                  this.healCaptain(1)
                }                                
                //upwind extra damage
                if(attkCrew.crewID == 32 && attkCrew.y > enemy.y){
                  damage += 2;
                }   
                //downwind extra damage
                if(attkCrew.crewID == 33 && attkCrew.y < enemy.y){
                  damage += 2;
                }                          
                enemy.hp -= Math.floor(damage)
                this.setActionText(enemy,Math.floor(damage))                                
                /*  
                for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){   
                    if(this.tile[''+j+i].crewID == crewID){
                      //this.setActionText(this.tile[''+j+i],"MISSED")
                    //intaginble is half power
                    enemy.hp -= Math.floor(this.crew[i].power/2)
                    
                    //this.hitStop = 10;      
                    this.setActionText(enemy,Math.floor(this.crew[i].power/2))                
                    }
                  }
                }                    
                */     
                
              }
              //enemy.spinSpeed = this.crew[crewID].power*10
              enemy.springX = 100;
              //enemy.springY = 100;

             //crew on hurting enemy ability
             switch(attkCrew.crewID){
              case 10:
                /*
                var makeAmmoChance = Math.floor(Math.random() * 4);    
                if(makeAmmoChance  == 0 ){
                  this.freeCounterNum++;
                  this.freeCounterText2.alpha = 1
                  this.freeCounterText2.text = "+1"                           
                  this.setActionText(this.tile[''+j+i],"+1💣")
                }       
                */            
                break;
              case 13:

                break;
              case 57:
                if(enemy.submerged){
                  enemy.isFlipping = true;
                  enemy.submerged = false;

                  this.spawnSplash(enemy.id);
                }

                break;                
             }
              enemy.width  += 25;
              enemy.height += 25;  
              //enemy on hurt ability
              switch(enemy.monID){
                case 5:
                  enemy.power += 1
                  
                  break;                  
                case 6:
                  //enemy.power += 2                   
                  break;
                case 7:
                  enemy.power += 5                      
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
                this.enemyDie(enemy,attkCrew.crewID)
              }
              //this.enemyDie(enemy)
            }            
          }
          catch(e){

          }

        }
        ,unlockCrewmate: function (id){
          if(localStorage.getItem("crew_unlocked-"+id) === null && parseInt(localStorage.getItem("intro")) >= 14){
            var unlockList = localStorage.getItem("unlockedCrewList")
            localStorage.setItem("unlockedCrewList",unlockList+""+id+",")
            localStorage.setItem("crew_unlocked-"+id,1)

            this.notyf.success(crew[id].name+' UNLOCKED!');

            try{
              if (!client.achievement.isActivated('NEW_ACHIEVEMENT_1_'+id)) {
                client.achievement.activate('NEW_ACHIEVEMENT_1_'+id)
              } 
            }
            catch(e){

            }   
            
          }
        }
        , loadStats: function(){
            this.freeCounter[5].num = parseInt(localStorage.getItem("prevBombCount"))
            this.freeCounter[6].num = parseInt(localStorage.getItem("prevHarpoonCount"))     
            this.reRoll_Counter = parseInt(localStorage.getItem("prevreRoll_Counter"))

            for(var z = 1; z < this.crew.length; z++){
              var bonusLength = parseInt(localStorage.getItem("crew"+z+"-bonusLength"))
              this.crew[z].origPower = parseInt(localStorage.getItem("crew"+z+"-origPower"))
              this.crew[z].deployCost = parseInt(localStorage.getItem("crew"+z+"-deployCost"))
              this.crew[z].origDeployCost = this.crew[z].deployCost
              //carry over curse
              this.crew[z].curseVal = parseInt(localStorage.getItem("crew"+z+"CurseVal") );
            
              // carry over bonuses
              for(var key = 0; key < bonusLength; key++){
                this.crew[z].holderPower[key] = parseInt(localStorage.getItem("crew"+z+"-bonus-"+key))
              }  
              // carry over kill count
              this.crew[z].killCount = parseInt(localStorage.getItem("crew"+z+"KillCount"))                                 
            }

          //key action tracker that reset per voyage
          if(this.zone == 1){
            this.submergedKillCount = 0
            this.harpoonsDeployedVoyage = 0
            this.bombsGained = 0;
            this.harpoonsGained = 0;
            this.savvyGained = 0
            this.creepsBlocked = 0;
            this.creepMisses = 0;
            this.creepsKnockedBack = 0;

            this.steelKills = 0;
            this.saltKills = 0
            this.smokeKills = 0            
          }
          else{
            this.submergedKillCount = parseInt(localStorage.getItem("actionTracker_submergedKillCount"))
            this.harpoonsDeployedVoyage = parseInt(localStorage.getItem("actionTracker_harpoonsDeployedVoyage"))
            this.bombsGained = parseInt(localStorage.getItem("actionTracker_bombsGained"))
            this.harpoonsGained = parseInt(localStorage.getItem("actionTracker_harpoonsGained"))
            this.savvyGained = parseInt(localStorage.getItem("actionTracker_savvyGained"))
            this.creepsBlocked = parseInt(localStorage.getItem("actionTracker_creepsBlocked"))
            this.creepMisses = parseInt(localStorage.getItem("actionTracker_creepMisses"))
            this.creepsKnockedBack = parseInt(localStorage.getItem("actionTracker_creepsKnockedBack"))

            this.steelKills = parseInt(localStorage.getItem("actionTracker_steelKills"))
            this.saltKills = parseInt(localStorage.getItem("actionTracker_saltKills"))
            this.smokeKills = parseInt(localStorage.getItem("actionTracker_smokeKills"))
          }            
        }
        , saveStats: function(){

              var crewCode = ""
              for(var i = 1; i < this.crew.length; i++){
                crewCode +=this.crew[i].id
                if(i == this.crew.length){

                }
                else{
                  crewCode+="-"
                }
              }  
              localStorage.setItem("actionTracker_submergedKillCount",this.submergedKillCount)
              localStorage.setItem("actionTracker_harpoonsDeployedVoyage", this.harpoonsDeployedVoyage )
              localStorage.setItem("actionTracker_bombsGained",this.bombsGained)
              localStorage.setItem("actionTracker_harpoonsGained",this.harpoonsGained)
              localStorage.setItem("actionTracker_savvyGained",this.savvyGained)
              localStorage.setItem("actionTracker_creepsBlocked",this.creepsBlocked)
              localStorage.setItem("actionTracker_creepMisses",this.creepMisses)
              localStorage.setItem("actionTracker_creepsKnockedBack",this.creepsKnockedBack)

              localStorage.setItem("actionTracker_steelKills",this.steelKills)
              localStorage.setItem("actionTracker_saltKills",this.saltKills)
              localStorage.setItem("actionTracker_smokeKills",this.smokeKills)

              localStorage.setItem("crewCode",crewCode)
              localStorage.setItem("prevCapHealth",this.cap_healthValue)
              localStorage.setItem("prevCapDeploy",this.deploy_poolMax)

              localStorage.setItem("prevBombCount",this.freeCounter[5].num)
              localStorage.setItem("prevHarpoonCount",this.freeCounter[6].num)

              localStorage.setItem("prevreRoll_Counter",this.reRoll_Counter)

              for(var z = 1; z < this.crew.length; z++){
                localStorage.setItem("crew"+z+"-bonusLength",this.crew[z].holderPower.length)
                localStorage.setItem("crew"+z+"-origPower",this.crew[z].origPower)
                localStorage.setItem("crew"+z+"-deployCost",this.crew[z].origDeployCost)
                //carry over curses
                  localStorage.setItem("crew"+z+"CurseVal",this.crew[z].curseVal) 
                // carry over bonuses
                for(var key = 0; key < this.crew[z].holderPower.length; key++){
                  if(this.crew[z].holderPower[key] != undefined){
                    localStorage.setItem("crew"+z+"-bonus-"+key,this.crew[z].holderPower[key]) 
                  }
                  else{
                    localStorage.setItem("crew"+z+"-bonus-"+key,0)
                  }
                  
                } 
                localStorage.setItem("crew"+z+"KillCount", this.crew[z].killCount)                               
              }          

        }
        ,enemyDie: function (enemy,crewID) {
          enemy.newLabel.alpha = 0;
          enemy.statsHistory = ""
          if (crewID === undefined ) {
            crewID = 1
          
          }      

          if(enemy.submerged){
            this.submergedKillCount++
          }
          //Echo unlock
          if(this.submergedKillCount >= 3){
            this.unlockCrewmate(50)
          }
          // Track kills by type 0- steel, 1 - salt, 2 -smoke
          if(crew[crewID].type == 0 ){
            this.steelKills++
            //Samantha unlock
            if(this.steelKills >= 10){
              this.unlockCrewmate(31)
            }      
            //Fiona unlock     
            if(this.steelKills >= 25){
              this.unlockCrewmate(31)
            }                  
          }
          if(crew[crewID].type == 1 ){
            this.saltKills++
            //Atalanta unlock
            if(this.saltKills >= 10){
              this.unlockCrewmate(64)
            }                
          }
          if(crew[crewID].type == 2 ){
            this.smokeKills++
            //Tora unlock
            if(this.smokeKills >= 10){
              this.unlockCrewmate(49)
            }               
          } 
          //tentacle[left] kill tracker  
          if(enemy.monID == 3){
            this.tentacleKills++
            localStorage.setItem("actionTracker_tentacleKills",this.tentacleKills) 
            //Harper unlock
            if(this.tentacleKills >= 20){
              this.unlockCrewmate(36)
            }             

          } 
                 

          enemy.exhausted = false;
          enemy.tired.animations.stop('snore',true);            

          enemy.multiAttack = 0
          enemy.origmultiAttack =  enemy.multiAttack                
          
          enemy.help.on = false; 
          enemy.isEnemyHere = false;
          enemy.submerged = false;
          enemy.alpha = 1;
          
          enemy.incomingDamage = 0;
          enemy.willDie.alpha = 0;
          enemy.willDie.text = "";
          
          
          if(enemy.monID != 0){
            enemy.deathParticle.makeParticles(enemy.texture);
            enemy.deathParticle.setScale(0.7, 0.7, 0.7, 0.7);

            enemy.sparkle.alpha = 0;
            enemy.sparkle2.alpha = 0;                

            var power = 0
            for(var k = 1; k < this.crew.length; k++){
              //power increase
              if(this.crew[k].id == crewID ){
                power = this.crew[k].power
                //this.crew[k].power = this.crew[k].origPower;
              }
            }

            var randX = Math.floor(Math.random() * 400)-200
            var randY = (Math.floor(Math.random() * 200)-100)
            var skyPower = power
            if(skyPower > 10){
              skyPower = 10;
            }
            enemy.deathParticle.maxParticleSpeed.set(0, (-400*skyPower));
            enemy.deathParticle.explode(2000,1);
          }

                    
          enemy.loadTexture('tile');
          enemy.tint = '0x000000'


          //active crew effects
          //spawn bombs on kills
          var isOnBoard = false;
          for(var m = 0; m < this.boardHeight; m++){
            for(var l = 0; l < this.boardWidth; l++){  
              if(this.tile[''+l+m].isCrewHere && this.tile[''+l+m].crewID == 16){
                isOnBoard = true;
              }
            }
          }                      
          if(isOnBoard && enemy.smoke.on){
            
            enemy.isCrewHere= true;
            enemy.crewID = 80;
            enemy.hp = crew[80].loyaltyDeployCost[0];
            enemy.healthText.text = enemy.hp
            enemy.power = crew[80].loyaltyPower[0];
            enemy.powerText.text = enemy.power
            enemy.attackPattern = crew[80].attackPattern
            enemy.ability  = crew[80].ability
            enemy.loadTexture('crew-80')
            enemy.tint = '0xFFFFFF'
            
            enemy.hasAttacked = false;
            enemy.hasActed = false;
            
            enemy.placeOrder = this.deployCrewCount//this.placeOrderTracker
            this.crewTint(this.crew[5], enemy)
            //this.placeOrderTracker = enemy.placeOrder    
            this.deployCrewCount++
            
             
            
            
            //this.placeOrderTracker++

            if(this.ActionCounter == 0){
              this.phaseStart = true;
              this.phaseCounter = 2
              this.turnMarkerText.text = ""

              //this.turnMarker.y = this.game.height+this.game.height/2
              //this.add.tween(this.turnMarker).from( { y: this.game.height/2 }, 2000, Phaser.Easing.Circular.InOut, true);  

              this.actionTimer = 100
             
            }

                
          }
          
          enemy.smoke.on = false;
          //check if win
          if((this.monCountValue-this.monKillCount) <= 0){
            /*
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
            */
            this.chatTimer = 1;
          }     
            
          // crew kill effects
          
          for(var k = 1; k < this.crew.length; k++){
            //power increase
            if(this.crew[k].id == 2 && crewID == 2){
              
              this.crew[k].origPower += 1;
              //show attack boost
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  for(var z = 1; z < this.crew.length; z++){
                    //&& this.crew[z].type == 0
                    if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == 2){
                      this.tile[''+j+i].powerText.height = 75;
                      this.spawnBuff(this.tile[''+j+i],'buff_attack');
                      //this.tile[''+j+i].powerText.width = 75;
                    }                    
                  }

                }
              }                
              //this.crew[k].power = this.crew[k].origPower;
            }

            //ammo increase
            if(this.crew[k].id == 10 && crewID == 10){
              this.bombCount++
              this.freeCounter[5].num++     
              this.bombsGainedGained++  
              //Hina unlock
              if(this.bombsGained >= 10){
                this.unlockCrewmate(48)
              }                 
              //Rin unlock
              if(this.bombsGained >= 20){
                this.unlockCrewmate(47)
              }                     
              
                                    
                    
            }  
            // heal captain
            if(this.crew[k].id == 11 && crewID == 11){
              this.healthCount+= 2;
              this.healCaptain(2)
              
              //show attack boost
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  for(var z = 1; z < this.crew.length; z++){
                    //&& this.crew[z].type == 0
                    if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == 26){
                      this.tile[''+j+i].powerText.height = 75;
                      this.spawnBuff(this.tile[''+j+i],'buff_attack');
                      //this.tile[''+j+i].powerText.width = 75;
                    }                    
                  }

                }
              }                                         
                    
            }             
            

            if(this.crew[k].id == crewID){
              this.crew[k].killCount+=1             
            }
          }          
          
          //enemy death effects
          
          
          for(var i = 0; i < enemy.tier; i++){
            this.saltCounter++;
          }     
          if(localStorage.getItem("NumMon"+enemy.monID+"Killed") === null){
            localStorage.setItem("NumMon"+enemy.monID+"Killed",0)
          }
          var currentCount = parseInt(localStorage.getItem("NumMon"+enemy.monID+"Killed"))
          localStorage.setItem("NumMon"+enemy.monID+"Killed",currentCount+1)
          this.monKillCount++;
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
              //boss death
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){
                  if(this.tile[''+j+i].isEnemyHere){
                    //this.enemyDie(this.tile[''+j+i])
                  }
                }
              }
              try{
                if (!client.achievement.isActivated('CLEAR_ZONE_1')) {
                  client.achievement.activate('CLEAR_ZONE_1')
                } 
              }
              catch(e){ }                  
              this.bossDead = true;
              this.bossID = "blank"
              if(this.zone >= 4){
                this.bossDead = false;
                this.chatTimer = 0;
                this.bossEmegrgePoint += bossEmegrgePoint
                this.firstSpawn = true;
                var monChoice = [1,4,7,2,5,8]
                var ran = Math.floor(Math.random() * 6)
                this.monsterPool[monChoice[ran]].count += this.zone                
              }       
              else{
                //this.chatTimer = 1;
              }       
                     
                   
              //this.scoreCountNum += 20
              break
            case 5:
              //this.scoreCountNum += 25
              break;
            case 6:
              //this.scoreCountNum += 25
              break;
            case 7:
              //boss death
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){
                  if(this.tile[''+j+i].isEnemyHere){
                    //this.enemyDie(this.tile[''+j+i])
                  }
                }
              }
              try{
                if (!client.achievement.isActivated('CLEAR_ZONE_2')) {
                  client.achievement.activate('CLEAR_ZONE_2')
                } 
              }
              catch(e){ }               
              this.bossDead = true;
              this.bossID = "blank"
              if(this.zone >= 4){
                this.bossDead = false;
                this.chatTimer = 0;
                this.bossEmegrgePoint += bossEmegrgePoint
                this.firstSpawn = true;
                var monChoice = [1,4,7,2,5,8]
                var ran = Math.floor(Math.random() * 6)
                this.monsterPool[monChoice[ran]].count += this.zone                 
              }       
              else{
                //this.chatTimer = 1;
              }           
              //this.scoreCountNum += 30
              break     
            case 8:
              //this.scoreCountNum += 35
              break;
            case 9:
              //this.scoreCountNum += 40
              break;             
            case 10:
              //boss death
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){
                  if(this.tile[''+j+i].isEnemyHere){
                    //this.enemyDie(this.tile[''+j+i])
                  }
                }
              }
              try{
                if (!client.achievement.isActivated('CLEAR_ZONE_3')) {
                  client.achievement.activate('CLEAR_ZONE_3')
                } 
              }
              catch(e){ }               
              this.bossDead = true;
              this.bossID = "blank"
              if(this.zone >= 4){
                this.bossDead = false;
                this.chatTimer = 0;
                this.bossEmegrgePoint += bossEmegrgePoint
                this.firstSpawn = true;
                var monChoice = [1,4,7,2,5,8]
                var ran = Math.floor(Math.random() * 6)
                this.monsterPool[monChoice[ran]].count += this.zone                 
              }       
              else{
                //this.chatTimer = 1;
              }        
              //this.scoreCountNum += 45
              break;             
            case 11:
              this.isNurseOnBoard = false;
              for(var z = 1; z < this.crew.length; z++){
                if(this.crew[z].curseVal > 0 && z != 5 && z != 6){
                  this.crew[z].curseVal = 0;
                  this.crew[z].width-=50;
                  this.crew[z].height+=50;
                  this.crew[z].uncursed.animations.play('unpoof', 8, false); 
                  this.curseCrewAnim.play()
                }
             
              }
              break;
            case 99:
              //unlock SOS
              this.sosCount-=this.turnCountNum;
              if(this.sosCount<= 0){
                this.sosCount = 0
              }              
              this.sosLock = false;              
              this.chestTriggers++

              break; 
            case 102:
                                 

            
            this.soulTriggers++;
             
              break;                                                                            
          }       
          enemy.monID = 0;   
          enemy.sparkle.alpha = 0;
          enemy.sparkle2.alpha = 0;
          //this.game.plugins.screenShake.shake(15); 

          enemy.y = enemy.origY//1000;          
          this.add.tween(enemy).from( { y:enemy.y+25 }, 500, Phaser.Easing.Elastic.Out, true);
        }      
        ,knockBack: function (enemy,crew) {
          try{
            
            if(enemy.isEnemyHere && !enemy.submerged){

              var holderID = enemy.id



              if(parseInt(enemy.posX) < parseInt(crew.posX)){
                enemy.width = 50;
                enemy.height = 50                
                if(!this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].isEnemyHere && !this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].isCrewHere){
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].loadTexture(enemy.texture)
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].monID = enemy.monID
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].isEnemyHere = true;
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].hp = enemy.hp
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].power = enemy.power
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].multiAttack = enemy.multiAttack
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].exhausted = enemy.exhausted
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].origPower = enemy.origPower
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].statsHistory = enemy.statsHistory
                  enemy.statsHistory = "" 
                  enemy.origPower = 0;
                  enemy.tired.animations.stop('snore',true);   
                  enemy.exhausted = false;
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
                  enemy.power = 0;
                  enemy.sparkle.alpha = 0;
                  enemy.sparkle2.alpha = 0;   
                 
                  
                  enemy.help.on = false;   
                  


                  if( this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].monID == 102){
                    this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].help.on = true;                                   
                  }                             

                  enemy.monID = 0

                  if(crew.notReal){
                    this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].captainMoved = true;
                  }                  
                  //shadow finn ability
                  if(this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].monID == 10 && this.capKey == 6){
                      this.spawnBuff(this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))],'buff_attack');
                      this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM KNOCKBACK"
                      this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].power += 1   
                      this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].hp -=5
                      this.setActionText(this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))],5)                  
                  } 
                  if(this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].hp <= 0){
                    this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].hp = 0;
                    this.enemyDie(this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))])
                  }                  
                }

                if(this.bossID.includes(holderID)){
                  this.bossID = ""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))
                }
                if(this.luckyID.includes(holderID)){
                  this.luckyID = ""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))
                }                
                  
                enemy.tint = '0x000000' 
                this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].tint = '0xFFFFFF'                
                
                  //knockback tracking
                  this.creepsKnockedBack++
                  // Naga unlock 
                  if(this.creepsKnockedBack >= 5){
                    this.unlockCrewmate(40)
                  }   
                  // Kata unlock 
                  if(this.creepsKnockedBack >= 10){
                    this.unlockCrewmate(41)
                  }                            


                  //movement boost
                  for(var z = 1; z < this.crew.length; z++){
                    if(this.crew[z].id == 41){
                      var holder = parseInt(this.crew[z].powerText.text)
                      //this.crew[z].power += 2;
                      this.crew[z].origPower += 2;
                    }
                  }  
                  for(var i = 0; i < this.boardHeight; i++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      for(var z = 1; z < this.crew.length; z++){
                        if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == this.crew[z].id && this.crew[z].id == 41){
                          this.tile[''+j+i].powerText.height = 75;
                          this.spawnBuff(this.tile[''+j+i],'buff_attack');
                        }                    
                      }

                    }
                  }                  
                  for(var i = 1; i < this.crew.length; i++){
                    if(this.crew[i].id == 41){
                      //this.crew[i].holderPower[10] = 1
                      var ranPhrase = Math.floor(Math.random() * 2)

                      this.crew[i].powerUpParticle.x = this.crew[i].powerText.x
                      this.crew[i].powerUpParticle.y = this.crew[i].powerText.y
                      this.crew[i].powerUpParticle.makeParticles('sparkle');
                      this.crew[i].powerUpParticle.setScale(1, 1, 1, 1);                  
                      this.crew[i].powerUpParticle.maxParticleSpeed.set(100,100);
                      this.crew[i].powerUpParticle.explode(500);   
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
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].multiAttack = enemy.multiAttack
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].exhausted = enemy.exhausted
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].origPower = enemy.origPower
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].statsHistory = enemy.statsHistory
                  enemy.statsHistory = ""                   
                  enemy.origPower = 0;                  
                  enemy.tired.animations.stop('snore',true);   
                  enemy.exhausted = false;                  
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
                  enemy.power = 0;
                  enemy.monID = 0
                  enemy.sparkle.alpha = 0;
                  enemy.sparkle2.alpha = 0;  
                  enemy.help.on = false;   
                  if( this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].monID == 102){
                    this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].help.on = true;                                   
                  }                                                  

                  if(crew.notReal){
                    this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].captainMoved = true;
                  }                  
                  //shadow finn ability
                  if(this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].monID == 10 && this.capKey == 6){
                      this.spawnBuff(this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))],'buff_attack');
                      this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM KNOCKBACK"
                      this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].power += 1   
                      this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].hp -=5
                      this.setActionText(this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))],5)                  
                  } 
                  if(this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].hp <= 0){
                    this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].hp = 0;
                    this.enemyDie(this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))])
                  } 
                  
                  if(this.bossID.includes(holderID)){
                    this.bossID = ""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))
                  }  
                  if(this.luckyID.includes(holderID)){
                    this.luckyID = ""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))
                  }                 
                  
                  enemy.tint = '0x000000' 
                  this.tile[""+(parseInt(enemy.posX)+1)+(parseInt(enemy.posY))].tint = '0xFFFFFF' 

                  //knockback tracking
                  this.creepsKnockedBack++
                  // Naga unlock 
                  if(this.creepsKnockedBack >= 5){
                    this.unlockCrewmate(40)
                  }   
                  // Kata unlock 
                  if(this.creepsKnockedBack >= 10){
                    this.unlockCrewmate(41)
                  }                            


                  //movement boost
                  for(var z = 1; z < this.crew.length; z++){
                    if(this.crew[z].id == 41){
                      var holder = parseInt(this.crew[z].powerText.text)
                      //this.crew[z].power += 2;
                      this.crew[z].origPower += 2;
                    }
                  }  
                  for(var i = 0; i < this.boardHeight; i++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      for(var z = 1; z < this.crew.length; z++){
                        if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == this.crew[z].id && this.crew[z].id == 41){
                          this.tile[''+j+i].powerText.height = 75;
                          this.spawnBuff(this.tile[''+j+i],'buff_attack');
                        }                    
                      }

                    }
                  }                  
                  for(var i = 1; i < this.crew.length; i++){
                    if(this.crew[i].id == 41){
                      //this.crew[i].holderPower[10] = 1
                      var ranPhrase = Math.floor(Math.random() * 2)

                      this.crew[i].powerUpParticle.x = this.crew[i].powerText.x
                      this.crew[i].powerUpParticle.y = this.crew[i].powerText.y
                      this.crew[i].powerUpParticle.makeParticles('sparkle');
                      this.crew[i].powerUpParticle.setScale(1, 1, 1, 1);                  
                      this.crew[i].powerUpParticle.maxParticleSpeed.set(100,100);
                      this.crew[i].powerUpParticle.explode(500);   
                    }               
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
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].multiAttack = enemy.multiAttack
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].exhausted = enemy.exhausted
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].origPower = enemy.origPower
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].statsHistory = enemy.statsHistory
                  enemy.statsHistory = ""                   
                  enemy.origPower = 0;                  
                  enemy.tired.animations.stop('snore',true);   
                  enemy.exhausted = false;                      
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
                  enemy.power = 0;
                  enemy.monID = 0       
                  enemy.sparkle.alpha = 0;
                  enemy.sparkle2.alpha = 0;
                  enemy.help.on = false;       
                  if( this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].monID == 102){
                    this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].help.on = true;                                    
                  }                            
                  
                  if(crew.notReal){
                    this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].captainMoved = true;
                  }                    
                  //shadow finn ability
                  if(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].monID == 10 && this.capKey == 6){
                      this.spawnBuff(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)],'buff_attack');
                      this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM KNOCKBACK"
                      this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].power += 1   
                      this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].hp -=5
                      this.setActionText(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)],5)                  
                  }                    
                  
                  if(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].hp <= 0){
                    this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].hp = 0;
                    this.enemyDie(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)])
                  }   

                  
                  
                  if(this.bossID.includes(holderID)){
                    this.bossID = ""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)
                  }  
                  if(this.luckyID.includes(holderID)){
                    this.luckyID = ""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)
                  }   
                  
                  enemy.tint = '0x000000' 
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)+1)].tint = '0xFFFFFF' 

                  //knockback tracking
                  this.creepsKnockedBack++
                  // Naga unlock 
                  if(this.creepsKnockedBack >= 5){
                    this.unlockCrewmate(40)
                  }   
                  // Kata unlock 
                  if(this.creepsKnockedBack >= 10){
                    this.unlockCrewmate(41)
                  }                            


                

                  //movement boost
                  for(var z = 1; z < this.crew.length; z++){
                    if(this.crew[z].id == 41){
                      var holder = parseInt(this.crew[z].powerText.text)
                      //this.crew[z].power += 2;
                      this.crew[z].origPower += 2;
                    }
                  }  
                  for(var i = 0; i < this.boardHeight; i++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      for(var z = 1; z < this.crew.length; z++){
                        if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == this.crew[z].id && this.crew[z].id == 41){
                          this.tile[''+j+i].powerText.height = 75;
                          this.spawnBuff(this.tile[''+j+i],'buff_attack');
                        }                    
                      }

                    }
                  }                  
                  for(var i = 1; i < this.crew.length; i++){
                    if(this.crew[i].id == 41){
                      //this.crew[i].holderPower[10] = 1
                      var ranPhrase = Math.floor(Math.random() * 2)

                      this.crew[i].powerUpParticle.x = this.crew[i].powerText.x
                      this.crew[i].powerUpParticle.y = this.crew[i].powerText.y
                      this.crew[i].powerUpParticle.makeParticles('sparkle');
                      this.crew[i].powerUpParticle.setScale(1, 1, 1, 1);                  
                      this.crew[i].powerUpParticle.maxParticleSpeed.set(100,100);
                      this.crew[i].powerUpParticle.explode(500);   
                    }               
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
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].multiAttack = enemy.multiAttack
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].exhausted = enemy.exhausted
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].origPower = enemy.origPower
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].statsHistory = enemy.statsHistory
                  enemy.statsHistory = ""                   
                  enemy.origPower = 0;                   
                  enemy.tired.animations.stop('snore',true);   
                  enemy.exhausted = false;                    
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
                  enemy.power = 0;
                  enemy.monID = 0          
                  enemy.sparkle.alpha = 0;
                  enemy.sparkle2.alpha = 0;       
                  enemy.help.on = false;     
                  if( this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].monID == 102){
                    this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].help.on = true;                                    
                  }                                            
                  
                  if(crew.notReal){
                    this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].captainMoved = true;
                  }                    
                  //shadow finn ability
                  if(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].monID == 10 && this.capKey == 6){
                      this.spawnBuff(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)],'buff_attack');
                      this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].statsHistory += "\n\n▪ ENRAGED: +1 FURY FROM KNOCKBACK"
                      this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].power += 1   
                      this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].hp -=5
                      this.setActionText(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)],5)                  
                  }                   
                  if(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].hp <= 0){
                    this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].hp = 0;
                    this.enemyDie(this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)])
                  }        
                  
                  if(this.bossID.includes(holderID)){
                    this.bossID = ""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)
                  } 
                  if(this.luckyID.includes(holderID)){
                    this.luckyID = ""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)
                  }                

                  enemy.tint = '0x000000' 
                  this.tile[""+(parseInt(enemy.posX))+(parseInt(enemy.posY)-1)].tint = '0xFFFFFF' 

                  //knockback tracking
                  this.creepsKnockedBack++
                  // Naga unlock 
                  if(this.creepsKnockedBack >= 5){
                    this.unlockCrewmate(40)
                  }   
                  // Kata unlock 
                  if(this.creepsKnockedBack >= 10){
                    this.unlockCrewmate(41)
                  }                            
                  


                  //movement boost
                  for(var z = 1; z < this.crew.length; z++){
                    if(this.crew[z].id == 41){
                      var holder = parseInt(this.crew[z].powerText.text)
                      //this.crew[z].power += 2;
                      this.crew[z].origPower += 2;
                    }
                  }  
                  for(var i = 0; i < this.boardHeight; i++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      for(var z = 1; z < this.crew.length; z++){
                        if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == this.crew[z].id && this.crew[z].id == 41){
                          this.tile[''+j+i].powerText.height = 75;
                          this.spawnBuff(this.tile[''+j+i],'buff_attack');
                        }                    
                      }

                    }
                  }                  
                  for(var i = 1; i < this.crew.length; i++){
                    if(this.crew[i].id == 41){
                      //this.crew[i].holderPower[10] = 1
                      var ranPhrase = Math.floor(Math.random() * 2)

                      this.crew[i].powerUpParticle.x = this.crew[i].powerText.x
                      this.crew[i].powerUpParticle.y = this.crew[i].powerText.y
                      this.crew[i].powerUpParticle.makeParticles('sparkle');
                      this.crew[i].powerUpParticle.setScale(1, 1, 1, 1);                  
                      this.crew[i].powerUpParticle.maxParticleSpeed.set(100,100);
                      this.crew[i].powerUpParticle.explode(500);   
                    }               
                  }                   
                }
              } 
              this.checkExhaustedCount()

                 

            }
                   
          }
          catch(e){
            //console.log("NOT WORKING "+e)
          }

          //this.game.plugins.screenShake.shake(5); 

          //enemy.y = 1000;          
        }                        
        ,enemyFight: function () {

          //this.game.camera.focusOnXY(this.game.width/2, this.game.height/2)

          this.monCount = 0;
          this.rockCount = 0;
          this.tileCount = 0;
          var speedUp = false;
          //check how many enemy
          this.incomingTotal = 0;
              
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){      
              this.tileCount++;
              if(this.tile[''+j+i].isEnemyHere && this.tile[''+j+i].monID != 99 && this.tile[''+j+i].monID != 102 && this.tile[''+j+i].monID != 103){
                this.monCount++
                
                if(!this.tile[''+j+i].submerged && !this.tile[''+j+i].exhausted){
                  //this.addIncomingDamage(this.tile[''+j+i]) 
                }
                     
              }
              if(this.tile[''+j+i].monID == 103){
                this.rockCount++
              }             
            }
          } 

          if(this.turnCountNum == 1 && this.firstTurnTrigger){
            //this.massSpawnMonsters(5,5,8)
            //this.checkAllTiles();
            //this.firstTurnTrigger = false;
            //this.ActionCounter = this.tileCount
            //this.monsterPool[4].count = 1
          }

          //enemy attacks          
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){     

              this.tileHighlight.x = this.tile[''+j+i].x
              this.tileHighlight.y = this.tile[''+j+i].y
              this.highlightPing.play();

              
              if(this.tile[''+j+i].isEnemyHere  && !this.tile[''+j+i].hasAttacked && !this.tile[''+j+i].checked){

                this.tile[''+j+i].checked = true;
                //this.tile[''+j+i].alpha = 1;
                this.tile[''+j+i].hasAttacked = true;

                //attacks twice
                if(this.tile[''+j+i].multiAttack > 0  && !this.tile[''+j+i].submerged && !this.tile[''+j+i].exhausted){
                  this.tile[''+j+i].multiAttack--;
                  this.tile[''+j+i].hasAttacked = false
                  this.tile[''+j+i].checked = false;
                  this.tickerSpeed+=2;
                  this.ActionCounter--;
                }                
                //this.placeCrew(this.tile[''+j+i])

             
                
                this.selectedCrew = 100+this.tile[''+j+i].monID;
                this.noPickUp = true; 
                


                if( !this.tile[''+j+i].submerged && this.tile[''+j+i].monID != 99 && this.tile[''+j+i].monID != 102 && this.tile[''+j+i].monID != 103){
                  this.tile[''+j+i].width  += 100;
                  this.tile[''+j+i].height += 100;        
                  
                  //sleeping creeps wake up
                  if(this.tile[''+j+i].exhausted){
                    this.tile[''+j+i].exhausted = false;
                    this.tile[''+j+i].tired.animations.stop('snore',true);                    
                    this.setActionText(this.tile[''+j+i],"WOKE UP!")                    
                  }
                  else{
                    //if smoking potentially miss (50% chance)
                    if(this.tile[''+j+i].smoke.on){
                      var missChance = Math.floor(Math.random() * 4);    
                      if((missChance == 0 || missChance == 1) && this.tile[''+j+i].power > 0){
                        this.setActionText(this.tile[''+j+i],"MISSED")

                        //miss tracker
                        this.creepMisses++;
                        // Nao unlock 
                        if( this.creepMisses >= 10){
                          this.unlockCrewmate(46)
                        }
                        //crew miss ability trigger
                        for(var z = 1; z < this.crew.length; z++){
                          if(this.crew[z].id == 45){
                            var holder = parseInt(this.crew[z].powerText.text)
                            //this.crew[z].power += 2;
                            this.crew[z].origPower += 2;
                          }

                        
                        }  
                        
                        for(var l = 0; l < this.boardHeight; l++){
                          for(var m = 0; m < this.boardWidth; m++){   
                            for(var z = 1; z < this.crew.length; z++){
                              if(this.tile[""+m+l].isCrewHere && this.tile[""+m+l].crewID == this.crew[z].id && this.crew[z].id == 41){
                                this.tile[""+m+l].powerText.height = 75;
                                this.spawnBuff(this.tile[""+m+l],'buff_attack');
                              }     
                              
                              if(this.tile[""+m+l].isCrewHere && this.tile[""+m+l].crewID == this.crew[z].id && this.crew[z].id == 46){
                                this.freeCounter[5].num++    
                                this.bombsGainedGained++  
                                //Hina unlock
                                if(this.bombsGained >= 10){
                                  this.unlockCrewmate(48)
                                }      
                                //Rin unlock
                                if(this.bombsGained >= 20){
                                  this.unlockCrewmate(47)
                                }                                                                        
                                this.freeCounter[5].counter2.alpha = 1
                                this.freeCounter[5].counter2.text = "+1💣"     
                              }                             
                            }

                          }
                        }                  
                        for(var k = 1; k < this.crew.length; k++){
                          if(this.crew[k].id == 45){
                            //this.crew[i].holderPower[10] = 1
                            var ranPhrase = Math.floor(Math.random() * 2)

                            this.crew[k].powerUpParticle.x = this.crew[k].powerText.x
                            this.crew[k].powerUpParticle.y = this.crew[k].powerText.y
                            this.crew[k].powerUpParticle.makeParticles('sparkle');
                            this.crew[k].powerUpParticle.setScale(1, 1, 1, 1);                  
                            this.crew[k].powerUpParticle.maxParticleSpeed.set(100,100);
                            this.crew[k].powerUpParticle.explode(500);   
          
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
                            imageUrl: 'assets/tut_heart.webp',
                            imageWidth: 200,
                            imageHeight: 200,
                          }).then((result) => {
                            this.chatTimer = 0;
                            this.tutorialPause = false;                              
                          })            
                        }  */                    
                        if(this.tile[''+j+i].power > 0){
                          this.spawnAttack(this.tile[''+j+i],this.cap_health)                                                      
                          //this.damageCaptain(this.tile[''+j+i])
                        }
                        //enemy special combat ability
                        switch(this.tile[''+j+i].monID){
                          case 3:
                            
                            break; 
                          
                          case 4:      
                            //spawn tentacles
                            this.tile[''+j+i].exhausted = true;
                            try{
                              
                              
                              if(!this.tile[''+(j+1)+(i)].isCrewHere && !this.tile[''+(j+1)+(i)].isEnemyHere){
                                var whichArm = Math.floor(Math.random() * 2)+2;    
                                this.monsterPool[whichArm-1].count = 1
                                this.spawnMonsters(false,this.tile[''+(j+1)+(i)],whichArm);  
                                this.tile[''+(j+1)+(i)].submerged = false;
                                this.tile[''+(j+1)+(i)].checked = true;

                                
                                /*
                                if(whichArm == 0){
                                  this.tile[''+(j+1)+(i)].hasAttacked = true;
                                  this.tile[''+(j+1)+(i)].hp = monster[monID].hp;
                                  this.tile[''+(j+1)+(i)].power = monster[monID].power;
                                  this.tile[''+(j+1)+(i)].origPower = this.tile[''+(j+1)+(i)].power
                                  this.tile[''+(j+1)+(i)].tier = 2
                                  //this.tile[''+j+i].multiAttack = 1;
                                  this.tile[''+(j+1)+(i)].isEnemyHere = true
                                  this.tile[''+(j+1)+(i)].submerged = false
                                  this.tile[''+(j+1)+(i)].monID = 2
                                  this.tile[''+(j+1)+(i)].hp = monster[this.tile[''+(j+1)+(i)].monID].hp;
                                  this.tile[''+(j+1)+(i)].power = monster[this.tile[''+(j+1)+(i)].monID].power;                           
                                  this.tile[''+(j+1)+(i)].name = monster[this.tile[''+(j+1)+(i)].monID].name
                                }
                                else{
                                  this.tile[''+(j+1)+(i)].hasAttacked = true;
                                  this.tile[''+(j+1)+(i)].hp = 3;
                                  this.tile[''+(j+1)+(i)].power = 2;
                                  this.tile[''+(j+1)+(i)].origPower = this.tile[''+(j+1)+(i)].power
                                  this.tile[''+(j+1)+(i)].tier = 1
                                  this.tile[''+(j+1)+(i)].multiAttack = 2;
                                  this.tile[''+(j+1)+(i)].isEnemyHere = true
                                  this.tile[''+(j+1)+(i)].submerged = false
                                  this.tile[''+(j+1)+(i)].monID = 3
                                  this.tile[''+(j+1)+(i)].hp = monster[this.tile[''+(j+1)+(i)].monID].hp;
                                  this.tile[''+(j+1)+(i)].power = monster[this.tile[''+(j+1)+(i)].monID].power;                            
                                  this.tile[''+(j+1)+(i)].name = monster[this.tile[''+(j+1)+(i)].monID].name
                                }
                                */
                              }
                            } 
                            catch(e){
                              ////console.log(e)
                            }

                            try{
                              
                              if(!this.tile[''+(j-1)+(i)].isCrewHere && !this.tile[''+(j-1)+(i)].isEnemyHere){
                                var whichArm = Math.floor(Math.random() * 2)+2;    
                                this.monsterPool[whichArm-1].count = 1
                                this.spawnMonsters(false,this.tile[''+(j-1)+(i)],whichArm);  
                                this.tile[''+(j-1)+(i)].submerged = false;
                                this.tile[''+(j-1)+(i)].checked = true;

                                
                                        
                                /*
                                if(whichArm == 0){
                                  this.tile[''+(j-1)+(i)].hasAttacked = true;
                                  this.tile[''+(j-1)+(i)].hp = 3;
                                  this.tile[''+(j-1)+(i)].power = 3;
                                  this.tile[''+(j-1)+(i)].origPower = this.tile[''+(j-1)+(i)].power
                                  this.tile[''+(j-1)+(i)].tier = 2
                                  //this.tile[''+j+i].multiAttack = 1;
                                  this.tile[''+(j-1)+(i)].isEnemyHere = true
                                  this.tile[''+(j-1)+(i)].submerged = false
                                  this.tile[''+(j-1)+(i)].monID = 2
                                  this.tile[''+(j-1)+(i)].hp = monster[this.tile[''+(j-1)+(i)].monID].hp;
                                  this.tile[''+(j-1)+(i)].power = monster[this.tile[''+(j-1)+(i)].monID].power;                       
                                  this.tile[''+(j-1)+(i)].name = monster[this.tile[''+(j-1)+(i)].monID].name
                                }
                                else{
                                  this.tile[''+(j-1)+(i)].hasAttacked = true;
                                  this.tile[''+(j-1)+(i)].hp = 3;
                                  this.tile[''+(j-1)+(i)].power = 2;
                                  this.tile[''+(j-1)+(i)].origPower = this.tile[''+(j-1)+(i)].power
                                  this.tile[''+(j-1)+(i)].tier = 1
                                  this.tile[''+(j-1)+(i)].multiAttack = 1;
                                  this.tile[''+(j-1)+(i)].isEnemyHere = true
                                  this.tile[''+(j-1)+(i)].submerged = false
                                  this.tile[''+(j-1)+(i)].monID = 3
                                  this.tile[''+(j-1)+(i)].hp = monster[this.tile[''+(j-1)+(i)].monID].hp;
                                  this.tile[''+(j-1)+(i)].power = monster[this.tile[''+(j-1)+(i)].monID].power;                                
                                  this.tile[''+(j-1)+(i)].name = monster[this.tile[''+(j-1)+(i)].monID].name
                                }
                                */
                              
                              }
                              
                            } 
                            catch(e){
                              
                            }  
                            
                            try{

                              if(!this.tile[''+(j)+(i+1)].isCrewHere && !this.tile[''+(j)+(i+1)].isEnemyHere){
                                var whichArm =Math.floor(Math.random() * 2)+2;      
                                this.monsterPool[whichArm-1].count = 1
                                this.spawnMonsters(false,this.tile[''+(j)+(i+1)],whichArm);  
                                this.tile[''+(j)+(i+1)].submerged = false;
                                this.tile[''+(j)+(i+1)].checked = true;
                                
                                /*
                                if(whichArm == 0){
                                  this.tile[''+(j)+(i+1)].hasAttacked = true;
                                  this.tile[''+(j)+(i+1)].hp = 3;
                                  this.tile[''+(j)+(i+1)].power = 3;
                                  this.tile[''+(j)+(i+1)].origPower = this.tile[''+(j)+(i+1)].power
                                  this.tile[''+(j)+(i+1)].tier = 2
                                  //this.tile[''+j+i].multiAttack = 1;
                                  this.tile[''+(j)+(i+1)].isEnemyHere = true
                                  this.tile[''+(j)+(i+1)].submerged = false
                                  this.tile[''+(j)+(i+1)].monID = 2
                                  this.tile[''+(j)+(i+1)].name = monster[this.tile[''+(j)+(i+1)].monID].name
                                }
                                else{
                                  this.tile[''+(j)+(i+1)].hasAttacked = true;
                                  this.tile[''+(j)+(i+1)].hp = 3;
                                  this.tile[''+(j)+(i+1)].power = 2;
                                  this.tile[''+(j)+(i+1)].origPower = this.tile[''+(j)+(i+1)].power
                                  this.tile[''+(j)+(i+1)].tier = 1
                                  this.tile[''+(j)+(i+1)].multiAttack = 1;
                                  this.tile[''+(j)+(i+1)].isEnemyHere = true
                                  this.tile[''+(j)+(i+1)].submerged = false
                                  this.tile[''+(j)+(i+1)].monID = 3
                                  this.tile[''+(j)+(i+1)].name = monster[this.tile[''+(j)+(i+1)].monID].name
                                }
                                  */                   
                              }
                            } 
                            catch(e){
                            
                            }  
                            try{
                              if(!this.tile[''+(j)+(i-1)].isCrewHere && !this.tile[''+(j)+(i-1)].isEnemyHere){
                                var whichArm = Math.floor(Math.random() * 2)+2;     
                                this.monsterPool[whichArm-1].count = 1
                                this.spawnMonsters(false,this.tile[''+(j)+(i-1)],whichArm);  
                                this.tile[''+(j)+(i-1)].submerged = false;
                                this.tile[''+(j)+(i-1)].checked = true;

                                /*  
                                if(whichArm == 0){
                                  this.tile[''+(j)+(i-1)].hasAttacked = true;
                                  this.tile[''+(j)+(i-1)].hp = 3;
                                  this.tile[''+(j)+(i-1)].power = 3;
                                  this.tile[''+(j)+(i-1)].origPower = this.tile[''+(j)+(i-1)].power
                                  this.tile[''+(j)+(i-1)].tier = 2
                                  //this.tile[''+(j)+(i-1)].multiAttack = 1;
                                  this.tile[''+(j)+(i-1)].isEnemyHere = true
                                  this.tile[''+(j)+(i-1)].submerged = false
                                  this.tile[''+(j)+(i-1)].monID = 2
                                  this.tile[''+(j)+(i-1)].name = monster[this.tile[''+(j)+(i-1)].monID].name
                                }
                                else{
                                  this.tile[''+(j)+(i-1)].hasAttacked = true;
                                  this.tile[''+(j)+(i-1)].hp = 3;
                                  this.tile[''+(j)+(i-1)].power = 2;
                                  this.tile[''+(j)+(i-1)].origPower = this.tile[''+(j)+(i-1)].power
                                  this.tile[''+(j)+(i-1)].tier = 1
                                  this.tile[''+(j)+(i-1)].multiAttack = 1;
                                  this.tile[''+(j)+(i-1)].isEnemyHere = true
                                  this.tile[''+(j)+(i-1)].submerged = false
                                  this.tile[''+(j)+(i-1)].monID = 3
                                  this.tile[''+(j)+(i-1)].name = monster[this.tile[''+(j)+(i-1)].monID].name
                                }
                                */
                              }
                            } 
                            catch(e){
                            
                            }                                                              


                                              
                            break;
                          case 5:
                          break;
                          case 6:
                            //buff sea serpents and scylla
                            this.tile[''+j+i].exhausted = true;
                            for(var m = 0; m < this.boardHeight; m++){
                              for(var l = 0; l < this.boardWidth; l++){  
                                if(!this.tile[''+l+m].submerged && this.tile[''+l+m].isEnemyHere && (this.tile[''+l+m].monID == 5 || this.tile[''+l+m].monID == 7)){
                                  this.spawnBuff(this.tile[''+l+m],'buff_health');
                                  this.tile[''+l+m].width += 25
                                  this.tile[''+l+m].height + 25;
                                  this.tile[''+l+m].hp+=1                             
                                }
                              }
                            }                           
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
                          case 9:     
                          case 8:
                            
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

                          case 10: 
                            break;                           
                          case 102:
                            

                
                            break;                                 
                        }                          
                      }
                    }
                    else{       
                      if(this.tile[''+j+i].power > 0){
                        this.spawnAttack(this.tile[''+j+i],this.cap_health)
                        
                        //this.damageCaptain(this.tile[''+j+i])
                      }   
                    //enemy special combat ability
                    switch(this.tile[''+j+i].monID){
                      case 3:
                        
                        break; 
                      
                      case 4:      
                        //spawn tentacles
                        this.tile[''+j+i].exhausted = true;
                        try{
                          
                          
                          if(!this.tile[''+(j+1)+(i)].isCrewHere && !this.tile[''+(j+1)+(i)].isEnemyHere){
                            var whichArm = Math.floor(Math.random() * 2)+2;    
                            this.monsterPool[whichArm-1].count = 1
                            this.spawnMonsters(false,this.tile[''+(j+1)+(i)],whichArm);  
                            this.tile[''+(j+1)+(i)].submerged = false;
                            this.tile[''+(j+1)+(i)].checked = true;

                            
                            /*
                            if(whichArm == 0){
                              this.tile[''+(j+1)+(i)].hasAttacked = true;
                              this.tile[''+(j+1)+(i)].hp = monster[monID].hp;
                              this.tile[''+(j+1)+(i)].power = monster[monID].power;
                              this.tile[''+(j+1)+(i)].origPower = this.tile[''+(j+1)+(i)].power
                              this.tile[''+(j+1)+(i)].tier = 2
                              //this.tile[''+j+i].multiAttack = 1;
                              this.tile[''+(j+1)+(i)].isEnemyHere = true
                              this.tile[''+(j+1)+(i)].submerged = false
                              this.tile[''+(j+1)+(i)].monID = 2
                              this.tile[''+(j+1)+(i)].hp = monster[this.tile[''+(j+1)+(i)].monID].hp;
                              this.tile[''+(j+1)+(i)].power = monster[this.tile[''+(j+1)+(i)].monID].power;                           
                              this.tile[''+(j+1)+(i)].name = monster[this.tile[''+(j+1)+(i)].monID].name
                            }
                            else{
                              this.tile[''+(j+1)+(i)].hasAttacked = true;
                              this.tile[''+(j+1)+(i)].hp = 3;
                              this.tile[''+(j+1)+(i)].power = 2;
                              this.tile[''+(j+1)+(i)].origPower = this.tile[''+(j+1)+(i)].power
                              this.tile[''+(j+1)+(i)].tier = 1
                              this.tile[''+(j+1)+(i)].multiAttack = 2;
                              this.tile[''+(j+1)+(i)].isEnemyHere = true
                              this.tile[''+(j+1)+(i)].submerged = false
                              this.tile[''+(j+1)+(i)].monID = 3
                              this.tile[''+(j+1)+(i)].hp = monster[this.tile[''+(j+1)+(i)].monID].hp;
                              this.tile[''+(j+1)+(i)].power = monster[this.tile[''+(j+1)+(i)].monID].power;                            
                              this.tile[''+(j+1)+(i)].name = monster[this.tile[''+(j+1)+(i)].monID].name
                            }
                            */
                          }
                        } 
                        catch(e){
                          ////console.log(e)
                        }

                        try{
                          
                          if(!this.tile[''+(j-1)+(i)].isCrewHere && !this.tile[''+(j-1)+(i)].isEnemyHere){
                            var whichArm = Math.floor(Math.random() * 2)+2;    
                            this.monsterPool[whichArm-1].count = 1
                            this.spawnMonsters(false,this.tile[''+(j-1)+(i)],whichArm);  
                            this.tile[''+(j-1)+(i)].submerged = false;
                            this.tile[''+(j-1)+(i)].checked = true;

                            
                                    
                            /*
                            if(whichArm == 0){
                              this.tile[''+(j-1)+(i)].hasAttacked = true;
                              this.tile[''+(j-1)+(i)].hp = 3;
                              this.tile[''+(j-1)+(i)].power = 3;
                              this.tile[''+(j-1)+(i)].origPower = this.tile[''+(j-1)+(i)].power
                              this.tile[''+(j-1)+(i)].tier = 2
                              //this.tile[''+j+i].multiAttack = 1;
                              this.tile[''+(j-1)+(i)].isEnemyHere = true
                              this.tile[''+(j-1)+(i)].submerged = false
                              this.tile[''+(j-1)+(i)].monID = 2
                              this.tile[''+(j-1)+(i)].hp = monster[this.tile[''+(j-1)+(i)].monID].hp;
                              this.tile[''+(j-1)+(i)].power = monster[this.tile[''+(j-1)+(i)].monID].power;                       
                              this.tile[''+(j-1)+(i)].name = monster[this.tile[''+(j-1)+(i)].monID].name
                            }
                            else{
                              this.tile[''+(j-1)+(i)].hasAttacked = true;
                              this.tile[''+(j-1)+(i)].hp = 3;
                              this.tile[''+(j-1)+(i)].power = 2;
                              this.tile[''+(j-1)+(i)].origPower = this.tile[''+(j-1)+(i)].power
                              this.tile[''+(j-1)+(i)].tier = 1
                              this.tile[''+(j-1)+(i)].multiAttack = 1;
                              this.tile[''+(j-1)+(i)].isEnemyHere = true
                              this.tile[''+(j-1)+(i)].submerged = false
                              this.tile[''+(j-1)+(i)].monID = 3
                              this.tile[''+(j-1)+(i)].hp = monster[this.tile[''+(j-1)+(i)].monID].hp;
                              this.tile[''+(j-1)+(i)].power = monster[this.tile[''+(j-1)+(i)].monID].power;                                
                              this.tile[''+(j-1)+(i)].name = monster[this.tile[''+(j-1)+(i)].monID].name
                            }
                            */
                          
                          }
                          
                        } 
                        catch(e){
                          
                        }  
                        
                        try{

                          if(!this.tile[''+(j)+(i+1)].isCrewHere && !this.tile[''+(j)+(i+1)].isEnemyHere){
                            var whichArm =Math.floor(Math.random() * 2)+2;      
                            this.monsterPool[whichArm-1].count = 1
                            this.spawnMonsters(false,this.tile[''+(j)+(i+1)],whichArm);  
                            this.tile[''+(j)+(i+1)].submerged = false;
                            this.tile[''+(j)+(i+1)].checked = true;
                            
                            /*
                            if(whichArm == 0){
                              this.tile[''+(j)+(i+1)].hasAttacked = true;
                              this.tile[''+(j)+(i+1)].hp = 3;
                              this.tile[''+(j)+(i+1)].power = 3;
                              this.tile[''+(j)+(i+1)].origPower = this.tile[''+(j)+(i+1)].power
                              this.tile[''+(j)+(i+1)].tier = 2
                              //this.tile[''+j+i].multiAttack = 1;
                              this.tile[''+(j)+(i+1)].isEnemyHere = true
                              this.tile[''+(j)+(i+1)].submerged = false
                              this.tile[''+(j)+(i+1)].monID = 2
                              this.tile[''+(j)+(i+1)].name = monster[this.tile[''+(j)+(i+1)].monID].name
                            }
                            else{
                              this.tile[''+(j)+(i+1)].hasAttacked = true;
                              this.tile[''+(j)+(i+1)].hp = 3;
                              this.tile[''+(j)+(i+1)].power = 2;
                              this.tile[''+(j)+(i+1)].origPower = this.tile[''+(j)+(i+1)].power
                              this.tile[''+(j)+(i+1)].tier = 1
                              this.tile[''+(j)+(i+1)].multiAttack = 1;
                              this.tile[''+(j)+(i+1)].isEnemyHere = true
                              this.tile[''+(j)+(i+1)].submerged = false
                              this.tile[''+(j)+(i+1)].monID = 3
                              this.tile[''+(j)+(i+1)].name = monster[this.tile[''+(j)+(i+1)].monID].name
                            }
                              */                   
                          }
                        } 
                        catch(e){
                        
                        }  
                        try{
                          if(!this.tile[''+(j)+(i-1)].isCrewHere && !this.tile[''+(j)+(i-1)].isEnemyHere){
                            var whichArm = Math.floor(Math.random() * 2)+2;     
                            this.monsterPool[whichArm-1].count = 1
                            this.spawnMonsters(false,this.tile[''+(j)+(i-1)],whichArm);  
                            this.tile[''+(j)+(i-1)].submerged = false;
                            this.tile[''+(j)+(i-1)].checked = true;

                            /*  
                            if(whichArm == 0){
                              this.tile[''+(j)+(i-1)].hasAttacked = true;
                              this.tile[''+(j)+(i-1)].hp = 3;
                              this.tile[''+(j)+(i-1)].power = 3;
                              this.tile[''+(j)+(i-1)].origPower = this.tile[''+(j)+(i-1)].power
                              this.tile[''+(j)+(i-1)].tier = 2
                              //this.tile[''+(j)+(i-1)].multiAttack = 1;
                              this.tile[''+(j)+(i-1)].isEnemyHere = true
                              this.tile[''+(j)+(i-1)].submerged = false
                              this.tile[''+(j)+(i-1)].monID = 2
                              this.tile[''+(j)+(i-1)].name = monster[this.tile[''+(j)+(i-1)].monID].name
                            }
                            else{
                              this.tile[''+(j)+(i-1)].hasAttacked = true;
                              this.tile[''+(j)+(i-1)].hp = 3;
                              this.tile[''+(j)+(i-1)].power = 2;
                              this.tile[''+(j)+(i-1)].origPower = this.tile[''+(j)+(i-1)].power
                              this.tile[''+(j)+(i-1)].tier = 1
                              this.tile[''+(j)+(i-1)].multiAttack = 1;
                              this.tile[''+(j)+(i-1)].isEnemyHere = true
                              this.tile[''+(j)+(i-1)].submerged = false
                              this.tile[''+(j)+(i-1)].monID = 3
                              this.tile[''+(j)+(i-1)].name = monster[this.tile[''+(j)+(i-1)].monID].name
                            }
                            */
                          }
                        } 
                        catch(e){
                        
                        }                                                              


                                          
                        break;
                        case 5:
                          break;
                          case 6:
                            //buff sea serpents and scylla
                            this.tile[''+j+i].exhausted = true;
                            for(var m = 0; m < this.boardHeight; m++){
                              for(var l = 0; l < this.boardWidth; l++){  
                                if(!this.tile[''+l+m].submerged && this.tile[''+l+m].isEnemyHere && (this.tile[''+l+m].monID == 5 || this.tile[''+l+m].monID == 7)){
                                  this.spawnBuff(this.tile[''+l+m],'buff_health');
                                  this.tile[''+l+m].width += 25
                                  this.tile[''+l+m].height + 25;
                                  this.tile[''+l+m].hp+=1      
                                  this.tile[''+l+m].statsHistory += "\n\n▪ BLESSED: +1 HEALTH FROM LEVIATHAN'S ABILITY"                       
                                }
                              }
                            }                         
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
                        case 9:     
                        case 8:
                          
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

                        case 10: 
                          break;                           
                        case 102:
                          

              
                          break;                                 
                    }                                 
                      
              
                    }
                  }

                  


                    //this.game.plugins.screenShake.shake(5); 


                    j =  this.boardWidth
                    i = this.boardHeight
                    break;
                }
                else{
                    
                    if(this.tile[''+j+i].isCrewHere && (this.monCountValue-this.monKillCount) > 0){
                      this.add.tween(this.tile[''+j+i]).from( { y:this.tile[''+j+i].y-75 }, 500, Phaser.Easing.Elastic.Out, true);
                         
                       this.setActionText(this.tile[''+j+i],"BLOCKED!")     
                       this.tile[''+j+i].tint = '0x000000' 
                        this.tile[''+j+i].wasBlocked = true;

                        
                        this.creepsBlocked++
                        //Bill Unlock
                        if(this.creepsBlocked  >= 5){
                          this.unlockCrewmate(52)
                        }    

                        //Santiago
                        if(this.creepsBlocked  >= 15){
                          this.unlockCrewmate(58)
                        }                           

                      //insert cool sfx here
                      for(var z = 1; z < this.crew.length; z++){
                        var ranPhrase = Math.floor(Math.random() * 2)
                        if(this.tile[''+j+i].crewID == this.crew[z].id){
                          if(ranPhrase == 0){
                            //this.crewSpeak(z,"Stay down!")
                          }
                          else{
                            //this.crewSpeak(z,"Blocked!")
                          }
                          //this.crew[z].chatTimer = 100;     
                        }

                      }                   
                      
                      //crew On Block effect
                      switch(this.tile[''+j+i].crewID){
                        case 6:       
                          for(var z = 1; z < this.crew.length; z++){
                            if(this.crew[z].id == this.tile[''+j+i].crewID){
                              this.healthCount+= this.crew[z].power
                              this.healCaptain(this.crew[z].power)

                              this.crew[z].isDeployed = false;
                          }
                        }                                        
                  
                        break;
                        case 7:
                          
                          for(var z = 1; z < this.crew.length; z++){
                            if(this.crew[z].id == this.tile[''+j+i].crewID ){
                              
                              this.crew[z].power = this.crew[z].power*2;
                              this.crew[z].origPower = this.crew[z].power
                              this.tile[''+j+i].powerText.text = this.crew[z].power

                              this.crew[z].powerUpParticle.makeParticles('sparkle');
                              this.crew[z].powerUpParticle.setScale(1, 1, 1, 1);                  
                              this.crew[z].powerUpParticle.maxParticleSpeed.set(100,100);
                              this.crew[z].powerUpParticle.explode(500);       
                              
                              this.crew[z].isDeployed = false;
                              
                            }
                          }                        

                          break;     
                        case 59:

                          this.freeCounter[6].num += 1       
                          this.harpoonsGained++   
                          //Amazi unlock
                          if(this.harpoonsGained >= 10){
                            this.unlockCrewmate(59)
                          }                                 
                          this.freeCounter[6].counter2.alpha = 1
                          this.freeCounter[6].counter2.text = "+1🔱"                         
                          break;                   
                      }

                      //generate blocked tile
                      if(this.tile[''+j+i].monID != 0){
                        this.tile[''+j+i].powerText.text = ""
                        this.tile[''+j+i].healthText.text = ""
                        this.tile[''+j+i].deathParticle.makeParticles(this.tile[''+j+i].texture);
                        this.tile[''+j+i].deathParticle.setScale(0.7, 0.7, 0.7, 0.7);
                        var skyPower = this.tile[''+j+i].power
                        this.tile[''+j+i].deathParticle.maxParticleSpeed.set(0, (-600*skyPower));
                        this.tile[''+j+i].deathParticle.minParticleSpeed.set(0, (-200*skyPower));
                        this.tile[''+j+i].deathParticle.explode(2000,1);
                        
                        
                      }                   
                      this.tile[''+j+i].loadTexture('mon-1');
                      for(var ii = 1; ii < this.crew.length; ii++){
                        if(this.tile[''+j+i].crewID == this.crew[ii].crewID ){
                          this.deploy_poolCurrent += this.crew[ii].deployCost        
                          this.crew[ii].isSelected = false;
                          this.crew[ii].isDeployed = false
                        }  
                      } 
                      this.tile[''+j+i].crewID = 0
                      this.tile[''+j+i].isCrewHere = false;                         
                    }
                    else{
                      this.tile[''+j+i].submerged = false;
                      this.tile[''+j+i].width  = this.size
                      this.tile[''+j+i].height = this.size 
                      
                      

                      if(this.tile[''+j+i].isCrewHere){
                        
                        //this.tile[''+j+i].y -= 50;
                        this.add.tween(this.tile[''+j+i]).from( { y:this.tile[''+j+i].y-50 }, 500, Phaser.Easing.Elastic.Out, true);
                        //this.game.plugins.screenShake.shake(5);
                        this.tile[''+j+i].hasActed = true;                           
                        this.tile[''+j+i].crewID = 0
                        this.tile[''+j+i].isCrewHere = false;
                        this.tile[''+j+i].hasActed = false;
                        this.tile[''+j+i].placeOrder = -1;               

                        for(var ii = 1; ii < this.crew.length; ii++){
                          if(this.tile[''+j+i].crewID == this.crew[ii].crewID ){
                            this.deploy_poolCurrent += this.crew[ii].deployCost        
                            this.crew[ii].isSelected = false;
                            this.crew[ii].isDeployed = false
                          }

                        } 
                      }


                      //this.ActionCounter--;
                      if(!this.tile[''+j+i].isFlipping && this.tile[''+j+i].monID != 99 && this.tile[''+j+i].monID != 102 && this.tile[''+j+i].monID != 103){
                        this.tile[''+j+i].isFlipping = true;
                        
                        
                        this.tile[""+j+i].oldTexture = this.tile[""+j+i].texture;    

                        //take damage on surfacing
                        for(var m = 0; m < this.boardHeight; m++){
                          for(var l = 0; l < this.boardWidth; l++){  
                            if(this.tile[''+l+m].crewID == 58){
                             
                              this.spawnAttack(this.tile[''+l+m],this.tile[""+j+i],0)  
                            }
                          }
                        }                           

                        //stop multi attack
                        this.tile[''+j+i].multiAttack = 0
                        this.tile[''+j+i].hasAttacked = true
                        this.tile[''+j+i].checked = true;                         
                         
                      } 
                      else{
                        //this.tile[""+j+i].y -= 25
                        this.add.tween(this.tile[''+j+i]).from( { y:this.tile[''+j+i].y-25 }, 500, Phaser.Easing.Elastic.Out, true);
                      }
                    }
                  
                  j =  this.boardWidth
                  i = this.boardHeight
                  break;                  
                }                

              }
              else if(!this.tile[''+j+i].checked){
                
                
                speedUp = true;
                this.tile[''+j+i].width -= 50
                this.tile[''+j+i].height -= 50
                //this.ActionCounter--
                if(!this.tile[''+j+i].isCrewHere){

                  var spawnTarget = this.monBaseCount//this.monBaseCount*monscaleNum*this.turnCountNum
                  var rand = Math.floor(Math.random() * (2))
                  if(rand == 0 && (this.monCount < spawnTarget)){
                    this.spawnMonsters(false,this.tile[''+j+i]); 
                    this.tile[''+j+i].hasAttacked = true;           
                       
                    /*
                    //SOS
                    rand = Math.floor(Math.random() * (this.sosCount))    
                    if(rand == 0 && i > this.boardHeight/2 && !this.sosLock){
                      this.spawnMonsters(true,this.tile[''+j+i],102);     
                      this.sosCount = baseSOSCOunt*this.turnCountNum
                      this.sosLock = true
                    }
                    else{
                      this.spawnMonsters(false,this.tile[''+j+i]); 
                      this.tile[''+j+i].hasAttacked = true;     
                    }
                     
                    */
                  } 

                                 
                }
                this.tile[''+j+i].checked = true;   
                j =  this.boardWidth
                i = this.boardHeight                
                break;                 
              }
            }
          } 
          
          this.ActionCounter++;
          //this.monCount
          if(this.ActionCounter >= this.tileCount){

            if(this.rockCount <= 0 && parseInt(localStorage.getItem("intro")) > 12 && this.turnCountNum >= 5){          
              //this.spawnRocks(); 
            }           

            
            //this.turnMarkerText.text = "ENEMY TURN"               
            this.phaseCounter = 0;
            this.turnWait = turnWaitBase;
            this.ActionCounter = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){   
                this.tile[''+j+i].hasActed = false;
                this.tile[''+j+i].checked = false;
                this.tile[''+j+i].multiAttack = this.tile[''+j+i].origmultiAttack

                this.tileHighlight.x = -200
                this.tileHighlight.y = -200                
              }
            }             
            this.turnMarkerText.text = ""  
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
            if(true){
              this.actionTimer = this.tickerSpeed//actionTimerBase/3 
              this.tickerSpeed-= 1;
              if(this.tickerSpeed <= tickerSpeedMin){
                this.tickerSpeed = tickerSpeedMin;
              }
            }
            else{
              this.actionTimer = actionTimerBase/2 
            }
            
            //this.game.time.events.add(5000, this.enemyFight());
          }
            
        }   
        ,resetRipple: function (){
          for(var l = 0; l < this.boardHeight; l++){
            for(var m = 0; m < this.boardWidth; m++){   
              this.tile[""+m+l].rippleTrig = 0;
              this.tile[""+m+l].rippleDir = -1;
            }
          }          
        }
        ,surroundingTileDip: function (tile, dip){
          var key = tile.id.split("");
          var j = parseInt(key[0])
          var i = parseInt(key[1])

          var ranRange = 0
          

          var rand = Math.floor(Math.random() * ranRange)
          switch(tile.rippleDir){
            case 0:
              //right
              try{
                if(this.tile[""+(j+1)+i].rippleTrig != -1){
                  this.tile[""+(j+1)+i].rippleTrig = 1
                  this.tile[""+(j+1)+i].y += dip+rand;
                  this.tile[""+(j+1)+i].rippleDir = 2;
                }            
              }
              catch(e){
              } 
              //left
              try{
                if(this.tile[""+(j-1)+i].rippleTrig != -1){
                  this.tile[""+(j-1)+i].rippleTrig = 1
                  this.tile[""+(j-1)+i].y += dip+rand;
                  this.tile[""+(j-1)+i].rippleDir = 4;
                }            
              }
              catch(e){
              }  
              //up
              try{
                if(this.tile[""+(j)+(i-1)].rippleTrig != -1){
                  this.tile[""+(j)+(i-1)].rippleTrig = 1
                  this.tile[""+(j)+(i-1)].y += dip+rand;
                  this.tile[""+(j)+(i-1)].rippleDir = 1;
                }            
              }
              catch(e){
              } 
              //down
              try{
                if(this.tile[""+(j)+(i+1)].rippleTrig != -1){
                  this.tile[""+(j)+(i+1)].rippleTrig = 1
                  this.tile[""+(j)+(i+1)].y += dip+rand;
                  this.tile[""+(j)+(i+1)].rippleDir = 3;
                }            
              }
              catch(e){
              }                                                       
              break;
            case 1:
              try{
                if(this.tile[""+(j)+(i-1)].rippleTrig != -1 && this.tile[""+(j)+(i-1)].rippleDir == -1){
                  this.tile[""+(j)+(i-1)].rippleTrig = 1
                  this.tile[""+(j)+(i-1)].y += dip+rand;
                  this.tile[""+(j)+(i-1)].rippleDir = 1;
                }            
              }
              catch(e){
              }                                              
              break;               
            case 2:
              try{
                if(this.tile[""+(j+1)+i].rippleTrig != -1 && this.tile[""+(j+1)+i].rippleDir == -1){
                  this.tile[""+(j+1)+i].rippleTrig = 1
                  this.tile[""+(j+1)+i].y += dip+rand;
                  this.tile[""+(j+1)+i].rippleDir = 2;
                }            
              }
              catch(e){
              } 
              try{
                if(this.tile[""+(j)+(i+1)].rippleTrig != -1 && this.tile[""+(j)+(i+1)].rippleDir == -1){
                  this.tile[""+(j)+(i+1)].rippleTrig = 1
                  this.tile[""+(j)+(i+1)].y += dip+rand;
                  this.tile[""+(j)+(i+1)].rippleDir = 2;
                }            
              }
              catch(e){
              }  
              try{
                if(this.tile[""+(j)+(i-1)].rippleTrig != -1 && this.tile[""+(j)+(i-1)].rippleDir == -1){
                  this.tile[""+(j)+(i-1)].rippleTrig = 1
                  this.tile[""+(j)+(i-1)].y += dip+rand;
                  this.tile[""+(j)+(i-1)].rippleDir = 2;
                }            
              }
              catch(e){
              }                                                
              break; 
            case 3:
              try{
                if(this.tile[""+(j)+(i+1)].rippleTrig != -1 && this.tile[""+(j)+(i+1)].rippleDir == -1){
                  this.tile[""+(j)+(i+1)].rippleTrig = 1
                  this.tile[""+(j)+(i+1)].y += dip+rand;
                  this.tile[""+(j)+(i+1)].rippleDir = 3;
                }            
              }
              catch(e){
              }                                              
              break;                 
            case 4:
              try{
                if(this.tile[""+(j-1)+i].rippleTrig != -1 && this.tile[""+(j-1)+i].rippleDir == -1){
                  this.tile[""+(j-1)+i].rippleTrig = 1
                  this.tile[""+(j-1)+i].y += dip+rand;
                  this.tile[""+(j-1)+i].rippleDir = 4;
                }            
              }
              catch(e){
              } 
              try{
                if(this.tile[""+(j)+(i+1)].rippleTrig != -1 && this.tile[""+(j)+(i+1)].rippleDir == -1){
                  this.tile[""+(j)+(i+1)].rippleTrig = 1
                  this.tile[""+(j)+(i+1)].y += dip+rand;
                  this.tile[""+(j)+(i+1)].rippleDir = 4;
                }            
              }
              catch(e){
              }  
              try{
                if(this.tile[""+(j)+(i-1)].rippleTrig != -1 && this.tile[""+(j)+(i-1)].rippleDir == -1){
                  this.tile[""+(j)+(i-1)].rippleTrig = 1
                  this.tile[""+(j)+(i-1)].y += dip+rand;
                  this.tile[""+(j)+(i-1)].rippleDir = 4;
                }            
              }
              catch(e){
              }                                                
              break;                        
          }
          /*
          if(true ){
            try{
              if(this.tile[""+(j+1)+i].rippleTrig != -1 && this.tile[""+(j+1)+i].rippleDir == -1){
                this.tile[""+(j+1)+i].rippleTrig = 1
                this.tile[""+(j+1)+i].y += dip+rand;
                this.tile[""+(j+1)+i].rippleDir = 2;
              }
              //
              
              
            }
            catch(e){

            }
            
            rand = Math.floor(Math.random() * ranRange)
            try{
              if(this.tile[""+(j-1)+i].rippleTrig != -1){
                this.tile[""+(j-1)+i].rippleTrig = 1
                this.tile[""+(j-1)+i].y += dip+rand;
              }              
              //
              
            }
            catch(e){

            }  
            rand = Math.floor(Math.random() * ranRange)
            try{
              if(this.tile[""+j+(i+1)].rippleTrig != -1){
                this.tile[""+j+(i+1)].rippleTrig = 1
                this.tile[""+j+(i+1)].y += dip+rand;
              }                 
              //this.tile[""+j+(i+1)].rippleTrig = 1
              
            }
            catch(e){
            
            }
            rand = Math.floor(Math.random() * ranRange)
            try{
              if(this.tile[""+j+(i-1)].rippleTrig != -1){
                this.tile[""+j+(i-1)].rippleTrig = 1
                this.tile[""+j+(i-1)].y += dip+rand;
              }                        
              //this.tile[""+j+(i-1)].rippleTrig = 1
              
            }
            catch(e){

            }   
            /*
            rand = Math.floor(Math.random() * ranRange)
            try{
              if(this.tile[""+(j-1)+(i-1)].rippleTrig != -1){
                this.tile[""+(j-1)+(i-1)].rippleTrig = 1
                this.tile[""+(j-1)+(i-1)].y += dip+rand;
              }                        
              //this.tile[""+(j-1)+(i-1)].rippleTrig = 1
              
            }
            catch(e){

            } 
            rand = Math.floor(Math.random() * ranRange)     
            try{
              if(this.tile[""+(j+1)+(i+1)].rippleTrig != -1){
                this.tile[""+(j+1)+(i+1)].rippleTrig = 1
                this.tile[""+(j+1)+(i+1)].y += dip+rand;
              }                   
              //this.tile[""+(j+1)+(i+1)].rippleTrig = 1
              
            }
            catch(e){

            }   
            rand = Math.floor(Math.random() * ranRange)
            try{
              if(this.tile[""+(j+1)+(i-1)].rippleTrig != -1){
                this.tile[""+(j+1)+(i-1)].rippleTrig = 1
                this.tile[""+(j+1)+(i-1)].y += dip+rand;
              }              
              //this.tile[""+(j+1)+(i-1)].rippleTrig = 1
              
            }
            catch(e){

            }  
            rand = Math.floor(Math.random() * ranRange) 
            try{
              if(this.tile[""+(j-1)+(i+1)].rippleTrig != -1){
                this.tile[""+(j-1)+(i+1)].rippleTrig = 1
                this.tile[""+(j-1)+(i+1)].y += dip+rand;
              }                
              //this.tile[""+(j-1)+(i+1)].rippleTrig = 1
              
            }
            catch(e){

            } 
            
          }  
          */      
          tile.rippleTrig = -1            
                            
        } 
        ,hideDetails2: function () {
          this.hideDetails();
          this.targetTileID = null
          this.getTileDetails = false;
          this.getCapDetails = false; 
          try{
            this.delayShowInfoTimer.destroy();    
          }
          catch(e){

          }
               
        }    
        ,hideDetails: function () {
          
          if(this.getTileDetails){
            this.popupTail.alpha = 0;
            this.exit_DetailButton.x = -1000;
            this.exit_DetailButton.alpha = 0;
            this.exit_DetailButton_outline.alpha = 0;
            //this.getTileDetails = false;
            this.getCapDetails = false;
            this.chatTimer = 0;
            this.unShowInfo()  
             
          }
        }        
        ,placeCrew: function (tile, pointer) {
          
          tile = this.tile[this.targetTileID]
          
          
         
          if(debug){
            alert("tile info \nIs Flipping? "+tile.isFlipping+"\nisEnemy? "+tile.isEnemyHere+"\nisSubmerged? "+tile.submerged+"\nmonID? "+tile.monID+"\nisCrew? "+tile.isCrewHere)
            alert("tile info \ncrew ID? "+tile.crewID)
            alert("selected Crew? "+this.selectedCrew+"\nselected crew ID? "+this.crew[this.selectedCrew].id )
          }
          if(true){
            if(this.selectedCrew != 0 && (!tile.isEnemyHere || tile.submerged) && !tile.isCrewHere && !this.noPickUp){
              var remainingDeploy = this.deploy_poolCurrent - this.crew[this.selectedCrew].deployCost

              var ran = Math.floor(Math.random() * 5)+1
              this.stoneSnd[ran].play()
              
              this.add.tween(tile).from( { y:tile.y+dipVal }, 500, Phaser.Easing.Elastic.Out, true);
              //tile.y += dipVal;
              //this.resetRipple();
              //tile.rippleTrig = 1
              //tile.rippleDir = 0;
              
              this.snapShot(); 
              this.noPickUp = true;
              
              tile.placeOrder = this.placeOrderTracker
              this.crew[this.selectedCrew].deployNum.alpha = 1
              this.crew[this.selectedCrew].deployNum.text = "#"+(tile.placeOrder+1)
              //hide counter on consumables
              if(this.selectedCrew == 5 || this.selectedCrew == 6){
                this.crew[this.selectedCrew].deployNum.alpha = 0
              }
              
              //spawn curse pellets
              if(this.crew[this.selectedCrew].curseVal > 0){              
                if(parseInt(localStorage.getItem("afflictTut")) == 0){
                  localStorage.setItem("afflictTut",1);
                  this.chatTimer = 1;
                  this.tutorialPause = true;                      
                  Swal.fire({
                    title: 'Affliction',
                    text: "Deploying afflicted crew fills the curse meter",
                    imageUrl: 'assets/curseTracker.webp',
                    backdrop: false,
                    imageWidth: 50,
                    imageHeight: 50,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    heightAuto: false                           
                  }).then((result) => {
                    this.chatTimer = 0;
                    this.tutorialPause = false;                                         
                  })                  
                }
                for(var count=0; count< this.crew[this.selectedCrew].curseVal;count++){
                  this.spawnCurse(tile.x, tile.y)
                }
              }

              //Zane would be mad at this
              //this.placedCrewID[this.placeOrderTracker] = tile.crewID

              this.placeOrderTracker++
              if(remainingDeploy >= 0){

                tile.powerText.height = tile.powerText.origHeight
                //tile.powerText.width = 4

                //crew guiding placement
                /*
                if(parseInt(localStorage.getItem("intro")) == 4 || onboardingDebug ){
                  
                  for(var k = 1; k < this.crew.length; k++){
                    if(this.crew[k].id == 90 && this.crew[this.selectedCrew].id != 90 && parseInt(localStorage.getItem("intro")) == 4){
                      this.crewSpeak(k,"Put me in as well, Cap'n!")
                      localStorage.setItem("intro",5);
                    }
                  }  
                }
                if(this.crew[this.selectedCrew].id == 90 && parseInt(localStorage.getItem("intro")) == 5){
                  localStorage.setItem("intro",6);
                }            

                if (parseInt(localStorage.getItem("intro")) == 6 ) {
                  this.tutorialPause = true;
                  this.chatTimer = 1;                  
                  this.overlay.loadTexture('bgOverlay_savvy')   
                  Swal.fire({
                    title: 'Pay Attention!',
                    text: "Deploying crew and Using your captain's ability costs SAVVY.",
                    imageUrl: 'assets/tut_savvy.webp',
                    backdrop: false,
                    imageWidth: 200,
                    imageHeight: 200,
                    allowOutsideClick: false,
                    allowEscapeKey: false                      
              
                  }).then((result) => {
                    localStorage.setItem("intro",7);
                    this.chatTimer = 0;
                    this.tutorialPause = false;        
                    

                    for(var k = 1; k < this.crew.length; k++){
                      if(this.crew[k].id == 91 ){
                        this.crewSpeak(k,"Don't forget your ability, Captain!")

                      }   
                    }                   
                  })            
                } 
                */             
                try{

                  

                  this.crew[this.selectedCrew].posX = tile.posX
                  this.crew[this.selectedCrew].posY = tile.posY
                  tile.loadTexture(this.crew[this.selectedCrew].texture)
                  tile.width = this.size
                  tile.height = this.size
                  tile.isCrewHere = true
                  


           
                
                  tile.type = this.crew[this.selectedCrew].type
                  tile.crewID = this.crew[this.selectedCrew].id 
                  tile.benchID = this.crew[this.selectedCrew].arrayKey 
                  this.crew[this.selectedCrew].isSelected = false;

                  
                  
                  //crew normally attacks once
                  tile.multiAttack = 1        
                  
                  //some crew attack multiple times
                  if(tile.crewID == 31){
                    tile.multiAttack++
                  }
                  //gifted extra attack
                  if(this.placedCrewID[this.placeOrderTracker-2] == 36 && tile.crewID != 80 && tile.crewID != 81){
                    tile.multiAttack++
                  }
                  //super extra attack
                  if(tile.crewID == 37){
                    for(var t= 0 ; t< this.crew[this.selectedCrew].killCount; t++){
                      tile.multiAttack++
                    }
                  }
                  //captain extra attack
                  if(this.extraAttackFromCaptain && tile.type == 0){
                    tile.multiAttack++
                  }   
                  



            
                  
                  
                   
                  
                  ////console.log("placement #"+this.placeOrderTracker)
                  ////console.log(this.placedCrewID)
                  ////console.log(this.placedCrewID[this.placeOrderTracker-2])



                  this.deploy_poolCurrent -= this.crew[this.selectedCrew].deployCost
                  if(this.selectedCrew == 5 ){
                    this.deployedBombs++
                    this.freeCounter[5].num--              
                    this.freeCounter[5].counter2.alpha = 1
                    this.freeCounter[5].counter2.text = "-1💣"    
                          
                  }
                  else if(this.selectedCrew == 6){
                    this.deployedHarpoons++
                    this.freeCounter[6].num--              
                    this.freeCounter[6].counter2.alpha = 1
                    this.freeCounter[6].counter2.text = "-1🔱"    
                          
                  }                  
                  else{
                    this.crew[this.selectedCrew].isDeployed = true
                  }

                  if(parseInt(localStorage.getItem("intro")) == 2 ){
                    this.setFocus(200,this.clear_Button.x,this.clear_Button.y)
                    this.crewSpeak(1,"I'm not next to the chest.\nTry again!",quickspeechTimerBase)
                    this.crew[1].speechTimer = quickspeechTimerBase                  }
                  if(parseInt(localStorage.getItem("intro")) == 4 ){
                    this.setFocus(200,this.clear_Button.x,this.clear_Button.y)
                    this.crewSpeak(4,"I'm not next to the Distress Flag.\nTry again!", quickspeechTimerBase)
                  }                

                  if(parseInt(localStorage.getItem("intro")) == 9 && tile.submerged){    
                    for(var i = 1; i < this.crew.length; i++){
                      this.crew[i].speechTimer = 0;
                      this.crew[i].speechBubble.alpha = 0;
                      this.crew[i].speechBubbleText.alpha = 0;
                      this.crew[i].isTalking = false;
                      
                    }

                    localStorage.setItem("intro",10)     
                    //this.setFocus(200,this.endTurn_Button.x,this.endTurn_Button.y)   
                    //this.crewSpeak(1,"Now click 'Fight' to begin combat!")
                    //this.crew[1].speechTimer = quickspeechTimerBase;                        
                  }    
                  else if(parseInt(localStorage.getItem("intro")) == 9 && !tile.submerged){  
                    this.setFocus(200,this.clear_Button.x,this.clear_Button.y)
                    this.crewSpeak(this.selectedCrew,"I'm not BLOCKING a creep.\nTry again!",quickspeechTimerBase)
                 
                  }               
                }
                catch(e){

                }
                
                for(var i = 1; i < this.crew.length; i++){
                  this.crewSelect[i].alpha = 0;
                }
                //this.selectedCrew = 0   
              }
              
            }
            else if(tile.isCrewHere || tile.isEnemyHere ){
              var ranStatement = Math.floor(Math.random() * 4)
              var statement = ""
              switch(ranStatement ){
                case 0:
                  statement = "That tile is occupied!"
                  break;
                case 1:
                  statement = "Try another spot, Captain!"
                  break;
                case 2:
                  statement = "Can't deploy here, Cap'n!"
                  break;
                case 3:
                  statement = "Something's already there!"
                  break;                  
              }
              try{
                //this.crewSpeak(this.selectedCrew,statement,quickspeechTimerBase)
              }
              catch(e){
                
              }
              
            }          
          }
          /*
          if(pointer.rightButton.isDown && !this.bossDead){
            //this.showInfo(tile);

 
          }
          else if(pointer.rightButton.isDown && (this.getTileDetails || this.bossDead)){
            //this.getTileDetails = false;
          }
          else{
            this.getTileDetails = false;
    
          }
          */


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
        ,tintTile: function (tile,color,crew) {
          try{
            tile.tint = color

                var multiAttack = 1;
                for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){   
                    if(crew.id == this.tile[''+j+i].crewID && this.tile[''+j+i].isCrewHere){
                      multiAttack = this.tile[''+j+i].multiAttack
                    }
                  }
                }             
            
            if(tile.isEnemyHere && !tile.submerged){
              if(crew.powerText.text.includes("Ꝏ")){
                tile.incomingDamage += 99 
              }
              else{
               
                tile.incomingDamage += parseInt(crew.powerText.text)*multiAttack ;
              }              
              var damage = 0;

              if(tile.alpha == 1){
                damage = Math.floor(tile.incomingDamage) 
              }
              else{
                damage = Math.floor(tile.incomingDamage/2) 
              }
              
              
              tile.willDie.x = tile.x+5
              tile.willDie.y = tile.y            
              tile.willDie.alpha = 1  
              if(damage >= tile.hp){          
                //tile.willDie.y = tile.y
                
                if(tile.willDie.text.includes("❤️") ||  tile.willDie.text.length <= 0){
                  if(!tile.exhausted){
                    this.removeIncomingDamage(tile) 
                  }
                    
                }
                tile.willDie.text = "-"+damage+"☠️"   
                                
                //tile.healthText.text = parseInt(tile.hp)-damage;
                //tile.willDie.alpha = 1;
              }  
              else{
                //if it was about to die readd incoming damage
                if(tile.willDie.text.includes("☠️") && !tile.exhausted){
                  this.addIncomingDamage(tile) 
                }
                tile.willDie.text = "-"+damage+"❤️"
              }

              
              if(tile.monID == 99 && damage > 0 && parseInt(localStorage.getItem("intro"))== 2 ){
                this.crew[1].speechTimer = 0;
                this.crew[1].speechBubble.alpha = 0;
                this.crew[1].speechBubbleText.alpha = 0;
                this.crew[1].isTalking = false;

                this.TLetterBox.alpha = 0;

                for(var k = 1; k < this.crew.length; k++){
                  
                  if(this.crew[k].id == 92 && this.crew[1].isDeployed){
                      
                    localStorage.setItem("intro",3);
              
                    this.setFocus(200,this.deploy_pool.x,this.deploy_pool.y)
                    this.crewSpeak(k,"Don't forget that deploying crew and using your ability costs Savvy",speechTimerBase)

                  }  
                }  
              }


              if(tile.monID == 102 && damage > 0 && parseInt(localStorage.getItem("intro"))== 4 ){
                for(var k = 1; k < this.crew.length; k++){
                  
                  if(this.crew[k].id == 91 && this.crew[4].isDeployed){

                    for(var l = 1; l < this.crew.length; l++){
                      this.crew[l].speechTimer = 0;
                      this.crew[l].speechBubble.alpha = 0;
                      this.crew[l].speechBubbleText.alpha = 0;
                      this.crew[l].isTalking = false;
                      
                    }                    
                    localStorage.setItem("intro",5);
                    this.setFocus(200,this.ult_Button.x,this.ult_Button.y)                    
                    this.crewSpeak(2,"Don't forget your ability, Captain!",speechTimerBase)

                  }  
                }  
              }              
              
            }
           
           
            
          }
          catch(e){
            //console.log(e)
          }   
        }   
        ,setFocus: function(time,x,y, angle){

          if (angle === undefined ) {
            angle = 1
          }
          
          this.focusHereTimer = time
          this.focusHere.angle = angle
          this.focusHere.x = x
          this.focusHere.y = y
          this.focusHere.origY = y
          this.focusHere.alpha = 1;          
        }      
        ,removeTint: function () {
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){   
              
              if(this.tile[''+j+i].monID == 0 && !this.tile[''+j+i].isCrewHere){
                this.tile[''+j+i].tint = '0x000000' 
              } 
              else if(this.tile[''+j+i].submerged && !this.tile[''+j+i].isCrewHere){
                this.tile[''+j+i].tint = '0x000000' 
              }               
              else{
                this.tile[""+j+i].tint = '0xFFFFFF'
              }
                                    
              this.tile[''+j+i].incomingDamage = 0;
              //if it was about to die readd incoming damage
              if(this.tile[''+j+i].willDie.text.includes("☠️") && !this.tile[''+j+i].exhausted){
                this.addIncomingDamage(this.tile[''+j+i]) 
              }
              this.tile[''+j+i].willDie.alpha = 0;
              this.tile[''+j+i].willDie.text = "";
                  
            }
          }    
        }      
        ,getInfo: function () {

        }             
        ,deselect: function (crew) {
          
          if(this.deployReady){
            for(var i = 1; i < this.crew.length; i++){
              this.crew[i].isSelected = false;
            }
            this.selectedCrew = 0            
          }
          this.removeTint();

          
        }        
        ,crewSelected: function (chosen, pointer) {

       
          
          try{
            this.delayShowInfoTimer.destroy();    
          }
          catch(e){

          }          
          var tokensRemaining =  this.chestOpened+this.soulsSaved+this.chestTriggers+this.soulTriggers
          if(tokensRemaining <= 0){
            if(pointer.rightButton.isDown && !this.getTileDetails && !this.bossDead && this.cursorSelect.alpha <= 0){
             
            }
            else if(pointer.rightButton.isDown && (this.getTileDetails || this.bossDead)){
              //this.getTileDetails = false;
            }            
            else{
              this.beginTint = true;
              this.getTileDetails = false

              
              
              if(!chosen.isBlank && !this.addToCrew && !this.removeFromCrew && !chosen.isDeployed){
                this.noPickUp = false;

                //only during deployment phase
                var remainingDeploy = this.deploy_poolCurrent - chosen.deployCost
              
                if(this.deployReady && ((remainingDeploy >= 0 && chosen.arrayKey != 5) || (this.freeCounter[5].num-1 >= 0 && chosen.arrayKey == 5)|| (this.freeCounter[6].num-1 >= 0 && chosen.arrayKey == 6))){
                  if(!chosen.isDeployed){

                    this.cursorSelect.x = chosen.x
                    this.cursorSelect.y = chosen.y
                    this.cursorSelect.loadTexture(chosen.texture)
                    this.cursorSelect.alpha = 0.3
                    //his.chatTimer = 1;
                    this.showInfo(chosen)

                    
                    if(!chosen.isSelected){
                      for(var i = 1; i < this.crew.length; i++){
                        this.crew[i].isSelected = false;
                      }            
                      chosen.speechTimer = 1;                
                      chosen.isSelected = true;
                      this.selectedCrew = chosen.arrayKey//crew.id
                    }
                    else{
                      chosen.isSelected = false;
                      this.selectedCrew = 0
                      this.noPickUp = true;
                    }

                    //crew select abilities
                    
                    chosen.attackPattern = crew[chosen.id].attackPattern

                    switch(chosen.id){
                      default:
                        try{
                          //gift col strike
                          if(this.placedCrewID[this.placeOrderTracker-1] == 19 ){
                            this.crew[this.selectedCrew].attackPattern = 2;
                          }  
                          //gift row strike
                          if(this.placedCrewID[this.placeOrderTracker-1] == 18 ){
                            this.crew[this.selectedCrew].attackPattern = 3;
                          }    
                          //gift all strike
                          if(this.placedCrewID[this.placeOrderTracker-1] == 20 ){
                            this.crew[this.selectedCrew].attackPattern = 6;
                          }   
                          //gift extra attack
                          if(this.placedCrewID[this.placeOrderTracker-1] == 36 ){
                            //this.crew[this.selectedCrew].attackPattern = 6;
                          }                                                                    
                        }
                        catch(e){

                        }
                      break;                  
                      case 14:
                        for(var i=0; i< 5; i++){

                          try{
                            if(this.placedCrewID[i-1] != -1 && this.placedCrewID[i-1] != 0){
                              for(var z = 1; z < this.crew.length; z++){
                                if(this.crew[z].id == this.placedCrewID[i-1]){
                                  this.crew[this.selectedCrew].attackPattern =  this.crew[z].attackPattern
                                }
                              }                        
                              
                            }
                          }
                          catch(e){

                          }


                        }                  
                        
                      break;



                    }              
                    
                  }
                  /*
                  if(parseInt(localStorage.getItem("intro")) == 4 && chosen.id != 1){
                    chosen.isSelected = false;
                    this.selectedCrew = 0
                    this.noPickUp = true;              
                    for(var k = 1; k < this.crew.length; k++){
                      if(this.chosen[k].id == 1){
                        this.crewSpeak(k,"Deployment order matters!\nPut me in first")
                      }
                    }              
                  }
                  if(parseInt(localStorage.getItem("intro")) == 5 && chosen.id != 90){
                    chosen.isSelected = false;
                    this.selectedCrew = 0
                    this.noPickUp = true;              
                    for(var k = 1; k < this.crew.length; k++){
                      if(this.chosen[k].id == 90){
                        this.crewSpeak(k,"Put me in as well, Captain!")
                      }
                    }              
                  }   
                  */
                  if(parseInt(localStorage.getItem("intro")) == 2 && chosen.id != 99){
                    chosen.isSelected = false;
                    this.selectedCrew = 0
                    this.noPickUp = true;     
                    
                    this.crewSpeak(1,"Let's get that treasure!",quickspeechTimerBase)

                  }        
                  if(parseInt(localStorage.getItem("intro")) == 4 && chosen.id != 92){
                    chosen.isSelected = false;
                    this.selectedCrew = 0
                    this.noPickUp = true;     
                    
                    this.crewSpeak(4,"Now place me next to the Distress Flag!", quickspeechTimerBase)

                  }                        
                  if(parseInt(localStorage.getItem("intro")) < 8 && parseInt(localStorage.getItem("intro")) >= 5){
                    chosen.isSelected = false;
                    
                    this.noPickUp = true;     


                    if(parseInt(localStorage.getItem("intro")) == 5){
                      this.selectedCrew = 0
                      this.setFocus(200,this.ult_Button.x,this.ult_Button.y)   
                      this.crewSpeak(chosen.arrayKey,"Don't forget your ability, Captain!", quickspeechTimerBase)

                    }                              
                    if(parseInt(localStorage.getItem("intro")) == 6 ){
                      this.setFocus(200,this.endTurn_Button.x,this.endTurn_Button.y)   
                      this.crewSpeak(chosen.arrayKey,"Now click 'Fight' to begin combat!", quickspeechTimerBase)

                    }                    
                  }
                  //parseInt(localStorage.getItem("intro")) == 8 
                  if(parseInt(localStorage.getItem("intro")) == 8  || parseInt(localStorage.getItem("intro")) == 10){      
                    //chosen.isSelected = false;
                    //this.noPickUp = true;                  
                    //this.setFocus(200,this.endTurn_Button.x,this.endTurn_Button.y)   
                    //this.crewSpeak(chosen.arrayKey,"Now click 'Fight' to begin combat!")
                    //chosen.speechTimer = quickspeechTimerBase;      
                  }   
                  if(parseInt(localStorage.getItem("intro")) == 9){
                    for(var m = 0; m < this.boardHeight; m++){
                      for(var l = 0; l < this.boardWidth; l++){  
                        if(this.tile[''+l+m].isEnemyHere && this.tile[''+l+m].submerged){
                          this.setFocus(200,this.tile[''+l+m].x,this.tile[''+l+m].y)   
                        }
                      }
                    }                
                    this.crewSpeak(chosen.arrayKey,"BLOCK that SUBMERGED creep",quickspeechTimerBase) 

                  }
                  


                  
                

                  /*
                  if(parseInt(localStorage.getItem("intro")) == 10 && crew.id != 3){
                    crew.isSelected = false;
                    this.selectedCrew = 0
                    this.noPickUp = true;              
                    for(var k = 1; k < this.crew.length; k++){
                      if(this.crew[k].id == 3){
                        this.crewSpeak(k,"Let me have the honour, Captain")
                      }
                    }              
                  }            
                  */
                  


                }
                else{
                  if(chosen.arrayKey != 5){
                    var onBoard = false;
                    for(var ii = 0; ii < this.boardHeight; ii++){
                      for(var jj = 0; jj < this.boardWidth; jj++){      
                        if(this.tile[''+jj+ii].crewID == chosen.id ){
                          onBoard = true;    
                        }
                      }
                    }    
                                
                    if(onBoard){
                      this.crewSpeak(chosen.arrayKey,"Already deployed, Captain", quickspeechTimerBase)

                    }
                    else{
                      this.crewSpeak(chosen.arrayKey,"Not enough Savvy, Captain", quickspeechTimerBase)

                    }

                  }

                  chosen.isSelected = false;
                  //this.selectedCrew = 0
                  this.noPickUp = true;            
                }
              }
              else if(this.removeFromCrew && chosen.arrayKey < 5 && !chosen.isBlank){
                this.unShowInfo();
                this.treasureOptions[1].y -= 50;
                this.crewOptions[1].deployText.text = chosen.deployText.text
                this.crewOptions[1].powerText.text = chosen.powerText.text
                this.crewOptions[1].ability.text = this.crew[chosen.arrayKey].ability
                var crewType = ""
                switch(this.crew[chosen.arrayKey].type){
                  case 0:
                    crewType = "STEEL"
                    break;
                  case 1:
                    crewType ="SALT"
                    break;
                  case 2:
                    crewType = "SMOKE"
                    break;
                }
                this.crewOptions[1].name.text = this.crew[chosen.arrayKey].name+"\nTYPE: "+crewType

                  //show power boosts
                  this.crewOptions[1].powerText.clearColors()
                  this.crewOptions[1].powerText.addColor("#FFF", 0)                
                  if(parseInt(this.crew[chosen.arrayKey].origPower) > parseInt(this.crew[chosen.arrayKey].powerText.text)){
                    
                    this.crewOptions[1].powerText.addColor("#BA363B", 0)
                  }
                  if(parseInt(this.crew[chosen.arrayKey].origPower) < parseInt(this.crew[chosen.arrayKey].powerText.text)){
                    this.crewOptions[1].powerText.addColor("#30B64A", 0)
                  }                 
    
                var fadeInDelay = 100
    
                var tweenA = this.add.tween(this.treasureOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenB = this.add.tween(this.crewOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenC = this.add.tween(this.crewOptions[1].deployText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenD = this.add.tween(this.crewOptions[1].powerText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenE = this.add.tween(this.crewOptions[1].ability).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                tweenE.onComplete.addOnce(function(){
                  this.updatetoolTip(this.crewOptions[1].ability)
                }, this);                  
                var tweenF = this.add.tween(this.crewOptions[1].name).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenG = this.add.tween(this.popupTail).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
    
                //tweenA.start(); 
                tweenB.start(); 
                tweenC.start(); 
                tweenD.start();                
                tweenE.start(); 
                tweenF.start(); 
                //tweenG.start();            
    
                
                
                this.crewOptions[1].loadTexture('bigCrew-'+chosen.id)
    
    
                for(var i = 1; i < this.crew.length; i++){
                  
                  if(!this.getTileDetails){
                    this.crewSelect[i].alpha = 0; 
                    this.crewDeployed[i].alpha = 1

                    this.crew[i].wiggle = false;
    
                    this.crew[i].speechTimer = 0;
                    this.crew[i].speechBubble.alpha = 0;
                    this.crew[i].speechBubbleText.alpha = 0;
                    this.crew[i].isTalking = false;  
                  }
                    
                }          
                this.crew[chosen.arrayKey].isDeployed = false;
                
                this.crew[chosen.arrayKey].wiggle = true;

                this.crewSelect[chosen.arrayKey].alpha = 1 
                this.crewDeployed[chosen.arrayKey].alpha = 0;                  
                /*
                var ranX = Math.floor(Math.random() * 10)-5  
                var ranY = Math.floor(Math.random() * 10)-5  
                
                this.crew[chosen.arrayKey].x += ranX
                this.crew[chosen.arrayKey].y += ranY
                */
                
                var ranChoice = Math.floor(Math.random() * 6)
                switch(ranChoice){
                  case 0:
                    this.crewSpeak(chosen.arrayKey,"Please! No!", quickspeechTimerBase)  
                    break;
                  case 1:
                    this.crewSpeak(chosen.arrayKey,"Captain, I beg you!", quickspeechTimerBase)  
                    break;
                  case 2:
                    this.crewSpeak(chosen.arrayKey,"Reconsider! Please!", quickspeechTimerBase)  
                    break;
                  case 3:
                    this.crewSpeak(chosen.arrayKey,"Choose someone else!", quickspeechTimerBase)  
                    break;                
                  case 4:
                    this.crewSpeak(chosen.arrayKey,"But I can't swim!", quickspeechTimerBase)  
                    break;
                  case 5:
                    this.crewSpeak(chosen.arrayKey,"Noooooo!", quickspeechTimerBase)  
                    break;                                
                }
                
  
                    
              }          
            }
          }
          if(this.crewRemove[chosen.arrayKey].alpha == 1 && pointer.leftButton.isDown){  
            this.removeCrew(this.crewRemove[chosen.arrayKey])
          }           




          

          
        }
        , reroll: function () {
          if(this.reRoll_Button.alpha > 0){
            if(this.reRoll_Counter > 0){
              this.unShowInfo()
              this.reRoll_Counter--
              if(this.removeFromCrew){
                this.chatTimer = 0;
                this.removeFromCrew = false; 
                this.addToCrew = false;  
              }
              else if(this.addToCrew){
                var commonHolder = new Array();
                var uncommonHolder = new Array();
                var rareHolder = new Array();
    
                commonHolder = crewPool[0]
                uncommonHolder = crewPool[1]
                rareHolder = crewPool[2]
                for(var i=0; i< 3; i++){
                  this.crewOptions[i].statInc.alpha = 0;
    
                  var ranRarity = Math.floor(Math.random() * 10)+1
                  
                  //scale rarity based on wave
                  if(this.turnCountNum < 3 && ranRarity>= 4){
                    ranRarity = 1;
                  }
                  if(this.turnCountNum < 6 && ranRarity>= 8){
                    ranRarity = 4;
                  } 
                               
                  //zone affects rarity
                  
                  switch(this.zone){
                    case 1:
                      
                      var newRan = Math.floor(Math.random() * 10)+1
                      if(newRan >= 1 && newRan <=7){
                        ranRarity = 1
                      } 
                      else{
                        ranRarity = 4
                      }                     
                      break;
                    case 2:
                      var newRan = Math.floor(Math.random() * 10)+1
                      if(newRan >= 1 && newRan <=3){
                        ranRarity = 1
                      } 
                      else if(newRan >= 4 && newRan <=9){
                        ranRarity = 4
                      } 
                      else{
                        ranRarity = 8
                      }                       
                      break;
                    case 3:
                      var newRan = Math.floor(Math.random() * 10)+1
                      if(newRan >= 1 && newRan <=7){
                        ranRarity = 4
                      } 
                      else{
                        ranRarity = 8
                      }                        
                      break;                                              
                  }
                  

                  //common
                  if(ranRarity>=1 && ranRarity<4){
                    var ran = Math.floor(Math.random() * commonHolder.length)
                    this.crewOptions[i].value = commonHolder[ran]
                    commonHolder.splice(ran,1)
                    this.crewOptions[i].rarity = 1;
                  }
                  //uncommon
                  if(ranRarity >= 4 && ranRarity <8){
                    var ran = Math.floor(Math.random() * uncommonHolder.length)
                    this.crewOptions[i].value = uncommonHolder[ran]
                    uncommonHolder.splice(ran,1)
                    this.crewOptions[i].rarity = 2;
                  }
                  //rare
                  else if(ranRarity >= 8){
                    var ran = Math.floor(Math.random() * rareHolder.length)
                    this.crewOptions[i].value = rareHolder[ran]
                    rareHolder.splice(ran,1)
                    this.crewOptions[i].rarity = 3;
                  }                    
                }
                updatePool()
              }
              else{
                for (var ii = 0; ii < 3; ii++){
                  this.treasureOptions[ii].rarity = Math.floor(Math.random() * 3)+1;
                  var rand = Math.floor(Math.random() * 5)
                  if(rand == 0){
                    this.treasureOptions[ii].rarity = 2
                  }
                  else{
                    this.treasureOptions[ii].rarity = 1
                  }                
      
                  if(this.chestCount % uncommonChestBreak == 0){
                    var rand = Math.floor(Math.random() * 5)
                    if(rand == 0){
                      this.treasureOptions[ii].rarity = 3
                    }
                    else if(rand >= 1 && rand < 4){
                      this.treasureOptions[ii].rarity = 2
                    }
                    else{
                      this.treasureOptions[ii].rarity = 1
                    }
                    //this.treasureOptions[i].rarity = Math.floor(Math.random() * 2)+2;
                  }
                  
                  if(this.chestCount % rarenChestBreak == 0){
                    var rand = Math.floor(Math.random() * 5)
                    if(rand == 0){
                      this.treasureOptions[ii].rarity = 2
                    }
                    else{
                      this.treasureOptions[ii].rarity = 3
                    }
                  }
      
                  this.treasureOptions[ii].treasureItemVal = Math.floor(Math.random() * 9)+1;
                  this.treasureOptions[ii].curseVal = Math.floor(Math.random() * 9)+1;
      
                  //scale down monster types based on rarity
                  if(this.treasureOptions[ii].rarity == 1){
                    if(this.treasureOptions[ii].curseVal == 2 || this.treasureOptions[ii].curseVal == 5 || this.treasureOptions[ii].curseVal == 8){
                      this.treasureOptions[ii].curseVal--;
                    }
      
                    if(this.treasureOptions[ii].curseVal == 3 || this.treasureOptions[ii].curseVal == 6 || this.treasureOptions[ii].curseVal == 9){
                      this.treasureOptions[ii].curseVal-=2;
                    }                  
                                  
                  }
      
                  if(this.treasureOptions[ii].rarity == 2){
      
                    if(this.treasureOptions[ii].curseVal == 3 || this.treasureOptions[ii].curseVal == 6 || this.treasureOptions[ii].curseVal == 9){
                      this.treasureOptions[ii].curseVal-=2;
                    }                  
                                  
                  }          
                
                  if(this.treasureOptions[ii].rarity == 1){
                    this.treasureOptions[ii].boonVal = Math.floor(Math.random() * 5);    
                  }
                  else if(this.treasureOptions[ii].rarity == 2){
                    this.treasureOptions[ii].boonVal = Math.floor(Math.random() * 5)+7;    
                  }
                  else{
                    this.treasureOptions[ii].boonVal = Math.floor(Math.random() * 7)+14;    
                  }      
                  if (parseInt(localStorage.getItem("intro")) <= 11) {
                    if(this.treasureOptions[ii].boonVal == 3){
                      //this.treasureOptions[ii].boonVal = 2;
                    }
                  }         
                }      
              }               
          
            }
          }

        
        }
        , infoOrattackRange: function (tile){
          //console.log(tile.id)
          
          this.targetTileID = tile.id;
          console.log(this.cursorSelect.alpha )
          if(this.cursorSelect.alpha <= 0 && (tile.isEnemyHere &&  tile.monID != 0 || tile.isCrewHere) ){

            console.log("show tile info")      
            this.delayShowInfo(tile)
          }
          else{
            this.showAttackRange(tile)
          }
          
        }
        , delayShowInfo: function (crewItem) {
          try{
            this.delayShowInfoTimer.destroy();    
          }
          catch(e){
            
          }
          var tokensRemaining =  this.chestOpened+this.soulsSaved+this.chestTriggers+this.soulTriggers
          if(!this.nextZone && tokensRemaining == 0){  
            // && this.cursorSelect.alpha <= 0          
            if(!this.addToCrew  && this.phaseCounter == 1 && this.capUltHero.y >= this.game.height  && this.turnMarker.y > this.game.height){
  
              if(crewItem == undefined){
                this.delayShowInfoTimer = this.game.time.create(true);
                this.delayShowInfoTimer.add(popUpDetailTimer, function(){
                  this.showInfo()
                }
                  , this);
                this.delayShowInfoTimer.start();
              }
              else if(crewItem.arrayKey == undefined){
                if(crewItem.isCrewHere){
                  for(var z = 1; z < this.crew.length; z++){
                    if(this.crew[z].id == crewItem.crewID){
                      this.selectedCrew = this.crew[z].arrayKey
                    }
                  }            
                
                  this.noPickUp = true;

                }          
                else if(crewItem.isEnemyHere){
                  this.selectedCrew = 100+crewItem.monID;
                  if(crewItem.submerged){
                    this.selectedCrew = 200;
                  }
                }

                this.delayShowInfoTimer = this.game.time.create(true);
                this.delayShowInfoTimer.add(popUpDetailTimer, function(){
                  this.showInfo(crewItem)
                }
                  , this);
                this.delayShowInfoTimer.start();            
              }
              else{
                if(this.cursorSelect.alpha <= 0){
                  for(var i = 1; i < this.crew.length; i++){
                    this.crewSelect[i].alpha = 0; 
                    this.crew[i].speechTimer = 0;
                    this.crew[i].speechBubble.alpha = 0;
                    this.crew[i].speechBubbleText.alpha = 0;
                    this.crew[i].isTalking = false;                
                  }            
                  
                  
                  this.selectedCrew = crewItem.arrayKey
                  this.crewSelect[crewItem.arrayKey].alpha = 1
                }

                
                if(this.removeFromCrew){
                  this.showInfo(crewItem)
                }
                else{
                  this.delayShowInfoTimer = this.game.time.create(true);
                  this.delayShowInfoTimer.add(popUpDetailTimer, function(){
                    this.showInfo(crewItem)
                    
                  }
                    , this);
                  this.delayShowInfoTimer.start();
                }
              }    
              if(this.overlay.x == 0){
                try{
                  this.delayShowInfoTimer.destroy();    
                }
                catch(e){
                  
                }
              }                        
            }
          }



        }
        , showInfo: function (crewItem) {
          
          //show Captain info
          if(crewItem == undefined){
            // show info on hover
            var tokensRemaining =  this.chestOpened+this.soulsSaved+this.chestTriggers+this.soulTriggers
            if(tokensRemaining <= 0){            
              if(!this.addToCrew && !this.removeFromCrew  && !this.bossDead && this.cursorSelect.alpha <= 0 && this.phaseCounter == 1 && this.capUltHero.y >= this.game.height){

              
                for(var i = 1; i < this.crew.length; i++){
                  this.crewSelect[i].alpha = 0; 
                  this.crew[i].speechTimer = 0;
                  this.crew[i].speechBubble.alpha = 0;
                  this.crew[i].speechBubbleText.alpha = 0;
                  this.crew[i].isTalking = false;                
                }  
                
                this.getTileDetails = true;
                this.getCapDetails = true;
                this.chatTimer = 1;
    
                this.crewOptions[1].loadTexture("bigCap-"+this.capKey)
                this.crewOptions[1].deployText.text = captain[this.capKey].cap_ultCost
                this.crewOptions[1].powerText.text = ""
                this.crewOptions[1].ability.text = "HEALTH: "+this.cap_healthValue+"      SAVVY :"+this.deploy_poolCurrent+"/"+this.deploy_poolMax+"\nABILITY:\n"+captain[this.capKey].ult_text
                this.crewOptions[1].name.text = captain[this.capKey].cap_name
                
                this.treasureOptions[1].loadTexture("capDetail")

                this.crewOptions[1].alpha = 0;
                this.crewOptions[1].deployText.alpha = 0
                this.crewOptions[1].powerText.alpha = 0
                this.crewOptions[1].ability.alpha = 0
                this.crewOptions[1].name.alpha = 0; 
                this.treasureOptions[1].alpha = 0  
                this.popupTail.alpha = 0;
  
                var fadeInDelay = 200
  
                var tweenA = this.add.tween(this.treasureOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenB = this.add.tween(this.crewOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                //var tweenC = this.add.tween(this.crewOptions[1].deployText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenD = this.add.tween(this.crewOptions[1].powerText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenE = this.add.tween(this.crewOptions[1].ability).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                tweenE.onComplete.addOnce(function(){
                  this.updatetoolTip(this.crewOptions[1].ability)
                }, this);                  
                var tweenF = this.add.tween(this.crewOptions[1].name).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenG = this.add.tween(this.popupTail).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
  
                //tweenA.start(); 
                tweenB.start(); 
                //tweenC.start(); 
                tweenD.start();                
                tweenE.start(); 
                tweenF.start(); 
                //tweenG.start();                
    
                this.treasureOptions[1].x = 400//this.ult_Button.x
                this.treasureOptions[1].y = 200//this.ult_Button.y
                //this.popupTail.alpha = 1;
                
                this.popupTail.x = this.ult_Button.x
                this.popupTail.y = this.ult_Button.y
                this.popupTail.loadTexture("popUpTail_cap")
    
                this.popupTail.angle = 0
                this.popupTail.y = this.ult_Button.y-100
    
    
                this.treasureOptions[1].y = this.ult_Button.y-this.treasureOptions[1].height/2-25
                var tweenH = this.add.tween(this.treasureOptions[1]).to( { y: this.ult_Button.y-this.treasureOptions[1].height/2-50 }, fadeInDelay, Phaser.Easing.Default);
                tweenH.start();                  
    
              
    
                for(var i = 1; i < this.crew.length; i++){
                  //this.crewSelect[i].alpha = 0;     
                  //this.crewDeployed[i].alpha = 1; 
                }             
              }            
            }  
          }
          else if(crewItem.arrayKey == undefined){ 
            
            if(crewItem.isEnemyHere && !crewItem.isCrewHere){
              if(crewItem.newLabel.alpha == 1){
                localStorage.setItem("firstTimeSeen-"+crewItem.monID,0)
                crewItem.newLabel.alpha = 0;
              }


              this.getTileDetails = true;
              this.chatTimer = 1;

              var pointer = this.game.input.mousePointer
              this.treasureOptions[1].x = pointer.x
              this.treasureOptions[1].y = pointer.y

              this.popupTail.alpha = 1;
              this.popupTail.loadTexture("popUpTail_mon")
              this.popupTail.x = pointer.x
              this.popupTail.y = pointer.y

              this.crewOptions[1].alpha = 0;
              this.crewOptions[1].deployText.alpha = 0
              this.crewOptions[1].powerText.alpha = 0
              this.crewOptions[1].ability.alpha = 0
              this.crewOptions[1].name.alpha = 0; 
              this.treasureOptions[1].alpha = 0  
              this.popupTail.alpha = 0;

              var fadeInDelay = 200

              var tweenA = this.add.tween(this.treasureOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
              var tweenB = this.add.tween(this.crewOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
              var tweenC = this.add.tween(this.crewOptions[1].deployText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
              var tweenD = this.add.tween(this.crewOptions[1].powerText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
              var tweenE = this.add.tween(this.crewOptions[1].ability).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                tweenE.onComplete.addOnce(function(){
                  this.updatetoolTip(this.crewOptions[1].ability)
                }, this);                
              var tweenF = this.add.tween(this.crewOptions[1].name).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);

            
              
              var tweenG = this.add.tween(this.popupTail).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);

              //tweenA.start(); 
              tweenB.start(); 
              tweenC.start(); 
              tweenD.start();                
              tweenE.start(); 
              tweenF.start(); 
              //tweenG.start();
                          


              this.popupTail.x = crewItem.x
              
              this.popupTail.y = crewItem.y

              this.popupTail.angle = 0
              this.popupTail.y = crewItem.y-100


        
              var pointer = this.game.input.mousePointer
              this.treasureOptions[1].x = pointer.x
              
              var targetY = pointer.y
              if(targetY+25 <= this.treasureOptions[1].height/2){
                targetY = this.treasureOptions[1].height/2+25
              }     
              this.treasureOptions[1].y = targetY+25           
              var tweenH = this.add.tween(this.treasureOptions[1]).to( { y: targetY }, fadeInDelay, Phaser.Easing.Default);
              tweenH.onComplete.addOnce(function(){
                if(!crewItem.isCrewHere){
                  this.showstatsHistory(crewItem)
                }
                  
              }, this);               
              tweenH.start();                  


              if(pointer.x <= this.game.width/2){
                this.treasureOptions[1].x = crewItem.x-this.treasureOptions[1].width/2-25
                this.popupTail.angle = -90
                this.popupTail.x = pointer.x-75
              }              
              if(pointer.x > this.game.width/2){
                this.treasureOptions[1].x = crewItem.x+this.treasureOptions[1].width/2+25
                this.popupTail.angle = 90
                this.popupTail.x = pointer.x+75                
              }                   
                         
              
              
              var canPeek = false;
              for(var i = 1; i < this.crew.length; i++){
                if(this.crew[i].id == 52){
                  canPeek = true
                }
                //this.crewSelect[i].alpha = 0;     
                //this.crewDeployed[i].alpha = 1; 
              }               
              if(crewItem.submerged && !canPeek){
                this.crewOptions[1].loadTexture("bigMon-1")
                this.crewOptions[1].deployText.text = "?"
                this.crewOptions[1].powerText.text = "?"
                this.crewOptions[1].ability.text = "THIS ENEMY IS SUBMERGED"
                this.crewOptions[1].name.text = "LURKING SHADOW\n"
                this.crewOptions[1].powerText.addColor("#FFF", 0)
                this.treasureOptions[1].loadTexture("monDetail")


                for(var i = 1; i < this.crew.length; i++){
                  //this.crewSelect[i].alpha = 0;     
                  //this.crewDeployed[i].alpha = 1; 
                }  
              }
              else{
                
                if(crewItem.monID == 10){
                  this.crewOptions[1].loadTexture("bigMon-"+crewItem.monID+"-"+this.capKey)
                }
                else{
                  this.crewOptions[1].loadTexture("bigMon-"+crewItem.monID)
                }

                this.crewOptions[1].deployText.text = crewItem.healthText.text
                this.crewOptions[1].powerText.text = crewItem.powerText.text
               
                
                var debuffs = ""
                var ability = monster[crewItem.monID].ability
                //shadow has special ability
                if(crewItem.monID == 10){
                  ability = monster[crewItem.monID].ability[this.capKey]
                }
                if(crewItem.exhausted){
                  debuffs += " EXHAUSTED "
                  this.crewOptions[1].ability.text += ability+""
                }
                if(crewItem.smoke.on){
                  debuffs += " SMOKING "
                }  
                if(crewItem.powerText.text > crewItem.origPower){
                  debuffs += " FURY x"+(crewItem.powerText.text -crewItem.origPower)+" "
                }
                if(crewItem.alpha != 1){
                  debuffs += " INTANGIBLE "
                }                
                                                

                if(debuffs.length > 0){
                  this.crewOptions[1].ability.text = debuffs+" \n "+ability+""
                }
                else{
                  this.crewOptions[1].ability.text = ability+""
                }
                this.crewOptions[1].name.text = crewItem.name+"\n"
                
                //show power boosts
                this.crewOptions[1].powerText.clearColors()
                this.crewOptions[1].powerText.addColor("#FFF", 0)                
                if(parseInt(crewItem.origPower) > parseInt(crewItem.powerText.text)){
                  
                  this.crewOptions[1].powerText.addColor("#BA363B", 0)
                }
                if(parseInt(crewItem.origPower) < parseInt(crewItem.powerText.text)){
                  this.crewOptions[1].powerText.addColor("#30B64A", 0)
                }                   

                if(canPeek && (crewItem.monID+1) < 100){
                  //this.crewOptions[1].loadTexture(("bigMon-"+crewItem.monID))   
                  if(crewItem.monID == 10){
                    this.crewOptions[1].loadTexture("bigMon-"+crewItem.monID+"-"+this.capKey)
                  }
                  else{
                    this.crewOptions[1].loadTexture("bigMon-"+crewItem.monID)
                  }                           
                }                

                this.treasureOptions[1].loadTexture("monDetail")
              

 
              }              
            }
            else{
                // show crew info on board on hover
                this.getTileDetails = true;
                this.getCapDetails = false;
                
                this.chatTimer = 1;
                var crewType = ""
                var chosen = crewItem
                for(var z = 1; z < this.crew.length; z++){
                  if(this.crew[z].id == crewItem.crewID){
                    chosen = this.crew[z]
                  }
                }                     
                
                switch(chosen.type){
                  case 0:
                    crewType = "STEEL"
                    break;
                  case 1:
                    crewType ="SALT"
                    break;
                  case 2:
                    crewType = "SMOKE"
                    break;
                }
                //this.crewOptions[1].name.text = this.crew[crewItem.arrayKey].name+"\nTYPE: "+crewType                   
                
                this.crewOptions[1].loadTexture('bigCrew-'+chosen.id)
                this.crewOptions[1].deployText.text = chosen.deployText.text
                this.crewOptions[1].powerText.text = chosen.powerText.text

                //show power boosts
                this.crewOptions[1].powerText.clearColors()
                this.crewOptions[1].powerText.addColor("#FFF", 0)                
                if(parseInt(chosen.origPower) > parseInt(chosen.powerText.text)){
                  
                  this.crewOptions[1].powerText.addColor("#BA363B", 0)
                }
                if(parseInt(chosen.origPower) < parseInt(chosen.powerText.text)){
                  this.crewOptions[1].powerText.addColor("#30B64A", 0)
                }                   

                if(chosen.curseVal> 0){
                  this.crewOptions[1].ability.text = "AFFLICTED x"+chosen.curseVal+" \n "
                  this.crewOptions[1].ability.text += crew[chosen.id].ability+""
                }                
                else{
                  this.crewOptions[1].ability.text = crew[chosen.id].ability+""
                }              
                              
                
                this.crewOptions[1].name.text = crew[chosen.id].name+"\nTYPE: "+crewType 
              
                this.crewOptions[1].y = this.treasureOptions[1].y
                this.treasureOptions[1].x =crewItem.x
                this.treasureOptions[1].y = crewItem.y
  
  
                this.crewOptions[1].alpha = 0;
                this.crewOptions[1].deployText.alpha = 0
                this.crewOptions[1].powerText.alpha = 0
                this.crewOptions[1].ability.alpha = 0
                this.crewOptions[1].name.alpha = 0; 
                this.treasureOptions[1].alpha = 0  
                this.popupTail.alpha = 0;
  
                var fadeInDelay = 200
  
                var tweenA = this.add.tween(this.treasureOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenB = this.add.tween(this.crewOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenC = this.add.tween(this.crewOptions[1].deployText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenD = this.add.tween(this.crewOptions[1].powerText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenE = this.add.tween(this.crewOptions[1].ability).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                tweenE.onComplete.addOnce(function(){
                  this.updatetoolTip(this.crewOptions[1].ability)
                }, this);                  
                var tweenF = this.add.tween(this.crewOptions[1].name).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenG = this.add.tween(this.popupTail).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);

                  
  
                //tweenA.start(); 
                tweenB.start(); 
                tweenC.start(); 
                tweenD.start();                
                tweenE.start(); 
                tweenF.start(); 
                //tweenG.start();
                            
  
  
                this.popupTail.x = crewItem.x
                
                this.popupTail.y = crewItem.y
  
                this.popupTail.angle = 0
                this.popupTail.y = crewItem.y-100
  
  
          
                var pointer = this.game.input.mousePointer
                this.treasureOptions[1].x = pointer.x
                
                var targetY = pointer.y
                if(targetY+25 <= this.treasureOptions[1].height/2){
                  targetY = this.treasureOptions[1].height/2+25
                }     
                this.treasureOptions[1].y = targetY+25           
                var tweenH = this.add.tween(this.treasureOptions[1]).to( { y: targetY }, fadeInDelay, Phaser.Easing.Default);
                tweenH.onComplete.addOnce(function(){
                  if(!crewItem.isCrewHere){
                    this.showstatsHistory(crewItem)
                  }
                }, this);                  
                tweenH.start();                  


                if(pointer.x <= this.game.width/2){
                  this.treasureOptions[1].x = crewItem.x-this.treasureOptions[1].width/2-25
                  this.popupTail.angle = -90
                  this.popupTail.x = pointer.x-75
                }              
                if(pointer.x > this.game.width/2){
                  this.treasureOptions[1].x = crewItem.x+this.treasureOptions[1].width/2+25
                  this.popupTail.angle = 90
                  this.popupTail.x = pointer.x+75                
                }                   
                
                updatePool()
                var rarity = 1;
                try{
                  if(crewPool[0].includes(chosen.id)){
                    rarity = 1;
                  }  
                  if(crewPool[2].includes(chosen.id)){
                    rarity = 2;
                  }                            
                  if(crewPool[3].includes(chosen.id)){
                    rarity = 3;
                  } 
                }
                catch(e){
                  rarity = 1;
                }
                this.treasureOptions[1].loadTexture("treasure_rarity_"+rarity )
                this.popupTail.loadTexture("popUpTail_rarity_"+rarity )  

            }
          }
          else{
          
            if(this.removeFromCrew && crewItem.arrayKey < 5 && !crewItem.isBlank){
              this.unShowInfo();
              this.treasureOptions[1].y -= 50;
              this.crewOptions[1].deployText.text = crewItem.deployText.text
              this.crewOptions[1].powerText.text = crewItem.powerText.text
              this.crewOptions[1].ability.text = this.crew[crewItem.arrayKey].ability
              var crewType = ""
              switch(this.crew[crewItem.arrayKey].type){
                case 0:
                  crewType = "STEEL"
                  break;
                case 1:
                  crewType ="SALT"
                  break;
                case 2:
                  crewType = "SMOKE"
                  break;
              }
              this.crewOptions[1].name.text = this.crew[crewItem.arrayKey].name+"\nTYPE: "+crewType

                //show power boosts
                this.crewOptions[1].powerText.clearColors()
                this.crewOptions[1].powerText.addColor("#FFF", 0)                
                if(parseInt(this.crew[crewItem.arrayKey].origPower) > parseInt(this.crew[crewItem.arrayKey].powerText.text)){
                  
                  this.crewOptions[1].powerText.addColor("#BA363B", 0)
                }
                if(parseInt(this.crew[crewItem.arrayKey].origPower) < parseInt(this.crew[crewItem.arrayKey].powerText.text)){
                  this.crewOptions[1].powerText.addColor("#30B64A", 0)
                }                 
  
              var fadeInDelay = 100
  
              var tweenA = this.add.tween(this.treasureOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
              var tweenB = this.add.tween(this.crewOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
              var tweenC = this.add.tween(this.crewOptions[1].deployText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
              var tweenD = this.add.tween(this.crewOptions[1].powerText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
              var tweenE = this.add.tween(this.crewOptions[1].ability).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                tweenE.onComplete.addOnce(function(){
                  this.updatetoolTip(this.crewOptions[1].ability)
                }, this);                
              var tweenF = this.add.tween(this.crewOptions[1].name).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
              var tweenG = this.add.tween(this.popupTail).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
  
              //tweenA.start(); 
              tweenB.start(); 
              tweenC.start(); 
              tweenD.start();                
              tweenE.start(); 
              tweenF.start(); 
              //tweenG.start();            
  
              
              
              this.crewOptions[1].loadTexture('bigCrew-'+crewItem.id)
  
  
              for(var i = 1; i < this.crew.length; i++){
                
                if(!this.getTileDetails){
                  this.crewSelect[i].alpha = 0; 
                  this.crewDeployed[i].alpha = 1

                  this.crew[i].wiggle = false;
  
                  this.crew[i].speechTimer = 0;
                  this.crew[i].speechBubble.alpha = 0;
                  this.crew[i].speechBubbleText.alpha = 0;
                  this.crew[i].isTalking = false;  
                }
                  
              }          
              this.crew[crewItem.arrayKey].isDeployed = false;
              
              this.crew[crewItem.arrayKey].wiggle = true;

              this.crewSelect[crewItem.arrayKey].alpha = 1 
              this.crewDeployed[crewItem.arrayKey].alpha = 0;                  
              /*
              var ranX = Math.floor(Math.random() * 10)-5  
              var ranY = Math.floor(Math.random() * 10)-5  
              
              this.crew[crewItem.arrayKey].x += ranX
              this.crew[crewItem.arrayKey].y += ranY
              */
              
              var ranChoice = Math.floor(Math.random() * 6)
              switch(ranChoice){
                case 0:
                  this.crewSpeak(crewItem.arrayKey,"Please! No!", quickspeechTimerBase)  
                  break;
                case 1:
                  this.crewSpeak(crewItem.arrayKey,"Captain, I beg you!", quickspeechTimerBase)  
                  break;
                case 2:
                  this.crewSpeak(crewItem.arrayKey,"Reconsider! Please!", quickspeechTimerBase)  
                  break;
                case 3:
                  this.crewSpeak(crewItem.arrayKey,"Choose someone else!", quickspeechTimerBase)  
                  break;                
                case 4:
                  this.crewSpeak(crewItem.arrayKey,"But I can't swim!", quickspeechTimerBase)  
                  break;
                case 5:
                  this.crewSpeak(crewItem.arrayKey,"Noooooo!", quickspeechTimerBase)  
                  break;                                
              }
              
 
                  
            }
  
            if(this.addToCrew && crewItem.arrayKey != 5 && !crewItem.isBlank){
              this.unShowInfo()
              
              var blankCheck = false
              if(!crewItem.isBlank){
                for(var i = 1; i < this.crew.length; i++){
                  if(!this.getTileDetails){
                    this.crewSelect[i].alpha = 0; 
                  }
                  if( this.crew[i].isBlank){
                    blankCheck = true;
                  }
                }                     
                
              } 
  
              if(!blankCheck){
                //this.walkPlank();
                //this.showInfo(crewItem);
              }
  
              //this.crewSelect[this.crewOptionKey].alpha = 1             
            
            }          
  
            if(!crewItem.isBlank && !this.removeFromCrew && !this.addToCrew && !this.getTileDetails){
              if(this.noPickUp && this.deployReady){
                for(var i = 1; i < this.crew.length; i++){
                  this.crewSelect[i].alpha = 0; 
                }            
                
                this.selectedCrew = crewItem.arrayKey
                this.crewSelect[crewItem.arrayKey].alpha = 1
                //this.noPickUp = true;
              }
    
            }
  
            
            // show info on hover
            var tokensRemaining =  this.chestOpened+this.soulsSaved+this.chestTriggers+this.soulTriggers
            if(tokensRemaining <= 0){
              //&& this.cursorSelect.alpha <= 0
              if( !this.addToCrew && !this.removeFromCrew && !this.bossDead  && this.phaseCounter == 1 && this.capUltHero.y >= this.game.height){
  
  
                this.getTileDetails = true;
                this.getCapDetails = false;
                
                this.chatTimer = 1;
                var crewType = ""
                var chosen = crewItem
                switch(chosen.type){
                  case 0:
                    crewType = "STEEL"
                    break;
                  case 1:
                    crewType ="SALT"
                    break;
                  case 2:
                    crewType = "SMOKE"
                    break;
                }
                //this.crewOptions[1].name.text = this.crew[crewItem.arrayKey].name+"\nTYPE: "+crewType                   
                
                this.crewOptions[1].loadTexture('bigCrew-'+chosen.id)
                this.crewOptions[1].deployText.text = chosen.deployText.text
                this.crewOptions[1].powerText.text = chosen.powerText.text

                
                //show power boosts
                this.crewOptions[1].powerText.clearColors()
                this.crewOptions[1].powerText.addColor("#FFF", 0)
                if(parseInt(chosen.origPower) > parseInt(chosen.powerText.text)){
                  
                  this.crewOptions[1].powerText.addColor("#BA363B", 0)
                }
                if(parseInt(chosen.origPower) < parseInt(chosen.powerText.text)){
                  this.crewOptions[1].powerText.addColor("#30B64A", 0)
                }   

                if(chosen.curseVal> 0){
                  this.crewOptions[1].ability.text = "AFFLICTED x"+chosen.curseVal+" \n "
                  this.crewOptions[1].ability.text += crew[chosen.id].ability+""
                }                
                else{
                  this.crewOptions[1].ability.text = crew[chosen.id].ability+""
                }              
                              
                
                this.crewOptions[1].name.text = crew[chosen.id].name+"\nTYPE: "+crewType 
               
                this.crewOptions[1].y = this.treasureOptions[1].y
                this.treasureOptions[1].x =crewItem.x
                this.treasureOptions[1].y = crewItem.y

                //mobile placement
                //this.treasureOptions[1].x = 400
                //this.treasureOptions[1].y = this.game.height/2-200
         
  
  
                this.crewOptions[1].alpha = 0;
                this.crewOptions[1].deployText.alpha = 0
                this.crewOptions[1].powerText.alpha = 0
                this.crewOptions[1].ability.alpha = 0
                this.crewOptions[1].name.alpha = 0; 
                this.treasureOptions[1].alpha = 0  
                this.popupTail.alpha = 0;
  
                var fadeInDelay = 200
  
                var tweenA = this.add.tween(this.treasureOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenB = this.add.tween(this.crewOptions[1]).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenC = this.add.tween(this.crewOptions[1].deployText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenD = this.add.tween(this.crewOptions[1].powerText).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenE = this.add.tween(this.crewOptions[1].ability).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                tweenE.onComplete.addOnce(function(){
                  this.updatetoolTip(this.crewOptions[1].ability)
                }, this);                    
                var tweenF = this.add.tween(this.crewOptions[1].name).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
                var tweenG = this.add.tween(this.popupTail).to( { alpha: 1 }, fadeInDelay, Phaser.Easing.Default);
  
                //tweenA.start(); 
                tweenB.start(); 
                tweenC.start(); 
                tweenD.start();                
                tweenE.start(); 
                tweenF.start(); 
                //tweenG.start();
                             
  
  
                this.popupTail.x = crewItem.x
                
                this.popupTail.y = crewItem.y
  
                this.popupTail.angle = 0
                this.popupTail.y = crewItem.y-100
  
                this.treasureOptions[1].y = crewItem.y-this.treasureOptions[1].height/2-25
                var tweenH = this.add.tween(this.treasureOptions[1]).to( { y: crewItem.y-this.treasureOptions[1].height/2-50 }, fadeInDelay, Phaser.Easing.Default);
                tweenH.start();  
  
                if(crewItem.x <= this.treasureOptions[1].width/2){
                  this.treasureOptions[1].x = this.treasureOptions[1].width/2+25
                }   
                
                if(crewItem.x >= this.game.width - this.treasureOptions[1].width){
                  this.treasureOptions[1].x = this.game.width - this.treasureOptions[1].width/2 - 50;
                }    
                

                
                updatePool()
                var rarity = 1;
                try{
                  if(crewPool[0].includes(chosen.id)){
                    rarity = 1;
                  }  
                  if(crewPool[2].includes(chosen.id)){
                    rarity = 2;
                  }                            
                  if(crewPool[3].includes(chosen.id)){
                    rarity = 3;
                  } 
                }
                catch(e){
                  rarity = 1;
                }
                  
                this.treasureOptions[1].loadTexture("treasure_rarity_"+rarity )
                this.popupTail.loadTexture("popUpTail_rarity_"+rarity )
              }         
  
            }  
            
          }
    
          



          
        }  
        , unShowInfo: function () {

          this.tips.hideTooltip()  
          this.statsHistory.hideTooltip()   
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
                    content += "▪ "+keyword[k].description+"\n\n"
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
          
          
          this.tips.updatePosition(text.x+10, text.y+100)
          var holderText = this.tips.returnText()
          this.checkKeywords(holderText)
          
        }  
        , showstatsHistory: function(tile){
          
          this.statsHistory.hideTooltip()
          //var words = tile.statsHistory.split(" ");
          var content = ""
          if(tile.statsHistory.length > 0){
            this.statsHistory.showTooltip()
            content = "STATS HISTORY"+tile.statsHistory
          }
          
          
          this.statsHistory.updateContent(content)

          if(tile.x <= this.game.width/2){
            this.statsHistory.updatePosition((this.crewOptions[1].x+this.crewOptions[1].width)-25, this.crewOptions[1].y)
          }              
          if(tile.x > this.game.width/2){
            this.statsHistory.updatePosition(this.crewOptions[1].x-(this.statsHistory.returnWidth()*1)-50, this.crewOptions[1].y)         
          }   

          
          var holderText = this.statsHistory.returnText()
          this.checkKeywords(holderText)
        }             

        , setActionText: function (tile,text) {
          tile.actionText.alpha = 1;
          tile.actionText.text = text;
          
          tile.actionText.x = tile.x
          tile.actionText.y = tile.y
          
                      
          
        }    
        , healCaptain: function (value){
          this.cap_healthValue += value  
          this.cap_healthValueHolder = this.cap_healthValue
          this.cap_healthText2[0].text = "+"+value

          this.cap_healthText2[0].alpha = 1
          this.add.tween(this.cap_healthText2[0]).to( { alpha:0}, 2000, Phaser.Easing.Default, true);     

          this.cap_healthText2[0].y = this.cap_healthText.y-100
          this.add.tween(this.cap_healthText2[0]).from( { y:this.cap_healthText.y}, 2000, Phaser.Easing.Default, true);     
  
            //captain heal effects
            for(var z = 1; z < this.crew.length; z++){
              if(this.crew[z].id == 26){
                this.crew[z].origPower += 2
                this.crew[z].powerUpParticle.x = this.crew[z].powerText.x
                this.crew[z].powerUpParticle.y = this.crew[z].powerText.y
                this.crew[z].powerUpParticle.makeParticles('sparkle');
                this.crew[z].powerUpParticle.setScale(1, 1, 1, 1);                  
                this.crew[z].powerUpParticle.maxParticleSpeed.set(100,100);
                this.crew[z].powerUpParticle.explode(500);   
                var ranPhrase = Math.floor(Math.random() * 2)
                if(ranPhrase == 0){
                  //this.crewSpeak(z,"I'm getting pumped up!")
                }
                else{
                  //this.crewSpeak(z,"Let's Go!")
                }                  
              }
            }                 
        }   
        , damageCaptain: function (enemy) {

            if(parseInt(localStorage.getItem("intro")) == 10){
              var ranPhrase = Math.floor(Math.random() * 2)   
              if(ranPhrase == 0){
                this.crewSpeak(1,"Captain!", quickspeechTimerBase)
              }
              else{
                this.crewSpeak(1,"Oh No!", quickspeechTimerBase)
              }      

            }


            var ran = Math.floor(Math.random() * 10)+1;
            this.hurtSnd[ran].play();
            this.captainHurt = true;
            this.game.plugins.screenShake.shake(15); 

            
            var tile = this.tile[enemy.id]
            // creatures that attacked this turn are tired
            if(!tile.exhausted){
              tile.exhausted = true;

              
            }    
         

        
            
           
            if(typeof enemy === 'object' && enemy !== null){

              if(enemy.monID == 0){
                enemy = this.tile[this.bossID]
              }
              
              //damage from monsters reset combo

              if(enemy.crewID == 62){
                this.cap_healthValue -= 5//parseInt(enemy.power);  
                for(var i = 0; i< this.cap_healthText2.length; i++){
                  if(this.cap_healthText2[i].alpha == 0 ){
                    
                    this.cap_healthText2[i].alpha = 1
                    this.add.tween(this.cap_healthText2[i]).to( { alpha:0}, 2000, Phaser.Easing.Default, true);      

                    this.cap_healthText2[i].y = this.cap_healthText.y-100
                    this.add.tween(this.cap_healthText2[i]).from( { y:this.cap_healthText.y}, 2000, Phaser.Easing.Default, true);                        

                    
                    this.cap_healthText2[i].text = "-"+5
                                  
                    i = this.cap_healthText2.length;
                  }
                }                
              }
              else{
                this.cap_healthValue -= parseInt(enemy.power);  
                for(var i = 0; i< this.cap_healthText2.length; i++){
                  if(this.cap_healthText2[i].alpha == 0 ){
                    this.cap_healthText2[i].alpha = 1
                    this.add.tween(this.cap_healthText2[i]).to( { alpha:0}, 2000, Phaser.Easing.Default, true);     

                    this.cap_healthText2[i].y = this.cap_healthText.y-100
                    this.add.tween(this.cap_healthText2[i]).from( { y:this.cap_healthText.y}, 2000, Phaser.Easing.Default, true);                        

                    this.cap_healthText2[i].text = "-"+enemy.power
             
                    i = this.cap_healthText2.length;
                  }
                }   
              }


              this.hurtTimer = 10;
              //can't die during tutorial
              if (parseInt(localStorage.getItem("intro")) <= 12 && this.cap_healthValue <= 0) {
                this.cap_healthValue= 1;
                this.crewSpeak(1, "We won't let the Captain die during the tutorial!", quickspeechTimerBase) 
                
              } 
              
              if(this.cap_healthValue <= 0 && !this.transTar.includes("lose")){
                this.bgSound.stop();
                if(this.transWaveKey != 1){
                  localStorage.setItem('defeatedBy',(enemy.monID-1))
                }
                
                this.transWaveKey = 1
                this.changeWave();
                this.transTar = 'lose'                          
                //this.game.state.start('lose');
              }  
            }
            else{
              this.cap_healthValue -= parseInt(enemy);  
              for(var i = 0; i< this.cap_healthText2.length; i++){
                if(this.cap_healthText2[i].alpha == 0 ){
                  this.cap_healthText2[i].alpha = 1
                  this.cap_healthText2[i].text = "-"+enemy
                  this.cap_healthText2[i].y = this.cap_healthText.y               
                  i = this.cap_healthText2.length;
                }
              }               

              this.hurtTimer = 10;

              if(this.cap_healthValue <= 0){
                this.bgSound.stop();
                if(this.transWaveKey != 1){
                  localStorage.setItem('defeatedBy',"KARMA")
                }
                
                this.transWaveKey = 1
                this.changeWave();
                this.transTar = 'lose'                          
                //this.game.state.start('lose');
              }  
            }
            //captain hurt effects
            for(var z = 1; z < this.crew.length; z++){
              if(this.crew[z].id == 25){
                this.crew[z].origPower += 1

                this.crew[z].powerUpParticle.x = this.crew[z].powerText.x
                this.crew[z].powerUpParticle.y = this.crew[z].powerText.y
                this.crew[z].powerUpParticle.makeParticles('sparkle');
                this.crew[z].powerUpParticle.setScale(1, 1, 1, 1);                  
                this.crew[z].powerUpParticle.maxParticleSpeed.set(100,100);
                this.crew[z].powerUpParticle.explode(500);   
                var ranPhrase = Math.floor(Math.random() * 2)
                if(ranPhrase == 0){
                  this.crewSpeak(z,"Captain! No!", quickspeechTimerBase)

                }
                else{
                  this.crewSpeak(z,"Defend the Captain!", quickspeechTimerBase)

                }     
                          
                
              }
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == 25){
                    this.spawnBuff(this.tile[''+j+i],'buff_attack');
                    
                    //this.tile[''+j+i].power += 1 
                                                     
                    
                  }
                }
              }               


            }
                         
            


                        
         
          
        }
        , showHero: function(animTime, waitTime,bufferTimer){
          

          if(animTime == undefined){
            
          } 
          if(waitTime == undefined){
            
          }           
          if(bufferTimer == undefined){
            bufferTimer = 0;
          }    
          this.capUltText.x = 0;
          this.capUltHero.x = 0;

          this.endPhaseMarker = this.game.time.create(true);
          this.endPhaseMarker.add(bufferTimer, function(){

            this.capUltOverlay.y = 0
            //ease up

            this.add.tween(this.focusTopDiag).to({ y:0}, animTime, Phaser.Easing.Quartic.InOut, true);  
            this.add.tween(this.focusBotDiag).to( { y:0 }, animTime, Phaser.Easing.Quartic.InOut, true);
            this.add.tween(this.capUltText).to( { y:0 }, animTime, Phaser.Easing.Quartic.InOut, true); 
            var tweenA =  this.add.tween(this.capUltHero).to( { y:0 }, animTime, Phaser.Easing.Quartic.InOut, true); 
            tweenA.onComplete.addOnce(function(){
              if(!this.capVOSnd[this.capKey].isPlaying && this.captainPowerActivated){
                this.capVOSnd[this.capKey].play()
              } 
            }, this);     
            tweenA.start();          

           
            
            

            //this.add.tween(this.focusBotDiag).to( { y:0 }, animTime, Phaser.Easing.Quartic.InOut, true);   
            
            //ease out
            this.timer = this.game.time.create(true);
            this.timer.add(waitTime, function(){

            this.add.tween(this.focusTopDiag).to({ y:this.focusTopDiag.origY}, animTime, Phaser.Easing.Quartic.InOut, true);  
            this.add.tween(this.focusBotDiag).to( { y:this.focusBotDiag.origY }, animTime, Phaser.Easing.Quartic.InOut, true);     
            this.add.tween(this.capUltText).to( { y: this.capUltText.origY}, animTime, Phaser.Easing.Quartic.InOut, true);      
            var tweenB =  this.add.tween(this.capUltHero).to( { y:this.capUltHero.origY}, animTime, Phaser.Easing.Quartic.InOut, true);     
            tweenB.onComplete.addOnce(function(){
              this.capUltOverlay.y = this.game.height+100;     
              //trigger hero ability
              if(this.captainPowerActivated){
                this.captainUltTrigger();   
              }               
              
            }, this);    
            tweenB.start();            

              
            },this);
            this.timer.start();             
            
            // subtle X movement
            this.add.tween(this.capUltText).to( { x: 25}, (animTime+waitTime+bufferTimer), Phaser.Easing.Default, true); 
            this.add.tween(this.capUltHero).to( { x: -25}, (animTime+waitTime+bufferTimer), Phaser.Easing.Default, true); 
            

          },this);
          this.endPhaseMarker.start();   
            
        }
        , showMarker: function(animTime, waitTime,bufferTimer){
          try{
            this.delayShowInfoTimer.destroy();    
          }
          catch(e){
            
          }
          if(bufferTimer == undefined){
            bufferTimer = 0;
          }    
          //waitTime = waitTime + bufferTimer  
          this.endPhaseMarker = this.game.time.create(true);
          this.endPhaseMarker.add(bufferTimer, function(){
            this.turnMarkerText.x = this.turnMarker.x-100
            //ease up
            this.turnMarker.y = this.game.height/2
            this.add.tween(this.turnMarker).from( { y: this.game.height+this.game.height/2 }, animTime, Phaser.Easing.Quartic.InOut, true);   
            
            //ease out
            this.timer = this.game.time.create(true);
            this.timer.add(waitTime, function(){
              this.turnMarker.y = this.game.height+this.game.height/2   
              this.checkExhaustedCount(); 
              this.checkIncomingDamage();
              this.add.tween(this.turnMarker).from( { y: this.game.height/2}, animTime, Phaser.Easing.Quartic.InOut, true);     
              


            },this);
            this.timer.start();             
            
            this.turnMarkerText.x = this.turnMarker.x+100
            this.add.tween(this.turnMarkerText).from( { x: this.turnMarker.x-100}, 5000, Phaser.Easing.Default, true);            
          },this);
          this.endPhaseMarker.start();   
  
                   
        }
        ,mobileSelectCap: function (tile, pointer){
                      
            
          if(this.capBadge_outline.alpha == 1){
            this.hideOutline3()
            this.captainUlt(tile, pointer)
          }
          else{
            this.showOutline3()
          }
          
        }        
        ,mobileSelect: function (item){
          
          if(item.y < (item.origtargetY-10)){
            this.selectTreasure(item)
            console.log("Works")
          }
          else{
            this.highLightAffect(item)
          }
         
        }
        ,highLightAffect: function (item){
          
          
          //item.targetY = item.origtargetY-50;
           
          if(this.addToCrew ){
            for(var i = 0; i < 3; i++){
              if(item.id != i){
                this.returnOrig(this.treasureOptions[i])
              }
              
              
            }            
            this.updatetoolTip(this.crewOptions[item.id].ability)


            this.tips.updatePosition(this.crewOptions[item.id].x, this.crewOptions[item.id].ability.y+50)
    
            for(var i = 1; i < this.crew.length; i++){
              this.crewSelect[i].alpha = 0;    
              if(this.crewOptions[item.id].value == this.crew[i].id && crew[this.crew[i].id].upgradable){
                this.crewSelect[i].alpha = 1;    
              }
            }
            
          
          }
          else{
            for(var i = 0; i < 3; i++){
              if(item.id != i){
                this.returnOrig(this.treasureOptions[i])
              }
              
              
            }
              
            this.updatetoolTip(this.treasureOptions[item.id].boon)

          }

          if((!this.addToCrew && !this.getTileDetails) || (this.removeFromCrew && (item.id > 0))){
            //bomb highlights
            var treasure = this.treasureOptions[item.id]
            var calBoon = parseInt(''+this.treasureOptions[item.id].rarity+this.treasureOptions[item.id].boonVal)
            if(treasure.value == 200 || treasure.value == 201){
              calBoon = treasure.value
            }          
            
            /*
            switch(calBoon){
              case 10:                
                break;
              case 11:                  
                break;
              case 12:
                this.crewSelect[6].alpha = 1;     
                this.crewDeployed[6].alpha = 0;                   
                break;
              case 13:
                this.crewSelect[5].alpha = 1;     
                this.crewDeployed[5].alpha = 0;

                break;
              case 14:
                break;
              case 15:                           
                break;
              case 16:                      
                break; 
              case 27:                  
                break;
              case 28:               
                break;
              case 29:
                this.crewSelect[6].alpha = 1;     
                this.crewDeployed[6].alpha = 0;                    
                break;
              case 210:
                this.crewSelect[5].alpha = 1;     
                this.crewDeployed[5].alpha = 0;               
                break;
              case 211:
                this.reRoll_Counter+=2
                break;
              case 212:                          
                break;
              case 213:                     
                break;   
              case 314:
                for(var j=1; j < this.crew.length; j++){
                  if(this.crew[j].type == 0){
                    this.crewSelect[j].alpha = 1;     
                    this.crewDeployed[j].alpha = 0;                          
                  }
                }                     
                break;
              case 315:
                for(var j=1; j < this.crew.length; j++){
                  if(this.crew[j].type == 2){
                    this.crewSelect[j].alpha = 1;     
                    this.crewDeployed[j].alpha = 0;                          
                  }
                }                   
                break;
              case 316:
                for(var j=1; j < this.crew.length; j++){
                  if(this.crew[j].type == 1){
                    this.crewSelect[j].alpha = 1;     
                    this.crewDeployed[j].alpha = 0;                         
                  }
                }                    
                break;
              case 317:
                this.crewSelect[5].alpha = 1;     
                this.crewDeployed[5].alpha = 0;      
                this.crewSelect[6].alpha = 1;     
                this.crewDeployed[6].alpha = 0;                                    
                break;
              case 318:
                break;
              case 319:                         
                break;
              case 320:                      
                break;                                       
              case 200:
                break;      
              case 201:
                break;
            }       
            */
            for(var i = 1; i < this.crew.length; i++){
              if(this.crew[i].type == 0){
                if(!this.crew[i].isBlank){
                  this.crewSelect[i].alpha = 0;   
                  this.crew[i].curseIncr.alpha = 0;    
                  this.crewDeployed[i].alpha = 1; 
                  if(this.crew[i].curseVal > 0){
                    this.crewDeployed[i].loadTexture("crewDeployed_curse")
                  }
                  else{
                    this.crewDeployed[i].loadTexture("crewDeployed")
                  }                  
                }
              }
            }  

            for(var j=1; j < this.crew.length; j++){
              if(!this.removeCrew){
                this.crewDeployed[j].alpha = 1;
                if(j == 5 || j == 6){
                  this.crewDeployed[j].alpha = 1;
                } 
              }

            }             

            if((!this.addToCrew && !this.getTileDetails && !this.removeFromCrew )){
              for(var j=1; j < this.crew.length; j++){
                this.crew[j].curseIncr.alpha = 0;
              } 
              
              //curse targets
              if(treasure.selectedCrew1 < 10){
                
 

                this.crewSelect[treasure.selectedCrew1].loadTexture("crewSelectCurse")
                this.crewSelect[treasure.selectedCrew1].alpha = 1;
                this.crewDeployed[treasure.selectedCrew1].alpha = 0; 
                this.crew[treasure.selectedCrew1].curseIncr.alpha = 1;                                     

                this.crewSelect[treasure.selectedCrew2].loadTexture("crewSelectCurse")
                this.crewSelect[treasure.selectedCrew2].alpha = 1;
                this.crewDeployed[treasure.selectedCrew2].alpha = 0;  
                this.crew[treasure.selectedCrew2].curseIncr.alpha = 1;    

             
              }
            } 
            //if continue or go back are on screen
            if(treasure.value == 200 || treasure.value == 201){
              this.unShowInfo();
              calBoon = treasure.value
              for(var i = 1; i < this.crew.length; i++){
                this.crew[i].curseIncr.alpha = 0; 
                this.crewSelect[i].alpha = 0;
                this.crewDeployed[i].alpha = 1;  
              }
            }              


          
           
                      
            //this.treasureOptions[item.id].y -= 50;
            if(!this.removeFromCrew){
              this.treasureSparkle.alpha = 1
              this.treasureSparkle.y = 150+this.game.height/3-50
              this.treasureSparkle.x = this.treasureOptions[item.id].x
              this.animateHover(this.treasureOptions[item.id])              
            }

            if(this.removeFromCrew && (item.id > 0)){
              this.updatetoolTip(this.crewOptions[item.id].ability)
            }
            

          
          }



  
          if( (this.addToCrew &&  parseInt(localStorage.getItem("intro")) == 8) && (item.id != 1) ){
            this.treasureSparkle.alpha = 0
            this.unShowInfo()
            
          }
         else if(this.getTileDetails && item.id == 1){
            this.treasureSparkle.alpha = 0
            this.treasureSparkle.y = 150+this.game.height/3-50
            this.treasureSparkle.x = this.treasureOptions[item.id].x         
            this.updatetoolTip(this.crewOptions[item.id].ability)   

            for(var i = 1; i < this.crew.length; i++){

              
              //this.crewSelect[i].alpha = 0;     
              //this.crewDeployed[i].alpha = 1; 
            }            
 
            //this.unShowInfo()
          }           
          else{
            if(!this.removeFromCrew){
              this.treasureSparkle.alpha = 1
              this.treasureSparkle.y = 150+this.game.height/3-50
              this.treasureSparkle.x = this.treasureOptions[item.id].x
              this.animateHover(this.treasureOptions[item.id])
            }

            
          }  
          
          if(this.removeFromCrew && item.id == 0){
            this.treasureSparkle.alpha = 0
            this.unShowInfo()
          }

          
         

                  
        }   
        ,unhighLightAffect: function (item){
        


          if(!this.addToCrew && !this.removeFromCrew){
            for(var i = 1; i < this.crew.length; i++){
              if(!this.getTileDetails){
                this.crewSelect[i].alpha = 0;     
                this.crewDeployed[i].alpha = 1; 
              }              

            }
          }
          if(this.treasureOptions[item.id].alpha > 0){
            this.unShowInfo()
          }
          
          this.treasureSparkle.alpha = 0
          this.returnOrig(this.treasureOptions[item.id])  
        }
        , crewTint: function (crew , tile){
          var key = tile.id.split("");
          var j = parseInt(key[0])
          var i = parseInt(key[1])

          
          ////console.log(key)
          switch(parseInt(crew.attackPattern)){
            //normal
            case 1:
                this.tintTile(this.tile[''+(j+1)+(i)],highlightTint,crew)
                this.tintTile(this.tile[''+(j-1)+(i)],highlightTint,crew)
                this.tintTile(this.tile[''+(j)+(i+1)],highlightTint,crew)
                this.tintTile(this.tile[''+(j)+(i-1)],highlightTint,crew)       

                                 
              break;
            //col strike 
            case 2:
              for(var l = 0; l < this.boardHeight; l++){
                for(var m = 0; m < this.boardWidth; m++){
                  if(j == m){
                    this.tintTile(this.tile[''+(m)+(l)],highlightTint,crew)         


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
                    this.tintTile(this.tile[''+(m)+(l)],highlightTint,crew)       

                  }
                }
              }   
              this.tile[""+j+i].tint = '0xFFFFFF'                        
              break;
              //area     
              case 4:
                this.tintTile(this.tile[''+(j+1)+(i)],highlightTint,crew)
                this.tintTile(this.tile[''+(j-1)+(i)],highlightTint,crew)
                this.tintTile(this.tile[''+(j)+(i+1)],highlightTint,crew)
                this.tintTile(this.tile[''+(j)+(i-1)],highlightTint,crew)       
                
                this.tintTile(this.tile[''+(j+1)+(i+1)],highlightTint,crew)
                this.tintTile(this.tile[''+(j-1)+(i-1)],highlightTint,crew)   
                this.tintTile(this.tile[''+(j-1)+(i+1)],highlightTint,crew)
                this.tintTile(this.tile[''+(j+1)+(i-1)],highlightTint,crew)   

                                                       
              break;          
              case 5:
                for(var l = 0; l < this.boardHeight; l++){
                  for(var m = 0; m < this.boardWidth; m++){
                    if(j == m){
                      this.tintTile(this.tile[''+(m)+(l)],highlightTint,crew)     
   
                    }
                    if(i == l){
                      this.tintTile(this.tile[''+(m)+(l)],highlightTint,crew)     
   
                    }                    
                  }
                }                                    
                this.tile[""+j+i].tint = '0xFFFFFF'                                                          
              break;  
              case 6:
                for(var l = 0; l < this.boardHeight; l++){
                  for(var m = 0; m < this.boardWidth; m++){
                    if(this.tile[''+(m)+(l)].smoke.on){
                      this.tintTile(this.tile[''+(m)+(l)],highlightTint,crew)     
 
                    }
                  }
                }                                    
                this.tile[""+j+i].tint = '0xFFFFFF'                                                          
              break;   
              case 7:
                for(var l = 0; l < this.boardHeight; l++){
                  for(var m = 0; m < this.boardWidth; m++){
                    if(this.tile[''+(m)+(l)].submerged){
                      this.tintTile(this.tile[''+(m)+(l)],highlightTint,crew)    
         
                    }
                  }
                }   
                this.tile[""+j+i].tint = '0xFFFFFF'                            
                break;        
              case 8:
                for(var l = 0; l < this.boardHeight; l++){
                  for(var m = 0; m < this.boardWidth; m++){
                    if(!this.tile[''+(m)+(l)].submerged && this.tile[''+(m)+(l)].isEnemyHere){
                      this.tintTile(this.tile[''+(m)+(l)],highlightTint,crew)      
    
                    }
                  }
                }   
                this.tile[""+j+i].tint = '0xFFFFFF'                            
                break;  
                case 9:
                  for(var l = 0; l < this.boardHeight; l++){
                    for(var m = 0; m < this.boardWidth; m++){
                      if(true){
                        this.tintTile(this.tile[''+(m)+(l)],highlightTint,crew)    
                            
                      }
                    }
                  }                                    
                  this.tile[""+j+i].tint = '0xFFFFFF'                              
                  break;                   
                                                                                                                                                                                                           
          }      
          

        }
        , showAttackRange: function (tile,pointer){
          
          if(this.cursorSelect.alpha > 0){
            this.crewTint(this.crew[this.selectedCrew], tile)
            //this.crewTint(parseInt(this.crew[this.selectedCrew].attackPattern), tile)
          }
          else{
            /*
            var tokensRemaining =  this.chestOpened+this.soulsSaved+this.chestTriggers+this.soulTriggers
            if(tokensRemaining <= 0){            
              if(!this.addToCrew && !this.removeFromCrew && !this.bossDead && this.cursorSelect.alpha <= 0 && this.phaseCounter == 1 && this.capUltHero.y >= this.game.height){

                if(tile.isEnemyHere){

                  if(tile.newLabel.alpha == 1){
                    localStorage.setItem("firstTimeSeen-"+tile.monID,0)
                    tile.newLabel.alpha = 0;
                  }


                  this.getTileDetails = true;
                  this.chatTimer = 1;

                  this.treasureOptions[1].x = tile.x
                  this.treasureOptions[1].y = tile.y

                  this.popupTail.alpha = 1;
                  this.popupTail.loadTexture("popUpTail_mon")
                  this.popupTail.x = tile.x
                  this.popupTail.y = tile.y

                  //console.log(pointer.x)
                  if(tile.y <= this.treasureOptions[1].height/2){
                    this.treasureOptions[1].y = this.treasureOptions[1].height/2
                  }
                  if(tile.x > pointer.x){
                    this.treasureOptions[1].x = tile.x-this.treasureOptions[1].width/2-50
                    this.popupTail.angle = -90
                    this.popupTail.x = tile.x-75
                  }              
                  if(tile.x <= pointer.x){
                    this.treasureOptions[1].x = tile.x+this.treasureOptions[1].width/2+50
                    this.popupTail.angle = 90
                    this.popupTail.x = tile.x+75                
                  }           
                  
                  
                  var canPeek = false;
                  for(var i = 1; i < this.crew.length; i++){
                    if(this.crew[i].id == 52){
                      canPeek = true
                    }
                    //this.crewSelect[i].alpha = 0;     
                    //this.crewDeployed[i].alpha = 1; 
                  }               
                  if(tile.submerged && !canPeek){
                    this.crewOptions[1].loadTexture(tile.texture)
                    this.crewOptions[1].deployText.text = ""
                    this.crewOptions[1].powerText.text = ""
                    this.crewOptions[1].ability.text = "THIS ENEMY IS SUBMERGED"
                    this.crewOptions[1].name.text = "LURKING SHADOW"
                    
                    this.treasureOptions[1].loadTexture("monDetail")


                    for(var i = 1; i < this.crew.length; i++){
                      //this.crewSelect[i].alpha = 0;     
                      //this.crewDeployed[i].alpha = 1; 
                    }  
                  }
                  else{
                    this.crewOptions[1].loadTexture(tile.texture)

                    this.crewOptions[1].deployText.text = tile.healthText.text
                    this.crewOptions[1].powerText.text = tile.powerText.text
                    if(tile.exhausted){
                      this.crewOptions[1].ability.text = "EXHAUSTED \n"
                      this.crewOptions[1].ability.text += monster[tile.monID].ability+""
                    }                
                    else{
                      this.crewOptions[1].ability.text = monster[tile.monID].ability+""
                    }
                    
                    this.crewOptions[1].name.text = tile.name+""

                    if(canPeek && (tile.monID+1) < 100){
                      this.crewOptions[1].loadTexture('mon-'+(tile.monID+1))            
                    }                

                    this.treasureOptions[1].loadTexture("monDetail")

    
                  }


                  
                }

                if(tile.isCrewHere){


                  this.getTileDetails = true;
                  this.chatTimer = 1;

                  this.treasureOptions[1].x = tile.x
                  this.treasureOptions[1].y = tile.y

                  this.popupTail.alpha = 1;
                  
                  this.popupTail.x = tile.x
                  this.popupTail.y = tile.y

                  if(tile.y <= this.treasureOptions[1].height/2){
                    this.treasureOptions[1].y = this.treasureOptions[1].height/2
                  }
                  if(tile.x <= this.game.width/2){
                    this.treasureOptions[1].x = tile.x-this.treasureOptions[1].width/2-50
                    this.popupTail.angle = -90
                    this.popupTail.x = tile.x-75
                  }              
                  if(tile.x > this.game.width/2){
                    this.treasureOptions[1].x = tile.x+this.treasureOptions[1].width/2+50
                    this.popupTail.angle = 90
                    this.popupTail.x = tile.x+75                
                  } 
                  
                  var crewType = ""
                  var curseVal = 0;
                  for(var z = 1; z < this.crew.length; z++){
                    if(this.crew[z].id == tile.crewID ){
                      curseVal = this.crew[z].curseVal
                      switch(this.crew[z].type){
                        case 0:
                          crewType = "STEEL"
                          break;
                        case 1:
                          crewType ="SALT"
                          break;
                        case 2:
                          crewType = "SMOKE"
                          break;
                      }                  
                    }
                  }

                  //this.crewOptions[1].name.text = this.crew[crewItem.arrayKey].name+"\nTYPE: "+crewType              


                  this.crewOptions[1].loadTexture(tile.texture)
                  this.crewOptions[1].deployText.text = tile.healthText.text
                  this.crewOptions[1].powerText.text = tile.powerText.text
                  if(curseVal > 0){
                    this.crewOptions[1].ability.text = "AFFLICTED x"+chosen.curseVal+" \n "
                    this.crewOptions[1].ability.text += crew[tile.crewID].ability+""
                  }                
                  else{
                    this.crewOptions[1].ability.text = crew[tile.crewID].ability+""
                  }              
                  
                  this.crewOptions[1].name.text = crew[tile.crewID].name+"\nTYPE: "+crewType 

                  
                  updatePool()
                  var rarity = 1;
                  try{
                    if(crewPool[0].includes(tile.crewID)){
                      rarity = 1;
                    }  
                    if(crewPool[2].includes(tile.crewID)){
                      rarity = 2;
                    }                            
                    if(crewPool[3].includes(tile.crewID)){
                      rarity = 3;
                    }  
                  }
                  catch(e){
                    rarity = 1;
                  }
                  
                  this.treasureOptions[1].loadTexture("treasure_rarity_"+rarity )
                  this.popupTail.loadTexture("popUpTail_rarity_"+rarity )

                  for(var i = 1; i < this.crew.length; i++){             
                    if(i == tile.crewID){
                      this.crewSelect[i].alpha = 1
                    }
                    else{
                      this.crewSelect[i].alpha = 0
                    }

                  }   
                }
    
              }    
            }
              */        
          }

        }
        , hideAttackRange: function (){
          this.targetTileID = null
          if(this.cursorSelect.alpha > 0){
            this.removeTint();
          }       
        }        
        , spawnSplash: function (key){
          if(this.tileSplash[key].alpha <= 0.5 ){

            //this.resetRipple();
            //this.tile[key].rippleTrig = 1


            ////console.log("SPLASH")
            this.tileSplash[key].alpha = 1
            this.tileSplash[key].x =this.tile[key].x
            this.tileSplash[key].y =this.tile[key].y

            this.tileSplash[key].alpha = 0
            this.add.tween(this.tileSplash[key]).from( { alpha:1 }, 1000, Phaser.Easing.Circular.InOut, true);   

            this.tileSplash[key].y = this.tile[key].y-25
            this.add.tween(this.tileSplash[key]).from( { y:this.tile[key].y+5 }, 1000, Phaser.Easing.Circular.InOut, true);               

            var ran = Math.floor(Math.random() * 4)+1;
            this.splashSnd[ran].play()               
          } 
        }                  
        , animateHover: function (item){
          
          if(!this.removeFromCrew){
            item.targetY = item.origtargetY-50;
          }
          
          
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


            var screenShakeChecked = ''
            var fullscreenChecked = ''
            if(localStorage.getItem("screenShakeEnabled") === null){
              localStorage.setItem("screenShakeEnabled",true) 
              screenShakeChecked = 'checked'
            }     
            else if(JSON.parse(localStorage.getItem("screenShakeEnabled"))){
              screenShakeChecked = 'checked'
            } 
            else{
              screenShakeChecked = ''
            }

            if(localStorage.getItem("fullscreenEnabled") === null){
              localStorage.setItem("fullscreenEnabled",true) 
              fullscreenChecked = 'checked'
            } 
            else if(JSON.parse(localStorage.getItem("fullscreenEnabled"))){
              fullscreenChecked = 'checked'
            } 
            else{
              fullscreenChecked = ''
            }

            Swal.fire({
              title: 'OPTIONS',
              html: '<span>TOGGLE SCREEN SHAKE <input type="checkbox" id="shakeCheck" '+screenShakeChecked+' onclick=\'localStorage.setItem("screenShakeEnabled",document.getElementById("shakeCheck").checked)\'></span><br/><br/> <span>TOGGLE FULL SCREEN <input type="checkbox" id="fullScreenCheck" '+fullscreenChecked+' onclick=\'const electron = require("electron");const ipc = electron.ipcRenderer;ipc.send("toggle-maximize-window"); localStorage.setItem("fullScreenCheck",document.getElementById("fullScreenCheck").checked)\'> </span><br/><br/><div class="slidecontainer" > MUSIC VOLUME: <span id="mVol">'+parseInt(localStorage.getItem("bgVol"))+'</span><br/><input oninput=\'localStorage.setItem("bgVol",this.value); document.getElementById("mVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("bgVol"))+'" class="slider" id="volRange"> </div><br/><div class="slidecontainer"> SFX VOLUME: <span id="sfxVol">'+parseInt(localStorage.getItem("sfxVol"))+'</span><br/><input oninput=\'localStorage.setItem("sfxVol",this.value); document.getElementById("sfxVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("sfxVol"))+'" class="slider" id="sfxRange"> </div><br/><br/>',
              allowOutsideClick: false,
              allowEscapeKey: false,
              heightAuto: false                  
            }).then((result) => {

              this.hideOutline7();
              var bgVol = document.getElementById("volRange");
              var sfxVol = document.getElementById("sfxRange");
    
              localStorage.setItem("bgVol",bgVol.value)
              localStorage.setItem("sfxVol",sfxVol.value)
              
              //alert(bgVol.value)

              this.tutorialPause = false;
              this.chatTimer = 0;          
              
              //volume balancer
              
           
            })            
          }      
        }
        , balanceVolume: function(){
          this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1  

          this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

          this.curseSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
          this.curseSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.curseSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1   
          this.curseSnd[4].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1       
          
          this.evilLaughSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.2  
          this.shipBellSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.1  
          this.spinSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.2            

          
          for(var i = 1; i <6;i++){
            this.stoneSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.05 
          }

          for(var i = 1; i <5;i++){
            this.splashSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.02
          }        
          for(var i = 1; i <3;i++){
            this.attackSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.05
          }    
          for(var i = 1; i <3;i++){
            this.monAttackSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
          }               
          for(var i = 1; i <=10;i++){
            this.hurtSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.05 
          }         
          this.highlightPing.volume = parseInt(localStorage.getItem("sfxVol"))* 0.02
          this.fightReady.volume = parseInt(localStorage.getItem("sfxVol"))* 0.2   
          this.curseFill.volume = parseInt(localStorage.getItem("sfxVol"))* 0.1   
          this.curseCrewAnim.volume = parseInt(localStorage.getItem("sfxVol"))* 0.1   
          
          this.explodeSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.2   
          this.decideSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.1    

          this.capVOSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.2 
          this.capVOSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.2 
          this.capVOSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
          
          this.capVOSnd[4].volume = parseInt(localStorage.getItem("sfxVol"))* 0.2 
          this.capVOSnd[5].volume = parseInt(localStorage.getItem("sfxVol"))* 0.4 
          this.capVOSnd[6].volume = parseInt(localStorage.getItem("sfxVol"))* 0.4 
        }      
        , crewSpeak: function (key,words, timer){
          
          if(timer < 0 ){
           
            this.timer = this.game.time.create(true);
            this.timer.add((-1*timer), function(){     
              this.crewSpeak(key,words,quickspeechTimerBase)    
              if(key == 4 && parseInt(localStorage.getItem("intro")) == 11){
                this.setFocus(400,this.tut_Button.x,this.tut_Button.y+25,180)         
                localStorage.setItem("intro",12)              
                    try{
                      if (!client.achievement.isActivated('CLEAR_TUTORIAL')) {
                        client.achievement.activate('CLEAR_TUTORIAL')
                      } 
                    }
                    catch(e){ }    
              }                        
            },this);
            this.timer.start();
          }
          else{
            this.crew[key].isTalking = true;
            this.crew[key].speechBubbleText.text = words

            this.timer = this.game.time.create(true);
            this.timer.add((timer), function(){     
                this.crew[key].isTalking = false;

                if((this.crew[key].id != 90 && this.crew[key].id != 91 && this.crew[key].id != 92 && this.crew[key].id != 99) && parseInt(localStorage.getItem("intro")) == 8){
                  localStorage.setItem("intro",9)
                  this.crewSpeak(1,"Some creeps start SUBMERGED",quickspeechTimerBase)

                  
                  this.crewSpeak(2,"They can't attack or be attacked ...",-1*(quickspeechTimerBase/2))

                  
                  this.crewSpeak(3,"You can BLOCK by placing a unit on the tile",-1*(quickspeechTimerBase))
                      

                  
                  for(var m = 0; m < this.boardHeight; m++){
                    for(var l = 0; l < this.boardWidth; l++){  
                      if(this.tile[''+l+m].isEnemyHere && this.tile[''+l+m].submerged){
                        this.setFocus(500,this.tile[''+l+m].x,this.tile[''+l+m].y)   
                      }
                    }
                  }                      
                } 


                    
            },this);
            this.timer.start();            
          }     
         
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
        , exitVoyage: function () {
          this.tutorialPause = true;
          this.chatTimer = 1;           
          Swal.fire({
            title: 'End Voyage?',
            text: "",
            imageUrl: 'assets/whiteFlag.webp',
            imageWidth: 200,
            imageHeight: 200,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',  
            cancelButtonText: 'No',
            allowOutsideClick: false,
            allowEscapeKey: false,
            heightAuto: false                                
          }).then((result) => {
            if (result.isConfirmed){
              this.bgSound.stop();
              this.tutorialPause = false;
              this.chatTimer = 0;                
              //this.transWaveKey = 1
              //this.changeWave();
              if(this.prevScene.includes("menu")){
                localStorage.setItem("prevScene","tutorial")
                this.bgSound.stop();
                this.transWaveKey = 1

                this.changeWave();
                
                this.transTar = 'menu'
              }
              else{
                this.lookAtBoard(23,0,'selectCap')
              }
              
              //this.transTar = 'selectCap'  
            }   
            else{
              this.tutorialPause = false;
              this.chatTimer = 0;              
            }         
            
          })
        }     
        , addKarma: function () {
          this.karma++;
        }      
        , spawnRocks: function () {
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){
              
              var rand = Math.floor(Math.random() * (3))
              if(rand == 0){
                this.spawnMonsters(false,this.tile[''+j+i],103);   
                this.tile[''+j+i].hasAttacked = true;   
              }               
            }
          }
        }   
        , bossMove: function(boss){

          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){      
              var rand = Math.floor(Math.random() * (3))
              
              
              if(!this.tile[''+j+i].isEnemyHere && rand == 0){

                  switch(this.tile[boss].monID){
                    default:
                    case 4:
                      this.spawnBoss(4,i,j)   
                      break;
                    case 7:
                      this.spawnBoss(7,i,j)
                      break;
                    case 10:
                      this.spawnBoss(10,i,j)
                      break;                            
                  }                
               
                  this.tile[''+j+i].submerged = false;
                  this.tile[''+j+i].hp = this.tile[boss].hp     
                  this.tile[''+j+i].power = this.tile[boss].power


                  this.tile[boss].newLabel.alpha = 0
                  
                  
                  var exhaustedHolder = this.tile[''+j+i].exhausted 
                  this.tile[''+j+i].exhausted = this.tile[boss].exhausted
                  this.tile[boss].exhausted = exhaustedHolder;
                  

                  var historyHolder = this.tile[''+j+i].statsHistory
                  this.tile[''+j+i].statsHistory = this.tile[boss].statsHistory
                  this.tile[boss].statsHistory = historyHolder;                  

                  if(this.tile[''+j+i].tired.animations.isPlaying){
                    this.tile[''+j+i].tired.animations.stop('snore',true);   
                  }

                  

          

                  this.tile[boss].loadTexture('tile');
                  this.tile[boss].tint = '0x000000'
                  this.tile[boss].multiAttack = 0
                  this.tile[boss].origmultiAttack =  this.tile[boss].multiAttack                
                  
                  this.tile[boss].help.on = false; 
                  this.tile[boss].isEnemyHere = false;
                  this.tile[boss].submerged = false;
                  this.tile[boss].alpha = 1;
                  
                  this.tile[boss].incomingDamage = 0;
                  this.tile[boss].willDie.alpha = 0;
                  this.tile[boss].willDie.text = "";
        
                  this.tile[boss].sparkle.alpha = 0;
                  this.tile[boss].sparkle2.alpha = 0; 
                  this.tile[boss].smoke.on = false;    
                  this.tile[boss].monID = 0;     
                  this.spawnSplash(boss);
                  this.tile[boss].hp = 0    
                  this.tile[boss].power =0                  

 
                        
                                
                  
                  this.bossID = ''+j+i
                  
                  i = this.boardHeight
                  j = this.boardWidth


                  //crew movement trigger
                  for(var z = 1; z < this.crew.length; z++){
                    if(this.crew[z].id == 41){
                      var holder = parseInt(this.crew[z].powerText.text)
                      //this.crew[z].power += 2;
                      this.crew[z].origPower += 2;
                    }
                  }  
                  
                  for(var i = 0; i < this.boardHeight; i++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      for(var z = 1; z < this.crew.length; z++){
                        if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == this.crew[z].id && this.crew[z].id == 41){
                          this.tile[''+j+i].powerText.height = 75;
                          this.spawnBuff(this.tile[''+j+i],'buff_attack');
                        }                    
                      }

                    }
                  }                  
                  for(var i = 1; i < this.crew.length; i++){
                    if(this.crew[i].id == 41){
                      //this.crew[i].holderPower[10] = 1
                      var ranPhrase = Math.floor(Math.random() * 2)

                      this.crew[i].powerUpParticle.x = this.crew[i].powerText.x
                      this.crew[i].powerUpParticle.y = this.crew[i].powerText.y
                      this.crew[i].powerUpParticle.makeParticles('sparkle');
                      this.crew[i].powerUpParticle.setScale(1, 1, 1, 1);                  
                      this.crew[i].powerUpParticle.maxParticleSpeed.set(100,100);
                      this.crew[i].powerUpParticle.explode(500);   
    
                    }
                    
                  }                    

              }
                     
            }
          }           
        }
        , spawnNurse: function(i,j){
          //console.log(this.monsterPool)
          if(this.tile[''+j+i].isEnemyHere){
            this.enemyDie(this.tile[''+j+i])
          }
          if(this.tile[''+j+i].isCrewHere){
            this.tile[''+j+i].deathParticle.makeParticles(this.tile[''+j+i].texture);
            this.tile[''+j+i].deathParticle.setScale(0.7, 0.7, 0.7, 0.7);
            this.tile[''+j+i].deathParticle.maxParticleSpeed.set(0, (-400*10));
            this.tile[''+j+i].deathParticle.minParticleSpeed.set(0, (-400*10));
            this.tile[''+j+i].deathParticle.explode(2000,1);

            var blockingCrew = 1;
            for(var z = 1; z < this.crew.length; z++){
              if(this.tile[''+j+i].crewID == this.crew[z].id){
                blockingCrew = z;
              }
            }          
            this.crew[blockingCrew].holderPower[10] = 0
            this.crew[blockingCrew].holderPower[0] = 0
            this.crew[blockingCrew].holderPower[24] = 0
            this.tile[''+j+i].hasActed = true;
            this.tile[''+j+i].loadTexture('tile');            
       
            this.tile[''+j+i].crewID = 0
            this.tile[''+j+i].isCrewHere = false;
            this.tile[''+j+i].hasActed = false;     

            this.crew[blockingCrew].deployCost = this.crew[blockingCrew].origDeployCost
            this.crew[blockingCrew].isSelected = false;
            this.crew[blockingCrew].isDeployed = false            
        
          }
                    
          this.monsterPool[10].count = 1
          this.spawnMonsters(false,this.tile[''+j+i],11);  
          this.monsterPool[10].count = 0;  
          //this.tile[''+j+i].hp =  this.tile[''+j+i].hp*this.zone
          this.tile[''+j+i].hasAttacked = true;   
          this.tile[''+j+i].submerged = false;
          this.tile[''+j+i].width += 100;
          this.tile[''+j+i].height += 100;
          this.tile[""+j+i].tint = '0xFFFFFF'
          //this.tile[''+j+i].sparkle.alpha = 1;
          //this.tile[''+j+i].sparkle2.alpha = 1;          

        }
        , spawnBoss: function (boss,i,j) {


          if(this.firstSpawn){
            this.firstSpawn = false;
            this.ultKey = ultTimer+50;
            this.showHero(1000,3000)
            this.captainPowerActivated = false;
            this.focusHereTimer = 0;  
            this.capUltOverlay.loadTexture("bossOverlay")
            this.capUltText.loadTexture("boss_cut"+boss)
            this.capUltHero.loadTexture("bossHero-"+boss)
            if(boss == 10){
              this.capUltHero.loadTexture("bossHero-"+boss+"-"+this.capKey)
            }
            this.game.plugins.screenShake.shake(30);            
            


            this.showMarker(1000,3000,4000)
            this.turnMarkerText.text = "YOUR TURN"
            if(this.soulsSaved <= 0 && this.chestOpened<= 0){
              this.turnMarkerText.text = "YOUR TURN"     
              this.deploy_poolCurrent = this.deploy_poolMax;    
              this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax 
              
            }             
          }


          if(this.tile[''+j+i].isEnemyHere){
            this.enemyDie(this.tile[''+j+i])
          }
          if(this.tile[''+j+i].isCrewHere){
            this.tile[''+j+i].deathParticle.makeParticles(this.tile[''+j+i].texture);
            this.tile[''+j+i].deathParticle.setScale(0.7, 0.7, 0.7, 0.7);
            this.tile[''+j+i].deathParticle.maxParticleSpeed.set(0, (-400*10));
            this.tile[''+j+i].deathParticle.minParticleSpeed.set(0, (-400*10));
            this.tile[''+j+i].deathParticle.explode(2000,1);

            var blockingCrew = 1;
            for(var z = 1; z < this.crew.length; z++){
              if(this.tile[''+j+i].crewID == this.crew[z].id){
                blockingCrew = z;
              }
            }          
            this.crew[blockingCrew].holderPower[10] = 0
            this.crew[blockingCrew].holderPower[0] = 0
            this.crew[blockingCrew].holderPower[24] = 0
            this.tile[''+j+i].hasActed = true;
            this.tile[''+j+i].loadTexture('tile');            
       
            this.tile[''+j+i].crewID = 0
            this.tile[''+j+i].isCrewHere = false;
            this.tile[''+j+i].hasActed = false;     

            this.crew[blockingCrew].deployCost = this.crew[blockingCrew].origDeployCost
            this.crew[blockingCrew].isSelected = false;
            this.crew[blockingCrew].isDeployed = false            
        
          }
                    
          this.bossID =''+j+i
          this.monsterPool[boss-1].count = 1
          this.spawnMonsters(false,this.tile[''+j+i],boss);  
          this.monsterPool[boss-1].count = 0;  
          this.tile[''+j+i].hasAttacked = true;   
          this.tile[''+j+i].submerged = false;
          this.tile[''+j+i].width += 100;
          this.tile[''+j+i].height += 100;
          this.tile[''+j+i].tint = '0xFFFFFF'
          if(glassBosses){
            this.tile[''+j+i].hp = 1
          }

          this.showMarker(1000,3000)
          this.turnMarkerText.text = "YOUR TURN"
          
          
        }           
        , massSpawnMonsters: function (monID,chance, amount) {
          var count = amount
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){
              
              var rand = Math.floor(Math.random() * (chance))
              if(rand == 0 && count > 0){
                count--;
                this.spawnMonsters(false,this.tile[''+j+i],monID);   
                this.tile[''+j+i].hasAttacked = true;   
              }               
            }
          }
        } 
        , startTutorialFirst : function(){
          if (this.showTut == 1) {
            this.tutorialPause = true;
            this.chatTimer = 1;        
            this.showTut = 0;
            localStorage.setItem("tutorialStart",0);
            this.squawk.play();
            Swal.fire({
              title: 'Set Sail!',
              text: "In order to complete your voyage you need to survive "+this.bossEmegrgePoint+" waves and defeat the boss creep",
              imageUrl: 'assets/mascot.webp',
              backdrop: false,
              imageWidth: 200,
              imageHeight: 200,
              allowOutsideClick: false,
              allowEscapeKey: false,
heightAuto: false                        
        
            }).then((result) => {
                Swal.fire({
                  title: 'Get Info!',
                  text: "Hover on any tile or the captain badge to learn more about them",
                  imageUrl: 'assets/mouse.png',
                  backdrop: false,
                  imageWidth: 100,
                  imageHeight: 100,
                  allowOutsideClick: false,
                  allowEscapeKey: false,
heightAuto: false                        
            
                }).then((result) => {
                  Swal.fire({
                    title: 'Deploy your Crew!',
                    text: "Spend SAVVY to use your Captain ability and to deploy your crew",
                    imageUrl: 'assets/tut_block.webp',
                    backdrop: false,
                    imageWidth: 200,
                    imageHeight: 200,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
heightAuto: false                        
              
                  }).then((result) => {
                    Swal.fire({
                      title: 'Fight!',
                      text: "Surround Creeps and click FIGHT to begin combat",
                      imageUrl: 'assets/tut_combat.webp',
                      backdrop: false,
                      imageWidth: 200,
                      imageHeight: 200,
                      allowOutsideClick: false,
                      allowEscapeKey: false,
heightAuto: false                        
                
                    }).then((result) => {
                                  
                      Swal.fire({
                        title: 'Watch Your Health!',
                        text: "Creeps only attack you (the Captain) directly. The voyage ends health reaches zero",
                        imageUrl: 'assets/tut_heart.webp',
                        backdrop: false,
                        imageWidth: 200,
                        imageHeight: 200,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
heightAuto: false                        
                  
                      }).then((result) => {
                        Swal.fire({
                          title: 'Affliction and Curse!',
                          text: "As you gather cursed treasure, your crew grows increasingly afflicted. Deploying afflicted crew members raises your curse meter, and if full by the end of a round, SPIN THE ROULETTE OF DOOM!",
                          imageUrl: 'assets/gatheredCurse.webp',
                          backdrop: false,
                          imageWidth: 100,
                          imageHeight: 100,
                          allowOutsideClick: false,
                          allowEscapeKey: false,
heightAuto: false                        
                    
                        }).then((result) => {
                          this.tutorialPause = false;
                          this.chatTimer = 0;                                                                 
                        })                                                             
                      })                          
                    })                                                            
                  })                                                            
                })                                                       
            })            
          }            
        }        
        , startTutorial : function(){
          if (true) {
            this.focusHere.alpha = 0;
            this.tutorialPause = true;
            this.chatTimer = 1;        
            this.showTut = 0;
            localStorage.setItem("tutorialStart",0);
            this.squawk.play();
            Swal.fire({
              title: 'Set Sail!',
              text: "In order to complete your voyage you need to survive "+this.bossEmegrgePoint+" waves and defeat the Zone Boss",
              imageUrl: 'assets/mascot.webp',
              backdrop: false,
              imageWidth: 200,
              imageHeight: 200,
              allowOutsideClick: false,
              allowEscapeKey: false,
heightAuto: false                        
        
            }).then((result) => {
                Swal.fire({
                  title: 'Get Info!',
                  text: "Hover on any tile or the captain badge to learn more about them",
                  imageUrl: 'assets/mouse.png',
                  backdrop: false,
                  imageWidth: 100,
                  imageHeight: 100,
                  allowOutsideClick: false,
                  allowEscapeKey: false,
heightAuto: false                        
            
                }).then((result) => {
                  Swal.fire({
                    title: 'Deploy your Crew!',
                    text: "Spend SAVVY to use your Captain ability and to deploy your crew",
                    imageUrl: 'assets/tut_block.webp',
                    backdrop: false,
                    imageWidth: 200,
                    imageHeight: 200,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
heightAuto: false                        
              
                  }).then((result) => {
                    Swal.fire({
                      title: 'Fight!',
                      text: "Surround Creeps and click FIGHT to begin combat",
                      imageUrl: 'assets/tut_combat.webp',
                      backdrop: false,
                      imageWidth: 200,
                      imageHeight: 200,
                      allowOutsideClick: false,
                      allowEscapeKey: false,
heightAuto: false                        
                
                    }).then((result) => {
                                  
                      Swal.fire({
                        title: 'Watch Your Health!',
                        text: "Creeps only attack you (the Captain) directly. The voyage ends health reaches zero",
                        imageUrl: 'assets/tut_heart.webp',
                        backdrop: false,
                        imageWidth: 200,
                        imageHeight: 200,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
heightAuto: false                        
                  
                      }).then((result) => {
                        Swal.fire({
                          title: 'Affliction and Curse!',
                          text: "As you gather cursed treasure, your crew grows increasingly afflicted. Deploying afflicted crew members raises your curse meter, and if full by the end of a round, SPIN THE ROULETTE OF DOOM!",
                          imageUrl: 'assets/gatheredCurse.webp',
                          backdrop: false,
                          imageWidth: 100,
                          imageHeight: 100,
                          allowOutsideClick: false,
                          allowEscapeKey: false,
heightAuto: false                        
                    
                        }).then((result) => {
                          this.tutorialPause = false;
                          this.chatTimer = 0;           
                          

                           
                        })                                                             
                      })                          
                    })                                                            
                  })                                                            
                })                                                       
            })            
          }            
        }
        , checkAllTiles: function(){
          
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){
              this.tile[''+j+i].checked = true;               
            }
          }          
        }                   
        , showOutline1: function () {
          if(this.chatTimer == 0){
            this.clear_Button_outline.alpha = 1
          }
          
        }
        , hideOutline1: function () {
          this.clear_Button_outline.alpha = 0;
        } 
        , showOutline2: function () {
          if(this.chatTimer == 0){
            this.endTurn_Button_outline.alpha = 1
            this.endTurn_Button.loadTexture("ui_endTurn_Button_hover")    
          }  
          if(this.removeCrewSkip_Button.y < this.game.height){
            
            this.removeCrewSkip_Button.loadTexture("skip_button_hover")   
          }        
        }
        , hideOutline2: function () {
          if(this.chatTimer == 0){
            this.endTurn_Button_outline.alpha = 0;
            this.endTurn_Button.loadTexture("ui_endTurn_Button")            
          }
          if(this.removeCrewSkip_Button.y < this.game.height){
            
            this.removeCrewSkip_Button.loadTexture("skip_button")   
          }            

        }     
        , showOutline3: function () {
          if(this.ultKey <= 0 && parseInt(localStorage.getItem("intro")) >= 5 ){

            //this.ult_Button.alpha = 1
            //this.ult_Button_hover.alpha = 1;
            //this.ult_ButtonText.alpha =1
            //this.capBadge.alpha = 0;

            ///this.ult_Button_outline.alpha = 1
            //this.ult_text.x = this.capBadge.x
            //this.ult_text.y = this.capBadge.y-230
            //this.abilityBack.alpha = 1
            //this.ult_text.alpha = 1

            this.capBadge_outline.alpha = 1


            this.ult_Button_hover.loadTexture('ui_ult_button_outline_hover') 
            this.delayShowInfo();
    

          }

        }
        , hideOutline3: function () {
          //this.ult_Button.alpha = 0
          //this.ult_Button_hover.alpha = 0;
          //this.ult_ButtonText.alpha = 0;

          //this.ult_text.y = this.game.height+10000
          //this.capBadge.alpha = 1;
          //this.abilityBack.alpha = 0;
          //this.ult_text.alpha = 0

          this.capBadge_outline.alpha = 0

          this.ult_Button_outline.alpha = 0;
          this.ult_Button_hover.loadTexture('ui_ult_button_outline_noHover') 
        }    
        , showOutline4: function () {
          this.reRoll_Button_outline.alpha = 1
          for(var i = 1; i < this.crew.length; i++){
            this.crewSelect[i].alpha = 0; 
          }            
        }
        , hideOutline4: function () {
          this.reRoll_Button_outline.alpha = 0;
        }       
        , showOutline5: function () {
          this.exit_Button_outline.alpha = 1

          if(this.exit_DetailButton.alpha == 1){
            this.exit_DetailButton_outline.alpha = 1
          }
                   
        }
        , showOutline6: function () {
          this.tut_Button_outline.alpha = 1      
        }     
        , showOutline7: function () {
          this.options_Button_outline.alpha = 1;   
        }                
        , hideOutline5: function () {
          this.exit_Button_outline.alpha = 0;
          this.exit_DetailButton_outline.alpha = 0;
        }  
        , hideOutline6: function () {
          this.tut_Button_outline.alpha = 0;

        }  
        , hideOutline7: function () {
          this.options_Button_outline.alpha = 0;

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
        ,removeCrew: function (selectedCrew) {
          this.crewOptionKey = selectedCrew.id
          var i = this.crewOptionKey
          this.ditch = false;
          if(this.crewRemove[i].alpha == 1){        

            //this.crewSelect[i].alpha = 1; 

            //Ditch Counter
            if(localStorage.getItem("actionTracker_crew"+this.crew[i].id+"ditchCount") === null){
              localStorage.setItem("actionTracker_crew"+this.crew[i].id+"ditchCount",1)
            }
            else{
              var ditchCount = parseInt(localStorage.getItem("actionTracker_crew"+this.crew[i].id+"ditchCount"))
              localStorage.setItem("actionTracker_crew"+this.crew[i].id+"ditchCount",(ditchCount+1))
            }

            var ditchCountTotal = parseInt(localStorage.getItem("actionTracker_ditchTotal"))
            localStorage.setItem("actionTracker_ditchTotal",ditchCountTotal+1)
            ditchCountTotal = parseInt(localStorage.getItem("actionTracker_ditchTotal"))
            if(ditchCountTotal >= 10){
              try{
                if (!client.achievement.isActivated('DITCH_10')) {
                  client.achievement.activate('DITCH_10')
                } 
              }
              catch(e){

              }   
            }
            if(ditchCountTotal >= 25){
              try{
                if (!client.achievement.isActivated('DITCH_25')) {
                  client.achievement.activate('DITCH_25')
                } 
              }
              catch(e){

              }   
            }
            if(ditchCountTotal >= 50){
              try{
                if (!client.achievement.isActivated('DITCH_50')) {
                  client.achievement.activate('DITCH_50')
                } 
              }
              catch(e){

              }   
            }
                        

            this.crew[i].kickParticle.makeParticles(this.crew[i].texture);
            this.crew[i].kickParticle.setScale(1, 1, 1, 1);   
            this.crew[i].kickParticle.minParticleSpeed.set(0, (-200));      
            this.crew[i].kickParticle.maxParticleSpeed.set(0, (-400));
            this.crew[i].kickParticle.explode(2000,1);    
            this.crew[i].loadTexture("crew_blank_add")
            this.crew[i].isBlank = true;
            this.crew[i].id = 0
            this.crew[i].deployText.text = ""
            this.crew[i].powerText.text = "" 
            this.crew[i].loyaty =0;    
            this.crew[i].curseVal = 0;    
            this.crew[i].killCount = 0

            
           
            this.timer = this.game.time.create(true);
            this.timer.add(1000, function(splash){


            splash.alpha = 0
            this.add.tween(splash).from( { alpha:1 }, 1000, Phaser.Easing.Circular.InOut, true);   

            splash.y = splash.origY+100
            //this.add.tween(splash).from( { y:splash.origY }, 1000, Phaser.Easing.Circular.InOut, true); 

              var ran = Math.floor(Math.random() * 4)+1;
              this.splashSnd[ran].play()                    
            },this, this.crew[i].splash);
            this.timer.start();   
            
            

            for(var i = 1; i < this.crew.length; i++){
              this.crewSelect[i].alpha = 0; 
              this.crew[i].wiggle = false;
            }           
            
            var i = this.crewOptionKey;
    

            this.crew[i].id = this.crewOptions[2].value

            // rescue Counter
            if(localStorage.getItem("actionTracker_crew"+this.crew[i].id+"rescuedCount") === null){
              localStorage.setItem("actionTracker_crew"+this.crew[i].id+"rescuedCount",1)
            }
            else{
              var rescueCount = parseInt(localStorage.getItem("actionTracker_crew"+this.crew[i].id+"rescuedCount"))
              localStorage.setItem("actionTracker_crew"+this.crew[i].id+"rescuedCount",(rescueCount+1))
            }

            if(localStorage.getItem("crew"+this.crew[i].id+"loyalty") === null){
              localStorage.setItem("crew"+this.crew[i].id+"loyalty",0)
              
            } 
            var loyaltyCounter = parseInt(localStorage.getItem("crew"+this.crew[i].id+"loyalty"))                    
            this.crew[i].isBlank = false;

            this.crew[i].loadTexture("crew-"+this.crew[i].id)
            this.crew[i].holdText = this.crew[i].texture
            this.crew[i].deployCost = crew[this.crew[i].id].loyaltyDeployCost[loyaltyCounter];
            this.crew[i].origDeployCost = this.crew[i].deployCost
            this.crew[i].name = crew[this.crew[i].id].name
            this.crew[i].power = crew[this.crew[i].id].loyaltyPower[loyaltyCounter];
            this.crew[i].origPower = this.crew[i].power
            this.crew[i].attackPattern = crew[this.crew[i].id].attackPattern
            this.crew[i].type = crew[this.crew[i].id].type // 0- steel, 1 - salt, 2 -smoke
            this.crew[i].ability  = crew[this.crew[i].id].ability
            this.crewOptionKey++

            this.unShowInfo()
            
            this.crewSpeak(i,"Thanks for having me on board,\nCaptain!", quickspeechTimerBase)
            if(parseInt(localStorage.getItem("intro")) == 8){
              localStorage.setItem("intro",9)
            }            
            //this.crew[i].speechTimer = quickspeechTimerBase
            
            this.chatTimer = 0;
            this.removeFromCrew = false; 
            this.addToCrew = false;
            
            this.removeCrew_Button.y = this.game.height +300; 
            this.removeCrewSkip_Button.y = this.game.height +300;  

            this.removeCrew_Button.y =  this.game.height +300;                     
            this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
            this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 
       

            this.treasureSparkle.alpha = 0;

         
            //this.addToCrew = true;
            //this.removeFromCrew = false;
            
            //this.monKillCount--
            //this.reRoll_Counter++
            //this.reroll();       
            
            
              //show attack boost
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  for(var z = 1; z < this.crew.length; z++){
                    //&& this.crew[z].type == 0
                    if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == 38){
                      this.tile[''+j+i].powerText.height = 75;
                      this.spawnBuff(this.tile[''+j+i],'buff_attack');
                      //this.tile[''+j+i].powerText.width = 75;
                    }                    
                  }

                }
              }
              //badmind boost
              for(var i = 1; i < this.crew.length; i++){
                if(this.crew[i].id == 38){
                  this.crew[i].origPower += 4;

                  this.crew[i].powerUpParticle.x = this.crew[i].powerText.x
                  this.crew[i].powerUpParticle.y = this.crew[i].powerText.y
                  this.crew[i].powerUpParticle.makeParticles('sparkle');
                  this.crew[i].powerUpParticle.setScale(1, 1, 1, 1);                  
                  this.crew[i].powerUpParticle.maxParticleSpeed.set(100,100);
                  this.crew[i].powerUpParticle.explode(500);                     
                }
              }                
              

          }
          for(var z = 1; z < this.crew.length; z++){
            this.crew[z].x = this.crew[z].origX
            this.crew[z].y = this.crew[z].origY
          } 


          try{
            this.delayShowInfoTimer.destroy();    
          }
          catch(e){
            
          } 
           //console.log("after remove crew") 
          this.startNextZone();
        

        } 
        , startNextZone: function(timer){
          if(this.bossDead && this.soulsSaved == 0 && this.soulTriggers == 0){
            
            if(timer == undefined){
              timer = 2000;
              //console.log("Next turn start")
            }
            //console.log("Next Zone Start "+timer)
            this.nextZoneTimer = this.game.time.create(true);
            this.nextZoneTimer.add(timer, function(){
                //console.log("Make Your Choice!")
                this.nextZone = true;
                this.chatTimer = 1
              
            }, this);
            this.nextZoneTimer.start();     
          }       
        }
        , saveSoulNow: function (){

          this.hideDetails()
          this.getTileDetails = false;
          this.getCapDetails = false;      
          //this.chatTimerCount = chatTimerBase;
          //this.removeFromCrew = true;
          this.addToCrew = true;
          this.removeFromCrew = false;
          
          //this.showInfo(this.crew[4])
          //this.addToCrew = true
          this.ditch = true;
          //this.monKillCount--
 
          if(this.chatTimer != 1){
            var commonHolder = new Array();
            var uncommonHolder = new Array();
            var rareHolder = new Array();

            commonHolder = crewPool[0]
            uncommonHolder = crewPool[1]
            rareHolder = crewPool[2]
            for(var i=0; i< 3; i++){

              this.crewOptions[i].y = this.game.width+1000
              this.crewOptions[i].powerText.y = this.game.width+1000
              this.crewOptions[i].ability.y = this.game.width+1000
              this.crewOptions[i].name.y = this.game.width+1000  
                            
              this.crewOptions[i].statInc.alpha = 0;

              var ranRarity = Math.floor(Math.random() * 10)+1
              /*
              //scale rarity based on wave
              if(this.turnCountNum < 5 && ranRarity>= 4){
                ranRarity = 1;
              }
              if(this.turnCountNum < 10 && ranRarity>= 8){
                ranRarity = 4;
              } 
              */
                  //zone affects rarity
                  
                  switch(this.zone){
                    case 1:
                      
                      var newRan = Math.floor(Math.random() * 10)+1
                      if(newRan >= 1 && newRan <=7){
                        ranRarity = 1
                      } 
                      else{
                        ranRarity = 4
                      }                     
                      break;
                    case 2:
                      var newRan = Math.floor(Math.random() * 10)+1
                      if(newRan >= 1 && newRan <=3){
                        ranRarity = 1
                      } 
                      else if(newRan >= 4 && newRan <=9){
                        ranRarity = 4
                      } 
                      else{
                        ranRarity = 8
                      }                       
                      break;
                    case 3:
                      var newRan = Math.floor(Math.random() * 10)+1
                      if(newRan >= 1 && newRan <=7){
                        ranRarity = 4
                      } 
                      else{
                        ranRarity = 8
                      }                        
                      break;                                              
                  }
              //common
              if(ranRarity>=1 && ranRarity<4){
                var ran = Math.floor(Math.random() * commonHolder.length)
                this.crewOptions[i].value = commonHolder[ran]
                commonHolder.splice(ran,1)
                this.crewOptions[i].rarity = 1;
              }
              //uncommon
              if(ranRarity >= 4 && ranRarity <8){
                var ran = Math.floor(Math.random() * uncommonHolder.length)
                this.crewOptions[i].value = uncommonHolder[ran]
                uncommonHolder.splice(ran,1)
                this.crewOptions[i].rarity = 2;
              }
              //rare
              else if(ranRarity >= 8){
                var ran = Math.floor(Math.random() * rareHolder.length)
                this.crewOptions[i].value = rareHolder[ran]
                rareHolder.splice(ran,1)
                this.crewOptions[i].rarity = 3;
              }                    
            }
            updatePool()
          }
          if(this.turnCountNum == 1){
            //this.crewOptions[0].value = captain[this.capKey].firstMates[0] 
            //this.crewOptions[0].rarity = 3            
          }      
          this.chatTimer = 1;           
          
          
          this.treasureOptions[0].y = this.game.width+1000
          this.treasureOptions[1].y = this.game.width+1000
          this.treasureOptions[2].y = this.game.width+1000
          
       
          
        }
        , clearAllSnapShots: function(){
          for(var snaps in this.tileHolder){
            snaps = {}
          }
        }
        , rollBack: function(){

          this.clearbuttonTimer = 10
          if(this.phaseCounter == 1 && this.capUltHero.y >= this.game.height){
            if(this.undoCounter > 0){
              
              for(var m = 0; m < this.boardHeight; m++){
                for(var l = 0; l < this.boardWidth; l++){  
   
                 
                  this.tileHolder[this.undoCounter][''+l+m] = {}
                }
              }       
              this.tileHolder[this.undoCounter] = {}
                      
            }

            this.undoCounter--
            if(this.undoCounter < 0){
              this.undoCounter= 0
            }
               

            //roll back placeorder
            this.placeOrderTracker = this.undoCounter
            //track captain power boosts
            this.extraAttackFromCaptain = this.tileHolder[this.undoCounter].extraAttackFromCaptain
            this.captainPowerActivated = this.tileHolder[this.undoCounter].captainPowerActivated
            if(this.captainPowerActivated){
              this.placeOrderTracker -= 1
            }
            
            //track captain rose power boosts
            for(var z = 1; z < this.crew.length; z++){
              if(this.captainPowerActivated && this.capKey == 1 && this.crew[z].type == 0){
                this.crew[z].holderPower[10] = 1
              }
              else{
                this.crew[z].holderPower[10] = 0;
              }
              
            }             

            // reset captain savvy
            this.deploy_poolCurrent = this.tileHolder[this.undoCounter].deploy_poolCurrentHolder     

            // reset captain health
            var healthDesc = false
            if(this.tileHolder[this.undoCounter].healthCurrentHolder < this.cap_healthValue){
              healthDesc = true
            }

            var healthInc = false
            if(this.tileHolder[this.undoCounter].healthCurrentHolder > this.cap_healthValue){
              healthInc = true
              
            }   
            console.log(healthDesc)     
            this.cap_healthValue = this.tileHolder[this.undoCounter].healthCurrentHolder 

            for(var m = 0; m < this.boardHeight; m++){
              for(var l = 0; l < this.boardWidth; l++){  

                  //check for undeploy            
                  for(var i = 1; i < this.crew.length; i++){
                    if(this.tile[''+l+m].crewID == this.crew[i].id && this.tileHolder[this.undoCounter][''+l+m].crewID == 0){
                      // reset curse accumulation
                      for(var count=0; count< this.crew[i].curseVal;count++){
                        this.chestMeterBar.target -= this.dynamicCurseChunk 
                      }

                                          
                      this.crew[i].deployCost = this.crew[i].origDeployCost
                      this.crew[i].isSelected = false;
                      this.crew[i].isDeployed = false
                      this.crew[i].deployNum.alpha = 0;

                      this.crew[i].holderPower[0] = 0 

                      // reset consumables
                      if(this.crew[i].id == 80){
                        this.freeCounter[5].num++
                      }
                      if(this.crew[i].id == 81){
                        this.freeCounter[6].num++
                      }                    
                      //undo powers
                      for(var z = 1; z < this.crew.length; z++){
                        if(this.crew[i].id != 10){
                          this.crew[z].holderPower[this.crew[i].id] = 0 
                        }
                        this.crew[z].power = this.crew[z].origPower
                      }
                      
                      //specifc undo
                      if(this.crew[i].id == 1){
                        for(var z = 1; z < this.crew.length; z++){
                          this.crew[z].holderPower[0] = 0 
                          this.crew[z].power = this.crew[z].origPower
                        }
                      }                 

                      //undo discounts

                        if(this.crew[i].id == 23){
                          for(var x = 1; x < this.crew.length; x++){
                            if(this.crew[x].id != 23 && !this.crew[x].isBlank){
                              //this.crew[x].deployCost = this.crew[x].origDeployCost;
                              this.crew[x].deployDiscount = 0
                            }
                          }                     
                        }
                      
                      


                    }
                  } 

                  this.tile[''+l+m].loadTexture(this.tileHolder[this.undoCounter][''+l+m].textureName)
                  this.tile[''+l+m].isCrewHere = this.tileHolder[this.undoCounter][''+l+m].isCrewHere 
                  this.tile[''+l+m].crewID = this.tileHolder[this.undoCounter][''+l+m].crewID
                  this.tile[''+l+m].isEnemyHere = this.tileHolder[this.undoCounter][''+l+m].isEnemyHere
                  this.tile[''+l+m].monID = this.tileHolder[this.undoCounter][''+l+m].monID
                  this.tile[''+l+m].isFlipping = this.tileHolder[this.undoCounter][''+l+m].isFlipping
                  
                  this.tile[''+l+m].hp = this.tileHolder[this.undoCounter][''+l+m].hp
                  this.tile[''+l+m].power = this.tileHolder[this.undoCounter][''+l+m].power
                  
                  this.tile[''+l+m].submerged = this.tileHolder[this.undoCounter][''+l+m].submerged
                  
                  this.tile[''+l+m].smoke.on = this.tileHolder[this.undoCounter][''+l+m].smokeVal

                  this.tile[''+l+m].help.on = this.tileHolder[this.undoCounter][''+l+m].helpVal

                  this.tile[''+l+m].multiAttack =  this.tile[''+l+m].origmultiAttack
                  //this.tileHolder[this.undoCounter][''+l+m].smoke.on = false;     

                  this.tile[''+l+m].placeOrder = this.tileHolder[this.undoCounter][''+l+m].placeOrder
                  this.tile[''+l+m].statsHistory = this.tileHolder[this.undoCounter][''+l+m].statsHistory
                  
                  this.tile[''+l+m].sparkle.alpha =  this.tileHolder[this.undoCounter][''+l+m].sparkleValue
                  this.tile[''+l+m].sparkle2.alpha =  this.tileHolder[this.undoCounter][''+l+m].sparkleValue2

                  this.tile[''+l+m].exhausted = this.tileHolder[this.undoCounter][''+l+m].exhausted 
                  this.tile[''+l+m].origPower  = this.tileHolder[this.undoCounter][''+l+m].origPower    
                  this.tile[''+l+m].multiAttack = this.tileHolder[this.undoCounter][''+l+m].multiAttack        
              

                  this.tile[''+l+m].y  = this.tile[''+l+m].origY    
                  this.tile[''+l+m].x  = this.tile[''+l+m].origX     

              
                  
              }
            }    
              
            for(var i = 1; i < this.crew.length; i++){
              if(this.crew[i].id == 25 && healthInc){
                //console.log("undo damage boost")
                this.crew[i].origPower -= 1                      
                this.crew[i].power = this.crew[i].origPower                      
              }
            }          
            this.removeTint();  
            this.stopExhaustAnim(); 
            this.checkExhaustedCount();
            this.checkIncomingDamage();  
                            
            
          }
          //this.checkExhaustedCount();
       
        }  
        , nothing: function(){

        }     
        , spinWheel: function(){

                  this.chatTimer = 1;
                  this.tutorialPause = true; 

            var wheelTween =  this.add.tween(this.curseWheel).to( { y:this.game.height/2}, 1000, Phaser.Easing.Bounce.Out, true);     
            var wheelArrowTween =  this.add.tween(this.curseWheelArrow).to( { y:this.game.height/2}, 1000, Phaser.Easing.Bounce.Out, true);      
            wheelTween.onComplete.addOnce(function(){
              this.game.plugins.screenShake.shake(15)
              //this.curseWheelArrow.y = this.curseWheel.y
              this.timer = this.game.time.create(true);
              this.timer.add(1000, function(){
                this.curseWheel.spinning = 1
                this.curseWheel.angleSpeed = 1000                
                var angleTar = Math.floor(Math.random() * 360)
                
                var curseSpin =  this.add.tween(this.curseWheel).to( { angleSpeed:0}, 3000, Phaser.Easing.Elastic.In, true);      
                curseSpin.onComplete.addOnce(function(){

                  var curseTween =  this.add.tween(this.curseWheel).to( { angle:angleTar}, 500, Phaser.Easing.Elastic.Out, true);      
                  curseTween.onComplete.addOnce(function(){
                    this.curseWheel.spinning = 0;
                    this.timer = this.game.time.create(true);
                    if(this.spinSnd.isPlaying){
                      this.spinSnd.stop()
                    } 
                    this.evilLaughSnd.play()
                    this.game.plugins.screenShake.shake(30)
                    this.timer.add(3000, function(){



                      if(angleTar >= 180 && angleTar <= 360){
                        //add fury
                        this.notyf.error('CREEPS GROW STRONGER!');
                        for(var i = 0; i < this.boardHeight; i++){
                          for(var j = 0; j < this.boardWidth; j++){      
                            if(this.tile[''+j+i].isEnemyHere && this.tile[''+j+i].monID != 99 && this.tile[''+j+i].monID != 102 && this.tile[''+j+i].monID != 103){
                              
                              this.spawnBuff(this.tile[''+j+i],'buff_attack');
                              this.tile[''+j+i].statsHistory += "\n\n▪ CURSED: +1 FURY FROM CURSE TRIGGER"
                              //this.tile[''+j+i].statsHistory += "\n\n▪ CURSED: +1 HEALTH FROM CURSE TRIGGER"
                              this.tile[''+j+i].power++
                              //this.tile[''+j+i].hp++

                              
                            }
                                  
                          }
                        }
                      }
                      else if(angleTar >= 91 && angleTar < 180){
                        //buff health
                        this.notyf.error('CREEPS GET MORE HEALTH');
                        for(var i = 0; i < this.boardHeight; i++){
                          for(var j = 0; j < this.boardWidth; j++){      
                            if(this.tile[''+j+i].isEnemyHere && this.tile[''+j+i].monID != 99 && this.tile[''+j+i].monID != 102 && this.tile[''+j+i].monID != 103){
                              
                              this.spawnBuff(this.tile[''+j+i],'buff_health');
                              //this.tile[''+j+i].statsHistory += "\n\n▪ CURSED: +1 FURY FROM CURSE TRIGGER"
                              this.tile[''+j+i].statsHistory += "\n\n▪ CURSED: +1 HEALTH FROM CURSE TRIGGER"
                              //this.tile[''+j+i].power++
                              this.tile[''+j+i].hp++

                              
                            }
                                  
                          }
                        }                          
                      }
                      else if(angleTar >= 0 && angleTar <= 90){
                        //hurt captain
                        this.notyf.error('THE CURSE HURTS THE CAPTAIN');
                        this.cap_healthValue -= 5;  
                        for(var i = 0; i< this.cap_healthText2.length; i++){
                          if(this.cap_healthText2[i].alpha == 0 ){
                            this.cap_healthText2[i].alpha = 0
                            this.add.tween(this.cap_healthText2[i]).from( { alpha:1}, 2000, Phaser.Easing.Default, true);     

                            this.cap_healthText2[i].y = this.cap_healthText.y-100
                            this.add.tween(this.cap_healthText2[i]).from( { y:this.cap_healthText.y}, 2000, Phaser.Easing.Default, true);                        

                            this.cap_healthText2[i].text = "-5"
                    
                            i = this.cap_healthText2.length;
                          }
                        }              

                        //captain hurt effects
                        for(var z = 1; z < this.crew.length; z++){
                          if(this.crew[z].id == 25){
                            this.crew[z].origPower += 1

                            this.crew[z].powerUpParticle.x = this.crew[z].powerText.x
                            this.crew[z].powerUpParticle.y = this.crew[z].powerText.y
                            this.crew[z].powerUpParticle.makeParticles('sparkle');
                            this.crew[z].powerUpParticle.setScale(1, 1, 1, 1);                  
                            this.crew[z].powerUpParticle.maxParticleSpeed.set(100,100);
                            this.crew[z].powerUpParticle.explode(500);   
                            var ranPhrase = Math.floor(Math.random() * 2)
                            if(ranPhrase == 0){
                              this.crewSpeak(z,"Captain! No!", quickspeechTimerBase)

                            }
                            else{
                              this.crewSpeak(z,"Defend the Captain!", quickspeechTimerBase)

                            }     
                                      
                            
                          }
                          for(var i = 0; i < this.boardHeight; i++){
                            for(var j = 0; j < this.boardWidth; j++){  
                              if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == 25){
                                this.spawnBuff(this.tile[''+j+i],'buff_attack');
                                
                                //this.tile[''+j+i].power += 1 
                                                                
                                
                              }
                            }
                          }               


                        }                          
                      }                        


                    }, this);     
                    this.timer.start(); 
                    this.timer2 = this.game.time.create(true);
                    this.timer2.add(2000, function(){
                      
                      this.chatTimer = 0;
                      this.tutorialPause = false;                                           
                      var wheelArrowTween2 =  this.add.tween(this.curseWheelArrow).to( { y:-this.game.height}, 1000, Phaser.Easing.Bounce.Out, true);   
                      var wheelTween2 =  this.add.tween(this.curseWheel).to( { y:-this.game.height}, 1000, Phaser.Easing.Bounce.Out, true);  
                      wheelTween2.onComplete.addOnce(function(){     
                        
                        var curseTween =  this.add.tween(this.chestUI).to( { y:this.chestUI.origY}, 1000, Phaser.Easing.Bounce.Out, true);   
                        curseTween.onComplete.addOnce(function(){
                          this.chestMeterBar.target = 0;
                        }, this);   
                        curseTween.start();    
                      },this);                       
                      wheelTween2.start()
                      wheelArrowTween2.start()

                   

                      this.chestUI

                    }, this);     
                    this.timer2.start(); 


                  },this);
                  curseTween.start()

                },this);          

                curseSpin.start(); 
              },this);
              this.timer.start();                  

            },this);
            wheelTween.start()
            wheelArrowTween.start()
                      
              
        } 
        , snapShot: function(){

          
          this.placeOrderTrackerHolder = this.placeOrderTracker;
          //track captain power boosts
          this.tileHolder[this.undoCounter].extraAttackFromCaptain = this.extraAttackFromCaptain
          this.tileHolder[this.undoCounter].captainPowerActivated = this.captainPowerActivated
          
          //track captain rose power boosts
          var steelHolder = 0;
          for(var z = 1; z < this.crew.length; z++){
            if(this.crew[z].holderPower[10] > 0){
              steelHolder = 1
            }
          }             
          this.tileHolder[this.undoCounter].steelcaptainPower = steelHolder

        //track captain savvy
        this.tileHolder[this.undoCounter].deploy_poolCurrentHolder = this.deploy_poolCurrent

        //track captain health
        this.tileHolder[this.undoCounter].healthCurrentHolder =this.cap_healthValue

          for(var m = 0; m < this.boardHeight; m++){
            for(var l = 0; l < this.boardWidth; l++){  
              //var textureName = this.tile[''+l+m].texture.baseTexture.source.attributes[0].nodeValue
              ////console.log(this.tile[''+l+m].texture.baseTexture.source.attributes[0].nodeValue)
              this.tileHolder[this.undoCounter][''+l+m].textureName = this.tile[''+l+m].texture.baseTexture.source.attributes[0].nodeValue
              this.tileHolder[this.undoCounter][''+l+m].isCrewHere = this.tile[''+l+m].isCrewHere 
              this.tileHolder[this.undoCounter][''+l+m].crewID = this.tile[''+l+m].crewID
              this.tileHolder[this.undoCounter][''+l+m].isEnemyHere = this.tile[''+l+m].isEnemyHere
              this.tileHolder[this.undoCounter][''+l+m].monID = this.tile[''+l+m].monID
              this.tileHolder[this.undoCounter][''+l+m].isFlipping = this.tile[''+l+m].isFlipping

              this.tileHolder[this.undoCounter][''+l+m].hp = this.tile[''+l+m].hp
              this.tileHolder[this.undoCounter][''+l+m].power = this.tile[''+l+m].power

              this.tileHolder[this.undoCounter][''+l+m].submerged = this.tile[''+l+m].submerged

              this.tileHolder[this.undoCounter][''+l+m].smokeVal = this.tile[''+l+m].smoke.on

              this.tileHolder[this.undoCounter][''+l+m].helpVal = this.tile[''+l+m].help.on         
              
              this.tileHolder[this.undoCounter][''+l+m].placeOrder = this.tile[''+l+m].placeOrder

              this.tileHolder[this.undoCounter][''+l+m].statsHistory = this.tile[''+l+m].statsHistory

              this.tileHolder[this.undoCounter][''+l+m].sparkleValue2 = this.tile[''+l+m].sparkle2.alpha
              this.tileHolder[this.undoCounter][''+l+m].sparkleValue = this.tile[''+l+m].sparkle.alpha

              this.tileHolder[this.undoCounter][''+l+m].exhausted = this.tile[''+l+m].exhausted
              this.tileHolder[this.undoCounter][''+l+m].origPower = this.tile[''+l+m].origPower
              this.tileHolder[this.undoCounter][''+l+m].multiAttack = this.tile[''+l+m].multiAttack


              
            }
          }
          this.setupNextStateHolder();
          ////console.log(this.undoCounter)
                           
        }
        , setupNextStateHolder(){
          this.undoCounter++
          this.tileHolder[this.undoCounter] = []          
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){
              
              
              this.tileHolder[this.undoCounter][''+j+i] = new Object();
            }

          }
        }
        , addIncomingDamage: function(enemy){
          
          if(enemy.origmultiAttack > 0){
            this.incomingTotal += (parseInt(enemy.power))*(enemy.origmultiAttack+1)
          }
          else{
            this.incomingTotal += parseInt(enemy.power)
          }   
          
          ////console.log("enemy damage "+((parseInt(enemy.power))*(enemy.origmultiAttack+1)))
          ////console.log("adding damage "+this.incomingTotal)
        }
        , removeIncomingDamage: function(enemy){
          if(enemy.origmultiAttack > 0){
            this.incomingTotal -= (parseInt(enemy.power))*(enemy.origmultiAttack+1)
          }
          else{
            this.incomingTotal -= parseInt(enemy.power)
          }           
          if(this.incomingTotal < 0){
            this.incomingTotal= 0;
          }    
          ////console.log("remove damage "+this.incomingTotal)
        }        
        , openChestNow: function (){

          //spawn treasures
          this.hideDetails()
          this.getTileDetails = false;
          this.getCapDetails = false;              
          //this.chatTimerCount = chatTimerBase;
          //this.monKillCount--

          if(this.chatTimer != 1){
            for (var ii = 0; ii < 3; ii++){
              this.treasureOptions[ii].rarity = Math.floor(Math.random() * 6)+1;

              var ran = Math.floor(Math.random() * 6)+1
              switch(ran){
                case 1:
                  this.treasureOptions[ii].selectedCrew1 = 1
                  this.treasureOptions[ii].selectedCrew2 = 2
                  break;
                case 2:
                  this.treasureOptions[ii].selectedCrew1 = 3
                  this.treasureOptions[ii].selectedCrew2 = 4                  
                  break; 
                case 3:
                  this.treasureOptions[ii].selectedCrew1 = 1
                  this.treasureOptions[ii].selectedCrew2 = 4                  
                  break; 
                case 4:
                  this.treasureOptions[ii].selectedCrew1 = 2
                  this.treasureOptions[ii].selectedCrew2 = 3                  
                  break;   
                case 5:
                  this.treasureOptions[ii].selectedCrew1 = 2
                  this.treasureOptions[ii].selectedCrew2 = 4                  
                  break;   
                case 6:
                  this.treasureOptions[ii].selectedCrew1 = 1
                  this.treasureOptions[ii].selectedCrew2 = 3                  
                  break;
                case 7:
                  //this.treasureOptions[ii].selectedCrew1 = 10
                  //this.treasureOptions[ii].selectedCrew2 = 3                  
                  break;                                                                                                              
              }
              //this.treasureOptions[ii].selectedCrew = ran

              if(rand == 0){
                this.treasureOptions[ii].rarity = 2
              }
              else{
                this.treasureOptions[ii].rarity = 1
              }                

              if(this.chestCount % uncommonChestBreak == 0){
                var rand = Math.floor(Math.random() * 5)
                if(rand == 0){
                  this.treasureOptions[ii].rarity = 3
                }
                else if(rand >= 1 && rand < 4){
                  this.treasureOptions[ii].rarity = 2
                }
                else{
                  this.treasureOptions[ii].rarity = 1
                }
                //this.treasureOptions[i].rarity = Math.floor(Math.random() * 2)+2;
              }
              
              if(this.chestCount % rarenChestBreak == 0){
                var rand = Math.floor(Math.random() * 5)
                if(rand == 0){
                  this.treasureOptions[ii].rarity = 2
                }
                else{
                  this.treasureOptions[ii].rarity = 3
                }
              }             


              var ranTVal = Math.floor(Math.random() * 4)+1
              this.treasureOptions[ii].treasureItemVal = Math.floor(Math.random() * 9)+1;
              this.treasureOptions[ii].curseVal = Math.floor(Math.random() * 9)+1;

              //scale down monster types based on rarity
              if(this.treasureOptions[ii].rarity == 1){
                

                if(this.treasureOptions[ii].curseVal == 2 || this.treasureOptions[ii].curseVal == 5 || this.treasureOptions[ii].curseVal == 8){
                  this.treasureOptions[ii].curseVal--;
                }

                if(this.treasureOptions[ii].curseVal == 3 || this.treasureOptions[ii].curseVal == 6 || this.treasureOptions[ii].curseVal == 9){
                  this.treasureOptions[ii].curseVal-=2;
                }                  
                              
              }

              if(this.treasureOptions[ii].rarity == 2){

                if(this.treasureOptions[ii].curseVal == 3 || this.treasureOptions[ii].curseVal == 6 || this.treasureOptions[ii].curseVal == 9){
                  this.treasureOptions[ii].curseVal-=2;
                }                  
                              
              }          
              if(this.treasureOptions[ii].rarity == 1){
                this.treasureOptions[ii].boonVal = Math.floor(Math.random() * 5);    
              }
              else if(this.treasureOptions[ii].rarity == 2){
                this.treasureOptions[ii].boonVal = Math.floor(Math.random() * 5)+7;    
              }
              else{
                this.treasureOptions[ii].boonVal = Math.floor(Math.random() * 7)+14;    
              }
                 

            // always savvy on first chest
            if(this.turnCountNum == 2){
              //alert(this.treasureOptions[0].boonVal+"-"+this.treasureOptions[1].boonVal)
              this.treasureOptions[1].boonVal = 1

            } 
            // no bombs til after tutorial
            if (parseInt(localStorage.getItem("intro")) <= 11) {
              if(this.treasureOptions[ii].boonVal == 3){
                //this.treasureOptions[ii].boonVal = 2;
              }
            }               
    
            }
             

          }
          this.chatTimer = 1;
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