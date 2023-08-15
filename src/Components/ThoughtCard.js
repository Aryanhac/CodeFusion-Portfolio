import React from 'react'
import quat from '../assets/quat.png'

const ThoughtCard = ({data}) => {
  return (
    <div className='flex w-full md:w-[90%] min-h-[400px] m-10 flex-wrap md:mt-0 '>
    { data.no%2 == 0 || window.innerWidth < 768 ?
    (<><div className='w-[100%] md:w-[50%] flex justify-center content-center items-center'>
              <div className='flex flex-col md:w-[80%] w-[90%]'>
                  <div className='bg-cover bg-center w-[50px] h-[40px]' style={{ backgroundImage: `url(${quat})` }}></div>
                  <div className=' md:font-bold md:text-[22px] text-[20px] m-2 my-6'>{data.thought}</div>
                  <div className='text-[#64F4AB] m-2 text-[23px]'>{data.name}</div>
              </div>
          </div><div className='h-[300px] w-[100%] md:w-[50%] flex justify-center'>
                  <div className='w-[60%] bg-cover bg-center h-[100%] rounded-[40px]' style={{ backgroundImage: `url(${data.pic})` }}></div>
              </div></>) :
    (<><div className='w-[100%] md:w-[50%] flex justify-center'>
        <div className='w-[60%] bg-cover bg-center h-[100%] rounded-[40px]'  style={{ backgroundImage:`url(${data.pic})`}} ></div>
    </div>
    <div className='w-[100%] md:w-[50%] flex justify-center content-center items-center'>
             <div className='flex flex-col w-[80%]'>
             <div className='bg-cover bg-center w-[50px] h-[40px]' style={{ backgroundImage: `url(${quat})` }}></div>
                  <div className=' font-bold text-[22px] m-2 my-6'>{data.thought}</div>
                  <div className='text-[#64F4AB] m-2 text-[23px]'>{data.name}</div>
              </div>
</div></>)}
</div>
  )
}

export default ThoughtCard