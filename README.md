# FSJSTechDegreeProject4
 OOP JavaScript Phrase Hunter

Exceeds:

1) Keyboard can be used to input characters - the handleInteraction method is linked to an array in the game 
object (game.guesses) - whenever a letter guess is made, the guess is pushed into this array. The handleInteraction() 
method is then inside an if statement that will not allow it to run if a repeated guess is made :)

2) Can also start the game with the enter/return key, which is then disabled for the duration of the 
game (prevent's multiple li's from being generated

3) Dynamically update the <h2> with class "header" to display the Rule Number and its index 
from the phrase array - I did this by returning an array value from getRandomPhrase()

4) Display the correctly guessed phrase on the WIN screen. Added some top margin the the 
displayed phrase on the WIN scteen inside the CSS.

5) Updated the start button tor display "Play again?" after first attempt