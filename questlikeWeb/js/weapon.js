var weapon = [];

//dodge
weapon[0] = new Object();
weapon[0].name = "Dodge"
weapon[0].role = 2;
weapon[0].hp = 3;
// higher the weight faster the skill execute
weapon[0].weight = 3;
weapon[0].cost = 0;
weapon[0].comboPattern = ""
weapon[0].skill = [];
weapon[0].skill[0] = skill[0]
weapon[0].durability = 15;
weapon[0].flavourText = "lorem ipsum"

//B. Sword
weapon[1] = new Object();
weapon[1].name = "B-Sword"
weapon[1].id = 1;
weapon[1].role = 1;
weapon[1].hp = 3;

weapon[1].upgradable = false;

//elem damage
weapon[1].element = 0;
//physical damage
weapon[1].attackValue = 15;
// slash - 0, stab - 1 & bash - 2
weapon[1].attackType = 0;
 
// higher the weight faster the skill execute - 2/4/6
weapon[1].weight = 4;
weapon[1].cost = 0;
weapon[1].comboPattern = "0"
weapon[1].skill = [];
weapon[1].skill[0] = skill[1]

weapon[1].ultSkill = skill[4]
weapon[1].ultSkillMax = 5;
weapon[1].craft = [];
weapon[1].durability = 15;
weapon[1].flavourText = "'A Beginner's Blade'"

//B. Knfie
weapon[2] = new Object();
weapon[2].name = "B-Knife"
weapon[2].id = 2;
weapon[2].role = 1;
weapon[2].hp = 3;

weapon[2].upgradable = false;

//elem damage
weapon[2].element = 0;
//physical damage
weapon[2].attackValue = 15;
// slash - 0, stab - 1 & bash - 2
weapon[2].attackType = 1;
 
// higher the weight faster the skill execute
weapon[2].weight = 6;
weapon[2].cost = 0;
weapon[2].comboPattern = "0"
weapon[2].skill = [];
weapon[2].skill[0] = skill[2]
weapon[2].ultSkill = skill[5]
weapon[2].ultSkillMax = 5;
weapon[2].craft = [];
weapon[2].durability = 15;
weapon[2].flavourText = "'A Sharp Starting Point'"

//B. Hammer
weapon[3] = new Object();
weapon[3].name = "B-Hammer"
weapon[3].id = 3;
weapon[3].role = 1;
weapon[3].hp = 3;

weapon[3].upgradable = false;

//elem damage
weapon[3].element = 0;
//physical damage
weapon[3].attackValue = 15;
// slash - 0, stab - 1 & bash - 2
weapon[3].attackType = 2;
 
// higher the weight faster the skill execute
weapon[3].weight = 2;
weapon[3].cost = 0;
weapon[3].comboPattern = "0"
weapon[3].skill = [];
weapon[3].skill[0] = skill[3]
weapon[3].ultSkill = skill[6]
weapon[3].ultSkillMax = 5;
weapon[3].craft = [];
weapon[3].durability = 15;
weapon[3].flavourText = "'Unyielding Enthusiasm'"

//Wocco Feather Duster
weapon[4] = new Object();
weapon[4].name = "Wocco Feather Duster"
weapon[4].id = 4
weapon[4].role = 1;
weapon[4].hp = 3;

//elem damage
weapon[4].element = 1;
//physical damage
weapon[4].attackValue = 10;
// slash - 0, stab - 1 & bash - 2
weapon[4].attackType = 0;
 
// higher the weight faster the skill execute
weapon[4].weight = 6;
weapon[4].cost = 0;
weapon[4].comboPattern = "0"
weapon[4].skill = [];
weapon[4].skill[0] = skill[10]
weapon[4].ultSkill = skill[4]
weapon[4].ultSkillMax = 5;
weapon[4].craft = [];
weapon[4].craft[0] = new Object;
weapon[4].craft[0].name = "Small Monster Bone"
weapon[4].craft[0].count = 10
weapon[4].craft[1] = new Object;
weapon[4].craft[1].name = deadMonster[0][1].uncommonRewards[2]
weapon[4].craft[1].count = 12
weapon[4].durability = 15;
weapon[4].flavourText = "'Great for Cleaning Up After a Hunt'"
weapon[4].levelLimit = 5;

//Tunnel Tusk
weapon[5] = new Object();
weapon[5].name = "Tunnel Tusk"
weapon[5].id = 5;
weapon[5].role = 1;
weapon[5].hp = 3;

//elem damage
weapon[5].element = 1;
//physical damage
weapon[5].attackValue = 50;
// slash - 0, stab - 1 & bash - 2
weapon[5].attackType = 1;
 
// higher the weight faster the skill execute
weapon[5].weight = 6;
weapon[5].cost = 0;
weapon[5].comboPattern = "0"
weapon[5].skill = [];
weapon[5].skill[0] = skill[11]
weapon[5].ultSkill = skill[5]
weapon[5].ultSkillMax = 5;
weapon[5].craft = [];
weapon[5].craft[0] = new Object;
weapon[5].craft[0].name = "Medium Monster Bone"
weapon[5].craft[0].count = 10
weapon[5].craft[1] = new Object;
weapon[5].craft[1].name = deadMonster[0][3].uncommonRewards[1];
weapon[5].craft[1].count = 5
weapon[5].durability = 15;
weapon[5].flavourText = "'The only way forward, is through'"
weapon[5].levelLimit = 10;

//Echo Hammer
weapon[6] = new Object();
weapon[6].name = "Echo Hammer"
weapon[6].id = 6;
weapon[6].role = 1;
weapon[6].hp = 3;

//elem damage
weapon[6].element = 1;
//physical damage
weapon[6].attackValue = 10;
// slash - 0, stab - 1 & bash - 2
weapon[6].attackType = 2;

// higher the weight faster the skill execute
weapon[6].weight = 2;
weapon[6].cost = 0;
weapon[6].comboPattern = "0"
weapon[6].skill = [];
weapon[6].skill[0] = skill[12]
weapon[6].ultSkill = skill[6]
weapon[6].ultSkillMax = 5;
weapon[6].craft = [];
weapon[6].craft[0] = new Object;
weapon[6].craft[0].name = "Small Monster Bone"
weapon[6].craft[0].count = 10
weapon[6].craft[1] = new Object;
weapon[6].craft[1].name = deadMonster[0][2].rareRewards[1]
weapon[6].craft[1].count = 5
weapon[6].durability = 15;
weapon[6].flavourText = "'Once more, with feeling'"
weapon[6].levelLimit = 5;

//Toxic Teeth
weapon[7] = new Object();
weapon[7].name = "Toxic Teeth"
weapon[7].id = 7;
weapon[7].role = 1;
weapon[7].hp = 3;

//elem damage
weapon[7].element = 1;
//physical damage
weapon[7].attackValue = 75;
// slash - 0, stab - 1 & bash - 2
weapon[7].attackType = 1;

// higher the weight faster the skill execute
weapon[7].weight = 6;
weapon[7].cost = 0;
weapon[7].comboPattern = "0"
weapon[7].skill = [];
weapon[7].skill[0] = skill[13]
weapon[7].ultSkill = skill[5]
weapon[7].ultSkillMax = 5;
weapon[7].craft = [];
weapon[7].craft[0] = new Object;
weapon[7].craft[0].name = "Large Monster Bone"
weapon[7].craft[0].count = 10
weapon[7].craft[1] = new Object;
weapon[7].craft[1].name = deadMonster[0][4].commonRewards[2];
weapon[7].craft[1].count = 5
weapon[7].durability = 15;
weapon[7].flavourText = "'Twice the Bite'"
weapon[7].levelLimit = 15;

//Maggot Knife
weapon[8] = new Object();
weapon[8].name = "Maggot Knife"
weapon[8].id = 8;
weapon[8].role = 1;
weapon[8].hp = 3;

//elem damage
weapon[8].element = 2;
//physical damage
weapon[8].attackValue = 10;
// slash - 0, stab - 1 & bash - 2
weapon[8].attackType = 1;


// higher the weight faster the skill execute
weapon[8].weight = 6;
weapon[8].cost = 0;
weapon[8].comboPattern = "0"
weapon[8].skill = [];
weapon[8].skill[0] = skill[14]
weapon[8].ultSkill = skill[5]
weapon[8].ultSkillMax = 5;
weapon[8].craft = [];
weapon[8].craft[0] = new Object;
weapon[8].craft[0].name = "Small Monster Bone"
weapon[8].craft[0].count = 10
weapon[8].craft[1] = new Object;
weapon[8].craft[1].name = deadMonster[1][1].commonRewards[2];
weapon[8].craft[1].count = 5
weapon[8].durability = 15;
weapon[8].flavourText = "'Death for Death'"
weapon[8].levelLimit = 5;

//Knick-Knack Knocker
weapon[9] = new Object();
weapon[9].name = "Knick-Knack Knocker"
weapon[9].id = 9;
weapon[9].role = 1;
weapon[9].hp = 3;

//elem damage
weapon[9].element = 2;
//physical damage
weapon[9].attackValue = 10;
// slash - 0, stab - 1 & bash - 2
weapon[9].attackType = 2;
 
// higher the weight faster the skill execute
weapon[9].weight = 2;
weapon[9].cost = 0;
weapon[9].comboPattern = "0"
weapon[9].skill = [];
weapon[9].skill[0] = skill[18]
weapon[9].ultSkill = skill[6]
weapon[9].ultSkillMax = 5;
weapon[9].craft = [];
weapon[9].craft[0] = new Object;
weapon[9].craft[0].name = "Small Monster Bone"
weapon[9].craft[0].count = 10
weapon[9].craft[1] = new Object;
weapon[9].craft[1].name = deadMonster[1][2].uncommonRewards[2];
weapon[9].craft[1].count = 5
weapon[9].durability = 15;
weapon[9].flavourText = "'Break Monsters with Bric-A-Brac'"
weapon[9].levelLimit = 5;

//Maiden's Heart
weapon[10] = new Object();
weapon[10].name = "Maiden Heart"
weapon[10].id = 10;
weapon[10].role = 1;
weapon[10].hp = 3;

//elem damage
weapon[10].element = 2;
//physical damage
weapon[10].attackValue = 75;
// slash - 0, stab - 1 & bash - 2
weapon[10].attackType = 1;
 
// higher the weight faster the skill execute
weapon[10].weight = 6;
weapon[10].cost = 0;
weapon[10].comboPattern = "0"
weapon[10].skill = [];
weapon[10].skill[0] = skill[15]
weapon[10].ultSkill = skill[5]
weapon[10].ultSkillMax = 5;
weapon[10].craft = [];
weapon[10].craft[0] = new Object;
weapon[10].craft[0].name = "Large Monster Bone"
weapon[10].craft[0].count = 10
weapon[10].craft[1] = new Object;
weapon[10].craft[1].name = deadMonster[1][4].commonRewards[2];
weapon[10].craft[1].count = 5
weapon[10].durability = 15;
weapon[10].flavourText = "'Peerless and Pure'"
weapon[10].levelLimit = 15;

//Lokum Blade
weapon[11] = new Object();
weapon[11].name = "Lokum Blade"
weapon[11].id = 11;
weapon[11].role = 1;
weapon[11].hp = 3;

//elem damage
weapon[11].element = 2;
//physical damage
weapon[11].attackValue = 50;
// slash - 0, stab - 1 & bash - 2
weapon[11].attackType = 0;
 
// higher the weight faster the skill execute
weapon[11].weight = 2;
weapon[11].cost = 0;
weapon[11].comboPattern = "0"
weapon[11].skill = [];
weapon[11].skill[0] = skill[16]
weapon[11].ultSkill = skill[4]
weapon[11].ultSkillMax = 5;
weapon[11].craft = [];
weapon[11].craft[0] = new Object;
weapon[11].craft[0].name = "Medium Monster Bone"
weapon[11].craft[0].count = 10
weapon[11].craft[1] = new Object;
weapon[11].craft[1].name = deadMonster[1][3].uncommonRewards[2];
weapon[11].craft[1].count = 5
weapon[11].durability = 15;
weapon[11].flavourText = "'Delightfully Chewy'"
weapon[11].levelLimit = 10;

//Elder Kris
weapon[12] = new Object();
weapon[12].name = "Elder Kris"
weapon[12].id = 12;
weapon[12].role = 1;
weapon[12].hp = 3;

//elem damage
weapon[12].element = 3;
//physical damage
weapon[12].attackValue = 75;
// slash - 0, stab - 1 & bash - 2
weapon[12].attackType = 0;
 
// higher the weight faster the skill execute
weapon[12].weight = 4;
weapon[12].cost = 0;
weapon[12].comboPattern = "0"
weapon[12].skill = [];
weapon[12].skill[0] = skill[17]
weapon[12].ultSkill = skill[4]
weapon[12].ultSkillMax = 5;
weapon[12].craft = [];
weapon[12].craft[0] = new Object;
weapon[12].craft[0].name = "Large Monster Bone"
weapon[12].craft[0].count = 10
weapon[12].craft[1] = new Object;
weapon[12].craft[1].name = deadMonster[2][4].commonRewards[2];
weapon[12].craft[1].count = 5
weapon[12].durability = 15;
weapon[12].flavourText = "'Respect your Elders'"
weapon[12].levelLimit = 15;

//Boom Bringer
weapon[13] = new Object();
weapon[13].name = "Boom Bringer"
weapon[13].id = 13;
weapon[13].role = 1;
weapon[13].hp = 3;

//elem damage
weapon[13].element = 3;
//physical damage
weapon[13].attackValue = 10;
// slash - 0, stab - 1 & bash - 2
weapon[13].attackType = 2;

// higher the weight faster the skill execute
weapon[13].weight = 2;
weapon[13].cost = 0;
weapon[13].comboPattern = "0"
weapon[13].skill = [];
weapon[13].skill[0] = skill[19]
weapon[13].ultSkill = skill[6]
weapon[13].ultSkillMax = 5;
weapon[13].craft = [];
weapon[13].craft[0] = new Object;
weapon[13].craft[0].name = "Small Monster Bone"
weapon[13].craft[0].count = 10
weapon[13].craft[1] = new Object;
weapon[13].craft[1].name = deadMonster[2][1].commonRewards[2];
weapon[13].craft[1].count = 12
weapon[13].durability = 15;
weapon[13].flavourText = "'Boom Boom! Shake the Room!'"
weapon[13].levelLimit = 5;

//Shell Breaker
weapon[14] = new Object();
weapon[14].name = "Shell Breaker"
weapon[14].id = 14;
weapon[14].role = 1;
weapon[14].hp = 3;

//elem damage
weapon[14].element = 3;
//physical damage
weapon[14].attackValue = 10;
// slash - 0, stab - 1 & bash - 2
weapon[14].attackType = 0;

// higher the weight faster the skill execute
weapon[14].weight = 2;
weapon[14].cost = 0;
weapon[14].comboPattern = "0"
weapon[14].skill = [];
weapon[14].skill[0] = skill[20]
weapon[14].ultSkill = skill[6]
weapon[14].ultSkillMax = 5;
weapon[14].craft = [];
weapon[14].craft[0] = new Object;
weapon[14].craft[0].name = "Small Monster Bone"
weapon[14].craft[0].count = 10
weapon[14].craft[1] = new Object;
weapon[14].craft[1].name = deadMonster[2][2].uncommonRewards[2];
weapon[14].craft[1].count = 5
weapon[14].durability = 15;
weapon[14].flavourText = "'Don't try to walk on eggshells'"
weapon[14].levelLimit = 5;

//Crownsmasher
weapon[15] = new Object();
weapon[15].name = "Crownsmasher"
weapon[15].id = 15;
weapon[15].role = 1;
weapon[15].hp = 3;

//elem damage
weapon[15].element = 3;
//physical damage
weapon[15].attackValue = 50;
// slash - 0, stab - 1 & bash - 2
weapon[15].attackType = 2;

// higher the weight faster the skill execute
weapon[15].weight = 2;
weapon[15].cost = 0;
weapon[15].comboPattern = "0"
weapon[15].skill = [];
weapon[15].skill[0] = skill[21]
weapon[15].ultSkill = skill[6]
weapon[15].ultSkillMax = 5;
weapon[15].craft = [];
weapon[15].craft[0] = new Object;
weapon[15].craft[0].name = "Medium Monster Bone"
weapon[15].craft[0].count = 10
weapon[15].craft[1] = new Object;
weapon[15].craft[1].name = deadMonster[2][3].commonRewards[2];
weapon[15].craft[1].count = 5
weapon[15].durability = 15;
weapon[15].flavourText = "'What's a King to a Hammer?'"
weapon[15].levelLimit = 10;



//Night Whisper
weapon[97] = new Object();
weapon[97].name = "Night Whisper"
weapon[97].id = 97;
weapon[97].role = 1;
weapon[97].hp = 3;

//elem damage
weapon[97].element = 1;
//physical damage
weapon[97].attackValue = 150;
// slash - 0, stab - 1 & bash - 2
weapon[97].attackType = 0;

// higher the weight faster the skill execute
weapon[97].weight = 4;
weapon[97].cost = 0;
weapon[97].comboPattern = "0"
weapon[97].skill = [];
weapon[97].skill[0] = skill[97]
weapon[97].ultSkill = skill[4]
weapon[97].ultSkillMax = 5;
weapon[97].craft = [];
weapon[97].craft[0] = new Object;
weapon[97].craft[0].name = deadMonster[0][99].commonRewards[2];
weapon[97].craft[0].count = 5
weapon[97].craft[1] = new Object;
weapon[97].craft[1].name = deadMonster[0][99].rareRewards[1];
weapon[97].craft[1].count = 5
weapon[97].durability = 5;
weapon[97].flavourText = "'Don't go gentle into that good night'"
weapon[97].levelLimit = 999;

//White Lie
weapon[98] = new Object();
weapon[98].name = "White Lie"
weapon[98].id = 98;
weapon[98].role = 1;
weapon[98].hp = 3;

//elem damage
weapon[98].element = 2;
//physical damage
weapon[98].attackValue = 150;
// slash - 0, stab - 1 & bash - 2
weapon[98].attackType = 2;

// higher the weight faster the skill execute
weapon[98].weight = 4;
weapon[98].cost = 0;
weapon[98].comboPattern = "0"
weapon[98].skill = [];
weapon[98].skill[0] = skill[98]
weapon[98].ultSkill = skill[6]
weapon[98].ultSkillMax = 5;
weapon[98].craft = [];
weapon[98].craft[0] = new Object;
weapon[98].craft[0].name = deadMonster[1][99].commonRewards[2];
weapon[98].craft[0].count = 5
weapon[98].craft[1] = new Object;
weapon[98].craft[1].name = deadMonster[1][99].rareRewards[1];
weapon[98].craft[1].count = 5
weapon[98].durability = 5;
weapon[98].flavourText = "'A small lie never hurt anyone'"
weapon[98].levelLimit = 999;

//Rising Dawn
weapon[99] = new Object();
weapon[99].name = "Rising Dawn"
weapon[99].id = 99;
weapon[99].role = 1;
weapon[99].hp = 3;

//elem damage
weapon[99].element = 3;
//physical damage
weapon[99].attackValue = 150;
// slash - 0, stab - 1 & bash - 2
weapon[99].attackType = 1;

// higher the weight faster the skill execute
weapon[99].weight = 4;
weapon[99].cost = 0;
weapon[99].comboPattern = "0"
weapon[99].skill = [];
weapon[99].skill[0] = skill[99]
weapon[99].ultSkill = skill[5]
weapon[99].ultSkillMax = 5;
weapon[99].craft = [];
weapon[99].craft[0] = new Object;
weapon[99].craft[0].name = deadMonster[2][99].commonRewards[2];
weapon[99].craft[0].count = 5
weapon[99].craft[1] = new Object;
weapon[99].craft[1].name = deadMonster[2][99].rareRewards[1];
weapon[99].craft[1].count = 5
weapon[99].durability = 5;
weapon[99].flavourText = "'To chase Glory, rise with the Sun'"
weapon[99].levelLimit = 999;

//charms




//Wooden shield
weapon[1000] = new Object();
weapon[1000].name = "Wooden-Shield"
weapon[1000].id = 1000;
weapon[1000].role = 3;
weapon[1000].hp = 3;
// higher the weight faster the skill execute
weapon[1000].weight = 3;
weapon[1000].cost = 0;
weapon[1000].comboPattern = ""
weapon[1000].skill = [];
weapon[1000].skill[0] = skill[3]

//red potion
weapon[200] = new Object();
weapon[200].name = "Red Potion"
weapon[200].id = 200;
weapon[200].role = 2;
weapon[200].hp = 3;
// higher the weight faster the skill execute - 2/4/6
weapon[200].weight = 0;
weapon[200].cost = 0;
weapon[200].comboPattern = "0"
weapon[200].skill = [];
weapon[200].skill[0] = skill[1]

weapon[200].ultSkill = skill[4]
weapon[200].ultSkillMax = 5;
weapon[200].craft = [];
weapon[200].craft[0] = new Object;
weapon[200].craft[0].name = deadMonster[2][99].commonRewards[2];
weapon[200].craft[0].count = 2
weapon[200].craft[1] = new Object;
weapon[200].craft[1].name = deadMonster[2][99].rareRewards[1];
weapon[200].craft[1].count = 2
weapon[200].durability = 15;
weapon[200].flavourText = "A Beginner's Blade"
