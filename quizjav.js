// $(document).ready(function(){

//     var questions = [{
//         text:"do trees exist",
//         type: "truefalse",
//         answer: true},

//         {
//         text:"name",
//     
//         choices: ["ad", "zdfg", "aegdafg", "ga"],
//         answer: "ad"},

//         {text:"Age",
//     
//         choices: ["ad", "asssssf", "dfg", "ga"],
//         answer: "ad"},
        
//         {text:"height",
//     
//         choices: ["ad", "af", "dfg", "ga"],
//         answer: "ad"},

//         {text:"pot",
//     
//         choices: ["ad", "af", "dfg", "ga"],
//         answer: "ad"}

//     ];

//     // intialising question 
//     var currentquestion = 0
//     $('#question').text("Question " + (currentquestion+ 1) + ": " + questions[currentquestion].text);

//     // truefalse question type 
//     function truefalsechecking(){
//         // $("center-buttons").empty();
//         // $(".center-buttons").append((<button type="button" class="btn btn-primary">True</button>), (<button type="button" class="btn btn-secondary">False</button>));

//         // if correct answer chosen
//         $(".btn-primary").click(function(){
//             if ($(this).text() === "True" && questions[currentquestion].answer === true||
//             $(this).text() === "False" && questions[currentquestion].answer === false)
//                 {$(".btn-primary").addClass("btn btn-success");
//                 alert("Correct answer!");}

//             else{
//                 $(".btn-primary").addClass("btn btn-danger");
//                 alert("Wrong answer, please try again!");}
//         });

//         $(".btn-secondary").click(function(){
//             if ($(this).text() === "True" && questions[currentquestion].answer === true||
//             $(this).text() === "False" && questions[currentquestion].answer === false)
//             {$(".btn-secondary").addClass("btn btn-success");
//             alert("Correct answer!");}

//             else{
//                 $(".btn-secondary").addClass("btn btn-danger");
//                 alert("Wrong answer, please try again!");}
        
//         });
//     }

//     // multichoice question
//     function multichoicechecking() { 
//         for (var i = 0; i < questions[currentquestion].choices.length; i++) {

//             (function(index) {
//                 var choiceButton = $('<button type="button" class="btn btn-primary">' + questions[currentquestion].choices[index] + '</button>');
//                 $(".center-buttons").append(choiceButton);
//                 choiceButton.click(function() {
//                     if ($(this).text() === questions[currentquestion].answer) {
//                         $(this).addClass("btn btn-success");
//                         alert("Correct answer!");
//                     } else {
//                         $(this).addClass("btn btn-danger");
//                         alert("Wrong answer, please try again!");
//                     }
//                 });

//             })(i);
//         }
//     }
    
//     // what type the question is 
    
//     function typeofquestion(){
//         $(".center-buttons").empty();
//         $('#question').text("Question " + (currentquestion+ 1) + ": " + questions[currentquestion].text);

//         if (questions[currentquestion].type === "truefalse") {
//             truefalsechecking();
//         }
//         else if (questions[currentquestion].type === "multichoice") {
//             multichoicechecking();
//         }
//     }
//     // typeofquestion()

//     // NEXT BUTTON IMPLEMENTATION
//     $("#nextbutton").click(function(){
//         // removing the colours that indicate the right and wrong answer
//         $(".btn-primary").removeClass("btn-success btn-danger");
//         $(".btn-secondary").removeClass("btn-success btn-danger");

//         // moving onto the next question
//         currentquestion++;
//         if (currentquestion < questions.length){

//             typeofquestion()}
            
//         else{
//             alert("THE END - do a print statement instead here");}
//         });

        
   
// })

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

            // (function(index) {
                var choiceButton = $('<button type="button" class="btn btn-primary">' + questions[currentquestion].choices[i] + '</button>');
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
                        
                    // } else {
                    //     $(this).addClass("btn btn-danger");
                    //     alert("Wrong answer, please try again!");
                    // }
                });

            // })(i);
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


// id unique for the page - sigle element 
// class multiple 


// quiz - user experience  - try to pick any questions and then only tell you if right or wrong if oce you have

// camel case, capital letter for each word currentQuestion
// render question - instead of type of question
// change truefalse to be like multiple choice instead 


// choices:
// {text:"true", correct: true, ...
// }
// ||
// right answer: adijfg
// wrong answer =[afag,gaf,dgf]

// function correctanswer(input)

// questions.forEach((questions))
//     question.choices.forEach
//         if (choice === input){
//             return true;}
        


//             console.log{"correct" +}