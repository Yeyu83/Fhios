import { Estate } from '@hola/models/estate.interface'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-estate-card',
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.scss'],
})
export class EstateCardComponent {
  @Input() estate!: Estate
}
