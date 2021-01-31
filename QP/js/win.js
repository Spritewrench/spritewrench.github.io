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
      
      //this.slay= this.add.sprite(0, 0, 'slay_'+localStorage.getItem("monSize"));  
      //this.slay.width = this.game.width;
      //this.slay.height = this.game.height; 
      
      if (localStorage.getItem("letsCarve") === null) {
        localStorage.setItem("letsCarve",0);
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
      this.monName = this.add.text(x, 50, "YOU HAVE SLAIN A",{font:'LondrinaSolid-Black'});
      this.monName.fill= '#fff';
      this.monName.fontSize = 40;
      this.monName.anchor.setTo(0.5, 0.5); 
      
      this.monSize = localStorage.getItem("monSize")
      this.monSizeName = this.add.text(x, this.monName .y+50, this.monSize.toUpperCase(),{font:'LondrinaSolid-Black'});
      this.monSizeName.fill= '#BDBDBD';
      this.monSizeName.fontSize = 40;
      this.monSizeName.anchor.setTo(0.5, 0.5);       
      
      this.monTypeName = localStorage.getItem("monNameTitle")
      this.monTypeName = this.add.text(x, this.monSizeName.y+50, this.monTypeName.toUpperCase(),{font:'LondrinaSolid-Black'});
      this.monTypeName.fill= '#FF8900';
      this.monTypeName.fontSize = 40;
      this.monTypeName.anchor.setTo(0.5, 0.5); 
      
      //this.monSize = localStorage.getItem("monSize")
      this.rewardText = this.add.text(x, this.monTypeName.y+50, "",{font:'LondrinaSolid-Black'});
      this.rewardText.fill= '#fff';
      this.rewardText.fontSize = 30;
      this.rewardText.anchor.setTo(0.5, 0.5);          
      
      this.commonRewardName = this.add.text(x-125, this.game.height/2+25, "1/1",{font:'LondrinaSolid-Black'});
      this.commonRewardName.fill= '#fff';
      this.commonRewardName.fontSize = 20;
      this.commonRewardName.anchor.setTo(0.5, 0.5); 
      this.commonRewardName.wordWrap = true;
      this.commonRewardName.wordWrapWidth = 100; 
      this.commonRewardName.align = "center"
      
      this.uncommonRewardName = this.add.text(x, this.game.height/2+25, "1/1",{font:'LondrinaSolid-Black'});
      this.uncommonRewardName.fill= '#00FF0F';
      this.uncommonRewardName.fontSize = 20;
      this.uncommonRewardName.anchor.setTo(0.5, 0.5);    
      this.uncommonRewardName.wordWrap = true;
      this.uncommonRewardName.wordWrapWidth = 100;    
      this.uncommonRewardName.align = "center"
      
      this.rareRewardName = this.add.text(x+125, this.game.height/2+25, "1/1",{font:'LondrinaSolid-Black'});
      this.rareRewardName.fill= '#FF00CC';
      this.rareRewardName.fontSize = 20;
      this.rareRewardName.anchor.setTo(0.5, 0.5); 
      this.rareRewardName.wordWrap = true;
      this.rareRewardName.wordWrapWidth = 100;       
      this.rareRewardName.align = "center"
      
       
            
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
      //this.returnButton.width = this.game.width;
      //this.returnButton.height = this.game.height;         
      
      this.watchButton = this.add.sprite(this.game.width/2, this.game.height-150, "watch");  
      this.watchButton.anchor.setTo(0.5, 0.5);      
      this.watchButton.inputEnabled = true;
      this.watchButton.width = 188
      this.watchButton.height = 90
      this.watchButton.events.onInputDown.add(this.watchAd, this);        
            

      
      this.optionText = this.add.text(this.game.width/2, this.game.height-210, "WATCH AN AD TO CARVE OUT MORE REWARDS",{font:'LondrinaSolid-Black'});
      this.optionText.fill= '#fff';
      this.optionText.fontSize = 18;
      this.optionText.anchor.setTo(0.5, 0.5);
      
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
      //homestead
      //this.newPlace = parseInt(localStorage.getItem("newPlace"))
      if(this.newPlace == 0){
        this.commonRewardCount += Math.floor(Math.random() * 2);
      }        
      var dropRan= Math.floor(Math.random() * (deadMonster[this.biome][this.markedMon].commonRewards.length));
      console.log(deadMonster[this.biome][this.markedMon].commonRewards.length)
      console.log(deadMonster[this.biome][this.markedMon].commonRewards)
      var dropName = "";
      //always skin
      if(dropRan  == 1){
        dropRan  = 2;
      }
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
        
        dropName = deadMonster[this.biome][this.markedMon].commonRewards[dropRan]
      }
      //this.commonRewardName.loadTexture(dropName+" Name")
      this.commonRewardName.text = dropName+"\nx"+this.commonRewardCount
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
        this.commonRewards[i] = this.add.sprite((this.game.width/2)-125,(this.game.height/2)+dist-100, dropName); 
        //this.commonRewards[i].height = 200;
        //this.commonRewards[i].width = 200;
        this.commonRewards[i].anchor.setTo(0.5, 0.5);        
        //dist +=space  
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
      //homestead
      //this.newPlace = parseInt(localStorage.getItem("newPlace"))
      if(this.newPlace == 0){
        this.uncommonRewardCount += Math.floor(Math.random() * 3);
      }      
      var dropRan= Math.floor(Math.random() * (deadMonster[this.biome][this.markedMon].uncommonRewards.length));
      var dropName = "";
      if(dropRan == 0){
        dropName = "Fertile Droppings"
      }
      else{
        dropName = deadMonster[this.biome][this.markedMon].uncommonRewards[dropRan]
        if(this.hasSlashed == 1){ 
          dropName = deadMonster[this.biome][this.markedMon].uncommonRewards[1]
        }
        if(this.hasBashed == 1){ 
          dropName = deadMonster[this.biome][this.markedMon].uncommonRewards[3]
        }        
      }
      
      //this.uncommonRewardName.loadTexture(dropName+" Name")
      this.uncommonRewardName.text = dropName+"\nx"+this.uncommonRewardCount
      this.uncommonRewardName.alpha = 1;
      
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
        this.uncommonRewards[i] = this.add.sprite((this.game.width/2),(this.game.height/2)+dist-100, dropName); 
        //this.uncommonRewards[i].height = 200;
        //this.uncommonRewards[i].width = 200;
        this.uncommonRewards[i].anchor.setTo(0.5, 0.5);            
        //dist +=space  
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
      //this.newPlace = parseInt(localStorage.getItem("newPlace"))
      //homestead 
      if(this.newPlace == 0){
        this.rareRewardCount += Math.floor(Math.random() * 4)+1;
      }
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
        localStorage.setItem("firstVisit-tut-fight-win",1);
        switch(this.biome){
          case 0:
            dropName = "Yellow Dragon Gem"
            dropNameHolder = "Yellow Dragon Gem"
            break;
          case 1:
            dropName = "Blue Dragon Gem"
            dropNameHolder = "Blue Dragon Gem"
            break;
          case 2:
            dropName = "Red Dragon Gem"
            dropNameHolder = "Red Dragon Gem"
            break;            

        }          
        //this.setMonster(1,1)
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
        this.rareRewards[i] = this.add.sprite((this.game.width/2)+125,(this.game.height/2)+dist-100, dropName); 
        //this.rareRewards[i].height = 200;
        //this.rareRewards[i].width = 200;
        this.rareRewards[i].anchor.setTo(0.5, 0.5);            
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
            
            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            }
      
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


      
    },

    update: function () {
        this.extraCarve = parseInt(localStorage.getItem("letsCarve"))
        if(this.extraCarve == 1){
          this.watchButton.loadTexture("watchNo")
          this.optionText.text = "NOTHING LEFT TO CARVE"
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
        
        if(this.extraCarve == 0){
          this.ping.play()  
          try{
              //getAds();
              //localStorage.setItem("letsCarve",0);
               admob.rewardVideo.show()
          }
          catch(error){
            //admob.rewardVideo.show();   
          } 
        }
        //this.chatTimer = 0;
        //this.wardenHunt.width = 460;
        //this.wardenHunt.height = 260;  
        //this.wardenHunt.clicked = true;     
        //this.game.state.start('game') 

    },      
    onDown: function () {
      
      if(this.chatTimer == 0){

      this.bgSound.stop();
      if (localStorage.getItem("firstVisit-reward") === null ) {
          localStorage.setItem("firstVisit-reward",1);    
          localStorage.setItem("firstVisit-combat-lose",1);
          this.chatTimer = 1;  
      }        
      else if(parseInt(localStorage.getItem("firstVisit-reward")) == 1 ){
        localStorage.setItem("firstVisit-reward",2);  
         this.game.state.start('hub') 
       }
       else{

          this.bgSound.stop();
          this.ping.play()         
         localStorage.setItem('state','warden')
         this.game.state.start('warden')         
       }

        
      }
      
        
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Win = Win;

}());
