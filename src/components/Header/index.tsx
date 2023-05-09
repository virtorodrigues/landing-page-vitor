import { Link, animateScroll as scroll } from "react-scroll";

import { motion, Variants } from "framer-motion";
import { LinkMenu } from "../Home/components/LinkMenu";

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
      className="fixed w-full bg-black z-[99] border-b-2 border-blue/50 h-24 xs:px-8 lg:px-24 py-8 flex flex-row justify-between items-center"
    >
      <motion.div variants={cardVariants}>
        <h1 className="xs:text-xl lg:text-2xl">Vitor Rodrigues</h1>
      </motion.div>

      <motion.nav variants={cardVariants1} className="flex">
        <LinkMenu to="home">Home</LinkMenu>
        <LinkMenu to="portfolio">Portifólio</LinkMenu>
      </motion.nav>
    </motion.header>
  );
};
