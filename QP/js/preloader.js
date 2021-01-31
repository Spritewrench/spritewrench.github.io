(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }
    Preloader.prototype = {
        preload: function () {
            try{
                setupVideoReward()
                getAds()
            }
            catch(error){
              //admob.rewardVideo.show();   
            }           
            //this.game.scale.refresh(); 
            
            //console.log("where we going? "+localStorage.getItem('state'))
            var x = (this.game.width / 2);
            var y = this.game.height /2;      
            
            this.asset = this.add.sprite(x, y, 'preloader');
            this.asset.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.asset);
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            
      
            
            this.load.script('Gray', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Gray.js');
          
            this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
            
            this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;    
            //this.load.image('preloader', 'assets/preloader.gif');
            this.load.image('mainBG', 'assets/mainBG.png');
            this.load.image('craftBG', 'assets/craftBG.png');
            this.load.image('craftBGE', 'assets/craftBG_equipped.png');
            this.load.image('craftArrowLeft', 'assets/craftArrowLeft.png');
            this.load.image('craftArrowRight', 'assets/craftArrowRight.png');
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
            this.load.image('return_0MINI', 'assets/return_grasslandsMINI.png');
            this.load.image('return_1MINI', 'assets/return_caveMINI.png');
            this.load.image('return_2MINI', 'assets/return_mountainMINI.png'); 
            this.load.image('return_Hub', 'assets/return_hub.png'); 
          
            this.load.image('rankBadge', 'assets/rank.png');
          
            this.load.image('rankBadge-2', 'assets/rank-gold.png');
            this.load.image('rankBadge-1', 'assets/rank-silver.png');
            this.load.image('rankBadge-0', 'assets/rank-bronze.png');
          
            this.load.image('submit', 'assets/submit.png');
            this.load.image('submitNo', 'assets/submitNo.png');
          
            this.load.image('openCraft', 'assets/openCraft.png'); 
            this.load.image('openGuild', 'assets/guild.png'); 
            this.load.image('openFaction', 'assets/openFaction.png'); 
            this.load.image('openShop', 'assets/openShop.png'); 
            this.load.image('openFactionNo', 'assets/openFactionNo.png'); 
            this.load.image('openShopNo', 'assets/openShopNo.png');
            this.load.image('openLeaderboard', 'assets/openLeaderboard.png');
            this.load.image('openLeaderboardNo', 'assets/openLeaderboardNo.png');
          

            this.load.image('Red Dragon Gem', 'assets/monDrops/generic_red_dragon_gem.png');
            this.load.image('Blue Dragon Gem', 'assets/monDrops/generic_blue_dragon_gem.png');
            this.load.image('Yellow Dragon Gem', 'assets/monDrops/generic_yellow_dragon_gem.png');
            this.load.image('Prismatic Gem', 'assets/monDrops/prismaticGem.png');
            this.load.image('Small Monster Bone', 'assets/monDrops/generic_small_bone.png');
            this.load.image('Medium Monster Bone', 'assets/monDrops/generic_medium_bone.png');
            this.load.image('Large Monster Bone', 'assets/monDrops/generic_large_bone.png');  
            this.load.image('Fertile Droppings', 'assets/monDrops/generic_droppings.png');        
          
            this.load.image('Wocco Claw', 'assets/monDrops/wocco_claw.png');
            this.load.image('Wocco Pelt', 'assets/monDrops/wocco_pelt.png');
            this.load.image('Wocco Tail', 'assets/monDrops/wocco_tail.png');
            this.load.image('Wocco Feather', 'assets/monDrops/wocco_feather.png');
            this.load.image('Wocco Horn', 'assets/monDrops/wocco_horn.png');
            this.load.image('Wocco Acid Sac', 'assets/monDrops/wocco_acid_sac.png');  
          
            this.load.image('Nivreh Claw', 'assets/monDrops/nivreh_claw.png');
            this.load.image('Nivreh Hide', 'assets/monDrops/nivreh_hide.png');
            this.load.image('Nivreh Tail', 'assets/monDrops/nivreh_tail.png');
            this.load.image('Nivreh Feather', 'assets/monDrops/nivreh_feather.png');
            this.load.image('Nivreh Horn', 'assets/monDrops/nivreh_horn.png');
            this.load.image('Nivreh Tongue', 'assets/monDrops/nivreh_tongue.png');   
          
            this.load.image('Nioleo Claw', 'assets/monDrops/nioleo_claw.png');
            this.load.image('Nioleo Hide', 'assets/monDrops/nioleo_hide.png');
            this.load.image('Nioleo Tail', 'assets/monDrops/nioleo_tail.png');
            this.load.image('Nioleo Mane', 'assets/monDrops/nioleo_mane.png');
            this.load.image('Nioleo Scale', 'assets/monDrops/nioleo_scale.png');
            this.load.image('Nioleo Tusk', 'assets/monDrops/nioleo_tusk.png');   
          
            this.load.image('Urania Claw', 'assets/monDrops/urania_claw.png');
            this.load.image('Urania Pelt', 'assets/monDrops/urania_pelt.png');
            this.load.image('Urania Tail', 'assets/monDrops/urania_tail.png');
            this.load.image('Urania Wing Scale', 'assets/monDrops/urania_wing_scale.png');
            this.load.image('Urania Venom Sac', 'assets/monDrops/urania_venom_sac.png');
            this.load.image('Urania Poison Dust', 'assets/monDrops/urania_poison_dust.png');                 
          
            this.load.image('Maddock Talon', 'assets/monDrops/maddock_talon.png');
            this.load.image('Maddock Skin', 'assets/monDrops/maddock_skin.png');
            this.load.image('Maddock Tail', 'assets/monDrops/maddock_tail.png');
            this.load.image('Maddock Scale', 'assets/monDrops/maddock_scale.png');
            this.load.image('Maddock Horn', 'assets/monDrops/maddock_horn.png');
            this.load.image('Maddock Spine', 'assets/monDrops/maddock_spine.png');  

            this.load.image('Stone Eater Tooth', 'assets/monDrops/stone_eater_tooth.png');
            this.load.image('Stone Eater Hide', 'assets/monDrops/stone_eater_hide.png');
            this.load.image('Stone Eater Jaw Bone', 'assets/monDrops/stone_eater_jawbone.png');
            this.load.image('Old Thread', 'assets/monDrops/old_thread.png');
            this.load.image('Curious Spring', 'assets/monDrops/curious_spring.png');
            this.load.image('Odd Cogs', 'assets/monDrops/odd_cogs.png');   
      
            this.load.image('Digested Talon', 'assets/monDrops/digested_talon.png');
            this.load.image('Digested Skin', 'assets/monDrops/digested_skin.png');
            this.load.image('Jellified Tail', 'assets/monDrops/jellified_tail.png');
            this.load.image('Jellified Scale', 'assets/monDrops/jellified_scale.png');
            this.load.image('Jellified Spine', 'assets/monDrops/jellified_spine.png');
            this.load.image('Dragon Slough', 'assets/monDrops/dragon_slough.png');  
     
            this.load.image('Lacuna Claw', 'assets/monDrops/lacuna_claw.png');
            this.load.image('Lacuna Hide', 'assets/monDrops/lacuna_hide.png');
            this.load.image('Lacuna Tail', 'assets/monDrops/lacuna_tail.png');
            this.load.image('Lacuna Scale', 'assets/monDrops/lacuna_scale.png');
            this.load.image('Lacuna Horn', 'assets/monDrops/lacuna_horn.png');
            this.load.image('Lacuna Mane', 'assets/monDrops/lacuna_mane.png');            
                  
            this.load.image('Noot Claw', 'assets/monDrops/noot_claw.png');
            this.load.image('Noot Skin', 'assets/monDrops/noot_skin.png');
            this.load.image('Noot Tail', 'assets/monDrops/noot_tail.png');
            this.load.image('Noot Scale', 'assets/monDrops/noot_scale.png');
            this.load.image('Noot Horn', 'assets/monDrops/noot_horn.png');
            this.load.image('Noot Boom Gland', 'assets/monDrops/noot_boom_gland.png');  
        
            this.load.image('Chupa Claw', 'assets/monDrops/chupa_claw.png');
            this.load.image('Chupa Fur', 'assets/monDrops/chupa_fur.png');
            this.load.image('Chupa Tail', 'assets/monDrops/chupa_tail.png');
            this.load.image('Chupa Fang', 'assets/monDrops/chupa_fang.png');
            this.load.image('Chupa Horn', 'assets/monDrops/chupa_horn.png');
            this.load.image('Stolen Egg', 'assets/monDrops/stolen_egg.png');            

            this.load.image('Keet Keet Talon', 'assets/monDrops/keetkeet_talon.png');
            this.load.image('Keet Keet Pelt', 'assets/monDrops/keetkeet_pelt.png');
            this.load.image('Keet Keet Tail', 'assets/monDrops/keetkeet_tail.png');
            this.load.image('Keet Keet Feather', 'assets/monDrops/keetkeet_feather.png');
            this.load.image('Keet Keet Beak', 'assets/monDrops/keetkeet_beak.png');
            this.load.image('Keet Keet Egg', 'assets/monDrops/keetkeet_egg.png');      

            this.load.image('Ancient Claw', 'assets/monDrops/ancient_claw.png');
            this.load.image('Ancient Hide', 'assets/monDrops/ancient_hide.png');
            this.load.image('Ancient Tail', 'assets/monDrops/ancient_tail.png');
            this.load.image('Ancient Scale', 'assets/monDrops/ancient_scale.png');
            this.load.image('Ancient Horn', 'assets/monDrops/ancient_horn.png');
            this.load.image('Ancient Skull', 'assets/monDrops/ancient_skull.png');          
          
            this.load.image('monHeart', 'assets/monHeart.png');
            this.load.image('heart', 'assets/heart.png');
            this.load.image('heart-hurt', 'assets/heart-hurt.png');
            this.load.image('gotHit', 'assets/hurt.png');
          
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
            this.load.image('blockEvade', 'assets/blockEvade.png');  
            this.load.image('attackHit', 'assets/attackHit.png');
            this.load.image('attackHit-slash', 'assets/attackHit-slash.png');
            this.load.image('attackHit-stab', 'assets/attackHit-stab.png');
            this.load.image('attackHit-bash', 'assets/attackHit-bash.png');
            this.load.image('blockMiss', 'assets/blockMiss.png');  
            this.load.image('blockPerfect', 'assets/blockPerfect.png'); 
            this.load.image('attackLight', 'assets/attackLight.png'); 
            this.load.image('attackMiss', 'assets/attackMiss.png');
          
            this.load.image('ultSwipe', 'assets/ultSwipe.png')
            this.load.image('ultTap', 'assets/ultTap.png')
            this.load.image('ultHold', 'assets/ultHold.png');
            
            //this.load.image('weatherIcon', 'https://openweathermap.org/img/wn/'+localStorage.getItem("weatherIcon"+localStorage.getItem("placeID"))+'@2x.png');
            this.load.image('weatherIcon01-d', 'assets/weather/01d@2x.png');
            this.load.image('weatherIcon01-n', 'assets/weather/01n@2x.png');
            this.load.image('weatherIcon02-d', 'assets/weather/02d@2x.png');
            this.load.image('weatherIcon02-n', 'assets/weather/02n@2x.png');  
            this.load.image('weatherIcon03-d', 'assets/weather/03d@2x.png');
            this.load.image('weatherIcon03-n', 'assets/weather/03n@2x.png');    
            this.load.image('weatherIcon04-d', 'assets/weather/04d@2x.png');
            this.load.image('weatherIcon04-n', 'assets/weather/04n@2x.png');  
            this.load.image('weatherIcon09-d', 'assets/weather/09d@2x.png');
            this.load.image('weatherIcon09-n', 'assets/weather/09n@2x.png');      
            this.load.image('weatherIcon10-d', 'assets/weather/10d@2x.png');
            this.load.image('weatherIcon10-n', 'assets/weather/10n@2x.png');    
            this.load.image('weatherIcon11-d', 'assets/weather/11d@2x.png');
            this.load.image('weatherIcon11-n', 'assets/weather/11n@2x.png');       
            this.load.image('weatherIcon13-d', 'assets/weather/13d@2x.png');
            this.load.image('weatherIcon13-n', 'assets/weather/13n@2x.png');  
            this.load.image('weatherIcon50-d', 'assets/weather/50d@2x.png');
            this.load.image('weatherIcon50-n', 'assets/weather/50n@2x.png');              
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
            this.load.image('wardenHunt0', 'assets/wardenHunt0.png');
            this.load.image('wardenHunt1', 'assets/wardenHunt1.png');
            this.load.image('wardenHunt2', 'assets/wardenHunt2.png');
            this.load.image('shopHunt0', 'assets/shopHunt0.png');
            this.load.image('shopHunt1', 'assets/shopHunt1.png');
            this.load.image('shopHunt2', 'assets/shopHunt2.png');          
            this.load.image('wardenHunt-No', 'assets/wardenHuntTixNo.png');
            this.load.image('wardenTalk', 'assets/talk.png');
            this.load.image('wardenReward', 'assets/wardenReward.png');
            this.load.image('wardenReward-No', 'assets/wardenReward-no.png');
            this.load.image('wardenGift', 'assets/wardenGift.png');
            this.load.image('wardenGift-No', 'assets/wardenGift-no.png');          
            this.load.image('returnMap', 'assets/returnMap.png');
            this.load.image('returnHub', 'assets/goHub.png');
            this.load.image('watch', 'assets/watch.png'); 
            this.load.image('watchNo', 'assets/watchNo.png'); 
          
            this.load.image('wardenOpacity', 'assets/warden/wardenOpacity.png'); 
            this.load.image('wardenOverlay', 'assets/warden/wardenOverlay.png'); 
            this.load.image('relationship', 'assets/warden/relationship.png'); 
            this.load.image('textBackdrop', 'assets/warden/textBackdrop.png'); 
          
            this.load.image('warden0', 'assets/warden0.png');  
            this.load.image('warden1', 'assets/warden1.png');    
            this.load.image('warden2', 'assets/warden2.png');
            
            this.load.image('guildWarden', 'assets/guildWarden.png');
            this.load.image('guildShopkeep', 'assets/guildShopkeep.png');
            this.load.image('guildArchivist', 'assets/guildArchivist.png');
          
            this.load.image('repair', 'assets/repair.png'); 
            this.load.image('craft', 'assets/craft.png'); 
            this.load.image('repairNo', 'assets/repairNo.png'); 
            this.load.image('craftNo', 'assets/craftNo.png');
            this.load.image('equip', 'assets/equip.png'); 
            this.load.image('equipNo', 'assets/equipNo.png');     
            this.load.image('upgrade', 'assets/upgrade.png'); 
            this.load.image('upgradeNo', 'assets/upgradeNo.png'); 
          
            this.load.image('blueprint', 'assets/blueprint.png'); 
            this.load.image('cancel', 'assets/cancel.png'); 

            
            //weapons & potions
            this.load.image('equipped', 'assets/wep/equipped.png');
            this.load.image('B-Sword', 'assets/wep/B-Sword.png');
            this.load.image('B-Knife', 'assets/wep/B-Knife.png');
            this.load.image('B-Hammer', 'assets/wep/B-Hammer.png');
          
            this.load.image('Wocco Feather Duster', 'assets/wep/Wocco Feather Duster.png');
            this.load.image('Tunnel Tusk', 'assets/wep/Tunnel Tusk.png');
            this.load.image('Echo Hammer', 'assets/wep/Echo Hammer.png');          
            this.load.image('Toxic Teeth', 'assets/wep/Toxic Teeth.png');
          
            this.load.image('Knick-Knack Knocker', 'assets/wep/Knick-Knack Knocker.png');
            this.load.image('Maggot Knife', 'assets/wep/Maggot Knife.png');
            this.load.image('Maiden Heart', 'assets/wep/Maiden Heart.png');
            this.load.image('Lokum Blade', 'assets/wep/Lokum Blade.png');  
          
            this.load.image('Boom Bringer', 'assets/wep/Boom Bringer.png');
            this.load.image('Shell Breaker', 'assets/wep/Shell Breaker.png');
            this.load.image('Crownsmasher', 'assets/wep/Crownsmasher.png');
            this.load.image('Elder Kris', 'assets/wep/Elder Kris.png');             
          
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
            this.load.image('Novice-Bash', 'assets/skills/Novice-Bash.png');
            this.load.image('Severe-Slash', 'assets/skills/Severe-Slash.png');
            this.load.image('Savage-Stab', 'assets/skills/Savage-Stab.png');
            this.load.image('Brutal-Bash', 'assets/skills/Brutal-Bash.png');          
            this.load.image('Shield-Bash', 'assets/skills/Shield-Bash.png');   
            this.load.image('Penta-Slash', 'assets/skills/Penta-Slash.png'); 
            this.load.image('Penta-Stab', 'assets/skills/Penta-Stab.png'); 
            this.load.image('Penta-Bash', 'assets/skills/Penta-Bash.png'); 

          
            this.load.image('scroll', 'assets/scroll.png');
            
            this.load.image('quest', 'assets/quest.png');
            this.load.image('quest-black', 'assets/quest-black.png');
            
            this.load.spritesheet("gobUI", 'assets/gobUI.png',16,16);
          
            
            this.load.spritesheet("coin", 'assets/FullCoins.png',16,16);

            this.load.image("bloodSplatter1", 'assets/bloodSplatter1.png');
            this.load.image("bloodSplatter2", 'assets/bloodSplatter2.png');
            
            this.load.image('party', 'assets/party.png');

                     
            this.load.image('help', 'assets/help.png');
            this.load.image('turnBack', 'assets/turnBack.png');
 
          
            this.load.image("wocco", 'assets/mon/wocco.png');
            this.load.image("wocco-variant", 'assets/mon/wocco-variant.png');
            this.load.image("nivreh", 'assets/mon/nivreh.png');
            this.load.image("nivreh-variant", 'assets/mon/nivreh-variant.png');  
            this.load.image("nioleo", 'assets/mon/nioleo.png');
            this.load.image("nioleo-variant", 'assets/mon/nioleo-variant.png');
            this.load.image("uraniadrake", 'assets/mon/uraniadrake.png');
            this.load.image("uraniadrake-variant", 'assets/mon/uraniadrake-variant.png');         
            
            this.load.image("noot", 'assets/mon/noot.png');
            this.load.image("noot-variant", 'assets/mon/noot-variant.png');
            this.load.image("alpinechupa", 'assets/mon/alpinechupa.png');
            this.load.image("alpinechupa-variant", 'assets/mon/alpinechupa-variant.png');    
            this.load.image("royalkeetkeet", 'assets/mon/royalkeetkeet.png');
            this.load.image("royalkeetkeet-variant", 'assets/mon/royalkeetkeet-variant.png');
            this.load.image("alexandrossrex", 'assets/mon/alexandrossrex.png');
            this.load.image("alexandrossrex-variant", 'assets/mon/alexandrossrex-variant.png');             
          
            this.load.image("maddock", 'assets/mon/maddock.png');
            this.load.image("maddock-variant", 'assets/mon/maddock-variant.png');
            this.load.image("blindstoneeater", 'assets/mon/blindstoneeater.png');
            this.load.image("blindstoneeater-variant", 'assets/mon/blindstoneeater-variant.png');   
            this.load.image("dracomyxin", 'assets/mon/dracomyxin.png');
            this.load.image("dracomyxin-variant", 'assets/mon/dracomyxin-variant.png');         
            this.load.image("weepinglacuna", 'assets/mon/weepinglacuna.png');
            this.load.image("weepinglacuna-variant", 'assets/mon/weepinglacuna-variant.png');
              
            
            this.load.image("isShiny", 'assets/mon/isShiny.png');
            
            for(var i = 1; i < 13; i++){
              this.load.image("shop"+i, 'assets/shop/events/'+i+'.png');
            }
            this.load.image("timer", 'assets/shop/timerIcon.png');
          
            // hub 
            
            this.load.image('grasslandsHub', 'assets/map/grasslandsHub.png')
            this.load.image('caveHub', 'assets/map/caveHub.png')
            this.load.image('mountainHub', 'assets/map/mountainHub.png')
            
            this.load.image('hubBonus1', 'assets/map/hubBonus1.png')
            this.load.image('hubBonus1-0-1', 'assets/map/hubBonus1-0-1.png')
            this.load.image('hubBonus1-0-2', 'assets/map/hubBonus1-0-2.png')
            this.load.image('hubBonus1-0-3', 'assets/map/hubBonus1-0-3.png')
            this.load.image('hubBonus1-0-4', 'assets/map/hubBonus1-0-4.png')
            this.load.image('hubBonus1-1-1', 'assets/map/hubBonus1-1-1.png')
            this.load.image('hubBonus1-1-2', 'assets/map/hubBonus1-1-2.png')
            this.load.image('hubBonus1-1-3', 'assets/map/hubBonus1-1-3.png')
            this.load.image('hubBonus1-1-4', 'assets/map/hubBonus1-1-4.png')
            this.load.image('hubBonus1-2-1', 'assets/map/hubBonus1-2-1.png')
            this.load.image('hubBonus1-2-2', 'assets/map/hubBonus1-2-2.png')
            this.load.image('hubBonus1-2-3', 'assets/map/hubBonus1-2-3.png')
            this.load.image('hubBonus1-2-4', 'assets/map/hubBonus1-2-4.png')
            
            this.load.image('hubBonus2-0', 'assets/map/hubBonus2-0.png')
            this.load.image('hubBonus2-1', 'assets/map/hubBonus2-1.png')
            this.load.image('hubBonus2-2', 'assets/map/hubBonus2-2.png')
            this.load.image('hubBonus2-3', 'assets/map/hubBonus2-3.png')
            
            this.load.image('hubBonus3-0', 'assets/map/hubBonus3-0.png')
            this.load.image('hubBonus3-1', 'assets/map/hubBonus3-1.png')
            
            this.load.image('grasslandTix', 'assets/grasslandTix.png')
            this.load.image('caveTix', 'assets/caveTix.png')
            this.load.image('mountainTix', 'assets/mountainTix.png')
            
            
            
            this.load.image('bg7', 'assets/bg7.png')
            this.load.image('combo', 'assets/combo.png');
            this.load.image('blank', 'assets/blank.png');
            this.load.image('clear', 'assets/clear.png');
            this.load.image('go', 'assets/go.png');
            this.load.image('player', 'assets/player.png');
            
            this.load.image('fire', 'assets/fire.png');
          
            this.load.image('notification', 'assets/notification.png');
            
            
            //sound
            this.game.load.audio('ping', ['assets/audio/ping.ogg']);           
            this.game.load.audio('mapMusic', ['assets/audio/map-Dark Fantasy Studio- Immortals (seamless).wav']);
            this.game.load.audio('hubMusic', ['assets/audio/hub-Dark Fantasy Studio- Emblem (seamless).wav']);
            this.game.load.audio('giftMusic', ['assets/audio/gifts-Dark Fantasy Studio- Home (seamless).wav']);
            this.game.load.audio('combatMusic', ['assets/audio/combat-Assault_on_Valorv5_loop.ogg']);  
            this.game.load.audio('wardenMusic', ['assets/audio/warden-Dark Fantasy Studio- The village (seamless).wav']);  

          
            
            
            this.game.load.audio('attack1', ['assets/audio/zapsplat_warfare_sword_swing_fast_whoosh_metal_001.ogg']);  
            this.game.load.audio('attack2', ['assets/audio/zapsplat_warfare_sword_swing_fast_whoosh_metal_002.ogg']);  
            this.game.load.audio('attack3', ['assets/audio/zapsplat_warfare_sword_swing_fast_whoosh_metal_003.ogg']);  
            this.game.load.audio('attack4', ['assets/audio/zapsplat_warfare_sword_swing_fast_whoosh_metal_004.ogg']);     
            this.game.load.audio('raiseShield', ['assets/audio/zapsplat_warfare_sword_medieval_heavy_draw_scabbard_004_12091.ogg']);
            
            
            
   
        }
        , create: function () {
            //this.asset.cropEnabled = false;
            //this.game.scale.setMinMax(1280,800,1920,1080)
            
        }
        , update: function () {
            this.game.scale.refresh(); 
            this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;            
            if (!!this.ready) {
                //console.log("where we going? "+localStorage.getItem('state'))
                if (localStorage.getItem("firstVisit-tut") === null ) {
                    localStorage.setItem("firstVisit-tut",1);
                  
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
                    
                    
                    
                    localStorage.setItem("hunterRank",0)
                    localStorage.setItem("currentRank",1)
                    localStorage.setItem("exp",0)

                    localStorage.setItem('hasSlashed',0);
                    localStorage.setItem('hasStabbed',0);
                    localStorage.setItem('hasBashed',0);  
                  
                    localStorage.setItem("equip0",1)
                    localStorage.setItem("equip1",200)
                    localStorage.setItem("equip2",100)
                    
                    
                    
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
                  
                    this.biome = this.weekOfMonth;//parseInt(tixDiscount[day])
                    localStorage.setItem("Markerbiome",this.biome)            
                    this.game.state.start('game') 
                }
                else{
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