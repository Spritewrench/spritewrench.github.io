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

        this.zone = parseInt(localStorage.getItem("zone"))-1
        this.capKey = parseInt(localStorage.getItem("captain"));
        this.crewCode = localStorage.getItem("crewCode")

        if(false){
          this.capKey = quickStartCaptain
          this.zone = 1
          this.crewCode = quickStartCrew
        }   
      
        
        this.bg = this.add.sprite(0, 0, 'bg_'+this.zone );
        this.bg.width = this.game.width
        this.bg.height = this.game.height
        this.bg.inputEnabled = true;       
        this.bg.events.onInputDown.add(this.onDown, this);           
           
        
        this.capUltHero = this.add.sprite(0, 0, 'capUltHero-'+this.capKey);
        this.capUltHero.width = this.game.width
        this.capUltHero.height = this.game.height
        
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

        var pronoun = "HER"
        if(this.capKey > 3){
          pronoun = "HIS"
        }
        this.titleTxt = this.add.text(x+ 400,125, "-"+captain[this.capKey].cap_name+'-\nSURVIVED\n'+name+"\n with "+pronoun+" TRUSTY CREW", {font: '48px Kaph-Regular',fill: '#FFF', align: 'center'});
        this.titleTxt.anchor.setTo(0.5, 0);      
        this.titleTxt.stroke = '#232727';
        this.titleTxt.strokeThickness = 10;  

        this.zoneComplete = parseInt(localStorage.getItem("zoneComplete"))

        //this.titleTxt2 = this.add.text(x+ 400,y+200, "AND EXCHANGED YOUR HAUL\nFOR A COMMISSION OF\n"+(this.zoneComplete*150)+" GOLD", {font: '48px Kaph-Regular',fill: '#FFF', align: 'center'});
        //this.titleTxt2.anchor.setTo(0.5, 0);      
        //this.titleTxt2.stroke = '#232727';
        //this.titleTxt2.strokeThickness = 10;          


        this.crew = []
        var distX = 170;
        var size = 150
        var space = 10
        

        var crewMates = this.crewCode.split("-");
        for(var i = 1; i < 5; i++){

          this.crew[i] = this.add.sprite(x+distX, y, 'crew_blank');
          this.crew[i].anchor.setTo(0.5, 0.5);
          this.crew[i].width = size;
          this.crew[i].height = size;    
          this.crew[i].id = parseInt(crewMates[i-1])

          this.crew[i].deployText = this.add.text( this.crew[i].x-(size/2)+33,this.crew[i].y+(size/2)-3, '', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.crew[i].deployText.anchor.setTo(0.5, 0.5); 
          this.crew[i].deployText.stroke = '#232727';
          this.crew[i].deployText.strokeThickness = 5;                       

          this.crew[i].powerText = this.add.text(this.crew[i].x+(size/2)-33,this.crew[i].y+(size/2)-3, '', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.crew[i].powerText.anchor.setTo(0.5, 0.5);       
          this.crew[i].powerText.stroke = '#232727';
          this.crew[i].powerText.strokeThickness = 5;             
          
          this.crew[i].deployText.text = parseInt(localStorage.getItem("crew"+i+"-deployCost"))   
          this.crew[i].powerText.text =  parseInt(localStorage.getItem("crew"+i+"-origPower"))      

          this.crew[i].loadTexture("crew-"+this.crew[i].id)
          this.crew[i].deployText.y = this.crew[i].y+(this.crew[i].height/2)-28
          this.crew[i].powerText.y  = this.crew[i].y+(this.crew[i].height/2)-28 
          
          
          distX += (size+space)
        }        
        

        this.click = this.add.text(x+400,this.game.height-50, '[CLICK TO CONTINUE]', {font: '20px Kaph-Regular',fill: '#fff', align: 'center'});
        this.click.anchor.setTo(0.5, 0.5);            
        
        if(this.zone < 0 || this.zone == zoneLimit){
          this.click.text = "[CLICK TO RETURN TO CAPTAIN SELECT]"
          if(this.zone < 0){
            this.bg.loadTexture('bg_1')
          }
          
        }  

        if(this.zone < zoneLimit){
          this.click.text = "[CLICK TO CONTINUE TO NEXT ZONE]"
          
        }             

        this.transWave = this.add.sprite(0, -this.game.height, 'transitionWave');
        this.transWave.width = this.game.width
        //this.transWave.height = this.game.height         
        this.transWaveKey  = 0;          

        this.escapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        this.escapeKey.onDown.add(this.showOptions, this);
        
        this.changeWaveDown();
        localStorage.setItem("prevScene","game")
        this.boardView = this.add.sprite(0,0, 'desk23');
        this.boardView.width = this.game.width 
        this.boardView.height = this.game.height  
        this.boardView.alpha = 0;       
    },

    update: function () {
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
            this.game.state.start('game');//game
          }
          else{
            //this.transTar
            this.game.state.start(this.transTar);//selectCap 
          }
          
        }
      }
          
    }, 
        lookAtBoard: function(start,end, target){
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
        },       
    changeWaveDown: function(){
      this.transWave.y = this.game.height
      this.add.tween(this.transWave).from( { y:-this.game.height }, 1000, Phaser.Easing.Default, true);               
    },      
    changeWave: function(){
      this.transWave.y = -this.game.height+50
      this.add.tween(this.transWave).from( { y:this.game.height }, 1000, Phaser.Easing.Default, true);               
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
      if(true){
        var ran = Math.floor(Math.random() * 3)+1;
        
        Swal.fire({
          title: 'OPTIONS',
          html: '<span>TOGGLE SCREEN SHAKE <input type="checkbox" id="shakeCheck" '+screenShakeChecked+' onclick=\'localStorage.setItem("screenShakeEnabled",document.getElementById("shakeCheck").checked)\'></span><br/><br/> <span>TOGGLE FULL SCREEN <input type="checkbox" id="fullScreenCheck" '+fullscreenChecked+' onclick=\'const electron = require("electron");const ipc = electron.ipcRenderer;ipc.send("toggle-maximize-window"); localStorage.setItem("fullScreenCheck",document.getElementById("fullScreenCheck").checked)\'> </span><br/><br/><div class="slidecontainer" > MUSIC VOLUME: <span id="mVol">'+parseInt(localStorage.getItem("bgVol"))+'</span><br/><input oninput=\'localStorage.setItem("bgVol",this.value); document.getElementById("mVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("bgVol"))+'" class="slider" id="volRange"> </div><br/><div class="slidecontainer"> SFX VOLUME: <span id="sfxVol">'+parseInt(localStorage.getItem("sfxVol"))+'</span><br/><input oninput=\'localStorage.setItem("sfxVol",this.value); document.getElementById("sfxVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("sfxVol"))+'" class="slider" id="sfxRange"> </div>',
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
            //////console.log(words[i]+" "+words[i].length)
          }

        }
      }
      //////console.log("length before keyword: "+lengthBeforeKey+"\nKeyword length: "+keywordLength )
      

      
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
    onDown: function () {
      this.transWaveKey = 1
      //this.changeWave();

      if(this.zone < zoneLimit && this.zone > 0){
        this.transWaveKey = 1
        this.changeWave();
        this.transTar = 'game' 
      }
      else{
        this.transWaveKey = 1
        this.transTar = 'selectCap'     
        
        this.animStartKey = 2;   
        this.lookAtBoard(23,0,'selectCap')
      }
        
    }    
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Win = Win;

}());
