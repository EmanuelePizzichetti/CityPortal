import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post-card',
  templateUrl: './new-post-card.component.html',
  styleUrls: ['./new-post-card.component.scss']
})
export class NewPostCardComponent implements OnInit {

   nomeUtente: String;
   cittaUtente: String;
   titoloPost: String;
   contenutoPost: String;
   cittaPost: String;


  constructor(nomeUtente: String, cittaUtente: String, titoloPost: String, contenutoPost: String, cittaPost: String) { 
    this.nomeUtente=nomeUtente;
    this.cittaUtente=cittaUtente;
    this.titoloPost=titoloPost;
    this.contenutoPost= contenutoPost;
    this.cittaPost=cittaPost;
  }

  ngOnInit(): void {
  }


}
