(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', 'FIND WALTON',16);
      this.titleTxt.anchor.setTo(0.5, 0.5);
      
      this.bgSound = this.add.audio('menuMusic');
      //this.ping = this.add.audio('ping');

      if(!this.bgSound.isPlaying){
          this.bgSound.loop = true;
          this.bgSound.play();
          this.bgSound.volume = 0.5;
          //this.introCheck = true;
      }       

   
      
      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', 'Click to Start',16);
      this.startTxt.anchor.setTo(0.5, 0.5);
      
      //this.load.image('start', 'assets/HomeScreen-bg.jpg');
      this.menuStart = this.add.sprite(0, 0, 'start')
      this.menuStart.width = this.game.width
      this.menuStart.height = this.game.height
      //this.input.onDown.add(this.onDown, this);
      
      this.arcademodeButton = this.add.sprite(this.game.width/2, this.game.height-100, 'arcademode-Button')
      this.arcademodeButton.anchor.setTo(0.5, 0.5);  
      this.arcademodeButton.inputEnabled = true;
      this.arcademodeButton.events.onInputDown.add(this.arcademode, this);
      
      
      //this.timeattackButton = this.add.sprite(this.game.width/2+200, this.game.height-100, 'timeattack-Button')
      //this.timeattackButton.anchor.setTo(0.5, 0.5);   
      //this.timeattackButton.inputEnabled = true;
      //this.timeattackButton.events.onInputDown.add(this.timeattack, this);
    },

    update: function () {

    },
    timeattack: function () {
     this.bgSound.stop();    
	   this.game.state.start('levelSelect');
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    },
    arcademode: function () {
     this.bgSound.stop();  
	   this.game.state.start('levelSelect');
     //this.game.state.start('levelSelect');
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    },
    onDown: function () {
	   this.game.state.start('game');
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
