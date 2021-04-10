import * as PageTitles from '../../ui/layout/PageTitles';

import AppLayout from '../../ui/layout/AppLayout';
import { BlogId } from '../../shared/types/BlogId';
import BlogListComponent from '../../ui/components/BlogListComponent';
import { BlogPost } from '../../model/BlogPost';

const blogs = ['hi 1', 'hi 2'];

const blog1: BlogPost = {
	id: new BlogId('1'),
	title: 'My first blogpost',
	description: 'Yael is my favorite of all the girlfriends',
	avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	tags: []
}

const blog2: BlogPost = {
	id: new BlogId('2'),
	title: 'My second blogpost',
	description: 'Yael is my favorite of all the girlfriends',
	avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	tags: []
}

const BlogPage = () => {
	return (
		<AppLayout title={PageTitles.Blog}>
			<BlogListComponent loading={false} blogPosts={[blog1, blog2]} />
			{/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<BlogPostCard loading={false} blogPost={blog} />
			</div> */}
		</AppLayout>
	);
}

export default BlogPage;
