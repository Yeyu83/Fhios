import {
  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { PollingService } from '@hola/services/polling.service'
import { Observable } from 'rxjs'
import { finalize, tap, delay } from 'rxjs/operators'

@Injectable()
export class PollingInterceptor implements HttpInterceptor {
  constructor(
    private readonly pollingService: PollingService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(() => this.pollingService.isPolling.next(true)),
      delay(2000),
      finalize(() => this.pollingService.isPolling.next(false)),
    )
  }
}
