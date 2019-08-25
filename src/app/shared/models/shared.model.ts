export class CommentModel {
  body: string;
  date: Date;
}

export class ContentModel {
  _id: string;
  title: string;
  author: string;
  body: string;
  subject: string;
  contentType: string;
  isPosted: boolean;
  comments: CommentModel[];
  publishedDate: Date;
  isFavourite: boolean;
  meta: {
    votes: number,
    views: number
  };
}
