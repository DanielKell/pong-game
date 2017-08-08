import {
    SVG_NS
} from '../settings.js';

export default class Paddle {


    constructor(boardHeight, width, height, x, y, up, down, space) {
        this.boardHeight = boardHeight; // So we can stop the paddle from going off the page
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 15; //Statically set
        this.score = 0; //Statically set. Will increment later

        document.addEventListener('keydown', event => {
            switch (event.key) { //Checking the key from the event object 
                case up:
                    //console.log('up');
                    this.up();
                    break;

                case down:
                    //console.log('down');
                    this.down();
                    break;

                case space:
                    //console.log('pause');
                    this.pause = !this.pause;
                    break;
            }
        });
    }

    coordinates(x, y, width, height) {
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return [leftX, rightX, topY, bottomY];
    }

    up() {
        if (this.pause) {
            return; //This shuts down rest of the function
        } else {
            this.y = Math.max(this.y - this.speed, 0); //Compare where we are vs edge of the board
        }
    }

    down() {
        if (this.pause) {
            return; //This shuts down rest of the function
        } else {
            this.y = Math.min(this.y + this.speed, this.boardHeight - this.height); //aka 256px - 56px
        }
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