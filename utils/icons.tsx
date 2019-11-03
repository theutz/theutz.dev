import React, { FC, ComponentType } from 'react'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { startCase, upperCase, replace } from 'lodash'
import classNames from 'classnames'

const DefaultWrapper: FC = (props) => <span {...props} />
type IconObject = { prefix: string; iconName: string }
type IconProps<W> = {
  wrapper: ComponentType<W>
  iconProps: Omit<FontAwesomeIconProps, 'icon'>
} & W

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function makeIcon<T extends any>(icon: FontAwesomeIconProps['icon']) {
  const { prefix, iconName } = icon as IconObject

  const Icon: FC<IconProps<T>> = ({
    wrapper: Wrapper = DefaultWrapper,
    iconProps,
    className,
    ...rest
  }) => {
    const props = rest as T
    return (
      <Wrapper {...props} className={classNames(className, 'fa-icon')}>
        <FontAwesomeIcon icon={icon} {...iconProps} />
      </Wrapper>
    )
  }

  Icon.displayName = [
    upperCase(prefix),
    replace(startCase(iconName), ' ', ''),
    `Icon`,
  ].join('')

  return Icon
}
