import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-button',
  templateUrl: './new-post-button.component.html',
  styleUrls: ['./new-post-button.component.scss']
})
export class NewPostButtonComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  openNewPostForm(){
    this.route.navigate(['/app-new-post-form']);
  }

}
