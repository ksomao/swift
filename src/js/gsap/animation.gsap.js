export  let fadeInUp = {
  autoAlpha: 0,
  duration: 0.3,
  y: -50
}

export let fadeInUpStagger = {
  autoAlpha: 0,
  y: 50,
  stagger: 0.3
}

export let fadeInStagger = {
  autoAlpha: 0,
  stagger: 0.3
}

export let fadeInScale = {
  autoAlpha: 0,
  scaleX: 0.5,
  duration: 0.7
}

export let fadeIn = {
  autoAlpha: 0,
  duration: 0.3,
}

export let deScale = {
  scale: 2,
  duration:4,
  delay:-.4,
  rotation:7
}

//LOADER ANIMATION
export let loaderReset = {
  scaleX: 0,
  rotation: 10,
  xPercent: -5,
  yPercent: -50,
  transformOrigin: 'left center',
  autoAlpha: 1
}

export let loaderInFrom = {
  scaleX: 0,
  rotation: 10,
  xPercent: -5,
  yPercent: -50,
  transformOrigin: 'left center',
  autoAlpha: 1
}

export let loaderInTo = {
  duration: 0.8,
  xPercent: 0,
  scaleX: 1,
  rotation: 0,
  ease: 'power4.inOut',
  transformOrigin: 'left center'
}

export let loaderAway = {
  duration: 0.8,
  scaleX: 0,
  xPercent: 5,
  rotation: -10,
  transformOrigin: 'right center',
  ease: 'power4.inOut'
}


