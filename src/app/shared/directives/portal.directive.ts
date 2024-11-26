import {
  AfterViewInit,
  Directive,
  inject,
  input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { PortalService } from '../services/portal.service';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appPortal]',
  standalone: true,
})
export class PortalDirective implements AfterViewInit, OnDestroy {
  private readonly templateRef = inject(TemplateRef);
  private readonly vcRef = inject(ViewContainerRef);
  private readonly portalService = inject(PortalService);

  appPortal = input.required<string>();

  ngAfterViewInit(): void {
    const portalRef = new TemplatePortal(this.templateRef, this.vcRef);
    this.portalService.sendPortal(this.appPortal(), portalRef);
  }
  ngOnDestroy(): void {
    this.portalService.sendPortal(this.appPortal(), null);
  }
}
