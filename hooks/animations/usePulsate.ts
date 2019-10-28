import { useAnimation, TargetAndTransition } from 'framer-motion'

type Variants = 'hidden' | 'pulsate'
type Config = {
  initial?: Variants
  transition?: TargetAndTransition['transition']
}

export const useFadeAndPulse = (config?: Config) => {
  const { initial = 'hidden', transition = {} } = config || {}
  const { duration = 1, delay = 1 } = transition

  const controls = useAnimation()

  const variants: { [key in Variants]: TargetAndTransition } = {
    hidden: { opacity: 0 },
    pulsate: {
      opacity: 1,
      transition: { yoyo: 3.5, duration: 1 },
    },
  }

  return {
    props: {
      animate: controls,
      variants,
      initial,
      transition: { duration, delay, ...transition },
    },
    actions: {
      toHidden: () => controls.start('hidden'),
      toPulsate: () => controls.start('pulsate'),
      stop: controls.stop,
    },
  }
}

export default useFadeAndPulse
