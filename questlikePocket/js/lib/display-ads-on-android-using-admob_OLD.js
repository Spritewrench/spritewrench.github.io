
function setupVideoReward(){
  setupEvents();
  //admob.setDevMode(true)
  
  
  
 
}
function getAds(){
  //admob.setDevMode(true)
  //admob.rewardVideo.show(
  if(true){
    admob.rewardVideo.load({
      id: {
        // replace with your ad unit IDs
        android: 'ca-app-pub-2858188321872912/7956603802'
      },
    }).then(() => localStorage.setItem("adReady",1) );      
  }
 
}

function setupEvents() {
  //console.log("setting up ...")
  document.addEventListener('admob.reward_video.load_fail',
    function (event) {
      //alert(event)
    }
  );

  document.addEventListener('admob.reward_video.load',
    function (event) {

    }
  );

  document.addEventListener('admob.reward_video.open',
    function (event) {

    }
  );

  document.addEventListener('admob.reward_video.close',
    function (event) {
      console.log('events.CLOSE');
      
      //setupVideoReward();
      //this.Phaser.GAMES[0].state.start('lose')
      //localStorage.setItem('state','lose')
      //window.location.href = "index3.html";    
    }
  );

  document.addEventListener('admob.reward_video.exit_app',
    function (event) {
      //alert('events.EXIT_APP');
      //localStorage.setItem("pause",0);
      
    }
  );

  /* only works if admob detects that the user has finished watching the whole reward video else it will do nothing */
  document.addEventListener('admob.reward_video.reward',
    function (event) {
      var adEvent="extraCarveReward"
      //console.log(admob.rewardvideo.events);
      //console.log(event)
      //extra carve check
      var extraCarve = parseInt(localStorage.getItem("letsCarve"))
      if(extraCarve == 0){
        localStorage.setItem("letsCarve",1);
        localStorage.setItem('state','win')
        // send ad event - reward recieved        
        gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.Show, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);          
        gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.RewardReceived, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);           
        getAds();        
        window.location.href = 'index3.html'
      }
      
      //this.Phaser.GAMES[0].state.start('game')
      //Phaser.game.state.start('game');
      //localStorage.setItem('state','game')
      //window.location.href = "index3.html";
      localStorage.setItem("letsHunt",1);//this.game.state.start('warden')   
      var getTix = parseInt(localStorage.getItem("purchase"))
      var purchaseLimit = parseInt(localStorage.getItem("dailyPurchase"))
      
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
        var count = parseInt(localStorage.getItem(deadMonster[0][getTix].commonRewards[2]+" Count"))
        localStorage.setItem(deadMonster[0][getTix].commonRewards[2]+" Count",count+5);
        var amount = purchaseLimit-1
        if(amount <= 0){
          amount = 0
        }
        amount = 0
        localStorage.setItem("dailyPurchase",amount)
        localStorage.setItem("purchase",0)
        localStorage.setItem("adReady",0)
        getAds();
      }
      else if(getTix >= 5 && getTix <= 8){
        localStorage.setItem("TixCount1",parseInt(localStorage.getItem("TixCount1"))+5);
        if(localStorage.getItem(deadMonster[1][getTix-4].commonRewards[2]+" Count") === null ) {
           localStorage.setItem(deadMonster[1][getTix-4].commonRewards[2]+" Count",0);
        }          
        var count = parseInt(localStorage.getItem(deadMonster[1][getTix-4].commonRewards[2]+" Count"))     
        localStorage.setItem(deadMonster[1][getTix-4].commonRewards[2]+" Count",count+5);        
        var amount = purchaseLimit-1
        if(amount <= 0){
          amount = 0
        }
        amount = 0
        localStorage.setItem("dailyPurchase",amount)
        localStorage.setItem("purchase",0)
        localStorage.setItem("adReady",0)
        getAds();
      }    
      else if(getTix >= 9 && getTix <= 12){
        localStorage.setItem("TixCount2",parseInt(localStorage.getItem("TixCount2"))+5);
        if(localStorage.getItem(deadMonster[2][getTix-8].commonRewards[2]+" Count") === null ) {
           localStorage.setItem(deadMonster[2][getTix-8].commonRewards[2]+" Count",0);
        }        
        var count = parseInt(localStorage.getItem(deadMonster[2][getTix-8].commonRewards[2]+" Count"))
              
        localStorage.setItem(deadMonster[2][getTix-8].commonRewards[2]+" Count",count+5);              
        var amount = purchaseLimit-1
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
      gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.Show, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);          
      gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.RewardReceived, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);        
      getAds();    
    }
  );
  //console.log("... complete")
}