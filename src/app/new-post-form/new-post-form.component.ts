import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { Post } from '../models/post';
import { Router } from '@angular/router';
import { CittaService } from 'src/services/citta.service';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit {

  public model: Post = new Post();

  constructor(private route: Router, private _ngZone: NgZone, private _citta: CittaService, private _post: PostService) { }

  ngOnInit(): void {
  }

  public pubblica() {
    if(!(this.model.citta_post.replace(/\s/g, '').length == 0 || this.model.titolo_post.replace(/\s/g, '').length == 0 || this.model.contenuto_post.replace(/\s/g, '').length == 0)) {
      this.sistemaStringa();
      this._citta.getCittaByNome(this.model.citta_post).subscribe((res)=>{
        if(res.data[0] === undefined) {
          this._citta.createCitta(this.model.citta_post).subscribe((res)=>{
            console.log(res);
            this.model.citta_post = res.data.insertId.toString();
            this._post.createPost(this.model).subscribe((res)=>{
              console.log(res);
              this.backHome();
            })
          })
        }
        else {
          this._citta.getCittaByNome(this.model.citta_post).subscribe((res)=>{
            this.model.citta_post = res.data[0].id_citta_pk.toString();
            this._post.createPost(this.model).subscribe((res)=>{
              console.log(res);
              this.backHome();
            })  
          })
        }
      })
    }
    else {
      alert("Non puoi inserire solo spazi vuoti nei campi");
    }
  }

  sistemaStringa() {
    this.model.citta_post = this.model.citta_post.trim();
    this.model.citta_post = this.model.citta_post.replace(/\s\s+/g, ' ');
    this.model.citta_post = this.model.citta_post.toLowerCase();
  }
  
  backHome() {
    this.route.navigate([''])
      .then(() => {
      window.location.reload();
    });
  }

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
