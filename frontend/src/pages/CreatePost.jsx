import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
    gender: '',
    age: '',
    country: '',
    personDescription: '',
  });

  const getGPT3Response = async (prompt) => {
    try {
      // Make a request to your GPT-3 endpoint, passing the prompt
      const response = await fetch('https://dille.onrender.com/api/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate GPT-3 response');
      }

      // Assume that your GPT-3 API returns a JSON with the generated text in the 'text' field
      const data = await response.json();
      return data.text;
    } catch (err) {
      console.error(err);
      return '';
    }
  };


  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = async () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
    await generateMessage(randomPrompt);
  };

  const generateMessage = async (prompt) => {
    if (prompt) {
      try {
        const response = await fetch('https://dille.onrender.com/api/v1/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: `You are a talented author with skills to touch people with short texts.
            Create a touching apology using min 100 tokens/max 200 tokens. Keep the language and vocabulary simple,
             honest, and straight. Start your story with a straight apology: Something like "I'm sorry", "I want to apologize to you",
              or something similar. Use this text as your reference for the touching text you create: ${prompt}`,
          }),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || `An error has occurred while generating message: ${response.status}`);
        }

        const data = await response.json();
        setForm({ ...form, prompt: data });
        setGeneratedText(data);
      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      }
    } else {
      alert('Please provide a story to apologize');
    }
  };

  const generateImage = async () => {
    if (form.prompt && form.gender && form.age) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://dille.onrender.com/api/v1/dalle', {
          method: 'POST',
          body: JSON.stringify({
            prompt: `Striking black and white eye-level closeup of a ${form.age} year old fragile ${form.gender} from ${form.country}. Saturation: 0. Kodak Tri-x grains... ${form.personDescription}`,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || `An error has occurred while generating an image: ${response.status}`);
        }

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });

        await generateMessage(form.prompt);

      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper details');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo && form.gender && form.age && form.country) {
      setLoading(true);
      try {
        // Generate GPT-3 response for the prompt
        const generatedText = await getGPT3Response(form.prompt);

        const response = await fetch('https://dille.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Include generatedText in the request body
          body: JSON.stringify({ ...form, generatedText }),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || `An error has occurred while handling submit: ${response.status}`);
        }

        await response.json();
        alert('Success');
        navigate('/');
      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };


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

  const genderOptions = ['girl', 'boy', 'man', 'woman', 'child', 'adult'];

  return (
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

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName='How would you like to be named here?'
            type='text'
            name='name'
            placeholder='Ex., Alexander'
            value={form.name}
            handleChange={handleChange}
          />

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

          <div className="flex justify-between gap-4">
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

          <FormField
            labelName='How would you describe the person you want to apologize'
            type='text'
            name='personDescription'
            placeholder='Ex., Cute and kind. Friendly eyes, curly hair. Always helping for others.'
            value={form.personDescription}
            handleChange={handleChange}
          />

          <FormField
            labelName='City and country where did this happen?'
            type='text'
            name='country'
            placeholder='Ex., Helsinki, Finland'
            value={form.country}
            handleChange={handleChange}
          />

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'
              />
            ) : (
              <img
                src={preview}
                alt='preview'
                className='w-9/12 h-9/12 object-contain opacity-40'
              />
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <p className='mt-2 text-[#666e75] text-[14px]'>
            {generatedText}
          </p>
          <button
            type='button'
            onClick={generateImage}
            className=' text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type='submit'
            className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>
    </section >
  );
};

export default CreatePost;