var title = [];
title[1] = new Object();
title[1].name = "HUNTER";
title[1].description = "You are a the newest member of your clan's hunting tradition";
title[1].effect = "~"
title[1].unlock = "~";

title[2] = new Object();
title[2].name = "TRACKER";
title[2].description = "You know the grasslands like the back of your hand";
title[2].effect = "You start each hunt with a full ULT meter when in the Grasslands";
title[2].unlock = "Not Available"//"Reach Friendship Level 20 with Neeka";

title[3] = new Object();
title[3].name = "EXPLORER";
title[3].description = "You know the caverns like the back of your hand";
title[3].effect = "You start each hunt with a full ULT meter when in the Caves";
title[3].unlock = "Not Available"//"Reach Friendship Level 20 with Roz";

title[4] = new Object();
title[4].name = "HIKER";
title[4].description = "You know the mountains like the back of your hand";
title[4].effect = "You start each hunt with a full ULT meter when in the Mountains";
title[4].unlock = "Not Available"//"Reach Friendship Level 20 with Rayla";

title[5] = new Object();
title[5].name = "SLAYER";
title[5].description = "You managed to defeat a monster with one attack!";
title[5].effect = "Much Skill";
title[5].unlock = "Not Available"//"Use a SLASH type ULTIMATE over 25 times";



//--------------------------------------
var archive= [];
archive[1] = new Object();
archive[1].title = "Guild Master";
archive[1].name = "";
archive[1].description = "";

archive[2] = new Object();
archive[2].title = "Guild Master";
archive[2].name = "Jean, the Collector";
archive[2].description = "Current Master for the Expedition Guild.\nHoarder of knick-knacks, trinkets, baubles and curios. People say that she started the expedition to fuel her pack-rat tendencies."
archive[2].char = "guildWarden"

archive[3] = new Object();
archive[3].title = "Guild Treasurer";
archive[3].name = "Lynnenne, The Shopkeep";
archive[3].description = "The Guild Leader's younger sister and Chief Financial Officer of the Expedition. Where Jean saw an excuse to collect shiny things, Lynnenne saw an opportunity to collect coin."
archive[3].char = "guildShopkeep"

archive[4] = new Object();
archive[4].title = "Grassland Warden";
archive[4].name = "Neeka, the Sure";
archive[4].description = "With her father's trusty bow, she seeks to protect the grasslands. The only thing more accurate than her aim, is her judgement of character."
archive[4].char = "warden0"

archive[5] = new Object();
archive[5].title = "Cave Warden";
archive[5].name = "Roz, the Steady";
archive[5].description = "After Beaux, abandoned his responsibility to start the Deep-Walkers, Roz took over the family tradition of tending to the flora and fauna of the caverns. He has a particular fondness for mushrooms."
archive[5].char = "warden1"

archive[6] = new Object();
archive[6].title = "Mountain Warden";
archive[6].name = "Rayla, the Indifferent";
archive[6].description = "As her mother's only child, Rayla has long since accepted that it's her responsibility to mind the mountains. Unfortunately, she REALLY couldn't care less..."
archive[6].char = "warden2"

archive[7] = new Object();
archive[7].title = "The Sheep Wyvern";
archive[7].name = "Wocco";
archive[7].description = "Commonly found grazing is the grasslands with one of their flock watching out for predators. At the slightest sound, they will take flight. Unfortunately, they cannot fly very far."
archive[7].id = monster[0][1]
archive[7].char = monster[0][1].name
archive[7].location = "grasslands"

archive[8] = new Object();
archive[8].title = "The Raven Wyvern";
archive[8].name = "Nivreh";
archive[8].description = "A mischievous beast with an unending desire to collect shiny things. They have the ability to mimic sounds they hear.  Nioleo will often trick them into copying their call so they can herd Wocco for easy hunting."
archive[8].id = monster[0][2]
archive[8].char = monster[0][2].name
archive[8].location = "grasslands"

archive[9] = new Object();
archive[9].title = "The Mole-Lion Wyrm";
archive[9].name = "Nioleo";
archive[9].description = "Primarily solitary hunters, they've have been noted to coordinate with Nivreh to corner unsuspecting Flocks of Wocco. They use their strong forelimbs to dig tunnels at a speed of up to 80 km/h!"
archive[9].id = monster[0][3]
archive[9].char = monster[0][3].name
archive[9].location = "grasslands"

archive[10] = new Object();
archive[10].title = "The Moth Wyvern";
archive[10].name = "Urania Drake";
archive[10].description = "This rare beast is exclusive to lowland rainforests, this large beast surprisingly subsists completely on flower nectar. Their shocking colour patterns serve to warn others of their toxic nature."
archive[10].id = monster[0][4]
archive[10].char = monster[0][4].name
archive[10].location = "grasslands"

archive[11] = new Object();
archive[11].title = "The Rot Salamander";
archive[11].name = "Maddock Wyrm";
archive[11].description = "Pack hunters that scavenge the dark twists and turns of caves systems. To the uninitiated the complicated sequence of squeaks and clicks they use to communicate sound like Dub-Step/EDM."
archive[11].id = monster[1][1]
archive[11].char = monster[1][1].name
archive[11].location = "caves"

archive[12] = new Object();
archive[12].title = "The Rock Pup Drake";
archive[12].name = "Blind Stone Eater";
archive[12].description = "Completely blind they rely on their prodigious sense of smell to navigate the dark caverns in which they dwell. They feast on whatever they stumble across."
archive[12].id = monster[1][2]
archive[12].char = monster[1][2].name
archive[12].location = "caves"

archive[13] = new Object();
archive[13].title = "The Dragon Slime";
archive[13].name = "Dracomyxin";
archive[13].description = "This slime preys on large dragons. Once they've infected their host they slowly dissolve the creature's flesh, replacing its musculature with a jelly-like substance."
archive[13].id = monster[1][3]
archive[13].char = monster[1][3].name
archive[13].location = "caves"

archive[14] = new Object();
archive[14].title = "The Crying Lindwurm";
archive[14].name = "Weeping Lacuna";
archive[14].description = "Hunters have observed the beast 'washing' their food in puddles that gather on the cave floor. In actuality, this behaviour is the Lacuna drowning its prey before consumption"
archive[14].id = monster[1][4]
archive[14].char = monster[1][4].name
archive[14].location = "caves"

archive[15] = new Object();
archive[15].title = "The Microwave Drake";
archive[15].name = "Noot Noot";
archive[15].description = "Hunting in packs of 20 or more, these creatures smother their target and use their combined body heat to roast their prey."
archive[15].id = monster[2][1]
archive[15].char = monster[2][1].name
archive[15].location = "mountains"

archive[16] = new Object();
archive[16].title = "The Goat Wyvern";
archive[16].name = "Alpine Chupa";
archive[16].description = "These beasts scale the formidable mountain range to search for Keet-Keet eggs, which represents their sole source of protein.   They round out their diet by scavenging for scraps left behind by larger predators."
archive[16].id = monster[2][2]
archive[16].char = monster[2][2].name
archive[16].location = "mountains"

archive[17] = new Object();
archive[17].title = "The Parrot Wyvern";
archive[17].name = "Royal Keet-Keet";
archive[17].description = "Commonly found roosting in mountain ranges. They will travel large distances searching for food that matches a very particular color."
archive[17].id = monster[2][3]
archive[17].char = monster[2][3].name
archive[17].location = "mountains"

archive[18] = new Object();
archive[18].title = "The Old-Man Wyvern";
archive[18].name = "Alexandross Rex";
archive[18].description = "Their bony crests completely block their eyesight, as such they've have adapted the ability to sense vibrations with the protrusions on their face."
archive[18].id = monster[2][4]
archive[18].char = monster[2][4].name
archive[18].location = "mountains"

archive[19] = new Object();
archive[19].title = "Legend of Night";
archive[19].name = "Patun, The Night Bringer";
archive[19].description = "Hunters have spoken of a moment when the entirety of the grasslands grow still and silent, as the flight of the 'Night Bringer' paints the sky with starlight."
archive[19].id = monster[0][99]
archive[19].char = monster[0][99].name
archive[19].location = "grasslands"

archive[20] = new Object();
archive[20].title = "Legend of Twilight";
archive[20].name = "Yssun, Secret-Eater";
archive[20].description = "At the heart of this winding under-dark slumbers Yssun. Hunters are warned that should they ever find themselves lost underground, they should whisper a secret to the empty stillness."
archive[20].id = monster[1][99]
archive[20].char = monster[1][99].name
archive[20].location = "caves"

archive[21] = new Object();
archive[21].title = "Legend of Dawn";
archive[21].name = "Stoor, the Regal Dawn";
archive[21].description = "It is said he bore witness to the first rising of the Sun and will endure until the final sunset. Hunters who've borne witness to his majesty are said to be consumed wholly by the need for conquest."
archive[21].id = monster[2][99]
archive[21].char = monster[2][99].name
archive[21].location = "mountains"