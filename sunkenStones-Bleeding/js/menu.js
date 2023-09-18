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

      this.bg = this.add.sprite(0, 0, 'bgLogo');
      this.bg.width = this.game.width
      this.bg.height = this.game.height      
      //this.titleTxt = this.add.bitmapText(x, y, 'minecraftia', 'T.C.P',16);

      this.overlay = this.add.sprite(0, -300, 'bgOverlay');
      this.overlay.width = this.game.width
      this.overlay.height = this.game.height+300  
      this.overlay.alpha = 0   

      this.titleTxt = this.add.text(x,y, '', {font: '64px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      this.titleTxt2 = this.add.text(x-125,this.titleTxt.y+300, 'High Score:', {font: '50px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.titleTxt2.anchor.setTo(0.5, 0.5);      

      this.scoreCountUI = this.add.sprite(x+125,this.titleTxt.y+300, 'coinCount');
      this.scoreCountUI.anchor.setTo(0.5, 0.5);  

      if(sessionStorage.getItem("highScore") == null){
    
        sessionStorage.setItem("highScore", 0 ) 
      }

      this.scoreCount = this.add.text(this.scoreCountUI.x,this.scoreCountUI.y, sessionStorage.getItem("highScore"), {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'left'});
      this.scoreCount.anchor.setTo(0.5, 0.5);        
      
      this.titleTxt3 = this.add.text(x,this.game.height-100, 'VERSION: '+version+'\n[CLICK TO START]', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.titleTxt3.anchor.setTo(0.5, 0.5);     

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'minecraftia', '',16);
      this.startTxt.anchor.setTo(0.5, 0.5);

      var T = "";
      var C = "";
      var P = ""
      
      var tnum = Math.floor(Math.random() * 6);
      var cnum = Math.floor(Math.random() * 6);
      var pnum = Math.floor(Math.random() * 6);
      
      
      this.count =2;
      this.sprite = this.add.sprite(0, 0, 'wrench');
      this.sprite.width = this.game.width
      this.sprite.height = this.game.height

      
      

      this.sprite.inputEnabled = true;
      this.sprite.events.onInputDown.add(this.onClick, this);

      this.input.onDown.add(this.onDown, this);
      
    },

    update: function () {

    },
    onClick: function (pic) {
      pic.x = -this.game.width;
      this.count++;
    },
    onDown: function () {
      localStorage.setItem("level","1")
      if(this.count >= 3){
       this.game.state.start('selectCap');
       //this.game.state.start('game');
      }
	    //
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
