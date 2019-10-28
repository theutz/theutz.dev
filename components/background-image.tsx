/** @jsx jsx **/
import { jsx } from 'theme-ui'
import { FC, useState } from 'react'
import { useImageIsReady } from '../hooks/useImageIsReady'
import { motion } from 'framer-motion'

type Props = {
  src?: string
  srcSet?: string
  onFadeStart?: () => void
  onFadeEnd?: () => void
  placeholderUrl?: string
}

const BackgroundImage: FC<Props> = ({
  src,
  srcSet,
  onFadeStart = () => undefined,
  onFadeEnd = () => undefined,
  placeholderUrl,
}) => {
  const img = useImageIsReady({ src })

  return (
    <div sx={{ backgroundColor: 'text' }}>
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
        variants={{
          hidden: { opacity: 0, transform: 'scale(1)' },
          visible: { opacity: 1, transform: 'scale(1.5)' },
        }}
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
        onAnimationStart={onFadeStart}
        onAnimationComplete={onFadeEnd}
      />
    </div>
  )
}

export default BackgroundImage
