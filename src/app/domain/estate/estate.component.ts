import { EstatesService } from '@hola/services/estates.service'
import { Observable, shareReplay, switchMap } from 'rxjs'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Estate } from '@hola/models/estate.interface'
import { PollingService } from '@hola/services/polling.service'

@Component({
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstateComponent implements OnInit {
  estate$!: Observable<Estate>

  constructor(
    private readonly route: ActivatedRoute,
    private readonly estatesService: EstatesService,
    public readonly pollingService: PollingService,
  ) { }

  ngOnInit(): void {
    this.estate$ = this.route.params
      .pipe(
        switchMap((params: Params) => this.estatesService.fetchState(params['filter[field_inmu_refe]'])),
        shareReplay(),
      )
  }
}
