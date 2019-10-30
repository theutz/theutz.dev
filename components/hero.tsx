/** @jsx jsx */
import React, { useEffect, useContext } from 'react'
import { jsx, useThemeUI, Styled } from 'theme-ui'
import { Box } from '@theme-ui/components'
import { motion } from 'framer-motion'
import { useBlur } from '../hooks/animations/useBlur'
import { usePulsate } from '../hooks/animations/usePulsate'
import { FADChevronDoubleDown } from './icons'
import { get } from 'lodash'
import { HeroImageContext } from './contexts/hero-image'

type Props = {
  /** Or pass a h1 as a child */
  title?: string
  /** Or pass an h2 as a child */
  subtitle?: string
  profilePic?: { src?: string; srcSet?: string }
}

const DownIconWrapper: React.FC<WithPulsate> = ({ pulsate, ...props }) => (
  <Styled.div
    as={motion.div}
    {...pulsate.props}
    sx={{
      mt: 2,
      fontSize: [2],
      color: 'background',
      textShadow: 'display',
    }}
    {...props}
  />
)

export const Hero: React.FC<Props> = ({
  title: propTitle,
  subtitle: propSubtitle,
  profilePic = {},
  children,
}) => {
  const blur = useBlur()
  const pulsate = usePulsate()

  const [heroImageState] = useContext(HeroImageContext)

  useEffect(() => {
    if (heroImageState === 'started') blur.actions.toFocus()
    if (heroImageState === 'finished') pulsate.actions.toPulsate()
  }, [heroImageState])

  const kids = React.Children.toArray(children)

  const title = get(
    kids.find((k) => get(k, 'props.mdxType') === 'h1'),
    'props.children',
    propTitle
  )

  const subtitle = get(
    kids.find((k) => get(k, 'props.mdxType') === 'h2'),
    'props.children',
    propSubtitle
  )

  return (
    <Box variant="layouts.hero">
      <ProfilePic blur={blur} profilePic={profilePic} />
      <Title blur={blur}>{title}</Title>
      <Subtitle blur={blur}>{subtitle}</Subtitle>
      <FADChevronDoubleDown wrapper={DownIconWrapper} pulsate={pulsate} />
    </Box>
  )
}

const Title: React.FC<WithBlur> = ({ children, blur }) => {
  return (
    <Styled.h1
      {...blur.props}
      as={motion.h1}
      sx={{ variant: 'text.hero__title' }}
    >
      {children}
    </Styled.h1>
  )
}

const Subtitle: React.FC<WithBlur> = ({ blur, children }) => {
  return (
    <Styled.h2
      {...blur.props}
      as={motion.h2}
      sx={{ variant: 'text.hero__subtitle' }}
    >
      {children}
    </Styled.h2>
  )
}

type ProfilePic = React.FC<WithBlur & NonNullable<Pick<Props, 'profilePic'>>>
const ProfilePic: ProfilePic = ({ blur, profilePic = {} }) => {
  const { src = undefined, srcSet = undefined } = profilePic
  const breakpoints = useThemeUI().theme.breakpoints as string[]

  const sizes = [
    `(max-width: ${breakpoints[1]}) 100px`,
    `(max-width: ${breakpoints[2]}) 200px`,
    `300px`,
  ].join(', ')

  const style = {
    variant: 'images.avatar',
    maxWidth: 'hero.avatar',
    boxShadow: 'display',
  }

  return (
    <motion.img
      {...blur.props}
      sx={style}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
    />
  )
}

export default Hero

type WithBlur = { blur: ReturnType<typeof useBlur> }
type WithPulsate = { pulsate: ReturnType<typeof usePulsate> }
