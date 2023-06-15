// Import necessary packages and modules
import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

// Import the Post model from our MongoDB models
import Post from '../mongodb/models/post.js';

// Load environmental variables
dotenv.config();

// Create a new configuration for the OpenAI API, with the API key from the environmental variables
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

// Initialize the OpenAI API with the previously defined configuration
const openai = new OpenAIApi(configuration);

// Initialize a new router instance
const router = express.Router();

// Set a route handler for POST requests on the base URL
router.route('/completions').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        // Use the OpenAI API to create a new AI completion
        /*  const aiResponse = await openai.createCompletion({
              model: "gpt-3.5-turbo",
              prompt: prompt,
              max_tokens: 200,
              temperature: 0.7,
              n: 1,
              stop: null,
          }); */

        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        // Save the response from the AI in the database
        const newPost = await Post.create({
            name: "GPT-3 Generated Text",
            prompt: prompt,
            photo: aiResponse.data.choices[0].text,

        });

        // Send the AI response back to the client
        res.status(200).send(chatCompletion);
    } catch (error) {
        // Log the error and send back a 500 status with the error message
        console.error(error);
        res.status(500).send(error?.message);
    }
});

// Export the router to be used in the main server file
export default router;
