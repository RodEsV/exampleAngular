import { 
  Component,
  Input
} from '@angular/core';

import { FormGroup } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'address-component',
  template: `
  <div [formGroup]="addressForm">
    <div class="">
      <div class="form-group" >
        <label>
          Dirección 1
        </label>
        <br>
        <input type="text" class="form-group" ngControl="lineOne" placeholder="calle principal 1 2 3" formControlName="lineOne">
        <br>
        <label>
        Dirección 2 
        </label>
        <br>
        <input type="text" class="form-group" ngControl="lineTwo" placeholder="Apartamento" formControlName="lineTwo" >
        <br>
        
        <label>
        Código postal
        </label>
        <br>
        <input type="text" class="form-group" ngControl="zipCode" placeholder="902101"  formControlName="zipCode">
        <br>
        
        <label>
        Ciudad
        </label>
        <br>
        <input type="text" class="form-group" ngControl="city" placeholder="Boston" formControlName="city"> 
        <br>
        
        <label>
        Estado
        </label>
        <br>
        <input type="text" class="form-group" ngControl="state" placeholder="Massashusetts" formControlName="state">
        <br>
      </div>
    </div>
  </div>
  `,
  styles: [``]
})
export class AddressComponent{
  @Input('group')
  public addressForm: FormGroup;
}