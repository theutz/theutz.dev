/** @jsx jsx */
import { jsx, useThemeUI, Styled } from 'theme-ui'
import { Box } from '@theme-ui/components'
import { motion } from 'framer-motion'
import { useBlur } from '../hooks/animations/useBlur'
import { usePulsate } from '../hooks/animations/usePulsate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDoubleDown } from '@fortawesome/pro-duotone-svg-icons'

type Props = {
  title: string
  subtitle: string
  profilePic?: { src?: string; srcSet?: string }
  blur: ReturnType<typeof useBlur>
  pulsate: ReturnType<typeof usePulsate>
}

export const Hero: React.FC<Props> = ({
  title,
  subtitle,
  pulsate,
  blur,
  profilePic = {},
}) => {
  return (
    <Box variant="layouts.hero">
      <ProfilePic blur={blur} profilePic={profilePic} />
      <Title blur={blur}>{title}</Title>
      <Subtitle blur={blur}>{subtitle}</Subtitle>
      <DownIcon pulsate={pulsate} />
    </Box>
  )
}

const Title: React.FC<Pick<Props, 'blur'>> = ({ children, blur }) => {
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

const Subtitle: React.FC<Pick<Props, 'blur'>> = ({ blur, children }) => {
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

const ProfilePic: React.FC<
  Pick<Props, 'blur'> & NonNullable<Pick<Props, 'profilePic'>>
> = ({ blur, profilePic = {} }) => {
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

const DownIcon: React.FC<Pick<Props, 'pulsate'>> = ({ pulsate }) => {
  return (
    <Styled.div
      as={motion.div}
      {...pulsate.props}
      sx={{
        mt: 2,
        fontSize: [2],
        color: 'background',
        textShadow: 'display',
      }}
    >
      <FontAwesomeIcon icon={faChevronDoubleDown} />
    </Styled.div>
  )
}

export default Hero
