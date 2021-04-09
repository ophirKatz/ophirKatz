import AppLayout from '../../ui/layout/AppLayout';
import Head from 'next/head';

const blogs = ['hi 1', 'hi 2'];

const BlogPage = () => {
	return (
		<AppLayout>
			<Head>
				<title>Ophir Katz | Blog</title>
			</Head>
			<div>
				<ul>
					{blogs.map((f, i) => <li key={i}><p>{f}</p></li>)}
				</ul>
			</div>
		</AppLayout>
	);
}

export default BlogPage;

