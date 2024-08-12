import type { p5SVG } from 'p5.js-svg'
import { drawSquareForDev, fillWhite, fillBlack, fillBlue, calculateDivideCirclePoints } from './util'

const side = 500

// 半径
const radius = side / 2

// 原点
const origin = side / 2

const originAfterMoving = 0

const leftSideAnemosSketch = (p: p5SVG) => {
  p.setup = () => {
    p.createCanvas(side, side, p.SVG)
    p.noLoop()
  }

  p.draw = () => {
    // drawSquareForDev(p)

    drawAnemos(p, origin, originAfterMoving, radius)
  }
}

const drawAnemos = (p: p5SVG, origin: number, originAfterMoving: number, radius: number) => {
  p.push()
  p.translate(origin, origin)
  p.rotate(p.radians(30))

  // 葉の描画
  drawLeaves(p, radius)

  // 花弁の描画
  drawPetal(p, originAfterMoving)

  drawFloralOrgans(p, originAfterMoving)

  p.pop()
}

const drawLeaves = (p: p5SVG, radius: number) => {
  fillBlack(p)
  // 左の葉
  p.noStroke()

  p.point(240 - radius, 310 - radius)
  p.point(235 - radius, 325 - radius)
  p.point(233 - radius, 340 - radius)
  p.point(245 - radius, 396 - radius)
  p.point(250 - radius, 384 - radius)
  p.point(258 - radius, 370 - radius)
  p.point(268 - radius, 350 - radius)
  p.point(272 - radius, 330 - radius)
  p.point(264 - radius, 302 - radius)
  p.point(250 - radius, 300 - radius)

  p.stroke(0)
  p.strokeWeight(0.2)

  p.beginShape()
  p.curveVertex(240 - radius, 310 - radius)
  p.curveVertex(235 - radius, 325 - radius)
  p.curveVertex(233 - radius, 340 - radius)
  p.curveVertex(245 - radius, 396 - radius)
  p.curveVertex(250 - radius, 384 - radius)
  p.curveVertex(258 - radius, 370 - radius)
  p.curveVertex(268 - radius, 350 - radius)
  p.curveVertex(272 - radius, 330 - radius)
  p.curveVertex(264 - radius, 302 - radius)
  p.curveVertex(250 - radius, 300 - radius)
  p.curveVertex(240 - radius, 310 - radius)
  p.endShape()

  // 右の葉
  p.noStroke()

  p.point(275 - radius, 290 - radius)
  p.point(260 - radius, 290 - radius)
  p.point(265 - radius, 300 - radius)
  p.point(270 - radius, 310 - radius)
  p.point(280 - radius, 325 - radius)
  p.point(290 - radius, 332 - radius)
  p.point(330 - radius, 350 - radius)
  p.point(320 - radius, 335 - radius)
  p.point(305 - radius, 300 - radius)
  p.point(290 - radius, 290 - radius)

  p.stroke(0)
  p.strokeWeight(0.2)

  p.beginShape()
  p.curveVertex(275 - radius, 290 - radius)
  p.curveVertex(260 - radius, 290 - radius)
  p.curveVertex(265 - radius, 300 - radius)
  p.curveVertex(270 - radius, 310 - radius)
  p.curveVertex(280 - radius, 325 - radius)
  p.curveVertex(290 - radius, 332 - radius)
  p.curveVertex(330 - radius, 350 - radius)
  p.curveVertex(320 - radius, 335 - radius)
  p.curveVertex(305 - radius, 300 - radius)
  p.curveVertex(290 - radius, 290 - radius)
  p.curveVertex(275 - radius, 290 - radius)
  p.endShape()
}

const drawPetal = (p: p5SVG, originAfterMoving: number) => {
  // 花弁の青い部分を先に塗る
  fillBlue(p)
  p.ellipse(originAfterMoving, originAfterMoving, 100)
  // 花弁の白い部分を先に塗る
  fillWhite(p)
  p.ellipse(originAfterMoving, originAfterMoving, 66)

  const [primary, secondary] = calculateDivideCirclePoints(p, originAfterMoving, 50)
  const [miniPrimary, miniSecondary] = calculateDivideCirclePoints(p, originAfterMoving, 33)

  for (let i = 0; i < 5; i++) {
    p.push()
    p.translate(originAfterMoving, originAfterMoving)
    p.rotate(p.radians(i * 72))

    p.noStroke()
    p.point(originAfterMoving, originAfterMoving)
    p.point(secondary.x, secondary.y)
    p.point(secondary.x + primary.x, secondary.y - primary.y)
    p.point(primary.x, primary.y)

    p.stroke(0)
    p.strokeWeight(1)

    // 青い花弁の色
    fillBlue(p)
    p.beginShape()
    p.curveVertex(originAfterMoving, originAfterMoving)
    p.curveVertex(secondary.x, secondary.y)
    p.curveVertex(secondary.x + primary.x, secondary.y - primary.y)
    p.curveVertex(primary.x, primary.y)
    p.curveVertex(originAfterMoving, originAfterMoving)
    p.endShape()

    // 白い部分
    p.strokeWeight(0.5)
    fillWhite(p)
    p.beginShape()
    p.bezier(
      miniPrimary.x,
      miniPrimary.y,
      miniPrimary.x + 15,
      miniPrimary.y + 25,
      miniSecondary.x + 20,
      miniSecondary.y + 8,
      miniSecondary.x,
      miniSecondary.y,
    )
    p.endShape()

    p.strokeWeight(1)
    p.line(originAfterMoving, originAfterMoving, primary.x, primary.y)

    p.pop()
  }
}

const drawFloralOrgans = (p: p5SVG, originAfterMoving: number) => {
  // 中心の円
  p.stroke(0)
  fillWhite(p)
  p.ellipse(originAfterMoving, originAfterMoving, 50)
  fillBlack(p)
  p.ellipse(originAfterMoving, originAfterMoving, 30)
}

export { leftSideAnemosSketch }
