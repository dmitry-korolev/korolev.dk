import App, { Container as NextContainer, NextAppContext } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { getTheme } from '../utils/styles/getTheme/getTheme'
import { Common } from '../components/styles/Common'
import { MainTheme } from '../utils/styles/getTheme/getTheme.h'

const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: ${(p: { theme: MainTheme }) => p.theme.layout.maxWidth};
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
    const theme = getTheme()

    return (
      <NextContainer>
        <ThemeProvider theme={theme}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
        <Common theme={theme}/>
        <Normalize />
      </NextContainer>
    )
  }
}


