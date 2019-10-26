/** @jsx jsx **/
import { FC, useState } from 'react'
import Head from '../components/head'
import { jsx, useThemeUI } from 'theme-ui'
import { Flex, Image, Heading, Box } from '@theme-ui/components'
import posed from 'react-pose'
import DownIcon from '../components/icons/down-icon'
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
            boxShadow: 0,
          }}
          pose={fadePose}
          src={profilePic.src}
          srcSet={profilePic.srcSet}
          sizes={`(max-width: ${bp[1]}) 100px, (max-width: ${bp[2]}) 200px, 400px`}
        />
        <PosedHeading
          pose={fadePose}
          variant="display"
          sx={{ ...makeBlurIn().stop, fontSize: [5, 5, 7, 8, 9], mt: [2, 3] }}
        >
          Michael Utz
        </PosedHeading>
        <PosedBox pose={glowPose} sx={{ mt: 4 }}>
          <DownIcon sx={{ color: 'text' }} />
        </PosedBox>
      </Flex>
    </>
  )
}

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
