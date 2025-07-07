import mongoose from "mongoose";

/**
 * 1> Check if connection already exists
 * 2> Create new connection only if needed
 * 3> Handle Connection states properly
 * 4> Provide error handling
 * 5> Return a usable connection
 */

declare global {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var mongoose: any;
}
async function connectToDatabase() {
    try {
        // Check if we already have a connection
        if (global.mongoose?.conn?.readyState === 1) {
            console.log("Using existing Database Connection");
            return global.mongoose.conn;
        }

        const conn = await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connected to DB Successfully");

        global.mongoose = {
            conn: mongoose.connection,
            promise: null
        };
        
        return conn;

    } catch (error) {
        console.log("Database Connection Error" ,error);
        throw new Error("Failed to connect to Database");
    }
}

export { connectToDatabase };