import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EstateCardComponent } from '@hola/components/estate-card/estate-card.component'
import { EstatesComponent } from './estates.component'
import { EstatesRoutingModule } from './estates-routing.module'

@NgModule({
  declarations: [
    EstatesComponent,
    EstateCardComponent,
  ],
  imports: [
    CommonModule,
    EstatesRoutingModule,
  ],
})
export class EstatesModule { }
