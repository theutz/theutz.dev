import App from 'next/app'
import NextHead from 'next/head'
import Providers from '../components/providers'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Providers>
        <NextHead>
          <link
            href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Titillium+Web:300,400,700&display=swap"
            rel="stylesheet"
          />
        </NextHead>
        <Component {...pageProps} />
      </Providers>
    )
  }
}
