const resultdiv = document.querySelector('.resultContainer'); //where results will display
var asp = new Map();
var traits = new Map();
var likes = new Map();
var jobs = new Map();
var occult = new Map();
var style = new Map();
var walkstyle = new Map();
var worlds = [];
var voice = ["Candy","Music Symbol","Bird","Bell","Fire","Trumpet"];
var curval;
var conflictVal = [];

var resultAsp;
var resultTraits = [];
var resultLikes = [];
var resultDislikes = [];
var resultJob;
var resultWalk;
var resultFashion;
var resultVoice;
var resultWorld;
//defaults
occult.set("Default",3);
walkstyle.set("Default Walk",5);
walkstyle.set("Perky Walk",0);
walkstyle.set("Snooty Walk",0);
walkstyle.set("Swagger Walk",0);
walkstyle.set("Feminine Walk",0);
walkstyle.set("Tough Walk",0);
walkstyle.set("Goofy Walk",0);
walkstyle.set("Sluggish Walk",0);
walkstyle.set("Bouncy Walk",0);
style.set("Normcore",0);
style.set("Gothcore",0);
style.set("Athletic Wear",0);
style.set("Preppy",0);
style.set("Soft",0);
style.set("Streetwear",0)
style.set("Cottagecore",0)
style.set("Academia",0)
style.set("Grunge",0)
style.set("Beachy",0)


function addAsp(aspval) {
    if (asp.has(aspval)) {
        curval = asp.get(aspval)
        asp.set(aspval, curval + 1);
    }
    debugAsp();
}
function addTraits(trtKey, trtVal) { //adds trait values.
    if (traits.has(trtKey)) {
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
function addJob(jobVal) {
    if (jobs.has(jobVal)) {
        curval = jobs.get(jobVal)
        jobs.set(jobVal, curval + 1);
    }
}
function addLikes(likeKey, LikeVal) {
    if (likes.has(likeKey)) {
        curval = likes.get(likeKey)
        likes.set(likeKey, (curval + LikeVal));
    }
}
function subtractDislikes(disKey, disVal) {
    if (likes.has(disKey)) {
        curval = likes.get(disKey)
        likes.set(disKey, (curval - disVal));
    }
}
function addStyle(styleVal) {
    if (style.has(styleVal)) {
        curval = style.get(styleVal)
        style.set(styleVal, curval + 1);
    }
}
function addWalkStyle(walkVal) {
    if (walkstyle.has(walkVal)) {
        curval = walkstyle.get(walkVal)
        walkstyle.set(walkVal, curval + 1);
    }
}
function addOccult(occultVal) {
    if (occult.has(occultVal)) {
        curval = occult.get(occultVal)
        occult.set(occultVal, curval + 2);
    }
}
//-----------
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
            //careers
            jobs.set('Astronaut',0);
            jobs.set('Athlete',0);
            jobs.set('Business',0);
            jobs.set('Criminal',0);
            jobs.set('Culinary',0);
            jobs.set('Entertainer',0);
            jobs.set('Freelance',0);
            jobs.set('Painter',0);
            jobs.set('Secret Agent',0);
            jobs.set('Style Influencer',0);
            jobs.set('Writer',0);
            //worlds
            worlds.push("Willow Creek");
            worlds.push("Oasis Springs");
            worlds.push("Newcrest");
            //likes
            likes.set('Comedy',0);
            likes.set('Cooking',0);
            likes.set('Fishing',0);
            likes.set('Fitness',0);
            likes.set('Gardening',0);
            likes.set('Guitar',0);
            likes.set('Handiness',0);
            likes.set('Mischief',0);
            likes.set('Mixology',0);
            likes.set('Painting',0);
            likes.set('Piano',0);
            likes.set('Programming',0);
            likes.set('Rocket Science',0);
            likes.set('Video Gaming',0);
            likes.set('Violin',0);
            likes.set('Writing',0);
            likes.set('Alternative Music',0);
            likes.set('Blues Music',0);
            likes.set('Classical Music',0);
            likes.set('Electronica Music',0);
            likes.set('Hip Hop Music',0);
            likes.set('Kids Music',0);
            likes.set('Lullabies Music',0);
            likes.set('Pop Music',0);
            likes.set('Retro Music',0);
            likes.set('Romance Music',0);
            likes.set('S-Pop Music',0);
            likes.set('Spooky Music',0);
            likes.set('World Music',0);
            likes.set('Winter Holiday Music',0);
        }
        if (packsOwned[i] === "Get To Work") {
            occult.set("Alien", 0);
            jobs.set("Doctor",0);
            jobs.set("Scientist",0);
            jobs.set("Detective",0);
            likes.set("Easy Listening Music",0);
            likes.set("Baking",0);
            likes.set("Photography",0);
        }
        if (packsOwned[i] === "Get Together") {//EP
            asp.set("Leader of The Pack", 0);
            traits.set("Insider", 0);
            traits.set("Dance Machine", 0)
            worlds.push("Windenburg");
            likes.set("DJ Mixing",0)
            likes.set("Dancing",0);
            likes.set("DJ Booth Music",0);
        }
        if (packsOwned[i] === "City Living") {//EP
            asp.set("City Native", 0);
            traits.set("Unflirty", 0);
            worlds.push("San Myshuno");
            likes.set("Singing",0);
        }
        if (packsOwned[i] === "Cats & Dogs") { //EP
            asp.set("Friend of Animals", 0);
            traits.set("Cat Lover", 0);
            traits.set("Dog Lover", 0);
            worlds.push("Brindleton Bay");
            likes.set("Singer-Songwriter Music",0);

        }
        if (packsOwned[i] === "Get Famous") { //EP
            asp.set("World-Famous Celebrity", 0);
            asp.set("Master Actor", 0);
            traits.set("Self-absorbed", 0);
            worlds.push("Del Sol Valley");
            likes.set("Acting",0);
            likes.set("Media Production",0);
        }
        if (packsOwned[i] === "Island Living") { //EP
            asp.set("Beach Life", 0);
            traits.set("Child of the Islands", 0);
            traits.set("Child of the Ocean", 0);
            occult.set("Mermaid", 0);
            worlds.push("Sulani");
            likes.set("Island Radio Music",0);
        }
        if (packsOwned[i] === "Discover University") { //EP
            asp.set("Academic", 0);
            worlds.push("Britechester");
            likes.set("Research & Debate",0);
            likes.set("Robotics",0);
        }
        if (packsOwned[i] === "Eco Lifestyle") { //EP
            asp.set("Eco Innovator", 0);
            asp.set("Master Maker", 0);
            traits.set("Freegan", 0);
            traits.set("Green Fiend", 0);
            traits.set("Recycle Disciple", 0);
            traits.set("Maker", 0);
            worlds.push("Evergreen Harbor");
        }
        if (packsOwned[i] === "Snowy Escape") { //EP
            asp.set("Extreme Sports Enthusiast", 0);
            asp.set("Mt.Komorebi Sightseer", 0);
            traits.set("Adventurous", 0);
            traits.set("Proper", 0);
            worlds.push("Mt. Komorebi");
            likes.set("Rock Climbing",0);
            likes.set("Skiing",0);
            likes.set("Snowboarding",0);
            likes.set("Japanese Folk Music",0);
        }
        if (packsOwned[i] === "Cottage Living") { //EP
            asp.set("Country Caretaker", 0);
            traits.set("Animal Enthusiast", 0);
            traits.set("Lactose Intolerant", 0);
            worlds.push("Henford-on-Bagley");
            likes.set("Cross-stitch",0);
            likes.set("Cottagecore Music",0);
        }
    }
}
function getResults() {
    getAsp();
    getTraits();
    getJob();
    getLikes();
    getStyle();
    getWalkStyle();
    getOccult();
    getWorld();
    getVoice();
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
    var num = resultTraits.length - 1
    for (var i = num; i > 2; i--) {
        resultTraits.pop;
    }
}
function getJob() {
    var maxVal = 0;
    var maxKey;
    for (const [key, value] of jobs) {
        if (value > maxVal) {
            maxVal = value
            maxKey = key;
        }
    }
    resultJob = maxKey;
}
function getLikes() {
    var templikes = new Map([...likes.entries()].sort((a, b) => b[1] - a[1]));
    resultLikes = [...templikes.keys()];
    var num = resultLikes.length - 1;
    for (var i = num; i > 2; i--) {
        resultLikes.pop;
    }
    var tempdislikes = new Map([...likes.entries()].sort((a, b) => a[1] - b[1]));
    resultDislikes = [...tempdislikes.keys()];
    num = resultDislikes.length - 1;
    for (var i = num; i > 2; i--) {
        resultDislikes.pop;
    }
}

function getStyle() {
    var maxVal = 0;
    var maxKey;
    for (const [key, value] of style) {
        if (value > maxVal) {
            maxVal = value
            maxKey = key;
        }
    }
    resultFashion = maxKey;
}
function getWalkStyle() {
    var maxVal = 0;
    var maxKey;
    for (const [key, value] of walkstyle) {
        if (value > maxVal) {
            maxVal = value
            maxKey = key;
        }
    }
    resultWalk = maxKey;
}
function getOccult() {
    var maxVal = 0;
    var maxKey;
    for (const [key, value] of occult) {
        if (value > maxVal) {
            maxVal = value
            maxKey = key;
        }
    }
    resultOccult = maxKey;
}
function getWorld() {
    let x = Math.floor(Math.random() * worlds.length);
    resultWorld = worlds[x];
}
function getVoice() {
    let x = Math.floor(Math.random() * voice.length);
    resultVoice = voice[x];
}




function printResults() {
    resultdiv.style.display = "block";
    resultdiv.innerHTML =
        `
<h4>Results:</h4>
<p>Occult: ${resultOccult}</p>
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
        <li>${resultLikes[0]}</li>
        <li>${resultLikes[1]}</li>
        <li>${resultLikes[2]}</li>
    </ul>
    <ul class="dislikes">
        <h4>Dislikes</h4>
        <li>${resultDislikes[0]}</li>
        <li>${resultDislikes[1]}</li>
        <li>${resultDislikes[2]}</li>
    </ul>
</div>
<div class="otherResults">
    <ul>
        <li>Job: ${resultJob}</li>
        <li>Fashion Style: ${resultFashion} </li>
        <li>Walkstyle: ${resultWalk} </li>
        <li>Voice Pitch: ${resultVoice}</li>
        <li>World: ${resultWorld}</li>
    </ul>
</div>

`
}