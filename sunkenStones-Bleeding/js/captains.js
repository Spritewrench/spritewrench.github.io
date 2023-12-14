const captain = []

captain[1] = new Object();
captain[1].ult_text = "INCREASE THE POWER OF ALL STEEL-TYPE CREW BY +1"
captain[1].cap_healthValue = 15; 
captain[1].deploy_poolCurrent = 3;
captain[1].deploy_poolMax = captain[1].deploy_poolCurrent                
captain[1].cap_ultCost = 1;

captain[2] = new Object();
captain[2].ult_text = "APPLY SMOKING TO ALL ENEMIES. LOSE 1 AMMO"
captain[2].cap_healthValue = 5; 
captain[2].deploy_poolCurrent = 5;
captain[2].deploy_poolMax = captain[2].deploy_poolCurrent          
captain[2].cap_ultCost = 1;
captain[2].unlockValue = 35;
captain[2].unlockText = "DEFEAT "+captain[2].unlockValue+" SEA SERPENTS TO UNLOCK"

captain[3] = new Object();
captain[3].ult_text = "APPLY SUBMERGED TO ALL ENEMIES. LOSE 1 HEALTH"
captain[3].cap_healthValue = 10; 
captain[3].deploy_poolCurrent = 7;
captain[3].deploy_poolMax = captain[3].deploy_poolCurrent                
captain[3].cap_ultCost = 3;
captain[3].unlockValue = 35;
captain[3].unlockText = "DEFEAT "+captain[3].unlockValue+" GHOSTS TO UNLOCK"
