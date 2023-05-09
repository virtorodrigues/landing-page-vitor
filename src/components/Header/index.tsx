import { motion, Variants } from "framer-motion";
import { LinkMenu } from "../Home/components/LinkMenu";
import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();

  function handleSwitchTheme() {
    if (theme == "dark") {
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
        <h1 className="font-bold xs:text-xl lg:text-2xl text-blue">
          Vitor Rodrigues
        </h1>
      </motion.div>
      <motion.div variants={cardVariants1} className="flex items-center">
        <nav className="flex">
          <LinkMenu to="home">Home</LinkMenu>
          <LinkMenu to="portfolio">Portifólio</LinkMenu>
        </nav>

        <Switch.Root
          onClick={handleSwitchTheme}
          className=" w-[42px] h-[25px] bg-blac rounded-full relative dark:bg-white bg-black data-[state=checked]:bg-black dark:data-[state=checked]:bg-white cursor-pointer"
        >
          <Switch.Thumb className="shadow-[0_2px_2px] transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] block w-[21px] h-[21px] rounded-full dark:bg-black bg-white dark:data-[state=checked]:bg-black data-[state=checked]:bg-white" />
        </Switch.Root>
      </motion.div>
    </motion.header>
  );
};
