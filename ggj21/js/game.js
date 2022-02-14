(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {
		
			
		
            var x = (this.game.width / 1)
                , y = this.game.height /1;
          
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            this.map = this.add.sprite(0, 0, 'map');

            this.map.width = this.game.width;   
            this.map.height = this.game.height;    
            this.map.inputEnabled = true;
            this.map.events.onInputDown.add(this.onDown, this);

            //this.map.events.onInputDown.add(this.onDown, this);  
            this.game.physics.startSystem(Phaser.Physics.P2JS);  
            this.playerCollisionGroup = this.game.physics.p2.createCollisionGroup();
            this.fireCollisionGroup = this.game.physics.p2.createCollisionGroup();
            this.monsterCollisionGroup = this.game.physics.p2.createCollisionGroup();
            //this.game.physics.p2.updateBoundsCollisionGroup();
            this.game.physics.p2.setImpactEvents(true);
          
            this.player = this.add.sprite(this.game.width/2+50, this.game.height/2, 'player');
            this.player.anchor.setTo(0.5, 0.5);
            this.player.width = 50;
            this.player.height = 50;    
            this.playerTarX = this.game.width/2
            this.playerTarY = this.game.height/2
            this.game.physics.p2.enable(this.player);
            this.player.body.setCollisionGroup(this.playerCollisionGroup);
            this.player.body.collides(this.monsterCollisionGroup,this.getHit, this);
          
            this.fire = this.add.sprite(this.game.width/2, this.game.height/2, 'map');
            this.fire.anchor.setTo(0.5, 0.5);
            this.fire.width = 50;
            this.fire.height = 50;    
            this.game.physics.p2.enable(this.fire);
            this.fire.tint = 0xff9900;
            this.fire.body.setCollisionGroup(this.fireCollisionGroup);
            this.fire.body.collides(this.monsterCollisionGroup,this.outFire, this);          
            
            //monsters
            this.monster = [];
            for(var i=0;i<5 ; i++){
              this.monster[i] = this.add.sprite(this.game.width + 100, -100, 'player');
              this.monster[i].targetX = this.game.width/2
              this.monster[i].targetY = this.game.height/2
              this.monster[i].anchor.setTo(0.5, 0.5);
              this.monster[i].width = 40;
              this.monster[i].height = 40;                  
              this.monster[i].height = 40;                
              
              this.monster[i].tint = 0x000;
              this.game.physics.p2.enable(this.monster[i]);
              this.monster[i].body.chaseTimer =  Math.floor(Math.random() * 50);
              this.monster[i].body.setCollisionGroup(this.monsterCollisionGroup);
              this.monster[i].body.collides([this.monsterCollisionGroup, this.playerCollisionGroup, this.fireCollisionGroup]);
              this.monster[i].speed = Math.floor(Math.random() * 5)+1;
            }
            
            this.clickPlate = this.add.sprite(0, 0, 'map');
            this.clickPlate.alpha = 0;
            this.clickPlate.fixedToCamera = true;
            this.clickPlate.width = this.game.width;   
            this.clickPlate.height = this.game.height;    
            //this.clickPlate.inputEnabled = true;
            //this.clickPlate.events.onInputDown.add(this.onDown, this);             
            
            //this.eatButton = this.add.sprite(this.game.width-50, this.game.height-55, 'eat');
            this.eatButton = this.add.sprite(-1000, -1000, 'eat');
            this.eatButton.fixedToCamera = true;

            this.eatButton.anchor.setTo(0.5, 0.5);
            this.eatButton.width = 100;
            this.eatButton.height = 100;    
            this.eatButton.inputEnabled = true;
            this.eatButton.alpha = 0;
            this.eatButton.events.onInputDown.add(this.eatSomething, this);     
            
            
            
            //this.attackButton = this.add.sprite(this.game.width-150, this.game.height-50, 'attack');
            this.attackButton = this.add.sprite(-1000, -1000, 'attack');
            this.attackButton.fixedToCamera = true;
            this.attackButton.anchor.setTo(0.5, 0.5);
            this.attackButton.width = 100;
            this.attackButton.height = 100;    
            this.attackButton.inputEnabled = true;
            this.attackButton.alpha = 0;
            this.attackButton.events.onInputDown.add(this.hitSomething, this);          
            

            this.game.world.setBounds(0, 0, this.game.width, this.game.height);
            
            

            this.game.camera.follow(this.player,"FOLLOW_TOPDOWN",0.1,0.1);
            
          
            this.bgSound = this.add.audio('bgMusic');
            //this.ping = this.add.audio('ping');

            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            } 
          
            this.player.spinVelocity = 0;
            //console.log(this.game.world.bounds)
        }
        , update: function () {
            ;
            var cursors = this.game.input.keyboard.createCursorKeys();     
            //this.player.body.setZeroVelocity();
            this.player.body.x += (this.playerTarX - this.player.body.x) * 0.15;
            this.player.body.angle += this.player.spinVelocity;
            if(this.player.spinVelocity > 0){
              this.player.body.setZeroVelocity();
              this.player.spinVelocity--;
            }
            
            if(this.player.spinVelocity <= 0){
              this.player.spinVelocity = 0
              this.player.body.angle = 0;
              if(this.playerTarX < this.player.body.x ){
                this.player.body.angle = -15;
              }
              else if(this.playerTarX > this.player.body.x){
                this.player.body.angle = 15;
              }                
            }
          
 

          
            this.player.body.y += (this.playerTarY - this.player.body.y) * 0.15;    
          
            this.player.height += (50 - this.player.height) * 0.1;
            this.player.width += (50 - this.player.width) * 0.1;
            
            //monster AI
            for(var i=0;i<5 ; i++){
              if(this.monster[i].body.chaseTimer > 0){
                this.monster[i].body.chaseTimer--
                if(this.monster[i].body.chaseTimer < 0){
                  this.monster[i].body.chaseTimer = 0
                  this.monster[i].speed = Math.floor(Math.random() * 5)+1;
                }
              }
              else {
                
                this.monster[i].body.setZeroVelocity();  
                if(this.monster[i].body.x > this.monster[i].targetX){
                  this.monster[i].body.x -= this.monster[i].speed;
                }
                else{
                  this.monster[i].body.x += this.monster[i].speed;
                }
                if(this.monster[i].body.y > this.monster[i].targetY){
                  this.monster[i].body.y -= this.monster[i].speed;
                }
                else{
                  this.monster[i].body.y += this.monster[i].speed;
                }                   
              }      
              
           
              //this.monster[i].body.x += (this.monster[i].targetX - this.monster[i].body.x) * 0.05;
              //this.monster[i].body.y += (this.monster[i].targetY - this.monster[i].body.y) * 0.05;
              //this.monster[i].body.collides(this.playerCollisionGroup, this.getHit, this);

            }            

        }
        , eatSomething: function () {
            this.player.height = 10;

        }     
        , hitSomething: function () {
            this.player.spinVelocity = 150
            this.player.width = 100;
            this.player.height = 100;

        } 
        , outFire: function () {
          this.bgSound.stop();
          this.game.state.start('lose');
        }       
        , getHit: function (body1,body2) {
          //alert("!")
          //console.log(id)
          //monster.body.alpha = 0;
          var knockBack = 1000
          if(this.player.spinVelocity > 0){
            knockBack = 5000
          }          
          body1.setZeroVelocity();
          //body2.setZeroVelocity();
          body2.chaseTimer =  Math.floor(Math.random() * 50)+25;
          body2.alpha = 0;
          var ran = Math.floor(Math.random() * 4);
          if(ran == 0){
            body2.x = (Math.floor(Math.random() * this.map.width)+1)*-1;
            body2.y = (Math.floor(Math.random() * this.map.height));
          }
          else if(ran == 1){
            body2.x = (Math.floor(Math.random() * this.map.width));
            body2.y = (Math.floor(Math.random() * this.map.height)+1)*-1;            
          }
          else if(ran == 2){
            body2.x = (Math.floor(Math.random() * this.map.width)+1)*-1;
            body2.y = (Math.floor(Math.random() * this.map.height)+this.map.height);      
          }        
          else if(ran == 3){
            body2.x = (Math.floor(Math.random() * this.map.width)+this.map.width);
            body2.y = (Math.floor(Math.random() * this.map.height)+1)*-1;            
          }          
            //body2.x = -100
            //body2.y = -100         
          console.log(body2.x+" "+body2.y)
          if(body1.x > body2.x){            
            //body1.moveRight(knockBack);
            //body2.setZeroVelocity();
            //body2.moveLeft(knockBack);            
          }
          else{
            //body1.moveLeft(knockBack);
           // body2.moveRight(knockBack);              
          }
          
          if(body1.y > body2.y){
            //body1.moveDown(knockBack);
            //body2.moveUp(knockBack);            
          }
          else{
            //body1.moveUp(knockBack);
            //body2.moveDown(knockBack);              
          }          



        }       
        , onDown: function (sprite,pointer) {
            this.player.body.setZeroVelocity();
            this.playerTarX = pointer.worldX
            this.playerTarY = pointer.worldY


        }
          
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
}());