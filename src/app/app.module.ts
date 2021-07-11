import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { Mastercomponenet } from 'src/home/home.mastercomponenet';
import { ProfileComponent } from 'src/profile/profile.component';
import { RegistrationComponent } from 'src/registration/registration.component';
import { OurRoutes } from 'src/routes/app.mainroutes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ProfileComponent,
    Mastercomponenet
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(OurRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [Mastercomponenet]

})
export class AppModule { }
