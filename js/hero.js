'use strict'

const LASER_SPEED = 80
var gHero
var gLaserInterval
var gLaserSetTimeOut

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
            onMoveHero(-1)
            break

        case 'ArrowRight':
            onMoveHero(1)
            break
        case 'Space':
            onShoot()
            break

        default:
            return null
    }
}

// Move the hero right (1) or left (-1)
function onMoveHero(dir) {
    gGame.isOn = true
    const nextCell = { i: gHero.pos.i, j: gHero.pos.j + dir }
    if (nextCell.j < 0 || nextCell.j > BOARD_SIZE - 1) return

    updateCell(gHero.pos)

    gHero.pos.j = nextCell.j

    updateCell(gHero.pos, HERO)
}

// renders a LASER at specific cell for short time and removes it

function setBlinkLaser(pos) {
    gLaserSetTimeOut = setTimeout(() => {
        updateCell(pos)
    }, 57)
    updateCell(pos, LASER)
}
// Sets an interval for shutting (blinking) the laser up towards aliens

function onShoot() {
    var laserPos = { i: gHero.pos.i, j: gHero.pos.j }
    if (gHero.isShoot) return
    gHero.isShoot = true
    gGame.isOn = true

    gLaserInterval = setInterval(() => {
        laserPos.i--
        if (laserPos.i === 0) {
            gHero.isShoot = false
            clearInterval(gLaserInterval)
        }
        if (gBoard[laserPos.i][laserPos.j].gameObject === ALIEN) {
            handleAlienHit(laserPos)
            gHero.isShoot = false
            clearInterval(gLaserInterval)
        }
        setBlinkLaser(laserPos)
    }, LASER_SPEED)
    moveAliens()
}
