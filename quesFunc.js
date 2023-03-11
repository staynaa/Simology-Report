const total = Qs.length; //json questions


console.log("Total Questions:" + total); //debug
const questions = new Array(total);
console.log("Array Size: " + questions.length); //debug
for (var i = 0; i < questions.length; i++) {
    questions[i] = i + 1;
}
for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]); //debug
}
//ask what packs does the user have
var owned;
function getPacks() {
    var opt = document.getElementsByClassName('packs');
    console.log(opt[0].value);
    for (var i = 0; opt.length; i++) {
        if (opt[i].checked) {
            owned = opt[i].value;
            break;
        }
    }
    console.log(owned.length);
}