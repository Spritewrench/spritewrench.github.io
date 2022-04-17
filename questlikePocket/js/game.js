(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {

            localStorage.setItem("huntNum",parseInt(localStorage.getItem("huntNum"))+1);
            this.glowFilter = new Phaser.Filter.Glow(this.game);
            if( (parseInt(localStorage.getItem("monCount"))+1 )%5 == 0 ){
              try{
                const loadOpts = {
                  didLoad: function(response) {
                    // interstitial loaded successfully
                  },
                  didFailToLoad: function(error, response) {
                      // interstitial failed to load
                  }
                };
      
                //Tapdaq.loadInterstitial("questlike-interstitial", loadOpts);
                //Tapdaq.showInterstitial("questlike-interstitial");
              }
              catch(error){
                //alert(error)
              }
              
            }      
            this.huntTimer = 30000;
            localStorage.setItem("letsCarve",0);
            localStorage.setItem('hasSlashed',0);
            localStorage.setItem('hasStabbed',0);                            
            localStorage.setItem('hasBashed',0);
            var center = 250
            var x = (this.game.width / 2)
                , y = this.game.height / 2;
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            this.hitFlag = 0;
            this.game.stage.backgroundColor = "#160c2c";
            //this.map = this.add.sprite(0, 0, 'BG'+localStorage.getItem("Markerbiome")+"_parallax");
            this.map = this.add.sprite(0, 0, 'BG'+localStorage.getItem("Markerbiome"));

            this.map.origX = this.map.x
            this.map.width = this.game.width;
            this.map.height = this.game.height;        
            this.map.alpha = 1;             
            
            this.legendOverlay = this.add.sprite(0, 0, 'legendOverlay');
            this.legendOverlay.width = this.game.width;
            this.legendOverlay.height = this.game.height;           
            this.legendOverlay.alpha = 0;  
          
            this.biome =parseInt(localStorage.getItem("Markerbiome"))
            localStorage.setItem("shinyGet",0);

            this.battleMusic = this.add.audio('Battle'); 

            this.cameraSnap = this.add.audio('cameraSnap'); 
   
            this.ping = this.add.audio('ping');
            this.menuClicked = false;
            
            this.attackSound = [];
            this.spellSound = [];
            this.spellSound[i] = this.add.audio('spell'+i); 


            this.slashSound = [];
            this.stabSound = [];
            this.bashSound = [];
            for(var i = 1; i <= 2;i++){
                this.slashSound[i] = this.add.audio('slash'+i); 
                this.stabSound[i] = this.add.audio('stab'+i); 
                this.stabSound[i].volume = 0.4;
                this.bashSound[i] = this.add.audio('bash'+i); 
                //this.spellSound[i] = this.add.audio('spell'+i); 
            }            
            this.ultSound = [];  
                  



            this.chargeFail = this.add.audio('chargeFail'); 

            this.beastBass = this.add.audio('monCry-1-1-beat'); 

            this.shieldSound = this.add.audio("beastBass"); 

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
            
              
            //plugins
            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            
            this.game.plugins.soundAnalyse = this.game.plugins.add(Phaser.Plugin.SoundAnalyse);
            //console.log(this.game.plugins.soundAnalyse)
            
          
           
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
            if (localStorage.getItem(weapon[parseInt(this.party[0])].id+"-Level") === null) {
              localStorage.setItem(weapon[parseInt(this.party[0])].id+"-Level",1)
            }
            this.currentWepLevel = parseInt(localStorage.getItem(weapon[parseInt(this.party[0])].id+"-Level"))  
            if (localStorage.getItem(weapon[parseInt(this.party[0])].id+"-isShiny") === null) {
              localStorage.setItem(weapon[parseInt(this.party[0])].id+"-isShiny",0)
            }            
            this.isWepShiny = parseInt(localStorage.getItem(weapon[parseInt(this.party[0])].id+"-isShiny"))  
            
            
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
            
            

            
           
  


            
           
            var i = 0;
            //track weapon durability
            //////////console.log(this.party[0])
            
            if (localStorage.getItem(weapon[parseInt(this.party[0])].id+"-CurrentDurability") === null) {
              localStorage.setItem(weapon[parseInt(this.party[0])].id+"-CurrentDurability",weapon[parseInt(this.party[0])].durability)
            }          
            this.currentDurability = parseInt(localStorage.getItem(weapon[this.party[0]].id+"-CurrentDurability"));
            //////console.log("The durability "+this.currentDurability)
            if(weapon[this.party[0]].id == 0 || weapon[this.party[0]].id == 1 || weapon[this.party[0]].id == 2 || weapon[this.party[0]].id == 3 || this.isWepShiny==1){
              //this.craftButton.loadTexture("craftNo") 
            }
            else{
              //this.currentDurability -= 1;
              if(this.currentDurability <  1){
                this.currentDurability= 1
              }              
            }

            
            if(this.currentDurability <= (weapon[parseInt(this.party[0])].durability)/2 ){
              localStorage.setItem("lowDurability",1)
              //localStorage.setItem("RankedUp",0);
            }          
          
          
            localStorage.setItem(weapon[parseInt(this.party[i])].id+"-CurrentDurability", this.currentDurability)  
            //this.currentDurability = parseInt(localStorage.getItem(weapon[parseInt(this.party[i])].id+"-CurrentDurability"));
            
            //charge UI
            /*
            this.chargeUI = [];
            var dist = -1*(this.game.width/2);
            for(var i = 0; i < 6; i++){
              this.chargeUI[i] = this.add.sprite(x+dist,  this.game.height-250, 'charge');
              dist += (this.game.width/6);
              this.chargeUI[i].width = 75;
              this.chargeUI[i].height = 75;
            }            
            */
            this.chargeBarUI = this.add.sprite(25, (this.game.height/2)+125, 'bg7');
            this.chargeBarUI.width = 0//this.game.width;
            this.chargeBarUI.tint = "0xFFCE00"
            this.chargeBarUI.height = 25;  
            //this.chargeBarUI.alpha = 0.5;  

            this.chargeBarPipUI = this.add.sprite(-10, (this.game.height/2)+80, 'chargePip');
            this.chargeBarPipUI.width = 100;
            this.chargeBarPipUI.height = 100;  
            this.chargeBarPipUI.alpha =0;
            //this.chargeBarPipUI.alpha = 0.5;              

            this.chargeBarUIText = this.add.text(20, (this.game.height/2)+140, "1",{font:'LondrinaSolid-Black'});
            //this.chargeBarUIText.anchor.setTo(0.5, 0.5);
            this.chargeBarUIText.fill= '#fff';
            this.chargeBarUIText.fontSize = 22; 
            this.chargeBarUIText.align = "center"  
            this.chargeBarUIText.alpha = 0;           

            //place hero tiles
            this.hero = [];
            var dist= -125;
            var role = 1;
            for(var i = 0; i < 3; i++){
                this.hero[i] = this.add.sprite(x+dist-0, this.game.height-130, 'player');
                this.hero[i].anchor.setTo(0.5, 0.5);
                this.hero[i].origX = this.hero[i].x
                this.hero[i].origY = this.hero[i].y
                this.hero[i].holderY = this.hero[i].origY
                //this.hero[i].width = 250;
                //this.hero[i].height = 250;
                this.hero[i].tarSize = this.hero[i].width
                this.hero[i].sizeHolder = this.hero[i].tarSize

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
                dist+=125;
                
                this.hero[i].aggroMultiplyer = 0;
                
                
            }
            
            //part foliage
            this.loadGrass1 = this.add.sprite(0, 0, 'loadGrass');
            this.loadGrass1.width = this.game.width;
            this.loadGrass1.height = this.game.height;   
    
            this.loadGrass2 = this.add.sprite(this.game.width, 0, 'loadGrass');
            this.loadGrass2.width = this.game.width;
            this.loadGrass2.height = this.game.height;    
            this.loadGrass2.scale.x *= -1;     
            
          
            //place heart
            this.heart = [];
            var dist= -125;
            var dist2 = 500
            for(var i = 0; i < 3; i++){
              this.heart[i] =  this.add.sprite(this.hero[i].x, this.game.height+100+dist2, 'heart');
              this.heart[i].anchor.setTo(0.5, 0.5);
              this.heart[i].origY = this.hero[i].y+100
              //this.heart[i].width = 200;                
              //this.heart[i].height = 200;              
              dist+=125;
              dist2 += dist2;
            }
            
            //place all buttons to center
            this.hero[0].x = x - 50
            this.hero[0].origX = this.hero[0].x

            this.hero[1].x = x
            this.hero[1].origX = this.hero[1].x

            this.hero[2].x = x
            this.hero[2].origX = this.hero[2].x                        
            
          
            //place all buttons but block offscreen

            this.hero[1].y = this.game.height+100;
            this.hero[1].origY = this.game.height+100;            
            this.hero[1].holderY = this.hero[1].origY
            
            //place monster
            this.monsterTimer = 100;
          
            this.origmonsterTimer = this.monsterTimer;

            this.monsterOutline =this.add.sprite(x+10, y-100, 'player');
            this.monsterOutline.anchor.setTo(0.5, 0.5);
            this.monsterOutline.alpha = 0;
            
            this.monsterShadow =this.add.sprite(x+10, y-100, 'player');
            this.monsterShadow.anchor.setTo(0.5, 0.5);
            this.monsterShadow.alpha = 0;
            
            if(this.hero[0].element > 0){
              this.monEmitter = this.add.emitter(x, y, 999);
              this.monEmitter.enableBody = true;
              this.monEmitter.type = Phaser.GROUP;      
              this.monEmitter.makeParticles('elem-'+this.hero[0].element);
              this.monEmitter.minParticleSpeed.setTo(-500, -500);
              this.monEmitter.maxParticleSpeed.setTo(500, 500);
              this.monEmitter.minParticleScale = 0.5;
              this.monEmitter.maxParticleScale = 0.5;
              this.monEmitter.gravity = 100;                
            }
             

            this.monster =this.add.sprite(x+10, y-100, 'player');
            this.monster.anchor.setTo(0.5, 0.5);
            this.monster.origX =  this.monster.x
            this.monster.origY =  this.monster.y         


            this.sweatDrop = this.add.sprite(this.monster.x, this.monster.y, 'sweatDrop');
            this.sweatDrop.anchor.setTo(0.5, 0.5);
            this.sweatDrop.alpha = 0;

            this.runSmoke =this.add.sprite(x+10, y-100, 'runSmoke');
            this.runSmoke.anchor.setTo(0.5, 0.5);
            this.runSmoke.origX =  this.monster.x
            this.runSmoke.origY =  this.monster.y   
            this.runSmoke.alpha = 0;              
            
            //this.monster.hp = 100;
            this.monster.stamina = 0;
            //ult emmitter

            //this.monEmitter.flow(1000, 10, 5, 5)
            
            this.monAngry = this.add.sprite(this.monster.x, this.monster.y, 'monAngry'); 
            this.monAngry.anchor.setTo(0.5, 0.5);
            this.monAngry.alpha = 0; 
            
            
            //this.monEmitter.start(false, 1500, 450);
            
            this.monsterstamUI = this.add.sprite(this.monster.x-100, this.monster.y+this.monster.height/2, 'bg7');
            this.monsterstamUI.width = 0;
            this.monsterstamUI.height = 5;  
            this.monsterstamUI.alpha = 0;  
          
            this.monsterstamUIFlash = this.add.sprite(this.monster.x-100, 50, 'bg7');
            
            this.monsterstamUIFlash.width = 0;
            this.monsterstamUIFlash.height = 20; 
            this.monsterstamUIFlash.alpha = 0;
        
          
            this.rhythemUI = this.add.sprite(x, 0, 'blank');
            this.rhythemUI.anchor.setTo(0.5, 0.5);
            //this.rhythemUI.width = 1500;
            //this.rhythemUI.height = 1500;
            this.rhythemUI.alpha = 0      

            this.rhythemUI2 = this.add.sprite(this.rhythemUI.x-100, 0, 'blockPerfect');
            this.rhythemUI2.anchor.setTo(0.5, 0.5);
            this.rhythemUI2.width = 100;
            this.rhythemUI2.height = 30;
            
            this.rhythemUI2.angle = -15;
            this.rhythemUI2.alpha = 0;              
            

            
     
            this.slashAttack = this.add.sprite(0, 0, 'bg7');
            this.slashAttack.alpha  = 0;
            
            var dist = 0;

          
            this.hunter = new Object; 
            this.hunter.gender = 0;
            this.hunter.name = "you";
            this.hunter.hp = parseInt(localStorage.getItem("hunterHP"));
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
            this.hunter.pushBack = this.hero[0].speed*5//25;
            this.hunter.critMul = 1;
            //this.unitStats = this.add.bitmapText(20, this.heroUI.height+10, 'minecraftia', '',16);
            //this.unitStats.setStyle(style);
            

            
            //this.actionStats.text = 
            
        
            
   
            
            //this.monStats = this.add.bitmapText(this.game.width-300, this.monUI.height+10, 'minecraftia', '',16);           
            
            
            
            
          
        

            
            this.damageUI =[];
            for(var i = 0; i < 100; i++){
                
                this.damageUI[i] = this.add.bitmapText(0, 0, 'minecraftia', '',16);
                this.damageUI[i].alpha = 0;
                this.damageUI[i].anchor.setTo(0.5, 0.5);
                this.damageUI[i].align = "center"

            }          

            
            if(parseInt(localStorage.getItem("GuildGift")) == 1 && this.biome == -1){
              localStorage.setItem("GuildGift",2)
            }
            
            //load Monster
            
            
          //target

          
          
          var d = new Date();
          var n = d.getHours();
          var day = d.getDay();
          var date = d.getDate()
          var timeOfDay = 0;
          if(n >= 0 && n <= 6){
            timeOfDay = 0;
          }
          if(n > 6 && n <= 12){
            timeOfDay = 1;
          }  
          if(n > 12 && n <= 18){
            timeOfDay = 2;
          }
          if(n > 18 && n <= 23){
            timeOfDay = 3;
          }            
          var rarityChance = Math.floor(Math.random() * 100);
          var rarity = 0;
          //rare - 20%
          if(rarityChance  >= 0 && rarityChance  <= 20){
            rarity = 2;
          }
          //uncommon - 30%
          if(rarityChance  > 20 && rarityChance  <= 50){
            rarity = 1;
          }  
          //common - 50%
          if(rarityChance  > 50 && rarityChance  <= 99){
            rarity = 0;
          }       
          
          //uncommon not unlocked
          if(parseInt(localStorage.getItem("uncommonUnlock")) == 0){
            
            if(rarity > 0){
              
              rarity = 0;
            }
          }
          //rare not unlocked
          if(parseInt(localStorage.getItem("rareUnlock")) == 0){
            if(rarity > 1){
              
              rarity = 1;
            }            
          }     
          this.monbaseExp = 10*(1+rarity)
          
          //rank barring access 
          //parseInt(localStorage.getItem("currentRank"));
          
          this.rankHolder = Math.floor(parseInt(localStorage.getItem("currentRank"))/10);
          if(this.rankHolder > 2){
            //rank cap
            this.rankHolder = 2;
          }    
          //specified rarity and rank connection above 
          //This code no longer needed
          //if(rarity > this.rankHolder){
            //rarity = this.rankHolder;
          //}
          
          
          //var ranEncounter = encounter[this.biome][timeOfDay][rarity]
          
          var encounterID = parseInt(localStorage.getItem("targetID"))//ranEncounter[Math.floor(Math.random() * ranEncounter.length)]
          
          ////console.log(" time of day "+timeOfDay+" ID "+encounterID+" rarity "+rarity)
          //monster surge
          if(parseInt(localStorage.getItem("surgeUnlock")) != 0){
            var monSurge = Math.floor(Math.random() * 5);
            //monSurge = 0;
            //console.log("Mon Surge "+monSurge)  
            var size = monster[this.biome].filter(function(value) { 
            ////console.log(value)
              return value !== undefined 
            }).length-1
                 
            if(monSurge == 0){
              if(date > size){

                date -= Math.floor(date/(size))*(size)
                if(date <= 0){
                  date = 1;
                }              
              }      

              //console.log("surge "+date)             
              //encounterID = date

            }
          }          

          //legendary check
          this.legend= false;
          var huntingTip = parseInt(localStorage.getItem("huntingTip"))-1
          //huntingTip = 0;
          if(huntingTip > -1 && huntingTip == this.biome || gameConfig.legendDebug){
             var ran = Math.floor(Math.random() * gameConfig.LegendChance)
             if(gameConfig.legendDebug){
              ran = 0;
             }
             
            if(ran == 0){
              this.legend= true;
              //encounterID = 99
              rarity = 3;
              localStorage.setItem("huntingTip",0)
              localStorage.setItem("legendFound"+this.biome,1)
              this.legendOverlay.alpha = 1;
            }
            //this.hubBonus3.alpha = 1;
            //this.hubBonus3.loadTexture('hubBonus3-'+huntingTip)
          }          
          //encounterID = 4;
          //revenge!
          this.revengeHunt = parseInt(localStorage.getItem("revengeHunt"));
          if(this.revengeHunt == 1){
            ////////console.log("marked "+parseInt(localStorage.getItem("markedMon")))
            encounterID = parseInt(localStorage.getItem("markedMon"));
            localStorage.setItem("revengeHunt",0)
            if(encounterID == 99){
              this.legend= true;
              encounterID = 99
              localStorage.setItem("huntingTip",0)
              localStorage.setItem("legendFound"+this.biome,1)
              this.legendOverlay.alpha = 1;              
            }
          }

          if(encounterID == 99){
            this.legend= true;
            //encounterID = 99
            //localStorage.setItem("huntingTip",0)
            //localStorage.setItem("legendFound"+this.biome,1)
            this.legendOverlay.alpha = 1;              
          }

          this.encounterID = encounterID;
          ////////console.log(ranEncounter+" "+timeOfDay+" "+rarity)
          //weather effect rolls go here
          //specific event effects go here
          ////////console.log("rarityRoll "+rarityChance+" "+rarity)
          ////////console.log("encounterID "+this.biome+" "+encounterID)
            this.monsterstamUI = this.add.sprite(this.monster.x-this.monster.width/2, this.monster.y+(this.monster.height/2)-100, 'bg7');
            this.monsterstamUI.height = 10;
            
          
            //this.monster.x-(this.monster.width)
            this.monsterhpUI=this.add.sprite(this.game.width/2-100, (this.game.height/2), 'monHeart');
            this.monsterhpUI.anchor.setTo(0.5, 0.5);
            this.monsterhpUI.width = 50;
            this.monsterhpUI.height = 50;      
            this.monsterhpUI.alpha = 0
          
            this.monLevelText = this.add.text(this.monsterhpUI.x, this.monsterhpUI.y-15, "1",{font:'LondrinaSolid-Black'});
            this.monLevelText.anchor.setTo(0.5, 0.5);
            this.monLevelText.fill= '#fff';
            this.monLevelText.fontSize = 22; 
            this.monLevelText.align = "center" 
            this.monLevelText.alpha = 0;
          
            this.monHPText = this.add.text(this.game.width/2-50, this.monsterhpUI.y-15, "100/100",{font:'LondrinaSolid-Black'});
            this.monHPText.fill= '#fff';
            this.monHPText.fontSize = 28;  
            this.monHPText.alpha = 0;
          
            this.monHPText2 = this.add.text(this.monster.x, this.monster.y, "100/100",{font:'LondrinaSolid-Black'});
            this.monHPText2.fill= '#fff';
            this.monHPText2.fontSize = 28;  
            this.monHPText2.alpha = 0;
          

           
            
            //encounterID= 3;
            this.monAppear = 150;
            
            if(localStorage.getItem("firstVisit-tut-fight") === null ) {
              localStorage.setItem("firstVisit-tut-fight",1);
              //encounterID = 1;
               this.encounterID = 1//encounterID;
              this.setMonster(1,1)
            }
            else{
              this.setMonster(encounterID,1)
            }
            this.monster.rarity = rarity;
            this.monCry = this.add.audio('monCry-'+this.biome+'-'+this.encounterID);
            //this.monCry.volume = 1.5;
            
            //this.setMonster(1,1)
            
            
            this.monster.target = Math.floor(Math.random() * 3);
       
           
          

            
            this.monsterRhythmUI = this.add.sprite(0, (this.game.height/2)+50, 'bg7');
            this.monsterRhythmUI.width = this.game.width;
            this.monsterRhythmUI.height = 10;  
            this.monsterRhythmUI.alpha = 1;   
          
            this.monsterRhythmUIBuffer1 = this.add.sprite(this.monsterRhythmUI.width/2, this.monsterRhythmUI.y, 'bg7');
            this.monsterRhythmUIBuffer1.tint = 0xFFA07A 
            this.monsterRhythmUIBuffer1.width = 50//gameConfig.tileBuffer;
            this.monsterRhythmUIBuffer1.height = 50;  
            this.monsterRhythmUIBuffer1.alpha = 0
          
            this.monsterRhythmUIDodgeBuffer1 = this.add.sprite(this.monsterRhythmUIBuffer1.x+50, this.monsterRhythmUI.y, 'bg7');
            this.monsterRhythmUIDodgeBuffer1.tint = 0xFFFB00
            this.monsterRhythmUIDodgeBuffer1.width = 25;
            this.monsterRhythmUIDodgeBuffer1.height = 50;    
            this.monsterRhythmUIDodgeBuffer1.alpha = 0;             
          
            this.monsterRhythmUIBuffer2 = this.add.sprite(this.monsterRhythmUI.width/2-gameConfig.tileBuffer, this.monsterRhythmUI.y, 'bg7');
            this.monsterRhythmUIBuffer2.tint = 0xFFA07A 
            this.monsterRhythmUIBuffer2.width = 50//gameConfig.tileBuffer;
            this.monsterRhythmUIBuffer2.height = 50;       
            this.monsterRhythmUIBuffer2.alpha = 0
          
            this.monsterRhythmUIDodgeBuffer2 = this.add.sprite((this.monsterRhythmUIBuffer2.x), this.monsterRhythmUI.y, 'bg7');
            this.monsterRhythmUIDodgeBuffer2.tint = 0xFFFB00
            this.monsterRhythmUIDodgeBuffer2.width = 25;
            this.monsterRhythmUIDodgeBuffer2.height = 50;    
            this.monsterRhythmUIDodgeBuffer2.alpha = 0;   
          
            this.monster.blockAction = [];
            this.monster.moveKey = 0
            this.hunter.comboKey = 0
            
            this.soundAnalyseSprite = this.game.plugins.soundAnalyse.add.soundAnalyseSprite(
              this.game,
              0/*x*/, 
              this.monsterRhythmUI.y-45/*y*/, 
              this.game.width/*width*/, 
              100/*height*/, 
              "battle"+this.monster.rank/*sound key*/, 
              false/*auto play*/, 
              this._onDecodeFinish/*decode finish callback*/, 
              this/*callback context*/
              );  
                   

            this.soundAnalyseSprite.showFrequencyDomainChartBars(false);
            this.soundAnalyseSprite.showFrequencyDomainChartUniform(true);
            this.soundAnalyseSprite.isLooping(true);
            this.soundAnalyseSprite.setVolume(0.7)
            console.log(this.soundAnalyseSprite.volume())
            //this.soundAnalyseSprite.volume(0)
            //reactive audio
            this.beatKey = 1;
            this.beatKeyLimit=1
            this.reactiveBeatOrig = this.add.audio('reactBeat'+this.monster.rank); 
            this.reactiveBeat = [];

            switch(this.monster.rank){
              case 1:
                for(var i = 1; i <= 60;i++){
                  this.beatKeyLimit++;
                  //this.reactiveBeat[i] = this.add.audio('reactBeat'+i); 
                  this.reactiveBeatOrig.addMarker('marker'+i,i, 1, 1, false); 
                  
                }                   
                break;
              case 2:
                for(var i = 1; i <= 65;i++){
                  this.beatKeyLimit++;
                  //this.reactiveBeat[i] = this.add.audio('reactBeat'+i); 
                  this.reactiveBeatOrig.addMarker('marker'+i,i, 1, 1, false); 
                  
                }                   
                break;
              case 3:
                for(var i = 1; i <= 30;i++){
                  this.beatKeyLimit++;
                  //this.reactiveBeat[i] = this.add.audio('reactBeat'+i); 
                  this.reactiveBeatOrig.addMarker('marker'+i,i, 1, 1, false); 
                  
                }                   
                break;
              case 4:
                for(var i = 1; i <=55;i++){
                  this.beatKeyLimit++;
                  //this.reactiveBeat[i] = this.add.audio('reactBeat'+i); 
                  this.reactiveBeatOrig.addMarker('marker'+i,i, 1, 1, false); 
                  
                }                   
                break;                                                
            }
            
            this.beatKey = Math.floor(Math.random() * (this.beatKeyLimit))+1//Math.floor(Math.random() * (Math.ceil(this.huntTimer/60)))+1; 
            console.log("starting key "+this.beatKey)
            this.soundAnalyseSprite.addMarker('startHere',1, (this.beatKeyLimit-0), 0.7, false); 
                     
            //skill Glow
            
            this.skillGlow = this.add.sprite(0, 0, 'skillGlow');
            this.skillGlow.anchor.setTo(0.5, 0.5);  
            this.skillGlow.alpha = 0;  
            this.skillGlow.origWidth = this.skillGlow.width;
            this.skillGlow.origHeight = this.skillGlow.height;

            this.monster.moveDecide = this.monster.attackPattern[this.monster.moveKey];
            var dist = []
            dist[0]= 0
            dist[1]= 0
            dist[2]= 0
            var placeKey = 0
            for(var i=0; i < 2; i++){
              this.monster.blockAction[i] = this.add.sprite(this.game.width+100+dist[i], this.monsterRhythmUI.y+(this.monsterRhythmUI.height/2), 'attackIcon1');
              
              this.monster.blockAction[i].startPoint = this.game.width+100
              this.monster.blockAction[i].x = this.monster.blockAction[i].startPoint
              //dist += 500
              //////console.log(this.monster.attackPattern)
              this.monster.blockAction[i].hp = 1//this.monster.skill[this.monster.attackPattern[placeKey]].hp
              placeKey++;
              if(placeKey < this.monster.attackPattern.length){
                placeKey++;    
                if(placeKey >= this.monster.attackPattern.length){
                  placeKey = 0;
                }

              }
              this.monster.blockAction[i].height = 85;
              this.monster.blockAction[i].width = 85;
              this.monster.blockAction[i].anchor.setTo(0.5, 0.5);
              this.monster.blockAction[i].alpha = 1;
              this.monster.blockAction[i].pushBack = 0;
              this.monster.blockAction[i].speed = this.monster.rightSpeed
              this.monster.blockAction[i].stopper = 0;
              this.monster.blockAction[i].stopped= false;
              this.monster.blockAction[i].angleSpeed = 2;
              //this.attackIcon.alpha = 0                 
            }   
         
            this.monster.attackAction = [];
            
            var dist = -100  
            this.attackLimit = 1        
            for(var i=0; i < 10; i++){
              this.monster.attackAction[i] = this.add.sprite(0+dist, this.monsterRhythmUI.y+(this.monsterRhythmUI.height/2), 'rhythmIcon2');
              this.monster.attackAction[i].startPoint = 0+-100
              //dist -= 0
              this.monster.attackAction[i].hp = 1
              this.monster.attackAction[i].height = 100;
              this.monster.attackAction[i].width = 100;
              this.monster.attackAction[i].anchor.setTo(0.5, 0.5);
              this.monster.attackAction[i].alpha = 1;
              this.monster.attackAction[i].pushBack = 0;
              this.monster.attackAction[i].speedUp = 0
              this.monster.attackAction[i].speed = this.hero[0].speed
              //this.attackIcon.alpha = 0                 
            }    
          
     
                        

           // console.log(this.soundAnalyseSprite)   

            this.rhythmArrow =  this.add.sprite(this.game.width/2, this.monsterRhythmUI.y+this.monsterRhythmUI.height+25, 'stamArrow');
            this.rhythmArrow.origY = this.rhythmArrow .y//this.monsterRhythmUI.y+this.monsterRhythmUI.height+10
            this.rhythmArrow.anchor.setTo(0.5, 0.5);
            this.rhythmArrow.origX = this.game.width/2
          
            this.dodgeArrow =  this.add.sprite(this.game.width/2, this.monsterRhythmUI.y-10, 'dodgeArrow');
            this.dodgeArrow.anchor.setTo(0.5, 0.5);      
            this.dodgeArrow.alpha = 0;
            //this.rhythmArrow.width = 200;                
            //this.rhythmArrow.height = 200;            
      
            
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

            //attack fx
            this.attackFX = this.add.sprite(this.monster.x, this.monster.y, 'slashAttack');
            this.attackFX.alpha = 0;
            this.attackFX.height = 100;
            this.attackFX.width = 100;
            this.attackFX.anchor.setTo(0.5, 0.5);
            

            //crit multiplier {font:'LondrinaSolid-Black'});
            var style = { font: '40pt monsterhunter', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            this.mulStats = this.add.text(100, this.game.height/2-50, "test", style); 
            this.mulStats.startY = this.mulStats.y
            this.mulStats.alpha = 0;
            this.mulStats.anchor.setTo(0.5, 0.5);
            this.mulStats.align = "center"          
            
            //combo Text
            var style = { font: '22pt monsterhunter', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            this.comboText = this.add.text(this.game.width/2 , this.monsterRhythmUI.y+this.monsterRhythmUI.height+90, "COMBO", style); 
            this.comboText.startY = this.mulStats.y
            this.comboText.alpha = 1;
            this.comboText.anchor.setTo(0.5, 0.5);
            this.comboText.align = "center"   

            //damage count Text
            var style = { font: '22pt monsterhunter', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            
            this.damageText = this.add.text(60 , this.monsterRhythmUI.y+this.monsterRhythmUI.height+90, "COMBO", style); 
            this.damageText.startY = this.mulStats.y
            this.damageText.alpha = 1;
            this.damageText.anchor.setTo(0.5, 0.5);
            this.damageText.align = "center"               

            //guard count Text
            var style = { font: '22pt monsterhunter', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            this.guardText = this.add.text(this.game.width-50, this.monsterRhythmUI.y+this.monsterRhythmUI.height+90, "COMBO", style); 
            this.guardText.startY = this.mulStats.y
            this.guardText.alpha = 1;
            this.guardText.anchor.setTo(0.5, 0.5);
            this.guardText.align = "center"                 

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
                ////////console.log("left");        
              }
              else if(swipeCoordX2 > swipeCoordX + swipeMinDistance){            
                ////////console.log("right");        
              }else if(swipeCoordY2 < swipeCoordY - swipeMinDistance){            
                ////////console.log("up");        
              }else if(swipeCoordY2 > swipeCoordY + swipeMinDistance){            
                ////////console.log("down");        
              }    
              
              var midX = (swipeCoordX+swipeCoordX2)/2
              var midY = (swipeCoordY+swipeCoordY2)/2
              ////////console.log(midX+" "+midY)
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
              // stabby 
              if(this.hero[0].ultSkill.attackType !=2 && midX >= (this.monster.x-(this.monster.width/2)) && midX <= (this.monster.x+(this.monster.width/2)) && midY >= (this.monster.y-(this.monster.height/2)) && midY <= (this.monster.y+(this.monster.height/2)) ){
                
                if(parseInt(localStorage.getItem("first-ult-attempt")) == 0 ){
                  this.chatTimer = 1;
                  //localStorage.setItem("firstVisit-ult",3);
                  this.textBackdropText.text = "Well done. Each weapon type has a unique ULT action. Keep going to extend your combo"                      
                  this.ultArrow.alpha = 0;
                  localStorage.setItem("first-ult-attempt",1)   
                }                           
                this.hunter.ultMul++;

                  this.hunter.critMul++;
                  this.hunter.ultMul = this.hunter.critMul
                  this.mulStats.alpha =  0;
                  this.mulStats.y = this.mulStats.startY
                  this.mulStats.text = "COMBO!\nx"+this.hunter.critMul     
                  if(this.comboLimitReached){
                    //this.monHPText2.alpha = 1;    
                    //this.monHPText2.x = this.monHPText.x+this.monHPText.width               
                    //this.monHPText2.text = "COMBO LIMIT REACHED!"
                  }                            
                  this.mulStats.angle = -5                 
                  //this.bonk2.play();
                  
                   var ran = Math.floor(Math.random() * 200)-100;
                  //this.monster.y += ran
                  var ran = Math.floor(Math.random() * 200)-100;
                  //this.monster.x += ran
              }
              

            }, this); 
          
            if(this.legend){
              this.bgSound = this.add.audio('legendMusic');
            }
            else{
              this.bgSound = this.add.audio('combatMusic');
            }
            
            this.ping = this.add.audio('ping');
            
            if(!this.bgSound.isPlaying && this.monster.monID != 99){
                this.bgSound.loop = true;
                //this.bgSound.play();
                //this.bgSound.volume = 0.1;
                //this.introCheck = true;
            }   
            

            this.gotHit = this.add.sprite(0, 0, 'gotHit');
            this.gotHit.width = this.game.width;
            this.gotHit.height = this.game.height;        
            this.gotHit.alpha = 0;     
          
        
            this.shieldArrow =  this.add.sprite(this.hero[2].x, this.hero[2].y-50, 'uiArrow');
            this.shieldArrow.anchor.setTo(0.5, 0.5);           
            this.shieldArrow.alpha = 0; 
          
            this.attackArrow =  this.add.sprite(this.hero[0].x, this.hero[2].y-50, 'uiArrow');
            this.attackArrow.anchor.setTo(0.5, 0.5);           
            this.attackArrow.alpha = 0;        

            this.ultArrow =  this.add.sprite(this.monster.x, this.monster.y-(this.monster.tarSize/2), 'uiArrow');
            this.ultArrow.anchor.setTo(0.5, 0.5);           
            this.ultArrow.alpha = 0;                    
            
            //title powers
            this.title = localStorage.getItem("playerTitle")
            if(this.title.localeCompare("TRACKER") == 0 && this.biome == 0){
              this.hunter.charge = this.monster.comboLimit;
              this.hunter.ultCharge = this.monster.comboLimit;              
            }
            if(this.title.localeCompare("EXPLORER") == 0 && this.biome == 1){
              this.hunter.charge = this.monster.comboLimit;
              this.hunter.ultCharge = this.monster.comboLimit;              
            }     
            if(this.title.localeCompare("HIKER") == 0 && this.biome == 2){
              this.hunter.charge = this.monster.comboLimit;
              this.hunter.ultCharge = this.monster.comboLimit;              
            }                 
            this.firstTime = false;
            this.hitStop = 0;
            this.damageCount = 0;
            this.guardCount = 0;
            this.damageCount2 = 0;
            this.guardCount2 = 0;            
            

            this.scoreScreen = this.add.sprite(-this.game.width, 10, 'score');
            this.scoreScreen.width = this.game.width
            this.scoreScreen.height = this.game.height
            this.scoreScreen.alpha = 0;
   
            
            this.okayButton = this.add.sprite(-this.game.width, 10, 'okay');
            this.okayButton.alpha = 0;
            this.okayButton.inputEnabled = true;
            this.okayButton.events.onInputDown.add(this.loot, this);       

            this.shareButton = this.add.sprite(-this.game.width, 10, 'share');
            this.shareButton.inputEnabled = true;
            this.shareButton.events.onInputDown.add(this.shareScore, this);               
            this.shareButton.alpha = 0;            
     

            this.grade = this.add.sprite(0, 10, 'score');
            this.grade.width = this.game.width*1.5
            this.grade.height = this.game.height*1.5
            this.grade.alpha = 0;            
            //breakpoint
            if(window.innerWidth < 400){
              this.grade.x = 10 
            }
            else{
              this.grade.x = 0
            }

            
            this.score_high = this.add.sprite(0, 10, 'score_high');
            this.score_high.width = this.game.width
            this.score_high.height = this.game.height
            this.score_high.alpha = 0;      
            
            this.score_shard = this.add.sprite(0, 10, 'score_shard');
            this.score_shard.width = this.game.width
            this.score_shard.height = this.game.height
            this.score_shard.alpha = 0;                  

            //score 
            var style = { font: '22pt monsterhunter', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            this.scoreText = this.add.text(50, 50, "SCORE:\n0", style); 
            this.scoreText.startY = this.mulStats.y
            this.scoreText.alpha = 0;
            //this.scoreText.anchor.setTo(0.5, 0.5);
            this.scoreText.align = "left"    

            //shard Text
            var style = { font: '22pt monsterhunter', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            this.shardText = this.add.text(this.game.width-60, this.game.height/2+85, "+0", style); 
            this.shardText.alpha = 0;
            //this.scoreText.anchor.setTo(0.5, 0.5);
            this.shardText.align = "left"    
            
            this.monsterFought = this.add.sprite(this.game.width-225, 0, 'start_3');

            //this.monsterFought.anchor.setTo(0.5, 0.5);
            this.monsterFought.alpha = 0;

            //media breakpoint
            if(window.innerWidth< 400){
              this.monsterFought.x = this.game.width-180   
              //rotate specific monsters
              if((this.monster.id == 99 || this.monster.id == 2 || this.monster.id == 3) && (this.biome == 0 || this.biome == 2 )){
                this.monsterFought.scale.x *= -1
                this.monsterFought.x = this.game.width+150
              }              
            }
            else{
              this.monsterFought.x = this.game.width-225   

              //rotate specific monsters
              if((this.monster.id == 99 || this.monster.id == 2 || this.monster.id == 3) && (this.biome == 0 || this.biome == 2 )){
                this.monsterFought.scale.x *= -1
                this.monsterFought.x = this.game.width+150
              }                    
            }        

            this.scoreCount = 0;
            this.scoreCount2 = 0;
            this.scoreCount3 = 1;
            this.scoreCount4 = 0;
            this.totalScoreCount = 0;


            
            this.startCount = this.add.sprite(this.game.width/2, 100, 'start_3');
            this.startCount.anchor.setTo(0.5, 0.5);
            this.startCount.origWidth = this.startCount.width
            this.startCount.origHeight = this.startCount.height
            this.startCounter = 0;
            this.countSound = this.add.audio('arcade-countdown');
            this.runSound = this.add.audio('runAwaySound');

            this.sweatSound = this.add.audio('runAwaySweat');
            this.sweatSound.loop = true;
            
            //this.countSound.play();this.runSound.play();

            this.transition = this.add.sprite(this.game.width/2, 0,"transition");  
            this.transition.anchor.setTo(.5,.5);
            this.transition.width = this.game.width
            this.transition.scale.y *= -1;

            this.speechBackdrop = this.add.sprite(0, 0, 'speechDim');
            this.speechBackdrop.width = this.game.width;
            this.speechBackdrop.height = this.game.height;
            this.speechBackdrop.alpha = 0;
  
            this.mapWarden = this.add.sprite(this.game.width, 0, 'warden'+this.biome);
            this.mapWarden.width = this.game.width;
            this.mapWarden.height = this.game.height; 
            
            this.textBackdrop = this.add.sprite(this.game.width/2, this.game.height/2, 'speechBubble');
            this.textBackdrop.anchor.setTo(0.5, 0.5); 
            this.textBackdrop.width = this.game.width;
            this.textBackdrop.height = this.game.height;
  
            this.textBackdrop.width = this.textBackdrop.width/1.5
            this.textBackdrop.height = this.textBackdrop.height/1.5         
  
            this.textBackdrop.alpha = 0;
            this.textBackdrop.inputEnabled = true;
            this.textBackdrop.events.onInputDown.add(this.doNothing, this);             
            
            this.textBackdropText = this.add.text(this.game.width/2, 200, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
            this.textBackdropText.alpha = 0;
            this.textBackdropText.fill= 'black';
            this.textBackdropText.fontSize = 22;
            this.textBackdropText.anchor.setTo(0.5, 0.5); 
            this.textBackdropText.align = 'center'
            this.textBackdropText.wordWrap = true;
            this.textBackdropText.wordWrapWidth = this.game.width-35      
  
            this.textBackdropText2 = this.add.text(15,this.textBackdropText.y-93, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
            this.textBackdropText2.angle = -5
            this.textBackdropText2.alpha = 0;
            this.textBackdropText2.fill= '#FF8900';
            this.textBackdropText2.fontSize = 22;
            this.textBackdropText2.align = 'center'
            this.textBackdropText2.wordWrap = true;
            this.textBackdropText2.wordWrapWidth = this.textBackdrop.width-50;       
            this.textBackdropText2.text = "Lynnenne, The Shopkeep"
            this.textBackdropText.text = ""

    
            
              switch(this.biome){
                case 0:
                  this.textBackdropText2.text = "Neeka, the Sure"                  
                  break;
                case 1:
                  this.textBackdropText2.text = "Roz, the Steady"                    
                  break;
                case 2:
                  this.textBackdropText2.text = "Rayla, the Indifferent"                 
                  break;                
              }          
              this.chatTimer = 0;  
              
        if (localStorage.getItem("firstVisit-combat") === null ) {
            this.chatTimer = 1;
            this.textBackdropText.text = "Welcome, Hunter!";
            localStorage.setItem("firstVisit-combat",1);    
            //localStorage.setItem("firstVisit-combat",1);
      
      
        }   
            

        //single score
        var style = { font: '48pt monsterhunter', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
        this.scoreText3 = this.add.text(this.rhythemUI.x, this.rhythemUI.y+140, "0", style); 
        this.scoreText3.anchor.setTo(0.5, 0.5);
        this.scoreText3.align = "center"
        this.scoreText3.fontSize = 28
        this.scoreText3.alpha = 0
        this.scoreText3.origFontSize = this.scoreText3.fontSize
        this.scoreText3.origWidth = this.scoreText3.width
        this.scoreText3.origHeight = this.scoreText3.height
    

        var style = { font: '48pt monsterhunter', fill: 'black', align: 'left', wordWrap: true, wordWrapWidth: 290 };
        this.scoreText2 = this.add.text(this.rhythemUI.x, this.rhythemUI.y+80, "0", style); 
        this.scoreText2.anchor.setTo(0.5, 0.5);
        this.scoreText2.align = "center"
        this.scoreText2.fontSize = 60

        var scale = 1.8
        //media breakpoint

        if(window.innerHeight < 700){
          this.scoreText2.y = this.rhythemUI.y+60      
          this.scoreText3.y = this.rhythemUI.y+100  
          this.scoreText2.fontSize = 40
          this.scoreText3.fontSize = 20
          this.textBackdropText.fontSize = 18;
          this.textBackdropText2.fontSize = 18;
          
          this.textBackdropText.y = 160
          this.textBackdropText2.y = this.textBackdropText.y-75        
          
          
        }
        else if(window.innerHeight < 800){
          this.scoreText2.y = this.rhythemUI.y+80   
          this.scoreText3.y = this.rhythemUI.y+140     
          this.scoreText2.fontSize = 60   
          this.scoreText3.fontSize = 28     
          this.textBackdropText.fontSize = 19;
          this.textBackdropText2.fontSize = 19;
          this.textBackdropText.y = 185
          this.textBackdropText2.y = this.textBackdropText.y-90               
          /*
          this.textBackdropText.y = this.game.height-100
          this.textBackdropText2.fontSize = 24;
          this.textBackdropText2.y = this.textBackdropText.y-100      
          */       
        }            
        else{
          this.scoreText2.y = this.rhythemUI.y+80   
          this.scoreText3.y = this.rhythemUI.y+140     
          this.scoreText2.fontSize = 60   
          this.scoreText3.fontSize = 28     
          this.textBackdropText.fontSize = 19;
          this.textBackdropText2.fontSize = 19;
          this.textBackdropText.y = 185
          this.textBackdropText2.y = this.textBackdropText.y-75               
          /*
          this.textBackdropText.y = this.game.height-100
          this.textBackdropText2.fontSize = 24;
          this.textBackdropText2.y = this.textBackdropText.y-100      
          */       
        }     

        this.scoreText2.origFontSize = this.scoreText2.fontSize
        this.scoreText2.origWidth = this.scoreText2.width
        this.scoreText2.origHeight = this.scoreText2.height
        this.scoreText2.origX = this.scoreText2.x
        this.scoreText2.origY = this.scoreText2.y
        this.scoreText2.y = -50
        //	Stroke color and thickness
        this.scoreText2.stroke = 'white';
        this.scoreText2.strokeThickness = 6;


        localStorage.setItem("markedMon",this.encounterID)

        gameConfig.comboLimit = gameConfig.comboLimit +parseInt(localStorage.getItem("currentRank"))
        this.lootOkay = false;
        //this.map.alpha = 1; 

          // set weapon weight
          switch(weapon[this.hero[0].heroID].weight){
            case 6:
              this.monster.attackAction[0].hp = 4
              break;
            case 4:
              this.monster.attackAction[0].hp = 3
              break;
            case 2:
              this.monster.attackAction[0].hp = 2
              break;                            
          }         
          this.hunter.weight = this.monster.attackAction[0].hp
          //console.log("starting HP "+this.monster.attackAction[0].hp)
          this.okayButton2 = this.add.sprite(-this.game.width, this.game.height/2-100, 'okay');
          this.okayButton2.anchor.setTo(0.5, 0.5); 
          this.okayButton2.alpha = 0;
          this.okayButton2.inputEnabled = true;
          this.okayButton2.events.onInputDown.add(this.hideChat, this);  
        //media breakpoint
          if(window.innerHeight < 700){
            this.okayButton2.y = this.game.height/2-60
            
          }  
                  
        }
        , update: function () {
          
          this.loadGrass1.x += ((-this.game.width/2) - this.loadGrass1.x) * 0.1;  
          this.loadGrass2.x += ((this.game.width*1.5) - this.loadGrass2.x) * 0.1;  
          
          this.loadGrass1.y += ((0) - this.loadGrass1.y) * 0.1;  
          this.loadGrass2.y += ((0) - this.loadGrass2.y) * 0.1;            
          

          for(var i = 0; i < 3; i++){
            this.heart[i].y += ((this.heart[i].origY) - this.heart[i].y) * 0.1;  
          }
          //post screenshot chat
          //console.log("LOL")
          //console.log(this.cameraTimer)
          if(this.startCount.alpha > 0 || this.grade.alpha > 0){
            this.scoreText3.alpha = 0
            this.scoreText2.alpha = 0
            this.comboText.alpha = 0
            this.damageText.alpha = 0
            this.guardText.alpha = 0    

          }
          else{
            this.scoreText2.alpha = 1
            this.scoreText3.alpha = 1
            this.scoreText2.fontSize += (this.scoreText2.origFontSize - this.scoreText2.fontSize) * 0.1; 

            this.scoreText2.y += (this.scoreText2.origY - this.scoreText2.y) * 0.1; 

            //this.scoreText2.height += (this.scoreText2.origHeight - this.scoreText2.height) * 0.1; 

            this.comboText.alpha = 0
            this.damageText.alpha = 0
            this.guardText.alpha = 0           
          }
          //hide this.rhythemUI.alpha
          this.rhythemUI.alpha = 0;

          var comboHolder = this.hunter.critMul-1
          var huntStreak = parseInt(localStorage.getItem("monCount"))+1         

          var score = this.damageCount+this.guardCount//+(100*comboHolder)+(100*huntStreak)
          this.scoreText2.text = ""+score
          this.scoreText3.text = "COMBO: "+(this.hunter.critMul-1)
          if(this.hunter.critMul >= gameConfig.comboLimit){
            this.scoreText3.text = "COMBO: "+(this.hunter.critMul-1)+" MAX"
          }           

          if(this.monster.ranAway){
            this.scoreText2.text = "Monster Got Away"
            this.scoreText3.alpha = 0;
          }

          if(this.hunter.hp <= 0 ){
            this.scoreText2.text = "You Fainted!"
            this.scoreText2.fill= 'red';
            this.scoreText3.alpha = 0;
          }

          //change score color dynamically to match grade
          if(score < Math.floor(this.scoreThreshold/3) ){
            this.scoreText2.fill= '#038F0E';
          }
          if(score < Math.floor(this.scoreThreshold) && score >= Math.floor(this.scoreThreshold/3)){
            this.scoreText2.fill= '#03308A';
          }                      
          if(score < Math.floor(this.scoreThreshold*3) && score >= Math.floor(this.scoreThreshold)){
            this.scoreText2.fill= '#AE0015';
          }
          if(score >= this.scoreThreshold*3){
            this.scoreText2.fill= '#839BA5';
          }                      

          if(this.monster.ranAway){
            this.scoreText2.fill= '#A08600';
          }

          if(this.cameraTimer >= 0){
            this.cameraTimer--
            if(this.cameraTimer == 0){
              //this.chatTimer = 1
              switch(this.biome){
                case 0:
                  this.textBackdropText.text = "Nice photo.\nInspire your companions with your achievements"                   
                  break;
                case 1:
                  this.textBackdropText.text = "A handsome screenshot.\nRegale your comrades with your records"                     
                  break;
                case 2:
                  this.textBackdropText.text = "So you took a picture ...\n Now go let your friends congratulate you"                   
                  break;                
              }  
            }
          }

          if(this.lootOkay){
            this.okayButton.loadTexture("okay")
          }
          else{
            this.okayButton.loadTexture("okayNo")
          }

          //combo cap
          if(this.hunter.critMul > gameConfig.comboLimit){
            this.hunter.critMul = gameConfig.comboLimit;
          }
          //console.log(this.scoreThreshold)
          if(this.chatTimer > 0){
            
            this.mapWarden.bringToTop();
            this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
            this.textBackdrop.alpha = 1;
            this.textBackdropText.alpha = 1;
            this.textBackdropText2.alpha = 1;
            this.textBackdrop.x = 0;        

            this.textBackdrop.alpha = 1;
            this.speechBackdrop.alpha = 1;

            this.textBackdrop.x = this.game.width/2;
            
            if(this.textBackdrop.width < this.game.width){
              this.textBackdrop.width+=20;
            }
            if(this.textBackdrop.height < this.game.height){
              this.textBackdrop.height+=20;
            }        
            if(this.textBackdrop.height >= this.game.height && this.textBackdrop.width >= this.game.width){
              this.textBackdropText.alpha = 1;
              this.textBackdropText2.alpha = 1;
              this.okayButton2.alpha = 1;
              this.okayButton2.x = this.game.width/2
            }
            else{
              this.textBackdropText.alpha = 0;
              this.textBackdropText2.alpha = 0;       
              this.okayButton2.alpha = 0;      
              this.okayButton2.x = -this.game.width 
            }                         
          }
          else{
            this.mapWarden.x += (this.game.width - this.mapWarden.x) * 0.1; 
            this.textBackdrop.alpha = 0;
            this.textBackdropText.alpha = 0;
            this.textBackdropText2.alpha = 0
            this.textBackdrop.x = this.game.width;      
            
            this.textBackdrop.alpha = 0;
            this.speechBackdrop.alpha = 0;
            this.okayButton2.alpha = 0;
            this.textBackdrop.width = this.game.width/1.5
            this.textBackdrop.height = this.game.height/1.5                 
          }
          
          this.huntTimer--
          console.log("countDown "+this.huntTimer+" "+this.runAwayTimer)
          if(this.huntTimer == -500 && parseInt(localStorage.getItem("firstVisit-combat")) >= 15){
            this.runAwayTimer = 150
          }
          
          if(this.runAwayTimer >= 0 && this.monster.hp > 0 ){
            this.runAwayTimer--;
            if(!this.sweatSound.isPlaying){
              this.sweatSound.play();
            }
            if(this.sweatDrop.alpha > 0){
              this.sweatDrop.alpha -= 0.04
              this.sweatDrop.y++
            }
            else{
              this.sweatDrop.alpha = 1;
              var ran = Math.floor(Math.random() * 100)-50;
              this.sweatDrop.x = this.monster.x+ran
              this.sweatDrop.y = this.monster.y-(this.monster.width/3)
            }
          }  

          if(this.runAwayTimer == 0){
            this.sweatDrop.alpha = 0;
            if(this.sweatSound.isPlaying){
              this.sweatSound.stop();
            }
            
            this.monster.hp = 1
            this.monster.origX = this.game.width*2
            
            this.monster.leftSpeed = 0;
            this.monster.rightSpeed = 0
            this.damageCount = 0;
            this.guardCount = 0;
            this.damageCount2 = 0;
            this.guardCount2 = 0;              
            this.hunter.critMul = 1;
                    

            if(!this.monster.ranAway){
              this.runSmoke.alpha = 1
              this.runSmoke.x = this.monster.x
              this.runSmoke.y = this.monster.y
              this.sweatDrop.alpha = 0;
              if(this.sweatSound.isPlaying){
                this.sweatSound.stop();
              }                  
            }
            this.monster.ranAway = true;
            this.runAwayTimer = -1;
            localStorage.setItem("didMonRun",1)
            this.runSound.play();                                
          } 

          if(this.startCounter == 1 && this.scoreScreen.alpha == 0 && this.huntTimer > 0){
            
            if(this.huntTimer > 0 ){
              this.monster.hp = 1//this.monster.maxhp


              //sweating before run

              var comboHolder = this.hunter.critMul-1
              var huntStreak = parseInt(localStorage.getItem("monCount"))+1              
              var currentScore = this.damageCount+this.guardCount
              //console.log(Math.floor(this.scoreThreshold/5) +" current score "+currentScore)
              // old logic - this.huntTimer <= 500 && currentScore<= Math.floor(this.scoreThreshold/5) 
              
           

            }
            
            //old - logic currentScore<= Math.floor(this.scoreThreshold/5)  && this.huntTimer <= 0
            /*else if( ){
              this.monster.hp = 1
              this.monster.origX = this.game.width*2
              
              this.monster.leftSpeed = 0;
              this.monster.rightSpeed = 0
              this.damageCount = 0;
              this.guardCount = 0;
              this.damageCount2 = 0;
              this.guardCount2 = 0;              
              this.hunter.critMul = 1;
                      

              if(!this.monster.ranAway){
                this.runSmoke.alpha = 1
                this.runSmoke.x = this.monster.x
                this.runSmoke.y = this.monster.y
                this.sweatDrop.alpha = 0;
                if(this.sweatSound.isPlaying){
                  this.sweatSound.stop();
                 }                  
              }
              this.monster.ranAway = true;
              localStorage.setItem("didMonRun",1)
              this.runSound.play();

            }*/ 



          }
          //runsmoke fades away
          if(this.runSmoke.alpha > 0){
            this.runSmoke.y--;
            this.runSmoke.width++
            this.runSmoke.height++
            this.runSmoke.alpha -= 0.02
            if(this.runSmoke.alpha <= 0 ){
              this.runSmoke.alpha = 0;
            }             
            if(this.runSmoke.alpha <= 0){

              this.damageCount = 0;
              this.guardCount = 0;
              this.damageCount2 = 0;
              this.guardCount2 = 0;              
              this.hunter.critMul = 1;

              this.hero[0].y = this.game.height+100;
              this.hero[0].origY = this.game.height+100;      
              this.hero[0].holderY = this.hero[0].origY
              this.hero[1].y = this.game.height+100;
              this.hero[1].origY = this.game.height+100;     
              this.hero[1].holderY = this.hero[1].origY 
              this.hero[2].y = this.game.height+100;
              this.hero[2].origY = this.game.height+100;   
              this.hero[2].holderY = this.hero[2].origY     

              this.sweatDrop.alpha = 0;
              if(this.sweatSound.isPlaying){
                this.sweatSound.stop();
              }
              
              this.scoreScreen.alpha = 1; 
              this.chatTimer = 1;

              if(parseInt(localStorage.getItem("firstVisit-combat")) == 13 ) {
                this.mapWarden.loadTexture("warden2-angry")
                localStorage.setItem("firstVisit-combat",14); 
                this.textBackdropText.text = "Great!\n You let it get away ..."  
              }  
              else{
                this.textBackdropText.text = "Looks like the monster ran away.\nMaybe try a differente weapon?"  
              }              
                 
              this.monster.hp = 0             
              this.monster.alpha = 0; 
            }
          }
          
          //monster runs away


          if(this.transition.y > -1*(this.game.height)){
            this.transition.y-=25;
          }
          else{
            this.transition.alpha = 0;
          }
          //console.log("transition posY "+this.transition.y)
          if(this.hunter.hp <= 0 && this.transition.alpha == 1 && this.transition.y < 0){
            this.sweatSound.stop();                                         
            this.game.state.start('lose');    
          }

          //turn on/off glow filter for weapons
          if((this.hunter.critMul) >= gameConfig.comboLimit-1 ){
            //this.hero[0].filters =  [this.glowFilter];
          }
          else{
            //this.hero[0].filters = null
          }

          if(this.timer >= 50){
            this.startCount.loadTexture("start_2")
          }
          if(this.timer >= 100){
            this.startCount.loadTexture("start_1")
          }
          if(this.timer >= 150){
            this.startCount.loadTexture("start_go")
            this.startCounter = 1;
          }          
          if(this.timer >= 225){
            this.monAppear = 0;
           // this.startCounter = 1;
          }     
          
            //media breakpoint
            if(window.innerHeight < 700){
              this.scoreText.text = "Damage Dealt: \n+"+0+"\nDamage Blocked: \n+"+0+"\n\nCombo (x"+0+"): \n+100 x "+(0)+"\nHunt Streak (x"+0+"): \n+100 x "+0+"\n\nTotal Score: \n"+0      
            }
            else if(window.innerHeight < 800){
              this.scoreText.text = "Damage Dealt: \n+"+0+"\nDamage Blocked: \n+"+0+"\n\nCombo (x"+0+"): \n+100 x "+(0)+"\nHunt Streak (x"+0+"): \n+100 x "+0+"\n\nTotal Score: \n"+0           
            }            
            else{
              this.scoreText.text = "Damage Dealt: \n+"+0+"\nDamage Blocked: \n+"+0+"\n\nCombo (x"+0+"): \n+100 x "+(0)+"\nHunt Streak (x"+0+"): \n+100 x "+0+"\n\n\n\n\n\nTotal Score: \n"+0
            }              
          this.comboText.text = "COMBO:\n"+(this.hunter.critMul-1)
          this.damageText.text = "DAMAGE:\n"+this.damageCount
          this.guardText.text = "GUARD:\n"+this.guardCount


          //score calculations
          if(this.grade.alpha != 0){
            this.grade.width += (this.game.width - this.grade.width) * 0.1;
            this.grade.height += (this.game.height - this.grade.height) * 0.1;
            
            this.soundAnalyseSprite.fadeOut(5000);
            if(this.grade.height - this.game.height <= 0.5){
              
              if(this.damageCount2 > 0){
                if(this.damageCount2 > 100000){
                  this.damageCount2-=100000
                  this.scoreCount+=100000
                }                 
                if(this.damageCount2 > 10000){
                  this.damageCount2-=10000
                  this.scoreCount+=10000
                }                
                if(this.damageCount2 > 1000){
                  this.damageCount2-=1000
                  this.scoreCount+=1000
                }
                if(this.damageCount2 > 100){
                  this.damageCount2-=100
                  this.scoreCount+=100
                }
                if(this.damageCount2 > 10){
                  this.damageCount2-=10
                  this.scoreCount +=10
                }       
                if(this.damageCount2 > 0){
                  this.damageCount2-=1
                  this.scoreCount +=1
                }
              }

              if(this.damageCount2 == 0 && this.guardCount2 > 0){
                if(this.guardCount2 > 100000){
                  this.guardCount2-=100000
                  this.scoreCount2+=100000
                }                     
                if(this.guardCount2 > 10000){
                  this.guardCount2-=10000
                  this.scoreCount2+=10000
                }                
                if(this.guardCount2 > 1000){
                  this.guardCount2-=1000
                  this.scoreCount2+=1000
                }
                if(this.guardCount2 > 100){
                  this.guardCount2-=100
                  this.scoreCount2+=100
                }
                if(this.guardCount2 > 10){
                  this.guardCount2-=10
                  this.scoreCount2 +=10
                }       
                if(this.guardCount2 > 0){
                  this.guardCount2-=1
                  this.scoreCount2 +=1
                }
                if(this.guardCount2 == 0){
                  
                  this.guardCount2--
                  this.totalCount = this.scoreCount+this.scoreCount2
                }
              } 
              
              var comboHolder = this.hunter.critMul-1
              if(this.damageCount2 == 0 && this.guardCount2 <= 0 && this.scoreCount3 <= comboHolder){
                this.scoreCount3++
                if(this.scoreCount3 == comboHolder){
                  //this.totalCount *= this.scoreCount3
                  this.totalCount += 100*this.scoreCount3
                 
                }
              }

              var huntStreak = parseInt(localStorage.getItem("monCount"))+1
              if(this.monster.ranAway){
                huntStreak = 0;
              }              
              if(this.damageCount2 == 0 && this.guardCount2 <= 0 && this.scoreCount3 > comboHolder && this.scoreCount4 <= huntStreak){
                this.scoreCount4++
                if(this.scoreCount4 == huntStreak){
                  this.totalCount +=100*this.scoreCount4
                  //console.log("hunt mul "+this.totalCount)
                }
              }              
              //console.log("Current Score "+this.totalCount)
              if(this.damageCount2 == 0 && this.guardCount2 <= 0 && this.scoreCount3 > comboHolder && this.scoreCount4 > huntStreak &&this.totalCount > 0 ){
                if(this.totalCount > 100000){
                  this.totalCount -= 100000;
                  this.totalScoreCount +=100000
                }
                if(this.totalCount > 10000){
                  this.totalCount -= 10000;
                  this.totalScoreCount +=10000
                }
                if(this.totalCount > 1000){
                  this.totalCount -= 1000;
                  this.totalScoreCount +=1000
                }
                if(this.totalCount > 100){
                  this.totalCount -= 100;
                  this.totalScoreCount +=100
                }
                if(this.totalCount > 10){
                  this.totalCount -= 10;
                  this.totalScoreCount +=10
                }   
                if(this.totalCount > 0){
                  this.totalCount -=1
                  this.totalScoreCount +=1
                }        
                if(this.totalCount == 0){
                  
                  if(this.monster.ranAway){
                    this.shardText.text = "+0"
                    this.totalCount = 0;
                    localStorage.setItem("moneExp", 0)  
                  }
                  else{
                    this.lootOkay = true;
                    console.log("Mon exp "+this.totalScoreCount)

                    //localStorage.setItem("moneExp", this.totalScoreCount) 
                    // test photo
                    if (localStorage.getItem("screenshot-check") === null ) {
                      try{
                        navigator.screenshot.save(function(error,res){
                          if(error){
                            console.error(error);
                          }else{
                            console.log('ok',res.filePath); //should be path/to/myScreenshot.jpg
                            var entry= "file://"+res.filePath;
                            window.resolveLocalFileSystemURL (entry, 
                              function (fileEntry) { 
                                  fileEntry.remove(
                                      function () { 
                                          console.log('File is removed.'); 
                                          localStorage.setItem("screenshot-check",1)
                                      }, 
                                      function (error) {
                                          console.log('Unable to remove file.');
                                      }
                                  ); 
                                } 
                              );                            
                            }
                          },'jpg',50,'test');

                        }
                        catch(e){
                          //alert(e)
                        }
                      }                    
                      //shard calc             
                      var comboHolder = this.hunter.critMul-1
                      var huntStreak = parseInt(localStorage.getItem("monCount"))+1
                      var score = this.damageCount+this.guardCount+(100*comboHolder)+(100*huntStreak)
                      //console.log("score "+score+" threshold:"+this.scoreThreshold+" "+this.monster.ranAway)
                      this.expScore = 0
                      
                      this.okayButton.bringToTop();

                      if(score < Math.floor(this.scoreThreshold/3) ){
                        this.shardText.text = "+15"
                        this.expScore = this.monster.rank*100
                        localStorage.setItem("shards",parseInt(localStorage.getItem("shards"))+25) 
                        
                        if(parseInt(localStorage.getItem("firstVisit-combat")) == 34){
                          //warden tips
                          this.chatTimer = 1;
                          this.textBackdropText.text = "Nice attempt.\nTry upgrading your weapon..."                              
                        }                        
                         
                      }
                      if(score < Math.floor(this.scoreThreshold) && score >= Math.floor(this.scoreThreshold/3)){
                        this.shardText.text = "+25"
                        this.expScore = this.monster.rank*250
                        localStorage.setItem("shards",parseInt(localStorage.getItem("shards"))+50)    

                        //warden tips
                        //this.chatTimer = 1;
                        //this.textBackdropText.text = "Not bad.\nRemember Elemental and Physical Weaknesses Stack"                         
                      }                      
                      if(score < Math.floor(this.scoreThreshold*3) && score >= Math.floor(this.scoreThreshold)){
                        this.shardText.text = "+50"
                        this.expScore = this.monster.rank*500
                        localStorage.setItem("shards",parseInt(localStorage.getItem("shards"))+100)    

                        //warden tips
                        //this.chatTimer = 1;
                        //this.textBackdropText.text = "Very good.\n Try to improve your weapon's level for a higher score"                               
                      }
                      if(score >= this.scoreThreshold*3){
                        this.shardText.text = "+100"
                        this.expScore = this.monster.rank*1000
                        localStorage.setItem("shards",parseInt(localStorage.getItem("shards"))+150)    

                        //warden tips
                        //this.chatTimer = 1;
                        //this.textBackdropText.text = "Well done!\n I have nothing further to teach you"                               
                                          
                    } 
                    //daily hunt
                    if(this.biome == -1){
                      localStorage.setItem("ChallengeScore", this.totalScoreCount)
                      this.expScore = 0;
                    }                    
                    localStorage.setItem("moneExp", this.expScore)                  
                    var highScore = parseInt( localStorage.getItem("HighScore"+this.monster.name))
                    var globalScore = parseInt( localStorage.getItem("DailyHuntTarget"))
                    if(this.biome == -1){
                      this.score_high.alpha = 1;   

                      if(globalScore < this.totalScoreCount){
                        //localStorage.setItem("HighScore"+this.monster.name, this.totalScoreCount)
                        this.score_high.alpha = 1;   

                        //this.scoreText.text = "Damage Dealt: \n+"+this.scoreCount+"\nDamage Blocked: \n+"+this.scoreCount2+"\nTotal Score: \n"+this.totalScoreCount+ " HIGH SCORE!"
                      }                      
                    }
                    else{

                      if(highScore < this.totalScoreCount){
                        localStorage.setItem("HighScore"+this.monster.name, this.totalScoreCount)
                        this.score_high.alpha = 1;   

                        //this.scoreText.text = "Damage Dealt: \n+"+this.scoreCount+"\nDamage Blocked: \n+"+this.scoreCount2+"\nTotal Score: \n"+this.totalScoreCount+ " HIGH SCORE!"
                      }
                    }
 
                    
                  }                      


                }                     
              }  
                                    
              
              
              //media breakpoint
              if(window.innerWidth < 400){
                this.score_high.y = -20;
              }              
              if(window.innerHeight < 700){
                this.scoreText.text = "Damage Dealt: \n+"+this.scoreCount+"\nDamage Blocked: \n+"+this.scoreCount2+"\n\nCombo (x"+comboHolder+"): \n+100 x "+(this.scoreCount3-1)+"\nHunt Streak (x"+huntStreak+"): \n+100 x "+huntStreak+"\n\nTotal Score: \n"+this.totalScoreCount       
              }
              else if(window.innerHeight < 800){
                this.scoreText.text = "Damage Dealt: \n+"+this.scoreCount+"\nDamage Blocked: \n+"+this.scoreCount2+"\n\nCombo (x"+comboHolder+"): \n+100 x "+(this.scoreCount3-1)+"\nHunt Streak (x"+huntStreak+"): \n+100 x "+huntStreak+"\n\nTotal Score: \n"+this.totalScoreCount 
              }                
              else{
                this.scoreText.text = "Damage Dealt: \n+"+this.scoreCount+"\nDamage Blocked: \n+"+this.scoreCount2+"\n\nCombo (x"+comboHolder+"): \n+100 x "+(this.scoreCount3-1)+"\nHunt Streak (x"+huntStreak+"): \n+100 x "+huntStreak+"\n\n\n\n\n\nTotal Score: \n"+this.totalScoreCount        
              }                   

              

              
              if(this.monster.ranAway){
                this.shardText.text = "+0"
                this.lootOkay = true;
                localStorage.setItem("moneExp", 0)  
              }  

              this.comboText.text = "COMBO:\n"+(this.hunter.critMul-1)
              this.damageText.text = " DAMAGE:\n"+this.damageCount2
              this.guardText.text = "GUARD:\n"+this.guardCount2
              if(this.guardCount2 < 0){
                this.guardText.text = "GUARD:\n"+(this.guardCount2+1)
              }
            }
            
            
          }
          
          this.mulStats.alpha = 0;
          if(this.ultArrow.alpha <= 0){
            this.ultArrow.x  =  this.monster.x
            this.ultArrow.y  = this.monster.y
          }
          //this.ultArrow.alpha = 1;

          this.textBackdropText.x = Math.floor( this.textBackdropText.x )
          this.textBackdropText.y = Math.floor( this.textBackdropText.y )
          if(this.hunter.charge < 0){
            this.chargeBarUI.width = 0;
          }
          else{
            this.chargeBarUI.width += (((this.hunter.charge/this.monster.comboLimit)*(this.game.width-50)  ) - this.chargeBarUI.width) * 0.1; 
          }
          
          this.chargeBarUIText.text = this.hunter.charge+"/"+this.monster.comboLimit
          if(this.hunter.charge >= this.monster.comboLimit){
            this.hunter.charge = this.monster.comboLimit;
            this.chargeBarPipUI.loadTexture("chargePipFull")
          }
          else{
            this.chargeBarPipUI.loadTexture("chargePip")
          }

          //combo limit
          var comboLimit= 100//this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]]*5;
          if(this.hunter.critMul >= comboLimit){
            this.comboLimitReached = true;
            this.hunter.critMul =  comboLimit
            

          }
          else{
            this.comboLimitReached = false;

          }

          if(this.comboLimitReached){
            //this.monHPText2.alpha = 1;    
            //this.monHPText2.x = this.monHPText.x+this.monHPText.width               
            //this.monHPText2.text = "COMBO LIMIT REACHED!"
          }              
           //+ Math.floor(this.hunter.critMul/5);
          if(this.monster.x - this.monster.origX <= 25 && this.monAppear >= 0){
            
            if(this.monAppear >  0){
              this.monAppear--;

         
            }
            if(this.monAppear ==  0){
              this.monAppear--;
              if(this.firstTime == false){
                this.firstTime = true;
                this.monCry.play();
                this.monsterShadow.alpha = 1      
                this.monster.tint = 0xffffff;     
                if(this.monster.isApex){
                  this.monster.tint = 0xB29FA5;   
                }     
              }
              
                   
              if(this.monster.monID == 99){
                if(!this.bgSound.isPlaying ){
                  this.bgSound.loop = true;
                  //this.bgSound.play();
                  this.bgSound.volume = 0.2;
                  //this.introCheck = true;
                }  
              }
              //this.bgSound.volume = 0;
            }
          }
          

          if(this.monCry.isPlaying){
            this.bgSound.volume = 0;
          }
          else{
            this.bgSound.volume = 0.2;

            

          }

          if(this.bgSound.volume <= 0 ){
            //this.bgSound.volume -= 0.01;

          }

          ////console.log(this.monEmitter)
          if(parseInt(localStorage.getItem("first-block-attempt")) == 0){
            this.shieldArrow.y += ((this.hero[2].y-100) - this.shieldArrow.y ) * 0.1; 
            
            if(this.shieldArrow.y <= this.hero[2].y-90){
              this.shieldArrow.y = this.hero[2].y-50
            }
            //localStorage.setItem("first-block-attempt",1)                                 
          }
          if(parseInt(localStorage.getItem("first-attack-attempt")) == 0){
            this.attackArrow.y += ((this.hero[0].y-100) - this.attackArrow.y ) * 0.1; 
            
            if(this.attackArrow.y <= this.hero[0].y-90){
              this.attackArrow.y = this.hero[0].y-50
            }
            //localStorage.setItem("first-block-attempt",1)                                 
          }    
          if(parseInt(localStorage.getItem("first-ult-attempt")) == 0){
            this.ultArrow.alpha = 1;
            this.ultArrow.y += ( ( this.monster.y-50) - this.ultArrow.y) * 0.1; 
            
            ////console.log("ult arrow lit "+(this.monster.y-55))
            if(this.ultArrow.y <= (this.monster.y-40)){
              //console.log("ult arrow "+this.ultArrow.y)
              this.ultArrow.y = (this.monster.y)-25
              //console.log("ult arrow2 "+this.ultArrow.y)
            }
            //localStorage.setItem("first-block-attempt",1)                                 
          }                   
          if(this.mulStats.alpha > 0.1){
            this.mulStats.alpha -= 0.01
            this.mulStats.y -= 1
              
          }
          else if(this.mulStats.alpha < 0.1){
            this.mulStats.alpha = 0;
            this.mulStats.y = this.mulStats.startY
          }

            if(this.gotHit.alpha > 0.1){
              this.gotHit.alpha -= 0.01
            }
            else{
              this.gotHit.alpha = 0;
            }
            
              // this.game.state.start('preloader',true,true) 
          
            if(this.monster.hp > 0){
              this.monHPText.text = this.monster.hp+"/"+this.monster.maxhp
            }
            else{
              this.monHPText.text = "0/"+this.monster.maxhp
            }
            
            //ulting instruction flash
            if(this.hunter.ulting && this.chatTimer <= 0){
              
              if (localStorage.getItem("firstVisit-ult") === null ) {
                  this.chatTimer = 1;
                  localStorage.setItem("firstVisit-ult",1);
                  this.textBackdropText.text = "You've charged your ULT"      

                  localStorage.setItem("first-ult-attempt",0);                   
                  localStorage.setItem("first-attack-attempt",0);
              }               
              //this.mulStats.alpha = 0;
              //this.mulStats.text = "x"+this.hunter.ultMul
              if(this.hunter.ultMul >= this.hunter.ultSkillMax){
                //this.hunter.ultMul = this.hunter.ultSkillMax
                //this.mulStats.text = "x"+this.hunter.ultMul+"(MAX)"
              }              
              
            }
            if(this.hunter.ulting && this.rhythemUI.alpha <= 0.1 && this.chatTimer <= 0){

              //this.monHPText2.alpha = 1;                 
              //this.rhythemUI.alpha = 1;
              this.rhythemUI2.alpha = 0;              
              this.rhythemUI.y = 100
              this.rhythemUI2.y = 50            

              switch(this.hero[0].ultSkill.attackType){
                case 0:
                  this.rhythemUI.loadTexture("ultSwipe"); 
                  //this.monHPText2.text = "SWIPE TARGET"//+(this.hunter.ultSkillMax-this.hunter.ultMul)
                  break;
                case 1:
                  this.rhythemUI.loadTexture("ultTap"); 
                  //this.monHPText2.text = "TAP TARGET "//+(this.hunter.ultSkillMax-this.hunter.ultMul)
                  break;
                case 2:
                  this.rhythemUI.loadTexture("ultHold"); 
                  //this.monHPText2.text = "HOLD TARGET "//+(this.hunter.ultSkillMax-this.hunter.ultMul)

                  break;                
              }
              
              if(this.hunter.ultMul >= this.hunter.ultSkillMax){
                //this.monHPText2.text = "MAXED"
              }           
                   
              
                            
            }
            if(this.hunter.ulting && this.rhythemUI.alpha > 0.1 && this.chatTimer <= 0){
              this.rhythemUI.alpha += (0 - this.rhythemUI.alpha) * 0.05; 
            }

            //ult bash
            if(this.hunter.ulting && this.hero[0].ultSkill.attackType == 2 && this.game.input.activePointer.isDown && this.timer%10 == 0){
              this.monster.width= this.monster.tarSize -50;
              this.monster.height = this.monster.tarSize -50;
              this.hunter.ultMul++;

              this.hunter.critMul++;
              this.hunter.ultMul = this.hunter.critMul
              this.mulStats.alpha =  0;
              this.mulStats.y = this.mulStats.startY
              this.mulStats.text = "COMBO!\nx"+this.hunter.critMul
              if(this.comboLimitReached){
                //this.monHPText2.alpha = 1;    
                //this.monHPText2.x = this.monHPText.x+this.monHPText.width               
                //this.monHPText2.text = "COMBO LIMIT REACHED!"
              }                 
              this.mulStats.angle = -5                 
              //this.bonk2.play();              

            }  
            if(this.hunter.ultingBash > 0 ){
              this.hunter.ultingBash--
              if(this.hunter.ultingBash < 0){
                this.hunter.ultingBash = 0
                if(this.hunter.ultMul > 30){
                  this.game.plugins.screenShake.shake(30);
                }
                else{
                  this.game.plugins.screenShake.shake(this.hunter.ultMul);
                }
              }
              this.monster.height = this.monster.tarSize - (this.monster.tarSize-25);
              
              
            }
            // ult stab
            if(this.hunter.ultingStab > 0 && this.timer%2 == 0  ){
                this.hunter.ultingStab--;
                //this.monster.hp -= this.hero[0].ultSkill.attack*this.currentWepLevel

                this.attackFX.loadTexture("stabAttack")
                this.attackFX.alpha = 1
                var ran = Math.floor(Math.random() * 100)-50;
                this.attackFX.x = this.monster.x+ran
                var ran = Math.floor(Math.random() * 100)-50;
                this.attackFX.y = this.monster.y+ran        

                var ran = Math.floor(Math.random() * 2)+1;
                this.stabSound[ran].play();


                if(this.hunter.ultingStab  <= 0){
                  ////////console.log("You're already dead "+this.hunter.ultMul)
                  this.hunter.ultingStab = 0;
                  if(false){
                    //damage = 0;
                  } 
                  else{
                    this.monster.y -=25;
                    //this.hitStop = 25;
                    this.monster.hp -= this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul;  
                    //rage Mode
                    ////this.rageCheck();                
                    if(this.stabSound[ran].isPlaying){
                      this.stabSound[ran].stop();
                     }                    
                    //this.ultSound[2].play();

                      
                    this.monHPText2.text = this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul; 
                    //this.monHPText2.text += " DAMAGE"
                    this.monHPText2.alpha = 1;                      
                    if(this.hunter.ultMul > 30){
                      this.game.plugins.screenShake.shake(30);
                    }
                    else{
                      this.game.plugins.screenShake.shake(this.hunter.ultMul);
                    }
                  }
                  
                  this.hunter.ultMul = 0;
                  ////alert(this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul+" "+this.hero[0].ultSkill.attack+" "+this.hunter.ultMul)
                }
               //damage =  this.hero[0].ultSkill.attack;
             
  
                this.monHPText2.x = this.monHPText.x+this.monHPText.width              

                var ran = Math.floor(Math.random() * 100)-50;
                this.monster.y =  this.monster.origY + ran
                var ran = Math.floor(Math.random() * 100)-50;
                this.monster.x = this.monster.origX+ ran          
            }
            
            //ult slash
            if(this.slashAttack.alpha == 1){
              this.slashAttack.width+=120;
              if(this.slashAttack.width >= this.game.width){
                if(false){
                  //damage = 0;
                  //this.monster.hp -= this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul;
                  this.monHPText2.text = 0                 
                } 
                else{
                  this.monster.y -=25;
                  //this.hitStop = 25;
                  this.monster.hp -= this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul;
                  //rage Mode
                  ////this.rageCheck();                

                  var ran = Math.floor(Math.random() * 2)+1;
                  //this.ultSound[1].play();

                  if(this.slashSound[ran].isPlaying){
                      this.slashSound[ran].stop();
                  }  

                  this.monHPText2.text = this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul;
                  if(this.hunter.ultMul > 30){
                    this.game.plugins.screenShake.shake(30);
                  }
                  else{
                    this.game.plugins.screenShake.shake(this.hunter.ultMul);
                  }
                  
                }                

                //this.monHPText2.text += " DAMAGE"
                this.monHPText2.alpha = 1;    
                this.monHPText2.x = this.monster.x//this.monHPText.x+this.monHPText.width
                this.monHPText2.y = this.monster.y//this.monHPText.x+this.monHPText.width
                this.monsterhpUI.width = 60
                this.monsterhpUI.height = 60                    
                
   
                  this.hunter.ultMul = 0;
                this.slashAttack.alpha--;
                if(this.slashAttack.alpha <= 0){
                  this.slashAttack.alpha = 0;
                  this.slashAttack.width = 0;

                }
              }
            }
    
            
         
            if(!this.battleMusic.isPlaying && !this.menuClicked){
                this.battleMusic.loop = true;
                //this.battleMusic.play();
            
            }  
            

            if(this.battleMusic.volume == 0 && this.menuClicked){
              this.bgSound.stop();
              this.sweatSound.stop();
               localStorage.setItem('state','lose')
               //this.game.state.start('preloader',true,true) 
               this.game.state.start('lose')  
               localStorage.setItem("score",this.score);
            }             



            
            
            //Score Stats
            //this.scoreStats.text = "SCORE: "+this.score;
            //this.floorStat.text = "-FLOOR: "+this.floor+"-";
           //this.ratioStat.text = "RATIONS: "+this.ratioNum;


                


            
            //update dialouge
           /* 
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
            }*/
          //&& this.rhythemUI.alpha > 0.1
            //////////console.log("chat timer "+this.dialougeTimer)
            if(this.dialougeTimer  > 0 && this.rhythemUI.alpha > 0.1){
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
                this.rhythemUI.y = 100
                
                this.rhythemUI2.alpha = 0;
                this.rhythemUI2.y = 50               
      
                
                this.dialougeTimer = 100;
                
              } 
            }            
          
            if(this.hitStop > 0){
              this.hitStop--
              //get's angry
              if(this.hitStop <= 0 && this.monster.rageOn){
                
                //this.monAngry.alpha = 1;         
                this.monAngry.dir = 1;
              }
            }

            //this.monsterShadow.x = this.monster.x;
            //this.monsterShadow.y = this.monster.y;        
                
            if(this.monsterShadow.alpha > 0 && this.monster.roarCounter == 0 ){
              this.monsterShadow.width+=5 
              this.monsterShadow.height+=5            
              this.monsterShadow.alpha -= 0.02
              if(this.monsterShadow.alpha <= 0){
                this.monsterShadow.alpha = 0;
                this.monsterShadow.width = this.monster.width;
                this.monsterShadow.height = this.monster.height;                 
                if(this.monster.isApex){
                  this.monster.roarCounter = 1;
                }                 
                
              }
            }
            else{
   
              this.monsterShadow.width += (this.monster.width - this.monsterShadow.width) * 0.1;  
              this.monsterShadow.height += (this.monster.height - this.monsterShadow.height) * 0.1;                  
              this.monsterShadow.alpha = 0;        
              if(this.monster.isApex && this.monster.roarCounter == 1){
                this.monsterShadow.alpha = this.monster.alpha;
              }                  
            }            
            //this.actionStats.y = this.textPosY - dialogue.length*25;
            //this.textBG.y = this.actionStats.y+14

            
            ////////////console.log("Timer: "+this.timer)
            //timer 
            if(this.chatTimer <= 0 && this.hitStop <= 0){
              //skill Glow

              if(this.skillGlow.alpha > 0 ){
                this.skillGlow.width+= 1;
                this.skillGlow.height+= 1;
                this.skillGlow.alpha -= 0.02
                if(this.skillGlow.alpha <= 0 ){
                  this.skillGlow.alpha = 0;
                }                
              }
              else{
                this.skillGlow.width = this.skillGlow.origWidth
                this.skillGlow.height = this.skillGlow.origHeight
                this.skillGlow.alpha = 0
              }
              // rhythm arrow 
              //this.monster.y += (this.monster.origY - this.monster.y) * 0.1;
              this.rhythmArrow.y += (this.rhythmArrow.origY - this.rhythmArrow.y) * 0.1;
            if((this.beastBass.volume > 0 && this.transition.alpha == 0) || true){
              this.timer++;        
              
            }
            //game time
            this.gameTime = Math.floor(this.game.time.totalElapsedSeconds())

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
                /*
                for(var k = 0; k < this.chargeUI.length; k++){
                  this.chargeUI[k].loadTexture("charge-spent");
                  this.chargeUI[k].width = 75;
                  this.chargeUI[k].height = 75;                  
                }              
                for(var k = 0; k < this.hunter.charge; k++){
                  this.chargeUI[k].loadTexture("charge");
                  this.chargeUI[k].width = 75;
                  this.chargeUI[k].height = 75;                   
                }                
                */
                // charge ult
                this.hunter.ultCharge = this.hunter.charge;
               //dodge & combo ability
              
              this.dodgeArrow.x = this.monsterRhythmUIDodgeBuffer1.x+this.monsterRhythmUIDodgeBuffer1.width/2;
              
              if(this.hunter.charge > 0){
                //this.monsterRhythmUIDodgeBuffer1.alpha += (1 - this.monsterRhythmUIDodgeBuffer1.alpha) * 0.01; 
                //this.monsterRhythmUIDodgeBuffer2.alpha += (1 - this.monsterRhythmUIDodgeBuffer2.alpha) * 0.01; 
                
                if(this.monsterRhythmUIDodgeBuffer1.alpha >= 0.9){
                  this.monsterRhythmUIDodgeBuffer1.alpha = 0
                  this.monsterRhythmUIDodgeBuffer2.alpha = 0
                }
              }
              else{
                  this.monsterRhythmUIDodgeBuffer1.alpha = 0
                  this.monsterRhythmUIDodgeBuffer2.alpha = 0                
              }
              
              //death
                
                
                if(this.monster.hp <= 0){
                   this.monster.hp = 0; 
                }
                


                //////////console.log(i +" "+this.hero[i].exp)
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
                //floor against blur
                this.hero[i].origY = Math.floor( this.hero[i].origY )
                this.hero[i].origX = Math.floor( this.hero[i].origX )

                this.hero[i].y += (this.hero[i].origY - this.hero[i].y) * 0.1; 

                this.hero[i].x += (this.hero[i].origX - this.hero[i].x) * 0.1; 

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
                if (localStorage.getItem("firstVisit-combat-lose") === null ) {
                    
                  this.chatTimer = 1;
                  this.hunter.hp = 3;
                  this.textBackdropText.text = "Remember we can only take 3 hits. Catch your breath and Try again"     

                }
                else{
                  localStorage.setItem("firstVisit-combat-lose",1);
                  localStorage.setItem("markedMon",this.encounterID)  
                  //localStorage.setItem("revengeHuntSize",localStorage.getItem("monSize"))
                  //localStorage.setItem('state','lose')
                  this.bgSound.stop();
                  try{
                      setupVideoReward();
                      getAds();        
                  }
                  catch(error){
                    //admob.rewardvideo.show();   
                    //alert(error)
                  }        
                  var weakness = ""
                  if(this.monster.slashDef <= 0){
                    weakness += "SLASH"
                  }
                  if(this.monster.stabDef <= 0){
                    if(weakness.length <= 0){
                      weakness += "STAB"
                    }
                    else{
                      weakness += " and STAB"
                    }
                  }
                  if(this.monster.bashDef <= 0){
                    if(weakness.length <= 0){
                      weakness += "BASH"
                    }
                    else{
                      weakness += " and BASH"
                    }
                  }                                    
                  if(this.monster.monID == 99){
                    weakness = "PRISMATIC weapons"
                  }
                  else{
                    weakness += " damage"
                  }
                  localStorage.setItem("monWeakness",weakness)         
                  try{
                    //navigator.vibrate(500);
                  }
                  catch(error){
                    //alert(error)
                  }     
                 

                  //this.sweatSound.stop();                                         
                  //this.game.state.start('lose');                  
                }

            }

            
            //monster dead
            if(this.monster.hp <= 0){


                this.monsterOutline.alpha = 0;
                this.monster.alpha += (0 - this.monster.alpha) * 0.05;
                this.monsterstamUIFlash.alpha = 0;
                this.monsterstamUI.alpha = 0;
            
                
                
                
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
                    this.bgSound.stop();
                    if (localStorage.getItem("firstVisit-combat-win") === null ) {
                        localStorage.setItem("firstVisit-combat-win",1);
                        localStorage.setItem("letsCarve",1);  
                        //this.chatTimer = 1;
                        //this.textBackdropText.text = "Good Job.\n You've defeated your first beast. Be sure to collect your reward"     

                    }
                    else if (parseInt(localStorage.getItem("firstVisit-combat")) == 23){
                        localStorage.setItem("firstVisit-combat",24);
                        localStorage.setItem("letsCarve",1);  
                        this.chatTimer = 1;
                        this.textBackdropText.text = "Well, looks like you CAN Learn.\n Good job ... I guess"                          
                    }
                    else{
                      //WIN & Score

                      // place all button off screen

                      this.hero[0].origY = this.game.height+100;      
                      this.hero[0].holderY = this.hero[0].origY
                      this.hero[1].origY = this.game.height+100;     
                      this.hero[1].holderY = this.hero[1].origY 
                      this.hero[2].origY = this.game.height+100;   
                      this.hero[2].holderY = this.hero[2].origY         

                      
                      
                      this.scoreScreen.alpha = 1;
                      this.monsterFought.loadTexture(this.monster.name)
            
                      if(this.shinyChance == 1 && parseInt(localStorage.getItem("mutantUnlock")) == 1 ){
                        this.monsterFought.loadTexture(this.monster.name+"-variant");
                      }                      
                      this.monsterFought.alpha = 1;
                      
                      
                      this.shareButton.alpha = 1

                      this.grade.alpha = 1;
                      this.scoreText.alpha = 1
                      this.score_shard.alpha = 1; 
                      this.shardText.alpha = 1;
                      this.scoreScreen.x = 0;

                      this.okayButton.alpha = 1
                      this.okayButton.x = Math.floor(this.game.width/2)
                      this.okayButton.y = Math.floor(this.game.height/2+190)

                      this.shareButton.alpha = 1
                      this.shareButton.x = Math.floor(this.game.width/2-this.shareButton.width)
                      this.shareButton.y = Math.floor(this.game.height/2+190)    

                      var comboHolder = this.hunter.critMul-1
                      var huntStreak = parseInt(localStorage.getItem("monCount"))+1
                      var score = this.damageCount+this.guardCount+(100*comboHolder)+(100*huntStreak)

                      this.grade.loadTexture("gradeC")
                      //console.log("score "+score+" threshold:"+this.scoreThreshold+" "+this.monster.ranAway)

                      if(score < Math.floor(this.scoreThreshold/3) ){
                        this.grade.loadTexture("gradeC")
                      }
                      if(score < Math.floor(this.scoreThreshold) && score >= Math.floor(this.scoreThreshold/3)){
                        this.grade.loadTexture("gradeB")
                      }                      
                      if(score < Math.floor(this.scoreThreshold*3) && score >= Math.floor(this.scoreThreshold)){
                        this.grade.loadTexture("gradeA")
                      }
                      if(score >= this.scoreThreshold*3){
                        this.grade.loadTexture("gradeS")
                      }                      

                      if(this.monster.ranAway){
                        this.grade.loadTexture("gradeF")
                      }
                      //console.log (diff+" "+this.monster.maxhp+" "+this.damageCount)
                      
                      //this.game.plugins.screenShake.shake(15);
                     //localStorage.setItem('state','win')
                     localStorage.setItem("markedMon",this.encounterID)
                     //localStorage.setItem("hunterHP",this.hunter.hp);
                     //this.game.state.start('win')                       
                    }

                    
                    
                }
            }
              
            if(this.monster.hp > 0){
                //////////console.log("checking")
                // block duration
                //////////console.log(this.hunter.blockDuration)
                this.hunter.blockDuration--;
                if(this.hunter.blockDuration <= 0){
                  this.hunter.blockDuration = 0
                }
                //this.monster.blockAction[i].miss || 
                //rhythm actions
                for(var i=0; i < 2; i++){
                  //if( (this.monster.blockAction[i].x <= this.rhythmArrow.x && this.monster.blockAction[i].pushBack <= 0 && this.monster.blockAction[i].hp <= 1) || this.monster.blockAction[i].miss || this.monster.blockAction[i].dodged){                  
                  if( (this.monster.blockAction[i].x <= this.rhythmArrow.x && this.monster.blockAction[i].pushBack <= 0 && this.monster.blockAction[i].hp <= 1) || this.monster.blockAction[i].dodged){
                    this.battleStart = false;
                    if(this.monster.blockAction[i].alpha == 1){
                     
                    }
                    
                    //this.monster.windingUp = false;
                    
                    //this.monster.blockAction[i].x -= this.monster.speed
                    if(this.monster.blockAction[i].alpha > 0.1){
                      this.monster.blockAction[i].y -= 1;
                      if(this.skillGlow.alpha > 0){
                        //this.skillGlow.x =  this.monster.blockAction[i].x
                        //this.skillGlow.y = this.monster.blockAction[i].y
                      }                      
                      //this.monster.blockAction[i].x = this.rhythmArrow.x
                      this.monster.blockAction[i].alpha += (0 - this.monster.blockAction[i].alpha) * 0.1; 
                      ////console.log("OLD "+this.monster.blockAction[i].speed+" "+this.monster.speed)
                      this.monster.blockAction[i].speed = this.monster.rightSpeed
                      ////console.log("NEW "+this.monster.blockAction[i].speed+" "+this.monster.speed)
                    }
                    else{
                        //monster dance bop
                        if(true){


                      }                         
                      var currentStam= this.monster.stamina
                      if(!this.monster.blockAction[i].dodged && this.monster.blockAction[i].pushBack <= 0){
                          this.monster.isAttacking = true;
                          ////alert("attacking 2")
                          this.monAttack(this.monster) 


                        // post attack effects
                        var monSkillType = 1
                        try{
                          var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                        }
                        catch(e){
                          //alert(e)
                        }                        
                        //var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                        switch(monSkillType){
                          //monster scratch
                          case 1:
                            //this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed += 1;
                            if(this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed > 3){
                              //this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed = 3;
                            }
                            break;
                        }
                        this.hunter.ulting = false;
                      }
                      this.monster.stamina=currentStam; 
                      
                      //this.hunter.blockDuration = 0
                      this.monster.blockAction[i].miss = false;
                      this.monster.blockAction[i].beenHit = true;
                      this.monster.blockAction[i].alpha = 1;
                      this.monster.blockAction[i].width += ((gameConfig.tileBuffer*1) + this.monster.blockAction[i].width) * 0.5;
                      this.monster.blockAction[i].height += ((gameConfig.tileBuffer*1) + this.monster.blockAction[i].height) * 0.5;                          
                      this.monster.blockAction[i].x = this.monster.blockAction[i].startPoint 
                      this.monster.blockAction[i].y = this.monsterRhythmUI.y+(this.monsterRhythmUI.height/2)
                      this.monster.blockAction[i].stopped= false;
                      this.monster.blockAction[i].angleSpeed = 2;                      
                      this.monster.blockAction[i].hp = 1 
                      if(i == 1){
                        this.monster.beenDodged = false;
                      }
                      if(this.monster.blockAction[i].dodged){
                        this.monster.blockAction[i].dodged = false;
                        var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                        //scratch double
                        if(monSkillType != 1 || true){
                          this.monster.blockAction[0].x = this.monster.blockAction[0].startPoint 
                          this.monster.blockAction[1].x = this.monster.blockAction[0].startPoint 
                        }
                        else{
                          //this.monster.blockAction[0].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[0].width
                          //this.monster.blockAction[1].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[1].width+150           
                          //this.monster.blockAction[1].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[1].width;              
                        }                         
                      }
                                               
                     
                        

                      //////////console.log(this.monster.moveKey)
                      
                      
                      this.monster.moveDecide = this.monster.attackPattern[this.monster.moveKey];  
                      ////console.log("attack pattern "+ this.monster.moveDecide)
                      this.map.alpha = 1;
                      if(this.monster.moveDecide == 0){
                        
                        this.monster.blockAction[i].hp = 1;
                        ////alert(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name)
                        this.monster.attackAction[0].loadTexture(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name);
                        if(this.hunter.ultCharge >= this.monster.comboLimit || this.hunter.ulting == true){
                            this.monster.attackAction[0].loadTexture(this.hero[0].ultSkill.name);

                            this.hunter.ultCharge = 0;
                            this.hunter.charge = 0;
                            this.map.alpha = 0.2;
                            this.hunter.ulting = true;
                            
                            
                        }
                        for(var j=0;j<1;j++){
                          this.monster.attackAction[j].hp = 1;  
                        }  
                        
                        var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                         //scratch double
                        if(monSkillType != 1 || true){
                          this.monster.blockAction[0].x = this.monster.blockAction[i].startPoint 
                          this.monster.blockAction[1].x = this.monster.blockAction[i].startPoint 
                        }
                        else{
                          //this.monster.blockAction[0].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[i].width
                          //this.monster.blockAction[1].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[1].width+150           
                          //this.monster.blockAction[1].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[1].width;                        
                        }                          
                        //this.hunter.charge = 0;

                      } 
                      else{
                        //reset special attack effects while move
                        ////////console.log(this.monster.moveKey+" "+this.monster.attackPattern.length)
                        this.monster.blockAction[i].hp = 1;
                        var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                        
                        switch(monSkillType){
                          case 1:
                            //this.monster.blockAction[i].hp = 10;
                            break;                          
                          case 2:
                            //this.monster.blockAction[i].hp = 2;
                            
                            break;
                          case 3:
                            //this.monster.blockAction[i].hp = 1;
                            break;                          
                          case 4:
                            this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed = 0;
                            break;
                          case 5:
                            //this.monster.blockAction[i].hp = 2;
                            break;
                        }
                        var correctHP = this.monster.moveKey-1;
                        if(this.monster.moveKey < 0){
                          this.monster.moveKey = 0
                        }
                        
                      
                        
                        if(this.monster.moveKey < this.monster.attackPattern.length-1){
                          var holder = this.monster.moveKey+1
                          if(holder >= this.monster.attackPattern.length-1){
                            holder = 0; 
                          }
                          //////console.log("holder "+holder+" length "+this.monster.attackPattern.length)
                          this.monster.blockAction[i].hp = this.monster.skill[this.monster.attackPattern[holder]].hp  
                          this.monster.blockAction[i].loadTexture(this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].name);
                         

                        }
                        
                        ////console.log("movekey "+this.monster.moveKey+" monskill "+monSkillType+" hp "+this.monster.blockAction[i].hp+" id: "+i)
                        if(i == 1){
                          this.monster.moveKey++;
                          //randomized attack pattern
                          //this.monster.moveKey = Math.floor(Math.random() * this.monster.attackPattern.length)
                           
                          if(this.monster.moveKey > this.monster.attackPattern.length){
                            this.monster.moveKey = 0;
                          }                        
                          this.monster.moveDecide = this.monster.attackPattern[this.monster.moveKey];  
                          
                          if(this.monster.moveKey < this.monster.attackPattern.length-1){
                              monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                               //scratch double
                              if(monSkillType != 1  || true){
                                this.monster.blockAction[0].x = this.monster.blockAction[i].startPoint 
                                this.monster.blockAction[1].x = this.monster.blockAction[i].startPoint 
                              }
                              else{
                                //this.monster.blockAction[0].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[i].width
                                //this.monster.blockAction[1].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[1].width+150           
                                //this.monster.blockAction[1].x = this.monster.blockAction[i].startPoint + this.monster.blockAction[1].width;                           
                              }                              
                          }                          
                          
                        }                          
 
                        ////////console.log("pattern "+this.monster.attackPattern)
                        ////////console.log("place "+this.monster.moveKey)          
                        ////////console.log("HP "+this.monster.blockAction[i].hp )                          

                      }
                      //this.monster.moveDecide = Math.floor(Math.random() * 2);
                    }
                    //this.monster.blockAction[i].y -= this.monster.speed
                  }
                 else if( (this.monster.blockAction[i].x <= this.rhythmArrow.x && this.monster.blockAction[i].pushBack <= 0 && this.monster.blockAction[i].hp > 1) ){
                    var currentStam= this.monster.stamina
                    ////alert("CHUNK HIT "+this.hunter.blockDuration)
                    this.monAttack(this.monster)     
                    this.monster.stamina=currentStam;           

                    this.monster.blockAction[i].hp--;
                    this.monster.blockAction[i].x += 10;
                    var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                    this.monster.windingUp = false
                    switch(monSkillType){ 
                      case 2:
                        this.monster.blockAction[i].pushBack = 25  
                        this.monster.blockAction[i].beenHit = false;
                        //console.log("bite bounce "+this.monster.blockAction[i].beenHit)
                        break;
                      case 3:
                        this.monster.blockAction[i].pushBack = 25  
                        break;
                    }
                    //this.rhythemUI.alpha = 1;
                    this.rhythemUI2.alpha = 0;
                    this.rhythemUI.y = 100
                    this.rhythemUI2.y = 50                                
                    this.rhythemUI.loadTexture("blockMiss");     
                    this.dialougeTimer = 100;                    
                    
                    this.monster.isAttacking = true;
                    ////alert("attacking 1")

                  }
                  else if( this.monster.moveDecide != 0){
                    if( this.hunter.ulting){
                      
                      //ult emitter end
                      for(var j =0; j < this.ultEmitter.length;j++){
                        this.ultEmitter[j].alpha = 0;
                        this.map.alpha = 1;            
                      }                      
                    }                      
                    //////////console.log(this.monster.blockAction[i].speed)
                    //////////console.log(this.monster.skill);
                    
                    //this.monster.blockAction[i].alpha = 1;
                    this.monster.blockAction[i].width = 85//((gameConfig.tileBuffer*this.monster.blockAction[i].hp) - this.monster.blockAction[i].width) * 0.5;
                    this.monster.blockAction[i].height = 85//((gameConfig.tileBuffer*this.monster.blockAction[i].hp) - this.monster.blockAction[i].height) * 0.5;
                    // special attack effects while move
                    var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                    switch(monSkillType){
                      //scratch always small
                      case 1:
                        this.monster.blockAction[i].hp = 1;
                        break;
                      case 2:
                        if(this.monster.blockAction[i].beenHit){
                          this.monster.blockAction[i].hp = 2;
                        }
                        
                        break;                        
                      //acid spit
                      case 3:
                        //anticipation
                        var diff =   this.monster.blockAction[i].x - (this.game.width-(this.monster.blockAction[i].width/3));
                        ////////console.log(diff)
                        if(diff <= 0 ){
                          this.monster.blockAction[i].angleSpeed += 2;
                          this.monster.blockAction[i].angle+=this.monster.blockAction[i].angleSpeed;
                          if(!this.monster.blockAction[i].stopped){
                            ////////console.log("lets pause "+this.monster.blockAction[i].stopped)
                            this.monster.blockAction[i].stopper = 100;
                            this.monster.blockAction[i].stopped = true;
                            ////////console.log("lets pause "+this.monster.blockAction[i].stopped)
                          }
                          //gather spit
                          if(this.monster.blockAction[i].stopper <= 10 && this.monster.blockAction[i].stopper > 0){
                            this.monster.blockAction[i].hp = 3;
                            this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed = 3;
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
                            ////////console.log("lets pause "+this.monster.blockAction[i].stopped)
                            this.monster.blockAction[i].stopper = 100;
                            this.monster.blockAction[i].stopped = true;
                            ////////console.log("lets pause "+this.monster.blockAction[i].stopped)
                          }
                          //fade
                          if(this.monster.blockAction[i].stopper <= 10 && this.monster.blockAction[i].stopper > 0){
                            this.monster.blockAction[i].alpha  = 0;

                          }                          
                        }
                        diff =   this.monster.blockAction[i].x - this.rhythmArrow.x;
                        if( diff > 100 && diff <= 400){
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
                        ////////console.log(diff)
                        if(diff <= 0 ){
                          //this.monster.blockAction[i].angleSpeed += 2;
                          //this.monster.blockAction[i].angle+=this.monster.blockAction[i].angleSpeed;\
                          var ran = Math.floor(Math.random() * 50)-25;
                          this.monster.blockAction[i].y = this.monsterRhythmUI.y+(this.monsterRhythmUI.height/2)+ran 
                          if(!this.monster.blockAction[i].stopped){
                            ////////console.log("lets pause "+this.monster.blockAction[i].stopped)
                            this.monster.blockAction[i].stopper = 50;
                            this.monster.blockAction[i].stopped = true;
                            ////////console.log("lets pause "+this.monster.blockAction[i].stopped)
                          }
                          //compress
                          if(this.monster.blockAction[i].stopper <= 10 && this.monster.blockAction[i].stopper > 0){
                            this.monster.blockAction[i].angle = 0;
                            this.monster.blockAction[i].hp = 0.5;
                            this.monster.blockAction[i].y = this.monsterRhythmUI.y+(this.monsterRhythmUI.height/2)
                            this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed = 20;
                            
                          }
                          if(this.monster.blockAction[i].stopper <= 0){
                            this.monster.blockAction[i].y = this.monsterRhythmUI.y+(this.monsterRhythmUI.height/2)
                          }
                          //this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed += 10;
                        }
                        break;

                       
                    }        
                    ////////console.log("stopped for "+this.monster.blockAction[i].stopper);
                    
                    // first block chance
                    var buffer = 10;
                    var diff = this.monster.blockAction[i].x - this.rhythmArrow.x
                    var currentX = this.monster.blockAction[i].x 
                    if(localStorage.getItem("first-block-attempt") === null ) {
                      localStorage.setItem("first-block-attempt",0);
                    }
                    
                    if(diff <= buffer && parseInt(localStorage.getItem("first-block-attempt")) == 0 ){
                      this.shieldArrow.alpha = 1;
                      //this.monster.blockAction[i].x = currentX;
                      for(var k; k < 2; k++){
                        //this.monster.blockAction[k].stopper = 1;
                      }
                      
                      if(parseInt(localStorage.getItem("firstVisit-combat")) == 4){
                        this.chatTimer = 1;
                        localStorage.setItem("firstVisit-combat",5)
                        this.textBackdropText.text = "Tap your shield to block"
                      }
                                        
                    }
                    else{
                      //place all buttons but block offscreen
                      var x = this.game.width/2
                      //this.hero[0].x = 
                      this.hero[0].origX = x - 50
                      this.hero[0].tarSize = this.hero[0].sizeHolder-50;
   
                     
          
                     
                      this.hero[2].origX = x
                      this.hero[2].tarSize = this.hero[2].sizeHolder
                      this.hero[2].bringToTop();


                      this.hero[1].y = this.game.height+100;
                      this.hero[1].origY = this.game.height+100;            
                      this.hero[1].holderY = this.hero[1].origY

   
                      //this.monster.blockAction[i].stopper <=  0 && 
                      if(this.battleStart){
                        this.monster.blockAction[i].angle = 0;
                        //this.beastBass.volume = 1;
                        //this.monster.blockAction[i].x -= this.monster.blockAction[i].speed+(this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].speed)-this.monster.blockAction[i].pushBack;  
                        this.monster.blockAction[i].x -= this.monster.rightSpeed//-this.monster.blockAction[i].pushBack; 
                        if(parseInt(localStorage.getItem("firstVisit-combat")) == 3 && this.monster.blockAction[i].x <= (this.game.width-100)){
                          //this.chatTimer = 1;
                          localStorage.setItem("firstVisit-combat",4)
                          //this.textBackdropText.text = "Monster Attacks come from the RIGHT."                              
                        }


                        if(this.skillGlow.alpha <= 0){
                          this.skillGlow.x =  this.rhythmArrow.x
                          this.skillGlow.y = this.monster.blockAction[i].y
                          this.skillGlow.width = this.monster.blockAction[i].width
                          this.skillGlow.height = this.monster.blockAction[i].height    

                          this.skillGlow.origWidth = this.monster.blockAction[i].width
                          this.skillGlow.origHeight = this.monster.blockAction[i].height                              
                                               
                        }
                         

                        
                        //monster attack windup
                        var diff = this.monster.blockAction[i].x - this.rhythmArrow.x
                        var buffer = gameConfig.tileBuffer;
                  
                        if(this.monAppear <= 0 && diff <= buffer){
                          this.monster.windingUp = true;
                        }
                                     
                      }                      
                    }
                    if(this.monster.blockAction[i].x  < this.rhythmArrow.x){
                      this.monster.blockAction[i].x = this.rhythmArrow.x
                    }
                    if(this.monster.blockAction[i].pushBack > 0){
                      this.monster.blockAction[i].pushBack--;
                      this.monster.blockAction[i].alpha = 1 
                      this.monster.blockAction[i].y = this.monsterRhythmUI.y+(this.monsterRhythmUI.height/2)
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
                
                for(var i=0; i < this.attackLimit; i++){
                   console.log("Attack HP "+this.monster.attackAction[i].hp)
                  if(this.monster.attackAction[i].x >= this.rhythmArrow.x || this.monster.attackAction[i].miss){


                    this.battleStart = false;
                    //////////console.log(this.monster.attackAction[i].miss)
                    //this.monster.blockAction[i].x -= this.monster.speed
                    if(this.monster.attackAction[i].alpha > 0.1 ){
                      this.monster.attackAction[i].y -= 1;
                      this.monster.attackAction[i].alpha += (0 - this.monster.attackAction[i].alpha) * 0.1; 
                      this.monster.attackAction[i].speed = this.hero[0].speed
                        if(this.hunter.ulting == true){
                          this.monster.attackAction[0].loadTexture(this.hero[0].ultSkill.name);
                        }                      
                    }
                    else{
                      
                      this.monster.attackAction[i].pushBack = 0;
                      this.monster.attackAction[i].speedUp = 0
                      //this.hunter.pushBack = 25;
                      
                      
                      if(this.hitFlag == 2){

                           
                        if(this.hunter.charge < this.monster.comboLimit){
                          //this.hunter.charge += this.hunter.critMul; 
                          if(this.hunter.charge >= this.monster.comboLimit){
                            this.hunter.charge = this.monster.comboLimit 
                          }
                          
                        }
                        

                       // if(this.hunter.charge > this.chargeUI.length){
                            //this.hunter.charge= this.chargeUI.length;
                        //}   
                        //this.chargeReady.play();                       
                      }
                      else{

                      }

                      if(this.hitFlag == 0){
                        if(!this.chargeFail.isPlaying){
                          this.chargeFail.play();
                        }
                        
                        this.hunter.critMul = 1;
                        this.mulStats.alpha =  0;
                        this.mulStats.y = this.mulStats.startY
                        this.mulStats.text = "COMBO!\nBROKEN"
                        this.mulStats.angle = -5   

                        //this.rhythemUI.alpha = 1;
                        this.rhythemUI2.alpha = 0;
                        this.rhythemUI.y = 100
                        this.rhythemUI2.y = 50                                      
                        this.rhythemUI.loadTexture("attackMiss");   
                        this.dialougeTimer = 100;                           
                      }
                      else{
                        this.hitFlag = 0;
                      }
                      this.monster.attackAction[i].miss = false;
                      //combo reset
                      //this.hunter.critMul = 1

                      this.monster.attackAction[i].alpha = 1;
                      this.monster.attackAction[i].width = 100//((75*(1+(this.hunter.charge*0.25))) - this.monster.attackAction[i].width) * 0.5;
                      this.monster.attackAction[i].height = 100//((75*(1+(this.hunter.charge*0.25))) - this.monster.attackAction[i].height) * 0.5;                         
                      this.monster.attackAction[i].x = this.monster.attackAction[i].startPoint //- this.monster.attackAction[i].width;//Math.floor(Math.random() * 150)-500 //-250
                      this.monster.attackAction[i].y = this.monsterRhythmUI.y+(this.monsterRhythmUI.height/2)
                      
                      this.monster.attackAction[i].hp--

                      if(this.monster.attackAction[i].hp < 1){
                        this.monster.attackAction[i].hp = Math.floor(Math.random() * this.hunter.weight)+1;
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
                      }

                      if(this.hunter.ulting == true){
                        
                        this.hunter.ulting = false;
                        
                        this.hunter.critMul = 1;

                        switch(this.monster.comboLimit){
                          case 10:
                            this.monster.comboLimit = 25;
                            break;
                          case 25:
                            this.monster.comboLimit = 50;
                            break;  
                          case 50:
                            this.monster.comboLimit = 100
                            break;
                          case 100:
                            this.monster.comboLimit = 100;
                            break;                                                
                        }                        

                        //this.hunter.ultMul = 0;
                        //this.mulStats.alpha = 0;   
                        this.rhythemUI.alpha = 0;
                        this.map.alpha = 1;
                        /*
                        this.monEmitter.on = false  
                            this.slashAttack.alpha = 1;
                            this.slashAttack.x = 0;
                            this.slashAttack.y = this.monster.y
                            this.slashAttack.width= 10;
                            this.slashAttack.height = 10;                           
                        //this.monEmitter.start(false, 1500, 450);    
                        */
                      }                        
                      if(this.monster.moveDecide == 0){
                        ////alert(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name)
              
                        this.monster.attackAction[0].loadTexture(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name);


                      }                       
                    }
                    //this.monster.blockAction[i].y -= this.monster.speed
                  }
                  else if( this.monster.moveDecide == 0){
                    ////////////////////////////////////////////////////////////////////////////////
                    //scramble monster pattern
                    //this.monster.attackPattern = "";
                    for(var l = 0; l < this.attackLength ; l++){
                        var ran2 = Math.floor(Math.random() * (this.monster.skill.length-1))+1;
                        //this.monster.attackPattern += 1//ran2;
                    }
                    //this.monster.attackPattern +="0";
                    ////////////////////////////////////////////////////////////////////////////////

                    ////console.log("asda "+this.monster.attackPattern)
                    //////////console.log(this.monster.blockAction[i].speed)
                    this.monster.attackAction[i].width = 85//((gameConfig.tileBuffer) - this.monster.attackAction[i].width) * 0.5;
                    this.monster.attackAction[i].height = 85//((gameConfig.tileBuffer) - this.monster.attackAction[i].height) * 0.5;  
                    //this.monster.attackAction[i].alpha = 5;
                    //this.monster.attackAction[i].alpha += (1 - this.monster.attackAction[i].alpha) * 0.1; 
                    
                    this.monster.attackAction[0].loadTexture(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name);
                    
                    var speed = this.monster.attackAction[i].speedUp+this.monster.speed-this.monster.attackAction[i].pushBack;//this.monster.attackAction[i].speedUp+this.monster.attackAction[i].speed+(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].speed)-this.monster.attackAction[i].pushBack;
                    
                    if((speed <= 0 || this.hunter.ulting) && this.monster.attackAction[i].pushBack == 0){
                      speed = 3;                     
                    }    
                    if(this.monster.attackAction[i].pushBack > 0){
                      this.monster.attackAction[i].pushBack--;
                    } 
                    if(this.hunter.ultCharge >= this.monster.comboLimit || this.hunter.ulting == true){
                        
                        if(this.monster.attackAction[i].width <= (gameConfig.tileBuffer*(1)) ){
                          //ult pulse
                          if(this.timer%(100-(25*this.monster.speed)) == 0){
                            this.monster.attackAction[i].width = this.monster.attackAction[i].width*1.5;
                            this.monster.attackAction[i].height = this.monster.attackAction[i].height*1.5;                            
                          }

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
                        this.hunter.ultMul = this.hunter.critMul
                        ////console.log(this.monEmitter)
                        //this.monEmitter.start(false, 1500, 450);
                       // if(!this.monEmitter.on){
                         // this.monEmitter.start(false, 1500, 450);
                        //}                      
                    }                    
                    // first attack chance
                    var buffer = gameConfig.tileBuffer;
                    var diff =  this.rhythmArrow.x - this.monster.attackAction[i].x
                    if(localStorage.getItem("first-attack-attempt") === null ) {
                      localStorage.setItem("first-attack-attempt",0);
                    }
                   
                    ////console.log("diff "+diff)
                    if(diff <= buffer/2 && parseInt(localStorage.getItem("first-attack-attempt")) == 0 ){
                      this.attackArrow.alpha = 1;
                      this.attackArrow.x = this.hero[0].x
                      if(parseInt(localStorage.getItem("firstVisit-combat")) == 6){
                        this.chatTimer = 1;
                        localStorage.setItem("firstVisit-combat",7)
                        this.textBackdropText.text = "Tap your weapon to attack"    
                      }                      
                  
                    }                  
                    else if(parseInt(localStorage.getItem("first-ult-attempt")) == 0){
                      
                    }
                    else{
                      //place all buttons but attack offscreen
                      var x = this.game.width/2
                      
                      this.hero[0].origX = x
                      this.hero[0].tarSize = this.hero[0].sizeHolder;
                      this.hero[0].bringToTop();
                     
          
                      
                      this.hero[2].origX = x + 50 
                      this.hero[2].tarSize = this.hero[2].sizeHolder-50;
                      

                      this.hero[1].y = this.game.height+100;
                      this.hero[1].origY = this.game.height+100;            
                      this.hero[1].holderY = this.hero[1].origY                  

                      //this.beastBass.volume = 0;
                      if(this.battleStart){
                        this.monster.attackAction[i].x +=  this.monster.leftSpeed;   
                      }
                      
                      if(parseInt(localStorage.getItem("firstVisit-combat")) == 5 && this.monster.attackAction[i].x >= 100 ){
                        //this.chatTimer = 1;
                        localStorage.setItem("firstVisit-combat",6)
                        //this.textBackdropText.text = "Your Attacks come from the LEFT."                              
                      }

                      if(this.skillGlow.alpha <= 0){
                        this.skillGlow.x =  this.rhythmArrow.x
                        this.skillGlow.y = this.monster.attackAction[i].y
                        this.skillGlow.width = this.monster.attackAction[i].width
                        this.skillGlow.height = this.monster.attackAction[i].height    

                        this.skillGlow.origWidth = this.monster.attackAction[i].width
                        this.skillGlow.origHeight = this.monster.attackAction[i].height                              
                                             
                      }                                       
                    }                    
                    
                  }

                  //this.attackIcon.alpha = 0                 
                }                
                
                this.monster.width += (this.monster.tarSize - this.monster.width) * 0.05; 
                this.monster.height += (this.monster.tarSize - this.monster.height) * 0.05; 
                
                
                this.monster.angle += (this.monster.tarAngle - this.monster.angle) * 0.1; 
                
                
                this.monster.angleSpeed += (0 - this.monster.angleSpeed) * 0.05; 
                if(this.monster.angleSpeed > 0.01){
                  this.monster.angle += this.monster.angleSpeed;                
                    
                }
                else{
                    this.monster.angleSpeed = 0;
                    this.monster.angle = 0;
                }
                
                //this.monsterRhythmUI.height += (50 - this.monster.angleSpeed) * 0.05; 

                //monster pulse bop
                //if(this.timer%((this.game.width/2)/this.monster.speed) == 0){
                ////console.log("distanc "+(this.game.width+100)/50)

                //side to side
                if(this.timer%30 == 0){

                  if(this.monAngry.dir == 1){
                    this.monAngry.dir = 0
                    this.monAngry.angle = 25
                  }
                  else{
                    this.monAngry.dir = 1;
                    this.monAngry.angle = -25
                  }                  
                }

  
                this.monsterstamUI.y = this.monster.y+(this.monster.height/2)-120
                 
                //bring dialog to the front
                
                this.transition.bringToTop();
                this.okayButton.bringToTop();
                this.mapWarden.bringToTop();
                this.textBackdrop.bringToTop();
                this.textBackdropText.bringToTop();
                this.textBackdropText2.bringToTop();
                this.okayButton2.bringToTop();
                

                //this.monsterstamUIAttack.tint = "blue";
                //this.monsterstamUIBad.y = this.monster.y+(this.monster.height/2)-120
                
                this.monsterstamUI.x = this.monster.x-this.monster.width/2

                var dist = 0;
             
                
                
  


                
                this.monsterstamUI.width = (this.monster.stamina/100)*this.monster.tarSize;

              
                
                
                
                
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
                //////////console.log(this.monster.stamina)
                
                if(this.monsterstamUI.width >= (this.monster.tarSize)){
                  this.monster.earlyAttack = 0;
                  this.monsterTimer--;
               
                if(this.monsterTimer <= 0){
                  //////////console.log("attack")
                  //this.monster.target = this.selectTarget();

                    this.actionStats.alpha = 1;
                    //////////console.log(this.monster.mp - this.monster.actionTimer == 1)
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
                           //this.monAttack(this.monster) 
                           
                        }
                        else{
                          this.monster.actionTimer++;
                        }
                    }

                    

                }
                }

                
                // position & size anim mon
                if(!this.monster.isFlying  ){
                    if(this.monster.windingUp){
                      if(this.monster.y > (this.game.height/2)-150 ){
                        this.monster.y -= 1;    
                      }
                      
                    }
                    else{
                      this.monster.y += (this.monster.origY - this.monster.y) * 0.1;
                    }
                    
                    if(this.monster.x > this.monster.origX && this.monAppear >= 0){
                      this.monster.x -= 5;
                    }
                    else{
                      this.monster.x += (this.monster.origX - this.monster.x) * 0.1;

                      this.rhythmArrow.x += Math.floor((this.rhythmArrow.origX - this.rhythmArrow.x) * 0.3);
                      
                      this.map.x += Math.floor((this.map.origX - this.map.x) * 0.3);
                    }
                    
                }
                else{
                    this.monster.y += ((150)- this.monster.y) * 0.1;
                    //this.monster.x += (this.monster.origX - this.monster.x) * 0.1;                    
                }


                //monster shadow
                   

                if(this.monster.roarCounter == 1){
                  this.monsterShadow.x += ((this.monster.x)- this.monsterShadow.x) * 0.2
                  this.monsterShadow.y += ((this.monster.y)- this.monsterShadow.y) * 0.2
                }                
                else{
                  this.monsterShadow.x = this.monster.x;
                  this.monsterShadow.y = this.monster.y;
                }

                //monster outline
                if(this.monster.isApex){
                  this.monsterOutline.alpha = this.monster.alpha;
                  this.monsterOutline.x = this.monster.x;
                  this.monsterOutline.y = this.monster.y;      
                  this.monsterOutline.width = this.monster.width;
                  this.monsterOutline.height = this.monster.height;                         
                }
                     
                
                //monster angry 
                this.monAngry.x = this.monster.x;
                this.monAngry.y = this.monster.y;
                this.monAngry.width = this.monster.width;
                this.monAngry.height = this.monster.height;

                //mon heart ui
                this.monsterhpUI.y += ((this.game.height/2)- this.monsterhpUI.y) * 0.1;
                try{
                  this.monEmitter.x = this.monster.x
                  this.monEmitter.y = this.monster.y-25
                }
                catch(error){
                  //alert(error)
                }

                
                //attack FX
                this.attackFX.alpha += ((0)- this.attackFX.alpha) * 0.1;

                this.attackFX.height =this.monster.tarSize 
                this.attackFX.width = this.monster.tarSize
                
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


            
            if(this.monHPText2.alpha > 0.1){
              this.monHPText2.alpha += (0 - this.monHPText2.alpha) * this.fadeSpeed;
              this.fadeSpeed += 0.001;
              this.monsterhpUI.width += (50 - this.monsterhpUI.width) * 1; 
              this.monsterhpUI.height += (50 - this.monsterhpUI.height) * 1; 


              this.monHPText2.x+=this.monHPText2.direction
              this.monHPText2.y -= this.monHPText2.upward
              if(this.monHPText2.upward > -5){
                this.monHPText2.upward-=0.5;
              }
              
            }
            else{
              this.fadeSpeed = 0.005;
              this.monHPText2.alpha = 0;
              
              this.monHPText2.x = this.monster.x//this.monHPText.x+this.monHPText.width
              this.monHPText2.y = this.monster.y//this.monHPText.x+this.monHPText.width
              this.monsterhpUI.width = 50
              this.monsterhpUI.height = 50
              this.monHPText2.upward = 10
              var dirRan = Math.floor(Math.random() * 2)
              var direction = 0;
              if(dirRan == 0){
                this.monHPText2.direction = -3
              }
              else{
                this.monHPText2.direction = 3
              }              
            }
              
            for(var i = 0; i < 100; i++){
                if(this.damageUI[i].alpha > 0){
                    
                    this.damageUI[i].alpha += (0 - this.damageUI[i].alpha) * 0.005; 
                    this.damageUI[i].y -= this.damageUI[i].upward;
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
                this.game.plugins.screenShake.shake(15);
                this.hero[0].y += 5
                this.hero[1].y += 10
                this.hero[2].y += 15
                //this.hitStop = 5;
                this.monster.windingUp = false
                  
                this.actionStats.alpha = 1;
                //this.monster.width =this.monster.tarSize+10;
                //this.monster.height =this.monster.tarSize+10; 
          
                if(this.monster.isFlying){
                    this.monster.y += (this.monster.origY - this.monster.y) * 0.1;
                    this.monster.x += (this.monster.origX - this.monster.x) * 0.1;
                    this.actionStats.text = "\n"+this.monster.name+" lands and loses "+Math.round((unit.intel*unit.level)*0.5)+" SPD!";
                    this.monster.isFlying = false;                     
                }
                else{
                    //this.monster.y += ((-400)- this.monster.y) * 0.1;
                    //this.monster.x += (this.monster.origX - this.monster.x) * 0.1;                    
                }          
            this.monster.y +=50;
            //this.bonk2.play();
           

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


                //////console.log("ERROR "+this.monster.moveKey)
                //////console.log(this.monster.attackPattern)
                //////console.log(this.monster.attackPattern[this.monster.moveKey])
                var damage = 0;
                try{
                  if(typeof this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].attack === 'undefined'){
                    damage = 0;
                  }
                  else{
                    damage = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].attack
                  }
                }
                catch(error){
                  //alert(error)
                }

                
                // special attack effects
                var monSkillType = 1
                try{
                  var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                }
                catch(e){
                  //alert(e)
                }
                
                switch(monSkillType){
                  case 1:
                    damage = 0.5; //damage = 1;
                    break;
                  default:
                    damage = 0.5;
                    break;                    
                }     
                
                if(this.hunter.isBlocking || this.hunter.blockDuration > 0){

                  //this.bonk1.play();
                  damage = 0;
                }
                else{
                  
                  if(this.hunter.critMul > 1){
                    //this.hunter.charge -= Math.round(this.hunter.charge/3);
                    if(this.hunter.charge <=0 ){
                      this.hunter.charge = 0
                    }                    
                    if(!this.chargeFail.isPlaying){
                      this.chargeFail.play();
                    }
                    
                    this.hunter.critMul = 1;
                    this.mulStats.alpha =  0;
                    this.mulStats.y = this.mulStats.startY
                    this.mulStats.text = "COMBO!\nBROKEN"
                    this.mulStats.angle = -5    
                  }                    
                  //this.bonk2.play();
                }
                ////////console.log("Take "+damage)
                //damage = att * att / (att + def) 

                if(hit >= dodge){
                    if(damage > 0){
                      this.gotHit.alpha = 1;
                    }                    
                    // take damage
                    ////////console.log("Am I still blocking "+this.hunter.blockDuration)
                   // console.log("HP "+this.hunter.hp)


                    var hpFloor = Math.ceil(this.hunter.hp-1)
                    if(hpFloor < 0 ){
                      hpFloor = 0;
                    }                    
                    

                    console.log("HP "+hpFloor)
                    if(damage > 0){
                      this.heart[hpFloor].y += 50
                    }
                    else{
                      this.heart[0].y += 25
                      this.heart[1].y += 20
                      this.heart[2].y += 15
                    }
                 
                    this.hunter.hp -= damage
                    //legendary and Apex instant kill
                    if(this.monster.id == 99 || this.monster.isApex){
                      if(damage > 0){
                        this.hunter.hp = 0
                        this.heart[0].loadTexture("heart-hurt");
                        this.heart[1].loadTexture("heart-hurt");
                        this.heart[2].loadTexture("heart-hurt");   
                        this.heart[0].y += 50
                        this.heart[1].y += 50
                        this.heart[2].y += 50                      
                      }                       
         
                      //this.hunter.hp -= damage  
                      
                    }                       
                    
                    

                    //hunter dead
                    //console.log("adsasdasdasdasdasdadasda")
                    if (this.hunter.hp <= 0 && localStorage.getItem("firstVisit-combat-lose") === null ) {
                      ////alert("live")
                      this.chatTimer = 1;
                      this.hunter.hp = 3;
                      this.textBackdropText.text = "Remember we can only take 3 hits. Catch your breath and Try again"  
                      this.transition.alpha = 0
                    }                    
                    else if(this.hunter.hp <= 0 && parseInt(localStorage.getItem("firstVisit-combat-lose")) == 1){
                      ////alert("Nah")
                      this.hitStop = 500;
                      this.transition.scale.y *= -1; 
                      this.transition.alpha = 1
                      this.transition.y = (this.game.height*1.5)+2500
                      this.heart[0].loadTexture("heart-hurt");
                      //this.sweatSound.stop();                                         
                      //this.game.state.start('lose');                            
                    }
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
                    this.monHPText2.text = "DODGE"
                    this.monHPText2.alpha = 1;    
                    this.monHPText2.x = this.monster.x//this.monHPText.x+this.monHPText.width
                    this.monHPText2.y = this.monster.y//this.monHPText.x+this.monHPText.width                    
                    //this.monHPText2.x = this.monHPText.x+this.monHPText.width                          
                    this.monsterhpUI.width = 60
                    this.monsterhpUI.height = 60      
                    
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
            //center 
            
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

            this.hero[unit].attackValue = weapon[heroID].attackValue 
            this.hero[unit].attackType = weapon[heroID].attackType
            this.hero[unit].element = weapon[heroID].element
            this.hero[unit].wepId = weapon[heroID].id

            if(weapon[heroID].ultSkill == null){
              
            }
            else{
              this.hero[unit].ultSkill = weapon[heroID].ultSkill 
            }
            
            this.hero[unit].ultSkillMax =  weapon[heroID].ultSkillMax;
            
            this.hero[unit].counterTimer = 0;
            ////console.log(heroID)
            this.hero[unit].loadTexture(weapon[heroID].name);
            if(this.isWepShiny == 1 && unit == 0){
              this.hero[unit].loadTexture(weapon[heroID].name+"-variant");
              
            }
            this.hero[unit].width = 125;
            this.hero[unit].height = 125;
            this.hero[unit].tarSize = 125;
            this.hero[unit].stamina = 100;

            if(this.hero[unit].role == 1 || this.hero[unit].role == 2){
              this.hero[unit].width = 150;
              this.hero[unit].height = 150;
              this.hero[unit].tarSize = 150;              
            }   
            if(this.hero[unit].role == 1){
              this.hero[unit].width = 100;
              this.hero[unit].height = 100;
        
            }                    
            
            this.hero[unit].sizeHolder =  this.hero[unit].tarSize;

            if(this.hero[unit].role == 2){
              //this.hero[unit].cost = 100;
              this.hero[unit].stamina = parseInt(localStorage.getItem("potUsed"))
              if(this.hero[unit].stamina <= 0){
                this.hero[unit].loadTexture("emptyBot");
              }
            }
            this.hero[unit].maxhp = this.hero[unit].hp

            
            
            
        }
        , setMonster: function (monID,level){
            //monID = 
            this.battleStart = false;
            this.monster.id = monID
            this.monster.x = 800;
            this.monster.tint = 0x00000;

            this.monster.rageOn = false;

            this.monster.beenDodged = false;
            this.monsterstamUI.width = 0;
            this.monster.danceDir = Math.floor(Math.random() * 2)
            this.monster.tarAngle = 0;
            
            this.runAwayTimer = -1;

            //this.monster.angleSpeed = 1;
            this.monster.name = monster[this.biome][monID].name
            this.monster.loadTexture(monster[this.biome][monID].name);
            this.monsterOutline.loadTexture(monster[this.biome][monID].name+"-apexOutline");
            this.monsterShadow.loadTexture(monster[this.biome][monID].name);
            var shinyMax = 15 - parseInt(localStorage.getItem("monCount"))
            if(shinyMax < 3){
              shinyMax = 3
            }
            var shinyChance = Math.floor(Math.random() * apexMax);

            var apexMax = 5 - parseInt(localStorage.getItem("monCount"))
            if(apexMax < 2){
              apexMax = 2
            }
            var apexChance = Math.floor(Math.random() * apexMax);
            if( ! (parseInt(localStorage.getItem("firstVisit-apex")) >= 1) ){
              apexChance = 0;
            }
            else{
              
            }

            if(this.biome == -1){
              apexChance = 0;
            }
            // is Apex
            if(apexChance == 1){
              this.monster.isApex = true  
              this.monsterOutline.alpha = 1;
              localStorage.setItem("firstVisit-apex",2)
            }
            else{
              this.monster.isApex = false 
            }
                      

            var d = new Date();
            var n = d.getHours();
            // day and night
            this.timeOfDay = n;
            if((this.timeOfDay >= 18 && this.timeOfDay <= 24) || (this.timeOfDay >= 1 && this.timeOfDay <= 4)){
              
              this.map.loadTexture("BG"+localStorage.getItem("Markerbiome")+"-night");
            }
            
            switch(this.biome){
              case 0:
                //shiny hour - disabled
                if(n == 9){
                  //shinyChance = 1;
                }                
                break;
              case 1:
                if(n == 13){
                  //shinyChance = 1;
                }                    
                break;     
              case 2:
                if(n == 17){
                  //shinyChance = 1;
                }                    
                break;                           
            }            

            //shinyChance = 1;

;

            //revenge!
            if(this.revengeHunt == 1){
              var revengeShine = parseInt(localStorage.getItem("revengeHuntshinyGet"))
              shinyChance = revengeShine
            }
            else{
              //localStorage.setItem("revengeHuntSize",ran)
              localStorage.setItem("revengeHuntshinyGet",shinyChance);
            } 
            //shiny lock
            if(localStorage.getItem("firstVisit-tut-shinyLock") === null ) {
              localStorage.setItem("firstVisit-tut-shinyLock",1);
              shinyChance = 0;
            } 
            if(monID == 99 || this.biome == -1){
              shinyChance = 0;
            }
            
            if(shinyChance == 1 && parseInt(localStorage.getItem("mutantUnlock")) == 1 ){
              localStorage.setItem("shinyGet",1);
              this.monster.loadTexture(monster[this.biome][monID].name+"-variant");
              this.monsterShadow.loadTexture(monster[this.biome][monID].name+"-variant");

            }

            this.monster.roarCounter = 0;
            
            //apex shadow
            if(this.monster.isApex){
              
              this.monsterShadow.tint = 0xFF0000
            }
            this.monsterShadow.x = this.monster.x;
            this.monsterShadow.y = this.monster.y;


            this.shinyChance = shinyChance
            this.monster.nameTitle = monster[this.biome][monID].nameTitle

            localStorage.setItem("monName",monster[this.biome][monID].name);
            localStorage.setItem("monNameTitle",monster[this.biome][monID].nameTitle);
            var ran = Math.floor(Math.random() * 6)+1;
          
            //revenge!
            
            var revengeRan = parseInt(localStorage.getItem("revengeHuntSize"))
            if(this.revengeHunt == 1){
              ran = revengeRan 
            }
            else{
              localStorage.setItem("revengeHuntSize",ran)
              //localStorage.setItem("revengeHuntshinyGet",shinyChance);
            }
            //small
            if(ran >= 1 && ran <= 3){
              localStorage.setItem("monSize","small");
              this.monster.width = 200;
              this.monster.height = 200;
            }
            //medium
            if(ran >= 4 && ran <= 5){
              localStorage.setItem("monSize","medium");  
              this.monster.width = 300;
              this.monster.height = 300;
            }                  
            //large
            if(ran == 6){
              localStorage.setItem("monSize","large");  
              this.monster.width = 350;
              this.monster.height = 350;
            }             
            
            //set legendary size
            if(monID == 99 ){
              localStorage.setItem("monSize","legendary");  
              this.monster.width = 300;
              this.monster.height = 300;        
              //this.bgSound.volume = 0;      
            }

            if(this.monster.isApex){
              localStorage.setItem("monSize","apex");  
              this.monster.width = 300;
              this.monster.height = 300;   
            }
            //training dummy

            if(this.biome == -1){
              localStorage.setItem("monSize","medium");  
              this.monster.width = 300;
              this.monster.height = 300;
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
            //localStorage.setItem("currentRank",calRank)
            var jitter = Math.floor(Math.random() * 3)//-1;
            var level = parseInt(localStorage.getItem("currentRank"))+parseInt(localStorage.getItem("veteranRank"))
            if(parseInt(localStorage.getItem("currentRank")) > 1){
              this.monster.level = level+jitter;
            }
            else{
              this.monster.level = level
            }
            

            this.monster.level += parseInt(localStorage.getItem("monCount"))*2

            if(this.monster.level <= level){
              this.monsterhpUI.loadTexture('monHeart');
              this.monLevelText.text = this.monster.level            
            }
            else{
              this.monsterhpUI.loadTexture('monHeart-Danger');
              this.monLevelText.text = this.monster.level               
            }
            

            this.monster.comboLimit = this.monster.level*monID
            if(monID == 99){
              this.monster.comboLimit = this.monster.level*10
            }

            if(parseInt(localStorage.getItem("currentRank")) <= 1){
              this.monster.comboLimit = 6*this.monster.level*monID
            }



            this.monster.comboLimit = 25;
      
            
            //localStorage.setItem("moneExp",  this.monster.level*this.monbaseExp) 

            var levelBump = Math.floor(this.monster.level/5)
            var levelBumper = levelBump

            //old scaling
            this.monster.hp = 5+(50*levelBumper)//Math.floor(monster[this.biome][monID].hp*this.monster.level*gameConfig.hpScale*levelBumper);

            //monster rank
            this.monster.rank = monster[this.biome][monID].rank
            //apex increases rank
            if(this.monster.isApex && this.monster.rank < 4){
              this.monster.rank += 1;
            }
            //set hunt timer & scoreThreshold
            var thresholdMul = Math.ceil(parseInt(localStorage.getItem("currentRank"))/3)//Math.ceil(this.currentWepLevel/1)
            /* // old timing
            switch(this.monster.rank){
              case 1:
                this.huntTimer = 1000;
                this.scoreThreshold = 7000;
                break;
              case 2:
                this.huntTimer = 1200;
                this.scoreThreshold = 20000;
                break;      
              case 3:
                this.huntTimer = 1400;
                this.scoreThreshold = 79000;
                break;
              case 4:
                this.huntTimer = 1800;
                this.scoreThreshold = 192500;
                break;                      
            }
            */            
            switch(this.monster.rank){
              case 1:
                this.huntTimer = 700;
                this.scoreThreshold = 7000;
                break;
              case 2:
                this.huntTimer = 900;
                this.scoreThreshold = 20000;
                break;      
              case 3:
                this.huntTimer = 1100;
                this.scoreThreshold = 79000;
                break;
              case 4:
                this.huntTimer = 1300;
                this.scoreThreshold = 192500;
                break;                      
            }
            //new hp scaling
            if(monID == 1){
              this.monster.hp = 25*this.monster.level
            }
            if(monID == 2){
              this.monster.hp = 25*this.monster.level
            }
            if(monID == 3){
              this.monster.hp = 50*this.monster.level
            }
            if(monID == 4){
              this.monster.hp = 100*this.monster.level
            }    
            if(monID == 99){
              this.monster.hp = 200*this.monster.level
            }                                                
            


            if(monID == 99){
              //this.monster.comboLimit = 100;
              //this.monster.hp = 9999
            }      

            if(this.monster.hp > 9999){
              this.monster.hp = 9999
            }



            this.monster.maxhp = this.monster.hp;    
            this.monster.mp = monster[this.biome][monID].mp;
            this.monster.attack = monster[this.biome][monID].attack;
            this.monster.defence = monster[this.biome][monID].defence;
            

            this.monster.elemDef = monster[this.biome][monID].elemDef
            this.monster.slashDef = monster[this.biome][monID].slashDef*this.monster.level;
            this.monster.stabDef = monster[this.biome][monID].stabDef*this.monster.level;
            this.monster.bashDef = monster[this.biome][monID].bashDef*this.monster.level;
          
            this.monster.dex = monster[this.biome][monID].dex;
            this.monster.dodge = monster[this.biome][monID].dodge;
            this.monster.intel = monster[this.biome][monID].intel;

            //calculate speed based on BPM
            var bpm = 110
            var bps = Math.floor(bpm/60)
            var distance = this.game.width/2
            var intervalTime = Math.floor(1000/bps)
            var speed = Math.floor((distance/intervalTime)*60)


            ////alert(this.beat+" "+distance)
            this.monster.speed = 10*bps//this.beat//monster[this.biome][monID].speed;
            

            this.monster.origSpeed = this.monster.speed 
            this.monster.rightSpeed = this.monster.speed 
            this.monster.leftSpeed = this.monster.speed 
                   


            //interval actions
           

            //console.log(intervalTime+" "+speed)
            this.game.time.events.loop(intervalTime, this.monBop, this);


           
            this.monster.target = Math.floor(Math.random() * 3);
          
            this.monster.skill = monster[this.biome][monID].skill;
          
            this.monster.attackPattern = monster[this.biome][monID].attackPattern;
            
            this.monster.attackPattern = "1"
            var ran = Math.floor(Math.random() * 3);


            var wepWeight =""
            this.monster.attackPattern =""
            this.attackLength = 0;
            //weapon[this.hero[0].heroID].weight
            switch(this.monster.rank){
              case 1:
                wepWeight = "LIGHT"
                //this.monster.attackPattern ="10";
                this.attackLength = 1
                break;
              case 2:
                wepWeight = "MEDIUM"  
                //this.monster.attackPattern ="110"; 
                this.attackLength = 2
                break;
              case 3:
                wepWeight = "HEAVY"
                //this.monster.attackPattern ="1110";
                this.attackLength = 3
                break;         
              case 4:
                wepWeight = "HEAVY"
                //this.monster.attackPattern ="1110";
                this.attackLength = 4
                break;                       
                   
            }
            //apex increases attack length
            if(this.monster.isApex && this.monster.rank < 4){
              this.attackLength = 6;
            }            
            var jitter = 0//Math.floor(Math.random() * 3)+1;
            this.attackLength += jitter
            //this.attackLength = 5
            for(var i = 0; i < this.attackLength ; i++){
                var ran2 = Math.floor(Math.random() * (this.monster.skill.length-1))+1;
                //////console.log(ran2)
                this.monster.attackPattern += 1;
            }
            //this.monster.attackPattern = "1222333310"
            this.attackLimit = 1  

            for(var i = 0; i < this.attackLimit ; i++){
              //////console.log(ran2)
              this.monster.attackPattern +="0";
            }            
            
            //this.monster.attackPattern = "11111110"
            //console.log("pattern "+this.monster.attackPattern)

      
            
            
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
        ,doNothing: function () {   


        }          
        , hideChat: function (unit) {
            this.okayButton.bringToTop();
            this.chatTimer = 0;
            console.log(this.chatTimer)
            ////alert("test")
            //intro tutorial progression
            this.dialogCounter = parseInt(localStorage.getItem("firstVisit-combat"))
            if(this.dialogCounter == 1){
              this.chatTimer = 1;
              localStorage.setItem("firstVisit-combat",2)
              this.textBackdropText.text = "Finally, your chance to prove yourself has come."
            }
            else if(this.dialogCounter == 2){
              this.chatTimer = 1;
              localStorage.setItem("firstVisit-combat",3)
              this.textBackdropText.text = "Remember your training!"
            }   
         
            else if(this.dialogCounter == 6){
              //this.chatTimer = 1;
              //localStorage.setItem("firstVisit-combat",7)
              //this.textBackdropText.text = "Good Hunting"
            }              
            
            // block tutorial progression
            this.dialogCounter = parseInt(localStorage.getItem("firstVisit-combat-perfectBlock"))
            if (this.dialogCounter == 1) {
                //this.chatTimer = 1;
                localStorage.setItem("firstVisit-combat-perfectBlock",2);
                //this.textBackdropText.text = "Try to keep your combo going as long as possible"    

                ////alert("You've successfully executed a PERFECT BLOCK and gained some ENERGY\n Gain enough ENERGY and use your weapon's ULTIMATE!")

            }      
            // evade tutorial progression
            this.dialogCounter = parseInt(localStorage.getItem("firstVisit-combat-evade"))
            if (this.dialogCounter == 1) {
                this.chatTimer = 1;
                localStorage.setItem("firstVisit-combat-evade",2);
                this.textBackdropText.text = "Remember, EVADING uses ENERGY, so be careful!"    

            }        
          
            
            // ultimate tutorial progression
            this.dialogCounter = parseInt(localStorage.getItem("firstVisit-ult"))
            if (this.dialogCounter == 1) {
                this.chatTimer = 1;
                localStorage.setItem("firstVisit-ult",2);
                this.textBackdropText.text = "Follow the instruction at the top of the screen"    

            } 
            else if (this.dialogCounter == 2) {
                this.chatTimer = 1;
                localStorage.setItem("firstVisit-ult",3);
                this.textBackdropText.text = "SWIPE, TAP or HOLD on the target monster to extend your combo"    

            }      
            else if (this.dialogCounter == 3) {
                this.chatTimer = 1;
                localStorage.setItem("firstVisit-ult",4);
                this.textBackdropText.text = "Remember to tap your weapon, once the Event Tile enters the Critical Zone to deal MASSIVE damage"    

            }                 
            //this.wardenHunt.width = 460;
            //this.wardenHunt.height = 260;  
            //this.wardenHunt.clicked = true;     
            //this.game.state.start('game') 

        }       
        , ultMove: function (unit) {
          if(unit.alpha >= 1){
            
            var damage = this.hero[0].ultSkill.attack;
            if(false){
              //damage = 0;
              //this.monster.hp -= this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul;
              this.monHPText2.text = 0          
            } 
            else{
              this.monster.y -=25;
              //this.hitStop = 25;
              this.monster.hp -= damage;
              //rage Mode
              //////this.rageCheck();      
              this.monHPText2.text = damage
            }              
            
            
            //this.monHPText2.text += " DAMAGE"
            this.monHPText2.alpha = 1;    
            this.monHPText2.x = this.monster.x//this.monHPText.x+this.monHPText.width
            this.monHPText2.y = this.monster.y//this.monHPText.x+this.monHPText.width            
            //this.monHPText2.x = this.monHPText.x+this.monHPText.width  
            this.monsterhpUI.width = 60
            this.monsterhpUI.height = 60            
            
            
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
        , setDamageText: function(damage,size,color){
            this.monHPText2.text = damage   
            this.monHPText2.alpha = 1;    
            this.monHPText2.x = this.monster.x
            this.monHPText2.y = this.monster.y  
            this.monHPText2.fontSize = size;    
             this.monHPText2.addColor
            this.monHPText2.clearColors()
            this.monHPText2.addColor(color, 0); 
            
            this.scoreText2.y -= 25
            this.scoreText2.fontSize += 15
            //this.scoreText2.width += 10
            //this.scoreText2.height += 10

          
        }
        , collectElement: function (particle) {
          this.hunter.ultMul++;
          if(this.hunter.ultMul > 30){
            this.game.plugins.screenShake.shake(30);
          }
          else{
            this.game.plugins.screenShake.shake(this.hunter.ultMul);
          }          

          particle.destroy();
          //console.log("UP "+this.hunter.ultMul)
        }
        , playBeat: function (){
          //this.reactiveBeat[this.beatKey].play();
          if(this.beatKey > 1){
            //this.reactiveBeat[this.beatKey-1].stop()
          }
          this.reactiveBeatOrig.volume = 1.5
          this.reactiveBeatOrig.play("marker"+this.beatKey)
          if(!this.reactiveBeatOrig.isPlaying){
            this.reactiveBeatOrig.fadeIn(100)
          }
          
          //this.reactiveBeatOrig.fadeOut(1500)
          //this.reactiveBeat[this.beatKey].play()
          //this.reactiveBeat[this.beatKey].fadeIn(100)
          //this.reactiveBeat[this.beatKey].fadeOut(1000)
          this.beatKey++;
          if(this.beatKey > this.beatKeyLimit){
            this.beatKey = 1
          }
        }    
        , rageCheck: function () {
          ////console.log("Before rage "+this.monster.speed)
          var levelGap = this.monster.level - ( parseInt(localStorage.getItem("currentRank"))+parseInt(localStorage.getItem("veteranRank")) )
          ////console.log("level gap "+this.monster.level)
          //rarity + level
          var rarityThreshold = (5-this.monster.rarity)
          
          
          //console.log(rarityThreshold)
          var gapThreshold = 20-levelGap
          if(gapThreshold <= 3){
            gapThreshold = 3;
          }
          var threshold = Math.floor(Math.random() * gapThreshold); //|| (this.monster.hp <= 10 &&  this.monster.level >= 20 && !this.monster.rageOn) !this.monster.rageOn 
          //console.log(" threshold " + threshold)
          //gameConfig.alwaysAngry|| (threshold <= 0 &&  this.monster.speed < 10 &&  levelGap >= 10 && this.monster.hp > 0)
          if(!this.monster.rageOn){
            this.monster.isAngry = true;
            //this.monster.hp = this.monster.maxhp
            this.monsterShadow.alpha = 1
            this.monster.rageOn = true;
            //this.game.sound.stopAll();
            this.monCry.play();
            //this.monster.speed += 2;
            if(this.monster.speed > 10){
              //this.monster.speed = 10;
            }
            //this.monster.blockAction[0].speed = this.monster.speed
            //this.monster.blockAction[1].speed = this.monster.speed
            //this.monster.angleSpeed = 0;
            this.game.plugins.screenShake.shake(15);
            this.monster.tint = 0xffffff; 
            if(this.monster.isApex){
              this.monster.tint = 0xB29FA5;   
            }             
            this.attackFX.alpha = 0;
            //this.monster.tarSize += 25;

            this.rhythemUI.alpha = 0  
            this.rhythemUI2.alpha = 0  
            //
            if (parseInt(localStorage.getItem("firstVisit-combat")) == 23) {
              localStorage.setItem("first-rage",1);
              this.chatTimer = 1;
              //localStorage.setItem("firstVisit-ult",1);
              this.textBackdropText.text = "This beast is ENRAGED. Stay on your toes. It won't run away now!"      

            }     
                      
            //this.monster.width += 20
            //this.monster.height += 20
            //this.monster.x = this.monster.tarX;
            //this.monster.y = this.monster.tarY;  
           
            //this.monster.y -=25; 
            //this.hitStop = 50;       

          }
          else{
            //this.monster.speed = monster[this.biome][this.encounterID].speed
          }  
          //console.log("After rage "+this.monster.speed)
        }  
        , loot: function(){
          if(this.lootOkay){
            this.ping.play();
            this.sweatSound.stop();
            localStorage.setItem('state','win')
            localStorage.setItem("markedMon",this.encounterID)
            localStorage.setItem("hunterHP",this.hunter.hp);
            this.game.state.start('win')    
            
            if (localStorage.getItem(this.biome+"-"+this.monster.id+" Hunted") === null ) {
              localStorage.setItem(this.biome+"-"+this.monster.id+" Hunted",0)
            }                
            var huntCountHolder = parseInt(localStorage.getItem(this.biome+"-"+this.monster.id+" Hunted"))
            localStorage.setItem(this.biome+"-"+this.monster.id+" Hunted",huntCountHolder+1)            
          }
           
        }
        , shareScore: function(){
          if(this.shareButton.alpha == 1){
            //this.ping.play();
            this.cameraSnap.play();
            this.sweatSound.stop();       
            
           
            
             
      
            try{

              const imageMask = document.createElement('img');
              imageMask.classList.add('image-mask');
              var canvas = document.getElementsByTagName('canvas')
              imageMask.src = canvas[0].toDataURL('png');
          
              // Hide canvas and show image mask instead and after taking the screenshot, hide mask and show canvas again
              canvas[0].style.display="none";     
              imageMask.style.display="block";
              imageMask.setAttribute('id','fade-in-image'); 
              //canvas[0].setAttribute('id','fade-in-image');              
              document.body.insertBefore(imageMask, canvas[0]);  
              //take photo 
          
              


            
              
              setTimeout(function(){
                //do what you need here
                try{
                  navigator.screenshot.save(function(error,res){
                    if(error){
                      console.error(error);
                    }else{
                      console.log('ok',res.filePath);
                      //share screenshot
                      window.plugins.socialsharing.share(null, null, "file://"+res.filePath, null)
                    }
                  });
                }
                catch(error){
                  //alert(error)
                }

                //code before the pause
                setTimeout(function(){
                  //do what you need here
                  imageMask.remove();
                  canvas[0].style.display="block";       
                  console.log("Canvas is Back!");          
                }, 1000);                            
              }, 1000);    
              this.cameraTimer = 150;              
             
              
            }
            catch(error){
              //alert(error)
              console.log("something went wrong "+error)
            }
          }
        
        }        
        , monBop: function(){
            //console.log("Tick")
            
            if(this.monAppear <= 0 && this.monster.hp > 0 && this.startCounter == 1){
              this.startCount.alpha = 0;
                this.monster.tint = 0xffffff;  
                if(this.monster.isApex){
                  this.monster.tint = 0xB29FA5;   
                }                 
                //console.log(this.soundAnalyseSprite.isPlaying())
               
                if( this.soundAnalyseSprite.isPlaying() == false && parseInt(localStorage.getItem("firstVisit-combat")) > 7 ){
                  //this.soundAnalyseSprite.play()     
                  this.soundAnalyseSprite.play("startHere")
                }

                
                //monster dancing
                switch(this.monster.rank){
                  case 1:
                    /*this.monster.origX = this.game.width / 2
                    this.rhythmArrow.origX = this.game.width / 2
                    this.monster.leftSpeed = this.monster.origSpeed 
                    this.monster.rightSpeed = this.monster.origSpeed         
                    var ran = Math.floor(Math.random() * 3);

                           
                    break;*/
                  case 2:
                    var ran = Math.floor(Math.random() * 3);
                    if(ran == 0 && this.monster.y == this.monster.origY ){
                      this.monster.y -= 25 //hop
                      this.monster.origX = this.game.width / 2
                      //this.rhythmArrow.origX = this.game.width / 2
                      //this.map.origX = -150
                      this.monster.leftSpeed = this.monster.origSpeed 
                      this.monster.rightSpeed = this.monster.origSpeed 
                    }
                    if(ran == 1){
                      this.monster.y -= 25 //hop
                      this.monster.origX = (this.game.width / 2)+50
                      //this.rhythmArrow.origX  = (this.game.width / 2)+10
                      //this.map.origX = -170
                      this.monster.leftSpeed = this.monster.origSpeed
                      this.monster.rightSpeed = this.monster.origSpeed
                      
                    }
                    if(ran == 2){
                      this.monster.y -= 25 //hop
                      this.monster.origX = (this.game.width / 2)-50
                      //this.rhythmArrow.origX  = (this.game.width / 2)-10
                      //this.map.origX = -130
                      this.monster.leftSpeed = this.monster.origSpeed
                      this.monster.rightSpeed = this.monster.origSpeed
                    }                    
                    break;
                  case 3:
                  case 4:  
                    var ran = Math.floor(Math.random() * 5);
                    if(ran == 0 && this.monster.y == this.monster.origY ){
                      this.monster.origX = this.game.width / 2
                      //this.rhythmArrow.origX = this.game.width / 2
                      this.monster.leftSpeed = this.monster.origSpeed 
                      this.monster.rightSpeed = this.monster.origSpeed 
                    }
                    if(ran == 1){
                      this.monster.origX = (this.game.width / 2)+50
                      //this.rhythmArrow.origX  = (this.game.width / 2)+10
                      this.monster.leftSpeed = this.monster.origSpeed
                      this.monster.rightSpeed = this.monster.origSpeed
                      
                    }
                    if(ran == 2){
                      this.monster.origX = (this.game.width / 2)-50
                      //this.rhythmArrow.origX  = (this.game.width / 2)-10
                      this.monster.leftSpeed = this.monster.origSpeed
                      this.monster.rightSpeed = this.monster.origSpeed
                    }                     
                    if(ran == 3){
                      this.monster.origX = (this.game.width / 2)+70
                      //this.rhythmArrow.origX  = (this.game.width / 2)+20
                      this.monster.leftSpeed = this.monster.origSpeed
                      this.monster.rightSpeed = this.monster.origSpeed
                      
                    }
                    if(ran == 4){
                      this.monster.origX = (this.game.width / 2)-70
                      //this.rhythmArrow.origX  = (this.game.width / 2)-20
                      this.monster.leftSpeed = this.monster.origSpeed
                      this.monster.rightSpeed = this.monster.origSpeed
                    }                                      
                    break;
                }

                //mon running away 
                if(this.monster.ranAway){
                  this.monster.origX = this.game.width*2
                  this.monster.y = this.monster.origY
                }

                
                this.battleStart = true;
                
                //this.beastBass.play();
                
                //this.monster.stamina+= this.monster.speed
                

                if(this.chatTimer <= 0 ){
                  this.monster.height += 10;
                  this.monster.width += 10;
                  this.rhythmArrow.y += 10

                  if(this.monster.isApex){

                    this.monsterShadow.height += 15;
                    this.monsterShadow.width += 15;                    
                  }
                }

                this.loadGrass1.y = -25
                this.loadGrass2.y = -25



              
            }           
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
                //////////console.log(unit.stamina);
                ////////////console.log("Monster hit by "+this.monster.hitBy );   
                switch(unit.role){
                  case 1:
                    var ran = Math.floor(Math.random() * 4)+1;

                    var dodge = Math.floor(Math.random() * (this.monster.dodge));
                    //////////console.log(this.monsterstamUI.width +" "+(this.monsterstamUIBad.x-(this.monsterstamUIBad.width/2)))
                    
                     dodge = 1000;  
                    //rhythm timing
                    var buffer = 100
                    var miss = false
                    if(this.monster.moveDecide == 0){
                      for(var i=0; i < this.attackLimit; i++){
                      
                      var buffer = gameConfig.tileBuffer; 
                      this.monster.attackAction[0].loadTexture(this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]].name);
                      var damage = 0;
                      //attack type
                      var hunterAttack = this.hero[0].skill[this.hero[0].comboPattern[this.hunter.comboKey]];
                      var attackType =""
                      //hero is ulting
                      if(this.hunter.ulting){

                        
                      }
                      else{
            
                        //durabilit + wepLevel
                        var attack = this.hero[0].attackValue*this.currentWepLevel
                        //////console.log(attack+" "+this.currentDurability+" "+weapon[this.party[0]].durability+" "+this.currentWepLevel)
                        if(attack  < 1){
                          attack  = 1
                        }                      
                        //attack = this.hunter.critMul
                        damage = attack
                        this.playBeat();
                        console.log("base damage "+damage)
                        console.log("monster elemental weak "+this.monster.elemDef + this.hero[0].element)
                        var effectiveCount = 0;

                        
                        
                        //element damage calculation
                        switch(this.monster.elemDef){
                          case 0:
                            if(this.hero[0].element == 3){
                              effectiveCount++;
                              damage *= 5;
                              console.log("fire effective damage "+damage)                             
                            }
                            break;
                          case 1:
                            if(this.hero[0].element == 1){
                              effectiveCount++;
                              damage *= 5;                           
                            }                            
                            break
                          case 2:
                            if(this.hero[0].element == 2){
                              effectiveCount++;
                              damage *= 5;
                            
                            }                            
                            break;
                        }

                        //physical damage calculation
                        console.log("Hitting with "+this.hero[0].attackType)
                        switch(this.hero[0].attackType){
                          case 0:
                            
                            //////console.log(" def "+this.monster.slashDef)
                            //damage = attack//Math.round((attack*attack) / (attack + this.monster.slashDef));   
                            if(damage > 0){
                              //this.monster.tint = 0xFF0000
                              localStorage.setItem('hasSlashed',1);
                            }
                            attackType ="SLASH"

                            this.attackFX.loadTexture("slashAttack")
                            this.attackFX.x = this.monster.x
                            this.attackFX.y = this.monster.y                            
                            this.attackFX.alpha = 1;
                            var ran = Math.floor(Math.random() * 20)-10;
                            this.attackFX.angle = ran*10

                            var ran = Math.floor(Math.random() * 2)+1;
                            if(!this.slashSound[ran].isPlaying){
                                this.slashSound[ran].play();
                            }                             

                            this.rhythemUI.loadTexture("attackHit-slash");

                            //this.resisted = " "
                            //super effective
                            if(this.monster.slashDef <= 0 || (this.isWepShiny == 1 && this.monster.monID == 99)){
                              //this.monster.angleSpeed = 100
                              damage *= 5;
                              effectiveCount++;
                              //this.monAppear = 50;
                              //this.monster.tint = 0xFF0000
                              //this.monHPText2.alpha = 1;    
                              //this.monHPText2.x = this.monster.x//this.monHPText.x+this.monHPText.width
                              //this.monHPText2.y = this.monster.y//this.monHPText.x+this.monHPText.width                              
                              //this.monHPText2.x = this.monHPText.x+this.monHPText.width               
                              //this.monHPText2.text = ""                              
                            }

                            break;
                          case 1:
                            //var attack = hunterAttack.attack
                            //damage = Math.round((attack*attack) / (attack + this.monster.stabDef));   
                            if(damage > 0){
                              localStorage.setItem('hasStabbed',1);
                            }                          
                            attackType ="STAB"

                            this.attackFX.loadTexture("stabAttack")
                            var ran = Math.floor(Math.random() * 100)-50;
                            this.attackFX.x = this.monster.x+ran
                            var ran = Math.floor(Math.random() * 100)-50;
                            this.attackFX.y = this.monster.y+ran                        
                            this.attackFX.alpha = 1;
                            
                            //this.attackFX.angle = ran*10

                            var ran = Math.floor(Math.random() * 2)+1;
                            if(!this.stabSound[ran].isPlaying){
                               this.stabSound[ran].play();
                            }

                            this.rhythemUI.loadTexture("attackHit-stab");
                            //super effective
                            if(this.monster.stabDef <= 0 || (this.isWepShiny == 1 && this.monster.monID == 99)){
                              //this.monster.angleSpeed = 100
                              damage *= 5;
                              effectiveCount++;
                            }       
                                              
                            break;
                          case 2:
                            //var attack = hunterAttack.attack
                            //damage = Math.round((attack*attack) / (attack + this.monster.bashDef));     
                            if(damage > 0){
                              localStorage.setItem('hasBashed',1);
                            }                          
                            attackType ="BASH"
                            
                            
                            //this.monEmitter.start(false, 1500,450);
                            //this.monEmitter.start(true);

                            var ran = Math.floor(Math.random() * 2)+1;
                            if(!this.bashSound[ran].isPlaying){
                               this.bashSound[ran].play();
                            }   

                            //this.monster.height = this.monster.tarSize -100;
                            this.rhythemUI.loadTexture("attackHit-bash");
                            //super effective
                            
                            if(this.monster.bashDef <= 0 || (this.isWepShiny == 1 && this.monster.monID == 99)){
                              
                              //this.monster.angleSpeed = 100
                              damage *= 5;
                              effectiveCount++;
                            }         
                                        
                            break;                        
                        }
                        console.log("effective Count "+effectiveCount)

                      }
                      // charm effect
                      //mysterious claw
                      if(localStorage.getItem("charmEquiped100") == 1){
                        if(this.hero[0].element == 0){
                          damage = Math.floor(damage*1.25);
                        }
                      }
                      //grass cutter Charm
                      if(localStorage.getItem("charmEquiped101") == 1){
                        if(this.hero[0].element == 1){
                          damage = Math.floor(damage*1.15);
                        }
                      }
                      //hard rock Charm
                      if(localStorage.getItem("charmEquiped102") == 1){
                        if(this.hero[0].element == 2){
                          damage = Math.floor(damage*1.15);
                        }
                      }   
                      //Gentle Flame Charm
                      if(localStorage.getItem("charmEquiped103") == 1){
                        if(this.hero[0].element == 3){
                          damage = Math.floor(damage*1.15);
                        }
                      }
                      //Sharp Charm
                      if(localStorage.getItem("charmEquiped104") == 1){
                        if(this.hero[0].attackType == 0 || this.hero[0].attackType == 1){
                          damage = Math.floor(damage*1.25);
                        }
                      }
                      //Strong Arm Charm
                      if(localStorage.getItem("charmEquiped105") == 1){
                        if(this.hero[0].attackType == 2){
                          damage = Math.floor(damage*1.50);
                        }
                      }     
                      //Lunar Grace Charm
                      if(localStorage.getItem("charmEquiped106") == 1){
                        if((this.timeOfDay >= 18 && this.timeOfDay <= 24) || (this.timeOfDay >= 1 && this.timeOfDay <= 4)){
                          damage = Math.floor(damage*2);
                        }                        
                      }    
                      
                      //ONE SHOT
                      if(damage > this.scoreThreshold*3){
                        this.game.plugins.screenShake.shake(30);          
                        this.monster.hp = 0
                        this.huntTimer = 0;  
                        
                        //damage = 999999-(this.damageCount+this.guardCount);    
                                
                      }
                      //attackType =""
                      //damage cant be reduced lower than 1
                      if(damage <= 0){
                        //damage = 1;
                      }
                      //damage = 1
                      //////console.log(damage+" asd "+dodge);
                        var diff = this.rhythmArrow.x - this.monster.attackAction[i].x 
                        ////console.log("HP "+this.monster.attackAction[i].hp) 
                                  
                        //this.monster.attackAction[0].hp = 5            

                        //console.log("Attack "+this.monster.attackAction[i].hp)
                        this.monster.attackAction[i].miss = true;
                        if(this.monster.attackAction[i].hp < 1){
                          


                          //this.monster.attackAction[i].hp = 1;
                        }  


                        if( diff <= buffer && this.monster.attackAction[i].alpha > 0.5){
                          this.skillGlow.alpha = 1;
                          //var ran = Math.floor(Math.random() * 4)+1;
                        
                          //this.rhythemUI.alpha = 1;
                          //this.rhythemUI.loadTexture("attackHit");
                          this.dialougeTimer = 100;
                          this.rhythemUI.y = 100
                          this.rhythemUI2.y = 50            

                          dodge = 0
                          //damage = 0
                          //this.monster.attackAction[i].alpha = 0;
                                
                          //this.hunter.comboKey++; 
                          if(this.hunter.comboKey >= this.hero[0].comboPattern.length){
                            //this.hunter.comboKey = 0;
                          }
                          // heavy attacks
                          if(diff <= buffer/2){

                            

                            //this.hitStop = 5;
                            this.hitFlag = 2;
                            //this.rhythemUI2.alpha = 1
                            this.rhythemUI2.loadTexture("blockPerfect");
                            //damage *= this.hunter.critMul;
                          
                              if (localStorage.getItem("firstVisit-combat-HeavyHit") === null ) {
                                  localStorage.setItem("firstVisit-combat-HeavyHit",1);
                                  this.monCry.play()
                                  this.monsterShadow.alpha = 1
                                  this.monster.rageOn = true;                                  
                                  localStorage.setItem("firstVisit-combat",8);  
                                  //this.chatTimer = 1;
                                  //localStorage.setItem("firstVisit-ult",1);
                                  //this.textBackdropText.text = "You executed a PERFECT ATTACK. These deal damage multiplied by your COMBO points and you gain an ULT charge." 
                                  //this.textBackdropText.text = "Well done!\nNow defeat your foe!"       

                              }  
                              //this.hunter.charge++;
                              //this.chargeReady.play();                                       
                              //this.bonk2.play();    
                              
                              if(this.hunter.critMul < gameConfig.comboLimit){
                                this.hunter.critMul+=1;
                              } 

                              //console.log("attack mul "+this.hunter.critMul)
                              var cap = Math.round(this.hunter.critMul)
                              if(cap > 6){
                                cap = 6;
                              }
                          
                              ////console.log(this.hunter.critMul)
                              this.mulStats.alpha =  0;
                              this.mulStats.y = this.mulStats.startY
                              this.mulStats.text = "COMBO!\nx"+this.hunter.critMul    
                              if(this.comboLimitReached){
                                this.monHPText2.alpha = 1;    
                                this.monHPText2.x = this.monster.x//this.monHPText.x+this.monHPText.width
                                this.monHPText2.y = this.monster.y//this.monHPText.x+this.monHPText.width                                
                                //this.monHPText2.x = this.monHPText.x+this.monHPText.width               
                                //this.monHPText2.text = "COMBO LIMIT REACHED!"
                              }                                                     
                              this.mulStats.angle = -5

                              //this.game.plugins.screenShake.shake(this.hunter.critMul);
                            //this.hunter.charge += 1;
                           // if(this.hunter.charge > this.chargeUI.length){
                              //this.hunter.charge= this.chargeUI.length;
                            //}  
                            if(parseInt(localStorage.getItem("first-attack-attempt")) == 0){
                              this.attackArrow.alpha = 0;
                              localStorage.setItem("first-attack-attempt",1)                                 
                            }                           
                          }
                          else{
                            //damage = 0;
                            this.hitFlag = 1;
                            this.mulStats.alpha =  0;
                            this.mulStats.y = this.mulStats.startY
                            this.mulStats.text = "COMBO!\nx"+this.hunter.critMul    
                            if(this.comboLimitReached){
                              this.monHPText2.alpha = 1;    
                              this.monHPText2.x = this.monster.x//this.monHPText.x+this.monHPText.width
                              this.monHPText2.y = this.monster.y//this.monHPText.x+this.monHPText.width                              
                              //this.monHPText2.x = this.monHPText.x+this.monHPText.width               
                              //this.monHPText2.text = "COMBO LIMIT REACHED!"
                            }                                                     
                            this.mulStats.angle = -5                          

                            

                            /*
                            //combo

                            
                            //this.bonk5.play();
                            if (localStorage.getItem("firstVisit-combat-lightAttack") === null ) {
                                localStorage.setItem("firstVisit-combat-lightAttack",1);
                                this.chatTimer = 1;
                                //localStorage.setItem("firstVisit-ult",1);
                                this.textBackdropText.text = "You've successfully performed a chain ATTACK. These can be chained together to generate combo points."      

                            }             
                            if(parseInt(localStorage.getItem("first-attack-attempt")) == 0){
                              this.attackArrow.alpha = 0;
                              localStorage.setItem("first-attack-attempt",1)                                 
                            }                          
                            this.monster.attackAction[i].pushBack = this.hunter.pushBack
                            this.hunter.critMul+= 1;

                            //console.log("attack mul "+this.hunter.critMul)
                            var cap = Math.round(this.hunter.critMul)
                            if(cap > 6){
                              cap = 6;
                            }
                            if(!this.chargeSound[cap].isPlaying){
                              this.chargeSound[cap].play();
                            }                            
                            ////console.log(this.hunter.critMul)
                            this.mulStats.alpha =  0;
                            this.mulStats.y = this.mulStats.startY
                            this.mulStats.text = "COMBO!\nx"+this.hunter.critMul
                            this.mulStats.angle = -5
                            if(this.monster.attackAction[i].speedUp != 0){
                              //this.hunter.charge += 1;    
                            // if(this.hunter.charge > this.chargeUI.length){
                            //     this.hunter.charge= this.chargeUI.length;
                            // }                             
                            }                          
                            this.monster.attackAction[i].speedUp+=1;
                            if(this.hunter.pushBack <= 0){
                              this.hunter.pushBack = 0;
                            }


                            this.monster.attackAction[i].hp+=1;
                            this.monster.attackAction[i].miss = false;
                            */
                          }
                          // light attacks
                          ////console.log("HP "+this.monster.attackAction[i].hp+" block "+(diff > 45 && diff <= buffer)) // 
                          //diff > 45 && diff <= buffer && this.hunter.charge > 0
                          /* if(diff > 45 && diff <= buffer && this.hunter.charge > 0){
                            if (localStorage.getItem("firstVisit-combat-lightAttack") === null ) {
                                localStorage.setItem("firstVisit-combat-lightAttack",1);
                                this.chatTimer = 1;
                                //localStorage.setItem("firstVisit-ult",1);
                                this.textBackdropText.text = "You've successfully performed a LIGHT ATTACK. These can be chained together but cost ENERGY"      

                            }    
                            //this.monster.attackAction[i].miss = false
                            this.hunter.charge -= 1;
                            this.rhythemUI2.alpha = 1
                            this.monster.attackAction[i].hp+=1;
                            this.monster.attackAction[i].miss = false;
                            
                            this.monster.attackAction[i].pushBack = 25   
                            this.rhythemUI2.loadTexture("attackLight");
                            //damage = Math.floor(damage/2);
                            
                          }
                          else{
                            this.monster.attackAction[i].miss = true;
                          }
                          */
                      
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
                              //this.hunter.ultingStab = this.hunter.critMul;
                              
                            }
                            
                            //ult bash
                            if(this.hero[0].ultSkill.attackType == 2){
                              this.hunter.ultingBash = 25;

                              this.monEmitter.flow(500, 10, 5, 20)

                              var ran = Math.floor(Math.random() * 2)+1;
                              if(this.bashSound[ran].isPlaying){
                                  this.bashSound[ran].stop();
                              }               
                              //this.ultSound[3].play();
                              if(false){
                                damage = 0;
                                //this.monster.hp -= this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul;
                                //this.monHPText2.text = 0          
                              } 
                              else{
                                this.monster.y -=25; 
                                //this.hitStop = 25;
                              this.monster.hp -= this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul;
                                          
                              //rage Mode
                              //this.rageCheck();   
                              damage =  this.hero[0].ultSkill.attack*this.currentWepLevel*this.hunter.ultMul;
                              }                            

                              
            
                              
                            
                            
  
                              this.hunter.ultMul = 0;
                            }


                          }                        
                          if(damage <= 0){
                            //damage = 1;
                          }
                          if(damage > 0){
                            this.monster.hp -= damage  
                            this.damageCount += damage
                            this.damageCount2 = this.damageCount        
                            
                            //Weapon Passive Effects
                            //&& this.hero[0].id == 16
                            if(effectiveCount <= 0 && this.hero[0].wepId == 16){
                              //alert(this.hero[0].wepId)
                              effectiveCount = 1;
                            }
                            //damage UI & Effects
                            if(effectiveCount >= 1){
                                  
                                 this.setDamageText(damage,48,"#FFC045");
                                this.monster.y -= 25
                                this.game.plugins.screenShake.shake(5);       
                                this.rageCheck();                        

                                  
                            }
                            if(effectiveCount == 2){
                              
                              this.setDamageText(damage,48,"#FFC045");
                              this.monster.tint = 0xFF0000
                                this.monster.y -= 35
                                this.game.plugins.screenShake.shake(15);                            
                              
                            }
                            if(effectiveCount == 0){
                              
                              this.setDamageText(damage,34,"white");
                              if(this.runAwayTimer <= 0 && !this.monster.rageOn){
                                this.runAwayTimer = 150
                              }
                              
                            }
                            try{
                              this.monEmitter.flow(1000, 10, 5, 20)
                            }
                            catch(error){
                              //alert(error)
                            }                        
                          }                          
                        }
                        else{
                          
                          if(this.hunter.critMul > 1){
                            if(!this.chargeFail.isPlaying){
                              this.chargeFail.play();
                            }
                            
                            this.hunter.critMul = 1;
                            this.mulStats.alpha =  0;
                            this.mulStats.y = this.mulStats.startY
                            this.mulStats.text = "COMBO!\nBROKEN"
                            this.mulStats.angle = -5    
                          }    

                          this.monster.angleSpeed = 0;
                          this.monster.tint = 0xffffff;  
                          if(this.monster.isApex){
                            this.monster.tint = 0xB29FA5;   
                          }                           
                          damage = 0;
                          var ran = Math.floor(Math.random() * 2);
                          if(ran == 0){
                            this.monster.x -=100
                          }
                          else{
                            this.monster.x +=100
                          }

                          this.monHPText2.alpha = 0; 
                          this.monster.attackAction[i].miss = true;
                          //this.rhythemUI.alpha = 1;
                          this.rhythemUI2.alpha = 0;
                          this.rhythemUI.y = 100
                          this.rhythemUI2.y = 50                                      
                          this.rhythemUI.loadTexture("attackMiss");   
                          this.dialougeTimer = 100;
                          
                          this.map.alpha = 1;
                        }

                      }

                      if(this.hunter.isBlocking){
                        this.hunter.isBlocking = false;
                        this.hero[1].stamina = 0;
                      }
                    }
                    unit.y -= 50;
                    //unit.stamina = 0;
                    //this.hunter.stamina -= unit.cost;
                    
                    
                    

                    break;
                  case 3:
                      ////////console.log("BLOCKED")
                      if(!this.shieldSound.isPlaying){
                         this.shieldSound.play();
                      }  
                      this.playBeat();

                      unit.y -= 50;
                      //unit.stamina = 0;  
                      //////////console.log("width "+)
                      
                      for(var i=0; i < 2; i++){
                        var buffer = gameConfig.tileBuffer;
                        var diff = this.monster.blockAction[i].x - this.rhythmArrow.x
                        if(this.monster.moveDecide != 0 && this.monster.blockAction[i].hp <= 1){
                          this.monster.blockAction[i].miss = true; 
                        }  
                        //console.log("diff/buffer "+(diff <= buffer))  
                        //console.log("block alpha "+(this.monster.blockAction[i].alpha > 0.5))  
                        //console.log("is attacking? "+this.monster.isAttacking)  
                        //!this.monster.isAttacking
                        if( diff <= buffer && this.monster.blockAction[i].alpha > 0.5 ){
                          this.skillGlow.alpha = 1;
                          this.guardCount+= 50
                          
                          this.scoreText2.fontSize += 15

                          this.guardCount2 = this.guardCount

                          if(!this.shieldSound.isPlaying){
                              this.shieldSound.play();
                          }
                          if(parseInt(localStorage.getItem("first-block-attempt")) == 0){
                            this.shieldArrow.alpha = 0;
                            localStorage.setItem("first-block-attempt",1)                                 
                          }
                    
                          //console.log("KNOCK BACK")  
                          
                            if(this.monster.blockAction[i].hp > 1){


                             this.monster.blockAction[i].hp--
                             this.hunter.blockDuration = 20;
                              var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                              switch(monSkillType){ 
                                case 2:
                                  this.monster.blockAction[i].pushBack = 25  
                                  this.monster.blockAction[i].beenHit = false;
                                  //console.log("bite bounce "+this.monster.blockAction[i].beenHit)                                  
                                  break;
                                case 3:
                                  this.monster.blockAction[i].pushBack = 25  
                                  break;
                              }
                                    
                              //this.monster.blockAction[i].x+= 100;
                          }
                          else{
                              //this.monster.blockAction[i].hp--;
                              this.hunter.blockDuration = 40;
                          }  
                          
                          
                          this.rhythemUI.y = 100
                          this.rhythemUI2.y = 50            
                          this.dialougeTimer = 100;  
                           
                          //perfect block
                          if(diff <= (buffer/5)){
                            
                            //this.guardCount+= 25
                            this.guardCount2 = this.guardCount

                          if (localStorage.getItem("firstVisit-combat-perfectBlock") === null ) {
                              //this.chatTimer = 1;
                              localStorage.setItem("firstVisit-combat-perfectBlock",1);
                              this.textBackdropText.text = "Excellent, you've executed a PERFECT BLOCK! Time your blocks carefully to gain COMBO points and gain ULT energy"    

                              ////alert("You've successfully executed a PERFECT BLOCK and gained some ENERGY\n Gain enough ENERGY and use your weapon's ULTIMATE!")

                          }
                          //add to combo
                          if(this.hunter.critMul < gameConfig.comboLimit){
                            this.hunter.critMul+=0.5;
                          }                          
                          //this.hunter.critMul+=0.5;
                          
                          //console.log("mul "+this.hunter.critMul)
                          var cap = Math.round(this.hunter.critMul)
                          if(cap > 6){
                            cap = 6;
                          }
  
                          
                          this.mulStats.alpha =  0;
                          this.mulStats.y = this.mulStats.startY
                          this.mulStats.text = "COMBO!\nx"+this.hunter.critMul   
                          //this.hunter.charge += Math.floor(this.hunter.critMul)      
                          if(this.comboLimitReached){
                            this.monHPText2.alpha = 1;  
                            this.monHPText2.x = this.monster.x//this.monHPText.x+this.monHPText.width
                            this.monHPText2.y = this.monster.y//this.monHPText.x+this.monHPText.width                              
                            //this.monHPText2.x = this.monHPText.x+this.monHPText.width               
                            //this.monHPText2.text = "COMBO LIMIT REACHED!"
                          }                                              
                          this.mulStats.angle = -5
                            
                           
                           //this.rhythemUI2.alpha = 1
                           this.rhythemUI2.loadTexture("blockPerfect");
                           //this.hunter.charge = this.hero[2].skill[0].attack;
                            var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                            switch(monSkillType){
                              case 1:
                                //this.hunter.charge += 1;
                                break;
                              default:
                                //this.hunter.charge += 0.5;
                                break;                    
                            }                           
                            //this.hunter.charge += 1;
                            //charge max
                           // if(this.hunter.charge > this.chargeUI.length){
                              //this.hunter.charge= this.chargeUI.length;
                           // }          

                                    
                          }
                          else{

                            

                             
                          }
                          //this.hunter.charge= this.chargeUI.length;
                          //this.dodgeArrow this.monster.blockAction[i].x
                          //diff > 55 && diff <= buffer && this.hunter.charge > 0
                          //var this.dodgeArrow.x >= (this.monster.blockAction[i].x-this.monster.blockAction[i].width/2) &&  this.dodgeArrow.x <= (this.monster.blockAction[i].x+this.monster.blockAction[i].width/2)
                          if(false){
                            if (localStorage.getItem("firstVisit-combat-evade") === null ) {
                                this.chatTimer = 1;
                                localStorage.setItem("firstVisit-combat-evade",1);
                                this.textBackdropText.text = "You've successfully EVADED a monster attack\nNow you have an chance to attack"                                    
                                

                            }                                
                            var monSkillType = this.monster.skill[this.monster.attackPattern[this.monster.moveKey]].id
                            switch(monSkillType){
                              case 1:
                                //this.hunter.charge -= 1;
                                break;
                              default:
                                //this.hunter.charge -= 0.5;
                                break;                    
                            }                             
                            //this.monster.attackPattern[this.monster.moveKey]; 
                            ////////console.log("DODGE! "+this.monster.moveKey)
                            this.monster.moveKey = this.monster.attackPattern.length-2
                            //this.monster.moveKey = this.monster.attackPattern.length)-2;       
                            this.monster.blockAction[0].dodged = true
                            this.monster.blockAction[0].miss = true
                            this.monster.blockAction[1].dodged = true
                            this.monster.blockAction[1].miss = true       
                            this.monster.beenDodged = true;
                            ////////console.log("DODGE! AFTER "+this.monster.moveKey)
                            //this.rhythemUI.alpha = 1;
                            this.rhythemUI.loadTexture("blockEvade");
                            this.dialougeTimer = 100;       
                           // if(this.hunter.charge == this.chargeUI.length){
                             // this.hunter.ulting = true
                           // }
                          }                          
                          else{                            
                            //this.rhythemUI.alpha = 1;
                            this.rhythemUI.loadTexture("blockHit");
                            this.rhythemUI.y = 100
                            this.rhythemUI2.y = 50                                        
                            this.dialougeTimer = 100;
                          }
                          //this.monster.blockAction[i].alpha = 0;

                          
                        }
                        else{
                          ////console.log("Can't or won't bloc ")  
                          if(!this.monster.beenDodged){
                            //this.rhythemUI.alpha = 1;
                            this.rhythemUI2.alpha = 0;
                            this.rhythemUI.loadTexture("blockMiss");    
                            this.rhythemUI.y = 100
                            this.rhythemUI2.y = 50                                         
                            this.dialougeTimer = 100;                            
                          }

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
                      //drink potion
                      
                      if(unit.stamina > 0){
                        unit.loadTexture("emptyBot");
                        this.hunter.hp = 3;
                        if(this.hunter.hp > 3){
                          this.hunter.hp = 3
                        }
                        unit.y -= 50;
                        unit.stamina = 0;
                        localStorage.setItem("potUsed",unit.stamina )
                        unit.cost = 100;   
                        var ran = Math.floor(Math.random() * 3)+1;
                                            
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