import {fadeInStagger} from "./animation.gsap";

export const animationIndex = {
  leave: () => {
    gsap.set('.home-wrapper', {opacity: 0})
    gsap.set('.nav-main', {opacity: 0})
  },
  beforeEnter: () => {
    console.log('started')
    let tl = gsap.timeline();
    return tl
      .to('.nav-main', {opacity: 1})
      .to('.home-wrapper', {opacity: 1})
      .from('.home-wrapper article', fadeInStagger)
  },
}


