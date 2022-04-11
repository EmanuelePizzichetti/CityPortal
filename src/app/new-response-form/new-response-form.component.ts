import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Risposta } from '../models/risposta';
import { RisposteService } from 'src/services/risposte.service';
import { Post } from '../models/post';
import { PostService } from 'src/services/post.service';
import { CittaService } from 'src/services/citta.service';

@Component({
  selector: 'app-new-response-form',
  templateUrl: './new-response-form.component.html',
  styleUrls: ['./new-response-form.component.scss']
})
export class NewResponseFormComponent implements OnInit {

  public idPost!: String | null;
  public post!: Post;
  public model: Risposta = new Risposta();

  constructor(private actRoute: ActivatedRoute, private route: Router, private _ngZone: NgZone, private _risposta: RisposteService, private _post: PostService, private _citta: CittaService) { }

  ngOnInit(): void {
    this.idPost = this.actRoute.snapshot.paramMap.get('idPost');
    this.model.id_post_fk = this.idPost?+this.idPost:0;
    this._post.getPostById(this.model.id_post_fk).subscribe((res)=>{
      this.post = res.data[0];
      this._citta.getCittaById(this.post.id_citta_fk).subscribe((res)=>{
        this.post.citta_post = res.data[0].nome_citta.toUpperCase();
      })
    })
  }

  public pubblicaRisposta(){
    this.model.id_utente_fk = 1;
    if(!(this.model.contenuto_risposta.replace(/\s/g, '').length == 0)) {
      this._risposta.createRisposta(this.model).subscribe((res)=>{
        console.log(res);
        this.backHome();
      })
    }
    else {
      alert("Non puoi inserire solo spazi vuoti nei campi");
    }
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
