import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';


@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AppModule {}