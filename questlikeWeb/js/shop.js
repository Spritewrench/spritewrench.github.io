(function() {
  'use strict';

  function Shop() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Shop.prototype = {

    create: function () {

      if (this.capture && event.cancelable)
      {
          event.preventDefault();
      }

      localStorage.setItem("fromHunt",0)
      this.game.world.setBounds(0, 0, this.game.width, this.game.height);
      //plugins'

      
      //this.game.load.script('gray', 'js/lib/Gray.js');
      //this.gray = this.game.add.filter('Gray');      

      

      this.mapBG = this.add.sprite(0, 0, 'blankHub'); 
      //this.mapBG.anchor.setTo(0.5, 0);
      this.mapBG.width = this.game.width;
      this.mapBG.height = this.game.height; 
      
      //audio
      this.bgSound = this.add.audio('giftMusic');
      this.ping = this.add.audio('ping');
      this.winSound = this.add.audio('win');
      this.winSound.volume = 0.1
      
      if(!this.bgSound.isPlaying){
          this.bgSound.loop = true;
          this.bgSound.play();
          this.bgSound.volume = 0.5;
          //this.introCheck = true;
      }          

      //bundles
      this.scrollBundle = this.add.sprite(this.game.width/2,200, 'scrollBundle');
      this.scrollBundle.anchor.setTo(0.5, 0.5); 
      this.scrollBundle.width = this.game.width
      this.scrollSpendShard = this.add.sprite(this.scrollBundle.width/2,this.scrollBundle.y+this.scrollBundle.height/2-15, 'spendShard');
      this.scrollSpendShard.anchor.setTo(0.5, 0.5); 
      this.scrollSpendShard.inputEnabled = true;
      this.scrollSpendShard.events.onInputDown.add(this.buyScroll, this)       

      this.gemBundle = this.add.sprite(this.game.width/2,420, 'gemBundle');
      this.gemBundle.anchor.setTo(0.5, 0.5);  
      this.gemBundle.alpha = 0;
        
      
      this.ticketBundle = this.add.sprite(this.game.width/2,420, 'ticketBundle');
      this.ticketBundle.anchor.setTo(0.5, 0.5);  
      this.ticketBundle.width = this.game.width
      this.ticketSpendShard = this.add.sprite(this.ticketBundle.width/2,this.ticketBundle.y+this.ticketBundle.height/2-15, 'spendShard');
      this.ticketSpendShard.anchor.setTo(0.5, 0.5); 
      this.ticketSpendShard.inputEnabled = true;
      this.ticketSpendShard.events.onInputDown.add(this.buyTix, this)  

      //shards
      this.buyShard = this.add.sprite(this.game.width/2,640, 'buyShard');
      this.buyShard.anchor.setTo(0.5, 0.5);  
      this.buyShard.width = this.game.width
      this.purchaseShard = this.add.sprite(this.buyShard.width/2,this.buyShard.y+this.buyShard.height/2-15, 'purchaseShard');
      this.purchaseShard.anchor.setTo(0.5, 0.5); 
      this.purchaseShard.inputEnabled = true;
      this.purchaseShard.events.onInputDown.add(this.buyShards, this)     
      this.buyShard.alpha = 0;
      this.purchaseShard.alpha = 0;

      this.buyShardBag = this.add.sprite(this.game.width/2,860, 'buyShardBag');
      this.buyShardBag.anchor.setTo(0.5, 0.5);  
      this.buyShardBag.width = this.game.width
      this.purchaseShard1 = this.add.sprite(this.buyShard.width/2,this.buyShardBag.y+this.buyShardBag.height/2-15, 'purchaseShard1');
      this.purchaseShard1.anchor.setTo(0.5, 0.5); 
      this.purchaseShard1.inputEnabled = true;
      this.purchaseShard1.events.onInputDown.add(this.buyShards1, this)     
      this.buyShardBag.alpha = 0;
      this.purchaseShard1.alpha = 0;      
      
      this.buyShardBox = this.add.sprite(this.game.width/2,1080, 'buyShardBox');
      this.buyShardBox.anchor.setTo(0.5, 0.5);  
      this.buyShardBox.width = this.game.width
      this.purchaseShard2 = this.add.sprite(this.buyShard.width/2,this.buyShardBox.y+this.buyShardBox.height/2-15, 'purchaseShard2');
      this.purchaseShard2.anchor.setTo(0.5, 0.5); 
      this.purchaseShard2.inputEnabled = true;
      this.purchaseShard2.events.onInputDown.add(this.buyShards2, this)    
      this.buyShardBox.alpha = 0;
      this.purchaseShard2.alpha = 0;             
        
      this.sparkle = this.add.sprite(this.buyShard.x-this.buyShard.width/2+50,this.buyShard.y-80, 'sparkle');
      this.sparkle .anchor.setTo(0.5, 0.5); 
      this.sparkle.alpha = 0;

      this.shardCount = this.add.sprite(0,0, 'shardCount');
      this.shardAmount = parseInt(localStorage.getItem("shards"))
      this.shardCountText = this.add.text(this.shardCount.x+(this.shardCount.width/2)+13, this.shardCount.y+15 ,"",{font:'LondrinaSolid-Black'});
      this.shardCountText.fill= '#fff';
      this.shardCountText.fontSize = 16;
      
      this.shardCountHolder = this.shardAmount;

      this.tabBanner = this.add.sprite(0,(this.game.height)-100, 'tab_ribbon');
      this.tabBanner.width = this.game.width

      this.selectHighlight = this.add.sprite((this.game.width)-60,(this.game.height)-50, 'tab_select_highlight');
      this.selectHighlight.anchor.setTo(0.5, 0.5);
      this.highlightTar = this.selectHighlight.x

      this.selectInventory = this.add.sprite(60,(this.game.height)-50, 'tab_inventory_unselected');
      this.selectInventory.anchor.setTo(0.5, 0.5);
      this.selectInventory.clicked = false;
      this.selectInventory.inputEnabled = true;
      this.selectInventory.events.onInputDown.add(this.goToCraft, this)     
      
      
      this.selectHub = this.add.sprite(this.game.width/2,(this.game.height)-50, 'tab_hub_unselected');
      this.selectHub.anchor.setTo(0.5, 0.5);
      this.selectHub.clicked = false;
      this.selectHub.inputEnabled = true;   
      this.selectHub.events.onInputDown.add(this.goToHub, this)     

      this.selectShop = this.add.sprite((this.game.width)-60,(this.game.height)-50, 'tab_shop_selected');
      this.selectShop.anchor.setTo(0.5, 0.5);
      this.selectShop.clicked = false;
      this.selectShop.inputEnabled = true;
      //this.selectShop.events.onInputDown.add(this.goToShop, this);   
      this.targetSparkleSize = 100;

      this.getTixKey = -1;
      this.getScrollKey = -1;

      this.purchaseOverlay = this.add.sprite(0,0, 'OverlayBG');
      this.purchaseOverlay.width = this.game.width
      this.purchaseOverlay.height = this.game.height
      this.purchaseOverlay.alpha = 0;

      this.getPurchase = this.add.sprite(this.game.width/2,this.game.height*2, 'scrollBundle');
      this.getPurchase.origY = this.game.height*2
      this.getPurchase.tarY = (this.game.width/2)+100
      this.getPurchase.alpha = 0;

      this.getPurchase.anchor.setTo(0.5, 0.5); 
      this.getPurchase.inputEnabled = true;
      this.getPurchase.events.onInputDown.add(this.nextPurchase, this)      

      var scale = 1.8
      //media breakpoint
      if(window.innerWidth < 400){
        this.getPurchase.width = Math.floor(this.getPurchase.width/scale)
        this.getPurchase.height = Math.floor(this.getPurchase.height/scale)  
      
      }
      else{
        this.getPurchase.width = Math.floor(this.getPurchase.width/1.5)
        this.getPurchase.height = Math.floor(this.getPurchase.height/1.5)  
       
      }         

      this.randomKey = Math.floor(Math.random() * 3)
      this.tarKey = -1;

      this.Notification = this.add.sprite(60,(this.game.height)-50, 'notification');
      this.Notification.anchor.setTo(0.5, 0.5);  
      this.Notification.alpha = 0;        
    },

    update: function () {

      if(this.game.camera.y > this.game.world.bounds.height ){
        this.game.camera.y = this.game.world.bounds.height
      }
      if(this.game.camera.y < 0){
        this.game.camera.y = 0
      }       


      this.selectHighlight.x += (this.highlightTar - this.selectHighlight.x) * 0.5;
      if( (this.selectHighlight.x- this.highlightTar) <= 1 && this.tarKey == 1){
        this.game.state.start('hub') 
      }
      if( (this.selectHighlight.x- this.highlightTar) <= 1 && this.tarKey == 0){
        this.game.state.start('craft') 
      }
      
      this.sparkle.width += (this.targetSparkleSize - this.sparkle.width) * 0.1; 
      this.sparkle.height = this.sparkle.width
      var diff = this.targetSparkleSize - this.sparkle.width
      //console.log(diff+" "+this.targetSparkleSize)

      if(diff  <= 1 && diff >= 0 ){
        this.targetSparkleSize = 80
        //this.sparkle.scale.x *= -1;  
      }
      if(diff  >= -1 && diff <= 0 ){
        this.targetSparkleSize = 100
      }      
      




      this.tabBanner.y  = (this.game.camera.height)-100+this.game.camera.y
      this.selectInventory.y  = (this.game.camera.height)-50+this.game.camera.y
      this.selectHub.y  = (this.game.camera.height)-50+this.game.camera.y
      this.selectShop.y  = (this.game.camera.height)-50+this.game.camera.y
      this.selectHighlight.y = this.selectShop.y
      this.mapBG.y = this.game.camera.y
      this.shardCount.y = this.game.camera.y
      this.shardCountText.y = this.shardCount.y + 14
      this.purchaseOverlay.y = this.game.camera.y

      this.shardAmount = parseInt(localStorage.getItem("shards"))
      if(this.shardCountHolder < this.shardAmount){
        var diff = this.shardAmount - this.shardCountHolder
        if(diff > 100){
          this.shardCountHolder+=100
        }
        if(diff > 10){
          this.shardCountHolder+=10
        }        
        if(diff >= 1){
          this.shardCountHolder++
        }        
        
      }
      else{
        var diff = this.shardCountHolder - this.shardAmount
        if(diff > 100){
          this.shardCountHolder-=100
        }
        if(diff > 10){
          this.shardCountHolder-=10
        }        
        if(diff >= 1){
          this.shardCountHolder--
        }  
      }
      this.shardCountText.text = this.shardCountHolder

      if(this.shardAmount < 250){
        //this.scrollSpendShard.filters = [this.gray];
        //this.ticketSpendShard.filters = [this.gray];
        this.scrollSpendShard.loadTexture('spendShard-no')
        this.ticketSpendShard.loadTexture('spendShard-no')

      }
      else{
        //this.scrollSpendShard.filters = null
        //this.ticketSpendShard.filters = null
        this.scrollSpendShard.loadTexture('spendShard')
        this.ticketSpendShard.loadTexture('spendShard')

      }

      //purchases
      if(this.getTixKey > -1){
        this.getPurchase.alpha = 1;
        this.purchaseOverlay.alpha = 1;
        this.getPurchase.tint =  0xffffff; 
        if(this.getTixKey == 3){
          this.getPurchase.loadTexture("getTix"+this.randomKey)  
          var diff = this.getPurchase.y-(this.getPurchase.tarY+this.game.camera.y-1)
          if(diff > 5 ){
            this.getPurchase.tint = 0x00000;
          }
          else{
            this.getPurchase.tint =  0xffffff; 
          }
        }
        else{
          this.getPurchase.loadTexture("getTix"+this.getTixKey)  
        }  
        this.getPurchase.y += (this.getPurchase.tarY+this.game.camera.y - this.getPurchase.y) * 0.1; 
      }
      else if(this.getScrollKey > -1){
        this.getPurchase.alpha = 1;
        this.purchaseOverlay.alpha = 1;
        this.getPurchase.tint =  0xffffff; 
        if(this.getScrollKey == 3){
          this.getPurchase.loadTexture("getScroll"+this.randomKey)  
          var diff = this.getPurchase.y-(this.getPurchase.tarY+this.game.camera.y-1)
          if(diff > 5 ){
            this.getPurchase.tint = 0x00000;
          }
          else{
            this.getPurchase.tint =  0xffffff; 
          }
        }  
        else{
          this.getPurchase.loadTexture("getScroll"+this.getScrollKey)  
        }
        this.getPurchase.y += (this.getPurchase.tarY+this.game.camera.y - this.getPurchase.y) * 0.1; 
      }
      else{
        this.purchaseOverlay.alpha = 0;
        this.getPurchase.alpha = 0;
      }
      
    },
    goToCraft: function (unit) {
      //localStorage.setItem('state','craft')
      
      this.ping.play();
      this.bgSound.stop();      
      this.highlightTar = this.selectInventory.x
      this.tarKey = 0;
      this.selectShop.loadTexture ('tab_shop_unselected');      
      //this.game.kineticScrolling.stop();       
      //this.game.state.start('craft')          
       
    },  
    goToHub: function (unit) {
      this.ping.play();
      this.bgSound.stop(); 
      this.highlightTar = this.selectHub.x
      this.tarKey = 1;
      this.selectShop.loadTexture ('tab_shop_unselected');       
      //this.game.kineticScrolling.stop();         
      //this.game.state.start('hub')           
    },   
    buyScroll: function (unit) {
      if(this.shardAmount >= 250){
        this.ping.play();
        this.randomKey = Math.floor(Math.random() * 3)
        console.log("randomKey "+this.randomKey)
        this.getScrollKey++;
        this.shardAmount = parseInt(localStorage.getItem("shards"))
        localStorage.setItem("shards",(this.shardAmount-250))
        
      }
      
    },    
    buyTix: function (unit) {
      if(this.shardAmount >= 250){
        this.ping.play();
        this.randomKey = Math.floor(Math.random() * 3)
        console.log("randomKey "+this.randomKey)
        this.getTixKey++;
        this.shardAmount = parseInt(localStorage.getItem("shards"))
        localStorage.setItem("shards",(this.shardAmount-250))

        if(parseInt(localStorage.getItem("firstVisit-combat")) == 30){
          localStorage.setItem("firstVisit-combat",31);    
        }

        
      }
      
    },    
    nextPurchase: function (unit) {
      this.ping.play();
      if(this.getTixKey > -1){
        this.getTixKey++;
        this.getPurchase.y = this.getPurchase.origY
        
        //console.log(this.getTixKey)
        if(this.getTixKey == 4){
          
          //this.randomKey = Math.floor(Math.random() * 3)
          //console.log(this.randomKey)
          this.winSound.play();       
          var tixKey = this.randomKey
          var currentTix = parseInt(localStorage.getItem("TixCount"+tixKey )) 
          localStorage.setItem("TixCount"+tixKey , currentTix+5)
          

          console.log("tix key "+tixKey+" current "+currentTix)
          this.getTixKey = -1;
          if(parseInt(localStorage.getItem("firstVisit-combat")) == 31){
            //localStorage.setItem("firstVisit-combat",31);
            this.Notification.alpha = 1;
            this.Notification.x = this.selectHub.x
            this.Notification.y = this.selectHub.y              
          }  

        }
        else{
          var tixKey = this.getTixKey-1
          var currentTix = parseInt(localStorage.getItem("TixCount"+tixKey))
          localStorage.setItem("TixCount"+tixKey, currentTix+5)

          console.log("tix key "+tixKey+" current "+currentTix)
        }

      }

      if(this.getScrollKey > -1){
        this.getScrollKey++;
        this.getPurchase.y = this.getPurchase.origY
        
        if(this.getScrollKey == 4){
          //this.randomKey = Math.floor(Math.random() * 3)
          this.winSound.play();  
          var scrollKey = this.randomKey
          var currentScroll = parseInt(localStorage.getItem("blueprintCount"+scrollKey) ) 
          localStorage.setItem("blueprintCount"+scrollKey , currentScroll+5)

          console.log("scroll key "+scrollKey+" current "+currentScroll)
          this.getScrollKey = -1;
        
        }
        else{
          var scrollKey = this.getScrollKey
          var currentScroll = parseInt(localStorage.getItem("blueprintCount"+scrollKey )) 
          localStorage.setItem("blueprintCount"+scrollKey, currentScroll+5)

          console.log("scroll key "+scrollKey+" current "+currentScroll)
        }

      }      

    },            
    buyShards: function (unit) {
      store.order('shard_bundle');
    }, 
    buyShards1: function (unit) {
      store.order('shard_bundle2');
    }, 
    buyShards2: function (unit) {
      store.order('shard_bundle3');
    } 

  };

  window['simplewar'] = window['simplewar'] || {};
  window['simplewar'].Shop = Shop;

}());
