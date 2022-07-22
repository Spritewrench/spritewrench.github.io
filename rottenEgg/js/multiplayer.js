(function () {
    'use strict';
	var LETTERS='ABCDEFGHIJKLMNOPQRSTUVWXYZ', Config = {
    	URL: 'wss://'.concat(gameConfig.URL || 'black-pearl.local:2567')
    }, client, events, id;

	function generateId() {
        let result = '';
        for (var i = 0; i < 4; i++) {
            result += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
        }
        return result;
	}

	function connect () {
    	try {
        	client = new Colyseus.Client(Config.URL) 
        	events = {
       			onGameStatus: new Phaser.Signal(),
       			onPlayerTurn: new Phaser.Signal(),
       			onPickedEggs: new Phaser.Signal(),
       			onEggsPicked: new Phaser.Signal(),
            	onResetGame: new Phaser.Signal(),
            	setGameReadyStatus: new Phaser.Signal(),
            	onGetOpponentName: new Phaser.Signal()
       		}
        } catch (e) {
        	throw e
        }
    }

	function join (name, id) {
    	try {
    		gameConfig.GameCode = id
    		client.joinOrCreate("rottenEggs", { gameId: id, name: name }).then(setUpPlayer).catch(e => { throw e })
        } catch (e) {
        	throw e
        }
    }

	function setUpPlayer(room) {
    	id = room.sessionId;
    	room.onMessage('setOppName', dispatchOpponentName)
    	room.onMessage('resetGame', function(){
        	dispatchGameStatus('game_ready')
        })
    	room.state.listen('previousTurn', dispatchPlayerTurn)
        room.state.listen('eggs', dispatchEggsPicked)
        room.state.listen('status', dispatchGameStatus)
    	
    	events.onPickedEggs.add(function(eggs) { 
        	room.send('picked_eggs', JSON.stringify(eggs))
        })
    	events.onResetGame.add(function() { 
        	room.send('game_reset', null)
        })
    	events.setGameReadyStatus.add(function() { 
        	room.send('game_ready', null)
        })
    
    }

	function dispatchOpponentName(name) {
    	events.onGetOpponentName.dispatch(name)
    }

	function dispatchEggsPicked(eggs) {
    	eggs = eggs? JSON.parse(eggs) : []
    	if(eggs) events.onEggsPicked.dispatch(eggs)
    }

	function dispatchPlayerTurn(turn) {
    	events.onPlayerTurn.dispatch(turn)
    }

	function dispatchGameStatus(status) {
    	events.onGameStatus.dispatch(status)
    }

	function getId() {
    	return id;
    }

	gameConfig.GameCode = generateId()
	
	connect();

	events.joinGame = join;
	events.getPlayerId = getId;

   	window['simplewar'] = window['simplewar'] || {};
	window['simplewar'].Multiplayer = events
}());

