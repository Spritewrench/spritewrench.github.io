(function() {
  'use strict';

  if (localStorage.getItem("playerName") === null || localStorage.getItem("playerName") === undefined) {
    //alert("tes")
    localStorage.setItem("playerName","PLAYER");
  }   

  var name = localStorage.getItem('playerName'), gameId, search = 0, rooms = []; 

  function Menu_Multi() {
    this.titleTxt = null;
    this.startTxt = null;
  	this.gameStatus;
  	this.joinGame = window['simplewar'].Multiplayer.joinGame
  	this.onGameStatus = window['simplewar'].Multiplayer.onGameStatus.add(function(status){
    	this.gameStatus = status
  	}, this);
    
  	this.getRooms = window['simplewar'].Multiplayer.getAvailableRooms;
  	this.getRooms(function(availRooms){
    	search = availRooms.length || 0
    	rooms = availRooms || [];
      
    });
    
  }

  Menu_Multi.prototype = {

    create: function () {

      //alert(this.gameStatus)
        //this.game.scale.setMinMax(360, 640, 480,853)
        
        this.game.stage.backgroundColor = "#160c2c";
        
        var x = this.game.width / 2
        , y = this.game.height / 2;

        
        this.map = this.add.sprite(0, 0, 'mainBG');
        this.map.width = this.game.width;
        this.map.height = this.game.height;      
        this.map.inputEnabled = true;
        //this.map.events.onInputDown.add(this.onDown, this);  

        
        
        
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
        this.start = this.add.text(x, this.game.height-100, "TAP TO PLAY", style); 
        this.start.anchor.setTo(0.5, 0.5);
        this.start.alpha = 0;
        this.start.inputEnabled = true;
        this.start.events.onInputDown.add(this.onDown, this);          

        var style = { font: '32pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1000 };
        this.start2 = this.add.text(x, this.game.height-100, "JOIN/ CREATE GAME", style); 
        this.start2.anchor.setTo(0.5, 0.5);
        this.start.alpha = 0;
        this.start2.inputEnabled = true;
        this.start2.events.onInputDown.add(this.onDown2, this);          
        
       	var style = { font: '32pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1000 };
        this.start3 = this.add.text(x, this.game.height-100, "PLAY RANDOM GAME", style); 
        this.start3.anchor.setTo(0.5, 0.5);
        this.start3.alpha = 0;     
        this.start3.inputEnabled = true;
        this.start3.events.onInputDown.add(this.onDown3, this);             

        this.namePlate = this.add.sprite(0,-300, 'namePlate');
        this.namePlate.anchor.setTo(0.5, 0.5);
        this.namePlate.x = this.game.width/2
        this.namePlate.inputEnabled = true;
        this.namePlate.events.onInputDown.add(this.changeName, this);  
        var style = { font: '32pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1000 };
        this.namePlateText = this.add.text(this.namePlate.x, this.namePlate.y,localStorage.getItem("playerName") , style); 
        this.namePlateText.anchor.setTo(0.5, 0.5);
        this.namePlateText.alpha = 0;        

        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1000 };
        this.record = this.add.text(x, this.game.height/2+250, "WIN STREAK: "+parseInt(localStorage.getItem("winStreak")), style); 
        this.record.anchor.setTo(0.5, 0.5);
        this.record.alpha = 0;      
    },

    update: function () {
      
     	if(this.animTimer1 > 0){
        	
            this.animTimer1--;
        	// if there are available rooms to join randomly
            this.start.alpha += (1 - this.start.alpha  ) * 0.05;
           	this.start.y += ((this.game.height/2+100) - this.start.y) * 0.05;
			
        
            this.start2.alpha += (1 - this.start2.alpha  ) * 0.05;
            this.start2.y += ((this.game.height/2+150) - this.start.y) * 0.05;

            this.start3.alpha += (1 - this.start3.alpha  ) * 0.05;
            this.start3.y += ((this.game.height/2+200) - this.start.y) * 0.05;  
        
            this.namePlate.y += (125 - this.namePlate.y) * 0.05;
            this.namePlateText.y = this.namePlate.y-15
        }
    
        if(this.start.y - (this.game.height/2+100) <= 30 && this.start.y - (this.game.height/2+100) > 25){
          //this.record.alpha += 0.1;
          this.namePlateText.alpha += 0.1
        }
    	// if game id present
    	if(gameId) {
         	this.start.alpha += (1 - this.start.alpha  ) * 0.05;
        }

        this.namePlateText.text = localStorage.getItem("playerName")
    	// if the players are connected the game is ready to be played
      
    	if(this.gameStatus == 'game_start') {
        	this.start.text = "TAP TO START"; 
        	this.start2.alpha += (0 - this.start2.alpha  ) * 0.05;
          	this.start3.alpha += (0 - this.start3.alpha  ) * 0.05;
        	// game hasn't started we are trying to decide...
        } else if(this.gameStatus != 'game_start') {
        	// connecting to game
        	if(gameId) {
            	this.start.text = 'WAITING... '.concat('\n CONNECTING TO GAME: ' + gameId)
          		this.start2.alpha += (0 - this.start2.alpha  ) * 0.05;
          		this.start3.alpha += (0 - this.start3.alpha  ) * 0.05;
            	// if available rooms
              
         	} else if(rooms.length >= 1) {
        		this.start3.alpha += (1 - this.start3.alpha  ) * 0.05;
        	}
        }
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
        allowOutsideClick: false,
        allowEscapeKey: false,        
      }).then((result) => {
        if (result.isConfirmed) {
          try{
            result.value = result.value.toUpperCase()
          }
          catch(e){
  
          }
          localStorage.setItem("playerName",result.value);
        } else if (result.isDenied) {
          //localStorage.setItem("playerName","result.value");
        }        


      })        
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
        allowOutsideClick: false,
        allowEscapeKey: false,            
      }).then((result) => {
        try{
          result.value = result.value.toUpperCase()
        }
        catch(e){

        }
      
        if (result.isConfirmed) {
          this.menuClicked = true;
          gameId = gameConfig.GameCode = result.value
          this.joinGame(localStorage.getItem("playerName") , gameId)          
        }

      })        
    },     
  	joinRandomGame: function(availRooms) {
    	rooms = availRooms || rooms
      console.log(rooms)
    	if(search == 0 && rooms.length == 0) {
        	search = 1;
        	this.getRooms(this.joinRandomGame);
        } else if(rooms.length > 0) {
          var ranKey = Math.floor(Math.random() * rooms.length)
        	var room = rooms[ranKey]//rooms[Math.max(1, Math.round(Math.random() * (rooms.length - 1)))];
        	this.joinGameById(room.metadata.gameId)
        }
        else if(rooms.length == 0) {
          gameId = gameConfig.GameCode
          this.joinGame(localStorage.getItem("playerName") , gameId)    
        }
    },
  	joinGameById: function(id) {
    	gameId = id || gameId
    	this.joinGame(localStorage.getItem("playerName") , gameId)
    },
    onDown: function () {
      //play game
      if(this.start.alpha >= 0.8){
      	if(this.gameStatus == 'game_start') {
        	this.menuClicked = true;
        	this.game.state.start('game') 
        }
      }

    },
    onDown2: function () {
      // create/ joing a specific room 
      if(this.start2.alpha >= 0.8){
      	this.createGameID()
      }
    },
    onDown3: function () {
      // join a random room
      if(this.start3.alpha >= 0.8){
        //alert("TRY")
      	this.joinRandomGame()
      }
    }          
      
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Menu_Multi = Menu_Multi;
	
}());
