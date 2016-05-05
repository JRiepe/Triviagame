// Javascript Trivia Game
	


    function startGame(){

    // start variables declaration
              var rightAns=0;
              var wrongAns=0;
              var noAns=0;
              var i=0;
              var timer;
              var counter;
              var compAns
              var number=20;
              clearInterval(counter);
              clearTimeout(timer);
              var number=20;
              $('#countDown').html('Time Remaining: ' + number + ' seconds');
              var triviaGame = [
              {
              question: "Which Artist painted 'Mona Lisa'",
              answer1: "Vincent Van Gogh",
              answer2: "Leonardo daVinci",
              answer3: "Grandma Moses",
              answer4: "Salvador Dali",
              correctAnswer: "Leonardo daVinci",
              answerUrl: "<img src='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=0ahUKEwjGztmN_8DMAhXBPiYKHSaMAwsQjRwIBw&url=http%3A%2F%2Fwww.wikiart.org%2Fen%2Fleonardo-da-vinci%2Fmona-lisa&psig=AFQjCNH_hVfZkbVuu7Ya6YE6rBF2XXaTvA&ust=1462470979765373'>"
               },

              {
              question: "Which Artist painted 'Starry Nights'",
              answer1: "Vincent Van Gogh",
              answer2: "Salvador Dali",
              answer3: "Grandma Moses",
              answer4: "Rembrandt",
              correctAnswer: "Vincent Van Gogh",
              answerUrl: ""
               },

              {
              question: "Which Artist painted 'The Scream'",
              answer1: "Rembrandt",
              answer2: "Salvador Dali",
              answer3: "Pablo Picasso",
              answer4: "Edvard Munch",
              correctAnswer: "Edvard Munch",
              answerUrl: ""
              },
          
              {
              question: "Which Artist painted 'The Night Watch'",
              answer1: "Rembrandt",
              answer2: "Grandma Moses",
              answer3: "Pablo Picasso",
              answer4: "Edvard Munch",
              correctAnswer: "Rembrandt",
              answerUrl: ""
              },

              {
              question: "Which Artist painted 'American Gothic'",
              answer1: "Georges Seurat",
              answer2: "Grant Wood",
              answer3: "Johannes Vermeer",
              answer4: "Edvard Munch",
              correctAnswer: "Grant Wood",
              answerUrl: ""
              },


              {
              question: "Which Artist painted 'The Weeping Woman'",
              answer1: "Leonardo daVinci",
              answer2: "Grant Wood",
              answer3: "Johannes Vermeer",
              answer4: "Pablo Picasso",
              correctAnswer: "Pablo Picasso",
              answerUrl: ""
              },

              {
              question: "Which Artist painted 'Guernica'",
              answer1: "Leonardo daVinci",
              answer2: "Pablo Picasso",
              answer3: "Georges Seurat",
              answer4: "Grandma Moses",
              correctAnswer: "Pablo Picasso",
              answerUrl: ""
              },

              {
              question: "Which Artist painted 'The Persistence of Memory'",
              answer1: "Edvard Munch",
              answer2: "Pablo Picasso",
              answer3: "Salvador Dali",
              answer4: "Grandma Moses",
              correctAnswer: "Salvador Dali",
              answerUrl: ""
              },

              {
              question: "Which Artist painted 'A Sunday Afternoon on the Island of LaGrande Jatte'",
              answer1: "Georges Seurat",
              answer2: "Rembrandt",
              answer3: "Salvador Dali",
              answer4: "Johannes Vermeer",
              correctAnswer: "Georges Seurat",
              answerUrl: ""
              },
          

              {
              question: "Which Artist painted 'Girl with  Pearl Earring'",
              answer1: "Georges Seurat",
              answer2: "Pablo Picasso",
              answer3: "Georges Seurat",
              answer4: "Johannes Vermeer",
              correctAnswer: "Johannes Vermeer",
              answerUrl: ""
              }

          ];  /* end var triviaGame */


 // end variables

// first button -start game
              
               $('#buttonPlace').on('click', screenReDo);
                  
              
// function start()
              function start(){               
                    counter = setInterval(decrement, 1000);

              }
// end function start() 

// function decrement()
              function decrement(){
                    number--;
                    $('#countDown').html('Time Remaining: ' + number + ' seconds');
                    if (number === 0){
                        /* stop(); */
                        alert('Time is Up!');
                        clearInterval(counter);
                        noAns++;
                        number=20;
                        i++;                  
                        timer=setTimeout(screenReDo,1000*3)
                        
                    }
              }
//end function decrement() 
                  
                  

               function screenReDo() {
                  if (i<triviaGame.length) {
                      console.log('i= '+i+' right: '+rightAns+' wrong: '+wrongAns+' No Ans: '+noAns+' number: '+number+' ');
                        $('#countDown').html('Time Remaining: ' + number + ' seconds');
                        start();
                        $('#buttonPlace').html('');
                        $('#question').html('<br>'+triviaGame[i].question+'<br>');
                        $('#ans1').html('<div id ="answer">'+triviaGame[i].answer1+'</div><br>');
                        $('#ans2').html('<div id ="answer">'+triviaGame[i].answer2+'</div><br>');
                        $('#ans3').html('<div id ="answer">'+triviaGame[i].answer3+'</div><br>');
                        $('#ans4').html('<div id ="answer">'+triviaGame[i].answer4+'</div><br>');  
                  }
                  else  {
                        
                        $('#question').html('<br>Press Start to Play Again!<br>');
                        $('#ans1').html('Right Answers: '+rightAns);
                        $('#ans2').html('Wrong Answers: '+wrongAns);
                        $('#ans3').html('No Answers: '+noAns);
                        $('#ans4').html('')
                        $('#buttonPlace').html('<button>Play Again</button>');
                        $('#buttonPlace').on('click', startGame);;
                  }
                } /* end screenReDo() */


                  
    // on click functions

                        $('#ans1').on('click', function() {
                               
                            if (triviaGame[i].answer1 === triviaGame[i].correctAnswer) {
                                rightAns++;
                                $('#question').html('<br>Correct!<br>');
                                $('#ans1').html('');
                                $('#ans2').html('');                                    
                                
                            }
                        
                            else {
                                wrongAns++;
                                $('#question').html('<br>Wrong Answer!<br>');
                                $('#ans1').html('<br>The Correct answer is '+triviaGame[i].correctAnswer+'<br>');
                                $('#ans2').html('');
                                
                            }
                                
                            $('#ans3').html('');
                            $('#ans4').html('');
                            $('#imageUrl').html(triviaGame[i].imageUrl)
                    
                            clearInterval(counter);
                            clearTimeout(timer);
                            number=20;
                            i++;
                            timer=setTimeout(screenReDo,1000*3);
                            
                        })

                        $('#ans2').on('click', function() {
                            if (triviaGame[i].answer2 === triviaGame[i].correctAnswer) {
                                rightAns++;
                                $('#question').html('<br>Correct!<br>');
                                $('#ans1').html('');
                                $('#ans2').html('');
                                   
                            }
                            
                            else {
                                wrongAns++;
                                $('#question').html('<br>Wrong Answer!<br>');
                                $('#ans1').html('<br>The Correct answer is '+triviaGame[i].correctAnswer+'<br>');
                                $('#ans2').html('');
                                   
                            }
                            
                            $('#ans3').html('');
                            $('#ans4').html('');
                            $('#imageUrl').html(triviaGame[i].imageUrl)
                            
                            
                            clearInterval(counter);
                            clearTimeout(timer);
                            number=20;
                            i++;
                            timer = setTimeout(screenReDo,1000*3);
                            
                        })
                
                            
                        $('#ans3').on('click', function() {
                            if (triviaGame[i].answer3 === triviaGame[i].correctAnswer) {
                                rightAns++;
                                $('#question').html('<br>Correct!<br>');
                                $('#ans1').html('');
                                $('#ans2').html('');
                                    
                            }
                                  
                            else {
                                wrongAns++;
                                $('#question').html('<br>Wrong Answer!<br>');
                                $('#ans1').html('<br>The Correct answer is '+triviaGame[i].correctAnswer+'<br>');
                                $('#ans2').html('');
                                 
                            }
                            
                            $('#ans3').html('');
                            $('#ans4').html('');
                            $('#imageUrl').html(triviaGame[i].imageUrl)
                            
                            clearInterval(counter);
                            clearTimeout(timer);
                            number=20;
                            i++;
                            timer=setTimeout(screenReDo,1000*3);
                            
                        })


                        $('#ans4').on('click', function() {
                            if (triviaGame[i].answer4 === triviaGame[i].correctAnswer) {
                                rightAns++;
                                $('#question').html('<br>Correct!<br>');
                                $('#ans1').html('');
                                $('#ans2').html('');
                                    
                            }
                            
                            else {
                                wrongAns++;
                                $('#question').html('<br>Wrong Answer!<br>');
                                $('#ans1').html('<br>The Correct answer is '+triviaGame[i].correctAnswer+'<br>');
                                $('#ans2').html('');
                                   
                            }
                            $('#ans3').html('');
                            $('#ans4').html('');
                            $('#imageUrl').html(triviaGame[i].imageUrl)
                            
                            clearInterval(counter);
                            clearTimeout(timer);
                            number=20;
                            i++;
                            timer=setTimeout(screenReDo,1000*3);
                            
                        })

                  
          

} /*end function startGame() */

              