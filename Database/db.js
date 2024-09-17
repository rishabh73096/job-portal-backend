import mongoose from "mongoose";

const dbURL = "mongodb://sonukr9902:LZXpj1ezklwogJA8@cluster0-shard-00-00.zx5dy.mongodb.net:27017,cluster0-shard-00-01.zx5dy.mongodb.net:27017,cluster0-shard-00-02.zx5dy.mongodb.net:27017/?replicaSet=atlas-9cih1h-shard-0&ssl=true&authSource=admin";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(dbURL);
        console.log("Connected to MongoDB");
       
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectDB;
