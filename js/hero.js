'use strict'

const LASER_SPEED = 80
var gHero

// creates the hero and place it on board
function createHero(board) {
    gHero = {
        pos: { i: 12, j: 6 },
        isShoot: false,
    }
    board[gHero.pos.i][gHero.pos.j].gameObject = HERO
}

// Handle game keys function
function onKeyDown(ev) {
    switch (ev.code) {
        case 'ArrowLeft':
            moveHero(-1)
            break

        case 'ArrowRight':
            moveHero(1)
            break
        case 'Space':
            shoot()
            break
    }
}

// Move the hero right (1) or left (-1)
function moveHero(dir) {
    const nextCell = { i: gHero.pos.i, j: gHero.pos.j + dir }
    if (nextCell.j < 0 || nextCell.j > BOARD_SIZE - 1) return

    updateCell(gHero.pos)

    gHero.pos.j = nextCell.j

    updateCell(gHero.pos, HERO)
}

// renders a LASER at specific cell for short time and removes it
// TODO: blinkLaser(pos)
function blinkLaser(pos) {
    updateCell({ i: 11, j: 6 }, LASER)
    // updateCell(pos, LASER)
}
// Sets an interval for shutting (blinking) the laser up towards aliens
function shoot() {
    blinkLaser()
}
