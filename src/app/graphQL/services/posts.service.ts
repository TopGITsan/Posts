import { inject, Injectable } from '@angular/core';
import { ApolloQueryResult, OperationVariables } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { PostsPage } from '../types/posts-page.type';
import { GET_POSTS } from '../posts.operations';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly apollo = inject(Apollo);

  queryPosts(): Observable<ApolloQueryResult<PostsPage>> {
    return this.apollo.query<PostsPage, OperationVariables>({
      query: GET_POSTS,
    });
  }
}
