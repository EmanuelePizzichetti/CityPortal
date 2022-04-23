import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './main-page/main-page.component';
//import { NewPostCardComponent } from './new-post-card/new-post-card.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { NewResponseFormComponent } from './new-response-form/new-response-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', component: MainPageComponent  },
  { path: 'app-new-post-form', component: NewPostFormComponent  },
 // { path: 'app-new-post-card', component: NewPostCardComponent  },
  { path: 'app-new-response-form/:idPost', component: NewResponseFormComponent  },
  { path: 'app-registration-form', component: RegistrationFormComponent  },
  { path: 'app-login-form', component: LoginFormComponent  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
