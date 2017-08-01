import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
