import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo, LOGO_SORRY_OS } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white
  sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src={LOGO_SORRY_OS} alt="logo" className='w-80 pb-4 object-contain' />
        </Link>
        <Link to='/create-post' className='font-open-sans font-small
    bg-[#6469ff] text-white px-4 py-2 rounded-md'>Share your story</Link>
      </header>
      <main className='sm:p-8 px-4 py-8
  w-full bg-[#f8f9fb] min-h-[calc(100vh-105px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <footer className='w-full flex justify-center items-center  bg-[#f8f9fb]
  sm:px-8 px-6 py-4 border-b border-b-[#f8f9fb]'>
        <Link to='/'>
          <img src={logo} alt="logo" className='w-24 pt-4 pb-8 object-contain flex justify-center items-center' />
        </Link>
      </footer>
    </BrowserRouter>
  )
}

export default App

