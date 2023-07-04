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

// I want to store original images as bigger size for future usage,
// but on my website I want to use them as lighter version, for
// faster dowload time, that is why w_500, f_auto
const transformCloudinaryUrl = (url) => {
  return `${url.split('.jpg')[0]}/w_500,f_auto.jpg`;
}

// Route handler to GET all posts
// Sorts the fetched posts by their creation time in descending order
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    const transformedPosts = posts.map(post => {
      post.photo = transformCloudinaryUrl(post.photo);
      return post;
    });
    res.status(200).json({ success: true, data: transformedPosts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

// Route handler to GET a single post
// The post is fetched by its ID
router.route('/:id').get(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    post.photo = transformCloudinaryUrl(post.photo);
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Fetching post failed, please try again' });
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


// Route handler to UPDATE a post
// The post is fetched by its ID and if found, is updated
router.route('/:id').put(async (req, res) => {
  try {
    // Deconstruct the data sent from the client
    // If a new photo is being sent, it will be available in `photo`
    const { name, prompt, photo, generatedText } = req.body;

    let photoUrl;
    // If a new photo is being sent, upload it to Cloudinary
    if (photo) {
      const uploadResponse = await cloudinary.uploader.upload(photo);
      photoUrl = uploadResponse.url;  // The URL of the uploaded image on Cloudinary
    }

    // Find the post to be updated using the ID provided in the route parameter
    let post = await Post.findById(req.params.id);

    // If the post is not found, return an error message
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    // If new data is provided, update the post data
    // If not, keep the existing data
    post.name = name || post.name;
    post.prompt = prompt || post.prompt;
    post.photo = photoUrl || post.photo;  // If a new photo was uploaded, `photoUrl` will be the new URL
    post.generatedText = generatedText || post.generatedText;

    // Save the updated post to the database
    const updatedPost = await post.save();

    // Send a response back to the client with the updated post data
    res.status(200).json({ success: true, data: updatedPost });

  } catch (error) {
    // If something goes wrong, log the error and send a response to the client
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating post' });
  }
});



// Export the router to be used in the main server file
export default router;
