import App, { Container as NextContainer, NextAppContext } from 'next/app'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import { Variables } from '../components/style/Variables'
import { Common } from '../components/style/Common'

const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: var(--size__site-width);
`

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <NextContainer>
        <Container>
          <Component {...pageProps} />
        </Container>
        <Normalize />
        <Variables />
        <Common />
      </NextContainer>
    )
  }
}


