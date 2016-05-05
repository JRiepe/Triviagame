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
              
              $('#countDown').html('Time Remaining: ' + number + ' seconds');
              var triviaGame = [
              {
              question: "Which Artist painted 'Mona Lisa'",
              answer1: "Vincent Van Gogh",
              answer2: "Leonardo daVinci",
              answer3: "Grandma Moses",
              answer4: "Salvador Dali",
              correctAnswer: "Leonardo daVinci",
              answerUrl: '<img src="http://www.star2.com/wp-content/uploads/2016/05/mona-smile-770x470.jpg" height: 100px>'
               },      

              {
              question: "Which Artist painted 'Starry Nights'",
              answer1: "Vincent Van Gogh",
              answer2: "Salvador Dali",
              answer3: "Grandma Moses",
              answer4: "Rembrandt",
              correctAnswer: "Vincent Van Gogh",
              answerUrl: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/300px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' height: 100px>"
               },

              {
              question: "Which Artist painted 'The Scream'",
              answer1: "Rembrandt",
              answer2: "Salvador Dali",
              answer3: "Pablo Picasso",
              answer4: "Edvard Munch",
              correctAnswer: "Edvard Munch",
              answerUrl: "<img src='http://www.edvardmunch.org/images/paintings/the-scream.jpg' height: 100px>"
              },
          
              {
              question: "Which Artist painted 'The Night Watch'",
              answer1: "Rembrandt",
              answer2: "Grandma Moses",
              answer3: "Pablo Picasso",
              answer4: "Edvard Munch",
              correctAnswer: "Rembrandt",
              answerUrl: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/The_Nightwatch_by_Rembrandt.jpg/380px-The_Nightwatch_by_Rembrandt.jpg' height: 100px>"
              },

              {
              question: "Which Artist painted 'American Gothic'",
              answer1: "Georges Seurat",
              answer2: "Grant Wood",
              answer3: "Johannes Vermeer",
              answer4: "Edvard Munch",
              correctAnswer: "Grant Wood",
              answerUrl: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/250px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg' height:100px>"
              },


              {
              question: "Which Artist painted 'The Weeping Woman'",
              answer1: "Leonardo daVinci",
              answer2: "Grant Wood",
              answer3: "Johannes Vermeer",
              answer4: "Pablo Picasso",
              correctAnswer: "Pablo Picasso",
              answerUrl: "<img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg/200px-Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg' height: 100px>"
              },

              {
              question: "Which Artist painted 'Guernica'",
              answer1: "Leonardo daVinci",
              answer2: "Pablo Picasso",
              answer3: "Georges Seurat",
              answer4: "Grandma Moses",
              correctAnswer: "Pablo Picasso",
              answerUrl: "<img src='https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg' height: 100px>"
              },

              {
              question: "Which Artist painted 'The Persistence of Memory'",
              answer1: "Edvard Munch",
              answer2: "Pablo Picasso",
              answer3: "Salvador Dali",
              answer4: "Grandma Moses",
              correctAnswer: "Salvador Dali",
              answerUrl: "<img src='https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg' height: 100px>"
              },

              {
              question: "Which Artist painted 'A Sunday Afternoon on the Island of LaGrande Jatte'",
              answer1: "Georges Seurat",
              answer2: "Rembrandt",
              answer3: "Salvador Dali",
              answer4: "Johannes Vermeer",
              correctAnswer: "Georges Seurat",
              answerUrl: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg/350px-Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg' height: 100px>"
              },
          

              {
              question: "Which Artist painted 'Girl with  Pearl Earring'",
              answer1: "Georges Seurat",
              answer2: "Pablo Picasso",
              answer3: "Georges Seurat",
              answer4: "Johannes Vermeer",
              correctAnswer: "Johannes Vermeer",
              answerUrl: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/300px-Meisje_met_de_parel.jpg" height: 100px>'
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
                        $('#question').html('<br>No Answer Detected!<br>');
                        $('#ans1').html('<br>The Correct answer is '+triviaGame[i].correctAnswer+'<br>');
                        $('#ans2').html('');
                        $('#ans3').html('');
                        $('#ans4').html('');
                        $('#imageUrl').html(triviaGame[i].answerUrl);
                        clearInterval(counter);
                        clearTimeout(timer);
                        noAns++;
                        number=20;
                        i++;
                        timer=setTimeout(screenReDo,1000*3);
                        
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
                        $('#imageUrl').html('');  
                  }
                  else  {
                        
                        $('#question').html('<br>Press Start to Play Again!<br>');
                        $('#ans1').html('Right Answers: '+rightAns);
                        $('#ans2').html('Wrong Answers: '+wrongAns);
                        $('#ans3').html('No Answers: '+noAns);
                        $('#ans4').html('')
                        $('#imageUrl').html('');
                        $('#buttonPlace').html('<button>Play Again</button>');
                        rightAns=0;
                        wrongAns=0;
                        noAns=0;
                        i=0;
                        number=20;
                        clearInterval(counter);
                        clearTimeout(timer);

                        $('#buttonPlace').on('click', screenreDo);
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
                            $('#imageUrl').html(triviaGame[i].answerUrl);
                    
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
                            $('#imageUrl').html(triviaGame[i].answerUrl);
                            
                            
                            clearInterval(counter);
                            clearTimeout(timer);
                            number=20;
                            i++;
                            timer=setTimeout(screenReDo,1000*3);
                            
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
                            $('#imageUrl').html(triviaGame[i].answerUrl)
                            
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
                            $('#imageUrl').html(triviaGame[i].answerUrl)
                            
                            clearInterval(counter);
                            clearTimeout(timer);
                            number=20;
                            i++;
                            timer=setTimeout(screenReDo,1000*3);
                            
                        })

                  
          

} /*end function startGame() */

              