(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {
		
			
		
            var x = (this.game.width / 2.25)
                , y = this.game.height / 3;
          
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            this.game.stage.backgroundColor = "#160c2c";
            this.map = this.add.sprite(0, 0, 'block2');
            this.map.width = this.game.width;
            this.map.height = this.game.height;        
            this.map.alpha = 1;
          
            
            this.hiddenAnim1 = this.add.sprite(this.map.width/2+70, this.map.height/2-3, 'Block-2_1A');
            this.hiddenAnim1.width = 37;
            this.hiddenAnim1.height = 48;    
            this.hiddenAnim1.inputEnabled = true;
            this.hiddenAnim1.events.onInputDown.add(this.playAnim, this)          
            
            this.hiddenAnim2 = this.add.sprite(this.map.width/2+204, this.map.height/2+70, 'Block-2_2A');
            this.hiddenAnim2.width = 77;
            this.hiddenAnim2.height = 78;    
            this.hiddenAnim2.inputEnabled = true;
            this.hiddenAnim2.events.onInputDown.add(this.playAnim, this) 
            
            this.hiddenAnim3 = this.add.sprite(this.map.width/2+120, this.map.height/2+165, 'Block-2_3A');
            this.hiddenAnim3.width = 57;
            this.hiddenAnim3.height = 65;    
            this.hiddenAnim3.inputEnabled = true;
            this.hiddenAnim3.events.onInputDown.add(this.playAnim, this)    
            
            this.hiddenAnim4 = this.add.sprite(this.map.width/2-133, this.map.height/2+210, 'Block-2_4A');
            this.hiddenAnim4.width = 120;
            this.hiddenAnim4.height = 117;    
            this.hiddenAnim4.inputEnabled = true;
            this.hiddenAnim4.events.onInputDown.add(this.playAnim, this)
            
            this.hiddenAnim5 = this.add.sprite(this.map.width/2-110, this.map.height/2+35, 'Block-2_5A');
            this.hiddenAnim5.width = 57;
            this.hiddenAnim5.height = 71;    
            this.hiddenAnim5.inputEnabled = true;
            this.hiddenAnim5.events.onInputDown.add(this.playAnim, this)      
            
            this.hiddenAnim6 = this.add.sprite(this.map.width/2-345, this.map.height/2+40, 'Block-2_6A');
            this.hiddenAnim6.width = 67;
            this.hiddenAnim6.height = 60;    
            this.hiddenAnim6.inputEnabled = true;
            this.hiddenAnim6.events.onInputDown.add(this.playAnim, this)            

            this.hiddenAnim7 = this.add.sprite(this.map.width/2-150, this.map.height/2+130, 'Block-2_7A');
            this.hiddenAnim7.width = 79;
            this.hiddenAnim7.height = 72;    
            this.hiddenAnim7.inputEnabled = true;
            this.hiddenAnim7.events.onInputDown.add(this.playAnim, this)            
          
            this.character = this.add.sprite(200, 250, 'kids');
            this.character.width = 50;
            this.character.height = 50;      
            this.character.inputEnabled = true;
            this.character.events.onInputDown.add(this.onDown, this)   

            this.overlay = this.add.sprite(this.game.width*2, 0, 'overlay');
            this.overlay.width = this.game.width;
            this.overlay.height = this.game.height;        
            this.overlay.alpha = 0;     
            this.overlay.inputEnabled = true;
            this.overlay.events.onInputDown.add(this.onDown2, this)    
            
            this.characterMessage = this.add.sprite(this.game.width/2, this.game.height/2+100, 'chat');
            this.characterMessage.anchor.setTo(0.5, 0.5);
            this.characterMessage.width = 400;
            this.characterMessage.height = 200;     
            this.characterMessage.alpha = 0;              
            
            this.characterOverlay = this.add.sprite(this.game.width/2-250, this.game.height/2-150, 'kids');
            this.characterOverlay.width = 200;
            this.characterOverlay.height = 200;     
            this.characterOverlay.alpha = 0;
          
        
            
            
        }
        , update: function () {
            

        }
        , playAnim: function (anim) {
          var keyName = ""+anim.key
          
          var lastChar = keyName.slice(keyName.length-1);
          console.log(lastChar)
          
          keyName = keyName.slice(0, -1);
          if(lastChar.localeCompare("A") == 0){
            keyName = keyName+"B"
          }
          else{
            keyName = keyName+"A"
          }
          //keyName = keyName+"B"
          anim.loadTexture(keyName)
          console.log(keyName);
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
        this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       

        }      
        , onDown: function () {
          this.overlay.alpha = 1
          this.overlay.x = 0;
          
          this.characterOverlay.alpha = 1;
          this.characterMessage.alpha = 1;
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
        this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       

        }
        , onDown2: function () {
          this.overlay.x = this.game.width*2;
          this.characterOverlay.alpha = 0;
          this.characterMessage.alpha = 0;
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
    window['simplewar'].Game = Game;
}());