import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AnalyseComponent} from './analyse/analyse.component';
import {HttpClientModule} from "@angular/common/http";
import {ButtonComponent} from './button/button.component';
import {AnalyseService} from "./services/analyse.service";
import {FormsModule} from "@angular/forms";
import {AnalyseEngineComponent} from './analyse-engine/analyse-engine.component';
import {TooltipModule} from "ngx-bootstrap/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    AnalyseComponent,
    ButtonComponent,
    AnalyseEngineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TooltipModule
  ],
  providers: [ButtonComponent,
    AnalyseComponent, AnalyseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
