import * as pageTitles from '../../ui/layout/page-titles';

import AppLayout from '../../ui/layout/AppLayout';

const blogs = ['hi 1', 'hi 2'];

const BlogPage = () => {
	return (
		<AppLayout title={pageTitles.Blog}>
			<div>
				<ul>
					{blogs.map((f, i) => <li key={i}><p>{f}</p></li>)}
				</ul>
			</div>
		</AppLayout>
	);
}

export default BlogPage;

