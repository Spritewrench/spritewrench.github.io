(function() {
  'use strict';

  function Lose() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Lose.prototype = {

    create: function () {
        this.game.scale.setMinMax(1280,800,1920,1080)
      var x = this.game.width / 2
        , y = this.game.height / 2;
            this.game.stage.backgroundColor = "#160c2c";
            this.map = this.add.sprite(0, 0, 'map4');
            this.map.alpha = 0.4
            this.map.width = this.game.width;
            this.map.height = this.game.height;  
        
            this.loseMusic = this.add.audio('What We Were'); 
            this.ping = this.add.audio('ping');
            this.levelUpSound= this.add.audio('levelUp');
            this.menuClicked = false;        
        
        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1200 };
        this.hScoreTxt= this.add.text(x, y-200, "", style); 
        this.hScoreTxt.anchor.setTo(0.5, 0.5);

        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 400 };
        this.titleTxt= this.add.text(x, y, 'You Party Has Met Its End! \n Score: '+localStorage.getItem("score")+"\n Gold: 0", style);         
      this.titleTxt.anchor.setTo(0.5, 0.5);
      this.titleTxt.align = "center"
      y = y + this.titleTxt.height + 32;
      this.startTxt = this.add.text(x, y,'', style);
      this.startTxt.anchor.setTo(0.5, 0.5);
        this.gold = 0;
        //localStorage.setItem("score", 100)
        this.score = parseInt(localStorage.getItem("score"));
        
            this.Coin = this.add.sprite(x-80, y-145, 'locked');
            this.coinX = this.Coin.x
            this.Coin.loadTexture('coin');
            this.Coin.frame = 0;
            this.Coin.animations.add('spin', [0, 1, 2,3,4,5,6,7], 13, true);
            this.Coin.animations.play('spin');  
        this.playOnce = 0;
      this.input.onDown.add(this.onDown, this);
        
        this.updateLeader = 0;
        if(!navigator.onLine) { // true|false
            this.updateLeader = 1;
        }           
    },

    update: function () {
            if(!this.loseMusic.isPlaying && !this.menuClicked){
                this.loseMusic.loop = true;
                this.loseMusic.play();
            
            }  

            if(this.loseMusic.volume == 0 && this.menuClicked){
               localStorage.setItem('state','menu')
               this.game.state.start('preloader',true,true) 
            //localStorage.setItem("score",this.score);
            } 
        if(parseInt(localStorage.getItem("win")) == 1){
            this.titleTxt.text='Your Party Makes It Back To Town Alive!\n Score: '+this.score+"\n Gold: "+this.gold;
            localStorage.setItem("win",0)
        }   
        else{
            this.titleTxt.text ='Your Party Has Met Its End! \n Score: '+this.score+"\n Gold: "+this.gold;
        }
        
        if(this.score <= 0){
            this.startTxt.text = "Click to Retry"
        }
        else{
            var speed = Math.floor(this.score/10);
            if(speed <= 0){
                speed = this.score;
            }
            this.score-=speed;
            this.gold+=speed;
        }
        var goldString = " Gold: "+this.gold;
        this.Coin.x = this.coinX-goldString.length-32;
        
        if (localStorage.getItem("highScore") === null || localStorage.getItem("scoreID") === null) {
            localStorage.setItem("highScore",localStorage.getItem("score"));
            this.hScoreTxt.text = "---New High Score: "+localStorage.getItem("score")+"!---"
                if(navigator.onLine) { // true|false
                    this.hScoreTxt.text +="\nleaderboard updated"
                }              
                if(this.playOnce == 0){
                    this.levelUpSound.play()
                    this.playOnce = 1;
                }
                if(this.updateLeader <= 0){
                    this.updateLeader = 1;            
                var gameName = "questlike"
                var userName = localStorage.getItem("userID")
                var gameScore = localStorage.getItem("score"),  
                result;
                App42.initialize("1e98e2472f6607e0a71281b8598bbd5e47f895b2cb6bac63eed63b8476c379c9","a538f724c09b10b26091b5b8f47b8fa28037a1c5f501fed2a89099a0c9a8be15");  
                    var scoreBoardService  = new App42ScoreBoard();     
                    
                    scoreBoardService.saveUserScore(gameName,userName,gameScore,{   
                        success: function(object)  
                        {
                            var game = JSON.parse(object);            
                            result = game.app42.response.games.game;
                            //console.log("gameName is : " + result.name)          
                            var scoreList = result.scores.score;          
                            //console.log("userName is : " + scoreList.userName)          
                            //console.log("scoreId is : " + scoreList.scoreId)          
                            //console.log("value is : " + scoreList.value)   
                            localStorage.setItem("scoreID",scoreList.scoreId)
                        },
                        error: function(error) {  
                            
                        }    
                    });   
                }

        }          
        else{
            if(parseInt(localStorage.getItem("highScore")) <= parseInt(localStorage.getItem("score"))  ){
                localStorage.setItem("highScore",localStorage.getItem("score"));
                this.hScoreTxt.text = "---New High Score: "+localStorage.getItem("score")+"!---"
                if(navigator.onLine) { // true|false
                    this.hScoreTxt.text +="\nleaderboard updated"
                }                  
                if(this.playOnce == 0){
                    this.levelUpSound.play()
                    this.playOnce = 1;
                }
                if(this.updateLeader <= 0){
                    this.updateLeader = 1;
                var gameName = "questlike"
                var userName = localStorage.getItem("userID")
                var gameScore = localStorage.getItem("score")  
                var scoreId = localStorage.getItem("scoreID"),    
                result;
                App42.initialize("1e98e2472f6607e0a71281b8598bbd5e47f895b2cb6bac63eed63b8476c379c9","a538f724c09b10b26091b5b8f47b8fa28037a1c5f501fed2a89099a0c9a8be15");  
                    var scoreBoardService  = new App42ScoreBoard();     
                    
                    scoreBoardService.editScoreValueById(scoreId,gameScore,{   
                        success: function(object)  
                        {
                            var game = JSON.parse(object);            
                            result = game.app42.response.games.game;
                            //console.log("gameName is : " + result.name)          
                            var scoreList = result.scores.score;          
                            //console.log("userName is : " + scoreList.userName)          
                            //console.log("scoreId is : " + scoreList.scoreId)          
                            //console.log("value is : " + scoreList.value)              
                        },
                        error: function(error) {  
                            
                        }    
                    }); 
                }
                
            }
        }
    },

    onDown: function () {
        if(this.score <= 0){
            this.ping.play();
            this.loseMusic.fadeOut(1000)
            this.menuClicked = true;
            //this.game.state.start('menu');
        }
	
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
  window['simplewar'].Lose = Lose;

}());
