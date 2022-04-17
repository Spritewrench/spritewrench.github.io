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
      this.veteranRank = this.add.sprite(this.game.width/2-125,90, 'vetRank');
      this.veteranRank.width = 40
      this.veteranRank.height = 40         

      this.veteranRankText = this.add.text(this.game.width/2, 110, "Veteran Rank: "+localStorage.getItem("veteranRank"),{font:'LondrinaSolid-Black'});
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

      //console.log(this.weekOfMonth)
      this.title = localStorage.getItem("playerTitle")
      this.guildItemText = this.add.text(x,this.game.height/2-150, "You currently have: ",{font:'LondrinaSolid-Black'});
      this.guildItemText.fill= '#fff';  
      this.guildItemText.fontSize = 24;    
      this.guildItemText.align ='center'         
      this.guildItemText.anchor.setTo(0.5, 0.5);      
      
      this.guildItem = this.add.sprite(this.game.width/2, this.game.height/2-90, guildItem[this.weekOfMonth].name);
      this.guildItem.anchor.setTo(0.5, 0.5);

      
      this.huntTickets = this.add.sprite(0,0, 'huntTickets');
      this.huntTickets.TapCount = 7;
      this.huntTickets.alpha = 0;
      //this.fireWrite();         
      
      this.arrowLeft = this.add.sprite(10, this.game.height/2-100, "craftArrowLeft");  
      this.arrowLeft.inputEnabled = true;
      this.arrowLeft.events.onInputDown.add(this.left, this);  

      this.arrowRight = this.add.sprite(this.game.width-100, this.game.height/2-100, "craftArrowRight");  
      this.arrowRight.inputEnabled = true;
      this.arrowRight.events.onInputDown.add(this.right, this);    


      this.guildItemText2 = this.add.text(x, this.guildItem.y+(this.guildItem.height/2)+70, guildItem[this.weekOfMonth].name+"\n for "+guildItem[this.weekOfMonth].exp+" EXP points EACH",{font:'LondrinaSolid-Black'});
      this.guildItemText2.fill= '#fff';  
      this.guildItemText2.fontSize = 24;  
      this.guildItemText2.anchor.setTo(0.5, 0.5);       
      this.guildItemText2.wordWrap = true;
      this.guildItemText2.wordWrapWidth = 300;    
      this.guildItemText2.align ='center'    
      
      
      this.guildItemText3 = this.add.text(x, this.guildItem.y+(this.guildItem.height/2)+150,"test/test" ,{font:'LondrinaSolid-Black'});
      //this.guildItemText3.fill= '#fff';  
      this.guildItemText3.fill= '#97B7F2';
      this.guildItemText3.fontSize =24;  
      this.guildItemText3.anchor.setTo(0.5, 0.5);      
      this.guildItemText3.align ='center'           
      

      this.mapWarden = this.add.sprite(this.game.width, 0, 'guildWarden');
      this.mapWarden.width = this.game.width;
      this.mapWarden.height = this.game.height;           
 
            
      
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
      
      this.contDir = 0;
      this.dirCount = 0
      this.dirMaxFlag = 0
   
  if (localStorage.getItem("firstVisit-rank") === null ) {
      localStorage.setItem("firstVisit-rank",1);
      this.textBackdropText.text = "Welcome to the Guild Hall.\nI'll buy your items for Veteran Points."
      /*setTimeout(function () {
      alert("Welcome to the Guild Hall.\nSubmit resources to the guild to increase your HUNTER RANK. Higher HUNTER RANK means that you fight stronger monsters but get better LOOT!\n Are you ready to become the World's Top-Ranked Hunter?")
      }, 4000);  */   


  }  

      this.inventoryKey = 0;
      this.inventoryKey2 = 0;
      this.inventoryKey3 = 0;
      this.inventoryCounter = 2;
    },

    update: function () {
      this.textBackdropText.x = Math.floor( this.textBackdropText.x )
      this.textBackdropText.y = Math.floor( this.textBackdropText.y )
      //this.textBackdropText.smoothed = false

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
                       
      this.veteranRankText.text = "Veteran Rank: "+this.veteranRankHolder2
      this.veteranPointText.text = "Veteran Points: "+this.veteranPointHolder2
      
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
            this.textBackdropText.text = "You're all out!"
          }          
          this.submitting = false;
          this.holdTimer= 0;          
        }  
      
          
      }
      this.holderArray = Object.keys(deadMonster[this.inventoryKey]);
      this.holderText = ""
      this.inveNum = 0;
      if(this.inventoryKey3 == 0){
        //console.log(deadMonster[this.inventoryKey][this.inventoryKey2].commonRewards[2].desc)
        //console.log(this.inventoryKey+" "+this.inventoryKey2+" "+this.holderArray[this.inventoryKey2])
        this.guildItem.loadTexture(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[this.inventoryCounter])
        //+deadMonster[this.inventoryKey][this.inventoryKey2].commonRewardsDesc[this.inventoryCounter]
        
        if (localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[this.inventoryCounter]+" Count") === null ) {
          localStorage.setItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[this.inventoryCounter]+" Count",0)
        }

        this.guildItemText2.text = "-COMMON-\n"+deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[this.inventoryCounter]+" x"+localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[this.inventoryCounter]+" Count");
        this.guildItemText3.text = localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[this.inventoryCounter]+" Count");
        this.holderText = deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[this.inventoryCounter]+" Count"
        this.inveNum = parseInt(localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[this.inventoryCounter]+" Count"))
        if(this.inveNum <= 0 && this.dirCount < this.rewardLength && this.dirMaxFlag == 0){
          this.dirCount++;
          //this.inventoryKey3++;
          if(this.contDir == 0){
            this.right();
          }
          else{
            this.left();
            //this.contDir = 0;
          }
          
        }
        else{
          this.dirCount = 0;
        }         
      }
      if(this.inventoryKey3 == 1){
        //console.log(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[2].desc)
        //console.log(this.inventoryCounter)
        this.guildItem.loadTexture(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].uncommonRewards[this.inventoryCounter])

        if (localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].uncommonRewards[this.inventoryCounter]+" Count") === null ) {
          localStorage.setItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].uncommonRewards[this.inventoryCounter]+" Count",0)
        }        

        this.guildItemText2.text = "-UNCOMMON-\n"+deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].uncommonRewards[this.inventoryCounter]+" x"+localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].uncommonRewards[this.inventoryCounter]+" Count");
        this.guildItemText3.text = localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].uncommonRewards[this.inventoryCounter]+" Count");
        this.holderText = deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].uncommonRewards[this.inventoryCounter]+" Count"
        this.inveNum = parseInt(localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].uncommonRewards[this.inventoryCounter]+" Count"))
        if(this.inveNum <= 0 && this.dirCount < this.rewardLength && this.dirMaxFlag == 0){
          this.dirCount++;
          //this.inventoryKey3++;
          if(this.contDir == 0){
            this.right();
          }
          else{
            this.left();
            //this.contDir = 0;
          }
          
        }
        else{
          this.dirCount = 0;
        } 
      }   
      if(this.inventoryKey3 == 2){
        //console.log(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].commonRewards[2].desc)
        //console.log(this.inventoryCounter)
        this.guildItem.loadTexture(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].rareRewards[this.inventoryCounter])

        if (localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].rareRewards[this.inventoryCounter]+" Count") === null ) {
          localStorage.setItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].rareRewards[this.inventoryCounter]+" Count",0)
        }     

        this.guildItemText2.text = "-RARE-\n"+deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].rareRewards[this.inventoryCounter]+" x"+localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].rareRewards[this.inventoryCounter]+" Count");
        this.guildItemText3.text = localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].rareRewards[this.inventoryCounter]+" Count");
        this.holderText = deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].rareRewards[this.inventoryCounter]+" Count"
        this.inveNum = parseInt(localStorage.getItem(deadMonster[this.inventoryKey][this.holderArray[this.inventoryKey2]].rareRewards[this.inventoryCounter]+" Count"))
        if(this.inveNum <= 0 && this.dirCount < this.rewardLength && this.dirMaxFlag == 0){
          this.dirCount++;
          //this.inventoryKey3++;
          if(this.contDir == 0){
            this.right();
          }
          else{
            this.left();
            //this.contDir = 0;
          }
          
        }   
        else{
          this.dirCount = 0;
        }    
      }            
      
      var size1 = deadMonster[0].filter(function(value) { 
        //console.log(value)
        return value !== undefined 
      }).length -1
      var size2 = deadMonster[1].filter(function(value) { 
        //console.log(value)
        return value !== undefined 
      }).length -1
      var size3 = deadMonster[2].filter(function(value) { 
        //console.log(value)
        return value !== undefined 
      }).length -1     
      
      //size1+size2+size3
      if(this.contDir == 0){
        this.rewardLength = 75
      }
      else{
        this.rewardLength = 75
      }
      //console.log(this.rewardLength + " "+ this.dirCount+" fald "+this.dirMaxFlag)
      if(this.dirCount >= this.rewardLength && this.dirMaxFlag == 0){
        this.chatTimer = 1;
        this.dirMaxFlag = 1
        this.textBackdropText.text = "You pack's seeming kinda light there, friend.\n Maybe come back after a few hunts?"      
        var tixCount = parseInt(localStorage.getItem("TixCount0"))+parseInt(localStorage.getItem("TixCount1"))+parseInt(localStorage.getItem("TixCount2"))
        var vetPoints = parseInt(localStorage.getItem("veteranPoints"))
        if(vetPoints < 250 && tixCount <= 3){
          var diff = 250 - vetPoints
          this.textBackdropText.text = "You pack's seeming kinda light there, friend.\n Tell you what, here's a freebie\nVeteran Point x"+diff+"."       
          localStorage.setItem("veteranPoints",(vetPoints+diff))           
        }  
      }


      

      //this.guildItemText2.text += "\nThe Guild will purchase ALL these items for:"
      this.placement = parseInt(localStorage.getItem('placement')) 
     // this.expText.text = "# "+this.placement+"\n"+(this.hunterExp)+"/"+(this.nextRankExp)+"\n To Next Rank"
     // this.rankText.text = this.currentRank;
          var rate = 1;
          if(this.inventoryKey3 == 1){
            rate = 5;
          }
          if(this.inventoryKey3 == 2){
            rate = 10;
          }          
          if(this.holderArray[this.inventoryKey2] == 99){
            rate *= 100
          }
          this.rate = (this.inveNum*rate);
          this.guildItemText3.text =  this.rate+" Veteran Points"
          this.guildItemText3.fill = 'white'
           this.submitButton.loadTexture("submit")

          if(this.inveNum == null){
            this.inveNum = 0;
            
            //this.guildItemText3.fill ='red'
            this.submitButton.loadTexture("submitNo")
          }
          if(this.inveNum <= 0){
            this.guildItemText3.text =  ""
            //this.guildItemText3.fill ='red'
            this.submitButton.loadTexture("submitNo")
          }
          if(this.inveNum > 0){
            this.guildItemText2.text += "\nThe Guild will purchase ALL these items for:"
          }
          //this.guildItemText3.text = "x"+inveNum+"/"+guildItem[this.weekOfMonth].qty     
          this.guildItemText3.fill= '#97B7F2';
          if(this.chatTimer > 0){    
            this.mapWarden.x += (0 - this.mapWarden.x) * 0.1;        
            this.textBackdrop.alpha = 1;
            this.textBackdropText.alpha = 1;
            this.textBackdropText2.alpha = 1;
            this.textBackdrop.x = 0;
 
            this.submitButton.alpha = 0;
            this.returnButton.alpha = 0;       
          } 
          else{
            this.mapWarden.x += (800 - this.mapWarden.x) * 0.1; 
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

          if( this.dirMaxFlag == 1){
            this.guildItem.alpha = 0;
            this.guildItemText2.text = "- Absolutely Nothing -\n:("
            this.guildItemText3.text = "~"
            this.holderText = ""        
          }
          else{
            this.guildItem.alpha = 1;
          }          

    },

    left: function () {
      //console.log(this.guildItemText2.text)
      this.contDir = 1;
      
      this.dirMaxFlag = 0;
      if(this.inventoryKey3 == 0){
        this.inventoryKey3 = 2;
        var size =  this.holderArray.filter(function(value) { 
          //console.log(value)
          return value !== undefined 
        }).length       
        this.inventoryKey2--
        
        if(this.inventoryKey2 < 0){
          this.inventoryKey2 = size-1;
          var size =  deadMonster.filter(function(value) { 
            //console.log(value)
            return value !== undefined 
          }).length              
          this.inventoryKey--;
          if(this.inventoryKey < 0){
            this.inventoryKey = size-1;
          }          
        }

        //console.log(this.inventoryKey) 
        this.inventoryCounter = 1
        
      }   
      else if(this.inventoryKey3 == 1){
        this.inventoryCounter--;
        if(this.inventoryCounter <= 0){
          
          this.inventoryCounter = 2
          this.inventoryKey3--
        }
      }
      else if(this.inventoryKey3 == 2){
        this.inventoryCounter--;
        if(this.inventoryCounter <= 0){
          this.inventoryCounter = 3
          this.inventoryKey3--
          var size =  this.holderArray.filter(function(value) { 
            //console.log(value)
            return value !== undefined 
          }).length         
          this.inventoryKey2 == size-1;

          
        }
      }     

    }
    ,
    right: function () {
      this.contDir = 0;
      this.dirMaxFlag = 0;
      //console.log(Object.keys(deadMonster[this.inventoryKey]))
      if(this.inventoryKey3 == 0){
        this.inventoryKey3++
        this.inventoryCounter = 1
      }   
      else if(this.inventoryKey3 == 1){
        this.inventoryCounter++;
        if(this.inventoryCounter > 3){
          
          this.inventoryCounter = 1
          this.inventoryKey3++
        }
      }
      else if(this.inventoryKey3 == 2){
        this.inventoryCounter++;
        if(this.inventoryCounter > 1){
          this.inventoryCounter = 2
          this.inventoryKey2++
          var size =  this.holderArray.filter(function(value) { 
            //console.log(value)
            return value !== undefined 
          }).length            
          
          //console.log(this.inventoryKey2 > size-1)
          if(this.inventoryKey2 > size-1){
            this.inventoryKey++;
            this.inventoryKey2 = 0;
            
            this.inventoryCounter = 2;
          }
          this.inventoryKey3 = 0;

          
        }
      }     
      var size =  deadMonster.filter(function(value) { 
        //console.log(value)
        return value !== undefined 
      }).length
      //console.log("length "+size)             
      if(this.inventoryKey > size-1){
        this.inventoryKey = 0;
        this.inventoryKey2 = 0;
        this.inventoryKey3 = 0;
        this.inventoryCounter = 2;
      }
    }
    ,        
    submit: function () {
    
    var currentPoints = parseInt(localStorage.getItem("veteranPoints"));
    //console.log(currentPoints+" "+this.rate+" "+this.holderText)
      //this.inveNum > 0
     if(this.inveNum > 0){
      localStorage.setItem("veteranPoints",currentPoints+parseInt(this.rate) )
      localStorage.setItem(this.holderText,0)
      this.chatTimer = 1;
      this.textBackdropText.text = "I'll be taking that and here are your Veteran Points"      
      this.saleComplete = 1
      this.dirMaxFlag = 1;
     }
    }
    , hideChat: function (unit) {
      //this.dirMaxFlag = 0
        if(this.legendHuntUnlockChat == 0){
          this.legendHuntUnlockChat++
          this.chatTimer = 1;
          this.textBackdropText.text = "You should find them set up in the Hunting Zones"
        }
        if(this.saleComplete == 1){
          this.saleComplete = 0;
          this.dirMaxFlag = 0;
        }        
        if(this.chatTimer == 10){
          //this.dirCount = 0
        }
        this.chatTimer = 0;
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
