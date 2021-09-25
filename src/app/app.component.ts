import {Component} from '@angular/core';
import {ButtonComponent} from "./button/button.component";
import {AnalyseComponent} from "./analyse/analyse.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dedalus';
  analyseComponent: AnalyseComponent
  buttonComponent: ButtonComponent

  constructor(buttonComponent: ButtonComponent, analyseComponent: AnalyseComponent) {
    this.analyseComponent = analyseComponent
    this.buttonComponent = buttonComponent
  }
}
