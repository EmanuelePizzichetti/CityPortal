import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewPostCardComponent } from './new-post-card/new-post-card.component';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  postUrl = 'http://localhost:3000/post';
  userUrl = 'http://localhost:3000/utenti';
   
  
  getAllData():Observable<any>
  {
    return this._http.get(this.postUrl);
  }
  
  getByNome(nome:string):Observable<any>
  {
    return this._http.get(this.userUrl + '/' + nome);
  }
    
  createData(data:NewPostCardComponent):Observable<any>
  {
    return this._http.post(this.postUrl, data);
  }
}
