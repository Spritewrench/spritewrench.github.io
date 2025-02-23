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
         
          //sound   
          this.game.load.audio('ping', ['assets/audio/ping.ogg']); 
          this.game.load.audio('jumpSound', ['assets/audio/jumpSound.wav']); 
          this.game.load.audio('bgMusic', ['assets/audio/royalty-free-reggaeprod-by-mjrtist-9541.mp3']); 
          this.game.load.audio('yay', ['assets/audio/yay.mp3']); 
          this.game.load.audio('celiaLine1', ['assets/audio/CeliaLine1.ogg']); 
          this.game.load.audio('celiaLine2', ['assets/audio/CeliaLine2.ogg']); 
          this.game.load.audio('celiaLine3', ['assets/audio/CeliaLine3.ogg']); 
          

          this.load.image('mainBG', 'assets/test.webp'); 
          this.load.image('titleBG', 'assets/titleBG.png');  
          this.load.image('ceiliaPopin', 'assets/ceiliaPopin.png');
          this.load.image('ceiliaPopin_reg', 'assets/ceiliaPopin_reg.png');
          this.load.image('ceiliaPopin_happy', 'assets/ceiliaPopin_happy.png');
          this.load.image('ceiliaPopin_sad', 'assets/ceiliaPopin_sad.png');

          this.load.image('speech', 'assets/speech.png');  
          this.load.image('speechCont', 'assets/speechCont.png');

          this.load.image('road', 'assets/road.png');
          this.load.image('road_old', 'assets/road_old.png');
          

          this.load.image('levelSelect', 'assets/levelSelect.png');

          this.load.image('logo', 'assets/logo.png');  
          this.load.image('logo2', 'assets/logo2.png');  


          //this.load.image('hero', 'assets/hero.png');  
          this.load.spritesheet('hero', 'assets/hero.png', 200, 200);
 
          this.load.image('background','assets/background.png');  
          this.load.image('house0','assets/house0.png');  
          this.load.image('house1','assets/house1.png');  
          this.load.image('house2','assets/house2.png');  
          this.load.image('houseCheck','assets/houseCheck.png');  
          this.load.image('trap1','assets/trap1.png'); 
          this.load.image('trap2','assets/trap2.png'); 
          
          this.load.image('jumpBtn','assets/jumpBtn.png');
          this.load.image('houseCount','assets/houseCount.png');
          this.load.image('timerCount','assets/timerCount.png'); 


          
          
          
          
 
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