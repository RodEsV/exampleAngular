import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MyFormModule } from './forms/module/form.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ 
  BrowserModule,
  MyFormModule,
  CommonModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }