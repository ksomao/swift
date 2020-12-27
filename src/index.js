import {site} from "./js/site";
import './sass/style.scss'
import './js/gsap/barba.gsap.js'


site.preventBarbaEventOnAdminLink()
site._loaded()
site._beforeLeaving()
site.preventRefreshOnLinks()





