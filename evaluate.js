//let questions=JSON.parse(Qs);
//console.log(Qs)
var obj;
function evaluate(choice, index) {
    console.log(index+" and "+choice)
    obj = Qs[index][choice];
    console.log("in evaluate.js");
    //if(Qs[index].hasOwnProperty(choice)) console.log("true");
    console.log(obj.answer);
    if (obj.hasOwnProperty("aspiration")) {
        console.log("Has aspiration: ");
        console.log("--->" + obj.aspiration);
        addAsp(obj.aspiration);
    }
    else console.log("no aspiration present for this answer");
    if (obj.hasOwnProperty("traits")) {
        var trt = Object.keys(obj.traits.trait); //store trait keys 
        var trtVal = Object.values(obj.traits.trait); //store the keys values
        var conflicts = obj.traits.conflicts;
        for (var i = 0; i < trt.length; i++) {
            console.log("Trait " + (i + 1) + "----> " + trt[i]);
            console.log("Trait Value " + (i + 1) + "----> " + trtVal[i]);
            addTraits(trt[i], trtVal[i]);//send current key and value 
        }
        if (obj.traits.hasOwnProperty("conflicts")) { //check if the trait has conflicts
            console.log("has a conflict");
            for (var i = 0; i < conflicts.length; i++) {
                console.log("conflict--->" + conflicts[i]);
                subtractConflicts(conflicts[i]);
            }
        }
    } 
    //for job
    if(obj.hasOwnProperty("job")){
        console.log("has a job: ");
        console.log("--->" + obj.job);
        addJob(obj.job)
    }
    //for likes
    if(obj.hasOwnProperty("likes")){
        var likes = Object.keys(obj.likes); //store like keys 
        var likeVal = Object.values(obj.likes); //store the keys values
        for (var i = 0; i < likes.length; i++) {
            addLikes(likes[i], likeVal[i]);//send current key and value 
        }
    }
    // for dislikes 
    if(obj.hasOwnProperty("dislikes")){
        var dislikes = Object.keys(obj.dislikes); //store dislike keys 
        var dislikeVal = Object.values(obj.dislikes); //store the keys values
        for (var i = 0; i < dislikes.length; i++) {
            subtractDislikes(dislikes[i], dislikeVal[i]);//send current key and value 
        }
    }
    // for style 
    if (obj.hasOwnProperty("style")) {
        addStyle(obj.style);
    }
    // for walkstyle
    if (obj.hasOwnProperty("walkstyle")) {
        addWalkStyle(obj.walkstyle);
    }
    // for occult
    if (obj.hasOwnProperty("occult")) {
        addOccult(obj.occult);
    }
}