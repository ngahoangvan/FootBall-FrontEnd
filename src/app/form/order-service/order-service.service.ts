import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable' 


import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class OrderService {
  private baseUrl:string = "http://localhost:8080/api/order";
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private order:any;

  constructor(private _http:Http) { }

  getOrder(){

    return this._http.get(this.baseUrl + '', this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createDrink(order:any){
    return this._http.post(this.baseUrl+'',JSON.stringify(order),this.options).map(this.extractData)
    .catch(this.errorHandler);
  }
  
  private extractData(res: Response) {        
    return res.text() ? res.json() : {}; ;
  }
  errorHandler(error:Response){
    
    return Observable.throw(error||"SERVER ERROR")
  }


}
