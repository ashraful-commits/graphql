export const typeDefs = `#graphql
 
    type Student{
    id:ID,
    name: String!,
    age:Int,
    email:String!,
    location:String,
    }
    type AuthPayload {
    students: Student
    token: String!
  }
    type Query{
      getAllStudents:[Student]
    }
    type Mutation{
      createStudent(name:String!,email:String!,password:String!):Student
      deleteStudent(id:ID!):Student
      loginStudent(email:String!,password:String!):AuthPayload
    }
    `;
