(function() {
  'use strict';

  function selectCap() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  selectCap.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.bg = this.add.sprite(0, 0, 'shopBG');
      this.bg.width = this.game.width
      this.bg.height = this.game.height     
      
      
      this.bg2 = this.add.sprite(300, 0, 'shopBG_desk');
      this.bg2.width = this.game.width
      this.bg2.height = this.game.height

      this.bg3 = this.add.sprite(-300, 0, 'shopKeep');
      this.bg3.width = this.game.width
      this.bg3.height = this.game.height
      //this.bg3.alpha = 0;
      
      this.bg4 = this.add.sprite(0, 0, 'shopBubble');
      this.bg4.width = this.game.width
      this.bg4.height = this.game.height
      this.bg4.alpha = 0;    
      
      this.bubbleTxt = this.add.text(265,y+250, 'WELCOME!\nWHAT DO I CALL\nYOU AGAIN?', {font: '32px Kaph-Regular',fill: '#000', align: 'center'});
      this.bubbleTxt.anchor.setTo(0.5, 0.5);
      this.bubbleTxt.alpha = 0;
      //this.bubbleTxt.stroke = '#232727';
      //this.bubbleTxt.strokeThickness = 5;        

      this.squawk = this.add.audio('parrotSquawk');
      this.squawk.volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1 )*2

      this.jingleSnd = []
      this.jingleSnd[1] = this.add.audio('coinJingle-1');
      this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
      this.jingleSnd[2] = this.add.audio('coinJingle-2');
      this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
      this.jingleSnd[3] = this.add.audio('coinJingle-3');
      this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1               

      if( parseInt(localStorage.getItem("intro")) <= 11){
        localStorage.setItem("intro",1)
      }

      /*
      this.video = this.add.video('seaBG');
      this.video.play(true);
                 
      this.videoImage = this.video.addToWorld(0, 0);
      var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
      this.videoTimer = 100;
      this.video.volume = 0;
      this.videoImage.scale.set(videoScale);          
      */

      this.titleTxt = this.add.text(x+275,30, 'CHOOSE YOUR CAPTAIN', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
      this.titleTxt.stroke = '#232727';
      this.titleTxt.strokeThickness = 5;           
      
      this.selectCap = []
      this.tips = [];
      var distX = 0;
      var distY = 0;
      for(var i = 1; i < 7; i++){
        this.selectCap[i] = this.add.sprite(x+distX-120, y+distY-250, 'selectCap-'+i);
        this.selectCap[i].origX = this.selectCap[i].x;
        this.selectCap[i].origY = this.selectCap[i].y;
        this.selectCap[i].anchor.setTo(0.5, 0.5);
        this.selectCap[i].id = i;
        this.selectCap[i].unlocked = true;
        this.selectCap[i].inputEnabled = true;
        this.selectCap[i].events.onInputDown.add(this.select, this);       
        this.selectCap[i].capHealth = this.add.text( this.selectCap[i].x+68, this.selectCap[i].y-205, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 250 });
        this.selectCap[i].capSavvy = this.add.text( this.selectCap[i].x+140, this.selectCap[i].y-205, '', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 250 });
        this.selectCap[i].ultCost = this.add.text( this.selectCap[i].x+140, this.selectCap[i].y+205, '', {font: '20px LondrinaSolid-Black',fill: '#232727', align: 'left', wordWrap: true, wordWrapWidth: 250 });
        this.selectCap[i].capAbility = this.add.text( this.selectCap[i].x-this.selectCap[i].width/2+50, this.selectCap[i].y+155, '', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 250 });
        
        this.selectCap[i].capAbility.inputEnabled = true;
        this.selectCap[i].capAbility.id = i;
        this.selectCap[i].capAbility.events.onInputOver.add(this.updatetoolTip, this);          
        
        
        //check if unlocked
        var unlockTracker = 0

        /*
        if(localStorage.getItem("cap_unlocked"+i) === null || parseInt(localStorage.getItem("cap_unlocked"+i)) == 0){
          switch(i){
            case 2:
              if(localStorage.getItem("NumMon"+captain[i].unlockTarget+"Killed") !== null){
                unlockTracker = captain[i].unlockValue -parseInt(localStorage.getItem("NumMon"+captain[i].unlockTarget+"Killed"))
                if(unlockTracker <= 0){
                  localStorage.setItem("cap_unlocked"+i, 1)
                  this.squawk.play();
                  Swal.fire({
                    title: 'Well Done!',          
                    html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
                    imageUrl: 'assets/mascot.webp',
                    imageWidth: 200,
                    imageHeight: 200,
                    allowOutsideClick: false,
                    allowEscapeKey: false
                  }).then((result) => {
                    if (result.isConfirmed) {
                      var ran = Math.floor(Math.random() * 3)+1;
                      this.jingleSnd[ran].play();            
                    }
                  })                   
                }
                
              }
              else{
                unlockTracker = captain[i].unlockValue 
              }
              break;
              case 3:
                if(localStorage.getItem("NumMon"+captain[i].unlockTarget+"Killed") !== null){
                  unlockTracker = captain[i].unlockValue -parseInt(localStorage.getItem("NumMon"+captain[i].unlockTarget+"Killed"))
                  if(unlockTracker <= 0){
                    localStorage.setItem("cap_unlocked"+i, 1)
                    this.squawk.play();
                    Swal.fire({
                      title: 'Well Done!',          
                      html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
                      imageUrl: 'assets/mascot.webp',
                      imageWidth: 200,
                      imageHeight: 200,
                      allowOutsideClick: false,
                      allowEscapeKey: false
                    }).then((result) => {
                      if (result.isConfirmed) {
                        var ran = Math.floor(Math.random() * 3)+1;
                        this.jingleSnd[ran].play();            
                      }
                    })                     
                  }
                  
                }
                else{
                  unlockTracker = captain[i].unlockValue 
                }
                break;              
          }
        }        
        */
        if(unlockEverything){
          for(var z = 1; z < 7; z++){
            localStorage.setItem("cap_unlocked"+z, 1)
          }
        }       
        if(i <= captainCount  && i > 1){
          if(localStorage.getItem("cap_unlocked"+i) === null || parseInt(localStorage.getItem("cap_unlocked"+i)) == 0){
            localStorage.setItem("cap_unlocked"+i, 0);
            this.selectCap[i].capHealth.text = captain[i].cap_healthValue
            this.selectCap[i].capSavvy.text = captain[i].deploy_poolCurrent+"/"+captain[i].deploy_poolMax            
            this.selectCap[i].loadTexture('selectCap_locked-'+i) 
            this.selectCap[i].unlocked = false;
            this.selectCap[i].capAbility.text = captain[i].unlockText//+" ("+unlockTracker+" REMAINING)"         
            //this.selectCap[i].capAbility.x =     this.selectCap[i].x-this.selectCap[i].width/2+90
          } 
          else{
            this.selectCap[i].capHealth.text = captain[i].cap_healthValue
            this.selectCap[i].capSavvy.text = captain[i].deploy_poolCurrent+"/"+captain[i].deploy_poolMax
            this.selectCap[i].ultCost.text = captain[i].cap_ultCost
            this.selectCap[i].capAbility.text = captain[i].ult_text            
          }

        }          
        else if(i > captainCount ){
            this.selectCap[i].loadTexture('selectCap_notAvail') 
            this.selectCap[i].unlocked = false;
            this.selectCap[i].capAbility.text = ''
        }  
        else{
          this.selectCap[i].capHealth.text = captain[i].cap_healthValue
          this.selectCap[i].capSavvy.text = captain[i].deploy_poolCurrent+"/"+captain[i].deploy_poolMax
          this.selectCap[i].ultCost.text = captain[i].cap_ultCost
          this.selectCap[i].capAbility.text = captain[i].ult_text
        }      
        if(i != 3){
            distX += 400 

        }
        else if(i == 3){
            distX = 0
            distY += 475;
        }

        

      }
      /*
      if(parseInt(localStorage.getItem("cap_unlocked2New")) == 1){
        this.squawk.play();
        localStorage.setItem("cap_unlocked2New", 2)
        Swal.fire({
          title: 'Well Done!',          
          html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
          imageUrl: 'assets/mascot.webp',
          imageWidth: 200,
          imageHeight: 200,
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            var ran = Math.floor(Math.random() * 3)+1;
            this.jingleSnd[ran].play();            
          }
        })    
      }

      if(parseInt(localStorage.getItem("cap_unlocked3New")) == 1){
        this.squawk.play();
        localStorage.setItem("cap_unlocked3New", 2)
        Swal.fire({
          title: 'Well Done!',          
          html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
          imageUrl: 'assets/mascot.webp',
          imageWidth: 200,
          imageHeight: 200,
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then((result) => {
          if (result.isConfirmed) {
            var ran = Math.floor(Math.random() * 3)+1;
            this.jingleSnd[ran].play();            
          }
        })    
      }      
      */

      this.back_Button = this.add.sprite(35, 35, 'back_button');            
      this.back_Button.inputEnabled = true;
      this.back_Button.anchor.setTo(0.5, 0.5);
      this.back_Button.width = 50
      this.back_Button.height = 50
      this.back_Button.events.onInputDown.add(this.back, this);  

      this.selectCapSelect = this.add.sprite(-1000, this.selectCap[1].y, 'selectCap_highlight');
      this.selectCapSelect.anchor.setTo(0.5, 0.5);
      
      // new label
      this.newLabel = []
      for(var i = 1; i < 7; i++){
        if(parseInt(localStorage.getItem("cap_unlocked"+i+"New")) >= 1 && parseInt(localStorage.getItem("cap_unlocked"+i+"New")) <= 2){   
          this.newLabel[i] = this.add.sprite(this.selectCap[i].x+75, this.selectCap[i].y-this.selectCap[i].height/2+100, 'new');     
          this.newLabel[i].width = 150
          this.newLabel[i].height = 50
          this.newLabel[i].angle = 20
        }       
      }      

     

      this.nextButtonOutline = this.add.sprite(this.game.width-200, y+475, 'nextButton_outline');
      this.nextButtonOutline.anchor.setTo(0.5, 0.5);    
      this.nextButtonOutline.alpha = 0   

      this.overlay = this.add.sprite(0, 0, 'bgOverlay1');
      this.overlay.x = -this.game.width

      this.unlockLines = this.add.sprite(0, 0, 'unlockLines');
      this.unlockLines.width = this.game.width*1.5
      this.unlockLines.height = this.game.width*1.5
      this.unlockLines.anchor.setTo(0.5, 0.5);    
      this.unlockLines.x = -5000  

      this.unlockedCrewBG = this.add.sprite(this.game.width/2, -5000, 'treasure_rarity_1');
      this.unlockedCrewBG.anchor.setTo(0.5, 0.5);  
      this.unlockedCrewBG.alpha = 0;
      this.unlockedCrewBG.inputEnabled = true;
      this.unlockedCrewBG.events.onInputDown.add(this.hideUnlock, this);       

      this.unlockedCrew = this.add.sprite(this.game.width/2, this.game.height/2, 'crew-1');
      this.unlockedCrew.anchor.setTo(0.5, 0.5);  
      this.unlockedCrew.alpha = 0;
      
      var size = 150

      this.unlockedCrew.deployText = this.add.text( this.unlockedCrew.x-(size/2)+33,this.unlockedCrew.y+(size/2)-25, 'X', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.unlockedCrew.deployText.anchor.setTo(0.5, 0.5); 
      this.unlockedCrew.deployText.stroke = '#232727';
      this.unlockedCrew.deployText.strokeThickness = 5;    
      this.unlockedCrew.deployText.alpha = 0;             
      
      this.unlockedCrew.powerText = this.add.text(this.unlockedCrew.x+(size/2)-31,this.unlockedCrew.y+(size/2)-25, 'X', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.unlockedCrew.powerText.anchor.setTo(0.5, 0.5);       
      this.unlockedCrew.powerText.stroke = '#232727';
      this.unlockedCrew.powerText.strokeThickness = 5;   
      this.unlockedCrew.powerText.alpha = 0;                   

      this.unlockedCrew.ability = this.add.text(this.unlockedCrew.x,this.unlockedCrew.y+150, 'X ',{font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 400  });
      this.unlockedCrew.ability.anchor.setTo(0.5, 0.5);       
      this.unlockedCrew.ability.stroke = '#232727';
      this.unlockedCrew.ability.strokeThickness = 5;   
      this.unlockedCrew.ability.alpha = 0;   
      this.unlockedCrew.ability.inputEnabled = true;
      this.unlockedCrew.ability.id = 1;
      this.unlockedCrew.ability.events.onInputOver.add(this.updatetoolTip, this);          
     
      
      this.unlockedCrew.name = this.add.text(this.unlockedCrew.x,this.unlockedCrew.y-200, ' X',{font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 500  });
      this.unlockedCrew.name.anchor.setTo(0.5, 0.5);       
      this.unlockedCrew.name.stroke = '#232727';
      this.unlockedCrew.name.strokeThickness = 5;   
      this.unlockedCrew.name.alpha = 0;                    

      this.bag = this.add.sprite(500+50, this.game.height/2+50, 'bag');
      this.bag.anchor.setTo(0.5, 0.5);
      this.bag.width = 250
      this.bag.height = 250
      this.bag.origWidth = this.bag.width 
      this.bag.origHeight = this.bag.height
      this.bag.inputEnabled = true;
      this.bag.events.onInputDown.add(this.unlockCrew, this);      
      this.bag.events.onInputOver.add(this.showOutlineBag, this);  
      this.bag.events.onInputOut.add(this.hideOutlineBag, this);         
      
      this.bagOutline = this.add.sprite(this.bag.x, this.bag.y, 'bagOutline');
      this.bagOutline.anchor.setTo(0.5, 0.5);      
      this.bagOutline.alpha = 0;

      this.unlockCredit = this.add.text(this.bag.x+50,this.bag.y+60, 'X', {font: '50px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.unlockCredit.anchor.setTo(0.5, 0.5);       
      this.unlockCredit.stroke = '#232727';
      this.unlockCredit.strokeThickness = 10;   

      this.goldCountUI = this.add.sprite(200,this.game.height-75, 'coinCount');
      this.goldCountUI.anchor.setTo(0.3, 0.5);   

      this.earnedCredit = this.add.text(this.goldCountUI.x,this.goldCountUI.y, 'X', {font: '50px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.earnedCredit.anchor.setTo(0.5, 0.5);       
      this.earnedCredit.stroke = '#232727';
      this.earnedCredit.strokeThickness = 5;   
      
      this.earnedCreditGained = this.add.text(200,this.game.height-100, '+', {font: '50px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.earnedCreditGained.anchor.setTo(0.5, 0.5);       
      this.earnedCreditGained.stroke = '#232727';
      this.earnedCreditGained.strokeThickness = 5 
      this.earnedCreditGained.alpha = 0;     

      this.nextButton = this.add.sprite(x+275, y+500, 'nextButton');
      this.nextButton.anchor.setTo(0.5, 0.5);   
      this.nextButton.inputEnabled = true;
      this.nextButton.events.onInputDown.add(this.onDown, this);      
      this.nextButton.events.onInputOver.add(this.showOutline, this);  
      this.nextButton.events.onInputOut.add(this.hideOutline, this);   

      this.nextButtonOutline.x = this.nextButton.x
      this.nextButtonOutline.y = this.nextButton.y
      /*
      this.nexCap_Button = this.add.sprite(x+200, y, 'capArrow');          
      this.nexCap_Button.angle =180  
      this.nexCap_Button.inputEnabled = true;
      this.nexCap_Button.anchor.setTo(0.5, 0.5);
      this.nexCap_Button.events.onInputDown.add(this.back, this);
      
      this.prevCap_Button = this.add.sprite(x-200, y, 'capArrow');            
      this.prevCap_Button.inputEnabled = true;
      this.prevCap_Button.anchor.setTo(0.5, 0.5);
      this.prevCap_Button.events.onInputDown.add(this.back, this);      
      */
      
  


      localStorage.setItem("captain",1)
      this.tooltips = []

      for(var i = 1; i < 7; i++){
        this.tooltips[i] = this.add.sprite(0, 0, 'tooltip');
        this.tips[i] = new Phasetips(this.game, {
          targetObject:  this.selectCap[i].capAbility,
          context: "",
          fontSize: 16,
          strokeWeight: 0,
          roundedCornersRadius: 0,            
          position: "top",
          positionOffset: 0,
          padding: 100,
          customBackground: this.tooltips[i],     
          animation: "fade"
        });         

      }

    



    

      this.transWave = this.add.sprite(0, -this.game.height, 'transitionWave');
      this.transWave.width = this.game.width
      this.transTar = 'game'//'selectCrew'
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

      localStorage.setItem("skipLogo",1)

      this.capVOSnd = []
      this.capVOSnd[1] = this.add.audio('capVO-1');
      this.capVOSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.capVOSnd[2] = this.add.audio('capVO-2');
      this.capVOSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.capVOSnd[3] = this.add.audio('capVO-3');
      this.capVOSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1  
      
      this.capVOSnd[4] = this.add.audio('capVO-2');
      this.capVOSnd[4].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1  
      this.capVOSnd[5] = this.add.audio('capVO-2');
      this.capVOSnd[5].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1  
      this.capVOSnd[6] = this.add.audio('capVO-3');
      this.capVOSnd[6].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1                    
    
      this.selectCapSelect.followId = 1
      this.selectedCapId = -1;
      this.selectCapSelect.alpha = 0

      this.bgSound = this.add.audio('LuckDontLiveOutHere');
      this.bgSound.loop = true;
      this.bgSound.play();
      this.bgSound.volume = (parseInt(localStorage.getItem("bgVol"))* 0.1)      
      
     
      this.escapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
      this.escapeKey.onDown.add(this.showOptions, this);         
      
      var key7 = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
      key7.onDown.add(this.konamiCheck, this);
      var key8 = this.game.input.keyboard.addKey(Phaser.Keyboard.B);
      key8.onDown.add(this.konamiCheck, this);

      var key9 = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
      key9.onDown.add(this.konamiCheck, this);
      var key10 = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      key10.onDown.add(this.konamiCheck, this);
      var key11 = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
      key11.onDown.add(this.konamiCheck, this);
      var key12 = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
      key12.onDown.add(this.konamiCheck, this);   
      this.konamiCode = 0        

      localStorage.setItem("zone",1)
      this.unlockCreditVal = 1;

      if(localStorage.getItem("goldCount") === null){
        localStorage.setItem("goldCount",0)
        
      } 
      this.ownedCreditVal = parseInt(localStorage.getItem("goldCount"))

      if(localStorage.getItem("zoneComplete") === null){
        localStorage.setItem("zoneComplete",0)
        
      }        
      this.zoneComplete = parseInt(localStorage.getItem("zoneComplete"))
     
      if(this.zoneComplete > 0){
        this.bubbleTxt.text = 'WELL DONE!\nYOU CLEARED\nZONE '+this.zoneComplete+"\nHERE'S "+this.zoneComplete*150+" GOLD"
        this.ownedCreditVal += this.zoneComplete*150;
        this.earnedCreditGained.alpha = 1;
        this.earnedCreditGained.text = "+"+this.zoneComplete*150;
        this.earnedCreditGained.wait = 100;

        localStorage.setItem("zoneComplete",0)
        localStorage.setItem("goldCount",this.ownedCreditVal)
      }
      this.ownedCreditValHolder = this.ownedCreditVal

      localStorage.removeItem("crewCode")
      

      updatePool();
      
      this.unlockKey = true;
      this.bagWiggle = -1
      this.bagCount = 1


      this.changeWaveDown();

    },

    update: function () {

      this.unlockCreditVal = Math.ceil((crewPool[0].length+crewPool[1].length+crewPool[2].length)/10)*100
      this.unlockCredit.text = "x"+this.unlockCreditVal
      if(this.ownedCreditVal < this.unlockCreditVal){
        this.unlockCredit.addColor("#BA363B", 0)
      }
      else{
        this.unlockCredit.addColor("#FFF", 0)
      }

      this.earnedCredit.text = this.ownedCreditValHolder
      
      if(this.ownedCreditValHolder > this.ownedCreditVal){
        var diff = this.ownedCreditValHolder-this.ownedCreditVal

        if(diff > 1000){
          this.ownedCreditValHolder-= 1000;
        }
        if(diff > 100){
          this.ownedCreditValHolder-= 100;
        }        
        if(diff > 10){
          this.ownedCreditValHolder-= 10;
        }        
        if(diff <= 10){
          this.ownedCreditValHolder--;
        }
        
      }
      if(this.ownedCreditVal > 9999){
        this.ownedCreditVal = 9999
      }
      if(this.unlockLines.x == this.game.width/2){
        this.unlockLines.angle+= 0.03
      }
      

      if(this.earnedCreditGained.alpha > 0 && this.earnedCreditGained.wait == 0){
        this.earnedCreditGained.alpha -= 0.01
        this.earnedCreditGained.y--;
      }
      else if(this.earnedCreditGained.wait > 0){
        this.earnedCreditGained.wait--;
      }

      this.unlockedCrew.alpha = this.unlockedCrewBG.alpha
      this.unlockedCrew.deployText.alpha = this.unlockedCrewBG.alpha
      this.unlockedCrew.powerText.alpha = this.unlockedCrewBG.alpha
      this.unlockedCrew.name.alpha = this.unlockedCrewBG.alpha
      this.unlockedCrew.ability.alpha = this.unlockedCrewBG.alpha

      this.checkKeywords(this.unlockedCrew.name)
      this.checkKeywords(this.unlockedCrew.ability)


      var crewTotal = getCrewLength()
      var crewUnlockedTotal = getCrewUnlockedLength()

      if(crewTotal <= crewUnlockedTotal || nomoreCrewUnlockable){
        this.unlockCredit.alpha = 0
        this.bag.alpha = 0;
        this.bagOutline.alpha = 0;
        this.bag.y = this.game.height+1000
      }      


      if(this.bagWiggle == 0){
        this.bag.angle += 2
        if(this.bag.angle > 10){
          this.bagWiggle = 1
        }
      }
      if(this.bagWiggle == 1){
        this.bag.angle -= 2
        if(this.bag.angle < -10){
          this.bagWiggle = -1
          if(this.bagCount > 0){
            this.bagCount--
            this.bagWiggle = 0
          }
          else{
            this.bagCount = 1;
            this.bagWiggle = -1
            this.bag.angle = 0
            this.bag.height += 100
            this.bag.width -= 100  
            
            //spawn unlock char
            this.unlockLines.x = this.game.width/2
            this.unlockLines.y = this.game.height/2
            this.unlockedCrewBG.y = this.game.height/2
      
            this.unlockedCrewBG.alpha = 1;
            this.unlockedCrew.alpha = this.unlockedCrewBG.alpha
      
            this.overlay.x = 0;   
                   
            //
            this.tips[1].showTooltip()    
            this.tips[1].updatePosition(this.unlockedCrew.ability.x, this.unlockedCrew.ability.y+90)
            this.updatetoolTip(this.unlockedCrew.ability)

            this.unlockKey = true;
                          
          }

          
     

        }
      }


      this.bag.width += (this.bag.origWidth - this.bag.width) * 0.1
      this.bag.height += (this.bag.origHeight - this.bag.height) * 0.1
      


      this.bagOutline.width = this.bag.width
      this.bagOutline.height = this.bag.height
      this.bagOutline.angle = this.bag.angle

      this.bg3.x +=  ( 0 - this.bg3.x) * 0.1;
      if(this.bg3.x > -1){
        this.bg4.alpha +=  ( 1 - this.bg4.alpha) * 0.1;
        if(this.bg4.alpha >= 0.8){
          this.bubbleTxt.alpha +=  ( 1 - this.bubbleTxt.alpha) * 0.1;
        }
        //this.bubbleTxt.alpha +=  ( 1 - this.bubbleTxt.alpha) * 0.02;
      }


      this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1  

      this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

      this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

      this.capVOSnd[1].volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)
      this.capVOSnd[2].volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)
      this.capVOSnd[3].volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)

      this.capVOSnd[4].volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)*8
      this.capVOSnd[5].volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)*8
      this.capVOSnd[6].volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)*8      

      

      if(this.selectCapSelect.alpha == 1){
        this.nextButton.loadTexture("nextButton_highlight")
      }
      else{
        this.nextButton.loadTexture("nextButton")
      }
      

      if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
        //this.transWave.y += transSpeed

        if(this.transWave.y >= this.game.height&& this.transWaveKey == 0){

         
          if (parseInt(localStorage.getItem("intro")) == 13) {
            localStorage.setItem("intro",14);
            Swal.fire({
              title: 'Well Done!',          
              html: "You've completed your first voyage! <br/><br/> You can continue playing the demo to unlock new captains & crew mates.<br/><br/>That's it for now remember to wishlist on steam!",
              imageUrl: 'assets/wishlistSteam.webp',
              showCancelButton: true,
              confirmButtonColor: '#000',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Wishlist',  
              cancelButtonText: 'Maybe Later :(',              
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then((result) => {
              localStorage.setItem("intro",15);
              if (result.isConfirmed) { 
                try{
                  const electron = require("electron");
                  const ipc = electron.ipcRenderer;
                  ipc.send("openLinkPlease");        
                  
                  localStorage.setItem("cap_unlocked2New", 2)
                  Swal.fire({
                    title: 'Well Done!',          
                    html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
                    imageUrl: 'assets/mascot.webp',
                    imageWidth: 200,
                    imageHeight: 200,
                    allowOutsideClick: false,
                    allowEscapeKey: false
                  }).then((result) => {
                    if (result.isConfirmed) {
                      var ran = Math.floor(Math.random() * 3)+1;
                      this.jingleSnd[ran].play();            
                    }
                  })                  
                }                
                catch(e){

                }
              }
              else{
                localStorage.setItem("cap_unlocked2New", 2)
                Swal.fire({
                  title: 'Well Done!',          
                  html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
                  imageUrl: 'assets/mascot.webp',
                  imageWidth: 200,
                  imageHeight: 200,
                  allowOutsideClick: false,
                  allowEscapeKey: false
                }).then((result) => {
                  if (result.isConfirmed) {
                    var ran = Math.floor(Math.random() * 3)+1;
                    this.jingleSnd[ran].play();            
                  }
                })                
              }
            })          
          }	           

          if (parseInt(localStorage.getItem("cap_unlocked2New")) == 1) {
            localStorage.setItem("cap_unlocked2New", 2)
            Swal.fire({
              title: 'Well Done!',          
              html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
              imageUrl: 'assets/mascot.webp',
              imageWidth: 200,
              imageHeight: 200,
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then((result) => {
              if (result.isConfirmed) {
                var ran = Math.floor(Math.random() * 3)+1;
                this.jingleSnd[ran].play();            
              }
            }) 
            
            
          }
          else if (parseInt(localStorage.getItem("cap_unlocked3New")) == 1) {
            localStorage.setItem("cap_unlocked3New", 2)
            Swal.fire({
              title: 'Well Done!',          
              html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
              imageUrl: 'assets/mascot.webp',
              imageWidth: 200,
              imageHeight: 200,
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then((result) => {
              if (result.isConfirmed) {
                var ran = Math.floor(Math.random() * 3)+1;
                this.jingleSnd[ran].play();            
              }
            })             
          }          
        }
      }

      if(this.transWaveKey == 1){
        //this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
        if(this.transWave.y <= (-this.game.height+50)){
          this.game.state.start(this.transTar);
        }
      }      

      for(var i = 1; i < 7; i++){
        this.checkKeywords(this.selectCap[i].capAbility)
        this.selectCap[i].y += ( this.selectCap[i].origY - this.selectCap[i].y) * 0.2;
      }
      if(this.selectedCapId > 0){
        this.selectCapSelect.y += ( this.selectCap[this.selectedCapId].origY - this.selectCapSelect.y) * 0.2;
      }

    },
    select: function (selectedCap) {
        if(!selectedCap.unlocked){

        }
        else{
          for(var i = 1; i <= captainCount; i++){
            this.capVOSnd[i].stop()  
          }
          this.selectCapSelect.alpha = 1;
          this.capVOSnd[selectedCap.id].play()
            localStorage.setItem("captain",selectedCap.id)
            selectedCap.y-=5;
            
            this.selectCapSelect.x = selectedCap.x
            this.selectCapSelect.y = selectedCap.y
            this.selectedCapId = selectedCap.id

            this.bubbleTxt.text = "Well Met\n "+captain[selectedCap.id].cap_name+"!"
            
        }

    },  
    updatetoolTip: function (text,cursor) {
      //console.log(cursor.y)
      if(text.text.length > 0){
        var key = text.id
        this.tips[key].updateContent("Plus Ultra")
        this.tips[key].hideTooltip()
        var words = text.text.split(" ");
        var content = ""
        for(var i = 0; i < words.length; i++){
          for(var k = 0; k < keyword.length; k++){
            if(words[i].toUpperCase() === keyword[k].word.toUpperCase()){
              
              if(keyword[k].description.length > 0){
                this.tips[key].showTooltip()  
                if(keyword[k].description.length > 0){
                  content += "▪ "+keyword[k].description+"\n\n"
                } 
                this.tips[key].updateContent(content)
                //k = keyword.length
                //i = words.length
              }

            }
            else{
            }
            //+(text.width/2+50)
            try{
              if(cursor.y > this.game.height/2){
                this.tips[key].updatePosition(text.x+200, text.y-150)
              }
              else{
                this.tips[key].updatePosition(text.x, text.y+90)
              }
            }
            catch(e){
              this.tips[key].updatePosition(text.x, text.y+90)
            }

            if(this.unlockedCrew.alpha == 1){
              this.tips[key].updatePosition(text.x, text.y+90)
            }
            
          }
        }

        var holderText = this.tips[key].returnText()
        this.checkKeywords(holderText)         
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
    showOptions: function () {
      if(true){


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

        var ran = Math.floor(Math.random() * 3)+1;
        this.jingleSnd[ran].play();
        Swal.fire({
          title: 'OPTIONS',
          html: '<span>TOGGLE SCREEN SHAKE <input type="checkbox" id="shakeCheck" '+screenShakeChecked+' onclick=\'localStorage.setItem("screenShakeEnabled",document.getElementById("shakeCheck").checked)\'></span><br/><br/> <span>TOGGLE FULL SCREEN <input type="checkbox" id="fullScreenCheck" '+fullscreenChecked+' onclick=\'const electron = require("electron");const ipc = electron.ipcRenderer;ipc.send("toggle-maximize-window"); localStorage.setItem("fullScreenCheck",document.getElementById("fullScreenCheck").checked)\'> </span><br/><br/><div class="slidecontainer" > MUSIC VOLUME: <span id="mVol">'+parseInt(localStorage.getItem("bgVol"))+'</span><br/><input oninput=\'localStorage.setItem("bgVol",this.value); document.getElementById("mVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("bgVol"))+'" class="slider" id="volRange"> </div><br/><div class="slidecontainer"> SFX VOLUME: <span id="sfxVol">'+parseInt(localStorage.getItem("sfxVol"))+'</span><br/><input oninput=\'localStorage.setItem("sfxVol",this.value); document.getElementById("sfxVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("sfxVol"))+'" class="slider" id="sfxRange"> </div>',
          allowOutsideClick: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
heightAuto: false                        
        }).then((result) => {
          var bgVol = document.getElementById("volRange");
          var sfxVol = document.getElementById("sfxRange");

          localStorage.setItem("bgVol",bgVol.value)
          localStorage.setItem("sfxVol",sfxVol.value)
          //alert(bgVol.value)
       
        })            
      }      
    },  
    unlockCrew: function () {
      var crewTotal = getCrewLength()
      var crewUnlockedTotal = getCrewUnlockedLength()

      if(crewTotal > crewUnlockedTotal && this.unlockKey){
        if(this.ownedCreditVal < this.unlockCreditVal){
          this.bag.height += 100
          this.bag.width -= 100 

          this.bubbleTxt.text = 'LOOKS LIKE YOU\nNEED MORE GOLD'

          this.hideUnlock();
        }
        else{
          this.hideUnlock();
          
          if(this.unlockKey){
            this.unlockKey = false;
            this.ownedCreditVal -=  this.unlockCreditVal
            localStorage.setItem("goldCount",this.ownedCreditVal)
            if(this.ownedCreditVal <0 ){
              this.ownedCreditVal = 0;
            }
          }

          this.bagWiggle = 0;
          var unlockCrew = Math.floor(Math.random() * 78)+1;
          var unlockRarity = Math.floor(Math.random() * 2);

          

          
          if(localStorage.getItem("crew_unlocked-"+unlockCrew) === null && !(crew[unlockCrew] == undefined)){
            localStorage.setItem("crew_unlocked-"+unlockCrew,1)
            var crewType = ""
            switch(crew[unlockCrew].type){
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
            this.unlockedCrew.loadTexture("crew-"+unlockCrew)
            var rarity = crew[unlockCrew].rarity+1
            this.unlockedCrewBG.loadTexture("treasure_rarity_"+(rarity))
            this.unlockedCrew.deployText.text = crew[unlockCrew].deployCost
            this.unlockedCrew.powerText.text = crew[unlockCrew].origPower
            this.unlockedCrew.ability.text = crew[unlockCrew].ability
            this.unlockedCrew.name.text = crew[unlockCrew].name+"\nTYPE: "+crewType

            





            updatePool();
          //console.log(crewPool)
        } 
        else{
          //console.log(unlockCrew+" NOT AVAILABLE")
          this.unlockKey = true;
          this.ownedCreditVal +=  this.unlockCreditVal
          this.unlockCrew();
        }        
        }
      }
      else{
        this.bag.height += 100
        this.bag.width -= 100 

        //this.bubbleTxt.text = "YOU'VE UNLOCKED\nALL CREW MATES"        
      }







    },    
    hideUnlock: function () {
      this.tips[1].hideTooltip()
      this.unlockedCrewBG.y = -5000;
      this.unlockLines.x = -5000
      this.unlockedCrewBG.alpha = 0;
      this.unlockedCrew.ability.text = ""  
      this.overlay.x = -5000;
      this.unlockKey = true;
    },    
    showOutlineBag: function () {
      this.bagOutline.alpha = 1
      var crewTotal = getCrewLength()
      var crewUnlockedTotal = getCrewUnlockedLength()
      this.bubbleTxt.text = 'UNLOCK\nNEW CREW?\n'+(crewTotal-crewUnlockedTotal)+' left\nto be unlocked'
    },
    hideOutlineBag: function () {
      this.bagOutline.alpha = 0
      //this.bubbleTxt.text = 'I GUESS NOT\n...'
      if(this.ownedCreditVal < this.unlockCreditVal){
        //this.bubbleTxt.text = 'LOOKS LIKE YOU\nNEED MORE GOLD'
      }      
    },         
    showOutline: function () {
      this.nextButtonOutline.alpha = 1
    },
    hideOutline: function () {
      this.nextButtonOutline.alpha = 0
    },         
    back: function () {
      this.bgSound.stop();
      this.transWaveKey = 1;
      this.changeWave();
      var ran = Math.floor(Math.random() * 3)+1;
      this.wavSnd[ran].play() 
      this.transTar = 'menu'
    },     
    konamiCheck: function (key) {
      if(key.keyCode == Phaser.Keyboard.UP ){
        if(this.konamiCode == 0){
          this.konamiCode++;
        }
        else if(this.konamiCode == 1){
          this.konamiCode++;
        }   
        else{
          this.konamiCode = 0;
        }     
      }

      if(key.keyCode == Phaser.Keyboard.DOWN ){
        if(this.konamiCode == 2){
          this.konamiCode++;
        }
        else if(this.konamiCode == 3){
          this.konamiCode++;
        }   
        else{
          this.konamiCode = 0;
        }           
      }  


      if(key.keyCode == Phaser.Keyboard.LEFT ){
        if(this.konamiCode == 4){
          this.konamiCode++;
        }
        else if(this.konamiCode == 6){
          this.konamiCode++;
        }   
        else{
          this.konamiCode = 0;
        }           
      }


      if(key.keyCode == Phaser.Keyboard.RIGHT ){
        if(this.konamiCode == 5){
          this.konamiCode++;
        }
        else if(this.konamiCode == 7){
          this.konamiCode++;
        }   
        else{
          this.konamiCode = 0;
        }           
      }


      if(key.keyCode == Phaser.Keyboard.A){
        if(this.konamiCode == 9){
          this.konamiCode++;
        }   
        else{
          this.konamiCode = 0;
        }        
      }
      if(key.keyCode == Phaser.Keyboard.B){
        if(this.konamiCode == 8){
          this.konamiCode++;
        }   
        else{
          this.konamiCode = 0;
        }         
      } 
      
      if(this.konamiCode == 10){
        this.konamiCode = 0;
        
        for(var i = 1; i < 7; i++){
          localStorage.setItem("cap_unlocked"+i, 1)
          if(i != 1 && i <= captainCount ){
            localStorage.setItem("cap_unlocked"+i+"New", 2)
          }
          
          if(i <= captainCount  && i > 1){
            this.selectCap[i].loadTexture('selectCap-'+i) 
            this.selectCap[i].unlocked = true;
            this.selectCap[i].capHealth.text = captain[i].cap_healthValue
            this.selectCap[i].capSavvy.text = captain[i].deploy_poolCurrent+"/"+captain[i].deploy_poolMax
            this.selectCap[i].ultCost.text = captain[i].cap_ultCost
            this.selectCap[i].capAbility.text = captain[i].ult_text      
  
          }          
          else if(i > captainCount ){
              this.selectCap[i].loadTexture('selectCap_notAvail') 
              this.selectCap[i].unlocked = false;
              this.selectCap[i].capAbility.text = ''
          }  
          else{
            this.selectCap[i].capHealth.text = captain[i].cap_healthValue
            this.selectCap[i].capSavvy.text = captain[i].deploy_poolCurrent+"/"+captain[i].deploy_poolMax
            this.selectCap[i].ultCost.text = captain[i].cap_ultCost
            this.selectCap[i].capAbility.text = captain[i].ult_text
          }          
          
        }
        localStorage.setItem("goldCount",9999)
        this.game.state.start('selectCap');
      }           
      
    }, 
    changeWaveDown: function(){
      this.transWave.y = this.game.height
      this.add.tween(this.transWave).from( { y:-this.game.height }, 1000, Phaser.Easing.Default, true);               
    },      
    changeWave: function(){
      this.transWave.y = -this.game.height+50
      this.add.tween(this.transWave).from( { y:this.game.height }, 1000, Phaser.Easing.Default, true);               
    },              
    onDown: function () {
      if(this.selectCapSelect.alpha != 0){
        var ran = Math.floor(Math.random() * 3)+1;
        this.jingleSnd[ran].play();   
        var ran = Math.floor(Math.random() * 3)+1;
        this.wavSnd[ran].play() 
        this.bgSound.stop();       
        this.transWaveKey = 1;     
        this.changeWave();
        localStorage.removeItem("cap_unlocked"+this.selectedCapId+"New")
        //this.game.state.start('selectCrew');
      }
      else{
        this.nextButtonOutline.alpha = 0
        Swal.fire({
          title: 'Wait!',
          text: "You must select a captain before you proceed!",
          imageUrl: 'assets/mascot.webp',
          imageWidth: 200,
          imageHeight: 200,
          allowOutsideClick: false,
          allowEscapeKey: false,
          heightAuto: false          
        })      
      }

    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].selectCap = selectCap;

}());
