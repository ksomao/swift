import './sass/style.scss'
import gsap from "gsap";
import './js/imageParallax'

let fadeInUp = {
  autoAlpha: 0,
  duration: 0.3,
  y: -50
}

let fadeInUpStagger = {
  autoAlpha: 0,
  y: -50,
  stagger:0.3
}

let fadeInScale = {
  autoAlpha: 0,
  scaleX:0.5,
  duration:0.7
}

let fadeIn = {
  autoAlpha: 0,
  duration:0.3,
}


let tl = gsap.timeline();
tl.from('.about-wrapper', fadeInScale)
  .from('.about-title', fadeInUp)
  .from('.about-img-wrapper', fadeIn)
  .from('.about-main-text p', fadeInUpStagger)
  .to('.about-wrapper', {backgroundColor:'black'})
  .to('.about-title', {color:'white'})
  .to('.about-main-text p', {color:'white'})
