'use strict'

const BOARD_SIZE = 14
const ALIEN_ROW_LENGTH = 8
const ALIEN_ROW_COUNT = 3

const SKY = 'SKY'
// const HERO = 'HERO'
// const ALIEN = 'ALIEN'
// const LASER = 'LASER'

const HERO = '<img src="img/hero.png">'
const ALIEN = '<img src="img/alien03.png">'
const LASER = '<img src="img/laser.png">'
// const LASER = '⤊'

var gBoard
const gGame = {
    isOn: false,
    alienCount: 0,
    score: 0,
}

function onInit() {
    gBoard = createBoard()

    createHero(gBoard)
    createAliens(gBoard)
    renderBoard(gBoard)

    gGame.isOn = false
    onCloseModal()
}

// Matrix of cell objects. e.g.: {type: SKY, gameObject: ALIEN}
function createBoard() {
    const board = createMat(BOARD_SIZE, BOARD_SIZE)

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            board[i][j] = { type: SKY, gameObject: '' }
        }
    }
    return board
}

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var className = currCell.type
            strHTML += `<td
            class="${className}"
                    data-i="${i}" data-j="${j}">${currCell.gameObject}</td>`
        }
        strHTML += '</tr>'
    }

    const elBoard = document.querySelector('.game-board')
    elBoard.innerHTML = strHTML
}

// Returns a new cell object. e.g.: {type: SKY, gameObject: ALIEN}
function createCell(type = SKY, gameObject = null) {
    return {
        type: SKY,
        gameObject: gameObject,
    }
}

function getElCell(pos) {
    return document.querySelector(`[data-i='${pos.i}'][data-j='${pos.j}']`)
}

function updateCell(pos, gameObject = null) {
    gBoard[pos.i][pos.j].gameObject = gameObject
    var elCell = getElCell(pos)
    elCell.innerHTML = gameObject || ''
}

function updateScore(diff) {
    const elScore = document.querySelector('h2 span')
    gGame.score += diff
    elScore.innerText = gGame.score
}

function gameOver() {
    if (gGame.alienCount === 0) {
        clearInterval(gLaserInterval)
        console.log('Game Over')
        gGame.isOn = false
        onOpenModal()
    }
}

function onOpenModal() {
    const elModal = document.querySelector('.modal')
    elModal.hidden = false
}

function onCloseModal() {
    document.querySelector('.modal').hidden = true
}
