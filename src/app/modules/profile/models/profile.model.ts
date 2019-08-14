export class CommentModel {
  body: string;
  date: Date;
}

export class BlogModel {
  title: string;
  author: string;
  body: string;
  isPosted: boolean;
  comments: CommentModel[];
  date: Date;
  isFavourite: boolean;
  meta: {
    votes: number,
    views: number
  };
}
