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

      this.bg = this.add.sprite(0, 0, 'title');
      


      this.bg2 = this.add.sprite(0, 0, 'title2');
      this.bg2.alpha = 0;

               

      var key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      key5.onDown.add(this.onDown, this);      

      this.bgSound = this.add.audio('titleBG');
      this.timer = 0;
      
      this.sprite = this.add.sprite(0, 0, 'wrench');
      this.sprite.inputEnabled = true;
      this.sprite.events.onInputDown.add(this.onClick, this);
      this.sprite.x = -1280;

      sessionStorage.setItem("level","1")
      sessionStorage.setItem("musicPlay", 1 ) 
      sessionStorage.setItem("aiCount", 1 ) 
      this.bgSound.stop();
      this.game.state.start('game');      

    },

    update: function () {
      this.timer++;   
      if(this.timer %30 == 0){
        if(this.bg2.alpha == 0){
          //this.bg2.alpha = 1
        }
        else{
          //this.bg2.alpha = 0;
        }
      } 

      if(this.timer %30 == 0){
        this.bg.loadTexture('title1-2')
      }   
      if(this.timer %40 == 0){
        this.bg.loadTexture('title1-3')
      }             

    },
    onClick: function (pic) {

      pic.x = -1280;
      //this.count++;
      if(!this.bgSound.isPlaying){
        this.bgSound.loop = true;
        this.bgSound.play();
        this.bgSound.volume = 0.7;
        //this.introCheck = true;
      }        
    },
    onDown: function () {
      sessionStorage.setItem("level","1")
      sessionStorage.setItem("musicPlay", 1 ) 
      sessionStorage.setItem("aiCount", 1 ) 
      this.bgSound.stop();
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
