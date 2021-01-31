(function() {
  'use strict';

  function Craft() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Craft.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.map = this.add.sprite(0, 0, 'mainBG');
      this.map.width = this.game.width;
      this.map.height = this.game.height;        
      this.map.alpha = 1;
  
      this.arrowLeft = this.add.sprite(10, 50, "craftArrowLeft");  
      this.arrowLeft.inputEnabled = true;
      this.arrowLeft.events.onInputDown.add(this.left, this);  
      
      this.arrowRight = this.add.sprite(this.game.width-100, 50, "craftArrowRight");  
      this.arrowRight.inputEnabled = true;
      this.arrowRight.events.onInputDown.add(this.right, this);        
      
      this.biome = parseInt(localStorage.getItem("Markerbiome"));
      this.returnButton = this.add.sprite(this.game.width/2, this.game.height-50, "return_"+this.biome+"MINI");  
      this.returnButton.anchor.setTo(0.5, 0.5);
      this.returnButton.inputEnabled = true;
      this.returnButton.events.onInputDown.add(this.onDown, this);     
      
      this.equipped= this.add.sprite(this.game.width/2, 100, 'equipped');  
      this.equipped.width = 150;
      this.equipped.height = 150;
      this.equipped.anchor.setTo(0.5, 0.5);     
      this.equipped.alpha = 0;
      
      this.wepCount = 1;
      this.currentWep = this.add.sprite(this.game.width/2, 100, weapon[this.wepCount].name);  
      this.currentWep.width = 150;
      this.currentWep.height = 150;
      this.currentWep.anchor.setTo(0.5, 0.5);     
      this.currentWepText = this.add.text(this.game.width/2,200, weapon[this.wepCount].name,{font:'LondrinaSolid-Black'});
      this.currentWepText.fill= '#fff';  
      this.currentWepText.fontSize = 24;  
      this.currentWepText.align = "center"
      this.currentWepText.anchor.setTo(0.5, 0.5); 
      this.wep = [];
      for(var i = 0; i < 100;i++){
        if(weapon[i] != null){
          ////console.log(i);
        }
        else{
          i++
        }
        
      }
      
      this.SkillsText = this.add.text(65, this.currentWepText.y+50,"SKILLS",{font:'LondrinaSolid-Black'});
      this.SkillsText.origX = this.SkillsText.x
      this.SkillsText.fill= '#fff';
      this.SkillsText.anchor.setTo(0.5, 0.5);     
      this.SkillsText.fontSize = 24;     

        
      this.currentSkills = []
      this.distY = 0;
      for(var i = 0; i< weapon[this.wepCount].skill.length;i++){
        this.currentSkills[i] = this.add.sprite(10, this.SkillsText.y+15+this.distY, weapon[this.wepCount].skill[i].name); 
        

        this.currentSkillDmgType = weapon[this.wepCount].skill[i].attackType
        this.currentSkillDmgTypeName = "";
        switch(this.currentSkillDmgType){
          case 0:
            this.currentSkillDmgTypeName = "SLASH";  
            break;
          case 1:
            this.currentSkillDmgTypeName = "STAB";  
            break;
          case 2:
            this.currentSkillDmgTypeName = "BASH";  
            break;            
        }
        this.currentSkillsText = this.add.text(this.currentSkills[i].x+250, this.currentSkills[0].y+55+this.distY, "BASIC: "+weapon[this.wepCount].skill[i].name+'\nDeal '+weapon[this.wepCount].skill[i].attack+" "+this.currentSkillDmgTypeName+" Damage",{font:'LondrinaSolid-Black'});
        this.currentSkillsText.fill= '#fff';
        this.currentSkillsText.anchor.setTo(0.5, 0.5);     
        this.currentSkillsText.fontSize = 24;     
        this.distY += 50
      }
      var skillLimit = weapon[this.wepCount].skill.length-1;
      this.ultSkill = this.add.sprite(10, this.currentSkills[0].y+100, weapon[this.wepCount].ultSkill.name); 
 
      this.ultSkillText = this.add.text(this.ultSkill.x+250, this.ultSkill.y+75, weapon[this.wepCount].ultSkill.name,{font:'LondrinaSolid-Black'});
      this.ultSkillText.fill= '#fff';
      this.ultSkillText.anchor.setTo(0.5, 0.5);    
      this.ultSkillText.fontSize = 24;      
      
      this.currentCraft = [3]
      this.currentCraftText = [3];
      var dist = 0;
      
      

      this.craftButton = this.add.sprite(this.game.width/2-100, this.returnButton.y-80, "craft");  
      this.craftButton.anchor.setTo(0.5, 0.5);
      this.craftButton.width = 210;
      this.craftButton.height =85;
      this.craftButton.inputEnabled = true;
      this.craftButton.events.onInputDown.add(this.craft, this);
      
      this.equipButton = this.add.sprite(this.game.width/2+85, this.returnButton.y-80, "equip");  
      this.equipButton.anchor.setTo(0.5, 0.5);
      this.equipButton.width = 210;
      this.equipButton.height = 85;      
      this.equipButton.inputEnabled = true;
      this.equipButton.events.onInputDown.add(this.equip, this);      
      //this.input.onDown.add(this.onDown, this);
      
      this.craftBackdrop = this.add.sprite(0, 0, 'craftBG');
      this.craftBackdrop.width = this.game.width;
      this.craftBackdrop.height = this.game.height;        
      this.craftBackdrop.alpha = 0;      
      
      var dist = 0;
      for(var i = 0; i< 3;i++){
        this.currentCraft[i] = this.add.sprite(80, this.SkillsText.y+dist+75, 'Small Monster Bone'); 
        this.currentCraft[i].name = 'Small Monster Bone'
        this.currentCraft[i].alpha = 0;
        

        this.currentCraft[i].anchor.setTo(0.5, 0.5); 
        this.currentCraftText[i] = this.add.text(this.currentCraft[i].x+80, this.currentCraft[i].y-50, "lol",{font:'LondrinaSolid-Black'});
        this.currentCraftText[i].fill= '#fff';  
        this.currentCraftText[i].fontSize = 24;  
        this.currentCraftText[i].wordWrap = true;
        this.currentCraftText[i].wordWrapWidth = 350;
        //this.currentCraftText[i].align ='left'
        //this.currentCraftText[i].anchor.setTo(0.5, 0.5); 
        this.currentCraftText[i].alpha = 0;
        dist += 100;


      }   
      this.submitButton = this.add.sprite(this.game.width+1000, this.game.height-150, "craft");  
      this.submitButton.anchor.setTo(0.5, 0.5); 
      this.submitButton.inputEnabled = true;
      this.submitButton.events.onInputDown.add(this.craft2, this); 
      this.submitButton.alpha = 1;
      

      this.cancelButton = this.add.sprite(this.game.width+1000, this.game.height-50, "cancel");  
      this.cancelButton.anchor.setTo(0.5, 0.5); 
      this.cancelButton.inputEnabled = true;
      this.cancelButton.events.onInputDown.add(this.cancel, this);   
      this.cancelButton.alpha = 1;
      
      

      
      this.currentWep2 = this.add.sprite(this.game.width/2, 100, weapon[this.wepCount].name);  
      this.currentWep2.width = 150;
      this.currentWep2.height = 150;
      this.currentWep2.anchor.setTo(0.5, 0.5);     
      this.currentWep2.alpha = 0
      this.currentWep2Text = this.add.text(this.game.width/2,200, weapon[this.wepCount].name,{font:'LondrinaSolid-Black'});
      this.currentWep2Text.fill= '#fff';  
      this.currentWep2Text.fontSize = 24; 
      this.currentWep2Text.alpha = 0;
      this.currentWep2Text.anchor.setTo(0.5, 0.5);
      this.currentWep2Text.align = "center"
      
            if (localStorage.getItem(weapon[this.wepCount].id+"-Level") === null) {
              localStorage.setItem(weapon[this.wepCount].id+"-Level",1)
            }
            if (localStorage.getItem("blueprintCount") === null) {
              localStorage.setItem("blueprintCount",0)
            }            
            this.currentWepLevel = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-Level")) 
            
            this.bgSound = this.add.audio('giftMusic');
            this.ping = this.add.audio('ping');
            
            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            }        
  if (localStorage.getItem("firstVisit-craft") === null ) {
      localStorage.setItem("firstVisit-craft",1);
    /*  setTimeout(function () {
        alert("Welcome to the Crafting Screen!\n Craft,Equip , Repair and Upgrade your weapons. ")
      }, 1000);      
      */

  }      
    },

    update: function () {
            if (localStorage.getItem(weapon[this.wepCount].id+"-Level") === null) {
              localStorage.setItem(weapon[this.wepCount].id+"-Level",1)
            }
            if (localStorage.getItem("blueprintCount") === null) {
              localStorage.setItem("blueprintCount",0)
            }            
            this.currentWepLevel = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-Level"))     
            
      this.currentDurability = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-CurrentDurability"));
      
      if (localStorage.getItem(weapon[this.wepCount].id+"-CurrentDurability") === null) {
        localStorage.setItem(weapon[this.wepCount].id+"-CurrentDurability",weapon[this.wepCount].durability)
        this.currentDurability = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-CurrentDurability"));
      }  
      
      this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[this.wepCount].id));
      if (localStorage.getItem("crafted"+weapon[this.wepCount].id) === null) {
        localStorage.setItem("crafted"+weapon[this.wepCount].id,0)
        this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[this.wepCount].id));
      }        
      ////console.log(localStorage.getItem("crafted"+weapon[this.wepCount]))
      if(this.hasCrafted == 0){
        this.equipButton.loadTexture("equipNo")
        this.submitButton.loadTexture("craft")
        this.craftButton.loadTexture("craft")
      }
      else{
        this.equipButton.loadTexture("equip")
        if(this.currentDurability < weapon[this.wepCount].durability){
          this.submitButton.loadTexture("repair")
          this.craftButton.loadTexture("repair")          
        }
        if(this.currentDurability >= weapon[this.wepCount].durability){
          this.currentDurability = weapon[this.wepCount].durability
          this.submitButton.loadTexture("upgrade")
          this.craftButton.loadTexture("upgrade")          
        }
        if(weapon[this.wepCount].id == 0 || weapon[this.wepCount].id == 1 || weapon[this.wepCount].id == 2 || weapon[this.wepCount].id == 3){
          this.craftButton.loadTexture("craftNo") 
        }

      }
      var isEquipped = parseInt(localStorage.getItem("equip0"))
      
      if(isEquipped == weapon[this.wepCount].id){
        //this.map.loadTexture("craftBGE")
        this.equipped.alpha = 1;
        this.equipButton.loadTexture("equipNo")
      }
      else{
        this.equipped.alpha = 0;
        //this.map.loadTexture("craftBG")
      }
          
      this.currentWep.loadTexture(weapon[this.wepCount].name)

      this.currentWep.anchor.setTo(0.5, 0.5);    
      this.currentWepText.text = weapon[this.wepCount].name
      //this.currentWepLevel = 3;
      for(var i = 0; i< this.currentWepLevel ;i++){
        if(i != 0){
          this.currentWepText.text += "+"
        }
        
        
        if(i == this.currentWepLevel-1){
           this.currentWepText.text +="\n'"+weapon[this.wepCount].flavourText+"'"
        }
      }
      
      
      for(var i = 0; i< weapon[this.wepCount].skill.length;i++){
        this.currentSkills[i].loadTexture(weapon[this.wepCount].skill[i].name); 

        this.currentSkillDmgType = weapon[this.wepCount].skill[i].attackType
        this.currentSkillDmgTypeName = "";
        switch(this.currentSkillDmgType){
          case 0:
            this.currentSkillDmgTypeName = "SLASH";  
            break;
          case 1:
            this.currentSkillDmgTypeName = "STAB";  
            break;
          case 2:
            this.currentSkillDmgTypeName = "BASH";  
            break;            
        }
        
        var durabilityFactor = this.currentDurability/weapon[this.wepCount].durability
        var calAttack = Math.floor(weapon[this.wepCount].skill[i].attack*durabilityFactor*this.currentWepLevel)
        if(calAttack < 1){
          calAttack = 1
        }
        ////console.log("DURABILITY "+durabilityFactor )
        this.currentSkillsText.text = "BASIC: "+weapon[this.wepCount].skill[i].name+'\nDeal '+calAttack+" "+this.currentSkillDmgTypeName+" Damage";
        this.currentSkillsText.fill= '#fff';
        //this.currentSkillsText.fontSize = 48;     
        this.distY += 150        
        try{
          var cost = weapon[this.wepCount].craft[i].count
          cost = cost*((weapon[this.wepCount].durability-(weapon[this.wepCount].durability-this.currentDurability))/weapon[this.wepCount].durability)
          if(cost < 1){
            cost = 1
          }
          if (localStorage.getItem(weapon[this.wepCount].craft[i].name+" Count") === null) {
            localStorage.setItem(weapon[this.wepCount].craft[i].name+" Count",0)
          }              
          var itemCount = parseInt(localStorage.getItem(weapon[this.wepCount].craft[i].name+" Count"))     
          if(itemCount < cost ){

            
            if(this.currentDurability < weapon[this.wepCount].durability){
              this.submitButton.loadTexture("repairNo")
              //this.craftButton.loadTexture("repair")          
            }
            if(this.currentDurability >= weapon[this.wepCount].durability){
              this.currentDurability = weapon[this.wepCount].durability
              
              //this.craftButton.loadTexture("upgrade")          
            }   
            if(this.hasCrafted == 0){
              this.submitButton.loadTexture("craftNo")
            }            
            
            
          }           
        }
        catch(e){
          
        }
          
      }      
      this.ultSkill.loadTexture(weapon[this.wepCount].ultSkill.name); 

      this.currentSkillDmgType = weapon[this.wepCount].ultSkill.attackType
      this.currentSkillDmgTypeName = "";
      switch(this.currentSkillDmgType){
        case 0:
          this.currentSkillDmgTypeName = "SLASH";  
          break;
        case 1:
          this.currentSkillDmgTypeName = "STAB";  
          break;
        case 2:
          this.currentSkillDmgTypeName = "BASH";  
          break;            
      }      
        var durabilityFactor = this.currentDurability/weapon[this.wepCount].durability
        var calAttack = weapon[this.wepCount].ultSkill.attack//Math.floor(weapon[this.wepCount].ultSkill.attack*durabilityFactor*this.currentWepLevel)
        if(calAttack < 1){
          calAttack = 1
        }      
      this.ultSkillText.text = "ULT: "+weapon[this.wepCount].ultSkill.name+'\nDeal '+calAttack*this.currentWepLevel+" "+this.currentSkillDmgTypeName+" Damage\nup to "+weapon[this.wepCount].ultSkillMax+" times.";
      this.ultSkillText.fill= '#fff';
      //this.ultSkillText.fontSize = 48;
 
      for(var i = 0; i< 3;i++){
        if(i < weapon[this.wepCount].craft.length){
          //this.currentCraft[i].alpha = 1;
          //this.currentCraftText[i].alpha = 1;
          this.currentCraft[i].loadTexture(weapon[this.wepCount].craft[i].name); 
   
          //this.currentCraftText[i].align ='center'          
          var inveNum = localStorage.getItem(weapon[this.wepCount].craft[i].name+" Count")
          this.currentCraftText[i].fill = 'white'
          if(inveNum == null){
            inveNum = 0;
            this.currentCraftText[i].fill ='red'
          }
          if(weapon[this.wepCount].craft[i].count*durabilityFactor > inveNum){
            this.currentCraftText[i].fill ='red'
          }
          
          this.currentCraftText[i].text = weapon[this.wepCount].craft[i].name+" \n"+inveNum+"/"+Math.floor(weapon[this.wepCount].craft[i].count*durabilityFactor)
          //this.currentCraftText[i].x = this.currentCraft[i].x+200
        }
        else{
           //this.currentCraft[i].alpha = 0;
           this.currentCraftText[i].text =""
        }


      }
      //upgrade
      if(this.currentDurability >= weapon[this.wepCount].durability && this.hasCrafted == 1){
        for(var i = 0; i< 3;i++){
          if(i == 0){
            //this.currentCraft[i].alpha = 1;
            //this.currentCraftText[i].alpha = 1;   
            this.currentCraft[i].loadTexture("blueprint"); 
            this.currentCraft[i].loadTexture("blueprint"); 

            this.currentCraftText[i].text = "Blueprint\nx"+localStorage.getItem("blueprintCount")+"/"+ this.currentWepLevel 
            var inveNum = parseInt(localStorage.getItem("blueprintCount"))
            this.currentCraftText[i].fill = 'white'
            if(inveNum == null){
              inveNum = 0;
              this.currentCraftText[i].fill ='red'
              this.submitButton.loadTexture("upgradeNo")
            }
            if(this.currentWepLevel > inveNum){
              this.currentCraftText[i].fill ='red'
              this.submitButton.loadTexture("upgradeNo")
            }
                      
          }
          else{
          this.currentCraft[i].alpha = 0;
          this.currentCraftText[i].alpha = 0;            
          }
        }
        
        //this.craftButton.loadTexture("upgrade")          
      }       
    
    },
    left: function () {
      if(this.craftBackdrop.alpha != 1){
        this.wepCount--
        for(var i = 0; i < 100;i++){
          if(weapon[this.wepCount] != null){

          }
          else{
            this.wepCount--;
          }

        }      
        if(this.wepCount < 1){
          this.wepCount = 99;
          for(var i = 100; i > 1;i--){
            if(weapon[this.wepCount] != null){

            }
            else{
              this.wepCount--;
            }

          }  
        }        
      }


    },
    right: function () {  
      if(this.craftBackdrop.alpha != 1){
        this.wepCount++
        for(var i = 0; i < 100;i++){
          if(weapon[this.wepCount] != null){

          }
          else{
            this.wepCount++
          }

        }      
        if(this.wepCount >= 100){
          this.wepCount = 1;
        }        
      }


    },
    craft: function () {
      if(weapon[this.wepCount].id == 0 || weapon[this.wepCount].id == 1 || weapon[this.wepCount].id == 2 || weapon[this.wepCount].id == 3){
        this.craftButton.loadTexture("craftNo") 
      } 
      else{
        this.ping.play();
      
        this.currentWep2.alpha = 1;
        this.currentWep2Text.alpha = 1;
        if(this.currentDurability >= weapon[this.wepCount].durability){
          for(var i = 0; i< 3;i++){
            if(i == 0){
              //this.currentCraft[i].alpha = 1;
              //this.currentCraftText[i].alpha = 1;   

            }
            else{
            this.currentCraft[i].alpha = 0;
            this.currentCraftText[i].alpha = 0;            
            }
          }

          //this.craftButton.loadTexture("upgrade")          
        }       

        //this.currentWepLevel = 4
        this.currentWep2.loadTexture(weapon[this.wepCount].name)
        this.currentWep2Text.text = weapon[this.wepCount].name
        for(var i = 0; i< this.currentWepLevel ;i++){
          if(i != 0){
            this.currentWep2Text.text += "+"
          }


          if(i == this.currentWepLevel-1){
             this.currentWep2Text.text +="\n DURABILITY: "+this.currentDurability+"/"+weapon[this.wepCount].durability
          }
        }      
        this.submitButton.x = this.game.width/2
        this.cancelButton.x = this.game.width/2
        this.craftBackdrop.alpha = 1;
        for(var i = 0; i< 3;i++){
          if(i < weapon[this.wepCount].craft.length){
            this.currentCraft[i].alpha = 1;
            this.currentCraftText[i].alpha = 1;

          }
          else{

          }


        }         
        /*if(this.hasCrafted == 0){

          var cost1 = weapon[this.wepCount].craft[0].count
          var itemCount1 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[0].name+" Count"))
          var cost2 = weapon[this.wepCount].craft[1].count
          var itemCount2 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[1].name+" Count"))        
          if(itemCount1 > cost1 && itemCount2 > cost2){
            itemCount1 -= cost1;
            itemCount2 -= cost2;
            localStorage.setItem(weapon[this.wepCount].craft[0].name+" Count",itemCount1)
            localStorage.setItem(weapon[this.wepCount].craft[1].name+" Count",itemCount2)
            localStorage.setItem("crafted"+weapon[this.wepCount].id, 1)
          }
        }*/
      }
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
     this.game.state.start('warden')
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    },
    craft2: function () {   
      if(this.hasCrafted == 0){
        
        var cost1 = weapon[this.wepCount].craft[0].count
        var itemCount1 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[0].name+" Count"))
        var cost2 = weapon[this.wepCount].craft[1].count
        var itemCount2 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[1].name+" Count"))        
        if(itemCount1 > cost1 && itemCount2 > cost2){
          this.ping.play();
          itemCount1 -= cost1;
          itemCount2 -= cost2;
          localStorage.setItem(weapon[this.wepCount].craft[0].name+" Count",itemCount1)
          localStorage.setItem(weapon[this.wepCount].craft[1].name+" Count",itemCount2)
          localStorage.setItem("crafted"+weapon[this.wepCount].id, 1)
        }
      }
      
      else if(this.currentDurability < weapon[this.wepCount].durability){
        //this.submitButton.loadTexture("repair")
        //this.craftButton.loadTexture("repair")  
      
        var cost1 = Math.floor(weapon[this.wepCount].craft[0].count*((weapon[this.wepCount].durability-(weapon[this.wepCount].durability-this.currentDurability))/weapon[this.wepCount].durability))
          if(cost1 < 1){
            cost1 = 1
          }      
        var itemCount1 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[0].name+" Count"))
        var cost2 = Math.floor(weapon[this.wepCount].craft[1].count*((weapon[this.wepCount].durability-(weapon[this.wepCount].durability-this.currentDurability))/weapon[this.wepCount].durability))
          if(cost2 < 1){
            cost2 = 1
          }           
        var itemCount2 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[1].name+" Count"))        
        if(itemCount1 >= cost1 && itemCount2 >= cost2){
          this.ping.play();
          itemCount1 -= cost1;
          itemCount2 -= cost2;
          localStorage.setItem(weapon[this.wepCount].craft[0].name+" Count",itemCount1)
          localStorage.setItem(weapon[this.wepCount].craft[1].name+" Count",itemCount2)
          //localStorage.setItem("crafted"+weapon[this.wepCount].id, 1)
          localStorage.setItem(weapon[this.wepCount].id+"-CurrentDurability", weapon[this.wepCount].durability)  
          this.currentDurability = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-CurrentDurability"));
        }
        this.currentWep2.loadTexture(weapon[this.wepCount].name)
        this.currentWep2Text.text = weapon[this.wepCount].name
        for(var i = 0; i< this.currentWepLevel ;i++){
          if(i != 0){
            this.currentWep2Text.text += "+"
          }


          if(i == this.currentWepLevel-1){
             this.currentWep2Text.text +="\n DURABILITY: "+this.currentDurability+"/"+weapon[this.wepCount].durability
          }
        }   
      }
      else if(this.currentDurability >= weapon[this.wepCount].durability){
        //this.currentDurability = weapon[this.wepCount].durability
        //this.submitButton.loadTexture("upgrade")
        this.craftButton.loadTexture("upgrade")      
        var cost1 =this.currentWepLevel 
        var itemCount1 = parseInt(localStorage.getItem("blueprintCount"))
        //console.log(itemCount1+" "+cost1+" "+(itemCount1 >= cost1))
        if(itemCount1 >= cost1 ){
          this.ping.play();
          itemCount1 -= cost1;
          if(itemCount1 < 0){
            itemCount1 = 0;
          }
          localStorage.setItem("blueprintCount",itemCount1)
          localStorage.setItem(weapon[this.wepCount].id+"-Level",this.currentWepLevel+1)
          this.currentWepLevel = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-Level"))  
        } 
        this.currentWep2.loadTexture(weapon[this.wepCount].name)
        this.currentWep2Text.text = weapon[this.wepCount].name
        for(var i = 0; i< this.currentWepLevel ;i++){
          if(i != 0){
            this.currentWep2Text.text += "+"
          }


          if(i == this.currentWepLevel-1){
             this.currentWep2Text.text +="\n DURABILITY: "+this.currentDurability+"/"+weapon[this.wepCount].durability
          }
        }  
      }        
    },   
    cancel: function () {   
      this.ping.play();
      //this.bgSound.stop();        
      this.currentWep2.alpha = 0;
      this.currentWep2Text.alpha = 0;
      this.submitButton.x = this.game.width+1000
      this.cancelButton.x = this.game.width+1000   
      this.craftBackdrop.alpha = 0;
      for(var i = 0; i< 3;i++){
        this.currentCraft[i].alpha = 0;
        this.currentCraftText[i].alpha = 0;        

      }
    }        
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Craft = Craft;

}());
