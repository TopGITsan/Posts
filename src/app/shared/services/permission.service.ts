import { Injectable } from '@angular/core';

export enum Permission {
  CREATE_POSTS = 'create-posts',
  POSTS_LIST = 'posts-list',
  REGISTER = 'register',
  NO_PERMISSION = 'no-permission',
}

export type PermissionKey = keyof typeof Permission;

export type PermissionValue = (typeof Permission)[PermissionKey];

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  /**
   * checks if a provided string is included in the list of permissions
   * @param permissionName
   * @returns true if the given permission is inlcuded in the list of permissions otherwise false
   */
  hasPermission(permissionName: string): boolean {
    return this.getPermissions().includes(permissionName.toLowerCase());
  }

  /**
   * Retrieve user permissions
   * @returns list of permissions the user currently has
   */
  getPermissions(): string[] {
    return Object.values<PermissionValue>(Permission).map(permission =>
      permission.toString()
    );
  }
}
