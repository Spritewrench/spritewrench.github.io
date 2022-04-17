(function() {
    'use strict';
  
    function Craft() {
      this.titleTxt = null;
      this.startTxt = null;
    }
  
    Craft.prototype = {
  
      create: function () {
        this.craftLength= weapon.filter(function(value) { 
          //console.log(value)
          return value !== undefined 
        }).length - 3     
        //alert(craftLength)
  
        this.game.load.script('gray', 'js/lib/Gray.js');
        this.gray = this.game.add.filter('Gray');
  
        var x = this.game.width / 2
          , y = this.game.height / 2;
        this.map = this.add.sprite(0, 0, 'mainBG');
        this.map.width = this.game.width;
        this.map.height = this.game.height;        
        this.map.alpha = 1;
        
  
        this.newSign = this.add.sprite(50, 50, "new");  
        this.newSign.width = 150;
        this.newSign.height = 50;      
        this.newSign.angle = -15
  
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
        
        this.equipped= this.add.sprite(this.game.width/2, 99, 'equipped');  
        this.equipped.width = 150;
        this.equipped.height = 150;
        this.equipped.anchor.setTo(0.5, 0.5);     
        this.equipped.alpha = 0;
        
        this.wepCount = parseInt(localStorage.getItem("nextWep"))//1
        
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
        
        this.SkillsText = this.add.text(65, this.currentWepText.y+70,"SKILLS",{font:'LondrinaSolid-Black'});
        this.SkillsText.origX = this.SkillsText.x
        this.SkillsText.fill= '#fff';
        this.SkillsText.anchor.setTo(0.5, 0.5);     
        this.SkillsText.fontSize = 24;     
  
        this.forgeSound = [];
        for(var i = 1; i <= 3;i++){
            this.forgeSound[i] = this.add.audio('forge'+i); 
            //this.spellSound[i] = this.add.audio('spell'+i); 
        }
          
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
          this.currentSkillsText = this.add.text(this.currentSkills[i].x+250, this.currentSkills[0].y+55+this.distY, "BASIC: "+weapon[this.wepCount].skill[i].name+'\nDeal '+weapon[this.wepCount].skill[i].attack+" "+this.currentSkillDmgTypeName+" Damage\nCOMBO LIMIT: ",{font:'LondrinaSolid-Black'});
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
        
        this.wepCountText = this.add.text(this.game.width-50, 25, this.wepCount+"/"+this.craftLength,{font:'LondrinaSolid-Black'});
        this.wepCountText.fill= '#fff';
        this.wepCountText.anchor.setTo(0.5, 0.5);     
        this.wepCountText.fontSize = 24;    
  
        this.currentCraft = [3]
        this.currentCraftText = [3];
        var dist = 0;
        
        this.equipSound = this.add.audio('equip'); 
  
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
        this.submitButton.origWidth = this.submitButton.width
        this.submitButton.origHeight = this.submitButton.height
  
        this.cancelButton = this.add.sprite(this.game.width+1000, this.game.height-50, "cancel");  
        this.cancelButton.anchor.setTo(0.5, 0.5); 
        this.cancelButton.inputEnabled = true;
        this.cancelButton.events.onInputDown.add(this.cancel, this);   
        this.cancelButton.alpha = 1;
        
        this.currentRank = parseInt(localStorage.getItem("currentRank"))
  
        
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
                  this.bgSound.volume = 0.3;
                  //this.introCheck = true;
              }        
    if (localStorage.getItem("firstVisit-craft") === null ) {
        localStorage.setItem("firstVisit-craft",1);
      /*  setTimeout(function () {
          alert("Welcome to the Crafting Screen!\n Craft,Equip , Repair and Upgrade your weapons. ")
        }, 1000);      
        */
  
    }  
    
    this.craftFlash = this.add.sprite(0, 0, 'craftFlash');
    this.craftFlash.alpha = 0;
    this.craftFlash.width = this.game.width;
    this.craftFlash.height = this.game.height;  
  
  
      },
  
      update: function () {
  
  
        this.craftFlash.alpha += ((0) - this.craftFlash.alpha ) * 0.1; 
        this.submitButton.width += (this.submitButton.origWidth - this.submitButton.width) * 0.1; 
        this.submitButton.height += (this.submitButton.origHeight - this.submitButton.height) * 0.1; 
  
        if(this.currentWepLevel >= 1){
          this.currentWepText.fill = "white"
          this.currentWep2Text.fill = "white"
        }
        if(this.currentWepLevel >= 5){
          this.currentWepText.fill = "#25D035"
          this.currentWep2Text.fill = "#25D035"
        }
        if(this.currentWepLevel >= 15 ){
          this.currentWepText.fill = "#DF37C8"
          this.currentWep2Text.fill = "#DF37C8"
        }
        if(this.currentWepLevel >= 25){
          this.currentWepText.fill = "#D57E36"
          this.currentWep2Text.fill = "#D57E36"
        }
        
        if(this.wepCount > 90 && this.wepCount <= 99){
          this.wepCountText.text = (this.wepCount-81)+"/"+this.craftLength
        }
        else if(this.wepCount >= 200 && this.wepCount <= 299){
          this.wepCountText.text = (this.wepCount-181)+"/"+this.craftLength
        }      
        else{
          this.wepCountText.text = this.wepCount+"/"+this.craftLength
        }
  
        if(localStorage.getItem(weapon[this.wepCount].id+"-isNew") !== null){
          this.newSign.alpha = 0;
        }
        else{
          this.newSign.alpha = 1;
        }
              if (localStorage.getItem(weapon[this.wepCount].id+"-Level") === null) {
                localStorage.setItem(weapon[this.wepCount].id+"-Level",1)
              }
              if (localStorage.getItem("blueprintCount") === null) {
                localStorage.setItem("blueprintCount",0)
              }            
              this.currentWepLevel = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-Level"))     
        //weapons never degradeg
        localStorage.setItem(weapon[this.wepCount].id+"-CurrentDurability", weapon[this.wepCount].durability)           
        
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
        
  
        this.isWepShiny = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-isShiny")) 
        if(this.isWepShiny == 1){
          this.currentWep.loadTexture(weapon[this.wepCount].name+"-variant")
        }
        //console.log(this.currentWep.filters)
        if(parseInt(localStorage.getItem("wep"+this.wepCount+"Craftable")) == 0 && parseInt(localStorage.getItem("crafted"+weapon[this.wepCount].id)) == 0 ){
          //this.wepCount--;
          this.currentWep.filters = [this.gray];
          this.newSign.alpha = 0;
          
        }
        else{
          this.currentWep.filters = null
        }
        
        
  
        this.currentWep.anchor.setTo(0.5, 0.5);    
        this.currentWepText.text = weapon[this.wepCount].name
        if(this.isWepShiny == 1){
          this.currentWepText.text = "Prismatic "+weapon[this.wepCount].name
        }      
        //this.currentWepLevel = 3;
        var wepWeight =""
        switch(weapon[this.wepCount].weight){
          case 6:
            wepWeight = "LIGHT"
            break;
          case 4:
            wepWeight = "MEDIUM"   
            break;
          case 2:
            wepWeight = "HEAVY"
            break;             
               
        }
        this.currentWepText.text += "\n WEIGHT: "+wepWeight+" - LEVEL: "+this.currentWepLevel
        for(var i = 0; i< this.currentWepLevel ;i++){
          if(i != 0){
            //this.currentWepText.text += "+"
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
          durabilityFactor = 1;
          var calAttack = Math.floor(weapon[this.wepCount].skill[i].attack*durabilityFactor*this.currentWepLevel)
          if(calAttack < 1){
            calAttack = 1
          }
          ////console.log("DURABILITY "+durabilityFactor )
          this.currentSkillsText.text = "BASIC: "+weapon[this.wepCount].skill[i].name+'\nDeals '+calAttack+" "+this.currentSkillDmgTypeName+" Damage";
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
                
                this.submitButton.loadTexture("upgrade")          
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
          var calAttack = weapon[this.wepCount].ultSkill.attack*this.currentWepLevel//Math.floor(weapon[this.wepCount].ultSkill.attack*durabilityFactor*this.currentWepLevel)
          if(calAttack < 1){
            calAttack = 1
          }      
          var calAttack = Math.floor(weapon[this.wepCount].skill[0].attack*this.currentWepLevel)
        this.ultSkillText.text = "ULT: "+weapon[this.wepCount].ultSkill.name+'\nDeal '+weapon[this.wepCount].ultSkill.attack*this.currentWepLevel+" "+this.currentSkillDmgTypeName+" Damage\n Multplied by Current Combo";
        this.ultSkillText.fill= '#fff';
  
        //hide ult info for potions
        if(this.wepCount >= 200 && this.wepCount <= 299){
          this.ultSkill.alpha = 0;  
          this.ultSkillText.alpha = 0;  
        } 
        else{
          this.ultSkill.alpha = 1;  
          this.ultSkillText.alpha = 1;          
        }         
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
            var cost = Math.floor(weapon[this.wepCount].craft[i].count*durabilityFactor)
            if(cost < 1){
              cost  = 1
            }
            if( cost > inveNum){
              this.currentCraftText[i].fill ='red'
            }
            
            this.currentCraftText[i].text = weapon[this.wepCount].craft[i].name+" \n"+inveNum+"/"+cost
            //this.currentCraftText[i].x = this.currentCraft[i].x+200
          }
          else{
             //this.currentCraft[i].alpha = 0;
             this.currentCraftText[i].text =""
          }
  
  
        }
        //upgrade
        if(this.currentDurability >= weapon[this.wepCount].durability && this.hasCrafted == 1){
          //console.log("upgrade")
          for(var i = 0; i< 3;i++){
            if(i == 0){
              //this.currentCraft[i].alpha = 1;
              //this.currentCraftText[i].alpha = 1;   
              this.currentCraft[i].loadTexture("blueprint"); 
              //this.currentCraft[i].loadTexture("blueprint"); 
  
              this.currentCraftText[i].text = "HUNTER RANK: "+(this.currentWepLevel+1)+" ("+this.currentRank+")\nBLUEPRINT x"+localStorage.getItem("blueprintCount")+"/"+this.currentWepLevel
              if((this.currentWepLevel+1) >= gameConfig.maxRank){
                this.currentCraftText[i].text = "HUNTER RANK: "+gameConfig.maxRank+" ("+this.currentRank+")\nBLUEPRINT x"+localStorage.getItem("blueprintCount")+"/"+this.currentWepLevel
              }
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
              if(this.currentWepLevel+1 > this.currentRank && this.currentRank != gameConfig.maxRank){
                this.currentCraftText[i].fill ='red'
                this.submitButton.loadTexture("upgradeNo")
              }            
                        
            }
  
            
            if(i == 1 && this.currentWepLevel >= weapon[this.wepCount].levelLimit){
              //console.log("shiny")        
              this.currentCraft[i].loadTexture("Prismatic Gem"); 
              //this.currentCraft[i].loadTexture("blueprint"); 
  
  
              var inveNum2 = parseInt(localStorage.getItem("Prismatic Gem Count"))      
              this.currentCraftText[i].fill = 'white'
              
              if(inveNum2 == null || isNaN(inveNum2)){
                inveNum2 = 0;
                localStorage.setItem("Prismatic Gem Count",0)
                this.currentCraftText[i].fill ='red'
                this.submitButton.loadTexture("upgradeNo")
              }
              //console.log(inveNum2)
              this.currentCraftText[i].text = "Prismatic Gem\nx"+inveNum2+"/"+(this.currentWepLevel*5)            
              if((this.currentWepLevel*5) > inveNum2){
                this.currentCraftText[i].fill ='red'
                this.submitButton.loadTexture("upgradeNo")
              }
              if(this.currentWepLevel > this.currentRank && this.currentRank != gameConfig.maxRank){
                this.currentCraftText[i].fill ='red'
                this.submitButton.loadTexture("upgradeNo")
              }            
            }
            
            if(i != 0 && this.currentWepLevel < weapon[this.wepCount].levelLimit){
              this.currentCraft[i].alpha = 0;
              this.currentCraftText[i].alpha = 0;            
            }
          }
          
          //this.craftButton.loadTexture("upgrade")          
        }  
        
        if(weapon[this.wepCount].id != 0 && weapon[this.wepCount].id != 1 && weapon[this.wepCount].id != 2 && weapon[this.wepCount].id != 3){
          if (localStorage.getItem(weapon[this.wepCount].craft[0].name+" Count") === null) {
            localStorage.setItem(weapon[this.wepCount].craft[0].name+" Count",0)
          } 
          if (localStorage.getItem(weapon[this.wepCount].craft[1].name+" Count") === null) {
            localStorage.setItem(weapon[this.wepCount].craft[1].name+" Count",0)
          }         
          var cost1 = weapon[this.wepCount].craft[0].count
          var itemCount1 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[0].name+" Count"))
          var cost2 = weapon[this.wepCount].craft[1].count
          var itemCount2 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[1].name+" Count"))        
  
          if((itemCount1 < cost1 || itemCount2 < cost2) && (this.hasCrafted == 0)){
            this.submitButton.loadTexture("craftNo") 
          }         
        }
       
  
      
      },
      left: function () {
        if(this.craftBackdrop.alpha != 1){
          //this.wepCount--
          if(this.wepCount != 200){
            this.wepCount--;
          }
          else{
            this.wepCount = 99;
          }        
          for(var i = 100; i > 1;i--){
            if(weapon[this.wepCount] != null){
  
              //console.log(this.wepCount+" "+parseInt(localStorage.getItem("wep"+this.wepCount+"Craftable"))+" "+parseInt(localStorage.getItem("crafted"+weapon[this.wepCount].id)))
              if(parseInt(localStorage.getItem("wep"+this.wepCount+"Craftable")) == 0 && parseInt(localStorage.getItem("crafted"+weapon[this.wepCount].id)) == 0 ){
                //this.wepCount--;
                
                
              }
            }
            else{
              this.wepCount--;
            }
  
          } 
  
          if(this.wepCount < 1){
            //this.wepCount = 200;
            this.wepCount = 99;
            for(var i = 100; i > 1;i--){
              if(weapon[this.wepCount] != null){
                if(parseInt(localStorage.getItem("wep"+this.wepCount+"Craftable")) == 0 && parseInt(localStorage.getItem("crafted"+weapon[this.wepCount].id)) == 0 ){
                  //this.wepCount--;
                  //this.currentWep.filters = [this.gray];
                }
              }
              else{
                if(this.wepCount != 200){
                  this.wepCount--;
                }
                else{
                  this.wepCount = 99;
                }
              }
  
            }  
          }        
        }
  
  
      },
      right: function () {  
        if(this.craftBackdrop.alpha != 1){
          
          if(this.wepCount == 99){
            //this.wepCount = 200;
            this.wepCount = 1;
          }  
          else if(this.wepCount == 200){
            this.wepCount = 1;
          } 
          else{
            this.wepCount++
          }  
             
          for(var i = 0; i < 100;i++){
            if(weapon[this.wepCount] != null){
              
              if(parseInt(localStorage.getItem("wep"+this.wepCount+"Craftable")) == 0 && parseInt(localStorage.getItem("crafted"+weapon[this.wepCount].id)) == 0 ){
                //this.wepCount++
              }
            }
            else{
              if(this.wepCount == 99){
              //this.wepCount = 200;
              this.wepCount = 1;
              }  
              else if(this.wepCount == 200){
                this.wepCount = 1;
              } 
              else{
                this.wepCount++
              }  
            }
  
  
  
  
          }      
         
        }
  
  
      },
      craft: function () {
        
        var cost1 = weapon[this.wepCount].craft[0].count
        var itemCount1 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[0].name+" Count"))
        var cost2 = weapon[this.wepCount].craft[1].count
        var itemCount2 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[1].name+" Count"))        
        //console.log(cost1+" "+itemCount1+" \n"+cost2+" "+itemCount2)
        //|| (itemCount1 < cost1 || itemCount2 < cost2)
        if(weapon[this.wepCount].id == 0 || weapon[this.wepCount].id == 1 || weapon[this.wepCount].id == 2 || weapon[this.wepCount].id == 3  ){
          alert("cant craft")
          this.craftButton.loadTexture("craftNo") 
        } 
        else{
          this.ping.play();
          
  
          this.currentWep2.alpha = 1;
          this.currentWep2Text.alpha = 1;
          if(this.currentDurability >= weapon[this.wepCount].durability){
            for(var i = 0; i< 3;i++){
              if(i == 0 || (i == 1 && this.currentWepLevel >= weapon[this.wepCount].levelLimit) ){
                //this.currentCraft[i].alpha = 1;
                //this.currentCraftText[i].alpha = 1;   
  
              }
              else{
                //this.currentCraft[i].alpha = 0;
                //this.currentCraftText[i].alpha = 0;            
              }
            }
  
            //this.craftButton.loadTexture("upgrade")          
          }       
  
          //this.currentWepLevel = 4
          this.currentWep2.loadTexture(weapon[this.wepCount].name)
          if(this.isWepShiny == 1){
            this.currentWep2.loadTexture(weapon[this.wepCount].name+"-variant")
          }        
          this.currentWep2Text.text = weapon[this.wepCount].name
          if(this.isWepShiny == 1){
            this.currentWep2Text.text = "Prismatic "+weapon[this.wepCount].name
          }        
        var wepWeight =""
        switch(weapon[this.wepCount].weight){
          case 6:
            wepWeight = "LIGHT"
            break;
          case 4:
            wepWeight = "MEDIUM"   
            break;
          case 2:
            wepWeight = "HEAVY"
            break;             
               
        }
        //this.currentWepText.text += "\n WEIGHT: "+wepWeight+" - LEVEL: "+this.currentWepLevel        
          this.currentWep2Text.text += "\n WEIGHT: "+wepWeight+" - LEVEL: "+this.currentWepLevel 
          for(var i = 0; i< this.currentWepLevel ;i++){
            if(i != 0){
              //this.currentWep2Text.text += "+"
            }
  
  
            if(i == this.currentWepLevel-1){
               //this.currentWep2Text.text +="\n DURABILITY: "+this.currentDurability+"/"+weapon[this.wepCount].durability
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
        //this.ping.play();
        if(this.hasCrafted == 1){
          ////console.log(weapon[this.wepCount].id)
          this.equipSound.play();
          localStorage.setItem("equip0",weapon[this.wepCount].id)
  
          if(localStorage.getItem(weapon[this.wepCount].id+"-isNew") === null){
            localStorage.setItem(weapon[this.wepCount].id+"-isNew",1)
          }        
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
        
        
          //console.log(this.currentDurability+" "+weapon[this.wepCount].durability+" "+this.currentWepLevel+" "+this.currentRank)
          var cost1 = weapon[this.wepCount].craft[0].count
          var itemCount1 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[0].name+" Count"))
          var cost2 = weapon[this.wepCount].craft[1].count
          var itemCount2 = parseInt(localStorage.getItem(weapon[this.wepCount].craft[1].name+" Count"))          
        if(this.hasCrafted == 0 ){
          //alert("Crast")
  
          
          if(itemCount1 >= cost1 && itemCount2 >= cost2){
            try{
              if(!gameConfig.isDebug){    
              GameAnalytics("addProgressionEvent", "Complete", "craftedNew");    
              GameAnalytics("addProgressionEvent", "Complete", "crafted"+weapon[this.wepCount].id);  
              }
            }
            catch(e){
    
            }           
            this.craftFlash.alpha = 1;
  
            //alert("Crast")
            var ran = 1//Math.floor(Math.random() * 3)+1;
            if(!this.forgeSound[ran].isPlaying){
                this.forgeSound[ran].play();
            }     
  
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
          if(this.isWepShiny == 1){
            this.currentWep2Text.text = "Prismatic "+weapon[this.wepCount].name
          }
        var wepWeight =""
        switch(weapon[this.wepCount].weight){
          case 6:
            wepWeight = "LIGHT"
            break;
          case 4:
            wepWeight = "MEDIUM"   
            break;
          case 2:
            wepWeight = "HEAVY"
            break;             
               
        }
        //this.currentWepText.text += "\n WEIGHT: "+wepWeight+" - LEVEL: "+this.currentWepLevel              
          this.currentWep2Text.text += "\n WEIGHT: "+wepWeight+" - LEVEL: "+this.currentWepLevel  
          for(var i = 0; i< this.currentWepLevel ;i++){
            if(i != 0){
              //this.currentWep2Text.text += "+"
            }
  
  
            if(i == this.currentWepLevel-1){
               //this.currentWep2Text.text +="\n DURABILITY: "+this.currentDurability+"/"+weapon[this.wepCount].durability
            }
          }   
        }
        else if(this.currentDurability >= weapon[this.wepCount].durability && ((this.currentWepLevel+1) <= this.currentRank || this.currentRank == gameConfig.maxRank)){
          //alert("!")
          //this.currentDurability = weapon[this.wepCount].durability
          //this.submitButton.loadTexture("upgrade")
          
          this.craftButton.loadTexture("upgrade")      
          var cost1 =this.currentWepLevel 
          var cost2 =this.currentWepLevel*5 
          var itemCount1 = parseInt(localStorage.getItem("blueprintCount"))
          var itemCount2 = parseInt(localStorage.getItem("Prismatic Gem Count"))
          //console.log(itemCount1+" "+cost1+" "+(itemCount1 >= cost1))
          if(this.currentWepLevel >= weapon[this.wepCount].levelLimit){
            if(itemCount1 >= cost1 && itemCount2 >= cost2){
  
              try{
                if(!gameConfig.isDebug){    
                GameAnalytics("addProgressionEvent", "Complete", "upgradedPismatic");    
                GameAnalytics("addProgressionEvent", "Complete", "upgraded"+weapon[this.wepCount].id);  
                }
              }
              catch(e){
      
              } 
  
              this.craftFlash.alpha = 1;
              this.submitButton.width += 20
              this.submitButton.height += 20;          
              this.ping.play();
              itemCount1 -= cost1;
              if(itemCount1 < 0){
                itemCount1 = 0;
              }
              itemCount2 -= cost2;
              if(itemCount2 < 0){
                itemCount2 = 0;
              }            
              localStorage.setItem("blueprintCount",itemCount1)
              localStorage.setItem("Prismatic Gem Count",itemCount2)
              
              localStorage.setItem(weapon[this.wepCount].id+"-Level",this.currentWepLevel+1)
              this.currentWepLevel = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-Level"))  
              localStorage.setItem(weapon[this.wepCount].id+"-isShiny",1) 
            }           
          }
          else{
            if(itemCount1 >= cost1 ){
  
              try{
                if(!gameConfig.isDebug){    
                GameAnalytics("addProgressionEvent", "Complete", "upgradedWep");    
                GameAnalytics("addProgressionEvent", "Complete", "upgraded"+weapon[this.wepCount].id);  
                }
              }
              catch(e){
      
              }             
              this.craftFlash.alpha = 1;
              this.submitButton.width += 20
              this.submitButton.height += 20;                      
              this.ping.play();
              itemCount1 -= cost1;
              if(itemCount1 < 0){
                itemCount1 = 0;
              }
              localStorage.setItem("blueprintCount",itemCount1)
              localStorage.setItem(weapon[this.wepCount].id+"-Level",this.currentWepLevel+1)
              this.currentWepLevel = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-Level"))  
              if(this.currentWepLevel == weapon[this.wepCount].levelLimit){
                this.currentCraft[1].alpha = 1;
                this.currentCraftText[1].alpha = 1;  
              }            
            }           
            
          }
  
          this.currentWep2.loadTexture(weapon[this.wepCount].name)
          this.isWepShiny = parseInt(localStorage.getItem(weapon[this.wepCount].id+"-isShiny")) 
          if(this.isWepShiny == 1){
            this.currentWep2.loadTexture(weapon[this.wepCount].name+"-variant")
          }        
          this.currentWep2Text.text = weapon[this.wepCount].name
          if(this.isWepShiny == 1){
            this.currentWep2Text.text = "Prismatic "+weapon[this.wepCount].name
          }        
        var wepWeight =""
        switch(weapon[this.wepCount].weight){
          case 6:
            wepWeight = "LIGHT"
            break;
          case 4:
            wepWeight = "MEDIUM"   
            break;
          case 2:
            wepWeight = "HEAVY"
            break;             
               
        }
        //this.currentWepText.text += "\n WEIGHT: "+wepWeight+" - LEVEL: "+this.currentWepLevel            
          this.currentWep2Text.text += "\n WEIGHT: "+wepWeight+" - LEVEL: "+this.currentWepLevel   
          for(var i = 0; i< this.currentWepLevel ;i++){
            if(i != 0){
              //this.currentWep2Text.text += "+"
            }
  
  
            if(i == this.currentWepLevel-1){
               //this.currentWep2Text.text +="\n DURABILITY: "+this.currentDurability+"/"+weapon[this.wepCount].durability
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
  