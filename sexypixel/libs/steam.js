// Check paths, but we'll use relative 
//console.log("*** INFO *** domSide.js, electron, require.resolve.paths(greenworks): " + require.resolve.paths('greenworks')); 
// For debug, what is the DirName the current script is running in. 
//console.log("*** INFO *** domSide.js DirName: " + __dirname + " FileName: " + __filename);



try {
    //var greenworks = require('./assets/js/jquery.min.js');
    var greenworks = require('./greenworks');
    console.log(greenworks)
    //greenworks.initAPI()
    greenworks.init()
    console.log(greenworks.initAPI()); 
    
    //greenworks.activateGameOverlay('Friends')
    
}
catch (error){
  console.log(error);
    var greenworks = new Object;
    greenworks.activateAchievement = function(){};
}

function success(){
  console.log("Success!");
}