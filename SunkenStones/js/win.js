(function() {
  'use strict';

  function Win() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Win.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.transition = this.add.sprite(0, 0, 'winBG');
      this.transition.width = this.game.width
      this.transition.height = this.game.height    

      this.titleTxt = this.add.text(x,y, 'YOU SURVIVED!\nINSPECT YOUR HAUL', {font: '50px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      this.titleTxt2 = this.add.text(x-125,this.titleTxt.y+120, 'Score:', {font: '50px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.titleTxt2.anchor.setTo(0.5, 0.5);      

      this.scoreCountUI = this.add.sprite(x+125,this.titleTxt.y+120, 'coinCount');
      this.scoreCountUI.anchor.setTo(0.5, 0.5);  

      this.scoreCount = this.add.text(this.scoreCountUI.x,this.scoreCountUI.y, sessionStorage.getItem("currentScore"), {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'left'});
      this.scoreCount.anchor.setTo(0.5, 0.5);       

          //treasure UI
          var distX = 0
          var spacing = 60
          this.collectedTreasure = []
          this.collectedTreasureText = []
          for(var i = 1 ; i < 10; i++){
            this.collectedTreasure[i] = this.add.sprite(((this.game.width/2)-225)+distX , this.titleTxt.y+200, 'treasureUI_'+i);
            this.collectedTreasure[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasure[i].width = 75
            this.collectedTreasure[i].height = 75
            this.collectedTreasure[i].alpha = 0.3;

            this.collectedTreasureText[i] = this.add.text(this.collectedTreasure[i].x+20,this.collectedTreasure[i].y+20, 'x0', {font: '20px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.collectedTreasureText[i].anchor.setTo(0.5, 0.5);
            this.collectedTreasureText[i].alpha = 0;

            this.collectedTreasure[i].count = sessionStorage.getItem("collectedTreasure"+i)   
            //this.collectedTreasure[i].alpha = 0;    
            distX +=  spacing        
          }      
            //treasure 
            for(var i = 1; i < 10; i++){
              if(this.collectedTreasure[i].count > 0){
                this.collectedTreasure[i].alpha = 1
                this.collectedTreasureText[i].alpha = 1
                this.collectedTreasureText[i].text = "x"+this.collectedTreasure[i].count
              }
              else{
                this.collectedTreasure[i].alpha = 0.3
                this.collectedTreasureText[i].alpha = 0         
              }
            }


            this.titleTxt3 = this.add.text(x,this.game.height-100, '[CLICK TO RESTART]', {font: '32px LondrinaSolid-Black',fill: '#fff', align: 'center'});
            this.titleTxt3.anchor.setTo(0.5, 0.5);             
      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
	this.game.state.start('menu');
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
  window['simplewar'].Win = Win;

}());
