import { Component, OnInit } from '@angular/core';
import { NewPostCardComponent } from '../new-post-card/new-post-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pubblica-button',
  templateUrl: './pubblica-button.component.html',
  styleUrls: ['./pubblica-button.component.scss']
})
export class PubblicaButtonComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  pubblicaPost(){
    let nuovoPost=this.creaPost();
    this.pubblicaFrontend(nuovoPost);
    
  }

  creaPost(){
    let nomeUtente='filippo';
    let cittaUtente='Roma';
    let titoloPost='Metro B chiusa';
    let contenutoPost='Attenzione la metro B è attualmente chiusa per manutenzione straordinaria';
    let cittaPost='Roma';
    let nuovoPost=new NewPostCardComponent(nomeUtente,cittaUtente,titoloPost,contenutoPost,cittaPost);
    return nuovoPost;
  }

  pubblicaFrontend(nuovoPost : NewPostCardComponent){
    
    this.route.navigate([]);
   
  }

}

