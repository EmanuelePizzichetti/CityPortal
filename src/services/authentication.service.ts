import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utente } from '../app/models/utente';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  ruolo = '';
  currentUser = new Utente;
  userToken = '';

  constructor(private _http:HttpClient) { }

  login(data:Utente):Observable<any>
  {
    return this._http.post(environment.utentiUrl + '/login', data);
  }

  setCurrentUser(user:any) {
    this.currentUser.id_utente_pk = user.data.id_utente_pk;
    this.currentUser.nome_utente = user.data.nome_utente;
    this.currentUser.mail_utente = user.data.mail_utente;
    this.currentUser.id_citta_fk = user.data.id_citta_fk;
    this.ruolo = user.data.ruolo;
    this.userToken = user.token;
    localStorage.setItem('token', this.userToken);
    localStorage.setItem('userID', this.currentUser.id_utente_pk.toString());
    localStorage.setItem('ruolo', this.ruolo);
  }

  getToken(): String | null {
    return localStorage.getItem('token');
  }

  getUserID(): String | null {
    return localStorage.getItem('userID');
  }

  isAuthenticated(): boolean {
    if(this.getToken() == undefined || null) {
      return false;
    }
    return true;
  }
  
}
