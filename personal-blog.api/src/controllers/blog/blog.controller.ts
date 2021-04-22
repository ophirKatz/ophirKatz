import { Controller, Get } from '@nestjs/common';

import { BlogPost } from 'model/BlogPost';
import { BlogService } from './../../services/blog/blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private blogService: BlogService) { }

  @Get()
  getAllPosts(): Promise<BlogPost[]> {
    return this.blogService.getAllBlogPosts();
  }
}
