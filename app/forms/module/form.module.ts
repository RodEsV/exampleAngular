import { NgModule } from '@angular/core';
import { MyFormComponent } from '../form.component';
import { 
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AddressComponent } from '../address.component' ;
import { CommonModule } from '@angular/common';

        
@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
    ],
    declarations: [
      MyFormComponent,
      AddressComponent  
    ],
    exports: [ MyFormComponent ]
})
export class MyFormModule{
  
}