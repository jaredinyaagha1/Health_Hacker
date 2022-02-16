//import { gql } from '@apollo/client';--pulling from assignment-26
import { gql } from 'graphql-tag'; 

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($bookInfo: bookInfo!) {
    saveBook(bookInfo: $bookInfo) {
        _id
        username
        password
        bookCount
        savedBooks{
            bookId
            authors
            description
            title 
            image
            link 
        }
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        password
        bookCount
        savedBooks{
            bookId
            authors
            description
            title 
            image
            link 
        }
    }
  }
`;
