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
      

      this.titleTxt = this.add.text(x,y, "YOU MANAGE to exchange your haul for "+localStorage.getItem("currentScore")+" GOLD", {font: '36px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      this.titleTxt2 = this.add.text(x-125,this.titleTxt.y+120, '', {font: '50px Kaph-Regular',fill: '#fff', align: 'center'});
      this.titleTxt2.anchor.setTo(0.5, 0.5);      

      this.scoreCountUI = this.add.sprite(x,this.titleTxt.y+120, 'coinCount');
      this.scoreCountUI.anchor.setTo(0.5, 0.5);  

      this.scoreCount = this.add.text(this.scoreCountUI.x+20,this.scoreCountUI.y, "0", {font: '32px Kaph-Regular',fill: '#fff', align: 'left'});
      this.scoreCount.anchor.setTo(0.5, 0.5);       

      this.goldCountValue = parseInt(localStorage.getItem("goldCount"))
      this.newValue = this.goldCountValue+parseInt(localStorage.getItem("currentScore"))

      localStorage.setItem("goldCount",this.goldCountValue+parseInt(localStorage.getItem("currentScore")))
          //treasure UI
          var distX = 0
          var spacing = 60
          this.collectedTreasure = []
          this.collectedTreasureText = []
          for(var i = 1 ; i < 10; i++){
            this.collectedTreasure[i] = this.add.sprite(((this.game.width/2)-225)+distX , this.titleTxt.y-100, 'treasureUI_'+i);
            this.collectedTreasure[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasure[i].width = 75
            this.collectedTreasure[i].height = 75
            this.collectedTreasure[i].alpha = 0.3;

            this.collectedTreasureText[i] = this.add.text(this.collectedTreasure[i].x+20,this.collectedTreasure[i].y+20, 'x0', {font: '20px Kaph-Regular',fill: '#fff', align: 'center'});
            this.collectedTreasureText[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasureText[i].alpha = 0;

            this.collectedTreasure[i].count = localStorage.getItem("collectedTreasure"+i)   
            //this.collectedTreasure[i].alpha = 0;    
            distX +=  spacing        
          }      
            //treasure 
            for(var i = 1; i < 10; i++){
              if(this.collectedTreasure[i].count > 0){
                this.collectedTreasure[i].alpha = 1
                this.collectedTreasureText[i].alpha = 1
                this.collectedTreasureText[i].text = "x"+this.collectedTreasure[i].count
              }
              else{
                this.collectedTreasure[i].alpha = 0.3
                this.collectedTreasureText[i].alpha = 0         
              }
            }


            this.titleTxt3 = this.add.text(x,this.game.height-100, '[CLICK TO RETURN TO MENU]', {font: '32px Kaph-Regular',fill: '#fff', align: 'center'});
            this.titleTxt3.anchor.setTo(0.5, 0.5);             
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
          
          this.transTar = 'win'     
          this.scoreValue = this.goldCountValue
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
      this.scoreCount.text = this.scoreValue      
    },
    showOptions: function () {
      if(true){
        var ran = Math.floor(Math.random() * 3)+1;
        
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
  window['simplewar'].Win = Win;

}());
