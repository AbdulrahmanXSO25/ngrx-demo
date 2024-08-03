import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LampRowComponent } from './lamp-row/lamp-row.component';

const routes: Routes = [
  {
    path: '',
    component: LampRowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LampsRoutingModule { }
