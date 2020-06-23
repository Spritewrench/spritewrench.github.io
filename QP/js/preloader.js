(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }
    Preloader.prototype = {
        preload: function () {
            var x = (this.game.width / 2)
                , y = this.game.height /2;      
            this.load.image('preloader', 'assets/preloader.gif');
            this.asset = this.add.sprite(x, y, 'preloader');
            this.asset.alpha = 0;
            this.asset.anchor.setTo(0.5, 0.5);
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.load.setPreloadSprite(this.asset);

            
            this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
          
          
          
            this.load.image('heart', 'assets/heart.png');
            this.load.image('heart-hurt', 'assets/heart-hurt.png');
          
            this.load.image('staminaUI', 'assets/stamUI.png');
            this.load.image('stam-unused', 'assets/stam-unused.png');
            this.load.image('stam-used', 'assets/stam-used.png');
          
            this.load.image('armor', 'assets/ArmorIcon.png');
            
            
            this.load.image('logo', 'assets/logo.png');
            this.load.image('logo2', 'assets/logo2.png');
            this.load.image('map', 'assets/map.png');
            this.load.image('map2', 'assets/gameBG.png');
            this.load.image('map3', 'assets/gameBG2.png');
            this.load.image('map4', 'assets/gameBG3.png');
            
            this.load.image('stamina', 'assets/stamina.png');
            this.load.image('ration', 'assets/ration.png');
            this.load.image('textBG', 'assets/textBG.png');
            this.load.image('levelDark', 'assets/levelDark.png');
            this.load.image('locked', 'assets/locked.png');
            this.load.image('aggroUI', 'assets/aggroUI.png');
            this.load.image('wallUI', 'assets/cavetile.png');
            this.load.image('botTile', 'assets/botTile.png');
            
            this.load.image('statUI', 'assets/statUI.png');
            this.load.image('uiFlash', 'assets/uiFlash.png');
            this.load.image('statUI2', 'assets/statUI2.png');
            

            
            this.load.image('scroll', 'assets/scroll.png');
            
            this.load.image('quest', 'assets/quest.png');
            this.load.image('quest-black', 'assets/quest-black.png');
            
            this.load.spritesheet("gobUI", 'assets/gobUI.png',16,16);
          
            
            this.load.spritesheet("coin", 'assets/FullCoins.png',16,16);

            this.load.image("bloodSplatter1", 'assets/bloodSplatter1.png');
            this.load.image("bloodSplatter2", 'assets/bloodSplatter2.png');
            
            this.load.image('party', 'assets/party.png');
            for(var i= 10; i < 40; i += 10){
                for(var j = 0; j < 3; j++){
                    this.load.image((i+j), 'assets/'+(i+j)+".png");
                    this.load.image((i+j)+"Big", 'assets/'+(i+j)+"Big.png");
                    this.game.load.audio('heroConsent'+(i+j), ['sound/'+(i+j)+'.ogg']);
                }
            }
            
            for(var j = 1; j <= 3; j++){
                this.load.image('tip'+j, 'assets/tip'+(j)+".png");
            }            
            this.load.image('help', 'assets/help.png');
            this.load.image('turnBack', 'assets/turnBack.png');
 
            this.load.image("mon", 'assets/mon/mon.png');
            this.load.image("monDmg", 'assets/mon/monDmg.png');
            
            this.load.image("goblin", 'assets/mon/gob.png');
            this.load.image("clothes", 'assets/mon/clothes.png');
            this.load.image("eyeBase", 'assets/mon/eye.png');
            this.load.image("teethBase", 'assets/mon/teeth.png');
            
            for(var i= 1; i < 4; i++){
                this.load.image("eyes"+i, 'assets/mon/eyes'+i+'.png');
                this.load.image("horn"+i, 'assets/mon/horn'+i+'.png');
                this.load.image("teeth"+i, 'assets/mon/teeth'+i+'.png');
                this.load.image("hair"+i, 'assets/mon/hair'+i+'.png');
                this.load.image("jewel"+i, 'assets/mon/jewel'+i+'.png');
                this.load.image("spot"+i, 'assets/mon/spot'+i+'.png');
            }            
            for(var i= 10; i < 60; i += 10){
                this.load.image("monType"+i, 'assets/mon/'+i+'.png');

            } 
            this.load.image("chest", 'assets/mon/chest.png');
            this.load.image('bg7', 'assets/bg7.png')
            this.load.image('combo', 'assets/combo.png');
            this.load.image('blank', 'assets/blank.png');
            this.load.image('clear', 'assets/clear.png');
            this.load.image('go', 'assets/go.png');
            this.load.image('player', 'assets/player.png');
            
            this.load.image('fire', 'assets/fire.png');
            
            
            //sound
            this.game.load.audio('ping', ['sound/zapsplat_magic_wand_ping_001_12529.ogg']);           
            this.game.load.audio('swordSlashintro', ['sound/zapsplat_warfare_sword_medieval_heavy_draw_scabbard_004_12091.ogg']);
            
            this.game.load.audio('attack1', ['sound/zapsplat_warfare_sword_swing_fast_whoosh_metal_001.ogg']);  
            this.game.load.audio('attack2', ['sound/zapsplat_warfare_sword_swing_fast_whoosh_metal_002.ogg']);  
            this.game.load.audio('attack3', ['sound/zapsplat_warfare_sword_swing_fast_whoosh_metal_003.ogg']);  
            this.game.load.audio('attack4', ['sound/zapsplat_warfare_sword_swing_fast_whoosh_metal_004.ogg']);  
            
            this.game.load.audio('spell1', ['sound/zapsplat_magic_wand_zap_spark_power_001.ogg']); 
            this.game.load.audio('spell2', ['sound/zapsplat_magic_wand_zap_spark_power_002.ogg']); 
            this.game.load.audio('spell3', ['sound/zapsplat_magic_wand_zap_spark_power_003.ogg']); 
            this.game.load.audio('spell4', ['sound/zapsplat_magic_wand_zap_spark_power_004.ogg']); 
            
            this.game.load.audio('knife1', ['sound/knifeSlice.ogg']);
            this.game.load.audio('knife2', ['sound/knifeSlice2.ogg']);
            
            this.game.load.audio('levelUp', ['sound/levelUp.ogg']);
            
            this.game.load.audio('chestOpen', ['sound/chestOpen.ogg']);
            
            this.game.load.audio('ability', ['sound/264981__renatalmar__sfx-magic.ogg']);
            this.game.load.audio('badAbility', ['sound/badAbility.ogg']);
            
            this.game.load.audio('gobLol1', ['sound/253526__nanakisan__evil-laugh-10.ogg']);
            this.game.load.audio('gobLol2', ['sound/253526__nanakisan__evil-laugh-11.ogg']);
            this.game.load.audio('gobDead', ['sound/249813__spookymodem__goblin-death.ogg']);
            this.game.load.audio('ability', ['sound/264981__renatalmar__sfx-magic.ogg']);
            
            this.game.load.audio('maleDying', ['sound/maleDying.ogg']);
            this.game.load.audio('femaleDying', ['sound/femaleDying.ogg']);       
            
            
            
            this.game.load.audio('On The Road to Adventure', ['sound/On The Road to Adventure.ogg']);
            this.game.load.audio('What We Were', ['sound/What We Were.ogg']);
            this.game.load.audio('Inn Music 2', ['sound/Inn Music 2.ogg']);
            this.game.load.audio('Inn Music', ['sound/Inn Music.ogg']);
            this.game.load.audio('clothBelt1', ['sound/clothBelt.ogg']);
            this.game.load.audio('clothBelt2', ['sound/clothBelt2.ogg']);
            this.game.load.audio('Battle', ['sound/Battle.ogg']);
            
            
            this.game.load.audio('page', ['sound/bookFlip2.ogg']);
            
            this.game.load.audio('notRM', ['sound/notRM.ogg']);
            this.game.load.audio('notRF', ['sound/notRM.ogg']);
            
            
            this.game.load.audio('handleCoins', ['sound/handleCoins.ogg']);
            
            this.game.load.audio('footstep', ['sound/footstep.ogg']);
            
            this.game.load.audio('campFire', ['sound/campFire.ogg']);
            
            this.game.load.audio('eating', ['sound/eating.ogg']);
            
            
            
            
            
   
        }
        , create: function () {
            this.asset.cropEnabled = false;
            this.game.scale.setMinMax(1280,800,1920,1080)
            console.log(this.game.width)
        }
        , update: function () {
            this.game.scale.refresh(); 
            this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;            
            if (!!this.ready) {
                console.log(localStorage.getItem('state'))
                //this.game.state.start(localStorage.getItem('state'));
                this.game.state.start('game');
            }
        }
        , onLoadComplete: function () {
            this.ready = true;
        }
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Preloader = Preloader;
}());