'use strict'

const ALIEN_SPEED = 500

var gIntervalAliens

var gAliensTopRowIdx = ALIEN_ROW_COUNT
var gAliensBottomRowIdx = ALIEN_ROW_COUNT

var gIsAlienFreeze = true

// The following two variables represent the part of the matrix (some rows)
// that we should shift (left, right, and bottom)
// We need to update those when:
// (1) shifting down and (2) last alien was cleared from row

function createAliens(board) {
    for (var i = 0; i < ALIEN_ROW_COUNT; i++) {
        for (var j = 0; j < ALIEN_ROW_LENGTH; j++) {
            board[i][j].gameObject = ALIEN
            gGame.alienCount++
        }
    }
    // gIntervalAliens = setInterval(moveAliens, 2000)
    moveAliens()
}

function handleAlienHit(pos) {
    updateCell(pos)
    gGame.alienCount--
    updateScore(10)
    gameOver()
}

function shiftBoardRight(board, fromI, toI) {

    
}
function shiftBoardLeft(board, fromI, toI) {}
function shiftBoardDown(board, fromI, toI) {}

// runs the interval for moving aliens side to side and down
// it re-renders the board every time
// when the aliens are reaching the hero row - interval stops
function moveAliens() {
    
  
    
}
