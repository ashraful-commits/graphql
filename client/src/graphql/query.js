import { gql } from '@apollo/client';
export const GET_ALL_STUDENTS = gql`
query getAllStudents {
  getAllStudents {
    id
    name
    email
  }
}
`;