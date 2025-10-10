//import { app, recordEmail } from "../js/lib/firebase.js";
(function() {
  'use strict';
  
  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      
      //sound volume
      if (localStorage.getItem("bgVol") === null) {
        localStorage.setItem("bgVol",startingBGVol) 

        //this.game.state.start('chat');
      } 
      if (localStorage.getItem("sfxVol") === null) {
        localStorage.setItem("sfxVol",startingSFXVol) 
        //this.game.state.start('chat');
      }   

      this.bg = this.add.sprite(0, 0, 'bg1');
      this.bg.width = this.game.width
      this.bg.height = this.game.height  
      this.bg.inputEnabled = true;
      this.bg.events.onInputDown.add(this.onClick, this);       

      this.menuText = this.add.text(this.game.width/2,this.game.height/2, "Adventures of a Witch's Garden", {font: '100px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.menuText.anchor.setTo(0.5, 0.5);    
      
      this.menuText2 = this.add.text(this.game.width/2,this.game.height/2+100, "Click to Start", {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'center'});
      this.menuText2.anchor.setTo(0.5, 0.5);          

    },

    update: function () {
  
 
    }, 
    onClick: function () {
     
      this.game.state.start('loadSave');
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Menu = Menu;

}());
