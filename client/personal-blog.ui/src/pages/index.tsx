import AppLayout from '../ui/layout/AppLayout';
import Head from 'next/head';
import HomeComponent from '../ui/components/HomeComponent';

const HomePage = () => {
  return (
    <AppLayout>
      <Head>
        <title>Ophir Katz</title>
        <meta name='keywords' content='web, web development, programming, react, blog, learn' />
      </Head>
      <HomeComponent />
    </AppLayout>
  )
};

export default HomePage;
