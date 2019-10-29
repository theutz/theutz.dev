import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme'
import { useBlur } from '../hooks/animations/useBlur'
import HeroImageContext from './contexts/hero-image'
import { usePulsate } from '../hooks/animations/usePulsate'

const Providers: React.FC = ({ children }) => {
  const blur = useBlur()
  const pulsate = usePulsate()

  const [heroImageValue, setHeroImageValue] = useState({ blur, pulsate })

  return (
    <ThemeProvider theme={theme}>
      <HeroImageContext.Provider value={heroImageValue}>
        {children}
      </HeroImageContext.Provider>
    </ThemeProvider>
  )
}

export default Providers
