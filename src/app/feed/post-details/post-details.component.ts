import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/feed/post.service';

@Component({
  selector: 'ngsocial-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  post$: Observable<Post> = this.route.data.pipe(
    map(({ post }) => post as Post)
  );

  constructor(private route: ActivatedRoute) {}
}
