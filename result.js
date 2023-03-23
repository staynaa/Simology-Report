const resultdiv = document.querySelector('.resultContainer'); //where results will display
var asp = new Map();
var traits = new Map();
var likes = new Map();
var jobs = new Map();
var species = new Map();
var style = new Map();
var curval;
var conflictVal=[];

var resultAsp;
var resultTraits = [];

function addAsp(aspval) {
    curval = asp.get(aspval)
    asp.set(aspval, curval + 1);
    debugAsp();
}
function addTraits(trtKey,trtVal){ //adds trait values.
    curval = traits.get(trtKey)
    traits.set(trtKey,(curval+trtVal));
    debugTrt();
}
function subtractConflicts(){ //looks at the associated conflicts of the traits and subtracts 1 from them.

}
function debugAsp() {
    for (const [key, value] of asp) {
        console.log(key + ' = ' + value);
    }
}
function debugTrt() {
    for (const [key, value] of traits) {
        console.log(key + ' = ' + value);
    }
}

function setKeys(packsOwned) {
    for (var i = 0; i < packsOwned.length; i++) {
        if (packsOwned[i] === "Base Game") {
            //aspirations
            asp.set('Bodybuilder', 0);
            asp.set('Painter Extraordinaire', 0);
            asp.set('Musical Genius', 0);
            asp.set('Bestselling Author', 0);
            asp.set('Public Enemy', 0);
            asp.set('Chief of Mischief', 0);
            asp.set('Villainous Valentine', 0);
            asp.set('Successful Lineage', 0);
            asp.set('Big Happy Family', 0);
            asp.set('Master Chef', 0);
            asp.set('Master Mixologist', 0);
            asp.set('Fabulously Wealthy', 0);
            asp.set('Mansion Baron', 0);
            asp.set('Renaissance Sim', 0);
            asp.set('Nerd Brain', 0);
            asp.set('Computer Whiz', 0);
            asp.set('Serial Romantic', 0);
            asp.set('Soulmate', 0);
            asp.set('Freelance Botanist', 0);
            asp.set('The Curator', 0);
            asp.set('Angling Ace', 0);
            asp.set('Joke Star', 0);
            asp.set('Party Animal', 0);
            asp.set('Friend of The World', 0);
            asp.set('Neighborhood Confidante', 0);
            //traits
            traits.set('Active', 0);
            traits.set('Cheerful', 0);
            traits.set('Creative', 0);
            traits.set('Genius', 0);
            traits.set('Gloomy', 0);
            traits.set('Goofball', 0);
            traits.set('Hot-Headed', 0);
            traits.set('Romantic', 0);
            traits.set('Self-assured', 0);
            traits.set('Art Lover', 0);
            traits.set('Bookworm', 0);
            traits.set('Foodie', 0);
            traits.set('Geek', 0);
            traits.set('Music Lover', 0);
            traits.set('Perfectionist', 0);
            traits.set('Ambitious', 0);
            traits.set('Childish', 0);
            traits.set('Clumsy', 0);
            traits.set('Erratic', 0);
            traits.set('Glutton', 0);
            traits.set('Kleptomaniac', 0);
            traits.set('Lazy', 0);
            traits.set('Loves Outdoors', 0);
            traits.set('Materialistic', 0);
            traits.set('Neat', 0);
            traits.set('Slob', 0);
            traits.set('Snob', 0);
            traits.set('Vegetarian', 0);
            traits.set('Bro', 0);
            traits.set('Evil', 0);
            traits.set('Family-oriented', 0);
            traits.set('Noncommittal', 0);
            traits.set('Good', 0);
            traits.set('Hates Children', 0);
            traits.set('Jealous', 0);
            traits.set('Loner', 0);
            traits.set('Loyal', 0);
            traits.set('Mean', 0);
            traits.set('Outgoing', 0);
        }
    }
}
function getResults(){
    getAsp();
    getTraits();
    printResults();
}
function getAsp() {
    var maxVal = 0;
    var maxKey;
    for (const [key, value] of asp) {
        if (value > maxVal) {
            maxVal = value
            maxKey = key;
        }
    }
    resultAsp = maxKey;
}

function getTraits(){
   var sortTrait=new Map([...traits.entries()].sort((a,b)=>b[1]-a[1])); //sort map of traits descending order
   resultTraits=[...sortTrait.keys()]
   num=resultTraits.length-1
   for(var i=num;i>2;i--){
       resultTraits.pop;
   }
}

function printResults() {
    resultdiv.innerHTML =
        `
<h4>Results:</h4>
<ul>
    <li>Your Aspiration: ${resultAsp}</li>
    <li>Traits:
        <ul>
            <li>${resultTraits[0]}</li>
            <li>${resultTraits[1]}</li>
            <li>${resultTraits[2]}</li>
    </li>
<ul>

`
}