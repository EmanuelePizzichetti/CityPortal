import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CittaService } from 'src/services/citta.service';
import { UtentiService } from 'src/services/utenti.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-new-post-card',
  templateUrl: './new-post-card.component.html',
  styleUrls: ['./new-post-card.component.scss']
})
export class NewPostCardComponent implements OnInit{

  constructor(private route: Router, private _utenti: UtentiService, private _citta: CittaService) { }

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
  }

  public openNewResponseForm(){
    this.route.navigate(['/app-new-response-form']);
  }

  
}
