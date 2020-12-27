import barba from "@barba/core";
import {animationLoader} from "./loader.gsap";
import {animationAbout} from "./about.gsap";
import {animationHome} from "./home.gsap";
import {delay} from "../helpers";

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      // animationLoader.reset()
    },
    enter(data) {
      // animationLoader.loaderIn()
      // window.scrollTo(0, 0);
    }
  }],
  views: [{
    namespace: 'about',
    afterEnter(data) {
      delay(animationAbout._enter, 1500)
    },
    beforeEnter(data) {
      animationAbout._beforeEnter()
    }
  },
    {
      namespace: 'home',
      afterEnter(data) {
        delay(animationHome._enter, 1500)
      },
      beforeEnter(data) {
        animationHome._beforeEnter()
      }
    }
  ]
});

barba.hooks.before(() => {
  document.querySelector('html').classList.add('is-transitioning');
});
barba.hooks.after(() => {
  document.querySelector('html').classList.remove('is-transitioning');
});
barba.hooks.enter(() => {
  animationLoader.loaderIn()
  window.scrollTo(0, 0);
});
