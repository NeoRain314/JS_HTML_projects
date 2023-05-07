"use strict";
// ------------------------ ''variables'' ----------------------------------------- //

const COUNT_OF_IMAGES = {
    EYES: 1,
    FUR: 1,
    PATTERN: 1,
}

const CAT_RANKS = {
    LEADER: "Leader",
    DEPUTY: "Deputy",
    MEDECINE_CAT: "Medecine Cat",
    WARRIOR: "Warrior",
    APPRENTICE: "Apprentice",
    KIT: "Kit",
    ELDER: "Elder",
};

const CAT_PRAEFIX = [
    "Acorn", "Adder", "Alder", "Amber", "Ant", "Apple", "Arch", "Ash", "Aspen", "Badger", "Bark", "Bay", "Bee", "Beech", "Beetle", "Bella", "Berry", "Big", "Billy", "Birch", "Bird", "Black", "Blaze", "Blizzard", "Bloom", "Blossom", "Blue", "Bluebell", "Boulder", "Bounce", "Bracken", "Bramble", "Brave", "Breeze", "Briar", "Bright", "Brindle", "Bristle", "Broken", "Brook", "Brown", "Brush", "Bubbling", "Bug", "Bumble", "Buzzard", "Cedar", "Cherry", "Chestnut", "Chive", "Cinder", "Cinnamon", "Claw", "Clear", "Cloud", "Clover", "Cone", "Copper", "Creek", "Cricket", "Crooked", "Crouch", "Crow", "Curl", "Curly", "Cypress", "Daisy", "Dandelion", "Dangling", "Dapple", "Dark", "Dawn", "Dead", "Deer", "Dew", "Doe", "Dove", "Down", "Drizzle", "Drift", "Duck", "Dusk", "Dust", "Eagle", "Ebony", "Echo", "Eel", "Elder", "Ember", "Fallen", "Fallow", "Fawn", "Feather", "Fennel", "Fern", "Ferret", "Fidget", "Fin", "Finch", "Fir", "Fire", "Flail", "Flame", "Flash", "Flax", "Fleet", "Flicker", "Flint", "Flip", "Flower", "Flutter", "Fly", "Fog", "Fox", "Freckle", 
    "Fringe", "Frog", "Frond", "Frost", "Furze", "Fuzzy", "Gale", "Golden", "Goose", "Gorse", "Grass", "Gravel", "Gray", "Green", "Gull", "Hail", "Half", "Hare", "Harry", "Harvey", "Hatch", "Haven", "Hawk", "Hay", "Hazel", "Heather", "Heavy", "Heron", "Hickory", "Hill", "Hollow", "Holly", "Honey", "Hoot", "Hop", "Hope", "Hound", "Ice", "Ivy", "Jagged", "Jay", "Jump", "Juniper", "Kestrel", "Kink", "Kite", "Lake", "Larch", "Lark", "Lavender", "Leaf", "Leopard", "Lichen", "Light", "Lightning", "Lily", "Lion", "Little", "Lizard", "Log", "Long", "Lost", "Loud", "Low", "Lynx", "Maggot", "Mallow", "Maple", "Marigold", "Marsh", "Meadow", "Midge", "Milk", "Milkweed", "Minnow", "Mint", "Mist", "Mistle", "Misty", "Mole", "Monkey", "Moon", "Morning", "Moss", "Mossy", "Moth", "Mottle", "Mouse", "Mud", "Mumble", "Myrtle", "Nectar", "Needle", "Nettle", "Newt", "Night", "Nut", "Oak", "Oat", "Odd", "Olive", "One", "Otter", "Owl", "Pale", "Parsley", "Patch", "Pear", "Pebble", "Perch", "Petal", "Pigeon", "Pike", "Pine", "Pink", "Plum", "Pod", "Pool", "Poppy", "Pounce", "Prickle", "Primrose", "Puddle", "Quail", "Quick", "Quiet", "Rabbit", "Ragged", "Rain", "Rat", "Raven", "Red", "Reed", "Ridge", "Riley", "Ripple", "River", "Robin", "Rock", "Rook", "Root", "Rose", "Rowan", "Rubble", "Running", "Rush", "Russet", "Rye", "Sage", "Sand", "Sandy", "Scorch", "Sedge", "Seed", "Shade", "Shadow", "Sharp", "Shattered", "Sheep", "Shell", "Shimmer", "Shining", "Shivering", "Short", "Shred", "Shrew", "Shy", "Silver", "Sky", "Slate", "Sleek", "Slight", "Sloe", "Small", "Smoke", "Snail", "Snake", "Snap", "Sneeze", "Snip", "Snook", "Snow", "Soft", "Song", "Soot", "Sorrel", "Spark", "Sparrow", "Speckle", "Spider", "Spike", "Spire", "Splash", "Spot", "Spotted", "Squirrel", "Stag", "Starling", "Star", "Stem", "Stoat", "Stone", "Stork", "Storm", "Stream", "Strike", "Stripe", "Stumpy", "Sun", "Sunny", "Swallow", "Swamp", "Swan", "Sweet", "Swift", "Tall", "Talon", "Tangle", "Tansy", "Tawny", "Thistle", "Thorn", "Thrift", "Thrush", "Thunder", "Tiger", "Timber", "Tiny", "Toad", "Torn", "Trout", "Tulip", "Tumble", "Turtle", "Twig", "Vine", "Violet", "Vixen", "Vole", "Wasp", "Wave", "Weasel", "Web", "Weed", "Wet", "Whisker", "Whisper", "Whistle", "White", "Whorl", "Wild", "Willow", "Wind", "Wish", "Wolf", "Wood", "Woolly", "Wren", "Yarrow", "Yellow", "Yew",
]

const CAT_SUFFIX = [
    "bark", "beam", "bee", "belly", "berry", "bird", "blaze", "bloom", "blossom", "branch", "breeze", "briar", "bright", "brook", "burr", "burrow", "bush", "claw", "cloud", "crawl", "creek", "dapple", "dawn", "dusk", "dust", "ear", "eater", "eye", "eyes", "face", "fall", "fang", "feather", "fern", "fire", "fish", "flake", "flame", "flight", "flower", "foot", "frost", "fur", "gorse", "hawk", "haze", "heart", "ice", "jaw", "leaf", "leap", "leg", "light", "mask", "minnow", "mist", "moon", "mouse", "muzzle", "needle", "nose", "pad", "paws", "peak", "pelt", "petal", "pool", "poppy", "pounce", "puddle", "rose", "ripple", "runner", "scar", "scratch", "seed", "shade", "shell", "shine", "sight", "skip", "sky", "slip", "snout", "snow", "song", "speck", "speckle", "spirit", "splash", "spot", "spots", "spring", "stalk", "stem", "step", "stone", "storm", "stream", "strike", "stripe", "swoop", "tail", "talon", "teeth", "thistle", "thorn", "throat", "toe", "tooth", "tuft", "watcher", "water", "whisker", "whisper", "whistle", "willow", "wind", "wing", "wish", 
]

const HERBS = [
    "Catmint",
    "Burdock root",
    "Chervil",
    "Borage",
    "Tansy",
    "Feverfew",
    "Marigold",
    "Poppy seeds",
    "Yarrow",
    "Juniper berries",
]

let allCats = [];
let days = 0;
let allClanActions = {};

let clan = {
    usableActionPoints: 0,
    maxPrey: 40,
    prey: 0,
    maxHerbs: 40,
    herbs: 0,
    safety: 0,
}

let currentTr = 0;

// ------------------------ ''action functions'' ----------------------------------------- //

function getAverangeOfHuntingLevel(){
    let computedHuntingLevel = 0;
    let abeledCats = 0;
    for(let i = 0; i < allCats.length; i++){
        let cat = allCats[i];
        if(cat.rank == CAT_RANKS.WARRIOR || cat.rank == CAT_RANKS.APPRENTICE){
            computedHuntingLevel += cat.huntingLevel;
            abeledCats++;
        }
    }
    return computedHuntingLevel/abeledCats;
}

function execute_huntingPatrol(a) {
    //compute average of hunting level (warriors + apprentices)
    

    let huntingAverage = getAverangeOfHuntingLevel();

    let mh = (huntingAverage + allCats.length) / 2 + 1; //
    console.log("maxHunting: " + mh);
    let b = getRandomNumber(mh);
    let c = getRandomNumber(mh);
    let message = ";"

    console.log(b + ";" + c)
    let huntedPrey = b + c;

    clan.prey += huntedPrey;
    //if the storage isn't big enought, just "delete" the overflow
    if (clan.prey > clan.maxPrey) {
        clan.prey = clan.maxPrey
    }

    if (huntedPrey >= allCats.length) {
        message = "Your cats were on a successful hunting patrol.";
    } else {
        message = "Your huntingpatrol was not that successful.";
    }

    log(message + "(" + huntedPrey + " pieces of prey)")
}

function execute_herbPatrol(a) {
    /*
    let foundHerbs = getRandomNumber(allCats.length);
    let herbs = "";
    for(let i=0; i< foundHerbs; i++){
      herbs += getRandomElement(HERBS) + ", ";
    }
    clan.herbs += foundHerbs;
    if(clan.herbs > clan.maxHerbs) { 
      clan.herbs = clan.maxHerbs
    }
    log("Your medecine cat found some herbs (" + herbs + ")");
    */
    let med = null;
    for (let i = 0; i < allCats.length; i++) {
        let cat = allCats[i];
        if (cat.rank == CAT_RANKS.MEDECINE_CAT) {
            med = cat;
            break;
        }
    }

    let herbCount = getRandomNumber(med.medLevel);
    let message = "";
    if (herbCount == 0) {
        message = "Your medecine Cat couldn't find any herbs.";
    } else if (herbCount == 1) {
        message = "Your Medecine Cat found some " + getRandomElement(HERBS);
    } else {
        let foundHerbs = ""
        for (let i = 0; i < herbCount; i++) {
            if (i == 0) {
                foundHerbs += " " + getRandomElement(HERBS);
            } else if (i == herbCount - 1) {
                foundHerbs += " and " + getRandomElement(HERBS);
            } else {
                foundHerbs += ", " + getRandomElement(HERBS);
            }
        }
        message = "Your Medecine Cat found some " + foundHerbs;  //count as much herbs as much med found
    }
    clan.herbs += herbCount;
    if(clan.herbs > clan.maxHerbs){
        clan.herbs = clan.maxHerbs;
    }

    log(message);
}


function execute_borderPatrol(a) {
    log("Your cats were on a successful border patrol!")
}

function execute_trainHuntingWarriors(a) {
    for (let i = 0; i < allCats.length; i++) {
        let cat = allCats[i];
        if (cat.rank == CAT_RANKS.LEADER || cat.rank == CAT_RANKS.DEPUTY || cat.rank == CAT_RANKS.WARRIOR) {
            cat.huntingLevel++
        }
    }
    log("your warriors got trained in hunting");
    console.log('new average hunting level: ' + getAverangeOfHuntingLevel());
}

function execute_trainFightingWarriors(a) {
    for (let i = 0; i < allCats.length; i++) {
        let cat = allCats[i];
        if (cat.rank == CAT_RANKS.LEADER || cat.rank == CAT_RANKS.DEPUTY || cat.rank == CAT_RANKS.WARRIOR) {
            cat.fightingLevel++
        }
    }
    log("your warriors got trained in fighthing");
}

function execute_trainHuntingApprentices(a) {
    if(getCatsByRank(CAT_RANKS.APPRENTICE).length == 0){
        log("Your clan does not have any Apprentices to train");
        return
    }

    for (let i = 0; i < allCats.length; i++) {
        let cat = allCats[i];
        if (cat.rank == CAT_RANKS.APPRENTICE) {
            cat.hu++
        }
    }
    log("your apprentices got trained in fighthing");
}

function execute_trainFightingApprentices(a) {
    if(getCatsByRank(CAT_RANKS.APPRENTICE).length == 0){
        log("Your clan does not have any Apprentices to train");
        return;
    }

    for (let i = 0; i < allCats.length; i++) {
        let cat = allCats[i];
        if (cat.rank == CAT_RANKS.APPRENTICE) {
            cat.fightingLevel++
        }
    }
    log("your warriors got trained in fighthing");
}

// ------------------------ ''create functions'' ----------------------------------------- //

function createClan() { // inizialisiere Game
    allCats.push(createCat(CAT_RANKS.LEADER));
    allCats.push(createCat(CAT_RANKS.DEPUTY));
    allCats.push(createCat(CAT_RANKS.MEDECINE_CAT));
    for (let i = 0; i < 2; i++) {
        allCats.push(createCat(CAT_RANKS.WARRIOR));
    }
    for (let i = 0; i < 2; i++) {
        allCats.push(createCat(CAT_RANKS.APPRENTICE));
    }

//  createClanAction(checkboxValue, checkboxText, turnCosts, actionFunction);

    createClanAction("huntingPatrol", "Hunting Patrol", 3, execute_huntingPatrol);
    createClanAction("borderPatrol", "Border Patrol", 3, execute_borderPatrol);
    createClanAction("herbPatrol", "Herb Patrol", 3, execute_herbPatrol);

    createClanAction("trainHuntingWarriors", "Train Hunting (Warriors)", 5, execute_trainHuntingWarriors);
    createClanAction("trainFightingWarriors", "Train Fighting (Warriors)", 5, execute_trainFightingWarriors);

    createClanAction("trainHuntingApprentices", "Train Hunting (Apprentices)", 6, execute_trainHuntingApprentices);
    createClanAction("trainFightingApprentices", "Train Fighting (Apprentices)", 6, execute_trainFightingApprentices);

    console.log(allClanActions);
    return allCats;
}

function createCat(iRank) {
    function setProperties(age, hl, fl, ml, prä, suf) {
        cat.daysOld = age;
        cat.huntingLevel = hl;
        cat.fightingLevel = fl;
        cat.medLevel = ml;
        cat.präfix = prä;
        cat.suffix = suf;
        cat.finalSuffix = suf;
    }

    //create cat
    let cat = {
        präfix: "präfix",
        suffix: "suffix",
        furColor: 1, // images which have numbers
        daysOld: 0, // age in days
        rank: "no rank",
        catButton: null,
        huntingLevel: 0,
        fightingLevel: 0,
        medLevel: 0,
    };

    //set level, age and rank depending on the iRank
    // Parameters: setProperties(age, hl, fl, ml, prä, suf)
    if (iRank == CAT_RANKS.WARRIOR || iRank == CAT_RANKS.DEPUTY) { //warrior or dep
        setProperties(getRandomMinMax(12 * 30, 1000), 5, 5, 0, getRandomElement(CAT_PRAEFIX), getRandomElement(CAT_SUFFIX))
    } else if (iRank == CAT_RANKS.LEADER) { //lead
        setProperties(getRandomMinMax(30 * 30, 1000), 5, 5, 0, getRandomElement(CAT_PRAEFIX), getRandomElement(CAT_SUFFIX))
    } else if (iRank == CAT_RANKS.APPRENTICE) { //app
        setProperties(getRandomMinMax(6 * 30, 11 * 30), 1, 1, 0, getRandomElement(CAT_PRAEFIX), getRandomElement(CAT_SUFFIX))
    } else if (iRank == CAT_RANKS.KIT) { //kit
        setProperties(getRandomMinMax(1 * 30, 5 * 30), 0, 0, 0, getRandomElement(CAT_PRAEFIX), getRandomElement(CAT_SUFFIX))
    } else if (iRank == CAT_RANKS.MEDECINE_CAT) { //med
        setProperties(getRandomMinMax(12 * 30, 1000), 0, 0, 5, getRandomElement(CAT_PRAEFIX), getRandomElement(CAT_SUFFIX))
    }
    cat.rank = iRank //set rank to iRank
    

    cat.getName = function () {
        return this.präfix + this.suffix;
    };

    createCatButton(cat);
    updateCatRankAndNames(cat);
    //return the finished objekt :D
    return cat;
}

function createGame() {
    log("Your History Log:");
    clan.maxPrey = allCats.length * 8
    clan.maxHerbs = allCats.length * 4
    clan.prey = clan.maxPrey / 2 + clan.maxPrey / 2 / 2;
    clan.herbs = clan.maxHerbs / 2;
    updateClanStatus();
    // I do cat buttons in createCat();
    // for (i = 0; i < allCats.length; i++) {
    //   createCatButton(allCats[i]);
    // }
}

function createCatButton(cat) {
//create elements(button, divs, br, table elements)
    let table = document.getElementById("catButtonTable");
    let imgDiv = document.createElement("div"); // create the div for the img and the button
    let buttonDiv = document.createElement("div");
    let button = document.createElement("button"); // create button
    let br = document.createElement("br");
    let td = document.createElement("td"); //create table data


    if(allCats.length%5 == 0){
        currentTr = document.createElement("tr");
        table.appendChild(currentTr)
    }

//prepare the imgs
    let fur_img = document.createElement("img");
    let pattern_img = document.createElement("img");
    let eyes_img = document.createElement("img");
    let outlines_img = document.createElement("img");
    
    fur_img.src =  './images/fur_' + getRandomMinMax(1, COUNT_OF_IMAGES.FUR) + '.png',
    pattern_img.src = './images/pattern_' + getRandomMinMax(1, COUNT_OF_IMAGES.PATTERN) + '.png';
    eyes_img.src = './images/eyes_' + getRandomMinMax(1, COUNT_OF_IMAGES.EYES) + '.png';
    outlines_img.src = "./images/outlines.png";

    fur_img.classList.add('layer1');
    pattern_img.classList.add('layer2');
    eyes_img.classList.add('layer3');
    outlines_img.classList.add('layer4');

//prepare imgDiv
    imgDiv.classList.add('image-container');

//prepare Button Div
    buttonDiv.classList.add('buttonDiv')

//add imgs to imgDiv
    imgDiv.appendChild(fur_img);
    imgDiv.appendChild(pattern_img);
    imgDiv.appendChild(eyes_img);
    imgDiv.appendChild(outlines_img);

//prepare button
    button.textContent = cat.getName();
    button.className = "catButtons";
    button.onclick = function () {
        showCatInfos(cat);
    };

//prepare table td
    td.classList.add('tableTDs');

//build everything together
    buttonDiv.appendChild(imgDiv);
    buttonDiv.appendChild(br);
    buttonDiv.appendChild(button);
    td.appendChild(buttonDiv);
    //div.appendChild(buttonDiv);
    cat.catButton = button;
    currentTr.appendChild(td)
    table.appendChild(currentTr);
    
}



function createClanAction(checkboxValue, checkboxText, turnCosts, actionFunction) {
    let a = {};
    a.checkboxValue = checkboxValue;
    a.checkboxText = checkboxText;
    a.turnCosts = turnCosts;
    a.execute = actionFunction;

    {
        //create Checkbox
        var form = document.getElementById("clanActionForm");
        var checkbox = document.createElement("input"); // create checkBox
        //set properties
        checkbox.className = "checkbox";
        checkbox.type = "checkbox";
        checkbox.name = "clanAction";
        checkbox.value = checkboxValue;
        checkbox.checked = false;
        checkbox.id = checkboxValue;

        var label = document.createElement('label');
        label.htmlFor = checkboxValue; //id

        label.appendChild(document.createTextNode(checkboxText));

        form.appendChild(checkbox); // add checkbox to form
        form.appendChild(label); // add the text
        form.appendChild(document.createElement("br")); //new line
    }

    allClanActions[checkboxValue] = a;
}

// ------------------------ '' Functions '' ----------------------------------------- //

function log(text) {
    let div = document.getElementById("log-div");
    div.innerHTML = div.innerHTML + "<br/>" + text;
    div.scrollTop = div.scrollHeight;
}

function updateClanStatus() {
    clan.usableActionPoints = allCats.length * 2;

    let div = document.getElementById("clanStatus");

    //write down all clan stats  --> (set in endDay())
    let prey = "Prey: " + clan.prey + "/" + clan.maxPrey;
    let herbs = "Herbs: " + clan.herbs + "/" + clan.maxHerbs;
    div.innerHTML = prey + " ; " + herbs

    //count days up and update basic infos (day, cats, action points)
    days++;
    let p = document.getElementById("infos")
    p.innerHTML = "Day: " + days + ", Cats: " + allCats.length + ", Action Points: " + clan.usableActionPoints
}

function executeActions() {
    let checkedOptions = getChecked("clanAction");
    for (let i = 0; i < checkedOptions.length; i++) {
        let a = allClanActions[checkedOptions[i]];
        a.execute(a);
    }
}

function computeActionPoints() {
    let usedP = 0;
    let checkedOptions = getChecked("clanAction");
    for (let i = 0; i < checkedOptions.length; i++) {
        let a = allClanActions[checkedOptions[i]];
        usedP += a.turnCosts;
    }
    console.log(usedP);
    return (usedP <= clan.usableActionPoints)
}


function showCatInfos(cat) {
    console.log(cat.getName());
    let p = document.getElementById("catInfoBox");

    let name = cat.getName();
    let age = computeMoons(cat.daysOld) + "moons";
    let rank = cat.rank;
    let hl = cat.huntingLevel;
    let fl = cat.fightingLevel;
    let ml = cat.medLevel;

    p.innerHTML = `
    ${name} <br>
    ${age} <br>
    ${rank} <br>
    Hunting Level: ${hl} <br>
    Fightign Level: ${fl} <br>
    Medecine Level: ${ml} <br>
  `
}

function computeNextDay() {

    //update all clan stats
    clan.prey -= allCats.length;

    //execute the functions of the actions
    executeActions();

    //update cats
    for (let i = 0; i < allCats.length; i++) {
        let cat = allCats[i];
        cat.daysOld += 1; //change age
        updateCatRankAndNames(cat); // update rank and name by age and also button
    }



    //update clan status
    updateClanStatus();


}

function endDay() {
    clan.usableActionPoints = allCats.length * 2;

    //computes the action points with the current selection and then returns if it works or not
    if (!computeActionPoints()) {
        log("!!! you have not enought action points to do all the selected options! You have " + clan.usableActionPoints + " actionpoints to use. !!!");
        return;
    }

    log("<br>")
    log("------------------ Day " + days + " ---------------------")

    //upd. clan stats and cats  
    computeNextDay();




    //unselect all options
    let checkboxes = document.getElementsByName("clanAction");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    //clear cat info box
    let p2 = document.getElementById("catInfoBox");
    p2.innerHTML = "";
}

function getRandomElement(array) {
    let e = array[getRandomNumber(array.length)];
    return e;
}

function computeMoons(days) {
    let m = days / 30;
    return Math.floor(m);
}

function getRandomNumber(max) {
    let r = Math.random() * max;
    return Math.floor(r);
}

function getRandomMinMax(min, max) {
    let r = getRandomNumber(max - min) + min;
    return r;
}

function updateCatRankAndNames(cat) {

    //update rank
    if (computeMoons(cat.daysOld) < 6) {
        cat.rank = CAT_RANKS.KIT; //kit
    } else if (computeMoons(cat.daysOld) < 12) {
        cat.rank = CAT_RANKS.APPRENTICE; //apprentice
    } else if (computeMoons(cat.daysOld) < 80) {
        if (cat.rank != CAT_RANKS.LEADER && cat.rank != CAT_RANKS.DEPUTY && cat.rank != CAT_RANKS.MEDECINE_CAT) {
            cat.rank = CAT_RANKS.WARRIOR; //warrior if not lead, dep or med
        }
    } else {
        cat.rank = CAT_RANKS.ELDER;
    }

    //update suffix
    if (cat.rank == CAT_RANKS.KIT) {
        cat.suffix = "kit";
    } else if (cat.rank == CAT_RANKS.APPRENTICE) {
        cat.suffix = "paw";
    } else if (cat.rank == CAT_RANKS.LEADER) {
        cat.suffix = "star";
    } else {
        cat.suffix = cat.finalSuffix;
    }

    //update cat button
    cat.catButton.textContent = cat.getName(); // update name on button

}



function getChecked(name) { //gets the checked boxes of one name
    var options = document.getElementsByName(name);
    var checkedOptions = [];

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            checkedOptions.push(options[i].value);
        }
    }

    return checkedOptions;
}


function  getCatsByRank(rank) {
    let catsWithRank = [];
    for (let i = 0; i < allCats.length; i++) {
        let cat = allCats[i];
        if (cat.rank == rank) {
            catsWithRank.push(cat)
        }
    }
    return catsWithRank
}

// ------------------------ '' Game '' ----------------------------------------- //

console.log(createClan());
createGame();


/*
    for(let i = 0; i < allCats.length; i++) {
      let cat = allCats[i];
    } 

*/