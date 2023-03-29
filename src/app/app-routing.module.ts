import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {
      path: '',
      redirectTo:'home',
      pathMatch:'full',
  },
  {
      path: 'home',
      loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  }

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
