import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable' 
import {  RouteInfo } from '../domain';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class FoodService {

  private baseUrl:string = "http://localhost:8080/api/food";
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private _http:Http) { }

  getFood(){

    return this._http.get(this.baseUrl + '', this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getOneFood(idFood:Number){

    return this._http.get(this.baseUrl + '/'+ idFood , this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getCount(){
    return this._http.get(this.baseUrl + '/count', this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteFood(idFood:Number){
    return this._http.delete(this.baseUrl + '/delete/'+idFood,this.options).map(this.extractData).catch(this.errorHandler);
  }

  updateFood(food:any){
    return this._http.put(this.baseUrl + '/update',food,this.options).map(this.extractData).catch(this.errorHandler);
  }

  createFood(food:any){
    // return this._http.post(this.baseUrl + '/new',JSON.stringify(Food),this.options).map(response:Response).catch(this.errorHandler);
    return this._http.post(this.baseUrl+'/new',JSON.stringify(food),this.options).map(this.extractData)
    .catch(this.errorHandler);
  }

  private extractData(res: Response) {        
    return res.text() ? res.json() : {}; ;
  }
  

  errorHandler(error:Response){
    
    return Observable.throw(error||"SERVER ERROR")
  }
}
