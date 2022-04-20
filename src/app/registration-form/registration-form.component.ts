import { Component, OnInit } from '@angular/core';
import { Utente } from '../models/utente';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  public model: Utente = new Utente();
  confirmPassword: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public registrazione(){}

}
