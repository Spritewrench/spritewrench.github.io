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

            this.bg2 = this.add.sprite(0, 0, 'ui_back');
            this.bg2.width = this.game.width
            this.bg2.height = this.game.height    

            this.combatOrder  = this.add.sprite(0, 0, 'combatOrder');
            this.combatOrder .width = this.game.width
            this.combatOrder .height = this.game.height              
            
            this.selectInfo = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            this.selectInfo.width = this.game.width
            this.selectInfo.height = this.game.height   

            this.selectInfoDetail = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            this.selectInfoDetail.width = this.game.width
            this.selectInfoDetail.height = this.game.height               

            this.capInfo = this.add.sprite(-this.game.width, 0, 'capInfoPanel');
            this.capInfo.width = this.game.width
            this.capInfo.height = this.game.height                  
            
            
            this.selectName = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-450, '10', {font: '28px LondrinaSolid-Black',fill: '#7E615F', align: 'left'});
            //this.selectName.anchor.setTo(0.5, 0.5);    

            this.selectStats = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-410, '10', {font: '28px LondrinaSolid-Black',fill: '#7E615F', align: 'left', wordWrap: true, wordWrapWidth: 450  });
            //this.selectStats.anchor.setTo(0.5, 0.5); 

            this.selectAbility = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-370, '10', {font: '28px LondrinaSolid-Black',fill: '#7E615F', align: 'left'});
            //this.selectAbility.anchor.setTo(0.5, 0.5); 

                           
            
            this.cap_health = this.add.sprite(125, this.game.height-125, 'ui_cap_health');
            this.cap_health.anchor.setTo(0.5, 0.5);
            this.cap_healthText = this.add.text(this.cap_health.x,this.cap_health.y, '10', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.cap_healthText.anchor.setTo(0.5, 0.5);

            this.cap_health.origWidth = this.cap_health.width
            this.cap_health.origHeight = this.cap_health.height
            this.cap_healthValue = 25;         

            this.deploy_pool = this.add.sprite(375, this.game.height-100, 'ui_deploy_pool');
            this.deploy_pool.anchor.setTo(0.5, 0.5);
            this.deploy_poolText = this.add.text(this.deploy_pool.x,this.deploy_pool.y+15, '3/3', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.deploy_poolText.anchor.setTo(0.5, 0.5);   
            
            
            //to be determined by selected ship
            this.deploy_poolCurrent = 4;
            this.deploy_poolMax = 4

            this.clear_Button = this.add.sprite(this.game.width-500, this.game.height-300, 'ui_clear_button');            
            this.clear_Button.inputEnabled = true;
            this.clear_Button.events.onInputDown.add(this.clearBoard, this);     

            this.endTurn_Button = this.add.sprite(this.game.width-500, this.game.height-175, 'ui_endTurn_Button');            
            this.endTurn_Button.inputEnabled = true;
            this.endTurn_Button.events.onInputDown.add(this.endDeployPhase, this);   
            

            this.ult_text = this.add.text(70,this.game.height-400, 'CAPTAIN ROSE \n SKILL: DEAL 1 DAMAGE TO ALL ENEMIES', {font: '28px LondrinaSolid-Black',fill: '#7E615F', align: 'left'});
            this.ult_text.angle = -2

            /*
            this.ult_pool = this.add.sprite(this.game.width-500, this.game.height-350, 'ui_deploy_pool');
            this.ult_pool.anchor.setTo(0.5, 0.5);
            this.ult_pool.width = 100;
            this.ult_pool.height = 100;
            this.ult_poolText = this.add.text(this.ult_pool.x,this.ult_pool.y+15, '3/3', {font: '26px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.ult_poolText.anchor.setTo(0.5, 0.5);               
            */

            this.ult_Button = this.add.sprite(this.game.width-500, this.game.height-280, 'ui_ult_buttonReady'); 
            this.ult_Button.anchor.setTo(0.5, 0.5);           
            this.ult_Button.inputEnabled = true;
            this.ult_Button.events.onInputDown.add(this.captainUlt, this);   
            this.ult_Button.width =500/1.5
            this.ult_Button.height = 200/1.5    

            
            text = text.split("");
            var textKey = 0;

            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            this.input.onDown.add(this.onDown, this);
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
            this.monCount = 3;
            this.monBaseCount = 3;
            this.deployCrewCount = 0;
            
            x = (this.game.width/2)-((Math.floor(this.boardWidth/2)*this.size)+(this.size/2)-(this.spacing*this.boardWidth))

          this.crewOrder = []
          this.placeOrderKey = 0;
          this.placeOrderTracker = 0;

         
   
          

          for(var i = 0; i < 5; i++){

            this.crewOrder[i] = this.add.sprite(x+distX, y+distY-100, 'blankCrew');
            this.crewOrder[i].anchor.setTo(0.5, 0.5);
            this.crewOrder[i].width = 100;
            this.crewOrder[i].height = 100;
            distX += this.crewOrder[i].width+this.spacing

            this.crewOrder[i]

            this.crewOrder[i].healthText = this.add.text(this.crewOrder[i].x-(this.size/2),this.crewOrder[i].y+(this.size/2)-16, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOrder[i].healthText.anchor.setTo(0.5, 0.5); 

            this.crewOrder[i].powerText = this.add.text(this.crewOrder[i].x-(this.size/2),this.crewOrder[i].y+(this.size/2)-16, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOrder[i].powerText.anchor.setTo(0.5, 0.5);             
          }

          var distX = 0;
          var distY = 0;
          for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){
                
                this.tile[''+j+i] = this.add.sprite(x+distX, y+distY+25, 'tile');
                this.tile[''+j+i].origX = this.tile[''+j+i].x;
                this.tile[''+j+i].origY = this.tile[''+j+i].y;
                this.tile[''+j+i].y = 1000;
              
                this.tile[''+j+i].loadSpeed =  0.2//(Math.random() * 0.3)+0.1;
                this.tile[''+j+i].anchor.setTo(0.5, 0.5);
                this.tile[''+j+i].width = this.size;
                this.tile[''+j+i].height = this.size;      
                this.tile[''+j+i].id = ''+i+j;
                this.tile[''+j+i].isCrewHere = false
                this.tile[''+j+i].crewID = 0
                this.tile[''+j+i].isEnemyHere = false
                this.tile[''+j+i].monID = 0

                this.tile[''+j+i].posX = j
                this.tile[''+j+i].posY = i

                this.tile[''+j+i].hp = 0

                this.tile[''+j+i].healthText = this.add.text(this.tile[''+j+i].x-(this.size/2),this.tile[''+j+i].y+(this.size/2)-3, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].healthText.anchor.setTo(0.5, 0.5); 

                this.tile[''+j+i].power = 0
                this.tile[''+j+i].powerText = this.add.text(this.tile[''+j+i].x-(this.size/2),this.tile[''+j+i].y+(this.size/2)-3, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].powerText.anchor.setTo(0.5, 0.5);                 


                this.tile[''+j+i].inputEnabled = true;
                this.tile[''+j+i].events.onInputDown.add(this.placeCrew, this);                




                distX += this.tile[''+j+i].width+this.spacing
                if(distX > this.size*this.boardWidth){
                  distX = 0;
                  distY += this.tile[''+j+i].height+this.spacing
                }                  
                
              }

          }
          //treasure UI
          var distX = 0
          var spacing = 60
          this.collectedTreasure = []
          this.collectedTreasureText = []
          for(var i = 1 ; i < 10; i++){
            this.collectedTreasure[i] = this.add.sprite(((this.game.width/2)+420)+distX , 50, 'treasureUI_'+i);
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
          this.freeCounterNum = 10;      


          this.crewCode ="12345"
          var crewMates = this.crewCode.split("");
          for(var i = 1; i < 6; i++){
            this.crewSelect[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crewSelect');
            this.crewSelect[i].anchor.setTo(0.5, 0.5);
            this.crewSelect[i].width = size;
            this.crewSelect[i].height = size;   
            this.crewSelect[i].alpha = 0;   
            this.crewSelect[i].id = i    

            this.crew[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crew-'+crewMates[i-1]);
            this.crew[i].anchor.setTo(0.5, 0.5);
            this.crew[i].width = size;
            this.crew[i].height = size;    
            this.crew[i].id = parseInt(crewMates[i-1])
            this.crew[i].origX = this.crew[i].x
            this.crew[i].origY = this.crew[i].y
            this.crew[i].isDeployed = false;
            this.crew[i].isSelected = false;

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
            
            switch(this.crew[i].id){
              case 1:
                this.crew[i].deployCost = 1;
                this.crew[i].name = "REVA 'DOC' BONNY"
                this.crew[i].power = 1
                this.crew[i].origPower = this.crew[i].power
                this.crew[i].attackPattern = 1
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "BOOST STRIKE - NEXT CREW MATE GETS +1 POWER"
                break;
              case 2:
                this.crew[i].deployCost = 1;
                this.crew[i].name = "RACHEL WALL"
                this.crew[i].power = 0
                this.crew[i].origPower = this.crew[i].power
                this.crew[i].attackPattern = 4
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "SHOVE STRIKE - KNOCK BACK ALL ENEMIES IN THE SAME ROW AND COLUMN"                       
                break;
              case 3:
                this.crew[i].deployCost = 2;
                this.crew[i].name = "GRACE O'MALLEY"
                this.crew[i].power = 2
                this.crew[i].origPower = this.crew[i].power
                this.crew[i].attackPattern = 3
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "ROW STRIKE - ON COMBAT FIGHT ALL ENEMIES IN THE SAME ROW"                  
                break;
              case 4:
                this.crew[i].deployCost = 2;
                this.crew[i].name = "PETE 'GUNNER' EASTON"
                this.crew[i].power = 2
                this.crew[i].origPower = this.crew[i].power
                this.crew[i].attackPattern = 2
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "COLUMN STRIKE - ON COMBAT FIGHT ALL ENEMIES IN THE SAME COLUMN"                   
                break;  
              case 5:
                this.crew[i].deployCost = 0;
                this.crew[i].name = "RELIABLE CANNON SHOT"
                this.crew[i].power = 2
                this.crew[i].origPower = this.crew[i].power
                this.crew[i].attackPattern = 4
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "SPREAD STRIKE"                         
                break;                                                
            }
            

            this.crew[i].deployText.text = this.crew[i].deployCost
            this.crew[i].powerText.text = this.crew[i].power
            
            this.crew[i].inputEnabled = true;
            this.crew[i].events.onInputDown.add(this.crewSelected, this);

            distX += (size+space)
          }
          
          this.freeCounter.x = this.crew[5].x+10
          this.freeCounter.y = this.crew[5].y-50
          this.freeCounterText.x = this.freeCounter.x-5
          this.freeCounterText.y = this.freeCounter.y-25
          this.freeCounterText.angle = -15

          this.selectedCrew = 0;
          //selected crew
          this.cursorSelect = this.add.sprite(0, 0, 'crewSelect');
          this.cursorSelect.anchor.setTo(0.5, 0.5);
          this.cursorSelect.alpha = 0

          var key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
          key1.onDown.add(this.movePlayer, this);           
          var key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
          key2.onDown.add(this.movePlayer, this);          
          var key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
          key3.onDown.add(this.movePlayer, this);           
          var key4 = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
          key4.onDown.add(this.movePlayer, this); 
          var key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
          key5.onDown.add(this.movePlayer, this);
    
          var key6 = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
          key6.onDown.add(this.movePlayer, this);      
          
          var key7 = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
          key7.onDown.add(this.movePlayer, this);      
          var key8 = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
          key8.onDown.add(this.movePlayer, this);                              


          this.chatTimer = 0;
          this.game.input.mousePointer.rightButton.onDown.add(this.deselect, this)

          this.turnMarker = this.add.sprite(this.game.width/2, this.game.height+this.game.height/2, 'turnMarker');
          this.turnMarker.anchor.setTo(0.5, 0.5);   
          this.turnMarker.width = this.game.width
          this.turnMarker.height = this.game.height          

          this.turnMarkerText = this.add.text(this.turnMarker.x-100,this.turnMarker.y, 'ENEMY TURN', {font: '120px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.turnMarkerText.anchor.setTo(0.5, 0.5);   

          this.turnCounter = 75;
          
          this.turnCounterStart = this.turnCounter
          this.phaseCounter = 0;

          this.turnWait = 0
          this.ActionCounter = 0;;
          this.actionTimer = 0;

          this.turnCountText = this.add.text(450,50, 'TURN #1 ', {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.turnCountText.anchor.setTo(1, 0.5);  
          this.turnCountNum = 0 
          
          this.scoreCountUI = this.add.sprite(125,50, 'coinCount');
          this.scoreCountUI.anchor.setTo(0.5, 0.5);  

          this.scoreCount = this.add.text(this.scoreCountUI.x,this.scoreCountUI.y, '0', {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'left'});
          this.scoreCount.anchor.setTo(0.5, 0.5);  
          this.scoreCountNum = 0           
          
          this.endbuttonTimer = 0;
          this.clearbuttonTimer = 0;
          this.ultbuttonTimer = 0;

          this.capEnergy = 0;
          

          this.overlay = this.add.sprite(0, 0, 'bgOverlay');
          this.overlay.width = this.game.width
          this.overlay.height = this.game.height      
          this.overlay.alpha = 0;    


          this.treasureOptions = []
          distX = -450
          spacing = 650;
          for(var i =0; i < 3; i++){

            this.treasureOptions[i] = this.add.sprite(x+distX, this.game.height*10 , 'treasure_1');
            this.treasureOptions[i].anchor.setTo(0.5, 0.5);
            this.treasureOptions[i].value = 1;
            this.treasureOptions[i].inputEnabled = true;
            this.treasureOptions[i].events.onInputDown.add(this.selectTreasue, this);            
            this.treasureOptions[i].alpha = 0;
            distX += spacing
          }

          this.transition = this.add.sprite(0, -this.game.height, 'winBG');
          this.transition.width = this.game.width
          this.transition.height = this.game.height      

          this.transTimer = -1
          

        }
        , update: function () {
          
          if(this.chatTimer == 0){


            //UI 
            //hide pause
            this.overlay.alpha = 0;           
            
            for(var i =0; i < 3; i++){
              this.treasureOptions[i].alpha = 0;
              this.treasureOptions[i].loadTexture("treasure_"+this.treasureOptions[i].value)
              this.treasureOptions[i].y += ( this.game.height*10 - this.treasureOptions[i].y) * 0.2;
              
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
            this.scoreCount.text = this.scoreCountNum

            //combat order
            this.placedCrew = []
            this.placedCrewID = []
            this.placedCrewKey = 0;

            this.placedCrewID[0] = -1;
            this.placedCrewID[1] = -1;
            this.placedCrewID[2] = -1;
            this.placedCrewID[3] = -1;
            this.placedCrewID[4] = -1;

            for(var l = 0; l < this.boardHeight; l++){
              for(var m = 0; m < this.boardWidth; m++){
                if(this.tile[""+m+l].placeOrder >= 0){

                  this.placedCrew[this.tile[""+m+l].placeOrder] =this.tile[""+m+l].texture
                  this.placedCrewID[this.tile[""+m+l].placeOrder]= this.tile[""+m+l].crewID
                  //this.placedCrewKey++
                }
                if(this.tile[""+m+l].isCrewHere){
                  //old order logic
                  /*
                  this.placedCrew[this.placedCrewKey] =this.tile[""+m+l].texture
                  this.placedCrewID[this.placedCrewKey]= this.tile[""+m+l].crewID
                  this.placedCrewKey++
                  */
                  //alert("!")

                }


        
              }
            }            
            for(var i=0; i< 5; i++){
              
              
              if(this.placedCrewID[i] != -1 && this.placedCrewID[i] != 0){
                this.crewOrder[i].alpha = 1
                this.crewOrder[i].loadTexture(this.placedCrew[i])

                
                //next up effects 
                this.crew[this.placedCrewID[i]].power = this.crew[this.placedCrewID[i]].origPower  
                if(i > 0){
                  
                  if(this.placedCrewID[i-1] == 1 ){
                    
                    this.crew[this.placedCrewID[i]].power = this.crew[this.placedCrewID[i]].origPower+1
                    
                  }
                  
                }
                
                this.crewOrder[i].healthText.x = this.crewOrder[i].x-(this.size/2)+23
                
                
                this.crewOrder[i].healthText.text = this.crew[this.placedCrewID[i]].deployCost
                this.crewOrder[i].powerText.x = this.crewOrder[i].x+(this.size/2)-22       
                this.crewOrder[i].powerText.text = this.crew[this.placedCrewID[i]].power
                this.crewOrder[i].healthText.addColor("#232727", 0)
                this.crewOrder[i].powerText.addColor("#FFF", 0)
                if(parseInt(this.crew[this.placedCrewID[i]].origPower) > parseInt(this.crew[this.placedCrewID[i]].power)){
                          
                  this.crewOrder[i].powerText.addColor("#BA363B", 0)
                }
                if(parseInt(this.crew[this.placedCrewID[i]].origPower) < parseInt(this.crew[this.placedCrewID[i]].power)){
                  this.crewOrder[i].powerText.addColor("#30B64A", 0)
                }                  

                this.crewOrder[i].width = 100;
                this.crewOrder[i].height = 100; 
                

              }
              else{
                this.crewOrder[i].healthText.text = ""
                this.crewOrder[i].powerText.text = ""
                this.crewOrder[i].alpha = 0;
              }
                  
                 
            }
            
            //cap info panel
            this.capInfo.x += (0 - this.capInfo.x) * 0.2;
            //this.capEnergy >= 9 
            if(this.phaseCounter == 1 && this.deploy_poolCurrent >= 4){

              this.ult_Button.loadTexture('ui_ult_buttonReady');
              this.ult_Button.y = this.game.height-280
              //this.ult_pool.y = this.game.height-360              
            }
            else{
              this.ult_Button.loadTexture('ui_ult_buttonNotReady');
              //this.ult_Button.y = this.game.height-280
              //this.ult_pool.y = this.game.height-340
            }
            this.ult_Button.x += ((this.capInfo.x+350) - this.ult_Button.x) * 0.2;
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
                switch(monInfoKey){
                  case 2:
                    this.selectName.text = "NAME: TENTACLE [RIGHT]"
                    this.selectStats.text = ""
                    this.selectAbility.text = ""                    
                    break;
                  case 3:
                    this.selectName.text = "NAME: TENTACLE [LEFT]"
                    this.selectStats.text = ""
                    this.selectAbility.text = ""                       
                    break;
                  case 4:
                    this.selectName.text = "NAME: KRAKEN"
                    this.selectStats.text = "ABILITY: SPAWN TENTACLES ON COMBAT"
                    this.selectAbility.text = ""                       
                    break;
                  case 5:
                    this.selectName.text = "NAME: SEA SERPENT"
                    this.selectStats.text = ""
                    this.selectAbility.text = ""                      
                    break;
                  case 6:
                    this.selectName.text = "NAME: LEVIATHAN"
                    this.selectStats.text = ""
                    this.selectAbility.text = ""                       
                    break;
                  case 7:
                    this.selectName.text = "NAME: SCYLLA"
                    this.selectStats.text = ""
                    this.selectAbility.text = ""                       
                    break;
                  case 8:
                    this.selectName.text = "NAME: GHOST"
                    this.selectStats.text = "ABILITY: IMMUNE TO DAMAGE FROM ABOVE AND BELOW"
                    this.selectAbility.text = ""                     
                    break;  
                  case 9:
                    this.selectName.text = "NAME: WRAITH"
                    this.selectStats.text = "ABILITY: IMMUNE TO DAMAGE FROM ABOVE AND BELOW"
                    this.selectAbility.text = ""                        
                    break;
                  case 10:
                    this.selectName.text = "NAME: SHADOW"
                    this.selectStats.text = "ABILITY: IMMUNE TO DAMAGE FROM ABOVE AND BELOW"
                    this.selectAbility.text = ""                        
                    break;
                  case 99:
                    this.selectName.text = "NAME: CURSED CHEST"
                    this.selectStats.text = "NOTE: CURSED YA SAY? I'M SURE IT'LL BE FINE ..."
                    this.selectAbility.text = ""                        
                    break;                                                                                                                                                                

                }

                

                this.selectInfoDetail.loadTexture("selectInfoPanel-"+this.selectedCrew)

              }
              else{
                
                this.selectName.text = "NAME: "+this.crew[this.selectedCrew].name
                this.selectStats.text = "ABILITY: \n"+this.crew[this.selectedCrew].ability
                this.selectAbility.text = ""
                

                this.selectInfoDetail.loadTexture("selectInfoPanel-"+(this.crew[this.selectedCrew].id-1))

              }
              this.selectInfo.x += ( 0 - this.selectInfo.x) * 0.2;
              this.selectName.angle = 3;
              this.selectStats.angle = 3;
              this.selectAbility.angle = 3;
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
              this.clear_Button.y = this.game.height-300+35
            }
            else{
              this.clear_Button.y = this.game.height-300
            }

            //check if win
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
                  var score = parseInt(sessionStorage.getItem("highScore"))
                  sessionStorage.setItem("currentScore",this.scoreCountNum)
                  if(this.scoreCountNum > score){
                    sessionStorage.setItem("highScore",this.scoreCountNum)
                  }       
                  
                  for(var i = 1 ; i < 10; i++){
                    sessionStorage.setItem("collectedTreasure"+i,this.collectedTreasure[i].count  )   
                  }                  
                }
              }

              

              
            }                        
            
            //Turn Count
            this.turnCountText.text = "WAVE #"+this.turnCountNum+"/9"
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
                
              }
            } 
            else{
              
            } 

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


              
              var markerDiff = this.turnMarker.y - (this.game.height+this.game.height/2)
              if(this.actionTimer > 0){
                this.actionTimer--;
              }
              if(( markerDiff <= 5 && this.actionTimer == 0)&& this.phaseCounter == 1 && this.phaseStart ){
                
                this.deployReady = true;  
                
              
                
    
    
              }
              if(( markerDiff <= 5 && this.actionTimer == 0)&& this.phaseCounter != 1 && this.phaseStart ){
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
                  this.returnCrew();
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
                  }

                    
                }
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
                this.crew[i].y = this.crew[i].origY-25;
                
              }
              else if(this.deployReady){
                this.crewSelect[i].alpha = 0;
                this.crew[i].y = this.crew[i].origY
              }

              this.crewSelect[i].y = this.crew[i].y
              this.crewDeployed[i].y = this.crew[i].y
            }

            
            if(this.selectedCrew > 0 && this.selectedCrew <= 100){
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
            this.freeCounterText.angle = -15  

         
            
            this.freeCounterText.text = "x"+this.freeCounterNum
            
            //turn management


            //load puzzle
            var restart = 0;
            for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){


                  
                  //return to size
                  this.tile[""+j+i].width += ( 100 - this.tile[""+j+i].width) * 0.2;
                  this.tile[""+j+i].height += ( 100 - this.tile[""+j+i].height) * 0.2;
                                  

                  
                  this.tile[''+j+i].healthText.y = this.tile[''+j+i].y+(this.size/2)-20
                  this.tile[''+j+i].powerText.y = this.tile[''+j+i].y+(this.size/2)-20

                  

                  
                  //show enemy health and deploy cost
                  if((this.tile[''+j+i].isEnemyHere || this.tile[''+j+i].isCrewHere) && this.tile[''+j+i].monID != 1){
                    this.tile[''+j+i].healthText.alpha = 1;
                    this.tile[''+j+i].powerText.alpha = 1;

                   

                    if(this.tile[''+j+i].isEnemyHere){
                      this.tile[''+j+i].healthText.text = this.tile[''+j+i].hp
                      this.tile[''+j+i].powerText.text =  this.tile[''+j+i].power
                      this.tile[''+j+i].healthText.x = this.tile[''+j+i].x-(this.size/2)+25
                      this.tile[''+j+i].powerText.x = this.tile[''+j+i].x+(this.size/2)-23
                      this.tile[''+j+i].healthText.addColor("#fff", 0)
                      this.tile[''+j+i].powerText.addColor("#FFF", 0)
                    }
                    if(this.tile[''+j+i].isCrewHere){
                    
                      
                      if(this.phaseCounter == 1 || this.phaseCounter ==2){
                        try{
                          //show attack pattern - red
                          switch(parseInt(this.crew[this.tile[''+j+i].crewID].attackPattern)){
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


                       
                      //console.log(this.tile[''+j+i].crewID)
                      try{
                        this.tile[''+j+i].healthText.text =  this.crew[ this.tile[''+j+i].crewID].deployCost
                        this.tile[''+j+i].powerText.text =  this.crew[ this.tile[''+j+i].crewID].power
                        this.tile[''+j+i].healthText.x = this.tile[''+j+i].x-(this.size/2)+23
                        this.tile[''+j+i].powerText.x = this.tile[''+j+i].x+(this.size/2)-22
                        this.tile[''+j+i].healthText.addColor("#232727", 0)
                        this.tile[''+j+i].powerText.addColor("#FFF", 0)
                        if(parseInt(this.crew[ this.tile[''+j+i].crewID].origPower) > parseInt(this.crew[ this.tile[''+j+i].crewID].power)){
                          
                          this.tile[''+j+i].powerText.addColor("#BA363B", 0)
                        }
                        if(parseInt(this.crew[ this.tile[''+j+i].crewID].origPower) < parseInt(this.crew[ this.tile[''+j+i].crewID].power)){
                          this.tile[''+j+i].powerText.addColor("#30B64A", 0)
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

  

                  if(this.tile[""+j+i].isEnemyHere){
                    this.tile[""+j+i].loadTexture("mon-"+this.tile[""+j+i].monID)
                    //this.tile[""+j+i].width = this.size
                    //this.tile[""+j+i].height = this.size
                  } 

                  if(this.tile[""+j+i].isSunk){
                    this.tile[""+j+i].y += ((this.game.height+100) - this.tile[""+j+i].y) * 0.1;    
                    
                  }
                  else{
                    this.tile[""+j+i].y += ( this.tile[""+j+i].origY - this.tile[""+j+i].y) * this.tile[""+j+i].loadSpeed;   
                    restart += 1; 
                  }                                           
                }

            }                                      


          }
          else{
            this.overlay.alpha = 1;           
            
            for(var i =0; i < 3; i++){
              this.treasureOptions[i].alpha = 1;
              this.treasureOptions[i].loadTexture("treasure_"+this.treasureOptions[i].value)
              this.treasureOptions[i].y += ( 150+this.game.height/3 - this.treasureOptions[i].y) * 0.2;
              
            }                      
          }

            

          
                    

        }
        ,selectTreasue: function(treasure){
          this.collectedTreasure[treasure.value].count++;
          this.scoreCountNum += 100*treasure.value;
          /* in case you want to balance score/gold individually
          switch(treasure.value){
            case 1:
              this.scoreCountNum += 100;
              break;
            case 2:
              this.scoreCountNum += 200;
              break;
            case 3:
              this.scoreCountNum += 100;
              break;
            case 4:
              break;           
            case 5:
              break;
            case 6:
              break;
            case 7:
              break;
            case 8:
              break;        
            case 9:
              break;                            

          }
          */
          this.chatTimer = 0;
        }
        ,captainUlt: function (){
          if(this.deploy_poolCurrent >= 4 && this.phaseCounter == 1){
            this.deploy_poolCurrent -= 4
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){      
                if(this.tile[''+j+i].isEnemyHere){
                  
                  this.tile[''+j+i].hp -= 1
                  if(this.tile[''+j+i].hp <= 0){
                    this.tile[''+j+i].hp = 0;
                    this.enemyDie(this.tile[''+j+i])
                  }                  
                }
              }
            }                 
          }
     
        }
        ,clearBoard: function () {
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
                this.deploy_poolCurrent += this.crew[this.tile[''+j+i].crewID].deployCost
                if(this.tile[''+j+i].crewID == 5){
                  this.freeCounterNum++;
                }                 
                this.tile[''+j+i].crewID = 0
                this.tile[''+j+i].monID = 0
                this.tile[''+j+i].isCrewHere = false;
                this.tile[''+j+i].isEnemyHere = false;
                this.tile[''+j+i].healthText.text = "";
                this.tile[''+j+i].powerText.text = "";
                this.tile[''+j+i].healthText.alpha = 0
                this.tile[''+j+i].powerText.alpha = 0;   
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
          this.removeTint();
          
        }
        ,spawnMonsters: function (tile) {
          this.deployReady = false;

          var distX = 0;
          var distY = 0;
          this.tileLength = 0;
          //must always be dd
          this.boardWidth = 5//11
          this.boardHeight = 7//9 
          this.size = 100
          this.spacing = 10
          this.monCount = this.monBaseCount + this.turnCountNum;
          if(this.turnCountNum == 0 || this.turnCountNum %3 == 0){
            this.monCount = 1
          }
          else{
            this.monCount = 3+this.turnCountNum
            // treasures add to moncount
            for(var i = 1 ; i < 10; i++){
              this.monCount += this.collectedTreasure[i].count      
            }            
          }



          console.log(this.turnCountNum+" "+this.monCount)
          var dist = 0
          
          

          var text = waves[this.turnCountNum]				
          //text = text.split("");
          var textKey = 0
          for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){      
                //reset stats
                this.tile[''+j+i].hasAttacked = false;
                //place mon
                var placeMonHere =Math.floor(Math.random() * 3);
                //this.monCount = 100;
                if(placeMonHere == 0 && this.monCount > 0 && !this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].isCrewHere){
                  
                  dist += 1000;
                  
                  //this.tile[''+j+i].monID = Math.floor(Math.random() * 3)+1;//parseInt(text[textKey])
                  
                  var healthSpawn = Math.floor(Math.random() * 4)
                  if(this.turnCountNum == 0 || this.turnCountNum %3 == 0){
                    this.tile[''+j+i].monID = 99
                    this.tile[''+j+i].y = 1000+dist;
                  }
                  else{
                    // treasures affect mon spawn
                    for(var k = 1 ; k < 10; k++){
                      if(this.collectedTreasure[k].count > 0){
                        var spawnChance = Math.floor(Math.random() * (this.monCount) )
                        if(spawnChance <= this.collectedTreasure[k].count){
                          this.tile[''+j+i].monID = k+1;
                          this.tile[''+j+i].y = 1000+dist;
                        }
                        else{

                        }
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
                  if(healthSpawn == 0  && this.cap_healthValue < 8){
                    this.tile[''+j+i].monID = 1
                  }                  
                  
       
                  
                  

                  
                  
                  textKey++;
                  console.log("Mon Count "+this.monCount)
                  this.monCount--;
                  console.log("Mon Count "+this.monCount)
                  
                  //diff types of enemy
                  switch(this.tile[''+j+i].monID){
                    //base monster
                    case 1:
                      this.tile[''+j+i].hp = 1;
                      this.tile[''+j+i].power = 0;
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 2:
                      this.tile[''+j+i].hp = 1;
                      this.tile[''+j+i].power = 2;
                      this.tile[''+j+i].isEnemyHere = true
                      break;            
                    case 3:
                      this.tile[''+j+i].hp = 2;
                      this.tile[''+j+i].power = 1;
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 4:
                      this.tile[''+j+i].hp = 8;
                      this.tile[''+j+i].power = 0;
                      this.tile[''+j+i].isEnemyHere = true
                      break; 
                    case 5:
                      this.tile[''+j+i].hp = 3;
                      this.tile[''+j+i].power = 5;
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 6:
                      this.tile[''+j+i].hp = 3;
                      this.tile[''+j+i].power = 3;
                      this.tile[''+j+i].isEnemyHere = true
                      break;            
                    case 7:
                      this.tile[''+j+i].hp = 2;
                      this.tile[''+j+i].power = 8;
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 8:
                      this.tile[''+j+i].hp = 5;
                      this.tile[''+j+i].power = 1;
                      this.tile[''+j+i].isEnemyHere = true
                      break;        
                    case 9:
                      this.tile[''+j+i].hp = 5;
                      this.tile[''+j+i].power = 2;
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 10:
                      this.tile[''+j+i].hp = 5;
                      this.tile[''+j+i].power = 3;
                      this.tile[''+j+i].isEnemyHere = true
                      break;
                    case 99:
                      this.tile[''+j+i].hp = 1;
                      this.tile[''+j+i].power = 0;
                      this.tile[''+j+i].isEnemyHere = true
                      break;                                                                                                 
                  }
                }
                else{
                  //this.tile[''+j+i].isEnemyHere = false
                  //this.tile[''+j+i].monID = 0;
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
          
          this.turnWait = 100;
          this.phaseCounter++    
          this.turnCountNum++;      
        }
        ,returnCrew: function () {
   
          this.deployCrewCount = 0 ;
          this.selectedCrew = 0
          
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
              if(this.tile[''+j+i].isCrewHere  && !this.tile[''+j+i].hasActed){
                this.tile[''+j+i].hasActed = true;
                this.tile[''+j+i].y  = 1000;
                this.tile[''+j+i].loadTexture('tile');

               
             
                this.deploy_poolCurrent += this.crew[this.tile[''+j+i].crewID].deployCost
                
                

                
                //crew return ability
                switch(this.tile[''+j+i].crewID){
                  case 1:

                    break;
                  case 2:

                    break;
                  case 3:
             
                    break;
                  case 4:
              
                    break;  
                  case 5:
                    
                    break;                                                
                }                
                this.tile[''+j+i].crewID = 0
                this.tile[''+j+i].monID = 0
                //this.tile[''+j+i].isCrewHere = false;
                this.tile[''+j+i].isEnemyHere = false;
                this.tile[''+j+i].healthText.text = "";
                this.tile[''+j+i].powerText.text = "";
                this.tile[''+j+i].healthText.alpha = 0
                this.tile[''+j+i].powerText.alpha = 0;                    
                j =  this.boardWidth
                i = this.boardHeight
                break;
              }

            }
          }  
          for(var i = 1; i < 6; i++){
            this.crew[i].isSelected = false;
            this.crew[i].isDeployed = false
          }    
          //next phase  
                     
          this.ActionCounter++;  
          if(this.ActionCounter >= this.deployCrewCount){
            this.deploy_poolCurrent = this.deploy_poolMax
            
            this.turnMarkerText.text = "ENEMY TURN"
            this.turnMarker.alpha = 1;                
            this.phaseCounter++;



            
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
            this.actionTimer = 50;
            //this.game.time.events.add(5000, this.enemyFight());
          }                         
        }
        ,endDeployPhase: function (tile) {
          if(this.deployReady){
            this.placeOrderTracker = 0;

            this.endbuttonTimer = 10
            this.turnWait = 1;
            this.phaseCounter++        
            this.turnMarkerText.text = ""
            this.turnMarker.alpha = 0;

            this.deployReady = false;  
            //this.capEnergy += this.deploy_poolCurrent
            //this.deploy_poolCurrent -= this.deploy_poolCurrent
          }
   
        }
        ,crewFight: function (tile) {
          this.deployCrewCount = 0 ;
          //check how many crew deployed
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){      
              if(this.tile[''+j+i].isCrewHere ){
                this.deployCrewCount++
              }
            }
          }

          //crew attacks          
          for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){      //
              
              if(this.tile[''+j+i].isCrewHere  && !this.tile[''+j+i].hasAttacked && this.placeOrderTracker == this.tile[''+j+i].placeOrder){
                this.tile[''+j+i].hasAttacked = true;
                this.placeOrderTracker++;
                this.tile[''+j+i].width  += 100;
                this.tile[''+j+i].height += 100;
                
                


                switch(parseInt(this.crew[this.tile[''+j+i].crewID].attackPattern)){
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
                }

                //crew combat ability trigger
                switch(this.tile[''+j+i].crewID){
                  case 1:

                    break;
                  case 2:
                    //knock back
                    this.knockBack(this.tile[''+(j+1)+(i)],this.tile[''+j+i])
                    this.knockBack(this.tile[''+(j-1)+(i)],this.tile[''+j+i])
                    this.knockBack(this.tile[''+(j)+(i+1)],this.tile[''+j+i])
                    this.knockBack(this.tile[''+(j)+(i-1)],this.tile[''+j+i])       
                    
                    this.knockBack(this.tile[''+(j+1)+(i+1)],this.tile[''+j+i])
                    this.knockBack(this.tile[''+(j-1)+(i-1)],this.tile[''+j+i])   
                    this.knockBack(this.tile[''+(j-1)+(i+1)],this.tile[''+j+i])
                    this.knockBack(this.tile[''+(j+1)+(i-1)],this.tile[''+j+i])  
                    

                    
                    break;
                  case 3:             
                    break;
                  case 4:                
                    break;  
                  case 5:                    
                    break;                                                
                }                

                j =  this.boardWidth
                i = this.boardHeight
                break;
              }

            }
          }         
          this.ActionCounter++;  
          if(this.ActionCounter >= this.deployCrewCount){
            this.removeTint();
            this.phaseCounter++;

            this.turnMarkerText.text = ""
            this.turnMarker.alpha = 0;    
            
            this.turnWait = 25;
            this.ActionCounter = 0;
            this.placeOrderTracker = 0;
            this.placeOrderKey = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){   
                this.tile[''+j+i].hasActed = false;
                this.tile[''+j+i].placeOrder = -1;
              }
            }             
          }
          else{
            this.phaseStart = true;
            this.actionTimer = 50;
            //this.game.time.events.add(5000, this.enemyFight());
          }          
        }  
        ,crewAttackTile: function (enemy,crewID) {   
          try{
           
            if(enemy.isEnemyHere){
              enemy.hp -= this.crew[crewID].power
              //enemy on hurt ability
              switch(enemy.monID){
                //immune to column hits
                case 8: 
                case 9: 
                case 10:   
                
                  if(enemy.posX == this.crew[crewID].posX){
                    enemy.hp += this.crew[crewID].power
                    enemy.alpha = 0.5;
                  }  
                break;
              }            
              if(enemy.hp <= 0){
                enemy.hp = 0;
                this.enemyDie(enemy)
              }
              //this.enemyDie(enemy)
            }
          }
          catch(e){

          }

        }
        ,enemyDie: function (enemy) {
          enemy.isEnemyHere = false;
          enemy.loadTexture('tile');

          //enemy death effects
          
          switch(enemy.monID){
            case 1:
              this.cap_healthValue += 2;
              this.cap_health.height += 150;
              this.cap_health.width += 150;
              break;
            case 2:
              this.scoreCountNum += 10
              break;
            case 3:
              this.scoreCountNum += 15
              break;
            case 4:
              this.scoreCountNum += 20
              break
            case 5:
              this.scoreCountNum += 25
              break;
            case 6:
              this.scoreCountNum += 25
              break;
            case 7:
              this.scoreCountNum += 30
              break     
            case 8:
              this.scoreCountNum += 35
              break;
            case 9:
              this.scoreCountNum += 40
              break;             
            case 10:
              this.scoreCountNum += 45
              break;             
            case 99:
              this.chatTimer = 1;
              for(var i =0; i < 3; i++){
                Math.floor(Math.random() * 9);
                var chestCount = 0
                if(this.turnCountNum > 3){
                  chestCount = (this.turnCountNum-1)
                }

                
                this.treasureOptions[i].value = Math.floor(Math.random() * (3+chestCount))+1;
              }              
              //this.scoreCountNum += 45
              break;                                                               
          }       
          enemy.monID = 0;   
          this.game.plugins.screenShake.shake(5); 

          //enemy.y = 1000;          
        }      
        ,knockBack: function (enemy,crew) {
          try{
            if(enemy.isEnemyHere){

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
                this.tile[''+j+i].alpha = 1;
                this.tile[''+j+i].hasAttacked = true;
                this.tile[''+j+i].width  += 100;
                this.tile[''+j+i].height += 100;
                
                this.cap_healthValue-= parseInt(this.tile[''+j+i].power);  

                //enemy special combat ability
                switch(this.tile[''+j+i].monID){
                  case 4:      
                    try{
                      if(!this.tile[''+(j+1)+(i)].isCrewHere && !this.tile[''+(j+1)+(i)].isEnemyHere){
                        var whichArm = Math.floor(Math.random() * 2);    
                        if(whichArm == 0){
                          this.tile[''+(j+1)+(i)].monID = 2;
                          this.tile[''+(j+1)+(i)].hp = 1;
                          this.tile[''+(j+1)+(i)].power = 2;
                          this.tile[''+(j+1)+(i)].isEnemyHere = true
                        }
                        else{
                          this.tile[''+(j+1)+(i)].monID = 3;
                          this.tile[''+(j+1)+(i)].hp = 2;
                          this.tile[''+(j+1)+(i)].power = 1;
                          this.tile[''+(j+1)+(i)].isEnemyHere = true
                        }

                      }
                    } 
                    catch(e){
                      
                    }         
                    try{
                      if(!this.tile[''+(j-1)+(i)].isCrewHere && !this.tile[''+(j-1)+(i)].isEnemyHere){
                        var whichArm = Math.floor(Math.random() * 2);    
                        if(whichArm == 0){
                          this.tile[''+(j-1)+(i)].monID = 2;
                          this.tile[''+(j-1)+(i)].hp = 1;
                          this.tile[''+(j-1)+(i)].power = 2;
                          this.tile[''+(j-1)+(i)].isEnemyHere = true
                        }
                        else{
                          this.tile[''+(j-1)+(i)].monID = 3;
                          this.tile[''+(j-1)+(i)].hp = 2;
                          this.tile[''+(j-1)+(i)].power = 1;
                          this.tile[''+(j-1)+(i)].isEnemyHere = true
                        }
                      }
                    } 
                    catch(e){
                      
                    }  
                    try{

                      if(!this.tile[''+(j)+(i+1)].isCrewHere && !this.tile[''+(j)+(i+1)].isEnemyHere){
                        var whichArm = Math.floor(Math.random() * 2);    
                        if(whichArm == 0){
                          this.tile[''+(j)+(i+1)].monID = 2;
                          this.tile[''+(j)+(i+1)].hp = 1;
                          this.tile[''+(j)+(i+1)].power = 2;
                          this.tile[''+(j)+(i+1)].isEnemyHere = true
                        }
                        else{
                          this.tile[''+(j)+(i+1)].monID = 3;
                          this.tile[''+(j)+(i+1)].hp = 2;
                          this.tile[''+(j)+(i+1)].power = 1;
                          this.tile[''+(j)+(i+1)].isEnemyHere = true
                        }                      
                      }
                    } 
                    catch(e){
                      
                    }  
                    try{
                      if(!this.tile[''+(j)+(i-1)].isCrewHere && !this.tile[''+(j)+(i-1)].isEnemyHere){
                        var whichArm = Math.floor(Math.random() * 2);    
                        if(whichArm == 0){
                          this.tile[''+(j)+(i-1)].monID = 2;
                          this.tile[''+(j)+(i-1)].hp = 1;
                          this.tile[''+(j)+(i-1)].power = 2;
                          this.tile[''+(j)+(i-1)].isEnemyHere = true
                        }
                        else{
                          this.tile[''+(j)+(i-1)].monID = 3;
                          this.tile[''+(j)+(i-1)].hp = 2;
                          this.tile[''+(j)+(i-1)].power = 1;
                          this.tile[''+(j)+(i-1)].isEnemyHere = true
                        } 
                      }
                    } 
                    catch(e){
                      
                    }                                                              



                                      
                    break;
                } 
                this.game.plugins.screenShake.shake(5); 

                if(this.cap_healthValue <= 0){
                  this.game.state.start('lose');
                }
                j =  this.boardWidth
                i = this.boardHeight
                break;
              }

            }
          } 
          
          this.ActionCounter++;
          
          if(this.ActionCounter >= this.monCount){
            //this.turnMarkerText.text = "ENEMY TURN"               
            this.phaseCounter = 0;
            this.turnWait = 25;
            this.ActionCounter = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){   
                this.tile[''+j+i].hasActed = false;
              }
            }             
            this.turnMarkerText.text = ""
            this.turnMarker.alpha = 0;     
            this.spawnMonsters();

          }
          else{
            this.phaseStart = true;
            this.actionTimer = 50;
            //this.game.time.events.add(5000, this.enemyFight());
          }
            
        }        
        ,placeCrew: function (tile) {
          
          
          
          if(this.selectedCrew != 0 && !tile.isEnemyHere && !tile.isCrewHere ){
            var remainingDeploy = this.deploy_poolCurrent - this.crew[this.selectedCrew].deployCost
            tile.placeOrder = this.placeOrderTracker
            this.placeOrderTracker++
            if(remainingDeploy >= 0){
              try{

                this.crew[this.selectedCrew].posX = tile.posX
                this.crew[this.selectedCrew].posY = tile.posY
                tile.loadTexture(this.crew[this.selectedCrew].texture)
                tile.width = this.size
                tile.height = this.size
                tile.isCrewHere = true
                tile.crewID = this.selectedCrew 
                this.crew[this.selectedCrew].isSelected = false;
                this.crew[this.selectedCrew].isDeployed = true
                this.deploy_poolCurrent -= this.crew[this.selectedCrew].deployCost
                if(this.selectedCrew == 5){
                  this.freeCounterNum--;
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
          else if(tile.isEnemyHere){
            this.selectedCrew = 100+tile.monID;
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
          
          //only during deployment phase
          if(this.deployReady){
            if(!crew.isDeployed){
              for(var i = 1; i < 6; i++){
                this.crew[i].isSelected = false;
              }            
              this.selectedCrew = crew.id
              crew.isSelected = true;
            }
            else{

            }
          }

          

          
        }
        , movePlayer: function (key) {

                      
          
        }
        , monMove: function (){

        }
        , monAttack: function (mon){

        }        
        , monDead: function (mon){


        }     
        , springBody: function (degrade){
          if(this.springY != 0){
                  
            if(this.springY > 0){
              this.springY-= degrade
              this.springY *= -1
            }
            else if(this.springY < 0){
              this.springY+= degrade
              this.springY *= -1
            }
          }  
          
          if(this.springX != 0){
                  
            if(this.springX > 0){
              this.springX-= degrade
              this.springX *= -1
            }
            else if(this.springX < 0){
              this.springX+= degrade
              this.springX *= -1
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