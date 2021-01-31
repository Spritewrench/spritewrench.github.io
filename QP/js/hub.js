(function () {
    'use strict';

    function Hub() {
        this.player = null;
    }
    Hub.prototype = {
        create: function () {
            try{
                setupVideoReward()
                getAds()
            }
            catch(error){
              //admob.rewardVideo.show();   
            }                   
            this.game.stage.backgroundColor = "#160c2c";
            this.game.stage.backgroundColor = "#160c2c";
            //console.log(localStorage.getItem("biome"))
            localStorage.setItem("pause",0)
            
            var d = new Date();
            var date = d.getDate();
            var day = d.getDay();         
            this.day = day
            console.log("old "+day)
            //this.day = 5
            if(day >  tixDiscount.length-1){
              day -= Math.floor(day/(tixDiscount.length-1))*(tixDiscount.length-1)-1
            } 
            
            //console.log("new "+day)
            this.biome = parseInt(tixDiscount[day])
            //console.log(tixDiscount[day])
            
            this.markerBiome = this.biome
            this.map = this.add.sprite(0, 0, 'grasslandsHub'); 
            
            this.map.width = this.game.width;
            this.map.height = this.game.height;    
            this.map.inputEnabled = true;
            this.map.events.onInputDown.add(this.hunt, this);           
          
            this.huntTickets = this.add.sprite(0,0, 'huntTickets');
          
            switch(this.markerBiome){
              case 0:
               this.huntTickets.loadTexture('grasslandTix');
                break;
              case 1:
                this.huntTickets.loadTexture('caveTix');
                break;
              case 2:
                this.huntTickets.loadTexture('mountainTix');
                break;                
            }     
          
            var d = new Date();
            var n = d.getHours();
            var date = d.getDate();
            var day = d.getDay();         
            console.log(date)
            if(date >  weather.length-1){
              date -= Math.floor(date/(weather.length-1))*(weather.length-1)-1
            }  
            var timeOfDay = "d";
            if(n >= 0 && n <= 18){
              timeOfDay = "d";
            }
            if(n > 19 && n <= 23){
              timeOfDay = "n";
            }  
            console.log(date)
            this.weatherIcon = this.add.sprite(this.game.width-100, this.huntTickets.y+(this.huntTickets.height/2)-5, 'weatherIcon'+weather[date]+"-"+timeOfDay);
            this.weatherIcon.anchor.setTo(0.5, 0.5);
            this.weatherIcon.width = 150
            this.weatherIcon.height = 150  
            
            this.hasLost = parseInt(localStorage.getItem("hasLost"))
            
            this.arrowLeft = this.add.sprite(10, this.game.height/2-100, "craftArrowLeft");  
            this.arrowLeft.inputEnabled = true;
            this.arrowLeft.events.onInputDown.add(this.left, this);  

            this.arrowRight = this.add.sprite(this.game.width-100, this.game.height/2-100, "craftArrowRight");  
            this.arrowRight.inputEnabled = true;
            this.arrowRight.events.onInputDown.add(this.right, this);        
          
            
                
            this.hubBonus1 = this.add.sprite(0, 0, 'hubBonus1');                
            this.hubBonus1.width = this.game.width;
            this.hubBonus1.height = this.game.height;              
        
            this.hubBonus1Detail = this.add.sprite(0, 0, 'hubBonus1-0-1');
            this.hubBonus1Detail.width = this.game.width;
            this.hubBonus1Detail.height = this.game.height;    

            this.hubBonus2 = this.add.sprite(0, 0, 'hubBonus2-0');                
            this.hubBonus2.width = this.game.width;
            this.hubBonus2.height = this.game.height;     
          
            this.hubBonus3 = this.add.sprite(0, 0, 'hubBonus3-0');                
            this.hubBonus3.width = this.game.width;
            this.hubBonus3.height = this.game.height;    
          
            this.tixText = this.add.text(this.huntTickets.x+this.huntTickets.width-63, this.huntTickets.y+(this.huntTickets.height/2), "1/1",{font:'LondrinaSolid-Black'});
            this.tixText.fill= '#fff';
            this.tixText.fontSize = 20;
            this.tixText.anchor.setTo(0.5, 0.5);
          
            this.openGuild = this.add.sprite(60,(this.game.height)-50, 'openGuild');
            this.openGuild.anchor.setTo(0.5, 0.5);

            this.openGuild.clicked = false;
            this.openGuild.inputEnabled = true;
            this.openGuild.events.onInputDown.add(this.goToGuild, this)  
            
            this.Notification = this.add.sprite(60,(this.game.height)-50, 'notification');
            this.Notification.anchor.setTo(0.5, 0.5);  
            this.Notification.alpha = 0;            
            
            this.openShop = this.add.sprite(this.game.width/2,(this.game.height)-50, 'openShop');
            this.openShop.anchor.setTo(0.5, 0.5);
            this.openShop.clicked = false;
            this.openShop.inputEnabled = true;
            this.openShop.events.onInputDown.add(this.goToShop, this);            

            this.Map = this.add.sprite((this.game.width)-60,(this.game.height)-50, 'openLeaderboard');
            this.Map.anchor.setTo(0.5, 0.5);

            this.Map.clicked = false;
            this.Map.inputEnabled = true;
            this.Map.events.onInputDown.add(this.goToArchive, this);  
          
            this.bgSound = this.add.audio('hubMusic');
            this.ping = this.add.audio('ping');
            
            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            } 
          
  if (localStorage.getItem("firstVisit-Index3") === null ) {
      localStorage.setItem("firstVisit-Index3",1);
      //alert("lol")
      //localStorage.setItem("Markerbiome",this.markerBiome)            
      //this.game.state.start('game') 
    
      /*setTimeout(function () {
         alert("Tap the arrows to choose between the different areas within this location.\nPay attention to the bonuses available to each area.\nTap on your desired area to enter.")
      }, 1000);     */    
      localStorage.setItem("TixCount0",15) 
      localStorage.setItem("TixCount1",15) 
      localStorage.setItem("TixCount2",15)   
      var d = new Date();
      localStorage.setItem("loginDate",d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getUTCFullYear())      
  }
  else {
    //login bonus
    var d = new Date();
    var today = d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getUTCFullYear()
    if(localStorage.getItem("loginDate") === null){
      localStorage.setItem("loginDate", today)
    }    
    var lastLogin = localStorage.getItem("loginDate")

    if(lastLogin.localeCompare(today) != 0){
      setTimeout(function () {
         alert("Welcome Back!\nHere's your Login Bonus:\nGrassland Tickets x 15\nCave Tickets x 15\nMountain Tickets x 15\nHappy Hunting :)")
      }, 1000);         
      localStorage.set      
      localStorage.setItem("TixCount0",parseInt(localStorage.getItem("TixCount0"))+15) 
      localStorage.setItem("TixCount1",parseInt(localStorage.getItem("TixCount1"))+15) 
      localStorage.setItem("TixCount2",parseInt(localStorage.getItem("TixCount2"))+15)         
      localStorage.setItem("loginDate",d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getUTCFullYear())  
      localStorage.setItem("dailyPurchase",1)
      localStorage.setItem("firstVisit-shopOom",0);
    } 
  }
          

          var d = new Date();
          var date = d.getDate();
          var day = d.getDay();

          this.weekOfMonth = Math.ceil((date + 6 - day)/7);
          //console.log(guildItem.length) 
          if(this.weekOfMonth >= guildItem.length){
            this.weekOfMonth = 1
          }          
        }          
        , update: function () {
          this.Notification.alpha = 0;  
          var inveNum = localStorage.getItem(guildItem[this.weekOfMonth].name+" Count")
          if(inveNum >= guildItem[this.weekOfMonth].qty ){
            this.Notification.alpha = 1;  
          }

          
          switch(this.markerBiome){
            case 0:
              this.map.loadTexture('grasslandsHub'); 
              this.huntTickets.loadTexture('grasslandTix');
              break;
            case 1:
              this.map.loadTexture('caveHub'); 
              this.huntTickets.loadTexture('caveTix');
              break;
            case 2:
              this.map.loadTexture('mountainHub'); 
              this.huntTickets.loadTexture('mountainTix');
              break;                
          }
          var d = new Date();
          var date = d.getDate();
          var day = d.getDay();
          ////console.log("date "+date+" length: "+ monster[this.markerBiome].length+" multiplication "+date/(monster[this.markerBiome].length-1))
          //console.log (this.markerBiome)
          if(date > monster[this.markerBiome].length-1){
            ////console.log("asd "+Math.floor(date/(monster[this.markerBiome].length-1)))
            ////console.log("asasd "+(monster[this.markerBiome].length-1))
            date -= Math.floor(date/(monster[this.markerBiome].length-1))*(monster[this.markerBiome].length-1)
            if(date <= 0){
              date = 1;
            }
          }      

          ////console.log(date)          
          ////console.log("dat "+date)
          this.hubBonus1Detail.loadTexture('hubBonus1-'+this.markerBiome+'-'+date)
          //monster[0][1]

          this.hubBonus2.loadTexture('hubBonus2-'+this.biome); 
          
          if(this.biome == this.markerBiome && this.day < 5){
            this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/1"
          }
          else if(this.day >= 5){
            this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/2"
            this.hubBonus2.loadTexture('hubBonus2-3'); 
          }          
          else{
            this.tixText.text = localStorage.getItem("TixCount"+this.markerBiome)+"/3"
          }
          this.newPlace = parseInt(localStorage.getItem("newPlace"))
          if(this.newPlace == 1){
            this.hubBonus3.loadTexture("hubBonus3-0")
          }
          else{
            this.hubBonus3.loadTexture("hubBonus3-1")
          }

        }      
        , hunt: function (unit) {
            //this.wardenHunt.width = 460;
            //this.wardenHunt.height = 260;  
              //localStorage.setItem("monSize","large");
              //localStorage.setItem("monName",monster[this.biome][1].name);
              //this.game.state.start('win');
      
            this.ping.play();
            this.bgSound.stop();
            localStorage.setItem("Markerbiome",this.markerBiome)
            this.game.state.start('warden');           
          
            if(this.biome == this.markerBiome && (localStorage.getItem("TixCount"+this.markerBiome)-1) >= 0 && this.day < 5){
              //localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-1);
              //localStorage.setItem("Markerbiome",this.markerBiome)
              
              //this.game.state.start('warden');
            }
            else if(this.day >= 5 && (localStorage.getItem("TixCount"+this.markerBiome)-2) >= 0){
              //localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-1);
              //localStorage.setItem("Markerbiome",this.markerBiome)
              
              //this.game.state.start('warden');
            }          
            else if ((localStorage.getItem("TixCount"+this.markerBiome)-3) >= 0){
              //localStorage.setItem("TixCount"+this.markerBiome,localStorage.getItem("TixCount"+this.markerBiome)-3);
              //localStorage.setItem("Markerbiome",this.markerBiome)
              

              //this.game.state.start('warden');
            }
            else{
              //alert("Not Enough Tickets! :(")
            }
            
            
        }
        , goToShop: function (unit) {
            //this.Map.width = 250;
            //this.Map.height = 250  
            //this.ping.play();
            //this.bgSound.stop();          
            //this.Map.clicked = true;
            //window.location.href = "index2.html";
            //console.log("leader")
            this.ping.play();
            this.bgSound.stop(); 
            this.game.state.start('shop')           
        }  
        , goToArchive: function (unit) {
            //this.Map.width = 250;
            //this.Map.height = 250  
            this.ping.play();
            this.bgSound.stop(); 
            this.game.state.start('archive') 
            //this.Map.clicked = true;
            //window.location.href = "index2.html";
            //console.log("leader")
        }      
        , goToCraft: function (unit) {
           //localStorage.setItem('state','craft')
           this.game.state.start('craft') 
            
        }    
        , goToGuild: function (unit) {
           //localStorage.setItem('state','craft')
            this.ping.play();
            this.bgSound.stop();          
           this.game.state.start('rank') 
            
        }        
        ,left: function () {
          this.markerBiome--
          if(this.markerBiome < 0){
            this.markerBiome = 2
          }

        }
        ,right: function () {   
          this.markerBiome++
          if(this.markerBiome > 2){
            this.markerBiome = 0
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
    window['simplewar'].Hub = Hub;
}());