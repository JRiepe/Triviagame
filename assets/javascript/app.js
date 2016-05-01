// Javascript Star Wars RPG
function startGame() {
	

    // VARIABLES
    // ====================================================================
    // Here we create variables for tracking the number of sandwiches eaten
    var lukePower = 100;
    var lukeStartValue=8;
    var obiPower = 120;
    var obiStartValue=12;
    var kyloPower = 150;
    var kyloStartValue=20;
    var darthPower = 180;
    var darthStartValue=25;
    var yourFighter;
    var yourEnemy='';
    
    var attackPower=0;
    var enemyPower=0;
    
    $('#lukePower').html(lukePower);
    $('#obiPower').html(obiPower);
    $('#darthPower').html(darthPower);
    $('#kyloPower').html(kyloPower);


    // FUNCTIONS
    // ====================================================================
    // Here we create various on "click" functions which capture the clicks
    // Inside each click event is the code to create an alert, update the counter, then show the updated count.
 
 /* Choose Luke */

    $("#luke").on("click", function(){
            yourFighter='luke';
            $('#firstChoice').replaceWith('');
            attackPower=8;
            $('#yourChar').after('<div id ="yourCharacter"></div>');
            $('#yourCharacter').append('<div>Luke Skywalker</div>');
            $('#yourCharacter').append('<img src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
            $('#yourCharacter').append('<div id="lukePower"></div>');
            $('#lukePower').html(lukePower);
            yourEnemies();
                              
    }) /* end luke click */

    
/* Choose Obi-Wan */

    $("#obi-wan").on("click", function(){
            yourFighter='obi-wan';
            $('#firstChoice').replaceWith('');
            attackPower=12;
            $('#yourChar').after('<div id ="yourCharacter"></div>');
            $('#yourCharacter').append('<div>Obi-Wan Kenobi</div>');
            $('#yourCharacter').append('<img src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
            $('#yourCharacter').append('<div id="obiPower"></div>');
            $('#obiPower').html(obiPower);
            yourEnemies();
    }) /* end obi-wan click */

 

/* Choose Darth Vader */

    $("#darth").on("click", function(){
            yourFighter='darth';
            $('#firstChoice').replaceWith('');
            attackPower=25;
            $('#yourChar').after('<div id ="yourCharacter"></div>');
            $('#yourCharacter').append('<div>Darth Vader</div>');
            $('#yourCharacter').append('<img src="assets/images/darth-vader.png" width=150px height=150px><br>');
            $('#yourCharacter').append('<div id="darthPower"></div>');
            $('#darthPower').html(darthPower);
            yourEnemies();
        
    }) /* end darth click */

  
/* Choose Kylo Ren */

    $("#kylo").on("click", function(){
            yourFighter='kylo';
            $('#firstChoice').replaceWith('');
            attackPower=20;
            $('#yourChar').after('<div id ="yourCharacter"></div>');
            $('#yourCharacter').append('<div>Kylo Ren</div>');
            $('#yourCharacter').append('<img src="assets/images/kylo-ren.png" width=150px height=150px><br>');
            $('#yourCharacter').append('<div id="kyloPower"></div>');
            $('#kyloPower').html(kyloPower);
            yourEnemies();
        
    }) /* end kylo click */

    


    


/* function to add enemies to html */


function yourEnemies()  {
    
    if (yourFighter=='luke')   {

        $('#yourEnemy').append('<div id ="enemy2"></div>');
        $('#enemy2').append('<div>Obi-Wan Kenobi</div>');
        $('#enemy2').append('<img id = "obi-wan2" src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
        $('#enemy2').append(obiPower);

        $('#yourEnemy').append('<div id ="enemy3"></div>');
        $('#enemy3').append('<div>Darth Vader</div>');
        $('#enemy3').append('<img id = "darth2" src="assets/images/darth-vader.png" width=150px height=150px><br>');
        $('#enemy3').append(darthPower);


        $('#yourEnemy').append('<div id ="enemy4"></div>');
        $('#enemy4').append('<div>Kylo Ren</div>');
        $('#enemy4').append('<img id = "kylo2" src="assets/images/kylo-ren.png" width=150px height=150px><br>');
        $('#enemy4').append(kyloPower); 


    }   /* end  if luke */


    if (yourFighter=='obi-wan')    {

        $('#yourEnemy').append('<div id ="enemy1"></div>');
        $('#enemy1').append('<div>Luke Skywalker</div>');
        $('#enemy1').append('<img id = "luke2" src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
        $('#enemy1').append(lukePower);

        
        $('#yourEnemy').append('<div id ="enemy3"></div>');
        $('#enemy3').append('<div>Darth Vader</div>');
        $('#enemy3').append('<img id = "darth2" src="assets/images/darth-vader.png" width=150px height=150px><br>');
        $('#enemy3').append(darthPower);

        $('#yourEnemy').append('<div id ="enemy4"></div>');
        $('#enemy4').append('<div>Kylo Ren</div>');
        $('#enemy4').append('<img id = "kylo2" src="assets/images/kylo-ren.png" width=150px height=150px><br>');
        $('#enemy4').append(kyloPower);


    } /* end  if obi-wan */

    if (yourFighter=='darth')    {

        $('#yourEnemy').append('<div id ="enemy1"></div>');
        $('#enemy1').append('<div>Luke Skywalker</div>');
        $('#enemy1').append('<img id = "luke2" src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
        $('#enemy1').append(lukePower);

        $('#yourEnemy').append('<div id ="enemy2"></div>');
        $('#enemy2').append('<div>Obi-Wan Kenobi</div>');
        $('#enemy2').append('<img id = "obi-wan2" src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
        $('#enemy2').append(obiPower);

        $('#yourEnemy').append('<div id ="enemy4"></div>');
        $('#enemy4').append('<div>Kylo Ren</div>');
        $('#enemy4').append('<img id = "kylo2" src="assets/images/kylo-ren.png" width=150px height=150px><br>');
        $('#enemy4').append(kyloPower);

    } /* end  if darth */

    if (yourFighter=='kylo')    {

        $('#yourEnemy').append('<div id ="enemy1"></div>');
        $('#enemy1').append('<div>Luke Skywalker</div>');
        $('#enemy1').append('<img id = "luke2" src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
        $('#enemy1').append(lukePower);

        $('#yourEnemy').append('<div id ="enemy2"></div>');
        $('#enemy2').append('<div>Obi-Wan Kenobi</div>');
        $('#enemy2').append('<img id = "obi-wan2" src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
        $('#enemy2').append(obiPower);

        $('#yourEnemy').append('<div id ="enemy3"></div>');
        $('#enemy3').append('<div>Darth Vader</div>');
        $('#enemy3').append('<img id = "darth2" src="assets/images/darth-vader.png" width=150px height=150px><br>');
        $('#enemy3').append(darthPower);
       

    } /* end  if kylo */

    $("#luke2").on("click", function(){
            if (!yourEnemy) {
                yourEnemy='luke';
                $('#enemy1').replaceWith('');
                enemyPower=8;
                $('#defender').after('<div id ="enemyFighter"></div>');
                $('#enemyFighter').append('<div>Luke Skywalker</div>');
                $('#enemyFighter').append('<img src="assets/images/luke-skywalker.png" width=150px height=150px><br>');
                $('#enemyFighter').append('<div id="lukePower"></div>');
                $('#lukePower').html(lukePower);
                attack();
            } /* end if (yourEnemy =="") */
        
    }) /* end luke2 (enemy) click */

    $("#obi-wan2").on("click", function(){
            if (!yourEnemy) {
                yourEnemy='obi-wan';
                $('#enemy2').replaceWith('');
                enemyPower=12;
                $('#defender').after('<div id ="enemyFighter"></div>');
                $('#enemyFighter').append('<div>Obi-Wan Kenobi</div>');
                $('#enemyFighter').append('<img src="assets/images/obi-wan-kenobi.png" width=150px height=150px><br>');
                $('#enemyFighter').append('<div id="obiPower"></div>');
                $('#obiPower').html(obiPower);
                attack();
            } /* end if (yourEnemy =="") */
    }) /* end obi-wan2 (enemy) click */

    $("#darth2").on("click", function(){
            if (!yourEnemy) {
                yourEnemy='darth';
                $('#enemy3').replaceWith('');
                enemyPower=25;
                $('#defender').after('<div id ="enemyFighter"></div>');
                $('#enemyFighter').append('<div>Darth Vader</div>');
                $('#enemyFighter').append('<img src="assets/images/darth-vader.png" width=150px height=150px><br>');
                $('#enemyFighter').append('<div id="darthPower"></div>');
                $('#darthPower').html(darthPower);
                attack();
            } /* end if (yourEnemy =="") */
        
    }) /* end darth2 (enemy) click */

    $("#kylo2").on("click", function(){
            if (!yourEnemy) {
                yourEnemy='kylo';
                $('#enemy4').replaceWith('');
                enemyPower=20;
                $('#defender').after('<div id ="enemyFighter"></div>');
                $('#enemyFighter').append('<div>Kylo Ren</div>');
                $('#enemyFighter').append('<img src="assets/images/kylo-ren.png" width=150px height=150px><br>');
                $('#enemyFighter').append('<div id="kyloPower"></div>');
                $('#kyloPower').html(kyloPower);
                attack();
            } /* end if (yourEnemy =="") */
    }) /* end obi-wan2 (enemy) click */




} /* end of function yourEnemies() */

/* Begin function attack() */ 
 function attack() {
    $('#attackButton').on("click", function(){
            
            if (yourFighter == 'luke' && yourEnemy == 'obi-wan'){
               
                    lukePower=(lukePower-enemyPower);
                    obiPower=(obiPower-attackPower);
                    $('#lukePower').html(lukePower);
                    $('#obiPower').html(obiPower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Obi-Wan Kenobi');
                    if (lukePower <= 0 || obiPower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (lukePower <=0 && obiPower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (lukePower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (obiPower <=0) {
                            if (obiPower<=0 && darthPower<=0 && kyloPower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                $('#endGame').html('<button id="resetButton">Reset</button>');
                                yourEnemy="";
                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                            }
                    } /* end if (lukePower<=0 || obiPower<=0) */
                    attackPower=attackPower+8;
                     
            } /* end if (yourFighter=='luke') && (yourEnemy=='obi-wan') */

            else if (yourFighter=='luke' && yourEnemy=='darth'){
                    lukePower=(lukePower-enemyPower);
                    darthPower=(darthPower-attackPower);
                    $('#lukePower').html(lukePower);
                    $('#darthPower').html(darthPower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Darth Vader');
                    if (lukePower <= 0 || darthPower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (lukePower <=0 && darthPower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (lukePower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (darthPower <=0) {
                            if (obiPower<=0 && darthPower<=0 && kyloPower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                                $('#endGame').html('<button id="resetButton">Reset</button>');

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (lukePower<=0 || darthPower<=0) */
                    attackPower=attackPower+8;
            } /* end if if (yourFighter=='luke') && (yourEnemy=='darth') */
            
            else if (yourFighter=='luke' && yourEnemy=='kylo'){

                    lukePower=(lukePower-enemyPower);
                    kyloPower=(kyloPower-attackPower);
                    $('#lukePower').html(lukePower);
                    $('#kyloPower').html(kyloPower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Kylo Ren');
                    if (lukePower <= 0 || kyloPower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (lukePower <=0 && kyloPower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (lukePower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (obiPower <=0) {
                            if (obiPower<=0 && darthPower<=0 && kyloPower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                                $('#endGame').html('<button id="resetButton">Reset</button>');

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (lukePower<=0 || obiPower<=0) */
                    attackPower=attackPower+8;

            } /* end if (yourFighter=='luke') && (yourEnemy=='kylo') */

              
            else if (yourFighter=='obi-wan' && yourEnemy=='luke'){

                    obiPower=(obiPower-enemyPower);
                    lukePower=(lukePower-attackPower);
                    $('#obiPower').html(obiPower);
                    $('#lukePower').html(lukePower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Luke Skywalker');
                    if (obiPower <= 0 || lukePower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (obiPower <=0 && lukePower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                            yourEnemy="";
                        }
                        
                        if (obiPower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                            yourEnemy="";
                        }
                        
                        if (lukePower <=0) {
                            if (lukePower<=0 && darthPower<=0 && kyloPower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                $('#endGame').html('<button id="resetButton">Reset</button>');
                                yourEnemy="";

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (obiPower<=0 || lukePower<=0) */
                    
                    attackPower=attackPower+12;

            }/* end if (yourFighter=='obi-wan') && (yourEnemy=='luke') */ 

            else if (yourFighter=='obi-wan' && yourEnemy=='darth'){

                    obiPower=(obiPower-enemyPower);
                    darthPower=(darthPower-attackPower);
                    $('#obiPower').html(obiPower);
                    $('#darthPower').html(darthPower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Darth Vader');
                    if (obiPower <= 0 || darthPower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (obiPower <=0 && darthPower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (obiPower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (darthPower <=0) {
                            if (lukePower<=0 && darthPower<=0 && kyloPower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                                $('#endGame').html('<button id="resetButton">Reset</button>');

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (lukePower<=0 || obiPower<=0) */
                    
                    attackPower=attackPower+12;

            }/* end if (yourFighter=='obi-wan') && (yourEnemy=='darth') */ 

            else if (yourFighter=='obi-wan' && yourEnemy=='kylo'){

                    obiPower=(obiPower-enemyPower);
                    kyloPower=(kyloPower-attackPower);
                    $('#obiPower').html(obiPower);
                    $('#kyloPower').html(kyloPower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Kylo Ren');
                    if (obiPower <= 0 || kyloPower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (obiPower <=0 && kyloPower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (obiPower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (kyloPower <=0) {
                            if (lukePower<=0 && darthPower<=0 && kyloPower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                                $('#endGame').html('<button id="resetButton">Reset</button>');

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (obiPower<=0 || kyloPower<=0) */
                    
                    attackPower=attackPower+12;

            }/* end if (yourFighter=='obi-wan') && (yourEnemy=='kylo') */ 

            else if (yourFighter=='darth' && yourEnemy=='luke'){
                    darthPower=(darthPower-enemyPower);
                    lukePower=(lukePower-attackPower);
                    $('#darthPower').html(darthPower);
                    $('#lukePower').html(lukePower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Luke Skywalker');
                    if (darthPower <= 0 || lukePower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                       
                        
                        if (darthPower <=0 && lukePower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (darthPower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (lukePower <=0) {
                            if (obiPower<=0 && lukePower<=0 && kyloPower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                                $('#endGame').html('<button id="resetButton">Reset</button>');

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (darthPower<=0 || lukePower<=0) */
                    
                    attackPower=attackPower+25;

            }/* end if (yourFighter=='darth') && (yourEnemy=='luke') */ 

            else if (yourFighter=='darth' && yourEnemy=='obi-wan'){
                    darthPower=(darthPower-enemyPower);
                    obiPower=(obiPower-attackPower);
                    $('#darthPower').html(darthPower);
                    $('#obiPower').html(obiPower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Obi-Wan Kenobi');
                    if (darthPower <= 0 || obiPower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (darthPower <=0 && obiPower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (darthPower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (obiPower <=0) {
                            if (obiPower<=0 && lukePower<=0 && kyloPower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                                $('#endGame').html('<button id="resetButton">Reset</button>');

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (darthPower<=0 || obiPower<=0) */
                    
                    attackPower=attackPower+25;

            }/* end if (yourFighter=='darth') && (yourEnemy=='obi-wan') */ 

            else if (yourFighter=='darth' && yourEnemy=='kylo'){

                    darthPower=(darthPower-enemyPower);
                    kyloPower=(kyloPower-attackPower);
                    $('#darthPower').html(darthPower);
                    $('#kyloPower').html(kyloPower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Kylo Ren');
                    if (darthPower <= 0 || kyloPower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (darthPower <=0 && kyloPower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (darthPower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (kyloPower <=0) {
                            if (obiPower<=0 && lukePower<=0 && kyloPower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                             $('#endGame').html('<button id="resetButton">Reset</button>');

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (darthPower<=0 || kyloPower<=0) */
                    
                    attackPower=attackPower+25;

            }/* end if (yourFighter=='darth') && (yourEnemy=='kylo') */ 

            else if (yourFighter=='kylo' && yourEnemy=='luke'){

                    kyloPower=(kyloPower-enemyPower);
                    lukePower=(lukePower-attackPower);
                    $('#kyloPower').html(kyloPower);
                    $('#lukePower').html(lukePower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Luke Skywalker');
                    if (kyloPower <= 0 || lukePower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (kyloPower <=0 && lukePower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (kyloPower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (lukePower <=0) {
                            if (obiPower<=0 && darthPower<=0 && lukePower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                                $('#endGame').html('<button id="resetButton">Reset</button>');

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (kyloPower<=0 || lukePower<=0) */
                    
                    attackPower=attackPower+20;

            }/* end if (yourFighter=='kylo') && (yourEnemy=='luke') */ 
            
             else if (yourFighter=='kylo' && yourEnemy=='obi-wan'){

                    kyloPower=(kyloPower-enemyPower);
                    obiPower=(obiPower-attackPower);
                    $('#kyloPower').html(kyloPower);
                    $('#obiPower').html(obiPower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Obi-Wan Kenobi');
                    if (kyloPower <= 0 || obiPower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (kyloPower <=0 && obiPower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (kyloPower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (obiPower <=0) {
                            
                            if (obiPower<=0 && darthPower<=0 && lukePower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                                $('#endGame').html('<button id="resetButton">Reset</button>');

                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        }
                    } /* end if (kyloPower<=0 || obiPower<=0) */
                    
                    attackPower=attackPower+20;

            }/* end if (yourFighter=='kylo') && (yourEnemy=='obi-wan') */ 

             else if (yourFighter=='kylo' && yourEnemy=='darth'){

                    kyloPower=(kyloPower-enemyPower);
                    darthPower=(darthPower-attackPower);
                    $('#kyloPower').html(kyloPower);
                    $('#darthPower').html(darthPower);
                    $('#attackLine1').html('<p>You suffered '+enemyPower+' damage points</p>');
                    $('#attackLine2').html('<p>You inflicted '+attackPower+' on Darth Vader');
                    if (kyloPower <= 0 || darthPower <= 0) {
                        
                        $('#enemyFighter').replaceWith('');
                        
                        
                        if (kyloPower <=0 && darthPower <= 0){

                            $('#attackLine1').html('<p>You both died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (kyloPower <=0) {
                            $('#attackLine1').html('<p>You died valiantly in Battle!</p>');
                            $('#attackLine2').html('<p>Press the Reset Button to play again!</p>');
                            yourEnemy="";
                            $('#endGame').html('<button id="resetButton">Reset</button>');
                        }
                        
                        if (darthPower <=0) {
                            if (obiPower<=0 && darthPower<=0 && lukePower<=0) {
                                $('#attackLine1').html('<p>Congratulations! You have Won!</p>');
                                $('#attackLine2').html('<p>Click on Reset  to battle again!</p>');
                                yourEnemy="";
                                $('#endGame').html('<button id="resetButton">Reset</button>');
                            }
                            else {
                                $('#attackLine1').html('<p>You have defeated your opponenet!</p>');
                                $('#attackLine2').html('<p>Click on another enemy to battle them!</p>');
                                yourEnemy="";
                                }
                        } /* darth<=0 */
                    } /* end if (kyloPower<=0 || darthPower<=0) */
                    
                    attackPower=attackPower+20;

            }/* end if (yourFighter=='kylo') && (yourEnemy=='darth') */ 

            /* reset button */

            $("#resetButton").on("click", function(){
                    location.reload();
                    
                
            }) /* end reset button click */

    }) /* end  click attackButton */            
            
            



}    /* end function attack() */

    



} //end startGame()

