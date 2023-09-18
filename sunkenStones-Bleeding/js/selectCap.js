(function() {
  'use strict';

  function selectCap() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  selectCap.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.bg = this.add.sprite(0, 0, 'selectBG');
      this.bg.width = this.game.width
      this.bg.height = this.game.height      

      this.titleTxt = this.add.text(x,20, 'CHOOSE YOUR CAPTAIN', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
      
      this.selectCap = []
      var distX = 0;
      var distY = 0;
      for(var i = 1; i < 9; i++){
        this.selectCap[i] = this.add.sprite(220+distX, 280+distY, 'selectCap-'+i);
        this.selectCap[i].origX = this.selectCap[i].x;
        this.selectCap[i].origY = this.selectCap[i].y;
        this.selectCap[i].anchor.setTo(0.5, 0.5);
        this.selectCap[i].id = i;
        this.selectCap[i].unlocked = true;
        this.selectCap[i].inputEnabled = true;
        this.selectCap[i].events.onInputDown.add(this.select, this);            
        if(i > 3){
            this.selectCap[i].loadTexture('selectCap_locked') 
            this.selectCap[i].unlocked = false;
        }        
        if(i != 4){
            distX += 500 

        }
        else if(i == 4){
            distX = 0
            distY += 500;
        }

      }
      this.selectCapSelect = this.add.sprite(this.selectCap[1].x, this.selectCap[1].y, 'selectCap_highlight');
      this.selectCapSelect.anchor.setTo(0.5, 0.5);

      this.nextButton = this.add.sprite(x, y+500, 'nextButton');
      this.nextButton.anchor.setTo(0.5, 0.5);   
      this.nextButton.inputEnabled = true;
      this.nextButton.events.onInputDown.add(this.onDown, this);            
      localStorage.setItem("captain",1)
    },

    update: function () {

    },
    select: function (captain) {
        if(!captain.unlocked){

        }
        else{
            localStorage.setItem("captain",captain.id)
            this.selectCapSelect.x = captain.x
            this.selectCapSelect.y = captain.y
            
        }

    },    
    onDown: function () {
        this.game.state.start('selectCrew');
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].selectCap = selectCap;

}());
