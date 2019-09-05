import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContentModel} from '../../../../shared/models/shared.model';
import {ContentService} from '../../../../shared/services/content.service';
import {SharedConfig} from '../../../../shared/config/shared.config';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.scss']
})
export class LiteratureComponent implements OnInit, OnDestroy {

  data = '';
  literatures: any[] = [];
  literature: ContentModel = new ContentModel();
  lastShownLiterature: number;
  literatureType: string;

  unSubscribe$ = new Subject();

  constructor(public contentService: ContentService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private ngxSpinnerService: NgxSpinnerService) { }
  ngOnInit() {
    this.literatureType = 'poem';
    this.lastShownLiterature = 4;
    this.activatedRoute.queryParams.pipe(takeUntil(this.unSubscribe$)).subscribe(queryParam => {
      if (queryParam && queryParam.type) {
        this.literatureType = queryParam.type;
      }
      this.loadLiteratureData();
    });
  }

  olderPosts() {
    this.lastShownLiterature += 5;
  }

  onClick(literatureType: string) {
    this.literatureType = literatureType;
    this.router.navigate([], {
      queryParams: {type: literatureType},
      queryParamsHandling: 'merge'
    });
  }

  private loadLiteratureData() {
    this.ngxSpinnerService.show();
    this.literatures = [];
    this.contentService.getAllContent(SharedConfig.getAllContentApi(this.literatureType)).pipe(takeUntil(this.unSubscribe$))
      .subscribe(res => {
        this.ngxSpinnerService.hide();
        res.forEach(r => {
          const newLiterature = new ContentModel();
          newLiterature._id = r._id;
          newLiterature.title = r.title;
          newLiterature.body = r.body;
          newLiterature.author = r.author;
          newLiterature.contentType = r.contentType;
          newLiterature.publishedDate = r.publishedDate;
          newLiterature.comments = r.comments;
          newLiterature.isFavourite = r.isFavourite;
          newLiterature.isPosted = r.isPosted;
          newLiterature.meta = r.meta;
          this.literatures.push(newLiterature);
        });
      });
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
