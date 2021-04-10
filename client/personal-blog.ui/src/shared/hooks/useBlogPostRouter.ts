import { NextRouter, useRouter } from 'next/router';

import { BlogId } from './../types/BlogId';

export interface BlogRouter {
	routeToBlog(blogId: BlogId): void;
}

export class BlogNextRouter implements BlogRouter {

	private router: NextRouter;

	public constructor() {
		this.router = useRouter();
	}

	public routeToBlog(blogId: BlogId): void {
		this.router.push(`/blog/${blogId.id}`);
	}
}

const useBlogPostRouter = () => new BlogNextRouter();

export default useBlogPostRouter;
