import { useAnimation, TargetAndTransition } from 'framer-motion'

type Variants = 'blurry' | 'sharpened'

export type Config = {
  radius?: number
  initial?: Variants
  transition?: TargetAndTransition['transition']
}

export const useBlur = (config?: Config) => {
  const { radius = 30, initial = 'blurry', transition = { duration: 1 } } =
    config || {}
  const { duration = 1 } = transition

  const controls = useAnimation()

  const variants: { [key in Variants]: TargetAndTransition } = {
    blurry: { filter: `blur(${radius}px)` },
    sharpened: { filter: 'blur(0px)' },
  }

  return {
    props: {
      animate: controls,
      variants,
      initial,
      transition,
    },
    actions: {
      startToFocus: () => controls.start('sharpened'),
      startToBlur: () => controls.start('blurry'),
      stop: controls.stop,
    },
  }
}

export default useBlur
