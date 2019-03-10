import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Common } from '../components/styles/Common'

export default class MyDocument extends Document<{ styleTags: any }> {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            href='https://fonts.googleapis.com/css?family=Press+Start+2P'
            rel='stylesheet'
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Common />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
