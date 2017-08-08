import {
	SVG_NS,
	KEYS
} from '../settings.js';
import Board from './Board.js';
import Paddle from './Paddle.js';
import Ball from './Ball.js';
import Score from './Score.js'

export default class Game {

	constructor(element, width, height) { //Constructor Class
		this.width = width;
		this.height = height;

		this.paddleWidth = 8; //Can make these constants/lets and move them into settings.js and import into the constructor
		this.paddleHeight = 56;
		this.boardGap = 10;
		this.ballRadius = 8;

		this.gameElement = document.getElementById(element) //Store a reference to the element we are attaching the game to.
		this.board = new Board(this.width, this.height); //Instantiated the board

		this.ball = new Ball(this.width, this.height, this.ballRadius, '1'); //Instantiated the ball
		this.ball2 = new Ball(this.width, this.height, this.ballRadius, '2');

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			(this.height - this.paddleHeight) / 2,
			KEYS.a,
			KEYS.z,
			KEYS.spaceBar
		);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			(this.height - this.paddleHeight) / 2,
			KEYS.up,
			KEYS.down,
			KEYS.spaceBar
		);

		this.score1 = new Score( //Generating new score on board
			((this.width / 2) - 30), 30
		)

		this.score2 = new Score(
			((this.width / 2) + 30), 30
		)


		document.addEventListener('keydown', event => { //Setup other key functions to the game here!
			switch (event.key) {
				case KEYS.spaceBar:
					this.pause = !this.pause; //Set to inverted value
					break;
			} //Program it to do something crazy on up up down down, etc?

		});
	}

	render() { //Render method is drawing the SVGs. Here we render the outermost SVG element.
		if (this.pause) {
			return; //This shuts down rest of the function
		}

		this.gameElement.innerHTML = ''; //Create empty string to stop it from reloading everything over and over.
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
		this.score1.render(svg, this.player1.score);
		this.score2.render(svg, this.player2.score);
		this.ball.render(svg, this.player1, this.player2); //Render the ball. Passing players through allows us to track where the players are (for paddle collision)
		this.ball2.render(svg, this.player1, this.player2);
	}
}