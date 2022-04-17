(function() {
  'use strict';

  function Lose() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Lose.prototype = {

    create: function () {
      try{
          //setupVideoReward();
          getAds();        
      }
      catch(error){
        //admob.rewardvideo.show();   
      }    
       
      try{
        if(!gameConfig.isDebug ){
          var param = new Object();
          param.huntNumber = localStorage.getItem("huntNum");
          GameAnalytics("addProgressionEvent", "Fail", "huntSuccess","","",localStorage.getItem("huntNum"));  
          facebookConnectPlugin.logEvent("huntLoss", param, 1, function (success){ console.log(success)}, function (fail){ console.log(fail)})
        }

      }
      catch(e){

      } 

      localStorage.setItem("letsCarve",1);
      localStorage.setItem("hasWon",0)
      //localStorage.setItem("monCount",0)
      //localStorage.setItem("ExpTotal",0);      
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
      
      
      this.returnButton = this.add.sprite(this.game.width/2, this.watchButton.y+200, "return_Hub");  
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
            this.huntTickets = this.add.sprite(0,0, 'huntTickets');
            this.huntTickets.alpha = 0;
            this.huntTickets.TapCount = 7;
            //this.fireWrite();     

            try{
              Tapdaq.isRewardedVideoReady("questlike-reward", function(ready) {
                if (ready) {
                  //this.extraCarve = parseInt(localStorage.getItem("letsCarve"))
                  localStorage.setItem("letsHunt",0)
                }
                else{
                  localStorage.setItem("letsHunt",1)
                }
              });   
            }
            catch(error){
      
            }    
            this.letsHunt = parseInt(localStorage.getItem("letsHunt"));    
               
            console.log("asd  "+this.letsHunt)

            this.transition = this.add.sprite(0, this.game.height,"transition");  
            this.transition.width = this.game.width
            this.transition.alpha = 1;     
            this.transition.scale.y *= -1;      
            this.returnKey = 0;  
            
    },

    update: function () {

      if(this.transition.alpha == 1){
        this.transition.y-=25
        if(this.transition.y <= -500){
          localStorage.setItem("fromHunt",1)
          if(this.returnKey == 2){
            this.game.state.start('game')    
          }
          else if(this.returnKey == 1){
            this.game.state.start('hub')    
          }
                  
        }
      }

         
      if(this.letsHunt == 1 || gameConfig.enableAds == false){
        localStorage.setItem("revengeHunt",1)
        this.watchButton.loadTexture("wardenHunt")
        this.optionText.text = "READY TO CONTINUE THE FIGHT?";
      }
      else{
        localStorage.setItem("revengeHunt",0)
        this.watchButton.loadTexture("watch")
        this.optionText.text = "WATCH AN AD TO CONTINUE THE FIGHT";
        
      }

      this.adReady = parseInt(localStorage.getItem("adReady"));
      if(this.adReady >= 1  || true){
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
        if(this.letsHunt == 1 || gameConfig.enableAds == false){
          this.ping.play() 
            if(this.bgSound.isPlaying){
                this.bgSound.stop();
                //this.introCheck = true;
            }                
   
          localStorage.setItem("hunterHP",3);
          this.transition.alpha = 1;
          this.transition.scale.y *= -1; 
          this.transition.y = this.game.height
          this.returnKey = 2
          //this.game.state.start('game')
        } 
        else{
          this.letsHunt = 1
          this.bgSound.stop();
          this.ping.play()          
          
          try{
            //getAds();
            //runRealMedia();//admob.rewardVideo.show()//getAds();
            //admob.rewardVideo.show()
            //admob.rewardVideo.show()

            Tapdaq.showRewardedVideo("questlike-reward", showOpts);
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
        /*if(this.score <= 0){
          console.log("test")
            this.ping.play();
            this.loseMusic.fadeOut(1000)
            this.menuClicked = true;
            //asdsad
            //localStorage.setItem('state','warden')
            localStorage.setItem("fromHunt",1)

            //this.game.state.start('hub')         
        }*/
        //this.fireWrite();
        this.bgSound.stop();
        this.ping.play()      
        try{
            admob.rewardvideo.remove()
        }
        catch(error){
        }      
              
        localStorage.setItem("hasLost",1);
        //localStorage.setItem('state','warden')
        localStorage.setItem("fromHunt",1)

        this.returnKey = 1
        this.transition.alpha = 1;
        this.transition.scale.y *= -1; 
        this.transition.y = this.game.height        
        //this.game.state.start('hub')            
	
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    },
    fireWrite: function() {
      for ( var i = 0, len = localStorage.length; i < (len); ++i ) {
        var key = localStorage.key(i) 
        //console.log(i+" "+key)
        var validation = key.includes(".");
        if(!validation && !key.includes(":")){
          //console.log("writing "+key+" to Database")
          try{
            firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData").update({
              [key]: localStorage.getItem(key)
            }); 
          }
          catch(e){
            //alert(e)
          }
           
        }

      }

     } 
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Lose = Lose;

}());
