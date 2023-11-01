import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrantListComponent } from './registrant-list/registrant-list.component';
import { RegistrantService } from './registrant.service';
import { AvailableJobsComponent } from './available-jobs/available-jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    RegistrationFormComponent,
    RegistrantListComponent,
    AvailableJobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    RegistrantService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
