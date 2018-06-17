import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { OnInit } from '@angular/core';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app',
  template: `
      <h1>Yello Library</h1>
      <books></books>
      <authors></authors>

      <button class="btn btn-add" [class.active]="isActive"
      [style.color]="isActive ? 'green' : 'white'">Add</button>

      <button (click)="onClick($event)" class="btn btn-add"> Event </button>
      <section class="data">
      <p><a href="data.html">{{ dataLink }}</a></p>
      </section>
  `,
  providers: [HttpService],
  styleUrls: ["../css/app.css"]


})//@Component

export class AppComponent implements OnInit {
  posts: any[];
  isLoading = true;
  dataLink = "dummy data";
  isActive = false;

  onClick(e) {
    console.log(e);
  
  }//onClick method

  constructor(private httpService:HttpService) {
    
  }//constructor

  ngOnInit() {
    this.httpService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
        this.isLoading = false;
        console.log(posts);
        console.log(posts[0]);
        console.log(posts[0].Country_Desc);
      });
  
  }//ngOnInit method
  

}//AppComponent class