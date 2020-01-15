/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;

    }

    /*
    1) Hides the start screen overlay
    2) Sets the activePhrase property to a random phrase, and passes it to the addPhraseToDisplay method in the Phrase object
    */

    startGame () {
        
        document.getElementById("overlay").style.display = "none";
        
        let temp = this.getRandomPhrase();
        temp.addPhraseToDisplay();
        this.activePhrase = temp;        //!!!Note the instantiated phrase object is stored here!!!
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

    /*Randomly retrieves a phrase stored in the phases array and returns it as a phrase object*/
    getRandomPhrase () {
        let min = Math.ceil(0);
        let max = Math.floor(this.phrases.length)
        
        let random = Math.floor(Math.random() * (max - min)) + min;

        let gamePhrase = new Phrase (this.phrases[random]);

        return gamePhrase;
    }
    /**********************************************************/

    /*Game logic - should: 
    1)Disable selected keyboard button
    2)If the letter is correct, add the WRONG class to the button and remove a life
    3)If the letter is correct, add the CHOSEN class to the button, call showMatchedLetter() and call checkForWin()
    4)If checkForWin returns TRUE, it should call gameOver() */
    handleInteraction (letter) {
        
        let userInput = this.activePhrase.checkLetter(letter);  //Send letter to checkLetter() method
        

        if (userInput === true) {
            console.log("True dat!");
            this.activePhrase.showMatchedLetter(letter);
            let check = this.checkForWin();

                if (check) {
                    console.log("Winner!");
                    this.gameOver();
                }
        }

        else if (userInput === false) {
            console.log("No bro!");
            this.removeLife();

                if (this.missed === 5) {
                    console.log("Loser!");
                    this.gameOver(); 
                }    
        }
    }
    /**********************************************************/

    /*Removes a life from the scoreboard, updates the life display and increments missed gueses property*/

    removeLife() {
   
        const heart = document.getElementById("scoreboard");
        const li = heart.firstElementChild.children; 
            
        document.querySelectorAll("li img")[4-this.missed].setAttribute("src", "images/lostHeart.png");
        
        this.missed += 1;
    }
    /**********************************************************/

    /*Checks if the player has revealed all letters in the active phase*/

    checkForWin() {
        
        const letterClass = document.querySelectorAll(".letter");
        const showClass = document.querySelectorAll(".show");

        //console.log("Check for win called!");
        
        if (letterClass.length === showClass.length) {
            //console.log("Winner!");
            return true; 
        }
    
    }
    /**********************************************************/

    /*This method displays the original startscreen, and depending on the outcome of the game, updates
    the h1 element with a win or loss message, and adds the WIN or LOSS class*/

    gameOver() {

        const overlay = document.getElementById("overlay");
        const message = document.getElementById("game-over-message");
        overlay.style.display = "block";
        overlay.classList.remove("start");
        
        if (this.missed === 5) {
            overlay.classList.add("lose");
            message.innerText = "LOL!";}

        else {
            overlay.classList.add("win");
            message.innerText = "BRO!";}

    }

    /**********************************************************/
 }