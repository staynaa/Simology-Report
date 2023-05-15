//variables used in this script
const qTotal = Qs.length; //size json questions from questions.js
const quizSec = document.querySelector('.page2');
const quizdiv = document.querySelector('.quizContainer'); //where quiz questions ans answer will display
const next = document.getElementById("nextbtn"); //next button
const skip = document.getElementById("skipbtn");//skip button 

var amountAnswered = 0;//amount of questions answered, only 20 questions should be answered
const max = 20;//max amount of questions that the user can answer (getMax)
var glbIdx;

//console.log(Qs[0].answer1.traits.trait[0]);
// var kys=Object.keys(Qs[0].answer1.traits.trait)
// console.log(kys[0]);

//FUNCTION-> ask what packs does the user have, and put them in an array
var owned = ["Base Game"]; //by default all users have basegame
function getPacks() {
    var opt = document.getElementsByClassName('packs'); //stores the elements of checkbox form 
    var index = 1;//instead of using i for owned, we use index so that it only increments when owned gets a new element.
    for (var i = 0; i < opt.length; i++) {
        if (opt[i].checked == true) {
            ///*DEBUG*/ console.log("In if statement meaning "+opt[i].value+" is checked");
            owned[index] = opt[i].value;
            index++; //can now be incremented since an element value was added to the array
        }
    }
    //after getting all packs...
    setKeys(owned);
    hidePackQuestion(); //hides the check box form
    getUserQs(); //goesthrough questions in the json, searches and stores all possible questions the user can answer.
}
var userQs = []; //question ids of questions user can answer will be stored here
var skippedArr = []; //questions user skipped (index is being stored)
var answeredArr = []; //questions user answered (index is being stored)

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
    /*//DEBUG
    console.log("total user questions: " + userQs.length)
    for (var j = 0; j < userQs.length; j++) {
        console.log("index: " + j + " value-> " + userQs[j]);
        console.log((j + 1) + ": " + Qs[j].question)
    }*/

    console.log("--------Now Displaying a question...")
    displayQandAs();
}
/* Functions Display Questions for user, randomly
the getRand function will return a number between 0 and userQs.length-1
we use that as an index, which we'll use to get the question id,
and display it's question
 */
function getRand() {
    return Math.floor((Math.random() * userQs.length)); //get random index from 0
}
function checkSkipped(x) {
    // console.log("Total questions-> " + userQs.length)
    // console.log("Amount of questions skipped-> " + skippedArr.length);
    if (skippedArr.length === 0) { //if empty?
        return false;
    }
    else if (skippedArr.length < userQs.length) { //less than user's question
        if (skippedArr.length + answeredArr.length === userQs.length) {
            // console.log("All possible questions have been asked, starting over...");
            skippedArr.length = 0; //clears the asked array to now make it empty.
            return true;
        }
        else {
            for (var i = 0; i < skippedArr.length; i++) {
                // console.log("random= " + x + " skipped element we check= " + skippedArr[i]);
                if (x === skippedArr[i]) {
                    return true;
                }
            }
            return false;
        }
    }
    else if (skippedArr.length === userQs.length ||
        skippedArr.length + answeredArr.length === userQs.length) { // of asked.length is full, has all
        // console.log("All possible questions have been asked, starting over...");
        skippedArr.length = 0; //clears the asked array to now make it empty.
        return true;
    }
}

function checkAnswered(x) {
    //console.log("Total questions-> " + userQs.length)
    // console.log("Amount of questions answered-> " + answeredArr.length);
    if (answeredArr.length === 0) { //if empty?
        return false;
    }
    else if (answeredArr.length < userQs.length) { //less than user's question
        for (var i = 0; i < answeredArr.length; i++) {
            // console.log("random= " + x + " answered element we check= " + answeredArr[i]);
            if (x === answeredArr[i]) {
                return true;
            }
        }
        return false;
    }
}

function displayQandAs() {
    if (next.style.display === "block") next.style.display = "none"; //make sure next isn't visible when a question is asked
    var rand = getRand(); //random index
    debugLog();//debug
    var skipped = checkSkipped(rand);
    var answered = checkAnswered(rand);
    while (skipped || answered) { //atleast one needs to be true
        // console.log("ASKED ALREADY, TRYING AGAIN")
        rand = getRand(); //get a different random value for the index again
        skipped = checkSkipped(rand); //check again
        answered = checkAnswered(rand); //check again
    }
    if (!skipped && !answered) { //if false
        // console.log("random value= " + rand)
        glbIdx = rand; //store globally
        print(glbIdx);//send idx to function that'll display in html
        // console.log("random index userQs= " + glbIdx);
        // console.log(Qs[glbIdx].question)
        // console.log("1: " + Qs[glbIdx].answer1.answer)
        // console.log("2: " + Qs[glbIdx].answer2.answer)
        // console.log("3: " + Qs[glbIdx].answer3.answer)
        // console.log("4: " + Qs[glbIdx].answer4.answer)
        //asked.push(rand) //add that to the asked array so it won't be asked again
        //console.log("Amount of questions asked now-> " + asked.length)
    }
}
//showing and hiding the divs of the question...
const packquest = document.getElementById("gettingPacks");
const skipQ = document.getElementById("skipbtn");
function hidePackQuestion() { //hides the what pack you have question
    packquest.style.display = "none"; //hides
    quizSec.style.display = "block";
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
    evaluate(chosen, index);//send in chosen andindex to get values from json and storein map
    //console.log(chosen);
    amountAnswered++;//increment and call display for new question
    console.log(amountAnswered + "<--- questions answered")
    if (amountAnswered < userQs.length) displayQandAs();
    else {
        console.log("Quiz Done");
        quizdiv.style.display = "none";
        next.style.display = "none";
        skipQ.style.display = "none";
        quizSec.style.display = "block"
        getResults();
    }
}
//showing and hiding next button when an option is selected

function print(idx) { //display quiz with questions and answers in html
    quizdiv.style.display = "block";
    quizdiv.innerHTML = `
<div class="quizbox">
    <h1 id="countText">${amountAnswered + 1}/${max}</h1>
    <h1 id="questionText">${Qs[idx].question}</h1>
    <h4>Select an answer below</h4>
    <div class="formbox">
        <ul id="answersList">
        <div class="topAns">
            <li class="ansbox">
                <input type="radio" id="ans1" name="ansCh" onclick="showNextBtn()" value="answer1">
                <label for="ans1"><div class="ansText">${Qs[idx].answer1.answer}</div></label><br><br>
            </li>
            <li class="ansbox">
                <input type="radio" id="ans2" name="ansCh" onclick="showNextBtn()" value= "answer2">
                <label for="ans2"><div class="ansText">${Qs[idx].answer2.answer}</div></label><br><br>
            </li>
        </div>
        <div class="bottomAns>
            <li class="ansbox">
                <input type="radio" id="ans3" name="ansCh" onclick="showNextBtn()" value= "answer3">
                <label for="ans3"><div class="ansText">${Qs[idx].answer3.answer}</div></label><br><br>
            </li>
            <li class="ansbox">
                <input type="radio" id="ans4" name="ansCh" onclick="showNextBtn()" value= "answer4">
                <label for="ans4"><div class="ansText">${Qs[idx].answer4.answer}</div></label><br><br>
            </li>
            </div>
        </ul>
    </div>
</div>
`
}
function pressNext() {
    answeredArr.push(glbIdx);
    evalAnswer(glbIdx);
}
function pressSkip() {
    skippedArr.push(glbIdx)
    displayQandAs();
}
//todo, fix check to also check if a question has already been answered
// completely remove it from the array if so.

function debugLog() { //for console
    console.log("Questions: ")
    console.log(...userQs)
    console.log("answered: ")
    console.log(...answeredArr)
    console.log("skipped: ")
    console.log(...skippedArr)
}