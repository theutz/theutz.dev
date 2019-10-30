import React, { useState } from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme'
import { useHeroImageStateValue, HeroImageContext } from './contexts/hero-image'

const Providers: React.FC = ({ children }) => {
  const heroImageStateValue = useHeroImageStateValue()

  return (
    <ThemeProvider theme={theme}>
      <HeroImageContext.Provider value={heroImageStateValue}>
        {children}
      </HeroImageContext.Provider>
    </ThemeProvider>
  )
}

export default Providers
