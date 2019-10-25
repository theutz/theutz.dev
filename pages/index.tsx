/** @jsx jsx **/
import { FC, useState } from 'react'
import Head from '../components/head'
import { jsx, useThemeUI } from 'theme-ui'
import { Flex, Image, Heading } from '@theme-ui/components'
import posed from 'react-pose'
const profilePic = require('../images/profile-pic.jpg?sizes[]=200,sizes[]=400')

type Props = {}

const IndexPage: FC<Props> = () => {
  const [pose, setPose] = useState('start')
  const { theme } = useThemeUI()
  const bp = theme.breakpoints as string[]

  return (
    <>
      <Head
        title="Michael Utz | Front-End Developer"
        onBgImageFadeStart={() => setPose('end')}
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
            ...blurIn().start,
            borderRadius: '50%',
            width: '33%',
            maxWidth: 400,
            boxShadow: 0,
          }}
          pose={pose}
          src={profilePic.src}
          srcSet={profilePic.srcSet}
          sizes={`(max-width: ${bp[1]}) 100px, (max-width: ${bp[2]}) 200px, 400px`}
        />
        <PosedHeading
          pose={pose}
          variant="display"
          sx={{ ...blurIn().start, fontSize: [5, 5, 7, 8, 9], mt: [2, 3] }}
        >
          Michael Utz
        </PosedHeading>
      </Flex>
    </>
  )
}

const blurIn = (blur: number = 30) => ({
  end: { filter: 'blur(0px)', transition: { delay: 300, duration: 1000 } },
  start: { filter: `blur(${blur}px)` },
})

const PosedHeading = posed(Heading)(blurIn(10))
const PosedImage = posed(Image)(blurIn())

export default IndexPage
