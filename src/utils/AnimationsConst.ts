import { Variants } from 'framer-motion'

export const animationVariantLeftToRight: Variants = {
  offscreen: {
    opacity: 0,
    x: -200,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 1,
    },
  },
}

export const animationVariantRightToLeft: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'spring',
      bounce: 0,
      duration: 1,
    },
  },
}
