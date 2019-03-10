import App, { Container as NextContainer, NextAppContext } from 'next/app'
import styled from 'styled-components'
import 'normalize.css/normalize.css'

const Container = styled.div`
  margin: 0 auto;
  max-width: var(--siteWidth);
`

const Darker = styled.div`
  background: rgba(0, 0, 0, 0.4);
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
        <Darker>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Darker>
      </NextContainer>
    )
  }
}


