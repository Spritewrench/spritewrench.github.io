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
            this.map = this.add.sprite(0, 0, 'BG'+localStorage.getItem("biome"));
            this.map.width = this.game.width;
            this.map.height = this.game.height;           
          
          
            this.huntTickets = this.add.sprite(0,0, 'huntTickets');
            this.huntTickets.width = 300
            this.huntTickets.height = 200                
		        
            this.wardenHunt = this.add.sprite((this.game.width/2),(this.game.height/2)-150, 'wardenHunt');
            this.wardenHunt.anchor.setTo(0.5, 0.5);
            this.wardenHunt.width = 450
            this.wardenHunt.height = 250    
            this.wardenHunt.clicked = false;
            this.wardenHunt.inputEnabled = true;
            this.wardenHunt.events.onInputDown.add(this.hunt, this);             
            
            this.wardenReward = this.add.sprite((this.game.width/2),(this.game.height/2)+100, 'wardenReward');
            this.wardenReward.anchor.setTo(0.5, 0.5);
            this.wardenReward.width = 450
            this.wardenReward.height = 250   
            
            this.Map = this.add.sprite((this.game.width)-120,(this.game.height/2)+450, 'returnMap');
            this.Map.anchor.setTo(0.5, 0.5);
            this.Map.width = 220;
            console.log(this.Map)
            this.Map.height = 220    
            this.Map.clicked = false;
            this.Map.inputEnabled = true;
            this.Map.events.onInputDown.add(this.goToMap, this);               
            
            this.TixCount = this.add.bitmapText(this.huntTickets.x+this.huntTickets.width-70, this.huntTickets.y+(this.huntTickets.height/2)-10, 'minecraftia', '',40);
            this.TixCount.text = "x"+localStorage.getItem("TixCount"+localStorage.getItem("placeID"));
            this.TixCount.anchor.setTo(0.5, 0.5);             
            
            this.TixCountVal = parseInt(localStorage.getItem("TixCount"+localStorage.getItem("placeID")));
          
            this.TixTimer = this.add.bitmapText(this.game.width/2, this.huntTickets.y+(this.huntTickets.height/2)-10, 'minecraftia', '',40);
            this.TixTimer.text = "0:00";
            this.TixTimer.anchor.setTo(0.5, 0.5);   
            this.TixTimerVal = 60*2
            this.timer = 0;
            this.TixTimer.alpha = 0;
          
          
            this.biomeName = this.add.bitmapText(this.game.width-250, this.huntTickets.y+(this.huntTickets.height/2)-5, 'minecraftia', '',40);
            this.biomeName.text = localStorage.getItem("placeName");
            this.biomeName.anchor.setTo(0.5, 0.5);       
            this.biomeName.maxWidth = 400;
            //this.gray = this.game.add.filter('Gray');
        }          
        , update: function () {
            this.game.scale.refresh(); 
            this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
            this.timer++;
            // show tix
            this.TixCount.text = "x"+this.TixCountVal
            console.log(this.timer%10+" "+this.TixTimerVal)
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
                this.TixCountVal = 5;
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
              window.location.href = "index.html";
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
            this.wardenHunt.width = 460;
            this.wardenHunt.height = 260;  
            this.wardenHunt.clicked = true;          

        }
        , goToMap: function (unit) {
            this.Map.width = 250;
            this.Map.height = 250  
            this.Map.clicked = true;

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