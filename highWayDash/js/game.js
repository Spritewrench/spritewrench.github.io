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
      
      this.carKey = parseInt(localStorage.getItem("carKey"))

      if(this.carKey == 1){
        this.baseSpeed = 500 //200
        this.speedInc = 25 // 25
        this.topSpeed = this.game.height*1.5;  //400    
        this.hornReadycoolDownInc = 50
      }
      else{
        this.baseSpeed = 400 //200
        this.speedInc = 20 // 25
        this.topSpeed = this.game.height;  //400    
        this.hornReadycoolDownInc = 25;
      }


      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.target = x;
      
      //this.bg = this.add.sprite(0, 0, 'bg');
      //this.bg.width = this.game.width
      //this.bg.height = this.game.height
      
      this.overTimer = 200;

      this.roadLine = []
      this.roadlinespeed = []
      var distY = -50
      var spacer = 100
      for(var i = 0; i < 10;i++){
        this.roadlinespeed[i] = 100
        this.roadLine[i] = this.add.sprite(this.game.width/2, distY+spacer, 'roadLine');
        this.roadLine[i].width = 30;
        this.roadLine[i].height = 50;        
        this.roadLine[i].tint = 0xFFBF00; 
        this.roadLine[i].anchor.setTo(0.5, 0.5);  
        this.physics.enable(this.roadLine[i], Phaser.Physics.ARCADE);
        distY+=spacer
      }      
      
      
      


            
      //this.player.loadTexture('ship');
      //this.player.frame = 0;
      //this.player.animations.add('fly', [0, 1, 2, 3, 4], 10, true);
      //this.player.animations.play('fly');
      
      
      this.image = this.add.sprite(x, 150, 'image');
      this.image.alpha = 0;
      this.image.width = 32;
      this.image.height = 39;
      this.image.anchor.setTo(0.5, 0.5);   
      this.image.loadTexture('FF');
      this.image.frame = 0;
      this.image.animations.add('fly', [0, 1, 2, 3, 4], 10, true);
      this.image.animations.play('fly');          
      this.physics.enable(this.image, Phaser.Physics.ARCADE);
      
      this.input.onDown.add(this.onInputDown, this);      
      
      //this.player.inputEnabled = true;
      ///this.player.events.onInputDown.add(this.slowDown, this); 

      this.music = this.add.audio('bgMusic',1,true);
      this.music.play();
      this.music.volume = 0.50;

      this.carHonk = this.add.audio('carHonk',1,false);
      
      this.carHonk.volume = 0.50;      
      
      this.shieldDown = this.add.audio('shieldDown',1,false);
      this.shieldUp = this.add.audio('shieldUp',1,false);
   

      
      var val = this.target - this.game.width/3;
      var dist = this.game.width/3
      var place= this.game.height///2-100;
      this.debris = [3];
      this.speed= [3];
      for(var i = 0; i < 3; i++ ){
        
        //this.physics.arcade.enable(this.debris[i]);
        var extra = 0;
        var random = Math.floor((Math.random()*3)+1);
        if(random == 1){
          extra = 200;
        }
        else if(random == 2){
          extra = 350
        }
        else if(random == 3){
          extra = 500
        }          
        //extra+=this.speed[i]*2
        var randomDeb = Math.floor((Math.random()*5)+1);
        place+=extra
        this.debris[i] = this.add.sprite(val, place, 'debris'+randomDeb);
        val +=dist;
        this.debris[i].spinSpeed = Math.floor((Math.random()*5)+10);
        
        

        this.debris[i].width =60;
        this.debris[i].height = 100;
        this.debris[i].origX = this.debris[i].x
        this.speed[i] = this.baseSpeed;
        this.debris[i].waddleTimer = 100;
        this.debris[i].waddleKey = Math.floor((Math.random()*2));
        this.debris[i].startX = Math.floor((Math.random()*2));
        if(this.debris[i].startX == 0){
          //this.debris[i].x = 0 //cross road
        }
        else{
          //this.debris[i].x = this.game.width
        }        
        this.debris[i].scale.y *= -1;
        this.debris[i].anchor.setTo(0.5, 0.5);        
        
        this.physics.enable(this.debris[i], Phaser.Physics.ARCADE);
        //this.physics.enable(this.debris[i], Phaser.Physics.Arcade);
       
      }
    
      this.player = this.add.sprite(x, -200, 'car'+this.carKey);
      this.player.width = 60;
      this.player.height = 100;
      this.player.scale.y *= -1;
      this.player.anchor.setTo(0.5, 0.5);
      this.player.hp = 1;
      this.physics.enable(this.player, Phaser.Physics.ARCADE);
      this.player.body.allowRotation = false;
      this.player.body.immovable = true;      
      //this.physics.enable(this.player,Phaser.Physics.Arcade);      
      
      this.scoreText = this.add.text(x, this.game.height-50, 'CHOOSE', {font: '24px Kaph-Regular',fill: '#fff', align: 'center'});//this.startTxt = this.add.bitmapText(x, this.game.height-100, 'minecraftia', ''+this.score+'ft', 12);
      this.scoreText.anchor.setTo(0.5, 0.5);     
      
      this.warnText = this.add.text(x+30, this.game.height-100, '+ 01 : 00', {font: '24px Kaph-Regular',fill: '#fff', align: 'center'});//this.add.bitmapText(x, 430, 'minecraftia', '- SHIELD DOWN -', 18);
      this.warnText.anchor.setTo(0.5, 0.5);  
      this.warnText.alpha = 0;
           
      
      this.index = 0;
      this.speedHolder= this.speed[0];
      this.dodgeHolder = this.dodgeSpeed;     
      
      this.score = 0;
      this.multiplier = 1;
           



      this.distTrav= this.add.sprite(0, this.game.height-10, 'fgLine');
      this.distTrav.width = 0;
      this.distTrav.height = 10;        
      this.distTrav.tint = 0xFFF; 

      this.endFlag= this.add.sprite(this.game.width-25, this.game.height-25, 'endFlag');
      this.endFlag.anchor.setTo(0.5, 0.5);     
      this.endFlag.width = 50;
      this.endFlag.height = 50;        

      this.dist = 0;

      this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
      this.hornReady = false;
      this.hornReadyTimer = 0;
      this.hornReadycoolDown = 100


      if(localStorage.getItem("tutorial") == null ){
        Swal.fire({
          title: 'TUTORIAL',
          width: 700,
          html: "Tap left or right to avoid oncoming traffic and reach the destination with the lowest score possible. <br/><br/>Each collision will add 1:00 minute to your time. <br/><br/>Your car will have an outline when your horn is ready. Tap your car to use your horn and prompt incoming cars to move out of the way.",
        }).then((result) => {
          localStorage.setItem("tutorial", 0 )                     
        })    
        
      }      
  

    },

    update: function () {

      if(parseInt(localStorage.getItem("tutorial")) == 0){
        if(this.hornReady){
          this.player.loadTexture('car'+this.carKey+"_ready")
        }
        else{
          this.hornReadyTimer++
          if(this.hornReadyTimer >= this.hornReadycoolDown){
            this.hornReadyTimer = 0
            this.hornReady = true;
          }        
          this.player.loadTexture('car'+this.carKey+"")
        }

        

        if(this.warnText.alpha > 0){
          this.warnText.y--
          this.warnText.alpha -=0.01
          if(this.warnText.alpha <= 0){
            this.warnText.alpha =0;
            this.warnText.y = this.scoreText.y
          }
          
        }
        this.player.hp = 1000
        //console.log(this.music.isPlaying)
        //this.bg.alpha += (1 - this.bg.alpha)*0.05;
        if(this.dist < this.game.width){
        
          this.player.y += ( 150 - this.player.y) * 0.1

          for(var i = 0; i < 10;i++){
            this.roadlinespeed[i]+=1;
            if(this.roadlinespeed[i] > this.topSpeed/2){
              this.roadlinespeed[i] = this.topSpeed/2;
            }
            this.roadLine[i].body.velocity.y = -(this.roadlinespeed[i]);
            if(this.roadLine[i].body.velocity.y > this.topSpeed){
              this.roadLine[i].body.velocity.y = -(this.topSpeed)
            }
            
            if(this.roadLine[i].y < -50){
              this.roadLine[i].y = this.game.height+100;
              
              /*this.roadlinespeed[i]+= this.speedInc*2;
              if(this.roadlinespeed[i] > this.topSpeed*5){
                this.roadlinespeed[i] = this.topSpeed*5;
              }   
              */       
            }        
          }        
        }
        else{
          this.player.y+=10;
          if(this.player.y > this.game.height){
            this.music.fadeOut(1000);
            if(this.music.volume <= 0){
              localStorage.setItem("currentScore",this.score)  
              if(parseInt(localStorage.getItem("score")) > this.score || parseInt(localStorage.getItem("score")) == 0){
                localStorage.setItem("score",this.score)  
              }            
              this.game.state.start('win');  
            }
            
          }
          for(var i = 0; i < 10;i++){
            this.roadLine[i].body.velocity.y = 0
          }
        }

        

      
        
        if(!this.music.isPlaying){   
          //console.log(1)
          //this.music.play();  
        }
        this.score++;
        let minutes = Math.floor((this.score / 60)/60);
        let extraSeconds = Math.floor((this.score / 60)) % 60//this.score % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

        this.scoreText.setText('TIME: '+ minutes + " : " + extraSeconds +'');

        
        this.dist += 0.1//Math.floor(((this.speed[0]+this.speed[1]+this.speed[2])/3)/100)/25
        this.distTrav.width=this.dist
        //this.score = 999999
        if(this.score > 999999){
          this.score = 999999 
        }
        this.player.x += (this.target - this.player.x)*this.dodgeSpeed;
        var playDist = this.target -this.player.x 
        if(playDist > 10 ){
          this.player.angle-= 2;
        }
        if(playDist < -10){
          this.player.angle += 2;
        } 
        if(playDist <= 10 && playDist >= -10){
          this.player.angle += (1 - this.player.angle)*this.dodgeSpeed; //= 1
        }            
        
        //image follow
        this.image.x += (this.player.x - this.image.x)*0.5;
        this.image.y += (this.player.y - this.image.y)*0.5;
        
        //beat twitching
        this.image.width += (36 - this.image.width)*0.1;
        //this.player.width += (32 - this.player.width)*0.1;
        //this.player.height = this.player.width+7;
        this.image.height = this.image.width+7;
        //this.player.height += (32 - this.player.width)*0.1;
        
        if(32-this.player.width <= 1){
          //this.player.width = 30;
          
          //alert('test');
        }

        //regen shield
        if(this.overTimer < 200){
          this.overTimer++;
          if(this.overTimer === 200){
            this.image.visible = true;
            //this.player.hp++;
            //this.shieldUp.play();
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
        if(this.dist < this.game.width){
          for(var i=0; i < 3; i++){
            


            this.debris[i].body.velocity.y = -(this.speed[i]); //fly up
            if(this.debris[i].y < (this.game.height-10)){
              if(this.debris[i].startX == 0){
                //this.debris[i].body.velocity.x = (this.speed[i]); //cross road
                
              }
              else{
                //this.debris[i].body.velocity.x = -(this.speed[i]); //cross road             
              }
              

              if(this.debris[i].startled ){
              
                if(this.debris[i].startX == 0){
                // this.debris[i].body.velocity.x = -(this.speed[i]*5); //cross road
                  if(this.debris[i].x > this.player.x ){
                  // this.debris[i].body.velocity.x = (this.speed[i]*5); //cross road
                  }
              
                  
                }
                else{
                // this.debris[i].body.velocity.x = (this.speed[i]*5); //cross road      
                  if(this.debris[i].x < this.player.x ){
                  // this.debris[i].body.velocity.x = -(this.speed[i]*5); //cross road  
                  }                             
                }            
              }            
            }
            

            /*
            this.debris[i].waddleTimer-=(this.speed[i]/10)
            if(this.debris[i].waddleTimer <= 0){
              this.debris[i].waddleTimer = 100
              if(this.debris[i].waddleKey == 0){
                this.debris[i].waddleKey = 1;
              }
              else{
                this.debris[i].waddleKey = 0;
              }
            }
            */
            if(this.debris[i].crashed){
              this.debris[i].angle += this.debris[i].spinSpeed;
              this.debris[i].width+=5;
              this.debris[i].height+=5
              if(this.debris[i].startX == 0){
                //this.debris[i].body.velocity.x = -(this.speed[i]*5); //cross road
                
              }
              else{
                //this.debris[i].body.velocity.x = (this.speed[i]*5); //cross road            
              }              
            }
            else if(this.debris[i].waddleKey == 0){
              //this.debris[i].angle = 10
            }
            else if(this.debris[i].waddleKey == 1){
              //this.debris[i].angle = -10
            }

            this.debris[i].height  += ( 100 - this.debris[i].height) * 0.1
            this.debris[i].width  += ( 60 - this.debris[i].width) * 0.1
            //this.debris[i].angle += this.debris[i].spinSpeed;
            
            if(this.debris[i].y < 0 || (this.debris[i].x > this.game.width && this.debris[i].startX == 0) || (this.debris[i].x < 0 && this.debris[i].startX == 1) || this.debris[i].width > 300){
              this.debris[i].crashed = false;
              this.debris[i].startled = false;
              this.debris[i].body.velocity.x = 0
              this.debris[i].startX = Math.floor((Math.random()*2));
              if(this.debris[i].startX == 0){
                //this.debris[i].x = 0 //cross road
              }
              else{
                //this.debris[i].x = this.game.width
              }
              
              this.debris[i].x = this.debris[i].origX
              
              this.debris[i].angle = 1;


              var extra = 0;
              var random = Math.floor((Math.random()*3)+1);
              if(random == 1){
                extra = 200;
              }
              else if(random == 2){
                extra = 350
              }
              else if(random == 3){
                extra = 500
              }      
              //extra+=this.speed[i]*2
              this.debris[i].y = (this.game.height) + extra;//(this.game.height/2)+extra;
              var randomDeb = Math.floor((Math.random()*5)+1);
              this.debris[i].loadTexture('debris'+randomDeb); 
              this.debris[i].spinSpeed = Math.floor((Math.random()*5)+1);

              this.speed[i] += this.speedInc;
              if(this.speed[i] > this.topSpeed){
                this.speed[i] = this.topSpeed;
              }

            }




            //collision
            //this.physics.arcade.enable([this.player, this.debris[i]]);
            //this.player.body.createBodyCallback(this.debris[i], this.collisionHandler, this);
            this.physics.arcade.collide(this.player, this.debris[i], this.collisionHandler, null, this);        
          }
        }
        else{
          for(var i=0; i < 3; i++){
            
            //this.debris[i].body.velocity.y = 0
            if(!this.debris[i].crashed){
              this.game.plugins.screenShake.shake(15); 
              this.debris[i].crashed = true;
            }

            if(this.debris[i].crashed){
              //this.debris[i].body.y = -100;
            }
            if(this.debris[i].startX == 0){
              //this.debris[i].body.velocity.x = -(this.speed[i])*5; //cross road
            }
            else{
              //this.debris[i].body.velocity.x = (this.speed[i])*5; //cross road
            }
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
   

        if(!obj2.crashed){
          //this.score-= 250;
          this.score+= 3600;
          this.warnText.alpha = 1;
          this.warnText.y = this.scoreText.y
          //this.slowDown();

          if(this.score < 0){
            this.score = 0;
          }
          obj2.crashed = true;
          obj1.angle = 1;


          console.log(obj1.body)
          this.game.plugins.screenShake.shake(15); 
          var ranDir = Math.floor((Math.random()*2))
          obj2.spinSpeed = Math.floor((Math.random()*25)+25);
          obj2.y = obj1.y-obj1.height/2
          //obj2.y = 0-obj2.width
          if(ranDir == 0){
            
            obj2.body.velocity.x = 500
          } 
          else{
            //obj2.x-= 100
            obj2.body.velocity.x = -500
          }
          

          obj1.body.velocity.y = 0; 

          obj1.hp--;
          this.image.visible = false;
          //this.overTimer = 0;

        // this.shieldDown.play();
          // this.bg.alpha = 5;
          //this.game.state.start('menu');   
        }
   

    },
    slowDown: function () {
      for(var i = 0; i < 3; i++ ){
        this.speed[i] = this.baseSpeed;
      }
      for(var i = 0; i < 10;i++){
        this.roadlinespeed[i] = 100
      }      
        
    },
    onInputDown: function () {
      //dodge
      var x = this.game.width / 2
        , y = this.game.height / 2;
      var cursorx;
      x = this.input.position.x;
      y = this.input.position.y;

      var dist = 25
      if(x > this.player.x && Math.abs(x - this.player.x) > dist && (this.target + this.game.width/3) < this.game.width){
        this.target += this.game.width/3;
      }
      if(x < this.player.x && Math.abs(this.player.x-x) > dist && this.target > this.game.width/3){
        this.target -= this.game.width/3;
      }
      
      if(Math.abs(this.player.x-x)<= dist && Math.abs(this.player.y-y)<= dist && this.hornReady ){
        console.log("HONK!")
        this.carHonk.play();
        this.hornReady = false;
        this.hornReadycoolDown+= this.hornReadycoolDownInc;
        for(var i=0; i < 3; i++){
          if(this.debris[i].y < (this.game.height-10)){
            
            //this.debris[i].height += 50;
            //this.debris[i].width -= 50;
            
            var drebisDistX = Math.abs(this.debris[i].x - this.player.x)
            var drebisDistY = Math.abs(this.debris[i].y - this.player.y)
            if(drebisDistX < 25 && drebisDistY < 1000 && !this.debris[i].startled){
              this.debris[i].startled = true
              var random = Math.floor((Math.random()*2));
              if(random == 0){
                this.debris[i].body.velocity.x = -500
                this.debris[i].angle = -10;
              }
              else{
                this.debris[i].body.velocity.x = 500
                this.debris[i].angle = 10;
              }

              this.debris[i].height += 50;
              this.debris[i].width -= 50;              
            }
          }
          

          //var distX = Math.abs(x - this.debris[i].x)
          //var distY = Math.abs(y - this.debris[i].y)
          //if(distX <= 150 && distY <= 50 && !this.debris[i].crashed ){
            //this.debris[i].startX = 1
            //this.debris[i].startled = true
            //this.debris[i].body.velocity.x = -(this.speed[i])*5; //cross road
         // }
        }        
      }

      

      //this.game.state.start('menu');
    }

  };

  window[''] = window[''] || {};
  window[''].Game = Game;

}());
