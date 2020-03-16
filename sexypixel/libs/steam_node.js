try {
    var greenworks = require('./node_modules/greenworks');
    console.log(greenworks.initAPI()); 
    //success();
    console.log("Success!");
    
}
catch (error){
  console.log(error);
    var greenworks = new Object;
    greenworks.activateAchievement = function(){};
}

function success(){
  console.log("Success!");
}