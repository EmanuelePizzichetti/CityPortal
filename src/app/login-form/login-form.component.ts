import { Component, OnInit } from '@angular/core';
import { Utente } from '../models/utente';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public model: Utente = new Utente();

  constructor() { }

  ngOnInit(): void {
  }

  public login(){}

}
