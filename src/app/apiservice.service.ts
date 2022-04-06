import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
  
  getAllPost():Observable<any>
  {
    return this._http.get(environment.postUrl);
  }
  
  /*
  getUserByNome(nome:String):Observable<any>
  {
    return this._http.get(this.utentiUrl + '/' + nome);
  }
  */

  getUserById(ID:Number):Observable<any>
  {
    return this._http.get(environment.utentiUrl + '/' + ID);
  }

  getCittaByNome(nome:String):Observable<any>
  {
    return this._http.get(environment.cittaUrl + '/nome/' + nome);
  }

  getCittaById(ID:Number):Observable<any>
  {
    return this._http.get(environment.cittaUrl + '/' + ID);
  }

  getRisposteByPost(ID:Number):Observable<any>
  {
    return this._http.get(environment.risposteUrl + '/' + ID);
  }
    
  createPost(data:Post):Observable<any>
  {
    return this._http.post(environment.postUrl, data);
  }

  createCitta(data:Post):Observable<any>
  {
    return this._http.post(environment.cittaUrl, data);
  }

  createRisposta(data: any):Observable<any>
  {
    return this._http.post(environment.risposteUrl, data)
  }
}
