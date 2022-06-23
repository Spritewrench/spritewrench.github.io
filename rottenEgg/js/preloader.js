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