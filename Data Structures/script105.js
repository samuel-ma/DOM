

"use strict";

const game = {
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    players: [
        [
            "Nuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ]
    ],
    score: "4.0",
    scored: [
        "Lewandowski",
        "Gnarby",
        "Lewandowski",
        "Hummels"
    ],
    date: "Nov 9th 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
}

// BONUS: Create and object called "scorers" which contains
// the names of the players who scored as properties, and 
// the number of goals the the value.
// In this game, it will look like this:
//     {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//     }

const scorers = {};

// const mapped = game.map((item) => {
//     return ;
// })

const obj = Object.keys(scorers);
console.log(obj);

for(let i=0; i<game.scored.length; i++){
    
}


