
import mongoose from "mongoose";

const mongodbConnect = async () => {
    try {

        const connect = await mongoose.connect(process.env.MOGODB_SERVER);
        console.log(`MongoDB connected!`.bgGreen.white);
    } catch (error) {
        console.log(error);
    }
}


export default mongodbConnect;