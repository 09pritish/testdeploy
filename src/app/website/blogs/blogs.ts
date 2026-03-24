import { Component } from '@angular/core';
import { BLOGS_DATA, BlogPost } from './blogs.data';

@Component({
  selector: 'app-blogs',
  standalone: false,
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss'
})
export class Blogs {
  readonly blogs: BlogPost[] = BLOGS_DATA;

  get newBlogs(): BlogPost[] {
    return this.blogs.filter((blog) => blog.era === 'new');
  }

  get archivedBlogs(): BlogPost[] {
    return this.blogs.filter((blog) => blog.era === 'archive');
  }
}
