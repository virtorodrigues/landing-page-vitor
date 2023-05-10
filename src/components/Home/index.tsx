import { motion } from "framer-motion";
import { IconsSection } from "./components/IconsSection";
import {
  animationVariantLeftToRight,
  animationVariantRightToLeft,
} from "@/utils/animations";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="max-w-[var(--max-width-screen)] z-[100] h-screen"
      >
        <div className="h-24" />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="flex items-center h-[calc(100vh-6rem)] xs:flex-col-reverse lg:flex-row xs:justify-center lg:justify-between"
        >
          <motion.div
            variants={animationVariantLeftToRight}
            className="xs:max-screen lg:max-w-lg xs:mt-12 lg:mt-0"
          >
            <h1 className="xs:text-center lg:text-left xs:text-3xl md:text-4xl lg:text-5xl font-bold">
              Front-End React Developer 🤙🏻
              <span className="text-blue">.</span>
            </h1>
            <p className="xs:text-center lg:text-left text-lg mt-4 text-gray">
              Olá, me chamo Vitor Rodrigues. Sou dev front-end desde 2018,
              apaixonado por interfaces.
            </p>

            <IconsSection />
          </motion.div>

          <motion.img
            className="rounded-full lg:h-96 xs:h-72 xs:pl-0 lg:pl-12"
            variants={animationVariantRightToLeft}
            src="/vitor-rodrigues.jpg"
            alt="Minha foto"
          />
        </motion.div>
      </section>
    </>
  );
};
