export interface PostsPage {
  data: Post[];
  // links: PaginationLinks;
  // meta: PageMetadata;
}

interface PaginationLinks {
  first: PageLimitPair;
  prev: PageLimitPair;
  next: PageLimitPair;
  last: PageLimitPair;
}

interface PageLimitPair {
  page: number;
  limit: number;
}

interface PageMetadata {
  totalCount: number;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  user: User;
  comments: CommentsPage;
}

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  posts: PostsPage;
  albums: AlbumsPage;
  todos: TodosPage;
}

interface CommentsPage {
  data: Comment[];
  // links: PaginationLinks;
  // meta: PageMetadata;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: number;
  lng: number;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface AlbumsPage {
  data: Album[];
  // links: PaginationLinks;
  // meta: PageMetadata;
}

interface Album {
  id: string;
  title: string;
  user: User;
  photos: PhotosPage;
}

interface PhotosPage {
  data: Photo[];
  // links: PaginationLinks;
  // meta: PageMetadata;
}

interface Photo {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  album: Album;
}

interface TodosPage {
  data: Todo[];
  // links: PaginationLinks;
  // meta: PageMetadata;
}

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  user: User;
}
