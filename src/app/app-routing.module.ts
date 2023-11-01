// app-routing.module.ts

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrantListComponent } from './registrant-list/registrant-list.component';
import { AvailableJobsComponent } from './available-jobs/available-jobs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
 
  { path: 'registration-form', component: RegistrationFormComponent},
  { path: 'registrant-list', component: RegistrantListComponent},
  { path: '', redirectTo: '/registration-form', pathMatch: 'full' },
  { path: 'available-jobs', component: AvailableJobsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

