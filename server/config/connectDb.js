import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("URI =", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("DATABASE CONNECTED");
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);
  }
};

export default connectDb;