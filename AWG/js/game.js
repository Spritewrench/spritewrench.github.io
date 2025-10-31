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
        
        


        this.cutscene 
        //load objects for scene
        switch(this.sceneNum){
          case 1:
            this.knife = this.add.sprite(this.game.width/2, this.game.height/2, 'knife');
            this.knife.anchor.setTo(0.5, 0.5);  
            this.knife.inputEnabled = true;
            this.knife.id = 1
            this.knife.events.onInputDown.add(this.pickUp, this);         

            this.s1o1= this.add.sprite(this.game.width/2+328, this.game.height+5, 's1o1');
            this.s1o1.anchor.setTo(0.5, 1);       
            this.s1o1.inputEnabled = true;
            this.s1o1.id = 5
            this.s1o1.events.onInputDown.add(this.inspect, this);   
            
            this.s1o2= this.add.sprite(0, 0, 's1o2');     
            this.s1o2.inputEnabled = true;
            this.s1o2.id = 6
            this.s1o2.events.onInputDown.add(this.inspect, this);
            
            this.s1o3= this.add.sprite(this.game.width,0, 's1o3');
            this.s1o3.anchor.setTo(1, 0);       
            this.s1o3.inputEnabled = true;
            this.s1o3.id = 7
            this.s1o3.scene = true
            this.s1o3.events.onInputDown.add(this.inspect, this);               
            
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
          case 4:
            this.s4o1 = this.add.sprite(this.game.width/2,this.game.height/2, 's4o1');
            this.s4o1.anchor.setTo(0.5, 0.5);  
            this.s4o1.inputEnabled = true;
            this.s4o1.id = 26      
            this.s4o1.events.onInputDown.add(this.inspect, this);              
            break;   
            
          case 5:
            this.birdCount = 3;

            this.birdLight1 = this.add.sprite(0,0, 'birdLight1');
            this.birdLight1.width = this.game.width
            this.birdLight1.height = this.game.height
            this.birdLight2 = this.add.sprite(0,10, 'birdLight2');
            this.birdLight2.width = this.game.width
            this.birdLight2.height = this.game.height
            this.birdLight3 = this.add.sprite(0,0, 'birdLight3');
            this.birdLight3.width = this.game.width
            this.birdLight3.height = this.game.height                        

            this.rabbit = this.add.sprite(0,0, 'rabbit');
            this.rabbit.width = this.game.width
            this.rabbit.height = this.game.height            
            
            this.s5o1 = this.add.sprite(this.game.width-300,this.game.height/2-150, 's5o1');
            this.s5o1.anchor.setTo(0.5, 0.5);  
            this.s5o1.inputEnabled = true;
            this.s5o1.id = 35      
            this.s5o1.birdNum =1  
            this.s5o1.events.onInputDown.add(this.inspect, this);     
            
            this.s5o2 = this.add.sprite(150,this.game.height/2-120, 's5o2');
            this.s5o2.anchor.setTo(0.5, 0.5);  
            this.s5o2.inputEnabled = true;
            this.s5o2.id = 35  
            this.s5o2.birdNum =2    
            this.s5o2.events.onInputDown.add(this.inspect, this);     
            
            this.s5o3 = this.add.sprite(this.game.width/2+200,this.game.height/2-400, 's5o3');
            this.s5o3.anchor.setTo(0.5, 0.5);  
            this.s5o3.inputEnabled = true;
            this.s5o3.id = 35   
            this.s5o3.birdNum =3       
            this.s5o3.events.onInputDown.add(this.inspect, this);                 
            break;               
        }

        this.modal = this.add.sprite(0, 0, 'modal');
        this.modal.width = this.game.width
        this.modal.height = this.game.height  
        this.modal.alpha = 0;

        this.sceneImage = this.add.sprite(-this.game.width, -this.game.height, 'modal');
        this.sceneImage.anchor.setTo(0.5, 0.5); 
     

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
                this.startChat(10)
                break;
              case 3:
                this.startChat(19)
                break; 
              case 4:
                this.startChat(23)
                break;
              case 5:
                this.startChat(29)
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
      startChat: function(key,chatYPos){

        if(chatYPos == undefined ){
          chatYPos = this.game.height/2;
        }
          if(key == undefined){
            this.dialogCounter = 0;

            if(localStorage.getItem(this.saveKey+"_dialogCounter") !== null){
              this.dialogCounter = parseInt(localStorage.getItem(this.saveKey+"_dialogCounter")) 
            }     
          }
          else{
            this.dialogCounter = key;
          }
                 
          var chatTween = this.add.tween(this.chatBox).to( { y: chatYPos }, 500, Phaser.Easing.Cubic.Out);
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
              var currentCounter = parseInt(localStorage.getItem(this.saveKey+"_dialogCounter")) 
              if(this.birdCount <= 0 && currentCounter == 36){
                this.startChat(36)
              }
              else{
                this.closeChat();
              }
              
          }
        }

      },  
      closeChat: function (location) {
          console.log("CLOSING CHAAAAAAAAAAAAAAAAAT")

          this.modal.alpha = 0
          this.sceneImage.x = -this.game.width
          this.sceneImage.y = -this.game.height
          
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
      inspect: function (item) {
        
        if(item.scene != undefined){
          this.modal.alpha = 1;
          this.sceneImage.loadTexture('sceneImage'+this.s1o3.id)
          this.sceneImage.x = this.game.width/2
          this.sceneImage.y = this.game.height/2-200
          this.startChat(item.id,this.game.height/2+200)
          
        }
        else{
          switch(item.id){
            default:
              this.startChat(item.id)
              break;
            case 25:
              if(this.cursorKey == 1){
                this.startChat(item.id)
              }
              else{
                this.startChat(23)
              }              
              break;
            case 35:
              if(this.cursorKey == 1){
                if(item.birdNum == 1){
                  this.s5o1.y = -this.game.height
                  this.birdLight1.alpha = 0;
                  this.birdCount--
                }
                if(item.birdNum == 2){
                  this.s5o2.y = -this.game.height
                  this.birdLight2.alpha = 0;
                  this.birdCount--
                  
                }        
                if(item.birdNum == 3){
                  this.s5o3.y = -this.game.height
                  this.birdLight3.alpha = 0;
                  this.birdCount--

                }                        
                this.startChat(item.id)
              }
              else{
                this.startChat(34)
              }              
              break;              
          }
          
        }
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
                  this.startChat(8);
                  break;
                case 2:
                  this.startChat(16);
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