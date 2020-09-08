(function() {
  'use strict';

  function Win() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Win.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.map = this.add.sprite(0, 0, 'mainBG');
      this.map.width = this.game.width;
      this.map.height = this.game.height;        
      this.map.alpha = 1;
      
      this.slay= this.add.sprite(0, 0, 'slay_'+localStorage.getItem("monSize"));  
      this.slay.width = this.game.width;
      this.slay.height = this.game.height; 
      
      this.monRewardCount= this.add.sprite(0, 100, 'monRewardCount_'+localStorage.getItem("monSize"));  
      this.monRewardCount.width = this.game.width;
      this.monRewardCount.height = this.game.height;       
      
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
      
      this.biome = parseInt(localStorage.getItem("biome"));
      this.returnButton = this.add.sprite(0, 400, "return_"+this.biome);  
      this.returnButton.width = this.game.width;
      this.returnButton.height = this.game.height;         
      
      
      this.hasSlashed = parseInt(localStorage.getItem('hasSlashed'));
      this.hasStabbed = parseInt(localStorage.getItem('hasStabbed'));
      this.hasBashed = parseInt(localStorage.getItem('hasBashed'));

      this.commonRewards =[]
      this.commonRewardCount = 0
      if(localStorage.getItem("monSize").includes("small")){
        this.commonRewardCount = 4;
      }
      if(localStorage.getItem("monSize").includes("medium")){
        this.commonRewardCount = 5;
      }
      if(localStorage.getItem("monSize").includes("large")){
        this.commonRewardCount = 6;
      }      
      var dropRan= Math.floor(Math.random() * (deadMonster[this.biome][1].commonRewards.length));
      console.log(deadMonster[this.biome][1].commonRewards.length)
      console.log(deadMonster[this.biome][1].commonRewards)
      var dropName = "";
      if(dropRan == 0){
        if(localStorage.getItem("monSize").includes("small")){
          dropName = "Small Monster Bone"
        }
        if(localStorage.getItem("monSize").includes("medium")){
          dropName = "Medium Monster Bone"
        }
        if(localStorage.getItem("monSize").includes("large")){
          dropName = "Large Monster Bone"
        }         
        
      }
      else{
        
        dropName = deadMonster[this.biome][1].commonRewards[dropRan]
      }
      this.commonRewardName.loadTexture(dropName+" Name")
      this.commonRewardName.alpha = 1;     
      
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
        this.commonRewards[i] = this.add.sprite((this.game.width/2)-300,(this.game.height/2)+dist, dropName); 
        this.commonRewards[i].height = 200;
        this.commonRewards[i].width = 200;
        this.commonRewards[i].anchor.setTo(0.5, 0.5);        
        dist +=space 
      }
      
      
      this.uncommonRewards = []
      this.uncommonRewardCount = 0
      if(localStorage.getItem("monSize").includes("small")){
        this.uncommonRewardCount = 2;
      }
      if(localStorage.getItem("monSize").includes("medium")){
        this.uncommonRewardCount = 3;
      }
      if(localStorage.getItem("monSize").includes("large")){
        this.uncommonRewardCount = 4;
      }      
      var dropRan= Math.floor(Math.random() * (deadMonster[this.biome][1].uncommonRewards.length));
      var dropName = "";
      if(dropRan == 0){
        dropName = "Fertile Droppings"
      }
      else{
        dropName = deadMonster[this.biome][1].uncommonRewards[dropRan]
        if(dropRan == 1 && this.hasSlashed != 1){ 
          dropName = deadMonster[this.biome][1].uncommonRewards[2]
        }
        if(dropRan == 3 && this.hasBashed != 1){ 
          dropName = deadMonster[this.biome][1].uncommonRewards[2]
        }        
      }
      this.uncommonRewardName.loadTexture(dropName+" Name")
      this.uncommonRewardName.alpha = 1;
      
      if (localStorage.getItem(dropName+" Count") === null) {
        localStorage.setItem(dropName+" Count",this.uncommonRewardCount);
      }  
      else{
        var count= parseInt(localStorage.getItem(dropName+" Count"))+this.uncommonRewardCount
        localStorage.setItem(dropName+" Count",count);
      }
      
      var dist = 0;
      var space = 25;
      for(var i = 0; i < this.uncommonRewardCount; i++){
        this.uncommonRewards[i] = this.add.sprite((this.game.width/2),(this.game.height/2)+dist, dropName); 
        this.uncommonRewards[i].height = 200;
        this.uncommonRewards[i].width = 200;
        this.uncommonRewards[i].anchor.setTo(0.5, 0.5);            
        dist +=space 
      }
            
      this.rareRewards = []
      this.rareRewardCount = 0
      if(localStorage.getItem("monSize").includes("small")){
        this.rareRewardCount = 1;
      }
      if(localStorage.getItem("monSize").includes("medium")){
        this.rareRewardCount = 2;
      }
      if(localStorage.getItem("monSize").includes("large")){
        this.rareRewardCount = 3;
      }      
      var dropRan= Math.floor(Math.random() * (deadMonster[this.biome][1].rareRewards.length));
      var dropName = "";
      if(dropRan == 0){
        switch(this.biome){
          case 0:
            dropName = "Yellow Dragon Gem"
            break;
          case 1:
            dropName = "Blue Dragon Gem"
            break;
          case 2:
            dropName = "Red Dragon Gem"
            break;            
            
        }
      }
      else{
        dropName = deadMonster[this.biome][1].rareRewards[dropRan]        
        
      }
      this.rareRewardName.loadTexture(dropName+" Name")
      this.rareRewardName.alpha = 1;      
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
        this.rareRewards[i] = this.add.sprite((this.game.width/2)+300,(this.game.height/2)+dist, dropName); 
        this.rareRewards[i].height = 200;
        this.rareRewards[i].width = 200;
        this.rareRewards[i].anchor.setTo(0.5, 0.5);            
        dist +=space 
      }      
      
      this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', '',16);
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', '',16);
      this.startTxt.anchor.setTo(0.5, 0.5);

      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
     localStorage.setItem('state','warden')
     this.game.state.start('preloader',true,true) 
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
  window['simplewar'].Win = Win;

}());
