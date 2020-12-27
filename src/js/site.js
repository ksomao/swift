import {animationLoader} from "./gsap/loader.gsap"

export const site = {

  _loaded: () => {
    document.addEventListener("DOMContentLoaded", () => {
      site.preventBarbaEventOnAdminLink()
      site.displayLoaderFirstTime()
      console.log('bonjour')
    })
  },

  _beforeLeaving: () => {
    window.addEventListener("beforeunload", () => {
      site.removeStorage()
    });
  },

  displayLoaderFirstTime: () => {
    let loaderDisplayed = !!parseInt(localStorage.getItem('alreadyDisplayed'))
    console.log("xxxxxxxxxxx", loaderDisplayed)
    if (!loaderDisplayed) {
      site.launchLoader()
    }
  },

  launchLoader: () => {
    animationLoader.loaderIn()
    animationLoader.reset()
    localStorage.setItem('alreadyDisplayed', "1")
  },

  removeStorage: () => {
    localStorage.removeItem('alreadyDisplayed')
    localStorage.clear()
    console.log('bye bye')
  },

  preventBarbaEventOnAdminLink: () => {
    let links = document.querySelectorAll("#wpadminbar a")
    let admin = document.getElementById("wpadminbar")
    if (admin !== null) {
      admin.setAttribute("data-barba-prevent", "all")
      for (const link of links) {
        link.classList.add('no-barba')
      }
    }
  },

  preventRefreshOnLinks: () => {
    let links = document.querySelectorAll(".nav-main a")
    for (const link of links) {
      link.addEventListener('click', function (e) {
        e.preventDefault()
      })
    }
  }

}
