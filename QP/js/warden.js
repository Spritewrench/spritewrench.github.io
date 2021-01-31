(function () {
    'use strict';

    function Warden() {
        this.player = null;
    }
    Warden.prototype = {
        create: function () {
            try{
                setupVideoReward()
                getAds()
            }
            catch(error){
              //admob.rewardVideo.show();   
            }           
            //set carve ad
            localStorage.setItem("letsCarve",0);
            this.game.stage.backgroundColor = "#160c2c";
            this.game.stage.backgroundColor = "#160c2c";
            //console.log(localStorage.getItem("biome"))
            var d = new Date();
            var date = d.getDate();
            var day = d.getDay();         
            this.day = day
            //this.day = 5
            
            this.biome = parseInt(localStorage.getItem("Markerbiome"))
            
            var d = new Date();
            var date = d.getDate();
            var day = d.getDay();         
            //this.day = 5
            if(day >  tixDiscount.length-1){
              day -= Math.floor(day/(tixDiscount.length-1))*(tixDiscount.length-1)-1
            } 
            
            this.title = localStorage.getItem("playerTitle")
                     
            this.truebiome = parseInt(tixDiscount[day])    
            
            this.markerBiome = this.biome
            
            this.map = this.add.sprite(0, 0, 'BG'+localStorage.getItem("Markerbiome"));
            this.map.width = this.game.width;
            this.map.height = this.game.height;           
            
            this.hasLost = parseInt(localStorage.getItem("hasLost"))
            
            this.mapOpacity = this.add.sprite(0, 0, 'wardenOpacity');
            this.mapOpacity.width = this.game.width;
            this.mapOpacity.height = this.game.height; 
          
            this.introText = this.add.text(10, 10, "Looking For:",{font:'LondrinaSolid-Black'});
            this.introText.fill= '#fff';
            this.introText.fontSize = 28;
            //this.introText.anchor.setTo(0.5, 0.5);             
          
            //this.mapOverlay = this.add.sprite(0, 0, 'wardenOverlay');
            //this.mapOverlay.alpha = 0;
            //this.mapOverlay.width = this.game.width;
            //this.mapOverlay.height = this.game.height;           
          
            this.mapWarden = this.add.sprite(this.game.width, 0, 'warden'+this.biome);
            this.mapWarden.width = this.game.width;
            this.mapWarden.height = this.game.height;    
          
            this.wardenRelationship = this.add.sprite(this.game.width-100, 40, 'relationship');
            if (localStorage.getItem("wardenLevel"+this.biome) === null) {
              localStorage.setItem("wardenLevel"+this.biome,1)
            }  
            this.relationshipText = this.add.text(this.wardenRelationship.x+this.wardenRelationship.width/2, this.wardenRelationship.y+(this.wardenRelationship.height/2)+10, localStorage.getItem("wardenLevel"+this.biome),{font:'LondrinaSolid-Black'});
            this.relationshipText.fill= '#fff';
            this.relationshipText.fontSize = 28;
            this.relationshipText.anchor.setTo(0.5, 0.5); 
          
          
            this.introText2 = this.add.text(10, this.introText.y+155, "Reward:",{font:'LondrinaSolid-Black'});
            this.introText2.fill= '#fff';
            this.introText2.fontSize = 28;
          
            this.huntTickets = this.add.sprite(0,200, 'huntTickets');
            this.huntTickets.alpha = 0;
          
            this.huntTicketsText = this.add.text(this.huntTickets.x+this.huntTickets.width/2+60, this.huntTickets.y+(this.huntTickets.height/2), "x2",{font:'LondrinaSolid-Black'});
            this.huntTicketsText.alpha = 0;
            this.huntTicketsText.fill= '#fff';
            this.huntTicketsText.fontSize = 28;
            this.huntTicketsText.anchor.setTo(0.5, 0.5);       
          
            this.requestItem = this.add.sprite(25, this.introText.y+50, 'Small Monster Bone');    
            this.requestItem.alpha = 0;
            console.log(this.biome)
            this.ranRequest1 = Math.floor(Math.random() * deadMonster[this.biome].length)+1;
            this.ranRequest2 = Math.floor(Math.random() * 2)+1;
            
            
            this.requestedCount = 3
            this.requestItemText = this.add.text(this.requestItem.x+this.requestItem.width/2+126, this.requestItem.y+(this.requestItem.height/2), "x"+this.requestedCount,{font:'LondrinaSolid-Black'});
            this.requestItemText.alpha = 0;
            this.requestItemText.fill= '#fff';
            this.requestItemText.fontSize = 24;
            this.requestItemText.anchor.setTo(0.5, 0.5);     
            this.requestItemText.wordWrap = true;
            this.requestItemText.wordWrapWidth = 150;             
          
            this.wardenHunt = this.add.sprite((this.game.width/2)-75,(this.game.height/2)+80, 'wardenHunt0');
            this.wardenHunt.anchor.setTo(0.5, 0.5);
            this.wardenHunt.width = 200
            this.wardenHunt.height = 120   
            this.wardenHunt.clicked = false;
            this.wardenHunt.inputEnabled = true;
            this.wardenHunt.events.onInputDown.add(this.hunt, this);             
            
            this.tixText = this.add.text(this.wardenHunt.x-28, this.wardenHunt.y-30, "1/1",{font:'LondrinaSolid-Black'});
            this.tixText.fill= '#fff';
            this.tixText.fontSize = 18;
            this.tixText.anchor.setTo(0.5, 0.5);    
            this.tixText.alpha = 0
          
            this.wardenGift = this.add.sprite((this.game.width/2)-75,(this.game.height/2)+180, 'wardenGift');
            this.wardenGift.anchor.setTo(0.5, 0.5);
            this.wardenGift.width = 200
            this.wardenGift.height = 120   
            this.wardenGift.inputEnabled = true;
            this.wardenGift.events.onInputDown.add(this.gift, this);             
            
            this.relationshipText.text =  localStorage.getItem("wardenLevel"+this.biome)
            //this.gray = this.game.add.filter('Gray');
            this.Map = this.add.sprite((this.game.width)-60,(this.game.height)-50, 'returnHub');
            this.Map.anchor.setTo(0.5, 0.5);

            this.Map.clicked = false;
            this.Map.inputEnabled = true;
            this.Map.events.onInputDown.add(this.goToMap, this);         
          
            this.openCraft = this.add.sprite(60,(this.game.height)-50, 'openCraft');
            this.openCraft.anchor.setTo(0.5, 0.5);  
            this.openCraft.clicked = false;
            this.openCraft.inputEnabled = true;
            this.openCraft.events.onInputDown.add(this.goToCraft, this);          
          
            this.Notification = this.add.sprite(60,(this.game.height)-50, 'notification');
            this.Notification.anchor.setTo(0.5, 0.5);  
            this.Notification.alpha = 0;
                 

            this.openFaction = this.add.sprite(this.game.width/2,(this.game.height)-50, 'openFactionNo');
            this.openFaction.anchor.setTo(0.5, 0.5);
          
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
          
            this.chatTimer = 1;
            this.relationshipLevel = parseInt(localStorage.getItem("wardenLevel"+this.biome));
            switch(this.biome){
              case 0:
                this.textBackdropText2.text = "Neeka, the Sure"  
                this.textBackdropText.text = "Well met, <<"+this.title+">>"
                
                if(this.hasLost == 1){
                  this.textBackdropText.text = "Ah! \nBested by a "+localStorage.getItem("monSize")+" "+localStorage.getItem("monNameTitle")+"? Maybe try a different weapon?"
                  localStorage.setItem("hasLost",0);
                }                
                this.rankedUp = parseInt(localStorage.getItem("RankedUp"))
                if(this.rankedUp == 1){
                  this.textBackdropText.text = "Ah! \nCongratulations! Well done on the new Rank."
                  localStorage.setItem("RankedUp",0);
                }  
                this.lowDur = parseInt(localStorage.getItem("lowDurability"))
                if(this.lowDur == 1){
                  this.textBackdropText.text = "Your weapon seems a bit worn, <<"+this.title+">>.\n You should take better care of it."
                  localStorage.setItem("lowDurability",0);
                }                       
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  warden0: this.relationshipLevel
                });                  
                break;
              case 1:
                this.textBackdropText2.text = "Roz, the Steady"  
                this.textBackdropText.text = "Greetings, Traveler"
                if(this.hasLost == 1){
                  this.textBackdropText.text = "Defeated by a "+localStorage.getItem("monSize")+" "+localStorage.getItem("monNameTitle")+"? Mayhaps a different weapon would be best?"                  

                  localStorage.setItem("hasLost",0);
                }      
                this.rankedUp = parseInt(localStorage.getItem("RankedUp"))
                if(this.rankedUp == 1){
                  this.textBackdropText.text = "oh! \nA new Rank! Sounds like celebrations are in order!."
                  localStorage.setItem("RankedUp",0);
                }          
                this.lowDur = parseInt(localStorage.getItem("lowDurability"))
                if(this.lowDur == 1){
                  this.textBackdropText.text = "My friend, your weapon has seen better days!\nYou must repair it!"
                  localStorage.setItem("lowDurability",0);
                }                         
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  warden1: this.relationshipLevel
                });                  
                break;
              case 2:
                this.textBackdropText2.text = "Rayla, the Indifferent"  
                this.textBackdropText.text = "What'd you want?"
                if(this.hasLost == 1){
                  this.textBackdropText.text = "Got wrecked by a "+localStorage.getItem("monSize")+" "+localStorage.getItem("monNameTitle")+"? I'd suggest a different weapon?"
                  localStorage.setItem("hasLost",0);
                }       
                this.rankedUp = parseInt(localStorage.getItem("RankedUp"))
                if(this.rankedUp == 1){
                  this.textBackdropText.text = "A new Rank?\nWhat ... you want a cookie or something?"
                  localStorage.setItem("RankedUp",0);
                }
                
                this.lowDur = parseInt(localStorage.getItem("lowDurability"))
                if(this.lowDur == 1){
                  this.textBackdropText.text = "Your weapon is looking kinda shabby.\nMaybe you should fix that?"
                  localStorage.setItem("lowDurability",0);
                }                
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  warden2: this.relationshipLevel
                });                  
                break;                
            }
            this.bgSound = this.add.audio('wardenMusic');
            this.ping = this.add.audio('ping');
            
            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            }    
  if (localStorage.getItem("firstVisit-warden") === null ) {
      localStorage.setItem("firstVisit-warden",1);
      var location = ""
      switch(this.biome){
        case 0:
          location = "Grasslands"
          break;
        case 1:
          location = "Caverns"
          break;
        case 2:
          location = "Mountains"
          break;
      }
      this.textBackdropText.text = "Welcome to the "+location+", <<"+this.title+">>.\nHere you can battle monsters as you see fit."  

  }           
         
        }          
        , update: function () {
          this.Notification.alpha = 0;  
          //this.Notification.alpha = 1;
          for(var i = 4; i < 16; i++){
            //console.log(weapon[i]+" "+i)
            if(typeof weapon[i] != "undefined"){
              console.log(weapon[i].craft[0].name+" "+weapon[i].craft[1].name)
              var count1 = parseInt(localStorage.getItem(weapon[i].craft[0].name+" Count"));
              var count2 = parseInt(localStorage.getItem(weapon[i].craft[1].name+" Count"));
              this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[i].id));
              if (localStorage.getItem("crafted"+weapon[i].id) === null) {
                localStorage.setItem("crafted"+weapon[i].id,0)
                this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[i].id));
              } 
              console.log("Has this been crafted? "+this.hasCrafted)
              console.log("weapon "+i+" need 1:"+count1+"/"+weapon[i].craft[0].count+" need 2:"+count2+"/"+weapon[i].craft[1].count)
              if(count1 >= weapon[i].craft[0].count && count2 >= weapon[i].craft[1].count && this.hasCrafted == 0){
                this.Notification.alpha = 1;  
              }              
            }
          }

            
          
          
          
          this.wardenHunt.loadTexture("wardenHunt"+this.biome)
          if(this.truebiome == this.markerBiome && this.day < 5){
            
            this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/1"
          }
          else if(this.day >= 5){
            
            this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/2"
          }          
          else{
            this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/3"
          }  
          //parseInt(localStorage.getItem("TixCount"+this.markerBiome)) <= 0
          if(parseInt(localStorage.getItem("TixCount"+this.markerBiome)) <= 0){
            this.wardenHunt.loadTexture("wardenHunt-No")
          }
          this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
          if(this.mapWarden.x <= 10 && this.chatTimer <= 0){
            this.introText.alpha = 1;
            this.introText2.alpha = 1;
            this.textBackdrop.alpha = 0;
            this.textBackdropText.alpha = 0;
            this.textBackdropText2.alpha = 0
            this.textBackdrop.x = this.game.width;
            //this.mapOverlay.alpha += (1 - this.mapOverlay.alpha) * 0.1; 
            this.huntTickets.alpha += (1 - this.huntTickets.alpha) * 0.1; 
            this.huntTicketsText.alpha += (1 - this.huntTicketsText.alpha) * 0.1;  
            
            this.requestItem.alpha += (1 - this.requestItem.alpha) * 0.1; 
            this.requestItemText.alpha += (1 - this.requestItemText.alpha) * 0.1; 
            this.wardenHunt.alpha = 1;
            this.wardenGift.alpha = 1;
            this.tixText.alpha = 1
          }

          if(this.chatTimer > 0){
            this.introText.alpha = 0;
            this.introText2.alpha = 0;            
            this.textBackdrop.alpha = 1;
            this.textBackdropText.alpha = 1;
            this.textBackdropText2.alpha = 1;
            this.textBackdrop.x = 0;
            this.huntTickets.alpha += (0 - this.huntTickets.alpha) * 0.1; 
            this.huntTicketsText.alpha += (0 - this.huntTicketsText.alpha) * 0.1;  
            
            this.requestItem.alpha += (0 - this.requestItem.alpha) * 0.1; 
            this.requestItemText.alpha += (0 - this.requestItemText.alpha) * 0.1;      
            this.wardenHunt.alpha = 0;
            this.wardenGift.alpha = 0;  
            this.tixText.alpha = 0;
          }
          var d = new Date();
          var date = d.getDate();
          var day = d.getDay(); 
          
          

          if(date >  npcReward[this.biome].length-1){

            date -= Math.floor(date/( npcReward[this.biome].length-1))*( npcReward[this.biome].length-1)
            if(date <= 0){
              date = 1;
            }             
          }      

          ////console.log(date)           
          this.huntTickets.loadTexture(npcReward[this.biome][date]);
          
          
          var date = d.getDate();
          if(date >  deadMonster[this.biome].length-1){
            ////console.log( deadMonster[this.biome])
            ////console.log("asd "+Math.floor(date/( deadMonster[this.biome].length-1)))
            ////console.log("asasd "+(deadMonster[this.biome].length-1))
            date -= Math.floor(date/( deadMonster[this.biome].length-1))*( deadMonster[this.biome].length-1)
            if(date <= 0){
              date = 1;
            }                  
          }             
          ////console.log(deadMonster[this.biome][date].commonRewards[1]+" Count")
          this.requestItem.loadTexture(deadMonster[this.biome][date].commonRewards[2]);
          if (localStorage.getItem(deadMonster[this.biome][date].commonRewards[2]+" Count") === null) {
            localStorage.setItem(deadMonster[this.biome][date].commonRewards[2]+" Count",0)
          }          
          this.requestItemText.text= deadMonster[this.biome][date].commonRewards[2]+"\nx"+localStorage.getItem(deadMonster[this.biome][date].commonRewards[2]+" Count")+"/"+this.requestedCount
          
          this.relationshipText.text = localStorage.getItem("wardenLevel"+this.biome);
          

        }
        , hunt: function (unit) {
            //this.wardenHunt.width = 460;
            //this.wardenHunt.height = 260;  
         
            this.wardenHunt.clicked = true;     
         
            
            if(this.truebiome == this.markerBiome && (localStorage.getItem("TixCount"+this.markerBiome)-1) >= 0 && this.day < 5){
              localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-1);
              localStorage.setItem("Markerbiome",this.markerBiome)
              this.ping.play();
              this.bgSound.stop();               
              this.game.state.start('game') 
            }
            else if(this.day >= 5 && (localStorage.getItem("TixCount"+this.markerBiome)-2) >= 0){
              localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-2);
              localStorage.setItem("Markerbiome",this.markerBiome)
              this.ping.play();
              this.bgSound.stop();               
              this.game.state.start('game') 
            }          
            else if ((localStorage.getItem("TixCount"+this.markerBiome)-3) >= 0){
              localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-3);
              localStorage.setItem("Markerbiome",this.markerBiome)
              
              this.ping.play();
              this.bgSound.stop(); 
              this.game.state.start('game') 
            }
            else{
              alert("Not Enough Tickets! :(")
            }          
        }
        , hideChat: function (unit) {
            this.chatTimer = 0;
            if (parseInt(localStorage.getItem("firstVisit-warden")) == 1 ) {
                this.chatTimer = 1;
                localStorage.setItem("firstVisit-warden",2);
                var location = ""
                switch(this.biome){
                  case 0:
                    location = "Grasslands"
                    break;
                  case 1:
                    location = "Caverns"
                    break;
                  case 2:
                    location = "Mountains"
                    break;
                }
                this.textBackdropText.text = "Of course, as long you have enough tickets"  

            }           
            //this.wardenHunt.width = 460;
            //this.wardenHunt.height = 260;  
            //this.wardenHunt.clicked = true;     
            //this.game.state.start('game') 

        }      
        , goToMap: function (unit) {
            this.Map.clicked = true;
            this.ping.play();
            this.bgSound.stop();          
            //window.location.href = "index2.html";
            this.game.state.start('hub') 
        }   
        , goToCraft: function (unit) {
           //localStorage.setItem('state','craft')
            
            this.bgSound.stop();          
           this.game.state.start('craft') 
            
        }    
        , goToGuild: function (unit) {
           //localStorage.setItem('state','craft')
           this.game.state.start('rank') 
            
        }        
        , gift: function (unit) {
          
          this.relationshipLevel = parseInt(localStorage.getItem("wardenLevel"+this.biome));
          //console.log("gift")
          var d = new Date();
          var date = d.getDate();          
          var date = d.getDate();

          if(date >  deadMonster[this.biome].length-1){
            ////console.log( deadMonster[this.biome])
            ////console.log("asd "+Math.floor(date/( deadMonster[this.biome].length-1)))
            ////console.log("asasd "+(deadMonster[this.biome].length-1))
            date -= Math.floor(date/( deadMonster[this.biome].length-1))*( deadMonster[this.biome].length-1)
            if(date <= 0){
              date = 1;
            }            
          }  
          
          var invenNum = parseInt(localStorage.getItem(deadMonster[this.biome][date].commonRewards[2]+" Count"))
          //invenNum = 999;
          //invenNum - 10 >= 0
          if(invenNum - this.requestedCount >= 0){
            this.ping.play();
            invenNum = invenNum-this.requestedCount
            if(invenNum < 0){
              invenNum = 0
            }
            localStorage.setItem(deadMonster[this.biome][date].commonRewards[2]+" Count",invenNum)
            var relationshipLevel = parseInt( localStorage.getItem("wardenLevel"+this.biome))
            localStorage.setItem("wardenLevel"+this.biome,relationshipLevel+1)
            this.relationshipLevel = parseInt( localStorage.getItem("wardenLevel"+this.biome))
            
            var d = new Date();
            var date = d.getDate();
            var day = d.getDay(); 
            if(date >  npcReward[this.biome].length-1){

              date -= Math.floor(date/( npcReward[this.biome].length-1))*( npcReward[this.biome].length-1)-1
            }              
            this.huntTickets.loadTexture(npcReward[this.biome][date]);            

            var keyName = npcReward[this.biome][date];
            //console.log(npcReward[this.biome][date])
            
            if(keyName.localeCompare("blueprint") == 0){
              //console.log('blueprints')
              if (localStorage.getItem("blueprintCount") === null) {
                localStorage.setItem("blueprintCount",0)
              }              
              var blueCount = parseInt(localStorage.getItem("blueprintCount"))
              localStorage.setItem("blueprintCount",blueCount +2)   
               //this.huntTicketsText.text = "x1"
            }
            else{
              //this.huntTicketsText.text = "x2"
              keyName = keyName.slice(0, -3);
              var tixCount = 0
              if(keyName.localeCompare("grassland") == 0){
                tixCount = parseInt(localStorage.getItem("TixCount0"))
                localStorage.setItem("TixCount0",tixCount+2)
              }
              if(keyName.localeCompare("cave") == 0){
                tixCount = parseInt(localStorage.getItem("TixCount1"))
                localStorage.setItem("TixCount1",tixCount+2)
              }   
              if(keyName.localeCompare("mountain") == 0){
                tixCount = parseInt(localStorage.getItem("TixCount2"))
                localStorage.setItem("TixCount2",tixCount+2)
              }    
            }
            if(invenNum < 0){
              invenNum = 10
            }            
            this.chatTimer = 1;
            switch(this.biome){
              case 0:
                if(this.relationshipLevel > 5){
                  this.textBackdropText.text = "I knew I could count on you, <<"+this.title+">>"
                }
                else{
                  this.textBackdropText.text = "My thanks!"
                }

                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  warden0: this.relationshipLevel
                });                  
                break;
                 
              case 1:
                
                if(this.relationshipLevel > 5){
                  this.textBackdropText.text = "You're always coming through for me, friend."
                }
                else{
                  this.textBackdropText.text = "You have my gratitude!"
                }   
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  warden1: this.relationshipLevel
                });                  
                break;
              case 2:
                
                if(this.relationshipLevel > 5){
                  this.textBackdropText.text = "You're pretty helpful ... for a <<"+this.title+">>"
                }
                else{
                  this.textBackdropText.text = " It's not like I needed that or anything ..."
                  
                } 
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  warden2: this.relationshipLevel
                });                  
                break;                
            }                         
          }
          else{
            this.chatTimer = 1;
            switch(this.biome){
              case 0:
                this.textBackdropText.text = "Your pack is a bit light, <<"+this.title+">> ..."
                break;
              case 1:
                this.textBackdropText.text = "Unfortunately I'm looking for more than you have ..."
                break;
              case 2:
                
                this.textBackdropText.text = "Look ... I'm gonna need more than that ..."
                break;                
            }           
          }
          

          
          
            
        }   
    
        , time_convert: function (num) {
            var hours = Math.floor(num / 60);  
            var minutes = num % 60;
            if(minutes < 10){
              minutes = "0"+minutes;
            }
            return hours + ":" + minutes;  

        }         
          
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Warden = Warden;
}());