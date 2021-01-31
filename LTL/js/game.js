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
            this.stage = parseInt(localStorage.getItem("stage"));
            this.game.stage.backgroundColor = "#160c2c";
            this.map = this.add.sprite(0, 0, 'block2');
            this.map.width = this.game.width;
            this.map.height = this.game.height;        
            this.map.alpha = 1;
            
            this.hiddenAnim1 = this.add.sprite(this.map.x+this.map.width/2+70, this.map.y+this.map.height/2-3, 'Block-2_1A');
            this.hiddenAnim1.width = 37;
            this.hiddenAnim1.height = 48;    
            this.hiddenAnim1.inputEnabled = true;
            this.hiddenAnim1.events.onInputDown.add(this.playAnim, this)                
            
            this.hiddenAnim2 = this.add.sprite(this.map.x+this.map.width/2+204, this.map.y+this.map.height/2+70, 'Block-2_2A');
            this.hiddenAnim2.width = 77;
            this.hiddenAnim2.height = 78;    
            this.hiddenAnim2.inputEnabled = true;
            this.hiddenAnim2.events.onInputDown.add(this.playAnim, this) 
            
            this.hiddenAnim3 = this.add.sprite(this.map.x+this.map.width/2+120, this.map.y+this.map.height/2+165, 'Block-2_3A');
            this.hiddenAnim3.width = 57;
            this.hiddenAnim3.height = 65;    
            this.hiddenAnim3.inputEnabled = true;
            this.hiddenAnim3.events.onInputDown.add(this.playAnim, this)    
            
            this.hiddenAnim4 = this.add.sprite(this.map.x+this.map.width/2-133, this.map.y+this.map.height/2+210, 'Block-2_4A');
            this.hiddenAnim4.width = 120;
            this.hiddenAnim4.height = 117;    
            this.hiddenAnim4.inputEnabled = true;
            this.hiddenAnim4.events.onInputDown.add(this.playAnim, this)
            
            this.hiddenAnim5 = this.add.sprite(this.map.x+this.map.width/2-110, this.map.y+this.map.height/2+35, 'Block-2_5A');
            this.hiddenAnim5.width = 57;
            this.hiddenAnim5.height = 71;    
            this.hiddenAnim5.inputEnabled = true;
            this.hiddenAnim5.events.onInputDown.add(this.playAnim, this)      
            
            this.hiddenAnim6 = this.add.sprite(this.map.x+this.map.width/2-345, this.map.y+this.map.height/2+40, 'Block-2_6A');
            this.hiddenAnim6.width = 67;
            this.hiddenAnim6.height = 60;    
            this.hiddenAnim6.inputEnabled = true;
            this.hiddenAnim6.events.onInputDown.add(this.playAnim, this)            

            this.hiddenAnim7 = this.add.sprite(this.map.x+this.map.width/2-150, this.map.y+this.map.height/2+130, 'Block-2_7A');
            this.hiddenAnim7.width = 79;
            this.hiddenAnim7.height = 72;    
            this.hiddenAnim7.inputEnabled = true;
            this.hiddenAnim7.events.onInputDown.add(this.playAnim, this)            
          

            this.character = [];
            this.charScale = 0.45
            for(var i =0; i < 10;i++){
              this.character[i] = this.add.sprite(200, 250, 'chibi-'+i);
              this.character[i].width *= this.charScale;
              this.character[i].height *= this.charScale;      
              this.character[i].inputEnabled = true;
              this.character[i].events.onInputDown.add(this.onDown, this)       
                
                var randomValX = Math.floor(Math.random() *(this.game.width/2 * 2))-this.game.width/2;
                var randomValY = Math.floor(Math.random() *(this.game.height/2 * 2))-this.game.height/2;
              
               /* if(randomValX < -150){
                  randomValX = -150;
                }
              
                if(randomValX > this.game.width/2-200){
                  randomValX = this.game.width/2-200;
                }   
              
         
                if(randomValY < -150){
                  randomValY = -150;
                }
              
                if(randomValY > this.game.height/2-200){
                  randomValY = this.game.height/2-200;
                }     
              
                console.log("ID: "+i+" "+randomValX+" "+randomValY)
                this.character[i].x = this.game.width/2 - randomValX
                this.character[i].y = this.game.height/2 - randomValY        */             
            }
            
            //character placement
            switch(this.stage){
               
              default:
                //bones
                this.character[0].x = 259
                this.character[0].y = 550          
                //bubbles
                this.character[1].x = 200
                this.character[1].y = 300                  
                //Donald
                this.character[2].x = 450
                this.character[2].y = 600                   
                //maas-gussy
                this.character[3].x = 150
                this.character[3].y = 500                   
                //jr
                this.character[4].x = 100
                this.character[4].y = 525                   
                //johnny-jr
                this.character[5].x = 170
                this.character[5].y = 330                   
                //johnny-snr
                this.character[6].x = 700
                this.character[6].y = 470                   
                //petal
                this.character[7].x = 50
                this.character[7].y = 525                   
                //sammy
                this.character[8].x = 269
                this.character[8].y = 255                   
                //zella                 
                this.character[9].x = 240
                this.character[9].y = 370   
                break;
            }
            this.overlay = this.add.sprite(this.game.width*2, 0, 'overlay');
            this.overlay.width = this.game.width;
            this.overlay.height = this.game.height;        
            this.overlay.alpha = 0;     
            this.overlay.inputEnabled = true;
            this.overlay.events.onInputDown.add(this.onDown2, this)    
            
            this.characterMessage = this.add.sprite(this.game.width/2, this.game.height/2+100, 'chat');
            this.characterMessage.anchor.setTo(0.5, 0.5);
            //this.characterMessage.width = this.game.width;
            //this.characterMessage.height = this.game.height;     
            this.characterMessage.alpha = 0;              
            
            this.characterMessageText = this.add.text(this.characterMessage.x-90, this.characterMessage.y-80, "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",{font:'LondrinaSolid-Black'});
            this.characterMessageText.fill= '#000';  
            this.characterMessageText.fontSize = 28;   
            this.characterMessageText.alpha = 0;
            this.characterMessageText.wordWrap = true;
            this.characterMessageText.wordWrapWidth = 350;             
          
            this.characterOverlay = this.add.sprite(this.game.width/2-250, this.game.height/2-250, 'kids');
            //this.characterOverlay.width = 200;
            //this.characterOverlay.height = 200;     
            this.characterOverlay.alpha = 0;
          
        
            this.bgSound = this.add.audio('menuMusic');
            //this.ping = this.add.audio('ping');

            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            }              
            
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
        , onDown: function (char) {
          this.overlay.alpha = 1
          this.overlay.x = 0;
          
          var charName = ""+char.key
          var lastChar = parseInt(charName.slice(charName.length-1));
          //console.log(charName)
          //this.characterOverlay.alpha = 1;
          this.characterMessage.alpha = 1;
          this.characterMessageText.alpha = 1
          this.characterMessage.loadTexture("popUp-"+lastChar)
          
          switch(this.stage){
            case 0:
              switch(lastChar){
                case 0:
                  this.characterMessageText.text = "Is me you looking for?";
                  break;
                case 1:
                  this.characterMessageText.text = "You have to watch your back with that fellow.";
                  break;
                case 2:
                  this.characterMessageText.text = "Oi, him nuh too long just drop me yah so.";
                  break;
                case 3:
                  this.characterMessageText.text = "Someting not right about that bwoy.";
                  break;
                case 4:
                  this.characterMessageText.text = "MISSING";
                  break;
                case 5:
                  this.characterMessageText.text = "A mi doops dat, him gone tek on the road.";
                  break;   
                case 6:
                  this.characterMessageText.text = "Him nearly tek mi home yesterday with him bad driving  and I not talking Lime Tree Lane.";
                  break;
                case 7:
                  this.characterMessageText.text = "MISSING";
                  break;
                case 8:
                  this.characterMessageText.text = "Dat teifing bwoy, mi nah tek him taxi again.";
                  break;
                case 9:
                  this.characterMessageText.text = "Bones? Be careful of the company that you keep, mi child.";
                  break;                
              }
              break;
          }
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
          this.characterMessageText.alpha = 0;
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