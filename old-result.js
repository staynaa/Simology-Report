const resultdiv = document.querySelector('.resultContainer'); //where results will display
var asp = new Map();
var traits = new Map();
var likes = new Map();
var jobs = new Map();
var occult = new Map();
var style = new Map();
var curval;
var conflictVal = [];

var resultAsp;
var resultTraits = [];

function addAsp(aspval) {
    curval = asp.get(aspval)
    asp.set(aspval, curval + 1);
    debugAsp();
}
function addTraits(trtKey, trtVal) { //adds trait values.
    if (traits.has(trtKey)){
        curval = traits.get(trtKey)
        traits.set(trtKey, (curval + trtVal));
    }
}
function subtractConflicts(conflictKey) { //looks at the associated conflicts of the traits and subtracts 1 from them.
    if (traits.has(conflictKey)) {
        curval = traits.get(conflictKey);
        traits.set(conflictKey, (curval - 1));
    }
    debugTrt();
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
//put the aspirations,traits,jobs,likes,dislikes, etc in there
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
        if (packsOwned[i] === "Get To Work"){
            occult.set("Alien",0);
        }
        if (packsOwned[i]=== "Get Together") {//EP
            asp.set("Leader of The Pack",0);
            traits.set("Insider",0);
            traits.set("Dance Machine",0)
        }
        if (packsOwned[i]==="City Living"){//EP
            asp.set("City Native",0);
            traits.set("Unflirty",0);
        }
        if (packsOwned[i]==="Cats & Dogs"){ //EP
            asp.set("Friend of Animals",0);
            traits.set("Cat Lover",0);
            traits.set("Dog Lover",0);
        }
        if (packsOwned[i]==="Get Famous"){ //EP
            asp.set("World-Famous Celebrity",0);
            asp.set("Master Actor",0);
            traits.set("Self-absorbed",0);
        }
        if (packsOwned[i]==="Island Living"){ //EP
            asp.set("Beach Life",0);
            traits.set("Child of the Islands",0);
            traits.set("Child of the Ocean",0);
            occult.set("Mermaid",0);
        }
        if (packsOwned[i]==="Discover University"){ //EP
            asp.set("Academic",0);
        }
        if (packsOwned[i]==="Eco Lifestyle"){ //EP
            asp.set("Eco Innovator",0);
            asp.set("Master Maker",0);
            traits.set("Freegan",0);
            traits.set("Green Fiend",0);
            traits.set("Recycle Disciple",0);
            traits.set("Maker",0);
        }
        if (packsOwned[i]==="Snowy Escape"){ //EP
            asp.set("Extreme Sports Enthusiast",0);
            asp.set("Mt.Komorebi Sightseer",0);
            traits.set("Adventurous",0);
            traits.set("Proper",0);
        }
        if (packsOwned[i]==="Cottage Living"){ //EP
            asp.set("Country Caretaker",0);
            traits.set("Animal Enthusiast",0);
            traits.set("Lactose Intolerant",0);
        }
    }
}
function getResults() {
    getAsp();
    getTraits();
    printResults();
}
//outputing results for user to see
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

function getTraits() {
    var sortTrait = new Map([...traits.entries()].sort((a, b) => b[1] - a[1])); //sort map of traits descending order
    resultTraits = [...sortTrait.keys()]
    num = resultTraits.length - 1
    for (var i = num; i > 2; i--) {
        resultTraits.pop;
    }
}

function printResults() {
    resultdiv.style.display="block";
    resultdiv.innerHTML =
        `
<h4>Results:</h4>
<ul class="asptrt">
    <li>Your Aspiration: ${resultAsp}</li>
    <li>Traits:
        <ul>
            <li>${resultTraits[0]}</li>
            <li>${resultTraits[1]}</li>
            <li>${resultTraits[2]}</li>
        </ul>
    </li>
</ul>
<div class="likedislike">
    <ul class="likes">
        <h4>Likes</h4>
        <li>One</li>
        <li>two</li>
    </ul>
    <ul class="dislikes">
        <h4>Dislikes</h4>
        <li>One</li>
        <li>two</li>
    </ul>
</div>
<div class="otherResults">
    <ul>
        <li>Job: </li>
        <li>Fashion Style: </li>
        <li>Walkstyle: </li>
        <li>Voice Pitch: </li>
        <li>World: </li>
    </ul>
</div>

`
}