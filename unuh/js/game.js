(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {
		
			this.game.scale.setMinMax(360, 640, 480,853)
      
     

            var center = 250
            var x = (this.game.width / 2)
                , y = this.game.height / 2;
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            this.game.stage.backgroundColor = "#160c2c";
            this.map = this.add.sprite(0, 0, 'BG'+localStorage.getItem("biome"));
            this.map.width = this.game.width;
            this.map.height = this.game.height;        
            this.map.alpha = 1;             
            
            this.biome = parseInt(localStorage.getItem("biome"));
            

            this.battleMusic = this.add.audio('Battle'); 
   
            this.ping = this.add.audio('ping');
            this.menuClicked = false;
            
            this.attackSound = [];
            this.spellSound = [];
            for(var i = 1; i <= 4;i++){
                this.attackSound[i] = this.add.audio('attack'+i); 
                this.spellSound[i] = this.add.audio('spell'+i); 
            }
            this.shieldSound = this.add.audio("raiseShield"); 
            this.knifeSound = [];
            for(var i = 1; i <= 2;i++){
                this.knifeSound[i] = this.add.audio('knife'+i); 
                
            }     
          
          

          
            this.dialougeTimer = 100;
          
            this.gobLol = []
            this.gobLol[1] = this.add.audio('gobLol1');
            this.gobLol[2] = this.add.audio('gobLol2');
            this.gobDead = this.add.audio('gobDead');
            this.ability = this.add.audio('ability');
            this.badAbility = this.add.audio('badAbility');
            
            this.mdeath = this.add.audio('maleDying');
            this.fdeath = this.add.audio('femaleDying');
            
            this.levelUpSound= this.add.audio('levelUp');
            
            this.chestOpen= this.add.audio('chestOpen');
            
            this.notRM= this.add.audio('notRM');
            this.notRF= this.add.audio('notRF');
            
            this.handleCoins= this.add.audio('handleCoins');
            
            this.footstep= this.add.audio('footstep');
            
            this.eat= this.add.audio('eating');
            this.campFire= this.add.audio('campFire');
            
            this.loseDown = 0;
            
            
            
            this.rationCheck = 0;
            
              
          
            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            this.timer=0;
            this.statLimit = 5;
            
            this.chestChance = 0;
            
          
            //rooms
            this.floor = 1;
            this.roomNum = 1;
            this.monNum = 1;
            var ranRoom = 1
            this.room = []
            this.party = localStorage.getItem("equip0")+"-"+localStorage.getItem("equip1")+"-"+localStorage.getItem("equip2");
            
            this.party = this.party.split("-");

         
            
            for(var i = 1; i <= ranRoom; i++){
                this.room[i] = new Object; 
                this.room[i].roomID = i;
                
                this.room[i].monCount = Math.floor(Math.random() * 2)+3
                
                ////console.log(this.room[i].monCount );

            }
             
            
            
            //Score
            this.score = 0;            
            
            this.textMarker = [];

         
            this.textPosY= 200;
            this.textBG = this.add.sprite(0, this.textPosY, 'bg7');
            this.textBG.width = this.game.width;
            this.textBG.height = 150;
            this.textBG.tint = 0x000000;  
            this.textBG.alpha = 0
            
            this.attackIcon= this.add.sprite(100, this.textPosY, 'attackIcon1');
            this.attackIcon.width = 200;
            this.attackIcon.height = 200;
            this.attackIcon.alpha = 0            
            
            var style = { font: '50pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 480 };            
            this.actionStats = this.add.text(x, this.textPosY, "",style);
            this.actionStats.alpha = 0
            this.textPosY= 522;
            this.actionStats.anchor.setTo(0.5, 1); 
            
            

            
           
  


            
           

            
            
            
            //place hero tiles
            this.hero = [];
            var dist= -250;
            var role = 1;
            for(var i = 0; i < 3; i++){
                this.hero[i] = this.add.sprite(x+dist-0, this.game.height-250, 'player');
                this.hero[i].anchor.setTo(0.5, 0.5);
                this.hero[i].origX = this.hero[i].x
                this.hero[i].origY = this.hero[i].y
                this.hero[i].holderY = this.hero[i].origY
                this.hero[i].width = 250;
                
                this.hero[i].height = 250;
                this.hero[i].tarSize = this.hero[i].width;
                this.hero[i].id = i;
                this.hero[i].prevExp = 0;
                this.hero[i].stamina = 0;
                
                this.hero[i].deathCheck = 0;
                       
                
                this.hero[i].threat = 0;
                this.hero[i].social = 0
                

                this.setHero(i, parseInt(this.party[i]));

                //this.hero[i].cost = 1;
          

                
                //on click
                this.hero[i].inputEnabled = true;
                this.hero[i].events.onInputDown.add(this.onClick, this);            
                dist+=250;
                
                this.hero[i].aggroMultiplyer = 0;
                
            }
            
            //place heart
            this.heart = [];
            var dist= -250;
            for(var i = 0; i < 3; i++){
              this.heart[i] =  this.add.sprite(x+dist-100, this.game.height-180, 'heart');
              this.heart[i].width = 200;                
              this.heart[i].height = 200;              
              dist+=250;
            }
            

            
          
        
            
            //place monster
            this.monsterTimer = 100;
          
            this.origmonsterTimer = this.monsterTimer;
            this.monster =this.add.sprite(x+10, y-100, 'player');
            this.monster.anchor.setTo(0.5, 0.5);
            this.monster.origX =  this.monster.x
            this.monster.origY =  this.monster.y            
            
            //this.monster.hp = 100;
            this.monster.stamina = 0;
            

            
            
            this.monsterstamUI = this.add.sprite(this.monster.x-100, this.monster.y+this.monster.height/2, 'bg7');
            this.monsterstamUI.width = 0;
            this.monsterstamUI.height = 20;  
            this.monsterstamUI.alpha = 0;  
          
            this.monsterstamUIFlash = this.add.sprite(this.monster.x-100, 50, 'bg7');
            
            this.monsterstamUIFlash.width = 0;
            this.monsterstamUIFlash.height = 20; 
            this.monsterstamUIFlash.alpha = 0;
        
          
            this.rhythemUI = this.add.sprite(this.monster.x, 300, 'bg7');
            this.rhythemUI.anchor.setTo(0.5, 0.5);
            this.rhythemUI.width = 1500;
            this.rhythemUI.height = 1500;
            this.rhythemUI.alpha = 0      

            this.rhythemUI2 = this.add.sprite(this.monster.x-100, 150, 'blockPerfect');
            this.rhythemUI2.anchor.setTo(0.5, 0.5);
            //this.rhythemUI2.width = 500;
            
            this.rhythemUI2.angle = -15;
            this.rhythemUI2.alpha = 0;              
            
            this.chargeUI = [];
            var dist = -1*(70*6);
            for(var i = 0; i < 6; i++){
              this.chargeUI[i] = this.add.sprite(x+dist,  this.game.height-500, 'charge');
              dist += 150;
            }
            
     
            this.slashAttack = this.add.sprite(0, 0, 'bg7');
            this.slashAttack.alpha  = 0;
            
            var dist = 0;

          
            this.hunter = new Object; 
            this.hunter.gender = 0;
            this.hunter.name = "you";
            this.hunter.hp = 3;
            this.hunter.attack = 3;
            this.hunter.defence = 3;
            this.hunter.dex = 1;
            this.hunter.dodge = 1;
            this.hunter.intel = 1;
            this.hunter.armor = this.hero[2].maxArmour; 
            this.hunter.speed = 4;          
            this.hunter.stamina = 10; 
            this.hunter.maxStamina = 100;
            this.hunter.charge = 0;
            this.hunter.ultCharge = 0;
            this.hunter.ultMul = 0;
            this.hunter.ultSkillMax = this.hero[0].ultSkillMax
            this.hunter.isBlocking = false;            
            this.hunter.ulting = false
            this.hunter.ultingBash = 0;
            this.hunter.ultingStab = 0; 
            this.hunter.blockDuration = 0;
            this.actionsStat = this.add.bitmapText(x+115, 10, 'minecraftia', '',16);
            
          
            //this.unitStats = this.add.bitmapText(20, this.heroUI.height+10, 'minecraftia', '',16);
            //this.unitStats.setStyle(style);
            

            
            //this.actionStats.text = 
            
        
            
   
            
            //this.monStats = this.add.bitmapText(this.game.width-300, this.monUI.height+10, 'minecraftia', '',16);           
            
            
            
            
          
            this.bloodSplatter = [];
            this.bloodSplatter[0] = this.add.sprite(0,50, 'bloodSplatter1');
            this.bloodSplatter[0].anchor.setTo(0.5, 0.5);  
            this.bloodSplatter[0].alpha = 0;

            this.bloodSplatter[1] = this.add.sprite(0,50, 'bloodSplatter2');
            this.bloodSplatter[1].anchor.setTo(0.5, 0.5);  
            this.bloodSplatter[1].alpha = 0;               

            
            this.damageUI =[];
            for(var i = 0; i < 100; i++){
                
                this.damageUI[i] = this.add.bitmapText(0, 0, 'minecraftia', '',16);
                this.damageUI[i].alpha = 0;
                this.damageUI[i].anchor.setTo(0.5, 0.5);
                this.damageUI[i].align = "center"

            }          

            
            
            
            //load Monster
            
            
            //target
           
            this.monsterstamUI = this.add.sprite(this.monster.x-this.monster.width/2, this.monster.y+(this.monster.height/2)-100, 'bg7');
            this.monsterstamUI.height = 10;
            
            this.monsterhpUI = []
            var dist = 0
            for(var i =0; i < monster[this.biome][1].hp; i++){
              this.monsterhpUI[i] =this.add.sprite(this.monster.x-(this.monster.width/2) + dist, this.monster.y+(this.monster.height/2)-90, 'bg7');
              this.monsterhpUI[i].width = this.monster.width/monster[this.biome][1].hp;
              dist += this.monster.width/monster[this.biome][1].hp +10;
              this.monsterhpUI[i].height = 20;    
              this.monsterhpUI[i].tint = 0xb43939 
            }
           
            

            this.setMonster(1,1)
            //this.setMonster(1,1)
            
            
            this.monster.target = Math.floor(Math.random() * 3);
       
           
          

            
            this.monsterRhythmUI = this.add.sprite(0, this.monster.y+300, 'bg7');
            this.monsterRhythmUI.width = this.game.width;
            this.monsterRhythmUI.height = 100;  
            this.monsterRhythmUI.alpha = 0.5;   
          
            this.monsterRhythmUIBuffer1 = this.add.sprite(this.monsterRhythmUI.width/2, this.monsterRhythmUI.y, 'bg7');
            this.monsterRhythmUIBuffer1.tint = 0xFFA07A 
            this.monsterRhythmUIBuffer1.width = 150;
            this.monsterRhythmUIBuffer1.height = 100;  
            this.monsterRhythmUIBuffer2 = this.add.sprite(this.monsterRhythmUI.width/2-150, this.monsterRhythmUI.y, 'bg7');
            this.monsterRhythmUIBuffer2.tint = 0xFFA07A 
            this.monsterRhythmUIBuffer2.width = 150;
            this.monsterRhythmUIBuffer2.height = 100;            
          
            this.monster.blockAction = [];
            this.monster.moveKey = 0
            this.hunter.comboKey = 0
            

            
            this.monster.moveDecide = this.monster.attackPattern[this.monster.moveKey];
            var dist = []
            dist[0]= 500
            dist[1]= 0
            dist[2]= 0
            var placeKey = 0
            for(var i=0; i < 1; i++){
              this.monster.blockAction[i] = this.add.sprite(this.game.width+100+dist[i], this.monsterRhythmUI.y+50, 'attackIcon1');
              
              this.monster.blockAction[i].startPoint = this.game.width+100
              //dist += 500
              this.monster.blockAction[i].hp = this.monster.skill[this.monster.attackPattern[placeKey]].hp
              placeKey++;
              if(placeKey < this.monster.attackPattern.length){
                placeKey++;    
                if(placeKey >= this.monster.attackPattern.length){
                  placeKey = 0;
                }

              }
              this.monster.blockAction[i].height = 200;
              this.monster.blockAction[i].width = 200;
              this.monster.blockAction[i].anchor.setTo(0.5, 0.5);
              this.monster.blockAction[i].alpha = 1;
              this.monster.blockAction[i].pushBack = 0;
              this.monster.blockAction[i].speed = this.monster.speed
              this.monster.blockAction[i].stopper = 0;
              this.monster.blockAction[i].stopped= false;
              this.monster.blockAction[i].angleSpeed = 2;
              //this.attackIcon.alpha = 0                 
            }   
         
            this.monster.attackAction = [];
            
            var dist = -100          
            for(var i=0; i < 1; i++){
              this.monster.attackAction[i] = this.add.sprite(0+dist, this.monsterRhythmUI.y+50, 'rhythmIcon2');
              this.monster.attackAction[i].startPoint = 0+dist
              dist -= 0
              this.monster.attackAction[i].hp = 1
              this.monster.attackAction[i].height = 200;
              this.monster.attackAction[i].width = 200;
              this.monster.attackAction[i].anchor.setTo(0.5, 0.5);
              this.monster.attackAction[i].alpha = 1;
              
              this.monster.attackAction[i].speed = this.hero[0].speed
              //this.attackIcon.alpha = 0                 
            }    
          
     
                        
          
            this.rhythmArrow =  this.add.sprite(this.game.width/2, this.monsterRhythmUI.y+120, 'stamArrow');
            this.rhythmArrow.anchor.setTo(0.5, 0.5);
            this.rhythmArrow.width = 200;                
            this.rhythmArrow.height = 200;            
      
            
            //UI 
            var style = { font: '14pt Muli', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            this.scoreStats = this.add.text(x, this.game.height-47, "", style);             
            this.scoreStats.anchor.setTo(0.5, 0.5);
            this.scoreStats.align = "center"
            
            var style = { font: '14pt Muli', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            this.floorStat = this.add.text(x, this.game.height-70, "", style);       
            this.floorStat.anchor.setTo(0.5, 0.5);
            this.floorStat.align = "center" 
            
            
            var style = { font: '14pt Muli', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            this.ratioStat = this.add.text(x, this.game.height-22, "", style);    
            this.ratioStat.anchor.setTo(0.5, 0.5);



               
            
            this.questB = this.add.sprite(0, 0,'quest-black');      
            this.questB.width = this.game.width
            this.questB.height = this.game.height
            this.questB.alpha = 0;            
            
            this.help = this.add.sprite(this.game.width-50, 5,'help');      
            this.help.width = 45
            this.help.height = 45
            this.help.inputEnabled = true;
            this.help.events.onInputDown.add(this.getTip, this);    
            this.tipCount = 0;
            this.tip = []
            for(var i = 1; i < 4; i++){
                this.tip[i] = this.add.sprite(this.game.width/5, -1000,'tip'+i);
                this.tip[i].tarY =this.tip[i].y; 
                this.tip[i].width = 800;
                this.tip[i].height = 545;
                this.tip[i].inputEnabled = true;
                this.tip[i].events.onInputDown.add(this.hideTip, this);   
                this.tip[i].alpha = 0;
            }            
            
            //ult emitter
            this.ultEmitter = [];
            for(var i =0; i < 10;i++){
              this.ultEmitter[i] = this.add.sprite(0, 0,'bg7');  
              this.ultEmitter[i].width = 100;
              this.ultEmitter[i].height = 100;
              this.ultEmitter[i].alpha = 0;
              this.ultEmitter[i].timer = 0
              this.ultEmitter[i].inputEnabled = true;
              this.ultEmitter[i].events.onInputDown.add(this.ultMove, this);                
            }
            //ult multiplier
            var style = { font: '60pt Muli', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            this.mulStats = this.add.text(this.game.width-150, this.game.height-600, "X000", style);             
            this.mulStats.alpha = 0;
            this.mulStats.anchor.setTo(0.5, 0.5);
            this.mulStats.align = "center"          
          
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
              }
              else if(swipeCoordX2 > swipeCoordX + swipeMinDistance){            
                console.log("right");        
              }else if(swipeCoordY2 < swipeCoordY - swipeMinDistance){            
                console.log("up");        
              }else if(swipeCoordY2 > swipeCoordY + swipeMinDistance){            
                console.log("down");        
              }    
              
              var midX = (swipeCoordX+swipeCoordX2)/2
              var midY = (swipeCoordY+swipeCoordY2)/2
              console.log(midX+" "+midY)
              /*
              if(this.hunter.ulting){
                if(midX >= (this.monster.x-(this.monster.width/2)) && midX <= (this.monster.x+(this.monster.width/2)) && midY >= (this.monster.y-(this.monster.height/2)) && midY <= (this.monster.y+(this.monster.height/2)) ){
                  var damage = 1
                  this.monster.hp-=damage;
                   for(var k = 0; k < 100; k++){
                      if(this.damageUI[k].alpha <= 0.01){
                          this.damageUI[k].upward = 20;
                          var ran = Math.floor(Math.random() * 2);
                          if(ran == 0){
                            this.damageUI[k].slide = 5  
                          }
                          else{
                            this.damageUI[k].slide = -5
                          }
                          this.damageUI[k].tint = 0xFFFFFF;
                          this.damageUI[k].fontSize = 100;
                          if(damage <= 0){
                            this.damageUI[k].text  = "RESIST";
                          }
                          else{
                            this.damageUI[k].text  = damage;
                          }

                          this.damageUI[k].x = midX;
                          this.damageUI[k].y = midY;
                          this.damageUI[k].alpha = 1;
                          k = 100; 
                      }
                    }                    
                }
              }*/
              switch(this.hero[0].ultSkill.attackType){
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  break;
              }
              if(this.hero[0].ultSkill.attackType !=2 && midX >= (this.monster.x-(this.monster.width/2)) && midX <= (this.monster.x+(this.monster.width/2)) && midY >= (this.monster.y-(this.monster.height/2)) && midY <= (this.monster.y+(this.monster.height/2)) ){
                  this.hunter.ultMul++;
                   var ran = Math.floor(Math.random() * 200)-100;
                  this.monster.y += ran
                  var ran = Math.floor(Math.random() * 200)-100;
                  this.monster.x += ran
              }

            }, this);   
            
        }
        , update: function () {
            
              // localStorage.setItem('state','lose')
              // this.game.state.start('preloader',true,true) 
            this.game.scale.refresh(); 
            //ulting instruction flahs
            if(this.hunter.ulting){
              this.mulStats.alpha = 1;
              this.mulStats.text = "x"+this.hunter.ultMul
              if(this.hunter.ultMul >= this.hunter.ultSkillMax){
                this.hunter.ultMul = this.hunter.ultSkillMax
                this.mulStats.text = "x"+this.hunter.ultMul+"(MAX)"
              }              
              
            }
            if(this.hunter.ulting && this.rhythemUI.alpha <= 0.1 ){
              this.rhythemUI.alpha = 1;
              this.rhythemUI2.alpha = 0;
              switch(this.hero[0].ultSkill.attackType){
                case 0:
                  this.rhythemUI.loadTexture("ultSwipe"); 
                  break;
                case 1:
                  this.rhythemUI.loadTexture("ultTap"); 
                  break;
                case 2:
                  this.rhythemUI.loadTexture("ultHold"); 
                  break;                
              }
                 
              
                            
            }
            if(this.hunter.ulting && this.rhythemUI.alpha > 0.1){
              this.rhythemUI.alpha += (0 - this.rhythemUI.alpha) * 0.05; 
            }
            //ult bash
            if(this.hunter.ulting && this.hero[0].ultSkill.attackType == 2 && this.game.input.activePointer.isDown && this.timer%10 == 0){
              this.monster.width= this.monster.tarSize -50;
              this.monster.height = this.monster.tarSize -50;
              this.hunter.ultMul++;

            }  
            if(this.hunter.ultingBash > 0){
              this.hunter.ultingBash--
              if(this.hunter.ultingBash < 0){
                this.hunter.ultingBash = 0
              }
              this.monster.height = this.monster.tarSize -350;
              
            }
            // ult stab
            if(this.hunter.ultingStab > 0 && this.timer%5 == 0  ){
                this.hunter.ultingStab--;
                if(this.hunter.ultingStab  <= 0){
                  console.log("You're already dead "+this.hunter.ultMul)
                  this.hunter.ultingStab = 0;
                  this.monster.hp -= this.hero[0].ultSkill.attack*this.hunter.ultMul;
                }
               //damage =  this.hero[0].ultSkill.attack;
               for(var k = 0; k < 100; k++){
                  if(this.damageUI[k].alpha <= 0.01){
                      this.damageUI[k].upward = 20;
                      var ran = Math.floor(Math.random() * 2);
                      if(ran == 0){
                        this.damageUI[k].slide = 5  
                      }
                      else{
                        this.damageUI[k].slide = -5
                      }
                      this.damageUI[k].tint = 0xFFFFFF;
                      this.damageUI[k].fontSize = 200;
                      if(damage <= 0){
                        this.damageUI[k].text  = "RESIST";
                      }
                      else{
                        this.damageUI[k].text  = this.hero[0].ultSkill.attack
                      }

                      this.damageUI[k].x = this.monster.x;
                      this.damageUI[k].y = this.monster.y;
                      this.damageUI[k].alpha = 1;
                      k = 100; 
                  }
                }
                var ran = Math.floor(Math.random() * 200)-100;
                this.monster.y += ran
                var ran = Math.floor(Math.random() * 200)-100;
                this.monster.x += ran          
            }
            //ult slash
            if(this.slashAttack.alpha == 1){
              this.slashAttack.width+=120;
              if(this.slashAttack.width >= this.game.width){
                this.monster.hp -= this.hero[0].ultSkill.attack*this.hunter.ultMul;
                 for(var k = 0; k < 100; k++){
                    if(this.damageUI[k].alpha <= 0.01){
                        this.damageUI[k].upward = 20;
                        var ran = Math.floor(Math.random() * 2);
                        if(ran == 0){
                          this.damageUI[k].slide = 5  
                        }
                        else{
                          this.damageUI[k].slide = -5
                        }
                        this.damageUI[k].tint = 0xFFFFFF;
                        this.damageUI[k].fontSize = 200;
                        if(damage <= 0){
                          this.damageUI[k].text  = "RESIST";
                        }
                        else{
                          this.damageUI[k].text  = this.hero[0].ultSkill.attack*this.hunter.ultMul;
                        }

                        this.damageUI[k].x = this.monster.x;
                        this.damageUI[k].y = this.monster.y;
                        this.damageUI[k].alpha = 1;
                        k = 100; 
                    }
                  }                
                this.slashAttack.alpha--;
                if(this.slashAttack.alpha <= 0){
                  this.slashAttack.alpha = 0;
                  this.slashAttack.width = 0;

                }
              }
            }
                for(var i = 1; i < 4; i++){
                    if(this.tip[i].alpha > 0){
                        this.tip[i]
                        this.tip[i].tarY = this.game.height/5;
                        this.questB.alpha += (1 - this.questB.alpha) * 0.5;
                    }
                    else{
                        this.tip[i].tarY = -1000;
                        this.questB.alpha += (0 - this.questB.alpha) * 0.1;
                    }
                    this.tip[i].y += (this.tip[i].tarY - this.tip[i].y) * 0.1;
                   
                }            
            
         
            if(!this.battleMusic.isPlaying && !this.menuClicked){
                this.battleMusic.loop = true;
                //this.battleMusic.play();
            
            }  
            

            if(this.battleMusic.volume == 0 && this.menuClicked){
               localStorage.setItem('state','lose')
               this.game.state.start('preloader',true,true) 
                localStorage.setItem("score",this.score);
            }             
            for(var i =0; i< 2; i++){
                this.bloodSplatter[i].alpha += (0 - this.bloodSplatter[i].alpha) * 0.02; 
            }



            
            
            //Score Stats
            //this.scoreStats.text = "SCORE: "+this.score;
            //this.floorStat.text = "-FLOOR: "+this.floor+"-";
           //this.ratioStat.text = "RATIONS: "+this.ratioNum;


                


            
            //update dialouge
            
            if(this.dialougeTimer  > 0 && this.actionStats.alpha > 0.1){
              this.dialougeTimer --;
              if(this.actionStats.alpha == 1){
                //this.textBG.alpha = 0.5;
                this.textBG.y = this.actionStats.y-110;                
                //this.attackIcon.alpha = 1; 
                this.attackIcon.y = this.actionStats.y-140;    
              }
              

            }
            else{
              this.actionStats.alpha += (0 - this.actionStats.alpha) * 0.03; 
              this.textBG.alpha += (0 - this.textBG.alpha) * 0.03; 
              this.attackIcon.alpha += (0 - this.textBG.alpha) * 0.03; 
              if(this.actionStats.alpha <= 0.1){
                this.textBG.alpha = 0;
                this.attackIcon.alpha = 0;
                this.dialougeTimer = 150;
              }
            }
          //&& this.rhythemUI.alpha > 0.1
            if(this.dialougeTimer  > 0 ){
              this.dialougeTimer --;
             

            }
            else{
              this.rhythemUI.y--;
              this.rhythemUI2.y--;
              this.rhythemUI.alpha += (0 - this.rhythemUI.alpha) * 0.1; 
              if(this.rhythemUI2.alpha > 0){
                this.rhythemUI2.alpha += (0 - this.rhythemUI.alpha) * 0.1;   
              }
              
              
              if(this.rhythemUI.alpha <= 0.1){
                this.rhythemUI.alpha = 0;
                this.rhythemUI.y = 300
                
                this.rhythemUI2.alpha = 0;
                this.rhythemUI2.y = 150               
                
                
                this.dialougeTimer = 100;
                
              } 
            }            
          

            //this.actionStats.y = this.textPosY - dialogue.length*25;
            //this.textBG.y = this.actionStats.y+14

            
            ////console.log("Timer: "+this.timer)
            //timer 
            if(this.tip[1].alpha <= 0 && this.tip[2].alpha <= 0 && this.tip[3].alpha <= 0 ){
            this.timer++;
            //update hero stats
            var heroDown = 0;
            var maxThreat = 0;
            var maxThreatKey = this.monster.target;
            
            //timer
            if(this.timer%250 == 0){
                //stamina gain
                if(this.hunter.stamina <= 10){
                  
                   if(this.hunter.isBlocking ){
                     
                     //this.hunter.stamina -= this.hero[1].cost;
                   }
                   else{
                     this.hunter.stamina += 1;
                   }
                   
                    if(this.hunter.stamina > 10){
                      this.hunter.stamina = 10
                    }
                    if(this.hunter.stamina <= 0){
                      this.hunter.stamina = 0
                      this.hunter.isBlocking = false;
                    }                  
                }   

            }              
              
            for(var i =0; i < this.hero.length; i++){
                if(this.hero[i].threat > maxThreat && this.hero[i].hp > 0){
                    maxThreat = this.hero[i].threat;
                    maxThreatKey = i;
                }
                

                this.hero[i].level = Math.round(0.1*Math.sqrt(this.hero[i].exp));
                //level up!
                if(this.hero[i].level != this.hero[i].currentLevel){
                    //this.levelUp(this.hero[i]);
                    //this.hero[i].prevExp = this.hero[i].exp;
                }
                
              
                //update hearts
                for(var k = 0; k < 3; k++){
                  this.heart[k].loadTexture("heart-hurt");
                }              
                for(var k = 0; k < this.hunter.hp; k++){
                  this.heart[k].loadTexture("heart");
                }
                //update charge
                
                for(var k = 0; k < this.chargeUI.length; k++){
                  this.chargeUI[k].loadTexture("charge-spent");
                }              
                for(var k = 0; k < this.hunter.charge; k++){
                  this.chargeUI[k].loadTexture("charge");
                }                

                // charge ult
                this.hunter.ultCharge = this.hunter.charge;
               
              
              //death
                
                
                if(this.monster.hp <= 0){
                   this.monster.hp = 0; 
                }
                


                //console.log(i +" "+this.hero[i].exp)
                this.hero[i].stamina += this.hero[i].speed;

              
                if(this.hero[i].role == 2 && this.hunter.armor <= 0){
                  this.hero[i].stamina = 0;
                }
                //stamina cant be greater than 100
                if(this.hero[i].stamina >= this.hunter.maxStamina){
                   this.hero[i].stamina = this.hunter.maxStamina;

                }
                if(this.hero[i].stamina < 0){
                   this.hero[i].stamina = 0;
                }                
                //stamina pulse
                if( this.hero[i].stamina >= this.hunter.maxStamina && this.hero[i].hp > 0 && (this.hunter.stamina-this.hero[i].cost)  >= 0){
                    //this.hero[i].y = this.hero[i].origY;
                  this.hero[i].tint = 0xFFFFFF; 
                  this.hero[i].origY = this.hero[i].holderY
                  if(this.hunter.isBlocking && this.hero[i].role == 2){
                    this.hero[i].origY = this.hero[i].holderY-50
                    //this.hero[i].tint = 0xA8A8A8;                    
                  }                  
                } 
                else{

                  this.hero[i].origY = this.hero[i].holderY+50
                  this.hero[i].tint = 0xA8A8A8;                      

                }
                

                
                //hp cant be less than 0
                if(this.hero[i].hp < 0){
                   this.hero[i].hp = 0;
                }
              
                //aggro cant be lower than 0
                if(this.hero[i].threat < 0){
                   this.hero[i].threat = 0;
                }              

                
                // position & size anim hero
                
                this.hero[i].y += (this.hero[i].origY - this.hero[i].y) * 0.1; 
                //hurt wears off
                if(this.hero[i].hurtTimer <= 0){
                   this.hero[i].tint = 0xFFFFFF; 
                }
                else{
                    this.hero[i].hurtTimer--;
                }
                this.hero[i].width += (this.hero[i].tarSize - this.hero[i].width) * 0.05; 
                this.hero[i].height += (this.hero[i].tarSize - this.hero[i].height) * 0.05; 
                
                //hero stat limits

                if(this.hero[i].hp >= this.hero[i].maxhp){
                    this.hero[i].hp = this.hero[i].maxhp
                }
              

                
                
                
                if(this.hero[i].attack >= this.statLimit+(5*this.hero[i].level)){
                    //this.hero[i].attack = this.statLimit+(5*this.hero[i].level)
                    this.hero[i].attackMax = "";
                }
                else{
                    this.hero[i].attackMax ="";
                }
                
                if(this.hero[i].defence >= this.statLimit+(5*this.hero[i].level)){
                    //this.hero[i].defence = this.statLimit+(5*this.hero[i].level)
                    this.hero[i].defenceMax = "";
                }
                else{
                    this.hero[i].defenceMax ="";
                }
                
                if(this.hero[i].dex >= this.statLimit+(5*this.hero[i].level)){
                    //this.hero[i].dex = this.statLimit+(5*this.hero[i].level)
                    this.hero[i].dexMax = "";
                }
                else{
                    this.hero[i].dexMax ="";
                }
                
                if(this.hero[i].dodge >= this.statLimit+(5*this.hero[i].level)){
                    //this.hero[i].dodge = this.statLimit+(5*this.hero[i].level)
                    this.hero[i].dodgeMax = "";
                }  
                else{
                    this.hero[i].dodgeMax ="";
                }
                
                if(this.hero[i].intel >= this.statLimit+(5*this.hero[i].level)){
                    //this.hero[i].intel = this.statLimit+(5*this.hero[i].level)
                    this.hero[i].intMax = "";
                }  
                else{
                    this.hero[i].speedMax ="";
                }                 
                
                if(this.hero[i].speed >= this.statLimit+(5*this.hero[i].level)){
                    //this.hero[i].speed = this.statLimit+(5*this.hero[i].level)
                    this.hero[i].speedMax = "";
                }  
                else{
                    this.hero[i].speedMax ="";
                }             
                
            }

            
            //lose the game
            if(this.hunter.hp <= 0){
                
                //localStorage.setItem('state','lose')
                this.game.state.start('lose');
            }

            
            //monster dead
            if(this.monster.hp <= 0){
                this.monster.alpha += (0 - this.monster.alpha) * 0.05;
                this.monsterstamUIFlash.alpha = 0;
                this.monsterstamUI.alpha = 0;
                for(var i =0; i < this.monsterhpUI.length; i++){
                    this.monsterhpUI[i].alpha = 0;
                }              
                
                
                
                if(this.monster.alpha <= 0.01){
        

                    var level = Math.floor(Math.random() * 2) +this.floor;
                    if(this.floor == 1){
                        level = 1;
                    }             
                    else{
                        level = Math.floor(Math.random() * 2) +this.floor;
                    }
                    
                    var monType = this.floor;
                    var ranMon = Math.floor(Math.random() * (monType)) + 1;
                    //this.setMonster(1,1)//this.setMonster((ranMon*10),level)
                   localStorage.setItem('state','win')
                   this.game.state.start('preloader',true,true) 
                    
                    
                }
            }
              
            if(this.monster.hp > 0){
                //console.log("checking")
                // block duration
                //console.log(this.hunter.blockDuration)
                this.hunter.blockDuration--;
                if(this.hunter.blockDuration <= 0){
                  this.hunter.blockDuration = 0
                }
                
                //rhythm actions
                for(var i=0; i < 1; i++){
                  
                  if( (this.monster.blockAction[i].x <= this.rhythmArrow.x && this.monster.blockAction[i].hp <= 1) || this.monster.blockAction[i].miss ){
                    if(this.monster.blockAction[i].alpha == 1){
                     
                    }
                    //this.monster.blockAction[i].x -= this.monster.speed
                    if(this.monster.blockAction[i].alpha > 0.1){
                      this.monster.blockAction[i].y -= 1;
                      //this.monster.blockAction[i].x = this.rhythmArrow.x
                      this.monster.blockAction[i].alpha += (0 - this.monster.blockAction[i].alpha) * 0.1; 
                      this.monster.blockAction[i].speed = this.monster.speed
                    }
                    else{
                      var currentStam= this.monster.stamina
                      if(true){
                        this.monster.isAttacking = true;
                        this.monAttack(this.monster) 
                      }
                      
                      // post attack effects
                      var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                      switch(monSkillType){
                        case 1:
                          this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed += 5;
                          if(this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed > 25){
                            this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed = 25;
                          }
                          break;
                      }
                      this.monster.stamina=currentStam; 
                      this.hunter.ulting = false;
                      //this.hunter.blockDuration = 0
                      this.monster.blockAction[i].miss = false;
                      this.monster.blockAction[i].alpha = 1;
                      this.monster.blockAction[i].width += ((200*1) + this.monster.blockAction[i].width) * 0.5;
                      this.monster.blockAction[i].height += ((200*1) + this.monster.blockAction[i].height) * 0.5;                          
                      this.monster.blockAction[i].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[i].width
                      this.monster.blockAction[i].y = this.monsterRhythmUI.y+50 
                      this.monster.blockAction[i].stopped= false;
                      this.monster.blockAction[i].angleSpeed = 2;                      
                      
                      //reset special attack effects while move
                      this.monster.blockAction[i].hp = 1 
                      var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                      switch(monSkillType){
                        case 2:
                          this.monster.blockAction[i].hp = 2;
                          break;
                        case 4:
                          this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed = 0;
                          break;
                        case 5:
                          this.monster.blockAction[i].hp = 2;
                          break;
                      }                        

                      if(this.monster.moveKey < this.monster.attackPattern.length){
                        this.monster.moveKey++;    
                        if(this.monster.moveKey >= this.monster.attackPattern.length){
                          this.monster.moveKey = 0;
                        }

                      }
                      //console.log(this.monster.moveKey)
                      

                      this.monster.moveDecide = this.monster.attackPattern[this.monster.moveKey];  
                      this.map.alpha = 1;
                      if(this.monster.moveDecide == 0){
                        //alert(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name)
                        this.monster.attackAction[0].loadTexture(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name);
                        if(this.hunter.ultCharge >= 6|| this.hunter.ulting == true){
                            this.monster.attackAction[0].loadTexture(this.hero[0].ultSkill.name);
                            if(this.hunter.ultCharge >= 6){
                              this.hunter.ultMul = 0;
                              this.mulStats.alpha = 0;
                            }
                            this.hunter.ultCharge = 0;
                            this.hunter.charge = 0;
                            this.map.alpha = 0.2;
                            this.hunter.ulting = true;
                            
                        }
                                              
                        this.monster.attackAction[i].hp = 1;
                        //this.hunter.charge = 0;

                      } 
                      else{

                        //this.monster.blockAction[i].hp = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].hp  
                        this.monster.blockAction[i].loadTexture(this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].name);
 
                        console.log("pattern "+this.monster.attackPattern)
                        console.log("place "+this.monster.moveKey)          
                        console.log("HP "+this.monster.blockAction[i].hp )                          

                      }
                      //this.monster.moveDecide = Math.floor(Math.random() * 2);
                    }
                    //this.monster.blockAction[i].y -= this.monster.speed
                  }
                  else if(this.monster.blockAction[i].x <= this.rhythmArrow.x && this.monster.blockAction[i].hp > 1){
                    this.monster.blockAction[i].hp --;
                    this.monster.blockAction[i].x += 10;
                    this.monster.blockAction[i].pushBack = 30
                    this.rhythemUI.alpha = 1;
                    this.rhythemUI2.alpha = 0;
                    this.rhythemUI.loadTexture("blockMiss");     
                    this.dialougeTimer = 100;                    
                    var currentStam= this.monster.stamina
                    this.monster.isAttacking = true;
                    this.monAttack(this.monster)     
                    this.monster.stamina=currentStam; 
                  }
                  else if( this.monster.moveDecide != 0){
                    if( this.hunter.ulting){
                      
                      //ult emitter end
                      for(var j =0; j < this.ultEmitter.length;j++){
                        this.ultEmitter[j].alpha = 0;
                        this.map.alpha = 1;            
                      }                      
                    }                      
                    //console.log(this.monster.blockAction[i].speed)
                    //console.log(this.monster.skill);
                    
                    //this.monster.blockAction[i].alpha = 1;
                    this.monster.blockAction[i].width += ((200*this.monster.blockAction[i].hp) - this.monster.blockAction[i].width) * 0.5;
                    this.monster.blockAction[i].height += ((200*this.monster.blockAction[i].hp) - this.monster.blockAction[i].height) * 0.5;
                    // special attack effects while move
                    var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                    switch(monSkillType){
                      //acid spit
                      case 3:
                        //anticipation
                        var diff =   this.monster.blockAction[i].x - (this.game.width-(this.monster.blockAction[i].width/3));
                        console.log(diff)
                        if(diff <= 0 ){
                          this.monster.blockAction[i].angleSpeed += 2;
                          this.monster.blockAction[i].angle+=this.monster.blockAction[i].angleSpeed;
                          if(!this.monster.blockAction[i].stopped){
                            console.log("lets pause "+this.monster.blockAction[i].stopped)
                            this.monster.blockAction[i].stopper = 100;
                            this.monster.blockAction[i].stopped = true;
                            console.log("lets pause "+this.monster.blockAction[i].stopped)
                          }
                          //gather spit
                          if(this.monster.blockAction[i].stopper <= 10 && this.monster.blockAction[i].stopper > 0){
                            this.monster.blockAction[i].hp = 2;
                            this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed = 5;
                          }
                          //this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed += 10;
                        }
                        break;
                      //shadow sneak
                      case 4:
                        //anticipation
                        var diff =   this.monster.blockAction[i].x - (this.game.width-(this.monster.blockAction[i].width/3));
                        
                        if(diff <= 0 ){
                          this.monster.blockAction[i].angleSpeed += 2;
                          this.monster.blockAction[i].angle+=this.monster.blockAction[i].angleSpeed;
                          if(!this.monster.blockAction[i].stopped){
                            console.log("lets pause "+this.monster.blockAction[i].stopped)
                            this.monster.blockAction[i].stopper = 100;
                            this.monster.blockAction[i].stopped = true;
                            console.log("lets pause "+this.monster.blockAction[i].stopped)
                          }
                          //fade
                          if(this.monster.blockAction[i].stopper <= 10 && this.monster.blockAction[i].stopper > 0){
                            this.monster.blockAction[i].alpha  = 0;

                          }                          
                        }
                        diff =   this.monster.blockAction[i].x - this.rhythmArrow.x;
                        if( diff > 200 && diff <= 400){
                          //this.monster.blockAction[i].alpha = 0;
                        }                         
                        else{
                          if(this.monster.blockAction[i].alpha < 1){
                            this.monster.blockAction[i].alpha += 0.1;
                          }                          
                        }                        

                        break;
                      //curve ball
                      case 5:
                        //anticipation
                        var diff =   this.monster.blockAction[i].x - (this.game.width-(this.monster.blockAction[i].width/3));
                        console.log(diff)
                        if(diff <= 0 ){
                          //this.monster.blockAction[i].angleSpeed += 2;
                          //this.monster.blockAction[i].angle+=this.monster.blockAction[i].angleSpeed;\
                          var ran = Math.floor(Math.random() * 50)-25;
                          this.monster.blockAction[i].y = this.monsterRhythmUI.y+50+ran 
                          if(!this.monster.blockAction[i].stopped){
                            console.log("lets pause "+this.monster.blockAction[i].stopped)
                            this.monster.blockAction[i].stopper = 50;
                            this.monster.blockAction[i].stopped = true;
                            console.log("lets pause "+this.monster.blockAction[i].stopped)
                          }
                          //compress
                          if(this.monster.blockAction[i].stopper <= 10 && this.monster.blockAction[i].stopper > 0){
                            this.monster.blockAction[i].angle = 0;
                            this.monster.blockAction[i].hp = 0.5;
                            this.monster.blockAction[i].y = this.monsterRhythmUI.y+50
                            this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed = 20;
                            
                          }
                          if(this.monster.blockAction[i].stopper <= 0){
                            this.monster.blockAction[i].y = this.monsterRhythmUI.y+50
                          }
                          //this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed += 10;
                        }
                        break;

                       
                    }        
                    console.log("stopped for "+this.monster.blockAction[i].stopper);
                    if(this.monster.blockAction[i].stopper <=  0){
                      this.monster.blockAction[i].angle = 0;
                      this.monster.blockAction[i].x -= this.monster.blockAction[i].speed+(this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed)-this.monster.blockAction[i].pushBack;                      
                    }

                    if(this.monster.blockAction[i].x  < this.rhythmArrow.x){
                      this.monster.blockAction[i].x = this.rhythmArrow.x
                    }
                    if(this.monster.blockAction[i].pushBack > 0){
                      this.monster.blockAction[i].pushBack--;
                    }  
                    if(this.monster.blockAction[i].stopper > 0){
                      this.monster.blockAction[i].stopper--;
                      if(this.monster.blockAction[i].stopper == 0 && this.monster.blockAction[i].stopped){
                        //this.monster.blockAction[i].stopped = false;
                      }
                    } 

                    

                    
                    this.monster.blockAction[i].loadTexture(this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].name);
                  }
                  //this.attackIcon.alpha = 0                 
                }  
                
                for(var i=0; i < 1; i++){
                  //console.log(this.monster.attackAction[i].miss)
                  if(this.monster.attackAction[i].x >= this.rhythmArrow.x || this.monster.attackAction[i].miss){
                    //console.log(this.monster.attackAction[i].miss)
                    //this.monster.blockAction[i].x -= this.monster.speed
                    if(this.monster.attackAction[i].alpha > 0.1){
                      this.monster.attackAction[i].y -= 1;
                      this.monster.attackAction[i].alpha += (0 - this.monster.attackAction[i].alpha) * 0.1; 
                      this.monster.attackAction[i].speed = this.hero[0].speed
                        if(this.hunter.ulting == true){
                          this.monster.attackAction[0].loadTexture(this.hero[0].ultSkill.name);
                        }                      
                    }
                    else{
                      this.monster.attackAction[i].miss = false;
                      this.monster.attackAction[i].alpha = 1;
                      this.monster.attackAction[i].width += ((200*(1+(this.hunter.charge*0.25))) - this.monster.attackAction[i].width) * 0.5;
                      this.monster.attackAction[i].height += ((200*(1+(this.hunter.charge*0.25))) - this.monster.attackAction[i].height) * 0.5;                         
                      this.monster.attackAction[i].x = this.monster.attackAction[i].startPoint - this.monster.attackAction[i].width;//Math.floor(Math.random() * 150)-500 //-250
                      this.monster.attackAction[i].y = this.monsterRhythmUI.y+50
                      
                      if(this.monster.moveKey < this.monster.attackPattern.length){
                        this.monster.moveKey++;    
                          
                        if(this.monster.moveKey >= this.monster.attackPattern.length){
                          this.monster.moveKey = 0;
                        }
                      }
                      if(this.hunter.comboKey < this.hero[0].comboPattern.length){
                        this.hunter.comboKey++;    
                          
                        if(this.hunter.comboKey >= this.hero[0].comboPattern.length){
                          this.hunter.comboKey = 0;
                        }
                      }                      
                      this.monster.moveDecide = this.monster.attackPattern[this.monster.moveKey];  
                      if(this.hunter.ulting == true){
                        this.hunter.ulting = false;
                        this.hunter.ultMul = 0;
                        this.mulStats.alpha = 0;   
                        this.rhythemUI.alpha = 0;
                        this.map.alpha = 1;
                      }                        
                      if(this.monster.moveDecide == 0){
                        //alert(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name)
 
                        this.monster.attackAction[0].loadTexture(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name);


                      }                       
                    }
                    //this.monster.blockAction[i].y -= this.monster.speed
                  }
                  else if( this.monster.moveDecide == 0){
                    //console.log(this.monster.blockAction[i].speed)
                    this.monster.attackAction[i].width += ((200) - this.monster.attackAction[i].width) * 0.5;
                    this.monster.attackAction[i].height += ((200) - this.monster.attackAction[i].height) * 0.5;  
                    //this.monster.attackAction[i].alpha = 5;
                    //this.monster.attackAction[i].alpha += (1 - this.monster.attackAction[i].alpha) * 0.1; 
                    
                    var speed = this.monster.attackAction[i].speed+(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].speed)-this.monster.attackAction[i].hp;
                    if(speed <= 0 || this.hunter.ulting){
                      speed = 2;                     
                    }    

                    if(this.hunter.ultCharge >= 6 || this.hunter.ulting == true){
                        
                        if(this.monster.attackAction[i].width <= (200*(1)) ){
                          this.monster.attackAction[i].width = this.monster.attackAction[i].width*1.2;
                          this.monster.attackAction[i].height = this.monster.attackAction[i].height*1.2;
                          var damage = this.hero[0].ultSkill.attack;
                          /*
                          this.monster.hp -= damage;
                           for(var k = 0; k < 100; k++){
                              if(this.damageUI[k].alpha <= 0.01){
                                  this.damageUI[k].upward = 20;
                                  var ran = Math.floor(Math.random() * 2);
                                  if(ran == 0){
                                    this.damageUI[k].slide = 5  
                                  }
                                  else{
                                    this.damageUI[k].slide = -5
                                  }
                                  this.damageUI[k].tint = 0xFFFFFF;
                                  this.damageUI[k].fontSize = 100;
                                  if(damage <= 0){
                                    this.damageUI[k].text  = "RESIST";
                                  }
                                  else{
                                    this.damageUI[k].text  = damage;
                                  }

                                  this.damageUI[k].x = this.monster.x;
                                  this.damageUI[k].y = this.monster.y;
                                  this.damageUI[k].alpha = 1;
                                  k = 100; 
                              }
                            }
                            */
                          //this.monster.attackAction[i].alpha = 5;
                        }
                        this.monster.attackAction[0].loadTexture(this.hero[0].ultSkill.name);
                        
                        this.hunter.ultCharge = 0;
                        this.hunter.charge = 0;
                        this.map.alpha = 0.2;
                        this.hunter.ulting = true;
                    }                    
                    
                    this.monster.attackAction[i].x += speed;
                  }
                  //this.attackIcon.alpha = 0                 
                }                
              
                this.monster.width += (this.monster.tarSize - this.monster.width) * 0.05; 
                this.monster.height += (this.monster.tarSize - this.monster.height) * 0.05; 
                
                
                
                this.monster.angleSpeed += (0 - this.monster.angleSpeed) * 0.05; 
                if(this.monster.angleSpeed > 0.01){
                    this.monster.angle += this.monster.angleSpeed;
                }
                else{
                    this.monster.angleSpeed = 0;
                    this.monster.angle = 0;
                }
                

                //degrades over time - monster
                if(this.timer%10 == 0){
                    //this.monster.stamina+= this.monster.speed

                }   
                this.monsterstamUI.y = this.monster.y+(this.monster.height/2)-120
                for(var i =0; i < this.monsterhpUI.length; i++){
                    //this.monsterhpUI[i].alpha = 0;
                    //small
                    if(this.monster.width == 400){
                      this.monsterhpUI[i].y = this.monster.y+(this.monster.height/2)-80
                    }
                    //medium
                    if(this.monster.width == 600){
                      this.monsterhpUI[i].y = this.monster.y+(this.monster.height/2)-120
                    }                  
                    //large
                    if(this.monster.width == 800){
                      this.monsterhpUI[i].y = this.monster.y+(this.monster.height/2)-130
                    }                  
                    
                }                   
                

                //this.monsterstamUIAttack.tint = "blue";
                //this.monsterstamUIBad.y = this.monster.y+(this.monster.height/2)-120
                
                this.monsterstamUI.x = this.monster.x-this.monster.width/2
                for(var i =0; i < this.monsterhpUI.length; i++){
                    //this.monsterhpUI[i].alpha = 0;
                    //this.monsterhpUI[i].x = this.monster.x-this.monster.width/2   
                } 
                var dist = 0;
                for(var i =0; i < this.monsterhpUI.length; i++){
                  //this.monsterhpUI[i] =this.add.sprite(this.monster.x-(this.monster.width/2) + dist, this.monster.y+(this.monster.height/2)-90, 'bg7');
                   this.monsterhpUI[i].x = this.monster.x-(this.monster.width/2) + dist - (5*this.monster.maxhp);
                  this.monsterhpUI[i].width = (this.monster.width/this.monster.maxhp);
                  dist += (this.monster.width/this.monster.maxhp)+ 10;
                  //this.monsterhpUI[i].height = 20;    
                  //this.monsterhpUI[i].tint = 0xb43939 
                }                
                
                
  


                
                this.monsterstamUI.width = (this.monster.stamina/100)*this.monster.tarSize;

              
                
                
                
                var hpUI = (this.monster.hp/this.monster.maxhp)*this.monster.tarSize;
                for(var i =0; i < this.monsterhpUI.length; i++){
                    if(i < this.monster.hp){
                      this.monsterhpUI[i].alpha = 1;
                    }
                    else{
                      this.monsterhpUI[i].alpha = 0;
                    }
                    //this.monsterhpUI[i].alpha = 0;
                    //this.monsterhpUI[i].x = this.monster.x-this.monster.width/2   
                }                  
                //this.monsterhpUI.width += (hpUI - this.monsterhpUI.width) * 0.05;
                
                if(this.monsterstamUI.width > this.monster.tarSize){
                  this.monsterstamUI.width = this.monster.tarSize;
                  

                }
                //mon stam full flash
                if(this.monsterstamUIFlash.alpha > 0){
                    this.monsterstamUIFlash.alpha += ( 0- this.monsterstamUIFlash.alpha) * 0.1; 
                    this.monsterstamUIFlash.width+=4;
                    this.monsterstamUIFlash.height+=4;

                }

                if(this.monsterstamUIFlash.alpha <= 0.01 && this.monsterstamUI.width >= this.monster.tarSize){
                   this.monsterstamUIFlash.alpha = 1;
                    this.monsterstamUIFlash.width = this.monsterstamUI.width
                    this.monsterstamUIFlash.height = this.monsterstamUI.height
                    this.monsterstamUIFlash.anchor.setTo(0.5, 0.5);
                    this.monsterstamUIFlash.x = this.monsterstamUI.x + this.monsterstamUI.width/2;
                    this.monsterstamUIFlash.y = this.monsterstamUI.y + this.monsterstamUI.height/2;
                }

                // monster attack
                //console.log(this.monster.stamina)
                
                if(this.monsterstamUI.width >= (this.monster.tarSize)){
                  this.monster.earlyAttack = 0;
                  this.monsterTimer--;
               
                if(this.monsterTimer <= 0){
                  //console.log("attack")
                  //this.monster.target = this.selectTarget();

                    this.actionStats.alpha = 1;
                    //console.log(this.monster.mp - this.monster.actionTimer == 1)
                    if(this.monster.mp - this.monster.actionTimer == 1){
                        //warning
                        this.monster.stamina = 0;
 
                    
                    }
                    if(this.monster.y-this.monster.origY < 0.5){
                        this.monsterTimer = this.origmonsterTimer;
                        if(this.monster.actionTimer >= this.monster.mp){
                            //this.monSkill(this.monster, this.monster.target)

                        }
                        else if(this.monster.mp - this.monster.actionTimer > 1) {
                           this.monAttack(this.monster) 
                           
                        }
                        else{
                          this.monster.actionTimer++;
                        }
                    }

                    

                }
                }


                // position & size anim mon
                if(!this.monster.isFlying  ){
                    this.monster.y += (this.monster.origY - this.monster.y) * 0.1;
                    this.monster.x += (this.monster.origX - this.monster.x) * 0.1;
                }
                else{
                    this.monster.y += ((150)- this.monster.y) * 0.1;
                    //this.monster.x += (this.monster.origX - this.monster.x) * 0.1;                    
                }
                        
 
                
                
                //monster stat limits
                if(this.monster.hp >= this.monster.maxhp){
                    this.monster.hp = this.monster.maxhp
                }
                
                //damaged
                if(this.monster.hp/this.monster.maxhp <= 0.5){
                   //this.monster.loadTexture("monDmg"); 
                }
   
                
                /*if(this.monster.attack >= this.statLimit+(5*this.monster.level)){
                    this.monster.attack = this.statLimit+(5*this.monster.level)
                    this.monster.attackMax = "MAX";
                }
                else{
                    this.monster.attackMax ="";
                }
                
                if(this.monster.defence >= this.statLimit+(5*this.monster.level)){
                    this.monster.defence = this.statLimit+(5*this.monster.level)
                    this.monster.defenceMax = "MAX";
                }
                else{
                    this.monster.defenceMax ="";
                }
                
                if(this.monster.dex >= this.statLimit+(5*this.monster.level)){
                    this.monster.dex = this.statLimit+(5*this.monster.level)
                    this.monster.dexMax = "MAX";
                }
                else{
                    this.monster.dexMax ="";
                }
                
                if(this.monster.dodge >= this.statLimit+(5*this.monster.level)){
                    this.monster.dodge = this.statLimit+(5*this.monster.level)
                    this.monster.dodgeMax = "MAX";
                }  
                else{
                    this.monster.dodgeMax ="";
                }
                
                if(this.monster.intel >= this.statLimit+(5*this.monster.level)){
                    this.monster.int = this.statLimit+(5*this.monster.level)
                    this.monster.intMax = "MAX";
                }  
                else{
                    this.monster.intMax ="";
                }  
                
                if(this.monster.speed >= this.statLimit+(5*this.monster.level)){
                    this.monster.speed = this.statLimit+(5*this.monster.level)
                    this.monster.speedMax = "MAX";
                }  
                else{
                    this.monster.speedMax ="";
                }  */   
                this.monster.attackMax ="";
                this.monster.defenceMax ="";
                this.monster.dexMax ="";
                this.monster.dodgeMax ="";
                this.monster.intMax ="";
                this.monster.speedMax ="";                
            }
            
            //ui
            // anim
            //this.heroUI.alpha += (1 - this.heroUI.alpha) * 0.01;

            

            
            
 
       
                    try {
                        
                       var damage = Math.round((this.monster.attack*this.monster.attack) / (this.monster.attack + this.tarHero.defence));
                        var strDiff = this.monster.attack - this.monster.dex
                        if(strDiff < 0){
                           strDiff  = 0
                        }
                        //var dmgJitter = Math.floor(Math.random() * Math.round(this.tarHero.attack/2))-strDiff;                
                        var lowDmg = damage-strDiff;
                        if(lowDmg  <= 0){
                            lowDmg = 1;
                        }                     
                       var damageStats = "Deal "+lowDmg+"~"+(damage+(strDiff*2)-strDiff)+" damage to \n"+this.tarHero.name    
                                     
                    }
                    catch (e) {
                       var damage = Math.round((this.monster.attack*this.monster.attack) / (this.monster.attack + this.hero[this.monster.target].defence));
                        var strDiff = this.monster.attack - this.monster.dex
                        if(strDiff < 0){
                           strDiff  = 0
                        }
                        //var dmgJitter = Math.floor(Math.random() * Math.round(this.tarHero.attack/2))-strDiff;                
                        var lowDmg = damage-strDiff;
                        if(lowDmg  <= 0){
                            lowDmg = 1;
                        }                      
                       var damageStats = "Deal "+lowDmg+"~"+(damage+(strDiff*2)-strDiff)+" damage to \n"+this.hero[this.monster.target].name    

                    }       


            
            
            for(var i = 0; i < 100; i++){
                if(this.damageUI[i].alpha > 0){
                    
                    this.damageUI[i].alpha += (0 - this.damageUI[i].alpha) * 0.03; 
                    this.damageUI[i].y-=this.damageUI[i].upward;
                    this.damageUI[i].x -= this.damageUI[i].slide;
                    if(this.damageUI[i].upward > -10){
                      this.damageUI[i].upward --;
                    }
                    
                }

            }             
            
            }

        }
        , selectTarget: function (){
          
          var targetVal = 0;
          var targetKey = this.monster.target;
          for(var i = 0; i < 3; i++){

            if(targetVal <= this.hero[i].threat && this.hero[i].hp > 0){
              targetKey = i;
              targetVal = this.hero[i].threat;

            }
          } 

            

   
            
          return targetKey;
        }
        , monAttack: function (unit){
                this.actionStats.alpha = 1;
                this.monster.width =this.monster.tarSize+10;
                this.monster.height =this.monster.tarSize+10; 
          
                if(this.monster.isFlying){
                    this.monster.y += (this.monster.origY - this.monster.y) * 0.1;
                    this.monster.x += (this.monster.origX - this.monster.x) * 0.1;
                    this.actionStats.text = "\n"+this.monster.name+" lands and loses "+Math.round((unit.intel*unit.level)*0.5)+" SPD!";
                    this.monster.isFlying = false;                     
                }
                else{
                    this.monster.y += ((-400)- this.monster.y) * 0.1;
                    //this.monster.x += (this.monster.origX - this.monster.x) * 0.1;                    
                }          
            this.monster.y +=25;
            //target is dead
            if(this.hunter.hp <= 0){
              //this.monster.target = Math.floor(Math.random() * 3)
              //this.monAttack(unit, this.monster.target)
                //this.monster.target = this.selectTarget();

            }
            else{
                var ran = Math.floor(Math.random() * 4)+1;
                //this.attackSound[ran].play();
                
                //extra attacks
                if(unit.extraAttack > 0){
                    unit.extraAttack--
                }
                else{
                    unit.stamina = 0; 
                    this.monster.actionTimer++;
                }
                
                
                var dodge = Math.floor(Math.random() * (this.hunter.dodge));
                var hit = Math.floor(Math.random() * (unit.dex));
                var attack = unit.attack;

                var damage = Math.round((attack*attack) / (attack + this.hunter.defence));
              
                var strDiff = unit.attack - unit.dex
                if(strDiff < 0){
                   strDiff  = 0
                }
                var dmgJitter = Math.floor(Math.random() * (strDiff*2))-strDiff;


                damage  = damage + dmgJitter;
                if(damage < 1){
                   damage = 1;
                }
                var damage = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].attack
                // special attack effects
                var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                switch(monSkillType){
                }                  
                if(this.hunter.isBlocking || this.hunter.blockDuration > 0){

                  
                  damage = 0;
                }
                console.log("Take "+damage)
                //damage = att * att / (att + def) 

                if(hit >= dodge){
                    // take damage
                    console.log("Am I still blocking "+this.hunter.blockDuration)
                    this.hunter.hp -= damage  
                    this.monster.score -= damage;
                    this.monster.isAttacking = false;
                    

                    this.hunter.y += 50;
                    this.hunter.tint = 0xff0000;
                    this.hunter.hurtTimer=25;

 
                    //this.actionStats.length
                    var length = this.actionStats.text.length                   
                    //this.actionStats.text = "SCRATCH!"
                    //this.attackIcon.loadTexture("attackIcon1");
                   

                    try {
                        if(this.tarHero.heroID != this.hunter.heroID){
                          //this.updateInfo(this.hunter)  
                        }                
                    }
                    catch (e) {
                    // statements to handle any exceptions

                    }       
                    
                    if(this.hunter.hp <= 0){
                        var length = this.actionStats.text.length   
                        //this.monster.target = this.selectTarget();
                    }



                    
                }
                if(hit < dodge){
                    for(var i = 0; i < 100; i++){
                        if(this.damageUI[i].alpha <= 0.01){

                            this.damageUI[i].tint = 0xFFFFFF;
                            this.damageUI[i].fontSize = 16;
                            this.damageUI[i].text  = "DODGE";
                            this.damageUI[i].x = this.hunter.x;
                            this.damageUI[i].y = this.hunter.y;
                            this.damageUI[i].alpha = 1;
                            i = 100; 
                        }
                    }
                    var length = this.actionStats.text.length                   
                    this.actionStats.text = "\n"+this.monster.name+" attacks "+this.hunter.name+" and misses! ";
                         

                    
                    
                            

                    try {
                        if(this.tarHero.heroID != this.hunter.heroID){
                          //this.updateInfo(this.hunter)  
                        }                
                    }
                    catch (e) {
                    // statements to handle any exceptions

                    }                      
                } 
                
         


                
                
            }
          
          

        }
        , setHero: function (unit, heroID){
            this.hero[unit].heroID = heroID;
            
            this.hero[unit].hp = weapon[heroID].hp;
            this.hero[unit].role = weapon[heroID].role;
            this.hero[unit].name = weapon[heroID].name;
            this.hero[unit].swordName = weapon[heroID].swordName;
            this.hero[unit].shieldName = weapon[heroID].shieldName;
            this.hero[unit].speed = weapon[heroID].weight;
          
            this.hero[unit].cost = weapon[heroID].cost;
            this.hero[unit].comboPattern = weapon[heroID].comboPattern;
            this.hero[unit].skill = weapon[heroID].skill;
            if(weapon[heroID].ultSkill == null){
              
            }
            else{
              this.hero[unit].ultSkill = weapon[heroID].ultSkill 
            }
            
            this.hero[unit].ultSkillMax =  weapon[heroID].ultSkillMax;
            
            this.hero[unit].counterTimer = 0;
            console.log(heroID)
            this.hero[unit].loadTexture(weapon[heroID].name);
            this.hero[unit].width = 250;
            this.hero[unit].height = 250;
            this.hero[unit].stamina = 100;
            this.hero[unit].maxhp = this.hero[unit].hp

            
            
            
        }
        , setMonster: function (monID,level){
          
            this.monsterstamUI.width = 0;
            
            this.monster.loadTexture(monster[this.biome][monID].name);
            localStorage.setItem("monName",monster[this.biome][monID].name);
            var ran = Math.floor(Math.random() * 6)+1;
            //small
            if(ran >= 1 && ran <= 3){
              localStorage.setItem("monSize","small");
              this.monster.width = 400;
              this.monster.height = 400;
            }
            //medium
            if(ran >= 4 && ran <= 5){
              localStorage.setItem("monSize","medium");  
              this.monster.width = 600;
              this.monster.height = 600;
            }                  
            //large
            if(ran == 6){
              localStorage.setItem("monSize","large");  
              this.monster.width = 800;
              this.monster.height = 800;
            }             

            this.monster.tarSize = this.monster.width;    
            this.monster.isAttacking = false;

            
          
        
            //this.monster.badWidth = (this.monster.width/2)+ran;
          
              
          
            this.monsterstamUI.alpha = 0;
            //this.monsterhpUI.alpha = 1;
            this.monster.monID = monID;
            this.monster.alpha = 1;
            this.monster.stamina = 0;
            this.monster.actionTimer = 0
            this.monster.isFlying = false; 
            this.monster.isCasting = false;
            this.monster.angleSpeed = 0;
            this.monster.angle = 0;          
          
            
            this.monster.stamina = 1;
            this.monster.alpha = 1;
          
            this.monster.level = level;
            this.monster.hp = monster[this.biome][monID].hp;
            this.monster.maxhp = this.monster.hp;    
            this.monster.mp = monster[this.biome][monID].mp;
            this.monster.attack = monster[this.biome][monID].attack;
            this.monster.defence = monster[this.biome][monID].defence;
          
            this.monster.slashDef = monster[this.biome][monID].slashDef;
            this.monster.stabDef = monster[this.biome][monID].stabDef;
            this.monster.bashDef = monster[this.biome][monID].bashDef;
          
            this.monster.dex = monster[this.biome][monID].dex;
            this.monster.dodge = monster[this.biome][monID].dodge;
            this.monster.intel = monster[this.biome][monID].intel;
            this.monster.speed = monster[this.biome][monID].speed;
            this.monster.target = Math.floor(Math.random() * 3);
          
            this.monster.skill = monster[this.biome][monID].skill;
          
            this.monster.attackPattern = monster[this.biome][monID].attackPattern;
            this.monster.attackPattern = ""
            var ran = Math.floor(Math.random() * 3)+3;
            for(var i = 0; i < ran; i++){
                var ran2 = Math.floor(Math.random() * 3)+1;
                this.monster.attackPattern += ran2;
            }
            this.monster.attackPattern +="0";
            console.log("pattern "+this.monster.attackPattern)

      
            
            
        }
        , scroll: function(event){
            
            //var direction = event.deltaY/10
            //console.log(this.parent)
            
        }
        , getTip: function () {
            //var ran = Math.floor(Math.random() * 3)+1;
            this.tipCount++
            if(this.tipCount > 3){
                this.tipCount = 1
            }
            this.tip[1].alpha = 0;
            this.tip[2].alpha = 0;
            this.tip[3].alpha = 0;
            this.tip[this.tipCount].alpha = 1;
            
        } 
        , hideTip: function (tip) {
            tip.alpha = 0;
            
        }       
        , ultMove: function (unit) {
          if(unit.alpha >= 1){
            
            var damage = this.hero[0].ultSkill.attack;
            this.monster.hp -= damage;
             for(var i = 0; i < 100; i++){
                if(this.damageUI[i].alpha <= 0.01){
                    this.damageUI[i].upward = 20;
                    var ran = Math.floor(Math.random() * 2);
                    if(ran == 0){
                      this.damageUI[i].slide = 5  
                    }
                    else{
                      this.damageUI[i].slide = -5
                    }
                    this.damageUI[i].tint = 0xFFFFFF;
                    this.damageUI[i].fontSize = 100;
                    if(damage <= 0){
                      this.damageUI[i].text  = "RESIST";
                    }
                    else{
                      this.damageUI[i].text  = damage;
                    }

                    this.damageUI[i].x = this.monster.x;
                    this.damageUI[i].y = this.monster.y;
                    this.damageUI[i].alpha = 1;
                    i = 100; 
                }
              }            
            unit.alpha = 0;            
          }

        }
        , spendCharges: function () {
          
          this.hunter.ultCharge += this.hunter.charge
          if(this.hunter.ultCharge > 6){
            this.hunter.ultCharge = 6;
          }
          this.hunter.charge = 0
          this.monster.attackAction[0].hp = 1+(1*this.hunter.charge);
        }
        , onClick: function (unit, pointer) {

          if(((this.hunter.stamina-unit.cost)  >= 0 || unit.role == 2) && unit.stamina >= this.hunter.maxStamina){
            
            if( unit.role == 2){
              //this.hunter.stamina -= unit.cost;
            }
            else{
              //this.hunter.stamina -= unit.cost;
            }
            
              
            if(true ){
              
                
                



                
                unit.width =unit.tarSize+25;
                unit.height =unit.tarSize+25;       

                 
                
                
                

                
                var crit =0
                
                this.monster.hitBy = unit.heroID;
                //console.log(unit.stamina);
                ////console.log("Monster hit by "+this.monster.hitBy );   
                switch(unit.role){
                  case 1:
                    var ran = Math.floor(Math.random() * 4)+1;
                    if(!this.attackSound[ran].isPlaying){
                        //this.attackSound[ran].play();
                    } 
                    var dodge = Math.floor(Math.random() * (this.monster.dodge));
                    //console.log(this.monsterstamUI.width +" "+(this.monsterstamUIBad.x-(this.monsterstamUIBad.width/2)))
                    
                     dodge = 1000;  
                    //rhythm timing
                    var buffer = 100
                    var miss = false
                    for(var i=0; i < 1; i++){
                    var buffer = 150; 
                    this.monster.attackAction[0].loadTexture(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name);
                    var damage = 0;
                    //attack type
                    var hunterAttack = this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]];
                    var attackType =""
                    //hero is ulting
                    if(this.hunter.ulting){

                      
                    }
                    else{
                      switch(hunterAttack.attackType){
                        case 0:
                          var attack = hunterAttack.attack

                          damage = Math.round((attack*attack) / (attack + this.monster.slashDef));   
                          if(damage > 0){
                            localStorage.setItem('hasSlashed',1);
                          }
                          attackType ="SLASH"
                          this.rhythemUI.loadTexture("attackHit-slash");
                          break;
                        case 1:
                          var attack = hunterAttack.attack
                          damage = Math.round((attack*attack) / (attack + this.monster.stabDef));   
                          if(damage > 0){
                            localStorage.setItem('hasStabbed',1);
                          }                          
                          attackType ="STAB"
                          this.rhythemUI.loadTexture("attackHit-stab");
                          break;
                        case 2:
                          var attack = hunterAttack.attack
                          damage = Math.round((attack*attack) / (attack + this.monster.bashDef));     
                          if(damage > 0){
                            localStorage.setItem('hasBashed',1);
                          }                          
                          attackType ="BASH"
                          this.rhythemUI.loadTexture("attackHit-bash");
                          break;                        
                      }
                    }
                    attackType =""
                    //damage cant be reduced lower than 1
                    if(damage <= 0){
                       damage = 0;
                    }
                    //damage = 1
                    //console.log(damage+" asd "+dodge);
                      var diff = this.rhythmArrow.x - this.monster.attackAction[i].x 
                      if(this.monster.attackAction[i].hp <= 1){
                        this.monster.attackAction[i].miss = true;    
                      }
                      
                     
                      if( diff <= buffer && this.monster.attackAction[i].alpha > 0.5){
                        var ran = Math.floor(Math.random() * 4)+1;
                        if(!this.attackSound[ran].isPlaying){
                            //this.attackSound[ran].play();
                        }                         
                        this.rhythemUI.alpha = 1;
                        //this.rhythemUI.loadTexture("attackHit");
                        this.dialougeTimer = 100;
                        dodge = 0
                        //damage = 0
                        //this.monster.attackAction[i].alpha = 0;
                        this.monster.attackAction[i].hp--;       
                        //this.hunter.comboKey++; 
                        if(this.hunter.comboKey >= this.hero[0].comboPattern.length){
                          //this.hunter.comboKey = 0;
                        }                        
                        if(diff <= buffer/5){
                          this.rhythemUI2.alpha = 1
                          damage *= 2;
                          
                        }
                        if(this.hunter.ulting){
                          //this.hunter.ulting = false;
                          this.map.alpha = 1;
                          //damage = this.hero[0].ultSkill.attack;
                          this.monster.attackAction[i].miss = true;    
                          this.rhythemUI.loadTexture("attackHit"); 
                          if(this.hero[0].ultSkill.attackType == 0){
                            this.slashAttack.alpha = 1;
                            this.slashAttack.x = 0;
                            this.slashAttack.y = this.monster.y
                            this.slashAttack.width= 10;
                            this.slashAttack.height = 10;                            
                          }
                          if(this.hero[0].ultSkill.attackType == 1){
                            this.hunter.ultingStab = this.hunter.ultMul;
                           }
                         
                          if(this.hero[0].ultSkill.attackType == 2){
                            this.hunter.ultingBash = 25;
                           this.monster.hp -= this.hero[0].ultSkill.attack*this.hunter.ultMul;
                           damage =  this.hero[0].ultSkill.attack*this.hunter.ultMul;
                           for(var k = 0; k < 100; k++){
                              if(this.damageUI[k].alpha <= 0.01){
                                  this.damageUI[k].upward = 20;
                                  var ran = Math.floor(Math.random() * 2);
                                  if(ran == 0){
                                    this.damageUI[k].slide = 5  
                                  }
                                  else{
                                    this.damageUI[k].slide = -5
                                  }
                                  this.damageUI[k].tint = 0xFFFFFF;
                                  this.damageUI[k].fontSize = 200;
                                  if(damage <= 0){
                                    this.damageUI[k].text  = "RESIST";
                                  }
                                  else{
                                    this.damageUI[k].text  = this.hero[0].ultSkill.attack*this.hunter.ultMul;
                                  }

                                  this.damageUI[k].x = this.monster.x;
                                  this.damageUI[k].y = this.monster.y;
                                  this.damageUI[k].alpha = 1;
                                  k = 100; 
                              }
                            }                              
                          }


                        }                        
                        
                      }
                      else{
                        this.rhythemUI.alpha = 1;
                        this.rhythemUI2.alpha = 0;
                        this.rhythemUI.loadTexture("attackMiss");     
                        this.dialougeTimer = 100;
                        damage = 0;
                        this.map.alpha = 1;
                      }

                    }            
                    //damage += this.hunter.charge;
                    if(!this.hunter.ulting){
                      this.monster.hp -= damage  
                    
                    
                     for(var i = 0; i < 100; i++){
                        if(this.damageUI[i].alpha <= 0.01){
                            this.damageUI[i].upward = 20;
                            var ran = Math.floor(Math.random() * 2);
                            if(ran == 0){
                              this.damageUI[i].slide = 5  
                            }
                            else{
                              this.damageUI[i].slide = -5
                            }
                            this.damageUI[i].tint = 0xFFFFFF;
                            this.damageUI[i].fontSize = 100;
                            if(damage <= 0 && dodge == 0){
                              this.damageUI[i].text  = "RESIST";
                            }
                            else if(dodge == 1000 && damage <= 0){
                              this.damageUI[i].text  = "DODGED";
                            }
                            else{
                              this.damageUI[i].text  = damage+"\n"+attackType;
                            }
                            
                            this.damageUI[i].x = this.monster.x;
                            this.damageUI[i].y = this.monster.y;
                            this.damageUI[i].alpha = 1;
                            i = 100; 
                        }
                      }
                    }
                    if(this.hunter.isBlocking){
                      this.hunter.isBlocking = false;
                      this.hero[1].stamina = 0;
                    }
                
                    unit.y -= 100;
                    unit.stamina = 0;
                    this.hunter.stamina -= unit.cost;
                    
                    
                    

                    break;
                  case 3:
                      console.log("BLOCKED")
                      if(!this.shieldSound.isPlaying){
                          //this.shieldSound.play();
                      }  
                    
                      unit.y -= 100;
                      //unit.stamina = 0;  
                      //console.log("width "+)
                      
                      for(var i=0; i < 1; i++){
                        var buffer = 150;
                        var diff = this.monster.blockAction[i].x - this.rhythmArrow.x
                        if(this.monster.moveDecide != 0 && this.monster.blockAction[i].hp <= 1){
                          this.monster.blockAction[i].miss = true; 
                        }  
                        
                        if( diff <= buffer && this.monster.blockAction[i].alpha > 0.5 && !this.monster.isAttacking){
                          if(!this.shieldSound.isPlaying){
                              //this.shieldSound.play();
                          }                            
                          this.rhythemUI.alpha = 1;
                          this.rhythemUI.loadTexture("blockHit");
                          this.dialougeTimer = 100;
                         ;
                          if(this.monster.blockAction[i].hp > 1){
                             this.monster.blockAction[i].hp--
                             
                              this.monster.blockAction[i].pushBack = 30                             
                          }
                          else{
                              this.monster.blockAction[i].hp--;
                             
                          }  
                          this.hunter.blockDuration = 100;


                          
                          //perfect block
                          if(diff <= (buffer/5)){
                           this.rhythemUI2.alpha = 1
                           //this.hunter.charge = this.hero[2].skill[0].attack;
                           this.hunter.charge += 1;
                            if(this.hunter.charge > this.chargeUI.length){
                              this.hunter.charge= this.chargeUI.length;
                            }                            
                          }
                          else{                            
                            //this.hunter.charge += 1;
                            if(this.hunter.charge > this.chargeUI.length){
                              //this.hunter.charge= this.hero[2].skill[0].attack;
                            }
                          }
                          //this.monster.blockAction[i].alpha = 0;

                          
                        }
                        else{
                          this.rhythemUI.alpha = 1;
                          this.rhythemUI2.alpha = 0;
                          this.rhythemUI.loadTexture("blockMiss");     
                          this.dialougeTimer = 100;
                        }
             
                      } 
                      
                      if(!this.hunter.isBlocking){
                        //this.hunter.isBlocking  = true;
                      }
                      else{
                        //this.hunter.isBlocking = false;
                        //unit.stamina = 0;
                      }
                      //this.hunter.armor++;
                      if(this.hunter.armor > this.hero[2].maxArmour){
                        //this.hunter.armor = this.hero[2].maxArmour;
                      }
                      
                    break;
                  case 2:
                      if(unit.stamina > 0){
                        unit.loadTexture("emptyBot");
                        this.hunter.hp = 3;
                        if(this.hunter.hp > 3){
                          this.hunter.hp = 3
                        }
                        unit.y -= 100;
                        unit.stamina = 0;
                        unit.cost = 100;                        
                      }

                      
                      //this.hunter.stamina -= unit.cost;
                    break;
                    
                }
                

                
            
            }

          }
          else{
              
                if(unit.gender == 1 ){
                    //this.notRM.play()
                }
              else{
                  //this.notRF.play()
              }
          }
            
        //this.game.state.start('win');ter
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