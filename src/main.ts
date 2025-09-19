import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(App, {

  providers: [

    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode() }),

  ],

});