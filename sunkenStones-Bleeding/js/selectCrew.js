(function () {
    'use strict';

    function selectCrew() {
        this.player = null;
    }
    selectCrew.prototype = {
        create: function () {
		
		
		
            var x = 400
                , y = 150;
          
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            this.level = parseInt(localStorage.getItem("level"));
            
            var text = ""
            var message = ""
            
            text = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
            message = ""            
            

           
            this.bg = this.add.sprite(0, 0, 'crewBG');
            this.bg.width = this.game.width
            this.bg.height = this.game.height

            this.video = this.add.video('seaBG');

                          
            this.video.play(true);
                       
            this.videoImage = this.video.addToWorld(0, 0);
            var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
            this.videoTimer = 100;
            this.video.volume = 0;
            this.videoImage.scale.set(videoScale);          
      


            this.bg2 = this.add.sprite(0, 0, 'ui_back');
            this.bg2.width = this.game.width
            this.bg2.height = this.game.height    

            //this.combatOrder  = this.add.sprite(0, 0, 'combatOrder');
            //this.combatOrder .width = this.game.width 
            //this.combatOrder .height = this.game.height              
            
            this.selectInfo = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            this.selectInfo.width = this.game.width
            this.selectInfo.height = this.game.height   

        

            this.selectInfoDetail = this.add.sprite(this.game.width, 0, 'selectInfoPanel');
            this.selectInfoDetail.width = this.game.width
            this.selectInfoDetail.height = this.game.height

            this.selectInfoNotBought = this.add.sprite(this.game.width, 0, 'selectInfoPanel-notBought');
            this.selectInfoNotBought.width = this.game.width
            this.selectInfoNotBought.height = this.game.height   
            this.selectInfoNotBought.alpha = 0;    


            this.capKey = parseInt(localStorage.getItem("captain"));
            this.capInfo = this.add.sprite(-this.game.width, 0, 'capInfoPanel'+this.capKey);
            this.capInfo.width = this.game.width
            this.capInfo.height = this.game.height                  
            
            //#7E615F
            this.selectName = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-450, '10', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left'});
            //this.selectName.anchor.setTo(0.5, 0.5);    

            this.selectStats = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-410, '10', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 450  });
            //this.selectStats.anchor.setTo(0.5, 0.5); 
            this.selectStats.inputEnabled = true;
            this.selectStats.events.onInputOver.add(this.updatetoolTip, this);                

            this.selectAbility = this.add.text(this.selectInfo.x+this.selectInfo.width-600,this.game.height-370, '10', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left'});
            //this.selectAbility.anchor.setTo(0.5, 0.5); 

                           
            
            this.cap_health = this.add.sprite(125, this.game.height-125, 'ui_cap_health');
            this.cap_health.anchor.setTo(0.5, 0.5);
            this.cap_healthText = this.add.text(this.cap_health.x,this.cap_health.y, '10', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.cap_healthText.anchor.setTo(0.5, 0.5);

            this.cap_health.origWidth = this.cap_health.width
            this.cap_health.origHeight = this.cap_health.height
            this.cap_healthValue = 15;        
            
            this.capKey = parseInt(localStorage.getItem("captain"));

            this.cap_ultCost = 1;

            this.deploy_pool = this.add.sprite(375, this.game.height-100, 'ui_deploy_pool');
            this.deploy_pool.anchor.setTo(0.5, 0.5);
            this.deploy_poolText = this.add.text(this.deploy_pool.x,this.deploy_pool.y+15, '3/3', {font: '57px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.deploy_poolText.anchor.setTo(0.5, 0.5);   
            
            
            //to be determined by selected ship
            this.deploy_poolCurrent = 3;
            this.deploy_poolMax = this.deploy_poolCurrent 

            this.back_Button = this.add.sprite(35, 35, 'back_button');             
            this.back_Button.inputEnabled = true;
            this.back_Button.anchor.setTo(0.5, 0.5);
            this.back_Button.width = 50
            this.back_Button.height = 50
            this.back_Button.events.onInputDown.add(this.back, this);  
            
            this.clear_Button = this.add.sprite(this.game.width/2-415, this.game.height-200, 'ui_clear_button');            
            this.clear_Button.inputEnabled = true;
            this.clear_Button.anchor.setTo(0.5, 0.5);
            this.clear_Button.width = 100
            this.clear_Button.height = 100
            this.clear_Button.events.onInputDown.add(this.clear, this);              

            this.endTurn_Button = this.add.sprite(this.game.width-500, this.game.height-175, 'ui_disembark_Button');            
            this.endTurn_Button.inputEnabled = true;
            this.endTurn_Button.events.onInputDown.add(this.onDown, this);   
            

            this.ult_text = this.add.text(70,this.game.height-400, 'BOOST THE POWER OF ALL STEEL-TYPE CREW BY +1', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 350  });
            this.ult_text.angle = -1

            this.ult_text.text = captain[this.capKey].ult_text
            this.checkKeywords(this.ult_text)

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

            this.ult_Button = this.add.sprite(this.game.width-500, this.game.height-350, 'ui_ult_buttonReady'+this.capKey); 
            this.ult_Button.anchor.setTo(0.5, 0.5);           
            this.ult_Button.inputEnabled = true;
            //this.ult_Button.events.onInputDown.add(this.onDown, this);   
            //this.ult_Button.width =500/1.5
            //this.ult_Button.height = 200/1.5    

            this.ult_ButtonText = this.add.text(this.ult_Button.x,this.ult_Button.y+55, '3/3', {font: '32px LondrinaSolid-Black',fill: '#232727', align: 'center'});
            this.ult_ButtonText.anchor.setTo(0.5, 0.5);              
            
            this.bountytext = this.add.text(this.capInfo.x,this.capInfo.y+220, 'REWARD', {font: '64px LondrinaSolid-Black',fill: '#000', align: 'center'});
            this.bountytext.anchor.setTo(0.5, 0.5);         
            this.bountytext.angle = 3      

            text = text.split("");
            var textKey = 0;

            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            //this.input.onDown.add(this.onDown, this);
            this.tile = [];
            this.tileOverlay = [];
            this.crewPrice = [];
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

            this.crewOrder[i].healthText = this.add.text(this.crewOrder[i].x-(this.size/2),this.crewOrder[i].y+(this.size/2)-16, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOrder[i].healthText.anchor.setTo(0.5, 0.5); 

            this.crewOrder[i].powerText = this.add.text(this.crewOrder[i].x-(this.size/2),this.crewOrder[i].y+(this.size/2)-16, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.crewOrder[i].powerText.anchor.setTo(0.5, 0.5);             
          }

          var distX = 0;
          var distY = 0;
          var counter = 1;
          for(var i = 0; i < this.boardHeight; i++){
              for(var j = 0; j < this.boardWidth; j++){
                
                if(counter == 5){
                  counter++;
                } 

                this.tile[''+j+i] = this.add.sprite(x+distX, y+distY+25, 'crew-'+(counter));
                this.tileOverlay[''+j+i] = this.add.sprite(x+distX, y+distY+25, 'crew_locked_overlay');
                this.crewPrice[''+j+i] = this.add.text(this.tile[''+j+i].x+5,this.tile[''+j+i].y-35, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left'});
                this.tileOverlay[''+j+i].alpha = 0;
                this.tile[''+j+i].unlocked = true
               
                if(counter > crewCount){
                    this.tile[''+j+i].loadTexture("crew_notAvail")
                    this.tile[''+j+i].unlocked = false
                }
                else{
                  if(!crew[counter].unlockStart && parseInt(localStorage.getItem("crew"+counter+"unlocked")) == 1){
                    this.tile[''+j+i].bought = true;
                  }
                  else if(crew[counter].unlockStart){
                    this.tile[''+j+i].bought = true;
                  }                  
                  else{
                    this.tile[''+j+i].bought = false;
                    this.tileOverlay[''+j+i].alpha = 1;
                    this.crewPrice[''+j+i].text = crew[counter].unlockPrice// = this.add.text(this.tile[''+j+i].x+5,this.tile[''+j+i].y-35, , {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left'});
                    this.crewPrice[''+j+i].anchor.setTo(0.5, 0.5);
                    //this.tile[''+j+i].unlocked = false
                  }
                }



                this.tile[''+j+i].origX = this.tile[''+j+i].x;
                this.tile[''+j+i].origY = this.tile[''+j+i].y;
                this.tile[''+j+i].y = 1000;
              
                this.tile[''+j+i].loadSpeed =  0.2//(Math.random() * 0.3)+0.1;
                this.tile[''+j+i].anchor.setTo(0.5, 0.5);
                this.tile[''+j+i].width = this.size;
                this.tile[''+j+i].height = this.size;     
                
                this.tileOverlay[''+j+i].anchor.setTo(0.5, 0.5);
                this.tileOverlay[''+j+i].width = this.size;
                this.tileOverlay[''+j+i].height = this.size; 

                this.tile[''+j+i].id = ''+j+i;
                this.tile[''+j+i].isCrewHere = false
                this.tile[''+j+i].crewID = 0
                this.tile[''+j+i].isEnemyHere = false
                this.tile[''+j+i].monID = 0
                this.tile[''+j+i].isFlipping = false;

                this.tile[''+j+i].posX = j
                this.tile[''+j+i].posY = i

                this.tile[''+j+i].hp = 0

                this.tile[''+j+i].healthText = this.add.text(this.tile[''+j+i].x-(this.size/2),this.tile[''+j+i].y+(this.size/2)-3, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].healthText.anchor.setTo(0.5, 0.5); 

                this.tile[''+j+i].power = 0
                this.tile[''+j+i].powerText = this.add.text(this.tile[''+j+i].x-(this.size/2),this.tile[''+j+i].y+(this.size/2)-3, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].powerText.anchor.setTo(0.5, 0.5);                 

                this.tile[''+j+i].spinSpeed = 0;
                this.tile[''+j+i].springX = 0;
                this.tile[''+j+i].springY = 0;

                this.tile[''+j+i].submerged = false;

                this.tile[''+j+i].selected = false;

                this.tile[''+j+i].inputEnabled = true;
                this.tile[''+j+i].events.onInputDown.add(this.select, this);    
                this.tile[''+j+i].events.onInputOver.add(this.showInfo, this);            
                



                
                if(counter <= 10){
                    this.tile[''+j+i].isCrewHere = true
                    this.tile[''+j+i].crewID = counter
                    this.tile[''+j+i].hp = crew[counter].deployCost;
                    this.tile[''+j+i].power = crew[counter].power;                    
                }




                distX += this.tile[''+j+i].width+this.spacing
                if(distX > this.size*this.boardWidth){
                  distX = 0;
                  distY += this.tile[''+j+i].height+this.spacing
                }                  
                counter++
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
          this.freeCounterNum = 5;      


          this.crewCode ="12345"
          var crewMates = this.crewCode.split("");
          for(var i = 1; i < 6; i++){
            this.crewSelect[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crewSelect');
            this.crewSelect[i].anchor.setTo(0.5, 0.5);
            this.crewSelect[i].width = size;
            this.crewSelect[i].height = size;   
            this.crewSelect[i].alpha = 0;   
            this.crewSelect[i].id = i    
            
            //this.crew[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crew_blank'+crewMates[i-1]);
            this.crew[i] = this.add.sprite(x+distX, this.game.height-size+50, 'crew_blank');
            this.crew[i].isBlank = true;
            this.crew[i].id = 0//parseInt(crewMates[i-1])
            if(i == 5){
                this.crew[i].loadTexture('crew-5')
                this.crew[i].isBlank = false;
                this.crew[i].id = 5
            }
            
            this.crew[i].anchor.setTo(0.5, 0.5);
            this.crew[i].width = size;
            this.crew[i].height = size;    
            
            this.crew[i].origX = this.crew[i].x
            this.crew[i].origY = this.crew[i].y
            this.crew[i].isDeployed = false;
            this.crew[i].isSelected = false;

            this.crew[i].killCount = 0

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

            this.crew[i].deployCost = crew[i].deployCost;
            this.crew[i].name = crew[i].name
            this.crew[i].power = crew[i].power
            this.crew[i].origPower = this.crew[i].power
            this.crew[i].attackPattern = crew[i].attackPattern
            this.crew[i].type = crew[i].type // 0- steel, 1 - salt, 2 -smoke
            this.crew[i].ability  = crew[i].ability
                         


            this.crew[i].deployText.text = this.crew[i].deployCost
            this.crew[i].powerText.text = this.crew[i].power
            
            this.crew[i].inputEnabled = true;
            //this.crew[i].events.onInputDown.add(this.onDown, this);

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


          this.deployReady = true;

          this.crewKey = 1;
          this.crewCode =""
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

          this.titleTxt2 = this.add.text(75,50, '', {font: '24px Kaph-Regular',fill: '#fff', align: 'center'});
          this.titleTxt2.anchor.setTo(0.5, 0.5);      

          this.goldCountUI = this.add.sprite(200,50, 'coinCount');
          this.goldCountUI.anchor.setTo(0.5, 0.5);  
          this.goldCountValue = parseInt(localStorage.getItem("goldCount"))
          this.goldCount = this.add.text(this.goldCountUI.x,this.goldCountUI.y, this.goldCountValue, {font: '32px Kaph-Regular',fill: '#fff', align: 'left'});
          this.goldCount.anchor.setTo(0.5, 0.5);        


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
          
          this.transTar = 'game'
          this.squawk = this.add.audio('parrotSquawk2');
          this.squawk.volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)*2              


          this.jingleSnd = []
          this.jingleSnd[1] = this.add.audio('coinJingle-1');
          this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1  
          this.jingleSnd[2] = this.add.audio('coinJingle-2');
          this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1  
          this.jingleSnd[3] = this.add.audio('coinJingle-3');
          this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1      

          this.bgSound = this.add.audio('LuckDontLiveOutHere');
          this.bgSound.loop = true;
          this.bgSound.play();
          this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1 

          this.escapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
          this.escapeKey.onDown.add(this.showOptions, this);              

        }
        , update: function () {
          this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1  

          this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
    
          this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
          this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
    
    

          var crewArray = this.crewCode.split("-");
          //var sum = +parseInt(crewArray[1])+parseInt(crewArray[2])+parseInt(crewArray[3])+parseInt(crewArray[4])
          
          if((parseInt(crewArray[0]) != 0 && parseInt(crewArray[1]) != 0 && parseInt(crewArray[2]) != 0 && parseInt(crewArray[3]) != 0 && parseInt(crewArray[4]) != 0) && this.crewKey > 4){
            this.endTurn_Button.loadTexture("ui_disembark_Button-Highlight")
          }
          else{
            this.endTurn_Button.loadTexture("ui_disembark_Button")
          }

          if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
            this.transWave.y += transSpeed
    
            if(this.transWave.y >= this.game.height&& this.transWaveKey == 0){
              if (parseInt(localStorage.getItem("intro")) == 0 || onboardingDebug ) {
                localStorage.setItem("intro",1);
                this.squawk.play();
                /*for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){
                    if(this.crewKey <= 4){
                      this.select(this.tile[''+j+i])
                    }
                  }
                }*/         
                Swal.fire({
                  title: 'Shiver Me Timbers!',
                  html: "Now select your crew and shove off when you are ready.",
                  imageUrl: 'assets/mascot.png',
                  imageWidth: 200,
                  imageHeight: 200,
                }).then((result) => {
                  if (result.isConfirmed) {
                 
                  }
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
            this.crewCode =""
            for(var i=1; i< 6; i++){
              
              if(i == 5){
                this.crewCode+='5'
              }
              else{
                this.crewCode+=this.crew[i].id+'-'
              }
            }
            for(var i=0; i< 5; i++){
              
            //combat order
            this.placedCrew = []
            this.placedCrewID = []
            this.placedCrewKey = 0;

            for(var k = 0; k < 10000; k++){
              this.placedCrewID[k] = -1;  
            }

                if(this.placedCrewID[i] != -1 && this.placedCrewID[i] != 0){
                  //this.crewOrder[i].alpha = 1
                  this.crewOrder[i].loadTexture(this.placedCrew[i])
  
                  
                  //next up effects 
                  this.crew[this.placedCrewID[i]].power = this.crew[this.placedCrewID[i]].origPower  
                  if(i > 0){
                    
                    //boost strike
                    if(this.placedCrewID[i-1] == 1 ){
                      
                      this.crew[this.placedCrewID[i]].holderPower[0] = this.crew[this.placedCrewID[i-1]].power//this.crew[this.placedCrewID[i]].origPower+this.crew[this.placedCrewID[i-1]].power
                      
                    }
                    else{
                      this.crew[this.placedCrewID[i]].holderPower[0] = 0;
                    }
  
  
                    this.crew[this.placedCrewID[i]].power = this.crew[this.placedCrewID[i]].origPower + this.crew[this.placedCrewID[i]].holderPower[0] + this.crew[this.placedCrewID[i]].holderPower[10]
                    
                  }
                  else{
                    this.crew[this.placedCrewID[i]].power = this.crew[this.placedCrewID[i]].origPower + this.crew[this.placedCrewID[i]].holderPower[10]
                  }
  
                 
                   //+ this.crew[this.placedCrewID[i]].holderPower[10]
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
              if(this.bounty > 0){
                this.capInfo.loadTexture('capInfoPanel'+this.capKey+"-wanted") 
                this.bountytext.text = "$"+this.bounty+" REWARD"         
                this.bountytext.x = this.capInfo.x +320;   
                
  
              }               
              //this.capEnergy >= 9 
              if(this.phaseCounter == 1 && this.deploy_poolCurrent >= this.cap_ultCost && !this.captainPowerActivated){
  
                //this.ult_Button.loadTexture('ui_ult_buttonReady');
                //this.ult_Button.y = this.game.height-280
                //this.ult_pool.y = this.game.height-360              
              }
              else{
                //this.ult_Button.loadTexture('ui_ult_buttonNotReady');
                //this.ult_Button.y = this.game.height-280
                //this.ult_pool.y = this.game.height-340
              }
              this.ult_Button.x += ((this.capInfo.x+550) - this.ult_Button.x) * 0.2;
              this.ult_ButtonText.x = this.ult_Button.x+3//-(this.ult_Button.width/3)
              this.ult_ButtonText.text = this.cap_ultCost            
              //this.ult_pool.x = this.ult_Button.x+100
              //this.ult_poolText.y = this.ult_pool.y+10
              //this.ult_poolText.x = this.ult_pool.x
              //this.ult_poolText.text = this.capEnergy+"/9"
  
  
              // select info panel
            if(this.selectedCrew == 0){
                this.selectInfo.x += ( this.game.width - this.selectInfo.x) * 0.2;
                this.selectInfoNotBought.x = this.selectInfo.x
  
  
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
                      this.selectStats.text = "ABILITY: ATTACKS TWICE!"
                      this.selectAbility.text = ""                       
                      break;
                    case 4:
                      this.selectName.text = ""
                      this.selectStats.text = "ABILITY: SPAWN TENTACLES ON COMBAT"
                      this.selectAbility.text = ""                       
                      break;
                    case 5:
                      this.selectName.text = ""
                      this.selectStats.text = "ABILITY: +1 POWER WHEN HURT"
                      this.selectAbility.text = ""                      
                      break;
                    case 6:
                      this.selectName.text = ""
                      this.selectStats.text = "ABILITY: +1 POWER WHEN HURT"
                      this.selectAbility.text = ""                       
                      break;
                    case 7:
                      this.selectName.text = ""
                      this.selectStats.text = "ABILITY: +5 POWER WHEN HURT"
                      this.selectAbility.text = ""                       
                      break;
                    case 8:
                      this.selectName.text = ""
                      this.selectStats.text = "ABILITY: SHIFTS TO INTAGBILE AFTER ATTACK" //"ABILITY: IMMUNE TO DAMAGE FROM ABOVE AND BELOW"
                      this.selectAbility.text = ""                     
                      break;  
                    case 9:
                      this.selectName.text = ""
                      this.selectStats.text = "ABILITY: SHIFTS TO INTAGBILE AFTER ATTACK" //"ABILITY: IMMUNE TO DAMAGE FROM ABOVE AND BELOW"
                      this.selectAbility.text = ""                        
                      break;
                    case 10:
                      this.selectName.text = ""
                      this.selectStats.text = "ABILITY: SHIFTS TO INTAGBILE AFTER ATTACK" //"ABILITY: IMMUNE TO DAMAGE FROM ABOVE AND BELOW"
                      this.selectAbility.text = ""                        
                      break;
                    case 99:
                      this.selectName.text = ""
                      this.selectStats.text = "NOTE: CURSED YA SAY? I'M SURE IT'LL BE FINE ..."
                      this.selectAbility.text = ""                        
                      break; 
                    case 101:
                      this.selectName.text = ""
                      this.selectStats.text = "ABILITY: POWER EQUAL TO YOUR CURRENT BOUNTY"
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
                  
                  this.selectName.text = ""+this.crew[this.selectedCrew].name
                  this.selectStats.text = ""+this.crew[this.selectedCrew].ability
                  
                  if(this.crew[this.selectedCrew].id == 2){
                    this.selectStats.text += " (+"+this.crew[this.selectedCrew].killCount+")"
                  }
                  this.selectAbility.text = ""
                  
  
                  this.selectInfoDetail.loadTexture("selectInfoPanel-"+(this.crew[this.selectedCrew].id-1))
                  
  
                }
                this.selectInfo.x += ( 0 - this.selectInfo.x) * 0.2;
                this.selectInfoNotBought.x = this.selectInfo.x
                this.selectName.angle = 2;
                this.selectStats.angle = 2;
                this.selectAbility.angle = 2;
              }
  
              this.selectInfoDetail.x = this.selectInfo.x
              
  
              this.selectName.x =  this.selectInfo.x+this.selectInfo.width-580
              this.selectStats.x =  this.selectInfo.x+this.selectInfo.width-580
              this.selectAbility.x =  this.selectInfo.x+this.selectInfo.width-580    

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
                    if(i == 5){
                      this.crew[i].isDeployed = false;
                    }                    
                  }

                    
                }
              }              

                if(this.crew[i].isBlank){
                    this.crew[i].deployText.alpha = 0;
                    this.crew[i].powerText.alpha = 0
                }
                else{
                  this.crew[i].deployText.alpha = 1;
                  this.crew[i].powerText.alpha = 1                  
                }


              //crew deployed
              if((i == 5 && this.freeCounterNum <= 0)){
                this.crew[i].isDeployed = true
              }


              this.crewSelect[i].y = this.crew[i].y
              this.crewDeployed[i].y = this.crew[i].y
            }

            
            if(this.selectedCrew > 0 && this.selectedCrew <= 100){
              //this.cursorSelect.alpha = 0.3
              //this.cursorSelect.loadTexture(this.crew[this.selectedCrew].texture)
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
            //load puzzle
            var restart = 0;          
            for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){

                    if(this.tile[''+j+i].selected){
                      this.tile[''+j+i].width = 85
                      this.tile[''+j+i].height = 85
                    }
                    else{
                      this.tile[''+j+i].width = 100
                      this.tile[''+j+i].height = 100                      
                    }
                    if(this.tile[''+j+i].isCrewHere){
                        this.tile[''+j+i].healthText.text = this.tile[''+j+i].hp
                        this.tile[''+j+i].powerText.text =  this.tile[''+j+i].power
                        this.tile[''+j+i].healthText.x = this.tile[''+j+i].x-(this.size/2)+25
                        this.tile[''+j+i].powerText.x = this.tile[''+j+i].x+(this.size/2)-23         
                        
                        this.tile[''+j+i].healthText.y = this.tile[''+j+i].y+(this.size/2)-20
                        this.tile[''+j+i].powerText.y = this.tile[''+j+i].y+(this.size/2)-20                        
                    }
                    else{
                        this.tile[''+j+i].healthText.y = -1000//this.tile[''+j+i].y+(this.size/2)-20
                        this.tile[''+j+i].powerText.y = -1000//this.tile[''+j+i].y+(this.size/2)-20
                    }
                    
                    if(this.tile[""+j+i].isSunk){
                        this.tile[""+j+i].y += ((this.game.height+100) - this.tile[""+j+i].y) * 0.1;    
                        
                    }
                    else{
                    this.tile[""+j+i].y += ( (this.tile[""+j+i].origY+this.tile[""+j+i].springY) - this.tile[""+j+i].y) * this.tile[""+j+i].loadSpeed;   
    
                    restart += 1; 
                    }     
                    this.tile[""+j+i].x += ( (this.tile[""+j+i].origX+this.tile[""+j+i].springX) - this.tile[""+j+i].x) * this.tile[""+j+i].loadSpeed;                      
                }
            }            

          
                    

        },
        select: function (selectedCrew) {
          
          if(this.crewKey <= 4 && selectedCrew.unlocked && !selectedCrew.selected && selectedCrew.bought){
            this.selectedCrew = this.crewKey
            
            selectedCrew.selected = true;
            this.crew[this.crewKey].loadTexture("crew-"+selectedCrew.crewID)
            this.crew[this.crewKey].isBlank = false;
            this.crew[this.crewKey].id = selectedCrew.crewID
            this.crew[this.crewKey].deployText.text = selectedCrew.hp
            this.crew[this.crewKey].powerText.text = selectedCrew.power
            this.crew[this.crewKey].ability = crew[selectedCrew.crewID].ability
            //alert(selectedCrew.crewID)
            this.crewKey++;
            var ran = Math.floor(Math.random() * 3)+1;
            this.jingleSnd[ran].play();                     
          }  

          if(!selectedCrew.bought && selectedCrew.unlocked){

            Swal.fire({
              title: 'Unlock?',
              text: "Do you want to unlock this crewmate?",
              imageUrl: 'assets/mascot.png',
              imageWidth: 200,
              imageHeight: 200,
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes',  
              cancelButtonText: 'No'              
            }).then((result) => {
              if (result.isConfirmed) {
                if(this.goldCountValue >= crew[selectedCrew.crewID].unlockPrice){
                  this.goldCountValue -= crew[selectedCrew.crewID].unlockPrice
                  localStorage.setItem("goldCount",this.goldCountValue)
                  this.goldCount.text = this.goldCountValue;
                  localStorage.setItem("crew"+selectedCrew.crewID+"unlocked",1)
                  selectedCrew.bought = true;
                  this.tileOverlay[''+selectedCrew.id].alpha = 0;
                  this.crewPrice[''+selectedCrew.id].alpha = 0;

                }
                else{

                  Swal.fire({
                    title: 'Sorry',
                    text: "Polly wants more Gold",
                    imageUrl: 'assets/mascot.png',
                    imageWidth: 200,
                    imageHeight: 200          
                  });                  
                }
              }
            })
          }


        },            
        clear: function () {
          this.crewKey = 1;
           for(var i =1; i< 5; i++){
            this.selectedCrew = 0            
            this.crew[i].loadTexture("crew_blank")
            this.crew[i].isBlank = true;
            this.crew[i].id = 0
            this.crew[i].deployText.text = ""
            this.crew[i].powerText.text = ""            
           }
           for(var i = 0; i < this.boardHeight; i++){
            for(var j = 0; j < this.boardWidth; j++){
              this.tile[""+j+i].selected = false
            }
          }           

        },  
        showOptions: function () {
          if(true){
            var ran = Math.floor(Math.random() * 3)+1;
            this.jingleSnd[ran].play();
            Swal.fire({
              title: 'OPTIONS',
              html: '<span onclick=\'const electron = require("electron");const ipc = electron.ipcRenderer;ipc.send("toggle-maximize-window");\'>TOGGLE FULL SCREEN</span><br/><br/><div class="slidecontainer" > MUSIC VOLUME: <span id="mVol">'+parseInt(localStorage.getItem("bgVol"))+'</span><br/><input oninput=\'document.getElementById("mVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("bgVol"))+'" class="slider" id="volRange"> </div><br/><div class="slidecontainer"> SFX VOLUME: <span id="sfxVol">'+parseInt(localStorage.getItem("sfxVol"))+'</span><br/><input oninput=\'document.getElementById("sfxVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("sfxVol"))+'" class="slider" id="sfxRange"> </div>',
            }).then((result) => {
              var bgVol = document.getElementById("volRange");
              var sfxVol = document.getElementById("sfxRange");
    
              localStorage.setItem("bgVol",bgVol.value)
              localStorage.setItem("sfxVol",sfxVol.value)
              //alert(bgVol.value)
           
            })            
          }      
        },             
        buy: function () {


        },              
        showInfo: function (hoveredCrew) {
          
          if(hoveredCrew.unlocked){
            this.selectedCrew = this.crewKey
            this.crew[this.crewKey].id = hoveredCrew.crewID     
            this.crew[this.crewKey].ability = crew[hoveredCrew.crewID].ability       
            //this.noPickUp = true;
          }
          else{
            this.selectedCrew = 0;

          }



          
        },   
        checkKeywords: function (text){
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
                //console.log(words[i]+" "+words[i].length)
              }

            }
          }
          //console.log("length before keyword: "+lengthBeforeKey+"\nKeyword length: "+keywordLength )
          

          
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
          

        },    
        updatetoolTip: function (text) {
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
        },  
        back: function () {
          this.bgSound.stop();
          this.transWaveKey = 1;
          var ran = Math.floor(Math.random() * 3)+1;
          this.wavSnd[ran].play() 
          this.transTar = 'selectCap'
        },                                  
        onDown: function () {
           //alert(this.crewCode)
           var crewArray = this.crewCode.split("-");
           //var sum = +parseInt(crewArray[1])+parseInt(crewArray[2])+parseInt(crewArray[3])+parseInt(crewArray[4])
          
           if((parseInt(crewArray[0]) != 0 && parseInt(crewArray[1]) != 0 && parseInt(crewArray[2]) != 0 && parseInt(crewArray[3]) != 0 && parseInt(crewArray[4]) != 0) && this.crewKey > 4){
            //alert(sum)
            localStorage.setItem("crewCode",this.crewCode)
            var ran = Math.floor(Math.random() * 3)+1;
            this.wavSnd[ran].play()  
            this.bgSound.stop();          
            this.transWaveKey = 1;
            //this.game.state.start('game');
           }
           else{
            Swal.fire({
              title: 'Wait!',
              text: "Select more crew before you shove off!",
              imageUrl: 'assets/mascot.png',
              imageWidth: 200,
              imageHeight: 200,
            })
           }

           
        }        

          
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].selectCrew = selectCrew;
}());