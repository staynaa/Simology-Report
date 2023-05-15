const resultdiv = document.querySelector('.resultContainer'); //where results will display
var asp = new Map();
var traits = new Map();
var likes = new Map();
var jobs = new Map();
var occult = new Map();
var style = new Map();
var walkstyle = new Map();
var worlds = [];
var voice = ["Candy", "Music Symbol", "Bird", "Bell", "Fire", "Trumpet"];
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
var fname, lname;
var aspSrc, aspText;
var trait1Src, trt1Text, trait2Src, trt2Text, trait3Src, trt3Text;
var likes1Src, likes2Src, likes3Src, dis1Src, dis2Src, dis3Src;
var jobSrc, worldSrc, occultSrc;
//defaults
occult.set("Default", 3);
walkstyle.set("Default Walk", 5);
walkstyle.set("Perky Walk", 0);
walkstyle.set("Snooty Walk", 0);
walkstyle.set("Swagger Walk", 0);
walkstyle.set("Feminine Walk", 0);
walkstyle.set("Tough Walk", 0);
walkstyle.set("Goofy Walk", 0);
walkstyle.set("Sluggish Walk", 0);
walkstyle.set("Bouncy Walk", 0);
style.set("Normcore", 0);
style.set("Gothcore", 0);
style.set("Athletic Wear", 0);
style.set("Preppy", 0);
style.set("Soft", 0);
style.set("Streetwear", 0)
style.set("Cottagecore", 0)
style.set("Academia", 0)
style.set("Grunge", 0)
style.set("Beachy", 0)


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
            jobs.set('Astronaut', 0);
            jobs.set('Athlete', 0);
            jobs.set('Business', 0);
            jobs.set('Criminal', 0);
            jobs.set('Culinary', 0);
            jobs.set('Entertainer', 0);
            jobs.set('Freelance', 0);
            jobs.set('Painter', 0);
            jobs.set('Secret Agent', 0);
            jobs.set('Style Influencer', 0);
            jobs.set('Writer', 0);
            //worlds
            worlds.push("Willow Creek");
            worlds.push("Oasis Springs");
            worlds.push("Newcrest");
            //likes
            likes.set('Comedy', 0);
            likes.set('Cooking', 0);
            likes.set('Fishing', 0);
            likes.set('Fitness', 0);
            likes.set('Gardening', 0);
            likes.set('Guitar', 0);
            likes.set('Handiness', 0);
            likes.set('Mischief', 0);
            likes.set('Mixology', 0);
            likes.set('Painting', 0);
            likes.set('Piano', 0);
            likes.set('Programming', 0);
            likes.set('Rocket Science', 0);
            likes.set('Video Gaming', 0);
            likes.set('Violin', 0);
            likes.set('Writing', 0);
            likes.set('Alternative Music', 0);
            likes.set('Blues Music', 0);
            likes.set('Classical Music', 0);
            likes.set('Electronica Music', 0);
            likes.set('Hip Hop Music', 0);
            likes.set('Kids Music', 0);
            likes.set('Lullabies Music', 0);
            likes.set('Pop Music', 0);
            likes.set('Retro Music', 0);
            likes.set('Romance Music', 0);
            likes.set('S-Pop Music', 0);
            likes.set('Spooky Music', 0);
            likes.set('World Music', 0);
            likes.set('Winter Holiday Music', 0);
        }
        if (packsOwned[i] === "Get To Work") {
            occult.set("Alien", 0);
            jobs.set("Doctor", 0);
            jobs.set("Scientist", 0);
            jobs.set("Detective", 0);
            likes.set("Easy Listening Music", 0);
            likes.set("Baking", 0);
            likes.set("Photography", 0);
        }
        if (packsOwned[i] === "Get Together") {//EP
            asp.set("Leader of The Pack", 0);
            traits.set("Insider", 0);
            traits.set("Dance Machine", 0)
            worlds.push("Windenburg");
            likes.set("DJ Mixing", 0)
            likes.set("Dancing", 0);
            likes.set("DJ Booth Music", 0);
        }
        if (packsOwned[i] === "City Living") {//EP
            asp.set("City Native", 0);
            traits.set("Unflirty", 0);
            worlds.push("San Myshuno");
            likes.set("Singing", 0);
            jobs.set("Critic",0);
            jobs.set("Politician",0);
            jobs.set("Social Media",0);
        }
        if (packsOwned[i] === "Cats & Dogs") { //EP
            asp.set("Friend of Animals", 0);
            traits.set("Cat Lover", 0);
            traits.set("Dog Lover", 0);
            worlds.push("Brindleton Bay");
            likes.set("Singer-Songwriter Music", 0);

        }
        if (packsOwned[i] === "Get Famous") { //EP
            asp.set("World-Famous Celebrity", 0);
            asp.set("Master Actor", 0);
            traits.set("Self-absorbed", 0);
            worlds.push("Del Sol Valley");
            likes.set("Acting", 0);
            likes.set("Media Production", 0);
            jobs.set("Actor/Actress",0);
        }
        if (packsOwned[i] === "Island Living") { //EP
            asp.set("Beach Life", 0);
            traits.set("Child of the Islands", 0);
            traits.set("Child of the Ocean", 0);
            occult.set("Mermaid", 0);
            worlds.push("Sulani");
            likes.set("Island Radio Music", 0);
            jobs.set("Conservationist",0);
        }
        if (packsOwned[i] === "Discover University") { //EP
            asp.set("Academic", 0);
            worlds.push("Britechester");
            likes.set("Research & Debate", 0);
            likes.set("Robotics", 0);
            jobs.set("Education",0);
            jobs.set("Engineer",0);
            jobs.set("Law",0);
        }
        if (packsOwned[i] === "Eco Lifestyle") { //EP
            asp.set("Eco Innovator", 0);
            asp.set("Master Maker", 0);
            traits.set("Freegan", 0);
            traits.set("Green Fiend", 0);
            traits.set("Recycle Disciple", 0);
            traits.set("Maker", 0);
            worlds.push("Evergreen Harbor");
            jobs.set("Civil Designer",0);
        }
        if (packsOwned[i] === "Snowy Escape") { //EP
            asp.set("Extreme Sports Enthusiast", 0);
            asp.set("Mt.Komorebi Sightseer", 0);
            traits.set("Adventurous", 0);
            traits.set("Proper", 0);
            worlds.push("Mt. Komorebi");
            likes.set("Rock Climbing", 0);
            likes.set("Skiing", 0);
            likes.set("Snowboarding", 0);
            likes.set("Japanese Folk Music", 0);
            jobs.set("Salaryperson",0);
        }
        if (packsOwned[i] === "Cottage Living") { //EP
            asp.set("Country Caretaker", 0);
            traits.set("Animal Enthusiast", 0);
            traits.set("Lactose Intolerant", 0);
            worlds.push("Henford-on-Bagley");
            likes.set("Cross-stitch", 0);
            likes.set("Cottagecore Music", 0);
        }
        if(packsOwned[i]==="Outdoor Retreat"){ //GP
            asp.set("Outdoor Enthusiast",0);
            traits.set("Squeamish",0);
        }
        if(packsOwned[i]==="Spa Day"){ //GP
            asp.set("Inner Peace",0);
            asp.set("Self-Care",0);
            asp.set("Zen Guru",0);
            traits.set("High Maintenance",0);
            likes.set("Wellness", 0);
            likes.set("New Age Music", 0);
        }
        if(packsOwned[i]==="Vampires"){ //GP
            asp.set("Vampire Family",0);
            asp.set("Master Vampire",0);
            asp.set("Good Vampire",0);
            worlds.push("Forgotten Hollow");
            likes.set("Pipe Organ", 0);
            occult.set("Vampire",0);
        }
        if(packsOwned[i]==="Parenthood"){ //GP
            asp.set("Super Parent",0);
        }
        if(packsOwned[i]==="Jungle Adventure"){ //GP
            asp.set("Jungle Explorer",0);
            asp.set("Archaeology Scholar",0);
            likes.set("Latin Pop Music", 0);
            likes.set("Latin Music", 0);
        }
        if(packsOwned[i]==="StarngerVille"){ //GP
            asp.set("StrangerVille Mystery",0);
            traits.set("Paranoid",0);
            jobs.set("Military",0);
            worlds.push("StrangerVille");
            likes.set("Strange Tunes Music", 0);
        }
        if(packsOwned[i]==="Realm Of Magic"){ //GP
            asp.set("Pureveyor Of Potions",0);
            asp.set("Spellcraft & Sorcery",0);
            worlds.push("Glimmerbrook");
            occult.set("Spellcaster", 0);
        }
        if(packsOwned[i]==="Werewolves"){ //GP
            asp.set("Lone Wolf",0);
            asp.set("Emissary Of The Collective",0);
            asp.set("Wildfang Renegade",0);
            asp.set("Cure Seeker",0);
            worlds.push("Moonwood Mill");
            occult.set("Werewolves", 0);
        }
        if(packsOwned[i]==="Nifty Knitting"){ //GP
            asp.set("Lord/Lady Of The Knits",0);
            likes.set("Metal Music", 0);
        }
        if(packsOwned[i]==="Bust The Dust"){ //GP 
            asp.set("Perfectly Pristine",0);
            asp.set("Fabulously Filthy",0);
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

function getImages() {
    //console.log(images.Bodybuilder.source)
    //console.log(resultAsp)
    aspSrc = images[resultAsp].source; //get the result asp
    //console.log(aspSrc);
    trait1Src = images[resultTraits[0]].source;
    trait2Src = images[resultTraits[1]].source;
    trait3Src = images[resultTraits[2]].source;
    likes1Src = images[resultLikes[0]].source;
    likes2Src = images[resultLikes[1]].source;
    likes3Src = images[resultLikes[2]].source;
    dis1Src = images[resultDislikes[0]].source;
    dis2Src = images[resultDislikes[1]].source;
    dis3Src = images[resultDislikes[2]].source;
    worldSrc = images[resultWorld].source;
    occultSrc = images[resultOccult].source;
    fname = firstname[Math.floor(Math.random() * firstname.length)];
    lname = lastname[Math.floor(Math.random() * lastname.length)];
    aspText = images[resultAsp].text;
    trt1Text = images[resultTraits[0]].text;
    trt2Text = images[resultTraits[1]].text;
    trt3Text = images[resultTraits[2]].text;
}



function printResults() {
    getImages();
    resultdiv.style.display = "block";
    resultdiv.innerHTML =
        `
    <div class="container">
        <div class="sim_name">
            <h2>Name: ${fname} ${lname}</h2>
        </div>
        <div class="aspirations">
        <div class= aspLabel>
            <h3>Aspiration: ${resultAsp}</h3>
           <img class="aspImg" src="../${aspSrc}">
        </div>
           <h4 class="aspTxt">${aspText}</h4>
        </div>
        <div class="trait1">
            <img class="trtImg" src="../${trait1Src}">
            <h3>${resultTraits[0]}</h3>
            <h4>${trt1Text}</h4>
        </div>
        <div class="trait2">
            <img class="trtImg" src="../${trait2Src}">
            <h3>${resultTraits[1]}</h3>
            <h4>${trt2Text}</h4>
        </div>
        <div class="trait3">
            <img class="trtImg" src="../${trait3Src}">
            <h3>${resultTraits[2]}</h3>
            <h4>${trt3Text}</h4>
        </div>
        <div class="likes">
            <h3>Likes</h3>
            <ul class="likesList">
                <li><img class="likeImg" src="../${likes1Src}"><h4>${resultLikes[0]}</h4></li>
                <li><img class="likeImg" src="../${likes2Src}"><h4>${resultLikes[1]}</h4></li>
                <li><img class="likeImg" src="../${likes3Src}"><h4>${resultLikes[2]}</h4></li>
            </ul>
        </div>
        <div class="dislikes">
            <h3>Dislikes</h3>
            <ul class="likesList">
                <li><img class="dislikeImg" src="../${dis1Src}"><h4>${resultDislikes[0]}</h4></li>
                <li><img class="dislikeImg" src="../${dis2Src}"><h4>${resultDislikes[1]}</h4></li>
                <li><img class="dislikeImg" src="../${dis3Src}"><h4>${resultDislikes[2]}</h4></li>
            </ul>
        </div>
        <div class="world">
            <h3>You live in <em>${resultWorld}</em></h3>
            <img class="worldImg" src="../${worldSrc}">
        </div>
        <div class="fashion">
            <h3>Fashion Aesthetic: <em>${resultFashion}</em></h3>
        </div>
        <div class="voice">
            <h3>Voice Pitch: <em>${resultVoice}</em></h3>
        </div>
        <div class="occult">
            <h3>${resultOccult} Sim</h3>
            <img class="occultImg" src="../${occultSrc}">
        </div>
        <div class="walk">
            <h3>Walk Style: <em>${resultWalk}</em></h3>
        </div>
    </div>

      <div class="mobileContainer">
        <div class="sim_name">
            <h2>${fname} ${lname}</h2>
        </div>
        <div class="occult">
            <p><em>Occult:</em> ${resultOccult} Sim</p>
        </div>
        <div class="world">
            <p><em>Location:</em> ${resultWorld}</p>
        </div>
        <div class="walk">
            <p><em>Walk Style:</em> ${resultWalk}</p>
        </div>
        <div class="voice">
            <p><em>Voice Pitch:</em> ${resultVoice}</p>
        </div>
        <div class="fashion">
            <p><em>Fashion Aesthetic:</em> ${resultFashion}</p>
        </div>
        <div class="aspirations">
            <h3>Aspiration:</h3>
           <p class="aspTxt"><em>${resultAsp}:</em> ${aspText}</p>
        </div>
        <div class="TraitsCont">
            <h3>Traits:</h3>
            <div class="trait1">
                <p><em>${resultTraits[0]}:</em> ${trt1Text}</p>
            </div>
            <div class="trait2">
                <p><em>${resultTraits[1]}:</em> ${trt2Text}</p>
            </div>
            <div class="trait3">
                <p><em>${resultTraits[2]}:</em> ${trt3Text}</p>
            </div>
        </div>
        <div class="likeCont">
            <div class="likes">
                <p>Likes: ${resultLikes[0]}, ${resultLikes[1]}, ${resultLikes[2]}</p>
            </div>
            <div class="dislikes">
                <p>Dislikes: ${resultDislikes[0]}, ${resultDislikes[1]}, ${resultDislikes[2]}</p>
            </div>
        </div>
      </div>

      <div class="saveButton">
            <input type="button" class="button" value="Save Report" onClick="saveLocally()">
        </div> 
`
}
function saveLocally() {
    localStorage.setItem("firstname",fname);
    localStorage.setItem("lastname",lname);
    localStorage.setItem("world",resultWorld);
    localStorage.setItem("voice",resultVoice);
    localStorage.setItem("occult",resultOccult);
    localStorage.setItem("walk",resultWalk);
    localStorage.setItem("fashion",resultFashion);
    localStorage.setItem("asp",resultAsp);
    localStorage.setItem("trait1",resultTraits[0]);
    localStorage.setItem("trait2",resultTraits[1]);
    localStorage.setItem("trait3",resultTraits[2]);
    localStorage.setItem("like1",resultLikes[0]);
    localStorage.setItem("like2",resultLikes[1]);
    localStorage.setItem("like3",resultLikes[2]);
    localStorage.setItem("dislike1",resultDislikes[0]);
    localStorage.setItem("dislike2",resultDislikes[1]);
    localStorage.setItem("dislike3",resultDislikes[2]);
    alert("Saved your report!");
    // console.log(localStorage);

}
