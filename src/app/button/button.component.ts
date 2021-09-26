import {Component, OnInit} from '@angular/core';
import {AnalyseComponent} from "../analyse/analyse.component";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private analyseComponent: AnalyseComponent) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.analyseComponent.getAnalyse()
  }
}
