/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor (phrase) {
        this.phrase = phrase.toLowerCase(); 

    }

    /*Adds letter placeholders to the display when the game starts*/
    addPhraseToDisplay () {

        const phraseUL = document.getElementById("phrase"); //Get empty HTML UL

        const characters = this.phrase.split(""); //Split phrase up into individual characters

        const letterRegex = /[a-z]/; //Declare regex to identify split characters for adding classes
        const spaceRegex = /\s/;

        characters.forEach (character => {    //Iterates through characters, adding 'letter' or 'space' class

            const li = document.createElement("li"); //Creates LI and sets content to the passed character
            li.textContent = character;

                if (letterRegex.test(character)) {li.classList.add("letter")}

                else if(spaceRegex.test(character)) {li.classList.add("space")};

            phraseUL.appendChild(li);           //Append LIs to UL in sequence
        });
    }
    /**********************************************************/

    /*Checks to see if the letter selected by the player matches a letter in the display, and returns true or false*/
    checkLetter (letter) {
        return this.phrase.includes(letter);
    }
    /**********************************************************/

    /*Reveals the letters on the board that match the player selection*/
    showMatchedLetter (letter) {

        let keys = document.getElementsByClassName("letter");

        for (let i = 0; i < keys.length; i++) {
            
            if (keys[i].innerText === letter) 
            
                {keys[i].classList.add("show");}      

        }
    }
    /**********************************************************/

 }