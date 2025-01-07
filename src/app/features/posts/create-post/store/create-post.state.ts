import {
  Permission,
  PermissionValue,
} from '../../../../shared/services/permission.service';

/**
 * read more at https://dev.to/this-is-angular/why-and-how-to-manage-state-for-angular-reactive-forms-25fn
 */
export const createPostStateKey = 'createPost';

export interface CreatePost {
  title: string;
  body: string;

  user: {
    email: string;
    name: string;
    username: string;
    phone: number;
    website: string;
    permission: PermissionValue;
  };
}

export const initialCreatePostState = {
  title: '',
  body: '',

  user: {
    email: '',
    name: '',
    username: '',
    phone: 0,
    website: '',
    permission: Permission.NO_PERMISSION,
  },
};
