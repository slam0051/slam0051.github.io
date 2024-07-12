
$(document).ready(function(){

    var questions = [{
        text:"do trees exist",
        choices: ["True", "False"],
        answer: "True"},

        {
        text:"which of the following are a renewable energy source",
        choices: ["coal", "natural gas", "solar", "nuclear"],
        answer: "solar"
        },

        {
        text:"Which of these activities contributes most to deforestation?",
        choices: ["Sustainable logging", "Urbanization", "Agriculture", "Wildfires"],
        answer: "Agriculture"
        },
        
        {
        text:"What is the primary purpose of a carbon footprint?",
        choices: ["Measure the amount of carbon dioxide in the atmosphere", "Assess the impact of individual or organizational activities on climate change", "Calculate the financial cost of carbon emissions", "Determine the efficiency of renewable energy sources"],
        answer: "Assess the impact of individual or organizational activities on climate change"
        },

        {
        text:"Water scarcity is primarily caused by natural factors and is not influenced by human activities.",
        choices: ["True", "False"],
        answer: "False"
        },

        {
        text:"what colour is grass",
        choices: ["green", "blue", "red", "hot neon pink"],
        answer: "green"
        }
    ];


    // intialising question and total score system
    var currentQuestion = 0
    var value = 0
    $('#question').text("Question " + (currentQuestion+ 1) + ": " + questions[currentQuestion].text);

    // multichoice question
    function multiChoice() { 
        for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
            var choiceButton = $('<button type="button" class="btn btn-primary">' + questions[currentQuestion].choices[i] + '</button>');
            $(".center-buttons").append(choiceButton);

            var p = 0
            choiceButton.click(function() {
            $(".btn-primary").removeClass("btn-success");
            $(".btn-secondary").removeClass("btn-success");
            $(this).addClass("btn btn-success");
        
            if ($(this).text() === questions[currentQuestion].answer) {
                if (p === 0){
                value ++;
                p ++
            ;}}

            if (p===1 && $(this).text() !== questions[currentQuestion].answer) {
                value --;
                p --
            ;}   
            })
        }
    }
    
    // what type the question is 
    
    function renderQuestion(){
        $(".center-buttons").empty();
        $('#question').text("Question " + (currentQuestion+ 1) + ": " + questions[currentQuestion].text);
        multiChoice();}
        
    renderQuestion();

    // NEXT BUTTON IMPLEMENTATION
    $("#nextbutton").click(function(){
        // removing the colours that indicate the right and wrong answer
        $(".btn-primary").removeClass("btn-success btn-danger");
        $(".btn-secondary").removeClass("btn-success btn-danger");

        // moving onto the next question
        currentQuestion++;
        if (currentQuestion < questions.length){
            renderQuestion();}
            
        else{
            alert("THE END. You scored: " + value + "/6")}
        });         
})
