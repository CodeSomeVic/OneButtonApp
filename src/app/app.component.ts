import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OneButtonApp';
  displayText = 'This should say something interesting';
  buttonStatus = true;

  textSelector = (buttonVal) => {
    if(buttonVal === true){
      this.displayText = 'Inertia is a property of matter';
      this.buttonStatus = false;
    }  else if(buttonVal === false) {
      this.displayText = 'This should say something interesting';
      this.buttonStatus = true;
    }
  }

}
