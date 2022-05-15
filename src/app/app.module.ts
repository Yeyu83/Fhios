import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgHttpCachingModule, NgHttpCachingConfig, NgHttpCachingStrategy } from 'ng-http-caching'
import { SpinnerComponent } from '@hola/components/spinner/spinner.component'
import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component'

const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 1000 * 240,
  allowedMethod: ['GET', 'HEAD'],
  cacheStrategy: NgHttpCachingStrategy.ALLOW_ALL,
}

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
