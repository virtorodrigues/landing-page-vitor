import { motion, Variants } from "framer-motion";
import { ProjectDetails } from "./components/ProjectDetails";
import { igniteTimer, planningPoker, simpleFeed } from "@/portfolioProjects";
import {
  animationVariantLeftToRight,
  animationVariantRightToLeft,
} from "@/utils/animations";

export const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="max-w-[var(--max-width-screen)] z-[100] min-h-screen pb-24"
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
            viewport={{ once: true, amount: 0.05 }}
            className="text-6xl font-bold"
          >
            Projetos
          </motion.h1>
          <span className="h-1 w-32 rounded mt-2 bg-gradient-to-r from-purple to-blue" />
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={animationVariantLeftToRight}
            viewport={{ once: true, amount: 0.05 }}
            className="xs:mt-12 lg:mt-24 grid xs:grid-cols-1 lg:grid-cols-3 gap-12  w-full auto-rows-[minmax(300px,_300px)]"
          >
            <ProjectDetails {...igniteTimer} />
            <ProjectDetails {...planningPoker} />
            <ProjectDetails {...simpleFeed} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
