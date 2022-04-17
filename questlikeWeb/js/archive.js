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
  
      this.arrowLeft = this.add.sprite(10, 150, "craftArrowLeft");  
      this.arrowLeft.inputEnabled = true;
      this.arrowLeft.events.onInputDown.add(this.left2, this);  
      
      this.arrowRight = this.add.sprite(this.game.width-100, 150, "craftArrowRight");  
      this.arrowRight.inputEnabled = true;
      this.arrowRight.events.onInputDown.add(this.right2, this);  
      
      this.arrowLeft2 = this.add.sprite(45, 350, "craftArrowLeft");  
      this.arrowLeft2.width =50;
      this.arrowLeft2.height =50;      
      this.arrowLeft2.inputEnabled = true;
      this.arrowLeft2.events.onInputDown.add(this.left, this);  
      
      this.arrowRight2 = this.add.sprite(this.game.width-90, 350, "craftArrowRight");  
      this.arrowRight2.width =50;
      this.arrowRight2.height =50;
      this.arrowRight2.inputEnabled = true;
      this.arrowRight2.events.onInputDown.add(this.right, this);        
      
      this.tarWarden = this.add.sprite(-this.game.width, this.game.height/2, 'guildArchivist');
      this.tarWarden.width = this.game.width;
      this.tarWarden.height = this.game.height; 
      this.tarWarden.alpha = 0;
      this.tarWarden.scale.x *= -1;
      this.tarWarden.isFlipped = true;

      

      this.veteranRank = this.add.sprite(this.game.width/2-125,90, 'vetRank');
      this.veteranRank.width = 40
      this.veteranRank.height = 40         

      this.veteranRankText = this.add.text(this.game.width/2, 110, "Veteran Rank: "+localStorage.getItem("veteranRank"),{font:'LondrinaSolid-Black'});
      this.veteranRankText.fill= '#fff';
      this.veteranRankText.fontSize = 20;
      this.veteranRankText.anchor.setTo(0.5, 0.5); 

      this.veteranPointText = this.add.text(this.game.width/2, 130, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
      this.veteranPointText.fill= '#97B7F2';
      this.veteranPointText.fontSize = 18;
      this.veteranPointText.anchor.setTo(0.5, 0.5);   


      this.veteranRankHolder = parseInt(localStorage.getItem("veteranRank"));
      this.veteranPointHolder = parseInt(localStorage.getItem("veteranPoints"))

      this.veteranRankHolder2 = parseInt(localStorage.getItem("veteranRank"));
      this.veteranPointHolder2 = parseInt(localStorage.getItem("veteranPoints"))   

      
      

      
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
      this.userText = this.add.text(this.game.width/2, 200, "USERID: "+localStorage.getItem("userID")+"\nHUNTER RANK: "+localStorage.getItem("currentRank")+"\nPLACEMENT: #",{font:'LondrinaSolid-Black'});
      //this.userText.alpha = 0;
      this.userText.fill= '#fff';
      this.userText.fontSize = 24;
      this.userText.anchor.setTo(0.5, 0.5); 
      this.userText.align = 'center'
      this.userText.wordWrap = true;
      this.userText.wordWrapWidth = 300;    
      
      this.archiveCount = 1;
      this.titleCount = 1;
      this.titleText = this.add.text(this.game.width/2, 250, "<<~>>",{font:'LondrinaSolid-Black'});
      //this.userText.alpha = 0;
      this.titleText.fill= '#FF8900';
      this.titleText.fontSize = 24;
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
      
      this.titleText3 = this.add.text(this.game.width/2,this.titleText2.y+100, "~",{font:'LondrinaSolid-Black'});
      //this.userText.alpha = 0;
      this.titleText3.fill= '#fff';
      this.titleText3.fontSize = 20;
      this.titleText3.anchor.setTo(0.5, 0.5); 
      this.titleText3.align = 'center'
      this.titleText3.wordWrap = true;
      this.titleText3.wordWrapWidth = 230;      



      this.veteranRank2 = this.add.sprite(this.game.width/2-100,this.titleText3.y+80, 'vetRank');
      this.veteranRank2.width = 40
      this.veteranRank2.height = 40     
      this.veteranRank2.alpha = 0; 

      this.titleCost = this.add.text(this.game.width/2,this.titleText3.y+100, "10,000",{font:'LondrinaSolid-Black'});
      //this.userText.alpha = 0;
      this.titleCost.fill= '#97B7F2';
      this.titleCost.fontSize = 20;
      this.titleCost.anchor.setTo(0.5, 0.5); 
      this.titleCost.align = 'center'
      this.titleCost.wordWrap = true;
      this.titleCost.wordWrapWidth = 230;  
      this.titleCost.alpha = 0; 
               
      this.mapWarden = this.add.sprite(this.game.width, 0, 'guildArchivist');
      this.mapWarden.width = this.game.width;
      this.mapWarden.height = this.game.height;         
      
      this.textBackdrop = this.add.sprite(0, 0, 'textBackdrop');
      this.textBackdrop.width = this.game.width;
      this.textBackdrop.height = this.game.height;
      this.textBackdrop.alpha = 0;
      this.textBackdrop.inputEnabled = true;
      this.textBackdrop.events.onInputDown.add(this.hideChat, this);   

      this.textBackdropText = this.add.text(this.game.width/2, this.game.height-125, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
      this.textBackdropText.alpha = 0;
      this.textBackdropText.fill= '#fff';
      this.textBackdropText.fontSize = 24;
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

      this.textBackdropText.x = Math.floor( this.textBackdropText.x )
      this.textBackdropText.y = Math.floor( this.textBackdropText.y )
      //this.textBackdropText.smoothed = false
      //console.log("loo "+this.tarWarden.x )
      //console.log(this.archiveCount)
      this.veteranRankHolder = parseInt(localStorage.getItem("veteranRank"));
      this.veteranPointHolder = parseInt(localStorage.getItem("veteranPoints"))
      /*
      if(this.veteranPointHolder > this.veteranPointHolder2){
        this.veteranPointHolder2++;
      }
      if(this.veteranPointHolder < this.veteranPointHolder2){
        this.veteranPointHolder2--;
      }          

      if(this.veteranRankHolder > this.veteranRankHolder2){
        this.veteranRankHolder2++;
      }  
      if(this.veteranRankHolder < this.veteranRankHolder2){
        this.veteranRankHolder2--;
      }  
      */
      if(this.veteranPointHolder > this.veteranPointHolder2){
        var difference = this.veteranPointHolder - this.veteranPointHolder2
        if(difference > 10000){
          this.veteranPointHolder2+=10000
        }
        else if(difference > 1000){
          this.veteranPointHolder2+=1000
        }            
        else if(difference > 100){
          this.veteranPointHolder2+=100
        }
        else if(difference > 10){
          this.veteranPointHolder2+=10
        }
        else{
          this.veteranPointHolder2++
        }            
        
      }
      if(this.veteranPointHolder < this.veteranPointHolder2){
        var difference = this.veteranPointHolder2 - this.veteranPointHolder
        if(difference > 10000){
          this.veteranPointHolder2-=10000
        }
        else if(difference > 1000){
          this.veteranPointHolder2-=1000
        }            
        else if(difference > 100){
          this.veteranPointHolder2-=100
        }
        else if(difference > 10){
          this.veteranPointHolder2-=10
        }
        else{
          this.veteranPointHolder2--
        }   
      }          

      if(this.veteranPointHolder2 < 0){
        this.veteranPointHolder2 = 0;
      }      
                       
      this.veteranRankText.text = "Veteran Rank: "+this.veteranRankHolder2
      this.veteranPointText.text = "Veteran Points: "+this.veteranPointHolder2

      if(this.archiveCount == 1){
        this.userText.text = "PLAYER TITLE"

        this.titleText.text = title[this.titleCount].name
        this.titleText2.text = title[this.titleCount].description
        this.titleText3.text = "---\n"+title[this.titleCount].effect    
        this.userText.fill= '#FFF'; 
        this.titleText.fill= '#FF8900';      
        this.titleText2.wordWrapWidth = 230;
        
        this.arrowRight2.alpha = 1;
        this.arrowLeft2.alpha = 1;
        this.arrowLeft2.x = 45 
        this.arrowRight2.x = this.game.width-90     
          this.arrowLeft2.y = 300
          this.arrowRight2.y = 300          
        
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
          //this.titleText2.text = "LOCATION: "+archive[this.archiveCount].location+"\nBASE HP :"+archive[this.archiveCount].id.hp+"\nBASE SLASH RESIST: "+archive[this.archiveCount].id.slashDef+"\nBASE STAB RESIST: "+archive[this.archiveCount].id.stabDef+"\nBASE BASH RESIST: "+archive[this.archiveCount].id.bashDef
          this.titleText2.text = "LOCATION: "+archive[this.archiveCount].location
          if(archive[this.archiveCount].id.slashDef <= 0){
            this.titleText2.text += "\nWEAK TO: SLASH"
          }
          if(archive[this.archiveCount].id.stabDef <= 0){
            this.titleText2.text += "\nWEAK TO: STAB"
          }
          if(archive[this.archiveCount].id.bashDef <= 0){
            this.titleText2.text += "\nWEAK TO: BASH"
          }        
          if(archive[this.archiveCount].id.name.includes("patun") || archive[this.archiveCount].id.name.includes("yssun") || archive[this.archiveCount].id.name.includes("stoor")){
            this.titleText2.text = "WEAK TO: PRISMATIC"
          }                        
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
          this.tarWarden.y = this.game.height/2-280;
        }
        else{
          //monsters
          this.arrowRight2.alpha = 1;
          this.arrowLeft2.alpha = 1;   
          
          this.arrowLeft2.x = 0 
          this.arrowRight2.x = this.game.width-45 
          
          this.arrowLeft2.y = 250 
          this.arrowRight2.y = 250         
          
          if(this.tarWarden.isFlipped){
            this.tarWarden.isFlipped = false;
            this.tarWarden.scale.x *= -1;
          }
          this.tarWarden.x += (this.game.width/2-125- this.tarWarden.x) * 0.1;
          this.tarWarden.y = this.game.height/2+25
        }
      }

      
      //this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
      this.currentPoints = parseInt(localStorage.getItem("veteranPoints"));
      
      if(this.chatTimer > 0){           
        this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
        this.textBackdrop.alpha = 1;
        this.textBackdropText.alpha = 1;
        this.textBackdropText2.alpha = 1;
        this.textBackdrop.x = 0;

        this.submitButton.alpha = 0;
        this.returnButton.alpha = 0;       
      } 
      else{
        this.mapWarden.x += (800 - this.mapWarden.x) * 0.1; 
        if(this.archiveCount == 1){
          this.submitButton.alpha = 1;
        }
        else{
          this.submitButton.alpha = 0;
        }
        //can equip title
        this.title = localStorage.getItem("playerTitle")
          //console.log(localStorage.getItem(title[this.titleCount].name+" unlocked"))
          if (localStorage.getItem(title[this.titleCount].name+" unlocked") === null) {
            localStorage.setItem(title[this.titleCount].name+" unlocked",0)
            this.submittable = false
          }           
          else{
            var unlocked = parseInt(localStorage.getItem(title[this.titleCount].name+" unlocked"))
            if(unlocked == 0){
              this.submitButton.loadTexture("unlockTitle")
              if(this.currentPoints - 10000 < 0){
                this.submitButton.loadTexture("unlockTitle-no")
              }
              if(this.titleCount >= 5){
                this.submitButton.loadTexture("equipNo")              
              }              
              this.submittable = false;
              console.log("archive "+this.archiveCount)
              if(this.archiveCount == 1 && this.titleCount > 1 && this.titleCount < 5){
                this.titleCost.alpha = 1; 
                this.veteranRank2.alpha = 1;      
              }
              else{
                this.titleCost.alpha = 0; 
                this.veteranRank2.alpha = 0;                 
              }
                
            }
            else{
              this.submitButton.loadTexture("equip")
              this.submittable = true;
              this.titleCost.alpha = 0; 
              this.veteranRank2.alpha = 0;        
              if(this.title.localeCompare(title[this.titleCount].name) == 0){
                this.submitButton.loadTexture("equipNo")
                this.submittable = false;
                this.titleCost.alpha = 0; 
                this.veteranRank2.alpha = 0;   
              }              
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
        this.textBackdropText.text = "Oh! You wish to be referred to as <<"+title[this.titleCount].name+">> from now on?\nI'll make a note of that."  
     
      }
      else{
        if(this.currentPoints -10000 >= 0 && this.titleCount <5){
          localStorage.setItem("veteranPoints",this.currentPoints-10000)
          localStorage.setItem(title[this.titleCount].name+" unlocked",1)
          localStorage.setItem("titlesBought", parseInt(localStorage.getItem("titlesBought"))+1 ) 
        }
        else{
          this.chatTimer = 1;  
          this.textBackdropText.text = "Sorry! You haven't earned enough VP for that TITLE as yet."      
          if(this.titleCount == 5){
            this.textBackdropText.text = "Sorry! You haven't earned the right to that TITLE as yet."    
          }
          if(this.title.localeCompare(title[this.titleCount].name) == 0){
            this.textBackdropText.text = "You already have that title equipped"    
          }               
        }

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
