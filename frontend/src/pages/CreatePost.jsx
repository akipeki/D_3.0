import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

// Main component for creating a post
const CreatePost = () => {
  // useNavigate is a hook used for navigation between routes
  const navigate = useNavigate();

  // useState is a hook to manage state in a functional component
  // 'form' is an object containing form field values, 'setForm' is the function used to update those values
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
    gender: '',
    age: '',
    country: '',
    personDescription: '',
  });

  // Async function to fetch generated text from GPT-3 model based on user's prompt
  const getGPT3Response = async (prompt) => {
    // A try/catch block is used for error handling
    try {
      // Fetch function is used to send a POST request to the GPT-3 API with prompt as input
      const response = await fetch('https://dille.onrender.com/api/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      // If response is not ok, throw an error
      if (!response.ok) {
        throw new Error('Failed to generate GPT-3 response');
      }

      // Convert the response to JSON
      const data = await response.json();
      // Return the generated text from the response
      return data.text;
    } catch (err) {
      console.error(err);
      return '';
    }
  };

  // State variables for tracking loading states and generated text
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState("");

  // Event handler for form field changes
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Event handler for the "Surprise Me" button
  // Generates a random prompt and updates the state accordingly
  const handleSurpriseMe = async () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
    await generateMessage(randomPrompt);
  };

  // Function to generate message based on provided prompt
  const generateMessage = async (prompt) => {
    // Checks if the prompt exists
    if (prompt) {
      // Encloses async operations in try/catch for error handling
      try {
        // Sends a POST request to API for generating message
        const response = await fetch('https://dille.onrender.com/api/v1/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: `You are a talented author with skills to touch people with short texts... ${prompt}`,
          }),
        });

        // If response from API is not okay, throws an error
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || `An error has occurred while generating message: ${response.status}`);
        }

        // Parses the response to JSON
        const data = await response.json();
        // Sets the generated message as the new prompt and updates the generated text
        setForm({ ...form, prompt: data });
        setGeneratedText(data);
      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      }
    } else {
      alert('Please provide a story to apologize');
    }
  };

  // Function to generate image based on provided details
  const generateImage = async () => {
    // Checks if all necessary details are provided
    if (form.prompt && form.gender && form.age) {
      // Sets generatingImg to true while the image is being generated
      setGeneratingImg(true);
      // Encloses async operations in try/catch for error handling
      try {
        // Sends a POST request to the DALL-E API for generating an image
        const response = await fetch('https://dille.onrender.com/api/v1/dalle', {
          method: 'POST',
          body: JSON.stringify({
            prompt: `Striking black and white eye-level closeup of a ${form.age} year old fragile ${form.gender} from ${form.country}. Saturation: 0. Kodak Tri-x grains... ${form.personDescription}`,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // If response from API is not okay, throws an error
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || `An error has occurred while generating an image: ${response.status}`);
        }

        // Parses the response to JSON
        const data = await response.json();
        // Updates the form data with the generated image
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });

        await generateMessage(form.prompt);

      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      } finally {
        // Sets generatingImg to false after the image is generated
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper details');
    }
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    // Prevents the default form submission action
    e.preventDefault();

    // Checks if all necessary details are provided
    if (form.prompt && form.photo && form.gender && form.age && form.country) {
      // Sets loading to true while the request is being made
      setLoading(true);
      // Encloses async operations in try/catch for error handling
      try {
        // Generates GPT-3 response for the prompt
        const generatedText = await getGPT3Response(form.prompt);

        // Sends a POST request to the server to create a new post
        const response = await fetch('https://dille.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Includes generatedText in the request body
          body: JSON.stringify({ ...form, generatedText }),
        });

        // If response from server is not okay, throws an error
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || `An error has occurred while handling submit: ${response.status}`);
        }

        await response.json();
        alert('Success');
        // Navigates to the homepage after successful post creation
        navigate('/');
      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      } finally {
        // Sets loading to false after the request is complete
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };

  // Array of age options for the select field
  const ageOptions = [
    "1-3 years",
    "5-8 years",
    "9-12 years",
    "13-15 years",
    "16-18 years",
    "19-22 years",
    "23–28 years",
    "29–34 years",
    "35–40 years",
    "40–50 years",
    "50–60 years",
    "70–80 years",
    "80–90 years",
    "90–100 years",
    "100+ years"
  ];

  // Array of gender options for the select field
  const genderOptions = ['girl', 'boy', 'man', 'woman', 'child', 'adult'];

  // JSX returned by the component
  return (
    // Creates a section for the form
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Share your story</h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>Time to say I'm Sorry. In case you can no longer apologize to the person you have hurt directly, you can do it anonymously within our community.
          <br /><br />
          Please fill out the provided forms. With a little help from AI, we can share your apology anonymously with others.
          To protect your identity, we kindly ask that you do not reveal your full name.
          Additionally, we will create an anonymous photo to accompany your heartfelt apology.
          <br /><br />
          Let it all out. ❤️ Trust us, this will make you feel better. ⭐️
        </p>
      </div>

      {/* Starts the form with a submit event handler */}
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          {/* Form field for entering a name */}
          <FormField
            labelName='How would you like to be named here?'
            type='text'
            name='name'
            placeholder='Ex., Alexander'
            value={form.name}
            handleChange={handleChange}
          />

          {/* Form field for entering the apology */}
          <FormField
            labelName="I want to apologize that..."
            type='text'
            name='prompt'
            placeholder='Ex., Not being there when you needed a friend the most'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          {/* Flex container for gender and age fields */}
          <div className="flex justify-between gap-4">
            {/* Form field for selecting gender */}
            <FormField
              style={{ flexGrow: 1, minWidth: 'calc(50% - 20px)' }}
              labelName="I want to apology a"
              type="select"
              name="gender"
              placeholder="Select Gender"
              value={form.gender}
              handleChange={handleChange}
              options={genderOptions}
            />

            {/* Form field for selecting age */}
            <FormField
              style={{ flexGrow: 1, minWidth: 'calc(50% - 20px)' }}
              labelName="That person was"
              type='select'
              name='age'
              placeholder='Select Age'
              value={form.age}
              handleChange={handleChange}
              options={ageOptions}
            />
          </div>

          {/*  Form field for describing the person to apologize to */}
          <FormField
            labelName='How would you describe the person you want to apologize'
            type='text'
            name='personDescription'
            placeholder='Ex., Cute and kind. They were always there to support me.'
            value={form.personDescription}
            handleChange={handleChange}
          />

          {/*  Form field for entering the country */}
          <FormField
            labelName='Where does this person live?'
            type='text'
            name='country'
            placeholder='Ex., France'
            value={form.country}
            handleChange={handleChange}
          />

          {/*  Button to generate the anonymous image */}
          <button className="mt-5 px-10 py-2 text-white bg-blue-500 rounded-lg focus:outline-none" onClick={generateImage}>
            {generatingImg ? <Loader /> : 'Generate Image'}
          </button>

          {/*  Conditionally rendered image or placeholder */}
          {form.photo ? (
            <img src={form.photo} alt="Generated avatar" className="w-full h-64 object-cover mt-5 rounded-lg" />
          ) : (
            <div className="w-full h-64 bg-gray-200 mt-5 rounded-lg flex justify-center items-center">
              <img src={preview} alt="Placeholder avatar" />
            </div>
          )}

          {/*  Button to submit the form */}
          <button type="submit" className="mt-10 px-10 py-2 text-white bg-blue-500 rounded-lg focus:outline-none">
            {loading ? <Loader /> : 'Publish my apology'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
