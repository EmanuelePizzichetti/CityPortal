import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/guard/auth.guard';
import { LoggedGuard } from 'src/services/guard/logged.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { NewResponseFormComponent } from './new-response-form/new-response-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', component: MainPageComponent  },
  { path: 'app-new-post-form', component: NewPostFormComponent, canActivate: [AuthGuard]  },
  { path: 'app-new-response-form/:idPost', component: NewResponseFormComponent, canActivate: [AuthGuard]  },
  { path: 'app-registration-form', component: RegistrationFormComponent, canActivate: [LoggedGuard]  },
  { path: 'app-login-form', component: LoginFormComponent, canActivate: [LoggedGuard]  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, LoggedGuard]
})
export class AppRoutingModule { }
