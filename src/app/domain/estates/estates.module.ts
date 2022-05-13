import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EstatesComponent } from './estates.component'
import { EstatesRoutingModule } from './estates-routing.module'

@NgModule({
  declarations: [
    EstatesComponent,
  ],
  imports: [
    CommonModule,
    EstatesRoutingModule,
  ],
})
export class EstatesModule { }
