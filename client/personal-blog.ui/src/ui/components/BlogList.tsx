import { BlogPost } from "../../model/BlogPost";
import BlogPostCard from './BlogPostCard';
import CardList from '../shared-components/CardList';

declare type PropTypes = {
	loading: boolean,
	blogPosts: BlogPost[]
};

const BlogList = ({
	loading,
	blogPosts
}: PropTypes) => {
	return (
		<CardList>
			{
				blogPosts.map(blogPost => (
					<BlogPostCard loading={loading} blogPost={blogPost} />
				))
			}
		</CardList>
	)
};

export default BlogList;
