import { Component, OnInit } from '@angular/core';
import {ProfileConfig} from '../../config/profile.config';
import {BlogModel} from '../../models/profile.model';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  isWriting: boolean;
  data = '';
  blogs: any[] = [];
  blog: BlogModel = new BlogModel();
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.isWriting = false;
    this.blogService.getAllBlogPosts(ProfileConfig.getAllBlogsApi).subscribe(res => {
      res.forEach(r => {
        const newBlog = new BlogModel();
        newBlog.title = r.title;
        newBlog.body = r.body;
        newBlog.author = r.author;
        newBlog.date = r.date;
        newBlog.comments = r.comments;
        newBlog.isFavourite = r.isFavourite;
        newBlog.isPosted = r.isPosted;
        newBlog.meta = r.meta;
        this.blogs.push(newBlog);
      });
    });
  }

  cancel() {
    // ask user to save
    this.isWriting = false;
  }

  save(event) {
    // save data as draft
    this.blog.title = event.title;
    this.blog.body = event.body;
  }

  post() {
    // post blog to database
    this.blogService.saveBlogPost(ProfileConfig.postBlogApi, this.blog).subscribe(res => {
      this.isWriting = false;
      const newBlog = new BlogModel();
      newBlog.title = res.title;
      newBlog.body = res.body;
      newBlog.author = res.author;
      newBlog.date = res.date;
      newBlog.comments = res.comments;
      newBlog.isFavourite = res.isFavourite;
      newBlog.isPosted = res.isPosted;
      newBlog.meta = res.meta;
      this.blogs.push(newBlog);
    });
  }
}
