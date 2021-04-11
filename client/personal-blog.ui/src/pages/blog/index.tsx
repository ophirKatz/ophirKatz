import * as PageTitles from '../../ui/layout/PageTitles';

import AppLayout from '../../ui/layout/AppLayout';
import BlogList from '../../ui/components/BlogList';
import { BlogPost } from '../../model/BlogPost';
import { GetStaticPropsResult } from 'next';
import { useBlogService } from '../../services/BlogService';

declare type PropTypes = {
	error?: boolean,
	blogPosts?: BlogPost[]
};

const BlogPage = ({
	error,
	blogPosts
}: PropTypes) => {
	const BlogListIfExists = ({ }) => {
		if (error) {
			return <p>No posts!</p>
		} else {
			return <BlogList loading={false} blogPosts={blogPosts} />
		}
	};

	return (
		<AppLayout title={PageTitles.Blog}>
			<div className="centerColumn">
				<BlogListIfExists />
			</div>
		</AppLayout>
	);
}

export default BlogPage;

export async function getStaticProps(): Promise<GetStaticPropsResult<PropTypes>> {
	const blogService = useBlogService();
	const blogPosts = await blogService.getAllBlogPosts();
	if (!blogPosts || blogPosts.length === 0) {
		return {
			props: {
				error: true
			}
		};
	}

	// TODO : Convert dto to model

	// Current bug with getStaticProps: Tries to serialize BlogId but can't (why??)
	return {
		props: {
			blogPosts
		},
		// revalidate: 1
	};
}
