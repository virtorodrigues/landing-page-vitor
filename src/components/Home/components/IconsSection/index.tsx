import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

import {
  faCss3Alt,
  faGithubSquare,
  faHtml5,
  faInstagramSquare,
  faJsSquare,
  faLinkedin,
  faReact,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons'
import { SocialMediaLink } from '../SocialMediaLink'

export function IconsSection() {
  return (
    <nav className="mt-8 flex items-center xs:flex-col xs:space-y-5 lg:flex-row lg:space-y-0">
      <div className="flex items-center justify-center space-x-8">
        <SocialMediaLink
          href="https://www.instagram.com/react.zeiro"
          color="text-pink-dark"
          icon={faInstagramSquare}
        />

        <SocialMediaLink
          href="https://wa.me/5518997183307"
          color="text-green/100"
          icon={faWhatsappSquare}
        />

        <SocialMediaLink
          href="https://www.linkedin.com/in/virtorodrigues"
          color="text-blue"
          icon={faLinkedin}
        />

        <SocialMediaLink
          href="https://github.com/virtorodrigues"
          color="text-gray-light"
          icon={faGithubSquare}
        />
      </div>

      <motion.span
        className="h-2 w-2 rounded-full bg-black dark:bg-white xs:mx-0 lg:mx-8"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'linear',
        }}
      />
      <div className="flex items-center justify-center space-x-8">
        <FontAwesomeIcon
          icon={faCss3Alt}
          size="2xl"
          className="text-blue/80"
          title="CSS3"
        />
        <FontAwesomeIcon
          icon={faHtml5}
          size="2xl"
          className="text-orange"
          title="HTML5"
        />
        <FontAwesomeIcon
          icon={faReact}
          size="2xl"
          className="text-blue"
          title="React.js"
        />
        <FontAwesomeIcon
          icon={faJsSquare}
          size="2xl"
          className="text-yellow"
          title="JS"
        />
      </div>
    </nav>
  )
}
