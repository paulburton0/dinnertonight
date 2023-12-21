

// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// If you use dinnertonight behind a reverse proxy, then put the value of the directory that the proxt maps to here
reverseProxyDir = '';

/**
 * Routes Definitions
 */


var restaurants = [
                    'McDonald\'s',
                    'Popeye\'s', 
                    'Pho Saigon',
                    'Potbelly',
                    'Nando\'s PERi PERi',
                    'Chick-fil-A',
                    'Eugene\'s/Ethel\'s',
                    'SmashBurger',
                    'Five Guys',
                    'Tony\'s',
                    'Buffalo Wild Wings',
                    'Chipotle',
                    'Ledo Pizza',
                    'Sonic',
                    'The Bone',
                    'Arby\'s',
                    'Wendy\'s',
                    'Foster\'s',
                    'Parrando\'s',
                    'Zandra\'s Taqueria',
                    'BJ\'s Restaurant',
                    'Thai Peppers',
                    'Eggspectation',
                    'Cracker Barrel',
                    'Red Robin',
                    'Checkers',
                    'Jersey Mike\'s',
                    'Wegmans',
                    'Hangry Joe\'s'
];

var people = [ 'Dad', 'Katelyn', 'Luke' ];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

app.get("/", (req, res) => {
  res.render("index", { proxyDir: reverseProxyDir, title: "Home", restaurants: shuffle(restaurants), people: shuffle(people) });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

