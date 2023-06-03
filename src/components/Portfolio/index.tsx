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
import { useTranslator } from '@/hooks/useTranslator'

export const Portfolio = () => {
  const projectsText = useTranslator().projecsSectionTitle

  return (
    <>
      <section
        id="portfolio"
        className="z-[999] min-h-screen max-w-[var(--max-width-screen)] pb-24"
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={animationVariantLeftToRight}
          viewport={{ once: true, amount: 0.02 }}
          className="flex flex-col items-start pt-8"
        >
          <h1 className="text-6xl font-bold">{projectsText}</h1>
          <span className="mt-2 h-1 w-32 rounded bg-gradient-to-r from-purple to-blue" />
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={animationVariantLeftToRight}
            viewport={{ once: true, amount: 0 }}
            className="grid w-full auto-rows-[minmax(300px,_300px)] gap-12 xs:mt-12 xs:grid-cols-1 lg:mt-14 lg:grid-cols-3"
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
