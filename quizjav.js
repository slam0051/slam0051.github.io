$(document).ready(function(){

    var questions = [{
        text:"do trees exist",
        type: "truefalse",
        answer: true},

        {
        text:"name",
        type: "multichoice",
        choices: ["ad", "zdfg", "aegdafg", "ga"],
        answer: "ad"},

        {text:"Age",
        type: "multichoice",
        choices: ["ad", "asssssf", "dfg", "ga"],
        answer: "ad"},
        
        {text:"height",
        type: "multichoice",
        choices: ["ad", "af", "dfg", "ga"],
        answer: "ad"},

        {text:"pot",
        type: "multichoice",
        choices: ["ad", "af", "dfg", "ga"],
        answer: "ad"}

    ];

    // intialising question 
    var currentquestion = 0
    $('#question').text("Question " + (currentquestion+ 1) + ": " + questions[currentquestion].text);

    // truefalse question type 
    function truefalsechecking(){
        // $("center-buttons").empty();
        // $(".center-buttons").append((<button type="button" class="btn btn-primary">True</button>), (<button type="button" class="btn btn-secondary">False</button>));

        // if correct answer chosen
        $(".btn-primary").click(function(){
            if ($(this).text() === "True" && questions[currentquestion].answer === true||
            $(this).text() === "False" && questions[currentquestion].answer === false)
                {$(".btn-primary").addClass("btn btn-success");
                alert("Correct answer!");}

            else{
                $(".btn-primary").addClass("btn btn-danger");
                alert("Wrong answer, please try again!");}
        });

        $(".btn-secondary").click(function(){
            if ($(this).text() === "True" && questions[currentquestion].answer === true||
            $(this).text() === "False" && questions[currentquestion].answer === false)
            {$(".btn-secondary").addClass("btn btn-success");
            alert("Correct answer!");}

            else{
                $(".btn-secondary").addClass("btn btn-danger");
                alert("Wrong answer, please try again!");}
        
        });
    }

    // multichoice question
    function multichoicechecking() { 
        for (var i = 0; i < questions[currentquestion].choices.length; i++) {

            // (function(index) {
                var choiceButton = $('<button type="button" class="btn btn-primary">' + questions[currentquestion].choices[index] + '</button>');
                $(".center-buttons").append(choiceButton);
                choiceButton.click(function() {
                    if ($(this).text() === questions[currentquestion].answer) {
                        $(this).addClass("btn btn-success");
                        alert("Correct answer!");
                    } else {
                        $(this).addClass("btn btn-danger");
                        alert("Wrong answer, please try again!");
                    }
                });

            // })(i);
        }
    }
    
    // what type the question is 
    
    function typeofquestion(){
        $(".center-buttons").empty();
        $('#question').text("Question " + (currentquestion+ 1) + ": " + questions[currentquestion].text);

        if (questions[currentquestion].type === "truefalse") {
            truefalsechecking();
        }
        else if (questions[currentquestion].type === "multichoice") {
            multichoicechecking();
        }
    }
    // typeofquestion()

    // NEXT BUTTON IMPLEMENTATION
    $("#nextbutton").click(function(){
        // removing the colours that indicate the right and wrong answer
        $(".btn-primary").removeClass("btn-success btn-danger");
        $(".btn-secondary").removeClass("btn-success btn-danger");

        // moving onto the next question
        currentquestion++;
        if (currentquestion < questions.length){

            typeofquestion()}
            
        else{
            alert("THE END - do a print statement instead here");}
        });

        
   
})

