import { LanguageContext } from '@/context/ThemeContextProvider'
import { useContext } from 'react'

export function useLanguage() {
  return useContext(LanguageContext)
}
