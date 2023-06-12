import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const router = express.Router();

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        const aiResponse = await openai.chatModels.createCompletion({
            model: "gpt-3.5-turbo",
            prompt: prompt,
            max_tokens: 200,
            temperature: 0.7,
        });

        res.status(200).send(aiResponse.data.choices[0].text);
    } catch (error) {
        console.error(error);
        res.status(500).send(error?.message);
    }
});

export default router;
