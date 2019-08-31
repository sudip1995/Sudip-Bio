import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileConfig} from '../../config/profile.config';
import {ContentService} from '../../../../shared/services/content.service';
import {ContentModel} from '../../../../shared/models/shared.model';
import {SharedConfig} from '../../../../shared/config/shared.config';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  data = '';
  blogs: any[] = [];
  blog: ContentModel = new ContentModel();
  lastShownBlog: number;
  isDataLoading: boolean;

  unSubscribe$ = new Subject();
  constructor(public contentService: ContentService) { }

  ngOnInit() {
    this.isDataLoading = true;
    this.lastShownBlog = 4;
    this.contentService.getAllContent(SharedConfig.getAllContentApi('blog')).pipe(takeUntil(this.unSubscribe$)).subscribe(res => {
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
      this.isDataLoading = false;
    });
  }

  olderPosts() {
    this.lastShownBlog += 5;
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
