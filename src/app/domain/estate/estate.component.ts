import { EstatesService } from '@hola/services/estates.service'
import { Observable, shareReplay, switchMap } from 'rxjs'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { PollingService } from '@hola/services/polling.service'
import { Location } from '@angular/common'

@Component({
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstateComponent implements OnInit {
  estate$!: Observable<any>

  constructor(
    private readonly route: ActivatedRoute,
    private readonly estatesService: EstatesService,
    public readonly pollingService: PollingService,
    public readonly location: Location,
  ) { }

  ngOnInit(): void {
    this.estate$ = this.route.params
      .pipe(
        switchMap((params: Params) => this.estatesService.fetchEstate(params['id'])),
        shareReplay(),
      )
  }
}
