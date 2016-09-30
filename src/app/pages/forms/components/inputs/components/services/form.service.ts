import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  Response,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FormService{
  constructor(private http: Http){
  }

  private url:string = "http://etsi-cloned-arka160.c9users.io/test";

  private extractData( res: Response ){
   	let body = res.json();
    return body || {};
  }


  sendPracticComponentForm(body:string){
  	
  	let headers = new Headers({'Content-Type': 'application/json'});;
    let options = new RequestOptions({headers: headers});

    console.log(body);

	return this.http.post(this.url,body,options)
	.map(this.extractData)
  }

  private handleError( error: any )
  {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Observable.throw(errMsg);
  }


}
