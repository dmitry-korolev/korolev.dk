import React from 'react'
import App, { Container, NextAppContext } from 'next/app'
import { AppContainer } from '../components/app/App'

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
      <Container>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </Container>
    )
  }
}


