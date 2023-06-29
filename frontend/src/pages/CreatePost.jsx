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
    tone: '',
    relationship: '',
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
  const [generating, setGenerating] = useState(false);
  const [sharing, setSharing] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };


  const generateMessage = async (prompt, tone, age, relationship, gender) => {
    if (prompt && tone && age && relationship && gender) {
      try {
        const response = await fetch('https://dille.onrender.com/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: `As a ${tone} ${relationship}, your task is to create a ${tone} apology within 4-5 sentences.
            Your language should be straightforward and understandable.
            Your apology should express deep regret and a plea for forgiveness.
            Base your apology on this statement: [ ${prompt} ].
            You're addressing an individual who is ${age} years old and of ${gender},
            and you're their ${relationship}. Please do not include any personal names or greetings/closings.
            The aim should be solely to offer a sincere apology.
            Before giving your answer, analyze the ${prompt}, ${tone}, and ${relationship} 
            to consider the seriousness of the issue and adjust your tone and language accordingly.
            If you notice the text is written in any language other than English, translate it to English.`,
          }),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || `An error has occurred while generating message: ${response.status}`);
        }

        const data = await response.json();
        setGeneratedText(data.content);
      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      }
    } else {
      alert('Please provide a story to apologize, and fill in all the information needed.');
    }
  };



  const generateImage = async () => {
    if (form.prompt && form.gender && form.age) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://dille.onrender.com/api/v1/dalle', {
          method: 'POST',
          body: JSON.stringify({
            prompt: `Striking black and white eye-level closeup of a ${form.age} year old fragile ${form.gender} from ${form.country}. Photo shot width leica using 80mm lens. Aperture: 2.8. Saturation: 0. Kodak 800 Tri-x grains. The subject's face is uniquely asymmetric and is often described as ${form.personDescription}. Avoid artificial sharpening of the eyes. The overall impression should be that they could break into tears at any moment. Place model always in the middle of the photo. Photo taken in teh eye-level.`,

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

        await generateMessage(form.prompt, form.gender, form.age, form.country, form.personDescription);

      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper details');
    }
  };

  const handleGenerate = async () => {
    if (form.name && form.prompt && form.gender && form.age && form.country && form.tone && form.relationship) {
      setGenerating(true);
      setLoading(true);
      try {
        // Only generate the image if it hasn't been generated yet
        if (!form.photo) {
          await generateImage();
        }

        // Only generate the GPT-3 response if a photo was successfully created
        if (form.photo && !generatedText) {
          const generatedTextResponse = await getGPT3Response(form.prompt); // changed from form.content

          // Update the generatedText state with the result
          setGeneratedText(generatedTextResponse);
        }
      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      } finally {
        setGenerating(false);
        setLoading(false);

      }
    } else {
      alert('Please provide complete details');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name && form.prompt && form.photo && generatedText) {
      setSharing(true);
      setLoading(true);
      try {
        const response = await fetch('https://dille.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form, generatedText: generatedText }), // include generated text in the form
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || `An error has occurred while generating an image: ${response.status}`);
        }

        await response.json();
        alert('Success');
        navigate('/'); // Navigate to the root route after successful form submission
      } catch (err) {
        alert(`Fetch error: ${err.message}`);
      } finally {
        setSharing(false);
        setLoading(false);
      }
    } else {
      alert('Please generate image and text first');
    }
  };




  const ageOptions = [
    "1-3 years",
    "4-8 years",
    "9-12 years",
    "13-15 years",
    "16-18 years",
    "19-22 years",
    "23–28 years",
    "29–34 years",
    "35–40 years",
    "41–50 years",
    "51–60 years",
    "61–70 years",
    "71–80 years",
    "81–90 years",
    "91–100 years",
    "100+ years"
  ];

  const genderOptions = ['girl', 'boy', 'man', 'woman', 'child', 'adult'];

  const toneOptions = [
    "Serious",
    "Formal",
    "Casual",
    "Dramatic",
    "Regretful",
    "Depressed",
    "Heartfelt",
    "Comforting",
    "Hopeful",
    "Hysteric",
    "Empathetic",
  ];

  const relationshipOptions = [
    "Friend",
    "Son",
    "Daughter",
    "Child",
    "Father",
    "Mother",
    "Parent",
    "Grandparent",
    "Grandchild",
    "Relative",
    "Co-worker",
    "Classmate",
    "Acquaintance",
    "Neighbor",
    "Partner",
    "Ex-partner",
    "Lover",
    "Ex-Lover",
    "Mentor",
    "Mentee",
    "Sibling",
    "Special Connection",
    "Fellow human being",
  ];

  return (
    <section className='max-w-7xl sm:mx-6 lg:mx-10 mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Share your story</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Time to say I'm Sorry. In case you can no longer apologize to the person you have hurt directly, you can do it anonymously within our community.
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

          <div className="flex justify-between gap-4">
            <FormField
              style={{ flexGrow: 1, minWidth: 'calc(50% - 20px)' }}
              labelName="I want to apology a"
              type="select"
              name="gender"
              placeholder="Gender"
              value={form.gender}
              handleChange={handleChange}
              options={genderOptions}
            />


            <FormField
              style={{ flexGrow: 1, minWidth: 'calc(50% - 20px)' }}
              labelName="That person was"
              type='select'
              name='age'
              placeholder='Age'
              value={form.age}
              handleChange={handleChange}
              options={ageOptions}
            />

          </div>

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
              labelName="Tone of Apology"
              type="select"
              name="tone"
              placeholder="Tone"
              value={form.tone}
              handleChange={handleChange}
              options={toneOptions}
            />

            <FormField
              style={{ flexGrow: 1, minWidth: 'calc(50% - 20px)' }}
              labelName="Your Relationship"
              type="select"
              name="relationship"
              placeholder="Relationship"
              value={form.relationship}
              handleChange={handleChange}
              options={relationshipOptions}
            />
          </div>

          <FormField
            labelName='Description of the Person'
            type='text'
            name='personDescription'
            placeholder='Ex., Cute and kind. Friendly eyes. Always helping for others.'
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

          <div className='relative bg-[#fcfcfc] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.content}
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
              <div className='absolute inset-0 z-0 flex border border-none justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader />
              </div>
            )}
          </div>
        </div>


        <div className='mt-5'>
          <p className='mt-2 text-[#666e75] text-[16px] pb-8'>
            {generatedText}
          </p>

          {(!form.photo || !generatedText) && (
            <button
              type='button'
              onClick={handleGenerate}
              className=' text-white text-[16px] bg-[green] font-medium rounded-md w-full sm:w-auto px-5 py-2.5 text-center'
            >
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
          )}

        </div>

        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>** Once you have created the content you want, you can share it with others in the community **</p>
          <button
            type='submit'
            className='mt-3 mb-3 text-white bg-[#6469ff] font-medium rounded-md text-[16px] w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {loading ? 'Sharing... with the Community' : 'Share with the Community'}
          </button>
        </div>
      </form>
    </section >
  );
};

export default CreatePost;