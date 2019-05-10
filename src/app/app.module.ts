import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { AppRoutingModule }             from './app-routing.module';
import { AppComponent }                 from './app.component';
import { ReactiveValidationComponent }  from './reactive-form-components/reactive-validation/reactive-validation.component';
import { ReactiveInputComponent }       from './reactive-form-components/reactive-input/reactive-input.component';
import { OnInputValueControlDirective } from './shared/directives/on-input-value-control';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveValidationComponent,
    ReactiveInputComponent,
    OnInputValueControlDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
