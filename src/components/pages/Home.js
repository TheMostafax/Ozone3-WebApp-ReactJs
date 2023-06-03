import React from 'react';
import Typical from 'react-typical'
const Home = () => {
  return (
    
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-violet-500'>

      
   
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
       
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          Welcome To Ozone3!<Typical
        steps={['Singing', 1000, 'Acting', 1000, 'Recording', 1000]}
        loop={Infinity}
        wrapper="p"
      />
        </h1>
        
        <p className='text-[#000000] py-4 max-w-[700px] text-2xl'>
        What are you waiting for ?
        </p>
        <div className='inline-flex rounded-md shadow-sm'>
          <button className='text-white group border-2 px-6 py-3 my-2 mr-4 flex items-center hover:bg-fuchsia-50 hover:border-fuchsia-50 hover:text-black'>
          <a id
          href="https://www.instagram.com/ozone3.studios/"  >Instagram</a>
          </button>
          <div>
          <button className='text-white  border-2 px-6 py-3 my-2 flex items-center bg-pink-600 hover:border-yellow-200 hover:bg-blue-500 hover:text-black'>
          <a id
          href="https://www.tiktok.com/@ozone.studios"  >TikTok </a>
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
