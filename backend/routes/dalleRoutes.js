// Import the necessary packages and modules
import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

// Load environmental variables
dotenv.config();

// Initialize a new router instance
const router = express.Router();

// Configure the OpenAI API with the API key from environment variables
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

// Initialize an instance of OpenAIApi with the configuration
const openai = new OpenAIApi(configuration);

// Route handler to GET the base route. Sends a welcome message
router.route('/').get((req, res) => {
    res.send('Hello from DALL-E!');
})

// Route handler to POST to the base route
// This will use the OpenAI API to generate an image from a given prompt
router.route('/').post(async (req, res) => {
    try {
        // Extract the prompt from the request body
        const { prompt } = req.body;

        // Create the image using OpenAI's createImage function
        const aiResponse = await openai.createImage({
            prompt: `describtion ${prompt}`,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        // Extract the image from the AI's response
        const image = aiResponse.data.data[0].b64_json;

        // Send the generated image as a response
        res.status(200).json({ photo: image })
    } catch (error) {
        // If any error occurs, log the error and send it as a response
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})

// Export the router to be used in the main server file
export default router;
