import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store.state';
import { Observable } from 'rxjs';
import { headerTitleSelector } from './store.selector';

@Injectable({ providedIn: 'root' })
export class StoreFacadeService {
  #store: Store<AppState> = inject(Store);

  getHeaderTitle(): Observable<string> {
    return this.#store.select(headerTitleSelector);
  }
}
