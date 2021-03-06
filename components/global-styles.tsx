import React, { FC } from 'react'
import { Global } from '@emotion/core'
import { normalize } from 'polished'

const GlobalStyles: FC<{}> = () => (
  <Global
    styles={(theme) => ({
      ...normalize(),
      html: {
        backgroundColor: theme.colors.background,
      },
      body: {
        margin: 0,
      },
    })}
  />
)

export default GlobalStyles
