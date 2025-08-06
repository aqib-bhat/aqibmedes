import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Personal website of Aqib Niaz Bhat, a software engineer, showcasing professional details and links to other interests"
        />
        <link rel="apple-touch-icon" href="/aqibmedes/Aqib_CloseUp.jpeg" />
        <link rel="manifest" href="/aqibmedes/manifest.json" />
        <link rel="icon" href="/aqibmedes/Aqib_CloseUp.jpeg" />
        <title>Aqib Niaz Bhat - Aqibmedes</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
