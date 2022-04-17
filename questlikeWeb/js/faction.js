(function () {
    'use strict';

    function Faction() {
        this.player = null;
    }
    Faction.prototype = {
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
            
            this.map = this.add.sprite(0, 0, 'factionBG'+localStorage.getItem("Markerbiome"));
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
          
            this.mapWarden = this.add.sprite(this.game.width, 0, 'factionLeader'+this.biome);
            this.mapWarden.width = this.game.width;
            this.mapWarden.height = this.game.height;    
          
            this.wardenRelationship = this.add.sprite(this.game.width-100, 40, 'relationship');
            if (localStorage.getItem("factionLevel"+this.biome) === null) {
              localStorage.setItem("factionLevel"+this.biome,1)
            }  
            this.relationshipText = this.add.text(this.wardenRelationship.x+this.wardenRelationship.width/2, this.wardenRelationship.y+(this.wardenRelationship.height/2)+10, localStorage.getItem("factionLevel"+this.biome),{font:'LondrinaSolid-Black'});
            this.relationshipText.fill= '#fff';
            this.relationshipText.fontSize = 28;
            this.relationshipText.anchor.setTo(0.5, 0.5); 
          
          
            this.introText2 = this.add.text(10, this.introText.y+155, "Reward:",{font:'LondrinaSolid-Black'});
            this.introText2.fill= '#fff';
            this.introText2.fontSize = 28;
          
            this.huntTickets = this.add.sprite(0,200, 'tip'+this.biome);
            this.huntTickets.alpha = 0;
          
            this.huntTicketsText = this.add.text(this.huntTickets.x+this.huntTickets.width/2+120, this.huntTickets.y+(this.huntTickets.height/2), "x2",{font:'LondrinaSolid-Black'});
            this.huntTicketsText.alpha = 0;
            this.huntTicketsText.fill= '#fff';
            this.huntTicketsText.fontSize = 28;
            this.huntTicketsText.anchor.setTo(0.5, 0.5);       
          
            this.requestItem = this.add.sprite(25, this.introText.y+50, 'Small Monster Bone');    
            this.requestItem.alpha = 0;
            console.log(this.biome)
            this.ranRequest1 = Math.floor(Math.random() * deadMonster[this.biome].length)+1;
            this.ranRequest2 = Math.floor(Math.random() * 2)+1;
            
            
            this.requestedCount = 15
            this.requestItemText = this.add.text(this.requestItem.x+this.requestItem.width/2+126, this.requestItem.y+(this.requestItem.height/2), "x"+this.requestedCount,{font:'LondrinaSolid-Black'});
            this.requestItemText.alpha = 0;
            this.requestItemText.fill= '#fff';
            this.requestItemText.fontSize = 24;
            this.requestItemText.anchor.setTo(0.5, 0.5);     
            this.requestItemText.wordWrap = true;
            this.requestItemText.wordWrapWidth = 150;              
            
          
            this.wardenGift = this.add.sprite((this.game.width/2)-75,this.game.height-200, 'wardenGift');
            this.wardenGift.anchor.setTo(0.5, 0.5);
            this.wardenGift.width = 200
            this.wardenGift.height = 120   
            this.wardenGift.inputEnabled = true;
            this.wardenGift.events.onInputDown.add(this.gift, this);             
            
          
            this.returnButton = this.add.sprite((this.game.width/2)-75,this.game.height-100, "return_"+this.biome+"MINI");  
            this.returnButton.anchor.setTo(0.5, 0.5); 
            this.returnButton.inputEnabled = true;
            this.returnButton.events.onInputDown.add(this.return, this);          
          
            this.relationshipText.text =  localStorage.getItem("factionLevel"+this.biome)

          
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
          
            if (localStorage.getItem("legendFound"+this.biome) === null ) {
              localStorage.setItem("legendFound"+this.biome,0)
            }
            this.foughtLegend = parseInt(localStorage.getItem("legendFound"+this.biome))       
          
          
            this.relationshipLevel = parseInt(localStorage.getItem("factionLevel"+this.biome));
            switch(this.biome){
              case 0:
                this.huntTicketsText.text = "Hunting Tip:\nPatun"
                this.textBackdropText2.text = "Beathas, the Sleepless"  
                this.textBackdropText.text = "*YAWN*\nReady to help, <<"+this.title+">>?"
                if(this.foughtLegend == 1){
                  this.textBackdropText.text = "You actually found Her? Well done! How was the fight?"
                }
                       
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  faction0: this.relationshipLevel
                });                  
                break;
              case 1:
                this.huntTicketsText.text = "Hunting Tip:\nYssun"
                this.textBackdropText2.text = "Beaux, the Silent"  
                this.textBackdropText.text = "... ?"     
                if(this.foughtLegend == 1){
                  this.textBackdropText.text = ". . . ."
                }                
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  faction1: this.relationshipLevel
                });                  
                break;
              case 2:
                this.huntTicketsText.text = "Hunting Tip:\nStoor"
                this.textBackdropText2.text = "Adair, the Gilded Rose"  
                this.textBackdropText.text = "Ready to join the Great Hunt?"
                if(this.foughtLegend == 1){
                  this.textBackdropText.text = "Incredible, we found him! How was the fight?"
                }               
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  faction: this.relationshipLevel
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

        if (localStorage.getItem("firstVisit-Faction") === null ) {
            localStorage.setItem("firstVisit-Faction",1);
            var faction = ""
            var beast = ""
            switch(this.biome){
              case 0:
                faction = "Night-Watchers"
                beast = "Patun, the Nightbringer"
                
                break;
              case 1:
                faction = "Deep-Walkers"
                beast = "Yssun, Devourer of Secrets"
                break;
              case 2:
                faction = "Sun-Eaters"
                beast = "Stoor, the Regal Dawn"
                break;
            }
            this.textBackdropText.text = "Lend the "+faction+" your strength, <<"+this.title+">>.\nJoin the hunt for \n"+beast  

        }           
       localStorage.setItem("nextWep",1)  
          this.huntGo = 0;
        }          
        , update: function () {

          this.textBackdropText.x = Math.floor( this.textBackdropText.x )
          this.textBackdropText.y = Math.floor( this.textBackdropText.y )
          //this.textBackdropText.smoothed = false  
          
          
          
          //this.wardenHunt.loadTexture("wardenHunt"+this.biome)

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
            //this.wardenHunt.alpha = 1;
            this.wardenGift.alpha = 1;
            //this.tixText.alpha = 1
          }

          if(this.chatTimer > 0){
            this.introText.alpha = 0;
            this.introText2.alpha = 0;            
            this.textBackdrop.alpha = 1;
            this.textBackdropText.alpha = 1;
            this.textBackdropText2.alpha = 1;
            this.textBackdrop.x = 0;
            //this.huntTickets.alpha += (0 - this.huntTickets.alpha) * 0.1; 
            //this.huntTicketsText.alpha += (0 - this.huntTicketsText.alpha) * 0.1;  
            
            this.requestItem.alpha += (0 - this.requestItem.alpha) * 0.1; 
            this.requestItemText.alpha += (0 - this.requestItemText.alpha) * 0.1;      
            //this.wardenHunt.alpha = 0;
            this.wardenGift.alpha = 0;  
            //this.tixText.alpha = 0;
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
          //this.huntTickets.loadTexture(npcReward[this.biome][date]);
          
          
          var date = d.getDate();
          var size = deadMonster[this.biome].filter(function(value) { 
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
          
          
          ////console.log(deadMonster[this.biome][date].rareRewards[1]+" Count")
          this.requestItem.loadTexture(deadMonster[this.biome][date].rareRewards[1]);
          if (localStorage.getItem(deadMonster[this.biome][date].rareRewards[1]+" Count") === null) {
            localStorage.setItem(deadMonster[this.biome][date].rareRewards[1]+" Count",0)
          }          
          this.requestItemText.text= deadMonster[this.biome][date].rareRewards[1]+"\nx"+localStorage.getItem(deadMonster[this.biome][date].rareRewards[1]+" Count")+"/"+this.requestedCount
          
          this.relationshipText.text = localStorage.getItem("factionLevel"+this.biome);
          

        }
        , hunt: function (unit) {
            //this.wardenHunt.width = 460;
            //this.wardenHunt.height = 260;  
         
         
        }
        , hideChat: function (unit) {
            this.chatTimer = 0;
            if(this.huntGo == 1){
              this.huntGo++;
              this.chatTimer = 1;
              switch(this.biome){
                case 0:
                  this.textBackdropText.text = "*YAWN*\nYou'll need PRISMATIC weapons to hurt it.\nSo get on that?"

              
                  break;

                case 1:
                  this.textBackdropText.text = "......."
                
                  break;
                case 2:
                   this.textBackdropText.text = "Stoor can shrug off most normal attacks. You'll need a PRISMATIC weapon."
             
                  break;                
              }                
            }
            //this.wardenHunt.width = 460;
            //this.wardenHunt.height = 260;  
            //this.wardenHunt.clicked = true;     
            //this.game.state.start('game') 

        }      
        , return: function (unit) {
            //this.Map.clicked = true;
            this.bgSound.stop();
            this.ping.play()         
             localStorage.setItem('state','warden')
             this.game.state.start('warden')  
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
          
          this.relationshipLevel = parseInt(localStorage.getItem("factionLevel"+this.biome));
          //console.log("gift")
          var d = new Date();
          var date = d.getDate();
          var size = deadMonster[this.biome].filter(function(value) { 
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
          
          var invenNum = parseInt(localStorage.getItem(deadMonster[this.biome][date].rareRewards[1]+" Count"))
          //invenNum = 999;
          //invenNum - 10 >= 0
          if(invenNum - this.requestedCount >= 0){
            this.ping.play();
            invenNum = invenNum-this.requestedCount
            if(invenNum < 0){
              invenNum = 0
            }
            localStorage.setItem(deadMonster[this.biome][date].rareRewards[1]+" Count",invenNum)
            var relationshipLevel = parseInt( localStorage.getItem("factionLevel"+this.biome))
            localStorage.setItem("factionLevel"+this.biome,relationshipLevel+1)
            this.relationshipLevel = parseInt( localStorage.getItem("factionLevel"+this.biome))
            
            var d = new Date();
            var date = d.getDate();
            var day = d.getDay(); 
            if(date >  npcReward[this.biome].length-1){

              date -= Math.floor(date/( npcReward[this.biome].length-1))*( npcReward[this.biome].length-1)-1
            } 
            
            if (localStorage.getItem("huntingTip") === null) {
              localStorage.setItem("huntingTip",0)
            } 
            localStorage.setItem("huntingTip",this.biome+1);

      
            this.chatTimer = 1;
            this.huntGo = 1;
            console.log(this.huntGo)
            switch(this.biome){
              case 0:
                this.textBackdropText.text = "With this we can better track the Nightbringer"
                
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  faction0: this.relationshipLevel
                });                  
                break;
                 
              case 1:
                this.textBackdropText.text = "..."
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  faction1: this.relationshipLevel
                });                  
                break;
              case 2:
                this.textBackdropText.text = "Ah! With this it's just a matter of time until Stoor is ours!"
                firebase.database().ref('player/' +localStorage.getItem("userID")).update({
                  faction2: this.relationshipLevel
                });                  
                break;                
            }     
            //this.huntTickets = this.add.sprite(0,0, 'huntTickets');
            //this.huntTickets.alpha = 0;
            //this.huntTickets.TapCount = 7;
            //this.fireWrite();                                  
          }
          else{
            this.chatTimer = 1;
            switch(this.biome){
              case 0:
                this.textBackdropText.text = "We need more information on Patun ..."
                break;
              case 1:
                this.textBackdropText.text = ". . ."
                break;
              case 2:
                this.textBackdropText.text = "We need those parts to track down that beast, Stoor!"
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
    window['simplewar'].Faction = Faction;
}());