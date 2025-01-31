import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly URL = 'http://localhost:3000/post';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}`);
  }

  getPostDetails(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.URL}/${id}`);
  }
}
