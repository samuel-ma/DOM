

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


/*
    1. Create oen player array for each team (variables
    "player1" and "player2")
*/

const [player1, player2] = game.players;
console.log(`Players1 => ${player1}`);
console.log(`-------------------------------`);
console.log(`Players2 => ${player2}`);
console.log(`-------------------------------`);

/*
    2. The first player in any player array is the goalkeeper
    and the others are field players.
    For Bayern Munich(team 1) create on variable ("gk")
    with the goalkeeper's name, and one array ("Fieldplayers")
    with all the remaining 10 fields players
*/

const [gk, ...fieldplayers] = player1;
console.log(`Goalkeeper => ${gk}`);
console.log(`Fieldplayers => ${fieldplayers}`);
console.log(`-------------------------------`);

/*
    3. Create an array "allPlayers" containing all players
    of both teams
*/

const allPlayers = [...player1, ...player2];
console.log(`AllPlayers => ${allPlayers}`);
console.log(`-------------------------------`);

/*
    4. During the game, Bayern Munich (team 1) used 3
    substitute players. So create a new array
    "playersFinal" containing all the original team1
    players plus "Thiago, Coutinho and Perisic";
*/

const playersFinal = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(`PlayersFinal => ${playersFinal}`);
console.log(`-------------------------------`);

/*
    5. Based on the game.odds object, create on variable
    for each odd(called "team1", "draw" and "team2");
*/

const {team1, x:draw, team2} = game.odds;
console.log(`team1 => ${team1}`);
console.log(`draw => ${draw}`);
console.log(`team2 => ${team2}`);
console.log(`-------------------------------`);


/*
    6. Write a function "printGoals" that receives an 
    arbitrary number of player names (NOT AN ARRAY) 
    and prints each of them to the console, along with 
    the number of goals who were scored
    (number of player names passed in)
*/

function printGoals(...players){
    return `${players.length} goals were scored`
}

console.log(printGoals("Davies", "Muller", "Lewandowski", "Kimich"));
console.log(printGoals("Davies", "Muller"));
console.log(printGoals(...game.scored));
console.log(`-------------------------------`);

/*
    7. The team with the lower odd is more likely to win.
    Print to the console which team is more likely to
    win, without using an if/else statement or the ternary operator
*/

team1 < team2 && console.log(`Team1 is more likely to win`);
team1 > team2 && console.log(`Team2 is more likely to win`);

