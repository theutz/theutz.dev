/** @jsx jsx **/
import { FC, useState } from 'react'
import Head from '../components/head'
import { jsx, useThemeUI } from 'theme-ui'
import { Flex, Image, Heading, Box, Text, Grid } from '@theme-ui/components'
import posed from 'react-pose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDoubleDown,
  faUsersCrown,
  faBrowser,
  faPhoneLaptop,
  faStoreAlt,
  faStore,
} from '@fortawesome/pro-duotone-svg-icons'
const profilePic = require('../images/profile-pic.jpg?sizes[]=200,sizes[]=400')

type Props = {}

const IndexPage: FC<Props> = () => {
  const [fadePose, setFadePose] = useState('stop')
  const [glowPose, setGlowPose] = useState('stop')
  const { theme } = useThemeUI()
  const bp = theme.breakpoints as string[]

  return (
    <>
      <Head
        title="Michael Utz | Front-End Developer"
        onBgImageFadeStart={() => setFadePose('go')}
        onBgImageFadeEnd={() => setGlowPose('go')}
      />
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <PosedImage
          sx={{
            ...makeBlurIn().stop,
            borderRadius: '50%',
            width: '33%',
            maxWidth: 400,
            boxShadow: 'display',
          }}
          pose={fadePose}
          src={profilePic.src}
          srcSet={profilePic.srcSet}
          sizes={`(max-width: ${bp[1]}) 100px, (max-width: ${bp[2]}) 200px, 400px`}
        />
        <PosedHeading
          pose={fadePose}
          variant="display"
          sx={{
            ...makeBlurIn().stop,
            color: 'background',
            fontSize: [5, 5, 7, 8, 9],
            mt: [2, 3],
          }}
        >
          Michael Utz
        </PosedHeading>
        <PosedHeading
          sx={{
            ...makeBlurIn().stop,
            color: 'background',
            fontSize: [1, 1, 2, 3],
            textShadow: 'display',
            mt: [1, 2],
          }}
          pose={fadePose}
        >
          Front-End Developer
        </PosedHeading>
        <PosedBox
          pose={glowPose}
          sx={{
            mt: 4,
          }}
        >
          <FontAwesomeIcon
            icon={faChevronDoubleDown}
            sx={{ color: 'background', textShadow: 'display' }}
          />
        </PosedBox>
      </Flex>
      <Grid
        sx={{
          textAlign: 'center',
          py: [4],
          px: [4],
        }}
      >
        <Heading sx={{ fontSize: [3] }}>Hello, I'm Michael Utz.</Heading>
        <P>
          I'm passionate about creating experiences for the web that are useful,
          enjoyable, and intuitive.
        </P>
        <P>Let's build something together!</P>
      </Grid>
      <Grid sx={{ m: 3, textAlign: 'center' }} gap={[4]} columns={[1, 1, 3]}>
        <Box>
          <Box sx={{ fontSize: [3], mb: [2] }}>
            <FontAwesomeIcon icon={faUsersCrown} />
          </Box>
          <Heading as="h3" sx={{ fontSize: [2], mb: [2] }}>
            Focus on Users
          </Heading>
          <P>
            First and foremost, let's think about how to help our users do what
            they came here to do.
          </P>
        </Box>
        <Box>
          <Box sx={{ fontSize: [3], mb: [2] }}>
            <FontAwesomeIcon icon={faPhoneLaptop} />
          </Box>
          <Heading as="h3" sx={{ fontSize: [2], mb: [2] }}>
            Write Healthy Code
          </Heading>
          <P>
            Then, let's write some nice, clean code to make it happen. Perfect
            is good, but done is better.
          </P>
        </Box>
        <Box>
          <Box sx={{ fontSize: [3], mb: [2] }}>
            <FontAwesomeIcon icon={faStore} />
          </Box>
          <Heading as="h3" sx={{ fontSize: [2], mb: [2] }}>
            Build Lasting Value
          </Heading>
          <P>
            Let's cultivate healthy relationships with each other and our
            customers to keep the good times rolling.
          </P>
        </Box>
      </Grid>
    </>
  )
}

const P: FC = (props) => <Text variant="body" as="p" {...props} />

const makeBlurIn = (blur: number = 30) => ({
  stop: { filter: `blur(${blur}px)` },
  go: { filter: 'blur(0px)', transition: { delay: 300, duration: 1000 } },
})

const glow = {
  stop: { opacity: 0 },
  go: { opacity: 1, transition: { duration: 1000, yoyo: 5.5 } },
}

const PosedHeading = posed(Heading)(makeBlurIn(10))
const PosedImage = posed(Image)(makeBlurIn())
const PosedBox = posed(Box)(glow)

export default IndexPage
