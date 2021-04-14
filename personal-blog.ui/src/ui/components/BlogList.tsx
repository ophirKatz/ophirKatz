import { Button, Col, Row, Tooltip } from 'antd';

import { BlogPost } from "../../model/BlogPost";
import BlogPostCard from './BlogPostCard';
import CardList from '../shared-components/CardList';
import FlexFiller from '../shared-components/FlexFiller';
import { SelectOutlined } from '@ant-design/icons';
import { useBlogListState } from '../../state/BlogList';
import { useState } from 'react';

declare type PropTypes = {
	loading: boolean,
	blogPosts: BlogPost[]
};

declare type SelectableProps = {
	selectable: boolean;
	setSelectable: (boolean) => void;
};

declare type OnAddPostProps = {
	onAdd: () => void;
};

declare type ActionButtonsProps = SelectableProps & OnAddPostProps;

const ActionButtons = ({
	selectable,
	setSelectable,
	onAdd
}: ActionButtonsProps) => {
	const updateSelectable = (e) => setSelectable(!selectable);
	const addBlogPost = (e) => onAdd();

	return (
		<>
			<Row wrap={false}>
				<Col flex="none">
					<Button type="primary" onClick={addBlogPost}>Add New Blog Post</Button>
				</Col>
				<FlexFiller />
				<Col>
					<Tooltip title="Select posts">
						{/* TODO : Change style according to selectable flag */}
						<Button type="primary" shape="circle" icon={<SelectOutlined />} onClick={updateSelectable} />
					</Tooltip>
				</Col>
			</Row>
		</>
	);
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

	const [selectable, setSelectable] = useState(false);
	const onAddBlogPost = () => {
		alert('Add blog post');
	};

	return (
		<div className="content">
			<ActionButtons selectable={selectable} setSelectable={setSelectable} onAdd={onAddBlogPost} />
			<CardList>
				{
					blogList.blogPosts.map(blogPost => (
						<BlogPostCard key={blogPost.id} loading={loading} blogPost={blogPost} selectable={selectable} />
					))
				}
			</CardList>
		</div>
	)
};

export default BlogList;
