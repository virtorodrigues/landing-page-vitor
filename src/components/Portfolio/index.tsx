import { motion } from 'framer-motion'
import { ProjectDetails } from './components/ProjectDetails'
import {
  igNews,
  igniteTimer,
  newsLetterPage,
  planningPoker,
  simpleFeed,
  spacetime,
} from '@/portfolioProjects'
import { animationVariantLeftToRight } from '@/utils/AnimationsConst'

export const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="z-[100] min-h-screen max-w-[var(--max-width-screen)] pb-24"
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={animationVariantLeftToRight}
          viewport={{ once: true, amount: 0 }}
          className="flex flex-col items-start pt-8"
        >
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            variants={animationVariantLeftToRight}
            viewport={{ once: true, amount: 0 }}
            className="text-6xl font-bold"
          >
            Projetos
          </motion.h1>
          <span className="mt-2 h-1 w-32 rounded bg-gradient-to-r from-purple to-blue" />
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={animationVariantLeftToRight}
            viewport={{ once: true, amount: 0 }}
            className="grid w-full auto-rows-[minmax(300px,_300px)] gap-12 xs:mt-12 xs:grid-cols-1  lg:mt-24 lg:grid-cols-3"
          >
            <ProjectDetails {...newsLetterPage} />
            <ProjectDetails {...igniteTimer} />
            <ProjectDetails {...simpleFeed} />
            <ProjectDetails {...planningPoker} />
            <ProjectDetails {...igNews} />
            <ProjectDetails {...spacetime} />
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
