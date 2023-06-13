// Importing necessary packages and components
import React, { useEffect, useState } from 'react';
import { Card, FormField, Loader } from '../components';

// A function component that takes in data and title as props to render the cards or display a message
const RenderCards = ({ data, title }) => {
  // If data is present, map over it and create Card components
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  // If no data is present, display a message
  return (
    <h2 className='mt-5 font-bold text-[#6469ff] text-xl uppercase'>{title}</h2>
  );
};

// The Home component that displays all posts and a search bar
const Home = () => {
  // Use state to keep track of the loading status, all posts, search text and results, and the search timeout
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  // Function to fetch posts from the server
  const fetchPosts = async () => {
    setLoading(true);  // Set loading to true at the beginning of fetch

    try {
      // Fetch data from the server
      const response = await fetch('https://dille.onrender.com/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check for server errors
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || `An error has occurred while fetching: ${response.status}`);
      }

      // Parse the response data and update allPosts state
      const result = await response.json();
      setAllPosts(result.data.reverse());
    } catch (err) {
      // Alert the user if an error occurred
      alert(`Fetch error: ${err.message}`);
    } finally {
      setLoading(false);  // Set loading to false at the end of fetch
    }
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Handler for search input change
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);  // Clear the previous timeout on each input change
    setSearchText(e.target.value);  // Update the search text state

    // Set a timeout to filter the posts after a delay
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);  // Update the search results state
      }, 500),
    );
  };

  // Render the Home component
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
      </div>

      <div className='mt-16'>
        {/* Search field */}
        <FormField
          labelName='Search posts'
          type='text'
          name='text'
          placeholder='Search something...'
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className='mt-10'>
        {/* Show a loader when loading */}
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
            {/* Show a heading if search text is present */}
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing Resuls for <span className='text-[#222328]'>{searchText}</span>:
              </h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {/* Render cards based on whether search text is present */}
              {searchText ? (
                <RenderCards
                  data={searchedResults}  // Show search results if search text is present
                  title='No Search Results Found'
                />
              ) : (
                <RenderCards
                  data={allPosts}  // Show all posts if no search text is present
                  title='No Posts Yet'
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

// Export the Home component
export default Home;
