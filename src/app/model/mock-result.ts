import {Result} from './Result'
import {ResultItem} from "./ResultItem";

let result: Array<ResultItem> = [
  {
    letter: "A",
    times: 12
  },
  {
    letter: "E",
    times: 25
  },
  {
    letter: "I",
    times: 13
  },
  {
    letter: "O",
    times: 10
  },
  {
    letter: "U",
    times: 5
  }
]

export const RESULT: Result = {
  list: result
}
