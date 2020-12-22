import {fadeIn, fadeInUp, fadeInUpStagger} from "./animation.gsap";

export const animationAbout = {
  enter: () => {
    let tl = gsap.timeline();
    return tl
      .to('.nav-main', {opacity: 1})
      .to('.about-wrapper', {opacity: 1})
      .from('.about-title', fadeInUp)
      .from('.about-img-wrapper', fadeIn)
      .from('.about-main-text p', fadeInUpStagger)
      .to('.about-wrapper', {backgroundColor: 'black'})
      .to('.about-title', {color: 'white'})
      .to('.about-main-text p', {color: 'white'})
  },
  beforeEnter: () => {
    gsap.set('.about-wrapper', {opacity: 0})
    gsap.set('.nav-main', {opacity: 0})
  }
}
