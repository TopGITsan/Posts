import { gql } from 'apollo-angular';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      data {
        id
        title
        body
        user {
          id
          name
          username
          email
          phone
          website
        }
      }
    }
  }
`;
