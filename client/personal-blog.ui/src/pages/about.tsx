import * as PageTitles from '../ui/layout/PageTitles';

import AboutComponent from '../ui/components/AboutComponent';
import AppLayout from '../ui/layout/AppLayout';

// TODO : Serve statically with getStaticProps?
const AboutPage = ({ }) => {
	return (
		<AppLayout title={PageTitles.About}>
			<AboutComponent />
		</AppLayout>
	);
}

export default AboutPage;