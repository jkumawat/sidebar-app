import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  customEvent(data: any) {
    console.log('custom event fired!');
    console.log(data);
  }
}
