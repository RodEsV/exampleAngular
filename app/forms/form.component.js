"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var MyFormComponent = (function () {
    function MyFormComponent(fb) {
        this.fb = fb;
    }
    MyFormComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ["", forms_1.Validators.required],
            lastName: ["", forms_1.Validators.minLength(3)],
            city: [""],
            telephone: this.fb.group({
                countryCallingCode: ["", forms_1.Validators.pattern("[0-9]{6}")],
                cityCallingCode: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
                type: [""]
            }),
            addresses: this.fb.array([])
        });
    };
    MyFormComponent.prototype.initAddress = function () {
        return this.fb.group({
            lineOne: [""],
            lineTwo: [""],
            zipCode: [""],
            city: [""],
            state: [""]
        });
    };
    MyFormComponent.prototype.addAddress = function () {
        var control = this.form.controls['addresses'];
        control.push(this.initAddress());
    };
    MyFormComponent.prototype.removeAddress = function (i) {
        var control = this.form.controls['addresses'];
        control.removeAt(i);
    };
    MyFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'form-component',
            templateUrl: 'form.html',
            styleUrls: ['form.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], MyFormComponent);
    return MyFormComponent;
}());
exports.MyFormComponent = MyFormComponent;
//# sourceMappingURL=form.component.js.map