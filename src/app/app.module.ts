import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EcoMetricsComponent } from './components/eco-metrics/eco-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    CommingSoonComponent,
    AboutUsComponent,
    EcoMetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
