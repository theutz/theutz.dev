/** @jsx jsx **/
import { jsx } from 'theme-ui'
import { FC } from 'react'
import NextHead from 'next/head'
import GlobalStyles from './global-styles'
import BackgroundImage from '../components/background-image'
const bgImg = require('../images/aaron-burson-aE3gcKW1BxU-unsplash.jpg?resize&placeholder&sizes[]=600,sizes[]=700,sizes[]=1000,sizes[]=2000')

type Props = {
  title?: string
  description?: string
  url?: string
  ogImage?: string
  onBgImageFadeStart?: () => void
  onBgImageFadeEnd?: () => void
}

const Head: FC<Props> = ({
  title = '',
  description = '',
  url = '',
  ogImage = '',
  onBgImageFadeStart = () => undefined,
  onBgImageFadeEnd = () => undefined,
}) => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/touch-icon.png" />
      <link rel="apple-touch-icon" href="/touch-icon.png" />
      <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>
    <GlobalStyles />
    <BackgroundImage
      src={bgImg.src}
      srcSet={bgImg.srcSet}
      placeholderUrl={bgImg.placeholder}
      onFadeStart={onBgImageFadeStart}
      onFadeEnd={onBgImageFadeEnd}
    />
  </>
)

export default Head
