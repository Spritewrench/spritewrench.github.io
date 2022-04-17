(function () {
    'use strict';

    function Warden() {
        this.player = null;
    }
    Warden.prototype = {
        create: function () {
                  
            this.game.stage.backgroundColor = "#160c2c";
            this.game.stage.backgroundColor = "#160c2c";
            console.log(localStorage.getItem("biome"))
            this.biome = parseInt(localStorage.getItem("biome"))
            this.map = this.add.sprite(0, 0, 'BG'+localStorage.getItem("biome"));
            this.map.width = this.game.width;
            this.map.height = this.game.height;           
            
            this.hasLost = parseInt(localStorage.getItem("hasLost"))
          
            this.huntTickets = this.add.sprite(0,0, 'huntTickets');
            //this.huntTickets.width = 200
            //this.huntTickets.height = 100                
		        
            this.wardenHunt = this.add.sprite((this.game.width/2),(this.game.height/2)-150, 'wardenHunt');
            this.wardenHunt.anchor.setTo(0.5, 0.5);
            //this.wardenHunt.width = 450
            //this.wardenHunt.height = 250    
            this.wardenHunt.clicked = false;
            this.wardenHunt.inputEnabled = true;
            this.wardenHunt.events.onInputDown.add(this.hunt, this);             
            
            this.wardenTalk = this.add.sprite((this.game.width/2),(this.game.height/2)+100, 'wardenTalk');
            this.wardenTalk.anchor.setTo(0.5, 0.5);
            //this.wardenTalk.width = 450
            //this.wardenTalk.height = 250   
            this.wardenTalk.inputEnabled = true;
            this.wardenTalk.events.onInputDown.add(this.chat, this);                
            
            this.Map = this.add.sprite((this.game.width)-120,(this.game.height/2)+750, 'returnMap');
            this.Map.anchor.setTo(0.5, 0.5);
            this.Map.width = 220;
            this.Map.height = 220    
            this.Map.clicked = false;
            this.Map.inputEnabled = true;
            this.Map.events.onInputDown.add(this.goToMap, this);    
          
            this.openCraft = this.add.sprite(450,(this.game.height/2)+750, 'openCraft');
            this.openCraft.anchor.setTo(0.5, 0.5);
            this.openCraft.width = 220;
            this.openCraft.height = 220    
            this.openCraft.clicked = false;
            this.openCraft.inputEnabled = true;
            this.openCraft.events.onInputDown.add(this.goToCraft, this);            

            this.openGuild = this.add.sprite(110,(this.game.height/2)+750, 'openGuild');
            this.openGuild.anchor.setTo(0.5, 0.5);
            this.openGuild.width = 220;
            this.openGuild.height = 220    
            this.openGuild.clicked = false;
            this.openGuild.inputEnabled = true;
            this.openGuild.events.onInputDown.add(this.goToGuild, this)          
            
            this.TixCount = this.add.bitmapText(this.huntTickets.x+this.huntTickets.width-40, this.huntTickets.y+(this.huntTickets.height/2)-5, 'minecraftia', '',20);
            this.TixCount.text = "x"+localStorage.getItem("TixCount"+localStorage.getItem("placeID"));
            this.TixCount.anchor.setTo(0.5, 0.5);             
            
            this.TixCountVal = parseInt(localStorage.getItem("TixCount"+localStorage.getItem("placeID")));
          
            this.TixTimer = this.add.bitmapText(this.game.width/2, this.huntTickets.y+(this.huntTickets.height/2)-10, 'minecraftia', '',32);
            this.TixTimer.text = "0:00";
            this.TixTimer.anchor.setTo(0.5, 0.5);   
            this.TixTimerVal = 60*2
            this.timer = 0;
            this.TixTimer.alpha = 0;
          
          
            this.biomeName = this.add.bitmapText(this.game.width-200, this.huntTickets.y+(this.huntTickets.height/2)-5+150, 'minecraftia', '',40);
            this.biomeName.text = ""//localStorage.getItem("placeName");
            this.biomeName.anchor.setTo(0.5, 0.5);       
            this.biomeName.maxWidth = 400;
          
            this.weatherIcon = this.add.sprite(this.game.width-100, this.huntTickets.y+(this.huntTickets.height/2)-5, 'weatherIcon');
            this.weatherIcon.anchor.setTo(0.5, 0.5);
            this.weatherIcon.width = 150
            this.weatherIcon.height = 150  
            
            this.warden = this.add.sprite(this.game.width, 0, 'warden'+this.biome);
            //this.warden.anchor.setTo(0.5, 0.5);
            this.warden.alpha = 0;
            this.warden.width = this.game.width
            this.warden.height = this.game.height
            this.warden.inputEnabled = true;
            this.warden.events.onInputDown.add(this.hideChat, this);             
            
            this.wardenText = this.add.text(25, this.game.height-280, "yo",{font:'LondrinaSolid-Black'});
            this.wardenText.alpha = 0;
            this.wardenText.fill= '#fff';
            this.wardenText.fontSize = 32;   
            this.wardenText.wordWrap = true;
            this.wardenText.wordWrapWidth = this.game.width-50;     
            this.isChatting = false;
            //this.gray = this.game.add.filter('Gray');
        }          
        , update: function () {
            
            //this.game.scale.refresh();
            //this.TixCountVal = 5;
            localStorage.setItem('hasSlashed',0);
            localStorage.setItem('hasStabbed',0);
            localStorage.setItem('hasBashed',0);   
          //this.game.scale.setMinMax(window.innerWidth,window.innerHeight,window.innerWidth,window.innerHeight) 
          
            //has lost
            if(this.hasLost == 1){
              this.warden.x = 0
              this.warden.alpha = 1;
              this.wardenText.alpha = 1;
              this.wardenText.text = "Ah! \n Bested by a "+localStorage.getItem("monSize")+" "+localStorage.getItem("monName")+"?\n Maybe try a different weapon?"

              
            }
            else if (!this.isChatting){
              this.warden.alpha = 0;
              this.warden.x = this.game.width
              this.wardenText.alpha = 0;              
            }
            this.timer++;
            // show tix
            this.TixCount.text = "x"+this.TixCountVal
            //console.log(this.timer%10+" "+this.TixTimerVal)
            //timer
            if(this.TixTimerVal >0 && this.TixCountVal <= 0 ){
              
              if(this.timer%10 == 0){
                this.TixTimerVal--; 
              }          
              this.wardenHunt.loadTexture("wardenHunt-No");
              this.TixTimer.alpha = 1;
              
            }
            else{
              this.wardenHunt.loadTexture("wardenHunt");
              this.TixTimer.alpha = 0;
              this.TixTimerVal = 60*2;
              if(this.TixCountVal <= 0 ){
                this.TixCountVal = 2;
                localStorage.setItem("TixCount"+localStorage.getItem("placeID"), this.TixCountVal);
              }
              
            }
          
            this.TixTimer.text = this.time_convert(this.TixTimerVal);
            //animate map button
            //this.Map.width++;
            
            if(this.Map.width > 220){
              this.Map.width--;

            }
            if(this.Map.height > 220){
              this.Map.height--;
            }  
            if(this.Map.width <= 221 && this.Map.height <= 221 && this.Map.clicked){
              //window.location.href = "/";
            }    
          
            //animate hunt button
            if(this.wardenHunt.width > 450){
              this.wardenHunt.width--;

            }
            if(this.wardenHunt.height > 250){
              this.wardenHunt.height--;
            }  
            if(this.wardenHunt.width <= 451 && this.wardenHunt.height <= 251 && this.wardenHunt.clicked && this.TixCountVal > 0){
              localStorage.setItem("TixCount"+localStorage.getItem("placeID"), this.TixCountVal-1);
              this.game.state.start('game');
            } 
            
            

        }
        , hunt: function (unit) {
            //this.wardenHunt.width = 460;
            //this.wardenHunt.height = 260;  
            this.wardenHunt.clicked = true;          

        }
        , goToMap: function (unit) {
            this.Map.width = 250;
            this.Map.height = 250  
            this.Map.clicked = true;
            window.location.href = "index2.html";
        }   
        , goToCraft: function (unit) {
           //localStorage.setItem('state','craft')
           this.game.state.start('craft') 
            
        }    
        , goToGuild: function (unit) {
           //localStorage.setItem('state','craft')
           this.game.state.start('rank') 
            
        }        
        , chat: function (unit) {
          console.log("chat")
           //localStorage.setItem('state','craft')
           //this.game.state.start('craft') 
          this.isChatting = true;
          this.warden.x = 0;
          this.warden.alpha = 1;
          this.wardenText.alpha = 1;
          var ran = Math.floor(Math.random() * 2);
          if(this.TixCountVal <= 0){
            this.TixCountVal = 2
            this.wardenText.text = "It seems you've run out of TICKETS.\nVery well, I'll loan you 2 more ...\njust this once."
          }
          else{
            switch(ran){
              case 0:
                this.wardenText.text = "Greetings!\nThe Hunted and the Hunter are linked. I'll be here to remind you of that fact, lest you forget."
                break;
              case 1:
                var location = parseInt(this.biome)
                switch(location){
                  case 0:
                     this.wardenText.text = "Well met Hunter!\nWocco are curious beasts are they not? The way they shrug off SLASH and BASH type attacks makes quite a challenge."
                    break;
                  case 1:
                     this.wardenText.text = "Well met Hunter! \nMaddock Wyrms are wily beasts are they not? Their resistance of STAB and BASH type attacks make them truly formidable!"
                    break;
                  case 2:
                     this.wardenText.text = "Well met Hunter! \nDon't let the adorable visage of the Noot fool you now. They resist SLASH and STAB type and are quite savage!"                    
                    break;                    
                }
               
                break;
             
            }            
          }

            
        }   
        , hideChat: function (unit) {
           //localStorage.setItem('state','craft')
           //this.game.state.start('craft') 
          this.isChatting = false;
          this.warden.alpha = 0;
          this.warden.x = this.game.width;
          //this.warden.y = this.warden.height;
          this.wardenText.alpha = 0;
          localStorage.setItem("hasLost",0);
          this.hasLost = 0;          
            
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