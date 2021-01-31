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
// higher the weight faster the skill execute
weapon[1].weight = 3;
weapon[1].cost = 0;
weapon[1].comboPattern = "0"
weapon[1].skill = [];
weapon[1].skill[0] = skill[1]
weapon[1].ultSkill = skill[4]
weapon[1].ultSkillMax = 5;
weapon[1].craft = [];
weapon[1].durability = 15;
weapon[1].flavourText = "A Beginner's Blade"

//B. Knfie
weapon[2] = new Object();
weapon[2].name = "B-Knife"
weapon[2].id = 2;
weapon[2].role = 1;
weapon[2].hp = 3;
// higher the weight faster the skill execute
weapon[2].weight = 3;
weapon[2].cost = 0;
weapon[2].comboPattern = "0"
weapon[2].skill = [];
weapon[2].skill[0] = skill[2]
weapon[2].ultSkill = skill[5]
weapon[2].ultSkillMax = 5;
weapon[2].craft = [];
weapon[2].durability = 15;
weapon[2].flavourText = "A Sharp Starting Point"

//B. Hammer
weapon[3] = new Object();
weapon[3].name = "B-Hammer"
weapon[3].id = 3;
weapon[3].role = 1;
weapon[3].hp = 3;
// higher the weight faster the skill execute
weapon[3].weight = 3;
weapon[3].cost = 0;
weapon[3].comboPattern = "0"
weapon[3].skill = [];
weapon[3].skill[0] = skill[3]
weapon[3].ultSkill = skill[6]
weapon[3].ultSkillMax = 5;
weapon[3].craft = [];
weapon[3].durability = 15;
weapon[3].flavourText = "Unyielding Enthusiasm"

//Wocco Feather Duster
weapon[4] = new Object();
weapon[4].name = "Wocco Feather Duster"
weapon[4].id = 4
weapon[4].role = 1;
weapon[4].hp = 3;
// higher the weight faster the skill execute
weapon[4].weight = 3;
weapon[4].cost = 0;
weapon[4].comboPattern = "0"
weapon[4].skill = [];
weapon[4].skill[0] = skill[7]
weapon[4].ultSkill = skill[4]
weapon[4].ultSkillMax = 5;
weapon[4].craft = [];
weapon[4].craft[0] = new Object;
weapon[4].craft[0].name = "Small Monster Bone"
weapon[4].craft[0].count = 15
weapon[4].craft[1] = new Object;
weapon[4].craft[1].name = deadMonster[0][1].uncommonRewards[2]
weapon[4].craft[1].count = 5
weapon[4].durability = 15;
weapon[4].flavourText = "Great for Cleaning Up After a Hunt"

//Tunnel Tusk
weapon[5] = new Object();
weapon[5].name = "Tunnel Tusk"
weapon[5].id = 5;
weapon[5].role = 1;
weapon[5].hp = 3;
// higher the weight faster the skill execute
weapon[5].weight = 3;
weapon[5].cost = 0;
weapon[5].comboPattern = "0"
weapon[5].skill = [];
weapon[5].skill[0] = skill[8]
weapon[5].ultSkill = skill[5]
weapon[5].ultSkillMax = 5;
weapon[5].craft = [];
weapon[5].craft[0] = new Object;
weapon[5].craft[0].name = "Small Monster Bone"
weapon[5].craft[0].count = 15
weapon[5].craft[1] = new Object;
weapon[5].craft[1].name = deadMonster[0][3].uncommonRewards[1];
weapon[5].craft[1].count = 5
weapon[5].durability = 15;
weapon[5].flavourText = "The only way forward, is through"


//Echo Hammer
weapon[7] = new Object();
weapon[7].name = "Echo Hammer"
weapon[7].id = 7;
weapon[7].role = 1;
weapon[7].hp = 3;
// higher the weight faster the skill execute
weapon[7].weight = 3;
weapon[7].cost = 0;
weapon[7].comboPattern = "0"
weapon[7].skill = [];
weapon[7].skill[0] = skill[9]
weapon[7].ultSkill = skill[6]
weapon[7].ultSkillMax = 5;
weapon[7].craft = [];
weapon[7].craft[0] = new Object;
weapon[7].craft[0].name = "Large Monster Bone"
weapon[7].craft[0].count = 15
weapon[7].craft[1] = new Object;
weapon[7].craft[1].name = deadMonster[0][2].rareRewards[1]
weapon[7].craft[1].count = 1
weapon[7].durability = 15;
weapon[7].flavourText = "Once more, with feeling"

//Toxic Teeth
weapon[8] = new Object();
weapon[8].name = "Toxic Teeth"
weapon[8].id = 8;
weapon[8].role = 1;
weapon[8].hp = 3;
// higher the weight faster the skill execute
weapon[8].weight = 3;
weapon[8].cost = 0;
weapon[8].comboPattern = "0"
weapon[8].skill = [];
weapon[8].skill[0] = skill[7]
weapon[8].ultSkill = skill[4]
weapon[8].ultSkillMax = 5;
weapon[8].craft = [];
weapon[8].craft[0] = new Object;
weapon[8].craft[0].name = "Medium Monster Bone"
weapon[8].craft[0].count = 15
weapon[8].craft[1] = new Object;
weapon[8].craft[1].name = deadMonster[0][4].commonRewards[2];
weapon[8].craft[1].count = 5
weapon[8].durability = 15;
weapon[8].flavourText = "Twice the Bite"

//Maggot Knife
weapon[9] = new Object();
weapon[9].name = "Maggot Knife"
weapon[9].id = 9;
weapon[9].role = 1;
weapon[9].hp = 3;
// higher the weight faster the skill execute
weapon[9].weight = 3;
weapon[9].cost = 0;
weapon[9].comboPattern = "0"
weapon[9].skill = [];
weapon[9].skill[0] = skill[8]
weapon[9].ultSkill = skill[5]
weapon[9].ultSkillMax = 5;
weapon[9].craft = [];
weapon[9].craft[0] = new Object;
weapon[9].craft[0].name = "Small Monster Bone"
weapon[9].craft[0].count = 15
weapon[9].craft[1] = new Object;
weapon[9].craft[1].name = deadMonster[1][1].commonRewards[2];
weapon[9].craft[1].count = 5
weapon[9].durability = 15;
weapon[9].flavourText = "Death for Death"

//Knick-Knack Knocker
weapon[10] = new Object();
weapon[10].name = "Knick-Knack Knocker"
weapon[10].id = 10;
weapon[10].role = 1;
weapon[10].hp = 3;
// higher the weight faster the skill execute
weapon[10].weight = 3;
weapon[10].cost = 0;
weapon[10].comboPattern = "0"
weapon[10].skill = [];
weapon[10].skill[0] = skill[9]
weapon[10].ultSkill = skill[6]
weapon[10].ultSkillMax = 5;
weapon[10].craft = [];
weapon[10].craft[0] = new Object;
weapon[10].craft[0].name = "Medium Monster Bone"
weapon[10].craft[0].count = 15
weapon[10].craft[1] = new Object;
weapon[10].craft[1].name = deadMonster[1][2].uncommonRewards[2];
weapon[10].craft[1].count = 5
weapon[10].durability = 15;
weapon[10].flavourText = "Break Monsters with Bric-A-Brac"

//Maiden's Heart
weapon[11] = new Object();
weapon[11].name = "Maiden Heart"
weapon[11].id = 11;
weapon[11].role = 1;
weapon[11].hp = 3;
// higher the weight faster the skill execute
weapon[11].weight = 3;
weapon[11].cost = 0;
weapon[11].comboPattern = "0"
weapon[11].skill = [];
weapon[11].skill[0] = skill[8]
weapon[11].ultSkill = skill[5]
weapon[11].ultSkillMax = 5;
weapon[11].craft = [];
weapon[11].craft[0] = new Object;
weapon[11].craft[0].name = "Small Monster Bone"
weapon[11].craft[0].count = 15
weapon[11].craft[1] = new Object;
weapon[11].craft[1].name = deadMonster[1][4].commonRewards[2];
weapon[11].craft[1].count = 5
weapon[11].durability = 15;
weapon[11].flavourText = "A Man's Strength and a Maiden's Heart"

//Lokum Blade
weapon[12] = new Object();
weapon[12].name = "Lokum Blade"
weapon[12].id = 12;
weapon[12].role = 1;
weapon[12].hp = 3;
// higher the weight faster the skill execute
weapon[12].weight = 3;
weapon[12].cost = 0;
weapon[12].comboPattern = "0"
weapon[12].skill = [];
weapon[12].skill[0] = skill[7]
weapon[12].ultSkill = skill[4]
weapon[12].ultSkillMax = 5;
weapon[12].craft = [];
weapon[12].craft[0] = new Object;
weapon[12].craft[0].name = "Medium Monster Bone"
weapon[12].craft[0].count = 15
weapon[12].craft[1] = new Object;
weapon[12].craft[1].name = deadMonster[1][3].uncommonRewards[2];
weapon[12].craft[1].count = 5
weapon[12].durability = 15;
weapon[12].flavourText = "Ew ... "

//Elder Kris
weapon[13] = new Object();
weapon[13].name = "Elder Kris"
weapon[13].id = 13;
weapon[13].role = 1;
weapon[13].hp = 3;
// higher the weight faster the skill execute
weapon[13].weight = 3;
weapon[13].cost = 0;
weapon[13].comboPattern = "0"
weapon[13].skill = [];
weapon[13].skill[0] = skill[8]
weapon[13].ultSkill = skill[5]
weapon[13].ultSkillMax = 5;
weapon[13].craft = [];
weapon[13].craft[0] = new Object;
weapon[13].craft[0].name = "Large Monster Bone"
weapon[13].craft[0].count = 15
weapon[13].craft[1] = new Object;
weapon[13].craft[1].name = deadMonster[2][4].commonRewards[2];
weapon[13].craft[1].count = 5
weapon[13].durability = 15;
weapon[13].flavourText = "The Oldest Blade ..."

//Boom Bringer
weapon[14] = new Object();
weapon[14].name = "Boom Bringer"
weapon[14].id = 14;
weapon[14].role = 1;
weapon[14].hp = 3;
// higher the weight faster the skill execute
weapon[14].weight = 3;
weapon[14].cost = 0;
weapon[14].comboPattern = "0"
weapon[14].skill = [];
weapon[14].skill[0] = skill[9]
weapon[14].ultSkill = skill[6]
weapon[14].ultSkillMax = 5;
weapon[14].craft = [];
weapon[14].craft[0] = new Object;
weapon[14].craft[0].name = "Small Monster Bone"
weapon[14].craft[0].count = 15
weapon[14].craft[1] = new Object;
weapon[14].craft[1].name = deadMonster[2][1].commonRewards[2];
weapon[14].craft[1].count = 5
weapon[14].durability = 15;
weapon[14].flavourText = "Boom Boom! Shake the Room!"

//Shell Breaker
weapon[15] = new Object();
weapon[15].name = "Shell Breaker"
weapon[15].id = 15;
weapon[15].role = 1;
weapon[15].hp = 3;
// higher the weight faster the skill execute
weapon[15].weight = 3;
weapon[15].cost = 0;
weapon[15].comboPattern = "0"
weapon[15].skill = [];
weapon[15].skill[0] = skill[9]
weapon[15].ultSkill = skill[6]
weapon[15].ultSkillMax = 5;
weapon[15].craft = [];
weapon[15].craft[0] = new Object;
weapon[15].craft[0].name = "Small Monster Bone"
weapon[15].craft[0].count = 15
weapon[15].craft[1] = new Object;
weapon[15].craft[1].name = deadMonster[2][2].uncommonRewards[2];
weapon[15].craft[1].count = 5
weapon[15].durability = 15;
weapon[15].flavourText = "Don't try to walk on eggshells"

//Crownsmasher
weapon[16] = new Object();
weapon[16].name = "Crownsmasher"
weapon[16].id = 16;
weapon[16].role = 1;
weapon[16].hp = 3;
// higher the weight faster the skill execute
weapon[16].weight = 3;
weapon[16].cost = 0;
weapon[16].comboPattern = "0"
weapon[16].skill = [];
weapon[16].skill[0] = skill[9]
weapon[16].ultSkill = skill[6]
weapon[16].ultSkillMax = 5;
weapon[16].craft = [];
weapon[16].craft[0] = new Object;
weapon[16].craft[0].name = "Small Monster Bone"
weapon[16].craft[0].count = 15
weapon[16].craft[1] = new Object;
weapon[16].craft[1].name = deadMonster[2][3].commonRewards[2];
weapon[16].craft[1].count = 5
weapon[16].durability = 15;
weapon[16].flavourText = "All kings is mostly rapscallions"

//Wooden shield
weapon[100] = new Object();
weapon[100].name = "Wooden-Shield"
weapon[100].id = 100;
weapon[100].role = 3;
weapon[100].hp = 3;
// higher the weight faster the skill execute
weapon[100].weight = 3;
weapon[100].cost = 0;
weapon[100].comboPattern = ""
weapon[100].skill = [];
weapon[100].skill[0] = skill[3]

//red potion
weapon[200] = new Object();
weapon[200].name = "Red-Potion"
weapon[200].id = 200;
weapon[200].role = 2;
weapon[200].hp = 3;
// higher the weight faster the skill execute
weapon[200].weight = 0;
weapon[200].cost = 0;
weapon[200].comboPattern = ""
weapon[200].skill = [];
weapon[200].skill[0] = skill[4]

