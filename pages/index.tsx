/** @jsx jsx **/
import { FC, useState } from 'react'
import Head from '../components/head'
import { jsx, useThemeUI } from 'theme-ui'
import { Flex, Image, Heading, Box, Text, Grid } from '@theme-ui/components'
import posed from 'react-pose'
import { motion, useAnimation } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDoubleDown,
  faUsersCrown,
  faPhoneLaptop,
  faStore,
} from '@fortawesome/pro-duotone-svg-icons'
import { useBlur } from '../hooks/useBlur'
const profilePic = require('../images/profile-pic.jpg?sizes[]=200,sizes[]=400')

type Props = {}

const IndexPage: FC<Props> = () => {
  const blur = useBlur()
  const [glowPose, setGlowPose] = useState<'stop' | 'go'>('stop')
  const { theme } = useThemeUI()
  const bp = theme.breakpoints as string[]

  return (
    <>
      <Head
        title="Michael Utz | Front-End Developer"
        onBgImageFadeStart={blur.actions.startToFocus}
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
        <motion.img
          {...blur.props}
          sx={{
            variant: 'images.avatar',
            width: '33%',
            maxWidth: 400,
            boxShadow: 'display',
          }}
          src={profilePic.src}
          srcSet={profilePic.srcSet}
          sizes={`(max-width: ${bp[1]}) 100px, (max-width: ${bp[2]}) 200px, 400px`}
        />
        <motion.h1
          {...blur.props}
          sx={{
            variant: 'text.display--invert',
            fontSize: [5, 5, 7, 8, 9],
            mt: [2, 3],
          }}
        >
          Michael Utz
        </motion.h1>
        <motion.h2
          {...blur.props}
          sx={{
            variant: 'text.display--invert',
            color: 'background',
            fontSize: [1, 1, 2, 3],
            mt: [1, 2],
          }}
        >
          Front-End Developer
        </motion.h2>
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
        <Heading sx={{ fontSize: [3], color: 'accent' }}>
          Hello, I'm Michael Utz.
        </Heading>
        <P sx={{ fontSize: [0, 1] }}>
          I'm passionate about creating experiences for the web that are useful,
          enjoyable, and intuitive.
        </P>
        <P sx={{ fontSize: [0, 1] }}>Let's build something together!</P>
      </Grid>
      <Grid sx={{ m: 3, textAlign: 'center' }} gap={[4]} columns={[1, 1, 3]}>
        <Box>
          <Box sx={{ fontSize: [3], mb: [2], color: 'accent' }}>
            <FontAwesomeIcon icon={faUsersCrown} />
          </Box>
          <Heading as="h3" sx={{ fontSize: [2], mb: [2], color: 'accent' }}>
            Focus on Users
          </Heading>
          <P>
            First and foremost, let's think about how to help our users do what
            they came here to do.
          </P>
        </Box>
        <Box>
          <Box sx={{ fontSize: [3], mb: [2], color: 'accent' }}>
            <FontAwesomeIcon icon={faPhoneLaptop} />
          </Box>
          <Heading as="h3" sx={{ fontSize: [2], mb: [2], color: 'accent' }}>
            Write Healthy Code
          </Heading>
          <P>
            Then, let's write some nice, clean code to make it happen. Perfect
            is good, but done is better.
          </P>
        </Box>
        <Box>
          <Box sx={{ fontSize: [3], mb: [2], color: 'accent' }}>
            <FontAwesomeIcon icon={faStore} />
          </Box>
          <Heading as="h3" sx={{ fontSize: [2], mb: [2], color: 'accent' }}>
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

const glow = {
  stop: { opacity: 0 },
  go: { opacity: 1, transition: { duration: 1000, yoyo: 5.5 } },
}

const PosedBox = posed(Box)(glow)

export default IndexPage
