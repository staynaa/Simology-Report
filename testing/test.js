/*
map of aspirations, key: aspiration | value: score
    key with the highest value will be the chosen aspiration
    getAspiration method, compare values finding the max
map of traits, key: trait | value: score
    top 3 keys with the highest values will be chosen
    getTraits method, return 3 traits

we want to check the answer chosen:
    *1) look if that answer has an aspiration linked to it, 
    if so, we increment that aspiration
    *2) check what traits are linked to the answer, 
    look for the traits weight and add that to the trait's value.
    *3) look for conflict, decrement that traits value
*/
//maps
var asp = new Map(); //aspiration
var traits = new Map();
var likes = new Map();
var jobs = new Map();
var species = new Map();
var style = new Map();
//aspirations BASEGAME
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
//traits BASEGAME
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
console.log("Aspirations: " + asp.size)
console.log("Aspirations: " + traits.size)
//get random
function getRandomInt() {
    return Math.floor(Math.random() * 5);
}
const totalQuestions = BaseGameQs.length;
console.log(totalQuestions);
//console.log(packs);
//likes BASEGAME

//jobs BASEGAME

/*FUNCTIONS WE'LL NEED
getAspiration, return the 
getTraits, for loop to return three traits
*/