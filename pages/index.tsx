/** @jsx jsx **/
import { FC, useState } from 'react'
import Head from '../components/head'
import { jsx, useThemeUI } from 'theme-ui'
import { Flex, Image, Heading, Box, Text, Grid } from '@theme-ui/components'
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
            fontWeight: 'normal',
            textShadow: 0,
            mt: [1, 2],
          }}
          pose={fadePose}
        >
          Front-end Developer
        </PosedHeading>
        <PosedBox
          pose={glowPose}
          sx={{
            mt: 4,
          }}
        >
          <DownIcon sx={{ color: 'background' }} />
        </PosedBox>
      </Flex>
      <Grid sx={{ m: 3 }}>
        <P>
          Vitae voluptas nam provident architecto omnis dolores. Reprehenderit
          totam consequatur voluptatum sunt rem blanditiis voluptatibus deserunt
          eos. Et nesciunt velit ex assumenda deserunt neque velit. Facere eaque
          expedita voluptas in.
        </P>
        <P>
          Itaque et consequatur sapiente nisi expedita omnis est eos nobis.
          Aspernatur quia sit a aut. Perspiciatis et ducimus quis dolor pariatur
          aperiam. Voluptate eius eius nam quia enim non et quia.
        </P>
        <P>
          Accusamus et voluptatem quo et veritatis sed quam. Veritatis in ex
          omnis aliquid distinctio. Consequuntur voluptatem est tempore dolorum
          dolores ea incidunt sequi. Officia laudantium voluptate similique
          ipsum libero quibusdam nam. Consectetur reiciendis modi maiores
          voluptas..
        </P>
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
