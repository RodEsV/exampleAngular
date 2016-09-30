import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
	moduleId: module.id,
	selector: 'practic-component',
	template: `

	<div [formGroup]="moduleForm">
		<div class="form-group" >
	      <label >Nombre del módulo</label>
	      <input type="text" class="form-control" placeholder="Nombre" ngControl="nombre" formControlName="nombre">
	    </div>

	    <div class="form-group">
	      <label>Descripción del módulo</label>
	      <textarea type="text" class="form-control" placeholder="descripción" ngControl="descripcion" formControlName="descripcion" ></textarea>  
	    </div>
	</div>
	`
})
export class PracticComponent{
	@Input('group')
	public moduleForm: FormGroup;
	
}
