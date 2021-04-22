import { BlogPost } from 'model/BlogPost';
import { Injectable } from '@nestjs/common';

const profile =
	'https://scontent.ftlv16-1.fna.fbcdn.net/v/t1.6435-9/40172260_1818921461478846_3819172025834930176_n.jpg?_nc_cat=104&_nc_map=control&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hOpben_nEgYAX9nqxWr&_nc_ht=scontent.ftlv16-1.fna&oh=4d9a9200b7505ae14182e5a71aebd0fe&oe=60984CB5';

const blog1: BlogPost = {
	id: '1',
	title: 'My first blogpost',
	description: 'Yael is my favorite of all the girlfriends',
	avatarUrl: profile,
	tags: [],
};

const blog2: BlogPost = {
	id: '2',
	title: 'My second blogpost',
	description: 'Yael is my favorite of all the girlfriends',
	avatarUrl: profile,
	tags: [],
};

@Injectable()
export class BlogService {
	public getAllBlogPosts(): Promise<BlogPost[]> {
		return Promise.resolve([blog1, blog2]);
	}
}
