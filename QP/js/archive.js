(function() {
  'use strict';

  function Archive() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Archive.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.map = this.add.sprite(0, 0, 'mainBG');
      this.map.width = this.game.width;
      this.map.height = this.game.height;        
      this.map.alpha = 1;
  
      this.arrowLeft = this.add.sprite(10, 50, "craftArrowLeft");  
      this.arrowLeft.inputEnabled = true;
      this.arrowLeft.events.onInputDown.add(this.left2, this);  
      
      this.arrowRight = this.add.sprite(this.game.width-100, 50, "craftArrowRight");  
      this.arrowRight.inputEnabled = true;
      this.arrowRight.events.onInputDown.add(this.right2, this);  
      
      this.arrowLeft2 = this.add.sprite(45, 200, "craftArrowLeft");  
      this.arrowLeft2.width =50;
      this.arrowLeft2.height =50;      
      this.arrowLeft2.inputEnabled = true;
      this.arrowLeft2.events.onInputDown.add(this.left, this);  
      
      this.arrowRight2 = this.add.sprite(this.game.width-90, 200, "craftArrowRight");  
      this.arrowRight2.width =50;
      this.arrowRight2.height =50;
      this.arrowRight2.inputEnabled = true;
      this.arrowRight2.events.onInputDown.add(this.right, this);        
      
      this.tarWarden = this.add.sprite(-this.game.width, 0, 'guildArchivist');
      this.tarWarden.width = this.game.width;
      this.tarWarden.height = this.game.height; 
      this.tarWarden.alpha = 0;
      this.tarWarden.scale.x *= -1;
      this.tarWarden.isFlipped = true;
      
      
      this.mapWarden = this.add.sprite(this.game.width, 0, 'guildArchivist');
      this.mapWarden.width = this.game.width;
      this.mapWarden.height = this.game.height;   
      
      this.submitButton = this.add.sprite(this.game.width/2, this.game.height-150, "equip");  
      this.submitButton.anchor.setTo(0.5, 0.5); 
      this.submitButton.inputEnabled = true;
      this.submitButton.events.onInputDown.add(this.submit, this);  
      this.submitButton.alpha = 0;
      this.submittable = true;
      

      this.returnButton = this.add.sprite(this.game.width/2, this.game.height-50, "return_Hub");  
      this.returnButton.anchor.setTo(0.5, 0.5); 
      this.returnButton.inputEnabled = true;
      this.returnButton.events.onInputDown.add(this.onDown, this);   
 
   


//console.log("rank "+this.placement)
      this.userText = this.add.text(this.game.width/2, 100, "USERID: "+localStorage.getItem("userID")+"\nHUNTER RANK: "+localStorage.getItem("currentRank")+"\nPLACEMENT: #",{font:'LondrinaSolid-Black'});
      //this.userText.alpha = 0;
      this.userText.fill= '#fff';
      this.userText.fontSize = 28;
      this.userText.anchor.setTo(0.5, 0.5); 
      this.userText.align = 'center'
      this.userText.wordWrap = true;
      this.userText.wordWrapWidth = 300;    
      
      this.archiveCount = 1;
      this.titleCount = 1;
      this.titleText = this.add.text(this.game.width/2, 180, "<<~>>",{font:'LondrinaSolid-Black'});
      //this.userText.alpha = 0;
      this.titleText.fill= '#FF8900';
      this.titleText.fontSize = 28;
      this.titleText.anchor.setTo(0.5, 0.5); 
      this.titleText.align = 'center'
      this.titleText.wordWrap = true;
      this.titleText.wordWrapWidth = 300;  
      
      this.titleText2 = this.add.text(this.game.width/2,this.titleText.y+70, "~",{font:'LondrinaSolid-Black'});
      //this.userText.alpha = 0;
      this.titleText2.fill= '#fff';
      this.titleText2.fontSize = 20;
      this.titleText2.anchor.setTo(0.5, 0.5); 
      this.titleText2.align = 'center'
      this.titleText2.wordWrap = true;
      this.titleText2.wordWrapWidth = 230;
      
      this.titleText3 = this.add.text(this.game.width/2,this.titleText2.y+70, "~",{font:'LondrinaSolid-Black'});
      //this.userText.alpha = 0;
      this.titleText3.fill= '#fff';
      this.titleText3.fontSize = 20;
      this.titleText3.anchor.setTo(0.5, 0.5); 
      this.titleText3.align = 'center'
      this.titleText3.wordWrap = true;
      this.titleText3.wordWrapWidth = 230;      
      
      
      this.textBackdrop = this.add.sprite(0, 0, 'textBackdrop');
      this.textBackdrop.width = this.game.width;
      this.textBackdrop.height = this.game.height;
      this.textBackdrop.alpha = 0;
      this.textBackdrop.inputEnabled = true;
      this.textBackdrop.events.onInputDown.add(this.hideChat, this);   

      this.textBackdropText = this.add.text(this.game.width/2, this.game.height-125, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
      this.textBackdropText.alpha = 0;
      this.textBackdropText.fill= '#fff';
      this.textBackdropText.fontSize = 28;
      this.textBackdropText.anchor.setTo(0.5, 0.5); 
      this.textBackdropText.align = 'center'
      this.textBackdropText.wordWrap = true;
      this.textBackdropText.wordWrapWidth = this.textBackdrop.width-80;      

      this.textBackdropText2 = this.add.text(10,this.textBackdropText.y-100, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
      this.textBackdropText2.alpha = 0;
      this.textBackdropText2.fill= '#FF8900';
      this.textBackdropText2.fontSize = 24;
      this.textBackdropText2.align = 'center'
      this.textBackdropText2.wordWrap = true;
      this.textBackdropText2.wordWrapWidth = this.textBackdrop.width-80;       
      this.textBackdropText2.text = "Kottin, the Archivist"
      this.textBackdropText.text = "Welcome to the Archives.\nWhere every TITLE earned, face met or monster defeated is recorded."
      this.chatTimer = 1;      
      this.chatTimer = 1;
      this.bgSound = this.add.audio('giftMusic');
      this.ping = this.add.audio('ping');

      if(!this.bgSound.isPlaying){
          this.bgSound.loop = true;
          this.bgSound.play();
          this.bgSound.volume = 0.5;
          //this.introCheck = true;
      }      
      
    },

    update: function () {
      //console.log("loo "+this.tarWarden.x )
      //console.log(this.archiveCount)
      if(this.archiveCount == 1){
        this.userText.text = "PLAYER TITLE:"

        this.titleText.text = title[this.titleCount].name
        this.titleText2.text = title[this.titleCount].description
        this.titleText3.text = "---\n"+title[this.titleCount].unlock      
        this.userText.fill= '#FFF'; 
        this.titleText.fill= '#FF8900';      
        this.titleText2.wordWrapWidth = 230;
        
        this.arrowRight2.alpha = 1;
        this.arrowLeft2.alpha = 1;
        this.arrowLeft2.x = 45 
        this.arrowRight2.x = this.game.width-90     
          this.arrowLeft2.y = 200
          this.arrowRight2.y = 200          
        
        this.titleText2.y = this.titleText.y+70
        this.tarWarden.alpha = 0
        this.tarWarden.x = -this.game.width
      }
      else{
        if(this.titleCount == 1 ){
          this.userText.text =   archive[this.archiveCount].title
          this.titleText.text =  archive[this.archiveCount].name
          this.titleText2.text = archive[this.archiveCount].description
          this.titleText3.text = ""                
        }
        else{
          this.userText.text =   archive[this.archiveCount].title
          this.titleText.text =  archive[this.archiveCount].name
          this.titleText2.text = "LOCATION: "+archive[this.archiveCount].location+"\nBASE HP :"+archive[this.archiveCount].id.hp+"\nBASE SLASH RESIST: "+archive[this.archiveCount].id.slashDef+"\nBASE STAB RESIST: "+archive[this.archiveCount].id.stabDef+"\nBASE BASH RESIST: "+archive[this.archiveCount].id.bashDef
          this.titleText3.text = ""                
        }

        
        this.userText.fill= '#FF8900';
        this.titleText.fill= '#FFF';
        this.titleText2.wordWrapWidth = 350;
        
        this.arrowRight2.alpha = 0;
        this.arrowLeft2.alpha = 0;  
        this.titleText2.y = this.titleText.y+90
        
        this.tarWarden.loadTexture(archive[this.archiveCount].char)
        this.tarWarden.alpha  += (0.8 - this.tarWarden.alpha ) * 0.1; 
        
        if(this.archiveCount < 7){
          //characters
          if(!this.tarWarden.isFlipped){
            this.tarWarden.isFlipped = true;
            this.tarWarden.scale.x *= -1;
          }          
          this.tarWarden.x += (this.game.width - this.tarWarden.x) * 0.1;
          this.tarWarden.y = 0;
        }
        else{
          //monsters
          this.arrowRight2.alpha = 1;
          this.arrowLeft2.alpha = 1;   
          
          this.arrowLeft2.x = 0 
          this.arrowRight2.x = this.game.width-45 
          
          this.arrowLeft2.y = 150 
          this.arrowRight2.y = 150         
          
          if(this.tarWarden.isFlipped){
            this.tarWarden.isFlipped = false;
            this.tarWarden.scale.x *= -1;
          }
          this.tarWarden.x += (0- this.tarWarden.x) * 0.1;
          this.tarWarden.y = this.game.height/2
        }
      }

      
      this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
      
      if(this.chatTimer > 0){           
        this.textBackdrop.alpha = 1;
        this.textBackdropText.alpha = 1;
        this.textBackdropText2.alpha = 1;
        this.textBackdrop.x = 0;

        this.submitButton.alpha = 0;
        this.returnButton.alpha = 0;       
      } 
      else{
        if(this.archiveCount == 1){
          this.submitButton.alpha = 1;
        }
        else{
          this.submitButton.alpha = 0;
        }
        //can equip title
          console.log(localStorage.getItem(title[this.titleCount].name+" unlocked"))
          if (localStorage.getItem(title[this.titleCount].name+" unlocked") === null) {
            localStorage.setItem(title[this.titleCount].name+" unlocked",0)
            this.submittable = false
          }           
          else{
            var unlocked = parseInt(localStorage.getItem(title[this.titleCount].name+" unlocked"))
            if(unlocked == 0){
              this.submitButton.loadTexture("equipNo")
              this.submittable = false;
            }
            else{
              this.submitButton.loadTexture("equip")
              this.submittable = true;
            }
          }
        
        this.returnButton.alpha = 1;
        this.textBackdrop.alpha = 0;
        this.textBackdropText.alpha = 0;
        this.textBackdropText2.alpha = 0
        this.textBackdrop.x = this.game.width;            

      }      
      
    
    },
    left: function () {
      if(this.arrowLeft2.alpha == 1){
        this.titleCount--
        if(this.titleCount < 1){
          this.titleCount = title.length-1;
          if(this.archiveCount != 1){
            this.titleCount = 2;
          }
        }
      }

    },
    right: function () {  
      if(this.arrowRight2.alpha == 1){
        this.titleCount++
        if(this.titleCount > title.length-1){
          this.titleCount = 1;
         
        }
        if(this.archiveCount != 1 && this.titleCount > 2){
          this.titleCount = 1;
        }         
      }


    },
    left2: function () {
      this.tarWarden.x = -this.game.width
      this.archiveCount--
      if(this.archiveCount < 1){
        this.archiveCount = archive.length-1;
      }
      this.titleCount = 1;

    },
    right2: function () {  
      this.tarWarden.x = -this.game.width
      this.archiveCount++
      if(this.archiveCount > archive.length-1){
        this.archiveCount = 1;
      }
      this.titleCount = 1;


    },   
    equip: function () {   
      this.ping.play();
      if(this.hasCrafted == 1){
        ////console.log(weapon[this.wepCount].id)
        localStorage.setItem("equip0",weapon[this.wepCount].id)
      }
    },     
    onDown: function () {
     //localStorage.setItem('state','warden')
      this.ping.play();
      this.bgSound.stop();          
     this.game.state.start('hub')
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    },
    submit: function () { 
      if(this.submittable && this.submitButton.alpha == 1){
        localStorage.setItem("playerTitle",title[this.titleCount].name)
        this.chatTimer = 1;  
        this.textBackdropText.text = "Oh! You wish to be referred to as <<"+title[this.titleCount].name+">> from now on? I'll make a note of that."         
      }
      else{
        this.chatTimer = 1;  
        this.textBackdropText.text = "Sorry! You haven't earned that TITLE as yet."         
      }
  
    },
    hideChat: function (unit) {
        this.chatTimer = 0;
        //this.wardenHunt.width = 460;
        //this.wardenHunt.height = 260;  
        //this.wardenHunt.clicked = true;     
        //this.game.state.start('game') 

    }       
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Archive = Archive;

}());
