import {
	SVG_NS, KEYS
} from '../settings.js';
import Board from './Board.js';
import Paddle from './Paddle.js';

export default class Game {

	constructor(element, width, height) { //Constructor Class
		this.width = width;
		this.height = height;

		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;

		this.gameElement = document.getElementById(element) //Store a reference to the element we are attaching the game to.
		this.board = new Board(this.width, this.height); //Instantiated the board
		this.player1 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight)/2);
		this.player2 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, (this.width - this.boardGap - this.paddleWidth), (this.height - this.paddleHeight)/2);
	}

	render() { //Render method is drawing the SVGs. Here we render the outermost SVG element.
		this.gameElement.innerHTML = ''; //Create empty string to stop if from reloading everything over and over.
		let svg = document.createElementNS(SVG_NS, 'svg'); //Store newly created element. Need NS as it's a namespace element. Imported SVG_NS above.
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', this.width); //Defining height and width of game board
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg); //Appending to div with an id of game.
		this.board.render(svg); //Connecting board to svg. In render method it's accepting argument of svg, and creating the pieces inside the board.
		//Passing in the above let svg
		this.player1.render(svg); //Rendering the paddles on board
		this.player2.render(svg);
	}
}