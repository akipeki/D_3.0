import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LOGO_SORRY_OS } from './assets';
import { Home, CreatePost, About, Apology, Contact, FAQ } from './pages';
import Footer from './components/Footer'

const NotFound = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#1B2828] text-[32px]'>404 Not Found</h1>
        <p className='mt-4 text-[#667e75] text-[16px] max-w-[500px]'>We're sorry, but the page you're looking for could not be found. Please check the URL and try again.</p>
        <Link to='/' className='mt-4 text-[#6469ff] text-[16px] underline'>Go back to Home</Link>
      </div>
    </section>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <div className='innerWrapper'>
        <div className='innerWrapper flex flex-col justify-center px-4 sm:px-0'>
          <header className='w-full flex border-none justify-between items-center bg-white px-4 sm:px-14 lg:px-0 xl:px-0 py-4 border-b border-b-[#e6ebf4]'>

            <Link to='/'>
              <img src={LOGO_SORRY_OS} alt="logo" className="w-40 sm:w-60 md:w-80" />
            </Link>
            <Link to='/create-post' className='font-open-sans font-small
    bg-[#6469ff] text-[14px] md:text-[16px] text-white px-2 py-2 mt-2 md:px-4 md:py-2 rounded-md'>Share your story</Link>
          </header>
          <main className='sm:p-8 px-8 py-8
  w-full bg-[#f8f9fb] min-h-[calc(100vh-280px)]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/about" element={<About />} />
              <Route path="/apology/:id" element={<Apology />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} /> {/* 404 route */}
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
