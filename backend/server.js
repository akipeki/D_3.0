// Import necessary packages
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// Import database connection function
import connectDB from './mongodb/connect.js'

// Import route handlers
import dalleRoutes from './routes/dalleRoutes.js'
import postRoutes from './routes/postRoutes.js'
import chatRoutes from './routes/chatRoutes.js';

// Load environmental variables
dotenv.config();

// Initialize express app
const app = express();
// Use cors middleware for handling CORS issues
app.use(cors());
// Use express.json middleware to parse incoming JSON requests, limit set to '50mb'
app.use(express.json({ limit: '50mb' }));

// Use imported route handlers
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/chat', chatRoutes);

// Route handler for base URL
app.get('/', async (req, res) => {
  res.status(200).send('Hello from DALL.E!');
});

// Function to start the server
const startServer = async () => {
  try {
    // Connect to the database
    await connectDB(process.env.MONGO_URL);
    // Start the server
    app.listen(8080, () =>
      console.log('Server running on port http://localhost:8080'));
  } catch (error) {
    // Log any error that happens while starting the server
    console.log('Error while starting the server:', error);
  }
}

// Start the server
startServer();
