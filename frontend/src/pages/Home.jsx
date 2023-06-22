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
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;
  const pageRangeDisplayed = 5;
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;


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

  const renderPageNumbers = (posts) => {
    if (!posts) return null;

    const pageCount = Math.ceil(posts.length / itemsPerPage);
    if (pageCount === 1) return null;
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i);
    }

    const renderPageNumber = (number) => (
      <button
        key={number}
        onClick={() => setCurrentPage(number)}
        className={`px-2 py-1 mx-1 border border-none rounded-md focus:outline-none ${currentPage === number ? ' text-white bg-[#6469ff] ' : 'text-page-number'}`}


      >
        {number}
      </button>
    );

    let items = [];
    items.push(renderPageNumber(1));
    if (currentPage > 2 + pageRangeDisplayed) {
      items.push(<span key='ellipsis-1' className='px-2 py-1 mx-1 '>...</span>);
    }
    for (let i = Math.max(2, currentPage - pageRangeDisplayed); i <= Math.min(pageCount - 1, currentPage + pageRangeDisplayed); i++) {
      items.push(renderPageNumber(i));
    }
    if (currentPage < pageCount - 1 - pageRangeDisplayed) {
      items.push(<span key='ellipsis-2' className='px-2 py-1 mx-1'>...</span>);
    }
    if (pageCount > 1) {
      items.push(renderPageNumber(pageCount));
    }
    return items;
  };

  console.log(currentPage)
  console.log(allPosts, searchedResults)

  // Render the Home component
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#1B2828] text-[32px]'>The Community Showcase</h1>
        <p className='mt-4 text-[#667e75] text-[16px] max-w-[500px]'>Discover sincere apologies from our community. These stories are meaningful and intimate, highlighting the significance of speaking up. We employ cutting-edge technology (ChatGTP + DALL-E + code) to ensure your voice remains anonymous, yet visible.
          <br /><br />
          If circumstances permit, we encourage you to offer your apologies directly to the person you have hurt. If you can't do that, may this platform provide solace as you navigate the path towards healing.</p>
      </div>

      <div className='mt-8 pt-2'>
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
              <h2 className='font-medium text-[#667e75] text-xl mb-3'>
                Showing Resuls for <span className='text-[#1B2828]'>{searchText}</span>:
              </h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {/* Render cards based on whether search text is present */}
              {
                searchText ? (
                  <RenderCards
                    data={searchedResults?.slice(indexOfFirstPost, indexOfLastPost) ?? []}
                    title='No Search Results Found'
                  />
                ) : (
                  <RenderCards
                    data={allPosts?.slice(indexOfFirstPost, indexOfLastPost) ?? []}
                    title='No Posts Yet'
                  />
                )
              }
            </div>
            <div className='flex justify-center items-center mt-12'>
              <button
                style={{ fontSize: '20px ', color: '#667e75', }}
                className={`px-2 py-1 mx-1 border border-none rounded-md focus:outline-none ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              >
                {'<'}
              </button>

              {searchText ? renderPageNumbers(searchedResults) : renderPageNumbers(allPosts)}

              <button
                style={{ fontSize: '20px', color: '#667e75', }}
                className={`text-#667e75 px-2 py-1 mx-1 border border-none rounded-md focus:outline-none ${currentPage === (searchText ? Math.ceil(searchedResults.length / itemsPerPage) : Math.ceil(allPosts.length / itemsPerPage)) ? 'cursor-not-allowed' : ''}`}
                onClick={() => setCurrentPage((page) => Math.min(page + 1, (searchText ? Math.ceil(searchedResults.length / itemsPerPage) : Math.ceil(allPosts.length / itemsPerPage))))}
              >
                {'>'}
              </button>
            </div>

          </>
        )}
      </div>
    </section>
  );
};

// Export the Home component
export default Home;
