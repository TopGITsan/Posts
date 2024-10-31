import { Post } from '../../../../graphQL/types/posts-page.type';

export const postsStateKey = 'posts';

export interface PostsState {
  error: string | null;
  loading: boolean;
  posts: Post[];
  selectedPostId: string | null;
}

export const initialPostsState: PostsState = {
  error: null,
  loading: false,
  posts: [],
  selectedPostId: null,
};
