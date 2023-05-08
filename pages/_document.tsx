import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
       <Head>
       <link rel="preconnect" href="https://fonts.gstatic.com"/>
       <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,600&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Karla:ital@1&display=swap" rel="stylesheet"/>
       </Head >
        <body className = "bg-gradient-to-r from-mauve-a to-mauve-b dark:from-dark-500 dark:to-dark-700 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument