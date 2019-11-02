/** @jsx jsx **/
import Head from '../components/head'
import { jsx } from 'theme-ui'
import Content from '../content/index.mdx'

type Props = {}

const IndexPage: React.FC<Props> = () => {
  return (
    <>
      <Head title="Home | Michael Utz, Front-End Developer" />
      <Content
        styles={{
          welcome: {
            variant: 'layouts.flex-column',
            // textAlign: 'center',
            '& p': {
              variant: 'text.subtitle',
            },
          },
        }}
      />
    </>
  )
}

export default IndexPage
