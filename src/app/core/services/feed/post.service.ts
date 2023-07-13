import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/feed/post/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/post`);
  }
}
