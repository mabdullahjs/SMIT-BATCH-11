import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    console.log("🚀 Using cached connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(`${process.env.MONGO_URI}nextjs`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ New connection established");
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
