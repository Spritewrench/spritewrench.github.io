(function() {
  'use strict';

  function Win() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Win.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      var style = { font: '20pt arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 850 };
      this.titleTxt = this.add.text(x,y, 'This is the end of the DEMO\nThanks for Playing!', style);          
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 5;
      var style = { font: '20pt arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 850 };
      this.startTxt = this.add.text(x,y, 'Press [SPACEBAR] to return to the Main Menu!', style);           
      this.startTxt.anchor.setTo(0.5, 0.5);

      this.sound.removeByKey('gameBG');

      var key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      key5.onDown.add(this.onDown, this);
      //this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
	this.game.state.start('menu');
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
  window['simplewar'].Win = Win;

}());
