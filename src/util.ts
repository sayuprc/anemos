import type { p5SVG } from 'p5.js-svg'

/**
 * 開発用にマス目を表示する
 */
export const drawSquareForDev = (p: p5SVG) => {
  // 背景色
  p.background(220)

  // 線の太さ
  p.strokeWeight(1)

  const chunk = [...Array(1000)].map((_, i: number) => i * 10).filter((i: number) => i <= 1000)

  // 10 刻みの線
  for (const v of chunk) {
    if (v % 50 === 0) {
      p.stroke(169, 169, 169)
      p.line(0, v, p.width, v)
      p.line(v, 0, v, p.height)
    } else {
      p.stroke(211, 211, 211)
      p.line(0, v, p.width, v)
      p.line(v, 0, v, p.height)
    }
  }

  // 原点
  fillWhite(p)
  p.ellipse(p.width / 2, p.height / 2, 5, 5)
}

export const fillWhite = (p: p5SVG) => {
  p.fill(255, 255, 255)
}

export const fillBlue = (p: p5SVG) => {
  p.fill(110, 179, 229)
}

export const fillBlack = (p: p5SVG) => {
  p.fill(0, 0, 0)
}

export type Point = {
  x: number
  y: number
}

/**
 * 円を 5 等分する線の座標を求める
 */
export const calculateDivideCirclePoints = (p: p5SVG, origin: Point, radius: number): [Point, Point] => {
  const points = []

  for (const v of [...Array(2).keys()]) {
    // 原点から 72° の線の線を引くと 5 等分になる
    const angle = (72 * v * p.PI) / 180
    // 原点 + 半径 + cos(Θ)|sin(Θ)
    const x = origin.x + radius * p.cos(angle)
    const y = origin.y + radius * p.sin(angle)
    points.push({ x, y })
  }

  return [points[0], points[1]]
}
