import { motion } from 'framer-motion'
import { LinkMenu } from '../Home/components/LinkMenu'
import * as Switch from '@radix-ui/react-switch'
import { useTheme } from 'next-themes'
import {
  animationVariantLeftToRight,
  animationVariantRightToLeft,
} from '@/utils/AnimationsConst'

export const Header = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  function handleSwitchTheme() {
    if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <motion.header
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      transition={{
        type: 'spring',
        duration: 1,
      }}
      className="fixed z-[99999] flex h-24 w-full flex-row items-center justify-between border-b-2 border-blue/50 bg-white py-8 dark:bg-black xs:px-8 lg:px-24"
    >
      <motion.div variants={animationVariantLeftToRight}>
        <h1 className="font-bold text-blue xs:text-xl lg:text-2xl">
          Vitor Rodrigues
        </h1>
      </motion.div>
      <motion.div
        variants={animationVariantRightToLeft}
        className="flex items-center"
      >
        <nav className="flex">
          <LinkMenu to="home">Home</LinkMenu>
          <LinkMenu to="portfolio">Portifólio</LinkMenu>
        </nav>

        <Switch.Root
          onClick={handleSwitchTheme}
          className=" bg-blac relative h-[25px] w-[42px] cursor-pointer rounded-full bg-black data-[state=checked]:bg-black dark:bg-white dark:data-[state=checked]:bg-white"
        >
          <Switch.Thumb className="block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:bg-white dark:bg-black dark:data-[state=checked]:bg-black" />
        </Switch.Root>
      </motion.div>
    </motion.header>
  )
}
