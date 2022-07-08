(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
        //this.game.scale.setMinMax(360, 640, 480,853)
        
        this.game.stage.backgroundColor = "#160c2c";
        
      var x = this.game.width / 2
        , y = this.game.height / 2;

        
        this.map = this.add.sprite(0, 0, 'mainBG');
        this.map.width = this.game.width;
        this.map.height = this.game.height;      

        
        
        
        this.animTimer1 = 50;
        this.animTimer2 = 50;
        
        var style = { font: '14pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        
        this.hScoreTxt = this.add.text(x, this.game.height-24, "", style); 
        this.hScoreTxt.anchor.setTo(0.5, 0.5);
        this.hScoreTxt.alpha = 0;
        

        if (localStorage.getItem("winCount") === null) {
          localStorage.setItem("winCount",0)
        }  
        if (localStorage.getItem("winStreak") === null) {
            localStorage.setItem("winStreak",0)
        }        
        var style = { font: '32pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1000 };
        this.start = this.add.text(x, this.game.height-100, "TAP TO PLAY", style); 
        this.start.anchor.setTo(0.5, 0.5);
        this.start.alpha = 0;

        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 1000 };
        this.record = this.add.text(x, this.game.height/2+250, "WIN STREAK: "+parseInt(localStorage.getItem("winStreak"))+"\nTOTAL WIN COUNT: "+parseInt(localStorage.getItem("winCount")), style); 
        this.record.anchor.setTo(0.5, 0.5);
        this.record.alpha = 0;        

    
        

        

        
        this.input.onDown.add(this.onDown, this);
    },

    update: function () {

        if(this.animTimer1 > 0){
            this.animTimer1--;
            this.start.alpha += (1 - this.start.alpha  ) * 0.05;
            this.start.y += ((this.game.height/2+100) - this.start.y) * 0.05;
        }
        console.log(this.start.y - (this.game.height/2+100))
        if(this.start.y - (this.game.height/2+100) <= 30 && this.start.y - (this.game.height/2+100) > 25){
          this.record.alpha += 0.1;
        }

      
    },     
    onDown: function () {
        console.log("!")
    this.menuClicked = true;
    this.game.state.start('game') 

    }      
      
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Menu = Menu;

}());
