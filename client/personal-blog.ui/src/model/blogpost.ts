import { uuid } from '../shared/types';

export interface BlogPost {
	id: uuid;
	title: string;
	description: string;
	tags: string[];
	// TODO : Add published date
}
