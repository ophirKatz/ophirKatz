import { Controller, Get } from '@nestjs/common';

@Controller('blogs')
export class BlogController {

	@Get()
	getAllPosts(): string {
		return null;
	}

}
