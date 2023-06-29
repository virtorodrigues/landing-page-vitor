import {
  COMMERCE_PATH_NAME,
  IGNITE_TIMER_PATH_NAME,
  IG_NEWS_PATH_NAME,
  NEWSLETTER_PAGE_PATH_NAME,
  PLANNING_POKER_PATH_NAME,
  SIMPLE_FEED_PATH_NAME,
  SPACE_TIME_PATH_NAME,
} from '@/utils/PortfolioConst'
import { ReactElement } from 'react'

export type ProjectProps = {
  [COMMERCE_PATH_NAME]: {
    description: ReactElement
  }
  [IG_NEWS_PATH_NAME]: {
    description: ReactElement
  }
  [IGNITE_TIMER_PATH_NAME]: {
    description: ReactElement
  }
  [NEWSLETTER_PAGE_PATH_NAME]: {
    description: ReactElement
  }
  [PLANNING_POKER_PATH_NAME]: {
    description: ReactElement
  }
  [SIMPLE_FEED_PATH_NAME]: {
    description: ReactElement
  }
  [SPACE_TIME_PATH_NAME]: {
    description: ReactElement
  }
}

export type TranslateProps = {
  aboutMe: string
  home: string
  portfolio: string
  projecsSectionTitle: string
  learnMore: string
  seeItOnline: string
  projects: ProjectProps
}

export type ProjectPathNameType =
  | typeof COMMERCE_PATH_NAME
  | typeof IG_NEWS_PATH_NAME
  | typeof IGNITE_TIMER_PATH_NAME
  | typeof NEWSLETTER_PAGE_PATH_NAME
  | typeof PLANNING_POKER_PATH_NAME
  | typeof SIMPLE_FEED_PATH_NAME
  | typeof SPACE_TIME_PATH_NAME
