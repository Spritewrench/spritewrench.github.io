(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
      create: function () {

        //scene number
        if (localStorage.getItem("sceneNum") === null) {
          localStorage.setItem("sceneNum",1) 
        }         
        this.sceneNum = parseInt(localStorage.getItem("sceneNum"))
        this.bg = this.add.sprite(0, 0, 'scene'+this.sceneNum);
        this.bg.width = this.game.width
        this.bg.height = this.game.height  
        this.bg.inputEnabled = true;
        this.bg.events.onInputDown.add(this.onClick, this);    
      },
  
      update: function () {
        try{
          this.checkKeywords(this.chatBoxText)
        }
        catch(e){}
         

      
      },   
      checkKeywords: function (text){
          // detect emoji /\p{Extended_Pictographic}/u.test('flowers 123')
          // first be able to detect multiple key words
          text.clearColors()
          var words = text.text.split(" ");


          
          var lengthCounter = [];
          var lengthKey = 0;
          lengthCounter[lengthKey] = 0;

          var keyWordCounter = [];
          

          for(var k = 0; k < keyword.length; k++){
            var upperCaseText = text.text.toUpperCase()
            upperCaseText = upperCaseText.replace(/\n/g, '');
            var keyWordLoc = upperCaseText.indexOf(keyword[k].word.toUpperCase())
            
            //keyword found
            if(keyWordLoc !== -1){
                keyWordCounter[lengthKey] = k
                lengthCounter[lengthKey] = keyWordLoc
                lengthKey++
            
            }
          }          

          text.addColor("black", 0);
          for(var j = 0; j < lengthCounter.length;j++){
            try{
              text.addColor(keyword[keyWordCounter[j]].color, lengthCounter[j]); 
              text.addColor("black", (lengthCounter[j]+keyword[keyWordCounter[j]].word.length));
            }
            catch(e){
            }
          }
          text.updateText()          
      },
      updatetoolTip: function (text){
         
          this.tips.updateContent("Plus Ultra")
          var words = text.text.split(" ");
          var content = ""

          for(var k = 0; k < keyword.length; k++){
            var upperCaseText = text.text.toUpperCase()
            upperCaseText = upperCaseText.replace(/\n/g, '');
            var keyWordLoc = upperCaseText.indexOf(keyword[k].word.toUpperCase())
            //keyword found
            if(keyWordLoc !== -1){
               
                if(keyword[k].description.length > 0){
                  this.tips.showTooltip()  
                  console.log(keyword[k].description)
                  if(keyword[k].description.length > 0){
                    content = ""+keyword[k].description+"\n\n"
                  } 
                  this.tips.updateContent(content)
            
            }
          }             
          
          
          //this.tips.updatePosition(text.x+10, text.y+100)
          var holderText = this.tips.returnText()
          this.checkKeywords(holderText)
          
        } 
      },   
      onClick: function () {
        if(this.sceneNum >= 11){
          localStorage.setItem("sceneNum",1)
          this.game.state.start('menu');
        }
        else{
          localStorage.setItem("sceneNum",this.sceneNum+1)
          this.game.state.start('game');
        }


      }             
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
}());