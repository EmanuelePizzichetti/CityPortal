import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { PostService } from 'src/services/post.service';
import { UtentiService } from 'src/services/utenti.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public posts: Post[] = [];
  filtroCitta: String = '';
  isLogged: boolean = false;
  public nome_utente = '';
  constructor(private route:Router, private _post: PostService, private _auth: AuthenticationService, private _utenti: UtentiService) { }

  ngOnInit(): void {
    if(this._auth.getUserID() != null || undefined) {
      const userID = this._auth.getUserID();
      this.isLogged = true;
      this._utenti.getUserById(userID?+userID:0).subscribe((res)=>{
        this.nome_utente = res.data[0].nome_utente;
      })
    }
    this._post.getAllPost().subscribe((res)=>{
      this.posts = res.data;
    })
  }

  public openNewPostForm(){
    this.route.navigate(['/app-new-post-form']);
  }

  public openRegistrationForm(){
    this.route.navigate(['/app-registration-form']);
  }

  public openLoginForm(){
    this.route.navigate(['/app-login-form']);
  }

  public logout(){
    localStorage.clear();
    window.location.reload();
  }

  public filterON(){
    this.filtroCitta = this.filtroCitta.trim();
    this.filtroCitta = this.filtroCitta.replace(/\s\s+/g, ' ');
    this.filtroCitta = this.filtroCitta.toLowerCase();
    
    if(this.filtroCitta == ''){
      this.ngOnInit();
    } else {
      this._post.getPostByNomeCitta(this.filtroCitta).subscribe((res) => {
        this.posts = res.data;
        if(this.posts.length == 0){
          alert('Non ci sono post relativi a questa città');
        }
    })
  }   
}
}
