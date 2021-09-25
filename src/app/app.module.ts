import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AlertModule} from "ngx-bootstrap/alert";
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AnalyseComponent} from './analyse/analyse.component';
import {HttpClientModule} from "@angular/common/http";
import {ButtonComponent} from './button/button.component';
import {AnalyseService} from "./services/analyse.service";
import {FormsModule} from "@angular/forms";
import { AnalyseEngineComponent } from './analyse-engine/analyse-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyseComponent,
    ButtonComponent,
    AnalyseEngineComponent
  ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        AlertModule.forRoot(),
        HttpClientModule,
        FormsModule,
    ],
  providers: [ButtonComponent,
    AnalyseComponent, AnalyseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
