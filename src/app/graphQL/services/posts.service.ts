import { inject, Injectable } from '@angular/core';
import { ApolloQueryResult, OperationVariables } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { catchError, map, Observable, of } from 'rxjs';
import { Post, PostsPage } from '../types/posts-page.type';
import { GET_POSTS } from '../posts.operations';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly apollo = inject(Apollo);

  queryPosts(): Observable<Post[]> {
    return this.apollo
      .query<{ posts: PostsPage }, OperationVariables>({
        query: GET_POSTS,
      })
      .pipe(
        map(
          (
            response: ApolloQueryResult<{
              posts: PostsPage;
            }>
            // TODO : check for data
          ) => response.data.posts.data
        ),
        catchError(_ => of([]))
      );
  }
}
