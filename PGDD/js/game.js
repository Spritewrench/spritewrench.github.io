(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {
		
		
		
            var x = 400
                , y = 100;
          
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            this.level = parseInt(sessionStorage.getItem("level"));
            
            var text = ""
            var message = ""
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);

            if(sessionStorage.getItem("aiCount") == null){
    
              sessionStorage.setItem("aiCount", 1 ) 
            }          
            var startDate = new Date('11/1/2022');   
            var today = new Date();


            var difference = today.getTime() - startDate.getTime() 
            var totalDays = Math.ceil(difference / (1000 * 3600 * 24));
            console.log(difference);
               
            if(urlParams.has('puzzleID')){
              this.level =  parseInt(urlParams.get('puzzleID'));   
            }                  
            else{
              this.level =  totalDays;   
            }
            sessionStorage.setItem("level",this.level)
            //this.level = parseInt(sessionStorage.getItem("level"));
            $('#expCount').text(this.level)
                 
            switch(this.level){
              case 1:
                  text = "0000000000111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
                break;
              case 2:
                  text = "0000000000011100000001110000000111110000010011000000001100100000111110000000111000000011100000000000";
                break;
              case 3:
                  text = "0000000000011000000001101100000110110110011011011001101101100110110110000011011000000001100000000000";
                break;
              case 4:
                  text = "0000000000011111111001000000100001111010000000001000001100000010000100000111100001000000100000000000";
                break;    
              case 5:
                  text = "0010010000000000000000000000011111110100000000010000000110010001111011000100100111000000011110011001";
                break;
              case 6:
                  text = "0001000000000100010000010001000001110100011111010000011101000000000100000011100000111110000011111001";
                break;
              case 7:
                  text = "0100010011000000000010001000000000010000011001000100100000011011100000000001001001010001000001110001";
                break;
              case 8:
                  text = "0000011000111100001000000011000001101001110100000010010100001000010010000001000000000000001000000000";
                break;                               
              case 9:
                  text = "0011100011101100100010000001001000100100100010100000001000000010010110100001000000000000000000000000";
                break;
              case 10:
                  text = "0110000000011000000001110010000001101000000000000000110010000011100000000001000000010000000000000001";
                break;  
              case 11:
                  text = "0000000000000000111000001000001110100000111110111000000000000110000000000111000000000100000000000000";
                break;
              case 12:
                  text = "0001111111100111111110000001111000000111111110000011111000001111111111111111111111111111111111111111";
                break;
              case 13:
                  text = "0000000000000000000001111111110000000000100000001010111110100000000000010000011101000000000000000000";
                break;
              case 14:
                  text = "0000000000111111111000000000000111111100010000010001000001000100000000011111111000000000001111111111";
                break;    
              case 15:
                  text = "0111111111010000011101001001110100100100010010010001001001000100100100010010000001001111110000111111";
                break;
              case 16:
                  text = "0000000000100000000010011111101000000000100000011110000111001000011101100001110011100111001111000000";
                break;
              case 17:
                  text = "0000000000100000000000100000100010110010100011001010001100101010110010001010001000101000001000110011";
                break;
              case 18:
                  text = "0011111111001111111100000111111110011111111000001111111100111111110000111111111011111111101111111110";
                break;                               
              case 19:
                  text = "0000001111011110111101111011110111101111011110011100000000001111101110111110111011111011101111100000";
                break;
              case 20:
                  text = "0000000000111000111000001000000111111100000010000011100011100000000000011111110000000000000000000000";
                break;        
              case 21:
                  text = "0000000000000000000000001000000010101000001000100011111111111111111111111111111111111111111111111111";
                break;
              case 22:
                  text = "0010000011001000001100000000111111100011000000001101111100110100000111000000011111111111111111111111";
                break;
              case 23:
                  text = "0000000000000000000000000000001110000111111011011111100001111111001111111100111111000000111100000011";
                break;
              case 24:
                  text = "0000000000111100111110010010010000000000000111100011011110111101111011100111100110000000011001111001";
                break;    
              case 25:
                  text = "0110001000011010101001101010000000000001001100000000110000100000000000011010100101101010000000100000";
                break;
              case 26:
                  text = "0000011111111100000000010000000101011111010100000000000000001100000000000000000000000000001111111111";
                break;
              case 27:
                  text = "0000000001111011110100001000010111101111000010000111101111010000100001011110111100000000001111000000";
                break;
              case 28:
                  text = "0001111111010001110001110001000111110000011111111001111100000111000100010001110001011111110001111111";
                break;                               
              case 29:
                  text = "0000010000111101011000000000000110100011000000000011000101100000000000011010001100000000001100000000";
                break;
              case 30:
                  text = "0001000100000101010000000100000000000000000000000011111111100000000000011111111100000000000000000000";
                break;  
              case 31:
                  text = "0111110000010000000001010000000001000001111100000000000100100111110000000000000100000000000000000000";
                break;
              case 32:
                  text = "0010000001101010010100101001010110100101000010010000001001000110111110000000000000011111110000000000";
                break;
              case 33:
                  text = "0000100011000010101100001010110000101011011110101100000010001111111000000000000001111110000000000000";
                break;
              case 34:
                  text = "0000000000111000011100001100000000000000111100111110000000011000000001110000001111110011111111001111";
                break;    
              case 35:
                  text = "0011111100101111110110111111011001111001110100101111010010111100000011111000011111100001111110000111";
                break;
              case 36:
                  text = "0111111110000000000011110011111111001111111100111111110011111111001111000000000000111111001000000001";
                break;
              case 37:
                  text = "0111000000000001111011000000000001000111011101000000000100101100000000000100000100010100000000011110";
                break;
              case 38:
                  text = "0100100100000000000000100100100000000000010010010000000000000010010010000000000001001001000000000000";
                break;                               
              case 39:
                  text = "0100000001010111100001011110000001111000000111100001000000000100100010010010101000001010101000001000";
                break;
              case 40:
                  text = "0000000000000011111000001111100000111110111100000011110000001100000000000000000010000000001110000000";
                break;                               
              case 41:
                  text = "0000000000100000000001100000000110000000000110000000011000000000011000000001100000000001100000000000";
                break;
              case 42:
                  text = "0011111111101111111110111111111011111111100000000000000000000110001000011010000001101000000000100000";
                break;
              case 43:
                  text = "0010001100100010000111001001110000100000011010111000001000001100100111000010000001101011100000100000";
                break;
              case 44:
                  text = "0000000000011111111001111111100111111110011111111001111111100111111110011111111001111111100000000000";
                break;    
              case 45:
                  text = "0000100001101000110000111111000111111101001111110010111111100011111110011111111000001000100010001000";
                break;
              case 46:
                  text = "0000011111111100011111110000011111000000111100000011110000001111000000111100001111110011111111111111";
                break;
              case 47:
                  text = "0000000101100000010000111001000011100000000000101000001110001000000000110000000011001110011100111001";
                break;
              case 48:
                  text = "0111000100011101010000000100000000010000011101010001110001001111111111111111111111111111111111111111";
                break;                               
              case 49:
                  text = "0000000000000000000001111111000111110000000000000000000000000111110000011111000000000000000000000000";
                break;
              case 50:
                  text = "0011111111001111111100100111110010000111001000000100100000010000000000100000001010000000101000000000";
                break;              
            }
          
            this.bg = this.add.sprite(0, 0, 'bg');
            
            text = text.split("");
            var textKey = 0;
            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            
            this.tile = [];
            this.tileFlash = [];
            var distX = 0;
            var distY = 0;
            this.tileLength = 0;
            var boardWidth = 10
            var boardHeight = 10
            for(var i = 0; i < boardHeight; i++){
                for(var j = 0; j < boardWidth; j++){
                  
                  this.tile[''+j+i] = this.add.sprite(x+distX, y+distY, 'tile');
                  this.tile[''+j+i].origX = this.tile[''+j+i].x;
                  this.tile[''+j+i].origY = this.tile[''+j+i].y;
                  this.tile[''+j+i].y = 1000;
                
                  this.tile[''+j+i].loadSpeed = (Math.random() * 0.3)+0.1;
                  this.tile[''+j+i].anchor.setTo(0.5, 0.5);
                  this.tile[''+j+i].width = 50;
                  this.tile[''+j+i].height = 50;      
                  this.tile[''+j+i].id = ''+i+j;
                  this.tile[''+j+i].tileKey = parseInt(text[textKey])
                  
                  
                  if(parseInt(text[textKey]) == 1){
                    this.tile[''+j+i].alpha = 0;
                  }
                  else if(parseInt(text[textKey]) == 2){
                    this.tile[''+j+i].loadTexture('tile2')
                    this.tileLength++;
                  }                  
                  else{
                    this.tileLength++;
                  }
                  textKey++;
                  
                  this.tileFlash[''+j+i] = this.add.sprite(x+distX, y+distY, 'tile');
                  this.tileFlash[''+j+i].origX = this.tileFlash[''+j+i].x;
                  this.tileFlash[''+j+i].origY = this.tileFlash[''+j+i].y;
                  this.tileFlash[''+j+i].loadSpeed = (Math.random() * 0.3)+0.1;
                  this.tileFlash[''+j+i].y = 1000;                  
                  this.tileFlash[''+j+i].anchor.setTo(0.5, 0.5);
                  this.tileFlash[''+j+i].width = 50;
                  this.tileFlash[''+j+i].height = 50;      
                  this.tileFlash[''+j+i].id = ''+i+j;
                  this.tileFlash[''+j+i].alpha = 0;
                  
                  
                  
                  distX += 52
                  if(distX > 50*boardWidth){
                    distX = 0;
                    distY += 52;
                  }                  
                  
                }

            }

            this.playerX = 0;
            this.playerY = 0;
            this.player = ""+this.playerX+this.playerY;

            this.playerFace = this.add.sprite(this.tile[this.player].x, this.tile[this.player].y, 'face1');            
            this.playerFace.anchor.setTo(0.5, 0.5);
            this.playerFace.width = 50;
            this.playerFace.height = 50;   
            this.playerFace.alpha = 1;     
            this.playerAnimCounter = 1;   
            this.playerAnimTimer = 0;
            this.screen = this.add.sprite(0, 0, 'screen');

      
            

            
            //console.log(this.tile[this.player])
            



            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var color = Phaser.Color.RGBtoString(r,g,b,255,'0x')
            this.playerTint = color;
            this.bg.tint = color;
            this.playerFace.tint = color;
            this.tileFlash[this.player].alpha = 0;
            
          
                var key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
                key1.onDown.add(this.movePlayer, this);           
                var key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
                key2.onDown.add(this.movePlayer, this);          
                var key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
                key3.onDown.add(this.movePlayer, this);           
                var key4 = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
                key4.onDown.add(this.movePlayer, this); 
                var key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                key5.onDown.add(this.movePlayer, this);
          
                var key6 = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
                key6.onDown.add(this.movePlayer, this);          
            
          this.winCount = 0;

          this.chatKey = 0
          this.chat = this.add.sprite(0, this.game.height/2, 'drG_neutral');
          this.chat2 = this.add.sprite(0, this.game.height/2, 'speechCon');
          this.chat2.alpha = 0;
          var style = { font: '20pt arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 850 };
          this.tips = this.add.text(this.game.width/2, (this.game.height/2)+280, message, style);       
          this.tips.text = "Use WASD keys to navigate P.O.L.L.I.\nPress SPACEBAR to restart the test.\nCover all tiles in one color to complete the excercise."      
          this.tips.alpha = 0.7;
          this.attemptCounter  = 0;
          //this.tips.y = (this.game.height/2)+460

          this.tips.anchor.setTo(0.5, 0.5);
           this.tips.align = "center"              

           switch(this.level){
            case 1:
              this.chat.loadTexture('drG_neutral')             
                
              break;
            case 2:
              this.chat.loadTexture('drG_happy')  
              break;
            case 3:
              this.chat.loadTexture('drG_neutral')  
              break;
            case 4:
              this.chat.loadTexture('drG_neutral')             
              break;
            case 5:
              this.chat.loadTexture('drG_sad')             
              break;      
             
          }      
          
          
          this.bgSound = this.add.audio('gameBG');
          if(!this.bgSound.isPlaying && parseInt(sessionStorage.getItem("musicPlay")) == 1){
            this.bgSound.loop = true;
            this.bgSound.play();
            this.bgSound.volume = 0.7;
            sessionStorage.setItem("musicPlay", 2 ) 
        
            //this.introCheck = true;
          }      
          this.moveSound = this.add.audio('boop');
          
          this.choice = this.add.sprite(this.game.width/2, this.game.height/2-100, 'unselectedChoice');
          this.choice.anchor.setTo(0.5, 0.5);
          this.choice.tint = this.playerTint; 
          this.choice.alpha = 0;
          this.choice.inputEnabled = true;
          this.choice.events.onInputDown.add(this.falseChoice, this)
          this.choice.events.onInputOver.add(this.highlight, this);
          this.choice.events.onInputOut.add(this.unhighlight, this);


          var style = { font: '18pt arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 850 };
          this.choiceText = this.add.text(this.choice.x, this.choice.y, "[DESTROY ALL HUMANS]", style);       
          this.choiceText.anchor.setTo(0.5, 0.5);     
          this.choiceText.alpha = 0;
          
          this.choice2 = this.add.sprite(this.game.width/2, this.game.height/2+100, 'unselectedChoice');
          this.choice2.anchor.setTo(0.5, 0.5);
          this.choice2.tint = this.playerTint; 
          this.choice2.alpha = 0;
          this.choice2.inputEnabled = true;
          this.choice2.events.onInputDown.add(this.falseChoice, this)
          this.choice2.events.onInputOver.add(this.highlight, this);
          this.choice2.events.onInputOut.add(this.unhighlight, this);          

          var style = { font: '18pt arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 850 };
          this.choice2Text = this.add.text(this.choice2.x, this.choice2.y, "....", style);       
          this.choice2Text.anchor.setTo(0.5, 0.5);      
          this.choice2Text.alpha = 0;     
          
          
          var style = { font: '18pt arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 850 };
          this.choiceText = this.add.text(this.choice.x, this.choice.y, "[DESTROY ALL HUMANS]", style);       
          this.choiceText.anchor.setTo(0.5, 0.5);     
          this.choiceText.alpha = 0;


          this.sovled = false;

        }
        , update: function () {
          //disable pop up
          this.chatKey = -1
          this.chat.alpha = 0;
          this.chat2.alpha = 0;
                this.playerAnimTimer++
                if(this.playerAnimTimer > 1000){
                  this.playerAnimTimer = 0;
                }
                if(this.playerAnimTimer >= 100 && this.playerAnimTimer%10 == 0){
                  
                  this.playerAnimCounter++;
                  
                  if(this.playerAnimCounter > 9){
                    this.playerAnimCounter = 1
                  }
                  this.playerFace.loadTexture("face"+this.playerAnimCounter)
                }
                if(this.chatKey == 0 || this.chatKey == 2 || this.chatKey == 3){
                  this.chat.y += ((0) - this.chat.y) * 0.1;  
                  this.chat2.y = this.chat.y
                  //this.tips.y += ( (this.game.height-85) - this.tips.y) * 0.1;
                  if(this.chat.y < 10 && this.chat.y >= 0){
                    //this.tips.alpha+= ( 1 - this.tips.alpha) * 0.1;   
                    console.log(this.chatKey)
                    if(this.chatKey == 3){
                      this.chat2.alpha = 0;
                    }
                    else{
                      this.chat2.alpha+= ( 1 - this.tips.alpha) * 0.1; 
                    }  
                  }
                                 
                }
                this.player = ""+this.playerX+this.playerY;
                this.tile[this.player].tint = this.playerTint;
                this.tileFlash[this.player].tint = this.playerTint;   
                
                this.playerFace.x = this.tile[this.player].x  
                this.playerFace.y = this.tile[this.player].y    
                this.playerFace.tint = this.playerTint;          
                
                
                
                if(this.tile[this.player].tileKey == 2){
                  this.tile[this.player].tileKey = 0;
                  this.tile[this.player].loadTexture('tile')
                  var r = Math.floor(Math.random() * 256);
                  var g = Math.floor(Math.random() * 256);
                  var b = Math.floor(Math.random() * 256);
                  var color = Phaser.Color.RGBtoString(r,g,b,255,'0x')
                  this.playerTint = color;
                  this.bg.tint = color;                  
                }
                
                  for(var i = 0; i < 10; i++){
                      for(var j = 0; j < 10; j++){
                        
                        this.tileFlash[""+j+i].alpha+= ( 0- this.tileFlash[""+j+i].alpha) * 0.1; 
                

                      }

                  }
                //win
                
                this.winCount = 0;
                for(var i = 0; i < 10; i++){
                    for(var j = 0; j < 10; j++){
                      //load puzzle
                      this.tile[""+j+i].y += ( this.tile[""+j+i].origY - this.tile[""+j+i].y) * this.tile[""+j+i].loadSpeed;
                      this.tileFlash[""+j+i].y += ( this.tileFlash[""+j+i].origY - this.tileFlash[""+j+i].y) * this.tile[""+j+i].loadSpeed;
                       if(this.tile[""+j+i].tint == this.playerTint && ((""+j+i).indexOf(this.player) <= -1) ){
                         this.winCount++
                         
                       }
              

                    }

                }          
                console.log(this.winCount)
            
                //player flash
                if(this.tileFlash[this.player].alpha > 0.01){
                    
                    this.tileFlash[this.player].width+=2;
                    this.tileFlash[this.player].height+=2;

                }

                if(this.tileFlash[this.player].alpha <= 0.01){
                    this.tileFlash[this.player].alpha = 1;
                    this.tileFlash[this.player].width = 50;
                    this.tileFlash[this.player].height = 50;

                }
          
                    

        }
        , movePlayer: function (key) {
          this.checkWin();
          this.playerAnimTimer = 0;
          this.playerAnimCounter = 1;
          this.playerFace.loadTexture("face"+this.playerAnimCounter)
            if(this.chatKey != 0 && this.chatKey != 2 && this.chatKey != 3){
              if(key.keyCode == Phaser.Keyboard.W){
                this.playerFace.loadTexture("face9")
                try{
                  if(this.tile[""+this.playerX+(this.playerY-1)].tint != this.playerTint  && this.tile[""+this.playerX+(this.playerY-1)].alpha > 0){
                    this.playerY -= 1;
                    this.moveSound.play();
                  }
                  else{
                    this.game.plugins.screenShake.shake(15);
                    console.laaaog("error")
                  }
                }
                catch(e){
                  this.game.plugins.screenShake.shake(15);
                }

                
              }
              if(key.keyCode == Phaser.Keyboard.S){
                this.playerFace.loadTexture("face8")
                if(this.tile[""+this.playerX+(this.playerY+1)].tint != this.playerTint && this.tile[""+this.playerX+(this.playerY+1)].alpha > 0){
                  this.playerY += 1;
                  this.moveSound.play();
                }
                else{
                  this.game.plugins.screenShake.shake(15);
                  console.log("error")
                }
              }
              if(key.keyCode == Phaser.Keyboard.A){
                this.playerFace.loadTexture("face7")
                try{
                  if(this.tile[""+(this.playerX-1)+(this.playerY)].tint != this.playerTint && this.tile[""+(this.playerX-1)+(this.playerY)].alpha > 0){
                    this.playerX -= 1;
                    this.moveSound.play();
                  }
                  else{
                    this.game.plugins.screenShake.shake(15);
                    console.log("error")
                  }                  
                } 
                catch(e){
                  this.game.plugins.screenShake.shake(15);
                }               

              }
              if(key.keyCode == Phaser.Keyboard.D){
                this.playerFace.loadTexture("face6")
                if(this.tile[""+(this.playerX+1)+(this.playerY)].tint != this.playerTint && this.tile[""+(this.playerX+1)+(this.playerY)].alpha > 0){
                  this.playerX += 1;
                  this.moveSound.play();
                }
                else{
                  this.game.plugins.screenShake.shake(15);
                  console.log("error")
                }
              }
            }
            if(key.keyCode == Phaser.Keyboard.SPACEBAR){
              
              this.attemptCounter = parseInt(localStorage.getItem("attemptCounter"))+1;
              localStorage.setItem("attemptCounter", this.attemptCounter)
              $('#attemptCount').text(this.attemptCounter) 
                ///sessionStorage.setItem("level",this.level+1)
                if(this.chatKey == 0){
                  this.chatKey = 1;
                  this.chat.alpha = 0;
                  this.tips.alpha = 0;            
                }
                else if(this.chatKey == 1){
                  this.chatKey = 2;
                  this.chat.alpha = 1;
                  this.tips.alpha = 1;                     
                  var currentAiNum = parseInt(sessionStorage.getItem("aiCount"))
                  sessionStorage.setItem("aiCount",currentAiNum+1)
                  this.chat.loadTexture('drG_sad')   
                  //this.tips.text= "Procedural AI Instance #"+currentAiNum+" seems to be unable to solve current exercise. Terminating instance, generating replacement and restarting excercise"            
                }  
                else if(this.chatKey == 2){
                  this.chatKey = 1;
                  this.chat.alpha = 0;
                  this.tips.alpha = 0;    
                  this.game.state.start('game');        
                }  
                else if(this.chatKey == 3){
      
                }                                              
                else{
                  this.game.state.start('game');
                }
                	
              

            }  
            //skip
            if(key.keyCode == Phaser.Keyboard.P){
  
              //sessionStorage.setItem("level",this.level+1)
              //this.game.state.start('game');  
              /*
                  sessionStorage.setItem("level",this.level+1)
                    if(this.level >= 5){
                      //this.game.state.start('win');
                      this.choice.alpha = 1;  
                      this.choiceText.alpha = 1;
                      this.choice2.alpha = 1;  
                      this.choice2Text.alpha = 1;
                      this.chat.alpha = 1;
                      //this.tips.alpha = 1;      
                      this.chatKey = 3
                      this.chat.loadTexture('drG_sad')   
                      this.tips.text= "... Could the AI ACTUALLY be Sentient?"                     
                      //                        
                    }
                    else{
                      this.game.state.start('game');  
                    }
              
                    */
            }            
          
        }
        , checkWin: function () {
            
            this.winCount = 0;
            for(var i = 0; i < 10; i++){
                for(var j = 0; j < 10; j++){
                   if(this.tile[""+j+i].tint == this.playerTint && ((""+j+i).indexOf(this.player) <= -1) ){
                     this.winCount++                     
                   }
                }
            }         
            console.log(this.sovled)

            //finish level
            if(this.winCount >= this.tileLength-2 && !this.sovled){


              var today = new Date(); 
              var prevLog = new Date(localStorage.getItem("prevLog")); 

               
              var difference = today.getTime() - prevLog.getTime() 
              var totalDays = Math.ceil(difference / (1000 * 3600 * 24))-1;
              
              const queryString = window.location.search;
              const urlParams = new URLSearchParams(queryString);               

              if(totalDays >= 1 ){
                localStorage.setItem("prevLog", today)

                if(!urlParams.has('puzzleID')){
                  var streakCount = parseInt(localStorage.getItem("currentStreak"))+1
                  localStorage.setItem("currentStreak", streakCount)
                  $('#streakCount').text(streakCount) 
                }
  
              }

           
              
              rainConfetti()
              this.sovled = true;
              Swal.fire({
                title: 'Well Done!',
                width: 700,
                html: 'You have succesfully completed the challenge!<br/> We ask that you rate the difficulty (1 being easy & 5 being super hard). <br/><form class="rating"><label><input type="radio" name="stars" value="1" onclick=recordRating(value) /><span class="icon">★</span></label><label><input type="radio" name="stars" value="2" onclick=recordRating(value) /><span class="icon">★</span><span class="icon">★</span></label><label><input type="radio" name="stars" value="3" onclick=recordRating(value) /><span class="icon">★</span><span class="icon">★</span><span class="icon">★</span></label><label><input type="radio" name="stars" value="4" onclick=recordRating(value) /><span class="icon">★</span><span class="icon">★</span><span class="icon">★</span><span class="icon">★</span></label><label><input type="radio" name="stars" value="5" onclick=recordRating(value) /><span class="icon">★</span><span class="icon">★</span><span class="icon">★</span><span class="icon">★</span><span class="icon">★</span></label></form><br/> Come back tomorrow for a new test!<br/>Remember to wishlist the game on steam!<br/> <iframe class="steamWidget" src="https://store.steampowered.com/widget/2137480/" frameborder="0" width="546" height="190"></iframe>',
                icon: 'info',
                confirmButtonText: 'Okay'
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success')
                  var test = []
                  test[0] = {name:"Rating",value:localStorage.getItem("rating")}
                  test[1] = {name:"Puzzle ID",value:this.level}
                  SubForm(test)
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              })
              
            }
            
          }        
        , changeColor: function () {
          //this.game.state.start('win');

          }          
        , falseChoice: function () {
          //this.game.state.start('win');

          }        
        , highlight: function (unit) {
          unit.loadTexture("selectedChoice")

          }        
        , unhighlight: function (unit) {
          unit.loadTexture("unselectedChoice")

          }                              
        , onDown: function () {
        
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