(function() {
  'use strict';

  function Win() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Win.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

        this.video = this.add.video('seaBG');

                          
        this.video.play(true);
                   
        this.videoImage = this.video.addToWorld(0, 0);
        var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
        this.videoTimer = 100;
        this.video.volume = 0;
        this.videoImage.scale.set(videoScale);            

        

        this.treasurerChar = this.add.sprite(0, this.game.height, 'treasurer');
        this.treasurerChar.width = this.game.width
        this.treasurerChar.height = this.game.height        

        this.treasurerCharChat = this.add.sprite(0, this.game.height, 'treasurer_chat');
        this.treasurerCharChat.width = this.game.width
        this.treasurerCharChat.height = this.game.height  
        this.treasurerCharChat.inputEnabled = true;       
        this.treasurerCharChat.events.onInputDown.add(this.onDown, this);       
      
      //localStorage.getItem("currentScore")
      this.titleTxt = this.add.text(250,this.treasurerCharChat.y+200, "MY YOU BRUTES ARE EFFECTIVE . . . HER MAJESTY WILL BE VERY PLEASED.\nCHOOSE ONE FOR YOUR PERSONAL-STASH AND I'LL GIVE YOU GOLD FOR THE REST.\nCome now ... hurry up", {font: '24px Kaph-Regular',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 1600 });
      //this.titleTxt.anchor.setTo(0.5, 0.5);
      this.bounty = parseInt(localStorage.getItem("bounty"))

      if(this.bounty > 0){
        this.titleTxt.text = "Finally come to your senses?\n Her Majesty was most annoyed with your conduct.\nCHOOSE ONE FOR YOUR PERSONAL-STASH AND I'LL GIVE YOU GOLD FOR THE REST."
      }

      this.titleTxt2 = this.add.text(x,75, 'SUCCESS!', {font: '70px Kaph-Regular',fill: '#33783D', align: 'center'});
      this.titleTxt2.anchor.setTo(0.5, 0.5);      
      this.titleTxt2.stroke = '#232727';
      this.titleTxt2.strokeThickness = 10;  
      this.titleTxt2.alpha = 0    



      this.sparkleLeft = this.add.emitter(this.titleTxt2.x-200, this.titleTxt2.y, 5);
      this.sparkleLeft.makeParticles('sparkle');
      this.sparkleLeft.width = 50;
      this.sparkleLeft.minParticleSpeed.set(-100, -100);
      this.sparkleLeft.maxParticleSpeed.set(-200, -200);
      this.sparkleLeft.setAlpha(1, 0, 2500);
      //this.sparkleLeft.setScale(0.2, 1, 0.2, 1, 6000, Phaser.Easing.Quintic.Out);
      this.sparkleLeft.gravity = 500;                              
      
      //this.sparkleLeft.on = false;      
      
      this.sparkleRight = this.add.emitter(this.titleTxt2.x+200, this.titleTxt2.y, 5);
      this.sparkleRight.makeParticles('sparkle');
      this.sparkleRight.width = 50;
      this.sparkleRight.minParticleSpeed.set(100, -100);
      this.sparkleRight.maxParticleSpeed.set(200, -200);
      this.sparkleRight.setAlpha(1, 0, 2500);
      //this.sparkleRight.setScale(0.2, 1, 0.2, 1, 6000, Phaser.Easing.Quintic.Out);
      this.sparkleRight.gravity = 500;                              
      //this.sparkleRight.start(true);
      //this.sparkleRight.on = false; 
      
    
      

      this.scoreCountUI = this.add.sprite(300,50, 'coinCount');
      this.scoreCountUI.anchor.setTo(0.5, 0.5);  

      this.scoreCount = this.add.text(this.scoreCountUI.x-(this.scoreCountUI.width/2)+125,this.scoreCountUI.y, "0", {font: '32px Kaph-Regular',fill: '#fff', align: 'left'});
      this.scoreCount.anchor.setTo(0, 0.5);       

      this.goldCountValue = parseInt(localStorage.getItem("goldCount"))
      this.newValue = parseInt(localStorage.getItem("currentScore"))
      if(this.newValue < 0){
        this.newValue = 0;
      }
      localStorage.setItem("goldCount",this.goldCountValue+this.newValue)
          //treasure UI
          var distX = 0
          var spacing = 125
          this.collectedTreasure = []
          this.collectedTreasureText = []
          //(this.game.width/2)-225
          for(var i = 1 ; i < 10; i++){
            this.collectedTreasure[i] = this.add.sprite((450)+distX , -250, 'treasureUI_'+i);
            this.collectedTreasure[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasure[i].width = 150
            this.collectedTreasure[i].height = 150
            this.collectedTreasure[i].alpha = 0;
            this.collectedTreasure[i].id = i;
            this.collectedTreasureText[i] = this.add.text(this.collectedTreasure[i].x+20,this.collectedTreasure[i].y+20, 'x0', {font: '20px Kaph-Regular',fill: '#fff', align: 'center'});
            this.collectedTreasureText[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasureText[i].alpha = 0;

            this.collectedTreasure[i].count = localStorage.getItem("collectedTreasure"+i)   
            this.collectedTreasure[i].inputEnabled = true;
            this.collectedTreasure[i].events.onInputOver.add(this.selectTreasure, this);                  
            //this.collectedTreasure[i].alpha = 0;    
            distX +=  spacing        
          }      
            //treasure 
            this.collectedTreasureHighlight = this.add.sprite((150)+distX , 400, 'treasureUI_highlight');
            this.collectedTreasureHighlight.anchor.setTo(0.5, 0.5); 
            this.collectedTreasureHighlight.alpha = 0;
            this.collectedTreasureHighlight.width = 150
            this.collectedTreasureHighlight.height = 150              
            for(var i = 1; i < 10; i++){
              if(this.collectedTreasure[i].count > 0){

                this.collectedTreasureHighlight.alpha = 1
                this.collectedTreasureHighlight.x = this.collectedTreasure[i].x
                this.collectedTreasureHighlight.y = this.collectedTreasure[i].y
                this.collectedTreasureHighlight.value =this.collectedTreasure[i].id

                this.collectedTreasure[i].alpha = 1
                this.collectedTreasureText[i].alpha = 1
                this.collectedTreasureText[i].text = "x"+this.collectedTreasure[i].count
                this.collectedTreasureText[i].stroke = '#232727';
                this.collectedTreasureText[i].strokeThickness = 5;                 
              }
              else{
                this.collectedTreasure[i].alpha = 0.3
                this.collectedTreasureText[i].alpha = 0         
              }
            }
          
            //this.titleTxt3 = this.add.text(x,this.game.height-100, '[CLICK TO RETURN TO MENU]', {font: '32px Kaph-Regular',fill: '#fff', align: 'center'});
            //this.titleTxt3.anchor.setTo(0.5, 0.5);             
          

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
          this.scoreValue = this.goldCountValue
          localStorage.setItem("skipLogo",1)

          this.escapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
          this.escapeKey.onDown.add(this.showOptions, this);       
          
          this.animStartKey = 0
          //this.collectedTreasureHighlight.value = 0;
          this.animTimer = 75
    },

    update: function () {

      this.checkKeywords(this.titleTxt)

      this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1


      

      if(this.animStartKey > 0){
        this.treasurerChar.y += ( 0 - this.treasurerChar.y) * 0.1;
        this.treasurerCharChat.y+= ( 0 - this.treasurerCharChat.y) * 0.1;
        this.titleTxt.y = this.treasurerCharChat.y+this.treasurerCharChat.height-150 

        this.titleTxt2.alpha += ( 1 - this.titleTxt2.alpha) * 0.1;

        for(var i = 1 ; i < 10; i++){
          this.collectedTreasure[i].y += ( 200 - this.collectedTreasure[i].y) * 0.1;
          this.collectedTreasureText[i].y += ( this.collectedTreasure[i].y+20 - this.collectedTreasureText[i].y) * 0.1; 
        }
        
      }

      if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
        this.transWave.y += transSpeed

        if(this.transWave.y >= this.game.height && this.transWaveKey == 0){
          this.animStartKey = 1;
          this.sparkleLeft.start(true,5000,1,5,true);
          this.sparkleRight.start(true,5000,1,5,true);            
          

        }
      }

      if(this.transWaveKey == 1 && this.animStartKey == 3){
        this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
        if(this.transWave.y <= (-this.game.height+50)){
          this.game.state.start(this.transTar);
        }
      } 



      
      /*
      if(this.scoreValue < this.newValue){
        var diff = Math.abs(this.newValue -this.scoreValue )
        if(diff > 100000){
          this.scoreValue += 100000
        }
        else if(diff > 10000){
          this.scoreValue += 10000
        }          
        else if(diff > 1000){
          this.scoreValue += 1000
        }          
        else if(diff > 100){
          this.scoreValue += 100
        }        
        else if(diff > 10){
          this.scoreValue += 10
        }      
        else{
          this.scoreValue += 1
        }  
        
      }
      */
     if(this.animStartKey == 2 && this.newValue > 0){
      if(this.newValue > 100000){
        this.newValue -= 100000
        this.goldCountValue += 100000
      }
      else if(this.newValue > 10000){
        this.newValue -= 10000
        this.goldCountValue += 10000
      }          
      else if(this.newValue > 1000){
        this.newValue -= 1000
        this.goldCountValue += 1000
      }          
      else if(this.newValue > 100){
        this.newValue -= 100
        this.goldCountValue += 100
      }        
      else if(this.newValue > 10){
        this.newValue -= 10
        this.goldCountValue += 10
      }      
      else{
        this.newValue -= 1
        this.goldCountValue += 1
        
      } 
      
      if(this.newValue <= 0){
        this.animTimer=15;
      }
     }
     if(this.newValue <= 0 && this.animStartKey == 2){
      this.animTimer--
      if(this.animTimer <= 0){
        //play success transition sound
        this.animStartKey = 3;
      }

    }     
    if(this.newValue <= 0){
      this.newValue = 0; 
    } 
      this.scoreCount.text = this.goldCountValue+" +("+this.newValue+")"    
    },
    showOptions: function () {
      if(true){
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
       
        })            
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
    selectTreasure: function(treasure){
      if(treasure.alpha  == 1 && this.transWaveKey != 1){
        this.treasurerChar.y+= 50;
        this.collectedTreasureHighlight.alpha = 1
        this.collectedTreasureHighlight.x = treasure.x
        this.collectedTreasureHighlight.y = treasure.y
        this.collectedTreasureHighlight.value = treasure.id
        var ran = Math.floor(Math.random() * 3);
        switch(ran){
          case 0:
            this.titleTxt.text = "I say ...\njust choose one! "
            break;
          case 1:
            this.titleTxt.text = "UGH!\nWhy must you waste my time? ..."
            break;    
          case 2:
            this.titleTxt.text = "Must the Riff-Raff are always so slow?\nChoose faster ... "
            break;                    
        } 
        
      }

    },        
    onDown: function () {
      this.titleTxt.text = "Finally ..."
      this.transWaveKey = 1
      this.transTar = 'selectCap'     
      
      this.animStartKey = 2;

      if(localStorage.getItem("personalStash-"+this.collectedTreasureHighlight.value) === null){
        localStorage.setItem("personalStash-"+this.collectedTreasureHighlight.value,0)
        
      }      
      var currentCount = parseInt(localStorage.getItem("personalStash-"+this.collectedTreasureHighlight.value))
      
      localStorage.setItem("personalStash-"+this.collectedTreasureHighlight.value, (currentCount+1))   
      //alert(parseInt(localStorage.getItem("collectedTreasure"+this.collectedTreasureHighlight.value)))
	//this.game.state.start('menu');
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
  window['simplewar'].Win = Win;

}());
