import { NextRouter, useRouter } from 'next/router';

export interface BlogRouter {
	routeToBlog(blogId: string): void;
}

export class BlogNextRouter implements BlogRouter {
	private router: NextRouter;

	public constructor() {
		this.router = useRouter();
	}

	public routeToBlog(blogId: string): void {
		this.router.push(`/blog/${blogId}`);
	}
}

declare type UseBlogRouter = () => BlogRouter;
const useBlogRouter: UseBlogRouter = () => new BlogNextRouter();

export default useBlogRouter;
