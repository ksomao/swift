import barba from "@barba/core";
import {animationLoader} from "./loader.gsap";
import {animationAbout} from "./about.gsap";
import {animationIndex} from "./index.gsap";

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      animationLoader.reset()
    },
    enter(data) {
      animationLoader.loaderIn()
      window.scrollTo(0, 0);
    }
  }],
  views: [{
    namespace: 'about',
    afterEnter(data) {
      animationAbout.enter().start()
    },
    beforeEnter(data) {
      animationAbout.beforeEnter()
    }
  },
    {
      namespace: 'home',
      afterEnter(data) {
        animationIndex.enter().start()
      },
      beforeEnter(data) {
        animationIndex.beforeEnter()
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
