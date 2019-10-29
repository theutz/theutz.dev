import { createContext } from 'react'
import { useBlur } from '../../hooks/animations/useBlur'
import { usePulsate } from '../../hooks/animations/usePulsate'

type Value = {
  blur: ReturnType<typeof useBlur>
  pulsate: ReturnType<typeof usePulsate>
}

export default createContext<Value | null>(null)
