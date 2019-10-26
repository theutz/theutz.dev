import React, { FC } from 'react'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { faChevronDoubleDown } from '@fortawesome/pro-duotone-svg-icons'

type Props = Omit<FontAwesomeIconProps, 'icon'>

const Down: FC<Props> = (props) => (
  <FontAwesomeIcon {...props} icon={faChevronDoubleDown} />
)

export default Down
