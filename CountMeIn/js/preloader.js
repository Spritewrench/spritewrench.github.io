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
         

          this.load.image('mainBG', 'assets/test.webp'); 
          this.load.image('titleBG', 'assets/titleBG.png');  
          this.load.image('ceiliaPopin', 'assets/ceiliaPopin.png');
          this.load.image('speech', 'assets/speech.png');  
          this.load.image('speechCont', 'assets/speechCont.png');
          
          this.load.image('levelSelect', 'assets/levelSelect.png');

          this.load.image('logo', 'assets/logo.png');  
          this.load.image('logo2', 'assets/logo2.png');  



          this.load.image('hero', 'assets/chris0.png');   
          this.load.image('hero1', 'assets/chris1.png');   
          this.load.image('background','assets/background.png');  
          this.load.image('house0','assets/house0.png');  
          this.load.image('house1','assets/house1.png');  
          this.load.image('house2','assets/house2.png');  
          this.load.image('houseCheck','assets/houseCheck.png');  
          this.load.image('trap','assets/trap.png');  


     
          
          
          
 
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