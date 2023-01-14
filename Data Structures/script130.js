

"use strict";

/*

1. Loop over the game.scored array and print each
player name to the console. along with the goal number
(Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it 
to the console (We already studied how to calculate
averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted
way, exactly like this: 
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borussia Dortmund: 6.5
Get the team names directly from the game object,
don't hardcode them(except for "draw"), HINT, Note how 
the odds and the game objects haev the asme property names

BONUS: Create and object called "scorers" which contains
the names of the players who scored as properties, and 
the number of goals the the value.
In this game, it will look like this:
    {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
    }

*/

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


// first solution
const mapped = game.scored.map((item,index) => `
Goal ${index + 1} : ${item}`);
console.log(`${mapped}`);

console.log(`-----------------------`)

// first solution using array destructuring
for(const [i,player] of game.scored.entries()) console.log(`Goal ${i+1} : ${player}`);

console.log(`-----------------------`)

// second solution
const odds = Object.values(game.odds)
let average = 0;

for (const odd of odds){
    average += odd;
    average /= odds.length
}
console.log(average);

console.log(`-----------------------`)

/* third solution
    print the contents of the object like this:

    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borussia Dortmund: 6.5
*/

for(const [team, odds] of Object.entries(game.odds)){
    const str = (team === "x") ? "Draw" : `Victory ${game[team]}`
    console.log(`Odd of ${str} : ${odds}`);
}


