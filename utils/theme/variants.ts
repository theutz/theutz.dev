import * as theme from './theme'
import * as styles from './styles'
import { cover } from 'polished'

export const images = {
  avatar: {
    borderRadius: '50%',
  },
  fullscreen: {
    ...cover(),
    zIndex: -5,
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  'fullscreen--right': {
    variant: 'images.fullscreen',
    backgroundPositionX: 'right',
  },
}

export const text = {
  body: {
    fontFamily: 'body',
    color: 'text',
    fontWeight: 'body',
  },
  heading: {
    fontFamily: 'heading',
    color: 'text',
    fontWeight: 'heading',
  },
  display: {
    fontFamily: 'display',
    color: 'text',
    textShadow: 'display',
    fontWeight: 'bold',
  },
  hero__title: {
    variant: 'text.display',
    color: 'background',
    fontSize: [6, 6, 7, 8],
    my: [2],
  },
  hero__subtitle: {
    variant: 'text.display',
    color: 'background',
    fontSize: [2, 2, 3, 4],
    mt: [1, 2],
  },
  title: {
    fontSize: styles.h1.fontSize.map((x) => ++x),
  },
  subtitle: {
    fontSize: styles.p.fontSize.map((x) => ++x),
  },
}

export const layouts = {
  container: {
    maxWidth: theme.sizes.container,
    mx: 'auto',
    px: 3,
  },
  'flex-column': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'container--flex-column': {
    variant: 'layouts.container',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    variant: 'layouts.container--flex-column',
    height: '100vh',
  },
}
