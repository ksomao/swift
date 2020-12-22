gsap.registerPlugin(ScrollTrigger);

let animation = {
  initImagePrallax: () => {
    gsap.utils.toArray('.with-parallax').forEach(section => {
      const images = section.querySelectorAll('img');
      for (const image of images) {
        gsap.to(image, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            scrub: true
          }
        })

      }
    })
  },

  init: () => {
    animation.initImagePrallax();
  },

  onLoad: () => {
    window.addEventListener('load', function () {
      animation.init();
    })
  }
}

animation.onLoad();
