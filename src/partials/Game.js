import { SVG_NS} from '../settings.js';
import Board from './Board.js';

export default class Game {

	constructor(element, width, height) { //Constructor Class
	    this.width = width;
		this.height = height;

		this.gameElement = document.getElementById(element) //Store a reference to the element we are attaching the game to.
		this.board = new Board(this.width, this.height); //Instantiated the board
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
	}

}