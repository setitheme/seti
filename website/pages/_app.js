import Head from 'next/head';

import '../styles/index.scss';
import DefaultLayout from '../components/layout/Default';

function App({ Component, pageProps }) {
  return (
    <section id="app">
      <Head>
        <title>Seti Theme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </section>
  );
}

export default App;
