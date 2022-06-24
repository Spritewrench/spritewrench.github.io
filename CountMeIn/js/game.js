(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {
            this.game.world.setBounds(0, 0, this.game.width*10,this.game.height);
            this.game.add.tileSprite(0, 0, this.game.width*10,this.game.height, 'background');
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.arcade.gravity.y = 700;

            this.game.renderer.renderSession.roundPixels = true;   

            this.road =  this.add.sprite(0, 0, 'road');
            this.game.physics.enable( [ this.road ], Phaser.Physics.ARCADE);
            this.road.width = this.game.width+20
            this.road.body.collideWorldBounds = true;
            this.road.immovable = true;
            this.road.body.moves = false;   

            var ran= Math.floor(Math.random() * 200)-100; 
            var distance = 600+ran
            this.house = []
            this.houseCheck = []
            this.houseNum = 20
            for(var k = 0; k < this.houseNum; k++){
                var ran= Math.floor(Math.random() * 3);  
                this.house[k] = this.add.sprite(distance, this.game.height-360, 'house'+ran);
                this.house[k].anchor.setTo(0.5, 0.5);
                this.house[k].width = 900;
                this.house[k].height = 500
                this.house[k].origWidth = this.house[k].width
                this.house[k].origHeight = this.house[k].height              
                
                this.houseCheck[k] = this.add.sprite(this.house[k].x, this.house[k].y, 'houseCheck');
                this.houseCheck[k].anchor.setTo(0.5, 0.5);      
                this.houseCheck[k].inputEnabled = true;
                this.houseCheck[k].events.onInputDown.add(this.onClick, this);     
                this.houseCheck[k].timer = 200;
                this.houseCheck[k].alpha = 0 ;  
                this.houseCheck[k].width = 300;
                this.houseCheck[k].height = 300
                this.houseCheck[k].counted = false
                this.houseCheck[k].id = k

                var ran= Math.floor(Math.random() * 400)-200;  
                distance += 1000//+ran;
            }

            this.traps = []    
            this.trapNum = 10
            var ran= Math.floor(Math.random() * 400)-200; 
            var distance = 800+ran
            //this.game.height-25
            for(var k = 0; k < this.trapNum; k++){
                var ran= Math.floor(Math.random() * 2)+1; 
                this.traps[k] = this.add.sprite(distance, this.game.height-90, 'trap'+ran);
                this.traps[k].anchor.setTo(0.5, 0.5);
                this.game.physics.enable( this.traps[k], Phaser.Physics.ARCADE);
                
                this.traps[k].body.collideWorldBounds = true;
                this.traps[k].immovable = true;
                this.traps[k].body.moves = false;                  
                if(ran == 1){
                    this.traps[k].body.setSize(50, 50, 50, 50); 
                }
                if(ran == 2){
                    this.traps[k].body.setSize(50, 50, 50, 50);
                    this.traps[k].y = this.game.height-120;
                }

                var ran= Math.floor(Math.random() * 500)-400;  
                distance += 1000+ran;
              
            }            


        
            this.ping = this.add.audio('ping');
            this.jumpSound = this.add.audio('jumpSound');
            this.jumpSound.volume = 0.2
            this.yaySound = this.add.audio('yay');
            this.bgSound = this.add.audio('bgMusic');
            this.ping = this.add.audio('ping');
            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();    
            }            

            this.player =  this.add.sprite(25, this.game.height/2, 'hero',6);
            this.player.anchor.setTo(0.5, 0.5);
            this.player.width = 100
            this.player.height = 100
          

            this.player.animations.add('walk', [0, 1, 2, 3, 4, 5, 6]);
            this.player.animations.play('walk', 12, true);

            this.road2 =  this.add.sprite(0, this.game.height-75, 'road_old');
            this.game.physics.enable( [ this.road2 ], Phaser.Physics.ARCADE);
            this.road2.body.collideWorldBounds = true;
            this.road2.immovable = true;
            this.road2.body.moves = false;   
            this.road2.alpha = 0;
            this.road2.width = this.game.width*10

            this.game.physics.enable( [ this.player ], Phaser.Physics.ARCADE);
            this.player.body.collideWorldBounds = true;
            //this.player.body.setSize(100, this.player.height, 50, 50); 
            this.player.body.bounce.y = 0;
            this.player.body.bounce.x = 0.5;
            this.player.acceleration = 0;             
            this.player.isJumping = 0;
            this.game.camera.follow(this.player);

            this.jumpBtn =  this.add.sprite(this.game.width-150, this.game.height-100, 'jumpBtn');
            this.jumpBtn.anchor.setTo(0.5, 0.5);
            this.jumpBtn.inputEnabled = true;
            this.jumpBtn.events.onInputDown.add(this.doJump, this); 
            this.jumpBtn.alpha = 0   
            this.jumpBtn.fixedToCamera = true;   
            this.jumpBtn.origWidth = this.jumpBtn.width
            this.jumpBtn.origHeight = this.jumpBtn.height
            
            
            this.houseCounter =  this.add.sprite(0, 0, 'houseCount');
            this.houseCounter.fixedToCamera = true;
            this.houseCounter.alpha = 0;
            this.timerCount =  this.add.sprite(0, 75, 'timerCount');
            this.timerCount.alpha = 0;
            this.timerCount.fixedToCamera = true;
                

/*            

            //swipe
            var swipeCoordX,        
                swipeCoordY,        
                swipeCoordX2,        
                swipeCoordY2,        
                swipeMinDistance = 100;    
            this.game.input.onDown.add(function(pointer) {  
                swipeCoordX = pointer.clientX;        
                swipeCoordY = pointer.clientY;        
                
            
            }, this);    
            
            this.game.input.onUp.add(function(pointer) {        
                swipeCoordX2 = pointer.clientX;        
                swipeCoordY2 = pointer.clientY;        
                if(swipeCoordX2 < swipeCoordX - swipeMinDistance){            
                    console.log("left");     
                    this.player.body.velocity.x += -150;
                    this.player.acceleration = 1
                }
                else if(swipeCoordX2 > swipeCoordX + swipeMinDistance){            
                    console.log("right");        
                    //this.player.body.velocity.x += 150;
                }else if(swipeCoordY2 < swipeCoordY - swipeMinDistance){            
                    console.log("up");        
                    this.player.body.velocity.y = 1500;
                }else if(swipeCoordY2 > swipeCoordY + swipeMinDistance){            
                    console.log("down");        
                }    
                
                var midX = (swipeCoordX+swipeCoordX2)/2
                var midY = (swipeCoordY+swipeCoordY2)/2
            },this);     
            */
            this.ceiliaPopin= this.add.sprite(0, 0, 'ceiliaPopin');
            this.ceiliaPopin.width = this.game.width;
            this.ceiliaPopin.height = this.game.height;              
            this.ceiliaPopin.x = -this.ceiliaPopin.width/2  
                       
            this.speechBubble= this.add.sprite(0, 0, 'speech');
            this.speechBubble.width = this.game.width;
            this.speechBubble.y = this.game.height-this.speechBubble.height
            this.speechBubble.alpha = 0;
            this.speechBubble.inputEnabled = true;
            this.speechBubble.events.onInputDown.add(this.talk, this);            

            this.speechBubbleCont= this.add.sprite(0, 0, 'speechCont');
            this.speechBubbleCont.width = this.game.width;
            this.speechBubbleCont.y = this.game.height-this.speechBubble.height
            this.speechBubbleCont.alpha = 0;  
            
            var bubbleMidY = this.speechBubble.y+(this.speechBubble.height/2)
            var bubbleMidX = this.speechBubble.x+(this.speechBubble.width/2)
            var style = { font: '22pt Muli', fill: 'black', align: 'center', wordWrap: true, wordWrapWidth: 400 };
            this.chat = this.add.text(bubbleMidX, bubbleMidY+35, "Hey there!", style); 
            this.chat.anchor.setTo(0.5, 0.5);
            this.chat.alpha = 0;


            var style = { font: '22pt Muli', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 400 };
            this.houseScore = this.add.text(this.houseCounter.x+this.houseCounter.width/3+10, this.houseCounter.y+this.houseCounter.height/3, "0/0", style); 
            this.houseScore.fixedToCamera = true;   

            var style = { font: '22pt Muli', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 400 };
            this.timerScore = this.add.text(this.timerCount.x+this.timerCount.width/3+10, this.timerCount.y+this.timerCount.height/3, "0/0", style);
            this.timerScore.angle = 3
            this.timerScore.fixedToCamera = true;   

            this.houseCount = 0;
            this.chatCount = 0;            
            this.timer = 0;
            this.losePoint = 20

            this.jumpBtn.alpha = 0  
            this.houseCounter.alpha = 0;
            this.timerCount.alpha = 0;
            this.houseScore.alpha = 0;
            this.timerScore.alpha = 0;     
            
            this.playOnce = 0        
        }
        , update: function () {

            // button shrinks back to size
            if(this.jumpBtn.width > this.jumpBtn.origWidth){
                this.jumpBtn.width-= 5;
                if(this.jumpBtn.width < this.jumpBtn.origWidth){
                    this.jumpBtn.width = this.jumpBtn.origWidth
                }                
            }
            if(this.jumpBtn.height > this.jumpBtn.origHeight){
                this.jumpBtn.height-=5;
                if(this.jumpBtn.height < this.jumpBtn.origHeight){
                    this.jumpBtn.height = this.jumpBtn.origHeight
                }
            }            
            //STOP FALLING THROUGH THE FLOOR
            if(this.player.y > this.road2.y-this.player.height/2){
                this.player.y = this.road2.y-this.player.height/2
            }

            

            //win or lose check
            if(this.houseCount >= 9 || (Math.floor(this.timer/100)) > this.losePoint-1 || this.player.x > 11350){
                this.ceiliaPopin.alpha = 1
                this.ceiliaPopin.x += (this.game.camera.x - this.ceiliaPopin.x  ) * 0.1;
                this.player.body.velocity.x = 0;
                this.player.acceleration = 0      
                if(this.playOnce <= 0){
                    this.playOnce++
                    //this.yaySound.play()
                }                          
                if(this.ceiliaPopin.x > -3){
                    this.speechBubble.alpha = 1
                    this.chat.alpha = 1
                    this.speechBubbleCont.alpha = 1
                    this.speechBubble.x =  this.ceiliaPopin.x     
                    this.speechBubbleCont.x =  this.ceiliaPopin.x     
                    var bubbleMidY = this.speechBubble.y+(this.speechBubble.height/2)
                    var bubbleMidX = this.speechBubble.x+(this.speechBubble.width/2)                    
                    this.chat.x = bubbleMidX
                }    
            }
            
            

            this.road.x =this.game.camera.x
            
            //this.jumpBtn.x = this.game.camera.x+this.game.camera.width-250;

            var secondCount = "00"
            if(Math.floor(this.timer/100) < 10){
                secondCount = "0"+(Math.floor(this.timer/100))
            }
            else{
                secondCount = Math.floor(this.timer/100) 
            }
            this.houseScore.text = ""+this.houseCount+"/9"
            this.timerScore.text = "00:"+secondCount
            
            //this.houseCounter.x = this.game.camera.x
            //this.timerCount.x = this.game.camera.x

            //this.houseScore.x =  this.houseCounter.x+this.houseCounter.width/3+10
            //this.timerScore.x =  this.timerCount.x+this.timerCount.width/3+10

            

            if(this.chatCount < 4 && this.houseCount < 9){
                this.ceiliaPopin.x += (this.game.camera.x - this.ceiliaPopin.x  ) * 0.1;
                
                if(this.ceiliaPopin.x > -3){
                    this.speechBubble.alpha = 1
                    this.chat.alpha = 1
                    this.speechBubbleCont.alpha = 1
                    this.player.body.velocity.y = 0;
                }     
                           
            }

            if(this.ceiliaPopin.x < -3){
                this.timer++;
            }

            //chat
            if(this.chatCount == 0){
                this.chat.text = "Okay! Let's GO!"
                this.ceiliaPopin.loadTexture("ceiliaPopin_happy")
            }
            if(this.chatCount == 1){
                this.chat.text = "But wait ... mind yuh trip!"
                this.ceiliaPopin.loadTexture("ceiliaPopin_sad")
            }    
            if(this.chatCount == 2){
                this.chat.text = "Tek your time and JUMP over the obstacles"
                this.ceiliaPopin.loadTexture("ceiliaPopin_reg")
            }  
            if(this.chatCount == 3){
                this.chat.text = "Remember our community benefits from everyone being counted"
            }              
            if(this.chatCount == 4){
                this.chatCount++
                this.player.body.velocity.x = 200;
                this.player.acceleration = 5
                this.speechBubble.alpha = 0
                this.chat.alpha = 0
                this.speechBubbleCont.alpha = 0    
                
                

                this.ceiliaPopin.alpha = 0;
                this.ceiliaPopin.x =-this.game.width
                this.speechBubble.x =  this.ceiliaPopin.x    
                
                this.jumpBtn.alpha = 1  
                this.houseCounter.alpha = 1
                this.timerCount.alpha =1
                this.houseScore.alpha = 1
                this.timerScore.alpha = 1          
                
            }  
            if(this.chatCount == 5){
                this.chat.text = "Well done!"
                this.ceiliaPopin.loadTexture("ceiliaPopin_happy")

                
            }
            if(this.chatCount == 6){
                this.chat.text = "And remember participating in the Census is the duty of a responsible citizen"
                this.ceiliaPopin.loadTexture("ceiliaPopin_reg")
            }    
            if(this.chatCount == 7){
                this.game.state.start('menu');
                this.bgSound.stop()
            }                      

            //lose
            if((Math.floor(this.timer/100)) > this.losePoint-1){
                this.chat.text = "Oh no!\n we need to be quicker than that. Let's try again"
                this.ceiliaPopin.loadTexture("ceiliaPopin_sad")
            }
            
       

            

            
            if(this.player.body.velocity.x < 500 && this.player.body.velocity.x > 0){
                this.player.acceleration += 2
                this.player.body.velocity.x = this.player.acceleration
            }
            for(var k = 0; k < this.houseNum; k++){
                this.house[k].width += (this.house[k].origWidth - this.house[k].width) * 0.1;
                this.house[k].height += (this.house[k].origHeight - this.house[k].height) * 0.1;

                if(this.houseCheck[k].alpha == 1){
                    this.houseCheck[k].y-=5;
                    this.houseCheck[k].timer-=5;
                    if(this.houseCheck[k].timer <= 0){
                        this.houseCheck[k].alpha = 0;
                        this.houseCheck[k].y = -1000;
                    }
                }
                //AUTO COUNT HOUSES
                if(this.player.x > this.house[k].x){
                    this.onClick(this.houseCheck[k]);
                }
            }            
            for(var k = 0; k < this.trapNum; k++){
                this.game.physics.arcade.collide(this.player, this.traps[k],this.doNothing);
            }       
            this.game.physics.arcade.collide(this.player, this.road2, this.stopSink);            
            
            if(this.player.isJumping > 0){
                //this.player.isJumping--;
            }
            
            if(this.player.hurtTimer > 0 ){
                this.player.hurtTimer--
                if(this.player.hurtTimer == 0){
                    this.player.tint =  0xffffff; 
                }
            }
            console.log("jumping "+this.player.isJumping)
        }
        ,doNothing: function (player, trap) {   
            player.body.velocity.y = 1
            player.acceleration = 1
            trap.y += 500;
            player.tint = 0xff0000;
            player.hurtTimer = 50;

        }  
        ,doJump: function () {   
            if(this.player.isJumping <= 0){
                this.jumpBtn.width += 50
                this.jumpBtn.height += 50
                this.jumpSound.play()
                this.player.isJumping = 10;
                this.player.body.velocity.y = -350;
            }
            //console.log(this.player)
            //this.player.body.y -= 25


        }           
        ,stopSink: function (player, road) {   
            //player.body.y -=10;
                player.y = road.y-player.height/2
                player.body.velocity.y = 0;
                player.isJumping = 0;            
            if(player.isJumping <= 0 ){

            }
            



        }                  
 
        , onClick: function (unit) {
            console.log("click")
            if(unit.alpha == 0){
                console.log("check")
                
                if(unit.counted == false){
                    this.ping.play();
                    unit.counted = true;
                    unit.alpha = 1;
                    this.houseCount++
                    //unit.width -= 100;
                    this.house[unit.id].width -= 150;
                    //this.house[unit.id].height += 50;                    
                }

            }

        }
        ,talk: function () {
            if(this.speechBubble.alpha != 0){
                this.chatCount++;
                //lose
                if((Math.floor(this.timer/100)) > this.losePoint-1){
                    this.chat.text = "Oh no!\n we need to be quicker than that. Let's try again"
                    this.ceiliaPopin.loadTexture("ceiliaPopin_sad")
                    this.bgSound.stop()
                    this.game.state.start('game');
                }
                            
            }
            
        }            
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
}());