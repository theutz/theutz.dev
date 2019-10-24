/** @jsx jsx **/
import { FC, useState } from 'react'
import Head from '../components/head'
import { jsx } from 'theme-ui'
import { Heading, Flex } from '@theme-ui/components'
import posed from 'react-pose'

type Props = {}

const IndexPage: FC<Props> = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Head title="Home" onBgImageFadeStart={() => setIsVisible(true)} />
      <Flex sx={{ justifyContent: 'flex-end', mr: 2 }}>
        <PosedHeading
          pose={isVisible ? 'visible' : 'hidden'}
          initialPose="hidden"
          variant="display"
          sx={{ ...headingPoseConfig.hidden, fontSize: [5, 7, 8] }}
        >
          Michael Utz
        </PosedHeading>
      </Flex>
    </>
  )
}

const headingPoseConfig = {
  visible: { filter: 'blur(0px)', transition: { duration: 1000 } },
  hidden: { filter: 'blur(4px)' },
}

const PosedHeading = posed(Heading)(headingPoseConfig)

export default IndexPage
