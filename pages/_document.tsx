import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-*" />
          <meta name="description" content="Whoose that pokemon!!" />
          <meta name="image" content="/background.png" />
          <link
            href="https://fonts.cdnfonts.com/css/playhouse"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
