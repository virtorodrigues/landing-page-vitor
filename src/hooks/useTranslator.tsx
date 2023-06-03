import { ptBr } from '@/translate/pt-br'
import { useLanguage } from './useLanguage'
import { en } from '@/translate/en'
import { PT } from '@/constants/language'

export function useTranslator() {
  const { language } = useLanguage()

  let obj = null

  if (language === PT) {
    obj = ptBr
  } else {
    obj = en
  }

  return obj
}
