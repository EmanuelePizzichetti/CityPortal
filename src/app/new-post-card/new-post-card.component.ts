import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CittaService } from 'src/services/citta.service';
import { RisposteService } from 'src/services/risposte.service';
import { UtentiService } from 'src/services/utenti.service';
import { Post } from '../models/post';
import { Risposta } from '../models/risposta';

@Component({
  selector: 'app-new-post-card',
  templateUrl: './new-post-card.component.html',
  styleUrls: ['./new-post-card.component.scss']
})
export class NewPostCardComponent implements OnInit{

  public mostraRisposte = false;
  public risposte: Risposta[] = [];

  constructor(private route: Router, private _utenti: UtentiService, private _citta: CittaService, private _risposte: RisposteService) { }

  @Input()
  public post!: Post;

  ngOnInit(): void {
    this._citta.getCittaById(this.post.id_citta_fk).subscribe((res)=>{
      this.post.citta_post = res.data[0].nome_citta.toUpperCase();
    })
    this._utenti.getUserById(this.post.id_utente_fk).subscribe((res)=>{
      this.post.nome_utente = res.data[0].nome_utente;
      this._citta.getCittaById(res.data[0].id_citta_fk).subscribe((res)=>{
        this.post.citta_utente = res.data[0].nome_citta.toUpperCase();
      })
    })
    this._risposte.getRisposteByPost(this.post.id_post_pk).subscribe((res)=>{
      this.risposte = res.data;
    })
  }

  public openNewResponseForm(){
    this.route.navigate(['/app-new-response-form/' + this.post.id_post_pk]);
  }

  
}
