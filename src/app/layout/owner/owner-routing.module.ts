import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { OwnerPropertyComponent } from './owner-property/owner-property.component';

const routes: Routes = [
  {
    path: '',
    component:OwnerComponent,
    children:[
      {
        path: '',
        redirectTo: 'ownerProperty',
        pathMatch:"full"
      },
      
      {
        path: 'ownerProperty',
        component:OwnerPropertyComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
