try {
    var greenworks = require('./greenworks');
    console.log(greenworks.initAPI()); 
    
    
}
catch (error){
  console.log(error);
    var greenworks = new Object;
    greenworks.activateAchievement = function(){};
}

function success(){
  console.log("Success!");
}