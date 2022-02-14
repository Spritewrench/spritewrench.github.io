(function () {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function () {
		
			
		
            var x = (this.game.width / 2.25)
                , y = this.game.height / 3;
          
            this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }   
            this.stage = parseInt(localStorage.getItem("stage"));
            this.game.stage.backgroundColor = "#fff"//"#160c2c";
          
            //this.map1 = this.add.sprite(-this.game.width/2,-this.game.height/5+100, 'block1');
            this.location = [];
            var locationKeys = [1,2,3,4]
            //console.log(locationKeys )
            for (let i = locationKeys.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [locationKeys[i], locationKeys[j]] = [locationKeys[j], locationKeys[i]];
            }      
            //console.log(locationKeys )
            this.location[0] =  locationKeys[0]
            this.location[1] =  locationKeys[1]
            this.location[2] =  locationKeys[2]
            this.location[3] =  locationKeys[3]
            this.map1 = this.add.sprite(this.game.width/2-300,-this.game.height/2-50, 'block'+this.location[0]);//this.add.sprite(-this.game.width/2,-this.game.height/5+100, 'block'+this.location[0]);
            switch(this.location[0]){
              case 1:
                
                this.map1.width = this.game.width;
                this.map1.height = this.game.height;        
                this.map1.alpha = 1;    
                
                this.hiddenAnim1_1 = this.add.sprite(this.map1.x+this.map1.width/2+21, this.map1.y+218, 'Block-'+this.location[0]+'_1A');
                this.hiddenAnim1_1.width = 57;
                this.hiddenAnim1_1.height = 63;    
                this.hiddenAnim1_1.inputEnabled = true;
                this.hiddenAnim1_1.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_1 = this.add.sprite(this.map1.x+this.map1.width/2+66, this.map1.y+this.map1.height/2-10, 'Block-'+this.location[0]+'_2A');
                this.hiddenAnim2_1.width = 67;
                this.hiddenAnim2_1.height = 89;    
                this.hiddenAnim2_1.inputEnabled = true;
                this.hiddenAnim2_1.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim3_1 = this.add.sprite(this.map1.x+this.map1.width/2-65, this.map1.y+this.map1.height/2+80, 'Block-'+this.location[0]+'_3A');
                this.hiddenAnim3_1.width = 93;
                this.hiddenAnim3_1.height = 94;    
                this.hiddenAnim3_1.inputEnabled = true;
                this.hiddenAnim3_1.events.onInputDown.add(this.playAnim, this)    

                this.hiddenAnim4_1 = this.add.sprite(this.map1.x+this.map1.width/2-145, this.map1.y+this.map1.height/2+227, 'Block-'+this.location[0]+'_4A');
                this.hiddenAnim4_1.width = 127;
                this.hiddenAnim4_1.height = 107;    
                this.hiddenAnim4_1.inputEnabled = true;
                this.hiddenAnim4_1.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_1 = this.add.sprite(this.map1.x+this.map1.width/2-308, this.map1.y+this.map1.height/2+50, 'Block-'+this.location[0]+'_5A');
                this.hiddenAnim5_1.width = 90;
                this.hiddenAnim5_1.height = 88;    
                this.hiddenAnim5_1.inputEnabled = true;
                this.hiddenAnim5_1.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_1 = this.add.sprite(this.map1.x+this.map1.width-75, this.map1.y+this.map1.height/2+135, 'Block-'+this.location[0]+'_6A');
                this.hiddenAnim6_1.width = 54;
                this.hiddenAnim6_1.height = 48;    
                this.hiddenAnim6_1.inputEnabled = true;
                this.hiddenAnim6_1.events.onInputDown.add(this.playAnim, this)            
                  
                break;
              case 2:
                //this.map1 = this.add.sprite(0,0 , 'block'+this.location[0]);
                this.map1.width = this.game.width;
                this.map1.height = this.game.height;        
                this.map1.alpha = 1;    
                
                this.hiddenAnim1_1 = this.add.sprite(this.map1.x+this.map1.width/2+70, this.map1.y+this.map1.height/2-3, 'Block-'+this.location[0]+'_1A');
                this.hiddenAnim1_1.width = 37;
                this.hiddenAnim1_1.height = 48;    
                this.hiddenAnim1_1.inputEnabled = true;
                this.hiddenAnim1_1.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_1 = this.add.sprite(this.map1.x+this.map1.width/2+204, this.map1.y+this.map1.height/2+70, 'Block-'+this.location[0]+'_2A');
                this.hiddenAnim2_1.width = 77;
                this.hiddenAnim2_1.height = 78;    
                this.hiddenAnim2_1.inputEnabled = true;
                this.hiddenAnim2_1.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim3_1 = this.add.sprite(this.map1.x+this.map1.width/2+120, this.map1.y+this.map1.height/2+165, 'Block-'+this.location[0]+'_3A');
                this.hiddenAnim3_1.width = 57;
                this.hiddenAnim3_1.height = 65;    
                this.hiddenAnim3_1.inputEnabled = true;
                this.hiddenAnim3_1.events.onInputDown.add(this.playAnim, this)    

                this.hiddenAnim4_1 = this.add.sprite(this.map1.x+this.map1.width/2-133, this.map1.y+this.map1.height/2+210, 'Block-'+this.location[0]+'_4A');
                this.hiddenAnim4_1.width = 120;
                this.hiddenAnim4_1.height = 117;    
                this.hiddenAnim4_1.inputEnabled = true;
                this.hiddenAnim4_1.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_1 = this.add.sprite(this.map1.x+this.map1.width/2-110, this.map1.y+this.map1.height/2+35, 'Block-'+this.location[0]+'_5A');
                this.hiddenAnim5_1.width = 57;
                this.hiddenAnim5_1.height = 71;    
                this.hiddenAnim5_1.inputEnabled = true;
                this.hiddenAnim5_1.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_1 = this.add.sprite(this.map1.x+this.map1.width/2-345, this.map1.y+this.map1.height/2+40, 'Block-'+this.location[0]+'_6A');
                this.hiddenAnim6_1.width = 67;
                this.hiddenAnim6_1.height = 60;    
                this.hiddenAnim6_1.inputEnabled = true;
                this.hiddenAnim6_1.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_1 = this.add.sprite(this.map1.x+this.map1.width/2-150, this.map1.y+this.map1.height/2+130, 'Block-'+this.location[0]+'_7A');
                this.hiddenAnim7_1.width = 79;
                this.hiddenAnim7_1.height = 72;    
                this.hiddenAnim7_1.inputEnabled = true;
                this.hiddenAnim7_1.events.onInputDown.add(this.playAnim, this)           

           
                break;             
              case 3:
                //this.map1 = this.add.sprite(0,0 , 'block'+this.location[0]);
                this.map1.width = this.game.width;
                this.map1.height = this.game.height;        
                this.map1.alpha = 1;    
                 
                
                this.hiddenAnim1_1 = this.add.sprite(this.map1.x+this.map1.width/2-35, this.map1.y+this.map1.height/2+55, 'Block-'+this.location[0]+'_1A');
                this.hiddenAnim1_1.width = 83;
                this.hiddenAnim1_1.height = 70;    
                this.hiddenAnim1_1.inputEnabled = true;
                this.hiddenAnim1_1.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_1 = this.add.sprite(this.map1.x+this.map1.width/2+110, this.map1.y+this.map1.height/2+205, 'Block-'+this.location[0]+'_2A');
                this.hiddenAnim2_1.width = 68;
                this.hiddenAnim2_1.height = 91;    
                this.hiddenAnim2_1.inputEnabled = true;
                this.hiddenAnim2_1.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim4_1 = this.add.sprite(this.map1.x+this.map1.width/2-152, this.map1.y+this.map1.height/2+220, 'Block-'+this.location[0]+'_4A');
                this.hiddenAnim4_1.width = 167;
                this.hiddenAnim4_1.height = 152;    
                this.hiddenAnim4_1.inputEnabled = true;
                this.hiddenAnim4_1.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_1 = this.add.sprite(this.map1.x+this.map1.width/2-95, this.map1.y+this.map1.height/2+155, 'Block-'+this.location[0]+'_5A');
                this.hiddenAnim5_1.width = 44;
                this.hiddenAnim5_1.height = 36;    
                this.hiddenAnim5_1.inputEnabled = true;
                this.hiddenAnim5_1.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_1 = this.add.sprite(this.map1.x+this.map1.width/2-225, this.map1.y+this.map1.height/2+180, 'Block-'+this.location[0]+'_6A');
                this.hiddenAnim6_1.width = 59;
                this.hiddenAnim6_1.height = 67;    
                this.hiddenAnim6_1.inputEnabled = true;
                this.hiddenAnim6_1.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_1 = this.add.sprite(this.map1.x+75, this.map1.y+this.map1.height/2+115, 'Block-'+this.location[0]+'_7A');
                this.hiddenAnim7_1.width = 35;
                this.hiddenAnim7_1.height = 48;    
                this.hiddenAnim7_1.inputEnabled = true;
                this.hiddenAnim7_1.events.onInputDown.add(this.playAnim, this)           

                this.hiddenAnim8_1 = this.add.sprite(this.map1.x+this.map1.width/2-10, this.map1.y+this.map1.height/2+30, 'Block-'+this.location[0]+'_8A');
                this.hiddenAnim8_1.width = 40;
                this.hiddenAnim8_1.height = 47;    
                this.hiddenAnim8_1.inputEnabled = true;
                this.hiddenAnim8_1.events.onInputDown.add(this.playAnim, this)                    

                this.hiddenAnim9_1 = this.add.sprite(this.map1.x+this.map1.width/2-183, this.map1.y+this.map1.height/2-76, 'Block-'+this.location[0]+'_9A');
                this.hiddenAnim9_1.width = 119;
                this.hiddenAnim9_1.height = 104;    
                this.hiddenAnim9_1.inputEnabled = true;
                this.hiddenAnim9_1.events.onInputDown.add(this.playAnim, this)           
                  
                break;   
                
              case 4:
                //this.map1 = this.add.sprite(0,0 , 'block'+this.location[0]);
                this.map1.width = this.game.width;
                this.map1.height = this.game.height;        
                this.map1.alpha = 1;    
                
                this.hiddenAnim1_1 = this.add.sprite(this.map1.x+this.map1.width/2+110, this.map1.y+this.map1.height/2+260, 'Block-'+this.location[0]+'_1A');
                this.hiddenAnim1_1.width = 46;
                this.hiddenAnim1_1.height = 45;    
                this.hiddenAnim1_1.inputEnabled = true;
                this.hiddenAnim1_1.events.onInputDown.add(this.playAnim, this)               

                this.hiddenAnim2_1 = this.add.sprite(this.map1.x+this.map1.width/2-4, this.map1.y+this.map1.height/2-50, 'Block-'+this.location[0]+'_2A');
                this.hiddenAnim2_1.width = 69;
                this.hiddenAnim2_1.height = 68;    
                this.hiddenAnim2_1.inputEnabled = true;
                this.hiddenAnim2_1.events.onInputDown.add(this.playAnim, this) 
                
                this.hiddenAnim3_1 = this.add.sprite(this.map1.x+this.map1.width/2-115, this.map1.y+this.map1.height/2-50, 'Block-'+this.location[0]+'_3A');
                this.hiddenAnim3_1.width = 63;
                this.hiddenAnim3_1.height = 63;    
                this.hiddenAnim3_1.inputEnabled = true;
                this.hiddenAnim3_1.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim4_1 = this.add.sprite(this.map1.x+this.map1.width/2-55, this.map1.y+this.map1.height/2-20, 'Block-'+this.location[0]+'_4A');
                this.hiddenAnim4_1.width = 63;
                this.hiddenAnim4_1.height = 63;    
                this.hiddenAnim4_1.inputEnabled = true;
                this.hiddenAnim4_1.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_1 = this.add.sprite(this.map1.x+this.map1.width/2+155, this.map1.y+this.map1.height/2-20, 'Block-'+this.location[0]+'_5A');
                this.hiddenAnim5_1.width = 105;
                this.hiddenAnim5_1.height = 99;    
                this.hiddenAnim5_1.inputEnabled = true;
                this.hiddenAnim5_1.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_1 = this.add.sprite(this.map1.x+this.map1.width/2+290, this.map1.y+this.map1.height/2+115, 'Block-'+this.location[0]+'_6A');
                this.hiddenAnim6_1.width = 71;
                this.hiddenAnim6_1.height = 94;    
                this.hiddenAnim6_1.inputEnabled = true;
                this.hiddenAnim6_1.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_1 = this.add.sprite(this.map1.x+this.map1.width/2+140, this.map1.y+this.map1.height/2+195, 'Block-'+this.location[0]+'_7A');
                this.hiddenAnim7_1.width = 114;
                this.hiddenAnim7_1.height = 108;    
                this.hiddenAnim7_1.inputEnabled = true;
                this.hiddenAnim7_1.events.onInputDown.add(this.playAnim, this)           

                this.hiddenAnim8_1 = this.add.sprite(this.map1.x+this.map1.width/2-55, this.map1.y+this.map1.height/2+70, 'Block-'+this.location[0]+'_8A');
                this.hiddenAnim8_1.width = 103;
                this.hiddenAnim8_1.height = 110;    
                this.hiddenAnim8_1.inputEnabled = true;
                this.hiddenAnim8_1.events.onInputDown.add(this.playAnim, this)                    

                this.hiddenAnim9_1 = this.add.sprite(this.map1.x+this.map1.width/2-111, this.map1.y+this.map1.height/2+193, 'Block-'+this.location[0]+'_9A');
                this.hiddenAnim9_1.width = 167;
                this.hiddenAnim9_1.height = 163;    
                this.hiddenAnim9_1.inputEnabled = true;
                this.hiddenAnim9_1.events.onInputDown.add(this.playAnim, this) 
                
                this.hiddenAnim10_1 = this.add.sprite(this.map1.x+this.map1.width/2-200, this.map1.y+this.map1.height/2+232, 'Block-'+this.location[0]+'_10A');
                this.hiddenAnim10_1.width = 66;
                this.hiddenAnim10_1.height = 80;    
                this.hiddenAnim10_1.inputEnabled = true;
                this.hiddenAnim10_1.events.onInputDown.add(this.playAnim, this)                       
                  
                break;                  
            }
          
            this.map2 = this.add.sprite(-this.game.width/2,-this.game.height/5+100, 'block'+this.location[1]);//this.add.sprite(this.game.width/2-300,-this.game.height/2-50, 'block'+this.location[1]);
            switch(this.location[1]){
              case 1:
                
                this.map2.width = this.game.width;
                this.map2.height = this.game.height;        
                this.map2.alpha = 1;    
                
                this.hiddenAnim1_2 = this.add.sprite(this.map2.x+this.map2.width/2+21, this.map2.y+218, 'Block-'+this.location[1]+'_1A');
                this.hiddenAnim1_2.width = 57;
                this.hiddenAnim1_2.height = 63;    
                this.hiddenAnim1_2.inputEnabled = true;
                this.hiddenAnim1_2.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_2 = this.add.sprite(this.map2.x+this.map2.width/2+66, this.map2.y+this.map2.height/2-10, 'Block-'+this.location[1]+'_2A');
                this.hiddenAnim2_2.width = 67;
                this.hiddenAnim2_2.height = 89;    
                this.hiddenAnim2_2.inputEnabled = true;
                this.hiddenAnim2_2.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim3_2 = this.add.sprite(this.map2.x+this.map2.width/2-65, this.map2.y+this.map2.height/2+80, 'Block-'+this.location[1]+'_3A');
                this.hiddenAnim3_2.width = 93;
                this.hiddenAnim3_2.height = 94;    
                this.hiddenAnim3_2.inputEnabled = true;
                this.hiddenAnim3_2.events.onInputDown.add(this.playAnim, this)    

                this.hiddenAnim4_2 = this.add.sprite(this.map2.x+this.map2.width/2-145, this.map2.y+this.map2.height/2+227, 'Block-'+this.location[1]+'_4A');
                this.hiddenAnim4_2.width = 127;
                this.hiddenAnim4_2.height = 107;    
                this.hiddenAnim4_2.inputEnabled = true;
                this.hiddenAnim4_2.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_2 = this.add.sprite(this.map2.x+this.map2.width/2-308, this.map2.y+this.map2.height/2+50, 'Block-'+this.location[1]+'_5A');
                this.hiddenAnim5_2.width = 90;
                this.hiddenAnim5_2.height = 88;    
                this.hiddenAnim5_2.inputEnabled = true;
                this.hiddenAnim5_2.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_2 = this.add.sprite(this.map2.x+this.map2.width-75, this.map2.y+this.map2.height/2+135, 'Block-'+this.location[1]+'_6A');
                this.hiddenAnim6_2.width = 54;
                this.hiddenAnim6_2.height = 48;    
                this.hiddenAnim6_2.inputEnabled = true;
                this.hiddenAnim6_2.events.onInputDown.add(this.playAnim, this)            
                  
                break;
              case 2:
                //this.map2 = this.add.sprite(0,0 , 'block'+this.location[1]);
                this.map2.width = this.game.width;
                this.map2.height = this.game.height;        
                this.map2.alpha = 1;    
                
                this.hiddenAnim1_2 = this.add.sprite(this.map2.x+this.map2.width/2+70, this.map2.y+this.map2.height/2-3, 'Block-'+this.location[1]+'_1A');
                this.hiddenAnim1_2.width = 37;
                this.hiddenAnim1_2.height = 48;    
                this.hiddenAnim1_2.inputEnabled = true;
                this.hiddenAnim1_2.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_2 = this.add.sprite(this.map2.x+this.map2.width/2+204, this.map2.y+this.map2.height/2+70, 'Block-'+this.location[1]+'_2A');
                this.hiddenAnim2_2.width = 77;
                this.hiddenAnim2_2.height = 78;    
                this.hiddenAnim2_2.inputEnabled = true;
                this.hiddenAnim2_2.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim3_2 = this.add.sprite(this.map2.x+this.map2.width/2+120, this.map2.y+this.map2.height/2+165, 'Block-'+this.location[1]+'_3A');
                this.hiddenAnim3_2.width = 57;
                this.hiddenAnim3_2.height = 65;    
                this.hiddenAnim3_2.inputEnabled = true;
                this.hiddenAnim3_2.events.onInputDown.add(this.playAnim, this)    

                this.hiddenAnim4_2 = this.add.sprite(this.map2.x+this.map2.width/2-133, this.map2.y+this.map2.height/2+210, 'Block-'+this.location[1]+'_4A');
                this.hiddenAnim4_2.width = 120;
                this.hiddenAnim4_2.height = 117;    
                this.hiddenAnim4_2.inputEnabled = true;
                this.hiddenAnim4_2.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_2 = this.add.sprite(this.map2.x+this.map2.width/2-110, this.map2.y+this.map2.height/2+35, 'Block-'+this.location[1]+'_5A');
                this.hiddenAnim5_2.width = 57;
                this.hiddenAnim5_2.height = 71;    
                this.hiddenAnim5_2.inputEnabled = true;
                this.hiddenAnim5_2.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_2 = this.add.sprite(this.map2.x+this.map2.width/2-345, this.map2.y+this.map2.height/2+40, 'Block-'+this.location[1]+'_6A');
                this.hiddenAnim6_2.width = 67;
                this.hiddenAnim6_2.height = 60;    
                this.hiddenAnim6_2.inputEnabled = true;
                this.hiddenAnim6_2.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_2 = this.add.sprite(this.map2.x+this.map2.width/2-150, this.map2.y+this.map2.height/2+130, 'Block-'+this.location[1]+'_7A');
                this.hiddenAnim7_2.width = 79;
                this.hiddenAnim7_2.height = 72;    
                this.hiddenAnim7_2.inputEnabled = true;
                this.hiddenAnim7_2.events.onInputDown.add(this.playAnim, this)           

           
                break;             
              case 3:
                //this.map2 = this.add.sprite(0,0 , 'block'+this.location[1]);
                this.map2.width = this.game.width;
                this.map2.height = this.game.height;        
                this.map2.alpha = 1;    

                
                this.hiddenAnim1_2 = this.add.sprite(this.map2.x+this.map2.width/2-35, this.map2.y+this.map2.height/2+55, 'Block-'+this.location[1]+'_1A');
                this.hiddenAnim1_2.width = 83;
                this.hiddenAnim1_2.height = 70;    
                this.hiddenAnim1_2.inputEnabled = true;
                this.hiddenAnim1_2.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_2 = this.add.sprite(this.map2.x+this.map2.width/2+110, this.map2.y+this.map2.height/2+205, 'Block-'+this.location[1]+'_2A');
                this.hiddenAnim2_2.width = 68;
                this.hiddenAnim2_2.height = 91;    
                this.hiddenAnim2_2.inputEnabled = true;
                this.hiddenAnim2_2.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim4_2 = this.add.sprite(this.map2.x+this.map2.width/2-152, this.map2.y+this.map2.height/2+220, 'Block-'+this.location[1]+'_4A');
                this.hiddenAnim4_2.width = 167;
                this.hiddenAnim4_2.height = 152;    
                this.hiddenAnim4_2.inputEnabled = true;
                this.hiddenAnim4_2.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_2 = this.add.sprite(this.map2.x+this.map2.width/2-95, this.map2.y+this.map2.height/2+155, 'Block-'+this.location[1]+'_5A');
                this.hiddenAnim5_2.width = 44;
                this.hiddenAnim5_2.height = 36;    
                this.hiddenAnim5_2.inputEnabled = true;
                this.hiddenAnim5_2.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_2 = this.add.sprite(this.map2.x+this.map2.width/2-225, this.map2.y+this.map2.height/2+180, 'Block-'+this.location[1]+'_6A');
                this.hiddenAnim6_2.width = 59;
                this.hiddenAnim6_2.height = 67;    
                this.hiddenAnim6_2.inputEnabled = true;
                this.hiddenAnim6_2.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_2 = this.add.sprite(this.map2.x+75, this.map2.y+this.map2.height/2+115, 'Block-'+this.location[1]+'_7A');
                this.hiddenAnim7_2.width = 35;
                this.hiddenAnim7_2.height = 48;    
                this.hiddenAnim7_2.inputEnabled = true;
                this.hiddenAnim7_2.events.onInputDown.add(this.playAnim, this)           

                this.hiddenAnim8_2 = this.add.sprite(this.map2.x+this.map2.width/2-10, this.map2.y+this.map2.height/2+30, 'Block-'+this.location[1]+'_8A');
                this.hiddenAnim8_2.width = 40;
                this.hiddenAnim8_2.height = 47;    
                this.hiddenAnim8_2.inputEnabled = true;
                this.hiddenAnim8_2.events.onInputDown.add(this.playAnim, this)                    

                this.hiddenAnim9_2 = this.add.sprite(this.map2.x+this.map2.width/2-183, this.map2.y+this.map2.height/2-76, 'Block-'+this.location[1]+'_9A');
                this.hiddenAnim9_2.width = 119;
                this.hiddenAnim9_2.height = 104;    
                this.hiddenAnim9_2.inputEnabled = true;
                this.hiddenAnim9_2.events.onInputDown.add(this.playAnim, this)           
                  
                break;   
                
              case 4:
                //this.map2 = this.add.sprite(0,0 , 'block'+this.location[1]);
                this.map2.width = this.game.width;
                this.map2.height = this.game.height;        
                this.map2.alpha = 1;    
                
                
                this.hiddenAnim1_2 = this.add.sprite(this.map2.x+this.map2.width/2+110, this.map2.y+this.map2.height/2+260, 'Block-'+this.location[1]+'_1A');
                this.hiddenAnim1_2.width = 46;
                this.hiddenAnim1_2.height = 45;    
                this.hiddenAnim1_2.inputEnabled = true;
                this.hiddenAnim1_2.events.onInputDown.add(this.playAnim, this)               

                this.hiddenAnim2_2 = this.add.sprite(this.map2.x+this.map2.width/2-4, this.map2.y+this.map2.height/2-50, 'Block-'+this.location[1]+'_2A');
                this.hiddenAnim2_2.width = 69;
                this.hiddenAnim2_2.height = 68;    
                this.hiddenAnim2_2.inputEnabled = true;
                this.hiddenAnim2_2.events.onInputDown.add(this.playAnim, this) 
                
                this.hiddenAnim3_2 = this.add.sprite(this.map2.x+this.map2.width/2-115, this.map2.y+this.map2.height/2-50, 'Block-'+this.location[1]+'_3A');
                this.hiddenAnim3_2.width = 63;
                this.hiddenAnim3_2.height = 63;    
                this.hiddenAnim3_2.inputEnabled = true;
                this.hiddenAnim3_2.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim4_2 = this.add.sprite(this.map2.x+this.map2.width/2-55, this.map2.y+this.map2.height/2-20, 'Block-'+this.location[1]+'_4A');
                this.hiddenAnim4_2.width = 63;
                this.hiddenAnim4_2.height = 63;    
                this.hiddenAnim4_2.inputEnabled = true;
                this.hiddenAnim4_2.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_2 = this.add.sprite(this.map2.x+this.map2.width/2+155, this.map2.y+this.map2.height/2-20, 'Block-'+this.location[1]+'_5A');
                this.hiddenAnim5_2.width = 105;
                this.hiddenAnim5_2.height = 99;    
                this.hiddenAnim5_2.inputEnabled = true;
                this.hiddenAnim5_2.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_2 = this.add.sprite(this.map2.x+this.map2.width/2+290, this.map2.y+this.map2.height/2+115, 'Block-'+this.location[1]+'_6A');
                this.hiddenAnim6_2.width = 71;
                this.hiddenAnim6_2.height = 94;    
                this.hiddenAnim6_2.inputEnabled = true;
                this.hiddenAnim6_2.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_2 = this.add.sprite(this.map2.x+this.map2.width/2+140, this.map2.y+this.map2.height/2+195, 'Block-'+this.location[1]+'_7A');
                this.hiddenAnim7_2.width = 114;
                this.hiddenAnim7_2.height = 108;    
                this.hiddenAnim7_2.inputEnabled = true;
                this.hiddenAnim7_2.events.onInputDown.add(this.playAnim, this)           

                this.hiddenAnim8_2 = this.add.sprite(this.map2.x+this.map2.width/2-55, this.map2.y+this.map2.height/2+70, 'Block-'+this.location[1]+'_8A');
                this.hiddenAnim8_2.width = 103;
                this.hiddenAnim8_2.height = 110;    
                this.hiddenAnim8_2.inputEnabled = true;
                this.hiddenAnim8_2.events.onInputDown.add(this.playAnim, this)                    

                this.hiddenAnim9_2 = this.add.sprite(this.map2.x+this.map2.width/2-111, this.map2.y+this.map2.height/2+193, 'Block-'+this.location[1]+'_9A');
                this.hiddenAnim9_2.width = 167;
                this.hiddenAnim9_2.height = 163;    
                this.hiddenAnim9_2.inputEnabled = true;
                this.hiddenAnim9_2.events.onInputDown.add(this.playAnim, this) 
                
                this.hiddenAnim10_2 = this.add.sprite(this.map2.x+this.map2.width/2-200, this.map2.y+this.map2.height/2+232, 'Block-'+this.location[1]+'_10A');
                this.hiddenAnim10_2.width = 66;
                this.hiddenAnim10_2.height = 80;    
                this.hiddenAnim10_2.inputEnabled = true;
                this.hiddenAnim10_2.events.onInputDown.add(this.playAnim, this)                       
                  
                break;                  
            }
          
            this.map3 = this.add.sprite(-this.game.width/4+150, this.game.height/3+80, 'block'+this.location[2]);
            switch(this.location[2]){
              case 1:
                
                this.map3.width = this.game.width;
                this.map3.height = this.game.height;        
                this.map3.alpha = 1;    
                
                this.hiddenAnim1_3 = this.add.sprite(this.map3.x+this.map3.width/2+21, this.map3.y+218, 'Block-'+this.location[2]+'_1A');
                this.hiddenAnim1_3.width = 57;
                this.hiddenAnim1_3.height = 63;    
                this.hiddenAnim1_3.inputEnabled = true;
                this.hiddenAnim1_3.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_3 = this.add.sprite(this.map3.x+this.map3.width/2+66, this.map3.y+this.map3.height/2-10, 'Block-'+this.location[2]+'_2A');
                this.hiddenAnim2_3.width = 67;
                this.hiddenAnim2_3.height = 89;    
                this.hiddenAnim2_3.inputEnabled = true;
                this.hiddenAnim2_3.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim3_3 = this.add.sprite(this.map3.x+this.map3.width/2-65, this.map3.y+this.map3.height/2+80, 'Block-'+this.location[2]+'_3A');
                this.hiddenAnim3_3.width = 93;
                this.hiddenAnim3_3.height = 94;    
                this.hiddenAnim3_3.inputEnabled = true;
                this.hiddenAnim3_3.events.onInputDown.add(this.playAnim, this)    

                this.hiddenAnim4_3 = this.add.sprite(this.map3.x+this.map3.width/2-145, this.map3.y+this.map3.height/2+227, 'Block-'+this.location[2]+'_4A');
                this.hiddenAnim4_3.width = 127;
                this.hiddenAnim4_3.height = 107;    
                this.hiddenAnim4_3.inputEnabled = true;
                this.hiddenAnim4_3.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_3 = this.add.sprite(this.map3.x+this.map3.width/2-308, this.map3.y+this.map3.height/2+50, 'Block-'+this.location[2]+'_5A');
                this.hiddenAnim5_3.width = 90;
                this.hiddenAnim5_3.height = 88;    
                this.hiddenAnim5_3.inputEnabled = true;
                this.hiddenAnim5_3.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_3 = this.add.sprite(this.map3.x+this.map3.width-75, this.map3.y+this.map3.height/2+135, 'Block-'+this.location[2]+'_6A');
                this.hiddenAnim6_3.width = 54;
                this.hiddenAnim6_3.height = 48;    
                this.hiddenAnim6_3.inputEnabled = true;
                this.hiddenAnim6_3.events.onInputDown.add(this.playAnim, this)            
                  
                break;
              case 2:
                //this.map3 = this.add.sprite(0,0 , 'block'+this.location[2]);
                this.map3.width = this.game.width;
                this.map3.height = this.game.height;        
                this.map3.alpha = 1;    
                
                this.hiddenAnim1_3 = this.add.sprite(this.map3.x+this.map3.width/2+70, this.map3.y+this.map3.height/2-3, 'Block-'+this.location[2]+'_1A');
                this.hiddenAnim1_3.width = 37;
                this.hiddenAnim1_3.height = 48;    
                this.hiddenAnim1_3.inputEnabled = true;
                this.hiddenAnim1_3.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_3 = this.add.sprite(this.map3.x+this.map3.width/2+204, this.map3.y+this.map3.height/2+70, 'Block-'+this.location[2]+'_2A');
                this.hiddenAnim2_3.width = 77;
                this.hiddenAnim2_3.height = 78;    
                this.hiddenAnim2_3.inputEnabled = true;
                this.hiddenAnim2_3.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim3_3 = this.add.sprite(this.map3.x+this.map3.width/2+120, this.map3.y+this.map3.height/2+165, 'Block-'+this.location[2]+'_3A');
                this.hiddenAnim3_3.width = 57;
                this.hiddenAnim3_3.height = 65;    
                this.hiddenAnim3_3.inputEnabled = true;
                this.hiddenAnim3_3.events.onInputDown.add(this.playAnim, this)    

                this.hiddenAnim4_3 = this.add.sprite(this.map3.x+this.map3.width/2-133, this.map3.y+this.map3.height/2+210, 'Block-'+this.location[2]+'_4A');
                this.hiddenAnim4_3.width = 120;
                this.hiddenAnim4_3.height = 117;    
                this.hiddenAnim4_3.inputEnabled = true;
                this.hiddenAnim4_3.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_3 = this.add.sprite(this.map3.x+this.map3.width/2-110, this.map3.y+this.map3.height/2+35, 'Block-'+this.location[2]+'_5A');
                this.hiddenAnim5_3.width = 57;
                this.hiddenAnim5_3.height = 71;    
                this.hiddenAnim5_3.inputEnabled = true;
                this.hiddenAnim5_3.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_3 = this.add.sprite(this.map3.x+this.map3.width/2-345, this.map3.y+this.map3.height/2+40, 'Block-'+this.location[2]+'_6A');
                this.hiddenAnim6_3.width = 67;
                this.hiddenAnim6_3.height = 60;    
                this.hiddenAnim6_3.inputEnabled = true;
                this.hiddenAnim6_3.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_3 = this.add.sprite(this.map3.x+this.map3.width/2-150, this.map3.y+this.map3.height/2+130, 'Block-'+this.location[2]+'_7A');
                this.hiddenAnim7_3.width = 79;
                this.hiddenAnim7_3.height = 72;    
                this.hiddenAnim7_3.inputEnabled = true;
                this.hiddenAnim7_3.events.onInputDown.add(this.playAnim, this)           

           
                break;             
              case 3:
                //this.map3 = this.add.sprite(0,0 , 'block'+this.location[2]);
                this.map3.width = this.game.width;
                this.map3.height = this.game.height;        
                this.map3.alpha = 1;    

                
                this.hiddenAnim1_3 = this.add.sprite(this.map3.x+this.map3.width/2-35, this.map3.y+this.map3.height/2+55, 'Block-'+this.location[2]+'_1A');
                this.hiddenAnim1_3.width = 83;
                this.hiddenAnim1_3.height = 70;    
                this.hiddenAnim1_3.inputEnabled = true;
                this.hiddenAnim1_3.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_3 = this.add.sprite(this.map3.x+this.map3.width/2+110, this.map3.y+this.map3.height/2+205, 'Block-'+this.location[2]+'_2A');
                this.hiddenAnim2_3.width = 68;
                this.hiddenAnim2_3.height = 91;    
                this.hiddenAnim2_3.inputEnabled = true;
                this.hiddenAnim2_3.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim4_3 = this.add.sprite(this.map3.x+this.map3.width/2-152, this.map3.y+this.map3.height/2+220, 'Block-'+this.location[2]+'_4A');
                this.hiddenAnim4_3.width = 167;
                this.hiddenAnim4_3.height = 152;    
                this.hiddenAnim4_3.inputEnabled = true;
                this.hiddenAnim4_3.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_3 = this.add.sprite(this.map3.x+this.map3.width/2-95, this.map3.y+this.map3.height/2+155, 'Block-'+this.location[2]+'_5A');
                this.hiddenAnim5_3.width = 44;
                this.hiddenAnim5_3.height = 36;    
                this.hiddenAnim5_3.inputEnabled = true;
                this.hiddenAnim5_3.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_3 = this.add.sprite(this.map3.x+this.map3.width/2-225, this.map3.y+this.map3.height/2+180, 'Block-'+this.location[2]+'_6A');
                this.hiddenAnim6_3.width = 59;
                this.hiddenAnim6_3.height = 67;    
                this.hiddenAnim6_3.inputEnabled = true;
                this.hiddenAnim6_3.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_3 = this.add.sprite(this.map3.x+75, this.map3.y+this.map3.height/2+115, 'Block-'+this.location[2]+'_7A');
                this.hiddenAnim7_3.width = 35;
                this.hiddenAnim7_3.height = 48;    
                this.hiddenAnim7_3.inputEnabled = true;
                this.hiddenAnim7_3.events.onInputDown.add(this.playAnim, this)           

                this.hiddenAnim8_3 = this.add.sprite(this.map3.x+this.map3.width/2-10, this.map3.y+this.map3.height/2+30, 'Block-'+this.location[2]+'_8A');
                this.hiddenAnim8_3.width = 40;
                this.hiddenAnim8_3.height = 47;    
                this.hiddenAnim8_3.inputEnabled = true;
                this.hiddenAnim8_3.events.onInputDown.add(this.playAnim, this)                    

                this.hiddenAnim9_3 = this.add.sprite(this.map3.x+this.map3.width/2-183, this.map3.y+this.map3.height/2-76, 'Block-'+this.location[2]+'_9A');
                this.hiddenAnim9_3.width = 119;
                this.hiddenAnim9_3.height = 104;    
                this.hiddenAnim9_3.inputEnabled = true;
                this.hiddenAnim9_3.events.onInputDown.add(this.playAnim, this)           
                  
                break;   
                
              case 4:
                //this.map3 = this.add.sprite(0,0 , 'block'+this.location[2]);
                this.map3.width = this.game.width;
                this.map3.height = this.game.height;        
                this.map3.alpha = 1;    
                
                
                this.hiddenAnim1_3 = this.add.sprite(this.map3.x+this.map3.width/2+110, this.map3.y+this.map3.height/2+260, 'Block-'+this.location[2]+'_1A');
                this.hiddenAnim1_3.width = 46;
                this.hiddenAnim1_3.height = 45;    
                this.hiddenAnim1_3.inputEnabled = true;
                this.hiddenAnim1_3.events.onInputDown.add(this.playAnim, this)               

                this.hiddenAnim2_3 = this.add.sprite(this.map3.x+this.map3.width/2-4, this.map3.y+this.map3.height/2-50, 'Block-'+this.location[2]+'_2A');
                this.hiddenAnim2_3.width = 69;
                this.hiddenAnim2_3.height = 68;    
                this.hiddenAnim2_3.inputEnabled = true;
                this.hiddenAnim2_3.events.onInputDown.add(this.playAnim, this) 
                
                this.hiddenAnim3_3 = this.add.sprite(this.map3.x+this.map3.width/2-115, this.map3.y+this.map3.height/2-50, 'Block-'+this.location[2]+'_3A');
                this.hiddenAnim3_3.width = 63;
                this.hiddenAnim3_3.height = 63;    
                this.hiddenAnim3_3.inputEnabled = true;
                this.hiddenAnim3_3.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim4_3 = this.add.sprite(this.map3.x+this.map3.width/2-55, this.map3.y+this.map3.height/2-20, 'Block-'+this.location[2]+'_4A');
                this.hiddenAnim4_3.width = 63;
                this.hiddenAnim4_3.height = 63;    
                this.hiddenAnim4_3.inputEnabled = true;
                this.hiddenAnim4_3.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_3 = this.add.sprite(this.map3.x+this.map3.width/2+155, this.map3.y+this.map3.height/2-20, 'Block-'+this.location[2]+'_5A');
                this.hiddenAnim5_3.width = 105;
                this.hiddenAnim5_3.height = 99;    
                this.hiddenAnim5_3.inputEnabled = true;
                this.hiddenAnim5_3.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_3 = this.add.sprite(this.map3.x+this.map3.width/2+290, this.map3.y+this.map3.height/2+115, 'Block-'+this.location[2]+'_6A');
                this.hiddenAnim6_3.width = 71;
                this.hiddenAnim6_3.height = 94;    
                this.hiddenAnim6_3.inputEnabled = true;
                this.hiddenAnim6_3.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_3 = this.add.sprite(this.map3.x+this.map3.width/2+140, this.map3.y+this.map3.height/2+195, 'Block-'+this.location[2]+'_7A');
                this.hiddenAnim7_3.width = 114;
                this.hiddenAnim7_3.height = 108;    
                this.hiddenAnim7_3.inputEnabled = true;
                this.hiddenAnim7_3.events.onInputDown.add(this.playAnim, this)           

                this.hiddenAnim8_3 = this.add.sprite(this.map3.x+this.map3.width/2-55, this.map3.y+this.map3.height/2+70, 'Block-'+this.location[2]+'_8A');
                this.hiddenAnim8_3.width = 103;
                this.hiddenAnim8_3.height = 110;    
                this.hiddenAnim8_3.inputEnabled = true;
                this.hiddenAnim8_3.events.onInputDown.add(this.playAnim, this)                    

                this.hiddenAnim9_3 = this.add.sprite(this.map3.x+this.map3.width/2-111, this.map3.y+this.map3.height/2+193, 'Block-'+this.location[2]+'_9A');
                this.hiddenAnim9_3.width = 167;
                this.hiddenAnim9_3.height = 163;    
                this.hiddenAnim9_3.inputEnabled = true;
                this.hiddenAnim9_3.events.onInputDown.add(this.playAnim, this) 
                
                this.hiddenAnim10_3 = this.add.sprite(this.map3.x+this.map3.width/2-200, this.map3.y+this.map3.height/2+232, 'Block-'+this.location[2]+'_10A');
                this.hiddenAnim10_3.width = 66;
                this.hiddenAnim10_3.height = 80;    
                this.hiddenAnim10_3.inputEnabled = true;
                this.hiddenAnim10_3.events.onInputDown.add(this.playAnim, this)                       
                  
                break;                  
            }  
            this.map4 = this.add.sprite(this.game.width/2+100, this.game.height/3-280, 'block'+this.location[3]);
            switch(this.location[3]){
              case 1:
                
                this.map4.width = this.game.width;
                this.map4.height = this.game.height;        
                this.map4.alpha = 1;    
                
                this.hiddenAnim1_4= this.add.sprite(this.map4.x+this.map4.width/2+21, this.map4.y+218, 'Block-'+this.location[3]+'_1A');
                this.hiddenAnim1_4.width = 57;
                this.hiddenAnim1_4.height = 63;    
                this.hiddenAnim1_4.inputEnabled = true;
                this.hiddenAnim1_4.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_4= this.add.sprite(this.map4.x+this.map4.width/2+66, this.map4.y+this.map4.height/2-10, 'Block-'+this.location[3]+'_2A');
                this.hiddenAnim2_4.width = 67;
                this.hiddenAnim2_4.height = 89;    
                this.hiddenAnim2_4.inputEnabled = true;
                this.hiddenAnim2_4.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim3_4= this.add.sprite(this.map4.x+this.map4.width/2-65, this.map4.y+this.map4.height/2+80, 'Block-'+this.location[3]+'_3A');
                this.hiddenAnim3_4.width = 93;
                this.hiddenAnim3_4.height = 94;    
                this.hiddenAnim3_4.inputEnabled = true;
                this.hiddenAnim3_4.events.onInputDown.add(this.playAnim, this)    

                this.hiddenAnim4_4= this.add.sprite(this.map4.x+this.map4.width/2-145, this.map4.y+this.map4.height/2+227, 'Block-'+this.location[3]+'_4A');
                this.hiddenAnim4_4.width = 127;
                this.hiddenAnim4_4.height = 107;    
                this.hiddenAnim4_4.inputEnabled = true;
                this.hiddenAnim4_4.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_4= this.add.sprite(this.map4.x+this.map4.width/2-308, this.map4.y+this.map4.height/2+50, 'Block-'+this.location[3]+'_5A');
                this.hiddenAnim5_4.width = 90;
                this.hiddenAnim5_4.height = 88;    
                this.hiddenAnim5_4.inputEnabled = true;
                this.hiddenAnim5_4.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_4= this.add.sprite(this.map4.x+this.map4.width-75, this.map4.y+this.map4.height/2+135, 'Block-'+this.location[3]+'_6A');
                this.hiddenAnim6_4.width = 54;
                this.hiddenAnim6_4.height = 48;    
                this.hiddenAnim6_4.inputEnabled = true;
                this.hiddenAnim6_4.events.onInputDown.add(this.playAnim, this)            
                  
                break;
              case 2:
                //this.map4 = this.add.sprite(0,0 , 'block'+this.location[3]);
                this.map4.width = this.game.width;
                this.map4.height = this.game.height;        
                this.map4.alpha = 1;    
                
                this.hiddenAnim1_4= this.add.sprite(this.map4.x+this.map4.width/2+70, this.map4.y+this.map4.height/2-3, 'Block-'+this.location[3]+'_1A');
                this.hiddenAnim1_4.width = 37;
                this.hiddenAnim1_4.height = 48;    
                this.hiddenAnim1_4.inputEnabled = true;
                this.hiddenAnim1_4.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_4= this.add.sprite(this.map4.x+this.map4.width/2+204, this.map4.y+this.map4.height/2+70, 'Block-'+this.location[3]+'_2A');
                this.hiddenAnim2_4.width = 77;
                this.hiddenAnim2_4.height = 78;    
                this.hiddenAnim2_4.inputEnabled = true;
                this.hiddenAnim2_4.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim3_4= this.add.sprite(this.map4.x+this.map4.width/2+120, this.map4.y+this.map4.height/2+165, 'Block-'+this.location[3]+'_3A');
                this.hiddenAnim3_4.width = 57;
                this.hiddenAnim3_4.height = 65;    
                this.hiddenAnim3_4.inputEnabled = true;
                this.hiddenAnim3_4.events.onInputDown.add(this.playAnim, this)    

                this.hiddenAnim4_4= this.add.sprite(this.map4.x+this.map4.width/2-133, this.map4.y+this.map4.height/2+210, 'Block-'+this.location[3]+'_4A');
                this.hiddenAnim4_4.width = 120;
                this.hiddenAnim4_4.height = 117;    
                this.hiddenAnim4_4.inputEnabled = true;
                this.hiddenAnim4_4.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_4= this.add.sprite(this.map4.x+this.map4.width/2-110, this.map4.y+this.map4.height/2+35, 'Block-'+this.location[3]+'_5A');
                this.hiddenAnim5_4.width = 57;
                this.hiddenAnim5_4.height = 71;    
                this.hiddenAnim5_4.inputEnabled = true;
                this.hiddenAnim5_4.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_4= this.add.sprite(this.map4.x+this.map4.width/2-345, this.map4.y+this.map4.height/2+40, 'Block-'+this.location[3]+'_6A');
                this.hiddenAnim6_4.width = 67;
                this.hiddenAnim6_4.height = 60;    
                this.hiddenAnim6_4.inputEnabled = true;
                this.hiddenAnim6_4.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_4= this.add.sprite(this.map4.x+this.map4.width/2-150, this.map4.y+this.map4.height/2+130, 'Block-'+this.location[3]+'_7A');
                this.hiddenAnim7_4.width = 79;
                this.hiddenAnim7_4.height = 72;    
                this.hiddenAnim7_4.inputEnabled = true;
                this.hiddenAnim7_4.events.onInputDown.add(this.playAnim, this)           

           
                break;             
              case 3:
                //this.map4 = this.add.sprite(0,0 , 'block'+this.location[3]);
                this.map4.width = this.game.width;
                this.map4.height = this.game.height;        
                this.map4.alpha = 1;    

                
                this.hiddenAnim1_4= this.add.sprite(this.map4.x+this.map4.width/2-35, this.map4.y+this.map4.height/2+55, 'Block-'+this.location[3]+'_1A');
                this.hiddenAnim1_4.width = 83;
                this.hiddenAnim1_4.height = 70;    
                this.hiddenAnim1_4.inputEnabled = true;
                this.hiddenAnim1_4.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim2_4= this.add.sprite(this.map4.x+this.map4.width/2+110, this.map4.y+this.map4.height/2+205, 'Block-'+this.location[3]+'_2A');
                this.hiddenAnim2_4.width = 68;
                this.hiddenAnim2_4.height = 91;    
                this.hiddenAnim2_4.inputEnabled = true;
                this.hiddenAnim2_4.events.onInputDown.add(this.playAnim, this) 

                this.hiddenAnim4_4= this.add.sprite(this.map4.x+this.map4.width/2-152, this.map4.y+this.map4.height/2+220, 'Block-'+this.location[3]+'_4A');
                this.hiddenAnim4_4.width = 167;
                this.hiddenAnim4_4.height = 152;    
                this.hiddenAnim4_4.inputEnabled = true;
                this.hiddenAnim4_4.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_4= this.add.sprite(this.map4.x+this.map4.width/2-95, this.map4.y+this.map4.height/2+155, 'Block-'+this.location[3]+'_5A');
                this.hiddenAnim5_4.width = 44;
                this.hiddenAnim5_4.height = 36;    
                this.hiddenAnim5_4.inputEnabled = true;
                this.hiddenAnim5_4.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_4= this.add.sprite(this.map4.x+this.map4.width/2-225, this.map4.y+this.map4.height/2+180, 'Block-'+this.location[3]+'_6A');
                this.hiddenAnim6_4.width = 59;
                this.hiddenAnim6_4.height = 67;    
                this.hiddenAnim6_4.inputEnabled = true;
                this.hiddenAnim6_4.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_4= this.add.sprite(this.map4.x+75, this.map4.y+this.map4.height/2+115, 'Block-'+this.location[3]+'_7A');
                this.hiddenAnim7_4.width = 35;
                this.hiddenAnim7_4.height = 48;    
                this.hiddenAnim7_4.inputEnabled = true;
                this.hiddenAnim7_4.events.onInputDown.add(this.playAnim, this)           

                this.hiddenAnim8_4= this.add.sprite(this.map4.x+this.map4.width/2-10, this.map4.y+this.map4.height/2+30, 'Block-'+this.location[3]+'_8A');
                this.hiddenAnim8_4.width = 40;
                this.hiddenAnim8_4.height = 47;    
                this.hiddenAnim8_4.inputEnabled = true;
                this.hiddenAnim8_4.events.onInputDown.add(this.playAnim, this)                    

                this.hiddenAnim9_4= this.add.sprite(this.map4.x+this.map4.width/2-183, this.map4.y+this.map4.height/2-76, 'Block-'+this.location[3]+'_9A');
                this.hiddenAnim9_4.width = 119;
                this.hiddenAnim9_4.height = 104;    
                this.hiddenAnim9_4.inputEnabled = true;
                this.hiddenAnim9_4.events.onInputDown.add(this.playAnim, this)           
                  
                break;   
                
              case 4:
                //this.map4 = this.add.sprite(0,0 , 'block'+this.location[3]);
                this.map4.width = this.game.width;
                this.map4.height = this.game.height;        
                this.map4.alpha = 1;    
                
                
                this.hiddenAnim1_4= this.add.sprite(this.map4.x+this.map4.width/2+110, this.map4.y+this.map4.height/2+260, 'Block-'+this.location[3]+'_1A');
                this.hiddenAnim1_4.width = 46;
                this.hiddenAnim1_4.height = 45;    
                this.hiddenAnim1_4.inputEnabled = true;
                this.hiddenAnim1_4.events.onInputDown.add(this.playAnim, this)               

                this.hiddenAnim2_4= this.add.sprite(this.map4.x+this.map4.width/2-4, this.map4.y+this.map4.height/2-50, 'Block-'+this.location[3]+'_2A');
                this.hiddenAnim2_4.width = 69;
                this.hiddenAnim2_4.height = 68;    
                this.hiddenAnim2_4.inputEnabled = true;
                this.hiddenAnim2_4.events.onInputDown.add(this.playAnim, this) 
                
                this.hiddenAnim3_4= this.add.sprite(this.map4.x+this.map4.width/2-115, this.map4.y+this.map4.height/2-50, 'Block-'+this.location[3]+'_3A');
                this.hiddenAnim3_4.width = 63;
                this.hiddenAnim3_4.height = 63;    
                this.hiddenAnim3_4.inputEnabled = true;
                this.hiddenAnim3_4.events.onInputDown.add(this.playAnim, this)                

                this.hiddenAnim4_4= this.add.sprite(this.map4.x+this.map4.width/2-55, this.map4.y+this.map4.height/2-20, 'Block-'+this.location[3]+'_4A');
                this.hiddenAnim4_4.width = 63;
                this.hiddenAnim4_4.height = 63;    
                this.hiddenAnim4_4.inputEnabled = true;
                this.hiddenAnim4_4.events.onInputDown.add(this.playAnim, this)

                this.hiddenAnim5_4= this.add.sprite(this.map4.x+this.map4.width/2+155, this.map4.y+this.map4.height/2-20, 'Block-'+this.location[3]+'_5A');
                this.hiddenAnim5_4.width = 105;
                this.hiddenAnim5_4.height = 99;    
                this.hiddenAnim5_4.inputEnabled = true;
                this.hiddenAnim5_4.events.onInputDown.add(this.playAnim, this)      

                this.hiddenAnim6_4= this.add.sprite(this.map4.x+this.map4.width/2+290, this.map4.y+this.map4.height/2+115, 'Block-'+this.location[3]+'_6A');
                this.hiddenAnim6_4.width = 71;
                this.hiddenAnim6_4.height = 94;    
                this.hiddenAnim6_4.inputEnabled = true;
                this.hiddenAnim6_4.events.onInputDown.add(this.playAnim, this)            

                this.hiddenAnim7_4= this.add.sprite(this.map4.x+this.map4.width/2+140, this.map4.y+this.map4.height/2+195, 'Block-'+this.location[3]+'_7A');
                this.hiddenAnim7_4.width = 114;
                this.hiddenAnim7_4.height = 108;    
                this.hiddenAnim7_4.inputEnabled = true;
                this.hiddenAnim7_4.events.onInputDown.add(this.playAnim, this)           

                this.hiddenAnim8_4= this.add.sprite(this.map4.x+this.map4.width/2-55, this.map4.y+this.map4.height/2+70, 'Block-'+this.location[3]+'_8A');
                this.hiddenAnim8_4.width = 103;
                this.hiddenAnim8_4.height = 110;    
                this.hiddenAnim8_4.inputEnabled = true;
                this.hiddenAnim8_4.events.onInputDown.add(this.playAnim, this)                    

                this.hiddenAnim9_4= this.add.sprite(this.map4.x+this.map4.width/2-111, this.map4.y+this.map4.height/2+193, 'Block-'+this.location[3]+'_9A');
                this.hiddenAnim9_4.width = 167;
                this.hiddenAnim9_4.height = 163;    
                this.hiddenAnim9_4.inputEnabled = true;
                this.hiddenAnim9_4.events.onInputDown.add(this.playAnim, this) 
                
                this.hiddenAnim10_4= this.add.sprite(this.map4.x+this.map4.width/2-200, this.map4.y+this.map4.height/2+232, 'Block-'+this.location[3]+'_10A');
                this.hiddenAnim10_4.width = 66;
                this.hiddenAnim10_4.height = 80;    
                this.hiddenAnim10_4.inputEnabled = true;
                this.hiddenAnim10_4.events.onInputDown.add(this.playAnim, this)                       
                  
                break;                  
            }          
            /*
            this.map2 = this.add.sprite(this.game.width/2-300,-this.game.height/2-50, 'block2');
            this.map2.width = this.game.width;
            this.map2.height = this.game.height;        
            this.map2.alpha = 1;
            
            this.hiddenAnim1_2 = this.add.sprite(this.map2.x+this.map2.width/2+70, this.map2.y+this.map2.height/2-3, 'Block-2_1A');
            this.hiddenAnim1_2.width = 37;
            this.hiddenAnim1_2.height = 48;    
            this.hiddenAnim1_2.inputEnabled = true;
            this.hiddenAnim1_2.events.onInputDown.add(this.playAnim, this)                
            
            this.hiddenAnim2_2 = this.add.sprite(this.map2.x+this.map2.width/2+204, this.map2.y+this.map2.height/2+70, 'Block-2_2A');
            this.hiddenAnim2_2.width = 77;
            this.hiddenAnim2_2.height = 78;    
            this.hiddenAnim2_2.inputEnabled = true;
            this.hiddenAnim2_2.events.onInputDown.add(this.playAnim, this) 
            
            this.hiddenAnim3_2 = this.add.sprite(this.map2.x+this.map2.width/2+120, this.map2.y+this.map2.height/2+165, 'Block-2_3A');
            this.hiddenAnim3_2.width = 57;
            this.hiddenAnim3_2.height = 65;    
            this.hiddenAnim3_2.inputEnabled = true;
            this.hiddenAnim3_2.events.onInputDown.add(this.playAnim, this)    
            
            this.hiddenAnim4_2 = this.add.sprite(this.map2.x+this.map2.width/2-133, this.map2.y+this.map2.height/2+210, 'Block-2_4A');
            this.hiddenAnim4_2.width = 120;
            this.hiddenAnim4_2.height = 117;    
            this.hiddenAnim4_2.inputEnabled = true;
            this.hiddenAnim4_2.events.onInputDown.add(this.playAnim, this)
            
            this.hiddenAnim5_2 = this.add.sprite(this.map2.x+this.map2.width/2-110, this.map2.y+this.map2.height/2+35, 'Block-2_5A');
            this.hiddenAnim5_2.width = 57;
            this.hiddenAnim5_2.height = 71;    
            this.hiddenAnim5_2.inputEnabled = true;
            this.hiddenAnim5_2.events.onInputDown.add(this.playAnim, this)      
            
            this.hiddenAnim6_2 = this.add.sprite(this.map2.x+this.map2.width/2-345, this.map2.y+this.map2.height/2+40, 'Block-2_6A');
            this.hiddenAnim6_2.width = 67;
            this.hiddenAnim6_2.height = 60;    
            this.hiddenAnim6_2.inputEnabled = true;
            this.hiddenAnim6_2.events.onInputDown.add(this.playAnim, this)            

            this.hiddenAnim7_2 = this.add.sprite(this.map2.x+this.map2.width/2-150, this.map2.y+this.map2.height/2+130, 'Block-2_7A');
            this.hiddenAnim7_2.width = 79;
            this.hiddenAnim7_2.height = 72;    
            this.hiddenAnim7_2.inputEnabled = true;
            this.hiddenAnim7_2.events.onInputDown.add(this.playAnim, this)         
            
            this.map3 = this.add.sprite(-this.game.width/4+150, this.game.height/3+80, 'block3');
            this.map3.width = this.game.width;
            this.map3.height = this.game.height;        
            this.map3.alpha = 1;
            
            this.hiddenAnim1_3 = this.add.sprite(this.map3.x+this.map3.width/2+70, this.map3.y+this.map3.height/2-3, 'Block-2_1A');
            this.hiddenAnim1_3.width = 37;
            this.hiddenAnim1_3.height = 48;    
            this.hiddenAnim1_3.inputEnabled = true;
            this.hiddenAnim1_3.events.onInputDown.add(this.playAnim, this)                
            
            this.hiddenAnim2_3 = this.add.sprite(this.map3.x+this.map3.width/2+204, this.map3.y+this.map3.height/2+70, 'Block-2_2A');
            this.hiddenAnim2_3.width = 77;
            this.hiddenAnim2_3.height = 78;    
            this.hiddenAnim2_3.inputEnabled = true;
            this.hiddenAnim2_3.events.onInputDown.add(this.playAnim, this) 
            
            this.hiddenAnim3_3 = this.add.sprite(this.map3.x+this.map3.width/2+120, this.map3.y+this.map3.height/2+165, 'Block-2_3A');
            this.hiddenAnim3_3.width = 57;
            this.hiddenAnim3_3.height = 65;    
            this.hiddenAnim3_3.inputEnabled = true;
            this.hiddenAnim3_3.events.onInputDown.add(this.playAnim, this)    
            
            this.hiddenAnim4_3 = this.add.sprite(this.map3.x+this.map3.width/2-133, this.map3.y+this.map3.height/2+210, 'Block-2_4A');
            this.hiddenAnim4_3.width = 120;
            this.hiddenAnim4_3.height = 117;    
            this.hiddenAnim4_3.inputEnabled = true;
            this.hiddenAnim4_3.events.onInputDown.add(this.playAnim, this)
            
            this.hiddenAnim5_3 = this.add.sprite(this.map3.x+this.map3.width/2-110, this.map3.y+this.map3.height/2+35, 'Block-2_5A');
            this.hiddenAnim5_3.width = 57;
            this.hiddenAnim5_3.height = 71;    
            this.hiddenAnim5_3.inputEnabled = true;
            this.hiddenAnim5_3.events.onInputDown.add(this.playAnim, this)      
            
            this.hiddenAnim6_3 = this.add.sprite(this.map3.x+this.map3.width/2-345, this.map3.y+this.map3.height/2+40, 'Block-2_6A');
            this.hiddenAnim6_3.width = 67;
            this.hiddenAnim6_3.height = 60;    
            this.hiddenAnim6_3.inputEnabled = true;
            this.hiddenAnim6_3.events.onInputDown.add(this.playAnim, this)            

            this.hiddenAnim7_3 = this.add.sprite(this.map3.x+this.map3.width/2-150, this.map3.y+this.map3.height/2+130, 'Block-2_7A');
            this.hiddenAnim7_3.width = 79;
            this.hiddenAnim7_3.height = 72;    
            this.hiddenAnim7_3.inputEnabled = true;
            this.hiddenAnim7_3.events.onInputDown.add(this.playAnim, this)      
            
            this.map4 = this.add.sprite(this.game.width/2+100, this.game.height/3-280, 'block4');
            this.map4.width = this.game.width;
            this.map4.height = this.game.height;        
            this.map4.alpha = 1;
            
            this.hiddenAnim1_4 = this.add.sprite(this.map4.x+this.map4.width/2+70, this.map4.y+this.map4.height/2-3, 'Block-2_1A');
            this.hiddenAnim1_4.width = 37;
            this.hiddenAnim1_4.height = 48;    
            this.hiddenAnim1_4.inputEnabled = true;
            this.hiddenAnim1_4.events.onInputDown.add(this.playAnim, this)                
            
            this.hiddenAnim2_4 = this.add.sprite(this.map4.x+this.map4.width/2+204, this.map4.y+this.map4.height/2+70, 'Block-2_2A');
            this.hiddenAnim2_4.width = 77;
            this.hiddenAnim2_4.height = 78;    
            this.hiddenAnim2_4.inputEnabled = true;
            this.hiddenAnim2_4.events.onInputDown.add(this.playAnim, this) 
            
            this.hiddenAnim3_4 = this.add.sprite(this.map4.x+this.map4.width/2+120, this.map4.y+this.map4.height/2+165, 'Block-2_3A');
            this.hiddenAnim3_4.width = 57;
            this.hiddenAnim3_4.height = 65;    
            this.hiddenAnim3_4.inputEnabled = true;
            this.hiddenAnim3_4.events.onInputDown.add(this.playAnim, this)    
            
            this.hiddenAnim4_4 = this.add.sprite(this.map4.x+this.map4.width/2-133, this.map4.y+this.map4.height/2+210, 'Block-2_4A');
            this.hiddenAnim4_4.width = 120;
            this.hiddenAnim4_4.height = 117;    
            this.hiddenAnim4_4.inputEnabled = true;
            this.hiddenAnim4_4.events.onInputDown.add(this.playAnim, this)
            
            this.hiddenAnim5_4 = this.add.sprite(this.map4.x+this.map4.width/2-110, this.map4.y+this.map4.height/2+35, 'Block-2_5A');
            this.hiddenAnim5_4.width = 57;
            this.hiddenAnim5_4.height = 71;    
            this.hiddenAnim5_4.inputEnabled = true;
            this.hiddenAnim5_4.events.onInputDown.add(this.playAnim, this)      
            
            this.hiddenAnim6_4 = this.add.sprite(this.map4.x+this.map4.width/2-345, this.map4.y+this.map4.height/2+40, 'Block-2_6A');
            this.hiddenAnim6_4.width = 67;
            this.hiddenAnim6_4.height = 60;    
            this.hiddenAnim6_4.inputEnabled = true;
            this.hiddenAnim6_4.events.onInputDown.add(this.playAnim, this)            

            this.hiddenAnim7_4 = this.add.sprite(this.map4.x+this.map4.width/2-150, this.map4.y+this.map4.height/2+130, 'Block-2_7A');
            this.hiddenAnim7_4.width = 79;
            this.hiddenAnim7_4.height = 72;    
            this.hiddenAnim7_4.inputEnabled = true;
            this.hiddenAnim7_4.events.onInputDown.add(this.playAnim, this)              
          
        */
            this.character = [];
            this.charScale = 0.45
            var characterKeys = [0,1,2,3,4,5,6,7,8,9]
            //console.log(locationKeys )
            for (let i = characterKeys.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [characterKeys[i], characterKeys[j]] = [characterKeys[j], characterKeys[i]];
            }      
            console.log(characterKeys )
            //this.location[0] =  locationKeys[0]
            //this.location[1] =  locationKeys[1]
            //this.location[2] =  locationKeys[2]
            //this.location[3] =  locationKeys[3]    
        
            for(var i =0; i < 10;i++){
              this.character[i] = this.add.sprite(200, 250, 'chibi-'+characterKeys[i]);
              this.character[i].width *= this.charScale;
              this.character[i].height *= this.charScale;      
              this.character[i].inputEnabled = true;
              this.character[i].events.onInputDown.add(this.onDown, this)       
                
                var randomValX = Math.floor(Math.random() *(this.game.width/2 * 2))-this.game.width/2;
                var randomValY = Math.floor(Math.random() *(this.game.height/2 * 2))-this.game.height/2;
              
               /* if(randomValX < -150){
                  randomValX = -150;
                }
              
                if(randomValX > this.game.width/2-200){
                  randomValX = this.game.width/2-200;
                }   
              
         
                if(randomValY < -150){
                  randomValY = -150;
                }
              
                if(randomValY > this.game.height/2-200){
                  randomValY = this.game.height/2-200;
                }     
              
                console.log("ID: "+i+" "+randomValX+" "+randomValY)
                this.character[i].x = this.game.width/2 - randomValX
                this.character[i].y = this.game.height/2 - randomValY      
                */
            }
            

            this.charBark = [];
            for(var i = 0; i < 10; i++){
              this.charBark[i] = this.add.audio('charBark-'+i);
            }            
            //character placement
            switch(this.stage){
               
              default:
                //bones
                this.character[0].x = 90
                this.character[0].y = 575          
                //bubbles
                this.character[1].x = 175
                this.character[1].y = 525                  
                //Donald
                this.character[2].x = 700
                this.character[2].y = 620                   
                //maas-gussy
                this.character[3].x = 600
                this.character[3].y = 575                   
                //jr
                this.character[4].x = 700
                this.character[4].y = 175                  
                //johnny-jr
                this.character[5].x = 620
                this.character[5].y = 225                  
                //johnny-snr
                this.character[6].x = 400
                this.character[6].y = 200                   
                //petal
                this.character[7].x = 300
                this.character[7].y = 200                 
                //sammy
                this.character[8].x = 100
                this.character[8].y = 155                   
                //zella                 
                this.character[9].x = 350
                this.character[9].y = 370   
                break;
            }
    
            this.overlay = this.add.sprite(this.game.width*2, 0, 'overlay');
            this.overlay.width = this.game.width;
            this.overlay.height = this.game.height;        
            this.overlay.alpha = 0;     
            this.overlay.inputEnabled = true;
            this.overlay.events.onInputDown.add(this.onDown2, this)    
            
            this.characterMessage = this.add.sprite(this.game.width/2, this.game.height/2+100, 'chat');
            this.characterMessage.anchor.setTo(0.5, 0.5);
            //this.characterMessage.width = this.game.width;
            //this.characterMessage.height = this.game.height;     
            this.characterMessage.alpha = 0;              
            
            this.characterMessageText = this.add.text(this.characterMessage.x-90, this.characterMessage.y-80, "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",{font:'LondrinaSolid-Black'});
            this.characterMessageText.fill= '#000';  
            this.characterMessageText.fontSize = 28;   
            this.characterMessageText.alpha = 0;
            this.characterMessageText.wordWrap = true;
            this.characterMessageText.wordWrapWidth = 350;             
          
            this.characterOverlay = this.add.sprite(this.game.width/2-250, this.game.height/2-250, 'kids');
            //this.characterOverlay.width = 200;
            //this.characterOverlay.height = 200;     
            this.characterOverlay.alpha = 0;
          
        
            this.bgSound = this.add.audio('menuMusic');
            //this.ping = this.add.audio('ping');

            if(!this.bgSound.isPlaying){
                this.bgSound.loop = true;
                this.bgSound.play();
                this.bgSound.volume = 0.5;
                //this.introCheck = true;
            }              
            this.chanceCountNum = 3;
            this.chanceCount = this.add.text(25, 25 ,this.chanceCountNum+"/3",{font:'LondrinaSolid-Black'});
            this.chanceCount.fill= '#000';
            this.chanceCount.fontSize = 30;
            this.chanceCount.stroke = '#fff';
            this.chanceCount.strokeThickness = 6;          
            //this.chanceCount.anchor.setTo(0.5, 0.5);             
            
            this.limeCount = this.add.sprite(25, 100, 'lime');
            this.limeCount.width = 25;
            this.limeCount.height = 25;        
            this.limeCount.alpha = 1;      
          
            this.limeCountNum = 0;
            this.limeCountText = this.add.text(50, 90, "x"+this.limeCountNum,{font:'LondrinaSolid-Black'});
            this.limeCountText.fill= '#000';
            this.limeCountText.fontSize = 30;
            this.limeCountText.stroke = '#fff';
            this.limeCountText.strokeThickness = 6;           
            //this.limeCountText.anchor.setTo(0.5, 0.5);             
          
            this.limeFound = this.add.sprite(this.game.width*2, 0, 'lime');
            this.limeFound.width = 25;
            this.limeFound.height = 25;        
            this.limeFound.alpha = 0;          
          
        }
        , update: function () {
            if(this.chanceCountNum <= 0){
               this.bgSound.stop();  
               this.game.state.start('lose');                 
            }
            this.chanceCount.text ="# of Chances: "+this.chanceCountNum+"/3"
            this.limeCountText.text = "x"+this.limeCountNum
            if(this.limeFound.alpha == 1){
              this.limeFound.x += (this.limeCount.x - this.limeFound.x) * 0.3;
              this.limeFound.y += (this.limeCount.y - this.limeFound.y) * 0.3;
              if(this.limeFound.x == this.limeCount.x){
                   this.limeFound.alpha = 0;
              }
                 
            }
            
        }
        , playAnim: function (anim) {

          var keyName = ""+anim.key
          
          var lastChar = keyName.slice(keyName.length-1);
          console.log(lastChar)
          
          keyName = keyName.slice(0, -1);
          if(lastChar.localeCompare("A") == 0){
            if(parseInt(localStorage.getItem("Got"+anim.key)) != 1){
              this.limeFound.alpha = 1;
              this.limeFound.x = anim.x
              this.limeFound.y = anim.y   
              this.limeCountNum++            
              localStorage.setItem("Got"+anim.key, 1)
            }

            keyName = keyName+"B"
          }
          else{
            keyName = keyName+"A"
          }
          //keyName = keyName+"B"
          anim.loadTexture(keyName)
          console.log(keyName);
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
        this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       

        }      
        , onDown: function (char) {
          
          this.overlay.alpha = 1
          this.overlay.x = 0;
          
          var charName = ""+char.key
          var lastChar = parseInt(charName.slice(charName.length-1));
          this.clickChar = lastChar
          console.log(this.clickChar)
          //this.characterOverlay.alpha = 1;
          this.characterMessage.alpha = 1;
          this.characterMessageText.alpha = 1
          this.characterMessage.loadTexture("popUp-"+lastChar)
          this.charBark[lastChar].play();
          switch(this.stage){
            case 0:
              switch(lastChar){
                case 0:
                  this.characterMessageText.text = "Is me you looking for?";
                  break;
                case 1:
                  this.characterMessageText.text = "You have to watch your back with that fellow.";
                  break;
                case 2:
                  this.characterMessageText.text = "Oi, him nuh too long just drop me yah so.";
                  break;
                case 3:
                  this.characterMessageText.text = "Someting not right about that bwoy.";
                  break;
                case 4:
                  this.characterMessageText.text = "Uncle Bones taxi nice fi play inna!";
                  break;
                case 5:
                  this.characterMessageText.text = "A mi doops dat, him gone tek on the road.";
                  break;   
                case 6:
                  this.characterMessageText.text = "Him nearly tek mi home yesterday with him bad driving  and I not talking Lime Tree Lane.";
                  break;
                case 7:
                  this.characterMessageText.text = "Uncle Bones taxi drive fas enuh!";
                  break;
                case 8:
                  this.characterMessageText.text = "Dat teifing bwoy, mi nah tek him taxi again.";
                  break;
                case 9:
                  this.characterMessageText.text = "Bones? Be careful of the company that you keep, mi child.";
                  break;                
              }
              break;
            case 3:
              switch(lastChar){
                //bones  
                case 0:
                  this.characterMessageText.text = "Me ah him keeper?";
                  break;
                //bubbles                
                case 1:
                  this.characterMessageText.text = "That sweet old man, I wonder if him have nuh thread down by the shop.";
                  break;            
                //Donald                   
                case 2:
                  this.characterMessageText.text = "Di elder leff me wid one bag ah work and gone bout him business.";
                  break;               
                //maas-gussy                 
                case 3:
                  this.characterMessageText.text = "Yuh need mi fi supm?";
                  break;                
                //jr                     
                case 4:
                  this.characterMessageText.text = "Nuh tell him seh yuh see mi, ah beg mi beg teacher ah let out.";
                  break;         
                //johnny-jr              
                case 5:
                  this.characterMessageText.text = "Mas Gussy, ago tell mi fi go read mi book and ah ramping time now. Don't tell teacher.";
                  break;                    
                //johnny-snr                  
                case 6:
                  this.characterMessageText.text = "We ah family yes, but mi nuh know every move weh the man mek.";
                  break;                   
                //petal                    
                case 7:
                  this.characterMessageText.text = "Shhh! Yuh neva see mi, ah beg mi beg teacher ah let out.";
                  break;            
                //sammy                  
                case 8:
                  this.characterMessageText.text = "Maas Gussy, nuh tell him seh you see me, for mi bill nuh pay yet.";
                  break;             
                //zella                    
                case 9:
                  this.characterMessageText.text = "Bones? Be careful of the company that you keep, mi child.";
                  break;                
              }
              break;   
            case 9:
              switch(lastChar){
                //bones  
                case 0:
                  this.characterMessageText.text = "Wrong person yuh come to, me and that old woman cyah gree.";
                  break;
                //bubbles                
                case 1:
                  this.characterMessageText.text = "Hm cake, yuh know what dem say, wah sweet nanny goat ago run him belly";
                  break;            
                //Donald                   
                case 2:
                  this.characterMessageText.text = "Miss Zella, nuh mussi deh wid har husband.";
                  break;               
                //maas-gussy                 
                case 3:
                  this.characterMessageText.text = "Me is not a gossippa, you know, sar.";
                  break;                
                //jr                     
                case 4:
                  this.characterMessageText.text = "Granny Zella! Strange people ah talk to i!";
                  break;         
                //johnny-jr              
                case 5:
                  this.characterMessageText.text = "What is yuh business wid mi Granny Zella?";
                  break;                    
                //johnny-snr                  
                case 6:
                  this.characterMessageText.text = "Is Granny Zella sen you? She always checking in on me, from mi likkle to even now.";
                  break;                   
                //petal                    
                case 7:
                  this.characterMessageText.text = "Granny Zella! Strange people ah talk to mi!";
                  break;            
                //sammy                  
                case 8:
                  this.characterMessageText.text = "Yes man, but yuh cyah gimme a likkle roast?";
                  break;             
                //zella                    
                case 9:
                  this.characterMessageText.text = "Yes, dear?";
                  break;                
              }
              break;              
          }
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
        this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       

        }
        , onDown2: function () {
          console.log(this.stage+" "+this.clickChar)
          this.chanceCountNum--;
          if(this.clickChar == this.stage){
           this.bgSound.stop();  
           this.game.state.start('win');            
          }
          this.overlay.x = this.game.width*2;
          this.characterOverlay.alpha = 0;
          this.characterMessage.alpha = 0;
          this.characterMessageText.alpha = 0;
        /*var user = firebase.auth().currentUser;

        if (user) {
        // User is signed in.
        this.game.state.start('game');
        } else {
        // No user is signed in.
        } */       

        }        
      
          
        
    };
    window['simplewar'] = window['simplewar'] || {};
    window['simplewar'].Game = Game;
}());