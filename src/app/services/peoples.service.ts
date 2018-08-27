import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { of } from 'rxjs'
import { People } from '../models/class/people';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService extends BaseService {

  constructor(public http: Http) {
    super(http, "peoples")
   }

   getPeoples(): Observable<any[]> {

    return this.list().pipe(map(
        response => {
          if (response)
            return response["peoples"]
        }
      ))
   }

   getPeopleById(code: string): Observable<any> {
    return this.list().pipe(map(
    response => {
      if (response)
        return response["peoples"].filter(data=>{
            return data.code == code
        })
    }
  ))
   }

   

  sendPeople(body:People): Observable<any>{
    var stringConection = `peoples`;
    return this.request("post", stringConection, body).pipe(map(response => {
      if (response && response["respuesta"]) {
        return response;
      }
    }))
  }

}
