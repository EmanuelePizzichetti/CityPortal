import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public posts: Post[] = [];
  isLogged: boolean = false;
  constructor(private route:Router, private _post: PostService) { }

  ngOnInit(): void {
    this._post.getAllPost().subscribe((res)=>{
      this.posts = res.data;
      this.loadView("notLoggedUser");
    })
  }

  public openNewPostForm(){
    this.route.navigate(['/app-new-post-form']);
  }

  public loadView(tipoUtente : String){
   
      if(tipoUtente==="notLoggedUser"){
        this.isLogged=false;
       
      }else if(tipoUtente==="loggedUser"){
        this.isLogged=true;
       }
    
    
  }

  public openRegistrationForm(){
    this.route.navigate(['/app-registration-form']);
  }

  public openLoginForm(){
    this.route.navigate(['/app-login-form']);
  }
}
