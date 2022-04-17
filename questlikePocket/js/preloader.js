(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }
    Preloader.prototype = {
        preload: function () {
            try{
                //setupVideoReward()
                //getAds()
            }
            catch(error){
              //alert(error)
              //admob.rewardVideo.show();   
            }           
            //this.game.scale.refresh(); 
            
            //console.log("where we going? "+localStorage.getItem('state'))
            var x = (this.game.width /2);
            var y = this.game.height /2;     

            this.map = this.add.sprite(x, y, 'loadBG'); 
            this.map.anchor.setTo(0.5, 0.5)
            this.map.scale.set(this.game.resolution);
            this.map.width = this.game.width;
            this.map.height = this.game.height;      

            this.asset = this.add.sprite(x, y+250, 'preloader');
            //this.asset.scale.set(this.game.resolution);
            //this.asset.width = 100;
            //this.asset.height = 100;
            this.asset.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.asset);
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            localStorage.setItem("writeCount",0)
            localStorage.setItem("writeMax",0)
      
            

          
            this.load.bitmapFont('minecraftia', 'assets/minecraftia.webp', 'assets/minecraftia.xml');
            
            
            //this.load.image('preloader', 'assets/preloader.gif');
            
            this.load.image('uiArrow', 'assets/arrow.webp');
          
            

            this.load.image('mainBG', 'assets/mainBG.webp');  
            this.load.image('craftBG', 'assets/craftBG.webp');
            this.load.image('craftBGE', 'assets/craftBG_equipped.webp');
            this.load.image('craftArrowLeft', 'assets/craftArrowLeft.webp');
            this.load.image('craftArrowRight', 'assets/craftArrowRight.webp');
            this.load.image('slay_small', 'assets/slay_small.webp');
            this.load.image('slay_medium', 'assets/slay_medium.webp');
            this.load.image('slay_large', 'assets/slay_large.webp');
          
            this.load.image('gotSlain_small', 'assets/gotSlain_small.webp');
            this.load.image('gotSlain_medium', 'assets/gotSlain_medium.webp');
            this.load.image('gotSlain_large', 'assets/gotSlain_large.webp');          
          
            this.load.image('monRewardCount_small', 'assets/monRewards_small.webp');
            this.load.image('monRewardCount_medium', 'assets/monRewards_medium.webp');
            this.load.image('monRewardCount_large', 'assets/monRewards_large.webp');
          
          
            this.load.image('return_0', 'assets/return_grasslands.webp');
            this.load.image('return_1', 'assets/return_cave.webp');
            this.load.image('return_2', 'assets/return_mountain.webp');     
            this.load.image('return_0MINI', 'assets/return_grasslandsMINI.webp');
            this.load.image('return_1MINI', 'assets/return_caveMINI.webp');
            this.load.image('return_2MINI', 'assets/return_mountainMINI.webp'); 
            this.load.image('return_Hub', 'assets/return_hub.webp'); 
          
            this.load.image('rankBadge', 'assets/rank.webp');
          
            this.load.image('rankBadge-2', 'assets/rank-gold.webp');
            this.load.image('rankBadge-1', 'assets/rank-silver.webp');
            this.load.image('rankBadge-0', 'assets/rank-bronze.webp');
          
            this.load.image('submit', 'assets/submit.webp');
            this.load.image('submitNo', 'assets/submitNo.webp');
          
            this.load.image('openCraft', 'assets/openCraft.webp'); 
            this.load.image('openGuild', 'assets/guild.webp'); 
            this.load.image('openFaction', 'assets/openFaction.webp'); 
            this.load.image('openShop', 'assets/openShop.webp'); 
            this.load.image('openFactionNo', 'assets/openFactionNo.webp'); 
            this.load.image('openShopNo', 'assets/openShopNo.webp');
            this.load.image('openLeaderboard', 'assets/openLeaderboard.webp');
            this.load.image('openLeaderboardNo', 'assets/openLeaderboardNo.webp');
          
            this.load.image('elem-1', 'assets/skills/elem-nature.webp');
            this.load.image('elem-2', 'assets/skills/elem-earth.webp');    
            this.load.image('elem-3', 'assets/skills/elem-fire.webp');
              

            
            this.load.image('loginBonus0', 'assets/map/loginBonus-1.webp'); 
            this.load.image('loginBonus1', 'assets/map/loginBonus1.webp');   
            this.load.image('loginBonus2', 'assets/map/loginBonus2.webp');   
            this.load.image('loginBonus3', 'assets/map/loginBonus3.webp');   
            this.load.image('loginBonus4', 'assets/map/loginBonus4.webp');   
            this.load.image('loginBonus5', 'assets/map/loginBonus5.webp'); 
            
            this.load.image('dailyQuest0', 'assets/map/Daily0.webp'); 
            this.load.image('dailyQuest1', 'assets/map/Daily1.webp'); 
            this.load.image('dailyQuest2', 'assets/map/Daily2.webp'); 
            this.load.image('dailyQuest3', 'assets/map/Daily3.webp'); 

            this.load.image('popUp', 'assets/popUp.webp'); 
          
            
            this.load.image('Apex Shards', 'assets/monDrops/rageGem.webp');
            this.load.image('Red Dragon Gem', 'assets/monDrops/generic_red_dragon_gem.webp');
            this.load.image('Blue Dragon Gem', 'assets/monDrops/generic_blue_dragon_gem.webp');
            this.load.image('Yellow Dragon Gem', 'assets/monDrops/generic_yellow_dragon_gem.webp');
            this.load.image('Prismatic Gem', 'assets/monDrops/prismaticGem.webp');
            this.load.image('Small Monster Bone', 'assets/monDrops/generic_small_bone.webp');
            this.load.image('Medium Monster Bone', 'assets/monDrops/generic_medium_bone.webp');
            this.load.image('Large Monster Bone', 'assets/monDrops/generic_large_bone.webp');  
            this.load.image('Fertile Droppings', 'assets/monDrops/generic_droppings.webp');        
          
            this.load.image('Wocco Claw', 'assets/monDrops/wocco_claw.webp');
            this.load.image('Wocco Pelt', 'assets/monDrops/wocco_pelt.webp');
            this.load.image('Wocco Tail', 'assets/monDrops/wocco_tail.webp');
            this.load.image('Wocco Feather', 'assets/monDrops/wocco_feather.webp');
            this.load.image('Wocco Horn', 'assets/monDrops/wocco_horn.webp');
            this.load.image('Wocco Acid Sac', 'assets/monDrops/wocco_acid_sac.webp');  
          
            this.load.image('Nivreh Claw', 'assets/monDrops/nivreh_claw.webp');
            this.load.image('Nivreh Hide', 'assets/monDrops/nivreh_hide.webp');
            this.load.image('Nivreh Tail', 'assets/monDrops/nivreh_tail.webp');
            this.load.image('Nivreh Feather', 'assets/monDrops/nivreh_feather.webp');
            this.load.image('Nivreh Horn', 'assets/monDrops/nivreh_horn.webp');
            this.load.image('Nivreh Tongue', 'assets/monDrops/nivreh_tongue.webp');   
          
            this.load.image('Nioleo Claw', 'assets/monDrops/nioleo_claw.webp');
            this.load.image('Nioleo Hide', 'assets/monDrops/nioleo_hide.webp');
            this.load.image('Nioleo Tail', 'assets/monDrops/nioleo_tail.webp');
            this.load.image('Nioleo Mane', 'assets/monDrops/nioleo_mane.webp');
            this.load.image('Nioleo Scale', 'assets/monDrops/nioleo_scale.webp');
            this.load.image('Nioleo Tusk', 'assets/monDrops/nioleo_tusk.webp');   
          
            this.load.image('Urania Claw', 'assets/monDrops/urania_claw.webp');
            this.load.image('Urania Pelt', 'assets/monDrops/urania_pelt.webp');
            this.load.image('Urania Tail', 'assets/monDrops/urania_tail.webp');
            this.load.image('Urania Wing Scale', 'assets/monDrops/urania_wing_scale.webp');
            this.load.image('Urania Venom Sac', 'assets/monDrops/urania_venom_sac.webp');
            this.load.image('Urania Poison Dust', 'assets/monDrops/urania_poison_dust.webp'); 
          
            this.load.image("Patun's Claw", 'assets/monDrops/patuns_claw.webp');
            this.load.image('Gloom Feather', 'assets/monDrops/gloom_feather.webp');
            this.load.image('Umbral Feather', 'assets/monDrops/umbral_feather.webp');
            this.load.image('Dusk Feather', 'assets/monDrops/dusk_feather.webp');
            this.load.image('Eventide Feather', 'assets/monDrops/eventide_feather.webp');
            this.load.image('Starlight Feather', 'assets/monDrops/starlight_feather.webp');           
          
            this.load.image('Maddock Talon', 'assets/monDrops/maddock_talon.webp');
            this.load.image('Maddock Skin', 'assets/monDrops/maddock_skin.webp');
            this.load.image('Maddock Tail', 'assets/monDrops/maddock_tail.webp');
            this.load.image('Maddock Scale', 'assets/monDrops/maddock_scale.webp');
            this.load.image('Maddock Horn', 'assets/monDrops/maddock_horn.webp');
            this.load.image('Maddock Spine', 'assets/monDrops/maddock_spine.webp');  

            this.load.image('Stone Eater Tooth', 'assets/monDrops/stone_eater_tooth.webp');
            this.load.image('Stone Eater Hide', 'assets/monDrops/stone_eater_hide.webp');
            this.load.image('Stone Eater Jaw Bone', 'assets/monDrops/stone_eater_jawbone.webp');
            this.load.image('Old Thread', 'assets/monDrops/old_thread.webp');
            this.load.image('Curious Spring', 'assets/monDrops/curious_spring.webp');
            this.load.image('Odd Cogs', 'assets/monDrops/odd_cogs.webp');   
      
            this.load.image('Digested Talon', 'assets/monDrops/digested_talon.webp');
            this.load.image('Digested Skin', 'assets/monDrops/digested_skin.webp');
            this.load.image('Jellified Tail', 'assets/monDrops/jellified_tail.webp');
            this.load.image('Jellified Scale', 'assets/monDrops/jellified_scale.webp');
            this.load.image('Jellified Spine', 'assets/monDrops/jellified_spine.webp');
            this.load.image('Dragon Slough', 'assets/monDrops/dragon_slough.webp');  
     
            this.load.image('Lacuna Claw', 'assets/monDrops/lacuna_claw.webp');
            this.load.image('Lacuna Hide', 'assets/monDrops/lacuna_hide.webp');
            this.load.image('Lacuna Tail', 'assets/monDrops/lacuna_tail.webp');
            this.load.image('Lacuna Scale', 'assets/monDrops/lacuna_scale.webp');
            this.load.image('Lacuna Horn', 'assets/monDrops/lacuna_horn.webp');
            this.load.image('Lacuna Mane', 'assets/monDrops/lacuna_mane.webp');         
          
            this.load.image("Yssun's Claw", 'assets/monDrops/yssun_claw.webp');
            this.load.image('Unseen Scale', 'assets/monDrops/unseen_scale.webp');
            this.load.image('Cryptic Scale', 'assets/monDrops/cryptic_scale.webp');
            this.load.image('Arcane Scale', 'assets/monDrops/arcane_scale.webp');
            this.load.image('Nameless Scale', 'assets/monDrops/nameless_scale.webp');
            this.load.image('Esoteric Truth', 'assets/monDrops/esoteric_lie.webp');          
                  
            this.load.image('Noot Claw', 'assets/monDrops/noot_claw.webp');
            this.load.image('Noot Skin', 'assets/monDrops/noot_skin.webp');
            this.load.image('Noot Tail', 'assets/monDrops/noot_tail.webp');
            this.load.image('Noot Scale', 'assets/monDrops/noot_scale.webp');
            this.load.image('Noot Horn', 'assets/monDrops/noot_horn.webp');
            this.load.image('Noot Boom Gland', 'assets/monDrops/noot_boom_gland.webp');  
        
            this.load.image('Chupa Claw', 'assets/monDrops/chupa_claw.webp');
            this.load.image('Chupa Fur', 'assets/monDrops/chupa_fur.webp');
            this.load.image('Chupa Tail', 'assets/monDrops/chupa_tail.webp');
            this.load.image('Chupa Fang', 'assets/monDrops/chupa_fang.webp');
            this.load.image('Chupa Horn', 'assets/monDrops/chupa_horn.webp');
            this.load.image('Stolen Egg', 'assets/monDrops/stolen_egg.webp');            

            this.load.image('Keet Keet Talon', 'assets/monDrops/keetkeet_talon.webp');
            this.load.image('Keet Keet Pelt', 'assets/monDrops/keetkeet_pelt.webp');
            this.load.image('Keet Keet Tail', 'assets/monDrops/keetkeet_tail.webp');
            this.load.image('Keet Keet Feather', 'assets/monDrops/keetkeet_feather.webp');
            this.load.image('Keet Keet Beak', 'assets/monDrops/keetkeet_beak.webp');
            this.load.image('Keet Keet Egg', 'assets/monDrops/keetkeet_egg.webp');      

            this.load.image('Ancient Claw', 'assets/monDrops/ancient_claw.webp');
            this.load.image('Ancient Hide', 'assets/monDrops/ancient_hide.webp');
            this.load.image('Ancient Tail', 'assets/monDrops/ancient_tail.webp');
            this.load.image('Ancient Scale', 'assets/monDrops/ancient_scale.webp');
            this.load.image('Ancient Horn', 'assets/monDrops/ancient_horn.webp');
            this.load.image('Ancient Skull', 'assets/monDrops/ancient_skull.webp');          
          
            this.load.image("Stoor's Claw", 'assets/monDrops/stoors_claw.webp');
            this.load.image('Brilliant Scale', 'assets/monDrops/brilliant_scale.webp');
            this.load.image('Radiant Scale', 'assets/monDrops/radiant_scale.webp');
            this.load.image('Sparkling Scale', 'assets/monDrops/sparkling_scale.webp');
            this.load.image('Vivid Scale', 'assets/monDrops/vivid_scale.webp');
            this.load.image('Dawn Shard', 'assets/monDrops/dawn_shard.webp');            
            
            this.load.image('Guild Token', 'assets/monDrops/guildToken.webp');  
            
            this.load.image('craftFlash', 'assets/craftFlash.webp');
            this.load.image('craftFlashSpecial', 'assets/craftFlashSpecial.webp');  

            this.load.image('monHeart', 'assets/monHeart.webp');
            this.load.image('monHeart-Danger', 'assets/monHeart-Danger.webp');
            this.load.image('heart', 'assets/heart.webp');
            this.load.image('heart-hurt', 'assets/heart-hurt.webp');
            this.load.image('gotHit', 'assets/hurt.webp');
          
            this.load.image('staminaUI', 'assets/stamUI.webp');
            this.load.image('stam-unused', 'assets/stam-unused.webp');
            this.load.image('stam-used', 'assets/stam-used.webp');
          
          
            this.load.image('rhythmIcon1', 'assets/rhythmIcon1.webp');
            this.load.image('rhythmIcon2', 'assets/rhythmIcon2.webp');
          
            this.load.image('rhythmBar', 'assets/rhythmBar.webp');
          
            this.load.image('attackIcon1', 'assets/attackIcon1.webp');
            this.load.image('attackIcon2', 'assets/attackIcon2.webp');
            this.load.image('attackWarn', 'assets/attackIconWarn.webp');
            
            this.load.image('emptyBot', 'assets/potions/emptyBot.webp');
            
          
            this.load.image('blockHit', 'assets/blockHit.webp');  
            this.load.image('blockEvade', 'assets/blockEvade.webp');  
            this.load.image('attackHit', 'assets/attackHit.webp');
            this.load.image('attackHit-slash', 'assets/attackHit-slash.webp');
            this.load.image('attackHit-stab', 'assets/attackHit-stab.webp');
            this.load.image('attackHit-bash', 'assets/attackHit-bash.webp');
            this.load.image('blockMiss', 'assets/blockMiss.webp');  
            this.load.image('blockPerfect', 'assets/blockPerfect.webp'); 
            this.load.image('attackLight', 'assets/attackLight.webp'); 
            this.load.image('attackMiss', 'assets/attackMiss.webp');
          
            this.load.image('new', 'assets/new.webp');
            
            this.load.image('ultSwipe', 'assets/ultSwipe.webp')
            this.load.image('ultTap', 'assets/ultTap.webp')
            this.load.image('ultHold', 'assets/ultHold.webp');
            
            //this.load.image('weatherIcon', 'https://openweathermap.org/img/wn/'+localStorage.getItem("weatherIcon"+localStorage.getItem("placeID"))+'@2x.webp');
            /*this.load.image('weatherIcon01-d', 'assets/weather/01d@2x.webp');
            this.load.image('weatherIcon01-n', 'assets/weather/01n@2x.webp');
            this.load.image('weatherIcon02-d', 'assets/weather/02d@2x.webp');
            this.load.image('weatherIcon02-n', 'assets/weather/02n@2x.webp');  
            this.load.image('weatherIcon03-d', 'assets/weather/03d@2x.webp');
            this.load.image('weatherIcon03-n', 'assets/weather/03n@2x.webp');    
            this.load.image('weatherIcon04-d', 'assets/weather/04d@2x.webp');
            this.load.image('weatherIcon04-n', 'assets/weather/04n@2x.webp');  
            this.load.image('weatherIcon09-d', 'assets/weather/09d@2x.webp');
            this.load.image('weatherIcon09-n', 'assets/weather/09n@2x.webp');      
            this.load.image('weatherIcon10-d', 'assets/weather/10d@2x.webp');
            this.load.image('weatherIcon10-n', 'assets/weather/10n@2x.webp');    
            this.load.image('weatherIcon11-d', 'assets/weather/11d@2x.webp');
            this.load.image('weatherIcon11-n', 'assets/weather/11n@2x.webp');       
            this.load.image('weatherIcon13-d', 'assets/weather/13d@2x.webp');
            this.load.image('weatherIcon13-n', 'assets/weather/13n@2x.webp');  
            this.load.image('weatherIcon50-d', 'assets/weather/50d@2x.webp');
            this.load.image('weatherIcon50-n', 'assets/weather/50n@2x.webp');     */         
            ////alert(localStorage.getItem("weatherIcon"+localStorage.getItem("placeID")))
          
            this.load.image('charge', 'assets/charge.webp');   
            this.load.image('charge-spent', 'assets/charge-spent.webp');  

            this.load.image('chargePip', 'assets/pipCharge.webp');   
            this.load.image('chargePipFull', 'assets/pipCharge-full.webp');   

            this.load.image('logo', 'assets/logo.webp');
            this.load.image('logo2', 'assets/logo2.webp');
            this.load.image('map', 'assets/map.webp');
            this.load.image('map2', 'assets/gameBG.webp');
            this.load.image('map3', 'assets/gameBG2.webp');
            this.load.image('map4', 'assets/gameBG3.webp');

            this.load.image('loadGrass', 'assets/loadGrass.webp');
            
            this.load.image('stamina', 'assets/stamina.webp');
            this.load.image('ration', 'assets/ration.webp');
            this.load.image('textBG', 'assets/textBG.webp');
            this.load.image('levelDark', 'assets/levelDark.webp');
            this.load.image('locked', 'assets/locked.webp');
            this.load.image('stamArrow', 'assets/stamArrow.webp');
            this.load.image('dodgeArrow', 'assets/dodgeArrow.webp');
            
            this.load.image('BG-1', 'assets/BG-1.webp');
            this.load.image('BG0', 'assets/BG0.webp');
            this.load.image('BG1', 'assets/BG1.webp');
            this.load.image('BG2', 'assets/BG2.webp');

            this.load.image('BG-1-night', 'assets/BG-1-night.webp');
            this.load.image('BG0-night', 'assets/BG0-night.webp');
            this.load.image('BG1-night', 'assets/BG1-night.webp');
            this.load.image('BG2-night', 'assets/BG2-night.webp');            

            this.load.image('BG0_parallax', 'assets/BG0_parallax.webp');
            this.load.image('BG1_parallax', 'assets/BG1_parallax.webp');
            this.load.image('BG2_parallax', 'assets/BG2_parallax.webp');            
          
            this.load.image('legendOverlay', 'assets/legendOverlay.webp');  
            this.load.image('bagOverlay', 'assets/bagOverlay.webp');            
          
            this.load.image('factionBG0', 'assets/factionBG0.webp');
            this.load.image('factionBG1', 'assets/factionBG1.webp');
            this.load.image('factionBG2', 'assets/factionBG2.webp');          
            
            this.load.image('huntTickets', 'assets/HuntTickets.webp');
            this.load.image('contHunt', 'assets/contHunt.webp');
            this.load.image('wardenHunt', 'assets/wardenHunt.webp');
            this.load.image('wardenHunt-1', 'assets/wardenHunt-1.webp');
            this.load.image('wardenHunt0', 'assets/wardenHunt0.webp');
            this.load.image('wardenHunt1', 'assets/wardenHunt1.webp');
            this.load.image('wardenHunt2', 'assets/wardenHunt2.webp');

            this.load.image('shopHunt0', 'assets/shopHunt0.webp');
            this.load.image('shopHunt1', 'assets/shopHunt1.webp');
            this.load.image('shopHunt2', 'assets/shopHunt2.webp');  
            this.load.image('shopHunt3', 'assets/shopHunt3.webp');  

            this.load.image('shopTrade', 'assets/shopTrade.webp');
            this.load.image('shopTrade0', 'assets/shopTrade0.webp');
            this.load.image('shopTrade1', 'assets/shopTrade1.webp');
            this.load.image('shopTrade2', 'assets/shopTrade2.webp');
            this.load.image('shopTradeBlue', 'assets/shopTradeBlue.webp');
            this.load.image('shopTrade-no', 'assets/shopTrade-no.webp');    
            
            this.load.image('unlockTitle', 'assets/unlockTitle.webp');    
            this.load.image('unlockTitle-no', 'assets/unlockTitle-no.webp');    
            
            this.load.image('wardenHunt-No', 'assets/wardenHuntTixNo.webp');
            this.load.image('wardenTalk', 'assets/talk.webp');
            this.load.image('wardenReward', 'assets/wardenReward.webp');
            this.load.image('wardenReward-No', 'assets/wardenReward-no.webp');
            this.load.image('wardenGift', 'assets/wardenGift.webp');
            this.load.image('wardenGift-No', 'assets/wardenGift-no.webp');          
            this.load.image('returnMap', 'assets/returnMap.webp');
            this.load.image('returnHub', 'assets/goHub.webp');
            this.load.image('watch', 'assets/watch.webp'); 
            this.load.image('watchNo', 'assets/watchNo.webp'); 
          
            this.load.image('wardenOpacity', 'assets/warden/wardenOpacity.webp'); 
            this.load.image('wardenOverlay', 'assets/warden/wardenOverlay.webp'); 
            this.load.image('relationship', 'assets/warden/relationship.webp'); 
            this.load.image('textBackdrop', 'assets/warden/textBackdrop.webp'); 
            this.load.image('speechBubble', 'assets/speech.webp');
            this.load.image('speechDim', 'assets/speechDim.webp'); 
            
            this.load.image('warden-1', 'assets/guildWarden.webp'); 
            this.load.image('warden0', 'assets/warden0.webp');  
            this.load.image('warden1', 'assets/warden1.webp');    
            this.load.image('warden2', 'assets/warden2.webp');

            this.load.image('warden2-happy', 'assets/warden2-happy.webp');
            this.load.image('warden2-sad', 'assets/warden2-sad.webp');
            this.load.image('warden2-angry', 'assets/warden2-angry.webp');            
          
            this.load.image('factionLeader0', 'assets/factionLeader0.webp');  
            this.load.image('factionLeader1', 'assets/factionLeader1.webp');    
            this.load.image('factionLeader2', 'assets/factionLeader2.webp'); 
          
            this.load.image('tip0', 'assets/map/tip0.webp');  
            this.load.image('tip1', 'assets/map/tip1.webp');    
            this.load.image('tip2', 'assets/map/tip2.webp');           
            
            this.load.image('guildWarden', 'assets/guildWarden.webp');
            this.load.image('guildShopkeep', 'assets/guildShopkeep.webp');
            this.load.image('guildArchivist', 'assets/guildArchivist.webp');
          
            this.load.image('repair', 'assets/repair.webp'); 
            this.load.image('craft', 'assets/craft.webp'); 
            this.load.image('repairNo', 'assets/repairNo.webp'); 
            this.load.image('craftNo', 'assets/craftNo.webp');

            this.load.image('okay', 'assets/okay.webp'); 
            this.load.image('okayNo', 'assets/okayNo.webp'); 
            this.load.image('share', 'assets/share.webp'); 

            this.load.image('equip', 'assets/equip.webp'); 
            this.load.image('equipNo', 'assets/equipNo.webp');  
            this.load.image('equipped', 'assets/equipped.webp'); 
            this.load.image('unequip', 'assets/unequip.webp'); 

               
            this.load.image('upgrade', 'assets/upgrade.webp'); 
            this.load.image('upgradeNo', 'assets/upgradeNo.webp'); 
          
            this.load.image('blueprint', 'assets/blueprint.webp'); 
            
            this.load.image('blueprint0', 'assets/scroll0.webp'); 
            this.load.image('blueprint1', 'assets/scroll1.webp'); 
            this.load.image('blueprint2', 'assets/scroll2.webp'); 
            this.load.image('blueprint3', 'assets/scroll3.webp'); 

            this.load.image('cancel', 'assets/cancel.webp'); 

            this.load.image('vetRank', 'assets/rank_t.webp'); 

            this.load.image('shardCount', 'assets/shardCount.webp'); 

            this.load.image('scrollBundle', 'assets/scrollBundle.webp'); 
            this.load.image('gemBundle', 'assets/gemBundle.webp'); 
            this.load.image('ticketBundle', 'assets/ticketBundle.webp'); 
            this.load.image('buyShard', 'assets/buyShard.webp');
            this.load.image('buyShardBag', 'assets/buyShardBag.webp');
            this.load.image('buyShardBox', 'assets/buyShardBox.webp'); 

            this.load.image('spendShard', 'assets/spendShard.webp'); 
            this.load.image('spendShard-no', 'assets/spendShard-no.webp'); 
            this.load.image('purchaseShard', 'assets/purchaseShard.webp'); 
            this.load.image('purchaseShard1', 'assets/purchaseShard1.webp'); 
            this.load.image('purchaseShard2', 'assets/purchaseShard2.webp'); 
            this.load.image('sparkle', 'assets/sparkle.webp'); 

            this.load.image('skillGlow', 'assets/skills/skillGlow.webp'); 

            
            this.load.image('OverlayBG', 'assets/shop_purchaseOverlayBG.webp'); 

            this.load.image('getTix0', 'assets/getTix0.webp'); 
            this.load.image('getTix1', 'assets/getTix1.webp'); 
            this.load.image('getTix2', 'assets/getTix2.webp'); 


            this.load.image('getScroll0', 'assets/getScroll0.webp'); 
            this.load.image('getScroll1', 'assets/getScroll1.webp'); 
            this.load.image('getScroll2', 'assets/getScroll2.webp');             

            //hunt flies
            this.load.image('huntFly0', 'assets/huntFly0.webp');
            this.load.image('huntFly1', 'assets/huntFly1.webp');
            this.load.image('huntFly2', 'assets/huntFly2.webp');
            
            //buttons
            this.load.image('yesButton', 'assets/yesButton.webp');
            this.load.image('yesButton-no', 'assets/yesButton-no.webp');
            this.load.image('noButton', 'assets/noButton.webp');            
            
            //element weapon backdrop
            this.load.image('elemTile0', 'assets/wep/elemTile0.webp');
            this.load.image('elemTile1', 'assets/wep/elemTile1.webp');
            this.load.image('elemTile2', 'assets/wep/elemTile2.webp');
            this.load.image('elemTile3', 'assets/wep/elemTile3.webp');
            this.load.image('charm', 'assets/wep/charmTiles.webp'); 
            this.load.image('charm-equipped', 'assets/wep/charmTiles-selected.webp'); 
            this.load.image('tileSelect', 'assets/wep/tileSelect.webp');
            this.load.image('newWep', 'assets/wep/newWep.webp');
            
            //charms
            this.load.image('Mysterious Claw Charm', 'assets/wep/charms/Mysterious Claw Charm.webp');
            this.load.image('Mysterious Claw Charm-no', 'assets/wep/charms/Mysterious Claw Charm-no.webp');
            this.load.image('Grass Cutter Charm', 'assets/wep/charms/Grass Cutter Charm.webp');
            this.load.image('Grass Cutter Charm-no', 'assets/wep/charms/Grass Cutter Charm-no.webp');
            this.load.image('Hard Rock Charm', 'assets/wep/charms/Hard Rock Charm.webp');
            this.load.image('Hard Rock Charm-no', 'assets/wep/charms/Hard Rock Charm-no.webp');
            this.load.image('Gentle Flame Charm', 'assets/wep/charms/Gentle Flame Charm.webp');
            this.load.image('Gentle Flame Charm-no', 'assets/wep/charms/Gentle Flame Charm-no.webp');
            this.load.image('Sharp Charm', 'assets/wep/charms/Sharp Charm.webp');
            this.load.image('Sharp Charm-no', 'assets/wep/charms/Sharp Charm-no.webp');
            this.load.image('Strong Arm Charm', 'assets/wep/charms/Strong Arm Charm.webp');
            this.load.image('Strong Arm Charm-no', 'assets/wep/charms/Strong Arm Charm-no.webp');
            this.load.image('Lunar Grace Charm', 'assets/wep/charms/Lunar Grace Charm.webp');
            this.load.image('Lunar Grace Charm-no', 'assets/wep/charms/Lunar Grace Charm-no.webp');
            
            //weapons & potions
            this.load.image('equipped', 'assets/wep/equipped.webp');
            this.load.image('B-Sword', 'assets/wep/B-Sword.webp');
            this.load.image('B-Knife', 'assets/wep/B-Knife.webp');
            this.load.image('B-Hammer', 'assets/wep/B-Hammer.webp');
            
            this.load.image('Wocco Feather Duster', 'assets/wep/Wocco Feather Duster.webp');
            this.load.image('Wocco Feather Duster-no', 'assets/wep/Wocco Feather Duster-no.webp');
            this.load.image('Tunnel Tusk', 'assets/wep/Tunnel Tusk.webp');
            this.load.image('Tunnel Tusk-no', 'assets/wep/Tunnel Tusk-no.webp');
            this.load.image('Echo Hammer', 'assets/wep/Echo Hammer.webp'); 
            this.load.image('Echo Hammer-no', 'assets/wep/Echo Hammer-no.webp');          
            this.load.image('Toxic Teeth', 'assets/wep/Toxic Teeth.webp');
            this.load.image('Toxic Teeth-no', 'assets/wep/Toxic Teeth-no.webp');
          
            this.load.image('Knick-Knack Knocker', 'assets/wep/Knick-Knack Knocker.webp');
            this.load.image('Knick-Knack Knocker-no', 'assets/wep/Knick-Knack Knocker-no.webp');
            this.load.image('Maggot Knife', 'assets/wep/Maggot Knife.webp');
            this.load.image('Maggot Knife-no', 'assets/wep/Maggot Knife-no.webp');
            this.load.image('Maiden Heart', 'assets/wep/Maiden Heart.webp');
            this.load.image('Maiden Heart-no', 'assets/wep/Maiden Heart-no.webp');
            this.load.image('Lokum Blade', 'assets/wep/Lokum Blade.webp');  
            this.load.image('Lokum Blade-no', 'assets/wep/Lokum Blade-no.webp');  
          
            this.load.image('Boom Bringer', 'assets/wep/Boom Bringer.webp');
            this.load.image('Boom Bringer-no', 'assets/wep/Boom Bringer-no.webp');
            this.load.image('Shell Breaker', 'assets/wep/Shell Breaker.webp');
            this.load.image('Shell Breaker-no', 'assets/wep/Shell Breaker-no.webp');
            this.load.image('Crownsmasher', 'assets/wep/Crownsmasher.webp');
            this.load.image('Crownsmasher-no', 'assets/wep/Crownsmasher-no.webp');
            this.load.image('Elder Kris', 'assets/wep/Elder Kris.webp');  
            this.load.image('Elder Kris-no', 'assets/wep/Elder Kris-no.webp');        

            this.load.image('Apex Blade', 'assets/wep/Apex Blade.webp');
            this.load.image('Apex Blade-variant', 'assets/wep/Apex Blade-variant.webp');
            this.load.image('Apex Blade-no', 'assets/wep/Apex Blade-no.webp');

            //legendary weapons
            this.load.image('Rising Dawn', 'assets/wep/Rising Dawn.webp');
            this.load.image('Night Whisper', 'assets/wep/Night Whisper.webp');
            this.load.image('White Lie', 'assets/wep/White Lie.webp');       

            this.load.image('Rising Dawn-no', 'assets/wep/Rising Dawn-no.webp');
            this.load.image('Night Whisper-no', 'assets/wep/Night Whisper-no.webp');
            this.load.image('White Lie-no', 'assets/wep/White Lie-no.webp');               

            this.load.image('Rising Dawn-variant', 'assets/wep/Rising Dawn.webp');
            this.load.image('Night Whisper-variant', 'assets/wep/Night Whisper.webp');
            this.load.image('White Lie-variant', 'assets/wep/White Lie.webp');                
          
            //shiny weps
            this.load.image('Wocco Feather Duster-variant', 'assets/wep/Wocco Feather Duster-variant.webp');
            this.load.image('Tunnel Tusk-variant', 'assets/wep/Tunnel Tusk-variant.webp');
            this.load.image('Echo Hammer-variant', 'assets/wep/Echo Hammer-variant.webp');          
            this.load.image('Toxic Teeth-variant', 'assets/wep/Toxic Teeth-variant.webp');
          
            this.load.image('Knick-Knack Knocker-variant', 'assets/wep/Knick-Knack Knocker-variant.webp');
            this.load.image('Maggot Knife-variant', 'assets/wep/Maggot Knife-variant.webp');
            this.load.image('Maiden Heart-variant', 'assets/wep/Maiden Heart-variant.webp');
            this.load.image('Lokum Blade-variant', 'assets/wep/Lokum Blade-variant.webp');           
          
            this.load.image('Boom Bringer-variant', 'assets/wep/Boom Bringer-variant.webp');
            this.load.image('Shell Breaker-variant', 'assets/wep/Shell Breaker-variant.webp');
            this.load.image('Crownsmasher-variant', 'assets/wep/Crownsmasher-variant.webp');
            this.load.image('Elder Kris-variant', 'assets/wep/Elder Kris-variant.webp');               
          
            this.load.image('Wooden-Shield', 'assets/wep/Wooden-Shield.webp');
            this.load.image('Red Potion', 'assets/potions/Red Potion.webp');
          
            //mon skills
            this.load.image('Rake', 'assets/monSkills/Rake.webp');
            this.load.image('Bite', 'assets/monSkills/Bite.webp');
            this.load.image('Acid-Spit', 'assets/monSkills/Acid-Spit.webp');
            this.load.image('Regen', 'assets/monSkills/Regen.webp');
            this.load.image('Explode', 'assets/monSkills/Explode.webp');
          
            //skills
            this.load.image('Novice-Slash', 'assets/skills/Novice-Slash.webp');
            this.load.image('Novice-Stab', 'assets/skills/Novice-Stab.webp');
            this.load.image('Novice-Bash', 'assets/skills/Novice-Bash.webp');
          
            this.load.image('Gale Slash', 'assets/skills/Gale Slash.webp');
            this.load.image('Jelly Bounce', 'assets/skills/Jelly Bounce.webp');
            this.load.image('Veteran Thrust', 'assets/skills/Veteran Thrust.webp'); 

            this.load.image('Critical Point', 'assets/skills/Critical Point.webp');
            this.load.image('Dire Poison', 'assets/skills/Dire Poison.webp');
            this.load.image('Charge Rot', 'assets/skills/Charge Rot.webp');
            this.load.image('Heart Break', 'assets/skills/Heart Break.webp');
          
            this.load.image('Echo Slam', 'assets/skills/Echo Slam.webp');
            this.load.image('Bric-a-Brac Bash', 'assets/skills/Bric-a-Brac Bash.webp');
            this.load.image('Volatile Explosion', 'assets/skills/Volatile Explosion.webp'); 
            this.load.image('Shell Smash', 'assets/skills/Shell Smash.webp'); 
            this.load.image('Revolution Rumble', 'assets/skills/Revolution Rumble.webp'); 
          
            this.load.image('Severe-Slash', 'assets/skills/Severe-Slash.webp');
            this.load.image('Savage-Stab', 'assets/skills/Savage-Stab.webp');
            this.load.image('Brutal-Bash', 'assets/skills/Brutal-Bash.webp');          
            this.load.image('Shield-Bash', 'assets/skills/Shield-Bash.webp');   

            this.load.image('Starlight Slash', 'assets/skills/Starlight Slash.webp'); 
            this.load.image('Hard Truth', 'assets/skills/Hard Truth.webp'); 
            this.load.image('Sun Piercing', 'assets/skills/Sun Piercing.webp'); 
            
            this.load.image('Ka-Slash', 'assets/skills/Ka-Slash.webp'); 
            this.load.image('Ka-Stab', 'assets/skills/Ka-Stab.webp'); 
            this.load.image('Ka-Bash', 'assets/skills/Ka-Bash.webp'); 

          
            this.load.image('scroll', 'assets/scroll.webp');
            
            this.load.image('quest', 'assets/quest.webp');
            this.load.image('quest-black', 'assets/quest-black.webp');
            


 
            this.load.image("runSmoke", 'assets/mon/runSmoke.webp');
            this.load.image("sweatDrop", 'assets/mon/sweatDrop.webp');

            this.load.image("TrainingDummy-1", 'assets/mon/TrainingDummy-1.webp');
            this.load.image("TrainingDummy-2", 'assets/mon/TrainingDummy-2.webp');
            this.load.image("TrainingDummy-3", 'assets/mon/TrainingDummy-3.webp');
            this.load.image("TrainingDummy-4", 'assets/mon/TrainingDummy-4.webp');
            this.load.image("TrainingDummy-5", 'assets/mon/TrainingDummy-5.webp');
            this.load.image("TrainingDummy-6", 'assets/mon/TrainingDummy-6.webp');
            this.load.image("TrainingDummy-7", 'assets/mon/TrainingDummy-7.webp');

            this.load.image("wocco", 'assets/mon/wocco.webp');
            this.load.image("wocco-variant", 'assets/mon/wocco-variant.webp');
            this.load.image("wocco-apexOutline", 'assets/mon/wocco-apexOutline.webp');
            this.load.image("nivreh", 'assets/mon/nivreh.webp');
            this.load.image("nivreh-variant", 'assets/mon/nivreh-variant.webp');  
            this.load.image("nivreh-apexOutline", 'assets/mon/nivreh-apexOutline.webp');
            this.load.image("nioleo", 'assets/mon/nioleo.webp');
            this.load.image("nioleo-variant", 'assets/mon/nioleo-variant.webp');
            this.load.image("nioleo-apexOutline", 'assets/mon/nioleo-apexOutline.webp');
            this.load.image("uraniadrake", 'assets/mon/uraniadrake.webp');
            this.load.image("uraniadrake-variant", 'assets/mon/uraniadrake-variant.webp');    
            this.load.image("uraniadrake-apexOutline", 'assets/mon/uraniadrake-apexOutline.webp');     
            this.load.image("patun", 'assets/mon/patun.webp');         
            this.load.image("patun-apexOutline", 'assets/mon/patun-apexOutline.webp');
            
            this.load.image("noot", 'assets/mon/noot.webp');
            this.load.image("noot-variant", 'assets/mon/noot-variant.webp');
            this.load.image("noot-apexOutline", 'assets/mon/noot-apexOutline.webp');
            this.load.image("alpinechupa", 'assets/mon/alpinechupa.webp');
            this.load.image("alpinechupa-variant", 'assets/mon/alpinechupa-variant.webp');    
            this.load.image("alpinechupa-apexOutline", 'assets/mon/alpinechupa-apexOutline.webp');
            this.load.image("royalkeetkeet", 'assets/mon/royalkeetkeet.webp');
            this.load.image("royalkeetkeet-variant", 'assets/mon/royalkeetkeet-variant.webp');
            this.load.image("royalkeetkeet-apexOutline", 'assets/mon/royalkeetkeet-apexOutline.webp');
            this.load.image("alexandrossrex", 'assets/mon/alexandrossrex.webp');
            this.load.image("alexandrossrex-variant", 'assets/mon/alexandrossrex-variant.webp');  
            this.load.image("alexandrossrex-apexOutline", 'assets/mon/alexandrossrex-apexOutline.webp'); 
            this.load.image("stoor", 'assets/mon/stoor.webp'); 
            this.load.image("stoor-apexOutline", 'assets/mon/stoor-apexOutline.webp');
          
            this.load.image("maddock", 'assets/mon/maddock.webp');
            this.load.image("maddock-variant", 'assets/mon/maddock-variant.webp');
            this.load.image("maddock-apexOutline", 'assets/mon/maddock-apexOutline.webp');
            this.load.image("blindstoneeater", 'assets/mon/blindstoneeater.webp');
            this.load.image("blindstoneeater-variant", 'assets/mon/blindstoneeater-variant.webp');  
            this.load.image("blindstoneeater-apexOutline", 'assets/mon/blindstoneeater-apexOutline.webp'); 
            this.load.image("dracomyxin", 'assets/mon/dracomyxin.webp');
            this.load.image("dracomyxin-variant", 'assets/mon/dracomyxin-variant.webp');  
            this.load.image("dracomyxin-apexOutline", 'assets/mon/dracomyxin-apexOutline.webp');       
            this.load.image("weepinglacuna", 'assets/mon/weepinglacuna.webp');
            this.load.image("weepinglacuna-variant", 'assets/mon/weepinglacuna-variant.webp');
            this.load.image("weepinglacuna-apexOutline", 'assets/mon/weepinglacuna-apexOutline.webp');
            this.load.image("yssun", 'assets/mon/yssun.webp'); 
            this.load.image("yssun-apexOutline", 'assets/mon/yssun-apexOutline.webp');
              
            this.load.image("monAngry", 'assets/mon/monAngry.webp'); 

            this.load.image("isShiny", 'assets/mon/isShiny.webp');
            
            this.load.image("timer", 'assets/shop/timerIcon.webp');
          
            // hub 
            this.load.image('blankHub', 'assets/map/mapBG.webp')
            this.load.image('grasslandsHub', 'assets/map/grasslandsHub.webp')
            this.load.image('caveHub', 'assets/map/caveHub.webp')
            this.load.image('mountainHub', 'assets/map/mountainHub.webp')
            this.load.image('guildHub', 'assets/map/guildHub.webp')

            this.load.image('transition', 'assets/transition.webp')
            this.load.image('specialDiscount', 'assets/specialDiscount.webp')
            
            this.load.image('targetOverlay', 'assets/map/targetOverlay.webp')
            this.load.image('targetOverlayGuild', 'assets/map/targetOverlayGuild.webp')
            
            
            this.load.image('targetOverlay_rank1', 'assets/map/targetOverlay_rank1.webp')
            this.load.image('targetOverlay_rank2', 'assets/map/targetOverlay_rank2.webp')
            this.load.image('targetOverlay_rank3', 'assets/map/targetOverlay_rank3.webp')
            this.load.image('targetOverlay_rank4', 'assets/map/targetOverlay_rank4.webp')

            this.load.image('exitTarget', 'assets/exitTarget.webp')
            
            
            this.load.image('selectedInventory', 'assets/selectedInventory.webp')
            this.load.image('selectedInventory-charm', 'assets/selectedInventory-charm.webp')
            
            
            this.load.image('hubBonus1', 'assets/map/hubBonus1.webp')
            this.load.image('hubBonus1-0-1', 'assets/map/hubBonus1-0-1.webp')
            this.load.image('hubBonus1-0-2', 'assets/map/hubBonus1-0-2.webp')
            this.load.image('hubBonus1-0-3', 'assets/map/hubBonus1-0-3.webp')
            this.load.image('hubBonus1-0-4', 'assets/map/hubBonus1-0-4.webp')
            this.load.image('hubBonus1-1-1', 'assets/map/hubBonus1-1-1.webp')
            this.load.image('hubBonus1-1-2', 'assets/map/hubBonus1-1-2.webp')
            this.load.image('hubBonus1-1-3', 'assets/map/hubBonus1-1-3.webp')
            this.load.image('hubBonus1-1-4', 'assets/map/hubBonus1-1-4.webp')
            this.load.image('hubBonus1-2-1', 'assets/map/hubBonus1-2-1.webp')
            this.load.image('hubBonus1-2-2', 'assets/map/hubBonus1-2-2.webp')
            this.load.image('hubBonus1-2-3', 'assets/map/hubBonus1-2-3.webp')
            this.load.image('hubBonus1-2-4', 'assets/map/hubBonus1-2-4.webp')
            
            this.load.image('hubBonus2-0', 'assets/map/hubBonus2-0.webp')
            this.load.image('hubBonus2-1', 'assets/map/hubBonus2-1.webp')
            this.load.image('hubBonus2-2', 'assets/map/hubBonus2-2.webp')
            this.load.image('hubBonus2-3', 'assets/map/hubBonus2-3.webp')
            
            this.load.image('hubBonus3-0', 'assets/map/hubBonus3-0.webp')
            this.load.image('hubBonus3-1', 'assets/map/hubBonus3-1.webp')
            this.load.image('hubBonus3-2', 'assets/map/hubBonus3-2.webp')
            
            this.load.image('guildTix', 'assets/guildTix.webp')
            this.load.image('grasslandTix', 'assets/grasslandTix.webp')
            this.load.image('caveTix', 'assets/caveTix.webp')
            this.load.image('mountainTix', 'assets/mountainTix.webp')
            
            
            this.load.image('starBronze', 'assets/starBronze.webp')
            this.load.image('slashAttack', 'assets/slashAttack.webp')
            this.load.image('stabAttack', 'assets/stabAttack.webp')
            
            this.load.image('bg7', 'assets/bg7.webp')
            this.load.image('combo', 'assets/combo.webp');
            this.load.image('blank', 'assets/blank.webp');
            this.load.image('player', 'assets/player.webp');
            
          
            this.load.image('notification', 'assets/notification.webp');


            this.load.image('score', 'assets/score_screen.webp');
            this.load.image('gradeS', 'assets/score_screen_s.webp');
            this.load.image('gradeA', 'assets/score_screen_a.webp');
            this.load.image('gradeB', 'assets/score_screen_b.webp');
            this.load.image('gradeC', 'assets/score_screen_c.webp');
            this.load.image('gradeF', 'assets/score_screen_f.webp');
            this.load.image('score_high', 'assets/score_screen_newHighScore.webp');
            this.load.image('score_shard', 'assets/score_shard.webp');

            this.load.image('bounty', 'assets/bountyIcon.webp');
            

            this.load.image('start_1', 'assets/start_1.webp');
            this.load.image('start_2', 'assets/start_2.webp');
            this.load.image('start_3', 'assets/start_3.webp');
            this.load.image('start_go', 'assets/start_go.webp');
            
            this.load.image('tab_ribbon', 'assets/tab_ribbon.webp');

            this.load.image('tab_hub_selected', 'assets/tab_hub_selected.webp');
            this.load.image('tab_hub_unselected', 'assets/tab_hub_unselected.webp');
            this.load.image('tab_shop_selected', 'assets/tab_shop_selected.webp');
            this.load.image('tab_shop_unselected', 'assets/tab_shop_unselected.webp');   
            this.load.image('tab_inventory_selected', 'assets/tab_inventory_selected.webp');
            this.load.image('tab_inventory_unselected', 'assets/tab_inventory_unselected.webp');   

            this.load.image('tab_select_highlight', 'assets/tab_select_highlight.webp');                        
            
            
            //sound
            this.game.load.audio('runAwaySound', ['assets/audio/runAway.ogg']); 
            this.game.load.audio('cameraSnap', ['assets/audio/cameraSnap.ogg']); 

            this.game.load.audio('runAwaySweat', ['assets/audio/sweat.mp3']); 
            this.game.load.audio('arcade-countdown', ['assets/audio/arcade-countdown.wav']);  

            this.game.load.audio('battle1', ['assets/audio/Battle_Background1.ogg']);  
            this.game.load.audio('reactBeat1', ['assets/audio/reactive/Battle_Background_reactive1.ogg']); 
            
            this.game.load.audio('battle2', ['assets/audio/Battle_Background2.ogg']);  
            this.game.load.audio('reactBeat2', ['assets/audio/reactive/Battle_Background_reactive2.ogg']); 
            
            this.game.load.audio('battle3', ['assets/audio/Battle_Background3.ogg']);  
            this.game.load.audio('reactBeat3', ['assets/audio/reactive/Battle_Background_reactive3.ogg']); 
            
            this.game.load.audio('battle4', ['assets/audio/Battle_Background4.ogg']);  
            this.game.load.audio('reactBeat4', ['assets/audio/reactive/Battle_Background_reactive4.ogg']);             


            this.game.load.audio('ping', ['assets/audio/ping.ogg']);           
            this.game.load.audio('mapMusic', ['assets/audio/map-Dark Fantasy Studio- Immortals (seamless).ogg']);
            this.game.load.audio('hubMusic', ['assets/audio/hub-Dark Fantasy Studio- Emblem (seamless).ogg']);
            this.game.load.audio('giftMusic', ['assets/audio/gifts-Dark Fantasy Studio- Home (seamless).ogg']);
            this.game.load.audio('combatMusic', ['assets/audio/combat-Assault_on_Valorv5_loop.ogg']);  
            this.game.load.audio('wardenMusic', ['assets/audio/warden-Dark Fantasy Studio- The village (seamless).ogg']);  
            this.game.load.audio('legendMusic', ['assets/audio/Dark Fantasy Studio- Chimeria (seamless).ogg']);  
            
            this.game.load.audio('monCry--1-1', ['assets/audio/monCry/mon--1-1.wav']);
            this.game.load.audio('monCry-0-1', ['assets/audio/monCry/mon-0-1.wav']);
            this.game.load.audio('monCry-0-2', ['assets/audio/monCry/mon-0-2.wav']);
            this.game.load.audio('monCry-0-3', ['assets/audio/monCry/mon-0-3.wav']);
            this.game.load.audio('monCry-0-4', ['assets/audio/monCry/mon-0-4.wav']);
            this.game.load.audio('monCry-0-99', ['assets/audio/monCry/mon-0-5.wav']);  
            this.game.load.audio('monCry-1-1', ['assets/audio/monCry/mon-1-1.wav']);
            this.game.load.audio('monCry-1-2', ['assets/audio/monCry/mon-1-2.wav']);
            this.game.load.audio('monCry-1-3', ['assets/audio/monCry/mon-1-3.wav']);
            this.game.load.audio('monCry-1-4', ['assets/audio/monCry/mon-1-4.wav']);
            this.game.load.audio('monCry-1-99', ['assets/audio/monCry/mon-1-5.wav']);       
            this.game.load.audio('monCry-2-1', ['assets/audio/monCry/mon-2-1.wav']);
            this.game.load.audio('monCry-2-2', ['assets/audio/monCry/mon-2-2.wav']);
            this.game.load.audio('monCry-2-3', ['assets/audio/monCry/mon-2-3.wav']);
            this.game.load.audio('monCry-2-4', ['assets/audio/monCry/mon-2-4.wav']);
            this.game.load.audio('monCry-2-99', ['assets/audio/monCry/mon-2-5.wav']);               

            this.game.load.audio('monCry-1-1-beat', ['assets/audio/monCry/mon-1-1-beat.wav']);      
  


                
            
  
            this.game.load.audio('chargeFail', ['assets/audio/chargeFail.ogg']);                 
            
            this.game.load.audio('equip', ['assets/audio/equip.ogg']); 
            
            this.game.load.audio('forge1', ['assets/audio/forge1.ogg']);        
            this.game.load.audio('forge2', ['assets/audio/forge2.ogg']);   
            this.game.load.audio('forge3', ['assets/audio/forge3.ogg']); 
            
            this.game.load.audio('beastBass', ['assets/audio/beastBass.ogg']); 
    
            this.game.load.audio('raiseShield', ['assets/audio/zapsplat_warfare_sword_medieval_heavy_draw_scabbard_004_12091.ogg']);
          
            this.game.load.audio('win', ['assets/audio/win.wav']); 
            this.game.load.audio('lose', ['assets/audio/lose.wav']); 

            this.game.load.audio('slash1', ['assets/audio/wepAttacks/slash1.ogg']);  
            this.game.load.audio('slash2', ['assets/audio/wepAttacks/slash2.ogg']);     

            this.game.load.audio('stab1', ['assets/audio/wepAttacks/stab1.ogg']);  
            this.game.load.audio('stab2', ['assets/audio/wepAttacks/stab2.ogg']);   

            this.game.load.audio('bash1', ['assets/audio/wepAttacks/bash1.ogg']);  
            this.game.load.audio('bash2', ['assets/audio/wepAttacks/bash2.ogg']);  
            //this.game.load.audio('bash3', ['assets/audio/wepAttacks/bashUlt.wav']);                
            
       
            
            
            
   
        }
        , create: function () {
            //this.asset.cropEnabled = false;
            //this.game.scale.setMinMax(1280,800,1920,1080)
            //this.map.width = this.game.width/2;
            //this.map.height = this.game.height/2;  
           
            
        }
        , update: function () {
            //this.game.scale.refresh(); 
            //this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;           
            //this.map.width = this.game.width;
            //this.map.height = this.game.height;        
 
            if (!!this.ready ) {
                //console.log("where we going? "+localStorage.getItem('state'))
                if (localStorage.getItem("firstVisit-tut") === null || parseInt(localStorage.getItem("firstVisit-tut")) < 2 || gameConfig.tutorialOn || parseInt(localStorage.getItem("firstVisit-combat")) <= 13 ) {
                    localStorage.setItem("firstVisit-tut",1);
                    localStorage.setItem("TixCount0",0)
                    localStorage.setItem("TixCount1",0)
                    localStorage.setItem("TixCount2",0)
                  
                    localStorage.removeItem('crafted4')
                    localStorage.removeItem('crafted5')
                    localStorage.removeItem('crafted6')
                    localStorage.removeItem('crafted7')
                    localStorage.removeItem('crafted8')
                    localStorage.removeItem('crafted9')
                    localStorage.removeItem('crafted10')
                    localStorage.removeItem('crafted11')
                    localStorage.removeItem('crafted12')
                    localStorage.removeItem('crafted13')
                    localStorage.removeItem('crafted14')
                    localStorage.removeItem('crafted15')
                    localStorage.removeItem('crafted97')
                    localStorage.removeItem('crafted98')
                    localStorage.removeItem('crafted99')    
                    
                    localStorage.removeItem('uncommonUnlock')    
                    localStorage.removeItem('rareUnlock')    
                    localStorage.removeItem('surgeUnlock')    
                    localStorage.removeItem('legendHuntUnlock')    

                    localStorage.removeItem('firstVisit-reward')
                    localStorage.removeItem('firstVisit-Index3')
                    localStorage.removeItem('firstVisit-combat')
                    localStorage.removeItem('firstVisit-tut-shinyLock')
                    localStorage.removeItem('firstVisit-tut-fight')
                    localStorage.removeItem('firstVisit-combat-lightAttack')
                    localStorage.removeItem('firstVisit-combat-HeavyHit')
                    localStorage.removeItem('firstVisit-combat-resist')
                    localStorage.removeItem('firstVisit-ult')
                    localStorage.removeItem('firstVisit-combat-perfectBlock')
                    localStorage.removeItem('firstVisit-combat-evade')
                    localStorage.removeItem('firstVisit-combat-win')
                    localStorage.removeItem('firstVisit-combat-lose')
                    localStorage.removeItem('firstVisit-tut-shinyLock')

                    localStorage.removeItem('firstVisit-tut-fight-win')
                    
                    

                    localStorage.removeItem('first-attack-attempt')
                    localStorage.removeItem('first-ult-attempt')
                    localStorage.removeItem('first-block-attempt')
                    
                    localStorage.setItem("TixCost",1)

                    localStorage.setItem("hunterRank",0)
                    localStorage.setItem("currentRank",1)
                    localStorage.setItem("exp",0)

                    localStorage.setItem('hasSlashed',0);
                    localStorage.setItem('hasStabbed',0);
                    localStorage.setItem('hasBashed',0);  
                  
                    localStorage.setItem("equip0",1)
                    localStorage.setItem("equip1",200)
                    localStorage.setItem("equip2",1000)
                    
                    
                    
                    var d = new Date();
                    var date = d.getDate();
                    var day = d.getDay();         
                    this.day = day
                    console.log("old "+day)
                    //this.day = 5
                    if(day >  tixDiscount.length-1){
                      day -= Math.floor(day/(tixDiscount.length-1))*(tixDiscount.length-1)-1
                    } 
                    this.weekOfMonth = Math.ceil((date + 6 - day)/7);
                    //console.log(guildItem.length) 
                    if(this.weekOfMonth >= guildItem.length){
                      this.weekOfMonth = 1
                    }                  
                    this.weekOfMonth -= 1
                    if(this.weekOfMonth < 0){
                      this.weekOfMonth = 0
                    }
                    //console.log("new "+day)
                    
                    try{
                      GameAnalytics("addProgressionEvent", "Start", "tutorial");
                    }
                    catch(e){
                      //alert(e)
                    }
                    

                    this.biome = this.weekOfMonth;//parseInt(tixDiscount[day])
                    localStorage.setItem("Markerbiome",this.biome)   
                    localStorage.setItem("Markerbiome",0)            
                    this.game.state.start('game') 
                    ////alert("load complete new game")
                }             
                else{
                  ////alert("load complete "+localStorage.getItem('state'))
                  this.game.state.start(localStorage.getItem('state'));
                }
                
                //this.game.state.start('hub');
            }
        }
        , onLoadComplete: function () {
            this.ready = true;
        }
         
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Preloader = Preloader;
}());