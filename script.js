/*
    question-type:0 => Textual question, 3 image answers, single choice
    question-type:1 => Textual question, 4 image answers, single choice
        question-type:2 => Textual question, 4 image answers, multiple choice
    question-type:3=> Textual question, 3 image answers, multiple choice

    question-type:4=> Textual question, 4 textual answers, single choice
    question-type: 5=> Textual question, 4 textual answers, multiple choice
    question-type: 6=> Scenario question(text+image), textual answers, single option
    question-type: 7 => Scenario question(text+image), textual answers, multiple options
*/


var MenstrualHealth = '{"category-id":"8","category-name":"Menstrual Health","questions":[{"question-id":"0","question-type":"2","question":"What are the alternatives to Pads?","question-correct-explanation":"You are correct. We can use Tampons, Menstrual Cups and Period Panties, apart from sanitary napkins","question-wrong-explanation":"Nope! You can use period panties, tampons and menstrual cups. You absolutely should not use toilet paper","options":[{"answer-id":"0","answer-src":"rsz_sed6.jpg","answer-description":"Menstrual Cup"},{"answer-id":"1","answer-src":"rsz_sed7.jpg","answer-description":"Tampons"},{"answer-id":"2","answer-src":"rsz_sed11.png","answer-description":"Period Panties"},{"answer-id":"3","answer-src":"rsz_sed10.jpg","answer-description":"Toilet Paper"}],"correct-answer":"123"},{"question-id":"1","question-type":"4","question":"How often will I change my tampon?","question-correct-explanation":"Yes, you should change tampons every 5-7 hours to avoid TSS","question-wrong-explanation":"Nope! You should ideally change tampons every 5-7 hours to avoid Toxic Shock Syndrome, caused by bacterial toxins","options":[{"answer-id":"0","answer-description":"1 hour - 3 hours"},{"answer-id":"1","answer-description":"5 hours - 7 hours"},{"answer-id":"2","answer-description":"9 hours - 12 hours"},{"answer-id":"3","answer-description":"Once every 24 hours"}],"correct-answer":"1"},{"question-id":"2","question-type":"4","question":"When do I ovulate?","question-correct-explanation":"Yes! You usually ovulate around 2 weeks before you actually get your periods","question-wrong-explanation":"No, most women usually ovulate two weeks before they actually get their periods","options":[{"answer-id":"0","answer-description":"One week before my next period"},{"answer-id":"1","answer-description":"Two weeks before my next period"},{"answer-id":"2","answer-description":"Three weeks before my next period"}],"correct-answer":"1"},{"question-id":"3","question-type":"4","question":"How much blood do I lose during my periods?","question-correct-explanation":"Correct! We usually lose around 80 ml of blood on heavy flows","question-wrong-explanation":"No. A woman loses only around 80ml of blood, on average during her periods","options":[{"answer-id":"0","answer-description":"250ml"},{"answer-id":"1","answer-description":"530ml"},{"answer-id":"2","answer-description":"80ml"},{"answer-id":"3","answer-description":"950ml"}],"correct-answer":"2"}]}';
var allQuestionClasses = ['an-question-three-options', 'an-question-four-options', ' an-question-four-options-multiple', '', 'an-question-single-choice-text', 'an-question-multiple-choice-text'];
var currentQuestion = 0;
var totalQuestion = 4;
var checkedAnswer = 0;
//param = questionType
function checkAnswer(){

    if(checkedAnswer == 1)
    {
        openNextQuestion();
    }

    else
    {
    var JSONObj = JSON.parse(MenstrualHealth);
    var questionArray = JSONObj["questions"];
    var questionType = questionArray[currentQuestion]["question-type"];
    var questionWrongExplanation = questionArray[currentQuestion]["question-wrong-explanation"];
    var questionCorrectExplanation = questionArray[currentQuestion]["question-correct-explanation"];
    var correctAnswer = questionArray[currentQuestion]["correct-answer"];
    if(questionType == 2)
  {  var allCorrectAnswers = new Array();
    while(correctAnswer>0)
    {
        var num = correctAnswer%10;
        allCorrectAnswers.push(num);
        correctAnswer = parseInt(correctAnswer/10);
        console.log(correctAnswer);
    }

    var allSelectedAnswers = new Array();
    var selectedAnswers = document.getElementsByName("an-four-card-multiple-options");
    for(var i=0;i<selectedAnswers.length;i++)
    {
        if(selectedAnswers[i].checked)
        {
            allSelectedAnswers.push(parseInt(selectedAnswers[i].id)+1);
        }
    }
    console.log("correctAnswer" + allCorrectAnswers);
    console.log("selectedAnswers" + allSelectedAnswers);

    var wrong = new Array();
    for(var i=0;i<allCorrectAnswers.length; i++)
    {
        var matched = 0;
        for(var j=0;j<allSelectedAnswers.length;j++)
        {
            if(allCorrectAnswers[i] == allSelectedAnswers[j])
            {
                matched = 1;
            }
        }
        if(matched!=1)
        {
            wrong.push(allCorrectAnswers[i]);
        }
    }

    for(var i=0;i<allSelectedAnswers.length; i++)
    {
        var matched = 0;
        for(var j=0;j<allCorrectAnswers.length;j++)
        {
            if(allSelectedAnswers[i] == allCorrectAnswers[j])
            {
                matched = 1;
            }
        }
        if(matched!=1)
        {
            wrong.push(allSelectedAnswers[i]) ;
        }
    }

    console.log(wrong);

    var imageColorsToBeChanged = document.getElementsByClassName("an-four-multiple-img");
    console.log("heryyy " + imageColorsToBeChanged.length);
for(var l =0;l<imageColorsToBeChanged.length;l++)
{
    console.log(i + imageColorsToBeChanged[l] + imageColorsToBeChanged[l].innerHTML);
}

    for(var i=0;i<wrong.length;i++)
    {
        var index = parseInt(parseInt(wrong[i])-1);
        console.log("changinh " + index);
        console.log(imageColorsToBeChanged[index].innerHTML);
        imageColorsToBeChanged[index].style.boxShadow = "0 0 10px #c3073f";
        
    }

    if(wrong.length == 0)
    {
        openModal(questionCorrectExplanation);
    }
    else{
        openModal(questionWrongExplanation);
    }

}
else if(questionType == 4)    
{
    var found = 0;
    var userSelectedOption = -1;
    var selectedOption = document.getElementsByName("an-single-card-options");
    for(var i =0;i<selectedOption.length;i++)
    {
        if(selectedOption[i].checked)
        {
            
            if(parseInt(correctAnswer) == parseInt(i))
            {
                openModal(questionCorrectExplanation);
                selectedOption[i].parentNode.parentNode.style.boxShadow = "0 0 10px #7C9214";
                found = 1;
            }
            else
            {
                selectedOption[i].parentNode.parentNode.style.boxShadow = "0 0 10px #c3073f";
            }
        }
    }

    if(found == 0)
    {

        openModal(questionWrongExplanation);
    }
}

}
}


function openNextQuestion(){

    var k = resetPage();
    if(k == 0)
    {
        window.open("dashboard/index.html");
    }
    else
    { 
        var JSONObj = JSON.parse(MenstrualHealth);
        var progressBar = document.getElementById("an-inside-progress-bar");
        var progressValue = currentQuestion/totalQuestion*100;
        progressBar.style.width = progressValue+"%";

        var size = JSONObj["questions"].length;
        var questionArray = JSONObj["questions"];
        console.log(progressValue);
        var currentCategory = questionArray[currentQuestion]["question-type"];
        var htmlText = "";
        if(currentCategory == 2)
        {
            var toAppend = this.document.getElementsByClassName(allQuestionClasses[2])[0];
            htmlText = questionTypeTwo(questionArray[currentQuestion], htmlText);
            toAppend.innerHTML = htmlText;
            toAppend.style.display = "flex";        
        }
        else if(currentCategory == 4)
        {
            var toAppend = this.document.getElementsByClassName(allQuestionClasses[4])[0];
            htmlText = questionTypeFour(questionArray[currentQuestion], htmlText);
            toAppend.innerHTML = htmlText;
            toAppend.style.display = "flex";
        }

    }
}



function resetPage(){
    checkedAnswer = 0;
    var button = document.getElementById("nextButton");
    button.innerHTML = "Check";

    if(currentQuestion == totalQuestion)
    {
        return 0;
    }

    for(var i = 0;i<allQuestionClasses.length; i++)
    {
        if(allQuestionClasses[i]!='')
        {  
            var element = document.getElementsByClassName(allQuestionClasses[i])[0];
            element.style.display = "none";
        }

    }
}

function openModal(param){
    currentQuestion++;

    var progressBar = document.getElementById("an-inside-progress-bar");
    var progressValue = currentQuestion/totalQuestion*100;
    progressBar.style.width = progressValue+"%";

    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var insideStuff = document.getElementById("an-modal-text");
    insideStuff.innerHTML = "<p>"+param+"</p>";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";

    var button = document.getElementById("nextButton");
    button.innerHTML = "Next";
    checkedAnswer = 1;
      }

}

window.onload = function yo(){
     resetPage();
    this.openNextQuestion();
}


function questionTypeFour(questionObject, htmlText){
    var options = questionObject["options"];
    htmlText+='<div class = "an-question-title">';
    htmlText+='<p>'+questionObject["question"]+'</p>';
    htmlText+='</div>'
    for(var i=0;i<options.length;i++)
    {
        htmlText+='<div class = "an-single-choice-option">';
        htmlText+='<label>';
        htmlText+= '    <div class ="an-card-single-choice">';
        htmlText+='        <div class = "an-padding-right">';
        htmlText+='        <input type="radio" name ="an-single-card-options" class="an-input-type-radio-single" style="padding: 8px;" id="'+options[i]["answer-id"]+'"/>';
        htmlText+='</div>';
        htmlText+='        <p class = "an-text-card">'+options[i]["answer-description"]+'</p>';
        htmlText+='    </div>    ';
        htmlText+='</label>    ';
        htmlText+='</div>';
        
    }

    return htmlText;
}


    function questionTypeTwo(questionObject, htmlText)
    {
        var options = questionObject["options"];
        htmlText +=  '<div class = "an-question-title">';
        htmlText+= '<p>'+questionObject["question"]+'</p>'
        htmlText+= '</div>';
        htmlText+= '        <div class = "an-four-image-grid-option">';
        htmlText+='<div class = "an-row-one">';
        for(var i=0;i<2;i++)
        {
            htmlText+="<label>";
            htmlText+='<input type="checkbox" name ="an-four-card-multiple-options" class="an-input-type-radio" id="'+options[i]["answer-id"]+'"/>';
            htmlText+='<div class ="an-four-multiple-img  an-card">';
            htmlText+='<img src = "'+options[i]["answer-src"]+'" class="an-img-card"/>';
            htmlText+='<p class = "an-text-card">'+options[i]["answer-description"]+'</p>';
            htmlText+='</div>';
            htmlText+='</label>';
        }
        htmlText+='</div>';
        htmlText+='<div class = "an-row-two">';

        for(var i=2;i<4;i++)
        {
            htmlText+="<label>";
            htmlText+='<input type="checkbox" name ="an-four-card-multiple-options" class="an-input-type-radio" id="'+options[i]["answer-id"]+'"/>';
            htmlText+='<div class ="an-four-multiple-img  an-card">';
            htmlText+='<img src = "'+options[i]["answer-src"]+'" class="an-img-card"/>';
            htmlText+='<p class = "an-text-card">'+options[i]["answer-description"]+'</p>';
            htmlText+='</div>';
            htmlText+='</label>';
        }


        htmlText+='</div>';

        htmlText+='</div>';


        return htmlText;
    }
