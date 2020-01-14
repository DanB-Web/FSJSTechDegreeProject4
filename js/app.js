/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*Constants*/

let game;
const button = document.getElementById("btn__reset");


/*Event Listeners*/

button.addEventListener('click', (event) => {

    game = new Game ();
    game.startGame();

});




   


