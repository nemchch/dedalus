import {Component, OnInit} from '@angular/core';
import {Result} from "../model/Result";
import {Analyse} from "../model/Analyse";
import {ResultItem} from "../model/ResultItem";

@Component({
  selector: 'app-analyse-engine',
  templateUrl: './analyse-engine.component.html',
  styleUrls: ['./analyse-engine.component.css']
})
export class AnalyseEngineComponent implements OnInit {

  ALL_VOWELS: string[] = ['A', 'E', 'I', 'O', 'U'];

  result: Result = new class implements Result {
    list = [];
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  getAnalyse(analyse: Analyse): Result {
    let input = analyse.text.toUpperCase();
    let analyseAllLetters = this.getAnalyseLetters(input, analyse.vowels);

    this.fillAnalyseResult(analyseAllLetters)

    return this.result
  }

  getAnalyseLetters(input: string, vowels: boolean | undefined): Map<string, number> {
    let result = new Map<string, number>()
    let array = input.toUpperCase().split('')
      .filter(char => /[a-zA-Z]/.test(char));
    for (let i = 0; i < array.length; ++i) {
      if ((vowels != undefined) && (vowels) && (!this.ALL_VOWELS.includes(array[i], 0))) {
        continue
      }
      if ((vowels != undefined) && (!vowels) && (this.ALL_VOWELS.includes(array[i], 0))) {
        continue
      }
      if (result.has(array[i])) {
        let count = result.get(array[i])
        // @ts-ignore
        result.set(array[i], count + 1)
      } else {
        result.set(array[i], 1)
      }
    }
    return result
  }

  fillAnalyseResult(analyseMap: Map<string, number>) {
    analyseMap.forEach(((value, key) => {
      let resultItem: ResultItem = {
        letter: key, times: value
      }
      this.result.list.push(resultItem)
    }))
  }
}
