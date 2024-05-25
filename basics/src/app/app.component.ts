import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  id = 125;
  name = 'heshan';
  imgURL = 'https://picsum.photos/id/237/500/500';
  currentDate = new Date();
  blueClass = false;
  fontSize = 16;
  courses = ['maths', 'physics', 'chem'];
  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = `https://picsum.photos/id/${
      (e.target as HTMLInputElement).value
    }/500/500`;
  }

  logImg(event: string) {
    console.log('event', event);
  }
}
