import { useState, useCallback, EventHandler, SyntheticEvent } from 'react'

type Config = {
  src?: string
}

type handleLoad = EventHandler<SyntheticEvent<HTMLImageElement, Event>>

type useImageIsReady = (
  config: Config
) => {
  isReady: boolean
  currentSrc: Config['src']
  props: {
    onLoad: handleLoad
    ref: ReturnType<typeof useCallback>
  }
}

export const useImageIsReady: useImageIsReady = ({ src }) => {
  const [isReady, setIsReady] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  const ref = useCallback(
    (node) => {
      if (node === null) return
      if (node.complete && !isReady) {
        setIsReady(true)
        setCurrentSrc(node.currentSrc)
      }
    },
    [setIsReady, setCurrentSrc, isReady]
  )

  const onLoad: handleLoad = (event) => {
    setCurrentSrc(event.currentTarget.currentSrc)
    if (!isReady) setIsReady(true)
  }

  return {
    isReady,
    currentSrc,
    props: {
      ref,
      onLoad,
    },
  }
}

export default useImageIsReady
