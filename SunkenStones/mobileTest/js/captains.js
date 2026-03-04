const captain = []

captain[1] = new Object();
captain[1].cap_name = "CAPTAIN ROSE"
captain[1].ult_name = "CLEAVE TO THE HILT"
captain[1].ult_text = "INCREASE THE POWER OF ALL STEEL CREW BY +1"
captain[1].cap_healthValue = 15; 
captain[1].deploy_poolCurrent = 5;
captain[1].deploy_poolMax = captain[1].deploy_poolCurrent                
captain[1].cap_ultCost = 1;


captain[2] = new Object();
captain[2].cap_name = "CAPTAIN TYSON"
captain[2].ult_name = "MARK THE TARGETS"
captain[2].ult_text = "APPLY SMOKING TO ALL CREEPS"
captain[2].cap_healthValue = 10; 
captain[2].deploy_poolCurrent = 5;
captain[2].deploy_poolMax = captain[2].deploy_poolCurrent          
captain[2].cap_ultCost = 2;
captain[2].unlockText = "CLEAR THE CERULEAN TIDES WITH CAPTAIN ROSE"//"DEFEAT "+captain[2].unlockValue+" "+monster[captain[2].unlockTarget].name+" TO UNLOCK"


captain[3] = new Object();
captain[3].cap_name = "CAPTAIN CRICKETT"
captain[3].ult_name = "RISING TIDE"
captain[3].ult_text = "INVERT SUBMERGED STATUS ON ALL CREEPS.-2 HEALTH (BOSSES ARE IMMUNE)"
captain[3].cap_healthValue = 20; 
captain[3].deploy_poolCurrent = 6;
captain[3].deploy_poolMax = captain[3].deploy_poolCurrent                
captain[3].cap_ultCost = 0;
captain[3].unlockText = "CLEAR THE CERULEAN TIDES WITH CAPTAIN TYSON"//"DEFEAT "+captain[3].unlockValue+" "+monster[captain[3].unlockTarget].name+" TO UNLOCK"


captain[4] = new Object();
captain[4].cap_name = "CAPTAIN CAESAR"
captain[4].ult_name = "RAMPAGE"
captain[4].ult_text = "ALL STEEL CREW GET AN EXTRA ATTACK"
captain[4].cap_healthValue = 5; 
captain[4].deploy_poolCurrent = 6;
captain[4].deploy_poolMax = captain[4].deploy_poolCurrent                
captain[4].cap_ultCost = 3;
captain[4].unlockText = "CLEAR THE AMETHYST DEPTHS WITH CAPTAIN CRICKETT"

captain[5] = new Object();
captain[5].cap_name = "CAPTAIN TSAI"
captain[5].ult_name = "RETURN FIRE"
captain[5].ult_text = "APPLY SMOKING TO EXHAUSTED CREEPS, THEN DEAL 2 DAMAGE"
captain[5].cap_healthValue = 20; 
captain[5].deploy_poolCurrent = 5;
captain[5].deploy_poolMax = captain[5].deploy_poolCurrent                
captain[5].cap_ultCost = 2;
captain[5].unlockText = "CLEAR THE AMETHYST DEPTHS WITH CAPTAIN CAESAR"

captain[6] = new Object();
captain[6].cap_name = "CAPTAIN FINN"
captain[6].ult_name = "RIPTIDE"
captain[6].ult_text = "KNOCK ALL CREEPS DOWN ONE SPACE (IF THEY ARE ABLE)"
captain[6].cap_healthValue = 15; 
captain[6].deploy_poolCurrent = 5;
captain[6].deploy_poolMax = captain[6].deploy_poolCurrent                
captain[6].cap_ultCost = 1;
captain[6].unlockText = "CLEAR THE AMETHYST DEPTHS WITH CAPTAIN TSAI"
