import {gsap} from 'gsap/dist/gsap';
import {loaderAway, loaderInFrom, loaderInTo, loaderReset} from "./animation.gsap";

export const animationLoader = {
  reset: () => {
    gsap.set('.loader', loaderReset);
  },
  loaderIn: () => {
    let tl = gsap.timeline({
      onComplete: animationLoader.loaderAway,
    })
    tl.fromTo('.loader', loaderInFrom, loaderInTo);
  },
  loaderAway: () => {
    gsap.to('.loader', loaderAway)
  }
}

