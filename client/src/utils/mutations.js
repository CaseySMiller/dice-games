import { gql } from '@apollo/client';

//update to use username
export const LOGIN_USER = gql`
    mutation login($userName: String!, $password: String!) {
        login(userName: $userName, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

//make email optional
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            firstName
            }
        }
    }
`;