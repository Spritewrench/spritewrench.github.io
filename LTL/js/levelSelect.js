(function() {
  'use strict';

  function  LevelSelect() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  LevelSelect.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      localStorage.clear();
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
      this.selectMenu = this.add.sprite(0, 0, 'Stage-selection-bg')
      this.selectMenu.width = this.game.width
      this.selectMenu.height = this.game.height
      
      this.stage = this.add.sprite(this.game.width/2, this.game.height/2, 'Stage-selection-bg')
      this.stage.anchor.setTo(0.5, 0.5);  
      this.stage.inputEnabled = true;
      this.stage.events.onInputDown.add(this.onDown, this);      
     
      //this.input.onDown.add(this.onDown, this);
      
      this.backButton = this.add.sprite(100, this.game.height/2, 'stage-select-button-back')
      this.backButton.anchor.setTo(0.5, 0.5);  
      this.backButton.inputEnabled = true;
      this.backButton.events.onInputDown.add(this.back, this);
      
      
      this.nextButton = this.add.sprite(this.game.width-100, this.game.height/2, 'stage-select-button-next')
      this.nextButton.anchor.setTo(0.5, 0.5);   
      this.nextButton.inputEnabled = true;
      this.nextButton.events.onInputDown.add(this.next, this);
      this.stageCounter = 0;
    },

    update: function () {
        this.stage.loadTexture("Stage-select-"+this.stageCounter);
    },
    back: function () {
      this.stageCounter--;
      if(this.stageCounter <0){
        this.stageCounter = 2;
      }
	   //this.game.state.start('game');
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    },
    next: function () {
      this.stageCounter++;
      if(this.stageCounter > 2){
        this.stageCounter = 0;
      }      
	   //this.game.state.start('game');
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    },
    onDown: function () {
     this.bgSound.stop();    
     localStorage.setItem("stage",this.stageCounter);
    if(this.stageCounter == 0){
      localStorage.setItem("stage",0);  
    }
    if(this.stageCounter == 1){
      localStorage.setItem("stage",3);  
    }      
    if(this.stageCounter == 2){
      localStorage.setItem("stage",9);  
    }      
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
  window['simplewar'].LevelSelect = LevelSelect;

}());
