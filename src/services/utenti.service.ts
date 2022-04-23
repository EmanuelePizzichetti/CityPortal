import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utente } from '../app/models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private _http:HttpClient) { }

  getUserById(ID:Number):Observable<any>
  {
    return this._http.get(environment.utentiUrl + '/' + ID);
  }

  checkIfAlreadyExist(data:Utente):Observable<any>
  {
    return this._http.get(environment.utentiUrl + '/check/' + data.nome_utente + '/' + data.mail_utente)
  }
  
  register(data:Utente):Observable<any>
  {
    return this._http.post(environment.utentiUrl + '/register', data);
  }

  verifica(ID:Number):Observable<any>
  {
    return this._http.post(environment.utentiUrl + '/verifica', { ID: ID, ruolo: localStorage.getItem('ruolo')});
  }

}