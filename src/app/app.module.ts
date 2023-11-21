import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FirstViewPageComponent } from './wireframes/pages/first-view-page/first-view-page.component';
import { SecondViewPageComponent } from './wireframes/pages/second-view-page/second-view-page.component';
import { ThirdViewPageComponent } from './wireframes/pages/third-view-page/third-view-page.component';
import { WireframesModule } from './wireframes/wireframes.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstViewPageComponent,
    SecondViewPageComponent,
    ThirdViewPageComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, WireframesModule, ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
