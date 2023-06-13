// Import the necessary packages and modules
import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

// Import the Post model from our MongoDB models
import Post from '../mongodb/models/post.js';

// Load environmental variables
dotenv.config();

// Initialize a new router instance
const router = express.Router();

// Set the Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Route handler to GET all posts
// Sorts the fetched posts by their creation time in descending order
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

// Route handler to CREATE a post
// The photo is uploaded to Cloudinary and a URL is generated to access the photo
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo, generatedText } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo)

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
      generatedText,
    })
    res.status(201).json({ success: true, data: newPost });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

// Route handler to DELETE a post
// The post is fetched by its ID and if found, is removed
router.route('/:id').delete(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    await post.remove();
    res.status(200).json({ success: true, message: 'Post deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error deleting post' });
  }
});

// Export the router to be used in the main server file
export default router;
