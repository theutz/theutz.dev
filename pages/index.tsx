/** @jsx jsx **/
import { useContext } from 'react'
import Head from '../components/head'
import { jsx } from 'theme-ui'
import { usePulsate } from '../hooks/animations/usePulsate'
import Content from '../content/index.mdx'
import HeroImageContext from '../components/contexts/hero-image'

type Props = {}

const IndexPage: React.FC<Props> = () => {
  const { blur, pulsate } = useContext(HeroImageContext) || {}
  return (
    <>
      <Head title="Home | Michael Utz, Front-End Developer" />
      <Content blur={blur} pulsate={pulsate} />
    </>
  )
}

export default IndexPage
