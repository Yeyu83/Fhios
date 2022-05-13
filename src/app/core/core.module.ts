import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { CoreRoutingModule } from '@hola/core/core-routing.module'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
  ],
})
export class CoreModule { }
