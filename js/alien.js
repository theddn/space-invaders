'use strict'

const ALIEN_SPEED = 500

var gIntervalAliens
var gIsAlienFreeze = true

var gAliensTopRowIdx
var gAliensBottomRowIdx

function createAliens(board) {
    const cols = ALIEN_ROW_LENGTH
    const rows = ALIEN_ROW_COUNT
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            board[i][j] = createCell(SKY, ALIEN)
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

function isAlienCell(pos) {
    return gBoard[pos.i][pos.j].gameObject === ALIEN
}

function isEmptyCell(pos) {
    return (gBoard[pos.i][pos.j].gameObject = null || '')
}

//  from left to right
function shiftBoardRight(board, fromI, toI) {
    // for (var i = fromI.i; i <= toI.i; i++) {
    //     var cell = { i: i, j: fromI.i }
    //     if (board[i][toI.i].gameObject === ALIEN) updateCell(cell)
    // }
}

// from right to left
function shiftBoardLeft(board, fromI, toI) {}

//from up to down
function shiftBoardDown(board, fromI, toI) {}

// function moveAlien() {
//     var topLeft = { i: 0, i: 0 }
//     var bottomLeft = { i: 2, j: 0 }
//     var topRight = { i: 0, j: 7 }
//     var bottomRight = { i: 2, j: 7 }
//     gAliensTopRowIdx = ALIEN_ROW_LENGTH
//     gAliensBottomRowIdx = ALIEN_ROW_COUNT

//     shiftBoardRight(gBoard, topLeft, bottomRight)
// }
