import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  }>;
}

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {
  #fb = inject(NonNullableFormBuilder);
  #postsPageFacade = inject(PostsPageFacadeService);
  postForm: FormGroup = this.#fb.group<PostForm>({
    title: this.#fb.control('', [Validators.required]),
    body: this.#fb.control('', [Validators.required]),
    user: this.#fb.group({
      email: this.#fb.control('', [Validators.required]),
      name: this.#fb.control('', [Validators.required]),
      username: this.#fb.control('', [Validators.required]),
      phone: this.#fb.control(0, [Validators.required]),
      website: this.#fb.control('', [Validators.required]),
    }),
  });

  onSubmit() {
    console.log(this.postForm.value);

    this.#postsPageFacade.onSavePost(this.postForm.value);

    this.postForm.reset();
  }
}
