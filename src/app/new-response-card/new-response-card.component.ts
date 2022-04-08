import { Component, Input, OnInit } from '@angular/core';
import { Risposta } from '../models/risposta';

@Component({
  selector: 'app-new-response-card',
  templateUrl: './new-response-card.component.html',
  styleUrls: ['./new-response-card.component.scss']
})
export class NewResponseCardComponent implements OnInit {

  constructor() { }

  @Input()
  public risposta!: Risposta;

  ngOnInit(): void {
  }

}
