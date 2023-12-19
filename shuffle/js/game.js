(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {
		
		
		
            var x = 400
                , y = 50;
          
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            this.level = parseInt(localStorage.getItem("level"));
            
            var text = ""
            var message = ""
            
            
            switch(this.level){
              case 1:
                  text = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
                  message = ""
                  //music = this.game.add.audio('boden');
                  //music.play();                  
                  
                break;
              case 2:
                  text = "0000000000011100000001110000000111110000010011000000001100100000111110000000111000000011100000000000";   
                  message = "The most important thing in communication is hearing what isn't said"
                break;
              case 3:
                  text = "0000000000011000000001101100000110110110011011011001101101100110110110000011011000000001100000000000";
                  message = "Communication leads to community, that is, to understanding, intimacy and mutual valuing"
                break;
              case 4:
                  text = "0000000000011111111001000000100001111010000000001000001100000010000100000111100001000000100000000000";
                  message = "Talk low, talk slow and don't say too much"                
                break;
              case 5:
                  text = "0010010000000000000000000000011111110100000000010000000110010001111011000100100111000000011110011001";
                  message = "Art is not a handicraft, it is the transmission of feeling the artist has experienced"               
                break;      
              case 6:
                  text = "0001000000000100010000010001000001110100011111010000011101000000000100000011100000111110000011111001";
                  message = "Everything you hear is an opinion. Everything you see is a perspective"               
                break;
              case 7:
                  text = "0100010011000000000010001000000000010000011001000100100000011011100000000001001001010001000001110001";
                  message = "The great accomplishments of man have resulted from the transmission of ideas and enthusiasm"               
                break;
              case 8:
                  text = "0000011000111100001000000011000001101001110100000010010100001000010010000001000000000000001000000000";
                  message = "Poetry carries its history within it, and it is oral in origin. Its transmission was oral"               
                break; 
              case 9:
                  text = "0011100011101100100010000001001000100100100010100000001000000010010110100001000000000000000000000000";
                  message = "I believe in traditions; I believe in the idea of things being passed between generations and \nthe slow transmission of cultural values through tradition"               
                break;
              case 10:
                  text = "0110000000011000000001110010000001101000000000000000110010000011100000000001000000010000000000000001";
                  message = "Not only do I lie, I take real pleasure in lying, in the transmission of magic effects"               
                break;                 
            }
          
            this.bg = this.add.sprite(0, 0, 'bg');
            
            text = text.split("");
            var textKey = 0;
            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            this.input.onDown.add(this.onDown, this);
            this.tile = [];

            var distX = 0;
            var distY = 0;
            this.tileLength = 0;
            //must always be dd
            this.boardWidth = 5//11
            this.boardHeight = 5//9
            this.size = 64
            this.spacing = 4
            //console.log(Math.floor(this.boardWidth/2))
            x = (this.game.width/2)-((Math.floor(this.boardWidth/2)*this.size)+(this.size/2))

            
            for(var i = 0; i < this.boardHeight; i++){
                for(var j = 0; j < this.boardWidth; j++){
                  
                  this.tile[''+j+i] = this.add.sprite(x+distX, y+distY, 'tile');
                  this.tile[''+j+i].origX = this.tile[''+j+i].x;
                  this.tile[''+j+i].origY = this.tile[''+j+i].y;
                  this.tile[''+j+i].y = 1000;
                
                  this.tile[''+j+i].loadSpeed = (Math.random() * 0.3)+0.1;
                  this.tile[''+j+i].anchor.setTo(0.5, 0.5);
                  this.tile[''+j+i].width = this.size;
                  this.tile[''+j+i].height = this.size;      
                  this.tile[''+j+i].id = ''+i+j;
                  this.tile[""+j+i].isFlooded = false;
                  this.tile[""+j+i].isSunk  = false;

                  text[textKey] = 0;
                  if(parseInt(text[textKey]) == 1){
                    this.tile[''+j+i].alpha = 0;
                  }
                  else{
                    this.tileLength++;
                  }
                  textKey++;

                  
                  
                  
                  distX += this.tile[''+j+i].width+this.spacing
                  if(distX > this.size*this.boardWidth){
                    distX = 0;
                    distY += this.tile[''+j+i].height+this.spacing
                  }                  
                  
                }

            }
          
          
            this.tips = this.add.bitmapText(this.game.width/2, (this.game.height/2)+450, 'minecraftia', message,16);
            this.tips.alpha = 0;
            
            this.tips.anchor.setTo(0.5, 0.5);
             this.tips.align = "center"          
            
            this.playerX = Math.floor(this.boardWidth/2);
            this.playerY = Math.floor(this.boardHeight/2);
            this.player = ""+this.playerX+this.playerY;
            
            this.player = ""+this.playerX+this.playerY;

            this.waterLevelRate = 3

            this.monCount = 3
            this.mon = []
            for(var i = 0; i < this.monCount; i++){
              this.mon[i] = this.add.sprite(this.tile['00'].x, -5000, 'mon');
              this.mon[i].anchor.setTo(0.5, 0.5);        
              this.mon[i].targetX = Math.floor(Math.random() * (this.boardWidth-1));
              this.mon[i].targetY = Math.floor(Math.random() * (this.boardHeight-1));      
              
              if(this.mon[i].targetX == this.playerX && this.mon[i].targetY == this.playerY){
                var ranX = Math.floor(Math.random() * 2);
                var ranY = Math.floor(Math.random() * 2);
                if(ranX == 0){
                  this.mon[i].targetX += 1
                }
                else{
                  this.mon[i].targetX -= 1
                }

                if(ranY == 0){
                  this.mon[i].targetY += 1
                }
                else{
                  this.mon[i].targetY -= 1
                }                
              }

              this.mon[i].monDrop = true;
              this.mon[i].pause = 0;
              this.mon[i].hp = 1;
            }
            

            this.hero = this.add.sprite(this.tile[this.player].x, -1000, 'hero');
            this.hero.anchor.setTo(0.5, 0.5);  
            this.hero.maxHp = 3  
            var dist = 0; 
            this.hero.hpUI = []
            this.hero.hp = this.hero.maxHp
            for(var i =0 ; i < this.hero.maxHp; i++){
              this.hero.hpUI[i] = this.add.sprite(25+dist, 25, 'heart');
              this.hero.hpUI[i].anchor.setTo(0.5, 0.5);  
              this.hero.hpUI[i].width = 25
              this.hero.hpUI[i].height = 25
              dist += 35;            
            }        

            this.hero.stamCount = 1
            this.hero.stamCountMax = this.hero.stamCount 
            this.stamCount = this.hero.stamCount
            var dist = 0
            this.stamUI = []
            for(var i = 0; i < this.stamCount; i++){
              //(this.game.width/2)-(64*1.5)+dist, this.game.height-100
              this.stamUI[i] = this.add.sprite(25+dist, 60, 'stamina');
              this.stamUI[i].anchor.setTo(0.5, 0.5);      
              this.stamUI[i].width = 25
              this.stamUI[i].height = 25               
              dist += 35; 
            }
            
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var color = Phaser.Color.RGBtoString(r,g,b,255,'0x')
            this.playerTint = color;
            this.bg.tint = color;
            //this.tileFlash[this.player].alpha = 0;
          
          
            var key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            key1.onDown.add(this.movePlayer, this);           
            var key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            key2.onDown.add(this.movePlayer, this);          
            var key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            key3.onDown.add(this.movePlayer, this);           
            var key4 = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            key4.onDown.add(this.movePlayer, this); 
            var key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            key5.onDown.add(this.movePlayer, this);
      
            var key6 = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
            key6.onDown.add(this.movePlayer, this);      
            
            var key7 = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
            key7.onDown.add(this.movePlayer, this);      
            var key8 = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
            key8.onDown.add(this.movePlayer, this);                              

                //this.arrowKeys = this.game.input.keyboard.createCursorKeys();
                //arrowKeys.onDown.add(this.movePlayer, this)
                //this.arrowKeys.addCallbacks(console.log("test"), onDown, onUp, onPress)
                //console.log(this.arrowKeys.right)


          

          this.winCount = 0;
          this.springY = 250;  
          this.springX = 0;  
          this.firstDrop = true;

          this.monDelay = 25
          this.tile[this.player].isSunk = false;
          this.sinkTimer = -1

          this.equipText = this.add.text(this.game.width/2,this.game.height-200, 'TCP', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.equipText.anchor.setTo(0.5, 0.5);   
          this.actionKey = 0;     
          this.actions = [];
          this.actions[0] = new Object();
          this.actions[0].name ="TALK"
          this.actions[0].selfIntruc ="Chat to yourself a bit ..."
          this.actions[0].foeIntruc ="Attempt to talk to a foe ..."

          this.actions[1] = new Object();
          this.actions[1].name ="PUNCH"
          this.actions[1].selfIntruc ="Punch yourself for reasons..."
          this.actions[1].foeIntruc ="Punch a foe and get hit back ..."       
          
          this.actions[2] = new Object();
          this.actions[2].name ="RED JUICE"
          this.actions[2].quantityMax = 3
          this.actions[2].quantity = 3
          this.actions[2].selfIntruc ="Drink to heal 1 HP .."
          this.actions[2].foeIntruc ="Heals foe for 1 HP..."            
          
          this.chatTimer = 0;

          this.overlay = this.add.sprite(0, 0, 'overlay');
          this.overlay.alpha = 0;  

          this.heroHuge = this.add.sprite(-this.game.width, 0, 'heroHuge');
          this.heroHuge.alpha = 0;  
          this.heroHuge.origX = this.heroHuge.y  

          this.monHuge = this.add.sprite(this.game.width, 0, 'monHuge');
          this.monHuge.alpha = 0; 
          this.monHuge.origY = this.monHuge.y             

          this.textBox = this.add.sprite(0, this.game.height*2, 'textBox');
          this.textBox.alpha = 0;
          this.textBox.origY = this.textBox.y      
          
          this.textBoxChat = this.add.text(this.game.width/2,this.game.height*2, '', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.textBoxChat.anchor.setTo(0.5, 0.5); 
          this.textBoxChat.alpha = 0; 
          this.textBoxChat.wordWrap = true;
          this.textBoxChat.wordWrapWidth = 400;            

        }
        , update: function () {

          if(this.chatTimer == 0){
            this.overlay.alpha = 0;
            this.heroHuge.x += ( this.heroHuge.origX - this.heroHuge.x) * 0.3;
            this.heroHuge.alpha = 0; 
            this.monHuge.x += ( this.monHuge.origX - this.heroHuge.x) * 0.3;
            this.monHuge.alpha = 0;            
            this.textBox.y += ( this.textBox.origY - this.textBox.y) * 0.3;
            this.textBoxChat.y = this.textBox.y+this.game.height-125
            this.textBox.alpha = 0;   
            this.textBoxChat.alpha = 0; 

            //UI 
            for(var i = 0; i < this.stamCount; i++){
              if(i < this.hero.stamCount){
                this.stamUI[i].alpha = 1
              }
              else{
                this.stamUI[i].alpha = 0
              }       
            }          
            
            for(var i =0 ; i < this.hero.maxHp; i++){
              if(i  < this.hero.hp){
                this.hero.hpUI[i].alpha = 1;
              }
              else{
                this.hero.hpUI[i].alpha = 0;
              }
              
            }
            if(this.actions[this.actionKey].quantity === undefined){
              this.equipText.text = this.actions[this.actionKey].name+"\nSELF [spacebar]: "+this.actions[this.actionKey].selfIntruc+"\nFOE [arrowkeys]: "+this.actions[this.actionKey].foeIntruc
            }
            else{
              this.equipText.text = this.actions[this.actionKey].name+" ("+this.actions[this.actionKey].quantity+"/"+this.actions[this.actionKey].quantityMax+")\nSELF [spacebar]: "+this.actions[this.actionKey].selfIntruc+"\nFOE [arrowkeys]: "+this.actions[this.actionKey].foeIntruc
            }
            
            //auto turn count
            if(this.moveTimer == 0){
              this.moveTimer = -1;
              this.hero.stamCount =  this.hero.stamCountMax
              this.monMove();
              
              
            }
            else{
              this.moveTimer--;
            }
            
            if(this.sinkTimer == 0){
              this.sinkTimer = -1;
              this.tile[this.player].isSunk = true;
            }
            else{
              this.sinkTimer--;
            }
            if(this.hero.hurtTimer > 0){
              this.hero.hurtTimer--
              this.hero.tint = 0xFF0000
            }
            else{
              this.hero.tint = 0xffffff;     
            }
            //console.log(this.floodTimer)
            if(this.floodTimer == 0){
              this.floodTimer = -1;
              //this.hero.stamCount =  this.hero.stamCountMax
              //this.monMove();
              
              
            }
            else{
              this.floodTimer--;
              if(this.floodTimer < 20){
                if(this.floodTimer%5 == 0){
                  this.flood();
                }
              }

              if(this.floodTimer < -1){
                this.floodTimer = -1;
              }
            }    

            this.player = ""+this.playerX+this.playerY;
            //console.log((this.tile[this.player].y - this.hero.y) )
            
            if(this.tile[this.player].y - this.tile[this.player].origY < 1 || this.tile[this.player].isSunk){
              //hero tile moves
              this.hero.y += ( (this.tile[this.player].y+this.springY) - this.hero.y) * 0.3;
              this.hero.x += ( (this.tile[this.player].x+this.springX) - this.hero.x) * 0.3;
              this.springBody(10);
              this.tile[this.player].origY = this.tile[this.player].y


              if(this.firstDrop && (this.tile[this.player].y - this.hero.y) < 1){
                this.firstDrop = false;
                this.game.plugins.screenShake.shake(5); 

                
              }      
              else if(!this.firstDrop){

                //mon movement

                for(var i = 0; i < this.monCount; i++){
                  this.mon[i].target = ""+this.mon[i].targetX+this.mon[i].targetY;
                  //mon drop shake
                  if(this.mon[i].monDrop && this.tile[this.mon[i].target].y - this.mon[i].y < 1){
                    this.mon[i].monDrop = false;
                    this.game.plugins.screenShake.shake(5); 
                  }                      
                  
                  this.mon[i].x += ( (this.tile[this.mon[i].target].x) - this.mon[i].x) * 0.3;
                  this.mon[i].y += ( (this.tile[this.mon[i].target].y) - this.mon[i].y) * 0.3;      
                  if(this.mon[i].width > 64){
                    this.mon[i].width--;
                  }
                  if(this.mon[i].height > 64){
                    this.mon[i].height--;
                  }     
                  if(this.mon[i].deathTimer == 0){
                    this.mon[i].deathTimer = -1
                             
                    if(this.mon[i].hp > 0){
                      this.mon[i].hp --
                    }
                    if(this.mon[i].hp == 0){
                      this.monDead(this.mon[i]) 
                    }                               
                  }
                  else{
                    this.mon[i].deathTimer--
                    if(this.mon[i].deathTimer == 10){
                      this.monAttack(this.mon[i])
                    }
                  }
                  //mon drop death
                  if(this.mon[i].y >= this.game.height){
                    this.monDead(this.mon[i])
                  }                 
                  //monster stacking check
                  for(var k = 0; k < this.monCount; k++){
                    if(this.mon[i].target.localeCompare(this.mon[k].target) == 0 && i != k && this.mon[i].pause == 0 && this.mon[i].alpha == 1){
                      this.mon[k].pause = 2;
                      //this.monDead(this.mon[k])
                    }
                  }
                  
                }


              }            
            }

            //console.log(this.hero.y+"  "+this.tile[this.player].y)
            
              var restart = 0;
              for(var i = 0; i < this.boardHeight; i++){
                  for(var j = 0; j < this.boardWidth; j++){
                    //load puzzle
                                        
                    //this.tileFlash[""+j+i].alpha+= ( 0- this.tileFlash[""+j+i].alpha) * 0.1; 
                    this.tile[""+j+i].tint = 0xffffff
                    this.tile[""+j+i].isFilled = false;
                    try{
                      delete this.tile[""+j+i].filledBy
                    }
                    catch(e){
                    }   
                    if(this.tile[""+j+i].isFlooded){
                      this.tile[""+j+i].tint = '0x0000FF'
                    }   
                    if(this.tile[""+j+i].isSunk){
                      this.tile[""+j+i].y += ((this.game.height+100) - this.tile[""+j+i].y) * 0.1;    
                      
                    }    
                    else{
                      this.tile[""+j+i].y += ( this.tile[""+j+i].origY - this.tile[""+j+i].y) * this.tile[""+j+i].loadSpeed;   
                      restart += 1; 
                    }                                           
                  }

              }
              
              if((this.tile[this.player].isSunk && this.hero.y > this.game.height) || restart == 0){
                this.game.state.start('game');
              }
              this.tile[this.player].tint = this.playerTint;
              //player square filled
              this.tile[this.player].isFilled = true;
              this.tile[this.player].filledBy = this.player
              //monster fill squares
              for(var k = 0; k < this.monCount; k++){
                this.mon[k].target = ""+this.mon[k].targetX+this.mon[k].targetY;
                this.tile[this.mon[k].target].isFilled = true;
                this.tile[this.mon[k].target].filledBy = k
                
              }                         

              //message pop
            (this.game.height/2)+250
            this.tips.y += ( ((this.game.height/2)+250) - this.tips.y) * 0.1;
            this.tips.alpha+= ( 1 - this.tips.alpha) * 0.1;
              if(this.winCount >= this.tileLength-1){
                    localStorage.setItem("level",this.level+1)
                    if(this.level >= 10){
                      this.game.state.start('win');
                    }
                    else{
                      this.game.state.start('game');  
                    }
                    
                  }
          }
          else{
            this.overlay.alpha = 1;
            this.heroHuge.x += ( 0 - this.heroHuge.x) * 0.3;
            this.heroHuge.alpha = 1; 
            this.textBox.y += ( 0 - this.textBox.y) * 0.3;
            this.textBoxChat.y = this.textBox.y+this.game.height-125
            this.textBox.alpha = 1;
            this.textBoxChat.alpha = 1;
            //chat tree
            if(this.chatTimer == 1){
              this.textBoxChat.text = "Okay. Keep it together. Just punch them in the face."
            }
            if(this.chatTimer == 2){
              this.textBoxChat.text = "Why do I need to punch you?"
              this.monHuge.x += ( 0 - this.monHuge.x) * 0.3;
              this.monHuge.alpha = 1;              
            }   
            if(this.chatTimer == 3){
              this.textBox.loadTexture("textBoxFoe")
              this.textBoxChat.text = "RAWR! GROWL! ROAR!"
              this.monHuge.x += ( 0 - this.monHuge.x) * 0.3;
              this.monHuge.alpha = 1;              
            }                        
            
            
          }

            

          
                    

        }
        , movePlayer: function (key) {
          var oldX = this.playerX
          var oldY = this.playerY
          if(this.hero.stamCount > 0 && !this.tile[this.player].isSunk){
            
            if(key.keyCode == Phaser.Keyboard.UP){
              this.hero.stamCount--
              try{
                if(this.tile[""+this.playerX+(this.playerY-1)].tint != this.playerTint  && this.tile[""+this.playerX+(this.playerY-1)].alpha > 0 && !this.tile[""+this.playerX+(this.playerY-1)].isSunk){
                  this.playerY -= 1;
                  this.springY = 100;
                  this.moveTimer = this.monDelay
                  
                }
                else{
                  this.game.plugins.screenShake.shake(15); 
                  this.springY = 100
                  this.moveTimer = this.monDelay                  
                }
              }
              catch(e){
                this.game.plugins.screenShake.shake(15); 
                this.springY = 100
                this.moveTimer = this.monDelay
                this.tile[this.player].isSunk = true;
              }                      
            }
            if(key.keyCode == Phaser.Keyboard.DOWN){
              this.hero.stamCount--
              try{
                if(this.tile[""+this.playerX+(this.playerY+1)].tint != this.playerTint && this.tile[""+this.playerX+(this.playerY+1)].alpha > 0 && !this.tile[""+this.playerX+(this.playerY+1)].isSunk){
                  this.playerY += 1;
                  this.springY = 100;
                  this.moveTimer = this.monDelay
                }
                else{
                  this.game.plugins.screenShake.shake(15); 
                  this.springY = 100
                  this.moveTimer = this.monDelay                  
                }                
              }
              catch(e){
                this.game.plugins.screenShake.shake(15); 
                this.springY= 100
                this.moveTimer = this.monDelay
                this.tile[this.player].isSunk = true;
              }                
            }
            if(key.keyCode == Phaser.Keyboard.LEFT){
              this.hero.stamCount--
              try{
                if(this.tile[""+(this.playerX-1)+(this.playerY)].tint != this.playerTint && this.tile[""+(this.playerX-1)+(this.playerY)].alpha > 0 && !this.tile[""+(this.playerX-1)+(this.playerY)].isSunk ){
                  this.playerX -= 1;
                  this.springX = 100
                  this.moveTimer = this.monDelay
                }
                else{
                  this.game.plugins.screenShake.shake(15); 
                  this.springY = 100
                  this.moveTimer = this.monDelay                  
                }                  
              }
              catch(e){
                this.game.plugins.screenShake.shake(15); 
                this.springX = 100
                this.moveTimer = this.monDelay
                this.tile[this.player].isSunk = true;
              }              
            }
            if(key.keyCode == Phaser.Keyboard.RIGHT){
              this.hero.stamCount--
              try{
                if(this.tile[""+(this.playerX+1)+(this.playerY)].tint != this.playerTint && this.tile[""+(this.playerX+1)+(this.playerY)].alpha > 0 && !this.tile[""+(this.playerX+1)+(this.playerY)].isSunk ){
                  this.playerX += 1;
                  this.springX = 100
                  this.moveTimer = this.monDelay
                  //this.monMove();
                }
                else{
                  this.game.plugins.screenShake.shake(15); 
                  this.springY = 100
                  this.moveTimer = this.monDelay                  
                }                  
              }
              catch(e){
                this.game.plugins.screenShake.shake(15); 
                this.springX = 100
                this.moveTimer = this.monDelay
                this.tile[this.player].isSunk = true;
              }


            }


            if(key.keyCode == Phaser.Keyboard.P){
                  localStorage.setItem("level",this.level+1)
                    if(this.level >= 10){
                      this.game.state.start('win');
                    }
                    else{
                      this.game.state.start('game');  
                    }
              

            }            
          }
          else{
            //this.game.plugins.screenShake.shake(5); 
            //this.springX = 100
          }

          if(key.keyCode == Phaser.Keyboard.SPACEBAR){
            //alert(this.chatTimer)
            if(this.chatTimer == 0){
              this.hero.stamCount--
              this.moveTimer = this.monDelay
                ///localStorage.setItem("level",this.level+1)
                  //this.game.state.start('game');
                  switch(this.actionKey){
                    case 0:
                      this.chatTimer = 1;
                      break;
                    case 1:
                      break;
                    case 2:
                      if(this.actions[this.actionKey].quantity > 0){
                        this.actions[this.actionKey].quantity--
                        this.hero.hp++
                        
                        if(this.hero.hp > this.hero.maxHp){
                          this.hero.hp = this.hero.maxHp
                        }
                      }
                      break;
                  }
            }
            else{
              if(this.chatTimer == 1){
                this.chatTimer = 0
              }              
              else if(this.chatTimer == 2){
                this.chatTimer = 3
              }
              else if(this.chatTimer == 3){
                this.chatTimer = 0
              }              
              //this.chatTimer = 0;
            }
          }            
          if(key.keyCode == Phaser.Keyboard.Q){
            
            if(this.actionKey > 0){
              this.actionKey--
            } 
            else{
              this.actionKey = this.actions.length-1
            }
          }

          if(key.keyCode == Phaser.Keyboard.E){
            if(this.actionKey < this.actions.length-1){
              this.actionKey++
            } 
            else{
              this.actionKey = 0
            }
          }          
          //interact with foe
          switch(this.actionKey){
            case 0:
              this.player = ""+this.playerX+this.playerY;
              var Occupant = this.tile[this.player].filledBy
              if((this.tile[this.player].isFilled || this.tile[this.player].isSunk) && this.mon[Occupant] !== undefined && this.mon[Occupant].alpha != 0){
                //this.mon[Occupant].deathTimer = this.monDelay;  
                this.chatTimer = 2;   
                 
                this.playerX = oldX
                this.playerY = oldY
              }                 
              break;
            case 1:
              this.player = ""+this.playerX+this.playerY;
              var Occupant = this.tile[this.player].filledBy
              if((this.tile[this.player].isFilled || this.tile[this.player].isSunk) && this.mon[Occupant] !== undefined && this.mon[Occupant].alpha != 0){
                this.mon[Occupant].deathTimer = this.monDelay;      

                this.playerX = oldX
                this.playerY = oldY
              }                
              break;
            case 2:
              this.player = ""+this.playerX+this.playerY;
              var Occupant = this.tile[this.player].filledBy
              if((this.tile[this.player].isFilled || this.tile[this.player].isSunk) && this.mon[Occupant] !== undefined && this.mon[Occupant].alpha != 0){
                //this.mon[Occupant].deathTimer = this.monDelay;      
                if(this.actions[this.actionKey].quantity > 0){
                  this.actions[this.actionKey].quantity--
                  this.mon[Occupant].hp++
                }                
                
                this.playerX = oldX
                this.playerY = oldY
              }   
              break;
          }
                      
          
        }
        , monMove: function (){
          for(var i = 0; i < this.monCount; i++){
            //is mon dead check
            if(this.mon[i].alpha != 0){
              var oldX = this.mon[i].targetX
              var oldY = this.mon[i].targetY
  
              var Xdiff = parseInt(this.playerX) - parseInt(this.mon[i].targetX)
              Xdiff = Math.abs(Xdiff)
              var Ydiff = parseInt(this.playerY) - parseInt(this.mon[i].targetY)
              Ydiff = Math.abs(Ydiff)   
  
              if(this.mon[i].pause > 0){
                this.mon[i].pause --;
              } 
              else{
                if(Xdiff > Ydiff){
                  if(parseInt(this.playerX) != parseInt(this.mon[i].targetX)){
                    if(parseInt(this.playerX) > parseInt(this.mon[i].targetX)){
                      this.mon[i].targetX =  parseInt(this.mon[i].targetX)+1
                    }
                    else{
                      this.mon[i].targetX =  parseInt(this.mon[i].targetX)-1
                    }
                  }
                  else if(parseInt(this.playerY) != parseInt(this.mon[i].targetY)){
                    if(parseInt(this.playerY) > parseInt(this.mon[i].targetY)){
                      this.mon[i].targetY =  parseInt(this.mon[i].targetY)+1
                    }
                    else{
                      this.mon[i].targetY =  parseInt(this.mon[i].targetY)-1
                    }
                  }  
                }
                else{
                  if(parseInt(this.playerY) != parseInt(this.mon[i].targetY)){
                    if(parseInt(this.playerY) > parseInt(this.mon[i].targetY)){
                      this.mon[i].targetY =  parseInt(this.mon[i].targetY)+1
                    }
                    else{
                      this.mon[i].targetY =  parseInt(this.mon[i].targetY)-1
                    }
                  }                
                  else if(parseInt(this.playerX) != parseInt(this.mon[i].targetX)){
                    if(parseInt(this.playerX) > parseInt(this.mon[i].targetX)){
                      this.mon[i].targetX =  parseInt(this.mon[i].targetX)+1
                    }
                    else{
                      this.mon[i].targetX =  parseInt(this.mon[i].targetX)-1
                    }
                  }
    
    
                }              
              } 
  
              
  
  
              this.mon[i].target = ""+this.mon[i].targetX+this.mon[i].targetY;
              //console.log(this.tile[this.mon[i].target].isFilled)
              //console.log("monster move "+this.mon[i].targetX+" "+this.mon[i].targetY)  
              //player in tile
              if((this.tile[this.mon[i].target].isFilled || this.tile[this.mon[i].target].isSunk)){
                //console.log(this.mon[i].target)
                if(this.mon[i].target.localeCompare(this.player) == 0 && !this.tile[this.player].isSunk){
                  //this.monAttack(this.mon[i])
                }
                
                this.mon[i].targetX = oldX
                this.mon[i].targetY = oldY
              }
              else{
                this.tile[this.mon[i].target].isFilled
                this.tile[this.mon[i].target].filledBy = i;
              }
            }
            else{

            }



                    
          }          
          //this.floodTimer = 35;
        }
        , monAttack: function (mon){
          //mon.targetX = Math.floor(Math.random() * (this.boardWidth-1));
          //mon.targetY = Math.floor(Math.random() * (this.boardHeight-1));   
          //mon.y = -1000;
          //mon.monDrop = true;   
          //mon.alpha = 0;
          mon.width += 25
          mon.height += 25
          if(this.hero.hp > 0){
            this.hero.hp--;
            this.hero.hurtTimer = 25;
          }  
          var diffX = Math.abs(mon.x - this.hero.x)
          var diffY = Math.abs(mon.y - this.hero.y)  
          console.log(mon.x+" "+this.hero.x)
          if(diffX < 1){
            this.springY = 100;
            if(mon.y > this.hero.y){
              this.hero.y -= 25
            }
            else{
              this.hero.y += 25
            }
            
          } 

          if(diffY < 1){
            this.springX = 100;
            if(mon.x > this.hero.x){
              this.hero.x -= 25
            }
            else{
              this.hero.x += 25
            }            
          }
        }        
        , monDead: function (mon){
          //mon.targetX = Math.floor(Math.random() * (this.boardWidth-1));
          //mon.targetY = Math.floor(Math.random() * (this.boardHeight-1));   
          //mon.y = -1000;
          //mon.monDrop = true;   
          mon.alpha = 0;      
          var deadMonCount = 0;
          for(var i =0; i <this.mon.length; i++){
            if(this.mon[i].alpha == 0){
              deadMonCount++
            }
          } 
          console.log(deadMonCount)
          if(deadMonCount >= this.mon.length){
            //next Level Timer
            this.sinkTimer = this.monDelay
            
          }

        }
        , flood: function (){
          //this.waterLevelRate
          //this.moveTimer = this.monDelay
          var hitTiles = []
          for(var i = 0 ; i < 1; i++){
            var x = Math.floor(Math.random() * (this.boardWidth));
            var y = Math.floor(Math.random() * (this.boardHeight));     
            //console.log("flood check "+i)
            
            if(hitTiles.length <= 0){
              var checkLength = 1
            }
            else{
              var checkLength = hitTiles.length
            }
            for(var k =0 ; k < checkLength ;k++){
              console.log( hitTiles[k] )
              if(((""+x+y).localeCompare(hitTiles[k]) == 0 && hitTiles[k] !== undefined) || this.tile[""+x+y].isSunk){
                //console.log("skipping")
                //skip
                i =- 1;
              }
              else{
                //console.log("flooding")
                
                if(this.tile[""+x+y].isFlooded){
                  this.tile[""+x+y].isSunk = true;
                }
                else{
                  this.tile[""+x+y].isFlooded = true;
                }
                hitTiles[k] = ""+x+y;
              }
            }
          }
        }          
        , springBody: function (degrade){
          if(this.springY != 0){
                  
            if(this.springY > 0){
              this.springY-= degrade
              this.springY *= -1
            }
            else if(this.springY < 0){
              this.springY+= degrade
              this.springY *= -1
            }
          }  
          
          if(this.springX != 0){
                  
            if(this.springX > 0){
              this.springX-= degrade
              this.springX *= -1
            }
            else if(this.springX < 0){
              this.springX+= degrade
              this.springX *= -1
            }
          }          
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