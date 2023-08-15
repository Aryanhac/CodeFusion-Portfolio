import React from 'react'

const Statics = () => {
  return (
    <div className='bg-[rgb(84,89,95)] flex min-h-[500px] items-center justify-around md:px-[100px] flex-wrap'>
        <div className=' bg-[#25262A] md:rounded-tl-[50px] rounded-tl-[50px] rounded-tr-[50px] md:rounded-bl-[50px] w-[80%] md:w-[280px] h-[300px] flex flex-col justify-center items-center mb-4 mt-[150px] md:mt-0'>
            <div className='text-[80px] font-bold text-[#64F4AB] '>20+</div>
            <div className='text-[30px] font-semibold text-white '>Happy Client</div>
        </div>

        <div className=' bg-[#25262A]  w-[80%] md:w-[280px] h-[300px] flex flex-col justify-center items-center mb-4'>
            <div className='text-[80px] font-bold text-[#64F4AB] '>32</div>
            <div className='text-[30px] font-semibold text-white '>Projects Done</div>
        </div>

        <div className=' bg-[#25262A] w-[80%] md:w-[280px] h-[300px] flex flex-col justify-center items-center mb-4'>
            <div className='text-[80px] font-bold text-[#64F4AB] '>23</div>
            <div className='text-[30px] font-semibold text-white '>Top Reviews</div>
        </div>

        <div className=' bg-[#25262A] md:rounded-tr-[50px] rounded-bl-[50px] rounded-br-[50px] w-[80%] md:w-[280px] h-[300px] flex flex-col justify-center items-center'>
            <div className='text-[80px] font-bold text-[#64F4AB] '>26</div>
            <div className='text-[30px] font-semibold text-white '>Month Experience</div>
        </div>
    </div>
  )
}

export default Statics