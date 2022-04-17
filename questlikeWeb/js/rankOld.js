(function() {
  'use strict';

  function Rank() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Rank.prototype = {

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
      console.log(guildItem.length) 
      if(this.weekOfMonth >= guildItem.length){
        this.weekOfMonth = 1
      }
      console.log(this.weekOfMonth)
        
      
      this.guildItem = this.add.sprite(this.game.width/2, this.game.height/2-150, guildItem[this.weekOfMonth].name);
      this.guildItem.anchor.setTo(0.5, 0.5);

      
      this.guildItemText = this.add.text(this.guildItem.x,this.guildItem.y-110, "This Week\nThe Hunter's Guild\nis Looking For: ",{font:'LondrinaSolid-Black'});
      this.guildItemText.fill= '#fff';  
      this.guildItemText.fontSize = 30;  
      this.guildItemText.anchor.setTo(0.5, 0.5);       
      this.guildItemText.wordWrap = true;
      this.guildItemText.wordWrapWidth = 600;
      this.guildItemText.align ='center'     

      this.guildItemText2 = this.add.text(this.guildItem.x,this.guildItem.y+140, guildItem[this.weekOfMonth].name+"\n for\n"+guildItem[this.weekOfMonth].exp+" EXP points EACH",{font:'LondrinaSolid-Black'});
      this.guildItemText2.fill= '#fff';  
      this.guildItemText2.fontSize = 30;  
      this.guildItemText2.anchor.setTo(0.5, 0.5);       
      this.guildItemText2.wordWrap = true;
      this.guildItemText2.wordWrapWidth = 600;
      this.guildItemText2.align ='center'     
      
      this.guildItemText3 = this.add.text(this.guildItem.x,this.guildItem.y+70,"test/test" ,{font:'LondrinaSolid-Black'});
      this.guildItemText3.fill= '#fff';  
      this.guildItemText3.fontSize =24;  
      this.guildItemText3.anchor.setTo(0.5, 0.5);       
      this.guildItemText3.wordWrap = true;
      this.guildItemText3.wordWrapWidth = 600;
      this.guildItemText3.align ='center'       
      
      if (localStorage.getItem("hunterRank") === null) {
        localStorage.setItem("hunterRank",0)
      }  
      if (localStorage.getItem("currentRank") === null) {
        localStorage.setItem("currentRank",1)
      }   
      if (localStorage.getItem("exp") === null) {
        localStorage.setItem("exp",0)
      }         
      //localStorage.setItem("exp",0)
      this.hunterExp = parseInt(localStorage.getItem("exp"))
      this.currentRank = parseInt(localStorage.getItem("currentRank"))
      
      this.nextRankExp = Math.round(Math.pow((this.currentRank+1)/0.1, 2)); 
      this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))
      console.log("next rank exp "+this.nextRank)
      console.log("next rank level "+Math.round(0.1*Math.sqrt(this.nextRank)))
      this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
      
      
      this.expText= this.add.text(this.guildItem.x+50,this.guildItem.y+250, this.hunterExp+"/"+this.nextRankExp+" To Next Rank",{font:'LondrinaSolid-Black'});
      this.expText.fill= '#fff';  
      this.expText.fontSize = 24;  
      this.expText.anchor.setTo(0.5, 0.5);       
      this.expText.wordWrap = true;
      this.expText.wordWrapWidth = 600;
      this.expText.align ='center'      
      
      
      this.biome = parseInt(localStorage.getItem("biome"));
      this.rankBadge = this.add.sprite(this.guildItem.x-140, this.guildItem.y+250, "rankBadge");  

      this.rankBadge.anchor.setTo(0.5, 0.5);
      this.rankText= this.add.text(this.guildItem.x-140,this.guildItem.y+250, this.currentRank,{font:'LondrinaSolid-Black'});
      this.rankText.fill= '#fff';  
      this.rankText.fontSize = 30;  
      this.rankText.anchor.setTo(0.5, 0.5);       
      this.rankText.wordWrap = true;
      this.rankText.wordWrapWidth = 600;
      this.rankText.align ='center'       
       
      
      this.submitButton = this.add.sprite(this.game.width/2, this.game.height-150, "submit");  
      this.submitButton.anchor.setTo(0.5, 0.5); 
      this.submitButton.inputEnabled = true;
      this.submitButton.events.onInputDown.add(this.submit, this);  
      

      this.returnButton = this.add.sprite(this.game.width/2, this.game.height-50, "return_"+this.biome+"MINI");  
      this.returnButton.anchor.setTo(0.5, 0.5); 
      this.returnButton.inputEnabled = true;
      this.returnButton.events.onInputDown.add(this.onDown, this);     
      
      

    },

    update: function () {
      this.expText.text = (this.hunterExp)+"/"+(this.nextRankExp)+" To Next Rank"
      this.rankText.text = this.currentRank;
              
          var inveNum = localStorage.getItem(guildItem[this.weekOfMonth].name+" Count")
          this.guildItemText3.fill = 'white'
           this.submitButton.loadTexture("submit")
          if(inveNum == null){
            inveNum = 0;
            this.guildItemText3.fill ='red'
            this.submitButton.loadTexture("submitNo")
          }
          if(guildItem[this.weekOfMonth].qty > inveNum){
            this.guildItemText3.fill ='red'
            this.submitButton.loadTexture("submitNo")
          }
          this.guildItemText3.text = guildItem[this.weekOfMonth].qty +"/"+inveNum     
      
    
    },
    submit: function () {
      
      var inveNum = localStorage.getItem(guildItem[this.weekOfMonth].name+" Count")
      if(inveNum == null || guildItem[this.weekOfMonth].qty > inveNum){
        inveNum = 0;
        this.submitButton.loadTexture("submitNo")
      }
      else{
        this.hunterExp += guildItem[this.weekOfMonth].exp*guildItem[this.weekOfMonth].qty      
        var calRank = Math.round(0.1*Math.sqrt(this.hunterExp))
        localStorage.setItem("exp",this.hunterExp)
        var itemCount = parseInt(localStorage.getItem(guildItem[this.weekOfMonth].name+" Count"))
        itemCount -= guildItem[this.weekOfMonth].qty
        localStorage.setItem(guildItem[this.weekOfMonth].name+" Count",itemCount)        
        if(this.hunterExp >= this.nextRankExp ){
          console.log("level Up")

          this.currentRank = calRank; 
          this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
          this.nextRankExp = Math.round(Math.pow((this.currentRank+1)/0.1, 2)); 
          this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))    
          localStorage.setItem("currentRank",calRank)
        }
      }
    },     
    onDown: function () {
     //localStorage.setItem('state','warden')
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
  window['simplewar'].Rank = Rank;

}());
