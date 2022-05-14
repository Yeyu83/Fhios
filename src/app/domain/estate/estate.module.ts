import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EstateComponent } from './estate.component'
import { EstateRoutingModule } from './estate-routing.module'

@NgModule({
  declarations: [
    EstateComponent,
  ],
  imports: [
    CommonModule,
    EstateRoutingModule,
  ],
})
export class EstateModule { }
