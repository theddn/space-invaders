'use strict'

const ALIEN_SPEED = 500

var gIntervalAliens

var gAliensTopRowIdx
var gAliensBottomRowIdx

var gIsAlienFreeze = true

function createAliens(board) {
    for (var i = 1; i <= ALIEN_ROW_COUNT; i++) {
        for (var j = 1; j <= ALIEN_ROW_LENGTH; j++) {
            board[i][j].gameObject = ALIEN
        }
    }
}

function handleAlienHit(pos) {}

function shiftBoardRight(board, fromI, toI) {}
function shiftBoardLeft(board, fromI, toI) {}
function shiftBoardDown(board, fromI, toI) {}
// runs the interval for moving aliens side to side and down
// it re-renders the board every time
// when the aliens are reaching the hero row - interval stops
function moveAliens() {}
