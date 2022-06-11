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

        
        this.titleBG= this.add.sprite(0, 0, 'titleBG');
        this.titleBG.width = this.game.width;
        this.titleBG.height = this.game.height;        
        this.titleBG.alpha = 0;        
        
        
        this.logo = this.add.sprite(0, 0, 'logo');
        this.logo.width = this.game.width;
        this.logo.height = this.game.height;
        
        this.logo2 = this.add.sprite(0, 0, 'logo2');
        this.logo2.width = this.game.width;
        this.logo2.height = this.game.height;
        this.logo2.alpha = 0;
        
        
        
        this.animTimer1 = 50;
        this.animTimer2 = 50;
        
        
        var style = { font: '24pt Muli', fill: 'black', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.start = this.add.text(x, y+100, "", style); 
        this.start.anchor.setTo(0.5, 0.5);
        this.start.alpha = 0;
        this.start.inputEnabled = true;
        this.start.events.onInputDown.add(this.onDown, this);
       

        
   
        
        var style = { font: '20pt Muli', fill: 'black', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.version = this.add.text(x, this.game.height-24, "VER 0.0.0", style); 
        this.version.anchor.setTo(0.5, 0.5);
        this.version.alpha = 0;
                
        
        

        

        
        //this.input.onDown.add(this.onDown, this);
    },

    update: function () {

        
        if(this.animTimer1 > 0){
            this.animTimer1--;
            
        }
        else{
            this.logo.y += (0 - this.logo.y ) * 0.05;

        }
        if(this.logo.y <= 0.1){
            this.logo2.alpha += (1 - this.logo2.alpha  ) * 0.05;
            this.version.alpha += (1 - this.version) * 0.05;
            this.version.text ="ver 0.0.1"      

            this.start.alpha += (1 - this.start.alpha  ) * 0.05;
            //this.start.tint = 0xFFFFFF
            this.start.text = "START"       
        }  
        if(this.titleBG.alpha >= 0.1 ){
            if(this.animTimer2 > 0){
               this.animTimer2--; 
            }
            else{
                this.start.alpha += (1 - this.start.alpha  ) * 0.05;
                //this.start.tint = 0xFFFFFF
                this.start.text = "START"     
                
            }

        }

        //console.log(this.mainMenuMusic.onFadeComplete)


      
    },
    hover: function (unit){
        unit.tint = 0x160c2c
    },
    hoverOut: function (unit){
        unit.tint = 0xFFFFFF
    },      
    onDown: function () {
        this.game.state.start('choose') 
    
	//this.game.state.start('choose');
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
  window['simplewar'].Menu = Menu;

}());
