'use strict'

const ALIEN_SPEED = 500

var gIntervalAliens

var gAliensTopRowIdx
var gAliensBottomRowIdx

var gAliens = []

function createAliens(board) {
    gAliens = []

    for (var i = 0; i < ALIEN_ROW_COUNT; i++) {
        for (var j = 0; j < ALIEN_ROW_LENGTH; j++) {
            board[i][j].gameObject = ALIEN
            gAliens.push({ pos: { i: i, j: j } })
            gGame.alienCount++
        }
    }
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

function moveAlien() {
  
}
