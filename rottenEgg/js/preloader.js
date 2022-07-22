(function () {
  'use strict';

  function Preloader() {
      this.asset = null;
      this.ready = false;
  }
  Preloader.prototype = {
      preload: function () {
          try{
              //setupVideoReward()
              //getAds()
          }
          catch(error){
            //alert(error)
            //admob.rewardVideo.show();   
          }           
          //this.game.scale.refresh(); 
          
          //console.log("where we going? "+localStorage.getItem('state'))
          var x = (this.game.width /2);
          var y = this.game.height /2;     
   

          this.asset = this.add.sprite(x, y, 'preloader');
          this.asset.anchor.setTo(0.5, 0.5);
          this.load.setPreloadSprite(this.asset);
          this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
         


          this.load.image('mainBG', 'assets/main.png');  
          this.load.image('gameBG', 'assets/gameBG.png');  
          this.load.image('egg1', 'assets/egg1.png');  
          this.load.image('egg2', 'assets/egg2.png'); 
          
          this.load.image('nextTurn', 'assets/nextTurn.png'); 
          this.load.image('undo', 'assets/undo.png'); 

          this.load.image('win', 'assets/win.png'); 
          this.load.image('lose', 'assets/lose.png');

          this.load.image('namePlate', 'assets/namePlate.png'); 
          
          this.load.image('userNames0', 'assets/userNames0.png'); 
          this.load.image('userNames1', 'assets/userNames1.png'); 
          this.load.image('userNames2', 'assets/userNames2.png'); 

          
          //sound
          this.game.load.audio('bgMusic', ['assets/audio/comedy-jazzy-time-entertainment-happy-background-music-21106.ogg']); 
          this.game.load.audio('buttonPress1', ['assets/audio/buttonPress1.ogg']); 
          this.game.load.audio('buttonPress2', ['assets/audio/buttonPress2.ogg']); 
          this.game.load.audio('buttonPress3', ['assets/audio/buttonPress3.ogg']);  
          
          this.game.load.audio('winSound', ['assets/audio/victory.ogg']);  
          this.game.load.audio('loseSound', ['assets/audio/lose.ogg']);  
     
          
          
          
 
      }
      , create: function () {

         
          
      }
      , update: function () {


          if (!!this.ready ) {              
              this.game.state.start('menu');
          }
      }
      , onLoadComplete: function () {
          this.ready = true;
      }
       
  };
  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Preloader = Preloader;
}());