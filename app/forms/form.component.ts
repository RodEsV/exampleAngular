import { 
  FormBuilder,
  AbstractControl,
  FormGroup, 
  FormControl,
  FormArray,
  Validators
} from '@angular/forms';

import { Component, OnInit }  from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'form-component',
  templateUrl: 'form.html',
  styleUrls: ['form.css']
})
export class MyFormComponent implements OnInit{
  constructor(private fb: FormBuilder){}
  form: FormGroup;
  
  
  ngOnInit(){
    this.form = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.minLength(3)],
      city: [""],
      telephone: this.fb.group({
        countryCallingCode: ["", Validators.pattern("[0-9]{6}")],
        cityCallingCode: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
        type: [""]
      }),
      addresses: this.fb.array([])
    });
  }
  
  initAddress(){
    return this.fb.group({
      lineOne: [""],
      lineTwo: [""],
      zipCode: [""],
      city: [""],
      state: [""]
    });
  }
  
  addAddress(){
    const control = <FormArray>this.form.controls['addresses'];
    control.push(this.initAddress());
  }
  
  removeAddress(i: number){
    const control = <FormArray>this.form.controls['addresses'];
    control.removeAt(i);
  }

}