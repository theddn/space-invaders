'use strict'

const BOARD_SIZE = 14
var ALIEN_ROW_LENGTH = 8
var ALIEN_ROW_COUNT = 3

const SKY = 'SKY'
const EMPTY = ' '
const HERO = '<img src="img/hero.png">'
const ALIEN = '<img src="img/alien03.png">'
const LASER = '<img src="img/laser.png">'

var gBoard
const gGame = {
    isOn: false,
    alienCount: 0,
    score: 0,
}

function onInit() {
    gGame.isOn = false
    gBoard = createBoard()
    createAliens(gBoard)
    createHero(gBoard)
    renderBoard(gBoard)
    onCloseModal()
    // gIntervalAliens = setInterval(moveAlien, 1000)
}

function createBoard() {
    const size = BOARD_SIZE
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
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
            const currCell = board[i][j]
            const cellType = currCell.type

            strHTML += `<td data-i="${i}" data-j="${j}"
             class="${cellType}">
            ${currCell.gameObject}</td>`
        }
        strHTML += '</tr>'
    }

    const elBoard = document.querySelector('.game-board')
    elBoard.innerHTML = strHTML
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
