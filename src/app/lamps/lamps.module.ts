import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LampsRoutingModule } from './lamps-routing.module';
import { LampRowComponent } from './lamp-row/lamp-row.component';
import { StoreModule } from '@ngrx/store';
import { lampReducer } from './lamp.reducer';


@NgModule({
  declarations: [
    LampRowComponent
  ],
  imports: [
    CommonModule,
    LampsRoutingModule,
    StoreModule.forRoot({ lampState: lampReducer })
  ]
})
export class LampsModule { }
