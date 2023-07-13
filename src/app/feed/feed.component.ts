import { Component } from '@angular/core';

import { Post } from './post/post.model';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  posts: Post[] = [
    { id: '1', value: 'Test1', date: new Date() },
    { id: '2', value: 'Test2', date: new Date() },
    { id: '3', value: 'Test3', date: new Date() },
  ];
}
