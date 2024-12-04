import { NgIf } from '@angular/common';
import { Directive, inject, Input, TemplateRef } from '@angular/core';
import { PermissionService } from '../services/permission.service';

/**
 *
 * To use them with the '*' syntax:
 * <div *appHasPermissionIf="permissions; else: TemplateRef"></div>
 * Note here you're using the name following the prefix uncapitalized (i.e. else). Also note the : in the assignment.
 * The explicit syntax (using template) would look like this:
 * <template [appHasPermissionIf]="permissions" [appHasPermissionIfElse]="TemplateRef">
 *   </div></div>
 *</template>
 * but with <ng-container> it could look like
 * <ng-container *appHasPermissionIf="permissions; else: TemplateRef">
 *   <div></div>
 * </ng-container>
 */
@Directive({
  selector: '[appHasPermissionIf]',
  standalone: true,
  hostDirectives: [NgIf],
})
export class HasPermissionDirective {
  private readonly permissionService = inject(PermissionService);
  private readonly ngIfRef = inject(NgIf);

  @Input()
  set appHasPermissionIf(permissionName: string) {
    this.ngIfRef.ngIf = this.permissionService.hasPermission(permissionName);
  }

  @Input()
  set appHasPermissionIfElse(template: TemplateRef<any>) {
    this.ngIfRef.ngIfElse = template;
  }
}
