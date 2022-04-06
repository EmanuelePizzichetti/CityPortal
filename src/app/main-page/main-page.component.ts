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
  constructor(private route:Router, private _post: PostService) { }

  ngOnInit(): void {
    this._post.getAllPost().subscribe((res)=>{
      this.posts = res.data;
    })
  }

  public openNewPostForm(){
    this.route.navigate(['/app-new-post-form']);
  }
}
