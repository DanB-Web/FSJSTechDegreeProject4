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
        //document.querySelector(".header").innerHTML = "Rule No:";
        
        let temp = this.getRandomPhrase();
        temp.addPhraseToDisplay();
        this.activePhrase = temp;        //!!!Note the instantiated phrase object is stored here!!!
        
        document.querySelector(".header").innerHTML = "Rule No:";

    }

    /**********************************************************/

    /*
    Returns an array of phrases to use in the game
    */

    createPhrases () {

        const gamePhrases = [   "Find your vision",
                                "Never ever think small",
                                "Ignore the naysayers",
                                "Work your butt off",
                                "Give something back" ];

        return gamePhrases; 
    }

    /**********************************************************/

    /*
    Randomly retrieves a phrase stored in the phases array and returns it as a phrase object
    */

    getRandomPhrase () {
        let min = Math.ceil(0);
        let max = Math.floor(this.phrases.length)
        
        let random = Math.floor(Math.random() * (max - min)) + min;

        let gamePhrase = new Phrase (this.phrases[random]);

        return gamePhrase;
    }

    /**********************************************************/

    /*
    Game logic - should: 
    1)Disable selected keyboard button
    2)If the letter is correct, add the WRONG class to the button and remove a life
    3)If the letter is correct, add the CHOSEN class to the button, call showMatchedLetter() and call checkForWin()
    4)If checkForWin returns TRUE, it should call gameOver() 
    */

    handleInteraction (letter) {
        
        let userInput = this.activePhrase.checkLetter(letter);  //Send letter to checkLetter() method

        /*New stuff for keyboard events*/

        let buttons = document.getElementsByClassName("key");
        let body = document.querySelector("body");
        
        for (let i = 0; i < buttons.length; i++)

            {if (buttons[i].textContent === letter)

                if (userInput === true ) {buttons[i].classList.add("chosen");}

                else if (userInput === false) {buttons[i].classList.add("wrong");}             
                }
   
        /**********************************/
        
        event.target.disabled = true; //Disable activated button

        if (userInput === true) {
            //console.log(event.target);
            event.target.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            let check = this.checkForWin();

                if (check) {
                    //console.log("Winner!");
                    this.gameOver();
                }
        }

        else if (userInput === false) {
            //console.log(event.target);
            event.target.classList.add("wrong");
            this.removeLife();

                if (this.missed === 5) {
                    //console.log("Loser!");
                    this.gameOver(); 
                }    
        }

        body.classList.remove("chosen");
        body.classList.remove("wrong");
    }

    /**********************************************************/

    /*
    Removes a life from the scoreboard, updates the life display and increments missed gueses property
    */

    removeLife() {
   
        const heart = document.getElementById("scoreboard");
        const li = heart.firstElementChild.children; 
            
        document.querySelectorAll("li img")[4-this.missed].setAttribute("src", "images/lostHeart.png");
        
        this.missed += 1;
    }

    /**********************************************************/

    /*
    Checks if the player has revealed all letters in the active phase
    */

    checkForWin() {
        
        const letterClass = document.querySelectorAll(".letter");
        const showClass = document.querySelectorAll(".show");
        
        if (letterClass.length === showClass.length) {
            return true; 
        }
    
    }

    /**********************************************************/

    /*
    This method displays the original startscreen, and depending on the outcome of the game, updates
    the h1 element with a win or loss message, and adds the WIN or LOSS class
    */

    gameOver() {

        const overlay = document.getElementById("overlay");
        const message = document.getElementById("game-over-message");
        const button = document.getElementsByClassName("key");
        const phraseUL = document.getElementById("phrase");
        const hearts = document.querySelectorAll("li img");

        overlay.style.display = "block";
        overlay.classList.remove("start");
        
        if (this.missed === 5) {
            overlay.classList.add("lose");
            message.innerText = "Not today buddy!";}

        else {
            overlay.classList.add("win");
            message.innerText = "Nice job!";}

        //Reset functions

        phraseUL.innerHTML = "";    //Clear previous phrase from <ul>

        for (let i = 0; i < button.length; i++) //Re-enable all keyboard keys
            {button[i].className = "key";
             button[i].removeAttribute("disabled");}

        this.missed = 0;        //Resets missed guesses

        for (let j = 0; j < hearts.length; j++) //Re-enable all lives images
            {hearts[j].setAttribute("src", "images/liveHeart.png");}    
        
    }

    /**********************************************************/
 }