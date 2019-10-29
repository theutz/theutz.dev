/** @jsx jsx **/
import { FC } from 'react'
import Head from '../components/head'
import { jsx, Styled } from 'theme-ui'
import { Grid, Box } from '@theme-ui/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsersCrown,
  faPhoneLaptop,
  faStore,
} from '@fortawesome/pro-duotone-svg-icons'
import { useBlur } from '../hooks/animations/useBlur'
import { usePulsate } from '../hooks/animations/usePulsate'
const profilePic = require('../images/profile-pic.jpg?sizes[]=200,sizes[]=300')
import Hero from '../components/hero'

type Props = {}

const IndexPage: FC<Props> = () => {
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
        <div sx={{ variant: 'layouts.flex-column', textAlign: 'center' }}>
          <Styled.h1 sx={{ variant: 'text.title' }}>
            Hello, I'm Michael Utz.
          </Styled.h1>
          <Styled.p sx={{ variant: 'text.subtitle' }}>
            I'm passionate about creating experiences for the web that are
            useful, enjoyable, and intuitive.
          </Styled.p>
          <Styled.p sx={{ variant: 'text.subtitle' }}>
            Let's build something together!
          </Styled.p>
        </div>
        <Grid sx={{ m: 3, textAlign: 'center' }} gap={[4]} columns={[1, 1, 3]}>
          <div>
            <div sx={{ fontSize: [3], mb: [2], color: 'accent' }}>
              <FontAwesomeIcon icon={faUsersCrown} />
            </div>
            <Styled.h3>Focus on Users</Styled.h3>
            <Styled.p>
              First and foremost, let's think about how to help our users do
              what they came here to do.
            </Styled.p>
          </div>
          <div>
            <div sx={{ fontSize: [3], mb: [2], color: 'accent' }}>
              <FontAwesomeIcon icon={faPhoneLaptop} />
            </div>
            <Styled.h3>Write Healthy Code</Styled.h3>
            <Styled.p>
              Then, let's write some nice, clean code to make it happen. Perfect
              is good, but done is better.
            </Styled.p>
          </div>
          <div>
            <div sx={{ fontSize: [3], mb: [2], color: 'accent' }}>
              <FontAwesomeIcon icon={faStore} />
            </div>
            <Styled.h3>Build Lasting Value</Styled.h3>
            <Styled.p>
              Let's cultivate healthy relationships with each other and our
              customers to keep the good times rolling.
            </Styled.p>
          </div>
        </Grid>
      </Box>
    </>
  )
}

export default IndexPage
