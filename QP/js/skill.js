var skill = [];

//basic dodge
skill[0] = new Object();
skill[0].name = "Dodge"
skill[0].id = 0;
skill[0].hp = 1;
skill[0].attack = 0;
skill[0].speed = 0;
// slash - 0, stab - 1 & bash - 2
skill[0].attackType = 0;

//novice slash
skill[1] = new Object();
skill[1].name = "Novice-Slash"
skill[1].id = 1;
skill[1].hp = 1;
skill[1].attack = 3;
skill[1].speed = 0;
// slash - 0, stab - 1 & bash - 2
skill[1].attackType = 0;

//novice slash
skill[2] = new Object();
skill[2].name = "Novice-Stab"
skill[2].id = 2;
skill[2].hp = 1;
skill[2].attack = 3;
skill[2].speed = 5
// slash - 0, stab - 1 & bash - 2
skill[2].attackType = 1;

//shield charge
skill[3] = new Object();
skill[3].name = "Shield-Bash"
skill[3].id = 3;
skill[3].hp = 1;
skill[3].attack = 3;
skill[3].speed = 0
// slash - 0, stab - 1 & bash - 2
skill[3].attackType = 2;

//Critical Strike
skill[4] = new Object();
skill[4].name = "Critical-Strike"
skill[4].id = 4;
skill[4].hp = 1;
skill[4].attack = 10;
skill[4].speed = 0
// slash - 0, stab - 1 & bash - 2 & True - 4
skill[4].attackType = 0;
