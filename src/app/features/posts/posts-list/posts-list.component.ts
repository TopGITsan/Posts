import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostsService } from '../../../graphQL/services/posts.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent {
  private readonly postsService = inject(PostsService);

  posts$ = this.postsService.queryPosts();
}
