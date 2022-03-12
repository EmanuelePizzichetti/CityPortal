import { Component, OnInit } from '@angular/core';
import { NewPostCardComponent } from '../new-post-card/new-post-card.component';
import { Router } from '@angular/router';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-pubblica-button',
  templateUrl: './pubblica-button.component.html',
  styleUrls: ['./pubblica-button.component.scss']
})
export class PubblicaButtonComponent implements OnInit {

  constructor(private route:Router, private service:ApiserviceService) { }

  ngOnInit(): void {
  }

  pubblicaPost(){
    let nuovoPost=this.creaPost();
    this.pubblicaBackend(nuovoPost);
    this.pubblicaFrontend(nuovoPost);
  }

  creaPost(){
    let cittaPost = (document.querySelector('#city-input') as HTMLInputElement).value;
    let titoloPost = (document.querySelector('#title-input') as HTMLInputElement).value;
    let contenutoPost = (document.querySelector('#post-input') as HTMLInputElement).value;
    let nomeUtente='filippo02';
    let cittaUtente='roma';
    let nuovoPost=new NewPostCardComponent(nomeUtente,cittaUtente,titoloPost,contenutoPost,cittaPost);
    return nuovoPost;
  }

  pubblicaBackend(nuovoPost : NewPostCardComponent){
    this.service.createData(nuovoPost).subscribe((res)=>{
      console.log(res,'res==>');
    })
  }

  pubblicaFrontend(nuovoPost : NewPostCardComponent){
    
    this.route.navigate(['']);
   
  }

}

