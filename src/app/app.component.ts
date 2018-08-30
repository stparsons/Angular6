import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-World';
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(newValue) {
    console.log("CLICKED - onFavoriteChange", newValue);
  }
}
