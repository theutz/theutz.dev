/* eslint-disable @typescript-eslint/camelcase */
import * as theme from './theme'
import { cover } from 'polished'
import { countToColumns } from '../css'

export const images = {
  avatar: {
    borderRadius: '50%',
  },
  fullscreen: {
    ...cover(),
    zIndex: -5,
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  'fullscreen--right': {
    variant: 'images.fullscreen',
    backgroundPositionX: 'right',
  },
}

export const text = {
  body: {
    fontFamily: 'body',
    color: 'text',
    fontWeight: 'body',
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    color: 'accent',
  },
  display: {
    fontFamily: 'display',
    color: 'text',
    textShadow: 'display',
    fontWeight: 'bold',
  },
  hero__title: {
    variant: 'text.display',
    color: 'background',
    fontSize: [6, 6, 7, 8],
    my: [2],
  },
  hero__subtitle: {
    variant: 'text.display',
    color: 'background',
    fontSize: [2, 2, 3, 4],
    mt: [1, 2],
  },
  title: {
    variant: 'text.heading',
    fontSize: [7, 8, 8],
  },
  subtitle: {
    variant: 'text.body',
    fontSize: [2, 3],
  },
}

export const layouts = {
  container: {
    maxWidth: theme.sizes.container,
    mx: 'auto',
    px: 3,
  },
  'flex-column': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'container--flex-column': {
    variant: 'layouts.container',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    variant: 'layouts.container--flex-column',
    height: '100vh',
  },
}

export const grids = {
  triplet: {
    gridGap: [4],
    gridTemplateColumns: countToColumns([1, 3]),
    '& div': {
      h3: {
        display: 'flex',
        flexDirection: ['row', 'column'],
        justifyContent: 'flex-start',
        alignItems: ['center', 'flex-start'],
        m: 0,
        mb: [2],
        '& > .fa-icon': {
          mr: [3],
        },
      },
      p: {
        m: 0,
      },
      ul: {
        m: 0,
        p: 0,
        mt: [3],
        display: 'flex',
        listStyle: 'none',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
        fontSize: [0],
        li: {
          ':not(:last-child)::after': {
            content: '"//"',
            mx: [2],
            color: 'muted',
          },
          mb: [2],
        },
      },
    },
  },
}
