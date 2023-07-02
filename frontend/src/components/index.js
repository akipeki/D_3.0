// Import the Card, FormField, and Loader components from their respective module files
import Card from "./Card";
import FormField from "./FormField";
import Loader from "./Loader";
import LoaderHomePage from "./LoaderHomePage";

// These index.js files are essentially "barrel" files that allow you to clean up imports in your code.
// Export the components as named exports from this module.
// It makes imports cleaner and less verbose when using these components in other parts of the application.
export {
    Card, FormField, Loader, LoaderHomePage
};
