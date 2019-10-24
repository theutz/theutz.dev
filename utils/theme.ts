import { modularScale } from 'polished'
import { Theme } from 'theme-ui'

type Variants = {
  text: {
    display: {}
  }
}

const theme: Theme & Variants = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
    display: '"Amatic SC", sans-serif',
  },
  fontSizes: Array.from({ length: 10 }, (_, i) => modularScale(i)),
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
  colors: {
    text: '#F1E8D8',
    background: '#1D141E',
    primary: '#33e',
  },
  text: {
    display: {
      fontFamily: 'display',
      color: 'text',
      textShadow: ({ colors }: any) => `0 0 10px ${colors.background}`,
    },
  },
}

export default theme
