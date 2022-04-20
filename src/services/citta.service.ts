import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../app/models/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CittaService {

  constructor(private _http:HttpClient) { }

  getCittaByNome(nome:String):Observable<any>
  {
    return this._http.get(environment.cittaUrl + '/nome/' + nome);
  }

  getCittaById(ID:Number):Observable<any>
  {
    return this._http.get(environment.cittaUrl + '/' + ID);
  }

  createCitta(nome:String):Observable<any>
  {
    return this._http.post(environment.cittaUrl, {nome_citta: nome});
  }

}
