import React from 'react'
import desktopimg from '../images/image-hero-desktop.png'
import tabletimg from '../images/image-hero-tablet.png'
import mobileimg from '../images/image-hero-mobile@2x.png'
const Header = () => {
  return (
    <div className='min-h-screen   md:mb-32 '>
      
      <div className='footerwdth'>
      <div className='flex py-6 items-center  justify-between'>
           <h2 className='font-bold text-3xl md:text-4xl'>skilled</h2>
           <button className='hover:bg-[#666CA3] btngradient text-white rounded-full md:px-8  px-4 md:py-[13px] py-[10px] text-md md:text-lg font-bold'>Get Started</button>
      </div>
      <div className='flex flex-col mt-6 md:mt-28 md:flex-row justify-between items-center'>
         <div className='flex md:max-w-[350px] lg:max-w-[500px] flex-col gap-4 lg:gap-10 items-start'>
             <h1  className='font-bold text-4xl lg:leading-[70px] text-[#13183F] md:text-4xl lg:text-6xl'>Maximize skill, minimize budget</h1>
             <p className='text-gray-500 lg:leading-[30px] font-[400]'>Our modern courses across range of in-demand skills will give you the knowledge you need to live the life you want.</p>
             <button className=' cardbggradient text-white rounded-full lg:px-8  px-4 lg:py-[16px] py-[10px] text-md lg:text-lg font-bold hover:opacity-50'>Get Started</button>
         </div>
         <div>
             <img className='sd:hidden' src={mobileimg} alt="" />
         </div>
      </div>
      </div>
      <img className='absolute -z-[1] hidden lg:block -top-[10%] -right-[30%]' src={desktopimg} alt="" />
      <img className='absolute -z-[1] hidden sd:block  lg:hidden -top-[3%] -right-[25%]' src={tabletimg} alt="" />
         
    </div>
  )
}

export default Header