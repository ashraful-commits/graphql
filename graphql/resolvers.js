
import { studentModel } from "../models/StudentModel.js";
import bycrptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const resolvers = {
  Query: {
    getAllStudents: async () => {
        try {
          const allStudents = await studentModel.find();
          return allStudents;
        } catch (error) {
          console.error('Error fetching students:', error);
          throw new Error('Failed to fetch students');
        }
      },
    
  },
  Mutation: {
    createStudent: async (_, { name, email, password }) => {
      const hashPassword = bycrptjs.hashSync(password, 10);
      const data = await studentModel.create({
        name,
        email,
        password: hashPassword,
      });
      return data;
    },
    deleteStudent: async (_, { id}) => {

      const data = await studentModel.findByIdAndDelete({_id:id});
      return data;
    },
    loginStudent: async (_, { email, password }) => {
      try {
        const loginUser = await studentModel.findOne({ email });

        // If no user found, throw an error
        if (!loginUser) {
          throw new Error("Student not found");
        }
        const passCompare = bycrptjs.compareSync(password, loginUser.password);
        if (!passCompare) {
          throw new Error("Password does not match");
        }
        const token = jwt.sign(
          { email: loginUser.email },
          process.env.JWT_SECRET,
          { expiresIn: "30d" }
        );

        return {
          students:{
            id:loginUser._id,
            name:loginUser.name,
            email:loginUser.email,

          },
          token
        };
      } catch (error) {
        console.error("Error logging in student:", error.message);
        throw new Error("Failed to log in student");
      }
    },
  },
};
