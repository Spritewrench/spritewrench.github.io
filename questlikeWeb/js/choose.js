(function () {
    'use strict';

    function Choose() {
        this.player = null;
    }
    Choose.prototype = {
        create: function () {
            
            this.game.stage.backgroundColor = "#160c2c";
            this.game.stage.backgroundColor = "#160c2c";
            this.map = this.add.sprite(0, 0, 'map3');
            this.map.width = this.game.width;
            this.map.height = this.game.height;        
            this.map.alpha = 0.7;             
		
            
            this.page = this.add.audio('page');
            
            var x = (this.game.width / 2)
                , y = this.game.height / 2;
          
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
            
            this.team = [];
            this.teamCounter = 0;
            
            
            //place hero tiles
            this.hero = [];
            var dist= -150;
            var disty = -150
            var race = 10
            var heroChar = 0
            this.scoreInt = 0;
            this.rationNum = 0;
            this.heroAudio=[]
            for(var i = 0; i < 9; i++){
                this.hero[i] = this.add.sprite(x+dist, y+disty, (race+heroChar));
                this.hero[i].anchor.setTo(0.5, 0.5);
                this.hero[i].origX = this.hero[i].x
                this.hero[i].origY = this.hero[i].y
                this.hero[i].width = 100;
                this.hero[i].height = 100;
                  this.hero[i].id = i;                     
                
                this.hero[i].stamina = 0;
                
                this.hero[i].threat = 0;
                this.hero[i].alpha = 0;
                

                this.setHero(i, race+heroChar)
                
                localStorage.setItem("heroUlocked"+this.hero[i].heroID,0)
                
                this.heroAudio[i] = this.add.audio('heroConsent'+(race+heroChar));
                
                //on click
                this.hero[i].inputEnabled = true;
                this.hero[i].events.onInputDown.add(this.onClick, this);
                //on hover
                this.hero[i].events.onInputOver.add(this.updateInfo, this);
                
                if(heroChar < 2){
                   heroChar++
                }
                else{
                    race+= 10;
                    heroChar = 0;
                }
                
                if(dist < 150){
                    dist+=150;   
                }
                else{
                    dist = -150;
                    disty += 150
                }
                

            }    
            this.unit = [];
            this.partyHolder = []
            disty = 0;
            for(var i = 0; i < 3; i++){
                this.partyHolder[i] = this.add.sprite(x+400, y-200+disty, 'party');
                this.unit[i] = this.add.sprite(x+400, y-200+disty, 'player');
                disty += 150;
            }
            
            
            this.clear = this.add.sprite(x+400, y+200, 'clear');
            this.clear.width = 32;
            this.clear.height = 32;
            this.clear.inputEnabled = true;
            this.clear.events.onInputDown.add(this.clearTeam, this); 
            
            this.go = this.add.sprite(x+470, y+200, 'go');
            this.go.width = 32;
            this.go.height = 32;
            this.go.inputEnabled = true;
            this.go.events.onInputDown.add(this.letsGo, this);      
            this.go.alpha = 0;
            
            this.heroUI = this.add.sprite(x-580, 30, 'blank');
            this.heroUI.width = 180;
            this.heroUI.height = 300;
            
            //this.heroUI.targetX = 00;
            
            this.unlocked = this.add.sprite(x-580, 30, 'locked');
            this.unlocked.width = 180;
            this.unlocked.height = 300;
            this.unlocked.alpha = 0;
            
            this.statUI = this.add.sprite(x-670-50+83,  0, 'statUI');                     
            this.statUI.alpha = 0
            
            var style = { font: '12pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
            this.unitStats = this.add.text(this.heroUI.x-25, this.heroUI.height+60, "", style); 
            this.unitStats.alpha = 0;
            

            //this.heroUI.targetX = -300;         
            
          
            this.unlockedCoin = this.add.sprite(this.unlocked.width/2, this.unlocked.y+3+16, 'locked');
            this.unlockedCoin.alpha = 0;
            this.unlockedCoin.loadTexture('coin');
            this.unlockedCoin.frame = 0;
            this.unlockedCoin.animations.add('spin', [0, 1, 2,3,4,5,6,7], 13, true);
            this.unlockedCoin.animations.play('spin'); 

            
            var style = { font: '16pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
            this.unlockCost = this.add.text(this.unlocked.width/2, this.unlocked.y+16, "", style);  
            this.unlockCost.alpha = 0;
            
            var style = { font: '12pt Muli', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 290 };
            //this.unitStats = this.add.text(20, this.heroUI.height+10, "", style);  
   
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
            
            this.quest = this.add.sprite(0, this.game.height,'quest');      
            this.quest.width = this.game.width
            this.quest.height = this.game.height  
            this.quest.inputEnabled = true;
            this.quest.events.onInputDown.add(this.hideQuest, this);            
            
            this.questShown = 0;
            
            
            var style = { font: '32pt Berkshire Swash', fill: '#593f27', align: 'center', wordWrap: true, wordWrapWidth: 700 };
            this.intro = this.add.text(x-350, this.game.height, "", style);             
            
            
            this.intro.align = "left";
            
            var style = { font: '16pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
            this.score = this.add.text(x, 105, "Score: ~", style);  
            this.score.setStyle(style,true);
            this.score.alpha = 0;
            
            this.Coin = this.add.sprite(this.score.x-30,this.score.y+2, 'locked');
            this.Coin.loadTexture('coin');
            this.Coin.frame = 0;
            this.Coin.animations.add('spin', [0, 1, 2,3,4,5,6,7], 13, true);
            this.Coin.animations.play('spin');    
            this.Coin.alpha = 0;
                      
            var style = { font: '16pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
            this.rationScore = this.add.text(x+40, 135, "", style);  
            this.rationScore.setStyle(style,true);
            this.rationScore.alpha = 0;            
            this.rationUI = this.add.sprite(this.rationScore.x-32, this.rationScore.y, 'ration');            
            this.rationUI.alpha = 0;      
            //Set hero's already unlocked

            
            //sound
            this.rustle1 = this.add.audio('clothBelt1'); 
            this.rustle2 = this.add.audio('clothBelt2'); 
            this.ping = this.add.audio('ping');
            this.tavernMusic = this.add.audio('Inn Music 2');
            this.notRM= this.add.audio('notRM');
            this.menuClicked = false; 
            this.playOnce = 0;
            
            
        }          
        , update: function () {

            
            if(this.team.length >= 3){
                this.go.alpha = 1;
            }            
            else{
                this.go.alpha = 0;
            }
            
            if(this.questShown == 0){
                this.quest.y += (0 - this.quest.y) * 0.1;
                this.intro.y  = this.quest.y+300;
                this.questB.alpha += (1 - this.questB.alpha) * 0.1;
                if(this.playOnce == 0){
                    this.page.play();
                    this.playOnce = 1;
                }
                if (localStorage.getItem("score") === null) {
                    var hirePrice = 1000;
                    this.intro.text = "The goblins of Black Warren are getting too bold. \nHere is "+hirePrice+" gold. \nHire a party to go out and thin their numbers.\nUse anything left over to buy some rations.  \nYou'll need it."
                    localStorage.setItem("score",hirePrice);

                }                
                else{
                    if(parseInt(localStorage.getItem("score")) >= 760){
                        this.intro.text = "The goblins of Black Warren are getting too bold AGAIN.\nHire a party to go out and thin their numbers.\nRemember to leave some gold for rations if you can.  \nYou'll need it."                        
                    }
                    else{
                        var hirePrice = 1000;
                        this.intro.text = "The goblins of Black Warren are getting too bold. \nHere is "+hirePrice+" gold. \nHire a party to go out and thin their numbers.\nUse anything left over to buy some rations.  \nYou'll need it."   
                        localStorage.setItem("score",hirePrice);
                    }

                }                      
            }
            else{
               // console.log(parseInt(localStorage.getItem("score")))
                if (localStorage.getItem("score") === null) {
                      this.score.text = "Gold: ~"

                }                
                else{
                    if(parseInt(localStorage.getItem("score")) > 0){
                        var speed = Math.floor(parseInt(localStorage.getItem("score"))/10);
                        if(speed <= 0){
                            speed = parseInt(localStorage.getItem("score"))
                        }
                      
                       this.scoreInt+= speed;
                        localStorage.setItem("score",parseInt(localStorage.getItem("score"))-speed);
                        
                    }
                   
                   this.score.text = "Gold: "+this.scoreInt;
                }                 
                this.score.alpha += (1 - this.score.alpha) * 0.1;
                this.Coin.alpha += (1 - this.Coin.alpha) * 0.1;
                
                this.rationScore.alpha += (1 - this.rationScore.alpha) * 0.1;
                this.rationUI.alpha += (1 - this.rationUI.alpha) * 0.1;
                this.rationScore.text = "x "+this.rationNum
                
                
                this.quest.y += (this.game.height - this.quest.y) * 0.1;
                this.intro.y  = this.quest.y+300;
                
                

                this.intro.text = ""                
                for(var i = 0; i < 9; i++){
                    this.hero[i].alpha += (1 - this.hero[i].alpha ) * 0.1;
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
                
            }
            
            if(!this.tavernMusic.isPlaying){
                this.tavernMusic.loop = true;
              
                this.tavernMusic.play();
                
            
            }  
            if(this.tavernMusic.volume == 0 && this.menuClicked && this.scoreInt<= 0){


               localStorage.setItem('state','game')
               localStorage.setItem("ration",this.rationNum);
               this.game.state.start('preloader',true,true) 
            } 
            if(this.scoreInt > 0 && this.menuClicked){
                var speed = Math.floor(this.scoreInt/10);
                if(speed <= 0){
                    speed = this.scoreInt
                }
                this.rationNum += speed ;
                this.rationScore.text = "x "+this.rationNum
                this.scoreInt -= speed
                                
            }
            
            //ui
            
 
            
            try {
                this.unit[0].loadTexture(this.team[0]);
            }
            catch (e) {
            // statements to handle any exceptions
                this.unit[0].loadTexture("blank");

            }              
            try {
                this.unit[1].loadTexture(this.team[1]);
            }
            catch (e) {
            // statements to handle any exceptions
                this.unit[1].loadTexture("blank");

            }
            try {
                this.unit[2].loadTexture(this.team[2]);
            }
            catch (e) {
            // statements to handle any exceptions
                this.unit[2].loadTexture("blank");

            }            
            
            
            // anim
             
            this.unlocked.x = this.heroUI.x;
            this.unlockedCoin.x = this.heroUI.x-25+this.heroUI.width/2;
            this.unlockCost.x = this.heroUI.x+this.heroUI.width/2
            if(this.unlocked.alpha == 1){
                this.unlockCost.alpha += (1 - this.unlockCost.alpha) * 0.1;
            }
            //this.unlockedCoin.x = this.heroUI.x+(this.heroUI.width/2)
            //this.unlockCost.x = this.heroUI.x+(this.heroUI.width/2)
            //if (localStorage.getItem("heroUlocked"+this.tarHero.heroID) === null) {
                //this.unlocked
             
           // }
            if(typeof this.tarHero !== 'undefined'){
                
               

                this.unlockCost.text = this.tarHero.race*200;                
                /*
                if (parseInt(localStorage.getItem("heroUlocked"+this.tarHero.heroID)) == 0) {
                    //this.unlocked.alpha = 1;
                    this.unlockedCoin.alpha = 1;
                    this.unlockCost.text = this.tarHero.heroID*20;

                }                
                else{
                    this.unlocked.alpha = 0;
                    //this.unlockedCoin.alpha = 0;
                    //this.unlockCost.text = ""
                    //this.unlockCost.alpha = 0;
                }
                */
                var race =""
                switch(this.tarHero.race){
                       case 1:
                            race = "Blood Warden"
                       break;
                       case 2:
                            race = "Stone Guard"
                       break;
                       case 3:
                            race = "Human"
                       break;
                }
                var role =""
                switch(this.tarHero.role){
                       case 1:
                            role = "Defense"
                       break;
                       case 2:
                            role = "Offence"
                       break;
                       case 3:
                            role = "Support"
                       break;
                }                
               var damage = Math.round((this.tarHero.attack*this.tarHero.attack) / (this.tarHero.attack + 0));
                var strDiff = this.tarHero.attack - this.tarHero.dex
                if(strDiff < 0){
                   strDiff  = 0
                }
                //var dmgJitter = Math.floor(Math.random() * Math.round(this.tarHero.attack/2))-strDiff;                
                var lowDmg = damage-strDiff;
                if(lowDmg  <= 0){
                    lowDmg = 1;
                }
               var damageStats = "Deal "+lowDmg+"~"+(damage+(strDiff*2)-strDiff)+" damage to target"
               this.unitStats.text = this.tarHero.name+"\nRACE: "+race+"\nROLE: "+role+"\nHP: "+this.tarHero.hp+"/"+this.tarHero.maxhp+"\nSTR: "+this.tarHero.attack+" "+this.tarHero.attackMax+"\t\t\t\tDEF: "+this.tarHero.defence+" "+this.tarHero.defenceMax+"\nDEX: "+this.tarHero.dex+" "+this.tarHero.dexMax+"\t\t\t\tEVA: "+this.tarHero.dodge+" "+this.tarHero.dodgeMax+"\nINT: "+this.tarHero.intel+" "+this.tarHero.intMax+"\t\t\t\t\tSPD: "+this.tarHero.speed+" "+this.tarHero.speedMax+"\nTHREAT: "+this.tarHero.threat+""+"\n\n\n\n"+damageStats+"\n\n\n\n"+this.tarHero.ability
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
            this.hero[unit].defenceMax = "";
            this.hero[unit].dexMax = "";
            this.hero[unit].dodgeMax = "";
            this.hero[unit].intMax = "";  
            this.hero[unit].speedMax = "";         
            
            switch(heroID){
                case 10:
                    this.hero[unit].name = "Lilith, The First Blood"
                    this.hero[unit].hp = 10;
                    this.hero[unit].role = 1;
                    this.hero[unit].attack = 3;
                    this.hero[unit].defence = 3;
                    this.hero[unit].dex = 1;
                    this.hero[unit].dodge = 1;
                    this.hero[unit].intel = 1;
                    this.hero[unit].speed = 4;
                    this.hero[unit].ability = "Taunt: \nLose "+2+" HP and gain "+50*this.hero[unit].intel*this.hero[unit].level+" threat";
                    break;
                case 11:
                    this.hero[unit].name = "Adam, The Second Blood"
                    this.hero[unit].hp = 10;
                    this.hero[unit].role = 3;
                    this.hero[unit].attack = 2;
                    this.hero[unit].defence = 1;
                    this.hero[unit].dex = 2;
                    this.hero[unit].dodge = 1;
                    this.hero[unit].intel = 1;
                    this.hero[unit].speed = 3;
                    this.hero[unit].ability = "Blood Heal: \nLose "+2+" HP and heal \nyour other party members by "+this.hero[unit].intel*this.hero[unit].level+" HP";       
                    break;
                case 12:
                    this.hero[unit].name = "Abel, The Third Blood"
                    this.hero[unit].hp = 10;
                    this.hero[unit].role = 2;
                    this.hero[unit].attack = 4;
                    this.hero[unit].defence = 1;
                    this.hero[unit].dex = 2;
                    this.hero[unit].dodge = 2;
                    this.hero[unit].intel = 1;
                    this.hero[unit].speed = 3;
                    this.hero[unit].ability = "Quicken: \nLose "+2+" HP and gains "+(this.hero[unit].intel*this.hero[unit].level)+" DEX";  
                    break;                    
                case 20:     
                    this.hero[unit].name = "Zion, The Holy One"
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
        , updateInfo: function(hero){
            
            if(this.questShown != 0){

                this.unitStats.alpha = 1;
                this.unlocked.alpha = 0;
                this.unlockedCoin.alpha = 1;
                this.unlockCost.alpha = 1;
                var ran = Math.floor(Math.random() * 2);
                if(ran == 0){
                    this.rustle1.play();
                }
                else{
                    this.rustle2.play();
                }            
                this.statUI.alpha     = 1;

                //this.heroUI.alpha = 0;

                this.tarHero = hero;
                this.heroUI.loadTexture( hero.heroID+"Big");
                this.heroUI.width = 180;
                this.heroUI.height = 300;      

                //this.heroUI.x = -this.heroUI.width;
                //this.heroUI.targetX = 0;  
                var unit = hero.id;
                //console.log(unit)
                switch(hero.heroID){
                    case 10:
                        this.hero[unit].ability = "Taunt: \nLose "+2+" HP and gain "+50*this.hero[unit].intel*this.hero[unit].level+" threat";
                        break;
                    case 11:
                        this.hero[unit].ability = "Blood Heal: \nLose "+2+" HP and heal your \nother party members by "+this.hero[unit].intel*this.hero[unit].level+" HP";       
                        break;
                    case 12:
                        this.hero[unit].ability = "Quicken: \nLose "+2+" HP and gains "+(this.hero[unit].intel*this.hero[unit].level)+" DEX";  
                        break;                    
                    case 20:     
                        this.hero[unit].ability = "Self Heal: \nGain "+Math.round((25*this.hero[unit].intel*this.hero[unit].level)/2)+" threat and heals "+Math.round((this.hero[unit].intel*this.hero[unit].level)/2)+" HP";
                        break;
                    case 21:
                        this.hero[unit].ability = "Sharpen: \nLose "+(this.hero[unit].intel*this.hero[unit].level)+" Dex and gain "+(this.hero[unit].intel*this.hero[unit].level)+" STR";
                        break; 
                    case 22:
                        this.hero[unit].ability = "Insult: \nGain "+25*this.hero[unit].intel*this.hero[unit].level+" threat and gains "+this.hero[unit].intel*this.hero[unit].level+" DEF";
                        break;                     
                    case 30:
                        this.hero[unit].ability = "Gibe: \nGain "+25*this.hero[unit].intel*this.hero[unit].level+" threat and gains "+this.hero[unit].intel*this.hero[unit].level+" EVA";
                        break;
                    case 31:
                        this.hero[unit].ability = "Haste: \nLose "+(this.hero[unit].intel*this.hero[unit].level)+" EVA and gain "+(this.hero[unit].intel*this.hero[unit].level)+" SPD";
                        break;
                    case 32:
                        this.hero[unit].ability = "Critical Heal: \nHeals the most injured  "+(this.hero[unit].intel*this.hero[unit].level)+" HP";  
                        break;                  

                }     
            }
            
            


            
          
        }  
        , clearTeam: function () {
            var score = 0;
            for(var i=0; i < this.team.length; i++){
                score += this.team[i]*20
            }
            localStorage.setItem("score",score)
            this.team = [];
            this.teamCounter = 0;
            this.notRM.play()
        }
        , hideQuest: function () {
            this.questShown = 1;
            this.page.play();
            
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
        , letsGo: function () {
            if(this.team.length >= 3){
                this.tavernMusic.fadeOut(1000)  
                this.ping.play();
                this.menuClicked = true;
                localStorage.setItem("party", this.team[0]+"-"+this.team[1]+"-"+this.team[2]);                
            }

            
            //this.game.state.start('game');
        }        
        , onClick: function (unit) {
            if(this.questShown != 0){
                //console.log(localStorage.getItem("heroUlocked"+this.tarHero.heroID))

                if (true) {

                    if(this.scoreInt - (this.tarHero.race*200) >= 0 ){
                        //localStorage.setItem("heroUlocked"+this.tarHero.heroID,1);
                        
                        
                        if(this.team.indexOf(unit.heroID) <= -1){
                            this.scoreInt -=(this.tarHero.race*200);
                            this.team[this.teamCounter] = unit.heroID;
                            this.teamCounter++;                
                            try{
                                if(!this.heroAudio[unit.id].isPlaying){
                                    this.heroAudio[unit.id].play();
                                }                
                            }
                            catch(e){
                                //console.log(e)
                            }                          
                        }                        
                        //localStorage.setItem("score",parseInt(localStorage.getItem("score") - (this.tarHero.heroID*20)));
                    }
                    else{
                        this.notRM.play()
                    }
                }                
                else{
                    /*
                    if(this.team.indexOf(unit.heroID) <= -1){
                        this.team[this.teamCounter] = unit.heroID;
                        this.teamCounter++;                
                        try{
                            if(!this.heroAudio[unit.id].isPaying){
                                this.heroAudio[unit.id].play();
                            }                
                        }
                        catch(e){

                        }                          
                    }*/
                }            
            
            }



        //this.game.state.start('win');
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
    window['simplewar'].Choose = Choose;
}());