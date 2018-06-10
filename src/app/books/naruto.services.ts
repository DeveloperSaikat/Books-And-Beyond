import {Injectable} from '@angular/core';
import { IStudents } from './students';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {Headers,RequestOptions} from '@angular/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()


export class NarutoServices{
    private narutourl="/api/books";
    constructor(private _http:HttpClient){

    }
    
    getstudents(): Observable<IStudents[]>{
        return this._http.get<IStudents[]>(this.narutourl)
        //.do(data=>console.log("All" +JSON.stringify(data)))
        .catch(this.handleError);
    }
   
    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
