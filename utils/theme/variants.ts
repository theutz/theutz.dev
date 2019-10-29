import { sizes } from './theme'
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
  'display--invert': {
    variant: 'text.display',
    color: 'background',
  },
  title: {
    fontSize: [3],
  },
  subtitle: {
    fontSize: [1],
  },
}

export const layouts = {
  container: {
    maxWidth: sizes.container,
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
}
