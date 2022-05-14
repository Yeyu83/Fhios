import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component'
import { SpinnerComponent } from './components/spinner/spinner.component'

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
