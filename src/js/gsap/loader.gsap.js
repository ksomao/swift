export const animationLoader = {
  reset: () => {
    gsap.set('.loader', {
      scaleX: 0,
      rotation: 10,
      xPercent: -5,
      yPercent: -50,
      transformOrigin: 'left center',
      autoAlpha: 1
    });
  },
  loaderIn: () => {
    let tl = gsap.timeline({
      onComplete: animationLoader.loaderAway,
    })
    tl.fromTo('.loader',
      {
        rotation: 10,
        scaleX: 0,
        xPercent: -5
      },
      {
        duration: 0.8,
        xPercent: 0,
        scaleX: 1,
        rotation: 0,
        ease: 'power4.inOut',
        transformOrigin: 'left center'
      });
  },
  loaderAway: () => {
    gsap.to('.loader', {
      duration: 0.8,
      scaleX: 0,
      xPercent: 5,
      rotation: -10,
      transformOrigin: 'right center',
      ease: 'power4.inOut'
    })
  }
}

