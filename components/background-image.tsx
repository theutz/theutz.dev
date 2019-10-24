/** @jsx jsx **/
import { jsx } from 'theme-ui'
import {
  FC,
  useState,
  useCallback,
  useRef,
  EventHandler,
  SyntheticEvent,
} from 'react'
import { cover } from 'polished'
import posed from 'react-pose'

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
  placeholderUrl,
  onFadeStart = () => undefined,
  onFadeEnd = () => undefined,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)
  const poseCount = useRef(0)

  const show = () => {
    if (isVisible) return
    onFadeStart()
    setIsVisible(true)
  }

  const imgEl = useCallback((node) => {
    if (node === null) return
    if (node.complete) {
      show()
      setCurrentSrc(node.currentSrc)
    }
  }, [])

  const fullscreenImgStyle = {
    ...cover(),
    zIndex: -5,
    background: `no-repeat center center`,
    backgroundSize: 'cover',
  }

  type handleLoad = EventHandler<SyntheticEvent<HTMLImageElement, Event>>
  const handleLoad: handleLoad = ({ currentTarget: { currentSrc } }) => {
    setCurrentSrc(currentSrc)
    show()
  }

  const handlePoseComplete = () => {
    if (++poseCount.current === 1) onFadeEnd()
  }

  return (
    <>
      <img
        src={src}
        srcSet={srcSet}
        ref={imgEl}
        onLoad={handleLoad}
        sx={{ ...fullscreenImgStyle, display: 'none' }}
      />
      {placeholderUrl && (
        <PlaceholderImage
          sx={{
            ...fullscreenImgStyle,
            backgroundImage: `url("${placeholderUrl}")`,
            filter: 'blur(20px)',
          }}
        />
      )}
      <ActualImage
        initialPose="hidden"
        pose={isVisible ? 'visible' : 'hidden'}
        onPoseComplete={handlePoseComplete}
        sx={{
          ...fullscreenImgStyle,
          ...actualImagePoseConfig.hidden,
          backgroundImage: `url("${currentSrc}")`,
        }}
      />
    </>
  )
}

const PlaceholderImage = posed.div()

const actualImagePoseConfig = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      filter: { delay: 250, duration: 500, ease: 'easeInOut' },
      default: { duration: 500, ease: 'easeInOut' },
    },
  },
}

const ActualImage = posed.div(actualImagePoseConfig)

export default BackgroundImage
