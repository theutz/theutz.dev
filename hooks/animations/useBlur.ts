import { useAnimation, TargetAndTransition } from 'framer-motion'

type Variants = 'blurry' | 'sharpened'

export type Config = {
  radius?: number
  initial?: Variants
  transition?: TargetAndTransition['transition']
}

export const useBlur = ({
  radius = 30,
  initial = 'blurry',
  ...config
}: Config = {}) => {
  const animate = useAnimation()
  const variants: { [key in Variants]: TargetAndTransition } = {
    blurry: { filter: `blur(${radius}px)` },
    sharpened: { filter: 'blur(0px)' },
  }
  const transition = { duration: 1, ...config.transition }

  const toFocus = () => animate.start('sharpened')
  const toBlur = () => animate.start('blurry')
  const stop = animate.stop

  return {
    props: { animate, variants, initial, transition },
    actions: { toFocus, toBlur, stop },
  }
}

export default useBlur
