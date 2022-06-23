(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {
            this.map = this.add.sprite(0, 0, 'gameBG');
            this.map.width = this.game.width;
            this.map.height = this.game.height;        

            var x = this.game.width / 2
            , y = this.game.height / 2;            
            
            //eggs
            this.egg = []
            this.currentPos = []
            var count = 15;
            var startX = 50;
            var distX = x-90//startX
            var distY = y-125
            var spacingX = 90
            var spacingY = 90
            
            this.turnCount = 1;
            this.targetRow = 0;
            var row = 1;
            this.hiddenCount = 0;

            for(var k = 0; k < count; k++){
                if(k%2 == 0){
                    this.egg[k] = this.add.sprite(distX, distY, 'egg1');
                }
                else{
                    this.egg[k] = this.add.sprite(distX, distY, 'egg2');
                }
                
                this.egg[k].anchor.setTo(0.5, 0.5);          
                this.egg[k].inputEnabled = true;
                this.egg[k].events.onInputDown.add(this.pickEgg, this);   
                             
                distX += spacingX;  
                if(k == 2){
                    
                    distY += spacingY+50
                    distX = spacingX+startX
                }
                if(k == 3){
                    row++;
                }
                if(k == 7){
                    
                    distY += 150
                    distX = 50
                }     
                if(k == 8){
                    row++;
                }      
                this.currentPos[k] = this.egg[k].alpha         
                this.egg[k].row = row;              
            }   
            
            this.endTurn = this.add.sprite(x, this.game.height-150, 'nextTurn');
            this.endTurn.anchor.setTo(0.5, 0.5);  
            this.endTurn.width = 150;
            this.endTurn.height = 150;
            this.endTurn.inputEnabled = true;
            this.endTurn.events.onInputDown.add(this.newTurn, this);   
            
            this.undo = this.add.sprite(x - 200, this.game.height-150, 'undo');
            this.undo.anchor.setTo(0.5, 0.5);  
            this.undo.width = 150;
            this.undo.height = 150;
            this.undo.inputEnabled = true;
            this.undo.events.onInputDown.add(this.undoTurn, this);               
            
            var style = { font: 'bold 32pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
            this.turnNum = this.add.text(x, 100, "TURN", style); 
            this.turnNum.anchor.setTo(0.5, 0.5);         

            this.result = this.add.sprite(-this.game.width, 0, 'win');
            this.result.width = this.game.width;
            this.result.height = this.game.height;          
            this.result.targetX =  -this.game.width 
            this.result.inputEnabled = true;
            this.result.events.onInputDown.add(this.onClick, this);         
            
            this.origHiddenCount = this.hiddenCount
                
        }
        , update: function () {
            this.turnNum.text ="TURN "+(this.turnCount)

            if((this.turnCount) % 2 == 0 && (this.turnCount) > 1){
                this.origHiddenCount = this.hiddenCount
                console.log("AI taking turn ...")
                var aiRow = Math.floor(Math.random() * 3)+1;
                var aiAmount = Math.floor(Math.random() * 5)+1;
                if(aiRow == 1){
                    var alphaCount = 0
                    var alreadyHidden = 0
                    for(var k = 0; k <= 2; k++){
                        var ran = Math.floor(Math.random() * 2);
                        if(this.egg[k].alpha == 0){
                            alreadyHidden++
                        }

                        if(ran == 0 && this.egg[k].alpha == 1){
                            this.egg[k].alpha = 0;
                            this.hiddenCount++
                            alphaCount++
                            console.log("Taking Egg #"+k)
                        }
                    }
                    var ran = Math.floor(Math.random() * 3);
                    if(alphaCount == 0 && alreadyHidden < 3 && this.egg[ran].alpha == 1){
                        
                        this.egg[ran].alpha = 0;
                        this.hiddenCount++
                        console.log("Emergency Taking Egg #"+k)
                    }
                    else if(alreadyHidden >= 3){
                        aiRow++
                    }
                }
                if(aiRow == 2){
                    var alphaCount = 0
                    var alreadyHidden = 0
                    for(var k = 3; k <= 7; k++){
                        var ran = Math.floor(Math.random() * 2);
                        if(this.egg[k].alpha == 0){
                            alreadyHidden++
                        }                        
                        if(ran == 0 && this.egg[k].alpha == 1){
                            this.egg[k].alpha = 0;
                            this.hiddenCount++
                            alphaCount++
                            console.log("Taking Egg #"+k)
                        }
                    }
                    var ran = Math.floor(Math.random() * 5)+3;
                    if(alphaCount == 0 && alreadyHidden < 5 && this.egg[ran].alpha == 1){
                        
                        this.egg[ran].alpha = 0;
                        this.hiddenCount++
                        console.log("Emergency Taking Egg #"+k)
                    }  
                    else if(alreadyHidden >= 5){
                        aiRow++
                    }                                      
                }
                if(aiRow == 3){
                    var alphaCount = 0
                    var alreadyHidden = 0
                    for(var k = 8; k <= 14; k++){
                        var ran = Math.floor(Math.random() * 2);
                        if(this.egg[k].alpha == 0){
                            alreadyHidden++
                        }                             
                        if(ran == 0 && this.egg[k].alpha == 1){
                            this.egg[k].alpha = 0;
                            this.hiddenCount++
                            alphaCount++
                            console.log("Taking Egg #"+k)
                        }
                    }
                    var ran = Math.floor(Math.random() * 6)+8;
                    if(alphaCount == 0  && alreadyHidden < 7 && this.egg[ran].alpha == 1){
                       
                        this.egg[ran].alpha = 0;
                        this.hiddenCount++
                        console.log("Emergency Taking Egg #"+k)
                    }    
                    else if(alreadyHidden >= 7){
                        aiRow = 1;
                    }                                       
                } 
                if(this.hiddenCount >= 15){
                    this.result.loadTexture("win")
                    this.result.targetX = 0;
                    //this.game.state.start('lose') 
                }                
                else if(this.origHiddenCount != this.hiddenCount){
                    this.newTurn()
                    //this.origHiddenCount = this.hiddenCount
                }
                
            }
            this.result.x += ((this.result.targetX) - this.result.x) * 0.1;  
            //this.result
        }
        ,doNothing: function () {   


        }  
        ,newTurn: function () {   
            this.hiddenCount = 0;
            for(var k = 0; k < 15; k++){
                this.currentPos[k] = this.egg[k].alpha
                if(this.egg[k].alpha == 0){
                    this.hiddenCount++
                }
            }

            
            if(this.origHiddenCount == this.hiddenCount){
                alert("You need to pick up an EGG")
            }
            else{
                this.targetRow = 0
                this.turnCount++;
                this.origHiddenCount = this.hiddenCount
            }
            

        }   
        ,undoTurn: function () {  
            this.hiddenCount = 0; 
            for(var k = 0; k < 15; k++){
                this.egg[k].alpha = this.currentPos[k]
                if(this.egg[k].alpha == 0){
                    this.hiddenCount++
                }                
                
            }
            this.targetRow = 0
            //this.hiddenCount = this.origHiddenCount
            //this.turnCount++;

        }                         
        , pickEgg: function (unit) {
            if(this.targetRow < 1){
                this.targetRow = unit.row
            }
            if(this.targetRow == unit.row){
                unit.alpha = 0;
                this.hiddenCount++
            }
            if(this.hiddenCount >= 15){
                this.result.loadTexture("lose")
                this.result.targetX = 0;
                //this.game.state.start('lose') 
            }
            //this.result.targetX = 0;
            
        }
        , onClick: function (unit) {
            this.game.state.start('game') 
        }
          
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
}());