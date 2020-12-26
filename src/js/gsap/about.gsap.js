import {gsap} from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
import {deScale, fadeIn, fadeInUp, fadeInUpStagger} from "./animation.gsap";

export const animationAbout = {
  _enter: () => {
    animationAbout.mainArticle()
    animationAbout.textScroll();
  },
  _beforeEnter: () => {
    animationAbout.reinitialization()
  },

  mainArticle: () => {
    let tl = gsap.timeline();
    tl.to('.nav-main', {opacity: 1})
      .to('.about-wrapper', {opacity: 1})
      .from('.about-title', fadeInUp)
      .from('.about-img-wrapper', fadeIn)
      .from('.about-img', deScale)
      .from('.about-main-text p', fadeInUpStagger, "-=3")
      .to('.about-wrapper', {backgroundColor: 'black', duration: 0.3})
      .to('.about-title', {color: 'white', duration: 0.3})
      .to('.about-main-text p', {color: 'white', duration: 0.3})
  },

  reinitialization: () => {
    gsap.set('.about-wrapper', {opacity: 0})
    gsap.set('.nav-main', {opacity: 0})
  },

  textScroll: () => {
    return gsap.to('.text-scroll', {
      scrollTrigger: {
        markers: true,
        trigger: ".text-scroll",
        start: '-=300',
        end: '200',
        scrub: 1.5
      },
      xPercent: 100,
    })
  }
}


