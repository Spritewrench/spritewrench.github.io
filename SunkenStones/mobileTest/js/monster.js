const monster = []

monster[0] = new Object();
monster[0].name = ""
monster[0].hp = 0
monster[0].power = 0
monster[0].multiAttack = 0;
monster[0].tier = 0
monster[0].ability = ""

monster[1] = new Object();
monster[1].name = ""
monster[1].hp = 1
monster[1].power = 0
monster[1].multiAttack = 0;
monster[1].tier = 0
monster[1].ability = ""

monster[2] = new Object();
monster[2].name = "TENTACLE[RIGHT]"
monster[2].hp = 2
monster[2].power = 2
monster[2].multiAttack = 0;
monster[2].tier = 2
monster[2].ability = ""

monster[3] = new Object();
monster[3].name = "TENTACLE[LEFT]"
monster[3].hp = 3
monster[3].power = 1
monster[3].multiAttack = 1;
monster[3].tier = 1
monster[3].ability = "ON-COMBAT: ATTACK AN EXTRA TIME"

monster[4] = new Object();
monster[4].name = "KRAKEN"
monster[4].hp = 15
monster[4].power = 0
monster[4].multiAttack = 0;
monster[4].tier = 3
monster[4].ability = "ON-COMBAT: I SPAWN TENTACLES"

monster[5] = new Object();
monster[5].name = "SEA SERPENT"
monster[5].hp = 3
monster[5].power = 2
monster[5].multiAttack = 0;
monster[5].tier = 1
monster[5].ability = "ON-HURT: \n +1 FURY"

monster[6] = new Object();
monster[6].name = "LEVIATHAN"
monster[6].hp = 3
monster[6].power = 0
monster[6].multiAttack = 0;
monster[6].tier = 2
monster[6].ability = "ON-COMBAT: +1 HP TO ALL SEA SERPENT(S) & SCYLLA(S)"

monster[7] = new Object();
monster[7].name = "SCYLLA"
monster[7].hp = 30
monster[7].power = 0
monster[7].multiAttack = 0;
monster[7].tier = 3
monster[7].ability = "ON-HURT: \n +2 FURY"

monster[8] = new Object();
monster[8].name = "GHOST"
monster[8].hp = 4
monster[8].power = 1
monster[8].multiAttack = 0;
monster[8].tier = 1
monster[8].ability = "ON-COMBAT: GAINS INTANGIBLE . LOSES IT NEXT ATTACK"

monster[9] = new Object();
monster[9].name = "WRAITH"
monster[9].hp = 4
monster[9].power = 2
monster[9].multiAttack = 0;
monster[9].tier = 1
monster[9].ability = "ON-COMBAT: GAINS INTANGIBLE . LOSES IT NEXT ATTACK"

monster[10] = new Object();
monster[10].name = "SHADOW"
monster[10].hp = 50
monster[10].power = 5
monster[10].multiAttack = 0;
monster[10].tier = 3
monster[10].ability = []
monster[10].ability[1] = "AT THE END OF EACH ROUND ALL CREEPS +1 FURY IF SAVVY IS ZERO"
monster[10].ability[2] = "AT THE END OF THE ROUND +1 FURY FOR EACH CREEP THAT IS NOT SMOKING"
monster[10].ability[3] = "AT THE END OF EACH ROUND LOSE -1 HP FOR EACH SUBMERGED CREEP"
monster[10].ability[4] = "AT THE END OF EACH ROUND GAIN +5 FURY \n ON-HURT: -2 POWER"
monster[10].ability[5] = "AT THE END OF EACH ROUND EACH ENEMY +1 HP"
monster[10].ability[6] = "ON KNOCKBACK -5 HP & +1 FURY"

monster[11] = new Object();
monster[11].name = "'GEORGE' THE LUCKY MANATEE"
monster[11].hp = 10
monster[11].power = 0
monster[11].multiAttack = 0;
monster[11].tier = 3
monster[11].ability = "AT THE END OF EACH ROUND GEORGE GAINS +5 HP \n ON-DEATH: ALL CREWMATES ARE NO LONGER AFFLICTED"

monster[99] = new Object();
monster[99].name = "CURSED CHEST"
monster[99].hp = 3
monster[99].power = 0
monster[99].multiAttack = 0;
monster[99].tier = 0
monster[99].ability = "ON-DEATH: CHOOSE A CURSED TREASUE AT THE START OF YOUR NEXT TURN"

monster[100] = new Object();
monster[100].name = "SUBMERGED SHADOW"
monster[100].hp = 0
monster[100].power = 0
monster[100].multiAttack = 0;
monster[100].tier = 0
monster[100].ability = ""

monster[101] = new Object();
monster[101].name = "NAVY OFFICER"
monster[101].hp = 4
monster[101].power = 0
monster[101].multiAttack = 0;
monster[101].tier = 2
monster[101].ability = "MY POWER IS EQUAL TO YOUR BOUNTY"

monster[102] = new Object();
monster[102].name = "S.O.S"
monster[102].hp = 3
monster[102].power = 0
monster[102].multiAttack = 0;
monster[102].tier = 2
monster[102].ability = "ON-DEATH: RESCUE A CREWMATE"

monster[103] = new Object();
monster[103].name = "JAGGED ROCKS"
monster[103].hp = 10
monster[103].power = 0
monster[103].multiAttack = 0;
monster[103].tier = 2
monster[103].ability = "WEAK TO BOMBS"