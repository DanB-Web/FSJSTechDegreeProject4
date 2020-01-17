/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.guesses = [];

    }

    /*
    1) Hides the start screen overlay
    2) Sets the activePhrase property to a random phrase, and passes it to the addPhraseToDisplay method in the Phrase object
    3) Sets the header text to display which rule number is being guesses
    4) Adds the active phrase to the WIN screen
    */

    startGame () {
        
        document.getElementById("overlay").style.display = "none"; //Hide start screen overlay
        const win = document.getElementById("win");
        const button = document.getElementById("btn__reset");
        
        let temp = this.getRandomPhrase();
        temp[0].addPhraseToDisplay();
        this.activePhrase = temp[0];        //!!!Note the instantiated phrase object is stored here!!!
        
        document.querySelector(".header").innerHTML = "Rule Number " + temp[1]; //Displays current rule number under guess

        win.innerText = "Rule " + temp[1] + ": " + this.activePhrase.phrase; //Adds current phrase to WIN screen

        button.innerText = "Play again?";

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
    Randomly retrieves a phrase stored in the phases array and returns it inside an array as a phrase object and an index number
    */

    getRandomPhrase () {
        let min = Math.ceil(0);
        let max = Math.floor(this.phrases.length)
        
        let random = Math.floor(Math.random() * (max - min)) + min;
        let index = random + 1; 

        let gamePhrase = new Phrase (this.phrases[random]);

        return [gamePhrase, index];
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
        
    let test = this.guesses.includes(letter);       //This test allows use of the keyboard without keyboard events triggering multiple times on the same key
       
       if (!test) {
        
        this.guesses.push(letter);
        
        let userInput = this.activePhrase.checkLetter(letter);  //Send letter to checkLetter() method  

        
        /*New stuff for keyboard events*/

        let buttons = document.getElementsByClassName("key");
        let body = document.querySelector("body");
        
        for (let i = 0; i < buttons.length; i++)

            {if (buttons[i].textContent === letter)

                if (userInput === true ) {buttons[i].classList.add("chosen");
                                          buttons[i].disabled = true;}

                else if (userInput === false) { buttons[i].classList.add("wrong");
                                                buttons[i].disabled = true;}             
            }
   
        /**********************************/
        
        event.target.disabled = true; //Disable activated button
        
        if (userInput === true) {
            event.target.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            let check = this.checkForWin();

                if (check) {
                    this.gameOver();
                }
        }

        else if (userInput === false) {
            event.target.classList.add("wrong");
            this.removeLife();
        }

        body.classList.remove("chosen");           //Event bubbling due to keyboard events
        body.classList.remove("wrong");
       }
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

        if (this.missed === 5) {                
            this.gameOver(); 
            }  
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
            overlay.classList.remove("win");
            overlay.classList.add("lose");
            message.innerText = "Hasta la vista, baby!";}

        else {
            overlay.classList.remove("lose");
            overlay.classList.add("win");
            message.innerText = '"None of my rules of success will work unless you do" - Arnold Schwarzenegger';
            
        }

        //Reset functions

        phraseUL.innerHTML = "";    //Clear previous phrase from <ul>

        for (let i = 0; i < button.length; i++) //Re-enable all keyboard keys
            {button[i].className = "key";
             button[i].removeAttribute("disabled");}

        this.missed = 0;        //Resets missed guesses

        for (let j = 0; j < hearts.length; j++) //Re-enable all lives images
            {hearts[j].setAttribute("src", "images/liveHeart.png");}    

        this.activePhrase = null;     
        
    }

    /**********************************************************/
 }