"use strict";

//working with the spread operator
const arr = [2,3,4];

const arrb = [1,...arr];
// console.log(`Arr B = ${arrb}`);

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimich",
            "Goretzka",
            "Conan",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Makimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],

    ],
    score: "4.0",
    scored: [
        "Lewondowski",
        "Gnarby",
        "Lewandowski",
        "Hummels"
    ],
    date: "Nov 9th 2037",
    odds: {
        team1: 1.23,
        x: 3.25,
        team2: 6.5,
    },
}

/*
    1. Create one player array for each team [Variables 
    "player1" and "player2"]

    2. The first player in any player array is the goalkeeper
    and the others re field players. For Bayern Munich
    (team 1) create on variable ("gk") with the 
    goalkeeper's name, and one array ("FieldPlayers")
    with all the remaining 10 field players

    3. Create an array "allPlayers" containing all players
    of both teams (22 players)

    4. During the game, Bayern Munich (team 1) used 3
    substitue players. So create a new array ("players1Final")
    containing all the original team1 players plus
    "Thiago", "Coutinho" and "Perisic"

    5. Based on the game odds object, create one variable
    for each odd (called "team1", "draw" and "team2")

    6. Write a function ("printGoals") that receives an
    arbitrary number of player names (NOT an array) and 
    prints each of them to the console, along with the 
    number of goals who were scored (number of player 
    names passed in)

    7. The team with the lower odd is more likely to win.
    Print to the console which team is more likely to 
    win, WITHOUT  using an if/else statement or the 
    ternary operator
*/


// 1. Create one player array for each team [Variables 
//     "player1" and "player2"]
const [player1, player2] = game.players;
console.log(`Player1: [ ${player1} ]`);
console.log(`Player2: [ ${player2} ]`);

console.log(`--------------------------`);

// 2. The first player in any player array is the goalkeeper
// and the others are field players. For Bayern Munich
// (team 1) create one variable ("gk") with the 
// goalkeeper's name, and one array ("FieldPlayers")
// with all the remaining 10 field players
const [gk, ...FieldPlayers] = player1;
console.log(`The first player = ${gk}`);
console.log(`The other players = ${FieldPlayers}`);

console.log(`--------------------------`);

// 3. Create an array "allPlayers" containing all players
//     of both teams (22 players)
const allPlayers = [...player1, player2];
console.log(`All players = ${allPlayers}`);

console.log(`--------------------------`);

// 4. During the game, Bayern Munich (team 1) used 3
//     substitue players. So create a new array ("players1Final")
//     containing all the original team1 players plus
//     "Thiago", "Coutinho" and "Perisic"
const player1Final = [player1, ...["Thiago", "Coutinho", "Perisic"]];
console.log(`Final players = ${player1Final}`);

console.log(`--------------------------`);

// 5. Based on the game odds object, create one variable
//     for each odd (called "team1", "draw" and "team2")
const {team1, x: draw, team2} = game.odds;
console.log(`
Team1 = ${team1}
Draw = ${draw} 
Team2 = ${team2} `);

console.log(`--------------------------`);

// 6. Write a function ("printGoals") that receives an
//     arbitrary number of player names (NOT an array) and 
//     prints each of them to the console, along with the 
//     number of goals who were scored (number of player 
//     names passed in)

function printGoals({...player}){
    console.log(`${player} scored ${game.score}`);
};

printGoals("Neuer", "Lew", "Alex");
console.log(`--------------------------`);

// 7. The team with the lower odd is more likely to win.
//     Print to the console which team is more likely to 
//     win, WITHOUT  using an if/else statement or the 
//     ternary operator





