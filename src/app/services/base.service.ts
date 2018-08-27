import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export class BaseService {
   public http: Http;
   public document_name:string;
   public base_url:string = '';
   constructor( http:Http, document_name:string ){
       this.http = http;
       this.document_name = document_name;
       this.base_url =`http://127.0.0.1:3000/${document_name}`;
   }
   
   list(){
       return this.request('get', this.base_url);
   }
   get(_id:string){
       return this.request('get', `${this.base_url}/${_id}`);
   }
   save(_object:any){
       return this.request('post', this.base_url, _object);
   }
   update(_id:string, _object: any){
       return this.request('put', `${this.base_url}/${_id}`, _object);
   }
   delete(_id:string){
       return this.request('delete', `${this.base_url}/${_id}`);
   }

   request(method:string, url:string, _object?:any){
       let requestTrigger:any;
       let request:Observable<any> = new Observable<any>( observable =>{
           requestTrigger = observable
       })
       let httpRequest;
       if(_object)
           httpRequest = this.http[method]( url, _object)
       else
           httpRequest = this.http[method]( url)

       httpRequest.pipe(map((res:any)=> res.json() )).subscribe(
           (resopnse:any)=>{
               requestTrigger.next(resopnse);
               requestTrigger.complete()
           }, 
           (error:any)=>{
               switch(error.status){
                   case 401:
                     // mensajes de error
                   break;
                   default:
                   break;
               }
           })
       return request;
   }
}