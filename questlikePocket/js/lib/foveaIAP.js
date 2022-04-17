document.addEventListener('deviceready', initStore);

function initStore() {

    if (!window.store) {
        console.log('Store not available');
        return;
    }
    store.verbosity = store.INFO;
    store.register({
        id:    'grassland_hunting_tickets',
        alias: 'my_consumable1',
        type:   store.CONSUMABLE
    });
    store.register({
        id:    'cave_hunting_tickets',
        alias: 'my_consumable2',
        type:   store.CONSUMABLE
    });
    store.register({
        id:    'mountain_hunting_tickets',
        alias: 'my_consumable3',
        type:   store.CONSUMABLE
    });   
    
    store.register({
        id:    'shard_bundle',
        alias: 'shard_bundle',
        type:   store.CONSUMABLE     
    }); 
  
    store.register({
      id:    'shard_bundle2',
      alias: 'shard_bundle2',
      type:   store.CONSUMABLE     
    }); 

    store.register({
      id:    'shard_bundle3',
      alias: 'shard_bundle3',
      type:   store.CONSUMABLE     
    });     

    store.error(function(error) {
        //alert('ERROR ' + error.code + ': ' + error.message);
        console.log('ERROR ' + error.code + ': ' + error.message);
    });


    store.when('shard_bundle approved', function(p) {
        console.log("begin verify")
        //localStorage.setItem("TixCount0",parseInt(localStorage.getItem("TixCount0"))+15)     
       // localStorage.setItem("purchase",0) 
        p.verify();
    });
    store.when('shard_bundle verified', function(p) {
        console.log("shards bought")
        localStorage.setItem("shards",parseInt(localStorage.getItem("shards"))+100)     
        localStorage.setItem("purchase",0) 

              for ( var i = 0, len = localStorage.length; i < (len); ++i ) {
                var key = localStorage.key(i) 
                //console.log(i+" "+key)
                var validation = key.includes(".");
                if(!validation && !key.includes(":")){
                  //console.log("writing "+key+" to Database")
                  firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData").update({
                    [key]: localStorage.getItem(key)
                  });                
                }

              }    
        p.finish();
    });    

    store.when('shard_bundle2 approved', function(p) {
      console.log("begin verify")
      //localStorage.setItem("TixCount0",parseInt(localStorage.getItem("TixCount0"))+15)     
     // localStorage.setItem("purchase",0) 
      p.verify();
    });
    store.when('shard_bundle2 verified', function(p) {
        console.log("shards bought")
        localStorage.setItem("shards",parseInt(localStorage.getItem("shards"))+500)     
        localStorage.setItem("purchase",0) 

              for ( var i = 0, len = localStorage.length; i < (len); ++i ) {
                var key = localStorage.key(i) 
                //console.log(i+" "+key)
                var validation = key.includes(".");
                if(!validation && !key.includes(":")){
                  //console.log("writing "+key+" to Database")
                  firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData").update({
                    [key]: localStorage.getItem(key)
                  });                
                }

              }    
        p.finish();
    });   

    store.when('shard_bundle3 approved', function(p) {
      console.log("begin verify")
      //localStorage.setItem("TixCount0",parseInt(localStorage.getItem("TixCount0"))+15)     
     // localStorage.setItem("purchase",0) 
      p.verify();
    });
    store.when('shard_bundle3 verified', function(p) {
        console.log("shards bought")
        localStorage.setItem("shards",parseInt(localStorage.getItem("shards"))+1500)     
        localStorage.setItem("purchase",0) 

              for ( var i = 0, len = localStorage.length; i < (len); ++i ) {
                var key = localStorage.key(i) 
                //console.log(i+" "+key)
                var validation = key.includes(".");
                if(!validation && !key.includes(":")){
                  //console.log("writing "+key+" to Database")
                  firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData").update({
                    [key]: localStorage.getItem(key)
                  });                
                }

              }    
        p.finish();
    });       
    

    /*
    store.when('my_consumable2 approved', function(p) {
        //console.log("cave bought")
        //localStorage.setItem("TixCount1",parseInt(localStorage.getItem("TixCount1"))+15)      
        //localStorage.setItem("purchase",0) 
        p.verify();
    });
    store.when('my_consumable2 verified', function(p) {
        console.log("cave bought")
        localStorage.setItem("TixCount1",parseInt(localStorage.getItem("TixCount1"))+15)     
        localStorage.setItem("purchase",0) 
        for ( var i = 0, len = localStorage.length; i < (len); ++i ) {
          var key = localStorage.key(i) 
          //console.log(i+" "+key)
          var validation = key.includes(".");
          if(!validation && !key.includes(":")){
            //console.log("writing "+key+" to Database")
            firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData").update({
              [key]: localStorage.getItem(key)
            });                
          }

        }       
        p.finish();
    });    


    store.when('my_consumable3 approved', function(p) {
        //console.log("mountain  bought")
        //localStorage.setItem("TixCount2",parseInt(localStorage.getItem("TixCount2"))+15)      
        //localStorage.setItem("purchase",0) 
        p.verify();
    });
    store.when('my_consumable3 verified', function(p) {
        console.log("mountain  bought")
        localStorage.setItem("TixCount2",parseInt(localStorage.getItem("TixCount2"))+15)      
        localStorage.setItem("purchase",0) 
        for ( var i = 0, len = localStorage.length; i < (len); ++i ) {
          var key = localStorage.key(i) 
          //console.log(i+" "+key)
          var validation = key.includes(".");
          if(!validation && !key.includes(":")){
            //console.log("writing "+key+" to Database")
            firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData").update({
              [key]: localStorage.getItem(key)
            });                
          }

        } 
        p.finish();
    });    

    store.when('my_consumable4 approved', function(p) {
      //console.log("mountain  bought")
      //localStorage.setItem("TixCount2",parseInt(localStorage.getItem("TixCount2"))+15)      
      //localStorage.setItem("purchase",0) 
      p.verify();
    });
    store.when('my_consumable4 verified', function(p) {
        console.log("blueprint  bought")
        localStorage.setItem("blueprintCount",parseInt(localStorage.getItem("blueprintCount"))+100)      
        localStorage.setItem("purchase",0) 
        for ( var i = 0, len = localStorage.length; i < (len); ++i ) {
          var key = localStorage.key(i) 
          //console.log(i+" "+key)
          var validation = key.includes(".");
          if(!validation && !key.includes(":")){
            //console.log("writing "+key+" to Database")
            firebase.database().ref('player/' +localStorage.getItem("userID")+"/localData").update({
              [key]: localStorage.getItem(key)
            });                
          }

        } 
        p.finish();
    }); 
    */
    store.applicationUsername = function() {
        return localStorage.getItem("userID");// a string
      }
    store.validator = "https://validator.fovea.cc/v1/validate?appName=io.spritewrench.questlikepocket&apiKey=c49e1f70-67bd-46ab-8285-18d212971c3b";
    store.refresh();
}
