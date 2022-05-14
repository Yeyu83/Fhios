import { Observable } from 'rxjs'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Estate } from '@hola/models/estate.interface'
import { EstatesService } from '@hola/services/estates.service'

@Component({
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstatesComponent implements OnInit {
  estates$!: Observable<Estate[]>

  constructor(
    private estatesService: EstatesService,
  ) { }

  ngOnInit(): void {
    this.estates$ = this.estatesService.fetchEstates()
  }

  fetchNextEstates(): void {
    this.estatesService.fetchNextEstates()
  }

  // eslint-disable-next-line class-methods-use-this
  trackByFn(_: number, estate: Estate): string {
    return estate.id
  }
}
