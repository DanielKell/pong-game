import {
    SVG_NS
} from '../settings.js';

export default class Paddle {


    constructor(boardHeight, width, height, x, y) {
        this.boardHeight = boardHeight; // So we can stop the paddle from going off the page
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 10; //Statically set
        this.score = 0; //Statically set. Will increment later
    }

    up() {

    }

    down() {

    }

    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        rect.setAttributeNS(null, 'fill', 'white');
        svg.appendChild(rect);
    }


}