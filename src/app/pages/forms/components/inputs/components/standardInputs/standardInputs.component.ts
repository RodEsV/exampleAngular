import {Component, OnInit} from '@angular/core';
import { 
	FormBuilder,
	AbstractControl,
	FormGroup, 
	Validators,
	FormControl,
	FormArray
} from '@angular/forms';

import { FormService } from '../services/form.service';


@Component({
  selector: 'standard-inputs',
  template: require('./standardInputs.html'),
  styles: [`
  ul {
  	list-style-type: none;
  }
  `],
  providers: [FormService]
})
export class StandardInputs implements OnInit {

	practicComponentForm: FormGroup;

  
	errorMessage:string;
  constructor( private fb: FormBuilder, private formService: FormService) {

  }

  sendPracticComponentForm(){
  	//this.formService.sendPracticComponentForm();
  }

  ngOnInit(){
		this.practicComponentForm =  this.fb.group({
			nombre_practico: [""],
			modulos_attributes: this.fb.array([])
		});  	
  }

  initModules(){
  	return this.fb.group({
  		nombre: [""],
  		//hours
  		descripcion: []
  	});
  }

  addModule(){
  	const control = <FormArray>this.practicComponentForm.controls['modulos_attributes'];
  	control.push(this.initModules());
  }

  removeModule(i: number){
  	const control = <FormArray>this.practicComponentForm.controls['modulos_attributes'];
  	control.removeAt(i);
  }

  sendInfo(){
  	let componente_practico = this.practicComponentForm.value;
  	this.formService.sendPracticComponentForm(JSON.stringify({componente_practico}))
  	.subscribe(error => this.errorMessage = <any>error);
  }
}
