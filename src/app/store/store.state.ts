export interface AppState {
  header: HeaderState;
}

export interface HeaderState {
  title: string;
}

export const initialHeaderState: HeaderState = {
  title: 'Posts',
};
