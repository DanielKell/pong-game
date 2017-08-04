import {
    SVG_NS
} from '../settings.js';

export default class Ball {

    constructor(boardWidth, boardHeight, radius) {

        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.ping = new Audio('public/sounds/cat_kitten.wav');
        this.ping2 = new Audio('public/sounds/you_suck.wav');
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
        this.ping2.play(); //Added a sound file saying "you suck" when someone scores
            this.reset();
    }

    // <circle cx="256" cy="125" r="8" fill="white"/> 
    render(svg, player1, player2) {
        this.x += this.vx; //Can refactor this later by putting in separate method.
        this.y += this.vy;

        this.wallCollision();
        this.paddleCollision(player1, player2);

        //detect score. If the right wall was touched increment player 1 score, else if left wall touched increment player 2 score
        if (this.x - this.radius <= 0) {
            this.goal(player2);
            console.log('Player 2: ' + player2.score);

        } else if (this.x + this.radius >= this.boardWidth) {
            this.goal(player1);
            console.log('Player 1: ' + player1.score);
            this.vx = -this.vx;
        }

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'fill', 'white');
        svg.appendChild(circle);

        // 		<text x="210" y="30" text-anchor="middle" fill="white" font-size="26">2</text>
        // <text x="300" y="30" text-anchor="middle" fill="white" font-size="26">3</text>
    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;

        while (this.vy === 0) { //Keep doing this until it doesn't equal 0 anymore; So the ball doesn't go horizontally;
            this.vy = Math.floor(Math.random() * 10 - 5); //Grab random number between 5 and -5. Set it here so it happens upon reset.
        }

        this.vx = this.direction * (6 - Math.abs(this.vy)); //X vector based on y number. 6 minus absolute value
    }

}