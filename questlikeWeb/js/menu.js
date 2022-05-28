(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
        //this.game.scale.setMinMax(360, 640, 800,window.innerHeight)
        
        this.game.stage.backgroundColor = "#160c2c";
        
      var x = this.game.width / 2
        , y = this.game.height / 2;

        
        this.map = this.add.sprite(0, 0, 'map');
        this.map.width = this.game.width;
        this.map.height = this.game.height;        
        this.map.alpha = 0;        
        
        
        this.logo = this.add.sprite(0, 150, 'logo');
        this.logo.width = this.game.width;
        this.logo.height = this.game.height;
        
        this.logo2 = this.add.sprite(0, 0, 'logo2');
        this.logo2.width = this.game.width;
        this.logo2.height = this.game.height;
        this.logo2.alpha = 0;
        
        
        
        this.animTimer1 = 50;
        this.animTimer2 = 50;
        
        var style = { font: '14pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        
        this.hScoreTxt = this.add.text(x, this.game.height-24, "", style); 
        this.hScoreTxt.anchor.setTo(0.5, 0.5);
        this.hScoreTxt.alpha = 0;
        
        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.start = this.add.text(x, y, "", style); 
        this.start.anchor.setTo(0.5, 0.5);
        this.start.alpha = 0;
        this.start.inputEnabled = true;
        this.start.events.onInputDown.add(this.onDown, this);
        this.start.events.onInputOver.add(this.hover, this);
        this.start.events.onInputOut.add(this.hoverOut, this);
        
        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.leader = this.add.text(x, y+50, "", style); 
        this.leader.anchor.setTo(0.5, 0.5);
        this.leader.alpha = 0;   
        this.leader.inputEnabled = true;
        if(navigator.onLine) { // true|false
            this.leader.events.onInputDown.add(this.onDown3, this);
            this.leader.events.onInputOver.add(this.hover, this);
            this.leader.events.onInputOut.add(this.hoverOut, this);
        }   
        else{
            this.leader.tint = 0x160c2c
        }
   

        
        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.credit = this.add.text(x, y+100, "", style); 
        this.credit.anchor.setTo(0.5, 0.5);
        this.credit.alpha = 0;   
        this.credit.inputEnabled = true;
        this.credit.events.onInputDown.add(this.onDown2, this);
        this.credit.events.onInputOver.add(this.hover, this);
        this.credit.events.onInputOut.add(this.hoverOut, this);        
        
        var style = { font: '14pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.version = this.add.text(this.game.width-50, this.game.height-24, "VER 0.0.0", style); 
        this.version.anchor.setTo(0.5, 0.5);
        this.version.alpha = 0;
                
        
        //sound
        this.ping = this.add.audio('ping');
        this.introSound = this.add.audio('swordSlashintro');
        this.mainMenuMusic = this.add.audio('On The Road to Adventure');
        this.tavernMusic = this.add.audio('Inn Music 2');
        this.introCheck = false;
        this.menuClicked = false;
        
        this.updateLeader = 0;
        

        

        
        //this.input.onDown.add(this.onDown, this);
    },

    update: function () {

        
        if(this.animTimer1 > 0){
            this.animTimer1--;
            
        }
        else{
            this.logo.y += (0 - this.logo.y ) * 0.05;

        }
        if(this.logo.y <= 0.1){
            this.logo2.alpha += (1 - this.logo2.alpha  ) * 0.05;
            this.version.alpha += (1 - this.version) * 0.05;
            this.version.text ="ver 0.1.8"            
            if(!this.introSound.isPlaying && !this.introCheck){
                //this.introSound.play();
                this.introCheck = true;
            }            
        }
        if(this.logo2.alpha >= 0.8){
            this.map.alpha += (0.3 - this.map.alpha  ) * 0.05;

            
        }    
        if(this.map.alpha >= 0.1 ){
            if(this.animTimer2 > 0){
               this.animTimer2--; 
            }
            else{
                this.start.alpha += (1 - this.start.alpha  ) * 0.05;
                this.leader.alpha += (1 - this.leader.alpha  ) * 0.05;
                this.credit.alpha += (1 - this.credit.alpha  ) * 0.05;
                this.hScoreTxt.alpha += (1 - this.hScoreTxt.alpha  ) * 0.05;
                //this.start.tint = 0xFFFFFF
                this.start.text = "START"
                this.leader.text = "LEADERBOARD"
                this.credit.text = "CREDITS"         
                
            }

        }
        if(this.introCheck && !this.introSound.isPlaying && !this.mainMenuMusic.isPlaying){
            this.mainMenuMusic.loop = true;
            //this.mainMenuMusic.play();
            //this.mainMenuMusic.volume = 0;
        }
        //console.log(this.mainMenuMusic.onFadeComplete)
        if( this.menuClicked){
              
            
           this.game.state.start('preloader',true,true) 
        }
        if (localStorage.getItem("highScore") === null) {

            this.hScoreTxt.text = ""

        }          
        else{
            this.hScoreTxt.text = "High Score: "+parseInt(localStorage.getItem("highScore"))+""
            if(this.updateLeader == 0){
                    this.updateLeader = 1;
                    var gameName = "questlike"
                    var userName = localStorage.getItem("userID")
                    var gameScore = localStorage.getItem("score"),  
                    result;

                    var max = 10;
                    App42.initialize("1e98e2472f6607e0a71281b8598bbd5e47f895b2cb6bac63eed63b8476c379c9","a538f724c09b10b26091b5b8f47b8fa28037a1c5f501fed2a89099a0c9a8be15");  
                        var scoreBoardService  = new App42ScoreBoard();     
                        console.log(scoreBoardService)
                        scoreBoardService.getTopNRankings(gameName,max,{   
                            success: function(object)  
                            {
                                var game = JSON.parse(object);            
                                result = game.app42.response.games.game;

                                var scoreList = result.scores.score;          
                                
                                if (scoreList instanceof Array) {                  
                                     
                                    for (var i = 0; i < scoreList.length; i++) { 

                                        try{
                                            console.log(localStorage.getItem("scoreID").indexOf(scoreList[i].scoreId) >= 0)
                                            if(localStorage.getItem("scoreID").indexOf(scoreList[i].scoreId) >= 0){
                                                greenworks.activateAchievement('NEW_ACHIEVEMENT_1_0',
                                                  function() { console.log("yes") },
                                                  function(err) {  console.log(err) });       
                                            }
                                        }
                                        catch(error){

                                        }

                                    }              
                                } else {                  
                                        try{
                                            console.log(localStorage.getItem("scoreID").indexOf(scoreList[i].scoreId) >= 0)                                    
                                            if(localStorage.getItem("scoreID").indexOf(scoreList.scoreId) >= 0){
                                                greenworks.activateAchievement('NEW_ACHIEVEMENT_1_0',
                                                  function() { console.log("yes")  },
                                                  function(err) { console.log(err)});       
                                            }
                                        }
                                        catch(error){

                                        }
                                }                             
                            },
                            error: function(error) {  

                            }    
                        });             
            }            

        }     
        if(!navigator.onLine) { // true|false
            this.hScoreTxt.text = "-No Internet Connection-"
        } 

      
    },
    hover: function (unit){
        unit.tint = 0x160c2c
    },
    hoverOut: function (unit){
        unit.tint = 0xFFFFFF
    },      
    onDown: function () {
    this.mainMenuMusic.fadeOut(2000);  
    this.ping.play();
    this.menuClicked = true;
    this.menuChange = 'choose'
    localStorage.setItem('state','choose')
    
	//this.game.state.start('choose');
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    },
    onDown2: function () {

    this.mainMenuMusic.fadeOut(2000)  
    this.ping.play();
    this.menuClicked = true;
    this.menuChange = 'credit'
    localStorage.setItem('state','credit')
    
	//this.game.state.start('choose');
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    },
    onDown3: function () {

    this.mainMenuMusic.fadeOut(2000)  
    this.ping.play();
    this.menuClicked = true;
    this.menuChange = 'leader'
    localStorage.setItem('state','leaderboard')
    
	//this.game.state.start('choose');
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
  window['simplewar'].Menu = Menu;

}());
