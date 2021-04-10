import * as PageTitles from '../../ui/layout/PageTitles';

import AppLayout from '../../ui/layout/AppLayout';
import { BlogId } from '../../shared/types/BlogId';
import BlogList from '../../ui/components/BlogList';
import { BlogPost } from '../../model/BlogPost';

const blogs = ['hi 1', 'hi 2'];

const profile = 'https://scontent.ftlv16-1.fna.fbcdn.net/v/t1.6435-9/40172260_1818921461478846_3819172025834930176_n.jpg?_nc_cat=104&_nc_map=control&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hOpben_nEgYAX9nqxWr&_nc_ht=scontent.ftlv16-1.fna&oh=4d9a9200b7505ae14182e5a71aebd0fe&oe=60984CB5';

const blog1: BlogPost = {
	id: new BlogId('1'),
	title: 'My first blogpost',
	description: 'Yael is my favorite of all the girlfriends',
	avatarUrl: profile,
	tags: []
}

const blog2: BlogPost = {
	id: new BlogId('2'),
	title: 'My second blogpost',
	description: 'Yael is my favorite of all the girlfriends',
	avatarUrl: profile,
	tags: []
}

const BlogPage = () => {
	return (
		<AppLayout title={PageTitles.Blog}>
			<BlogList loading={false} blogPosts={[blog1, blog2]} />
			{/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<BlogPostCard loading={false} blogPost={blog} />
			</div> */}
		</AppLayout>
	);
}

export default BlogPage;
