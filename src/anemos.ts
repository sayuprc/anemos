import type { p5SVG } from 'p5.js-svg'
import type { Point } from './util'
import { drawAnemos as drawLeftSideAnemos } from './left-side-anemos'
import { drawAnemos as drawRightSideAnemos } from './right-side-anemos'

const side = 500

// 半径
const radius = side / 2

const originAfterMoving: Point = {
  x: 0,
  y: 0,
}

const anemosSketch = (p: p5SVG) => {
  p.setup = () => {
    p.createCanvas(side, side, p.SVG)
    p.noLoop()

    const button = p.createButton('SVG ダウンロード')
    button.mousePressed(() => p.save('anemoses.svg'))
  }

  p.draw = () => {
    p.scale(1.8)
    drawLeftSideAnemos(p, { x: 195 - 115, y: 220 / 2 }, originAfterMoving, radius)
    drawRightSideAnemos(p, { x: 310 - 115, y: 252 / 2 }, originAfterMoving, radius)
  }
}

export { anemosSketch }
