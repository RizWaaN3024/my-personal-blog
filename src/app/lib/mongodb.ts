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

// import mongoose from "mongoose";

// declare global {
//     var mongoose: any;
// }

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//     throw new Error("Please define MONGODB_URI environment variable");
// }

// async function connectToDatabase() {
//     try {
//         // Check cached connection
//         if (global.mongoose?.conn?.readyState === 1) {
//             return global.mongoose.conn;
//         }

//         // If connecting, wait for it
//         if (global.mongoose?.promise) {
//             await global.mongoose.promise;
//             return global.mongoose.conn;
//         }

//         // Create new connection
//         const connectionPromise = mongoose.connect(MONGODB_URI, {
//             bufferCommands: false,
//             maxPoolSize: 10,
//         });

//         // Cache the promise while connecting
//         global.mongoose = {
//             conn: null,
//             promise: connectionPromise,
//         };

//         // Wait for connection
//         await connectionPromise;
        
//         // Update cache with actual connection
//         global.mongoose.conn = mongoose.connection;
//         global.mongoose.promise = null;

//         console.log("Connected to DB Successfully");
//         return mongoose.connection;

//     } catch (error) {
//         console.error("Database connection error:", error);
//         // Reset global state on error
//         global.mongoose = { conn: null, promise: null };
//         throw new Error("Failed to connect to database");
//     }
// }

// export { connectToDatabase };