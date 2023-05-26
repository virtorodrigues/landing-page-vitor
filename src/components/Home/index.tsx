import { motion } from 'framer-motion'
import { IconsSection } from './components/IconsSection'
import {
  animationVariantLeftToRight,
  animationVariantRightToLeft,
} from '@/utils/AnimationsConst'
import { Balancer } from 'react-wrap-balancer'
import { AnimationSVG } from '@/utils/AnimationSVG'

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="z-[999] h-screen max-w-[var(--max-width-screen)]"
      >
        <div className="h-24" />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="flex h-[calc(100vh-6rem)] items-center xs:flex-col-reverse xs:justify-center lg:flex-row lg:justify-between"
        >
          <div className="fixed left-[50%] top-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%]">
            <AnimationSVG />
          </div>

          <motion.div
            variants={animationVariantLeftToRight}
            className="xs:max-screen xs:mt-12 lg:mt-0 lg:max-w-lg"
          >
            <h1 className="font-bold xs:text-center xs:text-3xl md:text-4xl lg:text-left lg:text-5xl">
              <Balancer>
                Front-End React Developer 🤙🏻
                <span className="text-blue">.</span>
              </Balancer>
            </h1>
            <p className="mt-4 text-lg text-gray xs:text-center lg:text-left">
              <Balancer>
                Olá, me chamo Vitor Rodrigues. Sou dev front-end desde 2018,
                apaixonado por interfaces.
              </Balancer>
            </p>

            <IconsSection />
          </motion.div>

          <motion.img
            className="aspect-square rounded-full object-cover xs:h-72 lg:h-96"
            variants={animationVariantRightToLeft}
            src="/vitor-rodrigues.jpeg"
            alt="Minha foto"
          />
        </motion.div>
      </section>
    </>
  )
}
