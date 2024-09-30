'use strict'

function getElCell(pos) {
    return document.querySelector(`[data-i='${pos.i}'][data-j='${pos.j}']`)
}

function createCell(type = SKY, gameObject = null) {
    return {
        type,
        gameObject,
    }
}
function updateCell(pos, gameObject = null) {
    gBoard[pos.i][pos.j].gameObject = gameObject
    var elCell = getElCell(pos)
    elCell.innerHTML = gameObject || ''
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}