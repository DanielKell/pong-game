![Purrong Gameplay](https://lh3.googleusercontent.com/lkdPBVxIx1ISfXLk52rMG21QGMVXweMymsfCRjMgt61b2BHYoL1spK3X862J_vYeym0mOvaYs_F6RRo5bBbqjF_5oIiGw6jusAFrIigNduBj_G3T8NjlepFDtEMMeM0IDYkaes8DUobpuowjzraviZ3msaZexPz5wyFXdTFydzCN-boKXftt8tc73dffH7F6f7cDKE-ADEKCSwX51yB_pzbKix7YWEBC9pDp1eV3TthCYtAoFwIpmsJnvhlmvx4zptFNkqpfUY94TbGDFHmS5ZikZbC9YRZiUJowqwMDssF6m0iSFLTQUtUxNJqoy_wYgOkCNxtpnIJzUcjtWhmYPmUHLdNtE6olzy1QptihHe3juAAtnJznEzuUokSu2EfDzCiipSAnQqWSq-ePUlNUeL05vLw4U6X5mpiPMPSRrqJLih757Wwug-txsI_IocHKFud-sWVqGT4JDpWj8taPjpn1i4SWgLPChy2dV5O4GkqjJLyFGCzWIxh5c3BXxWZ_w9aHYb5cbWeBnnBxRI28uQb7sWijuS3fEHYl3z2TQYzaHzlvlrvJidPwKCM1rwDQPdcCnQxp=w2418-h1450)

# Purrong Game

Purrrong is a two player game where each player tries to deflect the ball using their paddle onto the other side of the players court. Players can determine what score they wish to play up to as there is no score limit.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down

# Built Using

- Webpack
- HTML 5
- Javascript
- ES 2015 
- CSS 3

# Project Learnings/Takeaways

These are some of the most crucial elements I learned from this project:

- Importing JS partials into the Game.js made classes accessible and kept code organized, not having to write everything on a single file.
- Using the New keyword to create instances of the classes setup in other files.
- Understanding how elements are rendered, and how they're neccessary to place SVG items onto the viewport.
- How to manipulate the game setup to fiddle with speed and vectors to make the game more fun and interactive.
- How to create an SVGs HTML.
- How to translate all SVG properties in JS by using setAttributeNS and createElementNS to give the SVG it's shape.
- Using Viewport to set visual canvas to place SVGs.
- Using document.addEventListener to listen for certain key presses.
