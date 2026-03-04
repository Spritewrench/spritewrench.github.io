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
            

            this.bg3 = this.add.sprite(0, 0, 'bgOverlay3');
            this.bg3.alpha = 0
            this.bg3.width = this.game.width
            this.bg3.height = this.game.height                
            

            this.bg2 = this.add.sprite(0, 0, 'ui_back');
            this.bg2.width = this.game.width
            this.bg2.height = this.game.height                
            
            this.selectInfo = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            this.selectInfo.width = this.game.width
            this.selectInfo.height = this.game.height   
            this.selectInfo.alpha = 0;

            this.selectInfoDetail = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            this.selectInfoDetail.width = this.game.width
            this.selectInfoDetail.height = this.game.height               

            this.capKey = parseInt(localStorage.getItem("captain"));
            if(quickStart){
              this.capKey = 1
            }            
            this.capInfo = this.add.sprite(-this.game.width, 0, 'capInfoPanel'+(this.capKey));
            this.capInfo.width = this.game.width
            this.capInfo.height = this.game.height               
            
            this.capInfoStat = this.add.sprite(-this.game.width, 0, 'capInfoPanel_privateer');
            this.capInfoStat.width = this.game.width
            this.capInfoStat.height = this.game.height
            
            
            var fragmentSrc = [

              "precision mediump float;",

              "uniform float     time;",
              "uniform vec2      resolution;",
              "uniform sampler2D iChannel0;",

              "varying vec2       vTextureCoord;",
              "varying vec4       vColor;",
              "uniform sampler2D  uSampler;",
      
              "void main( void ) {",
                  "vec2 uv = gl_FragCoord.xy / resolution.xy;",

                  "float fixedBasePosY = 0.8;",
                  "float offsetX = (sin((uv.x + (time * 0.15)) * 24.0) * 0.01);",
                  
                  "uv.y += offsetX*(uv.y-fixedBasePosY);",
                  "vec4 texColor = texture2D(iChannel0, uv);",
                  "gl_FragColor = texColor;",
      
              "}"

          ];
  
  

  var customUniforms = {
      iChannel0: { type: 'sampler2D', value: this.capInfo, textureData: { repeat: true } }
  };
 
  this.filter = new Phaser.Filter(this, customUniforms, fragmentSrc);
  this.filter.setResolution(this.game.width, this.game.height);
  //this.filter.uniforms.iChannel0.value = this.capInfo.texture;


  this.capInfo.filters = [ this.filter ];
  this.capInfoStat.filters = [ this.filter ];
  this.selectInfoDetail.filters = [ this.filter ];   
           
            
            //#7E615F
            this.selectName = this.add.text(this.selectInfo.x+this.selectInfo.width-100,210, '10', {font: '50px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.selectName.anchor.setTo(0.5, 0.5);    
            this.selectName.stroke = '#232727';
            this.selectName.strokeThickness = 10;       

            this.selectStats = this.add.text(this.selectInfo.x+this.selectInfo.width-100,this.game.height-340, '10', {font: '28px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 200  });
            this.selectStats.anchor.setTo(0.5, 0.5); 
            this.selectStats.inputEnabled = true;
            this.selectStats.events.onInputOver.add(this.updatetoolTip, this);       
            this.selectStats.stroke = '#232727';
            this.selectStats.strokeThickness = 5;         
                     



            this.selectAbility = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-370, '10', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left'});
            //this.selectAbility.anchor.setTo(0.5, 0.5); 

                           
            
            this.cap_health = this.add.sprite(80, this.game.height-450, 'ui_cap_health');
            this.cap_health.anchor.setTo(0.5, 0.5);
            this.cap_health.width = 150
            this.cap_health.height = 150
            this.cap_healthText = this.add.text(this.cap_health.x,this.cap_health.y, '10', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.cap_healthText.anchor.setTo(0.5, 0.5);

            this.cap_healthText2 = this.add.text(this.cap_health.x,this.cap_health.y, '10', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.cap_healthText2.anchor.setTo(0.5, 0.5);
            this.cap_healthText2.alpha = 0;

            this.cap_health.origWidth = this.cap_health.width
            this.cap_health.origHeight = this.cap_health.height
            this.cap_healthValue = 15;        
            
            

            this.cap_ultCost = 1;

            this.deploy_pool = this.add.sprite(500, this.game.height-450, 'ui_deploy_pool');
            this.deploy_pool.anchor.setTo(0.5, 0.5);
            this.deploy_pool.width = 150
            this.deploy_pool.height = 150            
            this.deploy_poolText = this.add.text(this.deploy_pool.x,this.deploy_pool.y+5, '3/3', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.deploy_poolText.anchor.setTo(0.5, 0.5);   
            
            
            //to be determined by selected ship(???)
            
            this.deploy_poolCurrent = 3;
            this.deploy_poolMax = this.deploy_poolCurrent 


            this.exit_Button_outline = this.add.sprite(35, 75, 'ui_clear_button_outline');            
            this.exit_Button_outline.anchor.setTo(0.5, 0.5);
            this.exit_Button_outline.width = 55
            this.exit_Button_outline.height = 55            
            this.exit_Button_outline.alpha = 0;

            this.exit_Button = this.add.sprite(35, 75, 'crewRemove');            
            this.exit_Button.inputEnabled = true;
            this.exit_Button.anchor.setTo(0.5, 0.5);
            this.exit_Button.width = 50
            this.exit_Button.height = 50
            this.exit_Button.events.onInputDown.add(this.exitVoyage, this);     
            this.exit_Button.events.onInputOver.add(this.showOutline5, this);  
            this.exit_Button.events.onInputOut.add(this.hideOutline5, this);   


            this.clear_Button_outline = this.add.sprite(this.game.width/2-415, this.game.height-200, 'ui_clear_button_outline');            
            this.clear_Button_outline.anchor.setTo(0.5, 0.5);
            this.clear_Button_outline.width = 105
            this.clear_Button_outline.height = 105            
            this.clear_Button_outline.alpha = 0;

            this.clear_Button = this.add.sprite(this.game.width/2-415, this.game.height-150+35, 'ui_clear_button');            
            this.clear_Button.inputEnabled = true;
            this.clear_Button.anchor.setTo(0.5, 0.5);
            this.clear_Button.width = 100
            this.clear_Button.height = 100
            this.clear_Button.events.onInputDown.add(this.clearBoard, this);     
            this.clear_Button.events.onInputOver.add(this.showOutline1, this);  
            this.clear_Button.events.onInputOut.add(this.hideOutline1, this);               


            this.endTurn_Button_outline = this.add.sprite(this.game.width-275, this.game.height-125,'ui_endTurn_Button_outline');               
            this.endTurn_Button_outline.alpha = 0;
            this.endTurn_Button_outline.anchor.setTo(0.5, 0.5);  


            this.endTurn_Button = this.add.sprite(this.game.width-275, this.game.height-125, 'ui_endTurn_Button'); 
            this.endTurn_Button.origWidth = this.endTurn_Button.width
            this.endTurn_Button.origHeight = this.endTurn_Button.height

            this.endTurn_Button.anchor.setTo(0.5, 0.5);            
            this.endTurn_Button.inputEnabled = true;
            this.endTurn_Button.events.onInputDown.add(this.endDeployPhase, this);   
            this.endTurn_Button.events.onInputOver.add(this.showOutline2, this);  
            this.endTurn_Button.events.onInputOut.add(this.hideOutline2, this);              

            this.ult_text = this.add.text(290,this.game.height-350, 'BOOST THE POWER OF ALL STEEL-TYPE CREW BY +1', {font: '28px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 250  });
            this.ult_text.anchor.setTo(0.5, 0.5);
            this.ult_text.angle = 0
            this.ult_text.stroke = '#232727';
            this.ult_text.strokeThickness = 5;  
            this.ult_text.inputEnabled = true;
            this.ult_text.events.onInputOver.add(this.updatetoolTip, this);
            this.ult_text.events.onInputOut.add(this.unShowInfo, this);      
            
            

            this.ult_text.text = captain[this.capKey].ult_text
            this.cap_healthValue = captain[this.capKey].cap_healthValue
            this.deploy_poolCurrent = captain[this.capKey].deploy_poolCurrent
            this.deploy_poolMax = this.deploy_poolCurrent                 
            this.cap_ultCost = captain[this.capKey].cap_ultCost

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
            
            this.ult_Button = this.add.sprite(-this.game.width,  this.game.height-125, 'ui_ult_buttonReady1'); 
            this.ult_Button.anchor.setTo(0.5, 0.5);           
            this.ult_Button.inputEnabled = true;
            this.ult_Button.events.onInputDown.add(this.captainUlt, this);   
            this.ult_Button.events.onInputOver.add(this.showOutline3, this);  
            this.ult_Button.events.onInputOut.add(this.hideOutline3, this);  
            
            this.ult_Button_hover = this.add.sprite(-this.game.width,  this.game.height-125, 'ui_ult_button_outline_noHover'); 
            this.ult_Button_hover.anchor.setTo(0.5, 0.5);    
            //this.ult_Button.width =500/1.5
            //this.ult_Button.height = 200/1.5    

           

            this.ult_ButtonText = this.add.text(this.ult_Button.x,this.ult_Button.y-50, '3/3', {font: '48px LondrinaSolid-Black',fill: '#232727', align: 'center'});
            this.ult_ButtonText.anchor.setTo(0.5, 0.5);              
            
            this.bountytext = this.add.text(this.capInfo.x-75,this.capInfo.y+200, 'REWARD', {font: '64px LondrinaSolid-Black',fill: '#000', align: 'center'});
            this.bountytext.anchor.setTo(0.5, 0.5);       
            //this.bountytext.angle = 3      

            text = text.split("");
            var textKey = 0;

            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            this.input.onDown.add(this.onDown, this);
            this.tileHolder = [];
            this.tile = [];
            this.tileSplash = []
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

          //this.crewOrder = []
          this.placeOrderKey = 0;
          this.placeOrderTracker = 0;

         
   
          
          


          var distX = 0;
          var distY = 0;
          for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){
                
                this.tile[''+j+i] = this.add.sprite(x+distX, y+distY+25, 'tile');
                //this.tile[''+j+i].filters = [ this.filter ];
                this.tile[''+j+i].origX = this.tile[''+j+i].x;
                this.tile[''+j+i].origY = this.tile[''+j+i].y;
                this.tile[''+j+i].origX2 = this.tile[''+j+i].x;
                this.tile[''+j+i].origY2 = this.tile[''+j+i].y;    


                
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
                this.tile[''+j+i].events.onInputDown.add(this.placeCrew, this);         
                this.tile[''+j+i].events.onInputOver.add(this.showAttackRange, this);  
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
                

                //will die?
                this.tile[''+j+i].willDie = this.add.sprite(this.tile[''+j+i].x, this.tile[''+j+i].y, 'willDie');
                this.tile[''+j+i].willDie.anchor.setTo(0.5, 0.5);  
                this.tile[''+j+i].willDie.alpha = 0;     
              
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
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){
              
              this.tileHolder[''+j+i] = this.add.sprite(x+distX, y+distY+25, 'splash');
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

          this.monsterPool = []
          for(var i = 1 ; i < 10; i++){
            this.collectedTreasure[i] = this.add.sprite(((this.game.width/2)+420)+distX , 80, 'treasureUI_'+i);
            this.collectedTreasure[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasure[i].width = 75
            this.collectedTreasure[i].height = 75
            this.collectedTreasure[i].alpha = 0.3;

            this.collectedTreasureText[i] = this.add.text(this.collectedTreasure[i].x+20,this.collectedTreasure[i].y+20, 'x0', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.collectedTreasureText[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasureText[i].alpha = 0;
            this.collectedTreasureText[i].stroke = '#232727';
            this.collectedTreasureText[i].strokeThickness = 5;               

            this.collectedTreasure[i].count = 0;

            this.monsterPool[i] = new Object();
            this.monsterPool[i].count = 0;
            //this.collectedTreasure[i].alpha = 0;    
            distX +=  spacing        
          }

         

          
          //crew 

          

          var distX = -100;
          var size = 150
          var space = 10
          this.crew = []
          this.crewRemove = []
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


          this.crewCode =""//localStorage.getItem("crewCode")
          switch(this.capKey){
            case 1:
              this.crewCode ="99-90-91-92-5"
              break;
            case 2:
              this.crewCode ="100-93-94-95-5"
              break;
            case 3:
              this.crewCode ="101-96-97-98-5"
              break;
          }
          if(quickStart){
            this.crewCode ="99-90-91-92-5"
          }
          if (parseInt(localStorage.getItem("intro")) == 1 ) {
            //this.crewCode ="1-90-91-92-5"
          }          

          var crewMates = this.crewCode.split("-");

          


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

          this.turnMarkerText = this.add.text(this.turnMarker.x-100,this.turnMarker.y, 'ENEMY PHASE', {font: '120px LondrinaSolid-Black',fill: '#fff', align: 'center'});
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

          this.turnCountText = this.add.text(this.game.width/2,80, '', {font: '34px LondrinaSolid-Black',fill: '#fff', align: 'left'});
          this.turnCountText.anchor.setTo(0, 0.5);  
          this.turnCountText.stroke = '#232727';
          this.turnCountText.strokeThickness = 5;               
          this.turnCountNum = 0 
          
 

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
          
          this.monCountUI = this.add.sprite(this.game.width/2-60, 80, 'monCount');
          this.monCountUI.anchor.setTo(0.5, 0.5);  
          this.monCountUI.width = 100
          this.monCountUI.height = 100   

          if(parseInt(localStorage.getItem("intro")) == 1){
            this.monCountValue = 25
            this.loopable = false;
          } 
          else{
            this.monCountValue = parseInt(localStorage.getItem("targetMonCount")) 
            this.loopable = true;
          }   
          this.monCountValue = 30//parseInt(localStorage.getItem("targetMonCount")) 
          //this.monCountValue = 3;
          this.monKillCount = 0; 
          

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
          
          this.attackParticleCount = 100
          this.attackParticle = [];
          for(var i = 0; i < this.attackParticleCount; i++){
            this.attackParticle[i] = this.add.sprite(100, 100, 'attackVFX');
            this.attackParticle[i].anchor.setTo(0.5, 0.5);  
            //this.attackParticle[i].width = 50
            //this.attackParticle[i].height = 50
            this.attackParticle[i].alpha = 0;
          }             
          

          this.overlay = this.add.sprite(0, 0, 'bgOverlay1');
          //this.overlay.width = this.game.width
          //this.overlay.height = this.game.height      
          this.overlay.alpha = 0;    

          this.reRoll_Button_outline = this.add.sprite(this.game.width/2-415, this.game.height-200, 'ui_clear_button_outline');            
          this.reRoll_Button_outline.anchor.setTo(0.5, 0.5);
          this.reRoll_Button_outline.width = 105
          this.reRoll_Button_outline.height = 105            
          this.reRoll_Button_outline.alpha = 0;          

          this.reRoll_Button = this.add.sprite(this.game.width/2-415, this.game.height+200, 'ui_reroll_button');            
          this.reRoll_Button.inputEnabled = true;
          this.reRoll_Button.anchor.setTo(0.5, 0.5);
          this.reRoll_Button.width = 100
          this.reRoll_Button.height = 100
          this.reRoll_Button.events.onInputDown.add(this.reroll, this);   
          this.reRoll_Button.events.onInputOver.add(this.showOutline4, this);  
          this.reRoll_Button.events.onInputOut.add(this.hideOutline4, this);   
          
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

          this.removeCrewSkip_Button = this.add.sprite(this.game.width/2-615, this.game.height+200, 'buttonNo');            
          this.removeCrewSkip_Button.anchor.setTo(0.5, 0.5);
          this.removeCrewSkip_Button.origWidth = this.removeCrew_Button.width
          this.removeCrewSkip_Button.origHeight =this.removeCrew_Button.height
          this.removeCrewSkip_Button.width = this.removeCrewSkip_Button.width*0.75;
          this.removeCrewSkip_Button.height = this.removeCrewSkip_Button.height*0.75;
          this.removeCrewSkip_Button.inputEnabled = true;
          this.removeCrewSkip_Button.events.onInputDown.add(this.skipPlank, this);   
          
          this.removeCrewSkip_Button_Text = this.add.text( this.removeCrewSkip_Button.x,this.removeCrewSkip_Button.y-5, 'Skip', {font: '34px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.removeCrewSkip_Button_Text.anchor.setTo(0.5, 0.5); 
          this.removeCrewSkip_Button_Text.stroke = '#232727';
          this.removeCrewSkip_Button_Text.strokeThickness = 3;            
          this.removeCrewSkip_Button_Text.alpha = 0;          
          
          this.reRoll_Text = this.add.text( this.reRoll_Button.x+25,this.reRoll_Button.y+20, '1', {font: '45px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.reRoll_Text.anchor.setTo(0.5, 0.5); 
          this.reRoll_Text.stroke = '#232727';
          this.reRoll_Text.strokeThickness = 10; 
           

          this.reRoll_Counter = rerollBase;

          this.gatheredChest = this.add.sprite(115, 35, 'gatheredChests');                       
          
          this.gatheredChest_Text = this.add.text( this.gatheredChest.x+25,this.gatheredChest.y+80, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.gatheredChest_Text.anchor.setTo(0.5, 0.5); 
          this.gatheredChest_Text.stroke = '#232727';
          this.gatheredChest_Text.strokeThickness = 8;   
          
          this.gatheredChest_Ticker = this.add.text( this.gatheredChest_Text.x,this.gatheredChest_Text.y, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.gatheredChest_Ticker.anchor.setTo(0.5, 0.5); 
          this.gatheredChest_Ticker.stroke = '#232727';
          this.gatheredChest_Ticker.strokeThickness = 8;      
          this.gatheredChest_Ticker.alpha = 0;     
          
          this.gatheredSouls = this.add.sprite(215, 35, 'gatheredSouls');                       
          
          this.gatheredSouls_Text = this.add.text( this.gatheredSouls.x+25,this.gatheredSouls.y+80, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.gatheredSouls_Text.anchor.setTo(0.5, 0.5); 
          this.gatheredSouls_Text.stroke = '#232727';
          this.gatheredSouls_Text.strokeThickness = 8;         
          
          this.gatheredSouls_Ticker = this.add.text( this.gatheredSouls_Text.x,-1000, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.gatheredSouls_Ticker.anchor.setTo(0.5, 0.5); 
          this.gatheredSouls_Ticker.stroke = '#232727';
          this.gatheredSouls_Ticker.strokeThickness = 8;      
          this.gatheredSouls_Ticker.alpha = 0;               

          for(var i = 1; i < 6; i++){
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
            
            this.crew[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crew_blank');
            this.crew[i].anchor.setTo(0.5, 0.5);
            this.crew[i].width = size;
            this.crew[i].height = size;    
            this.crew[i].id = parseInt(crewMates[i-1])
            this.crew[i].isBlank = true;
            if(crewMates[i-1] != 0){
              this.crew[i].loadTexture("crew-"+this.crew[i].id)
              this.crew[i].isBlank = false;
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

            this.crew[i].powerText = this.add.text(this.crew[i].x+(this.size/2)-8,this.crew[i].y+(size/2)-3, '', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crew[i].powerText.anchor.setTo(0.5, 0.5);       
            this.crew[i].powerText.stroke = '#232727';
            this.crew[i].powerText.strokeThickness = 5;                          
              



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
            
                
            console.log(i)
            console.log(this.crew[i])
            this.crew[i].deployText.text = this.crew[i].deployCost
            this.crew[i].powerText.text = this.crew[i].power

            this.crew[i].holdText = this.crew[i].texture
            
            this.crew[i].inputEnabled = true;
            this.crew[i].events.onInputDown.add(this.crewSelected, this);              
            this.crew[i].events.onInputOver.add(this.showInfo, this);

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
            this.crew[i].splash.alpha = 0;
            this.crew[i].splash.alphaTimer = 0;     
            this.crew[i].splash.width =  this.crew[i].width+50 
            this.crew[i].splash.height = this.crew[i].height+50            

            distX += (size+space)
          }       

          this.freeCounter.x = this.crew[5].x+10
          this.freeCounter.y = this.crew[5].y-50
          this.freeCounterText.x = this.freeCounter.x-5
          this.freeCounterText.y = this.freeCounter.y-20
          this.freeCounterText2.x = this.freeCounter.x-5
          //this.freeCounterText2.y = this.freeCounter.y-25          
          this.freeCounterText.angle = -15
          this.freeCounterText2.angle = -15

          this.overlayText = this.add.text(this.game.width/2,100, 'CHOOSE', {font: '64px Kaph-Regular',fill: '#fff', align: 'center'});
          this.overlayText.anchor.setTo(0.5, 0.5);     
          this.overlayText.alpha = 0;      

          this.treasureOptions = []
          distX = -450
          spacing = 650;
          
          
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
            
 
            
            

            this.treasureOptions[i].treasureItem = this.add.sprite(x+distX, this.game.height*10 , 'treasure_1');
            this.treasureOptions[i].treasureItem.anchor.setTo(0.5, 0.5);
            this.treasureOptions[i].treasureItem.alpha = 0;
            this.treasureOptions[i].treasureItem.origX = this.treasureOptions[i].x
            this.treasureOptions[i].treasureItem.origY = this.treasureOptions[i].y
            this.treasureOptions[i].treasureItem.targetY = 150+this.game.height/3
            this.treasureOptions[i].treasureItem.origtargetY = 150+this.game.height/3

            this.treasureOptions[i].boon = this.add.sprite(x+distX, this.game.height*10 , 'treasure_1');
            this.treasureOptions[i].boon.anchor.setTo(0.5, 0.5);
            this.treasureOptions[i].boon.alpha = 0;
            this.treasureOptions[i].boon.origX = this.treasureOptions[i].x
            this.treasureOptions[i].boon.origY = this.treasureOptions[i].y
            this.treasureOptions[i].boon.targetY = 150+this.game.height/3
            this.treasureOptions[i].boon.origtargetY = 150+this.game.height/3

            this.treasureOptions[i].curse = this.add.sprite(x+distX, this.game.height*10 , 'treasure_1');     
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
            this.treasureOptions[i].curseInc.events.onInputDown.add(this.selectTreasure, this); 
            this.treasureOptions[i].curseInc.events.onInputOver.add(this.highLightAffect, this);
            this.treasureOptions[i].curseInc.events.onInputOut.add(this.unhighLightAffect, this);             

            distX += spacing
          }

          this.treasureSparkle = this.add.sprite(x+distX, this.game.height*10 , 'treasureSparkle');
          this.treasureSparkle.anchor.setTo(0.5, 0.5);
          this.treasureSparkle.alpha = 0;
          this.treasureSparkle.origWidth = this.treasureSparkle.width
          this.treasureSparkle.origHeight = this.treasureSparkle.height

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

            this.crewOptions[i].deployText = this.add.text( this.crewOptions[i].x-(size/2)+33,this.crewOptions[i].y+(size/2)-25, '', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOptions[i].deployText.anchor.setTo(0.5, 0.5); 
            this.crewOptions[i].deployText.stroke = '#232727';
            this.crewOptions[i].deployText.strokeThickness = 5;    
            this.crewOptions[i].deployText.alpha = 0;
            
            this.crewOptions[i].powerText = this.add.text(this.crewOptions[i].x+(this.size/2)-8,this.crewOptions[i].y+(size/2)-25, '', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOptions[i].powerText.anchor.setTo(0.5, 0.5);       
            this.crewOptions[i].powerText.stroke = '#232727';
            this.crewOptions[i].powerText.strokeThickness = 5;   
            this.crewOptions[i].powerText.alpha = 0;   


            this.crewOptions[i].statInc = this.add.sprite(x+distX, this.game.height/2-100, 'crewIncrease');
            this.crewOptions[i].statInc.anchor.setTo(0.5, 0.5);
            this.crewOptions[i].statInc.alpha = 0;                
            
            
            
            this.crewOptions[i].ability = this.add.text(this.crewOptions[i].x,this.crewOptions[i].y+150, ' ',{font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 200  });
            this.crewOptions[i].ability.anchor.setTo(0.5, 0.5);       
            this.crewOptions[i].ability.stroke = '#232727';
            this.crewOptions[i].ability.strokeThickness = 5;   
            this.crewOptions[i].ability.alpha = 0;   
            
            this.crewOptions[i].name = this.add.text(this.crewOptions[i].x,this.crewOptions[i].y-200, ' ',{font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 200  });
            this.crewOptions[i].name.anchor.setTo(0.5, 0.5);       
            this.crewOptions[i].name.stroke = '#232727';
            this.crewOptions[i].name.strokeThickness = 5;   
            this.crewOptions[i].name.alpha = 0;               
            
            
            
                      


            distX += spacing
          }          
        
          for(var i =1; i < 6; i++){
            this.crew[i].speechBubble = this.add.sprite(this.crew[i].x, this.crew[i].y-75, 'speechBubble');
            this.crew[i].speechBubble.anchor.setTo(0.5, 0.5); 
            this.crew[i].speechBubble.alpha = 0
            this.crew[i].speechBubble.origY = this.crew[i].speechBubble.y
            this.crew[i].speechBubbleText = this.add.text(this.crew[i].speechBubble.x-5,this.crew[i].speechBubble.y-80, 'Yo Ho', {font: '22px LondrinaSolid-Black',fill: '#232727', align: 'center',  wordWrap: true, wordWrapWidth: 250});
            this.crew[i].speechBubbleText.anchor.setTo(0.5, 0.5); 
            this.crew[i].speechBubbleText.alpha = 0;            
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

          this.freeCounterText2.y = this.crew[5].y-75 

          this.waveTimer = 20;
          this.waveTimerStart = this.waveTimer

          this.timer = 0
          

          this.tileHighlight = this.add.sprite(-100, -100, 'tileHighlight');
          this.tileHighlight.anchor.setTo(0.5, 0.5);
          this.tileHighlight.width = this.size;
          this.tileHighlight.height = this.size;       
          
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


          this.stoneSnd = []
          for(var i = 1; i <6;i++){
            this.stoneSnd[i] = this.add.audio('tileSnd-'+i);
            this.stoneSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
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
            this.hurtSnd[i] = this.add.audio('capHurt_fem'+i);
            this.hurtSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
          }               
          this.explodeSnd = this.add.audio('explodeSnd');
          this.explodeSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
          
          this.decideSnd = this.add.audio('decide');
          this.decideSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.3           


          this.highlightPing = this.add.audio('highlightPing');
          this.fightReady = this.add.audio('fightReady');
          
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

          this.escapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
          this.escapeKey.onDown.add(this.showOptions, this);     
          
          
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

          //this.key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
          //this.key5.onDown.add(this.addKarma, this);          

          this.tips = new Phasetips(this.game, {
            targetObject:  this.selectStats,
            context: "",
            fontSize: 14,
            strokeWeight: 3,
            roundedCornersRadius: 10,            
            position: "top",
            positionOffset: 0,
            padding: 75,
            x: this.game.width-600,
            y: this.game.height-280,        
            animation: "fade"
          }); 

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


          var ranStartMonster = Math.floor(Math.random() * 3)
          switch(ranStartMonster){
            case 0:
              this.monsterPool[1].count++      
              break;
            case 1:
              this.monsterPool[4].count++ 
              break;
            case 2:
              this.monsterPool[7].count++ 
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

          this.focusHere = this.add.sprite(0, 0, 'focusHere');
          this.focusHere.anchor.setTo(0.5, 0.5);
          this.focusHere.width = 300;
          this.focusHere.height = 300;
          this.focusHere.alpha = 0;
          this.focusHereTimer = 0;

          this.sosSelected = false;
          this.sosSelectedVal = 0;
        }
        , update: function () {

          this.monCountValue = this.monKillCount+25
          this.filter.update();
          
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
              for(var k = 1; k < 6; k++){
                  
                if(this.crew[k].id == 92 && this.crew[1].isDeployed && parseInt(localStorage.getItem("intro")) == 3){
                  localStorage.setItem("intro",4);
                  this.crewSpeak(k,"Now place me next to the Distress Flag!")
                  for(var m = 0; m < this.boardHeight; m++){
                    for(var l = 0; l < this.boardWidth; l++){  
                      if(this.tile[''+l+m].monID == 102){
                        this.setFocus(300,this.tile[''+l+m].x,this.tile[''+l+m].y)   
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
            this.gatheredChest.alpha = 0;
            this.gatheredChest_Text.alpha = 0;
            this.gatheredChest_Ticker.alpha = 0;
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
            this.gatheredSouls.alpha = 0;
            this.gatheredSouls_Text.alpha = 0;
            this.gatheredSouls_Ticker.alpha = 0;
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
          

          localStorage.setItem("bounty",this.bounty)
          this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1  

          this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

          for(var i = 1; i <6;i++){
            this.stoneSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
          }

          for(var i = 1; i <5;i++){
            this.splashSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          }        
          for(var i = 1; i <3;i++){
            this.attackSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
          }    
          for(var i = 1; i <3;i++){
            this.monAttackSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.3 
          }               
          for(var i = 1; i <=10;i++){
            this.hurtSnd[i].volume = parseInt(localStorage.getItem("sfxVol"))* 0.2 
          }         
          this.highlightPing.volume = parseInt(localStorage.getItem("sfxVol"))* 0.3    
          this.fightReady.volume = parseInt(localStorage.getItem("sfxVol"))* 0.2   
          this.explodeSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.4   
          this.decideSnd.volume = parseInt(localStorage.getItem("sfxVol"))* 0.3          
                    
          if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
            this.transWave.y += transSpeed
    
            if(this.transWave.y >= this.game.height&& this.transWaveKey == 0){

            }
          }
    
          if(this.transWaveKey == 1){
            this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
            if(this.transWave.y <= (-this.game.height+50)){
              this.game.state.start(this.transTar);
            }
          } 

          this.checkKeywords(this.selectStats)
          this.checkKeywords(this.ult_text)
          this.timer++
          if(this.timer > 5000){
            this.timer = 0
          }

          for(var m = 0; m < this.boardHeight; m++){
            for(var l = 0; l < this.boardWidth; l++){  



              
              
              
            }
          }            
          

          //this.smoke.x = this.game.input.mousePointer.x
          //this.smoke.y = this.game.input.mousePointer.y;
          
          if(this.hitStop <= 0){
            
            if(this.chatTimer == 0){
            
              
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
                  this.turnMarkerText.text = "DEPLOY PHASE"
                  this.turnMarker.alpha = 1;           
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
                  this.turnMarkerText.text = "DEPLOY PHASE"
                  this.turnMarker.alpha = 1;           
                  this.deploy_poolCurrent = this.deploy_poolMax;    
                  this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax  
                  this.turnWait = turnWaitBase;  
                  
                  
             
                  //this.phaseCounter--
                }                
              }
            


              //console.log(this.focusBotDiag.y+" "+this.game.height)
              
              
              var speed = 50
              if(this.ultKey > 0){
                this.ultKey--
                //trigger hero ability
                if(this.ultKey <= 0){
                                 
                  this.captainUltTrigger();                  
                }                
                
                if(this.focusTopDiag.y < 0){
                  this.focusTopDiag.y+=speed
                }

                if(this.focusBotDiag.y > 0){
                  this.focusBotDiag.y-=speed
                }  

                if(this.capUltHero.y > 0 && this.focusBotDiag.y <= 0){
                  this.capUltHero.y-=(speed*2)
                  //this.capUltHero.x+=10
                } 
                if(this.capUltText.y < 0 && this.focusBotDiag.y <= 0){
                  this.capUltText.y+=speed
                  
                }   
                if(this.capUltText.y >= 0){
                  this.capUltText.x-=0.2;
                  this.capUltHero.x+=0.2;
                }   
                
                //don't exceed yscreen size
                if(this.focusTopDiag.y >= 0){
                  this.focusTopDiag.y = 0
                }

                if(this.focusBotDiag.y <= 0){
                  this.focusBotDiag.y = 0
                }                 
                if(this.capUltHero.y <= 0){
                  this.capUltHero.y = 0;
                }
                if(this.capUltText.y >= 0){
                  this.capUltText.y = 0;
                }                
                
                this.capUltOverlay.y = 0
              }
              else{
                if(this.focusTopDiag.y > this.focusTopDiag.origY){
                  this.focusTopDiag.y-=speed
                }
                if(this.focusBotDiag.y < this.focusBotDiag.origY){
                  this.focusBotDiag.y+=speed
                }  

                if(this.capUltHero.y < this.capUltHero.origY){
                  this.capUltHero.y+=speed
                  this.capUltHero.x = 0
                }   
                if(this.capUltText.y > this.capUltText.origY){
                  this.capUltText.y-=speed
                  this.capUltText.x = 0
                } 


                this.capUltOverlay.y = this.game.height+100;               
              }

              if(this.endTurn_Button.width < this.endTurn_Button.origWidth){
                this.endTurn_Button.width++
              }
              if(this.endTurn_Button.height < this.endTurn_Button.origHeight){
                this.endTurn_Button.height++
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

                //this.crew[i].splash.alpha = 0
                //this.crew[i].splash.alphaTimer = 0

                //hide remove
                this.crewRemove[i].alpha = 0; 

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

                //reduce cost by # smoking units
                if(this.crew[i].id == 28){
                  var holder = 0
                  //this.crew[i].deployCost = 0;
                  this.crew[i].deployCost = this.crew[i].origDeployCost
                  for(var k = 0; k< this.boardHeight; k++){
                    for(var j = 0; j < this.boardWidth; j++){  
                      if(this.tile[""+j+k].smoke.on){
                        holder++
                      }                        
                    }
                  }                    
                  this.crew[i].deployCost = this.crew[i].origDeployCost - holder;
                  if(this.crew[i].deployCost < 0 ){
                    this.crew[i].deployCost = 0;
                  }

                }                
                //bonus if at least one savvy is unspent
                this.crew[i].holderPower[3] = 0
                if(this.crew[i].id == 90 || this.crew[i].id == 91 || this.crew[i].id == 92 || this.crew[i].id == 99){
                  if(this.deploy_poolCurrent > 0){
                    this.crew[i].holderPower[3] = 1;
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

                //reduce cost of next card
                for(var m = 0; m < this.boardHeight; m++){
                  for(var l = 0; l < this.boardWidth; l++){   
                    
                    if(this.tile[''+l+m].isCrewHere && this.tile[''+l+m].crewID == 23 && this.tile[''+l+m].placeOrder == (this.placeOrderTracker-1)){

                      for(var x = 1; x < 6; x++){
                        
                        if(this.crew[x].id != 23 && !this.crew[x].isBlank){
                          this.crew[x].deployCost = this.crew[x].origDeployCost - 2;
                          if(this.crew[x].deployCost < 0){
                            this.crew[x].deployCost = 0
                          }
                        }

                      }   
                    }
                    else if(this.tile[''+l+m].isCrewHere && this.tile[''+l+m].crewID == 23 && this.tile[''+l+m].placeOrder != (this.placeOrderTracker-1)){
                      for(var x = 1; x < 6; x++){
                        if(!this.crew[x].isBlank){
                          this.crew[x].deployCost = this.crew[x].origDeployCost
                        }
                        
                      }
                      
                    }                      

                  }
                } 

                
               
              
                 
                
               
                var totalPower =  parseInt(this.crew[i].origPower)  +this.crew[i].holderPower[22]+this.crew[i].holderPower[24]+ this.crew[i].holderPower[0]+this.crew[i].holderPower[2]+this.crew[i].holderPower[3]+this.crew[i].holderPower[10]
                if(totalPower > 99){
                  totalPower = 99
                }  

                this.crew[i].deployText.text = this.crew[i].deployCost
                this.crew[i].powerText.text = totalPower//parseInt(this.crew[i].origPower) +this.crew[i].holderPower[22]+this.crew[i].holderPower[24]+  this.crew[i].holderPower[0] +this.crew[i].holderPower[2]+this.crew[i].holderPower[3]+ this.crew[i].holderPower[10]
                

               
                  //show monster power boosts
                  if(parseInt(this.crew[i].origPower) > totalPower){
                    
                    this.crew[i].powerText.addColor("#BA363B", 0)
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
              //salt meter
            
              this.saltMeter.width += ( (((this.saltCounter/this.saltCounterMax))*this.expWidth) - this.saltMeter.width) * 0.1;
              if(this.saltMeter.width < (((this.saltCounter/this.saltCounterMax))*this.expWidth)){
                //this.saltMeter.width+=25;
              }
              if(this.saltMeter.width > this.expWidth){
                this.saltMeter.width = this.expWidth
              }


              // attack particles move towards health UI and then deal damage
              for(i = 0; i < this.attackParticleCount; i++){
                if(this.attackParticle[i].alpha == 1){
                  this.attackParticle[i].alpha = 1;
                  var pi = Math.PI;



                  if(this.attackParticle[i].waitTimer > 0){
                    this.attackParticle[i].angle +=20
                    this.attackParticle[i].waitTimer--
                    if(this.attackParticle[i].waitTimer <= 0){
                      this.attackParticle[i].waitTimer = 0
                    }
                  }
                  else{
                    this.attackParticle[i].x += ( this.cap_health.x - this.attackParticle[i].x) * 0.2;
                    this.attackParticle[i].y += ( this.cap_health.y - this.attackParticle[i].y) * 0.2;

                    var comX = this.attackParticle[i].x-this.cap_health.x//this.game.input.mousePointer.x
                    var comY = this.attackParticle[i].y-this.cap_health.y//this.game.input.mousePointer.y
                    var radianAngle= Math.atan2( comY, comX )
                    var angleConst = -90
                    //console.log("angle "+i+" "+( angleConst+(radianAngle* (180/pi)) ))
                    this.attackParticle[i].angle = angleConst+(radianAngle* (180/pi));

                    if(this.cap_health.x < this.attackParticle[i].x){
                      //this.attackParticle[i].x -= 15
                    }
                    if(this.cap_health.y > this.attackParticle[i].y){
                      //this.attackParticle[i].y += 15
                    }


                    if( (this.attackParticle[i].x - this.cap_health.x) <= 15 && (this.attackParticle[i].y - this.cap_health.y) <= 15){
                      //alert("Hit!")
                      this.damageCaptain(this.attackParticle[i].enemy)
                      this.attackParticle[i].alpha = 0;
                      //this.attackParticle[0].alpha = 1;
                    }
                  }

                }
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
                this.treasureOptions[i].boon.loadTexture("treasureBoon_"+this.treasureOptions[i].rarity+"_"+this.treasureOptions[i].boonVal)
                this.treasureOptions[i].curse.loadTexture("treasureCurse_"+this.treasureOptions[i].curseVal)

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

                    this.tile[""+m+l].turnTracker.alpha = 1;
                    this.tile[""+m+l].turnTrackerText.alpha = 1;
                    this.tile[""+m+l].turnTrackerText.text = this.tile[""+m+l].placeOrder+1

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
                  
                  for(var z = 1; z < 6; z++){
                    if(this.crew[z].id == this.placedCrewID[i]){
                      this.crew[z].power = this.crew[z].origPower  
                      
                    }
                  }                 
                  
                  if(i > 0){
                    

                    //boost all previously deployed crew
                    if(this.placedCrewID[i] == 24 ){
                      var boostHolder = 0;
                      for(var z = 1; z < 6; z++){
                        if(this.crew[z].id == this.placedCrewID[i]){
                          boostHolder = this.crew[z].origPower +this.crew[z].holderPower[22]+this.crew[z].holderPower[24]+ this.crew[z].holderPower[0] + this.crew[z].holderPower[2]+this.crew[z].holderPower[3]+this.crew[z].holderPower[10]//this.crew[z].power 
                        
                        }
                      } 
                      //var deployedList = ""
                      for(var x = 0; x < i; x++){
                        //deployedList += "-"+this.placedCrewID[x]
                        
                        for(var z = 1; z < 6; z++){
                          if(this.crew[z].id == this.placedCrewID[x] && (this.crew[z].isDeployed || this.crew[z].id == 5)){
                            this.crew[z].holderPower[24] = boostHolder
                          }                          
                        }

                      }                        
                      //console.log(deployedList)                            
                      
                      
                    }       

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

          
                                       
                    
                  
                    for(var z = 1; z < 6; z++){
                      if(this.crew[z].id == this.placedCrewID[i]){
                        this.crew[z].power = this.crew[z].origPower +this.crew[z].holderPower[22]+this.crew[z].holderPower[24]+ this.crew[z].holderPower[0] + this.crew[z].holderPower[2]+this.crew[z].holderPower[3]+this.crew[z].holderPower[10]
                        if(this.crew[z].power > 99){
                          this.crew[z].power = 99
                        }
                      }
                    } 

                    
                    
                  }
                  else{
                    
                  
                    
                    for(var z = 1; z < 6; z++){
                    
                      if(this.crew[z].id == this.placedCrewID[i]){
                        this.crew[z].power = this.crew[z].origPower +this.crew[z].holderPower[22]+this.crew[z].holderPower[24]+ this.crew[z].holderPower[0]+ this.crew[z].holderPower[2]+this.crew[z].holderPower[3]+ this.crew[z].holderPower[10]
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
              
              //cap info panel
              this.capInfo.x += (0 - this.capInfo.x) * 0.2;
              this.capInfoStat.x = this.capInfo.x
              //show bounty 
      
              if(this.captainHurt){
                this.capInfo.loadTexture('capInfoPanel'+this.capKey+"_hurt") 
                if(this.bounty > 0){
                  this.capInfoStat.loadTexture('capInfoPanel_wanted');
                  //this.capInfo.loadTexture('capInfoPanel'+this.capKey+"-wanted_hurt") 
                  this.bountytext.text = "$"+this.bounty+"M REWARD"         
                  this.bountytext.x = this.capInfo.x +310;   
                  
    
                }  
              }
              else{
                this.capInfo.loadTexture('capInfoPanel'+this.capKey+"") 
                if(this.bounty > 0){
                  this.capInfoStat.loadTexture('capInfoPanel_wanted');
                  //this.capInfoStat.loadTexture('capInfoPanel_privateer');
                  //this.capInfo.loadTexture('capInfoPanel'+this.capKey+"-wanted") 
                  this.bountytext.text = "$"+this.bounty+"M REWARD"         
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


              this.ult_Button.x += ((this.capInfo.x+300) - this.ult_Button.x) * 0.2;
              this.ult_ButtonText.x = this.ult_Button.x+80//-(this.ult_Button.width/3)
              this.ult_ButtonText.text = this.cap_ultCost         
              this.ult_text.x =   290; 

              this.ult_Button_hover.x = this.ult_Button.x-25
              this.ult_Button_hover.y = this.ult_Button.y

              this.ult_Button_outline.x = this.ult_Button.x
              //this.ult_pool.x = this.ult_Button.x+100
              //this.ult_poolText.y = this.ult_pool.y+10
              //this.ult_poolText.x = this.ult_pool.x
              //this.ult_poolText.text = this.capEnergy+"/9"


              // select info panel
              if(this.selectedCrew == 0){
                //this.selectInfo.x += ( this.game.width - this.selectInfo.x) * 0.2;
                this.selectInfo.x = this.game.width


              }
              else{
                if(this.selectedCrew > 100){
                  var monInfoKey = this.selectedCrew-100
                  if(!monInfoKey  == 99 && !monInfoKey  == 0){
                    monInfoKey -= 1
                  }
                  
                  this.selectName.text = monster[monInfoKey].name
                  this.selectStats.text = monster[monInfoKey].ability
                  this.selectAbility.text = ""                  


                  
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
                  
                    this.selectName.text = this.crew[this.selectedCrew].name
                    this.selectStats.text = ""+this.crew[this.selectedCrew].ability
                    if(this.crew[this.selectedCrew].id == 2){
                      this.selectStats.text += " (+"+this.crew[this.selectedCrew].killCount+")"
                    }
                    this.selectAbility.text = ""
                    

                    this.selectInfoDetail.loadTexture("selectInfoPanel-"+(this.crew[this.selectedCrew].id-1))

                }
                //this.selectInfo.x += ( 0 - this.selectInfo.x) * 0.2
                this.selectInfo.x = 0

                //this.selectName.angle = 2;
                //this.selectStats.angle = 2;
                this.selectAbility.angle = 2;
              }

              this.selectInfoDetail.x = this.selectInfo.x
              

              this.selectName.x =  this.selectInfo.x+this.selectInfo.width-280
              this.selectStats.x =  this.selectInfo.x+this.selectInfo.width-280
              this.selectAbility.x =  this.selectInfo.x+this.selectInfo.width-580      

              

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
              this.turnCountText.text = "WAVE "+this.turnCountNum//this.monKillCount+"/"+this.monCountValue
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
              //console.log(this.turnCounter+" "+this.actionTimer)
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

                        //this.tileHolder[''+l+m].smoke.on = this.tile[''+l+m].smoke.on






                        if(this.tile[''+l+m].submerged){
                    
                        }                        
                      }
                    }                     
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
                      imageUrl: 'assets/tut_combat.png',
                      backdrop: false,
                      imageWidth: 200,
                      imageHeight: 200,
                      allowOutsideClick: false,
                      allowEscapeKey: false                        
                
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
                  */
                
                  
                
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
                  this.captainHurt = false;
                  if(parseInt(localStorage.getItem("intro")) == 10){
                    localStorage.setItem("intro",11)
                    this.crewSpeak(1, "Creeps will only target you Captain!") 
                    this.crew[1].speechTimer = 75;       
                    
                    this.crewSpeak(2, "So deploy us to clear the board ...") 
                    this.crew[2].speechTimer = -100;    
                    
                    this.crewSpeak(3, "And complete this voyage's Charter") 
                    this.crew[3].speechTimer = -175;     
      
                    this.crewSpeak(4, "Oh! I found some BOMBS!") 
                    this.crew[4].speechTimer = -250;    
                  
                  }                  
                  

              
                
                  
                  
                  
                }
                //console.log(this.phaseCounter)
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
                          //console.log("rocks")
                          
                          
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


                //hide splash eventually
                if( this.crew[i].splash.alphaTimer > 0){
                  this.crew[i].splash.alphaTimer--
                  this.crew[i].splash.alpha -= 0.01
                  this.crew[i].splash.y-= 0.2;
                  if(this.crew[i].splash.alphaTimer <= 0 ){
                    this.crew[i].splash.alphaTimer = 0;
                    this.crew[i].splash.alpha = 0
                    this.crew[i].splash.y = this.crew[i].y
                  }
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
                      if(i == 5){
                        this.crew[i].isDeployed = false;
                      }                    
                    }

                      
                  }
                }              

                //crew speech

                //crew speech timer
                //console.log(this.crew[i].speechTimer)
                if(this.crew[i].speechTimer > 0){
                  this.crew[i].speechTimer--
                  
                  if(this.crew[i].speechTimer == 0){
                    this.crew[i].isTalking = false;
                    
                    //chained speech for tutorial
                    if(i == 4 && (parseInt(localStorage.getItem("intro")) == 8)){
                      this.setFocus(400,this.endTurn_Button.x,this.endTurn_Button.y) 
                    }

                    if((this.crew[i].id != 90 && this.crew[i].id != 91 && this.crew[i].id != 92 && this.crew[i].id != 99) && parseInt(localStorage.getItem("intro")) == 8){
                      localStorage.setItem("intro",9)
                      this.crewSpeak(1,"Some creeps start SUBMERGED")
                      this.crew[1].speechTimer = 100;
                      
                      this.crewSpeak(2,"They can't attack or be attacked ...")
                      this.crew[2].speechTimer = -100;  
                      
                      this.crewSpeak(3,"You can BLOCK by placing a unit on the tile")
                      this.crew[3].speechTimer = -175;                        

                      
                      for(var m = 0; m < this.boardHeight; m++){
                        for(var l = 0; l < this.boardWidth; l++){  
                          if(this.tile[''+l+m].isEnemyHere && this.tile[''+l+m].submerged){
                            this.setFocus(500,this.tile[''+l+m].x,this.tile[''+l+m].y)   
                          }
                        }
                      }                      
                    } 
                    if(i == 4 && parseInt(localStorage.getItem("intro")) == 11){
                      localStorage.setItem("intro",12)
                      this.freeCounterNum = startingBombCount                
                      this.freeCounterText2.alpha = 1
                      this.freeCounterText2.text = "+5💣"                          
                    }
                    /*
                    for(var k = 1; k < 6; k++){
                      if(this.crew[k].id == 3 && (parseInt(localStorage.getItem("intro")) == 8)){
                        this.crewSpeak(k,"I'm best suited for the next challenge")
                        this.crew[k].speechTimer = 50;
                        localStorage.setItem("intro",9);
                      }  
                    
                    } */
                     

  
                    /*
                    if(this.crew[i].id == 1 && parseInt(localStorage.getItem("intro")) == 11 && this.crew[i].speechTimer == 0){
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
                        allowOutsideClick: false,
                        allowEscapeKey: false                          
                      }).then((result) => {
                        this.overlay.loadTexture('bgOverlay1')      
                        this.freeCounterNum = startingBombCount       
                        Swal.fire({
                          title: 'Bombs Away!',
                          text: "And finally, here are a few bombs. Rocks are WEAK to them and they deal damagae to all creeps in an area. Use sparingly as your ammo is limited.",
                          imageUrl: 'assets/tut_bomb.png',
                          backdrop: true,
                          imageWidth: 200,
                          imageHeight: 200,
                          allowOutsideClick: false,
                          allowEscapeKey: false                            
                        }).then((result) => {
                          this.chatTimer = 0;
                          this.tutorialPause = false;                          
                        })                                       
                      })                    
                    }
                    */
                  }
                }

                if(this.crew[i].speechTimer < 0){
                  this.crew[i].speechBubble.alpha = 0
                  this.crew[i].speechBubbleText.alpha = 0
                  this.crew[i].isTalking = false;
                  this.crew[i].speechTimer++
                  if(this.crew[i].speechTimer == 0){
                    this.crew[i].speechTimer = 100
                    this.crew[i].speechBubble.alpha = 1;
                    this.crew[i].isTalking = true;
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
                if((this.crew[i].isDeployed || !this.deployReady) && !this.addToCrew && !this.removeFromCrew){
                  if(this.crew[i].isTalking){
                    this.crewDeployed[i].alpha = 0;
                    this.crew[i].y = this.crew[i].origY
                  }
                  else{
                    this.crewDeployed[i].alpha = 1;
                    this.crew[i].y = this.crew[i].origY+25;
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
                  
                  if(parseInt(localStorage.getItem("intro")) == 1){
                    localStorage.setItem("intro",2);
                    for(var k = 1; k < 6; k++){
                      if(this.crew[k].id == 99 ){
                        this.crewSpeak(k,"Captain, let's get that treasure!\nDeploy me to the board")
                        this.crew[k].speechTimer = 150

                        for(var m = 0; m < this.boardHeight; m++){
                          for(var l = 0; l < this.boardWidth; l++){  
                            if(this.tile[''+l+m].monID == 99){
                              this.setFocus(300,this.tile[''+l+m].x,this.tile[''+l+m].y)   
                            }
                          }
                        }                           
                      }
                    }             
                  }                    
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
              this.freeCounterText.y = this.freeCounter.y-20
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
                    //reset state based checks
                    this.tile[''+(j)+(i)].incomingDamage = 0                  
                }
              }
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
                      }
                      else{
                        //this.tile[""+j+i].width += ( 0 - this.tile[""+j+i].width) * 0.4;
                        if(this.tile[""+j+i].width > 10){
                          this.tile[""+j+i].width-=15;
                        }
                      }
                      
                    }
                    else{
                      this.tile[""+j+i].width += ( 100 - this.tile[""+j+i].width) * 0.2;
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
                            
                            for(var z = 1; z < 6; z++){
                              if(this.crew[z].id == this.tile[''+j+i].crewID ){
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
                          for(var z = 1; z < 6; z++){
                            if(this.crew[z].id == this.tile[''+j+i].crewID ){
                              this.tile[''+j+i].healthText.text =  this.crew[z].deployCost
                              this.tile[''+j+i].powerText.text =  this.crew[z].power
                              this.tile[''+j+i].healthText.x = this.tile[''+j+i].x-(this.size/2)+25
                              this.tile[''+j+i].powerText.x = this.tile[''+j+i].x+(this.size/2)-22  
                              this.tile[''+j+i].healthText.addColor("#FFF", 0)
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
                            this.tile[''+j+i].sparkle.alpha = 1;
                            this.tile[''+j+i].sparkle2.alpha = 1;                            
                            
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
                      //this.tile[""+j+i].y += ((this.game.height+100) - this.tile[""+j+i].y) * 0.1;    
                      if(this.tile[""+j+i].y < (this.game.height+100)){
                        this.tile[""+j+i].y+=5

                    
                      }
                      else if(this.tile[""+j+i].y > (this.game.height+100)){
                        this.tile[""+j+i].y-=5
                        
                      }                    
                      else{
                        this.tile[""+j+i].y = this.game.height+100
                      }
                      
                      
                    }
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

              this.gatheredChest_Ticker.y = -1000
              this.gatheredSouls_Ticker.y = -1000

              this.gatheredChest_Text.text = this.chestTriggers+1
              this.gatheredSouls_Text.text = this.soulTriggers+1

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
              else if((this.monCountValue-this.monKillCount) <= 0 ){
                this.overlay.loadTexture('bgOverlay1')
                this.overlayText.alpha = 1 
                if(disableLoop || !this.loopable){
                  this.overlayText.text = " WHAT A HAUL! "
                  this.treasureOptions[0].alpha = 1;
                  this.treasureOptions[0].value= 200
                  this.treasureOptions[0].x = this.game.width/2
                  this.treasureOptions[0].curseInc.x = this.game.width/2

                  this.treasureOptions[1].alpha = 0;
                  this.treasureOptions[2].alpha = 0;
    

                }
                else{
                  this.overlayText.text = " CHOOSE YOUR FATE"
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



                for(var i =0; i < 3; i++){
                  this.treasureOptions[i].loadTexture("treasure_"+this.treasureOptions[i].value)
                  if(i ==0 || i == 2){
                    this.treasureOptions[i].y += ( this.treasureOptions[i].targetY - this.treasureOptions[i].y) * 0.2;
                    this.treasureOptions[i].boon.y = this.treasureOptions[i].y 
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

                  if(this.removeFromCrew){
                    this.overlayText.text = "MAKE ROOM FOR NEW CREW MATE?"
                    var blacnkCount = 0
                    for(var b=1;b<6;b++){
                      
                      this.crew[b].isDeployed = false;
                      //hide splash eventually
                      if( this.crew[b].splash.alphaTimer > 0){
                        this.crew[b].splash.alphaTimer--
                        this.crew[b].splash.alpha -= 0.01
                        this.crew[b].splash.y-= 0.2;
                        if(this.crew[b].splash.alphaTimer <= 0 ){
                          this.crew[b].splash.alphaTimer = 0;
                          this.crew[b].splash.alpha = 0
                          this.crew[b].splash.y = this.crew[b].y
                        }
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

                        //crew speech timer
                        //console.log(this.crew[b].speechTimer)
                        if(this.crew[b].speechTimer > 0){
                          this.crew[b].speechTimer--
                          if(this.crew[b].speechTimer == 0){
                            this.crew[b].isTalking = false;
                          }
                        }

                        if(this.crew[b].speechTimer < 0){
                          this.crew[b].speechBubble.alpha = 0
                          this.crew[b].isTalking = false;
                          this.crew[b].speechTimer++
                          if(this.crew[b].speechTimer == 0){
                            this.crew[b].speechTimer = 50
                            this.crew[b].speechBubble.alpha = 1;
                            this.crew[b].isTalking = true;
                          }
                        }

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
                      for(var i = 1; i < 6; i++){
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

                    this.crewOptions[1].alpha = 1;
                    this.crewOptions[1].deployText.alpha = 1
                    this.crewOptions[1].powerText.alpha = 1
                    this.crewOptions[1].ability.alpha = 1
                    this.crewOptions[1].name.alpha = 1

                    this.checkKeywords(this.crewOptions[1].ability)   
                    this.checkKeywords(this.crewOptions[1].name)     

                    this.crewOptions[1].deployText.y = this.crewOptions[1].y+(this.crewOptions[1].height/2)-28
                    this.crewOptions[1].powerText.y = this.crewOptions[1].y+(this.crewOptions[1].height/2)-28
                    this.crewOptions[1].ability.y = this.crewOptions[1].y+150
                    this.crewOptions[1].name.y = this.crewOptions[1].y-150
                    this.crewOptions[1].statInc.y = this.crewOptions[1].y
                    this.crewOptions[1].y = this.treasureOptions[1].y    
                    
                    
                    


                    this.treasureOptions[1].loadTexture("treasure_rarity_no")
                    this.treasureOptions[1].x = this.treasureOptions[1].origX
                    this.treasureOptions[1].y += ( this.treasureOptions[1].targetY - this.treasureOptions[1].y) * 0.2;

                    this.treasureOptions[1].x = this.treasureOptions[0].origX+200
                    this.crewOptions[1].x = this.treasureOptions[1].x
                    this.crewOptions[1].deployText.x = this.crewOptions[1].x-(this.crewOptions[1].width/2)+33
                    this.crewOptions[1].powerText.x = this.crewOptions[1].x+(this.crewOptions[1].width/2)-33
                    this.crewOptions[1].ability.x = this.crewOptions[1].x
                    this.crewOptions[1].name.x = this.crewOptions[1].x                                         
                    
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

                    this.crewOptions[2].deployText.y = this.crewOptions[2].y+(this.crewOptions[2].height/2)-28
                    this.crewOptions[2].powerText.y = this.crewOptions[2].y+(this.crewOptions[2].height/2)-28
                    this.crewOptions[2].ability.y = this.crewOptions[2].y+150
                    this.crewOptions[2].name.y = this.crewOptions[2].y-150
                    this.crewOptions[2].statInc.y = this.crewOptions[2].y
                    this.crewOptions[2].y = this.treasureOptions[2].y                    

                    this.treasureOptions[2].loadTexture("treasure_rarity_"+this.crewOptions[2].rarity)
                    this.treasureOptions[2].x = this.treasureOptions[2].origX
                    this.treasureOptions[2].y += ( this.treasureOptions[2].targetY - this.treasureOptions[2].y) * 0.2;
                    this.treasureOptions[2].alpha = 1;

                    this.treasureOptions[2].x = this.treasureOptions[2].origX-200
                    this.crewOptions[2].x = this.treasureOptions[2].x
                    this.crewOptions[2].deployText.x = this.crewOptions[2].x-(this.crewOptions[2].width/2)+33
                    this.crewOptions[2].powerText.x = this.crewOptions[2].x+(this.crewOptions[2].width/2)-33
                    this.crewOptions[2].ability.x = this.crewOptions[2].x
                    this.crewOptions[2].name.x = this.crewOptions[2].x                              


                    this.treasureOptions[2].curseInc.alpha = 0;
                    this.treasureOptions[2].curseInc.y = this.treasureOptions[2].y 
                    this.treasureOptions[2].curseInc.x = this.treasureOptions[2].x          

                  }
                  else if(this.addToCrew){
                    this.overlayText.text = "INVITE ABOARD"
      
                    
                    



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
                      //hide splash eventually
                      if( this.crew[b].splash.alphaTimer > 0){
                        this.crew[b].splash.alphaTimer--
                        this.crew[b].splash.alpha -= 0.01
                        this.crew[b].splash.y-= 0.2;
                        if(this.crew[b].splash.alphaTimer <= 0 ){
                          this.crew[b].splash.alphaTimer = 0;
                          this.crew[b].splash.alpha = 0
                          this.crew[b].splash.y = this.crew[b].y
                        }
                      }                      
                      if(this.crewOptions[i].value == this.crew[b].id){
                        this.crewOptions[i].statInc.alpha = 1;
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

                        //crew speech timer
                        //console.log(this.crew[b].speechTimer)
                        if(this.crew[b].speechTimer > 0){
                          this.crew[b].speechTimer--
                          if(this.crew[b].speechTimer == 0){
                            this.crew[b].isTalking = false;


                             
                          }
                        }

                        if(this.crew[b].speechTimer < 0){
                          this.crew[b].speechBubble.alpha = 0
                          this.crew[b].isTalking = false;
                          this.crew[b].speechTimer++
                          if(this.crew[b].speechTimer == 0){
                            this.crew[b].speechTimer = 50
                            this.crew[b].speechBubble.alpha = 1;
                            this.crew[b].isTalking = true;
                          }
                        }

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
                    this.crewOptions[i].powerText.text = crew[this.crewOptions[i].value].origPower
                    this.crewOptions[i].ability.text = crew[this.crewOptions[i].value].ability
                    this.crewOptions[i].name.text = crew[this.crewOptions[i].value].name+"\nTYPE: "+crewType

                    this.crewOptions[i].deployText.y = this.crewOptions[i].y+(this.crewOptions[i].height/2)-28
                    this.crewOptions[i].powerText.y = this.crewOptions[i].y+(this.crewOptions[i].height/2)-28
                    this.crewOptions[i].ability.y = this.crewOptions[i].y+150
                    this.crewOptions[i].name.y = this.crewOptions[i].y-150
                    this.crewOptions[i].statInc.y = this.crewOptions[i].y
                    this.crewOptions[i].y = this.treasureOptions[i].y                    

                    this.crewOptions[i].loadTexture("crew-"+this.crewOptions[i].value)

                    this.treasureOptions[i].loadTexture("treasure_rarity_"+this.crewOptions[i].rarity)
                    
                    this.treasureOptions[i].y += ( this.treasureOptions[i].targetY - this.treasureOptions[i].y) * 0.2;

                    this.treasureOptions[i].curseInc.alpha = 0;
                    this.treasureOptions[i].curseInc.y = this.treasureOptions[i].y 
                    this.treasureOptions[i].curseInc.x = this.treasureOptions[i].origX


   
                    
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
          
                          this.tips.hideTooltip()
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
                    this.crewOptions[i].deployText.x = this.crewOptions[i].x-(this.crewOptions[i].width/2)+33
                    this.crewOptions[i].powerText.x = this.crewOptions[i].x+(this.crewOptions[i].width/2)-33
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
                      

                      this.crewOptions[1].value = captain[this.capKey].firstMates[0] 
                      this.crewOptions[1].rarity = 3
                      this.treasureOptions[1].loadTexture("treasure_rarity_3")
                    }                    


                  }
                  else{
                    this.treasureOptions[i].value = 1;
                    

                    if(this.monsterPool[this.treasureOptions[i].curseVal].count >= 1){
                      this.treasureOptions[i].curseInc.alpha = 1;
                    }
                    else{
                      this.treasureOptions[i].curseInc.alpha = 0;
                    }

                    for(var ii = 1; ii < 6; ii++){
                      //this.crewSelect[ii].alpha = 0;
                    }                

                    this.treasureOptions[i].loadTexture("treasure_rarity_"+this.treasureOptions[i].rarity)
                    this.treasureOptions[i].treasureItem.loadTexture("treasureItem_"+this.treasureOptions[i].treasureItemVal)
                    this.treasureOptions[i].boon.loadTexture("treasureBoon_"+this.treasureOptions[i].rarity+"_"+this.treasureOptions[i].boonVal)
                    this.treasureOptions[i].curse.loadTexture("treasureCurse_"+this.treasureOptions[i].curseVal)
      
                    this.treasureOptions[i].y += ( this.treasureOptions[i].targetY - this.treasureOptions[i].y) * 0.2;
                    this.treasureOptions[i].boon.y = this.treasureOptions[i].y 
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

                        //crew speech timer
                        if(this.crew[b].speechTimer > 0){
                          this.crew[b].speechTimer--
                          if(this.crew[b].speechTimer == 0){
                            this.crew[b].isTalking = false;
                          }
                        }

                        if(this.crew[b].speechTimer < 0){
                          this.crew[b].speechBubble.alpha = 0
                          this.crew[b].isTalking = false;
                          this.crew[b].speechTimer++
                          if(this.crew[b].speechTimer == 0){
                            this.crew[b].speechTimer = 50
                            this.crew[b].speechBubble.alpha = 1;
                            this.crew[b].isTalking = true;
                          }
                        }

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
                      this.treasureOptions[0].x = this.treasureOptions[0].origX
                      this.treasureOptions[0].y += ( this.treasureOptions[0].targetY - this.treasureOptions[0].y) * 0.2;
                      this.treasureOptions[0].alpha = 0;
                      this.treasureOptions[0].treasureItem.alpha = 0;
                      this.treasureOptions[0].boon.alpha = 0;
                      this.treasureOptions[0].curse.alpha = 0;                      
  
                      this.treasureOptions[0].curseInc.alpha = 0;
                      this.treasureOptions[0].curseInc.y = this.treasureOptions[0].y 
                      this.treasureOptions[0].curseInc.x = this.treasureOptions[0].origX

                      this.treasureOptions[2].loadTexture("treasure_rarity_no")
                      this.treasureOptions[2].x = this.treasureOptions[0].origX
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
                  else{
                    this.reRoll_Button.loadTexture('ui_reroll_button')
                    this.reRoll_Button.width = this.reRoll_Button_outline.width-5
                    this.reRoll_Button.height = this.reRoll_Button_outline.height-5   
                    this.reRoll_Button.alpha = 1;
                    this.reRoll_Text.alpha = 1;          
                  }

                  if(this.ditch && (this.removeFromCrew || this.addToCrew)){
                    this.reRoll_Button_outline.y =this.reRoll_Button.y   
                    this.removeCrewSkip_Button.y = this.removeCrew_Button.y + 75  

                    this.removeCrew_Button.alpha = 0;
                    this.removeCrew_Button.y =  this.reRoll_Button.y                     
                    this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
                    this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 

                    this.removeCrewSkip_Button_Text.alpha = 1//this.reRoll_Text.alpha 
                    this.removeCrewSkip_Button_Text.y = this.removeCrewSkip_Button.y-5
                  }
                  else{
                    this.reRoll_Button_outline.y = this.game.height +300; 
                    this.removeCrewSkip_Button.y = this.removeCrew_Button.y + 75  

                    this.removeCrew_Button.y =  this.game.height +300;                     
                    this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
                    this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 

                    this.removeCrewSkip_Button_Text.alpha = 0//this.reRoll_Text.alpha 
                    this.removeCrewSkip_Button_Text.y = this.removeCrewSkip_Button.y-5
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
        , skipPlank: function(){
          this.tips.hideTooltip()

          this.turnMarkerText.text = "DEPLOY PHASE"
          this.turnMarker.alpha = 1;                
          this.turnWait = turnWaitBase; 
          this.deploy_poolCurrent = this.deploy_poolMax; 
          this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax

          this.chatTimer = 0;
          this.removeFromCrew = false; 
          this.addToCrew = false;            

          

          this.removeCrew_Button.y =  this.game.height +300;                     
          this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
          this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 

          this.removeCrewSkip_Button.y = this.removeCrew_Button.y + 75  
          this.removeCrewSkip_Button_Text.alpha = 0//this.reRoll_Text.alpha 
          this.removeCrewSkip_Button_Text.y = this.removeCrewSkip_Button.y-5          
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

          for(var i = 1; i < 6; i++){
            this.crewSelect[i].alpha = 0;   
          }

          this.tips.hideTooltip()
                   

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
        ,spawnAttack: function(enemy){        
          for(var i = 0; i < this.attackParticleCount; i++){
            if(this.attackParticle[i].alpha == 0){


              var ran = Math.floor(Math.random() * 2)+1;
              this.monAttackSnd[ran].play();

              this.attackParticle[i].alpha = 1;
              this.attackParticle[i].originY = enemy.y
              this.attackParticle[i].originX = enemy.x
              this.attackParticle[i].enemy = enemy
              var variance = 100
              var displaceX = 0//Math.floor(Math.random() * variance)-(variance/2);
              var displaceY = 0// Math.floor(Math.random() * variance)-(variance/2);
              var speed = 0.09;
              this.attackParticle[i].x = enemy.x + displaceX
              this.attackParticle[i].y = enemy.y + displaceY
              this.attackParticle[i].waitTimer = 50;
              this.attackParticle[i].speed = speed
              i = this.attackParticleCount;


                //attack ripple
                this.resetRipple();
                enemy.rippleTrig = 1
                enemy.rippleDir = 0;                
            }
          }          
        }        
        ,selectTreasure: function(treasureRef){
          
          var treasure = this.treasureOptions[treasureRef.id]
          if(treasure.alpha == 1 || this.addToCrew || this.removeFromCrew){
            if(this.removeFromCrew){
      
            }
            else if(this.addToCrew){
              this.decideSnd.play();


              this.deploy_poolCurrent = this.deploy_poolMax; 

              this.removeCrew_Button.y =  this.game.height +300;                     
              this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
              this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 
    
              this.removeCrewSkip_Button.y = this.removeCrew_Button.y + 75  
              this.removeCrewSkip_Button_Text.alpha = 0//this.reRoll_Text.alpha 
              this.removeCrewSkip_Button_Text.y = this.removeCrewSkip_Button.y-5    

  
              

               

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
                this.tips.hideTooltip()
                this.crewSpeak(ran,"One of us has to go,\nCaptain!")
                this.crew[ran].speechTimer = 100
              }
              else if(dupe > -1){
                this.crew[dupe].deployCost -= 1
                if(this.crew[dupe].deployCost < 0){
                  this.crew[dupe].deployCost = 0;
                }
                
                this.crew[dupe].origDeployCost = this.crew[dupe].deployCost                
                this.crew[dupe].origPower += 1
                //this.crew[dupe].origPower = this.crew[dupe].power
                this.returnOrig(treasure)
                this.treasureSparkle.alpha = 0;     
                this.tips.hideTooltip()

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
              }
              else{
                var idHolder = this.crewOptions[treasureRef.id].value


                if(!this.sosSelected){
                  this.sosSelected = true;
                  this.sosSelectedVal = treasureRef.id
                }

                this.crewOptions[2].value = idHolder;
                this.crewOptions[2].loadTexture("crew-"+idHolder)
                this.crewOptions[2].deployText.text = crew[idHolder].deployCost
                this.crewOptions[2].powerText.text = crew[idHolder].origPower
                this.crewOptions[2].ability.text = crew[idHolder].ability
                this.crewOptions[2].rarity = this.crewOptions[treasureRef.id].rarity
                
                
                //this.removeFromCrew = true;
                //this.addToCrew = false;

                this.tips.hideTooltip()
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

                this.tips.hideTooltip()
                
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
                    imageUrl: 'assets/mascot.png',
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
                    imageUrl: 'assets/tut_block.png',
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
                  this.collectedTreasure[treasure.treasureItemVal].count++
                  this.monsterPool[treasure.curseVal].count++
                  this.scoreCountHolder += 100;
                }

              }
              catch(e){

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
                case 11:
                  //this.cap_healthValue += 5
                  this.healCaptain(5)
                  break;
                case 21:
                  this.healCaptain(10)
                  //this.cap_healthValue += 10
                  break;
                case 32:
                  //steel bonus - 0- steel, 1 - salt, 2 -smoke
                  for(var j=1; j< 6; j++){
                    if(this.crew[j].type == 0){
                      this.crew[j].origPower += 1
                      this.crew[j].power = this.crew[j].origPower
                      this.crew[j].powerText.text = this.crew[j].power
                    }
                  } 
                  break;
                case 12:
                  this.deploy_poolMax += 1
                  break;           
                case 22:
                  this.deploy_poolMax += 2
                  break;
                case 31:
                  //salt bonus - 0- steel, 1 - salt, 2 -smoke
                  for(var j=1; j< 6; j++){
                    if(this.crew[j].type == 1){
                      this.crew[j].origPower += 1
                      this.crew[j].power = this.crew[j].origPower
                      this.crew[j].powerText.text = this.crew[j].power
                    }
                  }              
                  break;
                case 13:
                  this.freeCounterNum += 1
                  this.freeCounterText2.alpha = 1
                  this.freeCounterText2.text = "+1"               
                  break;
                case 23:
                  this.freeCounterNum += 2
                  this.freeCounterText2.alpha = 1
                  this.freeCounterText2.text = "+2"                    
                  break;        
                case 33:
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
                    this.scoreCountNum += this.collectedTreasure[i].count*250
                    localStorage.setItem("collectedTreasure"+i,0)
                    localStorage.setItem("collectedTreasure"+i,this.collectedTreasure[i].count  )   
                  }               
                  
                  var score = parseInt(localStorage.getItem("highScore"))
                  localStorage.setItem("currentScore",this.scoreCountNum-250)
                  if(this.scoreCountNum > score){
                    localStorage.setItem("highScore",this.scoreCountNum)
                  } 

                  localStorage.setItem("intro",13);
                  this.bgSound.stop();
                  this.transWaveKey = 1
                  this.transTar = 'selectCap'              
                  //this.game.state.start('win');
                  
                  
                  break;      
                case 201:
                  this.monCountValue = this.monCountValue*2
                  this.monKillCount = 0;
                  this.bounty += 10
                  break;                                                                    

              }
              
              this.chatTimer = 0;
              if(calBoon == 200){
                this.chatTimer = 1;
              }
            }

          }

        }
        ,captainUltTrigger: function (){
          switch(this.capKey){
            //rally
            case 1:
              var bubbleDelay = 50;
              for(var i = 1; i < 6; i++){
                this.crew[i].isTalking = false;
                this.crew[i].speechBubbleText.text=""
                this.crew[i].speechBubbleText.alpha = 0;
              }            
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  for(var z = 1; z < 6; z++){
                    //&& this.crew[z].type == 0
                    if(this.tile[''+j+i].isCrewHere && this.tile[''+j+i].crewID == this.crew[z].id &&this.crew[z].type == 0){
                      this.tile[''+j+i].powerText.height = 75;
                      //this.tile[''+j+i].powerText.width = 75;
                    }                    
                  }

                }
              }                  
              for(var i = 1; i < 6; i++){
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
                      this.crewSpeak(i,"Ready Captain!")
                    }
                    else{
                      this.crewSpeak(i,"Aye!")
                    }

                    if(parseInt(localStorage.getItem("intro")) == 5 && i == 4){      
                      localStorage.setItem("intro",6)  
                      
                      this.crewSpeak(i,"Now click 'Fight' to begin combat!")
                      this.crew[i].speechTimer = 75;               
                    }                   
                    if(parseInt(localStorage.getItem("intro")) == 6){
                      localStorage.setItem("intro",8)
                    }
                    
                    
                    this.crew[i].speechTimer = bubbleDelay    
                    if(bubbleDelay == 50){
                      bubbleDelay = -50
                    }         
                    else{
                      bubbleDelay -= 50
                    }
                      
                  }
 
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
                    this.tile[''+j+i].smoke.on = false;
                    if(this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged && this.tile[''+j+i].alpha >= 1){
                      this.tile[''+j+i].smoke.on = true;
                      //this.tile[''+j+i].smoke.x = this.tile[''+j+i].x
                      //this.tile[''+j+i].smoke.y = this.tile[''+j+i].y
                    }
                  }
                } 
              }
              
              //this.smoke.on = true;                 
            break;                
            case 3:
              
              this.cap_healthText2.alpha = 1
              this.cap_healthValue -= 1;  
              this.cap_healthText2.text = "-"+1
              this.cap_healthText2.y = this.cap_healthText.y
              //captain hurt effects
              for(var z = 1; z < 6; z++){
                if(this.crew[z].id == 25){
                  this.crew[z].origPower += 2
                  this.crew[z].powerUpParticle.x = this.crew[z].powerText.x
                  this.crew[z].powerUpParticle.y = this.crew[z].powerText.y
                  this.crew[z].powerUpParticle.makeParticles('sparkle');
                  this.crew[z].powerUpParticle.setScale(1, 1, 1, 1);                  
                  this.crew[z].powerUpParticle.maxParticleSpeed.set(100,100);
                  this.crew[z].powerUpParticle.explode(500);   
                  var ranPhrase = Math.floor(Math.random() * 2)
                  if(ranPhrase == 0){
                    this.crewSpeak(z,"Captain! No!")
                  }
                  else{
                    this.crewSpeak(z,"Defend the Captain!")
                  }     
                            
                  
                }
              }              
              
              for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){  
                  if(this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].submerged && this.tile[''+j+i].hp > 4){
                    this.tile[''+j+i].submerged = true;
                    this.spawnSplash(''+j+i);
                    if(this.tile[''+j+i].smoke.on){
                      this.tile[''+j+i].smoke.on = false;
                    }  
                    this.tile[''+j+i].sparkle.alpha = 0;
                    this.tile[''+j+i].sparkle2.alpha = 0;                                        
                  }
                }
              }                
              break;
          }          
        }
        //captain's ultimate
        ,captainUlt: function (){
          if(this.ultKey<=0 && this.deploy_poolCurrent >= this.cap_ultCost && this.phaseCounter == 1 && !this.captainPowerActivated && (this.capKey != 2 || (this.capKey == 2 && this.freeCounterNum > 0))){
            this.captainPowerActivated = true
            this.deploy_poolCurrent -= this.cap_ultCost
            //this.cap_ultCost += 2;
            this.ultKey = ultTimer;

            this.focusHereTimer = 0;

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
          if(this.deployReady && this.ultKey<= 0){
            this.clearbuttonTimer = 10
            this.placeOrderTracker = 0;

            if(parseInt(localStorage.getItem("intro")) <= 8){
             
              this.focusHere.alpha = 0;
              this.focusHereTimer = 0;
              for(var i = 1; i < 6; i++){
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
              for(var i = 1; i < 6; i++){
                this.crew[i].speechTimer = 0;
                this.crew[i].speechBubble.alpha = 0;
                this.crew[i].speechBubbleText.alpha = 0;
                this.crew[i].isTalking = false;
                
              }
              localStorage.setItem("intro",8)
            }   

            if(parseInt(localStorage.getItem("intro")) >= 9 && parseInt(localStorage.getItem("intro")) < 12){
              localStorage.setItem("intro",9)
              this.crewSpeak(1,"Some creeps start SUBMERGED")
              this.crew[1].speechTimer = 100;
              
              this.crewSpeak(2,"They can't attack or be attacked ...")
              this.crew[2].speechTimer = -100;  
              
              this.crewSpeak(3,"You can BLOCK by placing a unit on the tile")
              this.crew[3].speechTimer = -175;                        

              
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
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){      
                if(this.tile[''+j+i].isCrewHere){
                  this.tile[''+j+i].hasActed = true;
                  this.tile[''+j+i].y  = this.tile[''+j+i].y+25//1000;
                  this.tile[''+j+i].loadTexture('tile');
                  for(var z = 1; z < 6; z++){
                    if(this.crew[z].id == this.tile[''+j+i].crewID && this.crew[z].arrayKey == this.tile[''+j+i].benchID){
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
                //this.crew[i].holderPower[10] = 0
                //this.crew[i].holderPower[0] = 0
              }
              this.crew[i].holderPower[10] = 0
              this.crew[i].holderPower[0] = 0 
              this.crew[i].holderPower[24] = 0    
              
              //undo cost discounts
              this.crew[i].deployCost = this.crew[i].origDeployCost
              
            }      
            //undo captain health       
            this.cap_healthValue = this.cap_healthValueHolder
            // reset captain savvy
            this.deploy_poolCurrent = this.deploy_poolMax;
            

            // undo ammo spend
            if(this.capKey == 2 && this.captainPowerActivated){
              this.freeCounterNum++
              this.freeCounterText2.alpha = 1
              this.freeCounterText2.text = "+1"   
            }
            this.captainPowerActivated = false;
            //this.freeCounterNum++
            //this.freeCounterText2.alpha = 1
            //this.freeCounterText2.text = "+1"             
            
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
                //this.tileHolder[''+l+m].smoke.on = false;          

                
                
                
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
          this.boardWidth = 5//11
          this.boardHeight = 7//9 
          this.size = 100
          this.spacing = 10
          this.monCount = this.monBaseCount*monscaleNum*this.turnCountNum// + (Math.floor(this.deploy_poolMax/3))+ (Math.floor(this.turnCountNum/2));
          if(this.turnCountNum == 0 ){//this.saltCounter >= this.saltCounterMax
            this.monCount = 1
          }
          else{
            this.monCount = this.monBaseCount+(this.turnCountNum*monscaleNum)
            // curse add to moncount
            for(var i = 1 ; i < 10; i++){
              this.monCount += this.monsterPool[i].count//this.collectedTreasure[i].count      
            }   

  
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
          for(var i = ranStartY; i < this.boardHeight; i++){
              for(var j = ranStartX; j < this.boardWidth; j++){      
                //reset stats
                this.tile[''+j+i].hasAttacked = false;
                //place mon
                var placeMonHere = Math.floor(Math.random() * 2);
                //this.monCount = 100;

                if(this.monCount > this.monCountValue){
                  //this.monCount = this.monCountValue
                }
                
                
                if(this.monCount <= 3 || !(tile === undefined) || monID == 103){
                  placeMonHere = 0
                }
                
                
                //console.log("placemon "+placeMonHere+" & moncount "+this.monCount+" & turn Count "+this.turnCountNum)
                if(placeMonHere == 0 && this.monCount > 0 && !this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].isCrewHere && (this.monCountValue-this.monKillCount) > 0){
                  
                  dist += 1000;
                  
                  
                  //this.tile[''+j+i].monID = Math.floor(Math.random() * 3)+1;//parseInt(text[textKey])
                  
                  var healthSpawn = Math.floor(Math.random() * 4)
                  if(this.turnCountNum == 0 || this.saltCounter >= this.saltCounterMax){

                    //console.log("test")
                    this.tile[''+j+i].monID = 99
                    this.tile[''+j+i].sparkle.alpha = 1;
                    this.tile[''+j+i].sparkle2.alpha = 1;
                    this.tile[''+j+i].y = this.tile[''+j+i].y+25//1000+dist;
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
                      if(this.turnCountNum == 0 ){
                        try{
                          var ran = Math.floor(Math.random() * 3)+1;
                          var newI = i+ran
                          ran = Math.floor(Math.random() * 3)+1;
                          var newJ = j+ran     
                          
                          this.tile[''+newJ+newI].monID = 102
                          this.tile[''+newJ+newI].help.on = true; 
                          this.tile[''+newJ+newI].y = this.tile[''+newJ+newI].y+25//1000+dist;
                          this.spawnSplash(''+newJ+newI);   
                          this.spawnCount++;       
                          
                          this.tile[''+newJ+newI].hp = 3;
                          this.tile[''+newJ+newI].power = 0;
                          this.tile[''+newJ+newI].tier = 0
                          this.tile[''+newJ+newI].isEnemyHere = true     
                        }
                        catch(e){
                          var ran = Math.floor(Math.random() * 3)+1;
                          var newI = this.boardHeight-1
                          ran = Math.floor(Math.random() * 3)+1;
                          var newJ = this.boardWidth-1   
                          
                          this.tile[''+newJ+newI].monID = 102
                          this.tile[''+newJ+newI].help.on = true; 
                          this.tile[''+newJ+newI].y = this.tile[''+newJ+newI].y+25//1000+dist;
                          this.spawnSplash(''+newJ+newI);   
                          this.spawnCount++;       
                          
                          this.tile[''+newJ+newI].hp = 3;
                          this.tile[''+newJ+newI].power = 0;
                          this.tile[''+newJ+newI].tier = 0
                          this.tile[''+newJ+newI].isEnemyHere = true     
                        }
                 
                      }
                    }
                    catch(e){

                    }

                       
                  }
                  else{

                    // treasures affect mon spawn
                    var totalTreasureCount = 0;
                    for(var k = 1 ; k < 10; k++){
                      totalTreasureCount += this.monsterPool[k].count//this.collectedTreasure[k].count                        
                    }                    
                    for(var k = 1 ; k < 10; k++){
                      if(this.monsterPool[k].count > 0){
                        var spawnChance = Math.floor(Math.random() * (this.monCount) )
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
                  var emergeRan = Math.floor(Math.random() * 4)-2
                  if(this.spawnCount > monEmergecut+emergeRan){



                    this.tile[""+j+i].submerged = true
                  }

                  //explcit monID override
                  if(!(monID === undefined)){
                    this.tile[""+j+i].monID = monID

                    this.spawnSplash(''+j+i);

                    //console.log("rock go")
                  }   

                  //boxes, chests and rocks don't count
                  if(monID == 99 || monID == 102 || monID == 103){
                    this.spawnCount--
                  }

                  //chest never submerged
                  if(this.tile[''+j+i].monID == 99 || this.tile[''+j+i].monID == 102 || this.tile[''+j+i].monID == 103){
                    this.tile[""+j+i].submerged = false;
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

                  if(parseInt(localStorage.getItem("intro")) < 12 && this.tile[''+j+i].monID != 99 ){
                    this.tile[''+j+i].hp = 1
                    this.tile[''+j+i].power = 1     
                  }

                  switch(this.tile[''+j+i].monID){
                    case 101:
                      this.tile[''+j+i].power = this.bounty
                      break;
                  }

                  //more curse make monsters stronger
                  try{
                    
                    //console.log((this.tile[''+j+i].monID-1)+'  '+this.monsterPool[(this.tile[''+j+i].monID-1)].count)
                    this.tile[''+j+i].hp += (this.monsterPool[(this.tile[''+j+i].monID-1)].count)-1
                    this.tile[''+j+i].power += (this.monsterPool[(this.tile[''+j+i].monID-1)].count)-1
                  }
                  catch(e){

                  }

   
                  
                  this.tile[''+j+i].origPower = this.tile[''+j+i].power;
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
            if(this.turnCountNum == 0){
              this.turnMarkerText.text = "DEPLOY PHASE"


                        
            }
            else{
              this.turnMarkerText.text = "LOOT PHASE"
            }
            
            this.turnMarker.alpha = 1;                 
            this.turnWait = turnWaitBase;
            this.phaseCounter++  
            
                    
            this.turnCountNum++;  
            this.tickerSpeed = tickerSpeedbase
          } 
  
          this.surfaceCountTrigger = 0;
          this.surfaceCount = 0;             

          
        }
        ,returnCrew: function () {
          

          //reset captain power boosts
          
          for(var i = 1; i < 6; i++){
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

                

                this.tile[''+j+i].y  = this.tile[''+j+i].y+25//1000;
                //crew return ability
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
            this.crew[i].deployCost = this.crew[i].origDeployCost
            this.crew[i].isSelected = false;
            this.crew[i].isDeployed = false
             
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
        ,endDeployPhase: function (tile) {
          if(parseInt(localStorage.getItem("intro")) < 8){

            for(var k = 1; k < 6; k++){
              if(this.crew[k].id == 91 ){
                if(parseInt(localStorage.getItem("intro"))== 2){
                  this.crewSpeak(k,"Deploy your crew to grab that treasure & save that sailor")
                  this.crew[k].speechTimer = 75;
                }
                if(parseInt(localStorage.getItem("intro"))> 2){
                  this.setFocus(200,this.ult_Button.x-25,this.ult_Button.y)   
                  this.crewSpeak(k,"Don't forget your ability, Captain!")
                  this.crew[k].speechTimer = 75;
                }
                
              }   
            }   
                
            for(var k = 1; k < 6; k++){
              if(this.crew[k].id == 1 && parseInt(localStorage.getItem("intro")) == 4){
                this.crewSpeak(k,"Let's get that treasure.\nDeploy me")
                this.crew[k].speechTimer = 75
              }
              if(this.crew[k].id == 90 && parseInt(localStorage.getItem("intro")) == 5){
                //this.crewSpeak(k,"Don't forget to deploy me!")
              }                               
            } 
                      
          }        
          else if(parseInt(localStorage.getItem("intro")) < 10 && parseInt(localStorage.getItem("intro")) > 8){
            for(var k = 1; k < 6; k++){
              if(this.crew[k].id == 1 && parseInt(localStorage.getItem("intro")) == 9){
                for(var m = 0; m < this.boardHeight; m++){
                  for(var l = 0; l < this.boardWidth; l++){  
                    if(this.tile[''+l+m].isEnemyHere && this.tile[''+l+m].submerged){
                      this.setFocus(200,this.tile[''+l+m].x,this.tile[''+l+m].y)   
                    }
                  }
                }                
                this.crewSpeak(k,"Let's BLOCK that creep")
              }                              
            } 

          }  
          else{
            if(this.deployReady){
              
              this.focusHereTimer = 0;
              
              this.fightReady.play()

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
              this.turnMarker.alpha = 0;

              this.deployReady = false;  
              //savvy turns to salt
              for(var i = 0; i< this.deploy_poolCurrent; i++){
                //this.spawnSalt(this.deploy_pool.x, this.deploy_pool.y)
              }
              
              //this.deploy_poolCurrent = 0;

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
                

                if(this.tile[''+j+i].crewID == 5){
                  this.explodeSnd.play()
                }
                else{
                  var ran = Math.floor(Math.random() * 2)+1
                  this.attackSnd[ran].play()                  
                }                

                this.placeOrderTracker++;
                this.tile[''+j+i].width  += 25;
                this.tile[''+j+i].height += 25;

                //attack ripple
                this.resetRipple();
                this.tile[''+j+i].rippleTrig = 1
                this.tile[''+j+i].rippleDir = 0;                
                

                
                for(var z = 1; z < 6; z++){
                  if(this.crew[z].id == this.tile[''+j+i].crewID ){

                    this.selectedCrew = this.crew[z].arrayKey
                    this.noPickUp = true;    

                   

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
                        this.crewAttackTile(this.tile[''+(j+1)+(i)],this.tile[''+j+i])
                        this.crewAttackTile(this.tile[''+(j-1)+(i)],this.tile[''+j+i])
                        this.crewAttackTile(this.tile[''+(j)+(i+1)],this.tile[''+j+i])
                        this.crewAttackTile(this.tile[''+(j)+(i-1)],this.tile[''+j+i])                     
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
                        //console.log(holderArray)
                        this.loopCounter = -1;
                        for (const tile of holderArray) {  
                          //this.crewAttackTile(tile,this.tile[''+j+i].crewID)   
                          this.loopCounter++; 
                          for (const innerArray of tile){
                             
                            this.timer = this.game.time.create(true);
                            this.timer.add(150*this.loopCounter, this.crewAttackTile, this, innerArray,this.tile[''+j+i]);
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
                        //console.log(holderArray)
                        this.loopCounter = -1;
                        for (const tile of holderArray) {  
                          this.loopCounter++; 
                          //this.crewAttackTile(tile,this.tile[''+j+i].crewID)   
                          for (const innerArray of tile){
                             
                            this.timer = this.game.time.create(true);
                            this.timer.add(150*this.loopCounter, this.crewAttackTile, this, innerArray,this.tile[''+j+i]);
                            this.timer.start();
                          }

                        }                        

                                      
                        break;
                        //area     
                        case 4:
                          this.crewAttackTile(this.tile[''+(j+1)+(i)],this.tile[''+j+i])
                          this.crewAttackTile(this.tile[''+(j-1)+(i)],this.tile[''+j+i])
                          this.crewAttackTile(this.tile[''+(j)+(i+1)],this.tile[''+j+i])
                          this.crewAttackTile(this.tile[''+(j)+(i-1)],this.tile[''+j+i])       
                          
                          this.crewAttackTile(this.tile[''+(j+1)+(i+1)],this.tile[''+j+i])
                          this.crewAttackTile(this.tile[''+(j-1)+(i-1)],this.tile[''+j+i])   
                          this.crewAttackTile(this.tile[''+(j-1)+(i+1)],this.tile[''+j+i])
                          this.crewAttackTile(this.tile[''+(j+1)+(i-1)],this.tile[''+j+i])                                                           
                        break;    
                        case 5:
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
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(this.tile[''+(m)+(l)].smoke.on){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i])              
                              }
                            }
                          }                              
                          break;
                        case 7:
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(this.tile[''+(m)+(l)].submerged){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i])              
                              }
                            }
                          }                              
                          break;          
                        case 8:
                          for(var l = 0; l < this.boardHeight; l++){
                            for(var m = 0; m < this.boardWidth; m++){
                              if(!this.tile[''+(m)+(l)].submerged && this.tile[''+(m)+(l)].isEnemyHere){
                                this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i])              
                              }
                            }
                          }                              
                          break; 
                          case 9:
                            for(var l = 0; l < this.boardHeight; l++){
                              for(var m = 0; m < this.boardWidth; m++){
                                if(true){
                                  this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i])              
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
                        this.tile[''+j+i].y  = this.tile[''+j+i].y+25//1000;
                        this.tile[''+j+i].loadTexture('tile');                
                        this.tile[''+j+i].crewID = 0
                        //this.tile[''+j+i].monID = 0
                        this.tile[''+j+i].isCrewHere = false;
                        //this.tile[''+j+i].isEnemyHere = false;
                        this.tile[''+j+i].healthText.text = "";
                        this.tile[''+j+i].powerText.text = "";
                        this.tile[''+j+i].healthText.alpha = 0
                        this.tile[''+j+i].powerText.alpha = 0;
                        this.tile[''+j+i].placeOrder = -1;

                        this.tile[''+j+i].bombExplode.makeParticles('smoke');
                        this.tile[''+j+i].bombExplode.setScale(0.5,0.5,0.5,0.5);
                        this.tile[''+j+i].bombExplode.minParticleSpeed.set(-200, -200);
                        this.tile[''+j+i].bombExplode.maxParticleSpeed.set(200, 200);
                        this.tile[''+j+i].bombExplode.setAlpha(1, 0.2, 1500);                        
                        this.tile[''+j+i].bombExplode.explode(2000,10);                           
                        
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

            this.turnMarkerText.text = "ENEMY PHASE"
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
        ,crewAttackTile: function (enemy,attkCrew) {   
          try{
            
           // if(enemy.isEnemyHere && ((!enemy.submerged) || (enemy.submerged && crewID == 6))){
            if(enemy.isEnemyHere && ((!enemy.submerged))){
              
              this.game.plugins.screenShake.shake(15)
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
                var damage = parseInt(attkCrew.powerText.text)
                //bombs instant kill rocks
                if(enemy.monID == 103 && attkCrew.crewID == 5){
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

                //apply smoking
                if(attkCrew.crewID == 27){
                  enemy.smoke.on = true;
                }                
                //smoking grunt extra damage
                if((attkCrew.crewID == 93 || attkCrew.crewID == 94 || attkCrew.crewID == 95 || attkCrew.crewID == 100) && enemy.smoke.on){
                  damage += 1
                }                
                enemy.hp -= Math.floor(damage)
                this.setActionText(enemy,Math.floor(damage))   
                
              }
              else{
                //intaginble is half power
                //this.hitStop = 10;      
                var damage = parseInt(attkCrew.powerText.text)/2
                //instantly kill small enemies
                if(enemy.hp <= 3 && attkCrew.crewID == 17){
                  damage = enemy.hp
                }                     
                // smoking instant kill
                if(attkCrew.crewID == 13 && enemy.smoke.on){
                  damage = enemy.hp
                }
                //apply smoking
                if(attkCrew.crewID == 27){
                  enemy.smoke.on = true;
                }                 
                //smoking grunt extra damage
                if(attkCrew.crewID == 91 && enemy.smoke.on){
                  damage += 1
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
             }
              enemy.width  += 25;
              enemy.height += 25;  
              //enemy on hurt ability
              switch(enemy.monID){
                case 5:
                  enemy.power += 1
                  
                  break;                  
                case 6:
                  enemy.power += 2                   
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
        ,enemyDie: function (enemy,crewID) {
          
          if (crewID === undefined ) {
            crewID = 1
          
          }      

          
          enemy.help.on = false; 
          enemy.isEnemyHere = false;
          enemy.submerged = false;
          enemy.alpha = 1;
          
          enemy.incomingDamage = 0;
          enemy.willDie.alpha = 0;
          
          enemy.deathParticle.makeParticles(enemy.texture);
          enemy.deathParticle.setScale(0.7, 0.7, 0.7, 0.7);

          enemy.sparkle.alpha = 0;
          enemy.sparkle2.alpha = 0;                

          var power = 0
          for(var k = 1; k < 6; k++){
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
                    
          enemy.loadTexture('tile');

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
            enemy.crewID = 5;
            enemy.hp = crew[5].loyaltyDeployCost[0];
            enemy.healthText.text = enemy.hp
            enemy.power = crew[5].loyaltyPower[0];
            enemy.powerText.text = enemy.power
            enemy.attackPattern = crew[5].attackPattern
            enemy.ability  = crew[5].ability
            enemy.loadTexture('crew-5')
            enemy.hasAttacked = false;
            enemy.hasActed = false;
            enemy.placeOrder = this.deployCrewCount//this.placeOrderTracker
            //this.placeOrderTracker++   
            this.deployCrewCount++  
            //this.ActionCounter = 0;
            //this.placeOrderTracker = 0;  
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
          
          for(var k = 1; k < 6; k++){
            //power increase
            if(this.crew[k].id == 2 && crewID == 2){
              
              this.crew[k].origPower += 1;
              //this.crew[k].power = this.crew[k].origPower;
            }

            //ammo increase
            if(this.crew[k].id == 10 && crewID == 10){
              this.freeCounterNum++;
              this.freeCounterText2.alpha = 1
              this.freeCounterText2.text = "+1💣"     
              for(var ii = 0; ii < this.boardHeight; ii++){
                for(var jj = 0; jj < this.boardWidth; jj++){      
                  if(this.tile[''+jj+ii].crewID == crewID ){
                    this.setActionText(this.tile[''+jj+ii],"+1💣")        
                  }
                }
              }                                     
                    
            }  
            // heal captain
            if(this.crew[k].id == 11 && crewID == 11){
              this.cap_healthText2.alpha = 1
              this.healCaptain(2)
                                   
                    
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

          enemy.y = enemy.y+25//1000;          
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
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){      
              this.tileCount++;
              if(this.tile[''+j+i].isEnemyHere && this.tile[''+j+i].monID != 99 && this.tile[''+j+i].monID != 102 && this.tile[''+j+i].monID != 103){
                this.monCount++

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
                //this.placeCrew(this.tile[''+j+i])
                
                this.selectedCrew = 100+this.tile[''+j+i].monID;
                this.noPickUp = true; 
                


                if(!this.tile[''+j+i].submerged && this.tile[''+j+i].monID != 99 && this.tile[''+j+i].monID != 103){
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
                        this.spawnAttack(this.tile[''+j+i])
                        //this.damageCaptain(this.tile[''+j+i])
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
                      this.spawnAttack(this.tile[''+j+i])
                      //this.damageCaptain(this.tile[''+j+i])
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
                            this.tile[''+(j+1)+(i)].hasAttacked = true;
                            this.tile[''+(j+1)+(i)].hp = 3;
                            this.tile[''+(j+1)+(i)].power = 3;
                            this.tile[''+(j+1)+(i)].tier = 2
                            //this.tile[''+j+i].multiAttack = 1;
                            this.tile[''+(j+1)+(i)].isEnemyHere = true
                            this.tile[''+(j+1)+(i)].submerged = false
                            this.tile[''+(j+1)+(i)].monID = 2
                          }
                          else{
                            this.tile[''+(j+1)+(i)].hasAttacked = true;
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
                        //console.log(e)
                      }

                      try{
                        
                        if(!this.tile[''+(j-1)+(i)].isCrewHere && !this.tile[''+(j-1)+(i)].isEnemyHere){
                          var whichArm = Math.floor(Math.random() * 2);  
                          
                          if(whichArm == 0){
                            this.tile[''+(j-1)+(i)].hasAttacked = true;
                            this.tile[''+(j-1)+(i)].hp = 3;
                            this.tile[''+(j-1)+(i)].power = 3;
                            this.tile[''+(j-1)+(i)].tier = 2
                            //this.tile[''+j+i].multiAttack = 1;
                            this.tile[''+(j-1)+(i)].isEnemyHere = true
                            this.tile[''+(j-1)+(i)].submerged = false
                            this.tile[''+(j-1)+(i)].monID = 2
                          }
                          else{
                            this.tile[''+(j-1)+(i)].hasAttacked = true;
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
                            this.tile[''+(j)+(i+1)].hasAttacked = true;
                            this.tile[''+(j)+(i+1)].hp = 3;
                            this.tile[''+(j)+(i+1)].power = 3;
                            this.tile[''+(j)+(i+1)].tier = 2
                            //this.tile[''+j+i].multiAttack = 1;
                            this.tile[''+(j)+(i+1)].isEnemyHere = true
                            this.tile[''+(j)+(i+1)].submerged = false
                            this.tile[''+(j)+(i+1)].monID = 2
                          }
                          else{
                            this.tile[''+(j)+(i+1)].hasAttacked = true;
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
                            this.tile[''+(j)+(i-1)].hasAttacked = true;
                            this.tile[''+(j)+(i-1)].hp = 3;
                            this.tile[''+(j)+(i-1)].power = 3;
                            this.tile[''+(j)+(i-1)].tier = 2
                            //this.tile[''+(j)+(i-1)].multiAttack = 1;
                            this.tile[''+(j)+(i-1)].isEnemyHere = true
                            this.tile[''+(j)+(i-1)].submerged = false
                            this.tile[''+(j)+(i-1)].monID = 2
                          }
                          else{
                            this.tile[''+(j)+(i-1)].hasAttacked = true;
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
                      case 102:
                        

             
                        break;                                 
                    } 
                    //this.game.plugins.screenShake.shake(5); 


                    j =  this.boardWidth
                    i = this.boardHeight
                    break;
                  }
                else{
                    
                    if(this.tile[''+j+i].isCrewHere && (this.monCountValue-this.monKillCount) > 0){
                      this.tile[''+j+i].y -= 75;
                      //insert cool sfx here
                      for(var z = 1; z < 6; z++){
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
                          for(var z = 1; z < 6; z++){
                            if(this.crew[z].id == this.tile[''+j+i].crewID && this.crew[z].arrayKey == this.tile[''+j+i].benchID){
                              this.healCaptain(this.crew[z].power)
   

                            
                          }
                        }                                        
                  
                        break;
                      case 7:
                        
                        for(var z = 1; z < 6; z++){
                          if(this.crew[z].id == this.tile[''+j+i].crewID && this.crew[z].arrayKey == this.tile[''+j+i].benchID){
                            
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
                      
                      

                      if(this.tile[''+j+i].isCrewHere){
                        
                        this.tile[''+j+i].y -= 50;
                        //this.game.plugins.screenShake.shake(5);
                        this.tile[''+j+i].hasActed = true;                           
                        this.tile[''+j+i].crewID = 0
                        this.tile[''+j+i].isCrewHere = false;
                        this.tile[''+j+i].hasActed = false;
                        this.tile[''+j+i].placeOrder = -1;               

                        for(var ii = 1; ii < 6; ii++){
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
                      } 
                      else{
                        this.tile[""+j+i].y -= 25
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
                  var spawnTarget = this.monBaseCount*monscaleNum*this.turnCountNum
                  var rand = Math.floor(Math.random() * (2))
                  if(rand == 0 && (this.monCount <= spawnTarget)){

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

            if(this.rockCount <= 0 && parseInt(localStorage.getItem("intro")) > 12){          
              this.spawnRocks(); 
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
        ,placeCrew: function (tile) {
          
          
          if(debug){
            alert("tile info \nIs Flipping? "+tile.isFlipping+"\nisEnemy? "+tile.isEnemyHere+"\nisSubmerged? "+tile.submerged+"\nmonID? "+tile.monID+"\nisCrew? "+tile.isCrewHere)
            alert("tile info \ncrew ID? "+tile.crewID)
            alert("selected Crew? "+this.selectedCrew+"\nselected crew ID? "+this.crew[this.selectedCrew].id )
          }
          
          if(this.selectedCrew != 0 && (!tile.isEnemyHere || tile.submerged) && !tile.isCrewHere && !this.noPickUp){
            var remainingDeploy = this.deploy_poolCurrent - this.crew[this.selectedCrew].deployCost

            var ran = Math.floor(Math.random() * 5)+1
            this.stoneSnd[ran].play()

            tile.y += dipVal;
            this.resetRipple();
            tile.rippleTrig = 1
            tile.rippleDir = 0;
            

            this.noPickUp = true;
            
            tile.placeOrder = this.placeOrderTracker
            this.placeOrderTracker++
            if(remainingDeploy >= 0){

              tile.powerText.height = tile.powerText.origHeight
              //tile.powerText.width = 4

              //crew guiding placement
              /*
              if(parseInt(localStorage.getItem("intro")) == 4 || onboardingDebug ){
                
                for(var k = 1; k < 6; k++){
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
                  imageUrl: 'assets/tut_savvy.png',
                  backdrop: false,
                  imageWidth: 200,
                  imageHeight: 200,
                  allowOutsideClick: false,
                  allowEscapeKey: false                      
             
                }).then((result) => {
                  localStorage.setItem("intro",7);
                  this.chatTimer = 0;
                  this.tutorialPause = false;        
                  

                  for(var k = 1; k < 6; k++){
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
                
              

                tile.crewID = this.crew[this.selectedCrew].id 
                tile.benchID = this.crew[this.selectedCrew].arrayKey 
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

                if(parseInt(localStorage.getItem("intro")) == 2 ){
                  this.setFocus(200,this.clear_Button.x,this.clear_Button.y)
                  this.crewSpeak(1,"I'm not next to the chest.\nTry again!")
                  this.crew[1].speechTimer = 100
                }
                if(parseInt(localStorage.getItem("intro")) == 4 ){
                  this.setFocus(200,this.clear_Button.x,this.clear_Button.y)
                  this.crewSpeak(4,"I'm not next to the Distress Flag.\nTry again!")
                  this.crew[4].speechTimer = 100
                }                

                if(parseInt(localStorage.getItem("intro")) == 9 && tile.submerged){    
                  localStorage.setItem("intro",10)     
                  this.setFocus(200,this.endTurn_Button.x,this.endTurn_Button.y)   
                  this.crewSpeak(1,"Now click 'Fight' to begin combat!")
                  this.crew[1].speechTimer = 75;                        
                }    
                else if(parseInt(localStorage.getItem("intro")) == 9 && !tile.submerged){  
                  this.setFocus(200,this.clear_Button.x,this.clear_Button.y)
                  this.crewSpeak(this.selectedCrew,"I'm not BLOCKING a creep.\nTry again!")
                  this.crew[this.selectedCrew].speechTimer = 75;                   
                }               
              }
              catch(e){

              }
              
              for(var i = 1; i < 6; i++){
                this.crewSelect[i].alpha = 0;
              }
              //this.selectedCrew = 0   
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
            console.log(tile.incomingDamage)
            //this.smoke.on && !tile.smoke.on
            if(false){
              this.smoke.on = false;
              this.captainPowerActivated = false;
              //tile.smoke.on = true;
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
        ,tintTile: function (tile,color,crew) {
          try{
            tile.tint = color
            
            if(tile.isEnemyHere && !tile.submerged){
              tile.incomingDamage += parseInt(crew.powerText.text);
              var damage = 0;

              if(tile.alpha == 1){
                damage = Math.floor(tile.incomingDamage) 
              }
              else{
                damage = Math.floor(tile.incomingDamage/2) 
              }

              if(damage >= tile.hp){             
                tile.willDie.x = tile.x
                tile.willDie.y = tile.y
                tile.willDie.alpha = 1;
              }  
              
              if(tile.monID == 99 && damage > 0 && parseInt(localStorage.getItem("intro"))== 2 ){
                this.crew[1].speechTimer = 0;
                this.crew[1].speechBubble.alpha = 0;
                this.crew[1].speechBubbleText.alpha = 0;
                this.crew[1].isTalking = false;

                for(var k = 1; k < 6; k++){
                  
                  if(this.crew[k].id == 92 && this.crew[1].isDeployed){
                      
                    localStorage.setItem("intro",3);
              
                    this.setFocus(200,this.deploy_pool.x,this.deploy_pool.y)
                    this.crewSpeak(k,"Don't forget that deploying crew and using your ability costs Savvy")
                    this.crew[k].speechTimer = 250
                  }  
                }  
              }


              if(tile.monID == 102 && damage > 0 && parseInt(localStorage.getItem("intro"))== 4 ){
                for(var k = 1; k < 6; k++){
                  
                  if(this.crew[k].id == 91 && this.crew[4].isDeployed){

                    for(var l = 1; l < 6; l++){
                      this.crew[l].speechTimer = 0;
                      this.crew[l].speechBubble.alpha = 0;
                      this.crew[l].speechBubbleText.alpha = 0;
                      this.crew[l].isTalking = false;
                      
                    }                    
                    localStorage.setItem("intro",5);
                    this.setFocus(200,this.ult_Button.x-25,this.ult_Button.y)                    
                    this.crewSpeak(k,"Don't forget your ability, Captain!")
                    this.crew[k].speechTimer = 150
                  }  
                }  
              }              
              
            }
           
            
          }
          catch(e){
            //console.log(e)
          }   
        }   
        ,setFocus: function(time,x,y){
          this.focusHereTimer = time
          this.focusHere.x = x
          this.focusHere.y = y
          this.focusHere.origY = y
          this.focusHere.alpha = 1;          
        }      
        ,removeTint: function () {
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){   
              this.tile[""+j+i].tint = '0xFFFFFF'
              this.tile[''+j+i].incomingDamage = 0;
              this.tile[''+j+i].willDie.alpha = 0;
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
        ,crewSelected: function (chosen) {
          
          if(!chosen.isBlank && !this.addToCrew && !this.removeFromCrew && !chosen.isDeployed){
            this.noPickUp = false;
            
           
            //only during deployment phase
            var remainingDeploy = this.deploy_poolCurrent - chosen.deployCost
          
            if(this.deployReady && ((remainingDeploy >= 0 && chosen.arrayKey != 5) || (this.freeCounterNum-1 >= 0 && chosen.arrayKey == 5))){
              if(!chosen.isDeployed){


                
                if(!chosen.isSelected){
                  for(var i = 1; i < 6; i++){
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
                    }
                    catch(e){

                    }
                  break;                  
                  case 14:
                    for(var i=0; i< 5; i++){

                      try{
                        if(this.placedCrewID[i-1] != -1 && this.placedCrewID[i-1] != 0){
                          for(var z = 1; z < 6; z++){
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
                for(var k = 1; k < 6; k++){
                  if(this.chosen[k].id == 1){
                    this.crewSpeak(k,"Deployment order matters!\nPut me in first")
                  }
                }              
              }
              if(parseInt(localStorage.getItem("intro")) == 5 && chosen.id != 90){
                chosen.isSelected = false;
                this.selectedCrew = 0
                this.noPickUp = true;              
                for(var k = 1; k < 6; k++){
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
                
                this.crewSpeak(1,"Let's get that treasure!")
                this.crew[1].speechTimer = 75;
              }        
              if(parseInt(localStorage.getItem("intro")) == 4 && chosen.id != 92){
                chosen.isSelected = false;
                this.selectedCrew = 0
                this.noPickUp = true;     
                
                this.crewSpeak(4,"Let's save that sailor!")
                this.crew[4].speechTimer = 75;
              }                        
              if(parseInt(localStorage.getItem("intro")) < 8 && parseInt(localStorage.getItem("intro")) >= 5){
                chosen.isSelected = false;
                
                this.noPickUp = true;     


                if(parseInt(localStorage.getItem("intro")) == 5){
                  this.selectedCrew = 0
                  this.setFocus(200,this.ult_Button.x-25,this.ult_Button.y)   
                  this.crewSpeak(chosen.arrayKey,"Don't forget your ability, Captain!")
                  chosen.speechTimer = 75;
                }                              
                if(parseInt(localStorage.getItem("intro")) == 6 ){
                  this.setFocus(200,this.endTurn_Button.x,this.endTurn_Button.y)   
                  this.crewSpeak(chosen.arrayKey,"Now click 'Fight' to begin combat!")
                  chosen.speechTimer = 75;
                }                    
              }
              if(parseInt(localStorage.getItem("intro")) == 8 || parseInt(localStorage.getItem("intro")) == 10){      
                chosen.isSelected = false;
                this.noPickUp = true;                  
                this.setFocus(200,this.endTurn_Button.x,this.endTurn_Button.y)   
                this.crewSpeak(chosen.arrayKey,"Now click 'Fight' to begin combat!")
                chosen.speechTimer = 75;      
              }   
              


              
             

              /*
              if(parseInt(localStorage.getItem("intro")) == 10 && crew.id != 3){
                crew.isSelected = false;
                this.selectedCrew = 0
                this.noPickUp = true;              
                for(var k = 1; k < 6; k++){
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
                  this.crewSpeak(chosen.arrayKey,"Already deployed, Captain")
                  chosen.speechTimer = 50
                }
                else{
                  this.crewSpeak(chosen.arrayKey,"Not enough Savvy, Captain")
                  chosen.speechTimer = 50
                }

              }

              chosen.isSelected = false;
              //this.selectedCrew = 0
              this.noPickUp = true;            
            }
          }


          

          
        }
        , reroll: function () {
          if(this.reRoll_Button.alpha > 0){
            if(this.reRoll_Counter > 0){
              this.tips.hideTooltip()
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
      
                  if(this.chestCount % 2 == 0){
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
                  
                  if(this.chestCount % 3 == 0){
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
                
                  this.treasureOptions[ii].boonVal = Math.floor(Math.random() * 3)+1;      
                  if (parseInt(localStorage.getItem("intro")) < 12) {
                    if(this.treasureOptions[ii].boonVal == 3){
                      this.treasureOptions[ii].boonVal = 2;
                    }
                  }         
                }      
              }               
          
            }
          }

        
        }
        , showInfo: function (crewItem) {
          
          if(this.removeFromCrew && crewItem.arrayKey != 5 && !crewItem.isBlank){
            this.tips.hideTooltip();
            this.crewOptions[1].deployText.text = this.crew[crewItem.arrayKey].deployCost
            this.crewOptions[1].powerText.text = this.crew[crewItem.arrayKey].origPower
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

            this.crew[crewItem.arrayKey].isDeployed = false;
            
            
            this.crewOptions[1].loadTexture(this.crew[crewItem.arrayKey].texture)
            for(var i = 1; i < 6; i++){
              this.crewSelect[i].alpha = 0; 
            }            
            this.crewSelect[crewItem.arrayKey].alpha = 1            
          }

          if(this.addToCrew && crewItem.arrayKey != 5 && !crewItem.isBlank){
            this.tips.hideTooltip()
            
            var blankCheck = false
            if(!crewItem.isBlank){
              for(var i = 1; i < 6; i++){
                this.crewSelect[i].alpha = 0; 
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

          if(!crewItem.isBlank && !this.removeFromCrew && !this.addToCrew){
            if(this.noPickUp && this.deployReady){
              for(var i = 1; i < 6; i++){
                this.crewSelect[i].alpha = 0; 
              }            
              
              this.selectedCrew = crewItem.arrayKey
              this.crewSelect[crewItem.arrayKey].alpha = 1
              //this.noPickUp = true;
            }
  
          }
          



          
        }  
        , unShowInfo: function () {


          this.tips.hideTooltip() 
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
          
          if(this.addToCrew){
            this.tips.updatePosition(text.x, text.y+100)
          }
          else{
            
          }
          this.tips.updatePosition(text.x, text.y+150)
          
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
          this.cap_healthText2.text = "+"+value
          this.cap_healthText2.y = this.cap_healthText.y   
            //captain heal effects
            for(var z = 1; z < 6; z++){
              if(this.crew[z].id == 26){
                this.crew[z].origPower += 1
                this.crew[z].powerUpParticle.x = this.crew[i].powerText.x
                this.crew[z].powerUpParticle.y = this.crew[i].powerText.y
                this.crew[z].powerUpParticle.makeParticles('sparkle');
                this.crew[z].powerUpParticle.setScale(1, 1, 1, 1);                  
                this.crew[z].powerUpParticle.maxParticleSpeed.set(100,100);
                this.crew[z].powerUpParticle.explode(500);   
                var ranPhrase = Math.floor(Math.random() * 2)
                if(ranPhrase == 0){
                  this.crewSpeak(z,"I'm getting pumped up!")
                }
                else{
                  this.crewSpeak(z,"Let's Go!")
                }                  
              }
            }                 
        }   
        , damageCaptain: function (enemy) {

            if(parseInt(localStorage.getItem("intro")) == 10){
              var ranPhrase = Math.floor(Math.random() * 2)   
              if(ranPhrase == 0){
                this.crewSpeak(1,"Captain!")
              }
              else{
                this.crewSpeak(1,"Oh No!")
              }      
              this.crew[1].speechTimer = 75; 
            }

            var ran = Math.floor(Math.random() * 10)+1;
            this.hurtSnd[ran].play();
            this.captainHurt = true;
            this.game.plugins.screenShake.shake(15); 
            this.cap_healthText2.alpha = 1
            if(typeof enemy === 'object' && enemy !== null){
              this.cap_healthValue -= parseInt(enemy.power);  
              this.cap_healthText2.text = "-"+enemy.power
              this.cap_healthText2.y = this.cap_healthText.y

              this.hurtTimer = 10;
              //can't die during tutorial
              if (parseInt(localStorage.getItem("intro")) <= 12 && this.cap_healthValue < 0) {
                this.cap_healthValue= 1;
                this.crewSpeak(1, "We won't let the Captain die during the tutorial!") 
                this.crew[1].speechTimer = 75;                   
              } 
              
              if(this.cap_healthValue <= 0){
                this.bgSound.stop();
                if(this.transWaveKey != 1){
                  localStorage.setItem('defeatedBy',(enemy.monID-1))
                }
                
                this.transWaveKey = 1
                this.transTar = 'lose'                          
                //this.game.state.start('lose');
              }  
            }
            else{
              this.cap_healthValue -= parseInt(enemy);  
              this.cap_healthText2.text = "-"+enemy
              this.cap_healthText2.y = this.cap_healthText.y

              this.hurtTimer = 10;

              if(this.cap_healthValue <= 0){
                this.bgSound.stop();
                if(this.transWaveKey != 1){
                  localStorage.setItem('defeatedBy',"KARMA")
                }
                
                this.transWaveKey = 1
                this.transTar = 'lose'                          
                //this.game.state.start('lose');
              }  
            }
            //captain hurt effects
            for(var z = 1; z < 6; z++){
              if(this.crew[z].id == 25){
                this.crew[z].origPower += 2
                this.crew[z].powerUpParticle.x = this.crew[z].powerText.x
                this.crew[z].powerUpParticle.y = this.crew[z].powerText.y
                this.crew[z].powerUpParticle.makeParticles('sparkle');
                this.crew[z].powerUpParticle.setScale(1, 1, 1, 1);                  
                this.crew[z].powerUpParticle.maxParticleSpeed.set(100,100);
                this.crew[z].powerUpParticle.explode(500);   
                var ranPhrase = Math.floor(Math.random() * 2)
                if(ranPhrase == 0){
                  this.crewSpeak(z,"Captain! No!")
                }
                else{
                  this.crewSpeak(z,"Defend the Captain!")
                }     
                          
                
              }
            }
          
            


                        
         
          
        }
        ,highLightAffect: function (item){
          
          
          //item.targetY = item.origtargetY-50;
           
          if(this.addToCrew ){
            this.updatetoolTip(this.crewOptions[item.id].ability)



            for(var i = 1; i < 6; i++){
              this.crewSelect[i].alpha = 0;    
              if(this.crewOptions[item.id].value == this.crew[i].id){
                this.crewSelect[i].alpha = 1;    
              }
            }
            
          
          }

          if(!this.addToCrew || (this.removeFromCrew && (item.id > 0))){
            //bomb highlights
            var treasure = this.treasureOptions[item.id]
            var calBoon = parseInt(''+this.treasureOptions[item.id].rarity+this.treasureOptions[item.id].boonVal)
            if(treasure.value == 200 || treasure.value == 201){
              calBoon = treasure.value
            }          
            
            switch(calBoon){
              case 11:
                //this.cap_healthValue += 5
                break;
              case 21:
                //this.cap_healthValue += 10
                break;
              case 32:
                //steel bonus - 0- steel, 1 - salt, 2 -smoke
                for(var i = 1; i < 6; i++){
                  if(this.crew[i].type == 0){
                    if(!this.crew[i].isBlank){
                      this.crewSelect[i].alpha = 1;     
                      this.crewDeployed[i].alpha = 0; 
                    }
                  }
                }              
                break;
              case 12:
                //this.deploy_poolMax += 1
                break;           
              case 22:
                //this.deploy_poolMax += 2
                break;
              case 31:
                //salt bonus - 0- steel, 1 - salt, 2 -smoke        
                for(var i = 1; i < 6; i++){
                  if(this.crew[i].type == 1){
                    if(!this.crew[i].isBlank){
                      this.crewSelect[i].alpha = 1;     
                      this.crewDeployed[i].alpha = 0; 
                    }

                  }
                }    
                break;
              case 13:
                this.crewSelect[5].alpha = 1;     
                this.crewDeployed[5].alpha = 0;       
                break;
              case 23:
                this.crewSelect[5].alpha = 1;          
                this.crewDeployed[5].alpha = 0;         
                break;        
              case 33:
                //smoke bonus - 0- steel, 1 - salt, 2 -smoke          
                for(var i = 1; i < 6; i++){
                  if(this.crew[i].type == 2){
                    if(!this.crew[i].isBlank){
                      this.crewSelect[i].alpha = 1;     
                      this.crewDeployed[i].alpha = 0; 
                    }
                  }
                }              
                break;    
              case 10:
                break; 
              case 200:
                break;                                                                    

            }
            //this.treasureOptions[item.id].y -= 50;

            this.treasureSparkle.alpha = 1
            this.treasureSparkle.y = 150+this.game.height/3-50
            this.treasureSparkle.x = this.treasureOptions[item.id].x
            this.animateHover(this.treasureOptions[item.id])
            if(this.removeFromCrew && (item.id > 0)){
              this.updatetoolTip(this.crewOptions[item.id].ability)
            }
            

          
          }



  
          if( (this.addToCrew &&  parseInt(localStorage.getItem("intro")) == 8) && (item.id != 1) ){
            this.treasureSparkle.alpha = 0
            this.tips.hideTooltip()
            
          }
          else{
            this.treasureSparkle.alpha = 1
            this.treasureSparkle.y = 150+this.game.height/3-50
            this.treasureSparkle.x = this.treasureOptions[item.id].x
            this.animateHover(this.treasureOptions[item.id])
            
          }  
          
          if(this.removeFromCrew && item.id == 0){
            this.treasureSparkle.alpha = 0
            this.tips.hideTooltip()
          }
                  
        }   
        ,unhighLightAffect: function (item){
        


          if(!this.addToCrew && !this.removeFromCrew){
            for(var i = 1; i < 6; i++){
              this.crewSelect[i].alpha = 0;     
              this.crewDeployed[i].alpha = 1; 
            }
          }

          this.treasureSparkle.alpha = 0
          this.returnOrig(this.treasureOptions[item.id])  
        }
        , crewTint: function (crew , tile){
          var key = tile.id.split("");
          var j = parseInt(key[0])
          var i = parseInt(key[1])

          
          //console.log(key)
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
                  }
                }       
                for(var l = 0; l < this.boardHeight; l++){
                  for(var m = 0; m < this.boardWidth; m++){
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
        , showAttackRange: function (tile){
          
          if(this.cursorSelect.alpha > 0){
            this.crewTint(this.crew[this.selectedCrew], tile)
            //this.crewTint(parseInt(this.crew[this.selectedCrew].attackPattern), tile)
          }

        }
        , hideAttackRange: function (){
          if(this.cursorSelect.alpha > 0){
            this.removeTint();
          }       
        }        
        , spawnSplash: function (key){
          if(this.tileSplash[key].alpha <= 0 && this.tileSplash[key].alphaTimer == 0 ){

            //this.resetRipple();
            //this.tile[key].rippleTrig = 1


            //console.log("SPLASH")
            this.tileSplash[key].alpha = 1
            this.tileSplash[key].alphaTimer = 25;
            this.tileSplash[key].x =this.tile[key].x
            this.tileSplash[key].y =this.tile[key].y

            var ran = Math.floor(Math.random() * 4)+1;
            this.splashSnd[ran].play()               
          } 
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
              allowOutsideClick: false,
              allowEscapeKey: false                  
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
        , exitVoyage: function () {
          this.tutorialPause = true;
          this.chatTimer = 1;           
          Swal.fire({
            title: 'End Voyage?',
            text: "You won't keep any of the treasure gathered so far ...",
            imageUrl: 'assets/whiteFlag.png',
            imageWidth: 200,
            imageHeight: 200,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',  
            cancelButtonText: 'No',
            allowOutsideClick: false,
            allowEscapeKey: false                                
          }).then((result) => {
            if (result.isConfirmed){
              this.bgSound.stop();
              this.transWaveKey = 1
              this.transTar = 'selectCap'  
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
        }
        , hideOutline2: function () {
          if(this.chatTimer == 0){
            this.endTurn_Button_outline.alpha = 0;
            this.endTurn_Button.loadTexture("ui_endTurn_Button")            
          }

        }     
        , showOutline3: function () {
          if(this.chatTimer == 0){
            this.ult_Button_outline.alpha = 1
            this.ult_Button_hover.loadTexture('ui_ult_button_outline_hover') 
          }

        }
        , hideOutline3: function () {
          this.ult_Button_outline.alpha = 0;
          this.ult_Button_hover.loadTexture('ui_ult_button_outline_noHover') 
        }    
        , showOutline4: function () {
          this.reRoll_Button_outline.alpha = 1
          for(var i = 1; i < 6; i++){
            this.crewSelect[i].alpha = 0; 
          }            
        }
        , hideOutline4: function () {
          this.reRoll_Button_outline.alpha = 0;
        }       
        , showOutline5: function () {
          this.exit_Button_outline.alpha = 1
        }
        , hideOutline5: function () {
          this.exit_Button_outline.alpha = 0;
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

            
           
            this.timer = this.game.time.create(true);
            this.timer.add(1000, function(splash){
              splash.y += 100
              splash.alphaTimer = 50
              splash.alpha = 1;
              var ran = Math.floor(Math.random() * 4)+1;
              this.splashSnd[ran].play()                    
            },this, this.crew[i].splash);
            this.timer.start();   
            
            

            for(var i = 1; i < 6; i++){
              this.crewSelect[i].alpha = 0; 
            }           
            
            var i = this.crewOptionKey;
    

            this.crew[i].id = this.crewOptions[2].value
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

            this.tips.hideTooltip()
            
            this.crewSpeak(i,"Thanks for having me on board,\nCaptain!")
            this.crew[i].speechTimer = 100
            
            this.chatTimer = 0;
            this.removeFromCrew = false; 
            this.addToCrew = false;
            
            this.removeCrew_Button.y = this.game.height +300; 
            this.removeCrewSkip_Button.y = this.removeCrew_Button.y + 75  

            this.removeCrew_Button.y =  this.game.height +300;                     
            this.removeCrew_Button_Text.alpha = 0//this.reRoll_Text.alpha 
            this.removeCrew_Button_Text.y = this.removeCrew_Button.y-5 

            this.removeCrewSkip_Button_Text.alpha = 0//this.reRoll_Text.alpha 
            this.removeCrewSkip_Button_Text.y = this.removeCrewSkip_Button.y-5            

            this.treasureSparkle.alpha = 0;

         
            //this.addToCrew = true;
            //this.removeFromCrew = false;
            
            //this.monKillCount--
            //this.reRoll_Counter++
            //this.reroll();                  
          }
    


           

        } 
        , saveSoulNow: function (){

          
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
              this.crewOptions[i].statInc.alpha = 0;

              var ranRarity = Math.floor(Math.random() * 10)+1
              
              
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
        }
        , openChestNow: function (){

          //spawn treasures
          
          //this.chatTimerCount = chatTimerBase;
          //this.monKillCount--

          if(this.chatTimer != 1){
            for (var ii = 0; ii < 3; ii++){
              this.treasureOptions[ii].rarity = Math.floor(Math.random() * 3)+1;
              var rand = Math.floor(Math.random() * 5)
              if(rand == 0){
                this.treasureOptions[ii].rarity = 2
              }
              else{
                this.treasureOptions[ii].rarity = 1
              }                

              if(this.chestCount % 2 == 0){
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
              
              if(this.chestCount % 3 == 0){
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
            
              this.treasureOptions[ii].boonVal = Math.floor(Math.random() * 3)+1;       

            // always savvy on first chest
            if(this.turnCountNum == 2){
              //alert(this.treasureOptions[0].boonVal+"-"+this.treasureOptions[1].boonVal)
              this.treasureOptions[1].boonVal = 2

            } 
            // no bombs til after tutorial
            if (parseInt(localStorage.getItem("intro")) < 12) {
              if(this.treasureOptions[ii].boonVal == 3){
                this.treasureOptions[ii].boonVal = 2;
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