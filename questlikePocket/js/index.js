/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //document.addEventListener('deviceready', this.initApp, false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        screen.orientation.lock('portrait');
        try{
            //localStorage.setItem("adReady",0)  
            setupVideoReward();
            //getAds();        
          }
          catch(error){
            //admob.rewardvideo.show();   
          }

        try{
            cordova.plugins.playGamesServices.auth(function() {
                //alert("sign in working")// On logged in
            }, function() {
                //alert("sign in NOT working")// On not logged in
            });

           

    
        }
        catch(e){
            alert(e)
        }

        
        try{
            if(!gameConfig.isDebug ){
                //var adjustConfig = new AdjustConfig("21huncqifc8w", AdjustConfig.EnvironmentProduction);
                //Adjust.create(adjustConfig);
            }
            else{
                //var adjustConfig = new AdjustConfig("21huncqifc8w", AdjustConfig.EnvironmentSandbox);
                //Adjust.create(adjustConfig);                
            }
        }
        catch(e){

        }

        /*
        // fired when silent login is successul
        document.addEventListener("play.CONNECTED", ()=>{
            // your code here 
            
        })
        
        document.addEventListener("play.SILENT_SIGNED_IN_FAILED",  () => {
            // when silent login is failed. Show login button to user or try manual login.
        })
        
        document.addEventListener("play.SILENT_SIGNED_IN_SUCCESS",  () => {
            // when silent login is successful
            
        })
        
        document.addEventListener("play.PLAYER_INFO",  (data) => {
            // when player info is fetched 
            // data.playerId is id of player 
            // data.displayName is name of player 
        })
        
        document.addEventListener("play.SIGNIN_REQUIRED",  () => {
            // user can signout of your game using play games app. This event is fired you try to perform some action but user is logged out. show login button to user in this case.
        })      
        
        document.addEventListener("play.SUBMIT_SCORE_SUCCESS",  (data) => {
            //alert(data.displayName+" score: "+data.score)
            // user can signout of your game using play games app. This event is fired you try to perform some action but user is logged out. show login button to user in this case.
        })        
         
        cordova.plugins.playGamesServices.initialize();
        cordova.plugins.playGamesServices.login();
        */
        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        try{
          var listeningElement = parentElement.querySelector('.listening');
          var receivedElement = parentElement.querySelector('.received');

          listeningElement.setAttribute('style', 'display:none;');
          receivedElement.setAttribute('style', 'display:block;');          
        }
        catch(error){
          
        }


        console.log('Received Event: ' + id);
    }
};

app.initialize();