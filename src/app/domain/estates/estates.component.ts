import { PollingService } from '@hola/services/polling.service'
import { shareReplay } from 'rxjs'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Estate } from '@hola/models/estate.interface'
import { EstatesService } from '@hola/services/estates.service'

@Component({
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstatesComponent implements OnInit {
  constructor(
    public readonly estatesService: EstatesService,
    public readonly pollingService: PollingService,
  ) { }

  ngOnInit(): void {
    if (!this.estatesService.estates$) {
      this.estatesService.estates$ = this.estatesService.fetchEstates()
        .pipe(shareReplay())
    }
  }

  fetchNextEstates(): void {
    this.estatesService.fetchNextEstates()
  }

  trackByFn(_: number, estate: Estate): string {
    return estate.id
  }
}
