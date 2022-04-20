import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  confirmPassword: boolean = false;

  constructor(private route: Router, private _citta: CittaService, private _utenti: UtentiService) { }

  ngOnInit(): void {
  }

  public registrazione(){
    if(!(this.model.nome_utente.replace(/\s/g, '').length == 0 || this.model.citta_utente.replace(/\s/g, '').length == 0 || this.model.mail_utente.replace(/\s/g, '').length == 0 || this.model.password_utente.replace(/\s/g, '').length == 0)) {
      this.sistemaStringa();
    this._citta.getCittaByNome(this.model.citta_utente).subscribe((res)=>{
      if(res.data[0] === undefined) {
        this._citta.createCitta(this.model.citta_utente).subscribe((res)=>{
          console.log(res);
          this.model.id_citta_fk = res.data.insertId.toString();
          this._utenti.register(this.model).subscribe((res)=>{
          })
        })
      }
      else {
        this._citta.getCittaByNome(this.model.citta_utente).subscribe((res)=>{
          this.model.id_citta_fk = res.data[0].id_citta_pk.toString();
          this._utenti.register(this.model).subscribe((res)=>{
          })
        })
      }
    })
    }
    else {
      alert("Non puoi inserire solo spazi vuoti nei campi");
    }
  }

  sistemaStringa() {
    this.model.citta_utente = this.model.citta_utente.trim();
    this.model.citta_utente = this.model.citta_utente.replace(/\s\s+/g, ' ');
    this.model.citta_utente = this.model.citta_utente.toLowerCase();
  }

}
