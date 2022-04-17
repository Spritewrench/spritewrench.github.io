(function () {
    'use strict';

    function Warden() {
        this.player = null;
    }
    Warden.prototype = {
        create: function () {
          //this.findPlacement();
          if(parseInt(localStorage.getItem("equip0")) > 15 && parseInt(localStorage.getItem("equip0")) < 89){
            localStorage.setItem("equip0",15)
          }          
            try{
                //setupVideoReward()
                //getAds()
            }
            catch(error){
              //admob.rewardVideo.show();   
            }  
            //this.placementHolder = parseInt(localStorage.getItem('placement'));
            localStorage.setItem("potUsed",100)
            //this.hunterExpHolder = 0
            this.currentRank = parseInt(localStorage.getItem("currentRank"))          
            this.currentRankExp = Math.round(Math.pow((this.currentRank)/0.1, 2)); 
            this.hunterExpHolder = parseInt(localStorage.getItem("exp"))// - this.currentRankExp
            //alert(this.hunterExpHolder)

            localStorage.setItem("hunterHP",3);
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
            this.hasWon = parseInt(localStorage.getItem("hasWon"))
            this.mapOpacity = this.add.sprite(0, 0, 'wardenOpacity');
            this.mapOpacity.width = this.game.width;
            this.mapOpacity.height = this.game.height; 
          
            this.introText = this.add.text(10, 10, "Looking For:",{font:'LondrinaSolid-Black'});
            this.introText.fill= '#fff';
            this.introText.fontSize = 24;
            //this.introText.anchor.setTo(0.5, 0.5);             
          
            //this.mapOverlay = this.add.sprite(0, 0, 'wardenOverlay');
            //this.mapOverlay.alpha = 0;
            //this.mapOverlay.width = this.game.width;
            //this.mapOverlay.height = this.game.height;           
          
            
            this.DailyQuest = this.add.sprite(25, -50, 'dailyQuest0');
            this.DailyQuest.width = this.game.width;
            this.DailyQuest.height = this.game.height; 

            this.DailyQuestText = this.add.text(this.game.width-100, this.game.height/2-100, "Complete Daily Gift\n x3 time for: \n"+this.currentRankExp/2+" EXP",{font:'LondrinaSolid-Black'});
            this.DailyQuestText.fill= '#fff';
            this.DailyQuestText.fontSize = 18;
            this.DailyQuestText.anchor.setTo(0.5, 0.5);                

            this.mapWarden = this.add.sprite(this.game.width, 0, 'warden'+this.biome);
            this.mapWarden.width = this.game.width;
            this.mapWarden.height = this.game.height;    
          
            this.wardenRelationship = this.add.sprite(this.game.width-150, -30, 'rankBadge');
            if (localStorage.getItem("wardenLevel"+this.biome) === null) {
              localStorage.setItem("wardenLevel"+this.biome,1)
            }  

            var rankHolder = Math.floor(parseInt(localStorage.getItem("currentRank"))/10);
            //console.log(rankHolder)
            if(rankHolder > 2){
              rankHolder = 2;
            }
            this.wardenRelationship.loadTexture('rankBadge-'+rankHolder)      
            this.rankHolders = rankHolder

            this.relationshipText = this.add.text(this.wardenRelationship.x+this.wardenRelationship.width/2, this.wardenRelationship.y+(this.wardenRelationship.height/2)+60, localStorage.getItem("wardenLevel"+this.biome),{font:'LondrinaSolid-Black'});
            this.relationshipText.fill= '#fff';
            this.relationshipText.align ='center'    
            this.relationshipText.fontSize = 20;
            this.relationshipText.anchor.setTo(0.5, 0.5); 
          
          
            this.introText2 = this.add.text(10, this.introText.y+155, "Reward:",{font:'LondrinaSolid-Black'});
            this.introText2.fill= '#fff';
            this.introText2.fontSize = 24;
          
            this.huntTickets = this.add.sprite(0,200, 'huntTickets');
            this.huntTickets.alpha = 0;
          
            this.huntTicketsText = this.add.text(this.huntTickets.x+this.huntTickets.width/2+60, this.huntTickets.y+(this.huntTickets.height/2), "x2",{font:'LondrinaSolid-Black'});
            this.huntTicketsText.alpha = 0;
            this.huntTicketsText.fill= '#fff';
            this.huntTicketsText.fontSize = 24;
            this.huntTicketsText.anchor.setTo(0.5, 0.5);       
          
            //this.huntTickets = this.add.sprite(0,0, 'huntTickets');
            //this.huntTickets.alpha = 0;
            this.huntTickets.TapCount = 7;
            //this.fireWrite();              
            this.requestItem = this.add.sprite(25, this.introText.y+50, 'Small Monster Bone');    
            this.requestItem.alpha = 0;
            //console.log(this.biome)
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

            this.Notification3 = this.add.sprite((this.game.width)-60,(this.game.height)-50, 'notification');
            this.Notification3.anchor.setTo(0.5, 0.5);  
            this.Notification3.alpha = 0;            
          
            this.openCraft = this.add.sprite(60,(this.game.height)-50, 'openCraft');
            this.openCraft.anchor.setTo(0.5, 0.5);  
            this.openCraft.clicked = false;
            this.openCraft.inputEnabled = true;
            this.openCraft.events.onInputDown.add(this.goToCraft, this);          
          
            this.Notification = this.add.sprite(60,(this.game.height)-50, 'notification');
            this.Notification.anchor.setTo(0.5, 0.5);  
            this.Notification.alpha = 0;
                 

            this.openFaction = this.add.sprite(this.game.width/2,(this.game.height)-50, 'openFaction');
            this.openFaction.anchor.setTo(0.5, 0.5);
            this.openFaction.inputEnabled = true;
          
            this.legendUnlock = parseInt(localStorage.getItem("legendHuntUnlock"))
            this.Notification2 = this.add.sprite(this.game.width/2,(this.game.height)-50, 'notification');
            this.Notification2.anchor.setTo(0.5, 0.5);  
            this.Notification2.alpha = 0;
          
            this.openFaction.events.onInputDown.add(this.goToFaction, this);  

          

          
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
          
            this.chatTimer = 1;
            this.relationshipLevel = parseInt(localStorage.getItem("wardenLevel"+this.biome));
            switch(this.biome){
              case 0:
                this.textBackdropText2.text = "Neeka, the Sure"  
                this.textBackdropText.text = "Well met, <<"+this.title+">>"
                
                if(this.hasLost == 1){
                  this.textBackdropText.text = "Ah! \nBested by a "+localStorage.getItem("monSize")+" "+localStorage.getItem("monNameTitle")+"? I hear that they're weak to "+localStorage.getItem("monWeakness")     
                  localStorage.setItem("hasLost",0);
                  localStorage.setItem("hasWon",0)
                  localStorage.setItem("monCount",0)
                  localStorage.setItem("ExpTotal",0);  
                  localStorage.setItem("RankedUp",0);                
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
                if(this.hasWon == 1){
                  localStorage.setItem("hasLost",0);
                  var holder = parseInt(localStorage.getItem("ExpTotal"))
                  //this.textBackdropText.text = "You've earned "+localStorage.getItem("ExpTotal")+ "  EXP towards your next Hunter Rank"
                   
                  //this.hunterExpHolder = parseInt(localStorage.getItem("exp"));
                  //localStorage.setItem("exp", parseInt(localStorage.getItem("exp"))+(parseInt(localStorage.getItem("ExpTotal"))))
                  this.hunterExp = parseInt(localStorage.getItem("exp"))
                  if(this.hunterExp >= gameConfig.maxExp){
                    //this.textBackdropText.text = "You've reached max hunter rank. The "+localStorage.getItem("ExpTotal")+ " Exp earned will be converted to Veteran Points"
                  }                     
                  //exp cap
                  if(this.hunterExp > gameConfig.maxExp){
                    localStorage.setItem("exp",gameConfig.maxExp)
                    this.hunterExp = gameConfig.maxExp;
                  }

                  if(true ){                     
                    //console.log("level Up")
                    var calRank = parseInt(localStorage.getItem("currentRank"))
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
                    this.currentRank = calRank; 
                    this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
                    this.nextRankExp = Math.round(Math.pow((this.currentRank+1)/0.1, 2)); 
                    this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))    
                    
                    if (localStorage.getItem("RankedUp") === null) {
                      localStorage.setItem("RankedUp",0)
                    }            
                    localStorage.setItem("RankedUp",1)
                   
                    //localStorage.setItem("currentRank",gameConfig.maxExp)
                    //console.log(calRank)
                    this.chatTimer = 1;
                    if(this.hunterExp >= gameConfig.maxExp){
                      //this.textBackdropText.text = "You've reached max hunter rank. The "+localStorage.getItem("ExpTotal")+ " Exp earned will be converted to Veteran Points"
                      //localStorage.setItem("veteranPoints", parseInt(localStorage.getItem("veteranPoints"))+parseInt(localStorage.getItem("ExpTotal"))  )
                      localStorage.setItem("RankedUp",0)
                    }   
                    else{
                      //this.textBackdropText.text = "Congrats on reaching a new Hunter Rank "
                    }    
                    this.winSound = this.add.audio('win');
                    this.winSound.play();
                   
                    //uncommon unlock
                    if(calRank >= gameConfig.uncommonUnlock && parseInt(localStorage.getItem("uncommonUnlock")) == 0){
                      localStorage.setItem("uncommonUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "A couple hunters have seen UNCOMMON monsters on hunts. Interesting!"
                    }  
                    //rare unlock
                    if(calRank >= gameConfig.rareUnlock && parseInt(localStorage.getItem("rareUnlock")) == 0){
                      localStorage.setItem("rareUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "A few hunters have reported RARE monster sightings. Wonder what kind of loot they drop?"
                    }            
                    //surge unlock
                    if(calRank >= gameConfig.surgeUnlock && parseInt(localStorage.getItem("surgeUnlock")) == 0){
                      localStorage.setItem("surgeUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "Rumor has it that monster populations are SURGING now! You know what that means? More Loot!"
                    }   
                    //mutant unlock
                    if(calRank >= gameConfig.mutantUnlock && parseInt(localStorage.getItem("mutantUnlock")) == 0){
                      localStorage.setItem("mutantUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "Word in the Guild Hall, is that SUPER-RARE mutant versions of monsters are showing up."
                    }   
                    //legend hunt unlock
                    if(calRank >= gameConfig.legendUnlock && parseInt(localStorage.getItem("legendHuntUnlock")) == 0 ){
                      this.legendHuntUnlockChat = 0;
                      localStorage.setItem("legendHuntUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "The Factions need some help their 'LEGENDARY' hunts. I volunteered you of course."
                    }              
                    
                    firebase.database().ref('player/' +localStorage.getItem("userID")+'/localData').update({
                      currentRank: localStorage.getItem("currentRank")
                    });          
                    //this.findPlacement();   
                  }                  
                  localStorage.setItem("hasWon",0);
                  localStorage.setItem("monCount",0);
                  localStorage.setItem("moneExp",0);
                  localStorage.setItem("ExpTotal",0);
                  localStorage.setItem("RankedUp",0);
                }                    
            
                  
                break;
              case 1:
                this.textBackdropText2.text = "Roz, the Steady"  
                this.textBackdropText.text = "Greetings, <<"+this.title+">>"
                if(this.hasLost == 1){
                  this.textBackdropText.text = "Defeated by a "+localStorage.getItem("monSize")+" "+localStorage.getItem("monNameTitle")+"? I hear that they're weak to "+localStorage.getItem("monWeakness")                

                  localStorage.setItem("hasLost",0);
                  localStorage.setItem("hasWon",0)
                  localStorage.setItem("monCount",0)
                  localStorage.setItem("ExpTotal",0);      
                  localStorage.setItem("RankedUp",0);                 
                }      
                this.rankedUp = parseInt(localStorage.getItem("RankedUp"))
                if(this.rankedUp == 1){
                  this.textBackdropText.text = "oh! \nA new Rank Sounds like celebrations are in order!."
                  localStorage.setItem("RankedUp",0);
                }          
                this.lowDur = parseInt(localStorage.getItem("lowDurability"))
                if(this.lowDur == 1){
                  this.textBackdropText.text = "My friend, your weapon has seen better days!\nYou must repair it!"
                  localStorage.setItem("lowDurability",0);
                }  
                if(this.hasWon == 1){
                  localStorage.setItem("hasLost",0);
                  var holder = parseInt(localStorage.getItem("ExpTotal"))
                  //this.textBackdropText.text = "You've earned "+localStorage.getItem("ExpTotal")+ "  Exp towards your next Hunter Rank"
                  
                  //this.hunterExpHolder = parseInt(localStorage.getItem("exp"));
                  //localStorage.setItem("exp", parseInt(localStorage.getItem("exp"))+(parseInt(localStorage.getItem("ExpTotal"))))
                  this.hunterExp = parseInt(localStorage.getItem("exp"))
                  if(this.hunterExp >= gameConfig.maxExp){
                   // this.textBackdropText.text = "You've reached max hunter rank. The "+localStorage.getItem("ExpTotal")+ " Exp earned will be converted to Veteran Points"
                  }   
                  //exp cap
                  if(this.hunterExp > gameConfig.maxExp){
                    localStorage.setItem("exp",gameConfig.maxExp)
                    this.hunterExp = gameConfig.maxExp;
                  }

                  if(true ){              
                    //console.log("level Up")
                    var calRank = parseInt(localStorage.getItem("currentRank"))
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
                    this.currentRank = calRank; 
                    this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
                    this.nextRankExp = Math.round(Math.pow((this.currentRank+1)/0.1, 2)); 
                    this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))    
                    
                    if (localStorage.getItem("RankedUp") === null) {
                      localStorage.setItem("RankedUp",0)
                    }            
                    localStorage.setItem("RankedUp",1)
                   
                    //localStorage.setItem("currentRank",gameConfig.maxExp)
                    //console.log(calRank)
                    this.chatTimer = 1;
                    if(this.hunterExp >= gameConfig.maxExp){
                      //this.textBackdropText.text = "You've reached max hunter rank. The "+localStorage.getItem("ExpTotal")+ " Exp earned will be converted to Veteran Points"
                      //localStorage.setItem("veteranPoints", parseInt(localStorage.getItem("veteranPoints"))+parseInt(localStorage.getItem("ExpTotal"))  )
                      //localStorage.setItem("RankedUp",0)
                    }   
                    else{
                      //this.textBackdropText.text += ". Congrats on reaching a new Hunter Rank "
                    }    
                    this.winSound = this.add.audio('win');
                    this.winSound.play();

                    //uncommon unlock
                    if(calRank >= gameConfig.uncommonUnlock && parseInt(localStorage.getItem("uncommonUnlock")) == 0){
                      localStorage.setItem("uncommonUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "A couple hunters have seen UNCOMMON monsters on hunts. Interesting!"
                    }  
                    //rare unlock
                    if(calRank >= gameConfig.rareUnlock && parseInt(localStorage.getItem("rareUnlock")) == 0){
                      localStorage.setItem("rareUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "A few hunters have reported RARE monster sightings. Wonder what kind of loot they drop?"
                    }            
                    //surge unlock
                    if(calRank >= gameConfig.surgeUnlock && parseInt(localStorage.getItem("surgeUnlock")) == 0){
                      localStorage.setItem("surgeUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "Rumor has it that monster populations are SURGING now! You know what that means? More Loot!"
                    }   
                    //mutant unlock
                    if(calRank >= gameConfig.mutantUnlock  && parseInt(localStorage.getItem("mutantUnlock")) == 0){
                      localStorage.setItem("mutantUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "Word in the Guild Hall, is that SUPER-RARE mutant versions of monsters are showing up."
                    }   
                    //legend hunt unlock
                    if(calRank >= gameConfig.legendUnlock && parseInt(localStorage.getItem("legendHuntUnlock")) == 0 ){
                      this.legendHuntUnlockChat = 0;
                      localStorage.setItem("legendHuntUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "The Factions need some help their 'LEGENDARY hunts. I volunteered you of course."
                    }              
                    
                    firebase.database().ref('player/' +localStorage.getItem("userID")+'/localData').update({
                      currentRank: localStorage.getItem("currentRank")
                    });          
                    //this.findPlacement();            
                  }                  
                  localStorage.setItem("hasWon",0);
                  localStorage.setItem("monCount",0);
                  localStorage.setItem("moneExp",0);
                  localStorage.setItem("ExpTotal",0);
                  localStorage.setItem("RankedUp",0);
                }                    

               
                break;
              case 2:
                this.textBackdropText2.text = "Rayla, the Indifferent"  
                this.textBackdropText.text = "What'd you want?"
                if(this.hasLost == 1){
                  this.textBackdropText.text = "Got wrecked by a "+localStorage.getItem("monSize")+" "+localStorage.getItem("monNameTitle")+"? Lame. I hear that they're weak to "+localStorage.getItem("monWeakness")       
                  localStorage.setItem("hasLost",0);
                  localStorage.setItem("hasWon",0)
                  localStorage.setItem("monCount",0)
                  localStorage.setItem("ExpTotal",0);                     
                  localStorage.setItem("RankedUp",0);  
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
                if(this.hasWon == 1){
                  localStorage.setItem("hasLost",0);
                  var holder = parseInt(localStorage.getItem("ExpTotal"))
                  //this.textBackdropText.text = "You've earned "+localStorage.getItem("ExpTotal")+ "  Exp towards your next Hunter Rank"
                  
                  //this.hunterExpHolder = parseInt(localStorage.getItem("exp"));
                  //localStorage.setItem("exp", parseInt(localStorage.getItem("exp"))+(parseInt(localStorage.getItem("ExpTotal"))))
                  this.hunterExp = parseInt(localStorage.getItem("exp"))
                  if(this.hunterExp >= gameConfig.maxExp){
                    //this.textBackdropText.text = "You've reached max hunter rank. The "+localStorage.getItem("ExpTotal")+ " Exp earned will be converted to Veteran Points"
                  }   
                  //exp cap
                  if(this.hunterExp > gameConfig.maxExp){
                    localStorage.setItem("exp",gameConfig.maxExp)
                    this.hunterExp = gameConfig.maxExp;
                  }

                  if(true ){                      
                    //console.log("level Up")
                    var calRank = parseInt(localStorage.getItem("currentRank"))
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
                    this.currentRank = calRank; 
                    this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
                    this.nextRankExp = Math.round(Math.pow((this.currentRank+1)/0.1, 2)); 
                    this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))    
                    
                    if (localStorage.getItem("RankedUp") === null) {
                      localStorage.setItem("RankedUp",0)
                    }            
                    localStorage.setItem("RankedUp",1)
                    
                    //localStorage.setItem("currentRank",gameConfig.maxExp)
                    //console.log(calRank)
                    this.chatTimer = 1;
                    //exp cap
                    if(this.hunterExp >= gameConfig.maxExp){
                      //this.textBackdropText.text = "You've reached max hunter rank. The "+localStorage.getItem("ExpTotal")+ " Exp earned will be converted to Veteran Points"
                      //localStorage.setItem("veteranPoints", parseInt(localStorage.getItem("veteranPoints"))+parseInt(localStorage.getItem("ExpTotal"))  )
                      //localStorage.setItem("RankedUp",0)
                    }   
                    else{
                      //this.textBackdropText.text += ". Congrats on reaching a new Hunter Rank "
                    }                 
                    
                    this.winSound = this.add.audio('win');
                    this.winSound.play();

                    //uncommon unlock
                    if(calRank >= gameConfig.uncommonUnlock && parseInt(localStorage.getItem("uncommonUnlock")) == 0){
                      localStorage.setItem("uncommonUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "A couple hunters have seen UNCOMMON monsters on hunts. Interesting!"
                    }  
                    //rare unlock
                    if(calRank >= gameConfig.rareUnlock && parseInt(localStorage.getItem("rareUnlock")) == 0){
                      localStorage.setItem("rareUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "A few hunters have reported RARE monster sightings. Wonder what kind of loot they drop?"
                    }            
                    //surge unlock
                    if(calRank >= gameConfig.surgeUnlock && parseInt(localStorage.getItem("surgeUnlock")) == 0){
                      localStorage.setItem("surgeUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "Rumor has it that monster populations are SURGING now! You know what that means? More Loot!"
                    }   
                    //mutant unlock
                    if(calRank >= gameConfig.mutantUnlock && parseInt(localStorage.getItem("mutantUnlock")) == 0){
                      localStorage.setItem("mutantUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "Word in the Guild Hall, is that SUPER-RARE mutant versions of monsters are showing up."
                    }   
                    //legend hunt unlock
                    if(calRank >= gameConfig.legendUnlock && parseInt(localStorage.getItem("legendHuntUnlock")) == 0 ){
                      this.legendHuntUnlockChat = 0;
                      localStorage.setItem("legendHuntUnlock",1)
                      this.submitting = false;
                      this.chatTimer = 1;
                      //this.textBackdropText.text += "The Factions need some help their 'LEGENDARY hunts. I volunteered you of course."
                    }              
                    
                    firebase.database().ref('player/' +localStorage.getItem("userID")+'/localData').update({
                      currentRank: localStorage.getItem("currentRank")
                    });          
                    //this.findPlacement();             
                  }                  
                  localStorage.setItem("hasWon",0);
                  localStorage.setItem("monCount",0);
                  localStorage.setItem("moneExp",0);
                  localStorage.setItem("ExpTotal",0);
                  localStorage.setItem("RankedUp",0);
                }                      
              
            
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
        this.craftFlag = 0;        
       localStorage.setItem("nextWep",localStorage.getItem("equip0"))  
       
        }          
        , update: function () {


          this.DailyQuestText.text = "Complete Daily Gift\n x3 times for: \n"+gameConfig.dailyGiftExp+" EXP";
          if(this.hunterExp >= gameConfig.maxExp){
            //localStorage.setItem("exp",gameConfig.maxExp)
            //this.hunterExp = gameConfig.maxExp;
            this.DailyQuestText.text = "Complete Daily Gift\n x3 time for: \nPrismatic Gem x10";
            //localStorage.setItem("Prismatic Gem Count",parseInt(localStorage.getItem("Prismatic Gem Count"))+10)      
          }          

          if(localStorage.getItem("giftCount"+this.biome) == null){
            localStorage.setItem("giftCount"+this.biome,0)
            //localStorage.getItem("giftCountComplete"+this.biome,0)
          }
          if(localStorage.getItem("giftCountComplete"+this.biome) == null){
            //localStorage.setItem("giftCount"+this.biome,0)
            localStorage.getItem("giftCountComplete"+this.biome,0)
          }          
          this.DailyQuest.loadTexture("dailyQuest"+parseInt(localStorage.getItem("giftCount"+this.biome)) )

          if(parseInt(localStorage.getItem("giftCount"+this.biome)) >= 3 && parseInt(localStorage.getItem("giftCountComplete"+this.biome)) <= 1){
            localStorage.setItem("giftCountComplete"+this.biome,1)
            this.DailyQuestText.text = "Daily Gift Challenge Complete!"
            //localStorage.setItem("exp", parseInt(localStorage.getItem("exp"))+Math.floor(this.nextRankExp/4))

            if(this.hunterExp >= gameConfig.maxExp){
              localStorage.setItem("exp",gameConfig.maxExp)
              this.hunterExp = gameConfig.maxExp;
              //this.DailyQuestText.text = "Complete Daily Gift\n x3 time for: \nPrismatic Gem x10";
              //localStorage.setItem("Prismatic Gem Count",parseInt(localStorage.getItem("Prismatic Gem Count"))+10)      
            }
            this.hunterExp = parseInt(localStorage.getItem("exp"))     
                 
          }
          if(parseInt(localStorage.getItem("giftCount"+this.biome)) >= 3){
            localStorage.setItem("giftCount"+this.biome,3)
          }
          if(parseInt(localStorage.getItem("giftCountComplete"+this.biome)) >= 1){
            //this.wardenGift.loadTexture("wardenGift-No");
            this.DailyQuestText.text = "Daily Gift Challenge\nComplete!"
          }

          this.textBackdropText.x = Math.floor( this.textBackdropText.x )
          this.textBackdropText.y = Math.floor( this.textBackdropText.y )
          //this.textBackdropText.smoothed = false

          this.legendUnlock = parseInt(localStorage.getItem("legendHuntUnlock"))
          if(this.legendUnlock >= 1){
            this.openFaction.loadTexture("openFaction");
            if(this.legendUnlock >= 1 && this.legendUnlock < 3 ){
              this.Notification2.alpha = 1;
            }
             
          }
          else{
            this.openFaction.loadTexture("openFactionNo");
            this.Notification2.alpha = 0;
          }

          this.wardenRelationship.loadTexture('rankBadge-'+this.rankHolders)  
          
          this.nextRankExp = Math.round(Math.pow((this.currentRank+1)/0.1, 2)); 
          if(this.nextRankExp > gameConfig.maxExp){
            this.nextRankExp = gameConfig.maxExp;
          }
          this.currentRank = parseInt(localStorage.getItem("currentRank"))
          if(true){
            this.currentRankExp = Math.round(Math.pow((this.currentRank)/0.1, 2)); 
          }
          else{
            this.currentRankExp = 0;
          }
          
          //this.hunterExp = parseInt(localStorage.getItem("exp"))- this.currentRankExp
          this.hunterExp = parseInt(localStorage.getItem("exp"))
          if(this.hunterExp > gameConfig.maxExp){
            localStorage.setItem("exp",gameConfig.maxExp)
            this.hunterExp = gameConfig.maxExp;
          }

          this.hunterExp = parseInt(localStorage.getItem("exp"))   
          if(parseInt(localStorage.getItem("currentRank")) <= 1){
            this.expDiff = this.hunterExp
          }
          else{
            this.prevRankExp = parseInt(localStorage.getItem("prevexp"))
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

          if(this.expDiff >  this.hunterExpHolder){
            var difference = this.expDiff - this.hunterExpHolder
            if(difference > 10000){
              this.hunterExpHolder+=10000
            }
            else if(difference > 1000){
              this.hunterExpHolder+=1000
            }            
            else if(difference > 100){
              this.hunterExpHolder+=100
            }
            else if(difference > 10){
              this.hunterExpHolder+=10
            }
            else{
              this.hunterExpHolder++
            }            
            
          }
          if(this.expDiff < this.hunterExpHolder){
            var difference = this.hunterExpHolder - this.expDiff
            if(difference > 10000){
              this.hunterExpHolder-=10000
            }
            else if(difference > 1000){
              this.hunterExpHolder-=1000
            }            
            else if(difference > 100){
              this.hunterExpHolder-=100
            }
            else if(difference > 10){
              this.hunterExpHolder-=10
            }
            else{
              this.hunterExpHolder--
            }   
          }          

          if(this.hunterExpHolder < 0){
            this.hunterExpHolder = 0;
          }
          if(this.currentRank > 1){
            //this.relationshipText.text =  this.currentRank+"\n"+this.hunterExpHolder+"/"+(this.nextRankExp-this.currentRankExp)
          }
          else{
            //this.relationshipText.text =  this.currentRank+"\n"+this.hunterExpHolder+"/"+(this.nextRankExp)
          }

          //this.placement = parseInt(localStorage.getItem('placement')) 
          
          //if(this.placementHolder < this.placement){
            //this.placementHolder++
            //this.relationshipText.text =  this.currentRank+"\n# ??? \n"+this.hunterExpHolder+"/"+(this.nextRankExp)
         // }
          //else{
            //this.relationshipText.text =  this.currentRank+"\n# "+this.placementHolder+"\n"+this.hunterExpHolder+"/"+(this.nextRankExp)
          //}
          //this.findPlacement();
          //console.log(this.placement)
          this.relationshipText.text =  this.currentRank+"\nEXP:\n"+this.hunterExpHolder+"/"+(this.expDiff2)
          
          // this.expText.text = "# "+this.placement          
          
          //this.relationshipText.text += "\n Total Exp: \n"+parseInt(localStorage.getItem("exp"))
          
          //back up level up check
          if((this.expDiff > this.expDiff2) && this.nextRankExp < gameConfig.maxExp){

            localStorage.setItem("RankedUp",1)
            localStorage.setItem("currentRank",parseInt(localStorage.getItem("currentRank"))+1)
            this.currentRank = parseInt(localStorage.getItem("currentRank"))
            this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
            localStorage.setItem("prevexp", parseInt(localStorage.getItem("exp")) )
            this.prevRankExp = parseInt(localStorage.getItem("prevexp"))
            this.currentRankExp = Math.round(Math.pow((this.currentRank)/0.1, 2)); 
    
            this.nextRankExp = Math.round(Math.pow((this.currentRank+1)/0.1, 2)); 
            this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))     

            //console.log("level Up")
            var calRank = parseInt(localStorage.getItem("currentRank"))
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
            this.currentRank = calRank; 
            this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
            this.nextRankExp = Math.round(Math.pow((this.currentRank+1)/0.1, 2)); 
            this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))    
            


            if (localStorage.getItem("RankedUp") === null) {
              localStorage.setItem("RankedUp",0)
            }            
            //localStorage.setItem("RankedUp",1)
            
            //localStorage.setItem("currentRank",gameConfig.maxExp)
            //console.log(calRank)
            //this.chatTimer = 1;
            if(this.nextRankExp  >= gameConfig.maxExp){
              this.nextRankExp = gameConfig.maxExp
              //this.textBackdropText.text = "Congrats you've achieved the max hunter rank for this season"
            }   
            else{
              //this.textBackdropText.text += ". Congrats on reaching a new Hunter Rank "
            }    
            this.winSound = this.add.audio('win');
            this.winSound.play();
           
            //uncommon unlock
            if(calRank >= gameConfig.uncommonUnlock && parseInt(localStorage.getItem("uncommonUnlock")) == 0){
              localStorage.setItem("uncommonUnlock",1)
              this.submitting = false;
              this.chatTimer = 1;
              //this.textBackdropText.text += "A couple hunters have seen UNCOMMON monsters on hunts. Interesting!"
            }  
            //rare unlock
            if(calRank >= gameConfig.rareUnlock && parseInt(localStorage.getItem("rareUnlock")) == 0){
              localStorage.setItem("rareUnlock",1)
              this.submitting = false;
              this.chatTimer = 1;
              //this.textBackdropText.text += "A few hunters have reported RARE monster sightings. Wonder what kind of loot they drop?"
            }            
            //surge unlock
            if(calRank >= gameConfig.surgeUnlock && parseInt(localStorage.getItem("surgeUnlock")) == 0){
              localStorage.setItem("surgeUnlock",1)
              this.submitting = false;
              this.chatTimer = 1;
              //this.textBackdropText.text += "Rumor has it that monster populations are SURGING now! You know what that means? More Loot!"
            }   
            //mutant unlock
            if(calRank >= gameConfig.mutantUnlock && parseInt(localStorage.getItem("mutantUnlock")) == 0){
              localStorage.setItem("mutantUnlock",1)
              this.submitting = false;
              this.chatTimer = 1;
              //this.textBackdropText.text += "Word in the Guild Hall, is that SUPER-RARE mutant versions of monsters are showing up."
            }   
            //legend hunt unlock
            if(calRank >= gameConfig.legendUnlock && parseInt(localStorage.getItem("legendHuntUnlock")) == 0 ){
              this.legendHuntUnlockChat = 0;
              localStorage.setItem("legendHuntUnlock",1)
              this.submitting = false;
              this.chatTimer = 1;
              //this.textBackdropText.text += "The Factions need some help their 'LEGENDARY hunts. I volunteered you of course."
            }              
            
            firebase.database().ref('player/' +localStorage.getItem("userID")+'/localData').update({
              currentRank: localStorage.getItem("currentRank")
            });          
            //this.findPlacement();            
          }

          var rankHolder = Math.floor(parseInt(localStorage.getItem("currentRank"))/10);
          //console.log(rankHolder)
          if(rankHolder > 2){
            rankHolder = 2;
          }
          this.wardenRelationship.loadTexture('rankBadge-'+rankHolder)      

          this.Notification.alpha = 0;  
          //this.Notification.alpha = 1;
          for(var i = 4; i < 100; i++){
            //console.log(weapon[i]+" "+i)
            if(typeof weapon[i] != "undefined"){
              //console.log(weapon[i].craft[0].name+" "+weapon[i].craft[1].name)
              var count1 = parseInt(localStorage.getItem(weapon[i].craft[0].name+" Count"));
              var count2 = parseInt(localStorage.getItem(weapon[i].craft[1].name+" Count"));
              this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[i].id));
              if (localStorage.getItem("crafted"+weapon[i].id) === null) {
                localStorage.setItem("crafted"+weapon[i].id,0)
                this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[i].id));
              } 
              //console.log("Has this been crafted? "+this.hasCrafted)
              //console.log("weapon "+i+" need 1:"+count1+"/"+weapon[i].craft[0].count+" need 2:"+count2+"/"+weapon[i].craft[1].count)
              if(count1 >= weapon[i].craft[0].count && count2 >= weapon[i].craft[1].count && this.hasCrafted == 0){
                localStorage.setItem("wep"+i+"Craftable",1)
                localStorage.setItem("nextWep",i)
                this.Notification.alpha = 1;  
              }    
              else{
                //console.log("not craftable")
                localStorage.setItem("wep"+i+"Craftable",0)
              }          
            }
          }

          if(this.craftFlag == 0 && this.Notification.alpha == 1 && (parseInt(localStorage.getItem("firstVisit-warden")) == 3 )){
            this.chatTimer = 1;
            this.craftFlag = 1;
            switch(this.biome){
              case 0:
                this.textBackdropText.text = "Looks like you can make a NEW weapon.\nYou should get on that"
                break;
              case 1:
                this.textBackdropText.text = "You have enough materials to craft a NEW weapon.\n Well done"
                break;
              case 2:
                this.textBackdropText.text = "Looks like you actually gathered enough materials to craft something NEW. Yay ~"
                break;
            }            
          }

            
          
          
          
          this.wardenHunt.loadTexture("wardenHunt"+this.biome)
          if(this.truebiome == this.markerBiome && this.day < 5){
            
            this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/1"
            if(parseInt(localStorage.getItem("TixCount"+this.markerBiome)) < 1){
              this.wardenHunt.loadTexture("wardenHunt-No")
            }            
          }
          else if(this.day >= 5){
            
            this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/1"
            if(parseInt(localStorage.getItem("TixCount"+this.markerBiome)) < 1){
              this.wardenHunt.loadTexture("wardenHunt-No")
            }            
          }          
          else{
            this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/"+gameConfig.tixCost
            if(parseInt(localStorage.getItem("TixCount"+this.markerBiome)) < gameConfig.tixCost){
              this.wardenHunt.loadTexture("wardenHunt-No")
            }            
          }  
          //parseInt(localStorage.getItem("TixCount"+this.markerBiome)) <= 0

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
          var size =  npcReward[this.biome].filter(function(value) { 
            //console.log(value)
            return value !== undefined 
          }).length   
          
          if(date >  size){
            ////console.log( deadMonster[this.biome])
            ////console.log("asd "+Math.floor(date/( deadMonster[this.biome].length-1)))
            ////console.log("asasd "+(deadMonster[this.biome].length-1))
            date -= Math.floor(date/( size))*( size)
            if(date <= 0){
              date = 1;
            }                  
          }           
          

   

          ////console.log(date)           
          this.huntTickets.loadTexture(npcReward[this.biome][date]);
          ///alert(npcReward[this.biome][date].localeCompare("huntFly"))
          if(npcReward[this.biome][date].localeCompare("huntFly") == 1){
            this.huntTickets.width = 150;
            this.huntTickets.height = 150;   
            if (localStorage.getItem(npcReward[this.biome][date]+" Count") === null) {
              localStorage.setItem(npcReward[this.biome][date]+" Count",0)
            }                 
            this.huntTicketsText.text = "x2"  ///localStorage.getItem(npcReward[this.biome][date]+" Count")+"/x2"         
          }           
          
          var date = d.getDate();
          var size = deadMonster[this.biome].filter(function(value) { 
            //console.log(value)
            return value !== undefined 
          }).length - 1  
          
          if(date > size){
            ////console.log( deadMonster[this.biome])
            ////console.log("asd "+Math.floor(date/( deadMonster[this.biome].length-1)))
            ////console.log("asasd "+(deadMonster[this.biome].length-1))
            date -= Math.floor(date/( size))*( size)
            if(date <= 0){
              date = 1;
            }                  
          }      
          //console.log("DATE "+date)
          ////console.log(deadMonster[this.biome][date].commonRewards[1]+" Count")
          this.requestItem.loadTexture(deadMonster[this.biome][date].commonRewards[2]);
          if (localStorage.getItem(deadMonster[this.biome][date].commonRewards[2]+" Count") === null) {
            localStorage.setItem(deadMonster[this.biome][date].commonRewards[2]+" Count",0)
          }          
          this.requestItemText.text= deadMonster[this.biome][date].commonRewards[2]+"\nx"+localStorage.getItem(deadMonster[this.biome][date].commonRewards[2]+" Count")+"/"+this.requestedCount
          
          //this.relationshipText.text = localStorage.getItem("wardenLevel"+this.biome);
          

        }
        , hunt: function (unit) {
            //this.wardenHunt.width = 460;
            //this.wardenHunt.height = 260;  
         
            this.wardenHunt.clicked = true;     
         
            
            if(this.truebiome == this.markerBiome && (localStorage.getItem("TixCount"+this.markerBiome)-1) >= 0 && this.day < 5){
              //this.huntTickets = this.add.sprite(0,0, 'huntTickets');
              this.huntTickets.TapCount = 7;
              //this.fireWrite();                  
              localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-1);
              localStorage.setItem("Markerbiome",this.markerBiome)
              this.ping.play();
              this.bgSound.stop();               
              this.game.state.start('game') 
            }
            else if(this.day >= 5 && (localStorage.getItem("TixCount"+this.markerBiome)-1) >= 0){
              //this.huntTickets = this.add.sprite(0,0, 'huntTickets');
              this.huntTickets.TapCount = 7;
              //this.fireWrite();                  
              localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-1);
              localStorage.setItem("Markerbiome",this.markerBiome)
              this.ping.play();
              this.bgSound.stop();               
              this.game.state.start('game') 
            }          
            else if ((localStorage.getItem("TixCount"+this.markerBiome)-3) >= 0){
              //this.huntTickets = this.add.sprite(0,0, 'huntTickets');
              this.huntTickets.TapCount = 7;
              //this.fireWrite();                   
              localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-3);
              localStorage.setItem("Markerbiome",this.markerBiome)
              
              this.ping.play();
              this.bgSound.stop(); 
              this.game.state.start('game') 
            }
            else{
              //alert("Not Enough Tickets! :(")
              this.chatTimer = 1;
              this.textBackdropText.text = "Not enough tickets?\nYou should visit\nLynnenne, The Shopkeep.\nMaybe she can assist"  
              this.Notification3.alpha = 1;
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
            else if (parseInt(localStorage.getItem("firstVisit-warden")) == 2 ) {
              localStorage.setItem("firstVisit-warden",3);
            }

            
            switch(this.biome){
              case 0:
                // uncommon sighting diaglog
                if(parseInt(localStorage.getItem("uncommonUnlock")) == 1 && parseInt(localStorage.getItem("uncommonUnlock-first")) == 0){
                  localStorage.setItem("uncommonUnlock-first",1);
                  this.chatTimer = 1;
                  this.textBackdropText.text = "Nioleo have been spotted in the grasslands.\nStay alert"
                }    
                // rare sighting diaglog
                else if(parseInt(localStorage.getItem("rareUnlock")) == 1 && parseInt(localStorage.getItem("rareUnlock-first")) == 0){
                  localStorage.setItem("rareUnlock-first",1);
                  this.chatTimer = 1;
                  this.textBackdropText.text = "Urania Drake have been sighted in recent days. Take care and good hunting"
                }        
                // surge unlock dialog
                else if(parseInt(localStorage.getItem("surgeUnlock")) == 1){
                  localStorage.setItem("surgeUnlock",2)
                  this.submitting = false;
                  this.chatTimer = 1;
                  this.textBackdropText.text = "Rumor has it that monster populations are SURGING now! You know what that means? More Loot!"
                }                         
                // mutant sighting diaglog
                else if(parseInt(localStorage.getItem("mutantUnlock")) == 1 && parseInt(localStorage.getItem("mutantUnlock-first")) == 0){
                  localStorage.setItem("mutantUnlock-first",1);
                  this.chatTimer = 1;
                  this.textBackdropText.text = "<<"+this.title+">>, I've seen some oddly coloured beasts of late. Weird"
                } 
                //legend hunt unlock
                else if(parseInt(localStorage.getItem("legendHuntUnlock")) == 1 ){
                  //this.legendHuntUnlockChat = 0;
                  localStorage.setItem("legendHuntUnlock",2)
                  //this.submitting = false;
                  this.chatTimer = 1;
                  this.textBackdropText.text = "The Factions need some help their 'LEGENDARY hunts. I volunteered you of course."
                }                  
                break;
              case 1:
                // uncommon sighting diaglog
                if(parseInt(localStorage.getItem("uncommonUnlock")) == 1 && parseInt(localStorage.getItem("uncommonUnlock-first")) == 0){
                  localStorage.setItem("uncommonUnlock-first",1);
                  this.chatTimer = 1;
                  this.textBackdropText.text = "Dracomyxin have been spotted in the caverns.\nConstant Vigilance!"
                }    
                // rare sighting diaglog
                if(parseInt(localStorage.getItem("rareUnlock")) == 1 && parseInt(localStorage.getItem("rareUnlock-first")) == 0){
                  localStorage.setItem("rareUnlock-first",1);
                  this.chatTimer = 1;
                  this.textBackdropText.text = "Be careful of weeping sounds in the dark. Lacuna have been spotted in area."
                }     
                // surge unlock dialog
                else if(parseInt(localStorage.getItem("surgeUnlock")) == 1){
                  localStorage.setItem("surgeUnlock",2)
                  this.submitting = false;
                  this.chatTimer = 1;
                  this.textBackdropText.text = "Rumor has it that monster populations are SURGING now! You know what that means? More Loot!"
                }                                  
                // mutant sighting diaglog
                else if( parseInt(localStorage.getItem("mutantUnlock")) == 1 && parseInt(localStorage.getItem("mutantUnlock-first")) == 0){
                  localStorage.setItem("mutantUnlock-first",1);
                  this.chatTimer = 1;
                  this.textBackdropText.text = "Have you seen those off-colour monsters? Nature remains filled with marvels"
                }
                //legend hunt unlock
                else if(parseInt(localStorage.getItem("legendHuntUnlock")) == 1 ){
                  //this.legendHuntUnlockChat = 0;
                  localStorage.setItem("legendHuntUnlock",2)
                  //this.submitting = false;
                  this.chatTimer = 1;
                  this.textBackdropText.text = "The Factions need some help their 'LEGENDARY hunts. I volunteered you of course."
                }                   
                break;
              case 2:
                // uncommon sighting diaglog
                if(parseInt(localStorage.getItem("uncommonUnlock")) == 1 && parseInt(localStorage.getItem("uncommonUnlock-first")) == 0){
                  localStorage.setItem("uncommonUnlock-first",1);
                  this.chatTimer = 1;
                  this.textBackdropText.text = "So ... Keet-Keet have been spotted in the area.\nBe careful or whatever."
                }    
                // rare sighting diaglog
                if(parseInt(localStorage.getItem("rareUnlock")) == 1 && parseInt(localStorage.getItem("rareUnlock-first")) == 0){
                  localStorage.setItem("rareUnlock-first",1);
                  this.chatTimer = 1;
                  this.textBackdropText.text = "So ... Alexandross Rex have started showing up.\nTry not to get mauled."
                }       
                // surge unlock dialog
                else if(parseInt(localStorage.getItem("surgeUnlock")) == 1){
                  localStorage.setItem("surgeUnlock",2)
                  this.submitting = false;
                  this.chatTimer = 1;
                  this.textBackdropText.text = "Rumor has it that monster populations are SURGING now! You know what that means? More Loot!"
                }                                
                // mutant sighting diaglog
                else if(parseInt(localStorage.getItem("mutantUnlock")) == 1 && parseInt(localStorage.getItem("mutantUnlock-first")) == 0){
                  localStorage.setItem("mutantUnlock-first",1);
                  this.chatTimer = 1;
                  this.textBackdropText.text = "So ... weird monsters have been popping up.\nSome how I know this is your fault."
                }  
                //legend hunt unlock
                else if(parseInt(localStorage.getItem("legendHuntUnlock")) == 1 ){
                  //this.legendHuntUnlockChat = 0;
                  localStorage.setItem("legendHuntUnlock",2)
                  //this.submitting = false;
                  this.chatTimer = 1;
                  this.textBackdropText.text = "The Factions need some help their 'LEGENDARY hunts. I volunteered you of course."
                }                 
                break;
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
        , goToFaction: function (unit) {
            if(this.legendUnlock >= 1){
              this.Map.clicked = true;
              localStorage.setItem("legendHuntUnlock",3)
              this.ping.play();
              this.bgSound.stop();          
              //window.location.href = "index2.html";
              this.game.state.start('faction') 
            }          

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
          
          var size = deadMonster[this.biome].filter(function(value) { 
            //console.log(value)
            return value !== undefined 
          }).length - 1
          
          
          if(date > size){
            ////console.log( deadMonster[this.biome])
            ////console.log("asd "+Math.floor(date/( deadMonster[this.biome].length-1)))
            ////console.log("asasd "+(deadMonster[this.biome].length-1))
            date -= Math.floor(date/( size))*( size)
            if(date <= 0){
              date = 1;
            }            
          }  
          
          var invenNum = parseInt(localStorage.getItem(deadMonster[this.biome][date].commonRewards[2]+" Count"))
          //invenNum = 999;
          //invenNum - 10 >= 0
          //&& parseInt(localStorage.getItem("giftCountComplete"+this.biome)) == 0
          if(invenNum - this.requestedCount >= 0 ){
            this.ping.play();
            invenNum = invenNum-this.requestedCount
            if(invenNum < 0){
              invenNum = 0
            }
            localStorage.setItem(deadMonster[this.biome][date].commonRewards[2]+" Count",invenNum)
            var relationshipLevel = parseInt( localStorage.getItem("wardenLevel"+this.biome))
            localStorage.setItem("wardenLevel"+this.biome,relationshipLevel+1)
            this.relationshipLevel = parseInt( localStorage.getItem("wardenLevel"+this.biome))
            localStorage.setItem("giftCount"+this.biome,parseInt(localStorage.getItem("giftCount"+this.biome))+1 )
            var d = new Date();
            var date = d.getDate();
            var day = d.getDay(); 
            var size =  npcReward[this.biome].filter(function(value) { 
              //console.log(value)
              return value !== undefined 
            }).length   
            
            if(date >  size){
              ////console.log( deadMonster[this.biome])
              ////console.log("asd "+Math.floor(date/( deadMonster[this.biome].length-1)))
              ////console.log("asasd "+(deadMonster[this.biome].length-1))
              date -= Math.floor(date/( size))*( size)
              if(date <= 0){
                date = 1;
              }                  
            }                 
            this.huntTickets.loadTexture(npcReward[this.biome][date]);      
                 

            var keyName = npcReward[this.biome][date];
            //console.log(npcReward[this.biome][date])
            

            if(invenNum < 0){
              invenNum = 10
            }            
            this.chatTimer = 1;
            switch(this.biome){
              case 0:
                if(this.relationshipLevel > 5){
                  this.textBackdropText.text = "I knew I could count on you, <<"+this.title+">>. Take this ..."
                }
                else{
                  this.textBackdropText.text = "My thanks! Take this ..."
                }
               
                break;
                 
              case 1:
                
                if(this.relationshipLevel > 5){
                  this.textBackdropText.text = "You're always coming through for me, friend. Take this ..."
                }
                else{
                  this.textBackdropText.text = "You have my gratitude! Take this ..."
                }   
                 
                break;
              case 2:
                
                if(this.relationshipLevel > 5){
                  this.textBackdropText.text = "You're pretty helpful ... for a <<"+this.title+">>. Take this ..."
                }
                else{
                  this.textBackdropText.text = " It's not like I needed that or anything. Take this ..."
                  
                } 
                 
                break;                
            }  

            if(keyName.localeCompare("blueprint") == 0){
              //console.log('blueprints')
              if (localStorage.getItem("blueprintCount") === null) {
                localStorage.setItem("blueprintCount",0)
              }              
              var blueCount = parseInt(localStorage.getItem("blueprintCount"))
              localStorage.setItem("blueprintCount",blueCount +2)   
               //this.huntTicketsText.text = "x1"
               this.rewardText = "\nBlueprint x2"
            }
            else if(keyName.localeCompare("huntFly") == 1){
              if (localStorage.getItem(npcReward[this.biome][date]+" Count") === null) {
                localStorage.setItem(npcReward[this.biome][date]+" Count",0)
              }              
              var huntFlyCount = parseInt(localStorage.getItem(npcReward[this.biome][date]+" Count"))
              localStorage.setItem(npcReward[this.biome][date]+" Count",huntFlyCount+2)               
              switch(parseInt(npcReward[this.biome][date].substr(-1))){
                case 0:
                  this.rewardText = "\nGreen HuntFly x2"
                  break;
                case 1:
                  this.rewardText = "\nBlue HuntFly x2"
                  break;              
                case 2:
                  this.rewardText = "\nRed HuntFly x2"
                  break;                      
              }          
              

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

            this.textBackdropText.text += this.rewardText

            if(parseInt(localStorage.getItem("giftCount"+this.biome)) >= 3 && parseInt(localStorage.getItem("giftCountComplete"+this.biome)) <= 1){
              localStorage.setItem("giftCountComplete"+this.biome,2) 
              

              if(this.hunterExp >= gameConfig.maxExp){
                this.textBackdropText.text = "Thanks for your help."+this.rewardText+"\nPrismatic Gems x 10"
                localStorage.setItem("Prismatic Gem Count",parseInt(localStorage.getItem("Prismatic Gem Count"))+10) 
                
              }    
              else{
                this.textBackdropText.text = "Thanks for your help."+this.rewardText+"\n"+gameConfig.dailyGiftExp+" EXP";
                localStorage.setItem("exp", parseInt(localStorage.getItem("exp"))+gameConfig.dailyGiftExp)
              }          
            }
            //this.huntTickets = this.add.sprite(0,0, 'huntTickets');
            this.huntTickets.TapCount = 7;
            //this.fireWrite();                                     
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
            if(parseInt(localStorage.getItem("giftCountComplete"+this.biome)) == 1){
              /*
              switch(this.biome){
                case 0:
                  this.textBackdropText.text = "That's all I need for today"
                  break;
                case 1:
                  this.textBackdropText.text = "That's enough. Only take what you need, <<"+this.title+">>"
                  break;
                case 2:
                  
                  this.textBackdropText.text = "Leave me alone. That's all I want for today."
                  break;                
              }   
              */
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
        , findPlacement: function(){
          var query = firebase.database().ref("player");
          //this.placement = 1;
          localStorage.setItem('placement','1')
          query.once("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              // key will be "ada" the first time and "alan" the second time
              var key = childSnapshot.key;
              //console.log(key)
              // childData will be the actual contents of the child
              var childData = childSnapshot.val();
              
              var rankNum = 0;
              var calRank = 0;

              if(typeof childData.localData["currentRank"] == "undefined"){
                
                if(typeof childData.localData["exp"] == "undefined" || isNaN(childData.localData["exp"]) ){
                  firebase.database().ref('player/' +key+'/localData').update({
                    exp: 0
                  });                  
                  calRank = 0
                }
                else{
                  calRank = Math.round(0.1*Math.sqrt(childData.localData["exp"]))
                }
                
                firebase.database().ref('player/' +key+'/localData').update({
                  currentRank: calRank
                });
                rankNum = calRank;                
              }
              else{
                
                rankNum = parseInt(childData.localData["currentRank"])
              }

              
              if(isNaN(rankNum)){
                rankNum = 0
              }
              //console.log(childData.localData["exp"])
              //console.log(childData.localData["currentRank"])
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
    window['simplewar'].Warden = Warden;
}());