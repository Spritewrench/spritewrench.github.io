RenJS.customContent = {
	//put here your own functions

    //put here your own function
	homeScreen: function (params) {
        
        setTimeout(function () {
           window.location.replace("index.html");//will redirect to your blog page (an ex: blog.html)
        }, 2000);        
		RenJS.resolve();
	},   
	storeLocal: function (params) {
        var value = RenJS.logicManager.parseVars(params.param2);
        localStorage.setItem(params.param1,value);

        RenJS.resolve();
	},   
  getAchievement: function (params){
      RenJS.audioManager.playSFX("secretsound");
      try{
          greenworks.activateAchievement('NEW_ACHIEVEMENT_'+params.param1,
            function() { console.log("yes") },
            function(err) {  console.log(err) });           
      }
      catch(error){
          console.log(error)
      } 
      RenJS.resolve();
  },
  soulCounter: function (params){
    this.soulCount = game.add.image(716,64,"soul0");
    var counter = parseInt(RenJS.logicManager.vars.SOUL)
    console.log("Counter: "+counter)
    if (counter == 1)
      this.soulCount.loadTexture("soul1");    
    if (counter == 2)
      this.soulCount.loadTexture("soul2");
    if (counter == 3)
      this.soulCount.loadTexture("soul3");
    if (counter == 4)
      this.soulCount.loadTexture("soul4");
    if (counter == 5)
      this.soulCount.loadTexture("soul5");
    if (counter == 6)
      this.soulCount.loadTexture("soul6");
    if (counter == 7)
      this.soulCount.loadTexture("soul7"); 
    if (counter == 8)
      this.soulCount.loadTexture("soul8");
    if (counter == 9)
      this.soulCount.loadTexture("soul9");
    if (counter == 10)
      this.soulCount.loadTexture("soul10");
    if (counter == 11)
      this.soulCount.loadTexture("soul11");
    if (counter == 12)
      this.soulCount.loadTexture("soul12");
    if (counter == 13)
      this.soulCount.loadTexture("soul13");
    if (counter == 14)
      this.soulCount.loadTexture("soul14");
    if (counter == 15)
      this.soulCount.loadTexture("soul15");
    if (counter == 16)
      this.soulCount.loadTexture("soul16");
    if (counter == 17)
      this.soulCount.loadTexture("soul17");
    if (counter == 18)
      this.soulCount.loadTexture("soul18");
    if (counter == 19)
      this.soulCount.loadTexture("soul19");
    if (counter >= 20){
      this.soulCount.loadTexture("soul20");       
      RenJS.audioManager.playSFX("secretsound");
      try{
          greenworks.activateAchievement('NEW_ACHIEVEMENT_1_5',
            function() { console.log("yes") },
            function(err) {  console.log(err) });           
      }
      catch(error){
          console.log(error)
      }      
    }
    RenJS.resolve();
  }  
}
