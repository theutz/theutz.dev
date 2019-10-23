import App from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
