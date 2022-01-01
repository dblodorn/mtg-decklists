import Head from '../components/head'
import { MarkDown } from '../components/utils'
import readMe from './../README.md'
import { PageWrapper } from '../styles/components'

export default function About() {
  return (
    <>
      <Head title={'About'} />
      <PageWrapper>
        <MarkDown markdown={readMe}/>
      </PageWrapper> 
    </>
  )
}
