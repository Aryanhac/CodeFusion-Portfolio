import React from 'react' 
const ProjectCard = ({data}) => {
  return (
    <div className='flex w-full md:w-[90%] min-h-[400px] m-10 flex-wrap '>
        { data.no%2 !== 0 || window.innerWidth < 768 ?
        (<><div className='w-full md:w-[50%] flex justify-center content-center items-center mb-10 md:mb-0'>
                  <div className='flex flex-col md:w-[80%] w-[90%] '>
                      <div className='text-[#64F4AB] text-[23px] m-2'>-- Project{data.no}</div>
                      <div className=' font-bold text-[30px] m-2'>{data.title}</div>
                      <div className='m-2 text-[20px]'>{data.about}</div>
                  </div>
              </div>
              <div className='w-full h-[350px] md:w-[50%] flex justify-center'>
                      <div className='w-[80%] bg-cover bg-center h-[100%] rounded-[40px]' style={{ backgroundImage: `url(${data.pic})` }}></div>
                  </div></>) :
        (<><div className='w-full h-[350px]   md:w-[50%] flex justify-center'>
            <div className='w-[80%] bg-cover bg-center h-[100%] rounded-[40px]'  style={{ backgroundImage:`url(${data.pic})`}} ></div>
        </div>
        <div className='w-full md:w-[50%] flex justify-center content-center items-center'>
        <div className='flex flex-col w-[80%]'>
         <div className='text-[#64F4AB] text-[23px] m-2'>-- Project{data.no}</div>
         <div className=' font-bold text-[30px] m-2'>{data.title}</div>
         <div className='m-2 text-[20px]'>{data.about}</div>
        </div>
    </div></>)}
    </div>
  )
}

export default ProjectCard