/** @jsx jsx **/
import Head from '../components/head'
import { jsx } from 'theme-ui'
import { Box, Grid } from '@theme-ui/components'
import { useBlur } from '../hooks/animations/useBlur'
import { usePulsate } from '../hooks/animations/usePulsate'
const profilePic = require('../images/profile-pic.jpg?sizes[]=200,sizes[]=300')
import Hero from '../components/hero'
import Triplet from '../content/index/triplet.mdx'
import Welcome from '../content/index/welcome.mdx'

type Props = {}

const IndexPage: React.FC<Props> = () => {
  const blur = useBlur()
  const pulsate = usePulsate()

  return (
    <>
      <Head
        title="Home | Michael Utz, Front-End Developer"
        onBgImageFadeStart={blur.actions.toFocus}
        onBgImageFadeEnd={pulsate.actions.toPulsate}
      />
      <Hero
        title="Michael Utz"
        subtitle="Front-end Developer"
        blur={blur}
        pulsate={pulsate}
        profilePic={profilePic}
      />
      <Box variant="layouts.container">
        <Box
          sx={{
            variant: 'layouts.flex-column',
            textAlign: 'center',
            '& > h1': {
              variant: 'text.title',
            },
            '& > p': {
              variant: 'text.subtitle',
            },
          }}
        >
          <Welcome />
        </Box>
        <Grid
          variant="triplet"
          sx={{
            '& h3': {
              display: 'flex',
              flexDirection: ['row', 'row', 'column'],
              justifyContent: 'space-around',
              alignItems: 'center',
            },
          }}
        >
          <Triplet />
        </Grid>
      </Box>
    </>
  )
}

export default IndexPage
