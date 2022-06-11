(function () {
    'use strict';

    function Credit() {
        this.player = null;
    }
    Credit.prototype = {
  create: function () {
        this.game.scale.setMinMax(1280,800,1920,1080)
        this.game.stage.backgroundColor = "#160c2c";
        
      var x = this.game.width / 2
        , y = this.game.height / 2;

        
        this.map = this.add.sprite(0, 0, 'map');
        this.map.width = this.game.width;
        this.map.height = this.game.height;        
        this.map.alpha = 0.2;        
        
        

        
        
        
        this.animTimer1 = 50;
        this.animTimer2 = 50;

        var style = { font: '14pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.start = this.add.text(x, y-50, "----Programming----\nGlen Henry \n\n----Sound Effects----\n11linda\nNanakisan\nKenney Vleugels\nCharis Cayetano\nGlen Henry\nhttps://www.zapsplat.com\n\n----Music----\nDaisy Ale Soundworks\n\n----Art----\nVine\nKenney Vleugels\nGlen Henry\n\n----Code----\nGlen Henry", style); 
        this.start.anchor.setTo(0.5, 0.5);
        this.start.alpha = 0;
        this.start.inputEnabled = true;
        this.start.events.onInputDown.add(this.onDown, this);

        
        var style = { font: '24pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.credit = this.add.text(x, this.start.height+150, "BACK", style); 
        this.credit.anchor.setTo(0.5, 0.5);
        this.credit.alpha = 0;   
        this.credit.inputEnabled = true;
        this.credit.events.onInputDown.add(this.onDown, this);
        this.credit.events.onInputOver.add(this.hover, this);
        this.credit.events.onInputOut.add(this.hoverOut, this);      

        
        var style = { font: '14pt Muli', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 290 };
        this.version = this.add.text(this.game.width-50, this.game.height-24, "VER 0.0.0", style); 
        this.version.anchor.setTo(0.5, 0.5);
        this.version.alpha = 0;
                
        
        //sound
        this.ping = this.add.audio('ping');
        this.introSound = this.add.audio('swordSlashintro');
        this.mainMenuMusic = this.add.audio('On The Road to Adventure');
        this.tavernMusic = this.add.audio('Inn Music');
        this.introCheck = false;
        this.menuClicked = false;
        

        
        //this.input.onDown.add(this.onDown, this);
    },

    update: function () {
            if(!this.tavernMusic.isPlaying){
                this.tavernMusic.loop = true;
                this.tavernMusic.play();
                
            
            }
        this.start.alpha += (1 - this.start.alpha  ) * 0.05;
        this.credit.alpha += (1 - this.credit.alpha  ) * 0.05;      
        if(this.tavernMusic.volume == 0 && this.menuClicked){              
            
           this.game.state.start('preloader',true,true) 
        }        
        
    },
    hover: function (unit){
        unit.tint = 0x160c2c
    },
    hoverOut: function (unit){
        unit.tint = 0xFFFFFF
    },      
    onDown: function () {
    this.tavernMusic.fadeOut(2000)  
    this.ping.play();
    this.menuClicked = true;
    localStorage.setItem('state','menu')
    
	//this.game.state.start('choose');
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
    window['simplewar'].Credit = Credit;
}());