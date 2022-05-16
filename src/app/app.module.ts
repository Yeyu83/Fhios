import { RouterModule } from '@angular/router'
import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgHttpCachingModule, NgHttpCachingConfig, NgHttpCachingStrategy } from 'ng-http-caching'
import { SpinnerComponent } from '@hola/components/spinner/spinner.component'
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common'
import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component'

registerLocaleData(localeEs, 'es')

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
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es',
  }],
})
export class AppModule { }
