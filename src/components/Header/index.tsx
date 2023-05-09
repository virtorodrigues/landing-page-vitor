import { useContext } from "react";

import { motion, Variants } from "framer-motion";
import { LinkMenu } from "../Home/components/LinkMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "@/context/ThemeContextProvider";

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
  const { theme, setTheme } = useContext(ThemeContext);

  function handleSwitchTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <motion.header
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="dark:bg-black bg-white fixed w-full z-[99] border-b-2 border-blue/50 h-24 xs:px-8 lg:px-24 py-8 flex flex-row justify-between items-center"
    >
      <motion.div variants={cardVariants}>
        <h1 className="xs:text-xl lg:text-2xl dark:text-blue">
          Vitor Rodrigues
        </h1>
      </motion.div>
      <motion.div variants={cardVariants1} className="flex items-center">
        <nav className="flex">
          <LinkMenu to="home">Home</LinkMenu>
          <LinkMenu to="portfolio">Portifólio</LinkMenu>
        </nav>
        <button onClick={handleSwitchTheme} className="xs:p-4 lg:px-8">
          <FontAwesomeIcon
            icon={theme == "light" ? faSun : faMoon}
            size="2xl"
            className={theme == "light" ? "text-yellow" : "text-blue"}
          />
        </button>
      </motion.div>
    </motion.header>
  );
};
