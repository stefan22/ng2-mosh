import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) {
    this.http;
  }

  getPosts() {
    return this.http.get(this.url)
      .map(
        res => res.json()
      );
  }//getPosts method

  createPost(post) {
    return this.http.post(this.url,JSON.stringify(post))
      .map(res => res.json());
  
  }//createPost method



}//HttpService class



