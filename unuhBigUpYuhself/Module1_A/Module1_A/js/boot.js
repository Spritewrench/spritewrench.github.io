(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    
    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
    },

    create: function () {
  

      
      try{
        if(navigator.userAgentData.mobile === true){
          this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        }      
        else{
          
          this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
          this.game.scale.pageAlignHorizontally = true;
          this.game.scale.pageAlignVertically = true;     
          if(screen.width < 1024){
            //alert(screen.width)  
            this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;   
            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    
          } 
        }
      }
      catch(e){
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;     
        if(screen.width < 1024){
          //alert(screen.width)  
          this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;   
          this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
  
        } 
      }
      
      //this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
      this.game.renderer.renderSession.roundPixels = true;
      this.game.state.start('preloader');
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Boot = Boot;

}());

