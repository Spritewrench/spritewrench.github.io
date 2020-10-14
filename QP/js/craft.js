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
      this.map = this.add.sprite(0, 0, 'craftBG');
      this.map.width = this.game.width;
      this.map.height = this.game.height;        
      this.map.alpha = 1;
  
      this.arrowLeft = this.add.sprite(100, 300, "craftArrowLeft");  
      this.arrowLeft.inputEnabled = true;
      this.arrowLeft.events.onInputDown.add(this.left, this);  
      
      this.arrowRight = this.add.sprite(this.game.width-200, 300, "craftArrowRight");  
      this.arrowRight.inputEnabled = true;
      this.arrowRight.events.onInputDown.add(this.right, this);        
      
      this.biome = parseInt(localStorage.getItem("biome"));
      this.returnButton = this.add.sprite(this.game.width/2-200, this.game.height-210, "return_"+this.biome+"MINI");  
      this.returnButton.width =  380;
      this.returnButton.height = 220;      
      this.returnButton.inputEnabled = true;
      this.returnButton.events.onInputDown.add(this.onDown, this);     
      
      
      this.wepCount = 1;
      this.currentWep = this.add.sprite(this.game.width/2, 150, weapon[this.wepCount].name);  
      this.currentWep.width = 250;
      this.currentWep.height = 250;
      this.currentWep.anchor.setTo(0.5, 0.5);     
      this.currentWepText = this.add.text(this.game.width/2,350, weapon[this.wepCount].name,{font:'LondrinaSolid-Black'});
      this.currentWepText.fill= '#fff';  
      this.currentWepText.fontSize = 70;  
      this.currentWepText.anchor.setTo(0.5, 0.5); 
      this.wep = [];
      for(var i = 0; i < 100;i++){
        if(weapon[i] != null){
          //console.log(i);
        }
        else{
          i++
        }
        
      }
      this.currentSkills = []
      this.distY = 0;
      for(var i = 0; i< weapon[this.wepCount].skill.length;i++){
        this.currentSkills[i] = this.add.sprite(150, 500+this.distY, weapon[this.wepCount].skill[i].name); 
        
        this.currentSkills[i].width = 200;
        this.currentSkills[i].height = 200;
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
        this.currentSkillsText = this.add.text(400, 525+this.distY, weapon[this.wepCount].skill[i].name+'\nDeal '+weapon[this.wepCount].skill[i].attack+" "+this.currentSkillDmgTypeName+" Damage",{font:'LondrinaSolid-Black'});
        this.currentSkillsText.fill= '#fff';
        this.currentSkillsText.fontSize = 60;     
        this.distY += 150
      }
      var skillLimit = weapon[this.wepCount].skill.length-1;
      this.ultSkill = this.add.sprite(150, 800, weapon[this.wepCount].ultSkill.name); 
      this.ultSkill.width = 200;
      this.ultSkill.height = 200;       
      this.ultSkillText = this.add.text(400, this.ultSkill.y+20, weapon[this.wepCount].ultSkill.name,{font:'LondrinaSolid-Black'});
      this.ultSkillText.fill= '#fff';
      this.ultSkillText.fontSize = 60;      
      
      this.currentCraft = [3]
      this.currentCraftText = [3];
      var dist = 0;
      
      
      for(var i = 0; i< 3;i++){
        this.currentCraft[i] = this.add.sprite(250+dist, 1200, 'Small Monster Bone'); 
        this.currentCraft[i].name = 'Small Monster Bone'
        this.currentCraft[i].alpha = 0;
        
        this.currentCraft[i].width = 200;
        this.currentCraft[i].height = 200;
        this.currentCraft[i].anchor.setTo(0.5, 0.5); 
        this.currentCraftText[i] = this.add.text(265+dist,1350, "",{font:'LondrinaSolid-Black'});
        this.currentCraftText[i].fill= '#fff';  
        this.currentCraftText[i].fontSize = 40;  
        this.currentCraftText[i].wordWrap = true;
        this.currentCraftText[i].wordWrapWidth = 350;
        this.currentCraftText[i].align ='center'
        this.currentCraftText[i].anchor.setTo(0.5, 0.5); 
        dist += 500;


      }
      this.craftButton = this.add.sprite(0, this.game.height-350, "craft");  
      this.craftButton.width = 350;
      this.craftButton.height = 220;    
      this.craftButton.inputEnabled = true;
      this.craftButton.events.onInputDown.add(this.craft, this);
      
      this.equipButton = this.add.sprite(this.game.width-350, this.game.height-350, "equip");  
      this.equipButton.width = 350;
      this.equipButton.height = 220;  
      this.equipButton.inputEnabled = true;
      this.equipButton.events.onInputDown.add(this.equip, this);      
      //this.input.onDown.add(this.onDown, this);
    },

    update: function () {
      this.hasCrafted = parseInt(localStorage.getItem("crafted"+weapon[this.wepCount].id));
      if (localStorage.getItem("crafted"+weapon[this.wepCount].id) === null) {
        localStorage.setItem("crafted"+weapon[this.wepCount].id,0)
      }        
      if(this.hasCrafted == 0){
        this.equipButton.loadTexture("equipNo")
        this.craftButton.loadTexture("craft")
      }
      else{
        this.equipButton.loadTexture("equip")
        this.craftButton.loadTexture("craftNo")
      }
      var isEquipped = parseInt(localStorage.getItem("equip0"))
      
      if(isEquipped == weapon[this.wepCount].id){
        this.map.loadTexture("craftBGE")
        this.equipButton.loadTexture("equipNo")
      }
      else{
        this.map.loadTexture("craftBG")
      }
          
      this.currentWep.loadTexture(weapon[this.wepCount].name)
      this.currentWep.width = 250;
      this.currentWep.height = 250;
      this.currentWep.anchor.setTo(0.5, 0.5);    
      this.currentWepText.text = weapon[this.wepCount].name
      for(var i = 0; i< weapon[this.wepCount].skill.length;i++){
        this.currentSkills[i].loadTexture(weapon[this.wepCount].skill[i].name); 
        this.currentSkills[i].width = 200;
        this.currentSkills[i].height = 200;
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
        this.currentSkillsText.text = weapon[this.wepCount].skill[i].name+'\nDeal '+weapon[this.wepCount].skill[i].attack+" "+this.currentSkillDmgTypeName+" Damage";
        this.currentSkillsText.fill= '#fff';
        this.currentSkillsText.fontSize = 48;     
        this.distY += 150        
        try{
          var cost = weapon[this.wepCount].craft[i].count
          if (localStorage.getItem(weapon[this.wepCount].craft[i].name+" Count") === null) {
            localStorage.setItem(weapon[this.wepCount].craft[i].name+" Count",0)
          }              
          var itemCount = parseInt(localStorage.getItem(weapon[this.wepCount].craft[i].name+" Count"))     
          if(itemCount < cost ){
            this.craftButton.loadTexture("craftNo")
          }           
        }
        catch(e){
          
        }
          
      }      
      this.ultSkill.loadTexture(weapon[this.wepCount].ultSkill.name); 
      this.ultSkill.width = 200;
      this.ultSkill.height = 200;
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
      this.ultSkillText.text = weapon[this.wepCount].ultSkill.name+'\nDeal '+weapon[this.wepCount].ultSkill.attack+" "+this.currentSkillDmgTypeName+" Damage\nup to "+weapon[this.wepCount].ultSkillMax+" times.";
      this.ultSkillText.fill= '#fff';
      this.ultSkillText.fontSize = 48;
 
    
      for(var i = 0; i< 3;i++){
        //console.log(weapon[this.wepCount].craft[i].name)
        if(i < weapon[this.wepCount].craft.length){
          this.currentCraft[i].alpha = 1;
          this.currentCraft[i].loadTexture(weapon[this.wepCount].craft[i].name); 
          this.currentCraft[i].width = 150;
          this.currentCraft[i].height = 150;     
          this.currentCraftText[i].align ='center'          
          var inveNum = localStorage.getItem(weapon[this.wepCount].craft[i].name+" Count")
          this.currentCraftText[i].fill = 'white'
          if(inveNum == null){
            inveNum = 0;
            this.currentCraftText[i].fill ='red'
          }
          if(weapon[this.wepCount].craft[i].count > inveNum){
            this.currentCraftText[i].fill ='red'
          }
          this.currentCraftText[i].text = weapon[this.wepCount].craft[i].name+" \n"+inveNum+"/"+weapon[this.wepCount].craft[i].count
        }
        else{
           this.currentCraft[i].alpha = 0;
           this.currentCraftText[i].text =""
        }


      }      
    
    },
    left: function () {
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

    },
    right: function () {   
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

    },
    craft: function () {   
      if(this.hasCrafted == 0){
        
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
      }
    },   
    equip: function () {   
      if(this.hasCrafted == 1){
        console.log(weapon[this.wepCount].id)
        localStorage.setItem("equip0",weapon[this.wepCount].id)
      }
    },     
    onDown: function () {
     //localStorage.setItem('state','warden')
     this.game.state.start('warden')
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
            this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       
        
    }
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Craft = Craft;

}());
