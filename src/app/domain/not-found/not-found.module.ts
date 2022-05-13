import { NotFoundComponent } from '@hola/domain/not-found/not-found.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotFoundRoutingModule } from '@hola/domain/not-found/not-found-routing.module'

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
  ],
  exports: [
    NotFoundComponent,
  ],
})
export class NotFoundModule { }
