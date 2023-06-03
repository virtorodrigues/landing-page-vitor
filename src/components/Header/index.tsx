import { motion } from 'framer-motion'
import { LinkMenu } from '../Home/components/LinkMenu'
import * as Switch from '@radix-ui/react-switch'
import * as Menubar from '@radix-ui/react-menubar'

import { useTheme } from 'next-themes'
import {
  animationVariantLeftToRight,
  animationVariantRightToLeft,
} from '@/utils/AnimationsConst'
import { useLanguage } from '@/hooks/useLanguage'
import { EN, PT } from '@/constants/language'
import { useState } from 'react'
import Image from 'next/image'
import { useTranslator } from '@/hooks/useTranslator'

type Language = typeof PT | typeof EN

export const Header = () => {
  const translator = useTranslator()
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const homeText = translator.home
  const portfolioText = translator.portfolio

  function handleSwitchTheme() {
    if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  function handleSwitchLanguage(data: Language) {
    setLanguage(data)
  }

  const RADIO_ITEMS = [PT, EN]

  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2])

  function handleRadioSelecion(data: string) {
    setRadioSelection(data)
    handleSwitchLanguage(data as Language)
  }

  function LanguageContent({ lang }: { lang: Language }) {
    return (
      <div className="flex items-center gap-2">
        <Image src={`/${lang}.png`} width={24} height={12} alt="" />{' '}
        <span className="text-base">{lang}</span>
      </div>
    )
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
        <h1 className="hidden font-bold text-blue xs:text-xl md:block lg:text-2xl">
          Vitor Rodrigues
        </h1>
      </motion.div>
      <motion.div
        variants={animationVariantRightToLeft}
        className="flex items-center gap-4"
      >
        <nav className="flex">
          <LinkMenu to="home">{homeText}</LinkMenu>
          <LinkMenu to="portfolio">{portfolioText}</LinkMenu>
        </nav>

        <Switch.Root
          onClick={handleSwitchTheme}
          className=" relative h-[25px] w-[42px] cursor-pointer rounded-full bg-black data-[state=checked]:bg-black dark:bg-white dark:data-[state=checked]:bg-white"
        >
          <Switch.Thumb className="block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px] data-[state=checked]:bg-white dark:bg-black dark:data-[state=checked]:bg-black" />
        </Switch.Root>

        <Menubar.Root className="none flex rounded-md p-[3px]">
          <Menubar.Menu>
            <Menubar.Trigger className="flex select-none items-center justify-between gap-[2px] rounded px-3 py-2 text-[13px] font-medium leading-none outline-none data-[state=open]:border-white ">
              <LanguageContent lang={language} />
            </Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content
                className="z-[99999] rounded-md bg-gray-light p-3 px-5 will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] dark:bg-gray-dark md:px-5 md:py-2"
                align="start"
                sideOffset={5}
                alignOffset={-14}
              >
                <Menubar.RadioGroup
                  value={radioSelection}
                  onValueChange={handleRadioSelecion}
                >
                  {RADIO_ITEMS.map((item) => (
                    <Menubar.RadioItem
                      className="relative flex h-10 select-none items-center rounded leading-none outline-none hover:cursor-pointer data-[disabled]:pointer-events-none data-[highlighted]:text-gray"
                      key={item}
                      value={item}
                    >
                      <LanguageContent lang={item as Language} />
                    </Menubar.RadioItem>
                  ))}
                </Menubar.RadioGroup>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
      </motion.div>
    </motion.header>
  )
}
