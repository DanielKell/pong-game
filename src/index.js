import './styles/game.css'; //Usually we don't import css into JS, but webpack is taking care of it.
import Game from './partials/Game' //Importing Game because 

// create a game instance
const game = new Game('game', 512, 256); //Pass into new variables to create new object from Game.js

(function gameLoop() { //This is an IIFE: Immediately invoked function expression. Calls this function automatically without calling it directly. This kicks off our game loop once it starts running
    game.render(); //Calling the render method on the game object.
    requestAnimationFrame(gameLoop); //Recursively calling itself over and over. Similar to using a timer, but only works when the browser/tab is in focus
})();


