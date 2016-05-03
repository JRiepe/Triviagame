// Javascript Star Wars RPG
function startGame() {
	
    // VARIABLES
    // ====================================================================







    var number = 20;
    $('#countDown').html('<h2>Time Remaining: <p id="numb">' + number + '</p> seconds</h2>');
    $('#theButton').on('click', start);
    

    function start(){
        if (number===20) {
            counter = setInterval(decrement, 1000);
        }
           
    }
    function decrement(){
      number--;
      $('#countDown').html('<h2>Time Remaining: <p id="numb">' + number + '</p> seconds</h2>');
      if (number === 0){
        stop();
        alert('Time Up!')
      }
    }

    function stop(){
      clearInterval(counter);
    }
    
    
} /* end StartGame() */