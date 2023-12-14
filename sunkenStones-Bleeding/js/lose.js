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

                          
        this.video.play(true);
                   
        this.videoImage = this.video.addToWorld(0, 0);
        var videoScale =(Math.min(this.game.width / this.video.width)*1, (this.game.height / this.video.height)*1);
        this.videoTimer = 100;
        this.video.volume = 0;
        this.videoImage.scale.set(videoScale);     


      this.bg = this.add.sprite(0, 0, 'bgOverlay2');
      this.bg.width = this.game.width
      this.bg.height = this.game.height

      this.titleTxt = this.add.text(x,y, 'your captain has fallen.\nyour voyage is over.', {font: '32px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.text(x,this.game.height-100, '[CLICK TO RETURN MENU]', {font: '32px Kaph-Regular',fill: '#fff', align: 'center'});
      this.startTxt.anchor.setTo(0.5, 0.5);

      this.input.onDown.add(this.onDown, this);

      this.transWave = this.add.sprite(0, -this.game.height, 'transitionWave');
      this.transWave.width = this.game.width
      //this.transWave.height = this.game.height         
      this.transWaveKey  = 0;  
      
      this.wavSnd = []
      this.wavSnd[1] = this.add.audio('wavSnd-1');
      this.wavSnd[1].volume = 0.2 
      this.wavSnd[2] = this.add.audio('wavSnd-2');
      this.wavSnd[2].volume = 0.2 
      this.wavSnd[3] = this.add.audio('wavSnd-3');
      this.wavSnd[3].volume = 0.2      
      
      var ran = Math.floor(Math.random() * 3)+1;
      this.wavSnd[ran].play()   
      
      this.transTar = 'menu'        
      localStorage.setItem("skipLogo",1)

      this.escapeKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
      this.escapeKey.onDown.add(this.showOptions, this);       
    },

    update: function () {
      if(this.transWave.y <= this.game.height&& this.transWaveKey == 0){
        this.transWave.y += transSpeed

        if(this.transWave.y >= this.game.height&& this.transWaveKey == 0){

          

        }
      }

      if(this.transWaveKey == 1){
        this.transWave.y -= transSpeed//+= (-this.game.height - this.transWave.y) * 0.05
        if(this.transWave.y <= (-this.game.height+50)){
          this.game.state.start(this.transTar);
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
    onDown: function () {
      this.transWaveKey = 1
      this.transTar = 'menu'       
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
  window['simplewar'].Lose = Lose;

}());
