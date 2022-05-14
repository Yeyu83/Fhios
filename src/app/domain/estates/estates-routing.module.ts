import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EstatesComponent } from './estates.component'

const routes: Routes = [
  {
    path: '',
    component: EstatesComponent,
  },
  {
    path: ':filter[field_inmu_refe]',
    loadChildren: () => import('@hola/domain/estate/estate.module').then((m) => m.EstateModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatesRoutingModule { }
