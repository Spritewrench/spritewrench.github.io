(function() {
  'use strict';


  var name = localStorage.getItem('playerName'), gameId 

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  	this.gameStatus;
  	this.joinGame = window['simplewar'].Multiplayer.joinGame
  	this.onGameStatus = window['simplewar'].Multiplayer.onGameStatus.add(function(status){
  			this.gameStatus = status
  		}, this);
  }

  Menu.prototype = {

    create: function () {
        //this.game.scale.setMinMax(360, 640, 480,853)
        
        this.game.stage.backgroundColor = "#160c2c";
        
        var x = this.game.width / 2
        , y = this.game.height / 2;

        
        this.map = this.add.sprite(0, 0, 'mainBG');
        this.map.width = this.game.width;
        this.map.height = this.game.height;      
        this.map.inputEnabled = true;
        this.map.events.onInputDown.add(this.onDown, this);  

        
        
        
        this.animTimer1 = 50;
        this.animTimer2 = 50;
        
        var style = { font: '14pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        
        this.hScoreTxt = this.add.text(x, this.game.height-24, "", style); 
        this.hScoreTxt.anchor.setTo(0.5, 0.5);
        this.hScoreTxt.alpha = 0;
        

        if (localStorage.getItem("winCount") === null) {
          localStorage.setItem("winCount",0)
        }  
        if (localStorage.getItem("winStreak") === null) {
            localStorage.setItem("winStreak",0)
        }        
        var style = { font: '32pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1000 };
        this.start = this.add.text(x, this.game.height-100, "TAP TO JOIN GAME", style); 
        this.start.anchor.setTo(0.5, 0.5);
        this.start.alpha = 0;

        this.namePlate = this.add.sprite(0,-300, 'namePlate');
        this.namePlate.anchor.setTo(0.5, 0.5);
        this.namePlate.x = this.game.width/2
        this.namePlate.inputEnabled = true;
        this.namePlate.events.onInputDown.add(this.changeName, this);           

        this.singleBtn = this.add.sprite(0,-300, 'button');
        this.singleBtn.anchor.setTo(0.5, 0.5);
        this.singleBtn.x = this.game.width/2
        this.singleBtn.inputEnabled = true;
        this.singleBtn.events.onInputDown.add(this.playSingle, this);        

        this.multiBtn = this.add.sprite(0,-300, 'button');
        this.multiBtn.anchor.setTo(0.5, 0.5);
        this.multiBtn.x = this.game.width/2
        this.multiBtn.inputEnabled = true;
        this.multiBtn.events.onInputDown.add(this.playMulti, this);                
        //this.namePlate.width = this.game.width;
        //this.namePlate.height = this.game.height;      
        var style = { font: '32pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1000 };

        if (localStorage.getItem("playerName") === null) {
          localStorage.setItem("playerName","PLAYER");
        }   

        this.namePlateText = this.add.text(this.namePlate.x, this.namePlate.y,localStorage.getItem("playerName") , style); 
        this.namePlateText.anchor.setTo(0.5, 0.5);
        this.namePlateText.alpha = 0;  
        
        this.singleBtnText = this.add.text(this.singleBtn.x, this.singleBtn.y,"SINGLE PLAYER" , style); 
        this.singleBtnText.anchor.setTo(0.5, 0.5);
        this.singleBtnText.alpha = 0;   
        
        this.multiBtnText = this.add.text(this.singleBtn.x, this.singleBtn.y,"MULTIPLAYER" , style); 
        this.multiBtnText.anchor.setTo(0.5, 0.5);
        this.multiBtnText.alpha = 0;           

        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1000 };
        this.record = this.add.text(x, this.game.height/2+250, "WIN STREAK: "+parseInt(localStorage.getItem("winStreak")), style); 
        this.record.anchor.setTo(0.5, 0.5);
        this.record.alpha = 0;      
        alert("VERSION 0.0.6")
        //this.input.onDown.add(this.onDown, this);
    },

    update: function () {

        if(this.animTimer1 > 0){
            this.animTimer1--;
            //this.start.alpha += (1 - this.start.alpha  ) * 0.05;
            this.start.y += ((this.game.height/2+100) - this.start.y) * 0.05;

            this.namePlate.y += (125 - this.namePlate.y) * 0.05;
            this.namePlateText.y = this.namePlate.y-15

            this.singleBtn.y += (850 - this.singleBtn.y) * 0.05;
            this.singleBtnText.y = this.singleBtn.y-15

            this.multiBtn.y += (1100 - this.multiBtn.y) * 0.05;
            this.multiBtnText.y = this.multiBtn.y-15            
            
        }
    
        if(this.start.y - (this.game.height/2+100) <= 30 && this.start.y - (this.game.height/2+100) > 25){
          //this.record.alpha += 0.1;
          this.namePlateText.alpha += 0.1
          this.singleBtnText.alpha += 0.1
          this.multiBtnText.alpha += 0.1
        }
        this.namePlateText.text = localStorage.getItem("playerName")
    	if(this.gameStatus == 'game_start') {
        	this.start.text = "TAP TO PLAY"; 
        } else if(gameId && this.gameStatus != 'game_start') this.start.text = 'CONNECTING...'.concat('\n' + gameConfig.GameCode)
    },    
    changeName: function(){
      Swal.fire({
        position: 'top',
        title: 'Enter User Name',
        input: 'text',
        backdrop: true,
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {

        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        result.value = result.value.toUpperCase()
        localStorage.setItem("playerName",result.value);

      })        
    }, 
    playSingle: function(){
      this.game.state.start('game-single') 
    },  
    playMulti: function(){
      this.game.state.start('menu-multi') 
    },         
    createGameID: function(){
      Swal.fire({
        position: 'top',
        title: 'Please Enter a Game ID to Join a new game',
        input: 'text',
        inputValue: gameConfig.GameCode,         
        backdrop: true,
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {

        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        result.value = result.value.toUpperCase()
        gameConfig.GameCode = result.value
        gameId = gameConfig.GameCode
        this.joinGame(localStorage.getItem("playerName") , gameId)
        //localStorage.setItem("playerName",result.value);

      })        
    },     
    onDown: function () {
    	//if(!this.gameStatus && !name  && ! (name = prompt('Please enter your name', false ))) return false
    	if(!this.gameStatus && !this.menuClicked){
        this.createGameID();
        this.menuClicked = true;
        //this.joinGame(localStorage.getItem("playerName") , gameId);
      } 
    	else if(this.gameStatus == 'game_start') {
    		this.menuClicked = true;
    		this.game.state.start('game') 
        }
    }      
      
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Menu = Menu;
	
}());
