import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Risposta } from '../models/risposta';

@Component({
  selector: 'app-new-response-form',
  templateUrl: './new-response-form.component.html',
  styleUrls: ['./new-response-form.component.scss']
})
export class NewResponseFormComponent implements OnInit {

  public model: Risposta = new Risposta();

  constructor(private route: Router, private _ngZone: NgZone) { }

  ngOnInit(): void {
  }

  public pubblicaRisposta(){}

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
