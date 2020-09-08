(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }
    Preloader.prototype = {
        preload: function () {
          
            //this.game.scale.refresh(); 
            
          
            var x = (this.game.width / 2);
            var y = this.game.height /2;      
            this.asset = this.add.sprite(x+300, y+500, 'preloader');
            this.asset.anchor.setTo(0.5, 0.5);
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.load.setPreloadSprite(this.asset);
      
            
            this.load.script('Gray', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Gray.js');
          
            this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
            
            this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;    
            
            this.load.image('mainBG', 'assets/mainBG.png');
            this.load.image('slay_small', 'assets/slay_small.png');
            this.load.image('slay_medium', 'assets/slay_medium.png');
            this.load.image('slay_large', 'assets/slay_large.png');
          
            this.load.image('gotSlain_small', 'assets/gotSlain_small.png');
            this.load.image('gotSlain_medium', 'assets/gotSlain_medium.png');
            this.load.image('gotSlain_large', 'assets/gotSlain_large.png');          
          
            this.load.image('monRewardCount_small', 'assets/monRewards_small.png');
            this.load.image('monRewardCount_medium', 'assets/monRewards_medium.png');
            this.load.image('monRewardCount_large', 'assets/monRewards_large.png');
          
          
            this.load.image('return_0', 'assets/return_grasslands.png');
            this.load.image('return_1', 'assets/return_cave.png');
            this.load.image('return_2', 'assets/return_mountain.png');      
          

            this.load.image('Red Dragon Gem', 'assets/monDrops/generic_red_dragon_gem.png');
            this.load.image('Blue Dragon Gem', 'assets/monDrops/generic_blue_dragon_gem.png');
            this.load.image('Yellow Dragon Gem', 'assets/monDrops/generic_yellow_dragon_gem.png');
            this.load.image('Small Monster Bone', 'assets/monDrops/generic_small_bone.png');
            this.load.image('Medium Monster Bone', 'assets/monDrops/generic_medium_bone.png');
            this.load.image('Large Monster Bone', 'assets/monDrops/generic_large_bone.png');  
            this.load.image('Fertile Droppings', 'assets/monDrops/generic_droppings.png');
          
            this.load.image('Red Dragon Gem Name', 'assets/monDrops/generic_red_dragon_gem_name.png');
            this.load.image('Blue Dragon Gem Name', 'assets/monDrops/generic_blue_dragon_gem_name.png');
            this.load.image('Yellow Dragon Gem Name', 'assets/monDrops/generic_yellow_dragon_gem_name.png');
            this.load.image('Small Monster Bone Name', 'assets/monDrops/generic_small_bone_name.png');
            this.load.image('Medium Monster Bone Name', 'assets/monDrops/generic_medium_bone_name.png');
            this.load.image('Large Monster Bone Name', 'assets/monDrops/generic_large_bone_name.png');  
            this.load.image('Fertile Droppings Name', 'assets/monDrops/generic_droppings_name.png');          
          
            this.load.image('Wocco Claw', 'assets/monDrops/wocco_claw.png');
            this.load.image('Wocco Pelt', 'assets/monDrops/wocco_pelt.png');
            this.load.image('Wocco Tail', 'assets/monDrops/wocco_tail.png');
            this.load.image('Wocco Feather', 'assets/monDrops/wocco_feather.png');
            this.load.image('Wocco Horn', 'assets/monDrops/wocco_horn.png');
            this.load.image('Wocco Acid Sac', 'assets/monDrops/wocco_acid_sac.png');  
          
            this.load.image('Wocco Claw Name', 'assets/monDrops/wocco_claw_name.png');
            this.load.image('Wocco Pelt Name', 'assets/monDrops/wocco_pelt_name.png');
            this.load.image('Wocco Tail Name', 'assets/monDrops/wocco_tail_name.png');
            this.load.image('Wocco Feather Name', 'assets/monDrops/wocco_feather_name.png');
            this.load.image('Wocco Horn Name', 'assets/monDrops/wocco_horn_name.png');
            this.load.image('Wocco Acid Sac Name', 'assets/monDrops/wocco_acid_sac_name.png');           
          
            this.load.image('Maddock Talon', 'assets/monDrops/maddock_talon.png');
            this.load.image('Maddock Skin', 'assets/monDrops/maddock_skin.png');
            this.load.image('Maddock Tail', 'assets/monDrops/maddock_tail.png');
            this.load.image('Maddock Scale', 'assets/monDrops/maddock_scale.png');
            this.load.image('Maddock Horn', 'assets/monDrops/maddock_horn.png');
            this.load.image('Maddock Spine', 'assets/monDrops/maddock_spine.png');  
          
            this.load.image('Maddock Talon Name', 'assets/monDrops/maddock_talon_name.png');
            this.load.image('Maddock Skin Name', 'assets/monDrops/maddock_skin_name.png');
            this.load.image('Maddock Tail Name', 'assets/monDrops/maddock_tail_name.png');
            this.load.image('Maddock Scale Name', 'assets/monDrops/maddock_scale_name.png');
            this.load.image('Maddock Horn Name', 'assets/monDrops/maddock_horn_name.png');
            this.load.image('Maddock Spine Name', 'assets/monDrops/maddock_spine_name.png');  
          
            this.load.image('Noot Claw', 'assets/monDrops/noot_claw.png');
            this.load.image('Noot Skin', 'assets/monDrops/noot_skin.png');
            this.load.image('Noot Tail', 'assets/monDrops/noot_tail.png');
            this.load.image('Noot Scale', 'assets/monDrops/noot_scale.png');
            this.load.image('Noot Horn', 'assets/monDrops/noot_horn.png');
            this.load.image('Noot Boom Gland', 'assets/monDrops/noot_boom_gland.png');  
          
            this.load.image('Noot Claw Name', 'assets/monDrops/noot_claw_name.png');
            this.load.image('Noot Skin Name', 'assets/monDrops/noot_skin_name.png');
            this.load.image('Noot Tail Name', 'assets/monDrops/noot_tail_name.png');
            this.load.image('Noot Scale Name', 'assets/monDrops/noot_scale_name.png');
            this.load.image('Noot Horn Name', 'assets/monDrops/noot_horn_name.png');
            this.load.image('Noot Boom Gland Name', 'assets/monDrops/noot_boom_gland_name.png');           
          
            this.load.image('heart', 'assets/heart.png');
            this.load.image('heart-hurt', 'assets/heart-hurt.png');
          
            this.load.image('staminaUI', 'assets/stamUI.png');
            this.load.image('stam-unused', 'assets/stam-unused.png');
            this.load.image('stam-used', 'assets/stam-used.png');
          
            this.load.image('armor', 'assets/ArmorIcon.png');
          
            this.load.image('rhythmIcon1', 'assets/rhythmIcon1.png');
            this.load.image('rhythmIcon2', 'assets/rhythmIcon2.png');
          
            this.load.image('rhythmBar', 'assets/rhythmBar.png');
          
            this.load.image('attackIcon1', 'assets/attackIcon1.png');
            this.load.image('attackIcon2', 'assets/attackIcon2.png');
            this.load.image('attackWarn', 'assets/attackIconWarn.png');
            
            this.load.image('emptyBot', 'assets/emptyBot.png');
          
            this.load.image('blockHit', 'assets/blockHit.png');  
            this.load.image('attackHit', 'assets/attackHit.png');
            this.load.image('attackHit-slash', 'assets/attackHit-slash.png');
            this.load.image('attackHit-stab', 'assets/attackHit-stab.png');
            this.load.image('attackHit-bash', 'assets/attackHit-bash.png');
            this.load.image('blockMiss', 'assets/blockMiss.png');  
            this.load.image('blockPerfect', 'assets/blockPerfect.png');  
            this.load.image('attackMiss', 'assets/attackMiss.png');
          
            this.load.image('ultSwipe', 'assets/ultSwipe.png')
            this.load.image('ultTap', 'assets/ultTap.png')
            this.load.image('ultHold', 'assets/ultHold.png');
            
            this.load.image('weatherIcon', 'http://openweathermap.org/img/wn/'+localStorage.getItem("weatherIcon"+localStorage.getItem("placeID"))+'@2x.png');
            //alert(localStorage.getItem("weatherIcon"+localStorage.getItem("placeID")))
          
            this.load.image('charge', 'assets/charge.png');   
            this.load.image('charge-spent', 'assets/charge-spent.png');  
            this.load.image('storeCharge', 'assets/storeCharge.png');  
          
            this.load.image('storeCharge-0', 'assets/storeCharge-0.png');  
            this.load.image('storeCharge-1', 'assets/storeCharge-1.png');  
            this.load.image('storeCharge-2', 'assets/storeCharge-2.png');  
            this.load.image('storeCharge-3', 'assets/storeCharge-3.png');  
            this.load.image('storeCharge-4', 'assets/storeCharge-4.png');  
            this.load.image('storeCharge-5', 'assets/storeCharge-5.png');  
            this.load.image('storeCharge-6', 'assets/storeCharge-6.png');  
          
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
            this.load.image('stamArrow', 'assets/stamArrow.png');
            this.load.image('aggroUI', 'assets/aggroUI.png');
            this.load.image('wallUI', 'assets/cavetile.png');
            this.load.image('botTile', 'assets/botTile.png');
            
            this.load.image('statUI', 'assets/statUI.png');
            this.load.image('uiFlash', 'assets/uiFlash.png');
            this.load.image('statUI2', 'assets/statUI2.png');
            
            this.load.image('BG0', 'assets/BG0.png');
            this.load.image('BG1', 'assets/BG1.png');
            this.load.image('BG2', 'assets/BG2.png');
            
            this.load.image('huntTickets', 'assets/HuntTickets.png');
            this.load.image('wardenHunt', 'assets/wardenHunt.png');
            this.load.image('wardenHunt-No', 'assets/wardenHunt-no.png');
            this.load.image('wardenReward', 'assets/wardenReward.png');
            this.load.image('wardenReward-No', 'assets/wardenReward-no.png');
            this.load.image('returnMap', 'assets/returnMap.png');          

            
            //weapons & potions
            this.load.image('Beginner-Blade', 'assets/wep/Beginner-Blade.png');
            this.load.image('Wooden-Shield', 'assets/wep/Wooden-Shield.png');
            this.load.image('Red-Potion', 'assets/wep/Red-Potion.png');
          
            //mon skills
            this.load.image('Rake', 'assets/monSkills/Rake.png');
            this.load.image('Bite', 'assets/monSkills/Bite.png');
            this.load.image('Acid-Spit', 'assets/monSkills/Acid-Spit.png');
            this.load.image('Regen', 'assets/monSkills/Regen.png');
            this.load.image('Explode', 'assets/monSkills/Explode.png');
          
            //skills
            this.load.image('Novice-Slash', 'assets/skills/Novice-Slash.png');
            this.load.image('Novice-Stab', 'assets/skills/Novice-Stab.png');   
            this.load.image('Shield-Bash', 'assets/skills/Shield-Bash.png');   
            this.load.image('Critical-Strike', 'assets/skills/Critical-Strike.png'); 
          
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
          
            this.load.image("wocco", 'assets/mon/wocco.png');
            this.load.image("wocco_name", 'assets/mon/wocco_name.png');
            this.load.image("noot", 'assets/mon/noot.png');
            this.load.image("noot_name", 'assets/mon/noot_name.png');
            this.load.image("maddock", 'assets/mon/maddock.png');
            this.load.image("maddock_name", 'assets/mon/maddock_name.png');
          
          
          
          
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
          
            this.game.load.audio('raiseShield', ['sound/zapsplat_warfare_sword_hit_another_then_scrape_release.wav']);
          
            
            
            
            
            
            
   
        }
        , create: function () {
            //this.asset.cropEnabled = false;
            //this.game.scale.setMinMax(1280,800,1920,1080)
            
        }
        , update: function () {
            this.game.scale.refresh(); 
            this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;            
            if (!!this.ready) {
                //console.log(localStorage.getItem('state'))
                this.game.state.start(localStorage.getItem('state'));
                //this.game.state.start('lose');
            }
        }
        , onLoadComplete: function () {
            this.ready = true;
        }
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Preloader = Preloader;
}());