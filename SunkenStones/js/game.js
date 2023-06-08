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
            
            this.selectInfo = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            this.selectInfo.width = this.game.width
            this.selectInfo.height = this.game.height      
            
            
            this.selectName = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-450, '10', {font: '28px LondrinaSolid-Black',fill: '#7E615F', align: 'left'});
            //this.selectName.anchor.setTo(0.5, 0.5);    

            this.selectStats = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-410, '10', {font: '28px LondrinaSolid-Black',fill: '#7E615F', align: 'left'});
            //this.selectStats.anchor.setTo(0.5, 0.5); 

            this.selectAbility = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-370, '10', {font: '28px LondrinaSolid-Black',fill: '#7E615F', align: 'left'});
            //this.selectAbility.anchor.setTo(0.5, 0.5); 

                           
            
            this.cap_health = this.add.sprite(125, this.game.height-125, 'ui_cap_health');
            this.cap_health.anchor.setTo(0.5, 0.5);
            this.cap_healthText = this.add.text(this.cap_health.x,this.cap_health.y, '10', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.cap_healthText.anchor.setTo(0.5, 0.5);

            this.cap_health.origWidth = this.cap_health.width
            this.cap_health.origHeight = this.cap_health.height
            this.cap_healthValue = 10;         

            this.deploy_pool = this.add.sprite(375, this.game.height-100, 'ui_deploy_pool');
            this.deploy_pool.anchor.setTo(0.5, 0.5);
            this.deploy_poolText = this.add.text(this.deploy_pool.x,this.deploy_pool.y+15, '3/3', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.deploy_poolText.anchor.setTo(0.5, 0.5);   
            
            
            //to be determined by selected ship
            this.deploy_poolCurrent = 4;
            this.deploy_poolMax = 4


            this.endTurn_Button = this.add.sprite(this.game.width-500, this.game.height-175, 'ui_endTurn_Button');
            
            this.endTurn_Button.inputEnabled = true;
            this.endTurn_Button.events.onInputDown.add(this.endDeployPhase, this);            


            
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
            //console.log(Math.floor(this.boardWidth/2))
            x = (this.game.width/2)-((Math.floor(this.boardWidth/2)*this.size)+(this.size/2)-(this.spacing*this.boardWidth))

            
          for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){
                
                this.tile[''+j+i] = this.add.sprite(x+distX, y+distY, 'tile');
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

                this.tile[''+j+i].healthText = this.add.text(this.tile[''+j+i].x-(this.size/2),this.tile[''+j+i].y+(this.size/2)-3, '1', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].healthText.anchor.setTo(0.5, 0.5); 


                this.tile[''+j+i].inputEnabled = true;
                this.tile[''+j+i].events.onInputDown.add(this.placeCrew, this);                




                distX += this.tile[''+j+i].width+this.spacing
                if(distX > this.size*this.boardWidth){
                  distX = 0;
                  distY += this.tile[''+j+i].height+this.spacing
                }                  
                
              }

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
            this.crew[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crew-'+crewMates[i-1]);
            this.crew[i].anchor.setTo(0.5, 0.5);
            this.crew[i].width = size;
            this.crew[i].height = size;    
            this.crew[i].id = parseInt(crewMates[i-1])
            this.crew[i].origX = this.crew[i].x
            this.crew[i].origY = this.crew[i].y
            this.crew[i].isDeployed = false;
            this.crew[i].isSelected = false;
              
            this.crewDeployed[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crewDeployed');
            this.crewDeployed[i].anchor.setTo(0.5, 0.5);
            this.crewDeployed[i].width = size;
            this.crewDeployed[i].height = size;   
            this.crewDeployed[i].alpha = 0;   
            this.crewDeployed[i].id = i    
            this.crewDeployed[i].origX = this.crewDeployed[i].x
            this.crewDeployed[i].origY = this.crewDeployed[i].y               

            this.crewSelect[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crewSelect');
            this.crewSelect[i].anchor.setTo(0.5, 0.5);
            this.crewSelect[i].width = size;
            this.crewSelect[i].height = size;   
            this.crewSelect[i].alpha = 0;   
            this.crewSelect[i].id = i    
            this.crewSelect[i].origX = this.crewSelect[i].x
            this.crewSelect[i].origY = this.crewSelect[i].y           
            
            //crew traits & stats
            this.crew[i].deployCost = 1;
            //console.log(this.crew[i].id)
            switch(this.crew[i].id){
              case 1:
                this.crew[i].deployCost = 1;
                this.crew[i].name = "REVA 'DOC' BONNY"
                this.crew[i].power = 1
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "ON RETURN GIVE CAPTAIN +3 HEALTH"
                break;
              case 2:
                this.crew[i].deployCost = 1;
                this.crew[i].name = "RACHEL WALL"
                this.crew[i].power = 1
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "ON COMBAT KNOCK ENEMIES ONE SPACE AWAY"                       
                break;
              case 3:
                this.crew[i].deployCost = 3;
                this.crew[i].name = "GRACE O'MALLEY"
                this.crew[i].power = 2
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "ON COMBAT FIGHT ALL ENEMIES IN ROW"                
                break;
              case 4:
                this.crew[i].deployCost = 3;
                this.crew[i].name = "PETE 'GUNNER' EASTON"
                this.crew[i].power = 2
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "ON COMBAT FIGHT ALL ENEMIES IN COLOUMN"                
                break;  
              case 5:
                this.crew[i].deployCost = 0;
                this.crew[i].name = "RELIABLE CANNON SHOT"
                this.crew[i].power = 5
                this.crew[i].type = 0 // 0- steel, 1 - salt, 2 -smoke
                this.crew[i].ability  = "NONE"                         
                break;                                                
            }
            //console.log(this.crew[i].deployCost)
            
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

          this.turnMarkerText = this.add.text(this.turnMarker.x-100,this.turnMarker.y, 'SPAWN PHASE', {font: '120px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.turnMarkerText.anchor.setTo(0.5, 0.5);   

          this.turnCounter = 200;
          this.turnCounterStart = 200
          this.phaseCounter = 0;

          this.turnWait = 0
          this.ActionCounter = 0;;
          this.actionTimer = 0;

          this.turnCountText = this.add.text(this.game.width/2,50, 'TURN #1 ', {font: '64px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.turnCountText.anchor.setTo(0.5, 0.5);  
          this.turnCountNum = 1     
          
          this.buttonTimer = 0;
        

        }
        , update: function () {
          console.log("phase "+this.phaseCounter)
          if(this.chatTimer == 0){


            //UI 
            // select info panel
            if(this.selectedCrew == 0){
              this.selectInfo.x += ( this.game.width - this.selectInfo.x) * 0.2;


            }
            else{
              this.selectInfo.x += ( 0 - this.selectInfo.x) * 0.2;
              this.selectName.text = "NAME: "+this.crew[this.selectedCrew].name
              this.selectStats.text = "POWER: "+this.crew[this.selectedCrew].power
              this.selectAbility.text = "ABILITY: \n"+this.crew[this.selectedCrew].ability
              
              this.selectName.angle = 3;
              this.selectStats.angle = 3;
              this.selectAbility.angle = 3;
            }

            this.selectName.x =  this.selectInfo.x+this.selectInfo.width-580
            this.selectStats.x =  this.selectInfo.x+this.selectInfo.width-580
            this.selectAbility.x =  this.selectInfo.x+this.selectInfo.width-580      

            

            //button anim
            if(this.buttonTimer > 0){
              this.buttonTimer--
              this.endTurn_Button.y = this.game.height-175+35
            }
            else{
              this.endTurn_Button.y = this.game.height-175
            }
            //Turn Count
            this.turnCountText.text = "TURN #"+this.turnCountNum
            // phase marker
            
            if(this.turnWait > 0){
              this.turnWait--;
              if(this.turnWait == 0){
                if(this.ActionCounter > 0){
                  this.turnCounter = 100//this.turnCounterStart;
                }
                else{
                  this.turnCounter = this.turnCounterStart;
                }
                
              }
            } 
            else{
              
            } 

            if(this.turnCounter > 0){
              this.turnCounter--;
              this.phaseStart = true;
              
             
              this.turnMarker.y += ( this.game.height/2 - this.turnMarker.y) * 0.2;

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
              if(( markerDiff <= 5 && this.actionTimer == 0)&& this.phaseCounter == 2 && this.phaseStart ){
                console.log("READY")
                this.deployReady = true;                
              }
              if(( markerDiff <= 5 && this.actionTimer == 0)&& this.phaseCounter != 2 && this.phaseStart ){
                //phase actions
                this.phaseStart = false;
                if(this.phaseCounter == 0 ){
                  
                  this.spawnMonsters();
                  this.turnMarkerText.text = "RETURN PHASE"
                  //this.phaseCounter++
                }
                else if(this.phaseCounter == 1 ){
                  this.turnMarkerText.text = "DEPLOYMENT PHASE"
                  this.returnCrew();
                  
                  //this.phaseCounter++
                }
                else if(this.phaseCounter == 2 ){

                  this.turnMarkerText.text = "COMBAT PHASE"
                 

                } 
                else if(this.phaseCounter == 3 ){
                  this.turnMarkerText.text = "RETALIATION PHASE"
                  
                  
                  this.crewFight();
                  
                  

                } 
                else if(this.phaseCounter == 4 ){
                  
                  this.enemyFight();
                  this.turnMarkerText.text = "SPAWN PHASE"


                }                 
              }              
              
              //this.turnMarkerText.alpha = 0
              this.turnMarkerText.x = this.turnMarker.x-100
              this.turnMarkerText.y = this.turnMarker.y-50
            }

            this.deploy_poolText.text = this.deploy_poolCurrent+"/"+this.deploy_poolMax
            this.cap_healthText.text = this.cap_healthValue
            console.log( this.cap_healthText)
            ///this.cap_healthText.font.style.font.size = 100;
            this.cap_health.width += ( this.cap_health.origWidth - this.cap_health.width) * 0.5;
            this.cap_health.height += ( this.cap_health.origHeight - this.cap_health.height) * 0.5;
            for(var i = 1; i < 6; i++){

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

            
            if(this.selectedCrew != 0){
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
                                  

                  this.tile[''+j+i].healthText.x = this.tile[''+j+i].x-(this.size/2)+20
                  this.tile[''+j+i].healthText.y = this.tile[''+j+i].y+(this.size/2)-20

                  this.tile[''+j+i].healthText.text = this.tile[''+j+i].hp
                  if(this.tile[''+j+i].isEnemyHere){
                    this.tile[''+j+i].healthText.alpha = 1;
                  }
                  else{
                    this.tile[''+j+i].healthText.alpha = 0
                  }
                  //this.tileFlash[""+j+i].alpha+= ( 0- this.tileFlash[""+j+i].alpha) * 0.1; 
                  this.tile[""+j+i].tint = 0xffffff
                  this.tile[""+j+i].isFilled = false;
                  try{
                    delete this.tile[""+j+i].filledBy
                  }
                  catch(e){
                  }   
                  if(this.tile[""+j+i].isFlooded){
                    this.tile[""+j+i].tint = '0x0000FF'
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
                       
            
            
          }

            

          
                    

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
          var dist = 0
          //console.log(Math.floor(this.boardWidth/2))
          

            
          for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){      
                //reset stats
                this.tile[''+j+i].hasAttacked = false;
                //place mon
                var placeMonHere = Math.floor(Math.random() * 4);
                if(placeMonHere == 0 && this.monCount > 0 && !this.tile[''+j+i].isEnemyHere && !this.tile[''+j+i].isCrewHere){
                  this.tile[''+j+i].y = 1000+dist;
                  dist += 1000;
                  this.tile[''+j+i].isEnemyHere = true
                  this.tile[''+j+i].monID = 1
                  this.monCount--;
                  //diff types of enemy
                  switch(this.tile[''+j+i].monID){
                    //base monster
                    case 1:
                      this.tile[''+j+i].hp = 2;
                      break;
                  }
                }

                distX += this.tile[''+j+i].width+this.spacing
                if(distX > this.size*this.boardWidth){
                  distX = 0;
                  distY += this.tile[''+j+i].height+this.spacing
                }                  
                
              }

          }  
          
          //next phase
          this.turnWait = 100;
          this.phaseCounter++          
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
                this.tile[''+j+i].y  == 1000;
                this.tile[''+j+i].loadTexture('tile');
                this.deploy_poolCurrent += this.crew[this.tile[''+j+i].crewID].deployCost
                
                

                
                //crew return ability
                switch(this.tile[''+j+i].crewID){
                  case 1:
                    //heal 
                    this.cap_healthValue += 3;
                    this.cap_health.height += 150;
                    this.cap_health.width += 150;
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
            this.phaseCounter++;
            this.turnWait = 100;
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
            this.buttonTimer = 10
            this.turnWait = 1;
            this.phaseCounter++        
            this.turnMarkerText.text = "COMBAT PHASE"
            this.deployReady = false;  
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
            for(var j = 0; j < this.boardWidth; j++){      
              if(this.tile[''+j+i].isCrewHere  && !this.tile[''+j+i].hasAttacked){
                this.tile[''+j+i].hasAttacked = true;
                this.tile[''+j+i].width  += 100;
                this.tile[''+j+i].height += 100;
                
                //crew combat ability trigger
                this.crewAttackTile(this.tile[''+(j+1)+(i)],this.tile[''+j+i].crewID)
                this.crewAttackTile(this.tile[''+(j-1)+(i)],this.tile[''+j+i].crewID)
                this.crewAttackTile(this.tile[''+(j)+(i+1)],this.tile[''+j+i].crewID)
                this.crewAttackTile(this.tile[''+(j)+(i-1)],this.tile[''+j+i].crewID)

                switch(this.tile[''+j+i].crewID){
                  case 1:

                    break;
                  case 2:
                    //knock back
                    this.knockBack(this.tile[''+(j+1)+(i)],this.tile[''+j+i])
                    this.knockBack(this.tile[''+(j-1)+(i)],this.tile[''+j+i])
                    this.knockBack(this.tile[''+(j)+(i+1)],this.tile[''+j+i])
                    this.knockBack(this.tile[''+(j)+(i-1)],this.tile[''+j+i])
                    break;
                  case 3:
                    //row hit
                    for(var l = 0; l < this.boardHeight; l++){
                      for(var m = 0; m < this.boardWidth; m++){
                        if(i == l){
                          this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)

                        }
                      }
                    }             
                    break;
                  case 4:
                    //col hit
                    for(var l = 0; l < this.boardHeight; l++){
                      for(var m = 0; m < this.boardWidth; m++){
                        if(j == m){
                          this.crewAttackTile(this.tile[''+(m)+(l)],this.tile[''+j+i].crewID)

                        }
                      }
                    }                
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
            this.phaseCounter++;
            this.turnWait = 100;
            this.ActionCounter = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){   
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
        ,crewAttackTile: function (enemy,crewID) {   
          try{
            console.log(enemy)   
            if(enemy.isEnemyHere){
              enemy.hp -= this.crew[crewID].power
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
          this.game.plugins.screenShake.shake(5); 

          //enemy.y = 1000;          
        }  
        ,knockBack: function (enemy,crew) {
          try{
            if(enemy.isEnemyHere){
              if(parseInt(enemy.posX) < parseInt(crew.posX)){
                if(!this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].isEnemyHere && !this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].isCrewHere){
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].loadTexture(enemy.texture)
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].monID = enemy.monID
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].isEnemyHere = true;
                  this.tile[""+(parseInt(enemy.posX)-1)+(parseInt(enemy.posY))].hp = enemy.hp
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
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
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
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
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
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
                  enemy.isEnemyHere = false;
                  enemy.loadTexture("tile")
                  enemy.hp = 0
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
                this.tile[''+j+i].hasAttacked = true;
                this.tile[''+j+i].width  += 100;
                this.tile[''+j+i].height += 100;
                
                this.cap_healthValue--;  
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
          console.log("counter "+this.ActionCounter)
          this.ActionCounter++;
          
          if(this.ActionCounter >= this.monCount){
            this.phaseCounter = 0;
            this.turnWait = 100;
            this.ActionCounter = 0;
            for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){   
                this.tile[''+j+i].hasActed = false;
              }
            }             
            this.turnCountNum++;
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
            if(remainingDeploy >= 0){
              try{
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
          }
       
        }        
        ,deselect: function (crew) {
          
          if(this.deployReady){
            for(var i = 1; i < 6; i++){
              this.crew[i].isSelected = false;
            }
            this.selectedCrew = 0            
          }

          
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