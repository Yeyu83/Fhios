import { EstatesService } from '@hola/services/estates.service'
import { Observable, switchMap } from 'rxjs'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

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
  ) { }

  ngOnInit(): void {
    this.estate$ = this.route.params
      .pipe(
        switchMap((params: Params) => this.estatesService
          .fetchStatesByRef(params['filter[field_inmu_refe]'])),
      )
  }
}
