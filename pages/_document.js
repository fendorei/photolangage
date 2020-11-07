import Document, { Html, Head, Main, NextScript } from 'next/document'
import { reset, globals } from 'styles'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
          <link rel="icon" sizes="192x192" href="/favicon.png" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
          <link rel="apple-touch-icon" href="/favicon.png" type="image/png"/>
        </Head>
        <style jsx global>{ reset }</style>
        <style jsx global>{ globals }</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
