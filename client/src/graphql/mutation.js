import { gql } from '@apollo/client';



export const CREATE_STUDENT = gql`
  mutation createStudent($name: String!, $email: String!, $password: String!) {
    createStudent(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;


export const LOGIN_STUDENT = gql`
  mutation loginStudent($email: String!, $password: String!) {
    loginStudent(email: $email, password: $password) {
      students {
        name
        email
        id
      }
      token
    }
  }
`;



export const DELETE_STUDENT = gql`
mutation deleteStudent($id: ID!) {
  deleteStudent(id: $id) {
    id
    name
    email
  }
}
`;