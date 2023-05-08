import { motion, Variants } from "framer-motion";
import { Header } from "./components/Header";
import { IconsSession } from "./components/IconsSession";

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 2,
    },
  },
};

const imgVariants: Variants = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0,
      duration: 2,
    },
  },
};

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="max-w-[var(--max-width-screen)] z-[100] h-screen"
      >
        <Header />
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-between items-center h-[calc(100%-6rem)]"
        >
          <motion.div variants={cardVariants} className="max-w-xl">
            <h1 className="text-6xl font-bold">
              Front-End React Developer 🤙🏻
              <span className="text-blue">.</span>
            </h1>
            <p className="text-lg mt-4 text-gray">
              Olá, me chamo Vitor Rodrigues. Sou dev front-end desde 2018,
              apaixonado por interfaces.
            </p>

            <IconsSession />
          </motion.div>

          <motion.img
            className="rounded-full h-96 z-[100]"
            variants={imgVariants}
            src="/vitor-rodrigues.jpg"
            alt="Minha foto"
          />
        </motion.div>
      </section>
    </>
  );
};
