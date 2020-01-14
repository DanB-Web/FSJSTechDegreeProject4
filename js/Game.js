/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;

    }

    /*Hides the start screen overlay, calls the getRandomPhrase() method,
    and sets the activePhrase property. Adds phrase to display*/
    startGame () {

    }
    /**********************************************************/

    /*Returns an array of phrases to use in the game*/
    createPhrases () {

        const gamePhrases = [   "Phrase one",
                                "Phrase two",
                                "Phrase three",
                                "Phrase four",
                                "Phrase five" ];

        return gamePhrases; 
    }
    /**********************************************************/

    /*Randomly retrieves a phrase stored in the phases array and returns it*/
    getRandomPhrase () {
        let min = Math.ceil(0);
        let max = Math.floor(this.phrases.length)
        
        let random = Math.floor(Math.random() * (max - min)) + min;

        return this.phrases[random];
    }
    /**********************************************************/

    /*Game logic - should: 
    1)Disable selected keyboard button
    2)If the letter is correct, add the WRONG class to the button and remove a life
    3)If the letter is correct, add the CHOSEN class to the button, call showMatchedLetter() and call checkForWin()
    4)If checkForWin returns TRUE, it should call gameOver() */
    handleInteraction () {

    }
    /**********************************************************/

    /*Removes a life from the scoreboard, updates the life display and increments missed gueses property*/

    removeLife() {
   
    }
    /**********************************************************/

    /*Checks if the player has revealed all letters in the active phase*/

    checkForWin() {

    }
    /**********************************************************/

    /*This method displays the original startscreen, and depending on the outcome of the game, updates
    the h1 element with a win or loss message, and adds the WIN or LOSS class*/

    gameOver() {

    }
    /**********************************************************/
 }