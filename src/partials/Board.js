//We will be rendering a rectangle and a line

import {
    SVG_NS
} from '../settings.js';

export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    render(svg) { //When we call this, we are passing in a reference to the svg. 

        /*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 256" width="512" height="256">
				<rect x="0" y="0" width="512" height="256" fill="purple"/> 
				<rect x="10" y="90" width="8" height="56" fill="white"/> 
				<rect x="494" y="90" width="8" height="56" fill="white"/>
				<circle cx="300" cy="125" r="8" fill="white"/> 
				<line stroke-dasharray="28.5, 28.5" x1="256" y1="0" x2="256" y2="256" stroke="white" stroke-width="10"/>
				<text x="210" y="30" text-anchor="middle" fill="white" font-size="26">2</text>
				<text x="300" y="30" text-anchor="middle" fill="white" font-size="26">3</text>
			</svg>*/
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', '0');
        rect.setAttributeNS(null, 'y', '0');
        rect.setAttributeNS(null, 'fill', 'purple');
        svg.appendChild(rect);

        let line = document.createElementNS(SVG_NS, 'line');
        line.setAttributeNS(null, 'stroke-dasharray', '20, 20');
        line.setAttributeNS(null, 'x1', this.width / 2);
        line.setAttributeNS(null, 'x2', this.width / 2);
        line.setAttributeNS(null, 'y1', '0');
        line.setAttributeNS(null, 'y2', this.height);
        line.setAttributeNS(null, 'stroke', 'white');
        line.setAttributeNS(null, 'stroke-width', '8');
        svg.appendChild(line);
    }
}