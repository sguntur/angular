import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  data = {
    title : '<h1> Angular Demo </h1> <script> alert("attack")</script>'
  };

  onLogoClicked(){
    alert('Hello World!');
  }

  onKeyUp(newTitle:string){
    this.data.title= newTitle;
  }
}


