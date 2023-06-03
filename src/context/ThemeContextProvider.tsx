import { EN, PT } from '@/constants/language'
import { ReactNode, createContext, useState } from 'react'

type Language = typeof PT | typeof EN

interface LanguageContextType {
  language: Language
  setLanguage: (data: Language) => void
}

export const LanguageContext = createContext({} as LanguageContextType)

interface LanguageContextProviderProps {
  children: ReactNode
}

export function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>(EN)

  function onSetLanguage(newLanguage: Language) {
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: onSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
