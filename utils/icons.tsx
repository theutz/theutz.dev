import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

type Props = FontAwesomeIconProps & { wrapper?: React.ComponentType }

export function makeIcon(icon: FontAwesomeIconProps['icon']): React.FC<Props> {
  return ({ wrapper: Wrapper = (p) => <div {...p} />, ...props }) => (
    <Wrapper>
      <FontAwesomeIcon {...props} icon={icon} />
    </Wrapper>
  )
}
