import React from 'react'
import { Box } from '@theme-ui/components'

const IconWrapper: React.FC = (props) => (
  <Box as="span" sx={{ fontSize: [1], mr: [2], color: 'accent' }} {...props} />
)

export default IconWrapper
