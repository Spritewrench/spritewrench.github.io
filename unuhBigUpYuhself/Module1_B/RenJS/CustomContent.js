RenJS.customContent = {
	//put here your own functions

	homeScreen: function (timer) {
        var timerVal = 0;
        if (timer == undefined){
          timerVal = 5000;
        }
        else{
          timerVal = timer
        }
        setTimeout(function () {
           window.location.replace("index.html");//will redirect to your blog page (an ex: blog.html)
        },timerVal);   
        localStorage.setItem("moduleComplete_1B",1)     
		RenJS.resolve();
	},   
setToken: function(params) {
    this.token = game.add.image(250,0,"token");
    this.tokenCount = game.add.text(this.token.x+130,this.token.y+60, localStorage.getItem("tokenCount"),{font:'PatrickHand-Regular'});  
    //localStorage.setItem("tokenCount",0);
    this.tokenCount.fontSize = 70; 
    this.tokenCount.fill= '#fff';  
    this.tokenCount.fontSize = 70;  
    this.tokenCount.anchor.setTo(0.5, 0.5);       
    this.tokenCount.wordWrap = true;
    this.tokenCount.wordWrapWidth = 600;
    this.tokenCount.align ='center'   
    RenJS.resolve();
  },
getToken: function(params) {
    var tokenCount = parseInt(localStorage.getItem("tokenCount"))
    tokenCount++;
    localStorage.setItem("tokenCount",tokenCount);
    this.tokenCount.text = tokenCount; 
    RenJS.audioManager.playSFX("collectCoin");
    RenJS.resolve();
  },  
panBackground: function(params) {
        // the current background sprite
        let bg = RenJS.bgManager.current;
        let panTime = parseInt(params.time);

        let x = params.x ? params.x : bg.x;
        let y = params.y ? params.y : bg.y;
        console.log(x)
        console.log(y)
        // we use the tween manager to tween easily
        RenJS.tweenManager.tween(bg,{ x,y },function(){
            RenJS.resolve();
        },panTime,true);

    }  ,
  haptic: function(params) {
      window.navigator.vibrate(1000);
      RenJS.resolve();

    }  , 
	storeLocal: function (params) {
        var value = RenJS.logicManager.parseVars(params.param2);
        localStorage.setItem(params.param1,value);

        RenJS.resolve();
	}
}

