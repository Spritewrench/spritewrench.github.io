var weapon = [];

//dodge
weapon[0] = new Object();
weapon[0].name = "Dodge"
weapon[0].role = 2;
weapon[0].hp = 3;
// higher the weight faster the skill execute
weapon[0].weight = 5;
weapon[0].cost = 0;
weapon[0].comboPattern = ""
weapon[0].skill = [];
weapon[0].skill[0] = skill[0]

//B. Sword
weapon[1] = new Object();
weapon[1].name = "B-Sword"
weapon[1].id = 1;
weapon[1].role = 1;
weapon[1].hp = 3;
// higher the weight faster the skill execute
weapon[1].weight = 5;
weapon[1].cost = 0;
weapon[1].comboPattern = "0"
weapon[1].skill = [];
weapon[1].skill[0] = skill[1]
weapon[1].ultSkill = skill[4]
weapon[1].ultSkillMax = 5;
weapon[1].craft = [];

//B. Knfie
weapon[2] = new Object();
weapon[2].name = "B-Knife"
weapon[2].id = 2;
weapon[2].role = 1;
weapon[2].hp = 3;
// higher the weight faster the skill execute
weapon[2].weight = 5;
weapon[2].cost = 0;
weapon[2].comboPattern = "0"
weapon[2].skill = [];
weapon[2].skill[0] = skill[2]
weapon[2].ultSkill = skill[5]
weapon[2].ultSkillMax = 5;
weapon[2].craft = [];

//B. Hammer
weapon[3] = new Object();
weapon[3].name = "B-Hammer"
weapon[3].id = 3;
weapon[3].role = 1;
weapon[3].hp = 3;
// higher the weight faster the skill execute
weapon[3].weight = 5;
weapon[3].cost = 0;
weapon[3].comboPattern = "0"
weapon[3].skill = [];
weapon[3].skill[0] = skill[3]
weapon[3].ultSkill = skill[6]
weapon[3].ultSkillMax = 5;
weapon[3].craft = [];

//M. Sword
weapon[4] = new Object();
weapon[4].name = "M-Sword"
weapon[4].id = 4
weapon[4].role = 1;
weapon[4].hp = 3;
// higher the weight faster the skill execute
weapon[4].weight = 5;
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
weapon[4].craft[1].name = deadMonster[0][1].commonRewards[2];
weapon[4].craft[1].count = 5

//M. Rapier
weapon[5] = new Object();
weapon[5].name = "M-Rapier"
weapon[5].id = 5;
weapon[5].role = 1;
weapon[5].hp = 3;
// higher the weight faster the skill execute
weapon[5].weight = 5;
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
weapon[5].craft[1].name = deadMonster[1][1].commonRewards[2];
weapon[5].craft[1].count = 5


//M. Hammer
weapon[6] = new Object();
weapon[6].name = "M-Hammer"
weapon[6].id = 6;
weapon[6].role = 1;
weapon[6].hp = 3;
// higher the weight faster the skill execute
weapon[6].weight = 5;
weapon[6].cost = 0;
weapon[6].comboPattern = "0"
weapon[6].skill = [];
weapon[6].skill[0] = skill[9]
weapon[6].ultSkill = skill[6]
weapon[6].ultSkillMax = 5;
weapon[6].craft = [];
weapon[6].craft[0] = new Object;
weapon[6].craft[0].name = "Small Monster Bone"
weapon[6].craft[0].count = 15
weapon[6].craft[1] = new Object;
weapon[6].craft[1].name = deadMonster[2][1].commonRewards[2];
weapon[6].craft[1].count = 5

//Wooden shield
weapon[100] = new Object();
weapon[100].name = "Wooden-Shield"
weapon[100].id = 100;
weapon[100].role = 3;
weapon[100].hp = 3;
// higher the weight faster the skill execute
weapon[100].weight = 5;
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

