import React from 'react'
import {call, fb, insta, map, sms, twitter, yt} from '../assets/icons'
import cube from '../assets/images/cube.png'

const Contact = () => {
  return (
   <>
    <section id='contact' className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center'>

      <div className='flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20'>

        <div className='flex justify-center items-start flex-col gap-4 w-full'>
          <h1 className='text-green-600 font-bold text-[35px]'>Contact Info</h1>
         
          <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'> 
          <span className='bg-green-400 p-3 rounded-full'> <img src={call} alt="call" width={22} height={22} /> </span>  +237 677 53 03 18 </div>

          <div id='mail' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'> 
          <span className='bg-green-400 p-3 rounded-full'> <img src={sms} alt="call" width={22} height={22} /> </span>  ttemmanuel2020@gmail.com </div>

          <div id='address' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'> 
          <span className='bg-green-400 p-3 rounded-full'> <img src={map} alt="call" width={22} height={22} /> </span> Kotto, Douala, Cameroon </div>
      
      
        <div id='logos' className='flex justify-center items-center gap-4 mt-10'>
          <span className='bg-green-500 p-3 rounded-full hover:bg-green-600'> 
          <img src={fb} alt="fb icon"  width={25} height={25}/></span>

          <span className='bg-green-500 p-3 rounded-full hover:bg-green-600'> 
          <img src={insta} alt="fb icon"  width={25} height={25}/></span>

          <span className='bg-green-500 p-3 rounded-full hover:bg-green-600'> 
          <img src={yt} alt="fb icon"  width={25} height={25}/></span>

          <span className='bg-green-500 p-3 rounded-full hover:bg-green-600'> 
          <img src={twitter} alt="fb icon"  width={25} height={25}/></span>
          
           </div>
        </div>


        <div className='flex flex-col justify-center items-center gap-2 w-full'>
          <input type="text"  placeholder='Enter your name' className='px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600'/>
          <input type="text"  placeholder='Enter your email' className='px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600'/>
          <textarea type="text"  placeholder='Enter your Message' className='px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600'
          name='' cols='30' rows='5' />
          <button className='bg-green-700 text-white px-4 py-3 w-full rounded-lg hover:bg-black hover:text-white  cursor-pointer'>SUBMIT</button>
        </div>
      </div> 

      <img src={cube} alt="cube" className='w-full h-72 mt-20 absolute top-[3550px] hidden xl:block'/>

    </section>
    
   </>
  )
}

export default Contact