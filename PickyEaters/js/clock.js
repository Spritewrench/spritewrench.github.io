function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0 ) {
      clearInterval(timeinterval);
      document.getElementById("instruction").innerHTML = "TIME'S UP"; 
      $( "input" ).hide();    
      $( "#entry0" ).hide();  
      stopClock();
      var audio = new Audio('aww.wav');
      audio.play();      

      localStorage.setItem("dailyLog",d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getUTCFullYear())  
      localStorage.setItem("lost",1)
      //const t = getTimeRemaining(deadline);
      var shareText = document.getElementById("petType").innerHTML+" "+key+"/"+keyLimit+" @ "+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2);  
      if(localStorage.getItem("shareText") === null){
          localStorage.setItem("shareText", document.getElementById("petType").innerHTML+" "+key+"/"+keyLimit+" @ "+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2) )
          localStorage.setItem("time"+t.minutes,parseInt(localStorage.getItem("time"+t.minutes) )+1)
      }   
      else{
          shareText = localStorage.getItem("shareText")// document.getElementById("petType").innerHTML+" "+key+"/"+keyLimit+" @ "+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2);
      } 

      Swal.fire({
        title: 'The Day is Lost!',
        text: 'The Town is Destroyed. Better luck tomorrow!',
        icon: 'error',
        html: '<canvas id="myChart" width="200" height="200"></canvas>',
        showDenyButton: true,
        denyButtonText: 'Share',
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#d33',
        confirmButtonText: 'Continue'
        }).then((result) => {
            if(result.isConfirmed) {
                const t = getTimeRemaining(deadline);
                var shareText = document.getElementById("petType").innerHTML+" "+key+"/"+keyLimit+" @ "+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2); 
                if (localStorage.getItem("shareText") == null) {
                    var shareText = document.getElementById("petType").innerHTML+" "+key+"/"+keyLimit+" @ "+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2); 
                    localStorage.setItem("shareText",shareText)
                    
                }  
                else{
                    shareText = localStorage.getItem("shareText")// document.getElementById("petType").innerHTML+" "+key+"/"+keyLimit+" @ "+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2); 
                }
            }
            if(result.isDenied) {
                const t = getTimeRemaining(deadline);
            
                var shareText = document.getElementById("petType").innerHTML+" "+key+"/"+keyLimit+" @ "+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2); 
                if (localStorage.getItem("shareText") == null) {
                    var shareText = document.getElementById("petType").innerHTML+" "+key+"/"+keyLimit+" @ "+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2); 
                    localStorage.setItem("shareText",shareText)
                    //localStorage.setItem("time"+t.minutes,parseInt(localStorage.getItem("time"+t.minutes) )+1)
                }  
                else{
                    shareText = localStorage.getItem("shareText")// document.getElementById("petType").innerHTML+" "+key+"/"+keyLimit+" @ "+('0' + t.minutes).slice(-2)+":"+('0' + t.seconds).slice(-2); 
                }
                navigator.clipboard.writeText(shareText);
                Swal.fire(
                'Copied results to clipboard',
                '',
                'success'
                )
            }                        
        })
        makeChart();           
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

function stopClock(){


    var max = setTimeout(function(){ /* Empty function */ },1);
    
            for (var i = 1; i <= max ; i++) {
                window.clearInterval(i);
                window.clearTimeout(i);
                if(window.mozCancelAnimationFrame)window.mozCancelAnimationFrame(i); // Firefox
            }
}
