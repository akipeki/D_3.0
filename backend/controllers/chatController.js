// Node.js's inbuilt 'node-fetch' module to send HTTP requests
import fetch from 'node-fetch';

// Controller for handling chat with GPT-3
export const chatWithGpt3 = async (req, res) => {
  // Retrieve the API key from environment variables
  const API_KEY = process.env.API_KEY;

  // Set options for the fetch call
  const options = {
    method: "POST",  // The type of HTTP request
    headers: {
      // Add the API key to the request headers for authentication
      "Authorization": `Bearer ${API_KEY}`,
      // Specify the type of data being sent
      "Content-Type": "application/json"
    },
    body: JSON.stringify({  // Convert the request data to a JSON string
      model: "gpt-3.5-turbo",  // The OpenAI model to use
      prompt: req.body.prompt,  // The initial text prompt to send to GPT-3
      max_tokens: 200,  // The maximum length of the generated text
      temperature: 0.7  // Controls the randomness of the output (lower value means more deterministic)
    })
  };

  try {
    // Send the POST request to OpenAI's API endpoint
    const response = await fetch('https://api.openai.com/v1/chat/completions', options)

    // Parse the response data as JSON
    const data = await response.json();

    // Send back the generated text as the response
    res.send(data.choices[0].text);
  } catch (error) {
    // If anything goes wrong, log the error to the console
    console.error(error);
  }
};
