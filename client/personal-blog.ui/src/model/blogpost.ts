import { BlogId } from './../shared/types/BlogId';

export interface BlogPost {
	id: BlogId;
	title: string;
	description: string;
	avatarUrl: string;
	tags: string[];
	// TODO : Add published date
}
