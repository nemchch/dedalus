import {Component, OnInit} from '@angular/core';
import {ANALYSE} from "../model/mock-analyse";
import {Analyse} from "../model/Analyse";
import {AnalyseService} from "../services/analyse.service";
import {Result} from "../model/Result";
import {RESULT} from "../model/mock-result";

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

  text: string = ''
  vowels: boolean | undefined
  tableHidden: boolean = true

  analyse: Analyse = ANALYSE
  result: Result = RESULT

  constructor(private analyseService: AnalyseService) {
  }

  ngOnInit(): void {
  }

  getAnalyse(): void {
    const newAnalyse: Analyse = {
      vowels: this.vowels,
      text: this.text
    }
    this.analyseService.getAnalyse(newAnalyse).subscribe((data: Result) => {
      this.result = {
        list: data.list
      }
      this.tableHidden = false
    });
  }
}
