import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { IComment, IPost } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getPosts(start: number, limit: number) {
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`).pipe(take(1))
  }

  getPostDetails(id: number) {
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(take(1))
  }

  getPostComments(id: number) {
    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).pipe(take(1))
  }

  editPost(post: any) {
    return this.http.put<any>(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post).pipe(take(1))
  }

  showToaster(severity: string, title: string, errorMessage: string) {
    this.messageService.add({ severity: severity, summary: title, detail: errorMessage });
  }

}
