import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../assets/constant';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() *
        surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}

// I do not currently use this download Image function, but I leave it here for the future
export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}
