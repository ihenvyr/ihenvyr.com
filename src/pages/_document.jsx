import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="overflow-x-hidden">
        <Head/>
        <body className="bg-gray-900">
        <Main />
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

/*import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal();
    }
  }
}*/
