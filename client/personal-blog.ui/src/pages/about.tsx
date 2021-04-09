import * as pageTitles from '../ui/layout/page-titles';

import AboutComponent from '../ui/components/AboutComponent';
import AppLayout from '../ui/layout/AppLayout';

const AboutPage = () => {
	return (
		<AppLayout title={pageTitles.About}>
			<AboutComponent />
		</AppLayout>
	);
}

export default AboutPage;