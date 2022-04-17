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
            //setupVideoReward()
            //getAds()
        }
        catch(error){
          //admob.rewardVideo.show();   
        }      
        localStorage.setItem("letsCarve",1);
        
        localStorage.setItem("comebackChat",0)
        localStorage.setItem("purchase",1)
  
     
  
        //this.guildItem = this.add.sprite(25, this.guildItemText.y+50, guildItem[this.weekOfMonth].name);
        this.shopTrade = this.add.sprite(2000, 220, 'shopTrade0');
        this.shopTrade.width = 200
        this.shopTrade.height = 135
        this.shopTrade.anchor.setTo(0.5, 0.5);
        this.shopTrade.inputEnabled = true;
        this.shopTrade.events.onInputDown.add(this.trade, this); 
  
        this.shopItem1 = this.add.sprite(-1000, 180, 'shopHunt0');
        this.shopItem1.width = 170
        this.shopItem1.height = 105
        this.shopItem1.anchor.setTo(0.5, 0.5);
        this.shopItem1.inputEnabled = true;
        this.shopItem1.events.onInputDown.add(this.buy1, this); 
        
        this.shopItem2 = this.add.sprite(-1000, this.shopItem1.y+100, 'shopHunt1');
        this.shopItem2.width = 170
        this.shopItem2.height = 105
        this.shopItem2.anchor.setTo(0.5, 0.5);
        this.shopItem2.inputEnabled = true;
        this.shopItem2.events.onInputDown.add(this.buy2, this); 
        
        this.shopItem3 = this.add.sprite(-1000, this.shopItem2.y+100, 'shopHunt2');
        this.shopItem3.width = 170
        this.shopItem3.height = 105
        this.shopItem3.anchor.setTo(0.5, 0.5);
        this.shopItem3.inputEnabled = true;
        this.shopItem3.events.onInputDown.add(this.buy3, this);     
        
        this.shopItem4 = this.add.sprite(-1000, 220, 'shopTradeBlue');
        this.shopItem4.width = 200
        this.shopItem4.height = 135
        this.shopItem4.anchor.setTo(0.5, 0.5);
        this.shopItem4.inputEnabled = true;
        this.shopItem4.events.onInputDown.add(this.tradePrint, this);       
  
        this.shopItem5 = this.add.sprite(-1000, this.shopItem2.y+50, 'shopHunt3');
        this.shopItem5.width = 170
        this.shopItem5.height = 105
        this.shopItem5.anchor.setTo(0.5, 0.5);
        this.shopItem5.inputEnabled = true;
        this.shopItem5.events.onInputDown.add(this.buy4, this);       
  
  
        
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
        this.textBackdropText.fontSize = 24;
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
        this.textBackdropText.text = "Welcome to the Guild Shop, <<"+this.title+">>."
        this.chatTimer = 1;
    //real life purchase
    var vp = parseInt(localStorage.getItem("veteranPoints"))
    var tixCount = parseInt(localStorage.getItem("TixCount0"))+parseInt(localStorage.getItem("TixCount1"))+parseInt(localStorage.getItem("TixCount2"))
    console.log(vp+" "+tixCount )
    if(vp < 250 && tixCount <= 0){
      this.textBackdropText.text += "\n All out of tickets AND VP?"
      this.showRealCash = true;
      this.chatTimer = 2;
    }
    else{
      this.showRealCash = false;
      this.textBackdropText.text += "\nHere you can trade Veteran Points for hunting tickets"
    }
    
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
    this.veteranRank = this.add.sprite(this.game.width/2-125,90, 'vetRank');
    this.veteranRank.width = 40
    this.veteranRank.height = 40         
  
    this.veteranRankText = this.add.text(this.game.width/2, 110, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
    this.veteranRankText.fill= '#fff';
    this.veteranRankText.fontSize = 20;
    this.veteranRankText.anchor.setTo(0.5, 0.5); 
  
    this.veteranPointText = this.add.text(this.game.width/2, 130, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
    this.veteranPointText.fill= '#97B7F2';
    this.veteranPointText.fontSize = 18;
    this.veteranPointText.anchor.setTo(0.5, 0.5);    
  
    this.veteranRankHolder = parseInt(localStorage.getItem("veteranRank"));
    this.veteranPointHolder = parseInt(localStorage.getItem("veteranPoints"))
  
    this.veteranRankHolder2 = parseInt(localStorage.getItem("veteranRank"));
    this.veteranPointHolder2 = parseInt(localStorage.getItem("veteranPoints"))              
  
      },
  
      update: function () {
        
        this.textBackdropText.x = Math.floor( this.textBackdropText.x )
        this.textBackdropText.y = Math.floor( this.textBackdropText.y )
        //this.textBackdropText.smoothed = false
        
        this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
        this.adReady = parseInt(localStorage.getItem("adReady"));
  
        this.shopTrade.x += (this.game.width/2+100 - this.shopTrade.x) * 0.1; 
        //this.showRealCash
        if( false){
          this.shopItem1.x += (this.game.width/2-100 - this.shopItem1.x) * 0.1; 
          this.shopItem2.x += (this.game.width/2-100 - this.shopItem2.x) * 0.1; 
          this.shopItem3.x += (this.game.width/2-100 - this.shopItem3.x) * 0.1; 
        }
        this.shopItem4.x += (this.game.width/2-110 - this.shopItem4.x) * 0.1; 
        this.shopItem5.x += (this.game.width/2-100 - this.shopItem5.x) * 0.1; 
  
        if (localStorage.getItem("veteranRank") === null) {
          localStorage.setItem("veteranRank", 0)
        }   
        if (localStorage.getItem("veteranPoints") === null) {
          localStorage.setItem("veteranPoints", 0)
        }   
  
        this.veteranRankHolder = parseInt(localStorage.getItem("veteranRank"));
        this.veteranPointHolder = parseInt(localStorage.getItem("veteranPoints"))
  
        if(this.veteranPointHolder > this.veteranPointHolder2){
          var difference = this.veteranPointHolder - this.veteranPointHolder2
          if(difference > 10000){
            this.veteranPointHolder2+=10000
          }
          else if(difference > 1000){
            this.veteranPointHolder2+=1000
          }            
          else if(difference > 100){
            this.veteranPointHolder2+=100
          }
          else if(difference > 10){
            this.veteranPointHolder2+=10
          }
          else{
            this.veteranPointHolder2++
          }            
          
        }
        if(this.veteranPointHolder < this.veteranPointHolder2){
          var difference = this.veteranPointHolder2 - this.veteranPointHolder
          if(difference > 10000){
            this.veteranPointHolder2-=10000
          }
          else if(difference > 1000){
            this.veteranPointHolder2-=1000
          }            
          else if(difference > 100){
            this.veteranPointHolder2-=100
          }
          else if(difference > 10){
            this.veteranPointHolder2-=10
          }
          else{
            this.veteranPointHolder2--
          }   
        }          
  
        if(this.veteranPointHolder2 < 0){
          this.veteranPointHolder2 = 0;
        } 
          
        this.veteranPoints = this.veteranPointHolder               
        this.veteranRankText.text = "Veteran Rank: "+this.veteranRankHolder2
        this.veteranPointText.text = "Veteran Points: "+this.veteranPointHolder2
    
        var d = new Date();
        var date = d.getDate();
        var day = d.getDay();
        var size = 3;
        //console.log(day)
        day = 0;
        if(day > size){
          ////console.log( deadMonster[this.biome])
          ////console.log("asd "+Math.floor(date/( deadMonster[this.biome].length-1)))
          ////console.log("asasd "+(deadMonster[this.biome].length-1))
          day -= Math.floor(day/( size))*( size)
          if(day <= 0){
            //date = 1;
          }                  
        } 
        this.day = day;
        //console.log("update "+day)
        if(this.veteranPoints < 250){
          this.shopTrade.loadTexture("shopTrade-no")
        }    
        else{
          this.shopTrade.loadTexture("shopTrade")
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
              //this.textBackdropText.text = "Good doing business with ya. Check back in "+min+":"+sec+" mins"
              this.textBackdropText.text = "Good doing business with ya."
              this.chatTimer = 1;      
              localStorage.setItem("purchase",1)
              //localStorage.setItem("adReady",0)
            }   
        
            this.purchaseLimit = parseInt(localStorage.getItem("dailyPurchase"))
            
            if(this.purchaseLimit <= 0 && parseInt(localStorage.getItem("comebackChat")) == 0 ){
              this.purchaseLimit = 0
              console.log("HEY")
              //localStorage.setItem("adReady",0)
              //this.textBackdropText.text = "That's it for now. Check back in "+min+":"+sec+" mins"
              this.textBackdropText.text = "Come again!"
              //localStorage.setItem("comebackChat",1)
              this.chatTimer = 1;              
            
            }
            if(parseInt(localStorage.getItem("comebackChat")) == 1){
              //localStorage.setItem("adReady",0)
            }
  
      },
      submit: function () {
        
  
      }
      , hideChat: function (unit) {
        
        if(this.chatTimer == 2){
          //\n You can always purchase tickets for real world cash ...
          this.textBackdropText.text = "Never fear!"
          this.chatTimer = 3
        }
        else if(this.chatTimer == 3){
          this.textBackdropText.text = "... You can always trade with Jean, the Collector at the Guild Hall"
          this.chatTimer++;
        }    
        else if(this.chatTimer == 4){
          this.textBackdropText.text = "... or comeback tomorrow for the DAILY BONUS Giveaway"
          this.chatTimer++;
        }           
        else{
          this.chatTimer = 0;
        }
        
          
          
    if (localStorage.getItem("firstVisit-shop") === null ) {
        this.textBackdropText.text = "Feel free to select any of our wares"
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
          store.order('my_consumable1');
          /*localStorage.setItem("purchase",this.shopEvent)
          //console.log(admob.interstitial._config)         
          this.bgSound.stop();
          this.ping.play()     
          
          try{
              //getAds();
              //admob.rewardVideo.show()
              Tapdaq.showRewardedVideo("questlike-reward", showOpts);
          }
          catch(error){
            //admob.rewardVideo.show();   
          }     
          */  
      }    
      ,     
      buy2: function () {      
        store.order('my_consumable2');         
      }    
      ,     
      buy3: function () {    
        store.order('my_consumable3');         
      }    
      ,      
      buy4: function () {    
        store.order('my_consumable4');         
      }    
      ,     
      trade: function () {      
        console.log("!!!")
        //store.order('my_consumable2');         
        if(this.veteranPoints >= 250){
          this.ping.play();
          localStorage.setItem("veteranPoints", this.veteranPoints-250);
          //localStorage.setItem("TixCount"+this.day,parseInt(localStorage.getItem("TixCount"+this.day))+10);
          localStorage.setItem("TixCount0",parseInt(localStorage.getItem("TixCount0"))+10);
          localStorage.setItem("TixCount1",parseInt(localStorage.getItem("TixCount1"))+10);
          localStorage.setItem("TixCount2",parseInt(localStorage.getItem("TixCount2"))+10);
          var location = ""
          switch(this.day){
            case 0:
              location = "Grassland"
              break;
            case 1:
              location = "Cave"
              break;
            case 2:
              location = "Mountain"
              break;                          
  "Grassland Tickets x 15\nCave Tickets x 15\nMountain Tickets x 15"
          }
          //this.textBackdropText.text = "Here you go \n"+location+" Hunting Tickets x10\n Remember to check back in for DAILY deals!"
          this.textBackdropText.text = "Here you go\nGrassland Tickets x 10\nCave Tickets x 10\nMountain Tickets x 10"
          //localStorage.setItem("comebackChat",1)
          this.chatTimer = 1;           
        }      
        else{
          this.textBackdropText.text = "You don't have enough Veteran Points. Talk to Jean, the Collector at the Guild Hall. She'll be sure to help."
          //localStorage.setItem("comebackChat",1)
          this.chatTimer = 1;          
        }    
      }    
      ,   
      tradePrint: function () {      
        console.log("!!!")
        //store.order('my_consumable2');         
        if(this.veteranPoints >= 1000){
          this.ping.play();
          localStorage.setItem("veteranPoints", this.veteranPoints-1000);
          //localStorage.setItem("TixCount"+this.day,parseInt(localStorage.getItem("TixCount"+this.day))+10);
          localStorage.setItem("blueprintCount",parseInt(localStorage.getItem("blueprintCount"))+10);
  
          this.textBackdropText.text = "Here you go\nBlueprint x 10\nUse these to upgrade your weapon's level"
          //localStorage.setItem("comebackChat",1)
          this.chatTimer = 1;           
        }      
        else{
          this.textBackdropText.text = "You don't have enough Veteran Points. Talk to Jean, the Collector at the Guild Hall. She'll be sure to help."
          //localStorage.setItem("comebackChat",1)
          this.chatTimer = 1;          
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
      , fireWrite: function () {
        this.huntTickets.TapCount++
        if(this.huntTickets.TapCount >= 6){
          this.huntTickets.TapCount = 0;
          for ( var i = 0, len = localStorage.length; i < (len); ++i ) {
            var key = localStorage.key(i) 
            //console.log(i+" "+key)
            var validation = key.includes(".");
            if(!validation && !key.includes(":")){
              //console.log("writing "+key+" to Database")
              firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData").update({
                [key]: localStorage.getItem(key)
              });                
            }
  
          }
          //alert("Local data snapshot uploaded")
        }
  
      }    
    };
  
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Shop = Shop;
  
  }());
  