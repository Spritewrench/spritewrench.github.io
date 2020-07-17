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
            this.map = this.add.sprite(0, 0, 'textBG');
            this.map.width = this.game.width;
            this.map.height = this.game.height;        
            this.map.alpha = 1;             

            

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
            this.party = "10-11-12";
            
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
                this.hero[i] = this.add.sprite(x+dist-0, this.game.height-450, 'player');
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
                
                var race = (Math.floor(Math.random() * 3) +1)*10;
                var hero = Math.floor(Math.random() * 3)
                this.setHero(i, parseInt(this.party[i]));
                this.hero[i].role = role;
                role++;
                //this.hero[i].cost = 1;
          
                if(i == 0){

                  this.hero[i].x = this.game.width/2
                  this.hero[i].y = (this.game.height/2)-300   
                  this.hero[i].origX = this.hero[i].x
                  this.hero[i].origY = this.hero[i].y   
                  this.hero[i].holderY = this.hero[i].origY
                  this.hero[i].width = 50000
                  this.hero[i].height = 50000                  
                }
                
                //on click
                this.hero[i].inputEnabled = true;
                if(i == 0){
                  this.hero[i].events.onInputDown.add(this.onClick, this);   
                }
                         
                dist+=250;
                
                this.hero[i].aggroMultiplyer = 0;
                
            }
            
            //place heart
            this.heart = [];
            var dist= -250;
            for(var i = 0; i < 3; i++){
              this.heart[i] =  this.add.sprite(x+dist-100, this.game.height-350, 'heart');
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
            
            this.monster.hp = 100;
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
            this.hunter.maxStamina = 50;
            this.hunter.isBlocking = false;            
          


            
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
            this.monsterhpUI = this.add.sprite(this.monster.x-this.monster.width/2, this.monster.y+(this.monster.height/2)-90, 'bg7');
            //this.monsterhpUI.width = this.monsterhpUI.tarSize;
            this.monsterhpUI.width = 100;
            this.monsterhpUI.height = 20;
            this.monsterhpUI.tint = 0xb43939               
            

          
            this.setMonster(10,1)
            
            
            this.monster.target = Math.floor(Math.random() * 3);
       
           
          
            if(this.monster.race != 9 && this.monster.race != 10){
            var length = this.actionStats.text.length   

            }
            
            this.monsterRhythmUI = this.add.sprite(0, this.monster.y+300, 'bg7');
            this.monsterRhythmUI.width = this.game.width;
            this.monsterRhythmUI.height = 200;  
            this.monsterRhythmUI.alpha = 0.5;            
          
            this.monster.blockAction = [];
            
            this.rhythmCount = 1;
            for(var i=0; i < this.rhythmCount ; i++){
              this.monster.blockAction[i] = this.add.sprite(this.game.width+100, this.monsterRhythmUI.y+this.monsterRhythmUI.height/2, 'rhythmIcon1');
              this.monster.blockAction[i].height = 200;
              this.monster.blockAction[i].width = 200;
              this.monster.blockAction[i].anchor.setTo(0.5, 0.5);
              this.monster.blockAction[i].alpha = 1;
              this.monster.blockAction[i].rhythmType = 1
              this.monster.blockAction[i].speed = this.monster.speed
              this.monster.blockAction[i].miss = false;
              //this.attackIcon.alpha = 0                 
            }   
       
             
                        
          
            this.rhythmArrow =  this.add.sprite(this.game.width/2-400, this.monsterRhythmUI.y+this.monsterRhythmUI.height+50, 'stamArrow');
            this.rhythmArrow.anchor.setTo(0.5, 0.5);
            this.rhythmArrow.width = 200;                
            this.rhythmArrow.height = 200;            
            this.rhythmArrow.origY = this.monsterRhythmUI.y+this.monsterRhythmUI.height+50
            
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
            
            
            
            //this.game.input.mouse.mouseWheelCallback=this.scroll;
            //this.game.canvas.addEventListener("mousewheel", this.scroll.bind(this), true)
            
            
        }
        , update: function () {
              // localStorage.setItem('state','lose')
              // this.game.state.start('preloader',true,true) 
            this.game.scale.refresh(); 
            if(this.rhythmArrow.y > this.rhythmArrow.origY){
              this.rhythmArrow.y --;
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
              this.rhythemUI.alpha += (0 - this.rhythemUI.alpha) * 0.1; 
              if(this.rhythemUI.alpha <= 0.1){
                this.rhythemUI.alpha = 0;
                this.rhythemUI.y = 300
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
                //this.hero[i].width += (this.hero[i].tarSize - this.hero[i].width) * 0.05; 
                //this.hero[i].height += (this.hero[i].tarSize - this.hero[i].height) * 0.05; 
                
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
                console.log("LOSE");
                //localStorage.setItem('state','lose')
                this.game.state.start('lose');
            }

            
            //monster dead
            if(this.monster.hp <= 0){
                this.monster.alpha += (0 - this.monster.alpha) * 0.05;
                this.monsterstamUIFlash.alpha = 0;
                this.monsterstamUI.alpha = 0;
                this.monsterhpUI.alpha = 0;
                
                
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
                    this.setMonster(10,1)//this.setMonster((ranMon*10),level)

                    
                    
                }
            }
            if(this.monster.hp > 0){
                //console.log("checking")
                // block duration
                
                
                //rhythm actions
                for(var i=0; i < this.rhythmCount; i++){
                  
                  if(this.monster.blockAction[i].x <= this.rhythmArrow.x || this.monster.blockAction[i].miss){
                    if(this.monster.blockAction[i].alpha == 1){
                     
                    }
                    //this.monster.blockAction[i].x -= this.monster.speed
                    if(this.monster.blockAction[i].alpha > 0.1){
                      this.monster.blockAction[i].y -= 1;
                      this.monster.blockAction[i].alpha += (0 - this.monster.blockAction[i].alpha) * 0.1; 
                      
                    }
                    else{
                      if(this.monster.blockAction[i].rhythmType == 1){
                        var currentStam= this.monster.stamina
                        this.monAttack(this.monster) 
                        this.monster.stamina=currentStam; 

                        this.hunter.blockDuration = 0                        
                      }
                      this.monster.blockAction[i].miss = false;
                      this.monster.blockAction[i].alpha = 1;
                      this.monster.blockAction[i].x = this.game.width+100
                      this.monster.blockAction[i].y = this.monsterRhythmUI.y+this.monsterRhythmUI.height/2
                      var rhythm = this.monster.dex+this.hero[0].dex;
                      var items = []
                      for(var k =0; k < this.monster.dex; k++){
                          items[k] = 1;
                      }
                      var newEnd = this.monster.dex+this.hero[0].dex
                      for(var k =items.length; k < newEnd; k++){
                          items[k] = 2;
                      }                     
                      var blockType = Math.floor(Math.random() * (rhythm-1))+1;
                     
                      this.monster.blockAction[i].rhythmType = items[blockType]
                      this.monster.blockAction[i].loadTexture("rhythmIcon"+this.monster.blockAction[i].rhythmType);
                    }
                    //this.monster.blockAction[i].y -= this.monster.speed
                  }
                  else {
                    //console.log(this.monster.blockAction[i].speed)
                    this.monster.blockAction[i].x -= this.monster.speed
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
                this.monsterhpUI.y = this.monster.y+(this.monster.height/2)-150

                //this.monsterstamUIAttack.tint = "blue";
                //this.monsterstamUIBad.y = this.monster.y+(this.monster.height/2)-120
                
                this.monsterstamUI.x = this.monster.x-this.monster.width/2
                this.monsterhpUI.x = this.monster.x-this.monster.width/2   
                
                
  


                
                this.monsterstamUI.width = (this.monster.stamina/100)*this.monster.tarSize;

              
                
                
                
                var hpUI = (this.monster.hp/this.monster.maxhp)*this.monster.tarSize;
                this.monsterhpUI.width += (hpUI - this.monsterhpUI.width) * 0.05;
                
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
                        switch(this.monster.monID){
                            case 10:
                            case 11:
                                //workup
                                this.actionStats.text = "*GARGGLES*";
                                this.attackIcon.loadTexture("attackWarn");
                                
                            
                                break;
                            case 20:                  
                                //finger flex
                                this.actionStats.text = "\n"+this.monster.name+" cracks its knuckes...";
                                break;
                            case 30:                  
                                //haste
                                
                                if(!this.monster.isFlying  ){
                                    this.actionStats.text = "\n"+this.monster.name+" unfurls its wings..."; 
                                }
                                else{
                                    this.actionStats.text = "\n"+this.monster.name+" seems to be getting tired...";
                                }                                
                                break;  
                            case 40:                  
                                //haste
                                this.actionStats.text = "\n"+this.monster.name+" starts sniffing around...";
                                break;                          

                            case 50:                    
                                //chilling breath
                                this.actionStats.text = "\n"+this.monster.name+" starts muttering a strange incantation...";
                                this.monster.isCasting = true;
                                
                                break;
                            case 60:                   
                                //trap

                                break;                        
                            case 70:                  
                                //roar

                                break;                        


                        } 
 
                    
                    }
                    if(this.monster.y-this.monster.origY < 0.5){
                        this.monsterTimer = this.origmonsterTimer;
                        if(this.monster.actionTimer >= this.monster.mp){
                            this.monSkill(this.monster, this.monster.target)

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

            

            
            
            var race =""
            switch(this.monster.race){
                   case 1:
                        race = "Goblin"
                   break;
                   case 2:
                        race = "Gremlin"
                   break;
                   case 3:
                        race = "Imp"
                   break;
                   case 4:
                        race = "Boggart"
                   break;  
                   case 5:
                        race = "Spook"
                   break;                      
            }   
       
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
                    
                    this.damageUI[i].alpha += (0 - this.damageUI[i].alpha) * 0.02; 
                    this.damageUI[i].y-=2;
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
        , monSkill: function (unit, target){
            this.actionStats.alpha = 1;
            //target is dead
            if(this.hunter.hp <= 0){
              //this.monster.target = Math.floor(Math.random() * 3)
              //this.monAttack(unit, this.monster.target)
                //this.monster.target = this.selectTarget();
            }
            else{
                //this.badAbility.play();
                this.monster.width =this.monster.tarSize+10;
                this.monster.height =this.monster.tarSize+10;    
                                
                unit.stamina = 0;
                unit.actionTimer = 0;
                var ran = Math.floor(Math.random() * 4)-1;
                unit.mp = 2 + ran
                var length = this.actionStats.text.length                   
                
                switch(unit.monID){
                    case 10:
                    case 11:
                        //workup
                        //unit.attack += Math.round((unit.intel*unit.level)*0.25);
                        this.actionStats.text = "ACID SPIT!";
                        this.attackIcon.loadTexture("attackIcon2");
                        var ran = Math.floor(Math.random() * 4)+1;
                        //this.attackSound[ran].play();

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
                        damage *= 3
                        //take damage
                        this.hunter.hp -= damage  
                        //this.monster.tarSize += Math.round((unit.intel*unit.level))*5
                        break;
                    case 20:                  
                        //finger flex
                        //unit.dex += Math.round((unit.intel*unit.level)*0.25);

                        unit.extraAttack = Math.round((unit.intel)*0.25);
                        this.actionStats.text = "\n"+this.monster.name+" creepily flexes their fingers and gains "+Math.round((unit.intel)*0.25)+" free attack(s)!";
                        this.monster.width += 25
                        this.monster.height += 25
                        unit.stamina = this.monster.tarSize;
                        break;
                    case 30:                  
                        //take flight
                        //this.monster.y -= 300;
                        if(!this.monster.isFlying){
                            unit.speed += Math.round((unit.intel*unit.level)*0.25);
                            this.actionStats.text = "\n"+this.monster.name+" takes flight and gains "+Math.round((unit.intel*unit.level)*0.5)+" SPD!";
                            this.monster.isFlying = true;                            
                        }
                        else{
                            //unit.speed -= Math.round((unit.intel*unit.level)*0.25);
                            //this.actionStats.text = "\n"+this.monster.name+" lands and loses "+Math.round((unit.intel*unit.level)*0.5)+" SPD!";
                            //this.monster.isFlying = false;                            
                        }

                        break;  
                    case 40:                  
                        //steal
                        this.monster.y += 25;
                        if(this.ratioNum > 0){


                            this.monster.y = this.hero[this.monster.target].y
                            this.monster.x = this.hero[this.monster.target].x
                            this.ratioNum -= Math.round((unit.intel*unit.level)*10);
                            if(this.ratioNum < 0){
                                this.ratioNum = 0
                            }
                            this.monster.hp+=Math.round((unit.intel*unit.level)*0.25);
                            this.actionStats.text = "\n"+this.monster.name+" steals & eats some of party's rations! It heals "+Math.round((unit.intel*unit.level)*0.25)+" HP";
                        }
                        else{
                            this.actionStats.text = "\n"+this.monster.name+" grumbles 'cheapskates!'";                            
                        }
                        break;                          

                    case 50:                    
                        //chilling breath
                        
                        this.monster.isCasting = false;
                        this.monster.angleSpeed = 10;
                        for(var j = 0; j < 3; j++){   
                            
                            this.hero[j].hp -= unit.intel*unit.level;
                            this.actionStats.text = "\n"+this.monster.name+"'s chilling breath touched "+this.hero[j].name+" for "+(unit.intel*unit.level)+" damage!";
                            this.hero[j].y += 50;
                            for(var i = 0; i < 100; i++){
                                if(this.damageUI[i].alpha <= 0.01){

                                    this.damageUI[i].tint = 0xFFFFFF;
                                    this.damageUI[i].fontSize = 16;
                                    this.damageUI[i].text  = unit.intel*unit.level;
                                    this.damageUI[i].x = this.hero[j].x;
                                    this.damageUI[i].y = this.hero[j].y;
                                    this.damageUI[i].alpha = 1;
                                    i = 100;                            
                                }
                            }
                        }

                        break;
                    case 60:                   
                        //trap
                        this.hunter.speed -= unit.intel*unit.level;
                        if(this.hunter.speed < 1){
                           this.hunter.speed = 1; 
                        }
                        this.actionStats.text = "\n"+this.monster.name+" throws a net on "+this.hunter.name+" and slows them down by "+(unit.intel*unit.level);
                        break;                        
                    case 70:                  
                        //roar
                        for(var i = 0; i < 3; i++){                            
                            this.hero[i].stamina -= unit.intel*unit.level*25;
                            if(this.hero[i].stamina < 0){
                               this.hero[i].stamina = 0; 
                            }
                        } 
                        this.actionStats.text = "\n"+this.monster.name+" roars in rage! Your party cowers in fear and loses stamina";
                        break;                        


                }

             
            }
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
                damage = 1
                if(this.hunter.isBlocking || this.hunter.blockDuration > 0){

                  
                  damage = 0;
                }
              
                //damage = att * att / (att + def) 

                if(hit >= dodge){
                    // take damage
                    this.hunter.hp -= damage  
                    this.monster.score -= damage;
                    
                    

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
            this.hero[unit].race = Math.floor(heroID/10);
            
            this.startingExp = 50
            this.hero[unit].exp = this.startingExp;
            this.hero[unit].prevExp = this.hero[unit].exp
            this.hero[unit].level = 1;
            this.hero[unit].cost = 2;
            this.hero[unit].level = Math.round(0.1*Math.sqrt(this.hero[unit].exp));
            this.hero[unit].currentLevel = this.hero[unit].level;

            
            this.hero[unit].counterTimer = 0;
            
            this.hero[unit].hpMax = "";
            this.hero[unit].attackMax = "";
            this.hero[unit].attackMax = "";
            this.hero[unit].defenceMax = "";
            this.hero[unit].dexMax = "";
            this.hero[unit].dodgeMax = "";
            this.hero[unit].intMax = "";  
            this.hero[unit].speedMax = "";         
            this.hero[unit].alpha = 0;  
            
            

          

            
          
            switch(heroID){
                case 10:
                    this.hero[unit].name = "Lilith, The First Blood"
                    this.hero[unit].gender = 0;
                    this.hero[unit].hp = 10;
                    this.hero[unit].role = 1;
                    this.hero[unit].attack = 3;
                    this.hero[unit].defence = 3;
                    this.hero[unit].dex = 1;
                    this.hero[unit].dodge = 1;
                    this.hero[unit].intel = 1;
                    this.hero[unit].speed = 2;
                    this.hero[unit].ability = "Taunt: \nLose "+this.hero[unit].cost+" HP and gain "+50*this.hero[unit].intel*this.hero[unit].level+" threat";
                    this.hero[unit].cost = 0;

                    break;
                case 11:
                    this.hero[unit].name = "Adam, The Second Blood"
                    this.hero[unit].gender = 1;
                    this.hero[unit].hp = 10;
                    this.hero[unit].role = 3;
                    this.hero[unit].attack = 2;
                    this.hero[unit].defence = 1;
                    this.hero[unit].dex = 2;
                    this.hero[unit].dodge = 1;
                    this.hero[unit].intel = 1;
                    this.hero[unit].speed =2;
                    this.hero[unit].ability = "Blood Heal: \nLose "+this.hero[unit].cost+" HP and heal \nyour other party members by "+this.hero[unit].intel*this.hero[unit].level+" HP";  
                    this.hero[unit].cost = 0;
                    break;
                case 12:
                    this.hero[unit].name = "Abel, The Third Blood"
                    this.hero[unit].gender = 1;
                    this.hero[unit].hp = 10;
                    this.hero[unit].role = 2;
                    this.hero[unit].attack = 4;
                    this.hero[unit].defence = 1;
                    this.hero[unit].dex = 2;
                    this.hero[unit].dodge = 2;
                    this.hero[unit].intel = 1;
                    this.hero[unit].speed = 2;
                    this.hero[unit].ability = "Quicken: \nLose "+this.hero[unit].cost+" HP and gains "+(this.hero[unit].intel*this.hero[unit].level)+" DEX";  
                    this.hero[unit].maxArmour = 10;
                    this.hero[unit].cost = 0;
                    break;                    
                case 20:     
                    this.hero[unit].name = "Zion, The Holy One"
                    this.hero[unit].gender = 1;
                    this.hero[unit].hp = 4;
                    this.hero[unit].role = 3;
                    this.hero[unit].attack = 2;
                    this.hero[unit].defence = 5;
                    this.hero[unit].dex = 1;
                    this.hero[unit].dodge = 3;
                    this.hero[unit].intel = 2;
                    this.hero[unit].speed = 3;
                    this.hero[unit].ability = "Self \nHeal: Gain "+Math.round((25*this.hero[unit].intel*this.hero[unit].level)/2)+" threat and heals "+Math.round((this.hero[unit].intel*this.hero[unit].level)/2)+" HP";
                    break;
                case 21:
                    this.hero[unit].name = "Denali, The Steep One"
                    this.hero[unit].gender = 1;
                    this.hero[unit].hp = 5;
                    this.hero[unit].role = 2;
                    this.hero[unit].attack = 4;
                    this.hero[unit].defence = 5;
                    this.hero[unit].dex = 3;
                    this.hero[unit].dodge = 1;
                    this.hero[unit].intel = 1;
                    this.hero[unit].speed = 2;
                    this.hero[unit].ability = "Sharpen: Gain "+(this.hero[unit].intel*this.hero[unit].level)+" STR";
                    break; 
                case 22:
                    this.hero[unit].name = "Everest, The Impassable One"
                    this.hero[unit].gender = 0;
                    this.hero[unit].hp = 6;
                    this.hero[unit].role = 1;
                    this.hero[unit].attack = 3;
                    this.hero[unit].defence = 5;
                    this.hero[unit].dex = 2;
                    this.hero[unit].dodge = 2;
                    this.hero[unit].intel = 1;
                    this.hero[unit].speed = 4;
                    this.hero[unit].ability = "Insult: \nGain "+25*this.hero[unit].intel*this.hero[unit].level+" threat and gains "+this.hero[unit].intel*this.hero[unit].level+" DEF";
                    break;                     
                case 30:
                    this.hero[unit].name = "Daniel, The Lucky"
                    this.hero[unit].gender = 1;
                    this.hero[unit].hp = 5;
                    this.hero[unit].role = 1;
                    this.hero[unit].attack = 2;
                    this.hero[unit].defence = 2;
                    this.hero[unit].dex = 5;
                    this.hero[unit].dodge = 5;
                    this.hero[unit].intel = 1;
                    this.hero[unit].speed = 2;
                    this.hero[unit].ability = "Gibe: \nGain "+25*this.hero[unit].intel*this.hero[unit].level+" threat and gains "+this.hero[unit].intel*this.hero[unit].level+" EVA";
                    break;
                case 31:
                    this.hero[unit].name = "Mary, The Swift"
                    this.hero[unit].gender = 0;
                    this.hero[unit].hp = 4;
                    this.hero[unit].role = 2;
                    this.hero[unit].attack = 3;
                    this.hero[unit].defence = 2;
                    this.hero[unit].dex = 5;
                    this.hero[unit].dodge = 3;
                    this.hero[unit].intel = 3;
                    this.hero[unit].speed = 2;
                    this.hero[unit].ability = "Haste: \nGain "+(this.hero[unit].intel*this.hero[unit].level)+" SPD";
                    break;
                case 32:
                    this.hero[unit].name = "Esther, The Caring"
                    this.hero[unit].gender = 0;
                    this.hero[unit].hp = 5;
                    this.hero[unit].role = 3;
                    this.hero[unit].attack = 2;
                    this.hero[unit].defence = 2;
                    this.hero[unit].dex = 5;
                    this.hero[unit].dodge = 1;
                    this.hero[unit].intel = 2;
                    this.hero[unit].speed = 4;
                    this.hero[unit].ability = "Critical Heal: \nHeals the most injured  "+(this.hero[unit].intel*this.hero[unit].level)+" HP";  
                    break;                  
                  
            }
            this.hero[unit].loadTexture(this.hero[unit].heroID);
            this.hero[unit].stamina =100;
            this.hero[unit].maxhp = this.hero[unit].hp

            
            
            
        }
        , setMonster: function (monID,level){
          
            this.monsterstamUI.width = 0;
            
            this.monster.loadTexture("mon");  
            this.monster.width = 800;
            this.monster.height = 800;
            this.monster.tarSize = this.monster.width;    

            
          
        
            //this.monster.badWidth = (this.monster.width/2)+ran;
          
              
          
            this.monsterstamUI.alpha = 0;
            this.monsterhpUI.alpha = 1;
            this.monster.monID = monID;
            this.monster.alpha = 1;
            this.monster.stamina = 0;
            this.monster.race = Math.floor(monID/10);
            this.monster.actionTimer = 0
            this.monster.isFlying = false; 
            this.monster.isCasting = false;
            this.monster.angleSpeed = 0;
            this.monster.angle = 0;          
          
            
            this.monster.stamina = 1;
            this.monster.alpha = 1;
          
            this.monster.level = 1;
            this.monster.hp = 3;
            this.monster.maxhp = this.monster.hp;    
            this.monster.mp = 2;
            this.monster.attack = 1;
            this.monster.defence = 1;
            this.monster.dex = 3;
            this.monster.dodge = 0;
            this.monster.intel = 1;
            this.monster.speed = 5;
            this.monster.teamwork = 0; 
            this.monster.target = Math.floor(Math.random() * 3);

      
            
            
        }
        , beginCombo: function () {
            
            for(var i =0; i <this.hero.length; i++){
                if(this.hero[i].stamina >= this.hunter.maxStamina){
                    
                    
                    switch(this.hero[i].role){
                        case 1:

                            var threatStore = 0;
                            var count = 0;
                            for(var j=0; j<this.hero.length;j++){
                                if(this.hero[j].stamina >= this.hunter.maxStamina){
                                    threatStore += this.hero[j].threat;
                                    count++

                                }                                
                            }
                            this.hero[0].threat = 0;
                            this.hero[1].threat = 0;
                            this.hero[2].threat = 0;
                            this.hero[i].threat = count*250+(this.hero[i].level*threatStore);                            
                        break;
                        case 2:

                            var attackStore = 0;
                            for(var j=0; j<this.hero.length;j++){
                                if(this.hero[j].stamina >= this.hunter.maxStamina){
                                    attackStore += this.hero[j].attack;                                
                                }                                
                               
                                
                            }
                            var damage = this.hero[i].level*attackStore
                            this.monster.hp -= damage;
                            for(var k = 0; k < 100; k++){
                                if(this.damageUI[k].alpha <= 0.01){                            
                                    this.damageUI[k].tint = 0xFFFFFF;
                                    this.damageUI[k].fontSize = 32;
                                    this.damageUI[k].text  = damage;
                                    this.damageUI[k].x = this.monster.x;
                                    this.damageUI[k].y = this.monster.y;
                                    this.damageUI[k].alpha = 1;
                                    k = 100;
                                }
                            }  
                         
                                                        
                        break;
                        case 3:
                            //console.log("Healer")
                            for(var j=0; j<this.hero.length;j++){
                                if(this.hero[j].stamina >= this.hunter.maxStamina){                                                             
                                    this.hero[j].hp = this.hero[j].maxhp;
                                    var diff = this.hero[j].maxhp -this.hero[j].hp
                                    for(var k = 0; k < 100; k++){
                                        if(this.damageUI[k].alpha <= 0.01){                            
                                            this.damageUI[k].tint = 0x99FF33
                                            this.damageUI[k].fontSize = 16;
                                            this.damageUI[k].text  = diff+" HP";
                                            this.damageUI[k].x = this.hero[j].x;
                                            this.damageUI[k].y = this.hero[j].y;
                                            this.damageUI[k].alpha = 1;
                                            k = 100;
                                        }
                                    }
                                }
                                
                            }                          
                        break;                            
                                                        
                        
                    }
                    
                    
                }
            }
            for(var i =0; i <this.hero.length; i++){
                this.hero[i].stamina = 0;
            }
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
        , onClick: function (unit, pointer) {
          console.log(unit.role)
          console.log(unit.cost)
          
          if(((this.hunter.stamina-unit.cost)  >= 0 || unit.role == 2) && unit.stamina >= this.hunter.maxStamina){
            
            if( unit.role == 2){
              //this.hunter.stamina -= unit.cost;
            }
            else{
              //this.hunter.stamina -= unit.cost;
            }
            
              
            if(true ){
              
                
                



                
                //unit.width =unit.tarSize+25;
                //unit.height =unit.tarSize+25;       

                 
                
                
                

                
                var crit =0
                
                this.monster.hitBy = unit.heroID;
                console.log(unit.stamina);
                ////console.log("Monster hit by "+this.monster.hitBy );   
                switch(unit.role){
                  case 1:
                    unit.y -= 100;
                    unit.stamina = 0;  
                    this.rhythmArrow.y += 25
                    var buffer = 50
                    for(var i=0; i < this.rhythmCount; i++){
                      var diff = this.monster.blockAction[i].x - this.rhythmArrow.x
                      
                      switch(this.monster.blockAction[i].rhythmType){
                        case 2:
                          
                          var damage = 0                          

                          if( diff <= buffer && this.monster.blockAction[i].alpha > 0.5){
                            var ran = Math.floor(Math.random() * 4)+1;
                            if(!this.attackSound[ran].isPlaying){
                                this.attackSound[ran].play();
                            }                              
                            this.rhythemUI.alpha = 1;
                            this.rhythemUI.loadTexture("attackHit");
                            this.dialougeTimer = 100;
                            

                            //blood splatter
                            var ran = Math.floor(Math.random() * 2);
                            this.bloodSplatter[ran].alpha = 1;

                            var ran2 = Math.floor(Math.random() * 10)+32;
                            this.bloodSplatter[ran].width = 100
                            this.bloodSplatter[ran].height = 100

                            var ran3 = Math.floor(Math.random() * 100)-50;
                            this.bloodSplatter[ran].x = this.monster.x+ran3

                            var ran3 = Math.floor(Math.random() * 100)-50;
                            this.bloodSplatter[ran].y = this.monster.y+ran3                     

                            this.monster.hp -= 1                            
                          }
                          else{
                            var ran = Math.floor(Math.random() * 4)+1;
                            if(!this.attackSound[ran].isPlaying){
                                this.attackSound[ran].play();
                            }   
                            
                            this.rhythemUI.alpha = 1;
                            this.rhythemUI.loadTexture("attackMiss");     
                            this.dialougeTimer = 100;
                            this.monster.blockAction[i].miss = true;
                          }                          
                          break;
                        case 1:
                          if( diff <= buffer && this.monster.blockAction[i].alpha > 0.5){
                            if(!this.shieldSound.isPlaying){
                                this.shieldSound.play();
                            }                            
                            this.rhythemUI.alpha = 1;
                            this.rhythemUI.loadTexture("blockHit");
                            this.dialougeTimer = 100;
                            this.hunter.blockDuration = 100;
                          
                          }
                          else{
                            this.rhythemUI.alpha = 1;
                            this.rhythemUI.loadTexture("blockMiss");     
                            this.dialougeTimer = 100;
                            this.monster.blockAction[i].miss = true;
                          }                      
                          break;
                      }
                    }
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