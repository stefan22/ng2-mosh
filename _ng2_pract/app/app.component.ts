import { Component } from '@angular/core';
import { HttpService } from './http.service';

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


})

export class AppComponent {
  dataLink = "dummy data";
  isActive = false;

  onClick(e) {
    console.log(e);
  }

  constructor(private httpService:HttpService) {
    this.httpService.getPosts()
      .subscribe(posts => console.log(posts));
  }
  

}