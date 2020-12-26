import {gsap} from 'gsap/dist/gsap';
import {fadeInStagger} from "./animation.gsap";

export const animationHome = {
  _enter: () => {
    animationHome.posts()
  },
  _beforeEnter: () => {
    animationHome.reinitialization()
  },
  posts: () => {
    let tl = gsap.timeline();
    return tl
      .to('.nav-main', {opacity: 1})
      .to('.home-wrapper', {opacity: 1})
      .from('.home-wrapper article', fadeInStagger)
  },
  reinitialization: () => {
    gsap.set('.home-wrapper', {opacity: 0})
    gsap.set('.nav-main', {opacity: 0})
  },
}



