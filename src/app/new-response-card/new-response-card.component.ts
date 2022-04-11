import { Component, Input, OnInit } from '@angular/core';
import { CittaService } from 'src/services/citta.service';
import { UtentiService } from 'src/services/utenti.service';
import { Risposta } from '../models/risposta';

@Component({
  selector: 'app-new-response-card',
  templateUrl: './new-response-card.component.html',
  styleUrls: ['./new-response-card.component.scss']
})
export class NewResponseCardComponent implements OnInit {

  constructor(private _utenti: UtentiService, private _citta: CittaService) { }

  @Input()
  public risposta!: Risposta;

  ngOnInit(): void {
    this._utenti.getUserById(this.risposta.id_utente_fk).subscribe((res)=>{
      this.risposta.nome_utente = res.data[0].nome_utente;
      this._citta.getCittaById(res.data[0].id_citta_fk).subscribe((res)=>{
        this.risposta.citta_utente = res.data[0].nome_citta.toUpperCase();
      })
    })
  }

}
