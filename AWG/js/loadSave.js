//import { app, recordEmail } from "../js/lib/firebase.js";
(function() {
  'use strict';
  
  function LoadSave() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  LoadSave.prototype = {

    create: function () {
        
      this.bg = this.add.sprite(0, 0, 'bg2');
      this.bg.width = this.game.width
      this.bg.height = this.game.height  
      //this.bg.inputEnabled = true;
      //this.bg.events.onInputDown.add(this.onClick, this);       


      var slotCount = 3
      var distX = this.game.width/2-500
      var spaceX = 500
      this.slot = []
      this.slotText = []

      this.saveText = this.add.text(this.game.width/2,25, 'Choose A Save File', {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.saveText.anchor.setTo(0.5, 0.5);              

      for(var i = 0; i < slotCount; i++){
        this.slot[i] = this.add.sprite(distX , 500, 'saveSlot');
        this.slot[i].anchor.setTo(0.5, 0.5);
        this.slot[i].origWidth = this.slot[i].width
        this.slot[i].origHeight = this.slot[i].height
        this.slot[i].id = i+1  
        distX+=spaceX

        this.slot[i].inputEnabled = true;
        this.slot[i].events.onInputOver.add(this.highLight, this);  
        this.slot[i].events.onInputOut.add(this.unhighLight, this);   
        this.slot[i].events.onInputDown.add(this.onClick, this);        

        this.slotText[i] = this.add.text(this.slot[i].x,this.slot[i].y, 'SLOT '+(i+1)+"\nNEW GAME", {font: '36px LondrinaSolid-Black',fill: '#fff', align: 'center'});
        this.slotText[i].anchor.setTo(0.5, 0.5);  

        if (localStorage.getItem("s"+(i+1)) === null) {
          localStorage.setItem("sg"+(i+1),0) 
        }
        else{
          this.slotText[i].text = 'SLOT '+(i+1)+"\n"+(Math.floor((parseInt(localStorage.getItem("s"+(i+1)))/sceneCount)*100))+"%\nCONTINUE"
        }         
      }

    },

    update: function () {

    },   
    highLight: function (item) {

        var tweenWidth = this.add.tween(item).to( { width: item.origWidth+100 }, 500, Phaser.Easing.Cubic.Out);                    
        var tweenHeight = this.add.tween(item).to( { height: item.origHeight+100 }, 500, Phaser.Easing.Cubic.Out);      
        
        tweenWidth.start();
        tweenHeight.start();        
    },   
    unhighLight: function (item) {
        var tweenWidth = this.add.tween(item).to( { width: item.origWidth }, 500, Phaser.Easing.Cubic.Out);                    
        var tweenHeight = this.add.tween(item).to( { height: item.origHeight }, 500, Phaser.Easing.Cubic.Out);      
        
        tweenWidth.start();
        tweenHeight.start();      
    },           
    onClick: function (slot) {
      localStorage.setItem("saveKey",slot.id) 
      this.game.state.start('game');

    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].LoadSave = LoadSave;

}());
