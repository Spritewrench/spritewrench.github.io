 try{
    //var gui = require('nw.gui');
        //      var win = gui.Window.get();

    document.addEventListener('keydown', function (event) {
            console.log(event.keyCode)
              //disable backspace
            if (event.keyCode == 8) {
                event.preventDefault();
            }
            //disable alt+ enter
            if(event.altKey && event.keyCode == 13){
                event.preventDefault();
            }
            //disable shift
            if(event.keyCode == 16){
                event.preventDefault();
            }       
            //disable tab
            if(event.keyCode == 9){
                event.preventDefault();
            }     
            //esc to close
            if(event.keyCode == 27){

                //win.toggleKioskMode();
                //win.width = 750;
                //win.height = 700;

                //win.close();

            }
          });       
 }   
catch (error){
  console.log(error)
}

  
