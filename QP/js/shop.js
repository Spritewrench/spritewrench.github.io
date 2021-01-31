(function() {
  'use strict';

  function Shop() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Shop.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.map = this.add.sprite(0, 0, 'mainBG');
      this.map.width = this.game.width;
      this.map.height = this.game.height;        
      this.map.alpha = 1;
  
      var d = new Date();
      var date = d.getDate();
      var day = d.getDay();

      this.weekOfMonth = Math.ceil((date + 6 - day)/7);
      //console.log(guildItem.length) 
      if(this.weekOfMonth >= guildItem.length){
        this.weekOfMonth = 1
      }
      //console.log(this.weekOfMonth)
      
      this.title = localStorage.getItem("playerTitle")
      try{
          setupVideoReward()
          getAds()
      }
      catch(error){
        //admob.rewardVideo.show();   
      }      
      //demo
      localStorage.setItem("adReady",1) 
      
      localStorage.setItem("comebackChat",0)
      localStorage.setItem("purchase",1)
      //this.guildItem = this.add.sprite(25, this.guildItemText.y+50, guildItem[this.weekOfMonth].name);
      this.shopItem1 = this.add.sprite(-1000, 150, 'shopHunt0');
      this.shopItem1.width = 170
      this.shopItem1.height = 105
      
      this.shopItem1.anchor.setTo(0.5, 0.5);
      this.shopItem1.inputEnabled = true;
      this.shopItem1.events.onInputDown.add(this.buy1, this);    
       if (localStorage.getItem("currentEvent") === null ) {
         localStorage.setItem("currentEvent", Math.floor(Math.random() * 12)+1)
       }
       if (localStorage.getItem("adReady") === null ) {
         localStorage.setItem("adReady", 0)
       }      
      this.adReady = parseInt(localStorage.getItem("adReady"));
      this.shopEvent = parseInt(localStorage.getItem("currentEvent"));
      this.timeIcon = this.add.sprite(-1000, this.shopItem1.y+this.shopItem1.height, 'timer');
      this.timeIconText = this.add.text(-1000, this.shopItem1.y+this.shopItem1.height, "Available for 00:00 mins",{font:'LondrinaSolid-Black'});
      this.timeIconText.alpha = 1;
      this.timeIconText.fill= '#fff';
      this.timeIconText.fontSize = 20;
      //this.textBackdropText.anchor.setTo(0.5, 0.5); 
      //this.textBackdropText.align = 'center'
      this.timeIconText.wordWrap = true;
      this.timeIconText.wordWrapWidth = 200;            

      
      this.mapWarden = this.add.sprite(this.game.width, 0, 'guildShopkeep');
      this.mapWarden.width = this.game.width;
      this.mapWarden.height = this.game.height;     

      this.purchaseLimit = parseInt(localStorage.getItem("dailyPurchase"))
            
      
      

      this.returnButton = this.add.sprite(this.game.width/2, this.game.height-50, "return_Hub");  
      this.returnButton.anchor.setTo(0.5, 0.5); 
      this.returnButton.inputEnabled = true;
      this.returnButton.events.onInputDown.add(this.onDown, this);     
      
      this.textBackdrop = this.add.sprite(0, 0, 'textBackdrop');
      this.textBackdrop.width = this.game.width;
      this.textBackdrop.height = this.game.height;
      this.textBackdrop.alpha = 0;
      this.textBackdrop.inputEnabled = true;
      this.textBackdrop.events.onInputDown.add(this.hideChat, this);   

      this.textBackdropText = this.add.text(this.game.width/2, this.game.height-125, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
      this.textBackdropText.alpha = 0;
      this.textBackdropText.fill= '#fff';
      this.textBackdropText.fontSize = 28;
      this.textBackdropText.anchor.setTo(0.5, 0.5); 
      this.textBackdropText.align = 'center'
      this.textBackdropText.wordWrap = true;
      this.textBackdropText.wordWrapWidth = this.textBackdrop.width-80;      

      this.textBackdropText2 = this.add.text(10,this.textBackdropText.y-100, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
      this.textBackdropText2.alpha = 0;
      this.textBackdropText2.fill= '#FF8900';
      this.textBackdropText2.fontSize = 24;
      this.textBackdropText2.align = 'center'
      this.textBackdropText2.wordWrap = true;
      this.textBackdropText2.wordWrapWidth = this.textBackdrop.width-80;       
      this.textBackdropText2.text = "Lynnenne, The Shopkeep"
      this.textBackdropText.text = "Welcome to the Guild Shop, <<"+this.title+">>.\nWhat do ya need?"
      if (parseInt(localStorage.getItem("firstVisit-shopOom")) == 1 ) {
          this.textBackdropText.text = "That's it for your daily rations. Check back tomorrow."
          //this.chatTimer = 1;  
          //localStorage.setItem("firstVisit-shopOom",1);
         // localStorage.setItem("firstVisit-rank",1);
          /*setTimeout(function () {
          alert("Welcome to the Guild Hall.\nSubmit resources to the guild to increase your HUNTER RANK. A higher RANK means that you fight stronger monsters but get better LOOT!\n Are you ready to become the World's Top-Ranked Hunter?")
          }, 4000);     
          */
      }      
      this.chatTimer = 1;
      
      this.bgSound = this.add.audio('giftMusic');
      this.ping = this.add.audio('ping');

      if(!this.bgSound.isPlaying){
          this.bgSound.loop = true;
          this.bgSound.play();
          this.bgSound.volume = 0.5;
          //this.introCheck = true;
      }       
      
      //firebase.database().ref('player/' +localStorage.getItem("userID")).update({
       // rank: this.currentRank
      //});       
  if (localStorage.getItem("firstVisit-rank") === null ) {
     // localStorage.setItem("firstVisit-rank",1);
      /*setTimeout(function () {
      alert("Welcome to the Guild Hall.\nSubmit resources to the guild to increase your HUNTER RANK. A higher RANK means that you fight stronger monsters but get better LOOT!\n Are you ready to become the World's Top-Ranked Hunter?")
      }, 4000);     
      */

  }  
    },

    update: function () {
      
      this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
      this.shopItem1.loadTexture("shop"+this.shopEvent)
      this.adReady = parseInt(localStorage.getItem("adReady"));
      if(this.adReady >= 1  ){
        this.shopItem1.x += (this.game.width/2 - this.shopItem1.x) * 0.1; 
        this.timeIcon.x += ((this.game.width/2-50) - this.timeIcon.x) * 0.1; 
        this.timeIconText.x += (this.game.width/2 - this.timeIconText.x) * 0.1; 
      }
      else{
        this.shopItem1.x += (-1000 - this.mapWarden.x) * 0.1; 
        this.timeIcon.x += (-1000 - this.timeIcon.x) * 0.1; 
        this.timeIconText.x += (-1000 - this.timeIconText.x) * 0.1;         
      }

      var d = new Date();
      var n = d.getHours();   
      var m = d.getMinutes();
      var s = d.getSeconds();
      //console.log((60*60)-(m*60))
      //console.log(s)
      
      var min =""
      var sec =""
      if(60-m < 10){
        min = "0"+(60-m)
      }
      else{
        min =60-m
      }
      if(59-s < 10){
        sec = "0"+(59-s)
      }    
      else{
        sec = 59-s
      }
      this.timeIconText.text="Available for "+min+":"+sec+" mins"
      if( (60*60)-(m*60) <= 0){
        localStorage.setItem("currentEvent", Math.floor(Math.random() * 12)+1)
        this.shopEvent = parseInt(localStorage.getItem("currentEvent"));
        localStorage.setItem("dailyPurchase",1)
      }
              
  
      
          if(this.chatTimer > 0){           
            this.textBackdrop.alpha = 1;
            this.textBackdropText.alpha = 1;
            this.textBackdropText2.alpha = 1;
            this.textBackdrop.x = 0;
 
            //this.submitButton.alpha = 0;
            this.returnButton.alpha = 0;       
          } 
          else{
            //this.submitButton.alpha = 1;
            this.returnButton.alpha = 1;
            this.textBackdrop.alpha = 0;
            this.textBackdropText.alpha = 0;
            this.textBackdropText2.alpha = 0
            this.textBackdrop.x = this.game.width;            
            
          }
      
          if(parseInt(localStorage.getItem("purchase")) == 0){
            var daily = parseInt(localStorage.getItem("dailyPurchase"))
            //localStorage.setItem("dailyPurchase",daily)
            this.textBackdropText.text = "Good doing business with ya. Check back in "+min+":"+sec+" mins"
            this.chatTimer = 1;      
            localStorage.setItem("purchase",1)
            //localStorage.setItem("adReady",0)
          }   
      
          this.purchaseLimit = parseInt(localStorage.getItem("dailyPurchase"))
          
          if(this.purchaseLimit <= 0 && parseInt(localStorage.getItem("comebackChat")) == 0 ){
            this.purchaseLimit = 0
            console.log("HEY")
            localStorage.setItem("adReady",0)
            this.textBackdropText.text = "That's it for now. Check back in "+min+":"+sec+" mins"
            localStorage.setItem("comebackChat",1)
            this.chatTimer = 1;              
          
          }
          if(parseInt(localStorage.getItem("comebackChat")) == 1){
            localStorage.setItem("adReady",0)
          }

    },
    submit: function () {
      

    }
    , hideChat: function (unit) {
        this.chatTimer = 0;
        
        
  if (localStorage.getItem("firstVisit-shop") === null ) {
      this.textBackdropText.text = "Feel free to select any of our wares in exchange for a word from our sponsors"
      this.chatTimer = 1;  
      localStorage.setItem("firstVisit-shop",1);
      //localStorage.setItem("purchase",1)
     // localStorage.setItem("firstVisit-rank",1);
      /*setTimeout(function () {
      alert("Welcome to the Guild Hall.\nSubmit resources to the guild to increase your HUNTER RANK. A higher RANK means that you fight stronger monsters but get better LOOT!\n Are you ready to become the World's Top-Ranked Hunter?")
      }, 4000);     
      */
  }
       
        //this.wardenHunt.width = 460;
        //this.wardenHunt.height = 260;  
        //this.wardenHunt.clicked = true;     
        //this.game.state.start('game') 

    }
    ,     
    buy1: function () {       
        localStorage.setItem("purchase",this.shopEvent)
        //console.log(admob.interstitial._config)         
        this.bgSound.stop();
        this.ping.play()     
        
        try{
            //getAds();
             admob.rewardVideo.show()
        }
        catch(error){
          //admob.rewardVideo.show();   
        }       
    }    
    ,     
    buy2: function () {      
        localStorage.setItem("purchase",2)
        
        this.bgSound.stop();
        this.ping.play()      
        
        try{
            getAds();
        }
        catch(error){
          //admob.rewardVideo.show();   
        }           
    }    
    ,     
    buy3: function () {    
        localStorage.setItem("purchase",3)
      
        this.bgSound.stop();
        this.ping.play()  
        
        try{
            getAds();
        }
        catch(error){
          //admob.rewardVideo.show();   
        }        
    }    
    ,     
    onDown: function () {
     //localStorage.setItem('state','warden')
      this.ping.play();
      this.bgSound.stop();       
      try{
          admob.rewardvideo.remove()
      }
      catch(error){
      }    
     localStorage.setItem("comebackChat",0)  
     this.game.state.start('hub')
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
  window['simplewar'].Shop = Shop;

}());
