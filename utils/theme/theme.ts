import { modularScale } from 'polished'

export const colors = {
  background: '#f7eede',
  text: '#1b121c',
  primary: '#2274a5',
  secondary: '#0197f6',
  accent: '#f15025',
}

export const fonts = {
  body: '"Titillium Web", sans-seif',
  heading: '"Amatic SC", sans-seif',
  monospace: '"Inconsolata", monospace',
  display: '"Amatic SC", sans-serif',
}

export const breakpoints = [480, 736, 980, 1280, 1690].map((x) => `${x}px`)

export const sizes = {
  container: breakpoints[1],
  hero: {
    avatar: [100, 100, 200, 300],
  },
}

export const fontSizes = Array.from({ length: 10 }, (_, i) =>
  modularScale(i - 1)
)

export const shadows = { display: `0 0 30px ${colors.text}` }

export const zIndices = {
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
}

export const fontWeights = { body: 300, heading: 700, bold: 700 }
