import { modularScale, cover } from 'polished'
import { Theme } from 'theme-ui'

type Variants = {
  [key in 'images' | 'text' | 'layouts']: {}
}

const colors = {
  background: '#f7eede',
  text: '#1b121c',
  primary: '#2274a5',
  secondary: '#0197f6',
  accent: '#f15025',
}

const breakpoints = [480, 736, 980, 1280, 1690]
const sizes = { container: breakpoints[1] }

const theme: Theme & Variants = {
  /** Theme */
  colors,
  fonts: {
    body: '"Titillium Web", sans-seif',
    heading: '"Amatic SC", sans-seif',
    monospace: '"Inconsolata", monospace',
    display: '"Amatic SC", sans-serif',
  },
  sizes,
  breakpoints: breakpoints.map((x) => `${x}px`),
  fontSizes: Array.from({ length: 10 }, (_, i) => modularScale(i)),
  shadows: { display: `0 0 30px ${colors.text}` },
  zIndices: {
    '-5': -(10 ** 5),
    '-4': -(10 ** 4),
    '-3': -(10 ** 3),
    '-2': -(10 ** 2),
    '-1': -(10 ** 1),
    0: 0,
    1: 10 ** 1,
    2: 10 ** 2,
    3: 10 ** 3,
    4: 10 ** 4,
    5: 10 ** 5,
  },
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  /** Variants */
  images: {
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
  },
  text: {
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
  },
  layouts: {
    container: {
      maxWidth: sizes.container,
      mx: 'auto',
      px: 3,
    },
  },
}

export default theme
