import { Avatar, Card } from 'antd';

import { BlogPost } from '../../model/BlogPost';
import styles from '../styles/BlogPostCard.module.css';
import useBlogPostRouter from '../../shared/hooks/useBlogPostRouter';

const { Meta } = Card;

declare type PropTypes = {
	loading: boolean,
	blogPost: BlogPost
};

const BlogPostCard = ({
	loading,
	blogPost
}: PropTypes) => {
	const router = useBlogPostRouter();

	const routeToBlogPost = (e) => {
		e.preventDefault();
		router.routeToBlog(blogPost.id);
	};

	return (
		<Card key={blogPost.id.id}
			loading={loading}
			className={styles.blogCard}
			hoverable
			onClick={routeToBlogPost}>
			<Meta
				avatar={
					<Avatar src={blogPost.avatarUrl} />
				}
				title={blogPost.title}
				description={blogPost.description}
			/>

		</Card>
	)
};

export default BlogPostCard;
