// We import (bring in) mongoose. Mongoose helps us interact with MongoDB, which is where we keep our data.
import mongoose from "mongoose";

// This is the structure of our "Post". Think of it as a blueprint for how a post should look.
// It has a name, a prompt, and a photo. Each of these are text, and each of them is required (they have to be there).
const Post = new mongoose.Schema({
    // The 'name' field will hold the name of the post as a string (text). It's a necessary field, so it can't be left blank.
    name: { type: String, required: true },
    
    // The 'prompt' field will hold the prompt of the post as a string (text). It's also necessary, so it can't be left blank.
    prompt: { type: String, required: true },
    
    // The 'photo' field will hold the URL or the name of the photo of the post as a string (text). It's also necessary, so it can't be left blank.
    photo: { type: String, required: true },
})

// We use the blueprint (the "Post" schema) we created above to create a model. This model is like a tool that lets us create and manage our posts in the database.
const PostSchema = mongoose.model('Post', Post)

// We make the PostSchema available for other parts of our application to use. This is like lending a book to a friend.
export default PostSchema
