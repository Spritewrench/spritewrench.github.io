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
          
            this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');

            this.load.image('mainBG', 'assets/gui/main.png');
            this.load.image('mainButton', 'assets/gui/menuButton.png');
            this.load.image('mainButtonNo', 'assets/gui/menuButtonNo.png');
            this.load.image('menuCredit', 'assets/gui/menuCredit.png');
            this.load.image('menuSurvey', 'assets/gui/menuSurvey.png');    
            this.load.image('menuOverlay', 'assets/gui/mainOverlay.png');
            this.load.image('menuOverlayNo', 'assets/gui/mainOverlayNotAvail.png');           
            

            
            
   
        }
        , create: function () {
            //this.asset.cropEnabled = false;
            //this.game.scale.setMinMax(1280,800,1920,1080)
            
        }
        , update: function () {
            this.game.scale.refresh(); 
            this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;            
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