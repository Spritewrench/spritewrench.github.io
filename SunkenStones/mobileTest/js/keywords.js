const keyword = []

keyword[0] = new Object();
keyword[0].word = "HEALTH";
keyword[0].color = "#de6e6e";
keyword[0].description = "HEALTH REFERS TO CAPTAIN'S LIFE TOTAL"

keyword[1] = new Object();
keyword[1].word = "SAVVY";
keyword[1].color = "#46aaca";
keyword[1].description = "SAVVY IS USED TO DEPLOY CREWMATES & USE CAPTAIN ABILITIES"

keyword[2] = new Object();
keyword[2].word = "AMMO";
keyword[2].color = "#65b74a";
keyword[2].description = "AMMO REFERS TO THE NUMBER OF BOMBS YOU HAVE"

keyword[3] = new Object();
keyword[3].word = "SMOKING";
keyword[3].color = "#ff5733";
keyword[3].description = "SMOKING CREEPS HAVE A 50% CHANCE TO MISS"

keyword[4] = new Object();
keyword[4].word = "SUBMERGED";
keyword[4].color = "#4a6bbf";
keyword[4].description = "SUBMERGED CREEPS CAN'T ATTACK OR BE ATTACKED. CREW CAN BE PLACED ON SUBMERGED CREEPS TO BLOCK THEM FROM SURFACING"

keyword[5] = new Object();
keyword[5].word = "INTANGIBLE";
keyword[5].color = "#8054ce";
keyword[5].description = "INTANGIBLE CREEPS TAKE HALF DAMAGE ROUNDED DOWN."

keyword[6] = new Object();
keyword[6].word = "GOLD";
keyword[6].color = "#FFA000";
keyword[6].description = ""

keyword[7] = new Object();
keyword[7].word = "ON-COMBAT:";
keyword[7].color = "#808080";
keyword[7].description = "ON-COMBAT: EFFECTS TRIGGERS WHEN THIS UNIT FIGHTS"

keyword[8] = new Object();
keyword[8].word = "ON-BLOCK:";
keyword[8].color = "#808080";
keyword[8].description = "ON-BLOCK: EFFECTS TRIGGER WHEN A CREW MATE BLOCKS A CREEP FROM SURFACING"

keyword[9] = new Object();
keyword[9].word = "ON-RETURN:";
keyword[9].color = "#808080";
keyword[9].description = "TRIGGERS WHEN THIS CREWMATE RETURNS TO THE BENCH"

keyword[10] = new Object();
keyword[10].word = "PERSONAL-STASH";
keyword[10].color = "#4A7CBC";
keyword[10].description = ""

keyword[11] = new Object();
keyword[11].word = "STEEL";
keyword[11].color = "#6B97A6";
keyword[11].description = "STEEL REFERS TO ONE OF THE ELEMENTAL TYPES THAT CAN BE ASSIGNED TO CREW MATES"

keyword[12] = new Object();
keyword[12].word = "SALT";
keyword[12].color = "#C1EFFF";
keyword[12].description = "SALT REFERS TO ONE OF THE ELEMENTAL TYPES THAT CAN BE ASSIGNED TO CREW MATES"

keyword[13] = new Object();
keyword[13].word = "SMOKE";
keyword[13].color = "#685E5E";
keyword[13].description = "SMOKE REFERS TO ONE OF THE ELEMENTAL TYPES THAT CAN BE ASSIGNED TO CREW MATES"

keyword[14] = new Object();
keyword[14].word = "SMALL";
keyword[14].color = "#f57663";
keyword[14].description = "SMALL CREEPS HAVE "+largeThresh+" OR LESS HP"

keyword[15] = new Object();
keyword[15].word = "LARGE";
keyword[15].color = "#f57663";
keyword[15].description = "LARGE CREEPS HAVE GREATER THAN "+largeThresh+" HP"

keyword[16] = new Object();
keyword[16].word = "WEAK";
keyword[16].color = "#f57663";
keyword[16].description = "WEAK CREEPS DIE INSTANTLY WHEN RECIEVING DAMAGE FROM SPECIFIED SOURCE"

keyword[17] = new Object();
keyword[17].word = "ON-DEATH:";
keyword[17].color = "#808080";
keyword[17].description = "ON-DEATH: EFFECTS TRIGGER WHEN A UNIT DIES"

keyword[18] = new Object();
keyword[18].word = "ON-HURT:";
keyword[18].color = "#808080";
keyword[18].description = "ON-HURT EFFECTS TRIGGER WHEN A UNIT GETS HURT"

keyword[19] = new Object();
keyword[19].word = "ON-BOARD:";
keyword[19].color = "#808080";
keyword[19].description = "ON-BOARD EFFECTS ARE APPLIED ONCE A UNIT IS ON THE BOARD"

keyword[20] = new Object();
keyword[20].word = "TOKEN";
keyword[20].color = "#54A647";
keyword[20].description = "TOKENS ARE SPENT AUTOMATICALLY DURING THE BEGINNING OF YOUR TURN TO TRIGGER EFFECTS"

keyword[21] = new Object();
keyword[21].word = "QUEUE";
keyword[21].color = "#f57663";
keyword[21].description = "QUEUE REFERS TO THE ORDER IN WHICH CREW ARE DEPLOYED TO THE BOARD"

keyword[22] = new Object();
keyword[22].word = "UPWIND";
keyword[22].color = "#87f1ac";
keyword[22].description = "UPWIND REFERS TO A SPACE ABOVE THIS SPOT"

keyword[23] = new Object();
keyword[23].word = "DOWNWIND";
keyword[23].color = "#87f1ac";
keyword[23].description = "DOWNWIND REFERS TO A SPACE BELOW THIS SPOT"

keyword[24] = new Object();
keyword[24].word = "EXTRA-DAMAGE";
keyword[24].color = "#87f1ac";
keyword[24].description = "EXTRA-DAMAGE IS ONLY CALCULATED DURING COMBAT"

keyword[25] = new Object();
keyword[25].word = "DRUNK";
keyword[25].color = "#87f1ac";
keyword[25].description = "DRUNK REFERS TO WAVE COUNT BEING ODD"

keyword[26] = new Object();
keyword[26].word = "SOBER";
keyword[26].color = "#87f1ac";
keyword[26].description = "SOBER REFERS TO WAVE COUNT BEING EVEN"

keyword[27] = new Object();
keyword[27].word = "PROUD";
keyword[27].color = "#87f1ac";
keyword[27].description = "CREW IS PROUD IF CAPTAIN'S HEALTH IS 20 OR GREATER"

keyword[28] = new Object();
keyword[28].word = "CONSUMABLE";
keyword[28].color = "#87f1ac";
keyword[28].description = "CONSUMABLES DISAPPEAR FROM THE BOARD AFTER ATTACKING"

keyword[29] = new Object();
keyword[29].word = "EXHAUSTED";
keyword[29].color = "#87f1ac";
keyword[29].description = "EXHAUSTED CREEPS WON'T ATTACK"

keyword[30] = new Object();
keyword[30].word = "AFFLICT";
keyword[30].color = "#7942AB";
keyword[30].description = "+2 TO TARGET'S AFFLICTION COUNT"

keyword[31] = new Object();
keyword[31].word = "AFFLICTED";
keyword[31].color = "#7942AB";
keyword[31].description = "WHEN AN AFFLICTED UNIT IS DEPLOYED FILL THE CURSE METER EQUAL TO IT'S AFFLICTION COUNT"

keyword[32] = new Object();
keyword[32].word = "TOKENS";
keyword[32].color = "#54A647";
keyword[32].description = ""

keyword[33] = new Object();
keyword[33].word = "RESCUE";
keyword[33].color = "#54A647";
keyword[33].description = "RESCUE REFERS TO ADDING A NEW CREW MATE AT THE START OF YOUR NEXT TURN"

keyword[34] = new Object();
keyword[34].word = "CONSUMABLES";
keyword[34].color = "#87f1ac";
keyword[34].description = ""

keyword[35] = new Object();
keyword[35].word = "HEALTH:";
keyword[35].color = "#de6e6e"
keyword[35].description = ""

keyword[36] = new Object();
keyword[36].word = "CURSE";
keyword[36].color = "#7942AB"
keyword[36].description = "AT THE END OF THE ROUND IF CURSE METER IS FULL, SPIN THE ROULETTE OF DOOM! BE SURE TO MANAGE YOUR AFFLICTED CREWMATES CAREFULLY!"

keyword[37] = new Object();
keyword[37].word = "BOON:";
keyword[37].color = "#5AE66C"
keyword[37].description = ""

keyword[38] = new Object();
keyword[38].word = "BOMB";
keyword[38].color = "#87f1ac"
keyword[38].description = "A BOMB IS A CONSUMABLE THAT ATTACKS ALL SURROUNDING TILES"

keyword[39] = new Object();
keyword[39].word = "HARPOON";
keyword[39].color = "#87f1ac"
keyword[39].description = "A HARPOON IS A CONSUMABLE THAT CAN ATTACK SUBMERGED CREEPS"

keyword[40] = new Object();
keyword[40].word = "REROLL";
keyword[40].color = "#87f1ac"
keyword[40].description = "SPEND REROLL TO REFRESH ANY CHOICE OFFERED"


keyword[41] = new Object();
keyword[41].word = "BOMBS";
keyword[41].color = "#87f1ac"
keyword[41].description = "BOMBS ARE CONSUMABLES THAT ATTACK ALL SURROUNDING TILES"

keyword[42] = new Object();
keyword[42].word = "HARPOONS";
keyword[42].color = "#87f1ac"
keyword[42].description = "HARPOONS ARE CONSUMABLES THAT CAN ATTACK SUBMERGED CREEPS"

keyword[43] = new Object();
keyword[43].word = "BUFFED";
keyword[43].color = "#5AE66C"
keyword[43].description = "BUFFED GIVES CREEP +1 POWER PER STACK"

keyword[44] = new Object();
keyword[44].word = "BUFFED:";
keyword[44].color = "#5AE66C"
keyword[44].description = "BUFFED GIVES CREEP +1 POWER PER STACK"

keyword[45] = new Object();
keyword[45].word = "FURY";
keyword[45].color = "#dc1616"
keyword[45].description = "EACH STACK OF FURY GIVES CREEP +1 POWER PER STACK"

keyword[46] = new Object();
keyword[46].word = "CURSED:";
keyword[46].color = "#7942AB"
keyword[46].description = "AT THE END OF THE ROUND IF CURSE METER IS FULL, SPIN THE ROULETTE OF DOOM!"

keyword[47] = new Object();
keyword[47].word = "LUCKY:";
keyword[47].color = "#C70039"
keyword[47].description = ""

keyword[47] = new Object();
keyword[47].word = "ENRAGED:";
keyword[47].color = "#dc1616"
keyword[47].description = ""

keyword[48] = new Object();
keyword[48].word = "BLESSED:";
keyword[48].color = "#C70039";
keyword[48].description = ""

keyword[49] = new Object();
keyword[49].word = "DEBUFFED:";
keyword[49].color = "#c645cf";
keyword[49].description = ""

keyword[50] = new Object();
keyword[50].word = "DEBUFF";
keyword[50].color = "#c645cf";
keyword[50].description = ""
