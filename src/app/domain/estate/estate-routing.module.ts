import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EstateComponent } from './estate.component'

const routes: Routes = [
  {
    path: '',
    component: EstateComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstateRoutingModule { }
