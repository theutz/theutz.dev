import { createContext, useState } from 'react'

type States = 'initial' | 'started' | 'finished'
type Value = [States, (state: States) => void]

const initialValue: Value = ['initial', () => {}]

export const useHeroImageStateValue = () => {
  const [state] = initialValue
  const value = useState(state)
  return value
}

export const HeroImageContext = createContext(initialValue)
