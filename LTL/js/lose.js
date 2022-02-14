(function() {
  'use strict';

  function Lose() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Lose.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      this.bgSound = this.add.audio('menuMusic');
      //this.ping = this.add.audio('ping');

      if(!this.bgSound.isPlaying){
          this.bgSound.loop = true;
          this.bgSound.play();
          this.bgSound.volume = 0.5;
          //this.introCheck = true;
      }    
      this.winStart = this.add.sprite(0, 0, 'lose')
      this.winStart.width = this.game.width
      this.winStart.height = this.game.height
      
      this.homeButton = this.add.sprite(this.game.width/2-100, this.game.height-100, 'homeButton')
      this.homeButton.anchor.setTo(0.5, 0.5);  
      this.homeButton.inputEnabled = true;
      this.homeButton.events.onInputDown.add(this.returnHome, this);   
      
      this.retryButton = this.add.sprite(this.game.width/2+100, this.game.height-80, 'retryButton')
      this.retryButton.anchor.setTo(0.5, 0.5);  
      this.retryButton.inputEnabled = true;
      this.retryButton.events.onInputDown.add(this.returnRetry, this);         
      
      //this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },
    returnHome: function () {
     this.bgSound.stop();    
	   this.game.state.start('menu');
    },
    returnRetry: function () {
     this.bgSound.stop();    
	   this.game.state.start('game');
    }, 
    onDown: function () {
	       //this.game.state.start('game');
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
