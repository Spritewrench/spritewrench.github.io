const crew = []

crew[1] = new Object();
crew[1].deployCost = 1;
crew[1].name = ""
crew[1].power = 2
crew[1].origPower = crew[1].power
crew[1].attackPattern = 1
crew[1].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[1].ability  = "ON-COMBAT: ADD YOUR POWER TO NEXT FIGHTING CREW MATE"
crew[1].unlockStart = true;

crew[2] = new Object();
crew[2].deployCost = 2;
crew[2].name = ""
crew[2].power = 2
crew[2].origPower = crew[2].power
crew[2].attackPattern = 1
crew[2].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[2].ability  = "INCREASE BASE POWER BY 1 FOR EACH ENEMY DEFEATED" 
crew[2].unlockStart = true;

crew[3] = new Object();
crew[3].deployCost = 4;
crew[3].name = ""
crew[3].power = 4
crew[3].origPower = crew[3].power
crew[3].attackPattern = 3
crew[3].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[3].ability  = "ON-COMBAT: FIGHT ALL ENEMIES IN THE SAME ROW"    
crew[3].unlockStart = true;

crew[4] = new Object();
crew[4].deployCost = 4;
crew[4].name = ""
crew[4].power = 4
crew[4].origPower = crew[4].power
crew[4].attackPattern = 2
crew[4].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[4].ability  = "ON-COMBAT: FIGHT ALL ENEMIES IN THE SAME COLUMN"    
crew[4].unlockStart = true;

crew[5] = new Object();
crew[5].deployCost = 0;
crew[5].name = ""
crew[5].power = 5
crew[5].origPower = crew[5].power
crew[5].attackPattern = 4
crew[5].type = 0 // 0- steel, 1 - salt, 2 -smoke
crew[5].ability  = "ON-COMBAT: DAMAGES ALL SURROUNDING CREEPS"  
crew[5].unlockStart = true;

crew[6] = new Object();
crew[6].deployCost = 2;
crew[6].name = ""
crew[6].power = 1
crew[6].origPower = crew[6].power
crew[6].attackPattern = 1
crew[6].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[6].ability  = "ON-BLOCK: CAPTAIN GAINS HEALTH EQUAL TO MY POWER"  
crew[6].unlockStart = false;
crew[6].unlockPrice = 600;

crew[7] = new Object();
crew[7].deployCost = 3;
crew[7].name = ""
crew[7].power = 1
crew[7].origPower = crew[7].power
crew[7].attackPattern = 1
crew[7].type = 1 // 0- steel, 1 - salt, 2 -smoke
crew[7].ability  = "ON-BLOCK: DOUBLE MY BASE POWER"  
crew[7].unlockStart = false;
crew[7].unlockPrice = 600;

crew[8] = new Object();
crew[8].deployCost = 2;
crew[8].name = ""
crew[8].power = 3
crew[8].origPower = crew[8].power
crew[8].attackPattern = 6
crew[8].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[8].ability  = "ON-COMBAT: FIGHT ALL SMOKING ENEMIES"  
crew[8].unlockStart = false;
crew[8].unlockPrice = 600;

crew[9] = new Object();
crew[9].deployCost = 2;
crew[9].name = ""
crew[9].power = 0
crew[9].origPower = crew[9].power
crew[9].attackPattern = 1
crew[9].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[9].ability  = "POWER EQUAL TO TWICE THE NUMBER OF SMOKING ENEMIES"  
crew[9].unlockStart = false;
crew[9].unlockPrice = 600;

crew[10] = new Object();
crew[10].deployCost = 3;
crew[10].name = ""
crew[10].power = 1
crew[10].origPower = crew[10].power
crew[10].attackPattern = 1
crew[10].type = 2 // 0- steel, 1 - salt, 2 -smoke
crew[10].ability  = "ON-COMBAT: 25% CHANCE TO GAIN +1 AMMO"  
crew[10].unlockStart = false;
crew[10].unlockPrice = 600;