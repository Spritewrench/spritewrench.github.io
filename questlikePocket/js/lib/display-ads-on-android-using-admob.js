
function setupVideoReward(){
  Tapdaq = cordova.require("cordova-plugin-tapdaq.Tapdaq");

  config = {     
      ios: {
          appId: "YOUR_IOS_APP_ID",
          clientKey: "YOUR_IOS_CLIENT_KEY"
      },
      android: {
          appId: "600afe05593fb88acdc78f8e",
          clientKey: "6873e412-cdb2-433f-8892-8459cb33e2a1"
      }
      , logLevel: Tapdaq.LogLevel.Debug
  };

  setupEvents();

        

  Tapdaq.init(config, opts)         
  
  //admob.setDevMode(true)
  
  
  
 
}
function getAds(){
  //admob.setDevMode(true)
  //admob.rewardVideo.show(
  if(true){
    //setupEvents();
    Tapdaq.loadRewardedVideo("questlike-reward", loadOpts);
    
    localStorage.setItem("adReady",1)     
  }

}

function setupEvents(){
  opts = {
    didInitialise: function() {
        // Tapdaq has initialised
    },
    didFailToInitialise: function(error) {
        // Tapdaq failed to initialised
    }
    
  };

loadOpts = {
    didLoad: function(response) {
        console.log(response)
        // rewarded video is loaded
    },
    didFailToLoad: function(error, response) {
        // rewarded video failed to load
        console.log(error)
    }
};  
  showOpts = {
    willDisplay: function(response) {
    },
    didDisplay: function(response) {
    },
    didFailToDisplay: function(error, response) {
    },
    didClick: function(response) {
    }, 
    didValidateReward: function(response) {
      adEvent="extraCarveReward"
      //console.log(admob.rewardvideo.events);
      //console.log(event)
      //extra carve check
      extraCarve = parseInt(localStorage.getItem("letsCarve"))
      if(extraCarve == 0){
        localStorage.setItem("letsCarve",1);
        localStorage.setItem('state','win')
        // send ad event - reward recieved   
        try{     
          if(!gameConfig.isDebug ){
          gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.Show, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);          
          gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.RewardReceived, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);     
          }     
        }
        catch(e){

        } 
        //getAds();        
        //window.location.href = 'index3.html'
      }
      
      //this.Phaser.GAMES[0].state.start('game')
      //Phaser.game.state.start('game');
      //localStorage.setItem('state','game')
      //window.location.href = "index3.html";
      localStorage.setItem("letsHunt",1);//this.game.state.start('warden')   
      getTix = parseInt(localStorage.getItem("purchase"))
      purchaseLimit = parseInt(localStorage.getItem("dailyPurchase"))
      
      if(getTix >= 1 ){
        adEvent="shopReward"
      }
      else{
        adEvent="revengeHuntReward"
      }

      if(getTix >= 1 && getTix <= 4){
        localStorage.setItem("TixCount0",parseInt(localStorage.getItem("TixCount0"))+5);
        if(localStorage.getItem(deadMonster[0][getTix].commonRewards[2]+" Count") === null ) {
           localStorage.setItem(deadMonster[0][getTix].commonRewards[2]+" Count",0);
        }         
        count = parseInt(localStorage.getItem(deadMonster[0][getTix].commonRewards[2]+" Count"))
        localStorage.setItem(deadMonster[0][getTix].commonRewards[2]+" Count",count+5);
        amount = purchaseLimit-1
        if(amount <= 0){
          amount = 0
        }
        amount = 0
        localStorage.setItem("dailyPurchase",amount)
        localStorage.setItem("purchase",0)
        localStorage.setItem("adReady",0)
        //getAds();
      }
      else if(getTix >= 5 && getTix <= 8){
        localStorage.setItem("TixCount1",parseInt(localStorage.getItem("TixCount1"))+5);
        if(localStorage.getItem(deadMonster[1][getTix-4].commonRewards[2]+" Count") === null ) {
           localStorage.setItem(deadMonster[1][getTix-4].commonRewards[2]+" Count",0);
        }          
        count = parseInt(localStorage.getItem(deadMonster[1][getTix-4].commonRewards[2]+" Count"))     
        localStorage.setItem(deadMonster[1][getTix-4].commonRewards[2]+" Count",count+5);        
        amount = purchaseLimit-1
        if(amount <= 0){
          amount = 0
        }
        amount = 0
        localStorage.setItem("dailyPurchase",amount)
        localStorage.setItem("purchase",0)
        localStorage.setItem("adReady",0)
        //getAds();
      }    
      else if(getTix >= 9 && getTix <= 12){
        localStorage.setItem("TixCount2",parseInt(localStorage.getItem("TixCount2"))+5);
        if(localStorage.getItem(deadMonster[2][getTix-8].commonRewards[2]+" Count") === null ) {
           localStorage.setItem(deadMonster[2][getTix-8].commonRewards[2]+" Count",0);
        }        
        count = parseInt(localStorage.getItem(deadMonster[2][getTix-8].commonRewards[2]+" Count"))
              
        localStorage.setItem(deadMonster[2][getTix-8].commonRewards[2]+" Count",count+5);              
        amount = purchaseLimit-1
        if(amount <= 0){
          amount = 0
        }
        amount = 0
        localStorage.setItem("dailyPurchase",amount)
        localStorage.setItem("purchase",0)  
        localStorage.setItem("adReady",0)
        

      }
      //infinite shop views
      localStorage.setItem("dailyPurchase",1)
      //localStorage.setItem("purchase",1)  
      localStorage.setItem("adReady",1)    
      // send ad event - reward recieved       
      try{    
        if(!gameConfig.isDebug ){   
        gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.Show, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);          
        gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.RewardReceived, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);     
        }   
      }
      catch(e){}
             
    },
    didClose: function(response) {
      //getAds();
    }
};

}