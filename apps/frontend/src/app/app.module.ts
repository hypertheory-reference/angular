import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNgrxModule } from './state/app-ngrx.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppNgrxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
