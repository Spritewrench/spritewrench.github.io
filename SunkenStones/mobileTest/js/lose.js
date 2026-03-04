(function() {
  'use strict';

  function Lose() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Lose.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

        this.video = this.add.video('seaBG');
        if (parseInt(localStorage.getItem("intro")) < 11) {
          localStorage.setItem("intro",1);
        }
        
        localStorage.removeItem("crewCode")
        this.video.play(true);
                   
        this.videoImage = this.video.addToWorld(0, 0);
        var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
        this.videoTimer = 100;
        this.video.volume = 0;
        this.videoImage.scale.set(videoScale);     


      this.bg = this.add.sprite(0, 0, 'bgOverlay_lose');
      this.bg.width = this.game.width
      this.bg.height = this.game.height

      this.treasurerChar = this.add.sprite(0, this.game.height, 'treasurer');
      this.treasurerChar.width = this.game.width
      this.treasurerChar.height = this.game.height        

      this.treasurerCharChat = this.add.sprite(0, this.game.height, 'treasurer_chat');
      this.treasurerCharChat.width = this.game.width
      this.treasurerCharChat.height = this.game.height  
      this.treasurerCharChat.inputEnabled = true;       
      this.treasurerCharChat.events.onInputDown.add(this.onDown, this);       
    

      //this.defeatedBy = this.add.sprite(this.game.width/2, -150, 'treasureCurse_'+localStorage.getItem('defeatedBy'));
      //this.defeatedBy.anchor.setTo(0.5, 0.5);  
      //this.defeatedBy.alpha = 0;

      this.treasurerChar.width = this.game.width
      this.treasurerChar.height = this.game.height   

    //localStorage.getItem("currentScore")
    this.titleTxt = this.add.text(250,this.treasurerCharChat.y, "i SEE THAT THE CHALLENGE WAS INDEED TOO MUCH FOR YOU ...\nTake this GOLD for your troubles", {font: '24px Kaph-Regular',fill: '#fff', align: 'left', wordWrap: true, wordWrapWidth: 1600 });
    //this.titleTxt.anchor.setTo(0.5, 0.5);
      //this.titleTxt = this.add.text(x,y, 'your captain has fallen.\nyour voyage is over.', {font: '32px Kaph-Regular',fill: '#fff', align: 'center'});
      //this.titleTxt.anchor.setTo(0.5, 0.5);
      if(this.bounty > 0){
        this.titleTxt.text = "Thought you could make it as a pirate did you?\nTake this GOLD and clean yourself up"
      }

      this.scoreCountUI = this.add.sprite(300,50, 'coinCount');
      this.scoreCountUI.anchor.setTo(0.5, 0.5);  

      this.scoreCount = this.add.text(this.scoreCountUI.x-(this.scoreCountUI.width/2)+125,this.scoreCountUI.y, "0", {font: '32px Kaph-Regular',fill: '#fff', align: 'left'});
      this.scoreCount.anchor.setTo(0, 0.5);       

      this.goldCountValue = parseInt(localStorage.getItem("goldCount"))
      this.newValue = 250//parseInt(localStorage.getItem("currentScore"))
      if(this.newValue < 0){
        this.newValue = 0;
      }
      //localStorage.setItem("goldCount",this.goldCountValue+this.newValue)
      //your captain has fallen.\nyour voyage is over.
      this.titleTxt2 = this.add.text(x,75, '', {font: '70px Kaph-Regular',fill: '#B3250B', align: 'center'});
      this.titleTxt2.anchor.setTo(0.5, 0.5);      
      this.titleTxt2.stroke = '#232727';
      this.titleTxt2.strokeThickness = 10;  
      this.titleTxt2.alpha = 0   

      this.titleTxt3 = this.add.text(x,this.titleTxt2.y+120, 'HAS DEFEATED THE captain', {font: '34px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt3.anchor.setTo(0.5, 0.5);      
      this.titleTxt3.stroke = '#232727';
      this.titleTxt3.strokeThickness = 10;  
      this.titleTxt3.alpha = 0         

      //this.input.onDown.add(this.onDown, this);

      //new lose
      this.bg = this.add.sprite(0, 0, 'bgOverlay3');
      this.bg.width = this.game.width
      this.bg.height = this.game.height      
      this.bg.inputEnabled = true;       
      this.bg.events.onInputDown.add(this.onDown, this);        

      this.loseText = this.add.sprite(0, -25, 'loseText');
      this.loseText.width = this.game.width
      this.loseText.height = this.game.height     
      this.loseText.alpha = 0;

      this.click = this.add.text(this.game.width/2,this.game.height-50, '[CLICK TO CONTINUE]', {font: '20px Kaph-Regular',fill: '#fff', align: 'center'});
      this.click.anchor.setTo(0.5, 0.5);      
        

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
            "float offsetX = (sin((uv.x + (time * 0.15)) * 30.0) * 0.03);",
            
            "uv.y += offsetX*(uv.y-fixedBasePosY);",
            "vec4 texColor = texture2D(iChannel0, uv);",
            "gl_FragColor = texColor;",

        "}"

    ];



var customUniforms = {
iChannel0: { type: 'sampler2D', value: this.loseTxt, textureData: { repeat: true } }
};

this.filter = new Phaser.Filter(this, customUniforms, fragmentSrc);
this.filter.setResolution(this.game.width, this.game.height);
this.loseText.filters = [ this.filter ];

      /////////////////////////////////////////////////////////////////////////////////////////

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

      this.bgSound = this.add.audio('seaSounds');
      this.bgSound.loop = true;
      
      this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1    
      this.bgSound.play();      
      
      var ran = Math.floor(Math.random() * 3)+1;
      this.wavSnd[ran].play()   
      
      this.transTar = 'menu'        
      localStorage.setItem("skipLogo",1)

      this.escapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
      this.escapeKey.onDown.add(this.showOptions, this);       


      this.jingleSnd = []
      this.jingleSnd[1] = this.add.audio('coinJingle-1');
      this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
      this.jingleSnd[2] = this.add.audio('coinJingle-2');
      this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1 
      this.jingleSnd[3] = this.add.audio('coinJingle-3');
      this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1       
     

          
      this.animStartKey = 0
      //this.collectedTreasureHighlight.value = 0;
      this.animTimer = 100      

      this.changeWaveDown();
        localStorage.setItem("prevScene","game")
        this.boardView = this.add.sprite(0,0, 'desk23');
        this.boardView.width = this.game.width 
        this.boardView.height = this.game.height  
        this.boardView.alpha = 0;        
    },

    update: function () {

      this.filter.update();
      if(this.loseText.alpha < 1){
        this.loseText.alpha += 0.02
      }
      this.checkKeywords(this.titleTxt)

      this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      
      this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

      this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1    

      if(this.animStartKey > 0){
        this.treasurerChar.y += ( 0 - this.treasurerChar.y) * 0.1;
        this.treasurerCharChat.y+= ( 0 - this.treasurerCharChat.y) * 0.1;
        this.titleTxt.y = this.treasurerCharChat.y+this.treasurerCharChat.height-150 
        this.titleTxt2.alpha += ( 1 - this.titleTxt2.alpha) * 0.1;
        this.titleTxt3.alpha = this.titleTxt2.alpha
        //this.defeatedBy.alpha = this.titleTxt2.alpha
        
      }

      if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
        //this.transWave.y += transSpeed

        if(this.transWave.y >= this.game.height && this.transWaveKey == 0){
          this.animStartKey = 1;
          

        }
      }

      if(this.transWaveKey == 1 && this.animStartKey == 3){
        //this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
        if(this.transWave.y <= (-this.game.height+50)){
          this.game.state.start(this.transTar);
        }
      } 



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
          this.animTimer=25;
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
        this.jingleSnd[ran].play();
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
    onDown: function () {
      this.titleTxt.text = "Maybe next time ..."
      this.transWaveKey = 1
      //this.changeWave();
      this.transTar = 'selectCap'     
      
      this.animStartKey = 2;   
      this.lookAtBoard(23,0,'selectCap')      
        
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Lose = Lose;

}());
