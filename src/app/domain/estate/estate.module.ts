import { EstateComponent } from './estate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstateRoutingModule } from './estate-routing.module';

@NgModule({
  declarations: [
    EstateComponent,
  ],
  imports: [
    CommonModule,
    EstateRoutingModule,
  ],
  exports: [
    EstateComponent,
  ]
})
export class EstateModule { }
