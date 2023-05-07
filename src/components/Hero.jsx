import React from 'react'
import animimg from '../images/icon-animation.svg'
import desigimg from '../images/icon-design.svg'
import photoimg from '../images/icon-photography.svg'
import crypimg from '../images/icon-crypto.svg'
import bussimg from '../images/icon-business.svg'
const Hero = () => {
  return (
    <div className='min-h-screen herogradient mt-10 md:mt-64 pb-36'>

     <div className='footerwdth grid-cols-1 gap-x-7 gap-y-20 grid lg:grid-cols-3 md:grid-cols-2 '>
        
         <div className='cardbggradient gap-6 md:gap-0 relative md:h-[300px] px-8 py-12 rounded-xl flex flex-col justify-between items-start  shadow-2xl shadow-[#F1F2FF]'>
          <h1 className='font-bold text-xl md:text-4xl md:leading-[45px] text-white '>Check out our most popular course!</h1>
          
         </div>
         <div className='bg-white gap-6 md:gap-6 relative md:h-[300px] px-8 py-12 rounded-xl flex flex-col justify-between items-start  shadow-2xl shadow-[#F1F2FF]'>
          <h1 className='font-bold text-xl md:text-2xl text-[#13183F]'>Animation</h1>
          <p className='text-[#83869A] text-lg  md:text-xl'>Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
          <a className='text-red-500 font-semibold hover:opacity-50 text-md md:text-xl' href="#">Get Started</a>
          <img className='absolute -top-7 left-8' src={animimg} alt="" />
         </div>
        
         <div className='bg-white gap-6 md:gap-6 relative md:h-[300px] px-8 py-12 rounded-xl flex flex-col justify-between items-start  shadow-2xl shadow-[#F1F2FF]'>
          <h1 className='font-bold text-xl md:text-2xl text-[#13183F]'>Design</h1>
          <p className='text-[#83869A] text-lg  md:text-xl'>Create beautiful, usable interfaces to help shape the future of how the web looks.</p>
          <a className='text-red-500 text-md font-semibold hover:opacity-50 md:text-xl' href="#">Get Started</a>
          <img className='absolute -top-7 left-8' src={desigimg} alt="" />
         </div>
         <div className='bg-white gap-6 md:gap-6 relative md:h-[300px] px-8 py-12 rounded-xl flex flex-col justify-between items-start  shadow-2xl shadow-[#F1F2FF]'>
          <h1 className='font-bold text-xl md:text-2xl text-[#13183F]'>Photography</h1>
          <p className='text-[#83869A] text-lg  md:text-xl'>Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.</p>
          <a className='text-red-500 font-semibold hover:opacity-50 text-md md:text-xl' href="#">Get Started</a>
          <img className='absolute -top-7 left-8' src={photoimg} alt="" />
         </div>
         <div className='bg-white gap-6 md:gap-6 relative md:h-[300px] px-8 py-12 rounded-xl flex flex-col justify-between items-start  shadow-2xl shadow-[#F1F2FF]'>
          <h1 className='font-bold text-xl md:text-2xl text-[#13183F]'>Crypto</h1>
          <p className='text-[#83869A] text-lg  md:text-xl'>All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.</p>
          <a className='text-red-500 font-semibold hover:opacity-50 text-md md:text-xl' href="#">Get Started</a>
          <img className='absolute -top-7 left-8' src={crypimg} alt="" />
         </div>
         <div className='bg-white gap-6 md:gap-6 relative md:h-[300px] px-8 py-12 rounded-xl flex flex-col justify-between items-start  shadow-2xl shadow-[#F1F2FF]'>
          <h1 className='font-bold text-xl md:text-2xl text-[#13183F]'>Business</h1>
          <p className='text-[#83869A] text-lg  md:text-xl'>A step-by-step playbook to help you start, scale, and sustain your business without outside investment.</p>
          <a className='text-red-500 text-md md:text-xl font-semibold hover:opacity-50 ' href="#">Get Started</a>
          <img className='absolute -top-7 left-8' src={bussimg} alt="" />
         </div>
         
         
         
        
         
     </div>

    </div>
  )
}

export default Hero