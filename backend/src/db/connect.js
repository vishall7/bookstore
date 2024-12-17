import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`database connected to host:: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('error occured during database connection');
        process.exit(1);   
    }
};