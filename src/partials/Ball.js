import {
    SVG_NS
} from '../settings.js';

export default class Ball {

    constructor(boardWidth, boardHeight, radius, speed) {

        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.speed = speed;
        this.direction = 1;
        this.ping = new Audio('public/sounds/cat_kitten.wav');
        //this.ping2 = new Audio('public/sounds/you_suck.wav');
        this.reset();
        //this.wallCollision();
    }

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0; //These are all booleans
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;

        if (hitLeft || hitRight) {
            this.vx = -this.vx;
        } else if (hitTop || hitBottom) {
            this.vy = -this.vy;
        }
    }

    paddleCollision(player1, player2) {
        if (this.vx > 0) { //Checking if ball is moving towards right paddle

            //detect player 2 paddle collision
            let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height); //Paddle class gives us these coordinates
            //let paddle2 = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
            let [leftX, rightX, topY, bottomY] = paddle; //Destructuring paddle array
            //let [leftX, rightX, topY, bottomY] = paddle2;
            // let leftX = paddle[0];
            // let rightX = paddle[1];
            // let topY = paddle[2];
            // let bottomY = paddle[3];
            if (((this.x + this.radius) >= leftX) &&
                ((this.y) >= topY) &&
                ((this.y) <= bottomY)) {
                this.vx = -this.vx;
                this.ping.play();
            }

        } else {
            let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height); //Paddle class gives us these coordinates

            let [leftX, rightX, topY, bottomY] = paddle; //Destructuring paddle array

            if (((this.x - this.radius) <= rightX) &&
                ((this.y) >= topY) &&
                ((this.y) <= bottomY)) {
                this.vx = -this.vx;
                this.ping.play();
            }

        }
    }

    goal(player) { //increment winning player score
        player.score++
        //this.ping2.play(); //Added a sound file saying "you suck" when someone scores
            this.reset();
    }

    render(svg, player1, player2) {
        this.x += this.vx; //Can refactor this later by putting in separate method.
        this.y += this.vy;

        this.wallCollision();
        this.paddleCollision(player1, player2);

        //detect score. If the right wall was touched increment player 1 score, else if left wall touched increment player 2 score
        if (this.x - this.radius <= 0) {
            this.goal(player2);

            if(player2.height > 25) { //This stops the paddle from getting too small
            player2.height -= 6; //When player 2 scores, they get a disadvantage of a smaller paddle, and player 1 gets an advantage 
            player1.height += 6;
            }

        } else if (this.x + this.radius >= this.boardWidth) {
            this.goal(player1);
            this.vx = -this.vx;
            
            if (player1.height > 25) {
            player2.height += 6;
            player1.height -= 6;
            }
        }

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'fill', 'white');
        svg.appendChild(circle);
    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = Math.random() * 256; //Causes the reset of ball to appear from a random spot in the middle of board.

        this.vy = 0;

        while (this.vy === 0) { //Keep doing this until it doesn't equal 0 anymore; So the ball doesn't go horizontally;
            this.vy = Math.floor(Math.random() * 10 - 5); //Grab random number between 5 and -5. Set it here so it happens upon reset.
        }

        this.vx = this.direction * (6 - Math.abs(this.vy)) * this.speed; //X vector based on y number. 6 minus absolute value
    }
}