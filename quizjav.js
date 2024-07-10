

$(document).ready(function(){

    var questions = [{
        text:"do trees exist",
        choices: ["True", "False"],
        answer: "True"},

        {
        text:"which of the following are a renewable energy source",
        choices: ["coal", "natural gas", "solar", "nuclear"],
        answer: "solar"},

        {text:"Which of these activities contributes most to deforestation?",
        choices: ["Sustainable logging", "Urbanization", "Agriculture", "Wildfires"],
        answer: "Agriculture"},
        
        {text:"What is the primary purpose of a carbon footprint?",
        choices: ["Measure the amount of carbon dioxide in the atmosphere", "Assess the impact of individual or organizational activities on climate change", "Calculate the financial cost of carbon emissions", "Determine the efficiency of renewable energy sources"],
        answer: "Assess the impact of individual or organizational activities on climate change"},

        {text:"Water scarcity is primarily caused by natural factors and is not influenced by human activities.",
        choices: ["True", "False"],
        answer: "False"},

        {text:"what colour is grass",
        choices: ["green", "blue", "red", "hot neon pink"],
        answer: "green"}

    ];

    // intialising question and total score
    var currentquestion = 0
    var value = 0
    $('#question').text("Question " + (currentquestion+ 1) + ": " + questions[currentquestion].text);

    // multichoice question
    function multichoicechecking() { 
        for (var i = 0; i < questions[currentquestion].choices.length; i++) {

<<<<<<< HEAD
            // (function(index) {
                var choiceButton = $('<button type="button" class="btn btn-primary">' + questions[currentquestion].choices[i] + '</button>');
=======
            (function(index) {
                var choiceButton = $('<button type="button" class="btn btn-primary">' + questions[currentquestion].choices[index] + '</button>');
>>>>>>> 99eacdd05fdba6bcdcbc0d45d4f17e6fa470c0e8
                $(".center-buttons").append(choiceButton);
        var p = 0
        choiceButton.click(function() {
        $(".btn-primary").removeClass("btn-success");
        $(".btn-secondary").removeClass("btn-success");
        $(this).addClass("btn btn-success");
    
        if ($(this).text() === questions[currentquestion].answer) {
            if (p === 0){
            value ++
            p ++    
        }
        }

        if (p===1 && $(this).text() !== questions[currentquestion].answer) {
            value --
            p --
        }
               
                });

            })(i);
        }
    }
    
    // what type the question is 
    
    function typeofquestion(){
        $(".center-buttons").empty();
        $('#question').text("Question " + (currentquestion+ 1) + ": " + questions[currentquestion].text);
        multichoicechecking();}
        
    typeofquestion()

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
            alert("THE END. You scored: " + value + "/6")}
        });        
   
    // total value score gotten
    console.log("correct: " + value);
})


