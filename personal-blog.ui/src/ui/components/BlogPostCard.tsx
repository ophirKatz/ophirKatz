import { Avatar, Card, Checkbox } from 'antd';

import { BlogPost } from '../../model/BlogPost';
import styles from '../styles/BlogPostCard.module.css';
import useBlogRouter from '../../shared/hooks/BlogRouter';

const { Meta } = Card;

declare type PropTypes = {
	loading: boolean,
	blogPost: BlogPost,
	selectable: boolean
};

const BlogPostCard = ({
	loading,
	blogPost,
	selectable
}: PropTypes) => {
	const router = useBlogRouter();

	const routeToBlogPost = (e) => {
		e.preventDefault();
		router.routeToBlog(blogPost.id);
	};

	const BaseCard = ({ selectable, children }) => {
		if (selectable) {
			return (
				<Card key={blogPost.id}
					loading={loading}
					className={styles.blogCard}
					hoverable
					onClick={routeToBlogPost}
					extra={<Checkbox checked={selectable}>Mark</Checkbox>}>
					{children}
				</Card>
			);
		} else {
			return (
				<Card key={blogPost.id}
					loading={loading}
					className={styles.blogCard}
					hoverable
					onClick={routeToBlogPost}>
					{children}
				</Card>
			);
		}
	};

	return (
		<BaseCard selectable={selectable}>
			<Meta
				avatar={
					<Avatar src={blogPost.avatarUrl} />
				}
				title={blogPost.title}
				description={blogPost.description}
			/>
		</BaseCard>
	)
};

export default BlogPostCard;
