/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*Constants*/

let game;
let round = 0;
const startButton = document.getElementById("btn__reset");
const screenKeyboard = document.getElementById("qwerty");
const overlay = document.getElementById("overlay");

/*
Event Listener for mouseclick on start button
*/

startButton.addEventListener('click', (event) => {

    game = new Game ();
    game.startGame();

});

/*
Event Listener for enter or return key to start game - checks game.activePhrase to confirm a game isn't already in session
*/

document.addEventListener('keydown', (event) => {

    if (event.keyCode === 13 && (round === 0 || game.activePhrase === null)) {
    game = new Game ();
    game.startGame();
    round += 1;}

});

/*
Event Listener for mouse events on onscreen qwerty
*/

screenKeyboard.addEventListener('click', (event) => {

    if (event.target.tagName === "BUTTON") {
    game.handleInteraction(event.target.textContent);
    }

});


/*
Event Listener for keyboard events
*/

document.addEventListener('keydown', (event) => {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
    game.handleInteraction (event.key.toLowerCase()); 
    }
});

/*
New element for correct phrase to display on WIN screen
*/

const win = document.createElement("h2");
win.setAttribute("id", "win");
overlay.appendChild(win);



   


