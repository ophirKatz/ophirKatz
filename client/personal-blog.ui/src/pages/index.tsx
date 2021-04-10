import * as PageTitles from '../ui/layout/PageTitles';

import AppLayout from '../ui/layout/AppLayout';
import Head from 'next/head';
import HomeComponent from '../ui/components/HomeComponent';

const HomePage = () => {
  return (
    <AppLayout title={PageTitles.Home}>
      <Head>
        <meta name='keywords' content='web, web development, programming, react, blog, learn' />
      </Head>
      <HomeComponent />
    </AppLayout>
  )
};

export default HomePage;
