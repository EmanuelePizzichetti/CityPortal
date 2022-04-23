import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { CittaService } from 'src/services/citta.service';
import { UtentiService } from 'src/services/utenti.service';
import { Utente } from '../models/utente';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  public model: Utente = new Utente();
  public mostra = false;

  constructor(private route: Router, private _citta: CittaService, private _utenti: UtentiService, private _auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  public registrazione(){
    if(!(this.model.nome_utente.replace(/\s/g, '').length == 0 || this.model.citta_utente.replace(/\s/g, '').length == 0 || this.model.mail_utente.replace(/\s/g, '').length == 0 || this.model.password_utente.replace(/\s/g, '').length == 0)) {
      if(this.checkPassword()) {
          this.sistemaStringa();
          this._utenti.checkIfAlreadyExist(this.model).subscribe((res)=>{
            if(Object.keys(res.data).length == 0) {
              this._citta.getCittaByNome(this.model.citta_utente).subscribe((res)=>{
                if(res.data[0] === undefined) {
                  this._citta.createCitta(this.model.citta_utente).subscribe((res)=>{
                    console.log(res);
                    this.model.id_citta_fk = res.data.insertId.toString();
                    this._utenti.register(this.model).subscribe((res)=>{
                      this._auth.login(this.model).subscribe((res)=>{
                        console.log(res);
                        this._auth.setCurrentUser(res);
                        this.backHome();
                      })
                    })
                  })
                }
                else {
                  this._citta.getCittaByNome(this.model.citta_utente).subscribe((res)=>{
                    this.model.id_citta_fk = res.data[0].id_citta_pk.toString();
                    this._utenti.register(this.model).subscribe((res)=>{
                      this._auth.login(this.model).subscribe((res)=>{
                        this._auth.setCurrentUser(res);
                        this.backHome();
                      })
                    })
                  })
                }
              })
            }
            else {
              alert("Esiste già un utente con queste credenziali");
            }
          })
      }
      else {
        alert("La password deve contenere sia lettere che numeri");
      }
    }
    else {
      alert("Non puoi inserire solo spazi vuoti nei campi");
    }
  }

  sistemaStringa() {
    this.model.nome_utente = this.model.nome_utente.replace(/\s+/g, '');
    this.model.citta_utente = this.model.citta_utente.trim();
    this.model.citta_utente = this.model.citta_utente.replace(/\s\s+/g, ' ');
    this.model.citta_utente = this.model.citta_utente.toLowerCase();
    this.model.mail_utente = this.model.mail_utente.trim();
    this.model.mail_utente = this.model.mail_utente.toLowerCase();
  }

  checkPassword(): boolean {
    if(/\d/.test(this.model.password_utente) && /[a-zA-Z]/.test(this.model.password_utente)) {
      return true;
    }
    return false;
  }

  mostraPassword() {
    this.mostra = !this.mostra;
  }

  backHome() {
    this.route.navigate([''])
      .then(() => {
      window.location.reload();
    });
  }

}
