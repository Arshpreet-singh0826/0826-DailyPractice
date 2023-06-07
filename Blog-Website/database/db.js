import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-d3eizw0-shard-00-00.fbozsbp.mongodb.net:27017,ac-d3eizw0-shard-00-01.fbozsbp.mongodb.net:27017,ac-d3eizw0-shard-00-02.fbozsbp.mongodb.net:27017/?ssl=true&replicaSet=atlas-keok3x-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;