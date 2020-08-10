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
monster[0][1].hp = 4;
monster[0][1].mp = 2;
monster[0][1].attack = 1;
monster[0][1].defence = 1;

monster[0][1].slashDef = 0;
monster[0][1].stabDef = 0;
monster[0][1].bashDef = 1;

monster[0][1].dex = 3;
monster[0][1].dodge = 0;
monster[0][1].intel = 1;
monster[0][1].speed = 8;
monster[0][1].attackPattern = "001"

//maddock
monster[1][1] = new Object();
monster[1][1].name = "maddock"
monster[1][1].hp = 8;
monster[1][1].mp = 2;
monster[1][1].attack = 1;
monster[1][1].defence = 1;

monster[0][1].slashDef = 1;
monster[0][1].stabDef = 0;
monster[0][1].bashDef = 0;

monster[1][1].dex = 3;
monster[1][1].dodge = 0;
monster[1][1].intel = 1;
monster[1][1].speed = 12;
monster[1][1].attackPattern = "001010101"

//boot
monster[2][1] = new Object();
monster[2][1].name = "noot"
monster[2][1].hp = 2;
monster[2][1].mp = 2;
monster[2][1].attack = 1;
monster[2][1].defence = 1;

monster[0][1].slashDef = 0;
monster[0][1].stabDef = 1;
monster[0][1].bashDef = 0;

monster[2][1].dex = 3;
monster[2][1].dodge = 0;
monster[2][1].intel = 1;
monster[2][1].speed = 16;
monster[2][1].attackPattern = "010111"