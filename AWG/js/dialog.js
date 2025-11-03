var dialog = [];

function loadScript(){
    console.log("Scripts loaded ...")
    dialog[0] = "yara(happy)-A Winged Rabbit? ..."
    dialog[1] = "yara(happy)-And a talking Boabab? ..."
    dialog[2] = "yara(happy)-I feel like I'm being sent on a fool's errand."
    dialog[3] = "yara(happy)-But what else can I do?"
    dialog[4] = "yara(happy)-Before I head out on this 'Quest'\nI need to make sure I have my tools...-END"
    dialog[5] = "yara(happy)-Now's not the time to sit, Yara.\n You need to get ready to head out...-END"
    dialog[6] = "yara(happy)-I remember when this plant was just a small sprout.\n Look at how it's grown...-END"
    dialog[7] = "yara(happy)-The village has changed so much...-END"    
    dialog[8] = "yara(happy)-All right. Let's go, Yara..."
    dialog[9] = "yara(happy)-You can do this-NEXTSCENE"

    dialog[10] = "yara(happy)-It's been a few short years ..."
    dialog[11] = "yara(happy)-And now these streets are so different than I remember"
    dialog[12] = "yara(happy)-Cold dark towers grasping for the sky ..."
    dialog[13] = "yara(happy)-Wires choking everything ..."
    dialog[14] = "yara(happy)-Strange 'birds' everywhere ..."
    dialog[15] = "yara(happy)-Wait ... is that a feather?-END"
    dialog[16] = "yara(happy)-Pretty"
    dialog[17] = "yara(happy)-I see more in the distance"
    dialog[18] = "yara(happy)-Whatever left these seems to have been heading to the swamp?-NEXTSCENE"

    dialog[19] = "yara(happy)-The great old Boabab Tree..."
    dialog[20] = "yara(happy)-Is that the one they spoke of?"
    dialog[21] = "yara(happy)-I don't remember it ever talking though ..."
    dialog[22] = "yara(happy)-Maybe I need to reach it first?-NEXTSCENE"

    dialog[23] = "yara(happy)-This swamp is so dense ..."
    dialog[24] = "yara(happy)-And those creepy birds are also everywhere..."
    dialog[25] = "yara(happy)-Maybe if I use my knife I can cut my way through?-END"
    dialog[26] = "yara(happy)-No matter how much I cut the vines keep growing back"
    dialog[27] = "???(happy)-LEAVE ME ALONE!!!!!!!"
    dialog[28] = "yara(happy)-Sounds like someone needs help -NEXTSCENE"


    dialog[29] = "rabbit(happy)-LEAVE ME ALONE YOU STUPID SURVEILANCE BIRDS!"
    dialog[30] = "rabbit(happy)-STOP WATCHING ME ALL THE TIME!!!"
    dialog[31] = "rabbit(happy)-WHAT DO YOU WANT?!?!"
    dialog[32] = "yara(happy)-Wait ... is that a flying rabbit?"
    dialog[33] = "rabbit(happy)-YOU!\nThank goodness you're here...\nCan you help me?"
    dialog[34] = "yara(happy)-I should be able to use my knife to scare them away-END"
    dialog[35] = "yara(happy)-Away with you Vile Bird!-END"
    dialog[36] = "rabbit(happy)-THANK YOU! THANK YOU! THANK YOU!"
    dialog[37] = "yara(happy)-No worries...\nI was sent to find you..."
    dialog[38] = "rabbit(happy)-Yes!\nI'm to be your guide.-NEXTSCENE"

    dialog[39] = "yara(happy)-Okay we're back on the path to the Boabab...-END"
    dialog[40] = "yara(happy)-SIGH\nNo matter how much I cut the vines keep growing back"
    dialog[41] = "rabbit(happy)-That's because the swamp is ALIVE!"
    dialog[42] = "yara(happy)-I know ... these are living plants after all..."
    dialog[43] = "rabbit(happy)-No.\nI mean alive in the sense that it has a spirit"
    dialog[44] = "rabbit(happy)-One that demands respect\nOne that responds to your aggressive energy"
    dialog[45] = "yara(happy)-Okay. You've lost me ...-SETFLAG-rabbitInstruct-1"
    dialog[46] = "rabbit(happy)-Use your hand, Yara.\nPush the vines aside with your HANDS.-END"

    var rabbitInstruct = parseInt(localStorage.getItem('rabbitInstruct'))
    if(rabbitInstruct == 1){
        dialog[47] = "yara(happy)-Well I'll be ...\nYou were right, Rabbit!"
        dialog[48] = "rabbit(happy)-Of course!\nI know what I'm talking about-NEXTSCENE"
    }
    else{
        dialog[47] = "yara(happy)-SIGH\nTime to use my trusty Knife ... again-END"
    }

   dialog[49] = "rabbit(happy)-Before we meet the Boabab we need to find an appropriate gift."
   dialog[50] = "yara(happy)-A gift?"
   dialog[51] = "rabbit(happy)-Yes. The Great Boabab has been ... differnt lately."
   dialog[52] = "rabbit(happy)-Maybe a gift can remind itself of it's duties"
   dialog[53] = "spinetail(happy)-hun...gry....so ...."
   dialog[54] = "yara(happy)-Wait. Did you hear that?"
   dialog[55] = "rabbit(happy)-I think it's that spinetail in front of those Lumina plants"
   dialog[56] = "rabbit(happy)-Actually a Lumina might make the perfect gift"
   dialog[57] = "spinetail(happy)-so ... very ... hun...gry....so ...."
   dialog[58] = "yara(happy)-Well I can't reach it without disturbing Mr. Spinetail here."
   dialog[59] = "spinetail(happy)-I'll move if you help me..."
   dialog[60] = "spinetail(happy)-Collect those bugs and feed me ..."
   dialog[61] = "spinetail(happy)-I would do it my self but I'm so .... weak"
   dialog[62] = "yara(happy)-Okay. Let's feed Mr. Spinetail and harvest a Lumina Plant"
   dialog[63] = "rabbit(happy)-Sounds like a plan-END"
   dialog[64] = "yara(happy)-Got a creepy crawly-END"
   dialog[65] = "spinetail(happy)-So weak ... So hungry-END"
   dialog[66] = "spinetail(happy)-Yummy! I feel my strength returning-END"
   dialog[67] = "spinetail(happy)-Thanks for the Grub Bub!\nSee ya!-END"
   dialog[68] = "spinetail(happy)-Put that away!\nDon't threaten me!-END"
   dialog[69] = "rabbit(happy)-Remember Yara.\m Use your hands to move the plants"
   dialog[70] = "yara(happy)-Right-END"
   dialog[71] = "rabbit(happy)-Now you can gently harvest the Lumina plant, Yara"
   dialog[72] = "yara(happy)-Okay. Here we go...-END"
   dialog[73] = "yara(happy)-Got it!"
   dialog[74] = "rabbit(happy)-Excellent!\nNow let's continue making our way to the Great Boabab-NEXTSCENE"
    
   dialog[75] = "yara(happy)-Wow. The Boabad truly is massive ..."
   dialog[76] = "yara(happy)-But look at all the wires ...\nI didn't know they reached this far into the swamp?"
   dialog[77] = "boabab(happy!)-.... Who approaches? ...." 
   dialog[78] = "yara(happy)-Oh it does talk!"
   dialog[79] = "boabab(happy!)-... Leave ... Me ...."
   dialog[80] = "yara(happy)-But we need your help. I was told you could help us remember."
   dialog[81] = "rabbit(happy)-I was worried about this ...\nThe Great Boabab has forgotten itself"
   dialog[82] = "rabbit(happy)-It has forgotten that it is growth manifest"
   dialog[83] = "rabbit(happy)-Yara! You must present your gift\nRemind the Great Boabab what it stands for!-END"
   dialog[84] = "boabab(happy!)-.... You dare to threaten ME? ...."
   dialog[85] = "rabbit(happy)-No Yara!\nThe  gift! The Lumina plant-END"
   dialog[86] = "boabab(happy!)-.... I REMEMBER...! ....-FLASH"
   dialog[87] = "boabab(happy!)-.... Thank...you ....-END"
   



}