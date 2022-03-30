import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-new-post-card',
  templateUrl: './new-post-card.component.html',
  styleUrls: ['./new-post-card.component.scss']
})
export class NewPostCardComponent implements OnInit{

  constructor(private apiService : ApiserviceService) { }

  @Input()
  public post!: Post;

  ngOnInit(): void {
    this.apiService.getCittaById(this.post.id_citta_fk).subscribe((res)=>{
      this.post.citta_post = res.data[0].nome_citta.toUpperCase();
    })
    this.apiService.getUserById(this.post.id_utente_fk).subscribe((res)=>{
      this.post.nome_utente = res.data[0].nome_utente;
      this.apiService.getCittaById(res.data[0].id_citta_fk).subscribe((res)=>{
        this.post.citta_utente = res.data[0].nome_citta.toUpperCase();
      })
    })
  }
   
  
}
