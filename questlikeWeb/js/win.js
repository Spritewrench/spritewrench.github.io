(function() {
  'use strict';

  function Win() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Win.prototype = {

    create: function () {
      try{
        //localStorage.setItem("adReady",0)  
        //setupVideoReward();
        getAds();        
      }
      catch(error){
        //admob.rewardvideo.show();   
      }    
          
       
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.biome = parseInt(localStorage.getItem("Markerbiome"));
      this.map = this.add.sprite(0, 0, 'BG'+localStorage.getItem("Markerbiome"));
      this.map.alpha = 0.5;
      this.legendOverlay = this.add.sprite(0, 0, 'legendOverlay');
      this.legendOverlay.width = this.game.width;
      this.legendOverlay.height = this.game.height;           
     
      //this.map = this.add.sprite(0, 0, 'mainBG');
      this.map.width = this.game.width;
      this.map.height = this.game.height;        
      this.map.alpha = 1;
      this.extraCarve = parseInt(localStorage.getItem("letsCarve"))
      if(this.extraCarve == 0){
        localStorage.setItem("monCount",parseInt(localStorage.getItem("monCount"))+1)
      }
      localStorage.setItem("hasWon",1)
      
      //localStorage.setItem("firstVisit-combat-lose",1);

      //interstitial
      if(parseInt(localStorage.getItem("monCount"))%5 == 0 ){
        try{
          //Tapdaq.showInterstitial("questlike-interstitial");
        }
        catch(error){

        }

      }

      //5th hunt bonus
      if(parseInt(localStorage.getItem("monCount"))%5 == 0 && parseInt(localStorage.getItem("monCount")) != 0){
        //localStorage.setItem("moneExp", parseInt(localStorage.getItem("moneExp"))*5)
      }     
      else{
        //localStorage.setItem("moneExp", parseInt(localStorage.getItem("moneExp"))*1)
      } 

      localStorage.setItem("ExpTotal",parseInt(localStorage.getItem("ExpTotal"))+ parseInt(localStorage.getItem("moneExp")) );
      //this.hasLost = parseInt(localStorage.getItem("hasLost"))
      //this.slay= this.add.sprite(0, 0, 'slay_'+localStorage.getItem("monSize"));  
      //this.slay.width = this.game.width;
      //this.slay.height = this.game.height; 
      
      if (localStorage.getItem("letsCarve") === null) {
        localStorage.setItem("letsCarve",0);
      }  

      if(parseInt(localStorage.getItem("firstVisit-tut")) < 3){
        localStorage.setItem("firstVisit-tut",parseInt(localStorage.getItem("firstVisit-tut"))+1);
      }      
      

      if(parseInt(localStorage.getItem("firstVisit-combat")) < 31){
        localStorage.setItem("firstVisit-tut",3); 
        
        
      }
      else{
        try{
          if(!gameConfig.isDebug){    

            
          var param = new Object();
          param.huntNumber = localStorage.getItem("huntNum");
          GameAnalytics("addProgressionEvent", "Complete", "huntSuccess","","",localStorage.getItem("huntNum"));  
          facebookConnectPlugin.logEvent("huntSuccess", param, 1, function (success){ console.log(success)}, function (fail){ console.log(fail)})
          }
        }
        catch(e){

        }          
      }
      

      this.shinyGet = parseInt(localStorage.getItem("shinyGet"));
      if(this.shinyGet == 1){
        this.showShiny = this.add.sprite(0, 0, 'isShiny');
        this.showShiny.width = this.game.width;
        this.showShiny.height = this.game.height;           
      }
      this.hubBonus3 = this.add.sprite(this.game.width/2+35,this.game.height/2-350 , 'hubBonus3-0'); 
      this.hubBonus3.anchor.setTo(0.5, 0.5); 
      this.newPlace = 3//parseInt(localStorage.getItem("newPlace"))
      if(this.newPlace == 1){
        this.hubBonus3.loadTexture("hubBonus3-0")
      }
      else{
        this.hubBonus3.loadTexture("hubBonus3-1")
      }  
      this.hubBonus3.alpha = 0

 

      //this.monRewardCount= this.add.sprite(0, 50, 'monRewardCount_'+localStorage.getItem("monSize"));  
      //this.monRewardCount.width = this.game.width;
      //this.monRewardCount.height = this.game.height;       
      this.markedMon = parseInt(localStorage.getItem("markedMon"))
      this.huntBonus = 1;

      if(parseInt(localStorage.getItem("surgeUnlock")) >= 1){
        var surgedMon = localStorage.getItem("monBonus")
        var currentMon = this.biome+"-"+this.markedMon

        console.log("TEST "+ surgedMon.localeCompare(currentMon))
        if(surgedMon.localeCompare(currentMon) == 0 ){
          this.huntBonus = gameConfig.rewardBonus;
        }

      }

      
      this.monName = this.add.text(x, 50, "YOU HAVE SLAIN A",{font:'LondrinaSolid-Black'});
      this.monName.fill= '#fff';
      this.monName.fontSize = 40;
      this.monName.anchor.setTo(0.5, 0.5); 
      
      this.monSize = localStorage.getItem("monSize")
      this.monSizeName = this.add.text(x, this.monName.y+50, this.monSize.toUpperCase(),{font:'LondrinaSolid-Black'});
      this.monSizeName.fill= '#BDBDBD';
      this.monSizeName.fontSize = 40;
      this.monSizeName.anchor.setTo(0.5, 0.5);       
      
      this.monTypeName = localStorage.getItem("monNameTitle")
      this.monTypeName = this.add.text(x, this.monSizeName.y+50, this.monTypeName.toUpperCase(),{font:'LondrinaSolid-Black'});
      this.monTypeName.fill= '#FF8900';
      this.monTypeName.fontSize = 40;
      this.monTypeName.anchor.setTo(0.5, 0.5); 

        //media breakpoint
        if(window.innerHeight < 700){
          var space = 40;
          this.monName.y = space
          this.monSizeName.y = this.monName.y+space
          this.monTypeName.y = this.monSizeName.y+space

          this.monName.fontSize = 32;
          this.monSizeName.fontSize = 32;
          this.monTypeName.fontSize = 32;
        }
        else{
          var space = 50;
          this.monName.y = space
          this.monSizeName.y = this.monName.y+space
          this.monTypeName.y = this.monSizeName.y+space

          this.monName.y = 50
          this.monName.fontSize = 40;
          this.monSizeName.fontSize = 40;
          this.monTypeName.fontSize = 40;
        }      
      
      //this.monSize = localStorage.getItem("monSize")
      this.rewardText = this.add.text(x, this.monTypeName.y+50, "",{font:'LondrinaSolid-Black'});
      this.rewardText.fill= '#fff';
      this.rewardText.fontSize = 30;
      this.rewardText.anchor.setTo(0.5, 0.5);          
      
      this.commonRewardName = this.add.text(x-125, this.game.height/2-20, "1/1",{font:'LondrinaSolid-Black'});
      this.commonRewardName.fill= '#fff';
      this.commonRewardName.fontSize = 16;
      this.commonRewardName.anchor.setTo(0.5, 0.5); 
      this.commonRewardName.wordWrap = true;
      this.commonRewardName.wordWrapWidth = 100; 
      this.commonRewardName.align = "center"
      
      this.uncommonRewardName = this.add.text(x, this.game.height/2-20, "1/1",{font:'LondrinaSolid-Black'});
      this.uncommonRewardName.fill= '#00FF0F';
      this.uncommonRewardName.fontSize = 16;
      this.uncommonRewardName.anchor.setTo(0.5, 0.5);    
      this.uncommonRewardName.wordWrap = true;
      this.uncommonRewardName.wordWrapWidth = 100;    
      this.uncommonRewardName.align = "center"
      
      this.rareRewardName = this.add.text(x+125, this.game.height/2-20, "1/1",{font:'LondrinaSolid-Black'});
      this.rareRewardName.fill= '#FF00CC';
      this.rareRewardName.fontSize = 16;
      this.rareRewardName.anchor.setTo(0.5, 0.5); 
      this.rareRewardName.wordWrap = true;
      this.rareRewardName.wordWrapWidth = 100;       
      this.rareRewardName.align = "center"
      //media breakpoint
      if(window.innerHeight < 700){
        this.commonRewardName.y = this.game.height/2-35;
        this.uncommonRewardName.y = this.game.height/2-35;
        this.rareRewardName.y = this.game.height/2-35;

        this.commonRewardName.fontSize = 16;
        this.uncommonRewardName.fontSize = 16;
        this.rareRewardName.fontSize = 16;
      }
      else{
        this.commonRewardName.y = this.game.height/2-20;
        this.uncommonRewardName.y = this.game.height/2-20;
        this.rareRewardName.y = this.game.height/2-20;

        this.commonRewardName.fontSize = 18;
        this.uncommonRewardName.fontSize = 18;
        this.rareRewardName.fontSize = 18;
      }
       
            
      /*
      this.monName= this.add.sprite(0, 0, localStorage.getItem("monName")+"_name");  
      this.monName.width = this.game.width;
      this.monName.height = this.game.height;  
      
      this.commonRewardName= this.add.sprite(25, 200, localStorage.getItem("monName")+"_name");  
      this.commonRewardName.alpha = 0;
      this.commonRewardName.width = this.game.width;
      this.commonRewardName.height = this.game.height;      
      
      this.uncommonRewardName= this.add.sprite(0, 200, localStorage.getItem("monName")+"_name");  
      this.uncommonRewardName.alpha = 0;
      this.uncommonRewardName.width = this.game.width;
      this.uncommonRewardName.height = this.game.height;   
      
      this.rareRewardName= this.add.sprite(-25, 200, localStorage.getItem("monName")+"_name");  
      this.rareRewardName.alpha = 0;
      this.rareRewardName.width = this.game.width;
      this.rareRewardName.height = this.game.height;   
      
      */
      this.biome = parseInt(localStorage.getItem("Markerbiome"));
      this.returnButton = this.add.sprite(this.game.width/2, this.game.height-50, "return_"+this.biome+"MINI");  
      this.returnButton.anchor.setTo(0.5, 0.5); 
      this.returnButton.inputEnabled = true;
      this.returnButton.events.onInputDown.add(this.onDown, this); 
      this.returnButton.width = this.returnButton.width*0.75
      this.returnButton.height = this.returnButton.height*0.75      
      //this.returnButton.width = this.game.width;
      //this.returnButton.height = this.game.height;         
   
      
      this.watchButton = this.add.sprite(this.game.width/2, this.game.height-250, "watch");  
      this.watchButton.anchor.setTo(0.5, 0.5);      
      this.watchButton.inputEnabled = true;
      this.watchButton.width = this.watchButton.width*0.60
      this.watchButton.height = this.watchButton.height*0.60
      this.watchButton.events.onInputDown.add(this.watchAd, this);   
      this.watchButton.alpha = 0;
 
      
      //this.game.width/2, this.game.height-270
      this.contButton = this.add.sprite(this.game.width/2-10, this.game.height-150, "wardenHunt"+this.biome);  
      this.contButton.anchor.setTo(0.5, 0.5);      
      this.contButton.inputEnabled = true;
      this.contButton.width = 225
      this.contButton.height = 125
      this.contButton.events.onInputDown.add(this.continue, this); 

                       

      //tutorial no more tix -- disabled
      if(localStorage.getItem("firstVisit-tut-fight-win") === null ) {
        //localStorage.setItem("TixCount"+this.biome,0)
      }       

      if(parseInt(localStorage.getItem("TixCount"+this.biome)) < 1){
        this.contButton.loadTexture("wardenHunt-No")
      }

      this.monStreak = this.add.text(this.game.width/2+90, this.game.height-195, "HUNT STREAK #",{font:'LondrinaSolid-Black'});
      this.monStreak.fill= '#FFF';
      this.monStreak.fontSize = 20;
      this.monStreak.anchor.setTo(0.5, 0.5);     
      //this.monStreak.angle = 35
      this.monStreak.align = 'left'
      
      this.tixCost = parseInt(localStorage.getItem("TixCost"))+1
      this.tixText = this.add.text(this.contButton.x-30, this.contButton.y-30, localStorage.getItem("TixCount"+this.biome)+"/"+this.tixCost,{font:'LondrinaSolid-Black'});
      this.tixText.fill= '#fff';
      this.tixText.fontSize = 18;
      this.tixText.anchor.setTo(0.5, 0.5);    
      
            
      this.optionText = this.add.text(this.game.width/2, this.game.height-300, "WATCH AN AD TO CARVE OUT MORE REWARDS",{font:'LondrinaSolid-Black'});
      this.optionText.fill= '#fff';
      this.optionText.fontSize = 18;
      this.optionText.anchor.setTo(0.5, 0.5);
      
      this.hasSlashed = parseInt(localStorage.getItem('hasSlashed'));
      this.hasStabbed = parseInt(localStorage.getItem('hasStabbed'));
      this.hasBashed = parseInt(localStorage.getItem('hasBashed'));

      this.commonRewards =[]
      this.commonRewardCount = 0
      if(localStorage.getItem("monSize").includes("small") ){
        this.commonRewardCount = gameConfig.baseCommonReward;
      }
      if(localStorage.getItem("monSize").includes("medium")){
        this.commonRewardCount = gameConfig.baseCommonReward+1;
      }
      if(localStorage.getItem("monSize").includes("large") || localStorage.getItem("monSize").includes("legendary") || localStorage.getItem("monSize").includes("apex")){
        this.commonRewardCount = gameConfig.baseCommonReward+2;
      }      
      this.commonRewardCount *= this.huntBonus;
      if(parseInt(localStorage.getItem("didMonRun")) == 1 || this.biome == -1 ){
        this.commonRewardCount = 0;
      }       
      //homestead
      //this.newPlace = parseInt(localStorage.getItem("newPlace"))
      console.log(this.biome+" "+this.markedMon)
      var dropRan= Math.floor(Math.random() * (deadMonster[this.biome][this.markedMon].commonRewards.length));
      console.log(deadMonster[this.biome][this.markedMon].commonRewards.length)
      console.log(deadMonster[this.biome][this.markedMon].commonRewards)
      var dropName = "";
      //always skin
      if(dropRan  == 1){
        dropRan  = 2;
      }
      if(dropRan == 0){
        if(localStorage.getItem("monSize").includes("small") ){
          dropName = "Small Monster Bone"
        }
        if(localStorage.getItem("monSize").includes("medium")){
          dropName = "Medium Monster Bone"
        }
        if(localStorage.getItem("monSize").includes("large") || localStorage.getItem("monSize").includes("apex") || localStorage.getItem("monSize").includes("legendary")){
          dropName = "Large Monster Bone"
        }         
        
      }
      else{
        
        dropName = deadMonster[this.biome][this.markedMon].commonRewards[dropRan]
      }
      
      //tutorial win drop
      if(localStorage.getItem("firstVisit-tut-fight-win") === null ) {
        //localStorage.setItem("firstVisit-tut-fight-win",1);
        this.commonRewardCount = 15;
        dropName = "Small Monster Bone"          
        //this.setMonster(1,1)
      }       

      //this.commonRewardName.loadTexture(dropName+" Name")
      this.commonRewardName.text = dropName+"\nx"+this.commonRewardCount
      this.commonRewardName.alpha = 0;     
      
      if (localStorage.getItem(dropName+" Count") === null) {
        localStorage.setItem(dropName+" Count",this.commonRewardCount);
      }  
      else{
        var count= parseInt(localStorage.getItem(dropName+" Count"))+this.commonRewardCount
        localStorage.setItem(dropName+" Count",count);
      }

      var dist = 0;
      var space = 25;
      for(var i = 0; i < this.commonRewardCount; i++){
        this.commonRewards[i] = this.add.sprite((this.game.width/2)-125,(this.game.height/2)+dist-125, dropName); 
        //this.commonRewards[i].height = 200;
        //this.commonRewards[i].width = 200;
        this.commonRewards[i].anchor.setTo(0.5, 0.5);        
        this.commonRewards[i].alpha = 0;
        //dist +=space  
      }
      
      
      this.uncommonRewards = []
      this.uncommonRewardCount = 0
      if(localStorage.getItem("monSize").includes("small") || localStorage.getItem("monSize").includes("legendary")){
        this.uncommonRewardCount = gameConfig.baseUncommonReward;
      }
      if(localStorage.getItem("monSize").includes("medium")){
        this.uncommonRewardCount = gameConfig.baseUncommonReward+1;
      }
      if(localStorage.getItem("monSize").includes("large") || localStorage.getItem("monSize").includes("apex")){
        this.uncommonRewardCount = gameConfig.baseUncommonReward+2;
      }   
       
      this.uncommonRewardCount *= this.huntBonus;  
      if(parseInt(localStorage.getItem("didMonRun")) == 1 || this.biome == -1){
        this.uncommonRewardCount = 0;
      }
      //homestead
      //this.newPlace = parseInt(localStorage.getItem("newPlace"))
    
      var dropRan= Math.floor(Math.random() * (deadMonster[this.biome][this.markedMon].uncommonRewards.length));
      var dropName = "";
      if(dropRan == 0){
        dropName = "Fertile Droppings"
      }
      else{
        dropName = deadMonster[this.biome][this.markedMon].uncommonRewards[dropRan]
        if(this.hasSlashed == 1){ 
          //dropName = deadMonster[this.biome][this.markedMon].uncommonRewards[1]
        }
        if(this.hasBashed == 1){ 
          //dropName = deadMonster[this.biome][this.markedMon].uncommonRewards[3]
        }        
      }
      //apex drops
      if(localStorage.getItem("monSize").includes("apex")){
        dropName = "Apex Shards"
      }
      //tutorial win drop
      if(localStorage.getItem("firstVisit-tut-fight-win") === null ) {
        //localStorage.setItem("firstVisit-tut-fight-win",1);
        this.uncommonRewardCount = 5;

        switch(this.biome){
          case 0:
            dropName = deadMonster[this.biome][this.markedMon].uncommonRewards[2]
            break;
          case 1:
            dropName = deadMonster[this.biome][this.markedMon].commonRewards[2]
            break;
          case 2:
            dropName = deadMonster[this.biome][this.markedMon].commonRewards[2]
            break;            

        }          
        //this.setMonster(1,1)
      }            
      //this.uncommonRewardName.loadTexture(dropName+" Name")
      this.uncommonRewardName.text = dropName+"\nx"+this.uncommonRewardCount
      this.uncommonRewardName.alpha = 0;
      
      if (localStorage.getItem(dropName+" Count") === null) {
        localStorage.setItem(dropName+" Count",this.uncommonRewardCount);
      }  
      else{
        var count= parseInt(localStorage.getItem(dropName+" Count"))+this.uncommonRewardCount
        localStorage.setItem(dropName+" Count",count);
      }
      console.log("count "+this.uncommonRewardCount)
      var dist = 0;
      var space = 25;
      for(var i = 0; i < this.uncommonRewardCount; i++){
        this.uncommonRewards[i] = this.add.sprite((this.game.width/2),(this.game.height/2)+dist-125, dropName); 
        //this.uncommonRewards[i].height = 200;
        //this.uncommonRewards[i].width = 200;
        this.uncommonRewards[i].anchor.setTo(0.5, 0.5);      
        this.uncommonRewards[i].alpha = 0;      
        //dist +=space  
      }
            
      this.rareRewards = []
      this.rareRewardCount = 0
      if(localStorage.getItem("monSize").includes("small") ){
        this.rareRewardCount = gameConfig.baseRareReward;
      }
      if(localStorage.getItem("monSize").includes("medium")){
        this.rareRewardCount = gameConfig.baseRareReward+1;
      }
      if(localStorage.getItem("monSize").includes("large") || localStorage.getItem("monSize").includes("legendary") || localStorage.getItem("monSize").includes("apex")){
        this.rareRewardCount = gameConfig.baseRareReward+2;
      }      
      this.rareRewardCount *= this.huntBonus; 
      if(parseInt(localStorage.getItem("didMonRun")) == 1 || this.biome == -1){
        this.rareRewardCount = 0;
      }      
      //this.newPlace = parseInt(localStorage.getItem("newPlace"))
      //homestead 

      var dropRan= Math.floor(Math.random() * (deadMonster[this.biome][this.markedMon].rareRewards.length));
      console.log("rare "+dropRan)
      var dropName = "";
      var dropNameHolder = "";
      if(dropRan == 0){
        switch(this.biome){
          case 0:
            dropName = "Yellow Dragon Gem"
            dropNameHolder = deadMonster[this.biome][this.markedMon].rareRewards[1]
            break;
          case 1:
            dropName = "Blue Dragon Gem"
            dropNameHolder = deadMonster[this.biome][this.markedMon].rareRewards[1]
            break;
          case 2:
            dropName = "Red Dragon Gem"
            dropNameHolder = deadMonster[this.biome][this.markedMon].rareRewards[1]
            break;            
            
        }
      }
      else{
        dropName = deadMonster[this.biome][this.markedMon].rareRewards[dropRan]   
        switch(this.biome){
          case 0:
            dropNameHolder = "Yellow Dragon Gem"
            break;
          case 1:
            dropNameHolder = "Blue Dragon Gem"
            break;
          case 2:
            dropNameHolder = "Red Dragon Gem"
            break;            
            
        }        
        
      }
      //shiny only drop prismatic gem
      if(this.shinyGet == 1){
          dropName = "Prismatic Gem"
          dropNameHolder =  "Prismatic Gem"      
      }
      //tutorial win drop
      if(localStorage.getItem("firstVisit-tut-fight-win") === null ) {
        this.rareRewardCount = 50
        dropName = deadMonster[this.biome][this.markedMon].rareRewards[1]
        dropNameHolder = deadMonster[this.biome][this.markedMon].rareRewards[1]
      }      
      
      //exploration bonus
      if (localStorage.getItem(dropName+" Count") === null) {
        localStorage.setItem(dropName+" Count",0);
      }   
      if (localStorage.getItem(dropNameHolder+" Count") === null) {
        localStorage.setItem(dropNameHolder+" Count",0);
      }      
      var count1 = parseInt(localStorage.getItem(dropName+" Count"))
      var count2 = parseInt(localStorage.getItem(dropNameHolder+" Count"))
      console.log(dropName+" -"+count1+" "+dropNameHolder+" -"+count2)
      if(count1 > count2){
        dropName = dropNameHolder;
      }
      
      //this.rareRewardName.loadTexture(dropName+" Name")
      this.rareRewardName.text = dropName+"\nx"+this.rareRewardCount
      this.rareRewardName.alpha = 0;      
      if (localStorage.getItem(dropName+" Count") === null) {
        localStorage.setItem(dropName+" Count",this.rareRewardCount);
      }  
      else{
        var count= parseInt(localStorage.getItem(dropName+" Count"))+this.rareRewardCount
        localStorage.setItem(dropName+" Count",count);
      }      
      var dist = 0;
      var space = 25;
      for(var i = 0; i < this.rareRewardCount; i++){
        this.rareRewards[i] = this.add.sprite((this.game.width/2)+125,(this.game.height/2)+dist-125, dropName); 
        //this.rareRewards[i].height = 200;
        //this.rareRewards[i].width = 200;
        this.rareRewards[i].anchor.setTo(0.5, 0.5);      
        this.rareRewards[i].alpha = 0;        
        //dist +=space  
      }      
      
      this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', '',16);
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', '',16);
      this.startTxt.anchor.setTo(0.5, 0.5);

      //this.input.onDown.add(this.onDown, this);
      
            this.bgSound = this.add.audio('wardenMusic');
            this.ping = this.add.audio('ping');
      
            this.winSound = this.add.audio('win');
            
      
            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            }
            this.winSound.play();
            this.winSound.volume = 0.1

      this.craftBackdrop = this.add.sprite(0, 0, 'mainBG');
      this.craftBackdrop.width = this.game.width;
      this.craftBackdrop.height = this.game.height;        
      this.craftBackdrop.alpha = 0;  


      this.HuntflyCount = parseInt(localStorage.getItem("huntFly"+this.biome+" Count"))
      this.HuntFlycost = 0;
      if(this.markedMon <= 1){
        this.HuntFlycost = 1;
      }
      if(this.markedMon > 1 && this.markedMon <= 3){
        this.HuntFlycost = 2;
      }  
      if(this.markedMon == 4){
        this.HuntFlycost = 3;
      }                
      if(this.markedMon > 4){
        this.HuntFlycost = 50;
      }                                    


      this.huntFly = this.add.sprite(-100, this.game.height-225, 'huntFly'+this.biome);
      this.huntFly.anchor.setTo(0.5, 0.5);          
      this.huntFly.width = 100;
      this.huntFly.height = 100;        
      this.huntFly.alpha = 1;  
      this.huntFly.inputEnabled = true;
      this.huntFly.events.onInputDown.add(this.yesDown, this);               

      this.huntFlyText = this.add.text(this.huntFly.x, this.huntFly.y+(this.huntFly.height/2)+10, this.HuntFlycost+"/"+this.HuntflyCount,{font:'LondrinaSolid-Black'});
      this.huntFlyText.fill= '#fff';
      this.huntFlyText.fontSize = 18;
      this.huntFlyText.anchor.setTo(0.5, 0.5); 
      this.huntFlyText.align = 'center'
      this.huntFlyText.wordWrap = true;
      this.huntFlyText.wordWrapWidth = 300;      

      this.yesButton = this.add.sprite(this.huntFly.x-800, this.huntFly.y+400, 'yesButton');       
      this.yesButton.anchor.setTo(0.5, 0.5);     
      this.yesButton.width = 225
      this.yesButton.height = 125      
      this.yesButton.alpha = 0;       
      this.yesButton.inputEnabled = true;
      this.yesButton.events.onInputDown.add(this.yesDown, this);           

      this.noButton = this.add.sprite(this.huntFly.x-800, this.huntFly.y+500, 'noButton'); 
      this.noButton.anchor.setTo(0.5, 0.5);      
      this.noButton.width = 225
      this.noButton.height = 125           
      this.noButton.alpha = 0;     
      this.noButton.inputEnabled = true;
      this.noButton.events.onInputDown.add(this.noDown, this);        
              
      

      this.mapWarden = this.add.sprite(this.game.width, 0, 'guildWarden');
      this.mapWarden.width = this.game.width;
      this.mapWarden.height = this.game.height;     
      
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
      this.textBackdropText2.text = "Jean, the Collector"
      this.textBackdropText.text = "That haul looks GLORIOUS. Stop by the Guild Hall. I'll make it worth your while"
       this.chatTimer = 0;   

      //reward reminder
      
      if(parseInt(localStorage.getItem("monCount"))%3 == 0 && this.extraCarve == 0 && localStorage.getItem("carveReminder") === null){
        localStorage.setItem("carveReminder",1)
        //this.chatTimer = 1;
        this.mapWarden.loadTexture("warden"+this.biome);
        switch(this.biome){
          case 0:
            this.textBackdropText2.text = "Neeka, the Sure";  
            this.textBackdropText.text = "Remember, you can carve out extra rewards!"        
            break;
          case 1:
            this.textBackdropText2.text = "Roz, the Steady";  
            this.textBackdropText.text = "Waste not, want not. Remember to carve out your extra rewards!"        
            break;
          case 2:
            this.textBackdropText2.text = "Rayla, the Indifferent";  
            this.textBackdropText.text = "You CAN carve extra rewards you know"        
            break;                                 
        }

      }       
      if(parseInt(localStorage.getItem("didMonRun")) == 1 || this.biome == -1){
        this.extraCarve = 1;
      }  
       this.huntTickets = this.add.sprite(0,0, 'huntTickets');
       this.huntTickets.alpha = 0;
       this.huntTickets.TapCount = 7;
       //this.fireWrite();   


       //exp info
       //localStorage.setItem("exp", parseInt(localStorage.getItem("exp"))+(parseInt(localStorage.getItem("ExpTotal"))))
       
       

       this.winSound = this.add.audio('win');

       this.hunterExp = parseInt(localStorage.getItem("exp"))    
       var calRank = Math.round(0.1*Math.sqrt(this.hunterExp))
       this.currentRank = parseInt(localStorage.getItem("currentRank"))

       this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
       this.bufferRank = this.currentRank+gameConfig.bufferRank // to increase exp requirements
       this.currentRankExp = Math.round(Math.pow((this.bufferRank)/0.1, 2)); 
       this.prevRankExp = parseInt(localStorage.getItem("prevexp"))
       this.nextRankExp = Math.round(Math.pow((this.bufferRank+1)/0.1, 2)); 
       this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))    

       //this.hunterExp = parseInt(localStorage.getItem("exp"))   
       if(parseInt(localStorage.getItem("currentRank")) <= 1){
         this.expDiff = this.hunterExp
       }
       else{
         this.expDiff = this.hunterExp - this.prevRankExp 
       }
       // this.hunterExp - this.nextRankExp 
       //this.expDiff = this.hunterExp
       if(this.expDiff < 0){
        this.expDiff = 0;
       }
 
       this.expDiff2 = this.nextRankExp-this.currentRankExp
       if(this.expDiff2 < 0){
        this.expDiff2 = 0;
       }        
      



       this.popUp = this.add.sprite(0, 0, 'popUp');
       this.popUp.width = this.game.width;
       this.popUp.height = this.game.height;         
       this.popUp.inputEnabled = true;
       this.popUp.events.onInputDown.add(this.hideExp, this);     
          
       var rankHolder = Math.floor(parseInt(localStorage.getItem("currentRank"))/10);
       //console.log(rankHolder)
       if(rankHolder > 2){
         rankHolder = 2;
       }
       this.rank = this.add.sprite(this.popUp.width/2, this.popUp.height/2-150, 'rankBadge-'+rankHolder);       
       this.rank.anchor.setTo(0.5, 0.5);   

       this.rankText = this.add.text(this.popUp.width/2, this.popUp.height/2+10, "RANK "+parseInt(localStorage.getItem("currentRank"))+"\nHUNT STREAK #"+parseInt(localStorage.getItem("monCount"))+"\n"+(this.expDiff)+"/"+(this.expDiff2)+" \nEARNED: +"+(parseInt(localStorage.getItem("moneExp"))*this.HuntMul)+" EXP",{font:'LondrinaSolid-Black'});
       this.rankText.fill= '#fff';
       this.rankText.fontSize = 40;
       this.rankText.align = "center"
       this.rankText.anchor.setTo(0.5, 0.5);        
       
       this.expBar3 = this.add.sprite(this.popUp.width/2-105, this.popUp.height/2+155, 'bg7');
       this.expBar3.width = 200
       this.expBar3.tint = 0x454545
       this.expBar3.height = 25      

       this.expBar = this.add.sprite(this.popUp.width/2-100, this.popUp.height/2+150, 'bg7');
       this.expBar.width = 200;
       this.expBar.tint = 0x222763
       this.expBar.height = 25 
       
       this.expBar2 = this.add.sprite(this.popUp.width/2-100, this.popUp.height/2+150, 'bg7');
       this.expBar2.width = this.expBar.width * (this.expDiff/this.expDiff2)
       this.expBar2.tint = 0xB1A3D4
       this.expBar2.height = 25      

       

       this.rankText2 = this.add.text(this.popUp.width/2, this.expBar.y+100, "[ TAP TO CONTINUE ]",{font:'LondrinaSolid-Black'});
       this.rankText2.fill= '#000';
       this.rankText2.fontSize = 24;
       this.rankText2.align = "center"
       this.rankText2.anchor.setTo(0.5, 0.5);  
       this.rankText2.alpha = 0         

      if(this.currentRank < gameConfig.legendUnlock){
      this.rankText2.text = "NEXT UNLOCK AT RANK "+gameConfig.legendUnlock+"\n[ TAP TO CONTINUE ]"
      } 
      if(this.currentRank < gameConfig.mutantUnlock){
        //this.rankText2.text = "NEXT UNLOCK AT RANK "+gameConfig.mutantUnlock+"\n[ TAP TO CONTINUE ]"
      } 
      if(this.currentRank < gameConfig.surgeUnlock){
        this.rankText2.text = "NEXT UNLOCK AT RANK "+gameConfig.surgeUnlock+"\n[ TAP TO CONTINUE ]"
      } 
      if(this.currentRank < gameConfig.rareUnlock){
        this.rankText2.text = "NEXT UNLOCK AT RANK "+gameConfig.rareUnlock+"\n[ TAP TO CONTINUE ]"
      } 
      if(this.currentRank < gameConfig.uncommonUnlock){
        this.rankText2.text = "NEXT UNLOCK AT RANK "+gameConfig.uncommonUnlock+"\n[ TAP TO CONTINUE ]"
      }       
      

       

       this.transition = this.add.sprite(0, this.game.height,"transition");  
       this.transition.width = this.game.width
       this.transition.alpha = 0;        
       this.transitionKey = 1

       if (localStorage.getItem("huntMul") === null ) {
        localStorage.setItem("huntMul",1)
      } 
       this.HuntMul = parseInt(localStorage.getItem("huntMul"))
       if(parseInt(localStorage.getItem("monCount"))%3 == 0 && parseInt(localStorage.getItem("monCount")) != 0){
        this.HuntMul = parseInt(localStorage.getItem("monCount"));
        //localStorage.setItem("huntMul",this.HuntMul)

      }
      else{
        this.HuntMul = 1;
      }
      localStorage.setItem("exp", parseInt(localStorage.getItem("exp"))+(parseInt(localStorage.getItem("moneExp"))*this.HuntMul) )

      

      try{
        Tapdaq.isRewardedVideoReady("questlike-reward", function(ready) {
          if (ready) {
            localStorage.setItem("letsCarve",0)
          }
          else{
            localStorage.setItem("letsCarve",1)
            //this.extraCarve = 1
          }
        });   
      }
      catch(error){
        localStorage.setItem("letsCarve",1)
      }        
      
      this.extraCarve = parseInt(localStorage.getItem("letsCarve"))
      if(this.extraCarve == 0){
        localStorage.setItem("monCount",parseInt(localStorage.getItem("monCount"))+1)
      }      
      else{
        this.watchButton.loadTexture("watchNo")
      }
      //alert("!")
    },

    update: function () {
      if(parseInt(localStorage.getItem("restartState")) == 1 ){
        
        localStorage.removeItem("restartState")
        this.game.state.restart();
      }
      
      if(parseInt(localStorage.getItem("TixCount"+this.biome)) < this.tixCost){
        this.contButton.loadTexture("wardenHunt-No");
        this.tixText.fill= 'red';
      }
      else{
        this.contButton.loadTexture("wardenHunt"+this.biome);
        this.tixText.fill= '#fff';
      }
      this.tixText.text = localStorage.getItem("TixCount"+this.biome)+"/"+this.tixCost
      if(this.transition.alpha == 1){
        this.transition.y-=25
        if(this.transition.y <= -500){
          localStorage.setItem("didMonRun",0)
          localStorage.setItem("fromHunt",1)
          if(this.transitionKey == 1){
            this.game.state.start('hub')  
          }
          else{
            this.game.state.start('game')  
          }
                    
        }
      }
      //monster Ran
      if(parseInt(localStorage.getItem("didMonRun")) == 1 || this.biome == -1){
        

        //media breakpoint
        if(window.innerHeight < 700){
          this.monName.y = 120
          this.monSizeName.y = 40
          this.monTypeName.y = 80       
        }
        else{
          this.monName.y = 150
          this.monSizeName.y = 50
          this.monTypeName.y = 100        
        }           
        
        if(this.biome == -1){
          this.monName.text = "DEFEATED"
        }
        else{
          this.monName.text = "GOT AWAY"
        }
      }
      //floor all graphics to address blurry
      this.returnButton.x = Math.floor( this.returnButton.x )     
      this.returnButton.y = Math.floor( this.returnButton.y )    
      this.watchButton.x = Math.floor( this.watchButton.x )     
      this.watchButton.y = Math.floor( this.watchButton.y )    
      this.contButton.x = Math.floor( this.contButton.x )     
      this.contButton.y = Math.floor( this.contButton.y )       
      this.rank.x = Math.floor( this.rank.x )     
      this.rank.y = Math.floor( this.rank.y )               



      this.monStreak.alpha = 0;
      if(this.popUp.x == this.game.width ){
        this.rank.alpha = 0;
        this.expBar.alpha = 0;
        this.expBar2.alpha = 0;
        this.expBar3.alpha = 0;
        this.rankText.alpha = 0
        this.rankText2.alpha = 0;
        if(this.commonRewardCount > 0){
          for(var i = 0; i < this.commonRewardCount; i++){
            if(this.commonRewards[i].alpha < 1 && parseInt(localStorage.getItem("didMonRun")) != 1 && this.biome != -1){
              this.commonRewards[i].alpha += 0.07;  
              if(this.commonRewards[i].alpha >= 1 ){
                this.commonRewards[i].alpha = 1;
              }
            }
          }  
          if(this.commonRewards[this.commonRewardCount-1].alpha == 1 && parseInt(localStorage.getItem("didMonRun")) != 1 && this.biome != -1){
            this.commonRewardName.alpha += 0.1
            if(this.commonRewardName.alpha > 1){
              this.commonRewardName.alpha = 1
            }
            for(var i = 0; i < this.uncommonRewardCount; i++){
              if(this.uncommonRewards[i].alpha < 1){
                this.uncommonRewards[i].alpha += 0.05;  
                if(this.uncommonRewards[i].alpha >= 1 ){
                  this.uncommonRewards[i].alpha = 1;
                }
              }
            }   
          }         

          if(this.uncommonRewards[this.uncommonRewardCount-1].alpha == 1 && parseInt(localStorage.getItem("didMonRun")) != 1 && this.biome != -1){
            this.uncommonRewardName.alpha += 0.1
            if(this.uncommonRewardName.alpha > 1){
              this.uncommonRewardName.alpha = 1
            }
            for(var i = 0; i < this.rareRewardCount; i++){
              if(this.rareRewards[i].alpha < 1){
                this.rareRewards[i].alpha += 0.03;  
                if(this.rareRewards[i].alpha >= 1 ){
                  this.rareRewards[i].alpha = 1;
                }
              }
            }   
          } 

          if(this.rareRewards[this.rareRewardCount-1].alpha == 1 && parseInt(localStorage.getItem("didMonRun")) != 1 && this.biome != -1){
            this.rareRewardName.alpha += 0.1
            if(this.rareRewardName.alpha > 1){
              this.rareRewardName.alpha = 1
            }
          }         

        }
      }

      this.expBarHolder = this.expBar.width * (this.expDiff/this.expDiff2)

      if(this.expBar2.width <= this.expBarHolder){
        this.expBar2.width+=2 
      }
      if(this.expBar2.width > this.expBarHolder){
        this.expBar2.width--
      }      
      
      var diff = this.expBarHolder -this.expBar2.width
      if(diff <= 2 && diff >= 0 && this.popUp.x != this.game.width){
        this.rankText2.alpha += 0.1
        if(this.rankText2.alpha > 1){
          this.rankText2.alpha = 1
        }
      }

      this.hunterExp = parseInt(localStorage.getItem("exp"))   
      if(parseInt(localStorage.getItem("currentRank")) <= 1){
        this.expDiff = this.hunterExp
      }
      else{
        this.expDiff = this.hunterExp - this.prevRankExp 
      }
      // this.hunterExp - this.nextRankExp 
      //this.expDiff = this.hunterExp
      if(this.expDiff < 0){
       this.expDiff = 0;
      }

      this.expDiff2 = this.nextRankExp-this.currentRankExp
      if(this.expDiff2 < 0){
       this.expDiff2 = 0;
      } 
      //console.log("hunterExp "+this.hunterExp)
     // console.log("nextRankExp "+this.nextRankExp)
      //console.log("currentRankExp "+this.currentRankExp)

     // console.log("exp 1 "+this.expDiff)
     // console.log("exp 2 "+this.expDiff2)
      //console.log(this.expBar2.width)

      


      if(this.currentRank >= gameConfig.legendUnlock && parseInt(localStorage.getItem("legendHuntUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nLEGENDARY MONSTERS UNLOCKED.\n4-STAR HUNTS NOW AVAILABLE"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("legendHuntUnlock",1)
        localStorage.setItem("legendUnlock-first",1)
      } 
      if(this.currentRank >= gameConfig.mutantUnlock && parseInt(localStorage.getItem("mutantUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nMUTANT MONSTERS UNLOCKED.\nSHINY MONSTERS CAN NOW SHOW UP DURING HUNTS"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("mutantUnlock",1)
      } 
      if(this.currentRank >= gameConfig.surgeUnlock && parseInt(localStorage.getItem("surgeUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nMONSTER SURGES UNLOCKED.\nDAILY HUNT BONUSES NOW AVAILABLE"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("surgeUnlock",1)
      } 
      if(this.currentRank >= gameConfig.rareUnlock && parseInt(localStorage.getItem("rareUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nRARE MONSTERS UNLOCKED.\n3-STAR HUNTS NOW AVAILABLE"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("rareUnlock",1)
        localStorage.setItem("rareUnlock-first",1)
      } 
      if(this.currentRank >= gameConfig.uncommonUnlock && parseInt(localStorage.getItem("uncommonUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nUNCOMMON MONSTERS UNLOCKED.\n2-STAR HUNTS NOW AVAILABLE"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("uncommonUnlock",1)
        localStorage.setItem("uncommonUnlock-first",1)
      }
      
      if(this.HuntMul > 1){
        this.rankText.text = "RANK "+parseInt(localStorage.getItem("currentRank"))+"\nHUNT STREAK #"+parseInt(localStorage.getItem("monCount"))+"\n"+(this.expDiff)+"/"+(this.expDiff2)+" \nEARNED: +"+(parseInt(localStorage.getItem("moneExp"))*this.HuntMul)+" EXP (x"+this.HuntMul+")"   
      
      }
      else{
        this.rankText.text = "RANK "+parseInt(localStorage.getItem("currentRank"))+"\nHUNT STREAK #"+parseInt(localStorage.getItem("monCount"))+"\n"+(this.expDiff)+"/"+(this.expDiff2)+" \nEARNED: +"+(parseInt(localStorage.getItem("moneExp"))*this.HuntMul)+" EXP"   
      
      }
      //level up
      if(this.expBar2.width >= this.expBar.width){ 

        if(this.currentRank != gameConfig.uncommonUnlock && this.currentRank != gameConfig.rareUnlock && this.currentRank != gameConfig.surgeUnlock && this.currentRank != gameConfig.legendUnlock){
          this.rankText2.text = "COMBO LIMIT +1"+"\n[ TAP TO CONTINUE ]"
        }
        
        this.expBar2.width = 0;
       // this.winSound.play();

        var rankHolder = Math.floor(parseInt(localStorage.getItem("currentRank"))/10);
        //console.log(rankHolder)
        if(rankHolder > 2){
          rankHolder = 2;
        }
        this.rank.loadTexture('rankBadge-'+rankHolder)   

        try{
          if(!gameConfig.isDebug ){
          var param = new Object();
          param.rank = calRank              
          GameAnalytics("addProgressionEvent", "Complete", "rankUp","","",calRank);  
          facebookConnectPlugin.logEvent("rankUp", param, 1, function (success){ console.log(success)}, function (fail){ console.log(fail)})
          }
        }
        catch(e){

        }    

        if(parseInt(localStorage.getItem("monCount"))%5 == 0 && parseInt(localStorage.getItem("monCount")) != 0){
          //localStorage.setItem("prevexp", this.hunterExp+(parseInt(localStorage.getItem("moneExp"))*5))
        }
        else{
          //localStorage.setItem("prevexp", this.hunterExp+(parseInt(localStorage.getItem("moneExp"))*1))
        }      
        this.hunterExp = parseInt(localStorage.getItem("exp"))    
        localStorage.setItem("RankedUp",1)
        localStorage.setItem("currentRank",parseInt(localStorage.getItem("currentRank"))+1)
        this.currentRank = parseInt(localStorage.getItem("currentRank"))
        this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
        //localStorage.setItem("prevexp", parseInt(localStorage.getItem("exp")) )
        localStorage.setItem("prevexp", this.hunterExp)
        
        this.hunterExp = parseInt(localStorage.getItem("exp")) 

        this.prevRankExp = parseInt(localStorage.getItem("prevexp"))

        this.bufferRank = this.currentRank+gameConfig.bufferRank // to increase exp requirements
        this.currentRankExp = Math.round(Math.pow((this.bufferRank)/0.1, 2)); 

        this.nextRankExp = Math.round(Math.pow((this.bufferRank+1)/0.1, 2));         

        this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))            
           
        //localStorage.setItem("currentRank",gameConfig.maxExp)
        //console.log(calRank)

        if(this.hunterExp >= gameConfig.maxExp){
          //this.textBackdropText.text = "You've reached max hunter rank. The "+localStorage.getItem("ExpTotal")+ " Exp earned will be converted to Veteran Points"
          //localStorage.setItem("veteranPoints", parseInt(localStorage.getItem("veteranPoints"))+parseInt(localStorage.getItem("ExpTotal"))  )
          //this.hunterExp = gameConfig.maxExp
          //localStorage.setItem("exp",gameConfig.maxExp)
          //localStorage.setItem("RankedUp",0)
        }   
        //google play services Hunter Rank Leaderboard     
        try{
          
          var data = {
            score: parseInt(localStorage.getItem("currentRank")),
            leaderboardId: "CgkI4b7xjZMYEAIQAQ"
          };
         
          cordova.plugins.playGamesServices.submitScore(data, function (result) {
              //alert(result)// On error
          }, function(error) {
              //alert(error)// On error
          }); 
          
         /*
          cordova.plugins.playGamesServices.submitScoreNow({score: parseInt(localStorage.getItem("currentRank")), leaderBoardId: "CgkI4b7xjZMYEAIQAQ"}, function (result) {
            //alert(result)// On error
          }, function(error) {
              //alert(error)// On error
          }); 
          */          
        }
        catch(e){

        }            
        //this.findPlacement();           
       }

      


      this.HuntflyCount = parseInt(localStorage.getItem("huntFly"+this.biome+" Count"))
      this.huntFlyText.text = this.HuntflyCount+"/"+this.HuntFlycost

      this.textBackdropText.x = Math.floor( this.textBackdropText.x )
      this.textBackdropText.y = Math.floor( this.textBackdropText.y )      
      //this.textBackdropText.smoothed = false
        

        //ad load check
        


        if(this.extraCarve == 1 || gameConfig.enableAds == false || parseInt(localStorage.getItem("didMonRun")) == 1 || this.biome == -1){
          this.watchButton.loadTexture("watchNo")
          this.optionText.text = " "
          this.extraCarve = 1
        }
        else{
          this.watchButton.loadTexture("watch")
          this.optionText.text = "WATCH AN AD TO GET BONUS REWARDS & EXP"          
        }
      
        if (localStorage.getItem("firstVisit-reward") === null || parseInt(localStorage.getItem("firstVisit-reward")) == 1) {
          this.returnButton.loadTexture("return_Hub")
        }      
        if(this.chatTimer > 0){
          this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
          this.textBackdrop.alpha = 1;
          this.textBackdropText.alpha = 1;
          this.textBackdropText2.alpha = 1;
          this.textBackdrop.x = 0;              
        }
        else{
          this.mapWarden.x += (this.game.width - this.mapWarden.x) * 0.1; 
          this.textBackdrop.alpha = 0;
          this.textBackdropText.alpha = 0;
          this.textBackdropText2.alpha = 0
          this.textBackdrop.x = this.game.width;              
        }
    },
    hideChat: function (unit) {
        this.chatTimer = 0;
        //this.wardenHunt.width = 460;
        //this.wardenHunt.height = 260;  
        //this.wardenHunt.clicked = true;     
        //this.game.state.start('game') 

    },  
    watchAd: function (unit) {
        
        if(this.extraCarve == 0 && gameConfig.enableAds){
          this.ping.play()  
          try{
              //getAds();
              //localStorage.setItem("letsCarve",0);
              this.extraCarve = 1
              var showOptss = {
                didValidateReward: function(response) {
                  localStorage.setItem("letsCarve",1);
                  localStorage.setItem('state','win')
                  // send ad event - reward recieved   
                  localStorage.setItem("letsHunt",1);
                  localStorage.setItem("adReady",1)    
                  // send ad event - reward recieved       
                  try{    
                    if(!gameConfig.isDebug ){   
                    gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.Show, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);          
                    gameanalytics.GameAnalytics.addAdEvent(gameanalytics.EGAAdAction.RewardReceived, gameanalytics.EGAAdType.RewardedVideo, "admob", adEvent);     
                    }   
                  }
                  catch(e){
                    
                  }

                  localStorage.setItem("restartState",1);
                  
                  //this.game.state.start('win')                     
                }
              };  
              this.bgSound.stop();
              //this.ping.play()  
              Tapdaq.showRewardedVideo("questlike-reward", showOptss);
              // admob.rewardVideo.show()
          }
          catch(error){
            this.extraCarve = 0
            this.watchButton.loadTexture("watchNo")
            this.optionText.text = " "          
            //admob.rewardVideo.show();   
          } 
        }
        //this.chatTimer = 0;
        //this.wardenHunt.width = 460;
        //this.wardenHunt.height = 260;  
        //this.wardenHunt.clicked = true;     
        //this.game.state.start('game') 

    }, 
    continue: function () {
         

        if(parseInt(localStorage.getItem("TixCount"+this.biome))-this.tixCost >= 0){
          localStorage.setItem("TixCount"+this.biome,localStorage.getItem("TixCount"+this.biome)-this.tixCost);
          var holder = parseInt(localStorage.getItem("huntFly"+this.biome+" Count"))
          
          if(isNaN(holder)){
            localStorage.setItem("huntFly"+this.biome+" Count",0)
          }    


          console.log(holder+" !")
          //holder > 0
          if(false){
            var location = ""
            var place = ""
            this.mapWarden.loadTexture("warden"+this.biome);
            switch(this.biome){
              case 0:
                location = "Green"
                place = "hiding in the tall Grass."
                this.textBackdropText2.text = "Neeka, the Sure";  
                break;
              case 1:
                location = "Blue"
                place = "within the Caverns"
                this.textBackdropText2.text = "Roz, the Steady";  
                break;
              case 2:
                location = "Red"
                place = "among the Cliffs."
                this.textBackdropText2.text = "Rayla, the Indifferent";  
                break;                                 
            }
            var holder = parseInt(localStorage.getItem("huntFly"+this.biome+" Count"))
            this.HuntFlycost = 0;
            if(this.markedMon <= 1){
              this.HuntFlycost = 1;
            }
            if(this.markedMon > 1 && this.markedMon <= 3){
              this.HuntFlycost = 2;
            }  
            if(this.markedMon == 4){
              this.HuntFlycost = 3;
            }                
            if(this.markedMon > 4){
              this.HuntFlycost = 50;
            }                                    
            this.textBackdropText.text = ""+location+" Huntflys can be used to find any monster "+place
            this.huntFlyText.text = this.HuntFlycost+"/"+holder+"\nUse "+this.HuntFlycost+" Huntfly \n to track another\n"+localStorage.getItem("monNameTitle").toUpperCase()+"?"
            this.chatTimer = 1;              
            this.craftBackdrop.alpha = 1;
            this.yesButton.alpha = 1;       
            if(holder - this.HuntFlycost < 0){
              this.yesButton.loadTexture("yesButton-no")
            }
            this.yesButton.x = this.huntFly.x
            this.noButton.x = this.huntFly.x
            this.noButton.alpha = 1;     
            this.huntFly.alpha = 1;      
            this.huntFlyText.alpha = 1;           
          }
          else{
            this.transition.alpha = 1;
            this.transitionKey = 0
          }
          //ocalStorage.setItem("Markerbiome",this.markerBiome)
          this.ping.play();
          this.bgSound.stop();               
          
        }           
        
    },    
    onDown: function () {
      
      if(this.chatTimer == 0){
        //this.fireWrite();
      this.bgSound.stop();
      /*
      if (localStorage.getItem("firstVisit-reward") === null ) {
          localStorage.setItem("firstVisit-reward",1);    
          localStorage.setItem("firstVisit-combat-lose",1);
          this.chatTimer = 1;  
      }        
      else if(parseInt(localStorage.getItem("firstVisit-reward")) == 1 ){
        localStorage.setItem("firstVisit-reward",2);  
         this.game.state.start('hub') 
       }
       */
       if(true){
          localStorage.setItem("firstVisit-tut-fight-win",1);
          localStorage.setItem("firstVisit-reward",1);    
          //localStorage.setItem("firstVisit-combat-lose",1);
          this.bgSound.stop();
          this.ping.play()         
         //localStorage.setItem('state','warden')
         localStorage.setItem("revengeHunt",0)
         this.transition.alpha = 1;
         this.transitionKey = 1
           
       }

        
      }
      
        
    },    
    yesDown: function () {
      this.HuntFlycost = 0;
      if(this.markedMon <= 1){
        this.HuntFlycost = 1;
      }
      if(this.markedMon > 1 && this.markedMon <= 3){
        this.HuntFlycost = 2;
      }  
      if(this.markedMon == 4){
        this.HuntFlycost = 3;
      }                
      if(this.markedMon > 4){
        this.HuntFlycost = 50;
      }            
      console.log("LETSA "+this.HuntFlycost)
      var holder = parseInt(localStorage.getItem("huntFly"+this.biome+" Count"))
      if(isNaN(holder)){
        localStorage.setItem("huntFly"+this.biome+" Count",0)
      }     
      if(holder - this.HuntFlycost >= 0 && parseInt(localStorage.getItem("revengeHunt")) != 1){
        localStorage.setItem("huntFly"+this.biome+" Count",holder-this.HuntFlycost)
        localStorage.setItem("revengeHunt",1)
        this.chatTimer = 1;
        this.textBackdropText.text = "I'll use "+this.HuntFlycost+" Huntfly \n to track another\n"+localStorage.getItem("monNameTitle").toUpperCase()
        this.mapWarden.loadTexture("warden"+this.biome);
        //this.ping.play();
        //this.bgSound.stop();          
        //this.game.state.start('game')
      } 
      else if(holder - this.HuntFlycost >= 0 && parseInt(localStorage.getItem("revengeHunt")) == 1){
        this.mapWarden.loadTexture("warden"+this.biome);
        this.chatTimer = 1;
        this.textBackdropText.text = "Already tracking another\n"+localStorage.getItem("monNameTitle").toUpperCase()+"\nReady when you are"      
      } 
      else{
        this.mapWarden.loadTexture("warden"+this.biome);
        var location = ""
        var place = ""
        switch(this.biome){
          case 0:
            location = "Green"
            place = "hiding in the tall Grass."
            this.textBackdropText2.text = "Neeka, the Sure";  
            break;
          case 1:
            location = "Blue"
            place = "within the Caverns"
            this.textBackdropText2.text = "Roz, the Steady";  
            break;
          case 2:
            location = "Red"
            place = "among the Cliffs."
            this.textBackdropText2.text = "Rayla, the Indifferent";  
            break;                                 
        }        
        this.chatTimer = 1;
        this.textBackdropText.text = "You don't have enough \n"+location+" Huntflies \nto track another "+localStorage.getItem("monNameTitle").toUpperCase()
      }
        
    },    
    noDown: function () {
      this.ping.play();
      this.bgSound.stop();          
      this.game.state.start('game')      
        
    }, 
    hideExp: function () {
      if(this.rankText2.alpha >= 1){
        this.ping.play();
        this.popUp.x = this.game.width
      }

        
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
  window['simplewar'].Win = Win;

}());
