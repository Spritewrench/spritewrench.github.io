(function () {
    'use strict';

    function Choose() {
        this.player = null;
    }
    Choose.prototype = {
        create: function () {
            
            var x = this.game.width /2.9
                , y = (this.game.height / 2)+70;


            this.char = []
            var posX = -150;
             this.team=  this.add.bitmapText((this.game.width / 2),(this.game.height / 2)-200, 'minecraftia', 'Team',24);
            this.team.anchor.setTo(0.5, 0.5);   
            
            
             this.adv=  this.add.bitmapText((this.game.width / 2),(this.game.height / 2)+45, 'minecraftia', 'TEAM ADVENTURER',24);
            this.adv.anchor.setTo(0.5, 0.5);   
            
             this.versus =  this.add.bitmapText((this.game.width / 2),(this.game.height / 2)-5, 'minecraftia', '-VS-',24);
            this.versus.anchor.setTo(0.5, 0.5);
            for(var i =1; i < 4; i++){
                this.char[i] = this.add.sprite((this.game.width / 2)+posX,(this.game.height / 2)+150, 'tile');
                this.char[i].title = this.add.bitmapText((this.game.width / 2)+posX,(this.game.height / 2)+100, 'minecraftia', 'Stats',14);
                this.char[i].pref = this.add.bitmapText((this.game.width / 2)+posX,(this.game.height / 2)+200, 'minecraftia', 'Stats',14); 
                this.char[i].inputEnabled = true
                this.char[i].id = i;
                var attacPower = ""
                var health = ""
                var stamina = ""
                var crit = ""
                var luck = ""                  
                switch(this.char[i].id){                        
                    case 3:
                        this.char[i].title.text = "Alethea Arundel\nThe Knight"
                        this.char[i].pref.text = "Likes: \nSavoury Things"
                        
                        var attacPower = "2"
                        var health = "9"
                        var stamina = "2"
                        var crit = "3"
                        var luck = "3"                          
                        break;
                    case 2:
                        this.char[i].title.text = "Kadeem Chetty \nThe Archer" 
                        this.char[i].pref.text = "Likes: \nBitter Things"   

                        var attacPower = "2"
                        var health = "6"
                        var stamina = "2"
                        var crit = "5"
                        var luck = "5"                           
                        break;
                    case 1:
                        this.char[i].title.text = "Dalet Bas Elah \nThe Priest" 
                        this.char[i].pref.text = "Likes: \nSour Things" 
                        
                        var attacPower = "1"
                        var health = "4"
                        var stamina = "2"
                        var crit = "3"
                        var luck = "2"                          
                        break;                        
                }
              
                localStorage.setItem("unit"+i,""+this.char[i].id+i+attacPower+health+stamina+crit+luck+'00')
                
                this.char[i].events.onInputDown.add(this.selectChar, this);
                this.char[i].width = 64;
                this.char[i].height = 64;
                this.char[i].pref.align ='center'
                this.char[i].title.align ='center'                
                this.char[i].pref.anchor.setTo(0.5, 0.5);
                this.char[i].title.anchor.setTo(0.5, 0.5);
                this.char[i].anchor.setTo(0.5, 0.5);
                posX += 150;
            }

            this.opp = []
            var posX = -175;
            for(var i =0; i < 3; i++){
                this.opp[i] = this.add.sprite((this.game.width / 2)+posX,(this.game.height / 2)-100, 'tile');
                this.opp[i].title = this.add.bitmapText((this.game.width / 2)+posX,(this.game.height / 2)-150, 'minecraftia', 'Stats',14); 
                this.opp[i].ability = this.add.bitmapText((this.game.width / 2)+posX,(this.game.height / 2)-60, 'minecraftia', 'Stats',14);                 
                this.opp[i].title.align ='center'
                this.opp[i].ability.align ='center'
                this.opp[i].id = Math.floor(Math.random() * 3)+5;
                this.opp[i].unitSpec = Math.floor(Math.random() * 5)+1;
                this.opp[i].abilityCode = 0;
                this.opp[i].width = 64;
                this.opp[i].height = 64;
                this.opp[i].ability.anchor.setTo(0.5, 0.5);
                this.opp[i].title.anchor.setTo(0.5, 0.5);
                this.opp[i].anchor.setTo(0.5, 0.5);
                posX += 175;
            }            
            
            this.input.onDown.add(this.onInputDown, this);
            
            this.timer = 0;
        }
        , update: function () {
            this.timer++;
            if(this.timer%25 == 0){
                if(this.versus.text.indexOf("-VS-") > -1){
                    this.versus.text = "CLICK TO START"
                }
                else{
                    this.versus.text = "-VS-"
                }
                
            }

            for(var key in this.opp){

                var className ="" 
                var charName = ""
                var attacPower = ""
                var health = ""
                var stamina = ""
                var crit = ""
                var luck = ""
                switch(this.opp[key].id){
                  case 5:
                    className = "Slime";
                    var attackPower = "2"
                    var health = "1"
                    var stamina = "2"
                    var crit = "1"
                    var luck = "1"                        
                    switch(this.opp[key].unitSpec){
                      case 1:
                        charName = "Curry";
                        this.opp[key].abilityCode=1;
                        break;
                      case 2:
                        charName = "Ginger";
                            this.opp[key].abilityCode=7;
                        break;                
                      case 3:
                        charName = "Blueberry";
                        this.opp[key].abilityCode=1;
                        break; 
                      case 4:
                        charName = "Dark Choclate ";
                        this.opp[key].abilityCode=9;
                        break; 
                      case 5:
                        charName = "Strawberry";
                        this.opp[key].abilityCode=7;    
                        break;                 
                    }                
                    break;
                  case 6:
                    className = "Orc";
                    var attackPower = "2"
                    var health = "2"
                    var stamina = "2"
                    var crit = "2"
                    var luck = "4"                           
                    switch(this.opp[key].unitSpec){
                      case 1:
                        charName = "Red Wattle";
                        this.opp[key].abilityCode=2;                            
                        break;
                      case 2:
                        charName = "Chester White";
                        this.opp[key].abilityCode=5;                             
                        break;                
                      case 3:
                        charName = "Jeju Black";
                        this.opp[key].abilityCode=5;                             
                        break; 
                      case 4:
                        charName = "Ukrainian Spotted";
                        this.opp[key].abilityCode=2;                             
                        break; 
                      case 5:
                        charName = "Yorkshire Blue";
                        this.opp[key].abilityCode=9;                            
                        break;                 
                    }                 
                    break;                
                  case 7:
                    className = "Minotaur";
                    var attackPower = "3"
                    var health = "3"
                    var stamina = "3"
                    var crit = "3"
                    var luck = "5"                           
                    switch(this.opp[key].unitSpec){
                      case 1:
                        charName = "Belgian Blue";
                        this.opp[key].abilityCode=9;                              
                        break;
                      case 2:
                        charName = "Blonde d'Aquitaine";
                        this.opp[key].abilityCode=4;                             
                        break;                
                      case 3:
                        charName = "Red Angus";
                        this.opp[key].abilityCode=3;                            
                        break; 
                      case 4:
                        charName = "British White";
                        this.opp[key].abilityCode=3;                             
                        break; 
                      case 5:
                        charName = "Welsh Black";
                        this.opp[key].abilityCode=4;                              
                        break;                 
                    }                 
                    break;
                  case 8:
                    className = "Dragon";
                    var attackPower = "4"
                    var health = "3"
                    var stamina = "3"
                    var crit = "2"
                    var luck = "7"                           
                    switch(this.opp[key].unitSpec){
                      case 1:
                        charName = "Black Shumen";
                        this.opp[key].abilityCode=8;                              
                        break;
                      case 2:
                        charName = "Iowa Blue";
                        this.opp[key].abilityCode=6;                              
                        break;                
                      case 3:
                        charName = "Norfolk Grey";
                        this.opp[key].abilityCode=9;                            
                        break; 
                      case 4:
                        charName = "Rhode Island White";
                        this.opp[key].abilityCode=8;                            
                        break; 
                      case 5:
                        charName = "Red Shaver";
                        this.opp[key].abilityCode=6;                              
                        break;                 
                    }                 
                    break;                           
                }
                var ability = ""
                switch(this.opp[key].abilityCode){
                    case 0:
                        ability ="---"
                        break;
                  case 1:
                    ability = "Bubble";
                    break;
                  case 2:
                    ability = "Cripple";
                    break;                
                  case 3:
                    ability = "Stun";
                    break;  
                  case 4:
                    ability = "Dizzy";
                    break;
                  case 5:
                    ability = "Dispel";
                    break;                
                  case 6:
                    ability = "Fly";
                    break;                      
                  case 7:
                    ability = "Regen";
                    break;                
                  case 8:
                    ability = "Swap";
                    break; 
                  case 9:
                    ability = "Prismatic";
                    break;                        
                }
                this.opp[key].title.text = charName+"\n"+className;
                this.opp[key].ability.text = "ABILITY: "+ability;
                if(key == 0){
                    var upperChar = charName.toUpperCase()
                    this.team.text ="TEAM "+upperChar;
                } 
                 
                localStorage.setItem("opp"+key,""+5 + this.opp[key].unitSpec + attackPower + health + stamina + crit + luck +this.opp[key].abilityCode+'0')
                console.log( localStorage.getItem("opp"+key).length)
            }

        }
        , canMove: function(){
          /*0x0000ff
White = 0xffffff
Black = 0x000000
A "perfect" Blue = 0x0000ff
A "prefect" Red = 0xff0000
A "middle" Gray = 0x7a7a7a
Aqua = 0x00ffff
Gold = 0xffd700
Indigo = 0x4b0082     tint */
          
          
        }
        , selectChar: function (char) {
            
            this.charSelect = char.id;
            console.log(this.charSelect);
          
        }        
        , onDown: function (tile) {
            //console.log(tile.id);
            alert(tile.id)
          
        }
        , onInputDown: function (tile) {
            this.game.state.start('game');
            //console.log(tile.id);
            //alert("this")
          
        }
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Choose = Choose;
}());