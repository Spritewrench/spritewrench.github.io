(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
      create: function () {
       //plugins' 
        this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);        
        this.goToNextScene = false;

        this.back_layer = this.add.group();
        this.mid_layer = this.add.group();
        this.ui_layer = this.add.group();
        this.front_layer = this.add.group()        


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

        this.back_layer.add(this.bg)
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
            Swal.fire({
              title: 'The Quest Begins!',          
              html: 'Yara has been tasked by their Elders to go on a Quest.<br/>She must find their three guides:<br/>the Flying Rabbit,<br/>the Talking Boabab<br/>and the Queen.<br/><br/>Understanably Yara is very skeptical ....',
              imageWidth: 400,
              imageHeight: 500,
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then((result) => {

            })  

            this.knife = this.add.sprite(this.game.width/2, this.game.height/2, 'knife');
            this.knife.anchor.setTo(0.5, 0.5);  
            this.knife.inputEnabled = true;
            this.knife.id = 1
            this.knife.events.onInputDown.add(this.pickUp, this);         
            this.mid_layer.add(this.knife)

            this.s1o1= this.add.sprite(this.game.width/2+328, this.game.height+5, 's1o1');
            this.s1o1.anchor.setTo(0.5, 1);       
            this.s1o1.inputEnabled = true;
            this.s1o1.id = 5
            this.s1o1.events.onInputDown.add(this.inspect, this);   
            this.mid_layer.add(this.s1o1)
            
            this.s1o2= this.add.sprite(0, 0, 's1o2');     
            this.s1o2.inputEnabled = true;
            this.s1o2.id = 6
            this.s1o2.events.onInputDown.add(this.inspect, this);
            this.mid_layer.add(this.s1o2)
            
            this.s1o3= this.add.sprite(this.game.width,0, 's1o3');
            this.s1o3.anchor.setTo(1, 0);       
            this.s1o3.inputEnabled = true;
            this.s1o3.id = 7
            this.s1o3.scene = true
            this.s1o3.events.onInputDown.add(this.inspect, this);               
            this.mid_layer.add(this.s1o3)

            break;
          case 2:
            this.feather = this.add.sprite(100, this.game.height-200, 'feather');
            this.feather.anchor.setTo(0.5, 0.5);  
            this.feather.inputEnabled = true;
            this.feather.id = 2
            this.feather.scale.x = 0.2;
            this.feather.scale.y = 0.2;             
            this.feather.events.onInputDown.add(this.pickUp, this);         
            this.mid_layer.add(this.feather)     
            break;
          case 4:  
          case 6:
            this.bg.loadTexture('scene4')
            this.bg.width = this.game.width
            this.bg.height = this.game.height              
            this.s4o1 = this.add.sprite(this.game.width/2,this.game.height/2, 's4o1');
            this.s4o1.anchor.setTo(0.5, 0.5);  
            this.s4o1.inputEnabled = true;
            this.s4o1.id = 25
            if(this.sceneNum == 6){
              this.s4o1.id = 40
            }      
            this.s4o1.events.onInputDown.add(this.inspect, this);              
            this.mid_layer.add(this.s4o1)
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
            this.mid_layer.add(this.birdLight1)
            this.mid_layer.add(this.birdLight2)
            this.mid_layer.add(this.birdLight3)                   

            this.rabbit = this.add.sprite(0,0, 'rabbit');
            this.rabbit.width = this.game.width
            this.rabbit.height = this.game.height
            this.mid_layer.add(this.rabbit)            
            
            this.s5o1 = this.add.sprite(this.game.width-300,this.game.height/2-150, 's5o1');
            this.s5o1.anchor.setTo(0.5, 0.5);  
            this.s5o1.inputEnabled = true;
            this.s5o1.id = 35      
            this.s5o1.birdNum =1  
            this.s5o1.events.onInputDown.add(this.inspect, this);     
            this.mid_layer.add(this.s5o1)
            
            this.s5o2 = this.add.sprite(150,this.game.height/2-120, 's5o2');
            this.s5o2.anchor.setTo(0.5, 0.5);  
            this.s5o2.inputEnabled = true;
            this.s5o2.id = 35  
            this.s5o2.birdNum =2    
            this.s5o2.events.onInputDown.add(this.inspect, this);     
            this.mid_layer.add(this.s5o2)
            
            this.s5o3 = this.add.sprite(this.game.width/2+200,this.game.height/2-400, 's5o3');
            this.s5o3.anchor.setTo(0.5, 0.5);  
            this.s5o3.inputEnabled = true;
            this.s5o3.id = 35   
            this.s5o3.birdNum =3       
            this.s5o3.events.onInputDown.add(this.inspect, this);                 
            this.mid_layer.add(this.s5o3)
            break;    
          case 7:          
            this.bugCount = 0
            this.bugsFed = 0;
            this.s7o1 = this.add.sprite(this.game.width/2,this.game.height/2, 's7o1');
            this.s7o1.anchor.setTo(0.5, 0.5);  
            this.s7o1.inputEnabled = true;
            this.s7o1.id = 73     
            this.s7o1.events.onInputDown.add(this.pickUp, this);
            this.mid_layer.add(this.s7o1)
            
            this.s7o2 = this.add.sprite(this.game.width/2,this.game.height/2, 's7o2');
            this.s7o2.anchor.setTo(0.5, 0.5);  
            this.s7o2.inputEnabled = true;
            this.s7o2.id = 69  
            this.s7o2.events.onInputDown.add(this.inspect, this);  
            this.mid_layer.add(this.s7o2)          

            this.s7o3 = this.add.sprite(this.game.width/2,this.game.height/2, 's7o3');
            this.s7o3.anchor.setTo(0.5, 0.5);  
            this.s7o3.inputEnabled = true;
            this.s7o3.id = 63    
            this.s7o3.events.onInputDown.add(this.inspect, this);    
            this.mid_layer.add(this.s7o3)
            
            this.s7o4 = this.add.sprite(50,this.game.height-100, 's7o4');
            this.s7o4.anchor.setTo(0.5, 0.5);  
            this.s7o4.inputEnabled = true;
            this.s7o4.id = 64   
            this.s7o4.events.onInputDown.add(this.pickUp, this);  
            this.mid_layer.add(this.s7o4)
            
            this.s7o5 = this.add.sprite(this.game.width-50,this.game.height-100, 's7o4');
            this.s7o5.anchor.setTo(0.5, 0.5);  
            this.s7o5.angle = 25
            this.s7o5.inputEnabled = true;
            this.s7o5.id = 64    
            this.s7o5.events.onInputDown.add(this.pickUp, this);  
            this.mid_layer.add(this.s7o5)
            
            this.s7o6 = this.add.sprite(350,this.game.height-250, 's7o4');
            this.s7o6.anchor.setTo(0.5, 0.5);  
            this.s7o6.angle = -100
            this.s7o6.inputEnabled = true;
            this.s7o6.id = 64   
            this.s7o6.events.onInputDown.add(this.pickUp, this); 
            this.mid_layer.add(this.s7o6)
            
            this.s7o7 = this.add.sprite(this.game.width-400,this.game.height-50, 's7o4');
            this.s7o7.anchor.setTo(0.5, 0.5);  
            this.s7o7.angle = 90
            this.s7o7.inputEnabled = true;
            this.s7o7.id = 64  
            this.s7o7.events.onInputDown.add(this.pickUp, this);   
            this.mid_layer.add(this.s7o7)          
            break;    
          case 8:
            this.bg.id = 84  
            this.bg.inputEnabled = true;
            this.bg.events.onInputDown.add(this.inspect, this);               
            break;     
          case 9:
            this.s9o1 = this.add.sprite(this.game.width/2-450,this.game.height/2-50, 's9o1');
            this.s9o1.anchor.setTo(0.5, 0.5);  
            this.s9o1.inputEnabled = true;
            this.s9o1.id = 112   
            this.s9o1.events.onInputDown.add(this.inspect, this);    
            this.mid_layer.add(this.s9o1)
            
            this.s9o2 = this.add.sprite(this.game.width/2-75,this.game.height/2-125, 's9o2');
            this.s9o2.anchor.setTo(0.5, 0.5);  
            this.mid_layer.add(this.s9o2) 
            
            //grabber birds
            this.s9o3 = this.add.sprite(100,this.game.height-125, 's9o3');
            this.s9o3.anchor.setTo(0.5, 0.5);  
            this.s9o3.inputEnabled = true;
            this.s9o3.id = 102     
            this.s9o3.events.onInputDown.add(this.inspect, this);  
            this.mid_layer.add(this.s9o3)
            
            this.s9o4 = this.add.sprite(this.game.width-200,this.game.height-300, 's9o3');
            this.s9o4.anchor.setTo(0.5, 0.5);  
            this.s9o4.inputEnabled = true;
            this.s9o4.id = 103    
            this.s9o4.events.onInputDown.add(this.inspect, this);       
            this.mid_layer.add(this.s9o4)
            
            this.s9o5 = this.add.sprite(this.game.width/2+170,this.game.height/2+150, 's9o3');
            this.s9o5.anchor.setTo(0.5, 0.5);  
            this.s9o5.inputEnabled = true;
            this.s9o5.id = 104    
            this.s9o5.scale.x = -1
            this.s9o5.events.onInputDown.add(this.inspect, this);    
            this.mid_layer.add(this.s9o5)         

            this.seedsPlanted = 0
            this.seedsWatered = 0;

            this.bg.id = 110
            this.bg.inputEnabled = true;
            this.bg.events.onInputDown.add(this.inspect, this);                 
            break; 
            case 11:
              this.s11o1 = this.add.sprite(this.game.width/2,this.game.height/2, 's11o1');
              this.s11o1.anchor.setTo(0.5, 0.5);   
              this.s11o1.alpha = 0
              this.mid_layer.add(this.s11o1)              
              break;   
            case 13:
              this.mortar = ""
              this.s13o1 = this.add.sprite(this.game.width/2,this.game.height/2, 's13o1');
              this.s13o1.anchor.setTo(0.5, 0.5);   
              this.s13o1.inputEnabled = true;
              this.s13o1.id = 150    
              this.s13o1.events.onInputDown.add(this.inspect, this);                     
              this.mid_layer.add(this.s13o1)   
              
              this.s13o4 = this.add.sprite(this.game.width/2,this.game.height/2, 's13o4');
              this.s13o4.anchor.setTo(0.5, 0.5);     
              this.s13o4.alpha = 0                  
              this.mid_layer.add(this.s13o4)  
              
              this.s13o3 = this.add.sprite(this.game.width/2,this.game.height/2, 's13o3');
              this.s13o3.anchor.setTo(0.5, 0.5);     
              this.s13o3.alpha = 0                  
              this.mid_layer.add(this.s13o3)                

              this.s13o2 = this.add.sprite(this.game.width/2,this.game.height/2, 's13o2');
              this.s13o2.anchor.setTo(0.5, 0.5);     
              this.s13o2.alpha = 0                  
              this.mid_layer.add(this.s13o2)  
              
              this.s13o5 = this.add.sprite(this.game.width/2,this.game.height/2, 's13o5');
              this.s13o5.anchor.setTo(0.5, 0.5);     
              this.s13o5.alpha = 0                  
              this.mid_layer.add(this.s13o5)                
              break;     
            case 14:
              this.mortar = ""
              this.s14o1 = this.add.sprite(this.game.width/2,this.game.height/2, 's14o1');
              this.s14o1.anchor.setTo(0.5, 0.5);           
              this.mid_layer.add(this.s14o1)          

              this.s14o2 = this.add.sprite(this.game.width/2,this.game.height/2, 's14o2');
              this.s14o2.anchor.setTo(0.5, 0.5);     
              this.s14o2.inputEnabled = true;
              this.s14o2.id = 166   
              this.s14o2.alpha = 0;
              this.s14o2.events.onInputDown.add(this.inspect, this);                   
              this.mid_layer.add(this.s14o2)  

              this.s14o3 = this.add.sprite(this.game.width/2,this.game.height/2, 's14o3');
              this.s14o3.anchor.setTo(0.5, 0.5);     
              this.s14o3.id = 166   
              this.s14o3.alpha = 0;             
              this.mid_layer.add(this.s14o3)                
              
          
              break;                                                               
        }

        this.modal = this.add.sprite(0, 0, 'modal');
        this.modal.width = this.game.width
        this.modal.height = this.game.height  
        this.modal.alpha = 0;
        this.mid_layer.add(this.modal)   

        this.sceneImage = this.add.sprite(-this.game.width, -this.game.height, 'modal');
        this.sceneImage.anchor.setTo(0.5, 0.5); 
        this.mid_layer.add(this.sceneImage)  
     

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
          this.ui_layer.add(this.inv[i])

          this.inv[i].inputEnabled = true;
          this.inv[i].events.onInputOver.add(this.highLight, this);  
          this.inv[i].events.onInputOut.add(this.unhighLight, this);           
          this.inv[i].events.onInputDown.add(this.useInv, this);   

          this.inv[i].text = this.add.text(this.inv[i].x+this.inv[i].width/2-10,this.inv[i].y+this.inv[i].height/2-10, '0', {font: '22px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.inv[i].text.anchor.setTo(0.5, 0.5); 
          
          if(localStorage.getItem(this.saveKey+"inv"+i+"Count") === null) {
            localStorage.setItem(this.saveKey+"inv"+i+"Count",0) 
          }                
          this.inv[i].count = parseInt(localStorage.getItem(this.saveKey+"inv"+i+"Count"));
          this.inv[i].text.text = this.inv[i].count;
          this.ui_layer.add(this.inv[i].text)

          distX+=spaceX        
        }        

        this.invHighlight = this.add.sprite(this.inv[0].x ,this.inv[0].y, 'inventory_highlight');
        this.invHighlight.anchor.setTo(0.5, 0.5);
        this.invHighlight.alpha = 0;
        this.ui_layer.add(this.invHighlight)

        this.button = []
        for(var i = 0; i < 2; i++){
          this.button[i] = this.add.sprite(this.game.width/2, this.game.height*5, 'button');
          this.button[i].anchor.setTo(0.5, 0.5);  
          this.button[i].scale.x = 0.25;
          this.button[i].scale.y = 0.25;
          this.button[i].origWidth = this.button[i].width
          this.button[i].origHeight = this.button[i].height
          this.button[i].inputEnabled = true;
          this.button[i].events.onInputOver.add(this.highLight, this);  
          this.button[i].events.onInputOut.add(this.unhighLight, this);          
          this.button[i].events.onInputDown.add(this.buttonSelect, this);     
          this.ui_layer.add(this.button[i])

          this.button[i].text = this.add.text(this.button[i].x-this.button[i].width/2,this.button[i].y-this.button[i].height/2, 'TASHIA', {font: '24px LondrinaSolid-Black',fill: '#fff', align: 'center'});
          this.button[i].text.anchor.setTo(0.5, 0.5);            
          this.ui_layer.add( this.button[i].text)              
        }



        this.chatNameBox = this.add.sprite(this.game.width/2, this.game.height*5, 'chatName');
        this.chatNameBox.anchor.setTo(0.5, 0.5);  
        this.chatNameBox.scale.x = 0.25;
        this.chatNameBox.scale.y = 0.25;   
        this.ui_layer.add(this.chatNameBox)

        this.chatBox = this.add.sprite(this.game.width/2, this.game.height*5, 'chatbox');
        this.chatBox.anchor.setTo(0.5, 0.5);  
        this.chatBox.scale.x = 0.65;
        this.chatBox.scale.y = 0.65;
        this.chatBox.inputEnabled = true;
        this.chatBox.events.onInputDown.add(this.showChat, this);     
        this.ui_layer.add(this.chatBox)

        this.chatEmotion = this.add.sprite(this.game.width/2, this.game.height*5, 'chibi-yara-happy');
        this.chatEmotion.anchor.setTo(0.5, 0.5);  
        this.chatEmotion.scale.x = 0.5;
        this.chatEmotion.scale.y = 0.5; 
        this.ui_layer.add(this.chatEmotion)
        

        this.chatBoxText = this.add.text(this.chatBox.x,this.chatBox.y, 'THIS IS A TEST', {font: '48px LondrinaSolid-Black',fill: '#000', align: 'center'});
        this.chatBoxText.anchor.setTo(0.5, 0.5); 
        this.ui_layer.add(this.chatBoxText)    

        this.chatName = this.add.text(this.chatBox.x-this.chatBox.width/2,this.chatBox.y-this.chatBox.height/2, 'TASHIA', {font: '48px LondrinaSolid-Black',fill: '#fff', align: 'left'});
        this.chatName.anchor.setTo(0.5, 0.5);        
        this.ui_layer.add(this.chatName)    
        
        
        //scene specific dialog trigger
        switch(this.sceneNum){
          case 1:
            this.startChat()
            break;
        }

        this.transition = this.add.sprite(-this.game.width*2, 0, 'night_transition');
        this.transition.width = this.game.width*2    
        this.front_layer.add(this.transition)    

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
              case 6:
                this.startChat(39)
                break;         
              case 7:
                this.startChat(49)
                break; 
              case 8:
                this.startChat(75)
                break;  
              case 9:
                this.startChat(93)
                break;    
              case 10:
                this.startChat(114)
                break; 
              case 11:
                this.startChat(124)
                break;     
              case 12:
                this.startChat(136)
                break;    
              case 13:
                this.startChat(147)
                break;  
              case 14:
                this.startChat(160,300)
                break;                                                                                                                                                                                            
            }
          }, this);        
          transitionTween.start()          
        }

        this.cursorKey = 0;
        document.body.style = 'cursor: url(assets/hand_point.png), default;'        
        
        this.flashOn = false;
        //manipu
        //document.body.style = 'cursor: url(assets/hand_point.png), default;'
        //document.body.style = 'cursor: url(assets/hand_point2.png), default;'
        
        this.seed = []
        this.seedKey = 0;

        var bgKey = 1
        if(this.sceneNum < 3){
          bgKey = 1
        }
        else if(this.sceneNum >= 3 && this.sceneNum < 9 ){
          bgKey = 2
        }
        else{
          bgKey = 3;
        }
          this.bgSound = this.add.audio('bg'+bgKey);
          this.bgSound.loop = true;          
          
          this.bgSound.play()
          this.bgSound.volume = 0
          var soundTween= this.add.tween(this.bgSound).to( { volume: 0.2 }, 2000, Phaser.Easing.Default);                              
          soundTween.start();         
          
          this.flySound = this.add.audio('flyAway');
          this.flySound.volume = 0.5

          this.fillWaterSound = this.add.audio('fillWater');
          this.fillWaterSound.volume = 0.5          

          this.crunchSnd = []
          for(var i = 1; i <= 4; i++){
            this.crunchSnd[i] = this.add.audio('crunch'+i);
            this.crunchSnd[i].volume = 1
          }


          this.waterSnd = []
          for(var i = 1; i <= 3; i++){
            this.waterSnd[i] = this.add.audio('waterBloop'+i);
            this.waterSnd[i].volume = 0.4
          }          
    

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

        this.chatBoxText.y = this.chatBox.y
        
        this.chatNameBox.y = this.chatBox.y-this.chatBox.height/2
        this.chatNameBox.x = this.chatBox.x-this.chatBox.width/2+this.chatNameBox.width/2+25
        this.chatName.y = this.chatNameBox.y-10
        this.chatName.x = this.chatNameBox.x   

        this.chatEmotion.x = this.chatBox.x-this.chatBox.width/2+50
        this.chatEmotion.y = this.chatBox.y-this.chatBox.height/2             

        if(!this.chatWait ){
          

                 
          if(this.dialogCounter < dialog.length){
              
            
              if(this.flashOn){
                  this.modal.loadTexture('modal_white')
                  this.modal.alpha = 0;
                  var flashTween = this.add.tween(this.modal).to( { alpha: 1}, 1000, Phaser.Easing.Cubic.In);
                  flashTween.onComplete.addOnce(function(){
                    this.timer = this.game.time.create(true);
                    this.timer.add(1000, function(){
                      this.modal.loadTexture('modal')
                      this.modal.alpha =0;
                      this.bg.loadTexture('scene-8-2')  
                    }, this);
                    this.timer.start();                      
                    
                  }, this);          
                  flashTween.start()   
                  
                  this.flashOn = false
              }            

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
                else if(chat[2].includes("SETFLAG") && chat[3] !== undefined && chat[4] !== undefined){
                  localStorage.setItem(this.saveKey+chat[3], chat[4])

                }                
                else if(chat[2].includes("FLASH")){
                  this.flashOn = true;
             

                } 
                else if(chat[2].includes("RABBITFLY")){
                  this.rabbit.loadTexture('rabbit_fly')
                  var rabbitTween = this.add.tween(this.rabbit).to( { y: -500}, 2000, Phaser.Easing.Elastic.Out);
                  rabbitTween.onComplete.addOnce(function(){
                    this.timer = this.game.time.create(true);
                    this.timer.add(500, function(){
                      var rabbitTween2 = this.add.tween(this.rabbit).to( { y: 0}, 1000, Phaser.Easing.Elastic.Out);
                      rabbitTween2.onComplete.addOnce(function(){
                        this.rabbit.loadTexture('rabbit')
                      }, this);          
                      rabbitTween2.start() 
                    }, this);
                    this.timer.start();  
                  }, this);          
                  rabbitTween.start()                  
             

                }         
                else if(chat[2].includes("GIVESEED")){
                  this.inv[this.invKey].invID = 109
                  this.inv[this.invKey].count = 12;                    
                  this.inv[this.invKey].loadTexture('inventory_109')
                  this.updateInv()                  
                  console.log("END NOW")
                  localStorage.setItem(this.saveKey+"_dialogCounter",this.dialogCounter+1)
                  this.dialogCounter = dialog.length   
                }                                      
                else if(chat[2].includes("GIVEBUCKET")){
                  this.inv[this.invKey].invID = 110
                  this.inv[this.invKey].count = 1;                    
                  this.inv[this.invKey].loadTexture('inventory_110')
                  this.updateInv()                  
                  console.log("END NOW")
                  localStorage.setItem(this.saveKey+"_dialogCounter",this.dialogCounter+1)
                  this.dialogCounter = dialog.length   
                }   
                else if(chat[2].includes("GIVESHEA")){
                  this.inv[this.invKey].invID = 114
                  this.inv[this.invKey].count = 1;                    
                  this.inv[this.invKey].loadTexture('inventory_114')
                  this.updateInv()                  
                  console.log("END NOW")
                  localStorage.setItem(this.saveKey+"_dialogCounter",this.dialogCounter+1)
                  this.dialogCounter = dialog.length   
                }                 
                else if(chat[2].includes("GIVENEEM")){
                  this.inv[this.invKey].invID = 113
                  this.inv[this.invKey].count = 1;                    
                  this.inv[this.invKey].loadTexture('inventory_113')
                  this.updateInv()                  
                  console.log("NEXT SCENE")
                  localStorage.setItem(this.saveKey+"_dialogCounter",this.dialogCounter+1)
                  this.dialogCounter = dialog.length   
                  this.goToNextScene = true;
                }                   
                else if(chat[2].includes("SHOW")  && chat[3] !== undefined){
                  this.chatBox.y = 300;

                  this.chatBoxText.y = this.chatBox.y
                  
                  this.chatNameBox.y = this.chatBox.y-this.chatBox.height/2
                  this.chatNameBox.x = this.chatBox.x-this.chatBox.width/2+this.chatNameBox.width/2+25
                  this.chatName.y = this.chatNameBox.y-10
                  this.chatName.x = this.chatNameBox.x   

                  this.chatEmotion.x = this.chatBox.x-this.chatBox.width/2+50
                  this.chatEmotion.y = this.chatBox.y-this.chatBox.height/2                     

                  this.fadeinAssetKey = chat[3]
                  var fadeTween = this.add.tween(this[this.fadeinAssetKey]).to( { alpha: 1}, 2000, Phaser.Easing.Cubic.Out);
                  fadeTween.onComplete.addOnce(function(){

                  }, this);  
                  fadeTween.start();                  

                  
                }  
                else if(chat[2].includes("CHOICE")){
                  this.button[0].text.text = chat[3]
                  this.button[0].id = chat[4]

                  this.button[1].text.text = chat[5]
                  this.button[1].id = chat[6]    
                  
                  this.button[0].y = this.game.height/2
                  this.button[0].text.y = this.game.height/2
                  this.button[0].text.x = this.button[0].x

                  
                  this.button[1].y = this.game.height/2+200
                  this.button[1].text.y = this.game.height/2+200 
                  this.button[1].text.x = this.button[1].x                 

                  
                }      
                else if(chat[2].includes("GRIND")){
                  this.chatBox.y = 300;
                  this.chatBoxText.y = this.chatBox.y
                  
                  this.chatNameBox.y = this.chatBox.y-this.chatBox.height/2
                  this.chatNameBox.x = this.chatBox.x-this.chatBox.width/2+this.chatNameBox.width/2+25
                  this.chatName.y = this.chatNameBox.y-10
                  this.chatName.x = this.chatNameBox.x   

                  this.chatEmotion.x = this.chatBox.x-this.chatBox.width/2+50
                  this.chatEmotion.y = this.chatBox.y-this.chatBox.height/2                       

                  this.s13o2.alpha = 0
                  this.s13o3.alpha = 0
                  this.s13o4.alpha = 0

                  this.s13o5.alpha = 1
                }     
                else if(chat[2].includes("HIDE")){
                  this.fadeinAssetKey = chat[3]
                  var fadeTween = this.add.tween(this[this.fadeinAssetKey]).to( { alpha: 0}, 2000, Phaser.Easing.Cubic.Out);
                  fadeTween.onComplete.addOnce(function(){

                  }, this);  
                  fadeTween.start();                        
                }      
                else if(chat[2].includes("FINAL")){
                  Swal.fire({
                    title: 'Quest Complte?',          
                    html: 'Yara has faced many challenges and grown their wisdom.<br/>However, what new adventures await Yara and Rabbit as they make their way into the forest?',
                    imageWidth: 400,
                    imageHeight: 500,
                    allowOutsideClick: false,
                    allowEscapeKey: false
                  }).then((result) => {
                    if (result.isConfirmed) {
                      this.game.state.start('menu');
                    }
                  })                   
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

              if(this.talkingTo.includes('boabab')){
                this.chatBox.loadTexture('chatbox_spirit')
                this.chatBox.anchor.setTo(0.5, 0.5);  
                this.chatBox.height = this.game.height
                this.chatBox.width = this.game.width
                this.chatNameBox.y = this.game.height/2-170
                this.chatNameBox.x = this.game.width/2-350
                this.chatName.y = this.chatNameBox.y-10
                this.chatName.x = this.chatNameBox.x   

                this.chatEmotion.x = this.chatNameBox.x-200
                this.chatEmotion.y = this.chatNameBox.y                    
              }
              else{
                this.chatBox.loadTexture('chatbox')             
                this.chatBox.anchor.setTo(0.5, 0.5);  
                this.chatBox.scale.x = 0.65;
                this.chatBox.scale.y = 0.65;       
                this.chatNameBox.y = this.chatBox.y-this.chatBox.height/2
                this.chatNameBox.x = this.chatBox.x-this.chatBox.width/2+this.chatNameBox.width/2+25
                this.chatName.y = this.chatNameBox.y-10
                this.chatName.x = this.chatNameBox.x   

                this.chatEmotion.x = this.chatBox.x-this.chatBox.width/2+50
                this.chatEmotion.y = this.chatBox.y-this.chatBox.height/2                    
              }

              this.chatBoxText.text = chat[1]
              this.dialogCounter++

          }
          else{
              var currentCounter = parseInt(localStorage.getItem(this.saveKey+"_dialogCounter")) 



              if(this.birdCount <= 0 && currentCounter == 36){
                this.startChat(36)
              }
              else if( ( currentCounter == 102 ||  currentCounter == 103||  currentCounter == 104) && this.s9o3.y == -this.game.height && this.s9o4.y == -this.game.height  && this.s9o5.y == -this.game.height ){
                this.startChat(107)
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
      buttonSelect: function(button){

        this.startChat(button.id, 300)
        this.button[0].y = 5*this.game.height
        this.button[0].text.y = 5*this.game.height
        
        this.button[1].y = 5*this.game.height
        this.button[1].text.y = 5*this.game.height        
      },       
      next: function () {
        console.log("Next!")
        var transitionTween = this.add.tween(this.transition).to( { x: 0 }, 2000,Phaser.Easing.Power2);
        this.bgSound.fadeOut(2000)
        transitionTween.onComplete.addOnce(function(){

        this.invCode = ""
        for(var i = 0; i < this.invCount; i++){
          localStorage.setItem(this.saveKey+"inv"+i+"Count",this.inv[i].count) 
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
                this.startChat(26)
              }
              else{
                this.startChat(25)
              }              
              break;
            case 35:
              if(this.cursorKey == 1){
                if(item.birdNum == 1){
                  this.flySound.play()
                  this.s5o1.y = -this.game.height
                  this.birdLight1.alpha = 0;
                  this.birdCount--
                }
                if(item.birdNum == 2){
                  this.flySound.play()
                  this.s5o2.y = -this.game.height
                  this.birdLight2.alpha = 0;
                  this.birdCount--
                  
                }        
                if(item.birdNum == 3){
                  this.flySound.play()
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
            case 40:
              if(this.cursorKey == 1){                       
                this.startChat(40)
              }
              else{
                var rabbitInstruct = parseInt(localStorage.getItem(this.saveKey+'rabbitInstruct'))
                if(rabbitInstruct == 1){
                  this.s4o1.y = -this.game.height
                }

                this.startChat(47)
              }              
              break;     
            case 63:
              if(this.cursorKey == 64){        
                  this.removeInv()

                  this.updateInv()    

                  this.bugsFed++

                  var ran = Math.floor(Math.random() * 4)+1;
                  this.crunchSnd[ran].play()        

                if(this.bugsFed < 4){
                  this.startChat(66)
                }               
                else{
                  this.startChat(67)
                  item.alpha = 0;
                  item.y = -this.game.height                  
                }
                
              }
              else if(this.cursorKey == 1){        
                this.startChat(68)
              }              
              else{
                this.startChat(65)
              }              
              break;    
            case 69:
              if(this.cursorKey == 1){  
                this.startChat(69)
              }
              else{
                item.alpha = 0;
                item.y = -this.game.height                   
                this.startChat(71)
              }
              
              break;  
            case 84:
              var treeInstruct = parseInt(localStorage.getItem(this.saveKey+'treeInstruct'))
              if(treeInstruct == 1){
                this.startChat(90)
              }
              else{
                if(this.cursorKey == 73){  
                    this.removeInv()
                    this.updateInv()                   
                    this.startChat(86)
                }
                else if(this.cursorKey == 1){
                  this.startChat(84)
                }
                else{            
                  this.startChat(85)
                }
              }              
              break;         
            case 102:
            case 103:
            case 104:
                if(this.cursorKey == 1){
                  this.startChat(item.id)
                  this.flySound.play()
                  if(item.id == 102){
                    this.s9o3.y = -this.game.height 
                  }
                  if(item.id == 103){
                    this.s9o4.y = -this.game.height 
                  }          
                  if(item.id == 104){
                    this.s9o5.y = -this.game.height 
                  }                          
                            
                }
                else{            
                  this.startChat(105)
                }              
              break;     
            case 110:
              
              if(this.cursorKey == 109 && this.game.input.y >= this.game.height/2){
                
                
   

                this.inv[this.cursorId].count--
                
                this.seed[this.seedKey] = this.add.sprite(this.game.input.x+10,this.game.input.y+10, 'seed');
                this.seed[this.seedKey].anchor.setTo(0.5, 0.5);      
                this.seed[this.seedKey].id = 113
                this.seed[this.seedKey].inputEnabled = true
                this.seed[this.seedKey].events.onInputDown.add(this.inspect, this);           
                this.mid_layer.add(this.seed[this.seedKey])                                    
                this.seedKey++
                if(this.inv[this.cursorId].count <= 0){
                  this.removeInv()
                  
                }       
                this.updateInv()
                this.seedsPlanted++
                if(this.seedsPlanted >= 12){
                  this.bg.inputEnabled = false;
                  this.startChat(110)
                }
              }
              break;  
            case 112:
              if(this.cursorKey == 110){  
                this.fillWaterSound.play()
                document.body.style = 'cursor: url(assets/hand_point111.png), default;'

                this.inv[this.cursorId].invID = 112 
                this.inv[this.cursorId].count = 1   
                this.cursorKey = 112        
                this.inv[this.cursorId].loadTexture('inventory_111')                  
                this.startChat(112)
              }
              break;     
            case 113:
              if(this.cursorKey == 112){  

                var ran = Math.floor(Math.random() * 3)+1;
                this.waterSnd[ran].play()     

                this.seedsWatered++
                item.loadTexture('plant')
                if(this.seedsWatered == this.seedsPlanted){
                  this.startChat(113)
                }
                //his.startChat(112)
              }
              break;   
            case 150:
              if(this.s13o5.alpha == 0){
                if(this.cursorKey == 112){  
                  this.removeInv()   
                  this.updateInv()
                  this.s13o2.alpha = 1
                  this.mortar += "1"
                }
                if(this.cursorKey == 113){  
                  this.removeInv()   
                  this.updateInv()
                  this.s13o4.alpha = 1
                  this.mortar += "2"
                }
                if(this.cursorKey == 114){  
                  this.removeInv()   
                  this.updateInv()
                  this.s13o3.alpha = 1
                  this.mortar += "3"
                }         
                if(this.mortar.includes("1") && this.mortar.includes("2") && this.mortar.includes("3")){
                  this.startChat(151)
                }      
              }
           
                
              
              break;             
            case 166:
              if(this.cursorKey == 1 && item.alpha == 1){  
                  this.startChat(164,300)
                  item.alpha = 0;
                  this.flySound.play()
                  item.y = -this.game.height  
              }

              break;                     
                                                          
          }
          
        }
      },
      removeInv: function (){
        
        document.body.style = 'cursor: url(assets/hand_point.png), default;'

        this.inv[this.cursorId].invID = 0 
        this.inv[this.cursorId].count = 0           
        this.inv[this.cursorId].loadTexture('inventory_0')  
        this.cursorKey = 0 
        this.invHighlight.alpha = 0;
      },
      pickUp: function (item){
          
          var tweenPick = this.add.tween(item).to( { x: this.inv[this.invKey].x, y: this.inv[this.invKey].y}, 250, Phaser.Easing.Cubic.Out);                    
          tweenPick.onComplete.addOnce(function(){

              //follow up action depending on scene
              switch(this.sceneNum){
                case 1:
                  this.startChat(8);
                  break;
                case 2:
                  this.startChat(16);
                  break;
              }
              switch(item.id){
                case 73:
                  this.startChat(73);
                  
                  break;                                                      
              }

              this.inv[this.invKey].invID = item.id
              this.inv[this.invKey].count++
              this.inv[this.invKey].loadTexture('inventory_'+item.id)
              this.updateInv()
              item.alpha = 0;
              item.y = this.game.height*5

              console.log("play new scene "+this.sceneNum)


          }, this);  
          tweenPick.start(); 
 
      },      
      useInv: function (inv){
        inv.y = inv.origY
        var tweenY = this.add.tween(inv).to( { y: inv.origY }, 500, Phaser.Easing.Elastic.InOut);                         
        
        tweenY.start();
              this.invHighlight.alpha = 1;
              this.invHighlight.x = inv.x
              this.invHighlight.y = inv.y        
      
        console.log(inv.invID)
        if(this.cursorKey == inv.invID){
          this.cursorKey = 0
          document.body.style = 'cursor: url(assets/hand_point.png), default;'
          this.invHighlight.alpha = 0;
        }
        else{
          switch(inv.invID){
            case 1:


              this.cursorKey = inv.invID
              this.cursorId = inv.id
              document.body.style = 'cursor: url(assets/hand_point2.png), default;'
              break;
            case 2:
              this.cursorKey = inv.invID
              this.cursorId = inv.id
              document.body.style = 'cursor: url(assets/hand_point3.png), default;'
              break;              
            case 64:
              this.cursorKey = inv.invID
              this.cursorId = inv.id
              document.body.style = 'cursor: url(assets/hand_point64.png), default;'
              break;      
            case 73:
              this.cursorKey = inv.invID
              this.cursorId = inv.id
              document.body.style = 'cursor: url(assets/hand_point73.png), default;'
              break;   
            case 109:
              this.cursorKey = inv.invID
              this.cursorId = inv.id
              document.body.style = 'cursor: url(assets/hand_point109.png), default;'
              break;    
            case 110:       
              this.cursorKey = inv.invID
              this.cursorId = inv.id
              document.body.style = 'cursor: url(assets/hand_point110.png), default;'
              break; 
            case 112:          
              this.cursorKey = inv.invID
              this.cursorId = inv.id
              document.body.style = 'cursor: url(assets/hand_point111.png), default;'
              break;                       
            case 113:
              this.cursorKey = inv.invID
              this.cursorId = inv.id
              document.body.style = 'cursor: url(assets/hand_point112.png), default;'
              break; 
            case 114:
              this.cursorKey = inv.invID
              this.cursorId = inv.id
              document.body.style = 'cursor: url(assets/hand_point113.png), default;'
              break;                                                                                    
          }
        }

      },      
      updateInv: function(){
        this.invKey = 0
        for(var i = 0; i < this.invCount; i++){
          console.log(this.inv[i].invID)
          if(this.inv[i].invID == 0){
            this.invKey = i
            break;
          }
        }
        console.log("inventory key "+this.invKey)   
        for(var i = 0; i < this.invCount; i++){
          if(this.inv[i].invID == 0){
            this.inv[i].count = 0;
          }
          this.inv[i].text.text = this.inv[i].count;
        }        
      } 
         
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
}());