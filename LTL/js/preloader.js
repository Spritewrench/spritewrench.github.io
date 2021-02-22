(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }
    Preloader.prototype = {
        preload: function () {
            this.asset = this.add.sprite(320, 240, 'preloader');
            this.asset.anchor.setTo(0.5, 0.5);
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.load.setPreloadSprite(this.asset);

            
            this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
            
            this.load.image('start', 'assets/HomeScreen-bg.jpg');
            this.load.image('lime', 'assets/lime.png');
            this.load.image('backdrop', 'assets/backdrop.png');
            this.load.image('arcademode-Button', 'assets/Home Screen-button-arcademode.png');
            this.load.image('timeattack-Button', 'assets/Home Screen-button-timeattack.png');
          
            this.load.image('win', 'assets/Win screen-bg.jpg');
            this.load.image('lose', 'assets/Lose screen-bg.jpg');
            this.load.image('retryButton', 'assets/Lose-screen-button-restart.png');
            this.load.image('homeButton', 'assets/Win-screen-button-home.png');
            this.load.image('nextButton', 'assets/Win-screen-button-next.png');

            this.load.image('block1', 'assets/Block_1/Block-1.png');
            this.load.image('block2', 'assets/Block_2/Block-2.png');
            this.load.image('block3', 'assets/Block_3/Block-3.png');
            this.load.image('block4', 'assets/Block_4/Block-4.png');
            
            this.load.image('mainBG', 'assets/LTL-Establishing shot.jpg');
            for(var i = 1; i <5;i++){
              this.load.image('Block-'+i+'_1A', 'assets/Block_'+i+'/Block-'+i+'_1A.png');
              this.load.image('Block-'+i+'_1B', 'assets/Block_'+i+'/Block-'+i+'_1B.png');

              this.load.image('Block-'+i+'_2A', 'assets/Block_'+i+'/Block-'+i+'_2A.png');
              this.load.image('Block-'+i+'_2B', 'assets/Block_'+i+'/Block-'+i+'_2B.png');      
              
              if(i != 3){
                this.load.image('Block-'+i+'_3A', 'assets/Block_'+i+'/Block-'+i+'_3A.png');
                this.load.image('Block-'+i+'_3B', 'assets/Block_'+i+'/Block-'+i+'_3B.png');                
              }


              this.load.image('Block-'+i+'_4A', 'assets/Block_'+i+'/Block-'+i+'_4A.png');
              this.load.image('Block-'+i+'_4B', 'assets/Block_'+i+'/Block-'+i+'_4B.png');

              this.load.image('Block-'+i+'_5A', 'assets/Block_'+i+'/Block-'+i+'_5A.png');
              this.load.image('Block-'+i+'_5B', 'assets/Block_'+i+'/Block-'+i+'_5B.png');      

              this.load.image('Block-'+i+'_6A', 'assets/Block_'+i+'/Block-'+i+'_6A.png');
              this.load.image('Block-'+i+'_6B', 'assets/Block_'+i+'/Block-'+i+'_6B.png');          
              
              if(i != 1){  
                this.load.image('Block-'+i+'_7A', 'assets/Block_'+i+'/Block-'+i+'_7A.png');
                this.load.image('Block-'+i+'_7B', 'assets/Block_'+i+'/Block-'+i+'_7B.png');   
              }
              if(i == 3 || i == 4){
                this.load.image('Block-'+i+'_8A', 'assets/Block_'+i+'/Block-'+i+'_8A.png');
                this.load.image('Block-'+i+'_8B', 'assets/Block_'+i+'/Block-'+i+'_8B.png');   
                
                this.load.image('Block-'+i+'_9A', 'assets/Block_'+i+'/Block-'+i+'_9A.png');
                this.load.image('Block-'+i+'_9B', 'assets/Block_'+i+'/Block-'+i+'_9B.png');                   
              }  
              if(i == 4){
                this.load.image('Block-'+i+'_10A', 'assets/Block_'+i+'/Block-'+i+'_10A.png');
                this.load.image('Block-'+i+'_10B', 'assets/Block_'+i+'/Block-'+i+'_10B.png');                 
              }               
              
            }
            
        
          
            this.load.image('overlay', 'assets/overlay.png');
            this.load.image('kids', 'assets/kids.png');
            this.load.image('chat', 'assets/chat.png');
            //popup
            this.load.image('popUp-0', 'assets/popup/bones-popUp.png'); 
            this.load.image('popUp-1', 'assets/popup/bubbles-popUp.png'); 
            this.load.image('popUp-2', 'assets/popup/donald-popUp.png'); 
            this.load.image('popUp-3', 'assets/popup/gussi-popUp.png'); 
            this.load.image('popUp-4', 'assets/popup/jnr-popUp.png'); 
            this.load.image('popUp-5', 'assets/popup/johnny-popUp.png'); 
            this.load.image('popUp-6', 'assets/popup/johnnySnr-popUp.png'); 
            this.load.image('popUp-7', 'assets/popup/petal-popUp.png'); 
            this.load.image('popUp-8', 'assets/popup/sammy-popUp.png'); 
            this.load.image('popUp-9', 'assets/popup/zella-popUp.png'); 
            
            //chibi
            this.load.image('chibi-0', 'assets/chibi/LTL-game-sprite-bones.png'); 
            this.load.image('chibi-1', 'assets/chibi/LTL-game-sprite-bubbles.png'); 
            this.load.image('chibi-2', 'assets/chibi/LTL-game-sprite-Donald.png'); 
            this.load.image('chibi-3', 'assets/chibi/LTL-game-sprite-maas-gussy.png'); 
            this.load.image('chibi-4', 'assets/chibi/LTL-game-sprite-jr.png'); 
            this.load.image('chibi-5', 'assets/chibi/LTL-game-sprite-johnny-jr.png'); 
            this.load.image('chibi-6', 'assets/chibi/LTL-game-sprite-johnny-snr.png'); 
            this.load.image('chibi-7', 'assets/chibi/LTL-game-sprite-petal.png'); 
            this.load.image('chibi-8', 'assets/chibi/LTL-game-sprite-sammy.png'); 
            this.load.image('chibi-9', 'assets/chibi/LTL-game-sprite-zella.png'); 
          
            //stage select
            this.load.image('Stage-selection-bg', 'assets/Stage-selection-bg.jpg'); 
            this.load.image('stage-select-button-back', 'assets/stage-select-button-back.png'); 
            this.load.image('stage-select-button-next', 'assets/stage-select-button-next.png'); 
          
            this.load.image('Stage-select-0', 'assets/Stage-select-bones.png'); 
            this.load.image('Stage-select-1', 'assets/Stage-select-gussy.png'); 
            this.load.image('Stage-select-2', 'assets/Stage-select-zella.png'); 
          
            //audio 
            this.game.load.audio('menuMusic', ['assets/audio/LTL-ingame-track.wav']);
            this.game.load.audio('charBark-0', ['assets/audio/character-barks/charBark-0.mp3']);
            this.game.load.audio('charBark-1', ['assets/audio/character-barks/charBark-1.mp3']);
            this.game.load.audio('charBark-2', ['assets/audio/character-barks/charBark-2.mp3']);
            this.game.load.audio('charBark-3', ['assets/audio/character-barks/charBark-3.mp3']);  
            this.game.load.audio('charBark-4', ['assets/audio/character-barks/charBark-4.mp3']);
            this.game.load.audio('charBark-5', ['assets/audio/character-barks/charBark-5.mp3']);
            this.game.load.audio('charBark-6', ['assets/audio/character-barks/charBark-6.mp3']);
            this.game.load.audio('charBark-7', ['assets/audio/character-barks/charBark-7.mp3']);    
            this.game.load.audio('charBark-8', ['assets/audio/character-barks/charBark-8.mp3']);   
            this.game.load.audio('charBark-9', ['assets/audio/character-barks/charBark-9.mp3']);              
        }
        , create: function () {
            this.asset.cropEnabled = false;
        }
        , update: function () {
            if (!!this.ready) {
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