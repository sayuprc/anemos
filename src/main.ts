import p5 from 'p5'
import init from 'p5.js-svg'
import { leftSideAnemosSketch } from './left-side-anemos'
import { rightSideAnemosSketch } from './right-side-anemos'

init(p5)

new p5(leftSideAnemosSketch)
new p5(rightSideAnemosSketch)
