import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../assets/constant';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() *
        surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}
// downloadImage uses the FileSaver library to download an image.
// The saveAs method takes two arguments: a URL or Blob object representing
// the file to be saved, and a default filename for the saved file.
// In your case, it's saving photo with a filename of download-${_id}.jpg,
// where ${_id} is replaced by the value of _id.
export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}

export async function getMessages(value) {
    const prompt = "You are a talented author with skills to touch people with short texts. Create an touching apology using min 100 tokens/max 200 tokens. Keep the language and vocabularity simple, honest and straight. Start your story with straight apology: Something like \"I'm sorry\", \"I want to apologice you\", or something similar. You this text as your reference for the touching text you create:";
    const completeQuestion = `${prompt} ${value}`;

    const options = {
        method: "POST",
        body: JSON.stringify({
            prompt: completeQuestion
        }),
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch("https://dille.onrender.com/api/v1/chat/", options);
        const data = await response.json();
        return data.choices[0].message;
    } catch (error) {
        console.error(error);
    }
}
