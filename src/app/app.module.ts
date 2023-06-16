import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//COMPONENT IMPORTS 
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

//APP-ROUTING Import
import { appRoutingModule } from './app-routing.module';


// FIREBASE IMPORTS  

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL IMPORTS 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    RouterModule,
    appRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
