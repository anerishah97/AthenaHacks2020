var firstTime = '{"category-id":"5","category-name":"First Time","questions":[{"question-id":"0","question-type":"4","question":"I am 19. Is there any right age to lose my virginity?","question-src":"q1.png","question-correct-explanation":"Well done!","question-wrong-explanation":"Nope! You can have sex at any age, provided it is consensual and legal!","options":[{"answer-id":"0","answer-sc":"rsz_sed6.jpg","answer-description":"No,but in all USA states,the legal age of consent is 18. "},{"answer-id":"1","answer-src":"rsz_sed7.jpg","answer-description":"Yes, and you are too young."},{"answer-id":"2","answer-src":"rsz_sed11.png","answer-description":"There is no such age, just be comfortable."}],"correct-answer":"1"},{"question-id":"1","question-type":"5","question-src":"q2.png","question":"Should I tell Alice that it is my first time?","question-correct-explanation":"You\'re right! You can approach your first time with much more confidence and comfort if your partner is aware of your virginity.","question-wrong-explanation":"Nope! Never be scared of judgment on this matter, since having sex is a personal choice and you should only do it when you are completely ready!","options":[{"answer-id":"0","answer-description":"No, your partner will probably judge you."},{"answer-id":"1","answer-description":"Yes, you should be honest and open about it."},{"answer-id":"2","answer-description":"Yes, telling your partner could make it easier for both of you."}],"correct-answer":"23"},{"question-id":"2","question-type":"4","question-src":"q3.png","question":"Can I have sex on my period?","question-correct-explanation":"Yes! You can definitely have sex on your period, if your partner is comfortable with it. In fact, sex is supposed to be more pleasurable for women on their period, due to the increased hormonal sensitivity! There might be a little bit of a mess associated with it, so be sure to make proper arrangements, and remember to wash your sheets after it!","question-wrong-explanation":"No, it is a common misconception that having sex during a woman\'s period is harmful. The truth is that it is completely safe! In fact, sex is supposed to be more pleasurable for women on their period, due to the increased hormonal sensitivity!","options":[{"answer-id":"0","answer-description":"Ewww, gross!"},{"answer-id":"1","answer-description":"No, it is very unhealthy and poses health risks."},{"answer-id":"2","answer-description":"Yes you can, there is no proven harm around it."}],"correct-answer":"3"},{"question-id":"3","question-type":"5","question-src":"q4.png","question":"Should I be using a condom?","question-correct-explanation":"Correct! Always use a condom unless you are trying to concieve. Condoms help prevent STDs, as well as are an efficient way of birth control.","question-wrong-explanation":"No. While you should be using a condom, the reasons are not what you chose! The correct reasons to use condoms are to prevent STDs and prevent unwanted pregnancy.","options":[{"answer-id":"0","answer-description":"Yes, to prevent STDs."},{"answer-id":"1","answer-description":"Yes, for birth control."},{"answer-id":"2","answer-description":"Yes, for fun!"},{"answer-id":"3","answer-description":"Yes, to reduce pain."}],"correct-answer":"12"},{"question-id":"4","question-type":"4","question-src":"q5.png","question":"Are condoms 100% effective as a birth control method?","question-correct-explanation":"Correct! Condoms are 97% effective, so there is a very teensy chance that you might get pregnant, in case the condom tears. The chances are still very minimal, so do use them!","question-wrong-explanation":"No. Condoms are not 100% effective, and this is an important factor. But resorting to measures like using 2 condoms together could increase the risk of pregnancy even further, since the 2 condoms could both tear due to friction between each other. So, use a condom, but use only 1 at a time.","options":[{"answer-id":"0","answer-description":"Yes, they are 100% effective."},{"answer-id":"1","answer-description":"No, they are only 97% effective. And they do put that on the box!"},{"answer-id":"2","answer-description":"It does not matter!"}],"correct-answer":"2"},{"question-id":"5","question-type":"4","question-src":"q6.png","question":"Do I need to orgasm for it to count?","question-correct-explanation":"Correct! While orgasms feel great, and everyone should make sure that their partner understands their needs and tries to satisfy them, but orgasms are not any indicator of your virginity. Most women do not orgasm on their first sexual intercourse, mainly due to lack of experience.","question-wrong-explanation":"No. Orgasms are no indicator of virginity. ","options":[{"answer-id":"0","answer-description":"Yes, the only point of sex is to have an orgasm."},{"answer-id":"1","answer-description":"No, sex is sex, whether you have an orgasm or not."},{"answer-id":"2","answer-description":"No, it is completely normal to not orgasm on your first time!"},{"answer-id":"3","answer-description":"Yes, you will remain a virgin until you orgasm."}],"correct-answer":"3"}]}';
var MenstrualHealth = firstTime;
var allQuestionClasses = ['an-question-three-options', 'an-question-four-options', ' an-question-four-options-multiple', '', 'an-question-single-choice-text', 'an-question-multiple-choice-text'];
var currentQuestion = 0;
var totalQuestion = 6;
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
    var correctAnswer = parseInt(questionArray[currentQuestion]["correct-answer"])-1;
    console.log("Correct answer is " + correctAnswer);
    if(questionType == 5)
  {  var allCorrectAnswers = new Array();
    while(correctAnswer>0)
    {
        var num = correctAnswer%10;
        allCorrectAnswers.push(num);
        correctAnswer = parseInt(correctAnswer/10);
        console.log(correctAnswer);
    }

    var allSelectedAnswers = new Array();
    var selectedAnswers = document.getElementsByName("an-single-card-options");
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

   // var imageColorsToBeChanged = document.getElementsByClassName("an-four-multiple-img");
//     console.log("heryyy " + imageColorsToBeChanged.length);
// for(var l =0;l<imageColorsToBeChanged.length;l++)
// {
//     console.log(i + imageColorsToBeChanged[l] + imageColorsToBeChanged[l].innerHTML);
// }

    for(var i=0;i<wrong.length;i++)
    {
        var index = parseInt(parseInt(wrong[i])-1);
        console.log("changinh " + index);
        //console.log(imageColorsToBeChanged[index].innerHTML);
       // imageColorsToBeChanged[index].style.boxShadow = "0 0 10px #c3073f";
        
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
            console.log("Select option " + i);
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
        window.open("choosecategory/category.html");
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
        if(currentCategory == 5)
        {
            var toAppend = this.document.getElementsByClassName(allQuestionClasses[5])[0];
            htmlText = questionTypeFive(questionArray[currentQuestion], htmlText);
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
    htmlText+='<div class = "question-image"><img src = "'+questionObject["question-src"]+'"></div>';
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


function questionTypeFive(questionObject, htmlText){
    var options = questionObject["options"];
    htmlText+='<div class = "an-question-title">';
    htmlText+='<div class = "question-image"><img src = "'+questionObject["question-src"]+'"></div>';

    htmlText+='<p>'+questionObject["question"]+'</p>';
    htmlText+='</div>'
    for(var i=0;i<options.length;i++)
    {
        htmlText+='<div class = " an-question-multiple-choice-text">';
        htmlText+='<label>';
        htmlText+= '    <div class ="an-card-single-choice">';
        htmlText+='        <div class = "an-padding-right">';
        htmlText+='        <input type="checkbox" name ="an-multiple-card-options" class="an-input-type-radio-single" style="padding: 8px;" id="'+options[i]["answer-id"]+'"/>';
        htmlText+='</div>';
        htmlText+='        <p class = "an-text-card">'+options[i]["answer-description"]+'</p>';
        htmlText+='    </div>    ';
        htmlText+='</label>    ';
        htmlText+='</div>';
        
    }

    return htmlText;
}



