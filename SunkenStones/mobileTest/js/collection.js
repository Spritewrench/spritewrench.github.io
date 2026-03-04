//import { app, recordEmail } from "../js/lib/firebase.js";
(function() {
  'use strict';
  
  function Collection() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Collection.prototype = {

    create: function () {


      this.video = this.add.video('seaBG');

                          
      this.video.play(true);
                 
      this.videoImage = this.video.addToWorld(0, 0);
      var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
      this.videoTimer = 100;
      this.video.volume = 0;
      this.videoImage.scale.set(videoScale);          
  
    var size = 150

      //this.input.onDown.add(this.onDown, this);

      this.bgSound = this.add.audio('seaSounds');
      this.bgSound.loop = true;
      
      this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1      

      this.jingleSnd = []
      this.jingleSnd[1] = this.add.audio('coinJingle-1');
      this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[2] = this.add.audio('coinJingle-2');
      this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[3] = this.add.audio('coinJingle-3');
      this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1            

  
    this.back_Button = this.add.sprite(35, 35, 'back_button');            
    this.back_Button.inputEnabled = true;
    this.back_Button.anchor.setTo(0.5, 0.5);
    this.back_Button.width = 50
    this.back_Button.height = 50
    this.back_Button.events.onInputDown.add(this.back, this); 


        var x = this.game.width/2
        var y = this.game.height/2
            this.tile = [];
            this.tileOverlay = [];        
      this.boardWidth = 8//11
      this.boardHeight = 8//9 
      this.size = 100
      this.spacing = 10
      var distX = 0;
      var distY = 0;
      var counter = 0;

      var startX = (this.game.width/2)-((Math.floor(this.boardWidth/2)*this.size)+(this.size/2)-(this.spacing*this.boardWidth))
      var startY = 150

      var collectionOrder = [1, 2, 3, 5, 12, 14, 18, 22, 23, 24, 29, 30, 31, 34, 36, 37, 8, 9, 10, 13, 16, 20, 21, 27, 28, 39, 40, 41, 46, 47, 48, 49, 4, 6, 7, 11, 15, 17, 19, 25, 26, 50, 51, 52, 58, 59, 60, 64];

      for(var i = 0; i < this.boardHeight; i++){
          for(var j = 0; j < this.boardWidth; j++){

            try{
              if(!crew[collectionOrder[counter]].inExpansion){
                this.tile[''+j+i] = this.add.sprite(startX+distX, startY+distY+25, 'crew-'+(collectionOrder[counter]));
                this.tileOverlay[''+j+i] = this.add.sprite(startX+distX, startY+distY+25, 'crew_locked_overlay');
                if(localStorage.getItem("crew_unlocked-"+collectionOrder[counter]) !== null){
                  this.tileOverlay[''+j+i].alpha = 0;
                }

                if(collectionOrder[counter]== 90 || collectionOrder[counter] == 93 || collectionOrder[counter] == 96){
                  this.tileOverlay[''+j+i].alpha = 0;
                }              


                this.tile[''+j+i].origX = this.tile[''+j+i].x;
                this.tile[''+j+i].origY = this.tile[''+j+i].y;
              
                this.tile[''+j+i].loadSpeed =  0.2//(Math.random() * 0.3)+0.1;
                this.tile[''+j+i].anchor.setTo(0.5, 0.5);
                this.tile[''+j+i].width = this.size;
                this.tile[''+j+i].height = this.size;     
                
                this.tileOverlay[''+j+i].anchor.setTo(0.5, 0.5);
                this.tileOverlay[''+j+i].width = this.size;
                this.tileOverlay[''+j+i].height = this.size; 

                this.tile[''+j+i].id = collectionOrder[counter];

                this.tile[''+j+i].posX = j
                this.tile[''+j+i].posY = i

                this.tile[''+j+i].hp = 0

                this.tile[''+j+i].healthText = this.add.text(this.tile[''+j+i].x-(this.size/2)+22,this.tile[''+j+i].y+(this.size/2)-20, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].healthText.anchor.setTo(0.5, 0.5); 
                this.tile[''+j+i].healthText.stroke = '#232727';
                this.tile[''+j+i].healthText.strokeThickness = 5;                        

                this.tile[''+j+i].power = 0
                this.tile[''+j+i].powerText = this.add.text(this.tile[''+j+i].x+(this.size/2)-22,this.tile[''+j+i].y+(this.size/2)-20, '1', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
                this.tile[''+j+i].powerText.anchor.setTo(0.5, 0.5);     
                this.tile[''+j+i].powerText.stroke = '#232727';
                this.tile[''+j+i].powerText.strokeThickness = 5;      
                                      
                this.tile[''+j+i].inputEnabled = true;
                this.tile[''+j+i].events.onInputDown.add(this.showCrew, this);    
                //this.tile[''+j+i].events.onInputOver.add(this.showInfo, this);            
                
                this.tile[''+j+i].healthText.text = crew[collectionOrder[counter]].deployCost;
                this.tile[''+j+i].powerText.text = crew[collectionOrder[counter]].power;          



                

                distX += this.tile[''+j+i].width+this.spacing
                if(distX > this.size*this.boardWidth){
                  distX = 0;
                  distY += this.tile[''+j+i].height+this.spacing
                }  
              }
              if(collectionOrder[counter] == 64){
                collectionOrder[counter] = 90
              }
              else if(collectionOrder[counter] == 90)[
                collectionOrder[counter] = 93
              ]
              else if(collectionOrder[counter] == 93){
                collectionOrder[counter] = 96
              }
              else if(collectionOrder[counter] == 96){
                i = this.boardHeight
                j = this.boardWidth
              }              
              else{
                counter++
              }              

            }
            catch(e){}
                
          }
          
      }    
  
            this.bg = this.add.sprite(0, 0, 'bgOverlay3');
            this.bg.width = this.game.width
            this.bg.height = this.game.height        
            this.bg.alpha = 0;
            this.bg.y = this.game.height
            this.bg.inputEnabled = true;
            this.bg.events.onInputDown.add(this.hideCrew, this);               

        this.posterBack = this.add.sprite(x, y-100, 'treasure_rarity_1');
        this.posterBack.alpha = 0
        this.posterBack.anchor.setTo(0.5, 0.5);
        this.crewDetails = this.add.sprite(x, y, 'crew-1');
        this.crewDetails.anchor.setTo(0.5, 0.5);
        this.crewDetails.alpha = 0

        this.crewDetails.deployText = this.add.text( this.crewDetails.x-(size/2)+33,this.crewDetails.y+(size/2)-25, '', {font: '42px LondrinaSolid-Black',fill: '#fff', align: 'center'});
        this.crewDetails.deployText.anchor.setTo(0.5, 0.5); 
        this.crewDetails.deployText.stroke = '#232727';
        this.crewDetails.deployText.strokeThickness = 5;    
        this.crewDetails.deployText.alpha = 0
        
        this.crewDetails.powerText = this.add.text(this.crewDetails.x+(this.size/2)-8,this.crewDetails.y+(size/2)-25, '', {font: '42px LondrinaSolid-Black',fill: '#fff', align: 'center'});
        this.crewDetails.powerText.anchor.setTo(0.5, 0.5);       
        this.crewDetails.powerText.stroke = '#232727';
        this.crewDetails.powerText.strokeThickness = 5;           
        this.crewDetails.powerText.alpha = 0; 
        
        this.crewDetails.ability = this.add.text(this.crewDetails.x,this.crewDetails.y+150, ' ',{font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 400  });
        this.crewDetails.ability.anchor.setTo(0.5, 0.5);       
        this.crewDetails.ability.stroke = '#232727';
        this.crewDetails.ability.strokeThickness = 5;   
        this.crewDetails.ability.alpha = 0             

        
        this.crewDetails.name = this.add.text(this.crewDetails.x,this.crewDetails.y-200, ' ',{font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 500  });
        this.crewDetails.name.anchor.setTo(0.5, 0.5);       
        this.crewDetails.name.stroke = '#232727';
        this.crewDetails.name.strokeThickness = 5;   
        this.crewDetails.name.alpha = 0

            this.selectStats = this.add.text(0,0, '', {font: '28px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 200  });
            this.selectStats.anchor.setTo(0.5, 0.5); 
            this.selectStats.inputEnabled = true;
            this.selectStats.events.onInputOver.add(this.updatetoolTip, this);       
            this.selectStats.stroke = '#232727';
            this.selectStats.strokeThickness = 5;          
            this.selectStats.alpha = 0
            
              
        this.crewStats = this.add.text(this.crewDetails.x,this.game.height-50, '',{font: '40px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: this.game.width  });   
        this.crewStats.stroke = '#232727';
        this.crewStats.strokeThickness = 5;  
        this.crewStats.anchor.setTo(0.5, 0.5);  
        this.crewStats.alpha = 0

        var unlockedCrewNum = getCrewUnlockedLength()+3
        var crewNum = getCrewLength()+3

        this.crewNotes = this.add.text(this.game.width/2,50, 'CREW UNLOCKED ('+unlockedCrewNum+'/'+crewNum+')',{font: '48px LondrinaSolid-Black',fill: '#fff', align: 'center', wordWrap: true, wordWrapWidth: 800  });   
        this.crewNotes.stroke = '#232727';
        this.crewNotes.strokeThickness = 5;  
        this.crewNotes.anchor.setTo(0.5, 0.5);  
       


        
    /*
    var arrowSpacing = 400
    this.nextCrew_Button = this.add.sprite(x-this.crewDetails.width/2-arrowSpacing, y, 'back_button');            
    this.nextCrew_Button.inputEnabled = true;
    this.nextCrew_Button.anchor.setTo(0.5, 0.5);
    this.nextCrew_Button.width = 200
    this.nextCrew_Button.height = 200
    this.nextCrew_Button.events.onInputDown.add(this.prevCrew, this);     
    
    this.prevCrew_Button = this.add.sprite(x+this.crewDetails.width/2+arrowSpacing, y, 'back_button');            
    this.prevCrew_Button.inputEnabled = true;
    this.prevCrew_Button.anchor.setTo(0.5, 0.5);
    this.prevCrew_Button.width = 200
    this.prevCrew_Button.height = 200
    this.prevCrew_Button.angle = 180
    this.prevCrew_Button.events.onInputDown.add(this.nextCrew, this);     
    */

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

      this.transWave = this.add.sprite(0, this.game.height, 'transitionWave');
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

      this.count++;

      this.bgSound.play();

      var prevScene = localStorage.getItem("prevScene")
      localStorage.setItem("prevScene","collection")     

      if(prevScene.includes("menu") && prevScene !== null ){
        this.changeWaveDown();          
      }        


      this.currentCrew = 1


      
    },

    update: function () {

      this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1  

      this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

      this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

        this.crewStats.alpha = this.posterBack.alpha
        this.selectStats.alpha = this.posterBack.alpha
        this.crewDetails.name.alpha = this.posterBack.alpha
        this.crewDetails.ability.alpha = this.posterBack.alpha
        this.crewDetails.powerText.alpha = this.posterBack.alpha    
        this.crewDetails.deployText.alpha = this.posterBack.alpha
        this.crewDetails.alpha = this.posterBack.alpha      

      if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
        //this.transWave.y += transSpeed

        if(this.transWave.y >= this.game.height&& this.transWaveKey == 0){

        }
      }
      if(this.transWaveKey == 1){
        //this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
        if(this.transWave.y <= (-this.game.height+50)){
          if(parseInt(localStorage.getItem("intro")) == 1 || quickStart){
            updatePool();
            //
            this.game.state.start('game');//game
          }
          else{
            this.game.state.start(this.transTar);//selectCap 
          }
          
        }
      }

    },
    hideCrew: function (tile) {
      if(this.bg.alpha > 0){
        this.tips.hideTooltip() 
        this.bg.y = this.game.height
        this.bg.alpha = 0;
        this.crewStats.alpha = 0
        this.selectStats.alpha = 0
        this.crewDetails.name.alpha = 0
        this.crewDetails.ability.alpha = 0
        this.crewDetails.powerText.alpha = 0;     
        this.crewDetails.deployText.alpha = 0
        this.crewDetails.alpha = 0
        this.posterBack.alpha = 0          

      }
    },
    showCrew: function (tile) {
        this.currentCrew = tile.id
        this.bg.alpha = 0.5;
        this.bg.y = 0;


    
    


        

        var origY = tile.y
        tile.y = tile.y+25
        this.add.tween(tile).to( { y:origY }, 500, Phaser.Easing.Elastic.Out, true);

        
        this.tips.hideTooltip() 
        var crewType = ""
        switch(crew[this.currentCrew].type){
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
        
        this.crewDetails.loadTexture('bigCrew-'+this.currentCrew)
        if(localStorage.getItem("crew_unlocked-"+this.currentCrew) === null){
          this.crewDetails.loadTexture('bigCrew-locked')
          this.crewStats.text = 'UNLOCK REQUIREMENTS: '+crew[this.currentCrew].unlockReq
          if(this.currentCrew==36){
            this.crewStats.text += " ("+localStorage.getItem("actionTracker_tentacleKills")+"/20)"
          }
        }     
        else{
          this.crewStats.text = ''
        }   

        this.posterBack.loadTexture("treasure_rarity_"+(crew[this.currentCrew].rarity+1))
        
        if(this.currentCrew == 90 || this.currentCrew == 93 || this.currentCrew == 96){
          this.posterBack.loadTexture("treasure_rarity_1")
          this.crewStats.text = ''
          this.crewDetails.loadTexture('bigCrew-'+this.currentCrew)
        }
        
        this.crewDetails.deployText.text = crew[this.currentCrew].deployCost
        this.crewDetails.powerText.text = crew[this.currentCrew].power

        this.crewDetails.ability.text = crew[this.currentCrew].ability+""         
                        
        
        this.crewDetails.name.text = crew[this.currentCrew].name+"\nTYPE: "+crewType
        
        this.crewDetails.y = this.posterBack.y  

        this.crewDetails.x = this.posterBack.x
        this.crewDetails.y = this.posterBack.y-50
        this.crewDetails.deployText.x = this.crewDetails.x-(this.crewDetails.width/2)+80
        this.crewDetails.powerText.x = this.crewDetails.x+(this.crewDetails.width/2)-80
        this.crewDetails.ability.x = this.crewDetails.x
        this.crewDetails.name.x = this.crewDetails.x           
        
        this.crewDetails.deployText.y = this.crewDetails.y-(this.crewDetails.height/2)+145
        this.crewDetails.powerText.y = this.crewDetails.y-(this.crewDetails.height/2)+135
        this.crewDetails.ability.y = this.crewDetails.y+195
        this.crewDetails.name.y = this.crewDetails.y +80        
        
        
        this.checkKeywords(this.crewDetails.ability)
        var tweenA = this.add.tween(this.posterBack).to( { alpha:1 }, 500, Phaser.Easing.Quartic.InOut, true);
        tweenA.onComplete.addOnce(function(){
          
          this.updatetoolTip(this.crewDetails.ability)
        }, this);     
        tweenA.start();      
        

    },
    nextCrew: function () {
        
        this.currentCrew++
        if(this.currentCrew > getCrewLength()){
            this.currentCrew = 1;
        }           
        console.log(this.currentCrew)
        try{
            this.showCrew()
        }
        catch(e){
            this.nextCrew();
        }
        
    },   
    prevCrew: function () {
        
        this.currentCrew--
        if(this.currentCrew < 0){
            this.currentCrew = getCrewLength();
        }        
        console.log(this.currentCrew)
        try{
            this.showCrew()
        }
        catch(e){
            this.prevCrew();
        }    

        this.showCrew()
    },        
    onClick: function (pic) {
      pic.x = -this.game.width;
      this.count++;
      this.bgSound.play();
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
          

        },         
    spinUp: function (button) {
      button.angle = -3
      button.width = button.origWidth+25
      button.height = button.origHeight+25
    },  
    spinDown: function (button) {
      button.angle = 0
      button.width = button.origWidth
      button.height = button.origHeight      
    },        
    fill: function (text) {
      text.addColor("#E12D6C", 0); 
    },
    unfill: function (text) {
      text.addColor("white", 0);
    },        
    showItems: function () {
      var ran = Math.floor(Math.random() * 3)+1;
      this.bgGem.y =-10;
      this.jingleSnd[ran].play();      
      this.showToggle = true;
      this.titleTxt3.alpha = 0;
      this.titleTxt3.y = -10000;
    },    
    back: function () {
      this.bgSound.stop();
      this.transWaveKey = 1;
      this.changeWave();
      var ran = Math.floor(Math.random() * 3)+1;
      this.wavSnd[ran].play() 
      this.transTar = 'menu'
    },           
    showOptions: function () {

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
   

      if(this.titleTxt6.alpha >= 1){
        var ran = Math.floor(Math.random() * 3)+1;
        this.jingleSnd[ran].play();
        this.titleTxt5.addColor("white", 0);
        Swal.fire({
          title: 'OPTIONS',
          html: '<span>TOGGLE SCREEN SHAKE <input type="checkbox" id="shakeCheck" '+screenShakeChecked+' onclick=\'localStorage.setItem("screenShakeEnabled",document.getElementById("shakeCheck").checked)\'></span><br/><br/> <span>TOGGLE FULL SCREEN <input type="checkbox" id="fullScreenCheck" '+fullscreenChecked+' onclick=\'const electron = require("electron");const ipc = electron.ipcRenderer;ipc.send("toggle-maximize-window"); localStorage.setItem("fullScreenCheck",document.getElementById("fullScreenCheck").checked)\'> </span><br/><br/><div class="slidecontainer" > MUSIC VOLUME: <span id="mVol">'+parseInt(localStorage.getItem("bgVol"))+'</span><br/><input oninput=\'localStorage.setItem("bgVol",this.value); document.getElementById("mVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("bgVol"))+'" class="slider" id="volRange"> </div><br/><div class="slidecontainer"> SFX VOLUME: <span id="sfxVol">'+parseInt(localStorage.getItem("sfxVol"))+'</span><br/><input oninput=\'localStorage.setItem("sfxVol",this.value); document.getElementById("sfxVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("sfxVol"))+'" class="slider" id="sfxRange"> </div>',
          allowOutsideClick: false,
          allowEscapeKey: false,    
          heightAuto: false          
//;const electron = require("electron");const ipc = electron.ipcRenderer;ipc.send("toggle-maximize-window");
        }).then((result) => {
          
          var bgVol = document.getElementById("volRange");
          var sfxVol = document.getElementById("sfxRange");


          localStorage.setItem("bgVol",bgVol.value)
          localStorage.setItem("sfxVol",sfxVol.value)
          //alert(bgVol.value)
       
        })            
      }      
    },
    showCredits: function () {
      if(this.titleTxt7.alpha >= 1){
        var ran = Math.floor(Math.random() * 3)+1;
        this.jingleSnd[ran].play();
        this.titleTxt5.addColor("white", 0);
        Swal.fire({
          title: 'CREDITS',
          html: "<h3>ART & PROGRAMMING</h3>Glen Henry<h3><h3>STORE KEY & CAPSULE ART</h3>DesignSunset<h3>AUDIO</h3>Music Composed by Chase Bethea<br/>SFX Audio produced by Dillon Becker <h3>ANIMATION</h3>Nathanael Hay<h3>VOICE WORK</h3>Ayanna Henry<br/>Charis Cayetano-Henry<br/>Marishka Simms<br/>Meghan Christian<br/>Voice Actor's League Ja(TM)<br/><h3>QUALITY ASSURANCE</h3>Alrick Brown<br/>Graham Reid<br/>Matthew Hunter<br/>Paul Griffiths<br/>Shaun Douglas<br/>Evon Binns<br/><h3>SPECIAL THANKS</h3>Damien Crawford",
          allowOutsideClick: false,
          allowEscapeKey: false,
          heightAuto: false          
        })          
      }      

    },    
    openTab: function (text) {
      const electron = require("electron");
      const ipc = electron.ipcRenderer;
      ipc.send("openLinkPlease");
    }, 
    openNewsletter: function (text) {
      Swal.fire({
        title: "Join the steamComm",
        html:"Enter your email below and Sign up for the Spritewrench steamComm!<br/><br/>Stay up to date with studio progress and projects",
        input: "email",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Sign Up",
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        heightAuto: false             
      }).then((result) => {
        if (result.isConfirmed) {
          try{
            recordEmail(result.value)
            localStorage.setItem("emailGiven",1)
            this.spinDown(this.steamComm)
            Swal.fire({
              icon: "success",
              title: "Succesfully Signed Up",
              showConfirmButton: false,
              timer: 1500,
              allowOutsideClick: false,
              allowEscapeKey: false,
              heightAuto: false                   
            });            
          }
          catch(e){
            alert(e)
          }
          

        }
        else{
          this.spinDown(this.steamComm)
        }
      });

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
          
        }  ,       
    openInsta: function (text) {
      const electron = require("electron");
      const ipc = electron.ipcRenderer;
      ipc.send("openInsta");
    }, 
    openThreads: function (text) {
      const electron = require("electron");
      const ipc = electron.ipcRenderer;
      ipc.send("openThreads");
    },  
    opensteamComm: function (text) {
      const electron = require("electron");
      const ipc = electron.ipcRenderer;
      ipc.send("openSteamCommunity");
    },   
    openDiscord: function (text) {
      const electron = require("electron");
      const ipc = electron.ipcRenderer;
      ipc.send("openDiscord");
    },                 
    closeGame: function (text) {
      if(this.titleTxt6.alpha >= 1){
        const electron = require("electron");
        const ipc = electron.ipcRenderer;
        ipc.send("close-window");        
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
      if(this.titleTxt4.alpha >= 1){
        var ran = Math.floor(Math.random() * 3)+1;
        this.jingleSnd[ran].play();        
        localStorage.setItem("level","1")
        if(this.count >= 3){
          this.bgSound.stop();
          var ran = Math.floor(Math.random() * 3)+1;
          this.wavSnd[ran].play()
          this.transWaveKey = 1;
          this.changeWave();
          this.transTar = 'selectCap'
         //this.game.state.start('selectCap');
      }

       //this.game.state.start('game');
      }
	    //
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
  window['simplewar'].Collection = Collection;

}());
