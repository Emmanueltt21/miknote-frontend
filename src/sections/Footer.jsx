import React from 'react'
import {fb, yt, insta, twitter } from '../assets/icons'

const Footer = () => {
  return (
   <section className='w-full flex flex-row bg-black text-white justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28'>

    <div className='flex flex-col justify-center items-center gap-2 w-full lg:w-[40%]'>
      <h1 className='text-greem-600 font-bold text-4xl'> MIKI NOTE</h1>
      <p className='text-lg text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur maxime hic totam aliquid nulla ut numquam eum non soluta?</p>

      <div className='flex justify-center items-center gap-4 mt-7 ' id='logos'>
        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-green-600'> 
        <img src={fb} alt="fb icon" width={28} height={28} /></span>

        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-green-600'> 
        <img src={yt} alt="fb icon" width={28} height={28} /></span>

        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-green-600'> 
        <img src={insta} alt="fb icon" width={28} height={28} /></span>

        <span className='bg-white p-2 rounded-full cursor-pointer hover:bg-green-600'> 
        <img src={twitter} alt="fb icon" width={28} height={28} /></span>

        
      </div>
    </div>
    
    <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]'>
      <ul className='flex flex-col justify-center items-start gap-3'> 
      <h1 className='text-xl font-semibold'>PAGES</h1>
      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Home</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Services</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Testimonials</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Pricing</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Contact</li>

      </ul>

    </div>



    <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]'>
      <ul className='flex flex-col justify-center items-start gap-3'> 
      <h1 className='text-xl font-semibold'>PAGES</h1>
      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Home</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Services</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Testimonials</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Pricing</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Contact</li>

      </ul>

    </div>

    

    <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]'>
      <ul className='flex flex-col justify-center items-start gap-3'> 
      <h1 className='text-xl font-semibold'>PAGES</h1>
      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Home</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Services</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Testimonials</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Pricing</li>

      <li className=' text-slate-300 cursor-pointer hover:text-green-300'> Contact</li>

      </ul>

    </div>


   </section>
  )
}

export default Footer