import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NewPostCardComponent } from './new-post-card/new-post-card.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';

const routes: Routes = [
  { path: '', component: MainPageComponent  },
  { path: 'app-new-post-form', component: NewPostFormComponent  },
  { path: 'app-new-post-card', component: NewPostCardComponent, outlet:'new-post-place'  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
