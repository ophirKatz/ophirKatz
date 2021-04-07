import AboutComponent from '../ui/components/AboutComponent';
import AppLayout from '../ui/layout/AppLayout';
import Head from 'next/head';

const AboutPage = () => {
	return (
		<AppLayout>
			<Head>
				<title>Ophir Katz | About</title>
			</Head>
			<AboutComponent />
		</AppLayout>
	);
}

export default AboutPage;