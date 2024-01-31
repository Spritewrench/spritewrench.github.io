(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }
    Preloader.prototype = {
        preload: function () {
          
            //this.game.scale.refresh(); 
            
          
            var x = (this.game.width / 2);
            var y = this.game.height /2;      
            this.asset = this.add.sprite(x+300, y+500, 'preloader');
            this.asset.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.asset);
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            
      
            
            this.load.script('Gray', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Gray.js');
          
            this.load.bitmapFont('minecraftia', 'assets/minecraftia.webp', 'assets/minecraftia.xml');

            this.load.image('mainBG', 'assets/gui/main.webp');
            this.load.image('mainButton', 'assets/gui/menuButton.webp');
            this.load.image('mainButtonNo', 'assets/gui/menuButtonNo.webp');
            this.load.image('menuCredit', 'assets/gui/menuCredit.webp');
            this.load.image('menuSurvey', 'assets/gui/menuSurvey.webp');    
            this.load.image('menuExtra', 'assets/gui/menuExtra.webp');    
            this.load.image('NomenuExtra', 'assets/gui/NomenuExtra.webp');    
            this.load.image('menuOverlay', 'assets/gui/mainOverlay.webp');
            this.load.image('menuOverlayNo', 'assets/gui/mainOverlayNotAvail.webp');   
            this.load.image('menuModule', 'assets/gui/menuModule.webp');  
            this.load.image('token', 'assets/gui/token.webp');  
          
            this.load.image('lock', 'assets/gui/lock.webp');   
          
            this.load.image('menuLeftArrow', 'assets/gui/leftArrow.webp');
            this.load.image('menuRightArrow', 'assets/gui/rightArrow.webp');
          
            this.load.image('modal', 'assets/gui/modal.webp');     
            this.load.image('intro', 'assets/gui/intro.webp'); 
            this.load.image('intro2', 'assets/gui/intro2.png');         
            

            
            
   
        }
        , create: function () {
            //this.asset.cropEnabled = false;
            //this.game.scale.setMinMax(1280,800,1920,1080)
            
        }
        , update: function () {
            //this.game.scale.refresh(); 
            //this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;            
            if (!!this.ready) {
                //console.log(localStorage.getItem('state'))
                //this.game.state.start(localStorage.getItem('state'));
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