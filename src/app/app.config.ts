import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics } from "firebase/analytics";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(HttpClientModule), 
    provideFirebaseApp(() => initializeApp({  
      "apiKey": "AIzaSyAFIBBsQUFhGG3k1eZMEh6YLeyXhdMEb-E",
      "authDomain": "demo64-c484f.firebaseapp.com",
      "databaseURL": "https://demo64-c484f-default-rtdb.firebaseio.com",
      "projectId": "demo64-c484f",
      "storageBucket": "demo64-c484f.appspot.com",
      "messagingSenderId": "268414255924",
      "appId": "1:268414255924:web:c9b9200b3a6210c94c1b61",
      "measurementId": "G-BEZNP69K7Q"
    })), 
    provideFirestore(() => getFirestore())
  ]
};

