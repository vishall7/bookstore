import dotenv from 'dotenv';
import { app } from './app.js';
import { connectDB } from './db/connect.js';

dotenv.config({
    path: './.env'
});

const port = process.env.PORT || 3000;

(async () => {
    try {
        // database connectivity
        await connectDB();
        // app listening
        app.on('error', (err) => {
            console.error(err.message);
        });

        app.listen(port, () => {
            console.log(`server listening on port ${port}`)
        })
    } catch (error) {
        console.error('error occured during server startup');
    }
})();