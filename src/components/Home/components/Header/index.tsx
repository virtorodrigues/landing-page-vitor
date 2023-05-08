import { Link, animateScroll as scroll } from "react-scroll";

import { motion, Variants } from "framer-motion";
import { LinkMenu } from "../LinkMenu";

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
const cardVariants1: Variants = {
  offscreen: {
    opacity: 0,
    x: 50,
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

export const Header = () => {
  return (
    <motion.header
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="h-24 px-0 py-8 flex flex-row justify-between gap-4 items-center"
    >
      <motion.div variants={cardVariants}>
        <h1 className="text-2xl">Vitor Rodrigues</h1>
      </motion.div>

      <motion.nav variants={cardVariants1} className="flex">
        <LinkMenu to="home">Home</LinkMenu>
        <LinkMenu to="about">Portifólio</LinkMenu>
      </motion.nav>
    </motion.header>
  );
};
