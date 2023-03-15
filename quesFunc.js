//variables used in this script
const qTotal = Qs.length; //json questions from questions.js
const quizdiv = document.querySelector('.quizContainer'); //where quiz questions ans answer will display
const next = document.getElementById("nextbtn"); //next button
var qsAnswered = 0;//amount of questions answered, only 20 questions should be answered
var globalIdx;

///*DEBUG*/ console.log("Total Questions:" + qTotal);
const questions = new Array(qTotal);
for (var i = 0; i < questions.length; i++) {
    questions[i] = i + 1;
}
/*DEBUG TO SEE THE QUESTION ARRAY ELEMENTS
for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]); //debug
}*/

//FUNCTION-> ask what packs does the user have, and put them in an array
var owned = ["Base Game"]; //by default all users have basegame
function getPacks() {
    var opt = document.getElementsByClassName('packs');
    var index = 1;//instead of using i for owned, we use index so that it only increments when owned gets a new element.
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].checked == true) {
            ///*DEBUG*/ console.log("In if statement meaning "+opt[i].value+" is checked");
            owned[index] = opt[i].value;
            index++;
        }
    }
    hidePackQuestion();
    getUserQs();
}
var userQs = []; //questions user can answer
var asked = []; //questions user already answered

/*FUNCTION-> 1) Will go through questions.js Qs elements, 
2) check if the value in "pack" of the question is in the owned array,
3) if so, store that questions ID in the userQs array
*/
function getUserQs() {
    var index = 0;
    for (var i = 0; i < qTotal; i++) { //outer loop will deal with qs
        for (var j = 0; j < owned.length; j++) { //nested loop will deal with user's packs
            if (Qs[i].pack === owned[j]) {
                userQs[index] = Qs[i].questionID;
                index++;
            }
        }
    }
    //DEBUG
    console.log("total user questions: " + userQs.length)
    for (var j = 0; j < userQs.length; j++) {
        console.log("index: " + j + " value-> " + userQs[j]);
        console.log((j + 1) + ": " + Qs[j].question)
    }

    console.log("--------Now Displaying a question...")
    displayQandAs();
}
/* Functions Display Questions for user, randomly
the getRand function will return a number between 0 and userQs.length-1
we use that as an index, which we'll use to get the question id,
and display it's question
 */
function getRand() {
    return Math.floor((Math.random() * userQs.length) + 1); //get random index from 0
}
function checkAsked(x) {
    console.log("Total questions-> " + userQs.length)
    console.log("Amount of questions asked-> " + asked.length);
    if (asked.length === 0) { //if empty?
        return false;
    }
    else if (asked.length < userQs.length) { //less than user's question
        for (var i = 0; i < asked.length; i++) {
            console.log("random= " + x + " asked element we check= " + asked[i]);
            if (x === asked[i]) {
                return true;
            }
        }
        return false;
    }
    else if (asked.length === userQs.length) { // of asked.length is full, has all
        console.log("All possible questions have been asked, starting over...");
        asked.length = 0; //clears the asked array to now make it empty.
        return true;
    }
}
function displayQandAs() {
    if (next.style.display === "block") next.style.display = "none"; //make sure next isn't visible when a question is asked
    var rand = getRand(); //random index
    var askAlready = checkAsked(rand);
    while (askAlready) { //while true
        console.log("ASKED ALREADY, TRYING AGAIN")
        var rand = getRand(); //random index
        var askAlready = checkAsked(rand);
    }
    if (!askAlready) { //if false
        console.log("random value= " + rand)
        let idx = rand - 1;
        globalIdx = idx; //store globally
        print(idx);//send idx to function that'll display in html
        console.log("random index userQs= " + idx);
        console.log(Qs[idx].question)
        console.log("1: " + Qs[idx].answer1.answer)
        console.log("2: " + Qs[idx].answer2.answer)
        console.log("3: " + Qs[idx].answer3.answer)
        console.log("4: " + Qs[idx].answer4.answer)
        asked.push(rand) //add that to the asked array so it won't be asked again
        console.log("Amount of questions asked now-> " + asked.length)
    }
}
//showing and hiding the divs of the question...
const packquest = document.getElementById("gettingPacks");
const skipQ = document.getElementById("skip");
function hidePackQuestion() { //hides the what pack you have question
    packquest.style.display = "none"; //hides
    skipQ.style.display = "block"; //shows the skip button for quiz
}

function showNextBtn() { //when an answer is selected, next button will display
    next.style.display = "block";
}
var choices = document.getElementsByName("ansCh");
var chosen;//users answered choice they submit
function evalAnswer(index) { //this is where answers are calculated to put points at the right spot
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            //console.log(choices[i].value);
            chosen = choices[i].value;
            if (chosen === "answer1") {
                console.log(Qs[index].answer1.answer + " <--Was Chosen")
            } else if (chosen === "answer2") {
                console.log(Qs[index].answer2.answer + " <--Was Chosen")
            } else if (chosen === "answer3") {
                console.log(Qs[index].answer3.answer + " <--Was Chosen")
            } else if (chosen === "answer4") {
                console.log(Qs[index].answer4.answer + " <--Was Chosen")
            }
        }
    }
    //console.log(chosen);
    qsAnswered++;//increment and call display for new question
    console.log(qsAnswered + "<--- questions answered")
    if (qsAnswered < userQs.length) displayQandAs();
    else {
        console.log("Quiz Done");
        quizdiv.innerHTML = `<h1>Quiz Done</h1>`
        next.style.display="none";
        skipQ.style.display="none";
    }
}
//showing and hiding next button when an option is selected

function print(idx) { //display quiz with questions and answers in html
    quizdiv.innerHTML = `
<h4>${Qs[idx].question}</h4>
<form id="ans">
    <input type="radio" id="ans1" name="ansCh" onclick="showNextBtn()" value="answer1">
    <label for="ans1">${Qs[idx].answer1.answer}</label><br><br>

    <input type="radio" id="ans2" name="ansCh" onclick="showNextBtn()" value= "answer2">
    <label for="ans2">${Qs[idx].answer2.answer}</label><br><br>

    <input type="radio" id="ans3" name="ansCh" onclick="showNextBtn()" value= "answer3">
    <label for="ans3">${Qs[idx].answer3.answer}</label><br><br>

    <input type="radio" id="ans4" name="ansCh" onclick="showNextBtn()" value= "answer4">
    <label for="ans4">${Qs[idx].answer4.answer}</label><br><br>
</form>
`
}
function pressNext() {
    evalAnswer(globalIdx);
}
//todo, fix check to also check if a question has already been answered
// completely remove it from the array if so.
