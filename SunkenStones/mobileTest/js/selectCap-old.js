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

      this.bg = this.add.sprite(0, 0, 'selectBG');
      this.bg.width = this.game.width
      this.bg.height = this.game.height     
      
      this.video = this.add.video('seaBG');

      this.squawk = this.add.audio('parrotSquawk');
      this.squawk.volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1 )*2

      this.jingleSnd = []
      this.jingleSnd[1] = this.add.audio('coinJingle-1');
      this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
      this.jingleSnd[2] = this.add.audio('coinJingle-2');
      this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
      this.jingleSnd[3] = this.add.audio('coinJingle-3');
      this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1               
                          
      this.video.play(true);
                 
      this.videoImage = this.video.addToWorld(0, 0);
      var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
      this.videoTimer = 100;
      this.video.volume = 0;
      this.videoImage.scale.set(videoScale);          

      this.titleTxt = this.add.text(x,30, 'CHOOSE YOUR CAPTAIN', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
      this.titleTxt.stroke = '#232727';
      this.titleTxt.strokeThickness = 5;           
      
      this.selectCap = []
      this.tips = [];
      var distX = 0;
      var distY = 0;
      for(var i = 1; i < 9; i++){
        this.selectCap[i] = this.add.sprite(220+distX, 280+distY, 'selectCap-'+i);
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
        this.selectCap[i].capAbility = this.add.text( this.selectCap[i].x-this.selectCap[i].width/2+50, this.selectCap[i].y+155, '', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 250 });
        
        this.selectCap[i].capAbility.inputEnabled = true;
        this.selectCap[i].capAbility.id = i;
        this.selectCap[i].capAbility.events.onInputOver.add(this.updatetoolTip, this);          
        
        //check if unlocked
        var unlockTracker = 0
        if(localStorage.getItem("cap_unlocked"+i) === null || parseInt(localStorage.getItem("cap_unlocked"+i)) == 0){
          switch(i){
            case 2:
              if(localStorage.getItem("NumMon5Killed") !== null){
                unlockTracker = captain[i].unlockValue -parseInt(localStorage.getItem("NumMon5Killed"))
                if(unlockTracker <= 0){
                  localStorage.setItem("cap_unlocked"+i, 1)
                  this.squawk.play();
                  Swal.fire({
                    title: 'Well Done!',          
                    html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
                    imageUrl: 'assets/mascot.png',
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
                if(localStorage.getItem("NumMon8Killed") !== null){
                  unlockTracker = captain[i].unlockValue -parseInt(localStorage.getItem("NumMon8Killed"))
                  if(unlockTracker <= 0){
                    localStorage.setItem("cap_unlocked"+i, 1)
                    this.squawk.play();
                    Swal.fire({
                      title: 'Well Done!',          
                      html: 'You have unlocked a new Captain!<br/>New crew mates can be also discovered on your voyage',
                      imageUrl: 'assets/mascot.png',
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

        if(i <= captainCount  && i > 1){
          if(localStorage.getItem("cap_unlocked"+i) === null || parseInt(localStorage.getItem("cap_unlocked"+i)) == 0){
            localStorage.setItem("cap_unlocked"+i, 0);
            this.selectCap[i].capHealth.text = captain[i].cap_healthValue
            this.selectCap[i].capSavvy.text = captain[i].deploy_poolCurrent+"/"+captain[i].deploy_poolMax            
            this.selectCap[i].loadTexture('selectCap_locked-'+i) 
            this.selectCap[i].unlocked = false;
            this.selectCap[i].capAbility.text = captain[i].unlockText+" ("+unlockTracker+" REMAINING)"         
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
        if(i != 4){
            distX += 500 

        }
        else if(i == 4){
            distX = 0
            distY += 500;
        }

        

      }

      this.back_Button = this.add.sprite(35, 35, 'back_button');            
      this.back_Button.inputEnabled = true;
      this.back_Button.anchor.setTo(0.5, 0.5);
      this.back_Button.width = 50
      this.back_Button.height = 50
      this.back_Button.events.onInputDown.add(this.back, this);  

      this.selectCapSelect = this.add.sprite(-1000, this.selectCap[1].y, 'selectCap_highlight');
      this.selectCapSelect.anchor.setTo(0.5, 0.5);

      this.nextButtonOutline = this.add.sprite(x, y+500, 'nextButton_outline');
      this.nextButtonOutline.anchor.setTo(0.5, 0.5);    
      this.nextButtonOutline.alpha = 0   

      this.nextButton = this.add.sprite(x, y+500, 'nextButton');
      this.nextButton.anchor.setTo(0.5, 0.5);   
      this.nextButton.inputEnabled = true;
      this.nextButton.events.onInputDown.add(this.onDown, this);      
      this.nextButton.events.onInputOver.add(this.showOutline, this);  
      this.nextButton.events.onInputOut.add(this.hideOutline, this);   
      
  


      localStorage.setItem("captain",1)
      for(var i = 1; i < 9; i++){
        this.tips[i] = new Phasetips(this.game, {
          targetObject:  this.selectCap[i].capAbility,
          context: "TEST",
          fontSize: 14,
          strokeWeight: 3,
          roundedCornersRadius: 10,            
          position: "bottom",
          positionOffset: 10,
          padding: 75,      
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
      this.capVOSnd[3] = this.add.audio('capVO-2');
      this.capVOSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1      
    
      this.selectCapSelect.followId = 1
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

      updatePool();

    },

    update: function () {


      this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1  

      this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

      this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

      this.capVOSnd[1].volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)*8
      this.capVOSnd[2].volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)*8
      this.capVOSnd[3].volume = (parseInt(localStorage.getItem("sfxVol"))* 0.1)*8

      

      if(this.selectCapSelect.alpha == 1){
        this.nextButton.loadTexture("nextButton_highlight")
      }
      else{
        this.nextButton.loadTexture("nextButton")
      }
      

      if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
        this.transWave.y += transSpeed

        if(this.transWave.y >= this.game.height&& this.transWaveKey == 0){

         
          if (parseInt(localStorage.getItem("intro")) == 12) {
            
            Swal.fire({
              title: 'Well Done!',          
              html: "You've completed your first voyage! <br/><br/> You can continue playing the demo to unlock new captains & crew mates.<br/><br/>That's it for now remember to wishlist on steam!",
              imageUrl: 'assets/wishlistSteam.png',
              showCancelButton: true,
              confirmButtonColor: '#000',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Wishlist',  
              cancelButtonText: 'Maybe Later :(',              
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then((result) => {
              localStorage.setItem("intro",14);
              if (result.isConfirmed) { 
                try{
                  const electron = require("electron");
                  const ipc = electron.ipcRenderer;
                  ipc.send("openLinkPlease");                  
                }                
                catch(e){

                }
              }
            })          
          }	           

          if (localStorage.getItem("intro") === null|| onboardingDebug ) {
            localStorage.setItem("intro",1);
            this.squawk.play();
            Swal.fire({
              title: 'Ahoy!',          
              html: 'Welcome to Sunken Stones! <br/><br/>A puzzle strategy game about collecting TREASURE. <br/><br/>Choose Captain Rose to oversee your maiden voyage.',
              imageUrl: 'assets/mascot.png',
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
        this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
        if(this.transWave.y <= (-this.game.height+50)){
          this.game.state.start(this.transTar);
        }
      }      

      for(var i = 1; i < 9; i++){
        this.checkKeywords(this.selectCap[i].capAbility)
        this.selectCap[i].y += ( this.selectCap[i].origY - this.selectCap[i].y) * 0.2;
      }
      
      this.selectCapSelect.y += ( this.selectCap[this.selectCapSelect.followId ].origY - this.selectCapSelect.y) * 0.2;
    },
    select: function (captain) {
        if(!captain.unlocked){

        }
        else{
          this.selectCapSelect.alpha = 1;
          this.capVOSnd[captain.id].play()
            localStorage.setItem("captain",captain.id)
            captain.y-=5;
            this.selectCapSelect.followId = captain.id
            this.selectCapSelect.x = captain.x
            this.selectCapSelect.y = captain.y
            
        }

    },  
    updatetoolTip: function (text) {
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
                content += keyword[k].description+"\n\n"
              } 
              this.tips[key].updateContent(content)
              //k = keyword.length
              //i = words.length
            }

          }
          else{
          }

        }
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
        var ran = Math.floor(Math.random() * 3)+1;
        this.jingleSnd[ran].play();
        Swal.fire({
          title: 'OPTIONS',
          html: '<span onclick=\'const electron = require("electron");const ipc = electron.ipcRenderer;ipc.send("toggle-maximize-window");\'>TOGGLE FULL SCREEN</span><br/><br/><div class="slidecontainer" > MUSIC VOLUME: <span id="mVol">'+parseInt(localStorage.getItem("bgVol"))+'</span><br/><input oninput=\'document.getElementById("mVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("bgVol"))+'" class="slider" id="volRange"> </div><br/><div class="slidecontainer"> SFX VOLUME: <span id="sfxVol">'+parseInt(localStorage.getItem("sfxVol"))+'</span><br/><input oninput=\'document.getElementById("sfxVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("sfxVol"))+'" class="slider" id="sfxRange"> </div>',
          allowOutsideClick: false,
          allowOutsideClick: false,
          allowEscapeKey: false                        
        }).then((result) => {
          var bgVol = document.getElementById("volRange");
          var sfxVol = document.getElementById("sfxRange");

          localStorage.setItem("bgVol",bgVol.value)
          localStorage.setItem("sfxVol",sfxVol.value)
          //alert(bgVol.value)
       
        })            
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
        
        for(var i = 1; i < 9; i++){
          localStorage.setItem("cap_unlocked"+i, 1)
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
      }           
      
    },        
    onDown: function () {
      if(this.selectCapSelect.alpha != 0){
        var ran = Math.floor(Math.random() * 3)+1;
        this.jingleSnd[ran].play();   
        var ran = Math.floor(Math.random() * 3)+1;
        this.wavSnd[ran].play() 
        this.bgSound.stop();       
        this.transWaveKey = 1;     
        //this.game.state.start('selectCrew');
      }
      else{
        this.nextButtonOutline.alpha = 0
        Swal.fire({
          title: 'Wait!',
          text: "You must select a captain before you proceed!",
          imageUrl: 'assets/mascot.png',
          imageWidth: 200,
          imageHeight: 200,
          allowOutsideClick: false,
          allowEscapeKey: false          
        })      
      }

    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].selectCap = selectCap;

}());
