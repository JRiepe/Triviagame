// Javascript Star Wars RPG
function loadGame() {
	
    // VARIABLES
    // ====================================================================
    var number=20;
    
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
    ]; /* end var triviaGame */

    

    $('#countDown').html('Time Remaining: ' + number + ' seconds');
    $('#buttonPlace').on('click', startGame);

    function startGame(){
              var i=0;
              var rightAns=0;
              var wrongAns=0;
              var noAns=0;
              var yourChoice;
              var correctChoice;
              number=20;
              

              for (i=0; i<triviaGame.length; i++) {                
                  
                  start();
                  $('#buttonPlace').html('');
                  $('#question').html('<br>'+triviaGame[i].question+'<br>');
                  $('#ans1').html('<br>'+triviaGame[i].answer1+'<br>');
                  $('#ans2').html('<br>'+triviaGame[i].answer2+'<br>');
                  $('#ans3').html('<br>'+triviaGame[i].answer3+'<br>');
                  $('#ans4').html('<br>'+triviaGame[i].answer4+'<br>');
                  $('#ans1').on('click', function() {
                    yourChoice = triviaGame[i].answer1;
                    correctChoice = triviaGame[i].correctAnswer; 
                    if (toLowerCase(yourChoice) == toLowerCase(correctAnswer)) {
                      rightAns++;
                      $('#imageUrl').html(triviaGame[i].imageUrl);
                      
                    }
                    else {
                      wrongAns++;
                      
                    }

                    /* console.log(triviaGame[i].answer1+' '+triviaGame[i].correctAnswer +' '+ rightAns); */
                    /* console.log(rightAns+' '+wrongAns); */
                  });

                  $('#ans2').on('click', function() {
                    yourChoice = triviaGame[i].answer2;
                    correctChoice = triviaGame[i].correctAnswer;
                    if (toLowerCase(yourChoice) == toLowerCase(correctAnswer)) {
                      rightAns++;
                      $('#imageUrl').html(triviaGame[i].imageUrl);
                      
                    }
                    else {
                      wrongAns++;
                      
                    }

                    console.log(triviaGame[i].answer1+' '+triviaGame[i].correctAnswer +' '+ rightAns);
                    console.log(rightAns+' '+wrongAns);
                  });  
                
              } /* end for (i=0;i<triviaGame.length;i++) */
              /* clearInterval(counter); */
              /* number=20; */
              $('#buttonPlace').html('<button>Play Again</button>');
              $('#buttonPlace').on('click', startGame);

              function start(){               
                  counter = setInterval(decrement, 1000);



              
                  } /* end function start() */


              function decrement(){
                number--;
                $('#countDown').html('Time Remaining: ' + number + ' seconds');
                if (number === 0){
                  /* stop(); */
                  alert('Time is Up!');
                  clearInterval(counter);
                }
              } /* end function decrement() */

              

              
    
    } /*end function startGame() */
} /* end loadGame() */