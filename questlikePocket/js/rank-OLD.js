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
      //console.log(guildItem.length) 
      if(this.weekOfMonth >= guildItem.length){
        this.weekOfMonth = 1
      }
      //console.log(this.weekOfMonth)
      this.title = localStorage.getItem("playerTitle")
      this.guildItemText = this.add.text(10,10, "The Guild is looking For: ",{font:'LondrinaSolid-Black'});
      this.guildItemText.fill= '#fff';  
      this.guildItemText.fontSize = 28;                
      
      this.guildItem = this.add.sprite(25, this.guildItemText.y+50, guildItem[this.weekOfMonth].name);
      //this.guildItem.anchor.setTo(0.5, 0.5);

      
      this.huntTickets = this.add.sprite(0,0, 'huntTickets');
      this.huntTickets.TapCount = 7;
      this.fireWrite();         

      this.mapWarden = this.add.sprite(this.game.width, 0, 'guildWarden');
      this.mapWarden.width = this.game.width;
      this.mapWarden.height = this.game.height;     

      this.guildItemText2 = this.add.text(this.guildItem.x+this.guildItem.width/2+175, this.guildItem.y+(this.guildItem.height/2), guildItem[this.weekOfMonth].name+"\n for "+guildItem[this.weekOfMonth].exp+" EXP points EACH",{font:'LondrinaSolid-Black'});
      this.guildItemText2.fill= '#fff';  
      this.guildItemText2.fontSize = 24;  
      this.guildItemText2.anchor.setTo(0.5, 0.5);       
      this.guildItemText2.wordWrap = true;
      this.guildItemText2.wordWrapWidth = 600;    
      
      this.guildItemText3 = this.add.text(this.guildItem.x+this.guildItem.width/2+90, this.guildItem.y+(this.guildItem.height/2)+70,"test/test" ,{font:'LondrinaSolid-Black'});
      this.guildItemText3.fill= '#fff';  
      this.guildItemText3.fontSize =24;  
      this.guildItemText3.anchor.setTo(0.5, 0.5);             
      
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
      //console.log("next rank exp "+this.nextRank)
      //console.log("next rank level "+Math.round(0.1*Math.sqrt(this.nextRank)))
      this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
      
      
var query = firebase.database().ref("player");
//this.placement = 1;
localStorage.setItem('placement',1)
query.on("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    // key will be "ada" the first time and "alan" the second time
    var key = childSnapshot.key;
    // childData will be the actual contents of the child
    var childData = childSnapshot.val();
    var rankNum = 0;
    rankNum = parseInt(childData.rank)
    if(isNaN(rankNum)){
      rankNum = 0
    }
    //console.log(rankNum)
    var placement = parseInt(localStorage.getItem('placement'))
    var currentRank = parseInt(localStorage.getItem("currentRank"))
    if(currentRank < rankNum){
      
      placement++;
      localStorage.setItem('placement',placement)
      //console.log(currentRank+" "+placement+" "+rankNum)
    }
  });
}, function(error) {
  console.error(error);
}); 
           
      

      
      this.biome = parseInt(localStorage.getItem("biome"));
      this.rankBadge = this.add.sprite(75, this.guildItemText.y+250, "rankBadge");  

      this.rankBadge.anchor.setTo(0.5, 0.5);
      this.rankText= this.add.text(this.rankBadge.x,this.rankBadge.y+40, this.currentRank,{font:'LondrinaSolid-Black'});
      this.rankText.fill= '#fff';  
      this.rankText.fontSize = 30;  
      this.rankText.anchor.setTo(0.5, 0.5);       
      this.rankText.wordWrap = true;
      this.rankText.wordWrapWidth = 600;
      this.rankText.align ='center'       
       
      this.expText= this.add.text(this.rankBadge.x,this.rankBadge.y+100, this.hunterExp+"/"+this.nextRankExp+"\n To Next Rank",{font:'LondrinaSolid-Black'});
      this.expText.fill= '#fff';  
      this.expText.fontSize = 24;  
      this.expText.anchor.setTo(0.5, 0.5);       
      this.expText.wordWrap = true;
      this.expText.wordWrapWidth = 600;
      this.expText.align ='center'      
            
      
      this.submitButton = this.add.sprite(this.game.width/2, this.game.height-150, "submit");  
      this.submitButton.anchor.setTo(0.5, 0.5); 
      this.submitButton.inputEnabled = true;
      this.submitButton.events.onInputDown.add(this.submit, this);  
      

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
      this.textBackdropText2.text = "Jean, the Collector"
      this.textBackdropText.text = "Welcome, <<"+this.title +">>.\nWhat'd you got for me?"
      this.chatTimer = 1;
      
      this.bgSound = this.add.audio('giftMusic');
      this.ping = this.add.audio('ping');

      if(!this.bgSound.isPlaying){
          this.bgSound.loop = true;
          this.bgSound.play();
          this.bgSound.volume = 0.5;
          //this.introCheck = true;
      }       
      
      firebase.database().ref('player/' +localStorage.getItem("userID")).update({
        rank: this.currentRank
      });       
  if (localStorage.getItem("firstVisit-rank") === null ) {
      localStorage.setItem("firstVisit-rank",1);
      this.textBackdropText.text = "Welcome to the Guild Hall.\nSubmit the requested resource to increase your HUNTER RANK."
      /*setTimeout(function () {
      alert("Welcome to the Guild Hall.\nSubmit resources to the guild to increase your HUNTER RANK. Higher HUNTER RANK means that you fight stronger monsters but get better LOOT!\n Are you ready to become the World's Top-Ranked Hunter?")
      }, 4000);  */   


  }  

      
    },

    update: function () {
      if(this.game.input.activePointer.isDown ){
        //console.log(this.submitting+" "+this.holdTimer)
        if(this.submitting){
          this.holdTimer++
          if(this.holdTimer>= 5){
            this.holdTimer= 0;
            this.submit();  
          }                
        }        
      }
      
      if(this.game.input.activePointer.isUp){
        if(this.submitting){
          this.chatTimer = 1;
          var inveNum = localStorage.getItem(guildItem[this.weekOfMonth].name+" Count")
          if(inveNum <= 0){
            this.textBackdropText.text = "You don't see to have any gems"
          }          
          this.submitting = false;
          this.holdTimer= 0;          
        }  
      
          
      }
      
      this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
      this.placement = parseInt(localStorage.getItem('placement')) 
      this.expText.text = "# "+this.placement+"\n"+(this.hunterExp)+"/"+(this.nextRankExp)+"\n To Next Rank"
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
          this.guildItemText3.text = "x"+inveNum+"/"+guildItem[this.weekOfMonth].qty     
      
          if(this.chatTimer > 0){           
            this.textBackdrop.alpha = 1;
            this.textBackdropText.alpha = 1;
            this.textBackdropText2.alpha = 1;
            this.textBackdrop.x = 0;
 
            this.submitButton.alpha = 0;
            this.returnButton.alpha = 0;       
          } 
          else{
            this.submitButton.alpha = 1;
            this.returnButton.alpha = 1;
            this.textBackdrop.alpha = 0;
            this.textBackdropText.alpha = 0;
            this.textBackdropText2.alpha = 0
            this.textBackdrop.x = this.game.width;            
            
          }
          var rankHolder = Math.floor(parseInt(localStorage.getItem("currentRank"))/10);
          //console.log(rankHolder)
          if(rankHolder > 2){
            rankHolder = 2;
          }
          this.rankBadge.loadTexture('rankBadge-'+rankHolder)
    },
    submit: function () {
      this.submitting = true;
      var inveNum = localStorage.getItem(guildItem[this.weekOfMonth].name+" Count")
      if(inveNum == null || guildItem[this.weekOfMonth].qty > inveNum){
        inveNum = 0;
        this.submitButton.loadTexture("submitNo")
      }
      else{
        this.ping.play();
        //this.chatTimer = 1;
        var randomVal = Math.floor(Math.random() * 3)+1;
        switch(randomVal){
          case 1:
            this.textBackdropText.text = "Shiny! Very good!"
            break;
          case 2:
            this.textBackdropText.text = "This may come in handy later ..."
            break;
          case 3:
            this.textBackdropText.text = "Nice! Can always do with extras ..."
            break;            
        }

        this.hunterExp += guildItem[this.weekOfMonth].exp*guildItem[this.weekOfMonth].qty     
        //this.hunterExp = 999999;
        var calRank = Math.round(0.1*Math.sqrt(this.hunterExp))
        localStorage.setItem("exp",this.hunterExp)
        var itemCount = parseInt(localStorage.getItem(guildItem[this.weekOfMonth].name+" Count"))
        itemCount -= guildItem[this.weekOfMonth].qty
        localStorage.setItem(guildItem[this.weekOfMonth].name+" Count",itemCount)        
        if(this.hunterExp >= this.nextRankExp ){
          //console.log("level Up")
          
          this.currentRank = calRank; 
          this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
          this.nextRankExp = Math.round(Math.pow((this.currentRank+1)/0.1, 2)); 
          this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))    
          
          if (localStorage.getItem("RankedUp") === null) {
            localStorage.setItem("RankedUp",0)
          }            
          localStorage.setItem("RankedUp",1)
          localStorage.setItem("currentRank",calRank)
          //localStorage.setItem("currentRank",99999)
          //console.log(calRank)
          
          //uncommon unlock
          if(calRank >= 5 && parseInt(localStorage.getItem("uncommonUnlock")) == 0){
            localStorage.setItem("uncommonUnlock",1)
            this.submitting = false;
            this.chatTimer = 1;
            this.textBackdropText.text = "A couple hunters have seen UNCOMMON monsters on hunts. Interesting!"
          }  
          //rare unlock
          if(calRank >= 10 && parseInt(localStorage.getItem("rareUnlock")) == 0){
            localStorage.setItem("rareUnlock",1)
            this.submitting = false;
            this.chatTimer = 1;
            this.textBackdropText.text = "A few hunters have reported RARE monster sightings. Wonder what kind of loot they drop?"
          }            
          //surge unlock
          if(calRank >= 15 && parseInt(localStorage.getItem("surgeUnlock")) == 0){
            localStorage.setItem("surgeUnlock",1)
            this.submitting = false;
            this.chatTimer = 1;
            this.textBackdropText.text = "Rumor has it that monster populations are SURGING now! You know what that means? More Loot!"
          }   
          //mutant unlock
          if(calRank >= 20 && parseInt(localStorage.getItem("mutantUnlock")) == 0){
            localStorage.setItem("mutantUnlock",1)
            this.submitting = false;
            this.chatTimer = 1;
            this.textBackdropText.text = "Word in the Guild Hall, is that SUPER-RARE mutant versions of monsters are showing up."
          }   
          //legend hunt unlock
          if(calRank >= 25 && parseInt(localStorage.getItem("legendHuntUnlock")) == 0 ){
            this.legendHuntUnlockChat = 0;
            localStorage.setItem("legendHuntUnlock",1)
            this.submitting = false;
            this.chatTimer = 1;
            this.textBackdropText.text = "The Factions need some help their 'LEGENDARY hunts. I volunteered you of course."
          }              
          
          firebase.database().ref('player/' +localStorage.getItem("userID")).update({
            rank: localStorage.getItem("currentRank")
          });             
        }
      }
var query = firebase.database().ref("player");
//this.placement = 1;
localStorage.setItem('placement',1)
query.on("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    // key will be "ada" the first time and "alan" the second time
    var key = childSnapshot.key;
    // childData will be the actual contents of the child
    var childData = childSnapshot.val();
    var rankNum = 0;
    rankNum = parseInt(childData.rank)
    if(isNaN(rankNum)){
      rankNum = 0
    }
    //console.log(rankNum)
    var placement = parseInt(localStorage.getItem('placement'))
    var currentRank = parseInt(localStorage.getItem("currentRank"))
    if(currentRank < rankNum){
      
      placement++;
      localStorage.setItem('placement',placement)
      //console.log(currentRank+" "+placement+" "+rankNum)
    }
  });
}, function(error) {
  console.error(error);
});       
    }
    , hideChat: function (unit) {
        this.chatTimer = 0;
        if(this.legendHuntUnlockChat == 0){
          this.legendHuntUnlockChat++
          this.chatTimer = 1;
          this.textBackdropText.text = "You should find them set up in the Hunting Zones"
        }
        //this.wardenHunt.width = 460;
        //this.wardenHunt.height = 260;  
        //this.wardenHunt.clicked = true;     
        //this.game.state.start('game') 

    }      
    ,     
    onDown: function () {
     //localStorage.setItem('state','warden')
      this.ping.play();
      this.bgSound.stop();        
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
  window['simplewar'].Rank = Rank;

}());
