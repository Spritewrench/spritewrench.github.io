var monster = [];
monster[-1] = [];
monster[0] = [];
monster[1] = [];
monster[2] = [];
//biome
//-1 - guild
//training dummy
var d = new Date();
var date = d.getDate();
var day = d.getDay() + 1;
monster[-1][1] = new Object();
monster[-1][1].name = "TrainingDummy-"+day
monster[-1][1].nameTitle = "Training Dummy"
monster[-1][1].hp = 25;
monster[-1][1].mp = 2;
monster[-1][1].attack = 1;
monster[-1][1].defence = 1;

monster[-1][1].rank = 1

switch(day){
    case 1:
        monster[-1][1].elemDef = 0;
        monster[-1][1].slashDef = 0;
        monster[-1][1].stabDef = 1;
        monster[-1][1].bashDef = 1;        
        break;
    case 2:
        monster[-1][1].elemDef = 1;
        monster[-1][1].slashDef = 1;
        monster[-1][1].stabDef = 0;
        monster[-1][1].bashDef = 1;        
        break;  
    case 3:
        monster[-1][1].elemDef = 2;
        monster[-1][1].slashDef = 1;
        monster[-1][1].stabDef = 1;
        monster[-1][1].bashDef = 0;        
        break;
    case 4:
        monster[-1][1].elemDef = 0;
        monster[-1][1].slashDef = 1;
        monster[-1][1].stabDef = 0;
        monster[-1][1].bashDef = 1;        
        break;        
    case 5:
        monster[-1][1].elemDef = 0;
        monster[-1][1].slashDef = 1;
        monster[-1][1].stabDef = 1;
        monster[-1][1].bashDef = 0;        
        break;  
    case 6:
        monster[-1][1].elemDef = 1;
        monster[-1][1].slashDef = 0;
        monster[-1][1].stabDef = 1;
        monster[-1][1].bashDef = 1;        
        break;
    case 7:
        monster[-1][1].elemDef = 2;
        monster[-1][1].slashDef = 1;
        monster[-1][1].stabDef = 0;
        monster[-1][1].bashDef = 1;        
        break;                   
}


monster[-1][1].dex = 3;
monster[-1][1].dodge = 0;
monster[-1][1].intel = 1;
monster[-1][1].speed = 6;
monster[-1][1].attackPattern = "10"
monster[-1][1].skill = [];
monster[-1][1].skill[1] = monSkill[1]
monster[-1][1].skill[2] = monSkill[2]

//0 - grassland
//wocco
monster[0][1] = new Object();
monster[0][1].name = "wocco"
monster[0][1].nameTitle = "wocco"
monster[0][1].hp = 25;
monster[0][1].mp = 2;
monster[0][1].attack = 1;
monster[0][1].defence = 1;

monster[0][1].rank = 1

monster[0][1].elemDef = 0;
monster[0][1].slashDef = 0;
monster[0][1].stabDef = 10;
monster[0][1].bashDef = 0;

monster[0][1].dex = 3;
monster[0][1].dodge = 0;
monster[0][1].intel = 1;
monster[0][1].speed = 6;
monster[0][1].attackPattern = "10"
monster[0][1].skill = [];
monster[0][1].skill[1] = monSkill[1]
monster[0][1].skill[2] = monSkill[2]

//nivreh
monster[0][2] = new Object();
monster[0][2].name = "nivreh"
monster[0][2].nameTitle = "nivreh"
monster[0][2].hp = 35;
monster[0][2].mp = 2;
monster[0][2].attack = 1;
monster[0][2].defence = 1;

monster[0][2].rank = 1

monster[0][2].elemDef = 0;
monster[0][2].slashDef = 10;
monster[0][2].stabDef = 25;
monster[0][2].bashDef = 0;

monster[0][2].dex = 3;
monster[0][2].dodge = 0;
monster[0][2].intel = 1;
monster[0][2].speed = 6;
monster[0][2].attackPattern = "10"
monster[0][2].skill = [];
monster[0][2].skill[1] = monSkill[1]

//nioleo
monster[0][3] = new Object();
monster[0][3].name = "nioleo"
monster[0][3].nameTitle = "nioleo"
monster[0][3].hp = 45;
monster[0][3].mp = 2;
monster[0][3].attack = 1;
monster[0][3].defence = 1;

monster[0][3].rank = 2

monster[0][3].elemDef = 0;
monster[0][3].slashDef = 25;
monster[0][3].stabDef = 0;
monster[0][3].bashDef = 0;

monster[0][3].dex = 3;
monster[0][3].dodge = 0;
monster[0][3].intel = 1;
monster[0][3].speed = 6;
monster[0][3].attackPattern = "10"
monster[0][3].skill = [];
monster[0][3].skill[1] = monSkill[1]
monster[0][3].skill[2] = monSkill[2]

//urania drake
monster[0][4] = new Object();
monster[0][4].name = "uraniadrake"
monster[0][4].nameTitle = "urania drake"
monster[0][4].hp = 40;
monster[0][4].mp = 2;
monster[0][4].attack = 1;
monster[0][4].defence = 1;

monster[0][4].rank = 3

monster[0][4].elemDef = 0;
monster[0][4].slashDef = 50;
monster[0][4].stabDef = 50;
monster[0][4].bashDef = 0;

monster[0][4].dex = 3;
monster[0][4].dodge = 0;
monster[0][4].intel = 1;
monster[0][4].speed = 6;
monster[0][4].attackPattern = "10"
monster[0][4].skill = [];
monster[0][4].skill[1] = monSkill[1]
monster[0][4].skill[2] = monSkill[3]

//Patun, the Nightbringer
monster[0][99] = new Object();
monster[0][99].name = "patun"
monster[0][99].nameTitle = "Patun, Nightbringer"
monster[0][99].hp = 999;
monster[0][99].mp = 2;
monster[0][99].attack = 1;
monster[0][99].defence = 1;

monster[0][99].rank = 4

monster[0][99].elemDef = 0;
monster[0][99].slashDef = 70;
monster[0][99].stabDef = 30;
monster[0][99].bashDef = 10;

monster[0][99].dex = 3;
monster[0][99].dodge = 0;
monster[0][99].intel = 1;
monster[0][99].speed = 6;
monster[0][99].attackPattern = "10"
monster[0][99].skill = [];
monster[0][99].skill[1] = monSkill[1]
monster[0][99].skill[2] = monSkill[2]
monster[0][99].skill[3] = monSkill[3]



//1 - cave
//maddock
monster[1][1] = new Object();
monster[1][1].name = "maddock"
monster[1][1].nameTitle = "maddock"
monster[1][1].hp = 25;
monster[1][1].mp = 2;
monster[1][1].attack = 1;
monster[1][1].defence = 1;

monster[1][1].rank = 1

monster[1][1].elemDef = 1;
monster[1][1].slashDef = 0;
monster[1][1].stabDef = 0;
monster[1][1].bashDef = 10;

monster[1][1].dex = 3;
monster[1][1].dodge = 0;
monster[1][1].intel = 1;
monster[1][1].speed = 6;
monster[1][1].attackPattern = "120"
monster[1][1].skill = [];
monster[1][1].skill[1] =monSkill[1]
monster[1][1].skill[2] =monSkill[4]

//blind stone eater
monster[1][2] = new Object();
monster[1][2].name = "blindstoneeater"
monster[1][2].nameTitle = "blind stone eater"
monster[1][2].hp = 40;
monster[1][2].mp = 2;
monster[1][2].attack = 1;
monster[1][2].defence = 1;

monster[1][2].rank = 1

monster[1][2].elemDef = 1;
monster[1][2].slashDef = 20;
monster[1][2].stabDef = 0;
monster[1][2].bashDef = 10;

monster[1][2].dex = 3;
monster[1][2].dodge = 0;
monster[1][2].intel = 1;
monster[1][2].speed = 6;
monster[1][2].attackPattern = "10"
monster[1][2].skill = [];
monster[1][2].skill[1] =monSkill[1]
monster[1][2].skill[2] =monSkill[2]

//dracomyxin
monster[1][3] = new Object();
monster[1][3].name = "dracomyxin"
monster[1][3].nameTitle = "dracomyxin"
monster[1][3].hp = 40;
monster[1][3].mp = 2;
monster[1][3].attack = 1;
monster[1][3].defence = 1;

monster[1][3].rank = 2

monster[1][3].elemDef = 1;
monster[1][3].slashDef = 10;
monster[1][3].stabDef = 0;
monster[1][3].bashDef = 20;

monster[1][3].dex = 3;
monster[1][3].dodge = 0;
monster[1][3].intel = 1;
monster[1][3].speed = 6;
monster[1][3].attackPattern = "10"
monster[1][3].skill = [];
monster[1][3].skill[1] =monSkill[1]
monster[1][3].skill[2] =monSkill[3]

//weeping lacuna
monster[1][4] = new Object();
monster[1][4].name = "weepinglacuna"
monster[1][4].nameTitle = "weeping lacuna"
monster[1][4].hp = 60;
monster[1][4].mp = 2;
monster[1][4].attack = 1;
monster[1][4].defence = 1;

monster[1][4].rank = 3

monster[1][4].elemDef = 1;
monster[1][4].slashDef = 40;
monster[1][4].stabDef = 0;
monster[1][4].bashDef = 40;

monster[1][4].dex = 3;
monster[1][4].dodge = 0;
monster[1][4].intel = 1;
monster[1][4].speed = 6;
monster[1][4].attackPattern = "10"
monster[1][4].skill = [];
monster[1][4].skill[1] =monSkill[1]
monster[1][4].skill[2] =monSkill[4]

//Yssun, Secret-Eater
monster[1][99] = new Object();
monster[1][99].name = "yssun"
monster[1][99].nameTitle = "Yssun, Secret-Eater"
monster[1][99].hp = 999;
monster[1][99].mp = 2;
monster[1][99].attack = 1;
monster[1][99].defence = 1;

monster[1][99].rank = 4

monster[1][99].elemDef = 1;
monster[1][99].slashDef = 100;
monster[1][99].stabDef = 10;
monster[1][99].bashDef = 40;

monster[1][99].dex = 3;
monster[1][99].dodge = 0;
monster[1][99].intel = 1;
monster[1][99].speed = 6;
monster[1][99].attackPattern = "10"
monster[1][99].skill = [];
monster[1][99].skill[1] = monSkill[1]
monster[1][99].skill[2] = monSkill[4]

//2 - mountain
//noot
monster[2][1] = new Object();
monster[2][1].name = "noot"
monster[2][1].nameTitle = "noot"
monster[2][1].hp = 20;
monster[2][1].mp = 2;
monster[2][1].attack = 1;
monster[2][1].defence = 1;

monster[2][1].rank = 1

monster[2][1].elemDef = 2;
monster[2][1].slashDef = 10;
monster[2][1].stabDef = 15;
monster[2][1].bashDef = 0;

monster[2][1].dex = 3;
monster[2][1].dodge = 0;
monster[2][1].intel = 1;
monster[2][1].speed = 6;
monster[2][1].attackPattern = "10"
monster[2][1].skill = [];
monster[2][1].skill[1] =monSkill[1]


//alpine chupa
monster[2][2] = new Object();
monster[2][2].name = "alpinechupa"
monster[2][2].nameTitle = "alpine chupa"
monster[2][2].hp = 30;
monster[2][2].mp = 2;
monster[2][2].attack = 1;
monster[2][2].defence = 1;

monster[2][2].rank = 1

monster[2][2].elemDef = 2;
monster[2][2].slashDef = 0;
monster[2][2].stabDef = 20;
monster[2][2].bashDef = 20;

monster[2][2].dex = 3;
monster[2][2].dodge = 0;
monster[2][2].intel = 1;
monster[2][2].speed = 6;
monster[2][2].attackPattern = "10"
monster[2][2].skill = [];
monster[2][2].skill[1] =monSkill[1]
monster[2][2].skill[2] =monSkill[2]

//royal keet keet
monster[2][3] = new Object();
monster[2][3].name = "royalkeetkeet"
monster[2][3].nameTitle = "royal keet-keet"
monster[2][3].hp = 25;
monster[2][3].mp = 2;
monster[2][3].attack = 1;
monster[2][3].defence = 1;

monster[2][3].rank = 2

monster[2][3].elemDef = 2;
monster[2][3].slashDef = 0;
monster[2][3].stabDef = 20;
monster[2][3].bashDef = 25;

monster[2][3].dex = 3;
monster[2][3].dodge = 0;
monster[2][3].intel = 1;
monster[2][3].speed = 6;
monster[2][3].attackPattern = "10"
monster[2][3].skill = [];
monster[2][3].skill[1] =monSkill[1]
monster[2][3].skill[2] =monSkill[2]

//alexandross rex
monster[2][4] = new Object();
monster[2][4].name = "alexandrossrex"
monster[2][4].nameTitle = "alexandross rex"
monster[2][4].hp = 90;
monster[2][4].mp = 2;
monster[2][4].attack = 1;
monster[2][4].defence = 1;

monster[2][4].rank = 3

monster[2][4].elemDef = 2;
monster[2][4].slashDef = 0;
monster[2][4].stabDef = 25;
monster[2][4].bashDef = 25;

monster[2][4].dex = 3;
monster[2][4].dodge = 0;
monster[2][4].intel = 1;
monster[2][4].speed = 6;
monster[2][4].attackPattern = "10"
monster[2][4].skill = [];
monster[2][4].skill[1] =monSkill[1]
monster[2][4].skill[2] =monSkill[5]

//Stoor, Regal Dawn
monster[2][99] = new Object();
monster[2][99].name = "stoor"
monster[2][99].nameTitle = "Stoor, Regal Dawn"
monster[2][99].hp = 999;
monster[2][99].mp = 2;
monster[2][99].attack = 1;
monster[2][99].defence = 1;

monster[2][99].rank = 4

monster[2][99].elemDef = 2;
monster[2][99].slashDef = 10;
monster[2][99].stabDef = 20;
monster[2][99].bashDef = 20;

monster[2][99].dex = 3;
monster[2][99].dodge = 0;
monster[2][99].intel = 1;
monster[2][99].speed = 6;
monster[2][99].attackPattern = "10"
monster[2][99].skill = [];
monster[2][99].skill[1] = monSkill[1]
monster[2][99].skill[2] = monSkill[2]
monster[2][99].skill[3] = monSkill[5]
