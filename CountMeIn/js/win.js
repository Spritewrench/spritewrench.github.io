(function() {
  'use strict';

  function Win() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Win.prototype = {

    create: function () {

    },

    update: function () {
      if(parseInt(localStorage.getItem("restartState")) == 1 ){
        
        localStorage.removeItem("restartState")
        this.game.state.restart();
      }
      
      if(parseInt(localStorage.getItem("TixCount"+this.biome)) < this.tixCost){
        this.contButton.loadTexture("wardenHunt-No");
        this.tixText.fill= 'red';
      }
      else{
        this.contButton.loadTexture("wardenHunt"+this.biome);
        this.tixText.fill= '#fff';
      }
      this.tixText.text = localStorage.getItem("TixCount"+this.biome)+"/"+this.tixCost
      if(this.transition.alpha == 1){
        this.transition.y-=25
        if(this.transition.y <= -500){
          localStorage.setItem("didMonRun",0)
          localStorage.setItem("fromHunt",1)
          if(this.transitionKey == 1){
            this.game.state.start('hub')  
          }
          else{
            this.game.state.start('game')  
          }
                    
        }
      }
      //monster Ran
      if(parseInt(localStorage.getItem("didMonRun")) == 1 || this.biome == -1){
        

        //media breakpoint
        if(window.innerHeight < 700){
          this.monName.y = 120
          this.monSizeName.y = 40
          this.monTypeName.y = 80       
        }
        else{
          this.monName.y = 150
          this.monSizeName.y = 50
          this.monTypeName.y = 100        
        }           
        
        if(this.biome == -1){
          this.monName.text = "DEFEATED"
        }
        else{
          this.monName.text = "GOT AWAY"
        }
      }
      //floor all graphics to address blurry
      this.returnButton.x = Math.floor( this.returnButton.x )     
      this.returnButton.y = Math.floor( this.returnButton.y )    
      this.watchButton.x = Math.floor( this.watchButton.x )     
      this.watchButton.y = Math.floor( this.watchButton.y )    
      this.contButton.x = Math.floor( this.contButton.x )     
      this.contButton.y = Math.floor( this.contButton.y )       
      this.rank.x = Math.floor( this.rank.x )     
      this.rank.y = Math.floor( this.rank.y )               



      this.monStreak.alpha = 0;
      if(this.popUp.x == this.game.width ){
        this.rank.alpha = 0;
        this.expBar.alpha = 0;
        this.expBar2.alpha = 0;
        this.expBar3.alpha = 0;
        this.rankText.alpha = 0
        this.rankText2.alpha = 0;
        if(this.commonRewardCount > 0){
          for(var i = 0; i < this.commonRewardCount; i++){
            if(this.commonRewards[i].alpha < 1 && parseInt(localStorage.getItem("didMonRun")) != 1 && this.biome != -1){
              this.commonRewards[i].alpha += 0.07;  
              if(this.commonRewards[i].alpha >= 1 ){
                this.commonRewards[i].alpha = 1;
              }
            }
          }  
          if(this.commonRewards[this.commonRewardCount-1].alpha == 1 && parseInt(localStorage.getItem("didMonRun")) != 1 && this.biome != -1){
            this.commonRewardName.alpha += 0.1
            if(this.commonRewardName.alpha > 1){
              this.commonRewardName.alpha = 1
            }
            for(var i = 0; i < this.uncommonRewardCount; i++){
              if(this.uncommonRewards[i].alpha < 1){
                this.uncommonRewards[i].alpha += 0.05;  
                if(this.uncommonRewards[i].alpha >= 1 ){
                  this.uncommonRewards[i].alpha = 1;
                }
              }
            }   
          }         

          if(this.uncommonRewards[this.uncommonRewardCount-1].alpha == 1 && parseInt(localStorage.getItem("didMonRun")) != 1 && this.biome != -1){
            this.uncommonRewardName.alpha += 0.1
            if(this.uncommonRewardName.alpha > 1){
              this.uncommonRewardName.alpha = 1
            }
            for(var i = 0; i < this.rareRewardCount; i++){
              if(this.rareRewards[i].alpha < 1){
                this.rareRewards[i].alpha += 0.03;  
                if(this.rareRewards[i].alpha >= 1 ){
                  this.rareRewards[i].alpha = 1;
                }
              }
            }   
          } 

          if(this.rareRewards[this.rareRewardCount-1].alpha == 1 && parseInt(localStorage.getItem("didMonRun")) != 1 && this.biome != -1){
            this.rareRewardName.alpha += 0.1
            if(this.rareRewardName.alpha > 1){
              this.rareRewardName.alpha = 1
            }
          }         

        }
      }

      this.expBarHolder = this.expBar.width * (this.expDiff/this.expDiff2)

      if(this.expBar2.width <= this.expBarHolder){
        this.expBar2.width+=2 
      }
      if(this.expBar2.width > this.expBarHolder){
        this.expBar2.width--
      }      
      
      var diff = this.expBarHolder -this.expBar2.width
      if(diff <= 2 && diff >= 0 && this.popUp.x != this.game.width){
        this.rankText2.alpha += 0.1
        if(this.rankText2.alpha > 1){
          this.rankText2.alpha = 1
        }
      }

      this.hunterExp = parseInt(localStorage.getItem("exp"))   
      if(parseInt(localStorage.getItem("currentRank")) <= 1){
        this.expDiff = this.hunterExp
      }
      else{
        this.expDiff = this.hunterExp - this.prevRankExp 
      }
      // this.hunterExp - this.nextRankExp 
      //this.expDiff = this.hunterExp
      if(this.expDiff < 0){
       this.expDiff = 0;
      }

      this.expDiff2 = this.nextRankExp-this.currentRankExp
      if(this.expDiff2 < 0){
       this.expDiff2 = 0;
      } 
      //console.log("hunterExp "+this.hunterExp)
     // console.log("nextRankExp "+this.nextRankExp)
      //console.log("currentRankExp "+this.currentRankExp)

     // console.log("exp 1 "+this.expDiff)
     // console.log("exp 2 "+this.expDiff2)
      //console.log(this.expBar2.width)

      


      if(this.currentRank >= gameConfig.legendUnlock && parseInt(localStorage.getItem("legendHuntUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nLEGENDARY MONSTERS UNLOCKED.\n4-STAR HUNTS NOW AVAILABLE"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("legendHuntUnlock",1)
        localStorage.setItem("legendUnlock-first",1)
      } 
      if(this.currentRank >= gameConfig.mutantUnlock && parseInt(localStorage.getItem("mutantUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nMUTANT MONSTERS UNLOCKED.\nSHINY MONSTERS CAN NOW SHOW UP DURING HUNTS"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("mutantUnlock",1)
      } 
      if(this.currentRank >= gameConfig.surgeUnlock && parseInt(localStorage.getItem("surgeUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nMONSTER SURGES UNLOCKED.\nDAILY HUNT BONUSES NOW AVAILABLE"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("surgeUnlock",1)
      } 
      if(this.currentRank >= gameConfig.rareUnlock && parseInt(localStorage.getItem("rareUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nRARE MONSTERS UNLOCKED.\n3-STAR HUNTS NOW AVAILABLE"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("rareUnlock",1)
        localStorage.setItem("rareUnlock-first",1)
      } 
      if(this.currentRank >= gameConfig.uncommonUnlock && parseInt(localStorage.getItem("uncommonUnlock")) < 1){
        this.rankText2.text = "COMBO LIMIT +1\nUNCOMMON MONSTERS UNLOCKED.\n2-STAR HUNTS NOW AVAILABLE"+"\n[ TAP TO CONTINUE ]"
        localStorage.setItem("uncommonUnlock",1)
        localStorage.setItem("uncommonUnlock-first",1)
      }
      
      if(this.HuntMul > 1){
        this.rankText.text = "RANK "+parseInt(localStorage.getItem("currentRank"))+"\nHUNT STREAK #"+parseInt(localStorage.getItem("monCount"))+"\n"+(this.expDiff)+"/"+(this.expDiff2)+" \nEARNED: +"+(parseInt(localStorage.getItem("moneExp"))*this.HuntMul)+" EXP (x"+this.HuntMul+")"   
      
      }
      else{
        this.rankText.text = "RANK "+parseInt(localStorage.getItem("currentRank"))+"\nHUNT STREAK #"+parseInt(localStorage.getItem("monCount"))+"\n"+(this.expDiff)+"/"+(this.expDiff2)+" \nEARNED: +"+(parseInt(localStorage.getItem("moneExp"))*this.HuntMul)+" EXP"   
      
      }
      //level up
      if(this.expBar2.width >= this.expBar.width){ 

        if(this.currentRank != gameConfig.uncommonUnlock && this.currentRank != gameConfig.rareUnlock && this.currentRank != gameConfig.surgeUnlock && this.currentRank != gameConfig.legendUnlock){
          this.rankText2.text = "COMBO LIMIT +1"+"\n[ TAP TO CONTINUE ]"
        }
        
        this.expBar2.width = 0;
       // this.winSound.play();

        var rankHolder = Math.floor(parseInt(localStorage.getItem("currentRank"))/10);
        //console.log(rankHolder)
        if(rankHolder > 2){
          rankHolder = 2;
        }
        this.rank.loadTexture('rankBadge-'+rankHolder)   

        try{
          if(!gameConfig.isDebug ){
          var param = new Object();
          param.rank = calRank              
          GameAnalytics("addProgressionEvent", "Complete", "rankUp","","",calRank);  
          facebookConnectPlugin.logEvent("rankUp", param, 1, function (success){ console.log(success)}, function (fail){ console.log(fail)})
          }
        }
        catch(e){

        }    

        if(parseInt(localStorage.getItem("monCount"))%5 == 0 && parseInt(localStorage.getItem("monCount")) != 0){
          //localStorage.setItem("prevexp", this.hunterExp+(parseInt(localStorage.getItem("moneExp"))*5))
        }
        else{
          //localStorage.setItem("prevexp", this.hunterExp+(parseInt(localStorage.getItem("moneExp"))*1))
        }      
        this.hunterExp = parseInt(localStorage.getItem("exp"))    
        localStorage.setItem("RankedUp",1)
        localStorage.setItem("currentRank",parseInt(localStorage.getItem("currentRank"))+1)
        this.currentRank = parseInt(localStorage.getItem("currentRank"))
        this.hunterRank =  Math.round(0.1*Math.sqrt(this.hunterExp));
        //localStorage.setItem("prevexp", parseInt(localStorage.getItem("exp")) )
        localStorage.setItem("prevexp", this.hunterExp)
        
        this.hunterExp = parseInt(localStorage.getItem("exp")) 

        this.prevRankExp = parseInt(localStorage.getItem("prevexp"))

        this.bufferRank = this.currentRank+gameConfig.bufferRank // to increase exp requirements
        this.currentRankExp = Math.round(Math.pow((this.bufferRank)/0.1, 2)); 

        this.nextRankExp = Math.round(Math.pow((this.bufferRank+1)/0.1, 2));         

        this.nextRank = Math.round(0.1*Math.sqrt(this.nextRankExp))            
           
        //localStorage.setItem("currentRank",gameConfig.maxExp)
        //console.log(calRank)

        if(this.hunterExp >= gameConfig.maxExp){
          //this.textBackdropText.text = "You've reached max hunter rank. The "+localStorage.getItem("ExpTotal")+ " Exp earned will be converted to Veteran Points"
          //localStorage.setItem("veteranPoints", parseInt(localStorage.getItem("veteranPoints"))+parseInt(localStorage.getItem("ExpTotal"))  )
          //this.hunterExp = gameConfig.maxExp
          //localStorage.setItem("exp",gameConfig.maxExp)
          //localStorage.setItem("RankedUp",0)
        }   
        //google play services Hunter Rank Leaderboard     
        try{
          
          var data = {
            score: parseInt(localStorage.getItem("currentRank")),
            leaderboardId: "CgkI4b7xjZMYEAIQAQ"
          };
         
          cordova.plugins.playGamesServices.submitScore(data, function (result) {
              //alert(result)// On error
          }, function(error) {
              //alert(error)// On error
          }); 
          
         /*
          cordova.plugins.playGamesServices.submitScoreNow({score: parseInt(localStorage.getItem("currentRank")), leaderBoardId: "CgkI4b7xjZMYEAIQAQ"}, function (result) {
            //alert(result)// On error
          }, function(error) {
              //alert(error)// On error
          }); 
          */          
        }
        catch(e){

        }            
        //this.findPlacement();           
       }

      


      this.HuntflyCount = parseInt(localStorage.getItem("huntFly"+this.biome+" Count"))
      this.huntFlyText.text = this.HuntflyCount+"/"+this.HuntFlycost

      this.textBackdropText.x = Math.floor( this.textBackdropText.x )
      this.textBackdropText.y = Math.floor( this.textBackdropText.y )      
      //this.textBackdropText.smoothed = false
        

        //ad load check
        


        if(this.extraCarve == 1 || gameConfig.enableAds == false || parseInt(localStorage.getItem("didMonRun")) == 1 || this.biome == -1){
          this.watchButton.loadTexture("watchNo")
          this.optionText.text = " "
          this.extraCarve = 1
        }
        else{
          this.watchButton.loadTexture("watch")
          this.optionText.text = "WATCH AN AD TO GET BONUS REWARDS & EXP"          
        }
      
        if (localStorage.getItem("firstVisit-reward") === null || parseInt(localStorage.getItem("firstVisit-reward")) == 1) {
          this.returnButton.loadTexture("return_Hub")
        }      
        if(this.chatTimer > 0){
          this.mapWarden.x += (0 - this.mapWarden.x) * 0.1; 
          this.textBackdrop.alpha = 1;
          this.textBackdropText.alpha = 1;
          this.textBackdropText2.alpha = 1;
          this.textBackdrop.x = 0;              
        }
        else{
          this.mapWarden.x += (this.game.width - this.mapWarden.x) * 0.1; 
          this.textBackdrop.alpha = 0;
          this.textBackdropText.alpha = 0;
          this.textBackdropText2.alpha = 0
          this.textBackdrop.x = this.game.width;              
        }
    }      
  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Win = Win;

}());
