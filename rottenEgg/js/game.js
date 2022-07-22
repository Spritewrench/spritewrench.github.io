(function () {
    'use strict';
	
	function Game() {
        this.player = null;
    	this.opponentName = null;
    	this.isMyTurn;
    	this.playerID = window['simplewar'].Multiplayer.getPlayerId
    	this.onResetGame = window['simplewar'].Multiplayer.onResetGame
    	this.onPickedEggs = window['simplewar'].Multiplayer.onPickedEggs
    	this.setGameReadyStatus =  window['simplewar'].Multiplayer.setGameReadyStatus
    
    	window['simplewar'].Multiplayer.onGetOpponentName.add(function(name){
        	this.opponentName = name;
        	console.log('name', name, this.opponentName)
        }, this);
    	window['simplewar'].Multiplayer.onPlayerTurn.add(function(turn){
        	this.isMyTurn = turn !== this.playerID()
        }, this);
    	window['simplewar'].Multiplayer.onEggsPicked.add(function(eggs){
        	if(this.isMyTurn) return false
        	
        	for(var i = 0; i < eggs.length; i++) this.currentPos[eggs[i]] = 0
        	
        	if(this._checkIfYouHaveWon()) {
            	this.youWon = true;
            	this.result.loadTexture("win")
        		this.winSound.play();
                this._resetGame();
            } else {
            	this.hiddenCount += eggs.length;
            	this.turnCount++;
            }
        	
       	}, this);
    	window['simplewar'].Multiplayer.onGameStatus.add(function(status){
        	this.gameStatus = status;
        	if(this.gameStatus == 'game_start' && this.hiddenCount <= 0) this.game.state.start('game') 
        }, this);
    }

    Game.prototype = {
        create: function () {
            this.map = this.add.sprite(0, 0, 'gameBG');
            this.map.width = this.game.width;
            this.map.height = this.game.height;        

            var x = this.game.width / 2,
                y = this.game.height / 2,
                startX = 50,
                distX = x-90,
                distY = y-125,
                spacingX = 90,
                spacingY = 90,
                row = 1,
                style = { font: 'bold 32pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        	this.maxCount = 15;
            this.turnCount = 1;
            this.targetRow = 0;
            this.hiddenCount = 0;
			this.egg = [];
        	this.currentPos = [];

            this.oppNum = Math.floor(Math.random() * 3);
            this.userName = this.add.sprite(0, 0, 'userNames'+this.oppNum);
            this.userName.width = this.game.width;
            this.userName.height = this.game.height;        

            this.bgSound = this.add.audio('bgMusic');
            this.bgSound.play();
            this.bgSound.volume = 0.3

            this.buttonPress = []
            this.buttonPress[0] = this.add.audio('buttonPress1');
            this.buttonPress[1] = this.add.audio('buttonPress2');
            this.buttonPress[2] = this.add.audio('buttonPress3');

            this.winSound = this.add.audio('winSound');
            this.loseSound = this.add.audio('loseSound');
			
            for(var k = 0; k < this.maxCount; k++){
                if(k%2 == 0){
                    this.egg[k] = this.add.sprite(distX, distY, 'egg1');
                }
                else{
                    this.egg[k] = this.add.sprite(distX, distY, 'egg2');
                }
                
                this.egg[k].anchor.setTo(0.5, 0.5);          
                this.egg[k].inputEnabled = true;
                this.egg[k].events.onInputDown.add(this.pickEgg, this);   
            	this.egg[k].id = k;   
                             
                distX += spacingX;  
                if(k == 2){
                    
                    distY += spacingY+50
                    distX = spacingX+startX
                }
                if(k == 3){
                    row++;
                }
                if(k == 7){
                    
                    distY += 150
                    distX = 50
                }     
                if(k == 8){
                    row++;
                }      
                this.currentPos[k] = this.egg[k].alpha         
                this.egg[k].row = row;              
            }   
            
            this.endTurn = this.add.sprite(x, this.game.height-150, 'nextTurn');
            this.endTurn.anchor.setTo(0.5, 0.5);  
            this.endTurn.width = 150;
            this.endTurn.height = 150;
            this.endTurn.inputEnabled = true;
            this.endTurn.events.onInputDown.add(this.newTurn, this);   
            
            this.undo = this.add.sprite(x - 200, this.game.height-150, 'undo');
            this.undo.anchor.setTo(0.5, 0.5);  
            this.undo.width = 150;
            this.undo.height = 150;
            this.undo.inputEnabled = true;
            this.undo.events.onInputDown.add(this.undoTurn, this); 
        
            this.turnNum = this.add.text(x, 150, "TURN 1 \n", style); 
            this.turnNum.anchor.setTo(0.5, 0.5);         

            this.result = this.add.sprite(-this.game.width, 0, 'win');
            this.result.width = this.game.width;
            this.result.height = this.game.height;          
            this.result.targetX =  -this.game.width 
            this.result.inputEnabled = true;
            this.result.events.onInputDown.add(this.onClick, this);   
        
            this.emergencySelect = false
            this.winSoundCount = 0;
        	this.picked = [];
        }
        , update: function () {
        	for(var i = 0; i < this.currentPos.length; i++) this.egg[i].alpha = this.currentPos[i]
        
            this.result.x += ((this.result.targetX) - this.result.x) * 0.1;  
            if(this.gameStatus == 'game_start' && !this.isMyTurn) this._decisionIndicator();
        	else this._setTurnCount("TURN".concat(" ", this.turnCount, "\n"))
        },
    	_decisionIndicator() {
        	 this.decisionTimer--
             if(this.decisionTimer%25 == 0){
               
               this._setTurnCount(this.turnNum.text.concat('.'));
             }             
                
             if(this.decisionTimer < 0){
             	this._setTurnCount();
             	this.decisionTimer = 50*( Math.floor(Math.random() * 3)+1);
             }
        },
    	_setTurnCount: function(count) {
        	this.turnNum.text = count || "TURN".concat(" ", this.turnCount, "\n");
        },
        doNothing: function () {   


        }  
        ,newTurn: function () {   
        	this.decisionTimer = 50*( Math.floor(Math.random() * 3)+1);
        	if(this.picked.length < 1){
                alert("You need to pick up an EGG")
            }
        
            else{
                this.targetRow = 0
                this.turnCount++;
            	this.onPickedEggs.dispatch(this.picked)
            	this.picked = [];
            }
            
            this._setTurnCount("TURN".concat(' ', this.turnCount, '\n' ))
        }   
        ,undoTurn: function () {  
        	this.targetRow = 0;
        	this.hiddenCount -= this.picked.length;
        	for(var i = 0; i < this.picked.length; i++) this.currentPos[this.picked[i]] = 1;
        
        	this.picked = [];

        }                         
        , pickEgg: function (unit) {
            if(this.isMyTurn){
                if(this.targetRow < 1){
                    this.targetRow = unit.row
                }
            
                if(this.targetRow == unit.row){
                    var ran = Math.floor(Math.random() * 3);
                    this.buttonPress[ran].play()                    
                    this.picked.push(unit.id);
                	this.currentPos[unit.id] = unit.alpha = 0
                    this.hiddenCount++
                }
            
            	if(this._checkIfYouHaveLost()) {
                	localStorage.setItem("winStreak",0)
                	this.newTurn()
                	this.result.loadTexture("lose")
        			this.loseSound.play();
                	this._resetGame();
                }
            	
            } else alert("It is NOT your turn!!")
        },
    	_resetGame: function(){
        	this.result.targetX = 0;
            this.youWon = false
        	this.bgSound.stop();
        	this.picked = [];
        	this.gameStatus = '';
        	this.hiddenCount = 0;
        	this.turnCount = 0;
        	this.onResetGame.dispatch();
        },
    	_checkIfYouHaveLost: function(){
        	return this.hiddenCount >= this.maxCount
        },
    	_checkIfYouHaveWon: function(){ return (this.maxCount - this.hiddenCount) == 1 }
        , onClick: function (unit) {
            if(this.youWon){
                var winCount = parseInt(localStorage.getItem("winCount"))
                var winStreak = parseInt(localStorage.getItem("winStreak"))

                localStorage.setItem("winCount",winCount+1)
                localStorage.setItem("winStreak",winStreak+1)   
            }
        	this.bgSound.stop();
        	if(this.gameStatus !== 'game_start') this.setGameReadyStatus.dispatch()
        }
          
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
	
}());