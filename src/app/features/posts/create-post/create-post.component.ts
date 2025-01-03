import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { tap, using } from 'rxjs';
import { FocusDirective } from '../../../shared/directives/focus.directive';
import { PatchFormGroupValuesDirective } from '../../../shared/directives/patch-formGroup-values.directive';
import { RxFormControlShowRedShadowDirective } from '../../../shared/directives/rx-form-control.directive';
import { TestingDataAttributeDirective } from '../../../shared/directives/testing-data-attribute.directive';
import {
  Permission,
  PermissionService,
  PermissionValue,
} from '../../../shared/services/permission.service';
import { PostsPageFacadeService } from '../posts-store/posts-page-facade.service';
interface PostForm {
  title: FormControl<string>;
  body: FormControl<string>;

  user: FormGroup<{
    email: FormControl<string>;
    name: FormControl<string>;
    username: FormControl<string>;
    phone: FormControl<number>;
    website: FormControl<string>;
    permission: FormControl<PermissionValue>;
  }>;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-create-post',
  standalone: true,
  imports: [
    AsyncPipe,
    FocusDirective,
    MatFormFieldModule,
    MatSelectModule,
    PatchFormGroupValuesDirective,
    ReactiveFormsModule,
    RxFormControlShowRedShadowDirective,
    TestingDataAttributeDirective,
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly postsPageFacade = inject(PostsPageFacadeService);
  private readonly permissionService = inject(PermissionService);
  readonly permissions = this.permissionService.getPermissions();
  readonly postForm: FormGroup = this.fb.group<PostForm>({
    title: this.fb.control('', [Validators.required]),
    body: this.fb.control('', [Validators.required]),
    user: this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      name: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [
        Validators.required,
        Validators.minLength(16),
      ]),
      phone: this.fb.control(0, [Validators.required]),
      website: this.fb.control('', [Validators.required]),
      permission: this.fb.control(Permission.NO_PERMISSION, [
        Validators.required,
      ]),
    }),
  });
  formValues$ = using(
    () =>
      this.postForm.valueChanges
        .pipe(
          tap(values => {
            this.postsPageFacade.onCreatePostValueChanges(values);
          })
        )
        .subscribe(),
    () => this.postsPageFacade.getCreatePostFormValue() // Wherever you put it in your state tree
  );
  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }

    this.postsPageFacade.onSavePost(this.postForm.value);

    this.postForm.reset();
  }
}
