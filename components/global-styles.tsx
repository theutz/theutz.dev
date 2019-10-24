import { FC } from 'react'
import { Global } from '@emotion/core'
import { normalize } from 'polished'

const GlobalStyles: FC<{}> = () => (
  <Global
    styles={(theme) => ({
      ...normalize(),
      html: {
        backgroundColor: theme.colors.background,
      },
    })}
  />
)

export default GlobalStyles
