//let questions=JSON.parse(Qs);
//console.log(Qs)
var obj;
function evaluate(choice, index) {
    obj = Qs[index][choice];
    console.log("in evaluate.js");
    //if(Qs[index].hasOwnProperty(choice)) console.log("true");
    console.log(obj.answer);
    if (obj.hasOwnProperty("aspiration")) {
        console.log("Has aspiration: ");
        console.log("--->" + obj.aspiration);
        addAsp(obj.aspiration);
    }
    if (obj.hasOwnProperty("traits")) {
        var trt=Object.keys(obj.traits.trait); //store trait keys 
        var trtVal=Object.values(obj.traits.trait); //store the keys values
        for(var i=0;i<trt.length;i++){
            console.log("Trait "+(i+1)+"----> "+trt[i]);
            console.log("Trait Value "+(i+1)+"----> "+trtVal[i]);
        }
    }
    else console.log("no aspiration present for this answer");
}