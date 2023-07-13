import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/services/feed/post.service';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  posts$ = this.postService.getPosts();

  constructor(private postService: PostService) {}
}
