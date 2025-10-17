(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
      create: function () {
        this.goToNextScene = false;
        //scene number
        this.saveKey =parseInt(localStorage.getItem("saveKey"))
        if (localStorage.getItem(this.saveKey+"_sceneNum") === null) {
          localStorage.setItem(this.saveKey+"_sceneNum",1) 
        }         
        this.sceneNum = parseInt(localStorage.getItem(this.saveKey+"_sceneNum"))
        
        //set save progress
        localStorage.setItem("s"+(this.saveKey),this.sceneNum)

        this.bg = this.add.sprite(0, 0, 'scene'+this.sceneNum);
        this.bg.width = this.game.width
        this.bg.height = this.game.height  
        //this.bg.inputEnabled = true;
        //this.bg.events.onInputDown.add(this.onClick, this);    

        this.invCount = 9
        if (localStorage.getItem(this.saveKey+"_invKey") === null) {
          localStorage.setItem(this.saveKey+"_invKey",0) 
        }        
        this.invKey = localStorage.getItem(this.saveKey+"_invKey")
        if (localStorage.getItem(this.saveKey+"_invCode") === null) {
          localStorage.setItem(this.saveKey+"_invCode","0-0-0-0-0-0-0-0-0") 
        }          
        this.invCode = localStorage.getItem(this.saveKey+"_invCode")
        
        
        var distX = this.game.width/2-(100*((this.invCount-1)/2))
        var spaceX = 100
        this.inv = []
        for(var i = 0; i < this.invCount; i++){
          var invIDs = this.invCode.split("-");
          this.inv[i] = this.add.sprite(distX , this.game.height-50, 'inventory_'+invIDs[i]);
          this.inv[i].anchor.setTo(0.5, 0.5);
          this.inv[i].origWidth = this.inv[i].width
          this.inv[i].origHeight = this.inv[i].height
          this.inv[i].origX = this.inv[i].x
          this.inv[i].origY = this.inv[i].y          
          this.inv[i].id = i 
          this.inv[i].invID = parseInt(invIDs[i])

          this.inv[i].inputEnabled = true;
          this.inv[i].events.onInputOver.add(this.highLight, this);  
          this.inv[i].events.onInputOut.add(this.unhighLight, this);           
          this.inv[i].events.onInputDown.add(this.useInv, this);   

          distX+=spaceX        
        }

        //load objects for scene
        switch(this.sceneNum){
          case 1:
            this.knife = this.add.sprite(this.game.width/2, this.game.height/2, 'knife');
            this.knife.anchor.setTo(0.5, 0.5);  
            this.knife.inputEnabled = true;
            this.knife.id = 1
            this.knife.events.onInputDown.add(this.pickUp, this);              
            break;
          case 2:
            this.feather = this.add.sprite(100, this.game.height-200, 'feather');
            this.feather.anchor.setTo(0.5, 0.5);  
            this.feather.inputEnabled = true;
            this.feather.id = 2
            this.feather.scale.x = 0.2;
            this.feather.scale.y = 0.2;             
            this.feather.events.onInputDown.add(this.pickUp, this);              
            break;            
        }



        this.chatNameBox = this.add.sprite(this.game.width/2, this.game.height*5, 'chatName');
        this.chatNameBox.anchor.setTo(0.5, 0.5);  
        this.chatNameBox.scale.x = 0.25;
        this.chatNameBox.scale.y = 0.25;   

        this.chatBox = this.add.sprite(this.game.width/2, this.game.height*5, 'chatbox');
        this.chatBox.anchor.setTo(0.5, 0.5);  
        this.chatBox.scale.x = 0.65;
        this.chatBox.scale.y = 0.65;
        this.chatBox.inputEnabled = true;
        this.chatBox.events.onInputDown.add(this.showChat, this);     

        this.chatEmotion = this.add.sprite(this.game.width/2, this.game.height*5, 'chibi-yara-happy');
        this.chatEmotion.anchor.setTo(0.5, 0.5);  
        this.chatEmotion.scale.x = 0.5;
        this.chatEmotion.scale.y = 0.5; 
        

        this.chatBoxText = this.add.text(this.chatBox.x,this.chatBox.y, 'THIS IS A TEST', {font: '48px LondrinaSolid-Black',fill: '#000', align: 'center'});
        this.chatBoxText.anchor.setTo(0.5, 0.5);     

        this.chatName = this.add.text(this.chatBox.x-this.chatBox.width/2,this.chatBox.y-this.chatBox.height/2, 'TASHIA', {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'left'});
        this.chatName.anchor.setTo(0.5, 0.5);            
        
        
        //scene specific dialog trigger
        switch(this.sceneNum){
          case 1:
            this.startChat()
            break;
        }

        this.transition = this.add.sprite(-this.game.width*2, 0, 'night_transition');
        this.transition.width = this.game.width*2        

        if(this.sceneNum > 1){
          this.transition.x = 0
          var transitionTween = this.add.tween(this.transition).to( { x: -this.game.width*2 }, 2000,Phaser.Easing.Power2);
          transitionTween.onComplete.addOnce(function(){
            //scene specific dailog
            switch(this.sceneNum){
              case 2:
                this.startChat()
                break;
            }
          }, this);        
          transitionTween.start()          
        }

        this.cursorKey = 0;

        //manipu
        //document.body.style = 'cursor: url(../assets/hand_point.png), default;'
        //document.body.style = 'cursor: url(../assets/hand_point2.png), default;'
        

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
      startChat: function(){
          this.dialogCounter = 0;
          if(localStorage.getItem(this.saveKey+"_dialogCounter") !== null){
            this.dialogCounter = parseInt(localStorage.getItem(this.saveKey+"_dialogCounter")) 
          }                      
          var chatTween = this.add.tween(this.chatBox).to( { y: this.game.height/2 }, 500, Phaser.Easing.Cubic.Out);
          chatTween.onComplete.addOnce(function(){
              this.showChat()
          }, this);  
          chatTween.start();
      },
      showChat: function () {
        loadScript();       
        if(!this.chatWait ){
          

                 
          if(this.dialogCounter < dialog.length){
              
            

              this.chatBoxText.y = this.chatBox.y
              
              this.chatNameBox.y = this.chatBox.y-this.chatBox.height/2
              this.chatNameBox.x = this.chatBox.x-this.chatBox.width/2+this.chatNameBox.width/2+25
              this.chatName.y = this.chatNameBox.y-10
              this.chatName.x = this.chatNameBox.x   

              this.chatEmotion.x = this.chatBox.x-this.chatBox.width/2+50
              this.chatEmotion.y = this.chatBox.y-this.chatBox.height/2                



              var origchat = dialog[this.dialogCounter]
              var chat = origchat.split('-')
              var emotion = chat[0].split('(')

              this.talkingTo = emotion[0].toLowerCase()

              this.chatName.text = emotion[0].toUpperCase()


              console.log(chat)
              console.log(emotion)
              emotion[1] = emotion[1].substring(0, emotion[1].length - 1);
              chat[0] = emotion[0]

              //trigger screenshake
              if(emotion[1].includes("!")){
              emotion[1] = emotion[1].substring(0, emotion[1].length - 1);

                     
              

              this.timer = this.game.time.create(true);
              this.timer.add(100, function(){
                  this.game.plugins.screenShake.shake(30);  
              }, this);
                this.timer.start();               
              }     
              //trigger key words     
              if(chat[2] !== undefined){
                if(chat[2].includes("SAVE")){
                  
                }      
                else if(chat[2].includes("NEXTSCENE")){
                  console.log("NEXT SCENE")
                  localStorage.setItem(this.saveKey+"_dialogCounter",this.dialogCounter+1)
                  this.dialogCounter = dialog.length   
                  this.goToNextScene = true;
                }                                
                else if(chat[2].includes("END")){
                  console.log("END NOW")
                  localStorage.setItem(this.saveKey+"_dialogCounter",this.dialogCounter+1)
                  this.dialogCounter = dialog.length   
                }       
             
              }
   
              this.chatEmotion.loadTexture('chibi-'+this.talkingTo+'-'+emotion[1])

              this.chatBoxText.text = chat[1]
              this.dialogCounter++

          }
          else{

              this.closeChat();
          }
        }

      },  
      closeChat: function (location) {
          console.log("CLOSING CHAAAAAAAAAAAAAAAAAT")
       
          var chatTween = this.add.tween(this.chatBox).to( { y: this.game.height*5}, 500, Phaser.Easing.Cubic.Out);
          chatTween.onComplete.addOnce(function(){
            if(this.goToNextScene){
              this.next();
            }
          }, this);          
      chatTween.start()
        
      //this.dialogCounter = parseInt(localStorage.getItem("alibiCounter"+this.nightCountNum))
      this.chatNameBox.y = this.game.height*2
      this.chatName.y = this.game.height*2  
      this.chatEmotion.y = this.game.height*2
    
      this.chatBoxText.text =""
            
          
          


      },        
      next: function () {
        console.log("Next!")
        var transitionTween = this.add.tween(this.transition).to( { x: 0 }, 2000,Phaser.Easing.Power2);
        transitionTween.onComplete.addOnce(function(){

        this.invCode = ""
        for(var i = 0; i < this.invCount; i++){
          this.invCode += this.inv[i].invID
          if(i < this.invCount-1){
            this.invCode += "-"
          }       
        }          

        localStorage.setItem(this.saveKey+"_invCode",this.invCode)   
        localStorage.setItem(this.saveKey+"_invKey",this.invKey)          
     

            if(this.sceneNum >= sceneCount){
              localStorage.setItem(this.saveKey+"_sceneNum",1)
              this.game.state.start('menu');
            }
            else{
              localStorage.setItem(this.saveKey+"_sceneNum",this.sceneNum+1)
              this.game.state.start('game');
            }
        }, this);        
        transitionTween.start() 



      },
      highLight: function (item) {

          var tweenWidth = this.add.tween(item).to( { width: item.origWidth+15 }, 500, Phaser.Easing.Cubic.Out);                    
          var tweenHeight = this.add.tween(item).to( { height: item.origHeight+15 }, 500, Phaser.Easing.Cubic.Out);      
          
          tweenWidth.start();
          tweenHeight.start();        
      },   
      unhighLight: function (item) {
          var tweenWidth = this.add.tween(item).to( { width: item.origWidth }, 500, Phaser.Easing.Cubic.Out);                    
          var tweenHeight = this.add.tween(item).to( { height: item.origHeight }, 500, Phaser.Easing.Cubic.Out);      
          
          tweenWidth.start();
          tweenHeight.start();      
      },  
      pickUp: function (item){
          var tweenPick = this.add.tween(item).to( { x: this.inv[this.invKey].x, y: this.inv[this.invKey].y}, 250, Phaser.Easing.Cubic.Out);                    
          tweenPick.onComplete.addOnce(function(){
              this.inv[this.invKey].invID = item.id
              this.inv[this.invKey].loadTexture('inventory_'+item.id)
              this.invKey++;
              item.alpha = 0;
              item.y = this.game.height*5

              console.log("play new scene "+this.sceneNum)
              //follow up action depending on scene
              switch(this.sceneNum){
                case 1:
                  this.startChat();
                  break;
                case 2:
                  this.startChat();
                  break;                  
              }

          }, this);  
          tweenPick.start();  
      },      
      useInv: function (inv){
        inv.y = inv.origY
        var tweenY = this.add.tween(inv).to( { y: inv.origY }, 500, Phaser.Easing.Elastic.InOut);                         
        
        tweenY.start();
      
        console.log(inv.invID)
        if(this.cursorKey == inv.invID){
          this.cursorKey = 0
          document.body.style = 'cursor: url(../assets/hand_point.png), default;'
        }
        else{
          switch(inv.invID){
            case 1:
              this.cursorKey = inv.invID
              document.body.style = 'cursor: url(../assets/hand_point2.png), default;'
              break;
          }
        }

      }             
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
}());