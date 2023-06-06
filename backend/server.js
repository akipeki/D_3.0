import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js'

import dalleRoutes from './routes/dalleRoutes.js'
import postRoutes from './routes/postRoutes.js'


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Add the logging middleware here
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    console.log('Body:', req.body);
    next();
});

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.status(200).send('Hello from DALL.E!');
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGO_URL);
        app.listen(8080, () => 
            console.log('Server running on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
}

startServer();
