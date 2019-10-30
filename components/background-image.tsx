/** @jsx jsx **/
import { jsx } from 'theme-ui'
import { FC, useContext } from 'react'
import { useImageIsReady } from '../hooks/useImageIsReady'
import { motion } from 'framer-motion'
import { HeroImageContext } from '../components/contexts/hero-image'

type Props = {
  src?: string
  srcSet?: string
  placeholderUrl?: string
}

const BackgroundImage: FC<Props> = ({ src, srcSet, placeholderUrl }) => {
  const img = useImageIsReady({ src })
  const [, setHeroImageState] = useContext(HeroImageContext)

  return (
    <div sx={{ variant: 'images.fullscreen', backgroundColor: 'text' }}>
      <img
        {...img.props}
        src={src}
        srcSet={srcSet}
        sx={{ variant: 'images.fullscreen--right', display: 'none' }}
      />
      <motion.div
        initial="visible"
        animate={img.isReady ? 'hidden' : 'visible'}
        transition={{ duration: 1 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        sx={{
          variant: 'images.fullscreen--right',
          backgroundImage: `url("${placeholderUrl}")`,
          filter: 'blur(8px)',
        }}
      />
      <motion.div
        variants={{
          hidden: { opacity: 0, filter: 'blur(10px)' },
          visible: { opacity: 1, filter: 'blur(0px)' },
        }}
        initial="hidden"
        animate={img.isReady ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        sx={{
          variant: 'images.fullscreen--right',
          backgroundImage: `url("${img.currentSrc}")`,
        }}
        onAnimationStart={() => setHeroImageState('started')}
        onAnimationComplete={() => setHeroImageState('finished')}
      />
    </div>
  )
}

export default BackgroundImage
