import { BlogPost } from '../../../personal-blog.shared/model/BlogPost';
import axios from 'axios';

interface BlogService {
	getAllBlogPosts(): Promise<BlogPost[]>;
}

class BlogServiceImpl implements BlogService {

	private _axios;

	constructor() {
		this._axios = axios.create({
			baseURL: 'http://localhost:6000/blogs',
			timeout: 1000,
		});
	}

	public getAllBlogPosts(): Promise<BlogPost[]> {
		// Implement API call to server
		return this._axios.get();
	}

}

export function useBlogService(): BlogService {
	return new BlogServiceImpl();
}
