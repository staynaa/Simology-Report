const qTotal = Qs.length; //json questions
const quizdiv = document.querySelector('.quizContainer');


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
const nextQ = document.getElementById("next");
function hidePackQuestion() {
    packquest.style.display = "none"; //
    nextQ.style.display = "block";
}
function print(idx) {
    quizdiv.innerHTML = `
<h4>${Qs[idx].question}</h4>
<form id="ans">
    <input type="radio" id="ans1">
    <label for="ans1">${Qs[idx].answer1.answer}</label><br><br>

    <input type="radio" id="ans2">
    <label for="ans1">${Qs[idx].answer2.answer}</label><br><br>

    <input type="radio" id="ans3">
    <label for="ans1">${Qs[idx].answer3.answer}</label><br><br>

    <input type="radio" id="ans4">
    <label for="ans1">${Qs[idx].answer4.answer}</label><br><br>
</form>
`
}