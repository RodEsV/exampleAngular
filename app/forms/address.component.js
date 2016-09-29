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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AddressComponent = (function () {
    function AddressComponent() {
    }
    __decorate([
        core_1.Input('group'), 
        __metadata('design:type', forms_1.FormGroup)
    ], AddressComponent.prototype, "addressForm", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'address-component',
            template: "\n  <div [formGroup]=\"addressForm\">\n    <div class=\"\">\n      <div class=\"form-group\" >\n        <label>\n          Direcci\u00F3n 1\n        </label>\n        <br>\n        <input type=\"text\" class=\"form-group\" ngControl=\"lineOne\" placeholder=\"calle principal 1 2 3\" formControlName=\"lineOne\">\n        <br>\n        <label>\n        Direcci\u00F3n 2 \n        </label>\n        <br>\n        <input type=\"text\" class=\"form-group\" ngControl=\"lineTwo\" placeholder=\"Apartamento\" formControlName=\"lineTwo\" >\n        <br>\n        \n        <label>\n        C\u00F3digo postal\n        </label>\n        <br>\n        <input type=\"text\" class=\"form-group\" ngControl=\"zipCode\" placeholder=\"902101\"  formControlName=\"zipCode\">\n        <br>\n        \n        <label>\n        Ciudad\n        </label>\n        <br>\n        <input type=\"text\" class=\"form-group\" ngControl=\"city\" placeholder=\"Boston\" formControlName=\"city\"> \n        <br>\n        \n        <label>\n        Estado\n        </label>\n        <br>\n        <input type=\"text\" class=\"form-group\" ngControl=\"state\" placeholder=\"Massashusetts\" formControlName=\"state\">\n        <br>\n      </div>\n    </div>\n  </div>\n  ",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map