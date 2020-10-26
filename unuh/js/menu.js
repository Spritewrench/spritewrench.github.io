(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.BG = this.add.sprite(0, 0, 'mainBG');
      this.BG.width = this.game.width;
      this.BG.height = this.game.height;        
      this.BG.alpha = 1;
      this.BGButton = [];
      this.BGButtonText = [];
      var dist = 150;
      var distY = 0;
      for(var i = 1; i < 13; i++){
        if(i == 1){
          this.BGButton[i] = this.add.sprite(dist, y-100+distY, 'mainButton');
          this.BGButton[i].width = 150;
          this.BGButton[i].height = 150;       
          this.BGButton[i].anchor.setTo(0.5, 0.5);  
          this.BGButton[i].inputEnabled = true;
          this.BGButton[i].events.onInputDown.add(this.onDown, this);           
        }
        else{
          this.BGButton[i] = this.add.sprite(dist, y-100+distY, 'mainButtonNo');
          this.BGButton[i].width = 150;
          this.BGButton[i].height = 150;       
          this.BGButton[i].anchor.setTo(0.5, 0.5);     
          this.BGButton[i].inputEnabled = true;
          this.BGButton[i].events.onInputDown.add(this.onDown2, this);            
        }
         
        this.BGButtonText[i] = this.add.text(dist, y-100+distY,"test/test" ,{font:'LondrinaSolid-Black'});
        this.BGButtonText[i].text = i
        this.BGButtonText[i].fill= '#fff';  
        this.BGButtonText[i].fontSize = 70;  
        this.BGButtonText[i].anchor.setTo(0.5, 0.5);       
        this.BGButtonText[i].wordWrap = true;
        this.BGButtonText[i].wordWrapWidth = 600;
        this.BGButtonText[i].align ='center'         
        
        if(i % 3 == 0){
          dist = 150;
          distY += 200;          
        }
        else{
          dist += 300;
        }
      }
      this.creditButon = this.add.sprite(x-220, this.game.height-150, 'menuCredit');
      this.creditButon.width = 420
      this.creditButon.height = 105;        
      this.creditButon.anchor.setTo(0.5, 0.5);  
      this.creditButon.inputEnabled = true;
      this.creditButon.events.onInputDown.add(this.onDown2, this);
      
      this.surveyButon = this.add.sprite(x+220, this.game.height-150, 'menuSurvey');
      this.surveyButon.width = 420;
      this.surveyButon.height = 105;       
      this.surveyButon.anchor.setTo(0.5, 0.5);  
      this.surveyButon.inputEnabled = true;
      this.surveyButon.events.onInputDown.add(this.onDown2, this);      
      
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

    },

    update: function () {


      
    },
    hover: function (unit){

    },
    hoverOut: function (unit){

    },      
    onDown: function () {
      console.log("tet")
      window.location.href = "index2.html";
        
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
  
        
    }        
      
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Menu = Menu;

}());
