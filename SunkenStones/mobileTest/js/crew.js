const crew = []





crew[1] = new Object();
crew[1].deployCost = 1;
crew[1].id = 1
crew[1].name = "DAHLIA GREEN"
crew[1].power = 2
crew[1].origPower = crew[1].power
crew[1].attackPattern = 1
crew[1].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[1].ability  = "ADD MY POWER TO THE NEXT CREW MATE IN QUEUE"
crew[1].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[1].upgradable = true;

crew[2] = new Object();
crew[2].deployCost = 2;
crew[2].id = 2
crew[2].name = "MEMIKO BEETLE"
crew[2].power = 2
crew[2].origPower = crew[2].power
crew[2].attackPattern = 1
crew[2].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[2].ability  = "INCREASE MY BASE POWER BY 1 WHEN I DEFEAT A CREEP" 
crew[2].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[2].upgradable = true;

crew[3] = new Object();
crew[3].deployCost = 3;
crew[3].id = 3
crew[3].name = "SELA JOHNSON"
crew[3].power = 4
crew[3].origPower = crew[3].power
crew[3].attackPattern = 3
crew[3].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[3].ability  = "ON-COMBAT: FIGHT ALL CREEPS IN THE SAME ROW"
crew[3].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[3].upgradable = true;

crew[4] = new Object();
crew[4].deployCost = 3;
crew[4].id = 4
crew[4].name = "PABLO"
crew[4].power = 4
crew[4].origPower = crew[4].power
crew[4].attackPattern = 2
crew[4].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[4].ability  = "ON-COMBAT: FIGHT ALL CREEPS IN THE SAME COLUMN"    
crew[4].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[4].upgradable = true;


crew[5] = new Object();
crew[5].deployCost = 4;
crew[5].id = 5
crew[5].name = "JABARI FOSTER"
crew[5].power = 5
crew[5].origPower = crew[5].power
crew[5].attackPattern = 1
crew[5].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[5].ability  = "MY DEPLOY COST IS 0 IF I'D BE 4th IN THE QUEUE"  
crew[5].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[5].upgradable = true;

crew[6] = new Object();
crew[6].deployCost = 2;
crew[6].id = 6
crew[6].name = "DIASCIA"
crew[6].power = 2
crew[6].origPower = crew[6].power
crew[6].attackPattern = 1
crew[6].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[6].ability  = "ON-BLOCK: CAPTAIN GAINS HEALTH EQUAL TO MY POWER"  
crew[6].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[6].upgradable = true;

crew[7] = new Object();
crew[7].deployCost = 2;
crew[7].id = 7
crew[7].name = "SQUIDD"
crew[7].power = 1
crew[7].origPower = crew[7].power
crew[7].attackPattern = 1
crew[7].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[7].ability  = "ON-BLOCK: DOUBLE MY BASE POWER"  
crew[7].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[7].upgradable = true;

crew[8] = new Object();
crew[8].deployCost = 2;
crew[8].id = 8
crew[8].name = "BOM BOMMA"
crew[8].power = 3
crew[8].origPower = crew[8].power
crew[8].attackPattern = 6
crew[8].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[8].ability  = "ON-COMBAT: FIGHT ALL SMOKING CREEPS"  
crew[8].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[8].upgradable = true;

crew[9] = new Object();
crew[9].deployCost = 2;
crew[9].id = 9
crew[9].name = "SAO SAO"
crew[9].power = 0
crew[9].origPower = crew[9].power
crew[9].attackPattern = 1
crew[9].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[9].ability  = "MY POWER IS EQUAL TO TWICE THE NUMBER OF SMOKING CREEPS"  
crew[9].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[9].upgradable = false;

crew[10] = new Object();
crew[10].deployCost = 2;
crew[10].id = 10
crew[10].name = "MUNE MUNETSU"
crew[10].power = 1
crew[10].origPower = crew[10].power
crew[10].attackPattern = 1
crew[10].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[10].ability  = "+1 BOMBS WHEN I DEFEAT A CREEP"  
crew[10].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[10].upgradable = true;


crew[11] = new Object();
crew[11].deployCost = 3;
crew[11].id = 11
crew[11].name = "JUJI"
crew[11].power = 3
crew[11].origPower = crew[11].power
crew[11].attackPattern = 1
crew[11].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[11].ability  = "CAPTAIN GAINS +2 HEALTH WHEN I DEFEAT A CREEP"  
crew[11].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[11].upgradable = true;

crew[12] = new Object();
crew[12].deployCost = 0;
crew[12].id = 12
crew[12].name = "ANNE BLANC"
crew[12].power = 0
crew[12].origPower = crew[12].power
crew[12].attackPattern = 1
crew[12].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[12].ability  = "MY BASE POWER IS EQUAL TO UNSPENT SAVVY"  
crew[12].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[12].upgradable = false;

crew[13] = new Object();
crew[13].deployCost = 2;
crew[13].id = 13
crew[13].name = "BOSS TANKA"
crew[13].power = 0
crew[13].origPower = crew[13].power
crew[13].attackPattern = 1
crew[13].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[13].ability  = "SMOKING CREEPS ARE WEAK TO ME"  
crew[13].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[13].upgradable = true;

crew[14] = new Object();
crew[14].deployCost = 3;
crew[14].id = 14
crew[14].name = "JOHN FENN"
crew[14].power = 3
crew[14].origPower = crew[14].power
crew[14].attackPattern = 1
crew[14].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[14].ability  = "I COPY THE ATTACK PATTERN OF MY PREVIOUS CREW MATE"  
crew[14].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[14].upgradable = true;

crew[15] = new Object();
crew[15].deployCost = 4;
crew[15].id = 15
crew[15].name = "TANTA"
crew[15].power = 0
crew[15].origPower = crew[15].power
crew[15].attackPattern = 1
crew[15].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[15].ability  = "MY BASE POWER IS EQUAL TO MY CAPTAIN'S HEALTH"  
crew[15].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[15].upgradable = false;

crew[16] = new Object();
crew[16].deployCost = 4;
crew[16].id = 16
crew[16].name = "JONG JONG"
crew[16].power = 0
crew[16].origPower = crew[16].power
crew[16].attackPattern = 1
crew[16].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[16].ability  = "ON-BOARD: WHEN A SMOKING CREEP DIES SPAWN A BOMB"  
crew[16].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[16].upgradable = true;

crew[17] = new Object();
crew[17].deployCost = 3;
crew[17].id = 17
crew[17].name = "BRINE"
crew[17].power = 0
crew[17].origPower = crew[17].power
crew[17].attackPattern = 1
crew[17].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[17].ability  = "SMALL CREEPS ARE WEAK TO ME"  
crew[17].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[17].upgradable = true;

crew[18] = new Object();
crew[18].deployCost = 1;
crew[18].id = 18
crew[18].name = "JEAN BONAVIS"
crew[18].power = 1
crew[18].origPower = crew[18].power
crew[18].attackPattern = 1
crew[18].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[18].ability  = "NEXT CREW MATE IN QUEUE FIGHTS ALL CREEPS IN THE SAME ROW"  
crew[18].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[18].upgradable = true;

crew[19] = new Object();
crew[19].deployCost = 2;
crew[19].id = 19
crew[19].name = "CORRA"
crew[19].power = 1
crew[19].origPower = crew[19].power
crew[19].attackPattern = 1
crew[19].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[19].ability  = "NEXT CREW MATE IN QUEUE FIGHTS ALL CREEPS IN THE SAME COLUMN"  
crew[19].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[19].upgradable = true;

crew[20] = new Object();
crew[20].deployCost = 2;
crew[20].id = 20
crew[20].name = "NAN NANHAI"
crew[20].power = 0
crew[20].origPower = crew[20].power
crew[20].attackPattern = 1
crew[20].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[20].ability  = "NEXT CREW MATE IN QUEUE FIGHTS ALL SMOKING CREEPS"  
crew[20].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[20].upgradable = true;

crew[21] = new Object();
crew[21].deployCost = 3;
crew[21].id = 21
crew[21].name = "KAZU KAZUMA"
crew[21].power = 4
crew[21].origPower = crew[21].power
crew[21].attackPattern = 4
crew[21].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[21].ability  = "ON-COMBAT: DAMAGE ALL SURROUNDING CREEPS"  
crew[21].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[21].upgradable = true;

crew[22] = new Object();
crew[22].deployCost = 1;
crew[22].id = 22
crew[22].name = "OLIVER BOUCHE"
crew[22].power = 1
crew[22].origPower = crew[22].power
crew[22].attackPattern = 1
crew[22].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[22].ability  = "I GAIN +1 POWER FOR EACH CREW DEPLOYED BEFORE ME"  
crew[22].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[22].upgradable = true;

crew[23] = new Object();
crew[23].deployCost = 2;
crew[23].id = 23
crew[23].name = "EDOUARD DEMONT"
crew[23].power = 2
crew[23].origPower = crew[23].power
crew[23].attackPattern = 1
crew[23].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[23].ability  = "REDUCE NEXT CREW MATE'S DEPLOY COST BY 2"  
crew[23].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[23].upgradable = true;

crew[24] = new Object();
crew[24].deployCost = 2;
crew[24].id = 24
crew[24].name = "LYDIA MORGAN"
crew[24].power = 2
crew[24].origPower = crew[24].power
crew[24].attackPattern = 1
crew[24].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[24].ability  = "ADD MY POWER TO ALL PREVIOUS CREW IN QUEUE"  
crew[24].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[24].upgradable = true;

crew[25] = new Object();
crew[25].deployCost = 2;
crew[25].id = 25
crew[25].name = "MORRAY"
crew[25].power = 1
crew[25].origPower = crew[25].power
crew[25].attackPattern = 1
crew[25].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[25].ability  = "GAIN +1 BASE POWER WHENEVER CAPTAIN IS HURT"  
crew[25].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[25].upgradable = true;

crew[26] = new Object();
crew[26].deployCost = 2;
crew[26].id = 26
crew[26].name = "SHELLSONG"
crew[26].power = 1
crew[26].origPower = crew[26].power
crew[26].attackPattern = 1
crew[26].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[26].ability  = "GAIN +2 BASE POWER WHEN CAPTAIN GAINS HEALTH"  
crew[26].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[26].upgradable = true;

crew[27] = new Object();
crew[27].deployCost = 1;
crew[27].id = 27
crew[27].name = "SUZU SUZUKO"
crew[27].power = 2
crew[27].origPower = crew[27].power
crew[27].attackPattern = 1
crew[27].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[27].ability  = "ON-COMBAT: APPLY SMOKING IF ALREADY APPLIED, DEAL +3 EXTRA-DAMAGE"  
crew[27].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[27].upgradable = true;

crew[28] = new Object();
crew[28].deployCost = 4;
crew[28].id = 28
crew[28].name = "TAMA TAMAYA"
crew[28].power = 10
crew[28].origPower = crew[28].power
crew[28].attackPattern = 1
crew[28].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[28].ability  = "MY DEPLOY COST IS REDUCED BY THE NUMBER OF SMOKING UNITS"  
crew[28].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[28].upgradable = true;

crew[29] = new Object();
crew[29].deployCost = 2;
crew[29].id = 29
crew[29].name = "IMOGEN BLACKWOOD"
crew[29].power = 2
crew[29].origPower = crew[29].power
crew[29].attackPattern = 1
crew[29].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[29].ability  = "DOUBLE MY POWER IF MY PLACE IN THE QUEUE IS EVEN"  
crew[29].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[29].upgradable = true;

crew[30] = new Object();
crew[30].deployCost = 2;
crew[30].id = 30
crew[30].name = "JASPER BLACKWOOD"
crew[30].power = 2
crew[30].origPower = crew[30].power
crew[30].attackPattern = 1
crew[30].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[30].ability  = "DOUBLE MY POWER IF MY PLACE IN THE QUEUE IS ODD"  
crew[30].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[30].upgradable = true;

crew[31] = new Object();
crew[31].deployCost = 2;
crew[31].id = 31
crew[31].name = "SAMANTHA BELLAMY"
crew[31].power = 1
crew[31].origPower = crew[31].power
crew[31].attackPattern = 1
crew[31].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[31].ability  = "ON-COMBAT: ATTACK AN EXTRA TIME"  
crew[31].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[31].upgradable = true;

crew[32] = new Object();
crew[32].deployCost = 2;
crew[32].id = 32
crew[32].name = "SWIFT HAYES"
crew[32].power = 2
crew[32].origPower = crew[32].power
crew[32].attackPattern = 1
crew[32].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[32].ability  = "I DEAL +2 EXTRA-DAMAGE TO CREEPS THAT ARE UPWIND"  
crew[32].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[32].upgradable = true;

crew[33] = new Object();
crew[33].deployCost = 2;
crew[33].id = 33
crew[33].name = "STRATUS HAYES"
crew[33].power = 2
crew[33].origPower = crew[33].power
crew[33].attackPattern = 1
crew[33].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[33].ability  = "I DEAL +2 EXTRA-DAMAGE TO CREEPS THAT ARE DOWNWIND"  
crew[33].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[33].upgradable = true;

crew[34] = new Object();
crew[34].deployCost = 2;
crew[34].id = 34
crew[34].name = "MARY KNIGHT"
crew[34].power = 2
crew[34].origPower = crew[34].power
crew[34].attackPattern = 1
crew[34].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[34].ability  = "I GAIN +2 POWER IF ANY SAVVY IS UNSPENT"  
crew[34].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[34].upgradable = true;

crew[35] = new Object();
crew[35].deployCost = 2;
crew[35].id = 35
crew[35].name = "NIA EVANS"
crew[35].power = 2
crew[35].origPower = crew[35].power
crew[35].attackPattern = 1
crew[35].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[35].ability  = "MY POWER IS EQUAL TO THE TOTAL POWER OF ALL DEPLOYED CREW (EXCLUDING MYSELF)"  
crew[35].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[35].upgradable = false;

crew[36] = new Object();
crew[36].deployCost = 2;
crew[36].id = 36
crew[36].name = "HARPER 'EXTRAS' KINGSTON"
crew[36].power = 1
crew[36].origPower = crew[36].power
crew[36].attackPattern = 1
crew[36].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[36].ability  = "NEXT CREW MATE GETS AN EXTRA ATTACK UNTIL END OF TURN (EXCLUDING CONSUMABLES)"  
crew[36].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[36].upgradable = true;

crew[37] = new Object();
crew[37].deployCost = 3;
crew[37].id = 37
crew[37].name = "FIONA 'CUTTY' HAWKINS"
crew[37].power = 1
crew[37].origPower = crew[37].power
crew[37].attackPattern = 1
crew[37].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[37].ability  = "WHEN I DEFEAT A CREEP PERMANENTLY GAIN +1 EXTRA ATTACK"  
crew[37].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[37].upgradable = true;

crew[38] = new Object();
crew[38].deployCost = 2;
crew[38].id = 38
crew[38].name = "OWEN 'BADMIND' WILLIAMS"
crew[38].power = 0
crew[38].origPower = crew[38].power
crew[38].attackPattern = 1
crew[38].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[38].ability  = "INCREASE MY BASE POWER BY 4 WHEN YOU REMOVE A CREW MATE"  
crew[38].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[38].upgradable = true;

crew[39] = new Object();
crew[39].deployCost = 1;
crew[39].id = 39
crew[39].name = 'AKI "BACKOFF" AKITO'
crew[39].power = 1
crew[39].origPower = crew[39].power
crew[39].attackPattern = 1
crew[39].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[39].ability  = "ON-COMBAT: KNOCK CREEP BACK 1 TILE"  
crew[39].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[39].upgradable = true;

crew[40] = new Object();
crew[40].deployCost = 3;
crew[40].id = 40
crew[40].name = 'NAGA NAGASE'
crew[40].power = 0
crew[40].origPower = crew[40].power
crew[40].attackPattern = 1
crew[40].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[40].ability  = "ON-COMBAT: SWAP POWER AND HEALTH OF CREEP"  
crew[40].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[40].upgradable = false

crew[41] = new Object();
crew[41].deployCost = 2;
crew[41].id = 41
crew[41].name = "KATA KATASHI"
crew[41].power = 0
crew[41].origPower = crew[41].power
crew[41].attackPattern = 1
crew[41].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[41].ability  = "GAIN +2 BASE POWER WHEN A CREEP MOVES"  
crew[41].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[41].upgradable = true;

crew[42] = new Object();
crew[42].deployCost = 1;
crew[42].id = 42
crew[42].name = 'HANA HANABI'
crew[42].power = 1
crew[42].origPower = crew[42].power
crew[42].attackPattern = 1
crew[42].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[42].ability  = "ON-COMBAT:  IF CREEP IS SMOKING KNOCK BACK 1 TILE ELSE APPLY SMOKING"  
crew[42].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[42].upgradable = true;

crew[43] = new Object();
crew[43].deployCost = 2;
crew[43].id = 43
crew[43].name = 'REI "SPARK SHOT" REIKA'
crew[43].power = 2
crew[43].origPower = crew[43].power
crew[43].attackPattern = 1
crew[43].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[43].ability  = "ON-COMBAT:  IF DRUNK APPLY SMOKING TO CREEP"  
crew[43].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[43].upgradable = true;

crew[44] = new Object();
crew[44].deployCost = 2;
crew[44].id = 44
crew[44].name = 'SHIRO "SMOKE VEIL" TAKAHASHI'
crew[44].power = 1
crew[44].origPower = crew[44].power
crew[44].attackPattern = 1
crew[44].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[44].ability  = "ON-COMBAT: IF SOBER KNOCK CREEP BACK 1 TILE"  
crew[44].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[44].upgradable = true;

crew[45] = new Object();
crew[45].deployCost = 2;
crew[45].id = 45
crew[45].name = 'MAKI "MATCHES" MAKOTO'
crew[45].power = 1
crew[45].origPower = crew[45].power
crew[45].attackPattern = 1
crew[45].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[45].ability  = "INCREASE MY BASE POWER BY +2 WHEN A CREEP MISSES"  
crew[45].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[45].upgradable = true;

crew[46] = new Object();
crew[46].deployCost = 2;
crew[46].id = 46
crew[46].name = 'NAO NAOKI'
crew[46].power = 3
crew[46].origPower = crew[46].power
crew[46].attackPattern = 1
crew[46].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[46].ability  = "ON-BOARD: WHEN A CREEP MISSES GAIN +1 BOMBS"  
crew[46].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[46].upgradable = true;

crew[47] = new Object();
crew[47].deployCost = 3;
crew[47].id = 47
crew[47].name = 'SARU'
crew[47].power = 2
crew[47].origPower = crew[47].power
crew[47].attackPattern = 8
crew[47].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[47].ability  = "ON-COMBAT: FIGHT ALL SURFACED CREEPS. -2 BOMBS"  
crew[47].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[47].upgradable = true;

crew[48] = new Object();
crew[48].deployCost = 2;
crew[48].id = 48
crew[48].name = 'HINA HIMAWARI'
crew[48].power = 2
crew[48].origPower = crew[48].power
crew[48].attackPattern = 9
crew[48].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[48].ability  = "ON-COMBAT: FIGHT ALL CREEPS. MY POWER IS EQUAL TO 5 MINUS CURRENT # OF BOMBS"  
crew[48].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[48].upgradable = true;

crew[49] = new Object();
crew[49].deployCost = 1;
crew[49].id = 49
crew[49].name = 'TORA TORAI'
crew[49].power = 3
crew[49].origPower = crew[49].power
crew[49].attackPattern = 1
crew[49].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[49].ability  = "ON-COMBAT: REDUCE CREEP'S POWER INSTEAD OF DEALING DAMAGE"  
crew[49].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[49].upgradable = true;


crew[50] = new Object();
crew[50].deployCost = 1;
crew[50].id = 50
crew[50].name = 'ECHO'
crew[50].power = 2
crew[50].origPower = crew[50].power
crew[50].attackPattern = 1
crew[50].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[50].ability  = "I GAIN +2 POWER IF A CREEP IS SUBMERGED"  
crew[50].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[50].upgradable = true;


crew[51] = new Object();
crew[51].deployCost = 2;
crew[51].id = 51
crew[51].name = 'PHISH'
crew[51].power = 2
crew[51].origPower = crew[51].power
crew[51].attackPattern = 1
crew[51].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[51].ability  = "I GAIN +3 POWER IF A HARPOON IS IN QUEUE"  
crew[51].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[51].upgradable = true;

// not completely implented
crew[52] = new Object();
crew[52].deployCost = 2;
crew[52].id = 52
crew[52].name = '"BARNACLE" BILL'
crew[52].power = 2
crew[52].origPower = crew[52].power
crew[52].attackPattern = 1
crew[52].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[52].ability  = "YOU CAN PEEK AT SUBMERGED CREEPS"  
crew[52].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[52].upgradable = true;

crew[53] = new Object();
crew[53].deployCost = 2;
crew[53].id = 53
crew[53].name = 'WAVEWALKER'
crew[53].power = 2
crew[53].origPower = crew[53].power
crew[53].attackPattern = 1
crew[53].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[53].ability  = "ON-COMBAT: IF CREEP IS LARGE DEAL +2 EXTRA-DAMAGE"  
crew[53].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[53].upgradable = true;

crew[54] = new Object();
crew[54].deployCost = 2;
crew[54].id = 54
crew[54].name = 'SEATHORN'
crew[54].power = 2
crew[54].origPower = crew[54].power
crew[54].attackPattern = 1
crew[54].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[54].ability  = "ON-COMBAT: IF CREEP IS SMALL CAPTAIN GAINS +1 HEALTH"  
crew[54].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[54].upgradable = true;


crew[55] = new Object();
crew[55].deployCost = 2;
crew[55].id = 55
crew[55].name = 'OCEANSPRITE'
crew[55].power = 1
crew[55].origPower = crew[55].power
crew[55].attackPattern = 1
crew[55].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[55].ability  = "IF PROUD +2 POWER"  
crew[55].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[55].upgradable = true;

crew[56] = new Object();
crew[56].deployCost = 3;
crew[56].id = 56
crew[56].name = 'SHORESHADOW'
crew[56].power = 3
crew[56].origPower = crew[56].power
crew[56].attackPattern = 1
crew[56].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[56].ability  = "IF PROUD MY DEPLOY COST IS 0"  
crew[56].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[56].upgradable = true;

crew[57] = new Object();
crew[57].deployCost = 1;
crew[57].id = 57
crew[57].name = 'BARNACLE'
crew[57].power = 2
crew[57].origPower = crew[57].power
crew[57].attackPattern = 1
crew[57].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[57].ability  = "ON-COMBAT: IF CREEP IS SUBMERGED IT EMERGES"  
crew[57].rarity = 2// 0 - common, 1 - uncommon, 2 - rare
crew[57].upgradable = true;

crew[58] = new Object();
crew[58].deployCost = 2;
crew[58].id = 58
crew[58].name = 'SANTIAGO'
crew[58].power = 2
crew[58].origPower = crew[58].power
crew[58].attackPattern = 1
crew[58].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[58].ability  = "ON-BOARD: I FIGHT CREEPS WHEN THEY EMERGE"  
crew[58].rarity = 2 // 0 - common, 1 - uncommon, 2 - rare
crew[58].upgradable = true;

crew[59] = new Object();
crew[59].deployCost = 2;
crew[59].id = 59
crew[59].name = 'AMANZI'
crew[59].power = 2
crew[59].origPower = crew[59].power
crew[59].attackPattern = 1
crew[59].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[59].ability  = "ON-BLOCK: GAIN +1 HARPOON"  
crew[59].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[59].upgradable = true;

crew[60] = new Object();
crew[60].deployCost = 2;
crew[60].id = 60
crew[60].name = 'FRY'
crew[60].power = 2
crew[60].origPower = crew[60].power
crew[60].attackPattern = 1
crew[60].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[60].ability  = "ON-BOARD: ALL HARPOONS IN QUEUE GAIN +3 POWER"  
crew[60].rarity = 0 // 0 - common, 1 - uncommon, 2 - rare
crew[60].upgradable = true;

crew[61] = new Object();
crew[61].deployCost = 2;
crew[61].id = 61
crew[61].name = 'CRUELTIDE'
crew[61].power = 2
crew[61].origPower = crew[61].power
crew[61].attackPattern = 1
crew[61].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[61].ability  = "IF PROUD +5 POWER"  
crew[61].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[61].upgradable = true;

crew[62] = new Object();
crew[62].deployCost = 2;
crew[62].id = 62
crew[62].name = 'FOAMCREST'
crew[62].power = 15
crew[62].origPower = crew[62].power
crew[62].attackPattern = 1
crew[62].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[62].ability  = "ON-COMBAT: CAPTAIN TAKES 5 DAMAGE"  
crew[62].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[62].upgradable = true;


crew[63] = new Object();
crew[63].deployCost = 1;
crew[63].id = 63
crew[63].name = 'DEEPFANG'
crew[63].power = 0
crew[63].origPower = crew[63].power
crew[63].attackPattern = 1
crew[63].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[63].ability  = "MY POWER IS EQUAL TO CURRENT HARPOON COUNT"  
crew[63].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[63].upgradable = false;

crew[64] = new Object();
crew[64].deployCost = 2;
crew[64].id = 64
crew[64].name = 'CTHARLOS'
crew[64].power = 2
crew[64].origPower = crew[64].power
crew[64].attackPattern = 1
crew[64].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[64].ability  = "IF PROUD ALL CREW IN QUEUE GET +2 POWER"  
crew[64].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[64].upgradable = true;

crew[65] = new Object();
crew[65].deployCost = 2;
crew[65].id = 65
crew[65].name = 'DUNEBLOOM'
crew[65].power = 3
crew[65].origPower = crew[65].power
crew[65].attackPattern = 1
crew[65].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[65].ability  = "AT THE START OF YOUR TURN IF CAPTAIN IS HURT GAIN HEALTH EQUAL TO MY POWER"  
crew[65].rarity = 1 // 0 - common, 1 - uncommon, 2 - rare
crew[65].upgradable = true;

/////////////////////////////
// not implemented yet
/*





*/



/////////////////////////////

/////////////////////////////
//consumables
/////////////////////////////
crew[80] = new Object();
crew[80].deployCost = 0;
crew[80].id = 80
crew[80].name = "RELIABLE SHOT"
crew[80].power = 5
crew[80].origPower = crew[80].power
crew[80].attackPattern = 4
crew[80].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[80].ability  = "CONSUMABLE \n ON-COMBAT: DAMAGE ALL SURROUNDING CREEPS"  


crew[81] = new Object();
crew[81].deployCost = 0;
crew[81].id = 81
crew[81].name = "TRUSTY HARPOON"
crew[81].power = 1
crew[81].origPower = crew[81].power
crew[81].attackPattern = 1
crew[81].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[81].ability  = "CONSUMABLE \n ON-COMBAT: I CAN DAMAGE SUBMERGED CREEPS"  


crew[82] = new Object();
crew[82].deployCost = 0;
crew[82].id = 82
crew[82].name = "SMOKING TAR"
crew[82].power = 0
crew[82].origPower = crew[82].power
crew[82].attackPattern = 4
crew[82].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[82].ability  = "ON-COMBAT:  APPLY SMOKING TO CREEP"    



/////////////////////////////
//starting grunts
/////////////////////////////
//steel captain base units
crew[90] = new Object();
crew[90].deployCost = 1;
crew[90].id = 90
crew[90].name = "STEELY GRUNT"
crew[90].power = 1
crew[90].origPower = crew[90].power
crew[90].attackPattern = 1
crew[90].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[90].ability  = "I GAIN +1 POWER IF ANY SAVVY IS UNSPENT"  


crew[91] = new Object();
crew[91].deployCost = 1;
crew[91].id = 91
crew[91].name = "STEELY GRUNT"
crew[91].power = 1
crew[91].origPower = crew[91].power
crew[91].attackPattern = 1
crew[91].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[91].ability  = "I GAIN +1 POWER IF ANY SAVVY IS UNSPENT" 

crew[92] = new Object();
crew[92].deployCost = 1;
crew[92].id = 92
crew[92].name = "STEELY GRUNT"
crew[92].power = 1
crew[92].origPower = crew[92].power
crew[92].attackPattern = 1
crew[92].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[92].ability  = "I GAIN +1 POWER IF ANY SAVVY IS UNSPENT"  


crew[99] = new Object();
crew[99].deployCost = 1;
crew[99].id = 99
crew[99].name = "STEELY GRUNT"
crew[99].power = 1
crew[99].origPower = crew[99].power
crew[99].attackPattern = 1
crew[99].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[99].ability  = "I GAIN +1 POWER IF ANY SAVVY IS UNSPENT"  


//smoke captain base units
crew[93] = new Object();
crew[93].deployCost = 1;
crew[93].id = 93
crew[93].name = "SMOKY GRUNT"
crew[93].power = 1
crew[93].origPower = crew[93].power
crew[93].attackPattern = 1
crew[93].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[93].ability  = "ON-COMBAT: APPLY SMOKING IF ALREADY APPLIED, DEAL +1 EXTRA-DAMAGE"  


crew[94] = new Object();
crew[94].deployCost = 1;
crew[94].id = 94
crew[94].name = "SMOKY GRUNT"
crew[94].power = 1
crew[94].origPower = crew[94].power
crew[94].attackPattern = 1
crew[94].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[94].ability  = "ON-COMBAT: APPLY SMOKING IF ALREADY APPLIED, DEAL +1 EXTRA-DAMAGE"  


crew[95] = new Object();
crew[95].deployCost = 1;
crew[95].id = 95
crew[95].name = "SMOKY GRUNT"
crew[95].power = 1
crew[95].origPower = crew[95].power
crew[95].attackPattern = 1
crew[95].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[95].ability  = "ON-COMBAT: APPLY SMOKING IF ALREADY APPLIED, DEAL +1 EXTRA-DAMAGE"  


crew[100] = new Object();
crew[100].deployCost = 1;
crew[100].id = 100
crew[100].name = "SMOKY GRUNT"
crew[100].power = 1
crew[100].origPower = crew[100].power
crew[100].attackPattern = 1
crew[100].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[100].ability  = "ON-COMBAT: APPLY SMOKING IF ALREADY APPLIED, DEAL +1 EXTRA-DAMAGE"  


//salt captain base units
crew[96] = new Object();
crew[96].deployCost = 1;
crew[96].id = 96
crew[96].name = "SALTY GRUNT"
crew[96].power = 1
crew[96].origPower = crew[96].power
crew[96].attackPattern = 1
crew[96].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[96].ability  = "I GAIN +1 POWER IF A CREEP IS SUBMERGED"  


crew[97] = new Object();
crew[97].deployCost = 1;
crew[97].id = 97
crew[97].name = "SALTY GRUNT"
crew[97].power = 1
crew[97].origPower = crew[97].power
crew[97].attackPattern = 1
crew[97].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[97].ability  = "I GAIN +1 POWER IF A CREEP IS SUBMERGED"  


crew[98] = new Object();
crew[98].deployCost = 1;
crew[98].id = 98
crew[98].name = "SALTY GRUNT"
crew[98].power = 1
crew[98].origPower = crew[98].power
crew[98].attackPattern = 1
crew[98].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[98].ability  = "I GAIN +1 POWER IF A CREEP IS SUBMERGED"  


crew[101] = new Object();
crew[101].deployCost = 1;
crew[101].id = 101
crew[101].name = "SALTY GRUNT"
crew[101].power = 1
crew[101].origPower = crew[101].power
crew[101].attackPattern = 1
crew[101].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[101].ability  = "I GAIN +1 POWER IF A CREEP IS SUBMERGED"  

//unlock requirements
crew[39].unlockReq = 'HIT A SINGLE CREEP 3 TIMES IN A COMBAT ROUND';
crew[40].unlockReq = 'KNOCKBACK A TOTAL OF 5 CREEPS IN A SINGLE VOYAGE';
crew[41].unlockReq = 'KNOCKBACK A TOTAL OF 10 CREEPS IN A SINGLE VOYAGE';
crew[42].unlockReq = 'DEPLOY A SMOKE CREWMATE 10 TIMES IN A IN A SINGLE VOYAGE.';
crew[43].unlockReq = 'APPLY SMOKING 15 TIMES IN A SINGLE VOYAGE';
crew[44].unlockReq = 'APPLY SMOKING 25 TIMES IN A SINGLE VOYAGE';
crew[45].unlockReq = 'HAVE CREEPS MISS 5 TIMES IN A SINGLE VOYAGE';
crew[5].unlockReq = 'GAIN 8 SAVVY IN A SINGLE VOYAGE';
crew[29].unlockReq = 'END YOUR TURN WITH AN EVEN NUMBER OF CREW DEPLOYED';
crew[30].unlockReq = 'END YOUR TURN WITH AN ODD NUMBER OF CREW DEPLOYED';
crew[32].unlockReq = 'DEPLY CREW TO UPWIND SPOT 5 TIMES IN A SINGLE VOYAGE';
crew[33].unlockReq = 'DEPLOY CREW TO DOWNWIND SPOT 5 TIMES IN A SINGLE VOYAGE';
crew[34].unlockReq = 'END YOUR TURN WITH 3 UNSPENT SAVVY';
crew[35].unlockReq = 'DEPLOY 5 CREW MATES IN A SINGLE TURN';
crew[46].unlockReq = 'HAVE CREEPS MISS 10 TIMES IN A SINGLE VOYAGE';
crew[47].unlockReq = 'GAIN 20 BOMBS IN A SINGLE VOYAGE';
crew[36].unlockReq = 'DEFEAT 20 TENTACLE [LEFT] CREEPS';
crew[37].unlockReq = 'DEFEAT 25 CREEPS WITH STEEL CREWMATES IN A SINGLE VOYAGE';
crew[38].unlockReq = 'DITCH 10 CREWMATES IN A SINGLE VOYAGE';
crew[60].unlockReq = 'DEPLOY 15 HARPOONS IN A SINGLE VOYAGE';
crew[61].unlockReq = 'COMPLETE A VOYAGE WITH 25+ HEALTH';
crew[62].unlockReq = 'TAKE 15+ DAMAGE IN A SINGLE VOYAGE';
crew[63].unlockReq = 'DEFEAT 5 CREEPS WITH HARPOONS';
crew[64].unlockReq = 'DEFEAT 10 CREEPS WTH SALT CREWMATES IN A SINGLE VOYAGE';
crew[65].unlockReq = 'LOSE 3 TIMES';
crew[48].unlockReq = 'GAIN 10 BOMBS IN A SINGLE VOYAGE';
crew[49].unlockReq = 'DEFEAT 10 CREEPS WITH SMOKE CREWMATES IN A SINGLE VOYAGE';
crew[31].unlockReq = 'DEFEAT 10 CREEPS WITH STEEL CREWMATES IN A SINGLE VOYAGE';
crew[50].unlockReq = 'DEFEAT 3 SUBMERGED CREEPS IN A SINGLE VOYAGE';
crew[51].unlockReq = 'DEPLOY 10 HARPOONS IN A SINGLE VOYAGE';
crew[52].unlockReq = 'BLOCK 5 CREEPS IN A SINGLE VOYAGE';
crew[53].unlockReq = 'FIGHT A CREEP WITH 10+ HP';
crew[54].unlockReq = 'GAIN 15+ HEALTH IN A SINGLE VOYAGE';
crew[55].unlockReq = 'COMPLETE A VOYAGE WITH 15+ HEALTH IN A SINGLE VOYAGE';
crew[56].unlockReq = 'COMPLETE A VOYAGE WITH 20+ HEALTH IN A SINGLE VOYAGE';
crew[57].unlockReq = 'DEFEAT 5 SUBMERGED CREEPS IN A SINGLE VOYAGE';
crew[58].unlockReq = 'BLOCK 15 CREEPS IN A SINGLE VOYAGE';
crew[59].unlockReq = 'GAIN 10 HARPOONS IN A SINGLE VOYAGE';

crew[4].unlockReq = 'UNLOCK CAPTAIN CRICKETT';
crew[6].unlockReq = 'UNLOCK CAPTAIN CRICKETT';
crew[7].unlockReq = 'UNLOCK CAPTAIN CRICKETT';
crew[11].unlockReq = 'UNLOCK CAPTAIN CRICKETT';
crew[15].unlockReq = 'UNLOCK CAPTAIN CRICKETT';
crew[17].unlockReq = 'UNLOCK CAPTAIN CRICKETT';
crew[19].unlockReq = 'UNLOCK CAPTAIN CRICKETT';
crew[25].unlockReq = 'UNLOCK CAPTAIN CRICKETT';
crew[26].unlockReq = 'UNLOCK CAPTAIN CRICKETT';


crew[8].unlockReq = 'UNLOCK CAPTAIN TYSON';
crew[9].unlockReq = 'UNLOCK CAPTAIN TYSON';
crew[10].unlockReq = 'UNLOCK CAPTAIN TYSON';
crew[13].unlockReq = 'UNLOCK CAPTAIN TYSON';
crew[16].unlockReq = 'UNLOCK CAPTAIN TYSON';
crew[20].unlockReq = 'UNLOCK CAPTAIN TYSON';
crew[21].unlockReq = 'UNLOCK CAPTAIN TYSON';
crew[27].unlockReq = 'UNLOCK CAPTAIN TYSON';
crew[28].unlockReq = 'UNLOCK CAPTAIN TYSON';

crew[64].inExpansion = false;
crew[47].inExpansion = false
crew[37].inExpansion = false;
//hide until content update
crew[53].inExpansion = true;
crew[54].inExpansion = true;
crew[55].inExpansion = true;
crew[56].inExpansion = true;
crew[57].inExpansion = true;
crew[61].inExpansion = true;
crew[62].inExpansion = true;
crew[63].inExpansion = true;

crew[65].inExpansion = true;
crew[42].inExpansion = true;
crew[43].inExpansion = true;
crew[44].inExpansion = true;
crew[45].inExpansion = true;

crew[32].inExpansion = true;
crew[33].inExpansion = true;
crew[35].inExpansion = true;

crew[38].inExpansion = true;

//outline loyatly progression
for(var i = 1; i < 79; i++){
    try{
        crew[i].loyaltyPower = []
        crew[i].loyaltyDeployCost = []
        var deployCost = crew[i].deployCost
        var power = crew[i].power    
        for(var j = 0; j < 4; j++){

            if(deployCost > 1){
                crew[i].loyaltyDeployCost[j] = deployCost
                crew[i].loyaltyPower[j] = power
                deployCost--;
            }
            else{
                crew[i].loyaltyDeployCost[j] = deployCost
                crew[i].loyaltyPower[j] = power
                //Mary Read needs no more power
                if(i != 9){
                    power++;
                }
                            
            }
        }
    }
    catch(e){

    }
 
}
for(var i = 80; i <= 82; i++){
    crew[i].loyaltyPower = []
    crew[i].loyaltyDeployCost = []
    var deployCost = crew[i].deployCost
    var power = crew[i].power    
    for(var j = 0; j < 4; j++){

        if(deployCost > 1){
            crew[i].loyaltyDeployCost[j] = deployCost
            crew[i].loyaltyPower[j] = power
            deployCost--;
        }
        else{
            crew[i].loyaltyDeployCost[j] = deployCost
            crew[i].loyaltyPower[j] = power
            //Mary Read needs no more power
            if(i != 9){
                power++;
            }
                        
        }
    } 
}
for(var i = 90; i <= 101; i++){
    crew[i].loyaltyPower = []
    crew[i].loyaltyDeployCost = []
    var deployCost = crew[i].deployCost
    var power = crew[i].power    
    for(var j = 0; j < 4; j++){

        if(deployCost > 1){
            crew[i].loyaltyDeployCost[j] = deployCost
            crew[i].loyaltyPower[j] = power
            deployCost--;
        }
        else{
            crew[i].loyaltyDeployCost[j] = deployCost
            crew[i].loyaltyPower[j] = power
            //Mary Read needs no more power
            if(i != 9){
                power++;
            }
                        
        }
    } 
}

//crew pool 0 common / 1 uncommon 2 rare
const crewPool = []





function getCrewLength(){
    var crewList = 0
    //count total crew in game
    for(var i = 1; i <= 79; i++){

        try{
            if(crew[i].id != null && !crew[i].inExpansion){
                crewList++
                
            }
            
        }
        catch(e){}
    }
    return crewList;  
}

function getCrewUnlockedLength(){
    var crewListUnlocked = 0
    //count total crew unlocked
    for(var i = 1; i <= 79; i++){

        try{
            if(localStorage.getItem("crew_unlocked-"+i) !== null){
                crewListUnlocked++
                
            }
        }
        catch(e){}
    }     
    return crewListUnlocked;  
}

function updatePool(){
    crewPool[0] = [3,22,23]
    crewPool[1] = [12,2,18]
    crewPool[2] = [1,14,24]

    var cap2Free = parseInt(localStorage.getItem("cap_unlocked2"))
    if(cap2Free == 1){
        crewPool[0] = crewPool[0].concat([13,27,28])
        crewPool[1] = crewPool[1].concat([9,10,21])
        crewPool[2] = crewPool[2].concat([8,16,20])        
    }

    var cap3Free = parseInt(localStorage.getItem("cap_unlocked3"))
    if(cap3Free == 1){
        crewPool[0] = crewPool[0].concat([15,25,26])
        crewPool[1] = crewPool[1].concat([11,4,19])
        crewPool[2] = crewPool[2].concat([6,7,17])        
    }  



    //mark crew as unlocked for base
    for(var rarity = 0; rarity < 3; rarity++){
        for(var crewList = 0; crewList < crewPool[rarity].length; crewList++){
            localStorage.setItem("crew_unlocked-"+crewPool[rarity][crewList],1)
        }
    }
 
    //unlock everything in dev build
    if(unlockEverything){
        for(var i = 1; i <= 65; i++){
            localStorage.setItem("crew_unlocked-"+i,1)
            crewPool[crew[i].rarity] = crewPool[crew[i].rarity].concat(i)
        }
    }   

    //update pool w/ unlocks
    for(var i = 1; i <= 65; i++){
        if(localStorage.getItem("crew_unlocked-"+i) !== null){
            if(crewPool[crew[i].rarity].includes(i) == false){
                crewPool[crew[i].rarity] = crewPool[crew[i].rarity].concat(i)
            }
            
        }
        else{
        }
    }





    
    
    return crewPool;  
}

