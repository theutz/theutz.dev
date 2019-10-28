import { modularScale } from 'polished'
import { Theme } from 'theme-ui'

type Variants = {
  text: {
    body: {}
    heading: {}
    display: {}
  }
}

const colors = {
  background: '#F3EADA',
  text: '#1D141E',
  primary: '#33e',
}

const theme: Theme & Variants = {
  colors,
  fonts: {
    body: '"Ubuntu Mono", monospace',
    heading: '"Ubuntu Mono", monospace',
    monospace: '"Ubuntu Mono", monospace',
    display: '"Amatic SC", sans-serif',
  },
  breakpoints: [480, 736, 980, 1280, 1690].map((x) => `${x}px`),
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
    body: 400,
    heading: 700,
    bold: 700,
  },
  text: {
    body: {
      fontFamily: 'body',
      color: 'text',
    },
    heading: {
      fontFamily: 'heading',
      color: 'text',
    },
    display: {
      fontFamily: 'display',
      color: 'text',
      textShadow: 'display',
    },
  },
}

export default theme
