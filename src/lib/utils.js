
import mongoose from "mongoose"

const connection = {}

export const connectToDb = async () => {
    try {
         if (connection.isConnected) {
        console.log("Connecting to exiting connection");
        return
    }
    const db = await mongoose.connect(process.env.MONGO)
    connection.isConnected = db.connections[0].readyState;

    } catch (error) {
        console.log("not connect to db ");
        throw new Error(error);
    }
   


}