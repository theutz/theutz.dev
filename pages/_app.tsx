import App from 'next/app'
import NextHead from 'next/head'
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <NextHead>
          <link
            href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Ubuntu+Mono:400,400i,700&display=swap"
            rel="stylesheet"
          />
        </NextHead>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
