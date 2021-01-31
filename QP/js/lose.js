(function() {
  'use strict';

  function Lose() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Lose.prototype = {

    create: function () {
      try{
          setupVideoReward();
          getAds();        
      }
      catch(error){
        //admob.rewardvideo.show();   
      }      
      
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.map = this.add.sprite(0, 0, 'mainBG');
      this.map.width = this.game.width;
      this.map.height = this.game.height;        
      this.map.alpha = 1;
       
      this.monName = this.add.text(x, 100, "YOU'VE BEEN DEFEATED\n BY A ",{font:'LondrinaSolid-Black'});
      this.monName.fill= '#fff';
      this.monName.fontSize = 40;
      this.monName.anchor.setTo(0.5, 0.5); 
      this.monName.align = "center"
      
      this.monSize = localStorage.getItem("monSize")
      this.monSizeName = this.add.text(x, this.monName .y+80, this.monSize.toUpperCase(),{font:'LondrinaSolid-Black'});
      this.monSizeName.fill= '#BDBDBD';
      this.monSizeName.fontSize = 40;
      this.monSizeName.anchor.setTo(0.5, 0.5);       
      
      this.monTypeName = localStorage.getItem("monNameTitle")
      this.monTypeName = this.add.text(x, this.monSizeName.y+50, this.monTypeName.toUpperCase(),{font:'LondrinaSolid-Black'});
      this.monTypeName.fill= '#FF8900';
      this.monTypeName.fontSize = 40;
      this.monTypeName.anchor.setTo(0.5, 0.5); 
      
      this.optionText = this.add.text(x, this.monTypeName.y+50, "WATCH AN AD TO CONTINUE THE FIGHT",{font:'LondrinaSolid-Black'});
      this.optionText.fill= '#fff';
      this.optionText.fontSize = 24;
      this.optionText.anchor.setTo(0.5, 0.5);  
      
      localStorage.setItem("letsHunt",0)   
      localStorage.setItem("purchase",0)
      
      
      this.biome = parseInt(localStorage.getItem("Markerbiome"));
      this.watchButton = this.add.sprite(this.game.width/2, this.game.height/2+25, "watch");  
      this.watchButton.anchor.setTo(0.5, 0.5);  
      //this.returnButton.width =  380;
      //this.returnButton.height = 220;      
      this.watchButton.inputEnabled = true;
      this.watchButton.events.onInputDown.add(this.watchAd, this);  
      
      this.optionText2 = this.add.text(x, this.watchButton.y+100, "OR\n HEAD BACK TO CAMP",{font:'LondrinaSolid-Black'});
      this.optionText2.fill= '#fff';
      this.optionText2.fontSize = 24;
      this.optionText2.anchor.setTo(0.5, 0.5); 
      this.optionText2.align = "center"
      
      
      this.returnButton = this.add.sprite(this.game.width/2, this.watchButton.y+200, "return_"+this.biome+"MINI");  
      this.returnButton.anchor.setTo(0.5, 0.5);  
      //this.returnButton.width =  380;
      //this.returnButton.height = 220;      
      this.returnButton.inputEnabled = true;
      this.returnButton.events.onInputDown.add(this.onDown, this);     
      
      
      
      this.loseMusic = this.add.audio('What We Were'); 
      this.ping = this.add.audio('ping');
      this.levelUpSound= this.add.audio('levelUp');
      this.menuClicked = false;        
      //this.input.onDown.add(this.onDown, this);
        
        this.updateLeader = 0;
        if(!navigator.onLine) { // true|false
            this.updateLeader = 1;
        }
      
            this.bgSound = this.add.audio('wardenMusic');
            this.ping = this.add.audio('ping');      
            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            }            
    },

    update: function () {
      this.letsHunt = parseInt(localStorage.getItem("letsHunt"));
      if(this.letsHunt == 1){
        localStorage.setItem("revengeHunt",1)
        this.watchButton.loadTexture("wardenHunt")
        this.optionText.text = "READY TO CONTINUE THE FIGHT?";
      }

      this.adReady = parseInt(localStorage.getItem("adReady"));
      if(this.adReady >= 1  ){
        this.watchButton.x += (this.game.width/2 - this.watchButton.x) * 0.1; 
        this.returnButton.x += (this.game.width/2 - this.returnButton.x) * 0.1; 
      }
      else{
        this.watchButton.x += (-1000 - this.watchButton.x) * 0.1; 
        this.returnButton.x += (-1000 - this.returnButton.x) * 0.1;       
      }      
    },
    watchAd: function () {
      
      try{
        if(this.letsHunt == 1){
          this.ping.play() 
            if(this.bgSound.isPlaying){
                this.bgSound.stop();
                //this.introCheck = true;
            }                
   
          
          this.game.state.start('game')
        } 
        else{
          this.bgSound.stop();
          this.ping.play()          
          
          try{
              admob.rewardVideo.show()//getAds();
          }
          catch(error){
            //admob.rewardVideo.show();   
          } 
        }

              
      }
      catch(error){
        console.log(error)
      }

        
    },
    onDown: function () {
        if(this.score <= 0){
            this.ping.play();
            this.loseMusic.fadeOut(1000)
            this.menuClicked = true;
            //asdsad
            //localStorage.setItem('state','warden')
            this.game.state.start('warden');
        }
        this.bgSound.stop();
        this.ping.play()      
        try{
            admob.rewardvideo.remove()
        }
        catch(error){
        }      
              
        localStorage.setItem("hasLost",1);
        localStorage.setItem('state','warden')
        this.game.state.start('warden');      
	
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
