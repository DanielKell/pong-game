/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg'; //Define the Name Space so we can use it repeatedly in the future.

var KEYS = exports.KEYS = {
    a: 'a', // player 1 up key
    z: 'z', // player 1 down key
    up: 'ArrowUp', // player 2 up key
    down: 'ArrowDown', // player 2 down key
    spaceBar: ' '
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

var _Board = __webpack_require__(6);

var _Board2 = _interopRequireDefault(_Board);

var _Paddle = __webpack_require__(7);

var _Paddle2 = _interopRequireDefault(_Paddle);

var _Ball = __webpack_require__(5);

var _Ball2 = _interopRequireDefault(_Ball);

var _Score = __webpack_require__(8);

var _Score2 = _interopRequireDefault(_Score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game(element, width, height) {
		var _this = this;

		_classCallCheck(this, Game);

		//Constructor Class
		this.width = width;
		this.height = height;

		this.paddleWidth = 8; //Can make these constants/lets and move them into settings.js and import into the constructor
		this.paddleHeight = 56;
		this.boardGap = 10;
		this.ballRadius = 8;

		this.gameElement = document.getElementById(element); //Store a reference to the element we are attaching the game to.
		this.board = new _Board2.default(this.width, this.height); //Instantiated the board

		this.ball = new _Ball2.default(this.width, this.height, this.ballRadius, '1'); //Instantiated the ball
		this.ball2 = new _Ball2.default(this.width, this.height, this.ballRadius, '2');

		this.player1 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.a, _settings.KEYS.z, _settings.KEYS.spaceBar);

		this.player2 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.width - this.boardGap - this.paddleWidth, (this.height - this.paddleHeight) / 2, _settings.KEYS.up, _settings.KEYS.down, _settings.KEYS.spaceBar);

		this.score1 = new _Score2.default( //Generating new score on board
		this.width / 2 - 30, 30);

		this.score2 = new _Score2.default(this.width / 2 + 30, 30);

		document.addEventListener('keydown', function (event) {
			//Setup other key functions to the game here!
			switch (event.key) {
				case _settings.KEYS.spaceBar:
					_this.pause = !_this.pause; //Set to inverted value
					break;
			} //Program it to do something crazy on up up down down, etc?
		});
	}

	_createClass(Game, [{
		key: 'render',
		value: function render() {
			//Render method is drawing the SVGs. Here we render the outermost SVG element.
			if (this.pause) {
				return; //This shuts down rest of the function
			}

			this.gameElement.innerHTML = ''; //Create empty string to stop it from reloading everything over and over.
			var svg = document.createElementNS(_settings.SVG_NS, 'svg'); //Store newly created element. Need NS as it's a namespace element. Imported SVG_NS above.
			svg.setAttributeNS(null, 'version', '1.1');
			svg.setAttributeNS(null, 'width', this.width); //Defining height and width of game board
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', '0 0 ' + this.width + ' ' + this.height);
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
	}]);

	return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(14)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./game.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./game.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Importing Game because 

// create a game instance
var game = new _Game2.default('game', 512, 256); //Pass into new variables to create new object from Game.js

//Usually we don't import css into JS, but webpack is taking care of it.
(function gameLoop() {
    //This is an IIFE: Immediately invoked function expression. Calls this function automatically without calling it directly. This kicks off our game loop once it starts running
    game.render(); //Calling the render method on the game object.
    requestAnimationFrame(gameLoop); //Recursively calling itself over and over. Similar to using a timer, but only works when the browser/tab is in focus
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
    function Ball(boardWidth, boardHeight, radius, speed) {
        _classCallCheck(this, Ball);

        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.speed = speed;
        this.direction = 1;
        this.ping = new Audio('public/sounds/cat_kitten.wav');
        this.reset();
        //this.wallCollision();
    }

    _createClass(Ball, [{
        key: 'wallCollision',
        value: function wallCollision() {
            var hitLeft = this.x - this.radius <= 0; //These are all booleans
            var hitRight = this.x + this.radius >= this.boardWidth;
            var hitTop = this.y - this.radius <= 0;
            var hitBottom = this.y + this.radius >= this.boardHeight;

            if (hitLeft || hitRight) {
                this.vx = -this.vx;
            } else if (hitTop || hitBottom) {
                this.vy = -this.vy;
            }
        }
    }, {
        key: 'paddleCollision',
        value: function paddleCollision(player1, player2) {
            if (this.vx > 0) {
                //Checking if ball is moving towards right paddle

                //detect player 2 paddle collision
                var paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height); //Paddle class gives us these coordinates
                //let paddle2 = player1.coordinates(player1.x, player1.y, player1.width, player1.height);

                var _paddle = _slicedToArray(paddle, 4),
                    leftX = _paddle[0],
                    rightX = _paddle[1],
                    topY = _paddle[2],
                    bottomY = _paddle[3]; //Destructuring paddle array
                //let [leftX, rightX, topY, bottomY] = paddle2;
                // let leftX = paddle[0];
                // let rightX = paddle[1];
                // let topY = paddle[2];
                // let bottomY = paddle[3];


                if (this.x + this.radius >= leftX && this.y >= topY && this.y <= bottomY) {
                    this.vx = -this.vx;
                    this.ping.play();
                }
            } else {
                var _paddle2 = player1.coordinates(player1.x, player1.y, player1.width, player1.height); //Paddle class gives us these coordinates

                var _paddle3 = _slicedToArray(_paddle2, 4),
                    _leftX = _paddle3[0],
                    _rightX = _paddle3[1],
                    _topY = _paddle3[2],
                    _bottomY = _paddle3[3]; //Destructuring paddle array

                if (this.x - this.radius <= _rightX && this.y >= _topY && this.y <= _bottomY) {
                    this.vx = -this.vx;
                    this.ping.play();
                }
            }
        }
    }, {
        key: 'goal',
        value: function goal(player) {
            //increment winning player score
            player.score++;
            this.reset();
        }
    }, {
        key: 'render',
        value: function render(svg, player1, player2) {
            this.x += this.vx; //Can refactor this later by putting in separate method.
            this.y += this.vy;

            this.wallCollision();
            this.paddleCollision(player1, player2);

            //detect score. If the right wall was touched increment player 1 score, else if left wall touched increment player 2 score
            if (this.x - this.radius <= 0) {
                this.goal(player2);

                if (player2.height > 25) {
                    //This stops the paddle from getting too small
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

            var circle = document.createElementNS(_settings.SVG_NS, 'circle');
            circle.setAttributeNS(null, 'cx', this.x);
            circle.setAttributeNS(null, 'cy', this.y);
            circle.setAttributeNS(null, 'r', this.radius);
            circle.setAttributeNS(null, 'fill', 'white');
            svg.appendChild(circle);
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.x = this.boardWidth / 2;
            this.y = Math.random() * this.boardHeight; //Causes the reset of ball to appear from a random spot in the middle of board.
            this.vy = 0;

            while (this.vy === 0) {
                //Keep doing this until it doesn't equal 0 anymore; So the ball doesn't go horizontally;
                this.vy = Math.floor(Math.random() * 10 - 5); //Grab random number between 5 and -5. Set it here so it happens upon reset.
            }

            this.vx = this.direction * (6 - Math.abs(this.vy)) * this.speed; //X vector based on y number. 6 minus absolute value
        }
    }]);

    return Ball;
}();

exports.default = Ball;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //We will be rendering a rectangle and a line

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
    function Board(width, height) {
        _classCallCheck(this, Board);

        this.width = width;
        this.height = height;
    }

    _createClass(Board, [{
        key: 'render',
        value: function render(svg) {
            //When we call this, we are passing in a reference to the svg. 

            /*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 256" width="512" height="256">
            <rect x="0" y="0" width="512" height="256" fill="purple"/> 
            <rect x="10" y="90" width="8" height="56" fill="white"/> 
            <rect x="494" y="90" width="8" height="56" fill="white"/>
            <circle cx="300" cy="125" r="8" fill="white"/> 
            <line stroke-dasharray="28.5, 28.5" x1="256" y1="0" x2="256" y2="256" stroke="white" stroke-width="10"/>
            <text x="210" y="30" text-anchor="middle" fill="white" font-size="26">2</text>
            <text x="300" y="30" text-anchor="middle" fill="white" font-size="26">3</text>
            </svg>*/
            var rect = document.createElementNS(_settings.SVG_NS, 'rect');
            rect.setAttributeNS(null, 'width', this.width);
            rect.setAttributeNS(null, 'height', this.height);
            rect.setAttributeNS(null, 'x', '0');
            rect.setAttributeNS(null, 'y', '0');
            rect.setAttributeNS(null, 'fill', 'purple');
            svg.appendChild(rect);

            var line = document.createElementNS(_settings.SVG_NS, 'line');
            line.setAttributeNS(null, 'stroke-dasharray', '20, 20');
            line.setAttributeNS(null, 'x1', this.width / 2);
            line.setAttributeNS(null, 'x2', this.width / 2);
            line.setAttributeNS(null, 'y1', '0');
            line.setAttributeNS(null, 'y2', this.height);
            line.setAttributeNS(null, 'stroke', 'white');
            line.setAttributeNS(null, 'stroke-width', '8');
            svg.appendChild(line);
        }
    }]);

    return Board;
}();

exports.default = Board;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
    function Paddle(boardHeight, width, height, x, y, up, down, space) {
        var _this = this;

        _classCallCheck(this, Paddle);

        this.boardHeight = boardHeight; // So we can stop the paddle from going off the page
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 15; //Statically set
        this.score = 0; //Statically set. Will increment later

        document.addEventListener('keydown', function (event) {
            switch (event.key) {//Checking the key from the event object 
                case up:
                    //console.log('up');
                    _this.up();
                    break;

                case down:
                    //console.log('down');
                    _this.down();
                    break;

                case space:
                    //console.log('pause');
                    _this.pause = !_this.pause;
                    break;
            }
        });
    }

    _createClass(Paddle, [{
        key: 'coordinates',
        value: function coordinates(x, y, width, height) {
            var leftX = x;
            var rightX = x + width;
            var topY = y;
            var bottomY = y + height;
            return [leftX, rightX, topY, bottomY];
        }
    }, {
        key: 'up',
        value: function up() {
            if (this.pause) {
                return; //This shuts down rest of the function
            } else {
                this.y = Math.max(this.y - this.speed, 0); //Compare where we are vs edge of the board
            }
        }
    }, {
        key: 'down',
        value: function down() {
            if (this.pause) {
                return; //This shuts down rest of the function
            } else {
                this.y = Math.min(this.y + this.speed, this.boardHeight - this.height); //aka 256px - 56px
            }
        }
    }, {
        key: 'render',
        value: function render(svg) {
            var rect = document.createElementNS(_settings.SVG_NS, 'rect');
            rect.setAttributeNS(null, 'width', this.width);
            rect.setAttributeNS(null, 'height', this.height);
            rect.setAttributeNS(null, 'x', this.x);
            rect.setAttributeNS(null, 'y', this.y);
            rect.setAttributeNS(null, 'fill', 'white');
            svg.appendChild(rect);
        }
    }]);

    return Paddle;
}();

exports.default = Paddle;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
    function Score(x, y, size) {
        _classCallCheck(this, Score);

        this.x = x;
        this.y = y;
        this.size = size;
    }

    _createClass(Score, [{
        key: 'render',
        value: function render(svg, score) {
            var text = document.createElementNS(_settings.SVG_NS, 'text');
            text.setAttributeNS(null, 'x', this.x);
            text.setAttributeNS(null, 'y', this.y);
            text.setAttributeNS(null, 'fill', 'white');
            text.setAttributeNS(null, 'text-anchor', 'middle');
            text.setAttributeNS(null, 'font-size', '26');
            text.setAttributeNS(null, 'font-family', 'Silkscreen Web');
            text.textContent = score; // Setting the content to the score
            svg.appendChild(text);
        }
    }]);

    return Score;
}();

exports.default = Score;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + __webpack_require__(1) + ");\n  src: url(" + __webpack_require__(1) + "?#iefix) format('embedded-opentype'),\n    url(" + __webpack_require__(13) + ") format('woff'),\n    url(" + __webpack_require__(12) + ") format('truetype'),\n    url(" + __webpack_require__(11) + "#silkscreennormal) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n  background-size: contain;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem; \n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);