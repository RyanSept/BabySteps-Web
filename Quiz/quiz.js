var quizData= [ 
    {question:"1. What is the atomic mass of chlorine?",
     choices:["21","35.5","82.3","237"],
     correctanswer:1
    },
    {question:"2. What is the name of the current chancellor of Germany?",
     choices:["Angela Merkel","Vilhem Kurzgesagt","Deitrick Bonhoeffer","Dolpha Thiler "],
     correctanswer:0
    },
    {question:"3. What is the name of the closest star to our Sun?",
     choices:["Rigil Kent","Alpha Centauri","Sirius","Proxima Centauri"],
     correctanswer:3
    },
    {question:"4. What is the approximate distance from the earth to the moon?",
     choices:["2,000,000km","35,500km","400,000km","3,200km"],
     correctanswer:2
    },
    {question:"5. What is the zoological name of the African elephant?",
     choices:["Elephantus africanus","Elephas maximus","Gallus boinsei","Loxodonta africana"],
     correctanswer:3
    } 
];


$(document).ready( function () {
    //get the paragraph that will hold the question
    //set its text to the corresponding question
    $('.question').text(quizData[0].question); 
    //set the val of the button to 1 as a flag to show which
    //question we're on
    $('#next').val('1');
    //loop through the radio buttons setting the choices
    for (var e=0; e<$('span').length; e++) {
        $('.choice'+e).text(quizData[0].choices[e]);
    }
});

//stores user choices
var selections=[];

function next() {
    //score counter
    var score=0;
    
    //flag for current question as per array
    
    var curQuiz= Number($('#next').val())-1;
    
    //get the user's choice
    
    var userChoice=$("input[name='radio']:checked").val()-1;
    
    if (userChoice>=0){
        if (Number($('#next').val())<quizData.length) {

            //add user choices to array
            selections[curQuiz]= userChoice;
            
            //set up next question if not done
            if (curQuiz+1<quizData.length){
                $("body").hide()
                $('.question').text(quizData[curQuiz+1].question);
                for (var e=0; e<$('span').length; e++) {
                    $('.choice'+e).text(quizData[curQuiz+1].choices[e]);
                };
                $('#next').val(Number($('#next').val())+1);
            }
            $("body").fadeIn('slow');
        }
        
        //if at end of quiz, validate all answers while adding score
        
        else if (Number($('#next').val())==quizData.length) {
            //add user choices to array
            
            selections[curQuiz]= userChoice;
            
            for (sel in selections){
                //validate the choice and if correct add to score counter
                if (selections[sel]==quizData[sel].correctanswer){
                    score+=1; 
                };
            }
            
            alert(score);
            location.reload();
        }
    }
    
    else {
        alert("You haven't chosen anything.");
    }
}

function back() {
    //current question as per array
    var curQuiz= Number($('#next').val())-1;
    alert(selections);
    if (curQuiz>0) {
        //set up previous question
        $("body").hide()
        $('.question').text(quizData[curQuiz-1].question);
        for (var e=0; e<$('span').length; e++) {
            $('.choice'+e).text(quizData[curQuiz-1].choices[e]);
        };
        $("body").fadeIn('slow');
        $('#next').val(curQuiz);
        var curQuiz= Number($('#next').val())-1;
        $("input[value='"+selections[curQuiz]+"']").prop("checked",true);
    }
       
    }