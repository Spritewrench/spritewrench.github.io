var monster = [];
monster[0] = [];
monster[1] = [];
monster[2] = [];
//biome
//0 - grassland
//1 - cave
//2 - mountain

//wocco
monster[0][1] = new Object();
monster[0][1].name = "wocco"
monster[0][1].hp = 10;
monster[0][1].mp = 2;
monster[0][1].attack = 1;
monster[0][1].defence = 1;

monster[0][1].slashDef = 20;
monster[0][1].stabDef = 0;
monster[0][1].bashDef = 20;

monster[0][1].dex = 3;
monster[0][1].dodge = 0;
monster[0][1].intel = 1;
monster[0][1].speed = 6;
monster[0][1].attackPattern = "1230"
monster[0][1].skill = [];
monster[0][1].skill[1] = monSkill[1]
monster[0][1].skill[2] = monSkill[2]
monster[0][1].skill[3] = monSkill[3]

//maddock
monster[1][1] = new Object();
monster[1][1].name = "maddock"
monster[1][1].hp = 10;
monster[1][1].mp = 2;
monster[1][1].attack = 1;
monster[1][1].defence = 1;

monster[1][1].slashDef = 0;
monster[1][1].stabDef = 20;
monster[1][1].bashDef = 20;

monster[1][1].dex = 3;
monster[1][1].dodge = 0;
monster[1][1].intel = 1;
monster[1][1].speed = 6;
monster[1][1].attackPattern = "1230"
monster[1][1].skill = [];
monster[1][1].skill[1] =monSkill[1]
monster[1][1].skill[2] =monSkill[2]
monster[1][1].skill[3] =monSkill[4]

//noot
monster[2][1] = new Object();
monster[2][1].name = "noot"
monster[2][1].hp = 10;
monster[2][1].mp = 2;
monster[2][1].attack = 1;
monster[2][1].defence = 1;

monster[2][1].slashDef = 20;
monster[2][1].stabDef = 20;
monster[2][1].bashDef = 0;

monster[2][1].dex = 3;
monster[2][1].dodge = 0;
monster[2][1].intel = 1;
monster[2][1].speed = 6;
monster[2][1].attackPattern = "13230"
monster[2][1].skill = [];
monster[2][1].skill[1] =monSkill[1]
monster[2][1].skill[2] =monSkill[2]
monster[2][1].skill[3] =monSkill[5]