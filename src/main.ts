import p5 from 'p5'
import init from 'p5.js-svg'
import { leftSideAnemosSketch } from './anemos/left-side'
import { rightSideAnemosSketch } from './anemos/right-side'
import { anemosSketch } from './anemos'
import './style.css'

init(p5)

const app = document.getElementById('app')

const left = document.createElement('div')
left.id = 'right'
app?.appendChild(left)

const right = document.createElement('div')
right.id = 'right'
app?.appendChild(right)

const anemoses = document.createElement('div')
anemoses.id = 'right'
app?.appendChild(anemoses)

new p5(leftSideAnemosSketch, left)
new p5(rightSideAnemosSketch, right)
new p5(anemosSketch, anemoses)
