import p5 from 'p5'
import init from 'p5.js-svg'
import { leftSideAnemosSketch } from './left-side-anemos'
import { rightSideAnemosSketch } from './right-side-anemos'
import { anemosSketch } from './anemos'

init(p5)

const left = document.createElement('div')
left.id = 'right'
document.body.appendChild(left)

const right = document.createElement('div')
right.id = 'right'
document.body.appendChild(right)

const anemoses = document.createElement('div')
anemoses.id = 'right'
document.body.appendChild(anemoses)

new p5(leftSideAnemosSketch, left)
new p5(rightSideAnemosSketch, right)
new p5(anemosSketch, anemoses)
