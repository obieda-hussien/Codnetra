import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCode, 
  faLaptopCode, 
  faMobile, 
  faRocket, 
  faBolt, 
  faArrowRight, 
  faStar, 
  faPlay,
  faBars,
  faTimes,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons'
import { 
  faGithub, 
  faLinkedin, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons'

// Add the icons we need to reduce bundle size
library.add(
  faCode, 
  faLaptopCode, 
  faMobile, 
  faRocket, 
  faBolt, 
  faArrowRight, 
  faStar, 
  faPlay,
  faBars,
  faTimes,
  faMoon,
  faSun,
  faGithub, 
  faLinkedin, 
  faTwitter
)