(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.image = null;
    this.debris = null;
    
    
    
    
    this.dodgeSpeed = 0.2;
    this.speed = null;
    this.target = null;
    this.playerMoving = false;
    this.speedHolder =null;
    this.dodgeHolder = null;
    this.score = 0;
    this.scoreText = null;
    this.bgLine = null;
    this.fgLine = null;
    this.linespeed = null;
    this.hp = 5;
    this.index = 0;
    this.overTimer = null;

  }

  Game.prototype = {

    create: function () {
      
      this.physics.startSystem(Phaser.Physics.ARCADE);
      
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.target = x;
      this.bg = this.add.sprite(0, 0, 'gamebg');
      
      this.overTimer = 200;
      this.bgLine = [0];
      for(var i = 0; i < 200;i++){
        var random = Math.floor((Math.random()*480)+0);
        var randomY = Math.floor((Math.random()*480)-960);
        this.bgLine[i] = this.add.sprite(random, randomY, 'bgLine');
        this.bgLine[i].width = 2;
        this.bgLine[i].height = 2;        
        this.bgLine[i].anchor.setTo(0.5, 0.5);  
        this.physics.enable(this.bgLine[i], Phaser.Physics.ARCADE);
      }
      
  
      
      
      this.player = this.add.sprite(x, 150, 'player');
      this.player.width = 32;
      this.player.height = 39;
      this.player.anchor.setTo(0.5, 0.5);
      this.player.hp = 2;
            
      this.player.loadTexture('ship');
      this.player.frame = 0;
      this.player.animations.add('fly', [0, 1, 2, 3, 4], 10, true);
      this.player.animations.play('fly');
      
      
      this.image = this.add.sprite(x, 150, 'image');
      this.image.alpha = 0.5;
      this.image.width = 32;
      this.image.height = 39;
      this.image.anchor.setTo(0.5, 0.5);   
      this.image.loadTexture('FF');
      this.image.frame = 0;
      this.image.animations.add('fly', [0, 1, 2, 3, 4], 10, true);
      this.image.animations.play('fly');          
      this.physics.enable(this.image, Phaser.Physics.ARCADE);
      
      this.input.onDown.add(this.onInputDown, this);      
      
      this.music = this.add.audio('KamKamGameMusic',1,true);
      this.music.play();
      this.music.volume = 0.50;
      
      this.shieldDown = this.add.audio('shieldDown',1,false);
      this.shieldUp = this.add.audio('shieldUp',1,false);
   
      
      this.physics.enable(this.player, Phaser.Physics.ARCADE);
      //this.physics.enable(this.player,Phaser.Physics.Arcade);
      
      var val = 80;
      var place= 800;
      this.debris = [3];
      this.speed= [3];
      for(var i = 0; i < 3; i++ ){
        
        //this.physics.arcade.enable(this.debris[i]);
        var random = Math.floor((Math.random()*2)+1);
        var extra =0;
        if(random == 1){
          extra = -100;
        }
        else{
          extra = 300
        }    
        place+=extra;
        var randomDeb = Math.floor((Math.random()*5)+1);
        this.debris[i] = this.add.sprite(val, place, 'debris'+randomDeb);
        this.debris[i].spinSpeed = Math.floor((Math.random()*5)+1);
        
        val+=80;
        place = 800;
        random = Math.floor((Math.random()*2)+1);
        if(random == 1){
          extra = -300;
        }
        else{
          extra = 300
        }    
        place+=extra;        
        this.debris[i].width = 64;
        this.debris[i].height = 64;
        this.debris[i].anchor.setTo(0.5, 0.5);        
        this.speed[i] = 200;
        this.physics.enable(this.debris[i], Phaser.Physics.ARCADE);
        //this.physics.enable(this.debris[i], Phaser.Physics.Arcade);
       
      }

      this.fgLine = [0];
      this.linespeed = [0];
      for(var i = 0; i < 200;i++){
        var random = Math.floor((Math.random()*480)+0);
        var randomY = Math.floor((Math.random()*480)-480);

        this.fgLine[i] = this.add.sprite(random, randomY, 'fgLine');
        this.fgLine[i].width = 2;
        this.fgLine[i].height = 2;          
        this.fgLine[i].anchor.setTo(0.5, 0.5);  
        this.linespeed[i] = 100;
        this.physics.enable(this.fgLine[i], Phaser.Physics.ARCADE);
      }       
      
      
      this.scoreText = this.startTxt = this.add.bitmapText(x, 400, 'minecraftia', ''+this.score+'ft', 12);
      this.scoreText.anchor.setTo(0.5, 0.5);     
      
      this.warnText = this.add.bitmapText(x, 430, 'minecraftia', '- SHIELD DOWN -', 18);
      this.warnText.anchor.setTo(0.5, 0.5);  
      this.warnText.alpha = 0;
           
      
      this.index = 0;
      this.speedHolder= this.speed[0];
      this.dodgeHolder = this.dodgeSpeed;     
      
      this.score = 0;
      this.multiplier = 1;
           


    },

    update: function () {
      //console.log(this.music.isPlaying)
      this.bg.alpha += (1 - this.bg.alpha)*0.05;
      
      if(!this.music.isPlaying){   
        //console.log(1)
        this.music.play();  
      }
      
      this.scoreText.setText('SCORE: '+this.score+'');
      this.score += 1;
      if(this.score > 9999){
        this.score = 9999 
      }
      this.player.x += (this.target - this.player.x)*this.dodgeSpeed;
      
      //image follow
      this.image.x += (this.player.x - this.image.x)*0.5;
      this.image.y += (this.player.y - this.image.y)*0.5;
      
      //beat twitching
      this.image.width += (36 - this.image.width)*0.1;
      this.player.width += (32 - this.player.width)*0.1;
      this.player.height = this.player.width+7;
      this.image.height = this.image.width+7;
      //this.player.height += (32 - this.player.width)*0.1;
      
      if(32-this.player.width <= 1){
        this.player.width = 30;
        
        //alert('test');
      }

      //regen shield
      if(this.overTimer < 200){
        this.overTimer++;
        if(this.overTimer === 200){
          this.image.visible = true;
          this.player.hp++;
          this.shieldUp.play();
          this.warnText.alpha = 0;
        }
        else{
          this.warnText.alpha += (1 - this.warnText.alpha)*0.05;
          if(this.warnText.alpha > 0.8){
             this.warnText.alpha = 0;
          }
        }
      }
      
      

      //tweak player height
      //Math.round(this.player.y);
      //debris behaviour 
      for(var i=0; i < 3; i++){
        this.debris[i].body.velocity.y = -(this.speed[i]); //fly up
        this.debris[i].angle += this.debris[i].spinSpeed;
        
        if(this.debris[i].y < 0){
          var extra = 0;
          var random = Math.floor((Math.random()*2)+1);
          if(random == 1){
            extra = -300;
          }
          else{
            extra = 300
          }
          this.debris[i].y = 800+extra;
          var randomDeb = Math.floor((Math.random()*5)+1);
          this.debris[i].loadTexture('debris'+randomDeb); 
          this.debris[i].spinSpeed = Math.floor((Math.random()*5)+1);
          this.speed[i] += 25;
          if(this.speed[i] > 400){
            this.speed[i] = 400;
          }

        }

        


        //collision
        //this.physics.arcade.enable([this.player, this.debris[i]]);
        //this.player.body.createBodyCallback(this.debris[i], this.collisionHandler, this);
        this.physics.arcade.collide(this.player, this.debris[i], this.collisionHandler, null, this);        
      }

      //action lines
      for(var i=0; i < 200; i++){
        this.fgLine[i].body.velocity.y = -(this.linespeed[i]); //fly up
        this.bgLine[i].body.velocity.y = -(this.linespeed[i]); //fly up
        if(this.bgLine[i].y < 0){

          var randomy = Math.floor((Math.random()*800)-200);
          var randomx = Math.floor((Math.random()*480)+0);
          this.bgLine[i].y = randomy;
          this.bgLine[i].x = randomx;

        } 
        if(this.fgLine[i].y < 0){

          
          var randomy = Math.floor((Math.random()*800)-200);
          var randomx = Math.floor((Math.random()*480)+0);
          this.fgLine[i].y = randomy;
          this.fgLine[i].x = randomx;
          
          this.linespeed[i]+=50;
          if(this.linespeed[i] > 1000){
            this.linespeed[i] = 1000;
          }

        }         
      }
      
    },
    collisionHandler: function (obj1, obj2) {
      console.log('!');
        //  The two sprites are colliding
        //alert("dead");
      //alert( (this.player.x-this.target === 0)+' && '+(this.debris.y - this.player.y <= 150));
      
      //this.speed = 150;
   
        obj1.body.velocity.y = 0; 
        obj2.y = 800;
        obj1.hp--;
        this.image.visible = false;
        this.overTimer = 0;
        if(obj1.hp <= 0){
          if(parseInt(localStorage.getItem("score")) < this.score){
            localStorage.setItem("score",this.score)  
          }
          this.music.stop();
          this.shieldDown.stop()
          this.shieldUp.stop()
          this.game.state.start('lose');    
        }
        this.shieldDown.play();
         this.bg.alpha = 5;
        //this.game.state.start('menu');      

    },
    onInputDown: function () {
      //dodge
      var x = this.game.width / 2
        , y = this.game.height / 2;
      var cursorx;
      x = this.input.position.x;
      if(x > this.player.x && this.target < 240){
        this.target += 80;
      }
      if(x < this.player.x && this.target > 80){
        this.target -= 80;
      }
      if(x === this.player.x){
      }

      

      //this.game.state.start('menu');
    }

  };

  window[''] = window[''] || {};
  window[''].Game = Game;

}());
