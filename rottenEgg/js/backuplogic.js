if(topRowCount > 0 && topRowCount > 1 && totalEggCount %2 != 0 ){
    for(var k = 0; k <= 2; k++){
        if(this.egg[k].alpha == 1){
            this.egg[k].alpha = 0; 
            this.hiddenCount++
            k = 2;
        }
    }                               
}
else if(topRowCount > 0 && totalEggCount %2 == 0 ){
    var counter = 0;
    for(var k = 0; k <= 2; k++){
        if(this.egg[k].alpha == 1){
            this.egg[k].alpha = 0; 
            this.hiddenCount++
            counter++
            if(counter > 1){
                k = 2;
            }
        }
    }                               
}                        
else if(midRowCount < botRowCount && midRowCount > 1 && totalEggCount %2 == 0){
    var counter = 0;
    for(var k = 3; k <= 7; k++){
        if(this.egg[k].alpha == 1){
            this.egg[k].alpha = 0; 
            this.hiddenCount++
            counter++
            if(counter > 1){
                k = 7;
            }
        }
    }                               
}
else if(midRowCount < botRowCount && midRowCount > 1 && totalEggCount %2 != 0){
    var counter = 0;
    for(var k = 3; k <= 7; k++){
        if(this.egg[k].alpha == 1){
            this.egg[k].alpha = 0; 
            this.hiddenCount++
            counter++
            if(midRowCount == 2 && counter > 0){
                counter++  
            }
            if(counter > 0){
                k = 7;
            }
        }
    }                               
}                        
else if(botRowCount <= midRowCount && botRowCount > 1 && totalEggCount %2 == 0){
    var counter = 0;
    for(var k = 8; k <= 14; k++){
        if(this.egg[k].alpha == 1){
            this.egg[k].alpha = 0; 
            this.hiddenCount++
            counter++
            if(counter > 1){
                k = 14;
            }
        }
    }                               
}
else if(botRowCount <= midRowCount && botRowCount > 1 && totalEggCount %2 != 0){
    var counter = 0;
    for(var k = 8; k <= 14; k++){
        if(this.egg[k].alpha == 1){
            this.egg[k].alpha = 0; 
            this.hiddenCount++
            counter++
            if(botRowCount == 2 && counter > 0){
                counter++  
            }                                    
            if(counter > 0){
                k = 14;
            }
        }
    }                               
}
else if(botRowCount > midRowCount && botRowCount > 1 && totalEggCount %2 == 0){
    var counter = 0;
    for(var k = 8; k <= 14; k++){
        if(this.egg[k].alpha == 1){
            this.egg[k].alpha = 0; 
            this.hiddenCount++
            counter++
            if(counter > 1){
                k = 14;
            }
        }
    }                               
}
else if(botRowCount > midRowCount && botRowCount > 1 && totalEggCount %2 != 0){
    var counter = 0;
    for(var k = 8; k <= 14; k++){
        if(this.egg[k].alpha == 1){
            this.egg[k].alpha = 0; 
            this.hiddenCount++
            counter++
            if(botRowCount == 2 && counter > 0){
                counter++  
            }                                    
            if(counter > 0){
                k = 14;
            }
        }
    }   