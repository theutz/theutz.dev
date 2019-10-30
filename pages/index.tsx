/** @jsx jsx **/
import { useContext, useEffect } from 'react'
import Head from '../components/head'
import { jsx } from 'theme-ui'
import { usePulsate } from '../hooks/animations/usePulsate'
import Content from '../content/index.mdx'
import { useBlur } from '../hooks/animations/useBlur'
import { HeroImageContext } from '../components/contexts/hero-image'

type Props = {}

const IndexPage: React.FC<Props> = () => {
  const blur = useBlur()
  const pulsate = usePulsate()

  const [heroImageState] = useContext(HeroImageContext)

  useEffect(() => {
    if (heroImageState === 'started') blur.actions.toFocus()
    if (heroImageState === 'finished') pulsate.actions.toPulsate()
  }, [heroImageState])

  return (
    <>
      <Head title="Home | Michael Utz, Front-End Developer" />
      <Content blur={blur} pulsate={pulsate} />
    </>
  )
}

export default IndexPage
