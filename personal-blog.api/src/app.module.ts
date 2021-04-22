import { BlogController } from './controllers/blog/blog.controller';
import { BlogService } from './services/blog/blog.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BlogController],
  providers: [BlogService],
})
export class AppModule { }
