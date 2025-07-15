import mongoose from 'mongoose';

declare global {
  var mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

const { MONGODB_URI } = process.env;
if (!MONGODB_URI) throw new Error("Please define MONGODB_URI in .env");

async function connectToDatabase() {
  if (!global.mongoose) global.mongoose = { conn: null, promise: null };

  if (global.mongoose.conn && mongoose.connection.readyState === 1) {
    return global.mongoose.conn;
  }
  if (global.mongoose.promise) {
    global.mongoose.conn = await global.mongoose.promise;
    return global.mongoose.conn;
  }

  console.log("🔌 Creating new DB connection…");
  const opts = {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS:          60000,
    connectTimeoutMS:         30000,
    family:                   4,
  };

  global.mongoose.promise = mongoose.connect(MONGODB_URI, opts)
    .then((mongooseInstance) => {
       global.mongoose.conn = mongooseInstance;
       global.mongoose.promise = null;
       return mongooseInstance;
    })
    .catch(err => {
       global.mongoose = { conn: null, promise: null };
       throw err;
    });

  return global.mongoose.promise;
}

// register listeners only once
if (!mongoose.eventsRegistered) {
  mongoose.connection.on('connected',    () => console.log('✅ Mongoose connected'));
  mongoose.connection.on('error',        err => console.error('❌ Mongoose connection error:', err));
  mongoose.connection.on('disconnected', () => console.log('📡 Mongoose disconnected'));
  mongoose.eventsRegistered = true;
}

export { connectToDatabase };
