import { PollingService } from '@hola/services/polling.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-spinner *ngIf="pollingService.isPolling | async"></app-spinner>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {
  constructor(
    public readonly pollingService: PollingService,
  ) { }
}
