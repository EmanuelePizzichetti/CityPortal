import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { Post } from '../models/post';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent implements OnInit {

  public model: Post = new Post();

  constructor(private route: Router, private _ngZone: NgZone, private apiService: ApiserviceService) { }

  ngOnInit(): void {
  }

  public pubblica() {
    if(!(this.model.citta_post.replace(/\s/g, '').length == 0 || this.model.titolo_post.replace(/\s/g, '').length == 0 || this.model.contenuto_post.replace(/\s/g, '').length == 0)) {
      //TODO: risolvi problema dello spazio alla fine della citta
      this.apiService.getCittaByNome(this.model.citta_post).subscribe((res)=>{
        if(res.data[0] === undefined) {
          this.apiService.createCitta(this.model).subscribe((res)=>{
            console.log(res);
          })
        }
        this.apiService.getCittaByNome(this.model.citta_post).subscribe((res)=>{
          this.model.citta_post = res.data[0].id_citta_pk.toString();
          this.apiService.createPost(this.model).subscribe((res)=>{
            console.log(res);
            this.backHome();
          })  
        })
      })
    }
    //da aggiungere alert di spazi vuoti (in un altro metodo)
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
