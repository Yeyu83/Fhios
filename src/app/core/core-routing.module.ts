import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'estates',
    loadChildren: () => import('@hola/domain/estates/estates.module').then((m) => m.EstatesModule),
  },
]

const redirectRoutes: Routes = [
  {
    path: '',
    redirectTo: 'estates',
    pathMatch: 'full',
  },
]

const notFoundRoute = {
  path: '**',
  loadChildren: () => import('@hola/domain/not-found/not-found.module').then((m) => m.NotFoundModule),
}

@NgModule({
  imports: [
    RouterModule.forRoot([...redirectRoutes, ...routes, notFoundRoute]),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
