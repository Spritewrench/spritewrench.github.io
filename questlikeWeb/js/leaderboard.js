(function () {
    'use strict';

    function Leaderboard() {
        this.player = null;
    }
    Leaderboard.prototype = {
  create: function () {
        this.game.scale.setMinMax(1280,800,1920,1080)
        this.game.stage.backgroundColor = "#160c2c";
        
      var x = this.game.width / 2
        , y = this.game.height / 2;

        
        this.map = this.add.sprite(0, 0, 'map');
        this.map.width = this.game.width;
        this.map.height = this.game.height;        
        this.map.alpha = 0.2;        
        
        

        
        
        
        this.animTimer1 = 50;
        this.animTimer2 = 50;

        var style = { font: '14pt Muli', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
        this.start = this.add.text(x, y-250, "", style); 
      this.start.orig = this.start.y;
        this.start.anchor.setTo(0.5, 0);
        this.start.alpha = 0;
        this.start.inputEnabled = true;
        this.start.events.onInputDown.add(this.onDown, this);

        
        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.credit = this.add.text(x, this.start.height+150, "BACK", style); 
        this.credit.anchor.setTo(0.5, 0.5);
        this.credit.alpha = 0;   
        this.credit.inputEnabled = true;
        this.credit.events.onInputDown.add(this.onDown, this);
        this.credit.events.onInputOver.add(this.hover, this);
        this.credit.events.onInputOut.add(this.hoverOut, this);      

        
        var style = { font: '14pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.version = this.add.text(this.game.width-50, this.game.height-24, "VER 0.0.0", style); 
        this.version.anchor.setTo(0.5, 0.5);
        this.version.alpha = 0;

            this.scroll = this.add.sprite(x, 50, 'scroll');
            this.scroll.anchor.setTo(0.5, 0.5);
            this.scroll.width = 45;
            this.scroll.height = 91;      
        
        //sound
        this.ping = this.add.audio('ping');
        this.introSound = this.add.audio('swordSlashintro');
        this.mainMenuMusic = this.add.audio('On The Road to Adventure');
        this.tavernMusic = this.add.audio('Inn Music');
        this.introCheck = false;
        this.menuClicked = false;
        
      this.pullLeader = 0
        
        //this.input.onDown.add(this.onDown, this);
    },

    update: function () {
            if(!this.tavernMusic.isPlaying){
                this.tavernMusic.loop = true;
                this.tavernMusic.play();
                
            
            }
        
                
                if(this.pullLeader < 2){
                    this.pullLeader++;
                    localStorage.setItem("length","")
                    localStorage.setItem("scoreLength","")    
                    var rank = 1;
                
                    var gameName = "questlike"
                    var userName = localStorage.getItem("userID")
                    var gameScore = localStorage.getItem("score"),  
                    result;
                    App42.initialize("1e98e2472f6607e0a71281b8598bbd5e47f895b2cb6bac63eed63b8476c379c9","a538f724c09b10b26091b5b8f47b8fa28037a1c5f501fed2a89099a0c9a8be15");  
                    var scoreBoardService  = new App42ScoreBoard();     

                    scoreBoardService.getTopRankings(gameName,{   
                        success: function(object){
                            localStorage.setItem("leaderBoard","")
                            var game = JSON.parse(object);            
                            result = game.app42.response.games.game;
                            var scoreList = result.scores.score;  
                            if (scoreList instanceof Array) {                  
                                
                                for (var i = 0; i < scoreList.length; i++) {   
                                console.log("userName is : " + scoreList[i].userName)                      
                                console.log("scoreId is : " + scoreList[i].scoreId)                      
                                console.log("value is : " + scoreList[i].value)     
                                if(scoreList[i].userName === localStorage.getItem("userID")){
                                    var text = localStorage.getItem("leaderBoard");
                                    var score = rank+".) "+scoreList[i].value+""
                                    localStorage.setItem("length",text.length)
                                    localStorage.setItem("scoreLength",score)
                                }
                                   
                                localStorage.setItem("leaderBoard",localStorage.getItem("leaderBoard")+rank+".) "+scoreList[i].value+"\n")
                                rank++;
                                }              
                            } else {                  
                                console.log("userName is : " + scoreList.userName)                  
                                console.log("scoreId is : " + scoreList.scoreId)                  
                                console.log("value is : " + scoreList.value)   
                                localStorage.setItem("leaderBoard",localStorage.getItem("leaderBoard")+scoreList.value+"\n")
                            }                
                        },
                        error: function(error) {  
                            
                        }    
                    }); 
                }
        
            //console.log(this.game.input.mouse.wheelDelta)
            this.game.input.mouse.wheelDelta += (0 - this.game.input.mouse.wheelDelta) * 0.01;
            var dirWheel = this.game.input.mouse.wheelDelta*5
             if(dirWheel != 0){
                 this.scroll.alpha = 0;
             }
            else{
                this.scroll.alpha = 1;
            }
        if(this.start.y > this.start.orig){
            this.start.y=this.start.orig
            this.game.input.mouse.wheelDelta = 0;
            
        }
        else{
            this.start.y += dirWheel; 
            
        }
         this.start.text = "LEADERBOARD"        
         var length = parseInt(localStorage.getItem("length"))+this.start.text.length
         var text = "\n"+localStorage.getItem("leaderBoard")
         var score = parseInt(localStorage.getItem("scoreLength").length)
         
         this.start.text +=  text;
         this.start.addColor('#ffff00', length);
        this.start.addColor('#ffffff', (length+score+1)); 
        
        this.credit.y = this.start.y - 100;
        

        this.start.alpha += (1 - this.start.alpha  ) * 0.05;
        this.credit.alpha += (1 - this.credit.alpha  ) * 0.05;      
        if(this.tavernMusic.volume == 0 && this.menuClicked){              
            
           this.game.state.start('preloader',true,true) 
        }        
        
    },
    hover: function (unit){
        unit.tint = 0x160c2c
    },
    hoverOut: function (unit){
        unit.tint = 0xFFFFFF
    },      
    onDown: function () {
    this.tavernMusic.fadeOut(2000)  
    this.ping.play();
    this.menuClicked = true;
    localStorage.setItem('state','menu')
    
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
    window['simplewar'].Leaderboard = Leaderboard;
}());