(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
        if (localStorage.getItem("module1Complete") === null ) {
            localStorage.setItem("module1Complete",0);

        }       
      
      this.game.scale.setMinMax(360, 640, 480,853)
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.BG = this.add.sprite(0, 0, 'mainBG');
      this.BG.width = this.game.width;
      this.BG.height = this.game.height;        
      this.BG.alpha = 1;
      
      
      this.token =  this.add.image(this.game.width-100,0,"token");
      this.token.width = 100
      this.token.height = 80;       
      if (localStorage.getItem("tokenCount") === null) {
        localStorage.setItem("tokenCount",0)
      }           
      this.tokenCount = this.add.text(this.token.x+80,this.token.y+40, localStorage.getItem("tokenCount"),{font:'PatrickHand-Regular'});  
  
      
      this.tokenCount.fontSize = 70; 
      this.tokenCount.fill= '#fff';  
      this.tokenCount.fontSize = 32;  
      this.tokenCount.anchor.setTo(0.5, 0.5);       
      this.tokenCount.wordWrap = true;
      this.tokenCount.wordWrapWidth = 600;
      this.tokenCount.align ='center'        
      
      this.menuModule = this.add.sprite(this.game.width/2, this.game.height/2, 'menuModule');
      this.menuModule.width = 200
      this.menuModule.height = 50;    
      this.menuModule.anchor.setTo(0.5, 0.5);  
      
      this.lock = this.add.sprite(this.menuModule.x-80 , this.game.height/2, 'lock');      
      this.lock.width = 50
      this.lock.height = 50; 
      this.lock.anchor.setTo(0.5, 0.5);  
      this.lock.alpha = 0;
      
      
      this.moduleCount = 1;
      this.moduleText = this.add.text(this.game.width/2,this.game.height/2,"MODULE 1" ,{font:'LondrinaSolid-Black'});
      this.moduleText.fill= '#fff';  
      this.moduleText.fontSize = 35;  
      this.moduleText.anchor.setTo(0.5, 0.5);       
      this.moduleText.wordWrap = true;
      this.moduleText.wordWrapWidth = 600;
      this.moduleText.align ='center'     
      this.moduleText.inputEnabled = true;
      this.moduleText.events.onInputDown.add(this.onDown, this);
      
      
      this.moduleText1 = this.add.text(this.game.width/2,this.game.height/2+70,"WHO AM I?" ,{font:'LondrinaSolid-Black'});
      this.moduleText1.fill= '#fff';  
      this.moduleText1.fontSize = 24;  
      this.moduleText1.anchor.setTo(0.5, 0.5);       
      this.moduleText1.wordWrap = true;
      this.moduleText1.wordWrapWidth = 200;
      this.moduleText1.align ='center' 
      this.moduleText1.inputEnabled = true;
      this.moduleText1.events.onInputDown.add(this.onDown, this);      
      
      this.moduleText2 = this.add.text(this.game.width/2,this.game.height/2-50,"" ,{font:'LondrinaSolid-Black'});
      this.moduleText2.fill= '#BDBFBF';  
      this.moduleText2.fontSize = 20;  
      this.moduleText2.anchor.setTo(0.5, 0.5);       
      this.moduleText2.wordWrap = true;
      this.moduleText2.wordWrapWidth = 600;
      this.moduleText2.align ='center'       
      
      this.leftButon = this.add.sprite(-1000, this.game.height/2, 'menuLeftArrow');      
      this.leftButon.width = 100
      this.leftButon.height = 100; 
      this.leftButon.inputEnabled = true;
      this.leftButon.events.onInputDown.add(this.goLeft, this);      
      
      this.rightButon = this.add.sprite(this.game.width+1000, this.game.height/2, 'menuRightArrow');      
      this.rightButon.width = 100
      this.rightButon.height = 100;       
      this.rightButon.inputEnabled = true;
      this.rightButon.events.onInputDown.add(this.goRight, this);   
      

      
      
 
      
      this.menuOverlay = this.add.sprite(0, this.game.height, 'menuOverlay');
      this.menuOverlay.alpha = 0;
      this.menuOverlay.width = this.game.width;
      this.menuOverlay.height = this.game.height;   
      


      this.menuOverlayNo = this.add.sprite(0, this.game.height, 'menuOverlayNo');
      this.menuOverlayNo.alpha = 0;
      this.menuOverlayNo.width = this.game.width;
      this.menuOverlayNo.height = this.game.height;      
      this.menuOverlayNo.inputEnabled = true;
      this.menuOverlayNo.events.onInputDown.add(this.onDown3, this);       
      
      this.modal = this.add.sprite(0, 0, 'modal');
      this.modal.alpha = 1;
      this.modal.width = this.game.width;
      this.modal.height = this.game.height;        
      
      this.intro = this.add.sprite(0, 0, 'intro');
      this.intro.alpha = 1;      
      this.intro.width = this.game.width;
      this.intro.height = this.game.height;   
      this.intro.inputEnabled = true;
      this.intro.events.onInputDown.add(this.onDown4, this);      

      if(parseInt(localStorage.getItem("moduleComplete_Avatar")) == 1){
        this.intro.loadTexture("intro2")
      }      
      
      
      //always show tips

        if (localStorage.getItem("introShow") === null) {
          localStorage.setItem("introShow",1)
        }   
        else{
          //this.intro.y = this.game.height;
          //this.modal.y = this.game.height;              
        }


    },

    update: function () {
      
      

      
      if (localStorage.getItem("introShow") == 1) {
        //this.modal.alpha = 1;
        //this.intro.alpha = 1; 
      }         
      this.lock.alpha = 1;
      switch(this.moduleCount){        
        case 1:
          this.lock.alpha = 0;
          this.moduleText.text = "WHO AM I?"
          this.moduleText1.text = "TAP TO START"
          break;
        case 2:
          this.moduleText.text = "MODULE 2"
          this.moduleText1.text = "EXPLORING MY VALUES AND BELIEFS"          
          break;
        case 3:
          this.moduleText.text = "MODULE 3"
          this.moduleText1.text = "MY THOUGHTS"          
          break;
        case 4:
          this.moduleText.text = "MODULE 4"
          this.moduleText1.text = "MY FEELINGS"          
          break;
        case 5:
          this.moduleText.text = "MODULE 5"
          this.moduleText1.text = "MY BEHAVIOUR"          
          break;
        case 6:
          this.moduleText.text = "MODULE 6"
          this.moduleText1.text = "CONFIDENCE"          
          break;
        case 7:
          this.moduleText.text = "MODULE 7"
          this.moduleText1.text = "COMMUNICATION"          
          break;
        case 8:
          this.moduleText.text = "MODULE 8"
          this.moduleText1.text = "GRATITUDE"          
          break;  
        case 9:
          this.moduleText.text = "MODULE 9"
          this.moduleText1.text = "MINDFULNESS AND MOTIVATION"          
          break;
        case 10:
          this.moduleText.text = "MODULE 10"
          this.moduleText1.text = "HEALTH AND FITNESS"          
          break;
        case 11:
          this.moduleText.text = "MODULE 11"
          this.moduleText1.text = "RELATIONSHIPS"          
          break;
        case 12:
          this.moduleText.text = "MODULE 12"
          this.moduleText1.text = "MY MISSION AND GOALS"          
          break;            
          
      }
      
    },
    hover: function (unit){

    },
    hoverOut: function (unit){

    },      
    onDown: function () {
      if(this.moduleCount == 1){
        window.location.href = "index3.html";
      }
      else{
        this.menuOverlay.alpha = 1
        this.menuOverlayNo.alpha = 1
        this.menuOverlayNo.y = 0;
        this.menuOverlay.y = 0;        
      }
      
        
    },
    onDown2: function () {
      this.menuOverlay.alpha = 1
      this.menuOverlayNo.alpha = 1
      this.menuOverlayNo.y = 0;
      this.menuOverlay.y = 0;
  
        
    },
    onDown3: function () {
      if(this.menuOverlay.alpha == 1){
        this.menuOverlay.alpha = 0
        this.menuOverlayNo.alpha = 0  
        this.menuOverlayNo.y = this.game.height;
        this.menuOverlay.y = this.game.height;        
      }
  
        
    },
    onDown4: function () {
      //console.log("hmm")
      if(this.intro.alpha == 1){
        
        this.intro.alpha = 0
        this.modal.alpha = 0  
        this.intro.y = this.game.height;
        this.modal.y = this.game.height;    
        localStorage.setItem("introShow",2)

        try{
          if (messageHandler && parseInt(localStorage.getItem("moduleComplete_Avatar")) == 1) {
            localStorage.setItem("tokenCount",0); 
            localStorage.removeItem("moduleComplete_Avatar")
            messageHandler.postMessage(
            JSON.stringify({
              tokenValue: localStorage.getItem("tokenCount"),
              gameEnd: true,
            })
            );				
          } 
        }
        catch(e){

        }
       
      }
  
        
    },
    goLeft: function () {
      this.moduleCount--
      if(this.moduleCount <= 0){
        this.moduleCount = 12
      }
  
        
    },
    goRight: function () {
      this.moduleCount++
      if(this.moduleCount > 12){
        this.moduleCount = 1
      }
        
    }       
      
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Menu = Menu;

}());
