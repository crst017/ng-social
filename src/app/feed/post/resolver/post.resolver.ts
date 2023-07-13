import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/feed/post.service';

export const postResolver: ResolveFn<Post> = (route, _state) => {
  const postService = inject(PostService);
  const postId = route.paramMap.get('postId') || '';
  return postService.getPostDetails(postId);
};
