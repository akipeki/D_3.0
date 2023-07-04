// Import the Card, FormField, and Loader components from their respective module files
import { randomTextPrompts } from "./randomTextPrompts";
import { surpriseMePrompts } from "./surpriseMePrompts";


// These index.js files are essentially "barrel" files that allow you to clean up imports in your code.
// Export the components as named exports from this module.
// It makes imports cleaner and less verbose when using these components in other parts of the application.
export {
  randomTextPrompts, surpriseMePrompts
};
