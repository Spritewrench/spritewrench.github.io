import { app, recordEmail } from "../js/lib/firebase.js";
(function() {
  'use strict';
  
  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      
      if(localStorage.getItem("rank") === null){
        localStorage.setItem("rank",1) 
        localStorage.setItem("nextRank",1) 
      }
      
      

      if(localStorage.getItem("quickLoad") !== null){
        var page = parseInt(localStorage.getItem("quickLoad"))
        switch(page){
          case 2:
            this.game.state.start('lose');
            break;
        }
        localStorage.removeItem("quickLoad")
      }




      //sound volume
      if (localStorage.getItem("bgVol") === null) {
        localStorage.setItem("bgVol",startingBGVol) 

        //this.game.state.start('chat');
      } 
      if (localStorage.getItem("sfxVol") === null) {
        localStorage.setItem("sfxVol",startingSFXVol) 
        //this.game.state.start('chat');
        
      } 
      
      if( parseInt(localStorage.getItem("intro")) < 12){
        localStorage.setItem("intro",1)
      }

      if(onboardingDebug){
        localStorage.setItem("intro",12)
      }
      



      this.video = this.add.video('seaBG');

                          
      this.video.play(true);
                 
      this.videoImage = this.video.addToWorld(0, 0);
      var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
      this.videoTimer = 100;
      this.video.volume = 0;
      this.videoImage.scale.set(videoScale);          
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.bg = this.add.sprite(0, 0, 'bgLogo-0');
      this.bg.width = this.game.width
      this.bg.height = this.game.height     
      

      this.bgGem = this.add.sprite(0, -this.game.height, 'bgLogo-gem');
      this.bgGem.width = this.game.width
      this.bgGem.height = this.game.height           
      //this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', 'T.C.P',16);



      this.titleTxt = this.add.text(x,y, '', {font: '64px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      //this.titleTxt2 = this.add.text(x-125,y+450, 'High Score:', {font: '24px Kaph-Regular',fill: '#fff', align: 'center'});
      //this.titleTxt2.anchor.setTo(0.5, 0.5);      

      //this.scoreCountUI = this.add.sprite(x+125,y+450, 'coinCount');
      //this.scoreCountUI.anchor.setTo(0.5, 0.5);  

      if(localStorage.getItem("highScore") == null){
    
        localStorage.setItem("highScore", 0 ) 
      }

      if(localStorage.getItem("goldCount") == null){
    
        localStorage.setItem("goldCount", 0 ) 
      }      

     // this.scoreCount = this.add.text(this.scoreCountUI.x,this.scoreCountUI.y, localStorage.getItem("highScore"), {font: '32px Kaph-Regular',fill: '#fff', align: 'left'});
      //this.scoreCount.anchor.setTo(0.5, 0.5);        


      
      this.titleTxt4 = this.add.text(x,this.game.height/2+75, 'PLAY', {font: '50px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt4.anchor.setTo(0.5, 0.5);    
      this.titleTxt4.inputEnabled = true;
      this.titleTxt4.events.onInputDown.add(this.onDown, this);           
      this.titleTxt4.events.onInputOver.add(this.fill, this);
      this.titleTxt4.events.onInputOut.add(this.unfill, this);  
      this.titleTxt4.alpha = 0;

      this.titleTxt8 = this.add.text(x,this.game.height/2+150, 'COLLECTON', {font: '50px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt8.anchor.setTo(0.5, 0.5);    
      this.titleTxt8.inputEnabled = true;
      this.titleTxt8.events.onInputDown.add(this.goToCollection, this);           
      this.titleTxt8.events.onInputOver.add(this.fill, this);
      this.titleTxt8.events.onInputOut.add(this.unfill, this);  
      this.titleTxt8.alpha = 0;      

      this.titleTxt5 = this.add.text(x,this.game.height/2+225, 'OPTIONS', {font: '50px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt5.anchor.setTo(0.5, 0.5);    
      this.titleTxt5.inputEnabled = true;
      this.titleTxt5.events.onInputDown.add(this.showOptions, this);           
      this.titleTxt5.events.onInputOver.add(this.fill, this);
      this.titleTxt5.events.onInputOut.add(this.unfill, this);  
      this.titleTxt5.alpha = 0;

      this.titleTxt6 = this.add.text(x,this.game.height/2+300, 'CREDITS', {font: '50px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt6.anchor.setTo(0.5, 0.5);    
      this.titleTxt6.inputEnabled = true;
      this.titleTxt6.events.onInputDown.add(this.showCredits, this);           
      this.titleTxt6.events.onInputOver.add(this.fill, this);
      this.titleTxt6.events.onInputOut.add(this.unfill, this);  
      this.titleTxt6.alpha = 0;

      this.titleTxt7 = this.add.text(x,this.game.height/2+375, 'EXIT', {font: '50px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt7.anchor.setTo(0.5, 0.5);    
      this.titleTxt7.inputEnabled = true;
      this.titleTxt7.events.onInputDown.add(this.closeGame, this);           
      this.titleTxt7.events.onInputOver.add(this.fill, this);
      this.titleTxt7.events.onInputOut.add(this.unfill, this); 
      this.titleTxt7.alpha = 0;       

      this.titleTxt3 = this.add.text(x,this.game.height/2+100, 'START', {font: '64px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt3.anchor.setTo(0.5, 0.5);    
      this.titleTxt3.inputEnabled = true;
      this.titleTxt3.events.onInputDown.add(this.showItems, this);           
      this.titleTxt3.events.onInputOver.add(this.fill, this);
      this.titleTxt3.events.onInputOut.add(this.unfill, this);         

      this.titleTxt10 = this.add.text(x,this.game.height-25, 'VERSION: '+version+"(DEMO)", {font: '20px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt10.anchor.setTo(0.5, 0.5);     

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', '',16);
      this.startTxt.anchor.setTo(0.5, 0.5);

      var T = "";
      var C = "";
      var P = ""
      
      var tnum = Math.floor(Math.random() * 6);
      var cnum = Math.floor(Math.random() * 6);
      var pnum = Math.floor(Math.random() * 6);
      


      this.wishlist = this.add.sprite(x, this.game.height-100, 'wishlistSteam');
      this.wishlist.anchor.setTo(0.5, 0.5);
      this.wishlist.origWidth = this.wishlist.width;
      this.wishlist.origHeight = this.wishlist.height
      this.wishlist.inputEnabled = true;
      this.wishlist.events.onInputOver.add(this.spinUp, this);
      this.wishlist.events.onInputOut.add(this.spinDown, this);    
      this.wishlist.events.onInputDown.add(this.openTab, this);  
      
      //retooled insta link
      this.newsletter = this.add.sprite(this.game.width-75, this.game.height-75, 'newsletter');
      this.newsletter.width = 100;
      this.newsletter.height = 100;
      this.newsletter.anchor.setTo(0.5, 0.5);
      this.newsletter.origWidth = this.newsletter.width;
      this.newsletter.origHeight = this.newsletter.height
      this.newsletter.inputEnabled = true;
      this.newsletter.events.onInputOver.add(this.spinUp, this);
      this.newsletter.events.onInputOut.add(this.spinDown, this);    
      this.newsletter.events.onInputDown.add(this.openNewsletter, this);  
      //this.newsletter.events.onInputDown.add(this.openInsta, this);        

      this.social_threads = this.add.sprite(this.game.width-175, this.game.height-75, 'social_threads');
      this.social_threads.width = 100;
      this.social_threads.height = 100;
      this.social_threads.anchor.setTo(0.5, 0.5);
      this.social_threads.origWidth = this.social_threads.width;
      this.social_threads.origHeight = this.social_threads.height
      this.social_threads.inputEnabled = true;
      this.social_threads.events.onInputOver.add(this.spinUp, this);
      this.social_threads.events.onInputOut.add(this.spinDown, this);    
      this.social_threads.events.onInputDown.add(this.openThreads, this);          
      this.social_threads.y = this.game.height +200

      
      this.count =2;
      this.sprite = this.add.sprite(0, 0, 'wrench');
      this.sprite.width = this.game.width
      this.sprite.height = this.game.height

      this.logoCheck = parseInt(localStorage.getItem("skipLogo"))

      
      

      this.sprite.inputEnabled = true;
      this.sprite.events.onInputDown.add(this.onClick, this);

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

      this.sparkleLeft = this.add.emitter(x-450, 300, 5);
      this.sparkleLeft.makeParticles('sparkle');
      this.sparkleLeft.width = 50;
      this.sparkleLeft.minParticleSpeed.set(-100, -100);
      this.sparkleLeft.maxParticleSpeed.set(-200, -200);
      this.sparkleLeft.setAlpha(1, 0, 2500);
      //this.sparkleLeft.setScale(0.2, 1, 0.2, 1, 6000, Phaser.Easing.Quintic.Out);
      this.sparkleLeft.gravity = 500;                              
      
      //this.sparkleLeft.on = false;      
      
      this.sparkleRight = this.add.emitter(x+500, 300, 5);
      this.sparkleRight.makeParticles('sparkle');
      this.sparkleRight.width = 50;
      this.sparkleRight.minParticleSpeed.set(100, -100);
      this.sparkleRight.maxParticleSpeed.set(200, -200);
      this.sparkleRight.setAlpha(1, 0, 2500);
      //this.sparkleRight.setScale(0.2, 1, 0.2, 1, 6000, Phaser.Easing.Quintic.Out);
      this.sparkleRight.gravity = 500;                              
      //this.sparkleRight.start(true);
      //this.sparkleRight.on = false;        
      
      this.logoTimer = 0;
      this.logoKey = 1;

      this.showToggle = false;

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

      this.sprite.x = -this.game.width;
      this.count++;
      if(this.logoCheck == 1){
        
        
        this.transWave.y= -this.game.height
        var ran = Math.floor(Math.random() * 3)+1;
        this.wavSnd[ran].play()            
      }
      else{
        this.bg.alpha = 0;
        this.titleTxt3.alpha = 0;
      }
      this.bgSound.play();

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

      if (localStorage.getItem("intro") === null) {
        localStorage.setItem("intro",1);
      }      
      localStorage.setItem("intro",14);

       localStorage.removeItem("crewCode")
    },

    update: function () {

      //this.game.state.start('win');

      if(parseInt(localStorage.getItem("emailGiven")) == 1 || !window.navigator.onLine ){
        this.newsletter.y  = this.game.height+200
      }
      else{
        this.newsletter.y  = this.game.height-75
      }

      this.bgSound.volume = parseInt(localStorage.getItem("bgVol"))* 0.1  

      this.jingleSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.jingleSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

      this.wavSnd[1].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[2].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1
      this.wavSnd[3].volume = parseInt(localStorage.getItem("sfxVol"))* 0.1

      if(this.logoCheck == 0){
        if(this.bg.alpha < 1){
          this.bg.alpha += 0.1
          this.titleTxt3.alpha += 0.1
        }
        else{
          this.bg.alpha = 1
          this.titleTxt3.alpha = 1
        }
      }
      if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
        this.transWave.y += transSpeed

        if(this.transWave.y >= this.game.height&& this.transWaveKey == 0){

        }
      }
      if(this.transWaveKey == 1){
        this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
        if(this.transWave.y <= (-this.game.height+50)){
          if(parseInt(localStorage.getItem("intro")) == 1 || quickStart){
            updatePool();
            this.game.state.start('game');//game
          }
          else{
            this.game.state.start(this.transTar);//selectCap 
          }
          
        }
      }
      this.bg.y += ( 0 - this.bg.y) * 0.5
      if(this.showToggle){
        this.bgGem.y += ( 0 - this.bgGem.y) * 0.5
        if(this.bgGem.y >= -2 && this.bgGem.y < -1){
          //this.bgGem.alpha = 0;
          this.sparkleLeft.start(true,5000,1,5,true);
          this.sparkleRight.start(true,5000,1,5,true);
          this.bg.y += 25
          this.bgGem.y += 25
        }
        if(this.bgGem.y >= -1){
          
          if(this.titleTxt4.alpha <= 1 ){
            this.titleTxt4.alpha += 0.05 
            this.titleTxt5.alpha += 0.05 
            this.titleTxt6.alpha += 0.05 
            this.titleTxt7.alpha += 0.05 
            this.titleTxt8.alpha += 0.05
          }
          this.bg.loadTexture('bgLogo-'+this.logoKey)
          this.logoTimer++
          if(this.logoTimer%50 == 0){
            this.logoKey++;
            if(this.logoKey > 2){
              this.logoKey = 1;
            }

            if(this.logoTimer >= 70){
              this.logoTimer = 0;
            }
          }   
        }
     
      }

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
        
        //eliminate data persist
        localStorage.clear();
        localStorage.setItem('version',version);
    
        //create unique userID 
        if(localStorage.getItem("sunkenStones-userID") === null ){
          var id = crypto.randomUUID();
          console.log(id)
          localStorage.setItem("sunkenStones-userID",id)
        }  
        //sound volume
        if (localStorage.getItem("bgVol") === null) {
          localStorage.setItem("bgVol",startingBGVol) 

          //this.game.state.start('chat');
        } 
        if (localStorage.getItem("sfxVol") === null) {
          localStorage.setItem("sfxVol",startingSFXVol) 
          //this.game.state.start('chat');
          
        } 
        
        if( parseInt(localStorage.getItem("intro")) < 12){
          localStorage.setItem("intro",1)
        }     
        var ran = Math.floor(Math.random() * 3)+1;        
        this.wavSnd[ran].play()
        this.transWaveKey = 1;
        this.transTar = 'boot'
        //window.location.reload();
         
      }           
      
    },      
    goToCollection: function () {
    },
    onClick: function (pic) {
      pic.x = -this.game.width;
      this.count++;
      this.bgSound.play();
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
    showOptions: function () {
      if(this.titleTxt6.alpha >= 1){
        var ran = Math.floor(Math.random() * 3)+1;
        this.jingleSnd[ran].play();
        this.titleTxt5.addColor("white", 0);
        Swal.fire({
          title: 'OPTIONS',
          html: '<span onclick=\'const electron = require("electron");const ipc = electron.ipcRenderer;ipc.send("toggle-maximize-window");\'>TOGGLE FULL SCREEN</span><br/><br/><div class="slidecontainer" > MUSIC VOLUME: <span id="mVol">'+parseInt(localStorage.getItem("bgVol"))+'</span><br/><input oninput=\'document.getElementById("mVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("bgVol"))+'" class="slider" id="volRange"> </div><br/><div class="slidecontainer"> SFX VOLUME: <span id="sfxVol">'+parseInt(localStorage.getItem("sfxVol"))+'</span><br/><input oninput=\'document.getElementById("sfxVol").innerHTML = this.value\' type="range" min="0" max="10" value="'+parseInt(localStorage.getItem("sfxVol"))+'" class="slider" id="sfxRange"> </div>',
          allowOutsideClick: false,
          allowEscapeKey: false              
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
          html: "<h3>ART & PROGRAMMING</h3>Glen Henry<h3>AUDIO</h3>Music Composed by Chase Bethea<br/>SFX Audio produced by Dillon Becker <h3>ANIMATION</h3>Nathanael Hay<h3>VOICE WORK</h3>Charis Cayetano-Henry<br/>Meghan Christian<br/><h3>QUALITY ASSURANCE</h3>Alrick Brown<br/>Graham Reid<br/>Matthew Hunter<br/>Paul Griffiths<br/>Shaun Douglas<br/>Evon Binns<br/><h3>SPECIAL THANKS</h3>Damien Crawford",
          allowOutsideClick: false,
          allowEscapeKey: false              
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
        title: "Join the Newsletter",
        html:"Enter your email below and Sign up for the Spritewrench Newsletter!<br/><br/>Stay up to date with studio progress and projects",
        input: "email",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Sign Up",
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        allowEscapeKey: false            
      }).then((result) => {
        if (result.isConfirmed) {
          try{
            recordEmail(result.value)
            localStorage.setItem("emailGiven",1)
            this.spinDown(this.newsletter)
            Swal.fire({
              icon: "success",
              title: "Succesfully Signed Up",
              showConfirmButton: false,
              timer: 1500,
              allowOutsideClick: false,
              allowEscapeKey: false                  
            });            
          }
          catch(e){
            alert(e)
          }
          

        }
        else{
          this.spinDown(this.newsletter)
        }
      });

    },     
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
    closeGame: function (text) {
      if(this.titleTxt6.alpha >= 1){
        const electron = require("electron");
        const ipc = electron.ipcRenderer;
        ipc.send("close-window");        
      }

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
  window['simplewar'].Menu = Menu;

}());
