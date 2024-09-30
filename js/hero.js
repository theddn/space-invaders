'use strict'

const LASER_SPEED = 80
var gHero
var gLaserInterval
var gLaserSetTimeOut
 var glaserPos

function createHero(board) {
    gHero = {
        pos: { i: 12, j: 6 },
        isShoot: false,
    }
    board[gHero.pos.i][gHero.pos.j].gameObject = HERO
}

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
        case 'n':
            if (gHero.isShoot) blowCounts(pos, board)

            break

        default:
            return null
    }
}

function onMoveHero(dir) {
    gGame.isOn = true
    const nextCell = { i: gHero.pos.i, j: gHero.pos.j + dir }
    if (nextCell.j < 0 || nextCell.j > BOARD_SIZE - 1) return

    updateCell(gHero.pos)

    gHero.pos.j = nextCell.j

    updateCell(gHero.pos, HERO)
}

function setBlinkLaser(pos) {
    gLaserSetTimeOut = setTimeout(() => {
        updateCell(pos)
    }, 57)
    updateCell(pos, LASER)
}

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
        // glaserPos = laserPos
    }, LASER_SPEED)
}

// function blowCounts(pos, board) {
//     var AroundCount = 0

//     for (var i = pos.i - 1; i <= pos.i + 1; i++) {
//         if (i < 0 || i >= board.length) continue
//         for (var j = pos.j - 1; j <= pos.j + 1; j++) {
//             if (j < 0 || j >= board[i].length) continue
//             if (i === pos.i && j === pos.j) continue
//             if (board[i][j].gameObject === ALIEN) AroundCount++
//         }
//     }
// }
