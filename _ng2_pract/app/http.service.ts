import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  private url2 = "https://feedo.yznet.com/json?file=Player_Rank.xlsx";
  constructor(private http:Http) {
    
  }

  getPosts() {
    return this.http.get(this.url2)
      .map(
        res => res.json()
        
      );
  }//getPosts method

  createPost(post) {
    return this.http.post(this.url,JSON.stringify(post))
      .map(res => res.json()
    );
  
  }//createPost method



}//HttpService class




