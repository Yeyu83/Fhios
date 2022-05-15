import { PollingService } from '@hola/services/polling.service'
import { Observable, shareReplay } from 'rxjs'
import {
  ChangeDetectionStrategy, Component, OnDestroy, OnInit,
} from '@angular/core'
import { Estate } from '@hola/models/estate.interface'
import { EstatesService } from '@hola/services/estates.service'

@Component({
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstatesComponent implements OnInit, OnDestroy {
  estates$!: Observable<Estate[]>

  constructor(
    private readonly estatesService: EstatesService,
    public readonly pollingService: PollingService,
  ) { }

  ngOnInit(): void {
    this.estates$ = this.estatesService.fetchEstates().pipe(shareReplay())
  }

  fetchNextEstates(): void {
    this.estatesService.fetchNextEstates()
  }

  trackByFn(_: number, estate: Estate): string {
    return estate.id
  }

  ngOnDestroy(): void {
    this.estatesService.restartPageOffsetCount()
  }
}
