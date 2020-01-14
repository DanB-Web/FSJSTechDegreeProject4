/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*Constants*/

let game;
const startButton = document.getElementById("btn__reset");
const screenKeyboard = document.getElementById("qwerty");

/*Event Listener for start button*/

startButton.addEventListener('click', (event) => {

    game = new Game ();
    game.startGame();

});

/*Event Listener for mouse events*/

screenKeyboard.addEventListener('click', (event) => {

    if (event.target.tagName === "BUTTON") {
    game.handleInteraction(event.target.textContent);}

});


/*Event Listener for keyboard events*/

document.addEventListener('keydown', (event) => {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        let keystroke = event.key.toLowerCase();
        game.handleInteraction (keystroke);  
    }
});




   


