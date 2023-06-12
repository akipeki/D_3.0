import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

//GET ALL POSTS
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });  // Sort by created time in descending order
    res.status(200).json({ success: true, data: posts })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

//CREATE A POST
// Here we upload the photo to cloudinary and get a photoUrl to get it back
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo)

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    })
    res.status(201).json({ success: true, data: newPost });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }

});

// DELETE A POST
router.route('/:id').delete(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    // If the post was found, delete it
    await post.remove();

    res.status(200).json({ success: true, message: 'Post deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error deleting post' });
  }
});

export default router;