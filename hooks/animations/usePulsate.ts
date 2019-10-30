import { useAnimation, TargetAndTransition } from 'framer-motion'

type Variants = 'hidden' | 'pulsate'
type Config = {
  initial?: Variants
  transition?: TargetAndTransition['transition']
}

export const usePulsate = ({ initial = 'hidden', ...config }: Config = {}) => {
  const animate = useAnimation()
  const transition = { duration: 1, delay: 1, ...config.transition }
  const variants: { [key in Variants]: TargetAndTransition } = {
    hidden: { opacity: 0 },
    pulsate: {
      opacity: 1,
      transition: { yoyo: 3.5, ...transition },
    },
  }

  const toHidden = () => animate.start('hidden')
  const toPulsate = () => animate.start('pulsate')
  const stop = animate.stop

  return {
    props: { animate, variants, initial, transition },
    actions: { toHidden, toPulsate, stop },
  }
}

export default usePulsate
