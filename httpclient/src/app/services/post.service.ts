import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 // private url = 'http://jsonplaceholder.typicode.com/posts';
  private url = 'http://localhost:3000/customers';

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url);
  }

  create(post) {
    return this.httpClient.post(this.url, JSON.stringify(post));
  }

}