import { BlogPost } from "../../model/BlogPost";
import BlogPostCard from './BlogPostCard';
import CardList from '../shared-components/CardList';
import { useBlogListState } from '../../state/BlogList';

declare type PropTypes = {
	loading: boolean,
	blogPosts: BlogPost[]
};

const BlogList = ({
	loading,
	blogPosts
}: PropTypes) => {
	const {
		blogList,
		addBlogPost,
		removeBlogPost
	} = useBlogListState(blogPosts);

	return (
		// TODO : Add 'New Blog Post' Button
		// TODO : Add 'Remove' Button for each card
		<CardList>
			{
				blogList.blogPosts.map(blogPost => (
					<BlogPostCard key={blogPost.id} loading={loading} blogPost={blogPost} />
				))
			}
		</CardList>
	)
};

export default BlogList;
