import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { Utente } from '../models/utente';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public model: Utente = new Utente();

  constructor(private route: Router, private _auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  public login() {
    if(!(this.model.nome_utente.replace(/\s/g, '').length == 0)) {
      this._auth.login(this.model).subscribe((res)=>{
        if(res.data != 0) {
          this._auth.setCurrentUser(res);
          this.backHome();
        }
        else {
          alert("Le credenziale inserite sono errate");
        }
      }) 
    }
    else {
      alert("Non puoi inserire solo spazi vuoti nel campo del nome utente");
    }
  }

  backHome() {
    this.route.navigate([''])
      .then(() => {
      window.location.reload();
    });
  }

}
