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
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

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
    TooltipModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ButtonComponent,
    AnalyseComponent, AnalyseService, AnalyseEngineComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
