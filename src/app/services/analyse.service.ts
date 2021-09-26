import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Analyse} from "../model/Analyse";
import {ANALYSE} from "../model/mock-analyse";
import {Observable} from "rxjs";
import {Result} from "../model/Result";

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  analyse: Analyse = ANALYSE;

  private apiUrl = '/api/v1/analyse'

  constructor(private http: HttpClient) {
  }

  getAnalyse(analyse: Analyse): Observable<Result> {
    return this.http.post<Result>(this.apiUrl, analyse);
  }
}
