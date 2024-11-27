import { Injectable } from '@angular/core';
import { filter, map, Subject } from 'rxjs';
import { Portal } from '@angular/cdk/portal';
@Injectable({
  providedIn: 'root',
})
export class PortalService {
  private readonly portalSubject = new Subject<{
    portal: Portal<unknown> | null;
    name: string;
  }>();

  sendPortal(name: string, portal: Portal<unknown> | null) {
    this.portalSubject.next({ portal, name });
  }

  getPortal(name: string) {
    return this.portalSubject.asObservable().pipe(
      filter(portalRef => portalRef.name === name.toLowerCase()),
      map(portalRef => portalRef.portal)
    );
  }
}
