import { Component, OnInit } from '@angular/core';
import {ProfileConfig} from '../../config/profile.config';
import {ContentService} from '../../../../shared/services/content.service';
import {ContentModel} from '../../../../shared/models/shared.model';
import {SharedConfig} from '../../../../shared/config/shared.config';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  isWriting: boolean;
  data = '';
  blogs: any[] = [];
  blog: ContentModel = new ContentModel();
  lastShownBlog: number;
  constructor(public contentService: ContentService) { }

  ngOnInit() {
    this.lastShownBlog = 4;
    this.isWriting = false;
    this.contentService.getAllContent(SharedConfig.getAllContentApi('blog')).subscribe(res => {
      res.forEach(r => {
        const newBlog = new ContentModel();
        newBlog._id = r._id;
        newBlog.title = r.title;
        newBlog.body = r.body;
        newBlog.author = r.author;
        newBlog.contentType = r.contentType;
        newBlog.publishedDate = r.publishedDate;
        newBlog.comments = r.comments;
        newBlog.isFavourite = r.isFavourite;
        newBlog.isPosted = r.isPosted;
        newBlog.meta = r.meta;
        this.blogs.push(newBlog);
      });
    });
  }

  olderPosts() {
    this.lastShownBlog += 5;
  }
}
