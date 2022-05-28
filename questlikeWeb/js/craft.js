(function() {
  'use strict';

  function Craft() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Craft.prototype = {

    create: function () {
      localStorage.setItem("fromHunt",0)
      this.game.world.setBounds(0, 0, this.game.width, this.game.height*0.25);
      //plugins'
      this.game.kineticScrolling  = this.game.plugins.add(Phaser.Plugin.KineticScrolling);
      
      this.game.kineticScrolling.configure({
        kineticMovement: false,
        timeConstantScroll: 400, //really mimic iOS
        horizontalScroll: false,
        verticalScroll: true,
        horizontalWheel: false,
        verticalWheel: true,
        deltaWheel: 40,
        onUpdate: null
      });
      this.game.kineticScrolling.start();
      

      
      this.weaponArray = []
      this.weaponKey = 0;
      this.weaponCount = weapon.filter(function(value) { 
        //console.log(value.id)
        //this.weaponArray[this.weaponKey] = new Object();
        //this.weaponArray[this.weaponKey] = value
        return value !== undefined 
      }).length - 3     

      this.weaponArray = weapon.filter(function(value) { 
        return value !== undefined 
      })

      //timers
      this.glowTimer = 0
      

      this.mapBG = this.add.sprite(0, 0, 'blankHub'); 
      //this.mapBG.anchor.setTo(0.5, 0);
      this.mapBG.width = this.game.width;
      this.mapBG.height = this.game.height;      
      
      
      
      this.tileSelect = this.add.sprite(0,0, 'tileSelect');
   

      var scale = 1.8
      //media breakpoint
 
      if(window.innerWidth < 400){
        this.tileSelect.width = Math.floor(this.tileSelect.width/scale)
        this.tileSelect.height = Math.floor(this.tileSelect.height/scale)     
      }
      
      else{
        this.tileSelect.width = Math.floor(this.tileSelect.width/1.5)
        this.tileSelect.height = Math.floor(this.tileSelect.height/1.5)      
      }
      

      if(window.innerHeight <= 600){
        this.tileSelect.width = Math.floor(this.tileSelect.width/1.6)
        this.tileSelect.height = Math.floor(this.tileSelect.height/1.6)     
      }

      this.bgSound = this.add.audio('giftMusic');
      this.ping = this.add.audio('ping');
      this.equipSound = this.add.audio('equip'); 
      this.forgeSound = [];
      for(var i = 1; i <= 3;i++){
          this.forgeSound[i] = this.add.audio('forge'+i); 
          //this.spellSound[i] = this.add.audio('spell'+i); 
      }

      if(!this.bgSound.isPlaying){
          this.bgSound.loop = true;
          if(parseInt(localStorage.getItem("muted")) == 0){
            this.bgSound.play();
          }  
          this.bgSound.volume = 0.3;
          //this.introCheck = true;
      }       
      this.weaponGridBG = [];
      this.weaponGrid = [];
      this.weaponNew = [];
      this.row = 0;
      this.col = 0;
      this.currentElem = 0
      //alert(this.weaponCount)
      for(var i = 1; i <= this.weaponCount; i++){
        this.startX = 5
        this.startY = this.game.height/2-200
        //media breakpoint
        if(window.innerHeight < 700){
          this.startY = this.game.height/2-150 
        }  
        
        if(window.innerHeight <= 600){
          this.startY = this.game.height/2-100     
        }        
        this.weaponGridBG[i] = this.add.sprite(this.startX,this.startY, 'tab_shop_unselected');
        this.weaponGrid[i] = this.add.sprite(this.startX,this.startY, 'tab_shop_unselected');
        this.weaponNew[i] = this.add.sprite(this.startX,this.startY, 'newWep');
        this.weaponNew.alpha = 0        
  

        this.weaponGridBG[i].loadTexture("elemTile"+this.weaponArray[i].element);
        this.weaponGrid[i].name = this.weaponArray[i].name
        this.weaponGrid[i].id = this.weaponArray[i].id
        this.weaponGrid[i].gridKey = i
        this.weaponGrid[i].loadTexture(this.weaponArray[i].name);
        console.log(this.weaponArray[i].element)

        if(this.weaponArray[i].element == -1){
          this.weaponGridBG[i].loadTexture("charm");
          if(localStorage.getItem("charmEquiped"+this.weaponArray[i].id) == 1){   
            this.weaponGridBG[i].loadTexture("charm-equipped");       
          }
        }




        var scale = 1.8
        //media breakpoint
        if(window.innerWidth < 400){
          this.weaponGrid[i].width = Math.floor(this.weaponGrid[i].width/scale)
          this.weaponGrid[i].height = Math.floor(this.weaponGrid[i].height/scale)
        }
        else{
          this.weaponGrid[i].width = Math.floor(this.weaponGrid[i].width/1.5)
          this.weaponGrid[i].height = Math.floor(this.weaponGrid[i].height/1.5)          
        }

        if(window.innerHeight <= 600){
          this.weaponGrid[i].width = Math.floor(this.weaponGrid[i].width/1.6)
          this.weaponGrid[i].height = Math.floor(this.weaponGrid[i].height/1.6)   
        }

        if( ((this.weaponArray[i].element != this.weaponArray[i-1].element) && this.weaponArray[i].id < 97) || i %4 ==0 || this.weaponArray[i].id == 97){
          this.col = 0;
          this.row++
        }
        //charm breakpoint
        if(this.weaponArray[i].id == 100){
          this.row++

          
          //this.charmYPoint = this.weaponArray[i].y;
        }
        this.weaponGrid[i].y = this.startY + (this.weaponGrid[i].height*this.row) 
        if(this.weaponArray[i].id == 1){
          this.wepYPoint = this.weaponGrid[i].y;
        }        
        if(this.weaponArray[i].id == 100){
          this.charmYPoint = this.weaponGrid[i].y;
        }
        this.weaponGrid[i].x = this.startX + (this.weaponGrid[i].width*this.col) 
        this.col++        

        this.weaponGridBG[i].x = this.weaponGrid[i].x+3
        this.weaponGridBG[i].y = this.weaponGrid[i].y+3

        
        this.weaponNew[i].x = this.weaponGrid[i].x
        this.weaponNew[i].y = this.weaponGrid[i].y
    

        if(window.innerWidth < 400){
          
          this.weaponGridBG[i].width = Math.floor(this.weaponGridBG[i].width/scale)
          this.weaponGridBG[i].height = Math.floor(this.weaponGridBG[i].height/scale) 

          this.weaponNew[i].width = Math.floor(this.weaponNew[i].width/scale)
          this.weaponNew[i].height = Math.floor(this.weaponNew[i].height/scale)             
        }  
        else{
          this.weaponGridBG[i].width = Math.floor(this.weaponGridBG[i].width/1.5)
          this.weaponGridBG[i].height = Math.floor(this.weaponGridBG[i].height/1.5) 

          this.weaponNew[i].width = Math.floor(this.weaponNew[i].width/1.5)
          this.weaponNew[i].height = Math.floor(this.weaponNew[i].height/1.5)               
        }      

        if(window.innerHeight <= 600){
          this.weaponGridBG[i].width = Math.floor(this.weaponGridBG[i].width/1.6)
          this.weaponGridBG[i].height = Math.floor(this.weaponGridBG[i].height/1.6) 

          this.weaponNew[i].width = Math.floor(this.weaponNew[i].width/1.6)
          this.weaponNew[i].height = Math.floor(this.weaponNew[i].height/1.6)      
        }



        this.weaponGrid[i].inputEnabled = true;
        this.weaponGrid[i].events.onInputDown.add(this.selectWeapon, this);       
        
        if( parseInt(localStorage.getItem("equip0")) == this.weaponArray[i].id){
          //console.log("yes")
   
          this.equipedGridKey = i

          this.selectWeapon(this.weaponGrid[i])
        }
        //console.log(this.weaponArray[i].name)
      }

      this.equippedTile = this.add.sprite(0,0, 'equipped');
      var scale = 1.8
      //media breakpoint
      if(window.innerWidth < 400){
        this.equippedTile.width = Math.floor(this.equippedTile.width/scale)
        this.equippedTile.height = Math.floor(this.equippedTile.height/scale)   
      }
      else{
        this.equippedTile.width = Math.floor(this.equippedTile.width/1.5)
        this.equippedTile.height = Math.floor(this.equippedTile.height/1.5)      
      }      

      if(window.innerHeight <= 600){
        this.equippedTile.width = Math.floor(this.equippedTile.width/1.6)
        this.equippedTile.height = Math.floor(this.equippedTile.height/1.6)   
      }      
      

      this.categoryText = this.add.text(15, this.wepYPoint-20, "WEAPONS",{font:'LondrinaSolid-Black'});
      this.categoryText.fill= '#fff';
      this.categoryText.fontSize = 20;  
      this.categoryText.wordWrap = true;

      this.categoryText2 = this.add.text(15, this.charmYPoint-20, "",{font:'LondrinaSolid-Black'});
      this.categoryText2.fill= '#fff';
      this.categoryText2.fontSize = 20;  
      this.categoryText2.wordWrap = true;      

      this.bagBG = this.add.sprite(0, 0, 'bagOverlay');

      this.tabBanner = this.add.sprite(0,(this.game.height)-100, 'tab_ribbon');
      this.tabBanner.width = this.game.width

      this.selectHighlight = this.add.sprite(60,(this.game.height)-50, 'tab_select_highlight');
      this.selectHighlight.anchor.setTo(0.5, 0.5);
      this.highlightTar = this.selectHighlight.x

      this.selectInventory = this.add.sprite(60,(this.game.height)-50, 'tab_inventory_selected');
      this.selectInventory.anchor.setTo(0.5, 0.5);
      this.selectInventory.clicked = false;
      this.selectInventory.inputEnabled = true;
      
      
      this.selectHub = this.add.sprite(this.game.width/2,(this.game.height)-50, 'tab_hub_unselected');
      this.selectHub.anchor.setTo(0.5, 0.5);
      this.selectHub.clicked = false;
      this.selectHub.inputEnabled = true;   
      this.selectHub.events.onInputDown.add(this.goToHub, this)     

      this.selectShop = this.add.sprite((this.game.width)-60,(this.game.height)-50, 'tab_shop_unselected');
      this.selectShop.anchor.setTo(0.5, 0.5);
      this.selectShop.clicked = false;
      this.selectShop.inputEnabled = true;
      this.selectShop.events.onInputDown.add(this.goToShop, this);   

      this.currentWep = parseInt(localStorage.getItem("equip0"))

      this.selectedWep= this.add.sprite(0,0, 'selectedInventory');     
      this.selectedWep.width = this.game.width

      this.selectedWeapon = this.add.sprite(this.selectedWep.x+10,this.selectedWep.y+50, weapon[this.currentWep].name); 
      this.selectedWeapon.width = Math.floor(this.selectedWeapon.width/1.3)
      this.selectedWeapon.height = Math.floor(this.selectedWeapon.height/1.3)     

      this.selectedWeaponText = this.add.text(this.selectedWep.x+120, this.selectedWep.y+25, weapon[this.currentWep].name,{font:'LondrinaSolid-Black'});
      this.selectedWeaponText.fill= '#FF962B';
      this.selectedWeaponText.fontSize = 20;

      this.selectedWeaponText2 = this.add.text(this.selectedWeaponText.x, this.selectedWeaponText.y+50, weapon[this.currentWep].name,{font:'LondrinaSolid-Black'});
      this.selectedWeaponText2.fill= '#fff';
      this.selectedWeaponText2.fontSize = 16;  
      this.selectedWeaponText2.wordWrap = true;
      this.selectedWeaponText2.wordWrapWidth = 160;   

      this.selectedWeaponText3 = this.add.text(this.selectedWep.x+25, this.selectedWep.height/2+50, "LOOOOL",{font:'Muli'});
      this.selectedWeaponText3.fill= '#fff';
      //this.selectedWeaponText3.align= 'center'
      this.selectedWeaponText3.fontStyle ='italic'
      this.selectedWeaponText3.fontSize = 12;  
      this.selectedWeaponText3.wordWrap = true;
      this.selectedWeaponText3.wordWrapWidth = 400;   

      //media breakpoint
      if(window.innerWidth < 400){
        this.selectedWeaponText2.wordWrapWidth = 140;    
      }

      //this.craftItem1 = this.add.sprite(this.selectedWep.width-115,this.selectedWep.y+50, weapon[this.currentWep].craft[0].name);
      this.craftItem1 = this.add.sprite(this.selectedWep.width-115,this.selectedWep.y+50, "skillGlow");
      this.craftItem1.width = Math.floor(this.craftItem1.width/2)
      this.craftItem1.height = Math.floor(this.craftItem1.height/2)
      
      this.craftItem1CountOwned = 1//parseInt(localStorage.getItem(weapon[this.currentWep].craft[0].name+" Count"))
      this.craftItem1CountNeeded = 1//weapon[this.currentWep].craft[0].count

      this.craftItem1Text = this.add.text(this.craftItem1.x+this.craftItem1.width+5, this.craftItem1.y+15 ,this.craftItem1CountOwned+"/"+this.craftItem1CountNeeded ,{font:'LondrinaSolid-Black'});
      this.craftItem1Text.fill= '#fff';
      this.craftItem1Text.fontSize = 14;   
      
      this.craftItem2 = this.add.sprite(this.selectedWep.width-115,this.craftItem1.y+this.craftItem1.height+15, "skillGlow");
      this.craftItem2.width = Math.floor(this.craftItem2.width/2)
      this.craftItem2.height = Math.floor(this.craftItem2.height/2)
      
      this.craftItem2CountOwned = 1//parseInt(localStorage.getItem(weapon[this.currentWep].craft[1].name+" Count"))
      this.craftItem2CountNeeded = 1//weapon[this.currentWep].craft[1].count
      
      this.craftItem2Text = this.add.text(this.craftItem2.x+this.craftItem2.width+5, this.craftItem2.y+15 ,this.craftItem2CountOwned+"/"+this.craftItem2CountNeeded ,{font:'LondrinaSolid-Black'});
      this.craftItem2Text.fill= '#fff';
      this.craftItem2Text.fontSize = 14;       

      this.equipButton = this.add.sprite(50,this.selectedWeapon.y+this.selectedWeapon.height, 'equip');
      this.equipButton.inputEnabled = true;
      this.equipButton.events.onInputDown.add(this.equip, this);  
      //media breakpoint
      if(window.innerWidth < 400){
        this.equipButton.x = -2
      }
      else{
        this.equipButton.x = 50
      }        
      
      this.craftButton = this.add.sprite(225,this.selectedWeapon.y+this.selectedWeapon.height, 'craft');
      this.craftButton.inputEnabled = true;
      this.craftButton.events.onInputDown.add(this.craft, this);       
      //media breakpoint
      if(window.innerWidth < 400){
        this.craftButton.x -= 10
      }
      else{
        this.craftButton.x = 225
      }        

      this.craftButtonText = this.add.text(this.craftButton.x+(this.craftButton.width/2)-30, this.craftButton.y+2 ,"RANK TOO LOW" ,{font:'LondrinaSolid-Black'});
      this.craftButtonText.fill= 'red';
      this.craftButtonText.fontSize = 14;      
      this.craftButtonText.alpha = 0;   
      
      this.craftKey = 0;
      this.tarKey = -1;
      
  


      this.Notification = this.add.sprite(60,(this.game.height)-50, 'notification');
      this.Notification.anchor.setTo(0.5, 0.5);  
      this.Notification.alpha = 0;  

      //this.selectedWeaponText.anchor.setTo(0.5, 0.5);    
      //this.tixText2.alpha = 0      
      if (parseInt(localStorage.getItem("firstVisit-combat")) == 21 ){
        this.Notification.alpha = 1;
        this.Notification.x = this.weaponGridBG[9].x+(this.weaponGridBG[9].width/2)  
        this.Notification.y = this.weaponGridBG[9].y+(this.weaponGridBG[9].height/2)    
      }        

      this.weightText = this.add.text(this.game.width-80, 0, "WEIGHT:",{font:'LondrinaSolid-Black'});
      this.weightText.fill= '#fff';
      this.weightText.fontSize = 14;  
      this.weightText.wordWrap = true;
      this.weightText.wordWrapWidth = 160;   
      this.weightText.alpha = 0;        
      
      this.speechBackdrop = this.add.sprite(0, 0, 'speechDim');
      this.speechBackdrop.width = this.game.width;
      this.speechBackdrop.height = this.game.height;
      this.speechBackdrop.alpha = 0;

      this.mapWarden = this.add.sprite(this.game.width, 0, 'guildShopkeep');
      this.mapWarden.width = this.game.width;
      this.mapWarden.height = this.game.height; 
      
      this.textBackdrop = this.add.sprite(this.game.width/2, this.game.height/2, 'speechBubble');
      this.textBackdrop.anchor.setTo(0.5, 0.5); 
      this.textBackdrop.width = this.game.width;
      this.textBackdrop.height = this.game.height;

      this.textBackdrop.width = this.textBackdrop.width/1.5
      this.textBackdrop.height = this.textBackdrop.height/1.5         

      this.textBackdrop.alpha = 0;
      this.textBackdrop.inputEnabled = true;
      this.textBackdrop.events.onInputDown.add(this.doNothing, this);             
      
      this.textBackdropText = this.add.text(this.game.width/2, 200, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
      this.textBackdropText.alpha = 0;
      this.textBackdropText.fill= 'black';
      this.textBackdropText.fontSize = 18;
      this.textBackdropText.anchor.setTo(0.5, 0.5); 
      this.textBackdropText.align = 'center'
      this.textBackdropText.wordWrap = true;
      this.textBackdropText.wordWrapWidth = this.game.width-35;      

      this.textBackdropText2 = this.add.text(15,this.textBackdropText.y-93, "Lorem Ipsum",{font:'LondrinaSolid-Black'});
      this.textBackdropText2.angle = -5
      this.textBackdropText2.alpha = 0;
      this.textBackdropText2.fill= '#FF8900';
      this.textBackdropText2.fontSize = 18;
      this.textBackdropText2.align = 'center'
      this.textBackdropText2.wordWrap = true;
      this.textBackdropText2.wordWrapWidth = this.textBackdrop.width-50;       
      this.textBackdropText2.text = "Lynnenne, The Shopkeep"
      this.textBackdropText.text = ""
      this.chatTimer = 0;      
      this.dialogCounter = 0;

      this.okayButton2 = this.add.sprite(-this.game.width, this.game.height/2-100, 'okay');
      this.okayButton2.anchor.setTo(0.5, 0.5); 
      this.okayButton2.alpha = 0;
      this.okayButton2.inputEnabled = true;
      this.okayButton2.events.onInputDown.add(this.hideChat, this);  
      this.okayButton2.origWidth = this.okayButton2.width
      this.okayButton2.origHeight = this.okayButton2.height      

      this.mapWarden.loadTexture("warden-1")      
      this.textBackdropText2.text = "Jean, the Collector"    
      this.textBackdropText.text = "You're OVERBURDENED!\nTry reducing your loadout weight by unequiping your CHARMS or changing your WEAPON"


      
      this.charmWeight = 0;
      if (localStorage.getItem("charmWeight") === null) {
        localStorage.setItem("charmWeight",0)
      }      
      else{
        this.charmWeight = parseInt(localStorage.getItem("charmWeight"))
      }
      this.hunterWeight = 0; 

      this.mouseWheelVelInitial = 50
      this.mouseWheelVel = 50
    },

    update: function () {


      if(parseInt(localStorage.getItem("muted")) == 1){
        this.bgSound.stop();
        this.ping.stop();
        this.equipSound.stop();
        this.forgeSound[1].stop();
      }
      else{
     
      }

      if(true){
        console.log(this.game.input.mouseWheel.delta)
        if(this.game.input.mouseWheel.delta > 0){
          this.game.camera.y-=this.mouseWheelVel;
          this.mouseWheelVel--;
          if(this.mouseWheelVel<0){
            this.mouseWheelVel = this.mouseWheelVelInitial
            this.game.input.mouseWheel.delta = 0;
          }        
        }
        else if(this.game.input.mouseWheel.delta < 0){
          this.game.camera.y+=this.mouseWheelVel
          this.mouseWheelVel--;
          if(this.mouseWheelVel<0){
            this.mouseWheelVel = this.mouseWheelVelInitial
            this.game.input.mouseWheel.delta = 0;
          }
        }        
      }


      if(this.chatTimer > 0){

        //this.mapWarden.bringToTop();
        this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
        this.textBackdrop.alpha = 1;
        this.textBackdropText.alpha = 1;
        this.textBackdropText2.alpha = 1;
        this.textBackdrop.x = 0;        

        this.textBackdrop.alpha = 1;
        this.speechBackdrop.alpha = 1;

        this.textBackdrop.x = this.game.width/2;
        
        if(this.textBackdrop.width < this.game.width){
          this.textBackdrop.width+=20;
        }
        if(this.textBackdrop.height < this.game.height){
          this.textBackdrop.height+=20;
        }        
        if(this.textBackdrop.height >= this.game.height && this.textBackdrop.width >= this.game.width){
          this.textBackdropText.alpha = 1;
          this.textBackdropText2.alpha = 1;
          this.okayButton2.alpha = 1;
          this.okayButton2.x = this.game.width/2
        }
        else{
          this.textBackdropText.alpha = 0;
          this.textBackdropText2.alpha = 0;       
          this.okayButton2.alpha = 0;      
          this.okayButton2.x = -this.game.width 
        }                         
      }
      else{
        this.mapWarden.x += (this.game.width - this.mapWarden.x) * 0.1; 
        this.textBackdrop.alpha = 0;
        this.textBackdropText.alpha = 0;
        this.textBackdropText2.alpha = 0

        this.textBackdrop.x = this.game.width+1000;      
        this.okayButton2.x = this.game.width+1000
        
        this.textBackdrop.alpha = 0;
        this.speechBackdrop.alpha = 0;
        this.okayButton2.alpha = 0;
        this.textBackdrop.width = this.game.width/1.5
        this.textBackdrop.height = this.game.height/1.5                 
      }

      if(weapon[this.targetWep].element == -1){
        this.selectedWep.loadTexture('selectedInventory-charm');     
      }
      else{
        this.selectedWep.loadTexture('selectedInventory');  
      }
      this.hunterWeight = 0;
      switch(weapon[parseInt(localStorage.getItem("equip0"))].weight){
        case 6:
          this.hunterWeight = 1
          break;
        case 4:

          this.hunterWeight = 2  
          break;
        case 2:
          
          this.hunterWeight = 3
          break;             
             
      }         
      
      this.weightText.text ="WEIGHT: "+(this.hunterWeight+this.charmWeight)+"/5";
      //OVER BURDENED
      if((this.hunterWeight+this.charmWeight) > 5){
        this.weightText.fill = "red"
      }
      else{
        this.weightText.fill = "white"
      }
      if(this.game.camera.y > this.game.world.bounds.height ){
        this.game.camera.y = this.game.world.bounds.height
      }
      if(this.game.camera.y < 0){
        this.game.camera.y = 0
      }    

      this.selectHighlight.x += (this.highlightTar - this.selectHighlight.x) * 0.5;
      if( (this.highlightTar - this.selectHighlight.x) <= 1 && this.tarKey == 1){
        this.game.state.start('hub') 
      }
      if( (this.highlightTar - this.selectHighlight.x) <= 1 && this.tarKey == 2){
        this.game.state.start('shop') 
      }    
      //timer ticks
      if(this.glowTimer > 0){
        this.glowTimer--;

      }


      for(var i = 4; i < 200; i++){
        if(typeof weapon[i] != "undefined"){
          var count1 = parseInt(localStorage.getItem(weapon[i].craft[0].name+" Count"));
          var count2 = parseInt(localStorage.getItem(weapon[i].craft[1].name+" Count"));
          this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[i].id));

          if (localStorage.getItem("crafted"+weapon[i].id) === null) {
            localStorage.setItem("crafted"+weapon[i].id,0)
            this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[i].id));
          } 

          if(count1 >= weapon[i].craft[0].count && count2 >= weapon[i].craft[1].count && this.hasCrafted == 0){
            localStorage.setItem("wep"+i+"Craftable",1)
            localStorage.setItem("nextWep",i)
           
          }    
          else{
            localStorage.setItem("wep"+i+"Craftable",0)
          }          
        }
      }

      this.currentRank = parseInt(localStorage.getItem("currentRank")) 
      this.currentWep = parseInt(localStorage.getItem("equip0"))
      this.weightText.y = 0 +this.game.camera.y
      this.tabBanner.y  = (this.game.camera.height)-100+this.game.camera.y
      this.selectInventory.y  = (this.game.camera.height)-50+this.game.camera.y
      this.selectHub.y  = (this.game.camera.height)-50+this.game.camera.y
      this.selectShop.y  = (this.game.camera.height)-50+this.game.camera.y
      this.selectHighlight.y = this.selectShop.y
      this.mapBG.y = this.game.camera.y
      this.bagBG.y = this.mapBG.y 

      this.selectedWep.y = this.game.camera.y
      this.selectedWeapon.y = this.selectedWep.y+50
      this.selectedWeaponText.y = this.selectedWep.y+25
      this.selectedWeaponText2.y = this.selectedWeaponText.y+50
      this.selectedWeaponText3.y = this.selectedWeaponText.y+140
      this.equipButton.y = this.selectedWeapon.y+this.selectedWeapon.height
      this.craftButton.y = this.selectedWeapon.y+this.selectedWeapon.height
      this.craftButtonText.y = this.craftButton.y+2

      this.craftItem1.y = this.selectedWep.y+50
      this.craftItem1Text.y =this.craftItem1.y+15
      
      this.craftItem2.y = this.craftItem1.y+this.craftItem1.height+15
      this.craftItem2Text.y = this.craftItem2.y+15

      //text stays on top

      this.speechBackdrop .y = 0 +this.game.camera.y
      this.mapWarden.y = 0 +this.game.camera.y
      this.textBackdrop.y = this.game.height/2 +this.game.camera.y
      this.textBackdropy = 0 +this.game.camera.y          
      this.textBackdropText.y = 200+this.game.camera.y
      this.textBackdropText2.y = this.textBackdropText.y-93
      this.okayButton2.y = this.game.height/2-100+this.game.camera.y    
      
        //media breakpoint
        if(window.innerHeight < 700){
          this.textBackdropText.fontSize = 18;
          this.textBackdropText2.fontSize = 18;
          
          this.textBackdropText.y = 165+this.game.camera.y   
          this.textBackdropText2.y = this.textBackdropText.y-80        
          this.okayButton2.y = this.game.height/2-60+this.game.camera.y   
          
        }
        else if(window.innerHeight < 800){
          this.textBackdropText.fontSize = 19;
          this.textBackdropText2.fontSize = 19;
          this.textBackdropText.y = 190+this.game.camera.y   
          this.textBackdropText2.y = this.textBackdropText.y-90                
          /*
          this.textBackdropText.y = this.game.height-100
          this.textBackdropText2.fontSize = 24;
          this.textBackdropText2.y = this.textBackdropText.y-100      
          */       
        }        
        else{ 
          
          this.textBackdropText.fontSize = 19;
          this.textBackdropText2.fontSize = 19;
          this.textBackdropText.y = 190+this.game.camera.y   
          this.textBackdropText2.y = this.textBackdropText.y-75             
          //this.textBackdropText.fontSize = 24;
          /*
          this.textBackdropText.y = this.game.height-100
          this.textBackdropText2.fontSize = 24;
          this.textBackdropText2.y = this.textBackdropText.y-100      
          */       
        }  


      //console.log(this.game.camera.y)

      //selected weapon
      var wepWeight =""
      switch(weapon[this.targetWep].weight){
        case 6:
          wepWeight = "LIGHT(1.0)"
          break;
        case 4:
          wepWeight = "MEDIUM(2.0)"   
          break;
        case 2:
          wepWeight = "HEAVY(3.0)"
          break;             
             
      }  
      var wepElem =""
      var elemColor =""
      switch(weapon[this.targetWep].element){
        case 0:
          wepElem = "NEUTRAL"
          elemColor ="#fff"
          break;
        case 1:
          wepElem = "NATURE"
          elemColor ="#83DF43"   
          break;
        case 2:
          wepElem = "EARTH"
          elemColor ="#B27957" 
          break;   
        case 3:
          wepElem = "FIRE"
          elemColor ="#FF316C" 
          break;                       
             
      } 
      var wepType =""
      switch(weapon[this.targetWep].attackType){
        case 0:
          wepType = "SLASH"
          break;
        case 1:
          wepType = "STAB"
          break;
        case 2:
          wepType = "BASH"
          break;                         
             
      }       
      var currentWepLevel = parseInt(localStorage.getItem(this.targetWep+"-Level"))
      if(currentWepLevel >= gameConfig.maxLevel){
        localStorage.setItem(this.targetWep+"-Level", gameConfig.maxLevel)
      }

      if(localStorage.getItem(this.targetWep+"-Level") === null){
        localStorage.setItem(this.targetWep+"-Level",1)
        currentWepLevel = 1;
      }
      var calAttack = Math.floor(weapon[this.targetWep].attackValue*currentWepLevel)  
      this.selectedWeapon.loadTexture(weapon[this.targetWep].name);
      this.selectedWeaponText.text = weapon[this.targetWep].name      

      if(this.targetWep > 3 && currentWepLevel < 25){
        this.craftItem1CountOwned = parseInt(localStorage.getItem(weapon[this.targetWep].craft[0].name+" Count"))
        if(localStorage.getItem(weapon[this.targetWep].craft[0].name+" Count") === null){
          localStorage.setItem(weapon[this.targetWep].craft[0].name+" Count",0)
          this.craftItem1CountOwned = 0;
        }        
        this.craftItem1CountNeeded = weapon[this.targetWep].craft[0].count*currentWepLevel
        if(this.craftItem1CountNeeded > 99){
          this.craftItem1CountNeeded = 99
        }

        this.craftItem2CountOwned = parseInt(localStorage.getItem(weapon[this.targetWep].craft[1].name+" Count"))
        if(localStorage.getItem(weapon[this.targetWep].craft[1].name+" Count") === null){
          localStorage.setItem(weapon[this.targetWep].craft[1].name+" Count",0)
          this.craftItem2CountOwned = 0;
        }                
        this.craftItem2CountNeeded = weapon[this.targetWep].craft[1].count*currentWepLevel            
        if(this.craftItem2CountNeeded > 99){
          this.craftItem2CountNeeded = 99
        }
        
        this.craftItem1.alpha = 1
        this.craftItem1.loadTexture(weapon[this.targetWep].craft[0].name);
        this.craftItem2.alpha = 1
        this.craftItem2.loadTexture(weapon[this.targetWep].craft[1].name)
        
        this.craftItem1Text.alpha = 1;
        this.craftItem1Text.text = this.craftItem1CountOwned+"/"+this.craftItem1CountNeeded
        this.craftItem2Text.alpha = 1
        this.craftItem2Text.text = this.craftItem2CountOwned+"/"+this.craftItem2CountNeeded

        //dragon gems + scrolls
        if(currentWepLevel >= 1 &&  currentWepLevel < 24 && parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) != 0){
          this.craftItem2.y = this.craftItem1.y+this.craftItem1.height+15
          this.craftItem2Text.y = this.craftItem2.y+15

          this.craftItem1CountOwned = parseInt(localStorage.getItem("blueprintCount"+weapon[this.targetWep].element))
          this.craftItem1.loadTexture("blueprint"+weapon[this.targetWep].element);
          
          switch(weapon[this.targetWep].element){
            case 0:
              this.craftItem2CountOwned = parseInt(localStorage.getItem("Prismatic Gem Count"))
              this.craftItem2.loadTexture("Prismatic Gem");               
              break;
            case 1:
              this.craftItem2CountOwned = parseInt(localStorage.getItem("Yellow Dragon Gem Count"))
              this.craftItem2.loadTexture("Yellow Dragon Gem"); 
              break;
            case 2:
              this.craftItem2CountOwned = parseInt(localStorage.getItem("Blue Dragon Gem Count"))
              this.craftItem2.loadTexture("Blue Dragon Gem"); 
              break;   
            case 3:
              this.craftItem2CountOwned = parseInt(localStorage.getItem("Red Dragon Gem Count"))
              this.craftItem2.loadTexture("Red Dragon Gem"); 
              break;                       
                 
          }  
         


          this.craftItem1CountNeeded = currentWepLevel
          this.craftItem2CountNeeded = currentWepLevel
          
          this.craftItem1.alpha = 1
          this.craftItem2.alpha = 1
          
          this.craftItem1Text.alpha = 1;
          this.craftItem1Text.text = this.craftItem1CountOwned+"/"+this.craftItem1CountNeeded
          this.craftItem2Text.alpha = 1
          this.craftItem2Text.text = this.craftItem2CountOwned+"/"+this.craftItem2CountNeeded
        }
         //max level     
        else if(currentWepLevel >= 24 && parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) != 0){
          this.craftItem2.y = this.craftItem1.y+this.craftItem1.height+15
          this.craftItem2Text.y = this.craftItem2.y+15

          this.craftItem1CountOwned = parseInt(localStorage.getItem("blueprintCount"+weapon[this.targetWep].element))
          this.craftItem1.loadTexture("blueprint"+weapon[this.targetWep].element);
          
          this.craftItem2CountOwned = parseInt(localStorage.getItem("Prismatic Gem Count"))
          this.craftItem2.loadTexture("Prismatic Gem");   

         


          this.craftItem1CountNeeded = currentWepLevel
          this.craftItem2CountNeeded = 50
          
          this.craftItem1.alpha = 1
          this.craftItem2.alpha = 1
          
          this.craftItem1Text.alpha = 1;
          this.craftItem1Text.text = this.craftItem1CountOwned+"/"+this.craftItem1CountNeeded
          this.craftItem2Text.alpha = 1
          this.craftItem2Text.text = this.craftItem2CountOwned+"/"+this.craftItem2CountNeeded
        }            
        else{
          this.craftItem2.y = this.craftItem1.y+this.craftItem1.height+15
          this.craftItem2Text.y = this.craftItem2.y+15          
        }

      }
      else{
        this.craftItem1.alpha = 0
        this.craftItem2.alpha = 0
        this.craftItem1Text.alpha = 0
        this.craftItem2Text.alpha = 0
      }


      //wep text
      this.selectedWeaponText3.text = weapon[this.targetWep].flavourText
      this.selectedWeaponText2.clearColors()
      this.selectedWeaponText2.text = "LEVEL: "+currentWepLevel+"\nWEIGHT: "+ wepWeight+"\nDAMAGE: "+calAttack+" "+wepElem+" "+wepType
      var textThing = "LEVEL: "+currentWepLevel
      if(currentWepLevel >= 1){
        this.selectedWeaponText2.addColor("white", 0);  
      }
      if(currentWepLevel >= 10){
        this.selectedWeaponText2.addColor("#25D035", 0);
      }
      if(currentWepLevel >=  15){
        this.selectedWeaponText2.addColor("#DF37C8", 0);
      }
      if(currentWepLevel >= 25 && this.targetWep < 100){
        this.selectedWeaponText2.addColor("#D57E36", 0);
        this.selectedWeapon.loadTexture(weapon[this.targetWep].name+"-variant");    
      }     
      this.selectedWeaponText2.addColor("white", textThing.length);   

      textThing = "LEVEL: "+currentWepLevel+"\nWEIGHT: "+ wepWeight+"\nDAMAGE: "+calAttack+" "
      this.selectedWeaponText2.addColor(elemColor, textThing.length-1);      
      this.selectedWeaponText2.addColor("#fff", ((textThing.length-1)+(wepElem.length+1)));    

      //is charm
      //alert(wepElem)
      //console.log(wepElem)
      if(weapon[this.targetWep].element == -1){
        this.selectedWeaponText2.text = "WEIGHT: "+ wepWeight+"\n\n"+weapon[this.targetWep].charmText
        this.selectedWeaponText2.clearColors()
        //this.selectedWeaponText3.alpha = 1;
        //this.selectedWeaponText3.text = "!!!"
      }

      this.equippedTile.x=this.weaponGrid[this.equipedGridKey].x+3
      this.equippedTile.y=this.weaponGrid[this.equipedGridKey].y+3

      //check if equipped
      if(this.currentWep == this.targetWep || parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) == 0 || parseInt(localStorage.getItem("charmEquiped"+weapon[this.targetWep].id)) == 1 ){
        this.equipButton.loadTexture('equipNo');
        if(this.targetWep >= 100 && parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) == 1){
          this.equipButton.loadTexture('unequip');
        }
        else{
          this.equipButton.loadTexture('equipNo');
        }
      }
      else{
        this.equipButton.loadTexture('equip');

      }

      //check if crafted and/or upgradabled
      if(parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) != 0 ){
        this.craftButton.loadTexture('upgrade');
        this.craftKey = 2
        if(weapon[this.targetWep].upgradable == false){
          this.craftButton.loadTexture('upgradeNo');
          this.craftKey = 0
        }
      }
      else{
        this.craftButton.loadTexture('craft');
        this.craftKey = 1;
      }
      //rank too low
      var nextLevel = parseInt(localStorage.getItem(this.targetWep+"-Level"))+1
      this.playerRank = parseInt(localStorage.getItem("currentRank"))
      if(nextLevel > this.playerRank && nextLevel < gameConfig.maxLevel && parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) != 0 && this.targetWep>3){
        this.craftButton.loadTexture('upgradeNo');
        this.craftKey = 0       
        this.craftButtonText.alpha = 1; 
        this.craftButtonText.fill = "red"
        this.craftButtonText.text = "RANK TOO LOW"        
      }
      //max level & shiny
      else if(currentWepLevel >= gameConfig.maxLevel && this.targetWep < 100){
        this.craftButton.loadTexture('upgradeNo');
        this.craftKey = 0       
        this.craftButtonText.alpha = 1; 
        this.craftButtonText.fill = "Green"
        this.craftButtonText.text = "WEP MAX LEVEL"
        this.selectedWeapon.loadTexture(weapon[this.targetWep].name+"-variant");      
        localStorage.setItem(this.targetWep+"-isShiny", 1)          
      }      
      else{
        this.craftButtonText.alpha = 0; 
      }
      
      
   
      
      //check if you can upgrade or craft 
      if(parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) == 0  && (this.craftItem1CountOwned < this.craftItem1CountNeeded || this.craftItem2CountOwned < this.craftItem2CountNeeded)){
     
        this.craftKey = 0;
        this.craftButton.loadTexture('craftNo');
      }
      else if(this.craftItem1CountOwned < this.craftItem1CountNeeded || this.craftItem2CountOwned < this.craftItem2CountNeeded){
        this.craftButton.loadTexture('upgradeNo');
        this.craftKey = 0;
      }

      //turns text red is insufficient
      if(this.craftItem1CountOwned < this.craftItem1CountNeeded){
        this.craftItem1Text.fill ='red'
      }
      else{
        this.craftItem1Text.fill = "white"
      }
      if(this.craftItem2CountOwned < this.craftItem2CountNeeded){
        this.craftItem2Text.fill ='red'
      }
      else{
        this.craftItem2Text.fill = "white"
      }         
      //disable

      //grey out uncrafted weps on grid
      for(var i = 1; i <= this.weaponCount; i++){
        if(parseInt(localStorage.getItem("crafted"+this.weaponGrid[i].id)) == 0){
          //this.weaponGrid[i].filters = [this.gray];
          this.weaponGrid[i].loadTexture(this.weaponGrid[i].name+"-no")
          
        }
        else{
          //this.weaponGrid[i].filters = null
          this.weaponGrid[i].loadTexture(this.weaponGrid[i].name+"")
        }     

        if(localStorage.getItem("wep"+ this.weaponGrid[i].id+"Craftable") != 0 && i > 3){
          this.weaponNew[i].alpha = 1;
        } 
        else{
          this.weaponNew[i].alpha = 0;
        }
      }
      //upgrade glow
      if(this.glowTimer > 0){
        //this.selectedWeapon.filters =  [this.glowFilter];
      }
      else{
        //this.selectedWeapon.filters = null
      }  


      
      //this.selectedWeaponText2.addColor('#ffffff', (preceedingText.length+wepElem.length)-1);      

    },
    goToShop: function (unit) {
      if(this.hunterWeight+this.charmWeight <= 5){
        if(parseInt(localStorage.getItem("muted")) == 0){
          this.ping.play();  
        } 
        this.bgSound.stop(); 
        this.highlightTar = this.selectShop.x
        this.tarKey = 2;
        this.selectInventory.loadTexture ('tab_inventory_unselected');      
        this.game.kineticScrolling.stop();
        //this.game.state.start('shop')      
      }  
      else{
        this.chatTimer = 1; 
      }    

     
    }, 
    goToHub: function (unit) {
      if(this.hunterWeight+this.charmWeight <= 5){
        if(parseInt(localStorage.getItem("muted")) == 0){
          this.ping.play();  
        } 
        this.bgSound.stop(); 
        //this.game.state.start('hub')        
        this.highlightTar = this.selectHub.x
        this.tarKey = 1;
        this.selectInventory.loadTexture ('tab_inventory_unselected');       
        this.game.kineticScrolling.stop();   
      }  
      else{
        this.chatTimer = 1; 
      }       

    },   
    selectWeapon: function (wep) {
      //console.log(wep)
      this.tileSelect.x=wep.x+3
      this.tileSelect.y=wep.y+3



      this.selectedgridKey = wep.gridKey
      this.targetWep = wep.id
      if (parseInt(localStorage.getItem("firstVisit-combat")) == 21 && wep.id == 9){
        this.Notification.alpha = 1;
        this.Notification.x = this.craftButton.x 
        this.Notification.y = this.craftButton.y
      }        


    },      
    craft: function () {
      if(this.craftKey == 1){

        var ran = 1//Math.floor(Math.random() * 3)+1;
        if(!this.forgeSound[ran].isPlaying){
          if(parseInt(localStorage.getItem("muted")) == 0){
            this.forgeSound[ran].play();  
          }           
            
        }    

        this.glowTimer = 100
        var val1 = this.craftItem1CountOwned - this.craftItem1CountNeeded
        localStorage.setItem(weapon[this.targetWep].craft[0].name+" Count", val1)

        var val2 = this.craftItem2CountOwned - this.craftItem2CountNeeded
        localStorage.setItem(weapon[this.targetWep].craft[1].name+" Count", val2)        

        localStorage.setItem("crafted"+weapon[this.targetWep].id, 1)

        if (parseInt(localStorage.getItem("firstVisit-combat")) == 21 ){
          this.Notification.alpha = 1;
          this.Notification.x = this.equipButton.x 
          this.Notification.y = this.equipButton.y
        }   
        if(this.targetWep >= 100){
          localStorage.setItem(this.targetWep+"-Level", gameConfig.maxLevel) 

        }               
      }
      
      var currentWepLevel = parseInt(localStorage.getItem(this.targetWep+"-Level"))
      var nextLevel = parseInt(localStorage.getItem(this.targetWep+"-Level"))+1

      if(this.craftKey == 2 && nextLevel <= gameConfig.maxLevel){

            var ran = 1//Math.floor(Math.random() * 3)+1;
            if(!this.forgeSound[ran].isPlaying){
              if(parseInt(localStorage.getItem("muted")) == 0){
                this.forgeSound[ran].play();  
              }   
            }    

        this.glowTimer = 25
        if(currentWepLevel < 15){
          var val1 = this.craftItem1CountOwned - this.craftItem1CountNeeded
          localStorage.setItem(weapon[this.targetWep].craft[0].name+" Count", val1)
  
          var val2 = this.craftItem2CountOwned - this.craftItem2CountNeeded
          localStorage.setItem(weapon[this.targetWep].craft[1].name+" Count", val2)    
        }
        else if(currentWepLevel >= 1 && currentWepLevel < 24){

          var val1 = this.craftItem1CountOwned - this.craftItem1CountNeeded 
          localStorage.setItem("blueprintCount"+weapon[this.targetWep].element, val1)
          
          var val2 = this.craftItem2CountOwned - this.craftItem2CountNeeded
          switch(weapon[this.targetWep].element){
            case 0:
              localStorage.setItem("Prismatic Gem Count", val2)
              
              break;
            case 1:
              localStorage.setItem("Yellow Dragon Gem Count", val2)
              break;
            case 2:
              localStorage.setItem("Blue Dragon Gem Count", val2)
              break;   
            case 3:
              localStorage.setItem("Red Dragon Gem Count", val2)
              break;                       
                 
          }  
    

        }
        else{
          var val1 = this.craftItem1CountOwned - this.craftItem1CountNeeded 
          localStorage.setItem("blueprintCount"+weapon[this.targetWep].element, val1)
          
          var val2 = this.craftItem2CountOwned - this.craftItem2CountNeeded
          localStorage.setItem("Prismatic Gem Count", val2)             
  
          var CurrentLevel = parseInt(localStorage.getItem(this.targetWep+"-Level"))
          localStorage.setItem(this.targetWep+"-Level", CurrentLevel+1)    
          if(this.targetWep >= 100){
            localStorage.setItem(this.targetWep+"-Level", gameConfig.maxLevel) 

          }          
          
          //set shiny
          localStorage.setItem(this.targetWep+"-isShiny", 1)
          this.isWepShiny = parseInt(localStorage.getItem(this.targetWep+"-isShiny")) 
        }      

        localStorage.setItem(this.targetWep+"-Level", currentWepLevel+1)

        if(weapon[this.targetWep].id >= 100){
          localStorage.setItem(this.targetWep+"-Level", gameConfig.maxLevel) 

        }            
      }                 
        
      if(this.craftKey == 2 && nextLevel == gameConfig.maxLevel){
        //this.ping.play();
        //this.glowTimer = 25   
      }  
   

    },
    doNothing: function () {   


    },               
    hideChat: function (unit) {
        this.chatTimer = 0;
        if(this.okayButton2.alpha == 1){

        }

    },   
    mouseWheel: function (event) {   
      console.log(this.game.input.mouse.wheelDelta); 
    },
    equip: function () {   
      if(weapon[this.targetWep].element == -1 && localStorage.getItem("charmEquiped"+weapon[this.targetWep].id) != 1 && parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) == 1){
       console.log("Charm Equipped") 
       var itemWeight = 0;
       switch(weapon[this.targetWep].weight){
        case 6:
          itemWeight = 1
          break;
        case 4:
          itemWeight = 2   
          break;
        case 2:
          itemWeight = 3
          break;             
             
       }  
       this.charmWeight += itemWeight   
       localStorage.setItem("charmWeight",parseInt(localStorage.getItem("charmWeight"))+itemWeight)   
       localStorage.setItem("charmEquiped"+weapon[this.targetWep].id,1)
       this.weaponGridBG[this.selectedgridKey].loadTexture("charm-equipped");
      }
      else if(localStorage.getItem("charmEquiped"+weapon[this.targetWep].id) == 1 && parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) == 1){
        console.log("Charm unEquipped") 
        localStorage.setItem("charmEquiped"+weapon[this.targetWep].id,0)
        this.weaponGridBG[this.selectedgridKey].loadTexture("charm");
        var itemWeight = 0;
        switch(weapon[this.targetWep].weight){
         case 6:
           itemWeight = 1
           break;
         case 4:
           itemWeight = 2   
           break;
         case 2:
           itemWeight = 3
           break;             
              
        }  
        this.charmWeight -= itemWeight         
        localStorage.setItem("charmWeight",parseInt(localStorage.getItem("charmWeight"))-itemWeight)  
        if(parseInt(localStorage.getItem("charmWeight")) < 0){
          localStorage.setItem("charmWeight",0) 
        }
      }
      else{
        if(this.currentWep != this.targetWep && parseInt(localStorage.getItem("crafted"+weapon[this.targetWep].id)) != 0){
          if(parseInt(localStorage.getItem("muted")) == 0){
            this.equipSound.play();
          }             
          
          localStorage.setItem("equip0",this.targetWep)
          this.equipedGridKey = this.selectedgridKey

          if (parseInt(localStorage.getItem("firstVisit-combat")) == 21 && parseInt(localStorage.getItem("equip0")) == 9){
            this.Notification.alpha = 1;
            this.Notification.x = this.selectHub.x
            this.Notification.y = this.selectHub.y    
          }        
        }
      }
      
    }        

  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Craft = Craft;

}());
