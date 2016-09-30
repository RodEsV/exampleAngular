import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { 
	FormsModule,
	ReactiveFormsModule
	 } from '@angular/forms';


import { Pages } from './pages.component';

@NgModule({
  imports: [
  CommonModule, 
  NgaModule,
  FormsModule,
  ReactiveFormsModule, 
  routing,
  ],
  declarations: [Pages]
})
export class PagesModule {
}
