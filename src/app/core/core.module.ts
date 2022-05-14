import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CoreRoutingModule } from '@hola/core/core-routing.module'
import { PollingInterceptor } from 'app/interceptors/polling.interceptor'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PollingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule { }
