// We import mongoose and a specific function called 'connect' from mongoose. We use these to interact with our MongoDB database.
import mongoose, { connect } from "mongoose";

// This function, 'connectDB', is responsible for creating a connection to our database.
// The 'url' parameter it takes is the address of our MongoDB database.
const connectDB = (url) => {
    // The 'strictQuery' option is set to true. This means mongoose will throw an error if you try to query fields that do not exist in your schema.
   // The strictQuery option in Mongoose is used to enable strict query mode. 
   // When enabled (set to true), Mongoose will throw an error if you try to query fields that do not exist in your schema. 
   // This can be useful to prevent typos or querying for fields that don't exist in your schema, helping to maintain data consistency
   // and avoid potential issues.
   
    mongoose.set('strictQuery', true)

    // We tell mongoose to establish a connection to our database using the given url.
    // If something goes wrong during the connection process, the error will be caught and printed on the console.
    mongoose.connect(url)
    .catch((err) => console.log(err));
}

// We make the 'connectDB' function available for other parts of our application to use.
export default connectDB;