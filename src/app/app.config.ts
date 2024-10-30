import {
  ApplicationConfig,
  inject,
  isDevMode,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { routes } from './app.routes';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      return {
        link: httpLink.create({
          uri: environment.graphQlApi,
        }),
        cache: new InMemoryCache(),
      };
    }),
    provideStore(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
