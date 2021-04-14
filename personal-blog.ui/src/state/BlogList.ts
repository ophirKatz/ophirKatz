import * as _ from 'lodash';

import { Action } from './Action';
import { BlogPost } from '../model/BlogPost';
import { useReducer } from 'react'

export enum BlogListAction {
	AddBlogPost = 'add-blog-post',
	RemoveBlogPost = 'remove-blog-post'
}

interface BlogListState {
	// TODO : Change to immutable array?
	blogPosts: BlogPost[];
}

function reducer(state: BlogListState, action: Action<BlogListAction>) {
	switch (action.type) {
		case BlogListAction.AddBlogPost:
			// TODO : Check exists
			return { blogPosts: [...state.blogPosts, action.payload] };
		case BlogListAction.RemoveBlogPost:
			// TODO : Check exists
			return {
				blogPosts: _.remove(state.blogPosts, (blogPost) => blogPost.id.id === action.payload)
			};
		default:
			throw new Error();
	}
}

type BlogListReducer = {
	blogList: BlogListState,
	addBlogPost: (blogPost: BlogPost) => void,
	removeBlogPost: (id: string) => void
};

export const useBlogListState = (initialBlogList: BlogPost[]): BlogListReducer => {
	const initialState = { blogPosts: initialBlogList };
	const [blogList, dispatch] = useReducer(reducer, initialState);

	const addBlogPost = (blogPost: BlogPost) => {
		dispatch({ type: BlogListAction.AddBlogPost, payload: blogPost })
	};
	const removeBlogPost = (id: string) => {
		dispatch({ type: BlogListAction.RemoveBlogPost, payload: id });
	}

	return {
		blogList,
		addBlogPost,
		removeBlogPost
	};
}
