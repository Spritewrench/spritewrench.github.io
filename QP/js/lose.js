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
      this.map = this.add.sprite(0, 0, 'mainBG');
      this.map.width = this.game.width;
      this.map.height = this.game.height;        
      this.map.alpha = 1;
      
      this.slay= this.add.sprite(0, 0, 'gotSlain_'+localStorage.getItem("monSize"));  
      this.slay.width = this.game.width;
      this.slay.height = this.game.height; 
      
      this.monName= this.add.sprite(0, 0, localStorage.getItem("monName")+"_name");  
      this.monName.width = this.game.width;
      this.monName.height = this.game.height;       
      
      this.biome = parseInt(localStorage.getItem("biome"));
      this.returnButton = this.add.sprite(0, 400, "return_"+this.biome);  
      this.returnButton.width = this.game.width;
      this.returnButton.height = this.game.height;        
      
      
      this.loseMusic = this.add.audio('What We Were'); 
      this.ping = this.add.audio('ping');
      this.levelUpSound= this.add.audio('levelUp');
      this.menuClicked = false;        
      this.input.onDown.add(this.onDown, this);
        
        this.updateLeader = 0;
        if(!navigator.onLine) { // true|false
            this.updateLeader = 1;
        }
      localStorage.setItem("hasLost",1);
    },

    update: function () {


    },

    onDown: function () {
        if(this.score <= 0){
            this.ping.play();
            this.loseMusic.fadeOut(1000)
            this.menuClicked = true;
            //asdsad
            //localStorage.setItem('state','warden')
            this.game.state.start('warden');
        }
        localStorage.setItem('state','warden')
        this.game.state.start('warden');      
	
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
