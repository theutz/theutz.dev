import { Theme } from 'theme-ui'
import * as themeBase from './theme'
import * as variants from './variants'
import * as styles from './styles'

const theme: Theme & typeof variants = {
  ...themeBase,
  ...variants,
  styles: {
    ...styles,
  },
}

export default theme
