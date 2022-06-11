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
            this.game.physics.arcade.gravity.y = 1500;

            var ran= Math.floor(Math.random() * 200)-100; 
            var distance = 600+ran
            this.house = []
            this.houseCheck = []
            this.houseNum = 20
            for(var k = 0; k < this.houseNum; k++){
                var ran= Math.floor(Math.random() * 3);  
                this.house[k] = this.add.sprite(distance, this.game.height-150, 'house'+ran);
                this.house[k].anchor.setTo(0.5, 0.5);
                this.house[k].width = 300;
                this.house[k].height = 300
                
                this.houseCheck[k] = this.add.sprite(this.house[k].x, this.house[k].y, 'houseCheck');
                this.houseCheck[k].anchor.setTo(0.5, 0.5);      
                this.houseCheck[k].inputEnabled = true;
                this.houseCheck[k].events.onInputDown.add(this.onClick, this);     
                this.houseCheck[k].timer = 200;
                this.houseCheck[k].alpha = 0 ;  
                this.houseCheck[k].width = 300;
                this.houseCheck[k].height = 300

                var ran= Math.floor(Math.random() * 400)-200;  
                distance += 1000+ran;
            }

            this.traps = []    
            this.trapNum = 10
            var ran= Math.floor(Math.random() * 400)-200; 
            var distance = 800+ran
            for(var k = 0; k < this.trapNum; k++){
                this.traps[k] = this.add.sprite(distance, this.game.height-25, 'trap');
                this.traps[k].anchor.setTo(0.5, 0.5);
                var ran= Math.floor(Math.random() * 500)-400;  
                distance += 1000+ran;
                this.game.physics.enable( this.traps[k], Phaser.Physics.ARCADE);
                this.traps[k].body.collideWorldBounds = true;
                this.traps[k].immovable = true;
                this.traps[k].body.moves = false;                
            }            

            this.player =  this.add.sprite(25, this.game.height/2, 'hero');
            this.player.anchor.setTo(0.5, 0.5);
            this.player.width = 100
            this.player.height = 100


            this.game.physics.enable( [ this.player ], Phaser.Physics.ARCADE);
            this.player.body.collideWorldBounds = true;
            this.player.body.bounce.y = 0.3;
            this.player.body.bounce.x = 0.5;
            this.player.acceleration = 0;
            this.game.camera.follow(this.player);
            

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
                    this.player.body.velocity.y = 2500;
                }else if(swipeCoordY2 > swipeCoordY + swipeMinDistance){            
                    console.log("down");        
                }    
                
                var midX = (swipeCoordX+swipeCoordX2)/2
                var midY = (swipeCoordY+swipeCoordY2)/2
            },this);     
            
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
            this.chat = this.add.text(bubbleMidX, bubbleMidY, "Hey there!", style); 
            this.chat.anchor.setTo(0.5, 0.5);
            this.chat.alpha = 0;


            var style = { font: '22pt Muli', fill: 'black', align: 'left', wordWrap: true, wordWrapWidth: 400 };
            this.houseScore = this.add.text(15, 0, "Houses Counted 0/0", style); 
            this.houseCount = 0;
            this.chatCount = 0;            
            this.timer = 0;
            this.losePoint = 15
        }
        , update: function () {

            //win or lose check
            if(this.houseCount >= 10 || (Math.floor(this.timer/100)) > this.losePoint-1 || this.player.x > 11350){
                this.ceiliaPopin.alpha = 1
                this.ceiliaPopin.x += (this.game.camera.x - this.ceiliaPopin.x  ) * 0.1;
                this.player.body.velocity.x = 0;
                this.player.acceleration = 0                
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
            
            


            this.houseScore.x =  this.game.camera.x+15
            var secondCount = "00"
            if(Math.floor(this.timer/100) < 10){
                secondCount = "0"+(Math.floor(this.timer/100))
            }
            else{
                secondCount = Math.floor(this.timer/100) 
            }
            this.houseScore.text = "Houses Counted "+this.houseCount+"/10\nTimer: 00:"+secondCount
            if(this.chatCount < 4 && this.houseCount < 10){
                this.ceiliaPopin.x += (this.game.camera.x - this.ceiliaPopin.x  ) * 0.1;
                
                if(this.ceiliaPopin.x > -3){
                    this.speechBubble.alpha = 1
                    this.chat.alpha = 1
                    this.speechBubbleCont.alpha = 1
                }     
                           
            }

            if(this.ceiliaPopin.x < -3){
                this.timer++;
            }

            //chat
            if(this.chatCount == 0){
                this.chat.text = "Oh! This street is looking bumpy"
            }
            if(this.chatCount == 1){
                this.chat.text = "SWIPE UP to jump and avoid the rock stones"
            }    
            if(this.chatCount == 2){
                this.chat.text = "And TAP on the houses to count them"
            }  
            if(this.chatCount == 3){
                this.chat.text = "Remeber our community benefits from everyone being counted"
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
                
            }  
            if(this.chatCount == 5){
                this.chat.text = "Well done!"
            }
            if(this.chatCount == 6){
                this.chat.text = "And remember participating in the Census is the duty of a responsible citizen"
            }    
            if(this.chatCount == 7){
                this.game.state.start('menu');
            }                      

            //lose
            if((Math.floor(this.timer/100)) > this.losePoint-1){
                this.chat.text = "Oh no!\n we need to be quicker than that. Let's try again"
            }
            
            if(this.timer%10 == 0){
                this.player.loadTexture("hero")
            }
            if(this.timer%20 == 0){
                this.player.loadTexture("hero1")
            }            

            

            
            if(this.player.body.velocity.x < 800 && this.player.body.velocity.x > 0){
                this.player.acceleration += 2
                this.player.body.velocity.x = this.player.acceleration
            }
            for(var k = 0; k < this.houseNum; k++){
                if(this.houseCheck[k].alpha == 1){
                    this.houseCheck[k].y-=5;
                    this.houseCheck[k].timer-=5;
                    if(this.houseCheck[k].timer <= 0){
                        this.houseCheck[k].alpha = 0;
                        this.houseCheck[k].y = -1000;
                    }
                }
            }            
            for(var k = 0; k < this.trapNum; k++){
                this.game.physics.arcade.collide(this.player, this.traps[k],this.doNothing);
            }                   
            
        }
        ,doNothing: function (player, trap) {   
            player.body.velocity.y = 1
            player.acceleration = 1
            trap.y += 200;

        }          
 
        , onClick: function (unit) {
            console.log("click")
            if(unit.alpha == 0){
                console.log("check")
                unit.alpha = 1;
                this.houseCount++
            }

        }
        ,talk: function () {
            if(this.speechBubble.alpha != 0){
                this.chatCount++;
                //lose
                if((Math.floor(this.timer/100)) > this.losePoint-1){
                    this.chat.text = "Oh no!\n we need to be quicker than that. Let's try again"
                    this.game.state.start('game');
                }
                            
            }
            
        }            
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
}());