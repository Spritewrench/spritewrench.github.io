(function () {
    'use strict';

    function Choose() {
        this.player = null;
    }
    Choose.prototype = {
        create: function () {
            
            this.titleBG= this.add.sprite(0, 0, 'titleBG');
            this.titleBG.width = this.game.width;
            this.titleBG.height = this.game.height;        

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
            this.chat = this.add.text(bubbleMidX, bubbleMidY+25, "Hey there!", style); 
            this.chat.anchor.setTo(0.5, 0.5);
            this.chat.alpha = 0;

            this.chatCount = 0;

            this.levelSelect= this.add.sprite(-this.game.width, -this.game.height, 'levelSelect');
            this.levelSelect.width = this.game.width;
            this.levelSelect.alpha = 0;           
            this.levelSelect.inputEnabled = true;
            this.levelSelect.events.onInputDown.add(this.play, this);                 

            this.ping = this.add.audio('ping');
       
            
        }          
        , update: function () {
            this.ceiliaPopin.x += (0 - this.ceiliaPopin.x  ) * 0.1;
           
            if(this.ceiliaPopin.x > -3){
                this.speechBubble.alpha = 1
                this.chat.alpha = 1
                this.speechBubbleCont.alpha = 1
            }
            //chat
            if(this.chatCount == 0){
                this.chat.text = "Hey there!"
                this.ceiliaPopin.loadTexture("ceiliaPopin_happy")
            }
            if(this.chatCount == 1){
                this.chat.text = "Thanks for stopping by ..."
                this.ceiliaPopin.loadTexture("ceiliaPopin_reg")
            }    
            if(this.chatCount == 2){
                this.chat.text = "I could really use your help with the 2022 census!"
            }  
            if(this.chatCount == 3){
                this.chat.text = "Let's start with the Chestnut Community"
                
            }    
            if(this.chatCount >= 4){
                this.levelSelect.alpha = 1;  
                this.speechBubble.alpha = 0
                this.chat.alpha = 0
                this.speechBubbleCont.alpha = 0
            }                                              
            if(this.levelSelect.alpha == 1){
                this.levelSelect.x = 0 
                this.levelSelect.y += (0 - this.levelSelect.y) * 0.1;
                this.ceiliaPopin.x += (-this.game.width/2-50 - this.ceiliaPopin.x  ) * 0.1;
            }
        }   
        ,talk: function () {
            if(this.speechBubble.alpha != 0){
                this.chatCount++;
            }
            
        }   
        ,play: function () {
            if(this.levelSelect.alpha != 0){
                this.ping.play();
                this.game.state.start('game');
            }
            
        }           
          
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Choose = Choose;
}());